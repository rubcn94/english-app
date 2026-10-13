'use strict';
// Review scheduling + card extras: only pending cards are queued, due
// reviews skip the theory pass, a miss is an automatic "again", and the
// CARD_EXTRAS overlay (example bank / AmE / old-fashioned) is applied.

const { load } = require('./harness');
const { assert, assertEqual } = require('./assert');

const FUTURE = '2999-01-01';
const PAST = '2000-01-01';

function markProgress(h, ids, dueDate) {
  h.ctx.__ids = ids;
  h.run(`__ids.forEach(id => { state.progress[id] = { interval: 6, repetitions: 2, easeFactor: 2.5, dueDate: ${JSON.stringify(dueDate)} }; })`);
}

function testStudiedNotDueCardsAreNotRequeued() {
  const h = load();
  const sec = h.getData('vocab').find(s => s.section === 1);
  const studied = sec.cards.slice(0, 20).map(c => c.id);
  markProgress(h, studied, FUTURE);
  h.call('startSection', 'vocab', 1);
  const queued = h.run('state.blocks.flat().map(c => c.id)');
  assertEqual(queued.length, Math.min(20, sec.cards.length - 20), 'only new cards (max 20) should be queued');
  assert(!queued.some(id => studied.includes(id)), 'a card scheduled for later was re-queued');
}

function testDueCardsComeFirstAndSkipTheory() {
  const h = load();
  const sec = h.getData('blue').find(s => s.section === 12);
  markProgress(h, sec.cards.map(c => c.id), PAST);
  h.call('startSection', 'blue', 12);
  assert(h.document.getElementById('phase-theory').classList.contains('hidden'), 'a review-only block should go straight to practice');
  const res = h.runFullBlockedStudy('correct');
  assertEqual(res.answers.length, sec.cards.length, 'every due card should be reviewed');
}

function testFullyStudiedSectionFallsBackToFreePracticeWithoutRescheduling() {
  const h = load();
  const sec = h.getData('blue').find(s => s.section === 12);
  markProgress(h, sec.cards.map(c => c.id), FUTURE);
  h.call('startSection', 'blue', 12);
  assert(h.document.getElementById('study-title').textContent.includes('free practice'), 'expected the free-practice fallback');
  h.runFullBlockedStudy('correct');
  sec.cards.forEach(c => assertEqual(h.run(`state.progress[${JSON.stringify(c.id)}].dueDate`), FUTURE, `free practice moved ${c.id}'s review date`));
}

function testMissIsAlwaysRatedAgainAndRetryDoesNotOverrideIt() {
  const h = load();
  h.call('startSection', 'blue', 12);
  h.driveTheoryPass();
  const id = h.run('state.blockQueue[0].id');
  h.answerCurrentCard('wrong');
  assert(h.document.getElementById('rating-wrap').classList.contains('hidden'), 'rating buttons should be hidden after a miss');
  assert(!h.document.getElementById('btn-continue-miss').classList.contains('hidden'), 'Continue button should show after a miss');
  h.rate(5); // even if something calls it with Easy, a miss is a miss
  const afterMiss = h.run(`state.progress[${JSON.stringify(id)}]`);
  assertEqual(afterMiss.repetitions, 0, 'a miss must reset repetitions');
  assertEqual(h.run('state.sessionStats.again'), 1, 'miss should count once');
  // Drive until the requeued card comes back and answer it right.
  let guard = 0;
  while (h.run('state.blockQueue[0].id') !== id) {
    if (++guard > 50) throw new Error('requeued card never came back');
    h.answerCurrentCard('correct'); h.rate(3);
  }
  h.answerCurrentCard('correct'); h.rate(5);
  const afterRetry = h.run(`state.progress[${JSON.stringify(id)}]`);
  assertEqual(JSON.stringify(afterRetry), JSON.stringify(afterMiss), 'the in-session retry must not overwrite the miss');
  assertEqual(h.run('state.sessionStats.easy'), 0, 'retries should not be counted in the summary');
}

function testExampleBankReplacesTheorySentenceInPractice() {
  const h = load();
  const ep = h.getData('sherlock').find(s => s.section === 1);
  const card = ep.cards[0];
  const bank = ['Ex one ___ here.', 'Ex two ___ here.', 'Ex three ___ here.'];
  h.run(`CARD_EXTRAS[${JSON.stringify(card.id)}] = { ex: ${JSON.stringify(bank)} }`);
  h.call('startSection', 'sherlock', 1);
  h.driveTheoryPass();
  let guard = 0;
  while (h.run('state.blockQueue[0].id') !== card.id) {
    if (++guard > 20) throw new Error('card not reached');
    h.answerCurrentCard('correct'); h.rate(3);
  }
  const shown = h.document.getElementById('card-front-text').textContent;
  const sentence = shown.split('\n\n')[0];
  assert(bank.includes(sentence), `practice should use a bank sentence, got: ${sentence}`);
  assert(shown.includes('💬'), 'the 💬 hint should be kept');
}

function testDatedCardsGoLastAndShowAmE() {
  const h = load();
  const ep = h.getData('sherlock').find(s => s.section === 1);
  const first = ep.cards[0].id;
  h.run(`CARD_EXTRAS[${JSON.stringify(first)}] = { dated: true, us: 'test-us' }`);
  h.call('startSection', 'sherlock', 1);
  const flags = h.run('state.blocks.flat().map(c => isDated(c))');
  const firstDated = flags.indexOf(true);
  assert(firstDated < 0 || flags.slice(firstDated).every(Boolean), 'new old-fashioned cards should be studied after all the others');
  const next = h.run(`scheduleCard(CARD_EXTRAS && { id: ${JSON.stringify(first)} }, { interval: 6, repetitions: 2, easeFactor: 2.5 }, 4)`);
  assertEqual(next.interval, 30, 'old-fashioned card interval should be doubled (6*2.5*2)');
  h.run(`renderCardMeta(document.getElementById('correction-meta'), { id: ${JSON.stringify(first)} })`);
  const meta = h.document.getElementById('correction-meta').textContent;
  assert(meta.includes('Old-fashioned') && meta.includes('test-us'), `meta line missing info: ${meta}`);
}

function testHardOnACorrectAnswerDoesNotResetAndGoodKeepsEase() {
  const h = load();
  const base = { interval: 6, repetitions: 2, easeFactor: 2.5 };
  h.ctx.__b = base;
  const hard = h.run('sm2(__b, 3)');
  const good = h.run('sm2(__b, 4)');
  assert(hard.repetitions === 3 && hard.interval > 1, 'Hard after a correct answer must not reset the card');
  assertEqual(good.easeFactor, 2.5, 'Good should keep the ease factor unchanged');
  assert(h.run('sm2(__b, 5)').easeFactor > 2.5, 'Easy should raise the ease factor');
}

function testKnownFollowsTheSchedule() {
  const h = load();
  const sec = h.getData('blue').find(s => s.section === 12);
  // Long interval already: one more correct answer pushes it past 21 days.
  h.ctx.__ids = sec.cards.map(c => c.id);
  h.run(`__ids.forEach(id => { state.progress[id] = { interval: 15, repetitions: 3, easeFactor: 2.5, dueDate: '2000-01-01' }; })`);
  h.call('startSection', 'blue', 12);
  const first = h.run('state.blockQueue[0].id');
  h.answerCurrentCard('correct'); h.rate(4);
  assert(h.run(`!!state.known[${JSON.stringify(first)}]`), 'a card whose next review is 21+ days away should be known');
  const second = h.run('state.blockQueue[0].id');
  h.run(`state.known[${JSON.stringify(second)}] = true`);
  h.answerCurrentCard('wrong'); h.rate(0);
  assert(!h.run(`!!state.known[${JSON.stringify(second)}]`), 'a missed card should stop being known');
}

function testNewCardsCappedAt20() {
  const h = load();
  h.call('startSection', 'vocab', 2);
  assertEqual(h.run('state.blocks.flat().length'), 20, 'a fresh vocab section should serve 20 new cards');
}

function testEaseMigrationRunsOnce() {
  const h = load();
  h.run(`state.progress.x = { interval: 3, repetitions: 2, easeFactor: 1.9, dueDate: '2000-01-01' }; localStorage.removeItem(EASE_MIGRATION_KEY)`);
  assertEqual(h.run('migrateEaseFactors()'), 1, 'should lift one ease factor');
  assertEqual(h.run('state.progress.x.easeFactor'), 2.5, 'ease factor should be back at 2.5');
  h.run('state.progress.x.easeFactor = 1.9');
  assertEqual(h.run('migrateEaseFactors()'), 0, 'migration must only run once');
}

function testStorageFailureDoesNotBreakStudy() {
  const h = load();
  h.run(`localStorage.setItem = () => { throw new Error('QuotaExceeded'); }`);
  h.call('startSection', 'blue', 12);
  const res = h.runFullBlockedStudy('correct');
  assertEqual(h.activeScreenId(), 'screen-summary', 'study should finish even when storage writes fail');
  assert(res.answers.length > 0, 'cards answered');
}

module.exports = {
  testKnownFollowsTheSchedule,
  testNewCardsCappedAt20,
  testEaseMigrationRunsOnce,
  testStorageFailureDoesNotBreakStudy,
  testHardOnACorrectAnswerDoesNotResetAndGoodKeepsEase,
  testStudiedNotDueCardsAreNotRequeued,
  testDueCardsComeFirstAndSkipTheory,
  testFullyStudiedSectionFallsBackToFreePracticeWithoutRescheduling,
  testMissIsAlwaysRatedAgainAndRetryDoesNotOverrideIt,
  testExampleBankReplacesTheorySentenceInPractice,
  testDatedCardsGoLastAndShowAmE,
};
