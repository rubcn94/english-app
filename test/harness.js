'use strict';
// Loads data/blue.js, data/green.js, data/vocab.js, data/templates.js and
// app.js into a FRESH vm context for every call to load() — never reuse a
// context between tests, so state.progress/state.known/localStorage from
// one spec can never leak into another. Each file is run with its own
// `filename` so `const BLUE_DATA` / `const GREEN_DATA` don't collide
// across separate vm.runInContext calls in the same context (they would
// under plain `eval`-style execution without distinct filenames).

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { createDom } = require('./dom-shim');

const APP_DIR = path.resolve(__dirname, '..');
const DATA_FILES = ['data/blue.js', 'data/green.js', 'data/vocab.js', 'data/templates.js'];

function load() {
  const { document, localStorage, window } = createDom();
  const ctx = {
    document, localStorage, window,
    console, Math, Date, JSON,
    setTimeout: window.setTimeout, clearTimeout: window.clearTimeout,
    alert: window.alert, confirm: window.confirm,
  };
  vm.createContext(ctx);

  DATA_FILES.forEach(f => {
    vm.runInContext(fs.readFileSync(path.join(APP_DIR, f), 'utf8'), ctx, { filename: f });
  });
  vm.runInContext(fs.readFileSync(path.join(APP_DIR, 'app.js'), 'utf8'), ctx, { filename: 'app.js' });

  return new Harness(ctx, document, localStorage);
}

// Thin wrapper over the vm context exposing the handful of operations
// every spec needs: run arbitrary app.js code, read app.js state, and
// drive full study/level-test flows without each spec reimplementing the
// click-the-right-button loop from scratch.
class Harness {
  constructor(ctx, document, localStorage) {
    this.ctx = ctx;
    this.document = document;
    this.localStorage = localStorage;
  }

  // Runs `code` as a statement/expression inside the loaded app.js context
  // and returns its value. Prefer the named helpers below where they exist;
  // use this for one-off reads (e.g. `run('state.known')`).
  run(code) { return vm.runInContext(code, this.ctx); }

  call(fnName, ...args) {
    this.ctx.__args = args;
    const argRefs = args.map((_, i) => `__args[${i}]`).join(', ');
    return vm.runInContext(`${fnName}(${argRefs})`, this.ctx);
  }

  activeScreenId() {
    const active = this.document.querySelectorAll('.screen').find(s => s.classList.contains('active'));
    return active ? active.id : null;
  }

  // Reads a card by id from any book (blue/green/vocab) — for asserting
  // against a specific card's blanks/answer/back in a spec without
  // duplicating getData()'s book-name switch.
  getCard(id) {
    return this.run(`
      (function() {
        const all = getAllCardsAllBooks();
        return all.find(c => c.id === ${JSON.stringify(id)}) || null;
      })()
    `);
  }

  allCards(book) { return this.run(`getAllCards(${JSON.stringify(book)})`); }
  getData(book) { return this.run(`getData(${JSON.stringify(book)})`); }

  // ── Blocked study driving ────────────────────────────────────────────
  // Clicks through every theory card in the current block (Next -> ... ->
  // Start practice) until the practice phase begins.
  driveTheoryPass() {
    let guard = 0;
    while (!this.document.getElementById('phase-theory').classList.contains('hidden')) {
      if (++guard > 2000) throw new Error('driveTheoryPass: exceeded 2000 steps — likely stuck (theory phase never hid)');
      this.call('nextTheoryCard');
    }
  }

  // Answers the currently-loaded practice card. `strategy` is 'correct' or
  // 'wrong' (default 'correct'). Works across all three answer shapes:
  // plain multiple choice (#input-area), multi-blank combined choice
  // (#multi-blank-area), and free-text (#freetext-area). Returns
  // { cardId, wasMulti, wasFreeText, picked }.
  answerCurrentCard(strategy) {
    strategy = strategy || 'correct';
    const card = this.run('state.blockQueue[0]');
    if (!card) throw new Error('answerCurrentCard: no card at state.blockQueue[0]');

    if (card.freeText) {
      const answer = strategy === 'correct'
        ? this.run(`getReadableAnswer(${JSON.stringify(card)})`)
        : '___definitely_wrong___';
      this.document.getElementById('answer-input').value = answer;
      this.call('submitFreeTextAnswer');
      return { cardId: card.id, wasMulti: false, wasFreeText: true, picked: answer };
    }

    if (this.run(`hasBlanks(${JSON.stringify(card)})`)) {
      const area = this.document.getElementById('multi-blank-area');
      const btns = area.querySelectorAll('.dynamic-choice-btn');
      if (btns.length === 0) throw new Error(`answerCurrentCard: no multi-blank choice buttons rendered for card ${card.id}`);
      const correctText = card.blanks.map(b => b.split(' / ')[0].trim()).join(' / ');
      const target = strategy === 'correct'
        ? btns.find(b => b.textContent === correctText)
        : btns.find(b => b.textContent !== correctText) || btns[0];
      if (!target) throw new Error(`answerCurrentCard: correct combined option not found among rendered choices for ${card.id}`);
      target.click();
      return { cardId: card.id, wasMulti: true, wasFreeText: false, picked: target.textContent };
    }

    const area = this.document.getElementById('input-area');
    const btns = area.querySelectorAll('.dynamic-choice-btn');
    if (btns.length === 0) throw new Error(`answerCurrentCard: no choice buttons rendered for card ${card.id}`);
    const correctDisplay = this.run(`getReadableAnswer(${JSON.stringify(card)})`);
    const target = strategy === 'correct'
      ? btns.find(b => this.run(`normalise(${JSON.stringify(b.textContent)})`) === this.run(`normalise(${JSON.stringify(correctDisplay)})`))
      : btns.find(b => b.textContent !== correctDisplay) || btns[0];
    if (!target) throw new Error(`answerCurrentCard: correct option not found among rendered choices for ${card.id} (options: ${btns.map(b => b.textContent).join(' | ')})`);
    target.click();
    return { cardId: card.id, wasMulti: false, wasFreeText: false, picked: target.textContent };
  }

  // Rates the just-answered card (SM-2 rating 0/1/3/5) and advances.
  rate(rating) { this.call('rateCard', rating); }

  // Drives a full blocked-study session to completion (theory -> practice,
  // repeated per block, until back at 'screen-summary'). `strategy` can be
  // a fixed 'correct'/'wrong', or a function (cardId, index) => 'correct'|'wrong'
  // for mixed-outcome tests. Returns { steps, answers: [...] }.
  runFullBlockedStudy(strategy) {
    const answers = [];
    let guard = 0;
    while (this.activeScreenId() === 'screen-study') {
      if (++guard > 5000) throw new Error('runFullBlockedStudy: exceeded 5000 steps — likely an infinite requeue loop');

      const theoryHidden = this.document.getElementById('phase-theory').classList.contains('hidden');
      if (!theoryHidden) { this.driveTheoryPass(); continue; }

      const queueLen = this.run('state.blockQueue.length');
      if (queueLen === 0) continue; // finishCurrentBlock() will fire on next loadCard(); shouldn't normally observe this

      const pick = typeof strategy === 'function' ? strategy(this.run('state.blockQueue[0].id'), answers.length) : (strategy || 'correct');
      const result = this.answerCurrentCard(pick);
      answers.push({ ...result, strategy: pick });
      // Always rate "Good" (3) — SM-2 rating is orthogonal to whether the
      // typed/picked answer was right (see app.js rateCard commentary);
      // specs that care about SM-2 rating itself test sm2()/rateCard()
      // directly instead of through this driver.
      this.rate(3);
    }
    return { steps: guard, answers };
  }

  // ── Level test driving ───────────────────────────────────────────────
  // Answers whatever's currently loaded in the level test screen, across
  // all item kinds (dynamic w/ options, dynamic gap-fill, freeText, multi-
  // blank, single choice). Returns 'correct' | 'wrong' (what was picked).
  answerCurrentLevelTestItem(strategy) {
    strategy = strategy || 'correct';
    const item = this.run('levelTestState.queue[levelTestState.index]');
    if (!item) throw new Error('answerCurrentLevelTestItem: no item at current index');
    const exercise = this.run('levelTestState.exercise');

    if (exercise) {
      const area = this.document.getElementById('leveltest-input-area');
      const btns = area.querySelectorAll('.dynamic-choice-btn');
      if (btns.length === 0) throw new Error('answerCurrentLevelTestItem: no dynamic-exercise choice buttons rendered');
      const target = strategy === 'correct'
        ? btns.find(b => this.run(`normalise(${JSON.stringify(b.textContent)})`) === this.run(`normalise(${JSON.stringify(exercise.correct)})`))
        : btns.find(b => b.textContent !== exercise.correct) || btns[0];
      if (!target) throw new Error('answerCurrentLevelTestItem: correct dynamic-exercise option not found');
      target.click();
      return strategy;
    }

    if (item.card.freeText) {
      const answer = strategy === 'correct'
        ? this.run(`getReadableAnswer(${JSON.stringify(item.card)})`)
        : '___definitely_wrong___';
      this.document.getElementById('leveltest-answer-input').value = answer;
      this.call('submitLevelTestFreeTextAnswer');
      return strategy;
    }

    if (this.run(`hasBlanks(${JSON.stringify(item.card)})`)) {
      const area = this.document.getElementById('leveltest-multi-blank-area');
      const btns = area.querySelectorAll('.dynamic-choice-btn');
      if (btns.length === 0) throw new Error(`answerCurrentLevelTestItem: no multi-blank choice buttons for ${item.card.id}`);
      const correctText = item.card.blanks.map(b => b.split(' / ')[0].trim()).join(' / ');
      const target = strategy === 'correct'
        ? btns.find(b => b.textContent === correctText)
        : btns.find(b => b.textContent !== correctText) || btns[0];
      if (!target) throw new Error(`answerCurrentLevelTestItem: correct combo not found for ${item.card.id}`);
      target.click();
      return strategy;
    }

    const area = this.document.getElementById('leveltest-input-area');
    const btns = area.querySelectorAll('.dynamic-choice-btn');
    if (btns.length === 0) throw new Error(`answerCurrentLevelTestItem: no choice buttons for ${item.card.id}`);
    const correctDisplay = this.run(`getReadableAnswer(${JSON.stringify(item.card)})`);
    const target = strategy === 'correct'
      ? btns.find(b => this.run(`normalise(${JSON.stringify(b.textContent)})`) === this.run(`normalise(${JSON.stringify(correctDisplay)})`))
      : btns.find(b => b.textContent !== correctDisplay) || btns[0];
    if (!target) throw new Error(`answerCurrentLevelTestItem: correct option not found for ${item.card.id}`);
    target.click();
    return strategy;
  }

  // Drives the full level test to completion. `strategy` is 'correct',
  // 'wrong', or a function(index) => 'correct'|'wrong'. Returns
  // { steps, total, correct } read back from levelTestState after finish.
  runFullLevelTest(strategy) {
    this.call('startLevelTest');
    let guard = 0;
    while (this.activeScreenId() === 'screen-leveltest-study') {
      if (++guard > 1000) throw new Error('runFullLevelTest: exceeded 1000 steps — likely stuck');
      const pick = typeof strategy === 'function' ? strategy(guard - 1) : (strategy || 'correct');
      this.answerCurrentLevelTestItem(pick);
      this.call('nextLevelTestExercise');
    }
    return {
      steps: guard,
      total: this.run('levelTestState.total'),
      correct: this.run('levelTestState.correct'),
      sectionStats: this.run('levelTestState.sectionStats'),
      finalScreen: this.activeScreenId(),
    };
  }
}

module.exports = { load };
