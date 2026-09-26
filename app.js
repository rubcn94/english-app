'use strict';

// ── Storage ──────────────────────────────────────────────────────────────────
const STORE_KEY   = 'eng_cards_v1';
const STREAK_KEY  = 'eng_streak_v1';
const NOTES_KEY   = 'eng_notes_v1';
const KNOWN_KEY   = 'eng_known_v1';
const BACKUP_KEY  = 'eng_last_backup_v1';

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { return {}; }
}
function saveProgress(p) { localStorage.setItem(STORE_KEY, JSON.stringify(p)); }

function loadStreak() {
  try { return JSON.parse(localStorage.getItem(STREAK_KEY)) || { count: 0, lastDate: null }; } catch { return { count: 0, lastDate: null }; }
}
function saveStreak(s) { localStorage.setItem(STREAK_KEY, JSON.stringify(s)); }

function loadNotes() {
  try { return JSON.parse(localStorage.getItem(NOTES_KEY)) || {}; } catch { return {}; }
}
function saveNotes(n) { localStorage.setItem(NOTES_KEY, JSON.stringify(n)); }

function loadKnown() {
  try { return JSON.parse(localStorage.getItem(KNOWN_KEY)) || {}; } catch { return {}; }
}
function saveKnown(k) { localStorage.setItem(KNOWN_KEY, JSON.stringify(k)); }

// ── SM-2 ──────────────────────────────────────────────────────────────────────
function sm2(card, rating) {
  let { interval = 1, repetitions = 0, easeFactor = 2.5 } = card || {};
  if (rating < 3) { repetitions = 0; interval = 1; }
  else {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    repetitions += 1;
  }
  easeFactor = Math.max(1.3, easeFactor + 0.1 - (5 - rating) * (0.08 + (5 - rating) * 0.02));
  const due = new Date();
  due.setDate(due.getDate() + interval);
  return { interval, repetitions, easeFactor: Math.round(easeFactor * 1000) / 1000, dueDate: due.toISOString().slice(0, 10) };
}

function todayStr() { return new Date().toISOString().slice(0, 10); }
function isDue(card) { if (!card || !card.dueDate) return true; return card.dueDate <= todayStr(); }

// ── App state ─────────────────────────────────────────────────────────────────
const BLOCK_SIZE = 10;

let state = {
  currentBook: null,
  currentSection: null,
  isAllDue: false,
  isCustomQueue: false,
  customQueueOrigin: null,
  sessionStats: { again: 0, hard: 0, good: 0, easy: 0 },
  progress: loadProgress(),
  notes: loadNotes(),
  known: loadKnown(),

  // Blocked study (theory -> practice loop), Duolingo-style
  blocks: [],           // full queue split into chunks of BLOCK_SIZE
  blockIndex: 0,        // which block we're on
  phase: 'practice',    // 'theory' | 'practice'
  theoryIndex: 0,       // position within the current block's theory pass
  blockQueue: [],       // cards still pending in this block's practice loop
                         // (a missed card gets pushed back onto this queue,
                         // so the loop keeps going until every card in the
                         // block has been answered correctly at least once)
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function getData(book) {
  if (book === 'blue') return BLUE_DATA;
  if (book === 'green') return GREEN_DATA;
  if (book === 'phrasal') return getPhrasalVerbSections();
  return VOCAB_DATA;
}
// Virtual "book" combining every vocab section whose title mentions phrasal
// verbs — a dedicated glossary view without duplicating any card data.
function getPhrasalVerbSections() {
  return VOCAB_DATA.filter(s => /phrasal/i.test(s.title));
}
function getAllCards(book) {
  return getData(book).flatMap(s => s.cards.map(c => ({ ...c, _section: s.section })));
}
function getAllCardsAllBooks() {
  return ['blue', 'green', 'vocab'].flatMap(b =>
    getData(b).flatMap(s => s.cards.map(c => ({ ...c, _book: b, _section: s.section })))
  );
}
function getCardsByTag(tag) {
  return getAllCardsAllBooks().filter(c => Array.isArray(c.tags) && c.tags.includes(tag));
}
function getAllTags() {
  const counts = {};
  getAllCardsAllBooks().forEach(c => {
    if (!Array.isArray(c.tags)) return;
    c.tags.forEach(t => { counts[t] = (counts[t] || 0) + 1; });
  });
  return Object.keys(counts).sort().map(t => ({ tag: t, count: counts[t] }));
}
function getCardProgress(id) { return state.progress[id] || null; }
function countDue(book) { return getAllCards(book).filter(c => isDue(getCardProgress(c.id)) && getCardProgress(c.id) !== null).length; }
function countStudied(book) { return getAllCards(book).filter(c => getCardProgress(c.id) !== null).length; }
function totalCards(book) { return getAllCards(book).length; }
function totalDueAll() {
  return getAllCardsAllBooks().filter(c => isDue(getCardProgress(c.id)) && getCardProgress(c.id) !== null).length;
}

// ── Answer checking ───────────────────────────────────────────────────────────
function normalise(str) {
  return str.trim().toLowerCase()
    .replace(/['']/g, "'")
    .replace(/\s+/g, ' ');
}

function getCorrectAnswers(card) {
  // card.answer (hand-written clean answer) takes priority when present —
  // same reasoning as getReadableAnswer: some grammar cards' `back` is a
  // full explanation, not a short answer, so parsing it directly here
  // would disagree with what the multiple-choice button actually shows.
  const source = card.answer || card.back.split('\n')[0];
  // Split by " / " to get alternates
  return source.split(' / ').map(a => normalise(a.replace(/\(.*?\)/g, '').trim())).filter(Boolean);
}

function isCorrect(userInput, card) {
  const user = normalise(userInput);
  return getCorrectAnswers(card).some(ans => user === ans);
}

// A card with card.blanks (one entry per ___ in front, same order) uses one
// input per blank instead of a single free-text field — the multi-blank
// grammar cards (e.g. "'I ___ to work.' / 'She ___ (leave) yesterday.'")
// used to require typing several unrelated answers into one line, which
// was confusing and impossible to grade per-blank.
function hasBlanks(card) { return Array.isArray(card.blanks) && card.blanks.length > 0; }

function getBlankAnswers(blank) {
  return blank.split(' / ').map(a => normalise(a.trim())).filter(Boolean);
}

function isBlankCorrect(userInput, blank) {
  return getBlankAnswers(blank).some(ans => normalise(userInput) === ans);
}

function isAllBlanksCorrect(userInputs, card) {
  return card.blanks.every((blank, i) => isBlankCorrect(userInputs[i] || '', blank));
}

// ── Multiple-choice distractors ─────────────────────────────────────────────
// Every question in blocked study + the level test is answered by picking
// from 2-4 buttons instead of typing, so every question needs "wrong"
// options pulled from real answers elsewhere in the data — there's no
// curated distractor field, this is generated at render time.
const CHOICE_TARGET = 4;
// Multi-blank cards (several ___ in one question) show one choice group per
// blank — at 4 options each, a 3-4 blank card became a wall of buttons. 2
// options per blank (correct + 1 distractor) keeps each blank quick to
// answer while the question as a whole still has real variety across its
// blanks.
const CHOICE_TARGET_MULTI_BLANK = 2;

// Readable (original-case) text for what a card's answer looks like on
// screen — NOT the same as getCorrectAnswers(), which normalises to
// lowercase for comparison. Vocab cards can have "answer1 / answer2" — use
// only the first alternative as the display/option text.
//
// Some grammar cards (Blue/Green) have a `back` that's a full explanation
// rather than a short answer — "a) ❌ I'm knowing the answer", "BE passive
// = neutral/formal", etc — unusable as a multiple-choice option as-is. For
// those, a hand-written `card.answer` field holds the clean short answer;
// it takes priority over parsing `back` when present. A card with
// `blanks` and no `answer` (the multi-blank cards) falls back to its
// combined blanks instead of `back` — otherwise it would leak its raw
// explanation text into OTHER cards' distractor pools via
// getDistractorPool, which calls this on every card in a section/book.
function getReadableAnswer(card) {
  if (card.answer) return card.answer.split(' / ')[0].trim();
  if (hasBlanks(card)) return card.blanks.map(b => b.split(' / ')[0].trim()).join(' / ');
  return card.back.split('\n')[0].split(' / ')[0].replace(/\(.*?\)/g, '').trim();
}

// Other cards' readable answers to draw distractors from: same section
// first (most sections are small — 3-8 cards in Blue/Green — so this often
// isn't enough on its own), falling back to the whole book when the
// section alone can't supply enough unique candidates.
function getDistractorPool(book, sectionNum, excludeCardId) {
  const data = getData(book);
  const section = data.find(s => s.section === sectionNum);
  const fromSection = section
    ? section.cards.filter(c => c.id !== excludeCardId).map(getReadableAnswer)
    : [];
  const uniqueInSection = new Set(fromSection.map(normalise));
  if (uniqueInSection.size >= CHOICE_TARGET) return fromSection;

  const fromBook = getAllCards(book).filter(c => c.id !== excludeCardId).map(getReadableAnswer);
  return fromSection.concat(fromBook);
}

// Builds the final shuffled option list for one question: the correct
// answer plus up to (count-1) unique distractors pulled from `pool`.
// Distractors whose normalised form matches the correct answer are
// dropped (vocab sections often repeat a synonym across cards — that
// would otherwise show up as a second "correct" option). Never returns
// fewer than 2 options when at least one distinct distractor exists
// anywhere in the pool; returns null if the pool has none at all (caller
// falls back to free-text input for that one question).
//
// Candidates are tried in order of how close their length is to the
// correct answer's, not pure random order — when the pool gets widened
// to the whole book (small sections), it can mix wildly different
// grammar topics, and a distractor several times longer/shorter than the
// real answer instantly gives the question away without reading it, e.g.
// "Turn it off" next to a full phrasal-verb-matching sentence pulled in
// from an unrelated section. Ties (similar length) are still shuffled
// for variety.
function buildChoiceOptions(correctDisplay, pool, count) {
  const correctNorm = normalise(correctDisplay);
  const correctLen = correctDisplay.length;
  const seen = new Set([correctNorm]);
  const byLengthCloseness = shuffle(pool)
    .map(candidate => ({ candidate, diff: Math.abs(candidate.length - correctLen) }))
    .sort((a, b) => a.diff - b.diff);

  const distractors = [];
  byLengthCloseness.forEach(({ candidate }) => {
    if (distractors.length >= count - 1) return;
    const n = normalise(candidate);
    if (!n || seen.has(n)) return;
    seen.add(n);
    distractors.push(candidate);
  });
  if (distractors.length === 0) return null;
  return shuffle([correctDisplay, ...distractors]);
}

// Builds up to CHOICE_TARGET full combined-answer options for a multi-blank
// card: the correct combination plus distractor combinations that each
// differ from it in exactly one blank (swap blank i's answer for a wrong
// candidate, keep the rest correct). A one-blank-off distractor reads as a
// real near-miss instead of an obviously-wrong jumble, and stays roughly
// as hard to spot as the per-blank groups this replaces. Candidates for
// blank i come from the card's OTHER blanks first (same grammar point,
// always available) then the section/book pool used for single answers.
function buildCombinedMultiBlankOptions(card, book, sectionNum, correctAnswers) {
  const pool = getDistractorPool(book, sectionNum, card.id);
  const correctDisplay = buildCombinedAnswerText(correctAnswers);
  const correctNorm = normalise(correctDisplay);
  const seen = new Set([correctNorm]);
  const combos = [];

  const blankIndexesShuffled = shuffle(correctAnswers.map((_, i) => i));
  for (const i of blankIndexesShuffled) {
    if (combos.length >= CHOICE_TARGET - 1) break;
    const ownOtherBlanks = correctAnswers.filter((_, j) => j !== i);
    const targetLen = correctAnswers[i].length;
    // Same length-closeness preference as buildChoiceOptions — a swapped-in
    // candidate several times longer/shorter than what it replaces makes
    // the whole combo stick out and gives the answer away without reading it.
    const candidates = shuffle(ownOtherBlanks.concat(pool))
      .sort((a, b) => Math.abs(a.length - targetLen) - Math.abs(b.length - targetLen));
    const wrongForThisBlank = candidates.find(c => normalise(c) !== normalise(correctAnswers[i]) && c.trim());
    if (!wrongForThisBlank) continue;
    const combo = correctAnswers.slice();
    combo[i] = wrongForThisBlank.trim();
    const comboText = buildCombinedAnswerText(combo);
    const comboNorm = normalise(comboText);
    if (seen.has(comboNorm)) continue;
    seen.add(comboNorm);
    combos.push(comboText);
  }

  if (combos.length === 0) return [correctDisplay];
  return shuffle([correctDisplay, ...combos]);
}

// ── Screen navigation ─────────────────────────────────────────────────────────
const LAST_SCREEN_KEY = 'eng_last_screen_v1';
// Screens that make sense to restore as-is after a reload (no in-progress
// session state like a shuffled queue that would be lost anyway).
const RESTORABLE_SCREENS = ['home', 'book', 'glossary', 'topics', 'dynamic-templates'];

function showScreen(name, opts) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
  if (!opts || !opts.skipPersist) {
    if (RESTORABLE_SCREENS.includes(name)) {
      const payload = { screen: name, book: state.currentBook };
      if (name === 'glossary') payload.glossaryBook = glossaryBook;
      try { localStorage.setItem(LAST_SCREEN_KEY, JSON.stringify(payload)); } catch {}
    } else {
      try { localStorage.removeItem(LAST_SCREEN_KEY); } catch {}
    }
  }
}

function restoreLastScreen() {
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem(LAST_SCREEN_KEY)); } catch {}
  if (!saved || !RESTORABLE_SCREENS.includes(saved.screen)) return;

  if (saved.screen === 'book' && saved.book) {
    showBookMenu(saved.book);
  } else if (saved.screen === 'glossary') {
    showGlossary(saved.glossaryBook);
  } else if (saved.screen === 'topics') {
    showTopics();
  } else if (saved.screen === 'dynamic-templates') {
    showDynamicTests();
  }
  // 'home' needs no action — it's already the default active screen.
}

function showBookMenu(book) {
  state.currentBook = book;
  const titles = { blue: '📘 Blue Book', green: '📗 Green Book', vocab: '📒 Vocabulary' };
  document.getElementById('book-menu-title').textContent = titles[book] || 'Sections';
  renderSectionList(book);
  showScreen('book');
}

function exitStudy() {
  const done = state.sessionStats.again + state.sessionStats.hard + state.sessionStats.good + state.sessionStats.easy;
  if (done > 0) showSummary();
  else if (state.isCustomQueue) showScreen(state.customQueueOrigin === 'topics' ? 'topics' : 'glossary');
  else if (state.isAllDue) showScreen('home');
  else showScreen('book');
}

// ── Section list ──────────────────────────────────────────────────────────────
function renderSectionList(book) {
  const data = getData(book);
  const list = document.getElementById('section-list');
  list.innerHTML = '';
  data.forEach(sec => {
    const due     = sec.cards.filter(c => isDue(getCardProgress(c.id)) && getCardProgress(c.id) !== null).length;
    const newCount = sec.cards.filter(c => getCardProgress(c.id) === null).length;
    const done    = sec.cards.length - newCount;
    const total   = sec.cards.length;
    let badge, badgeClass;
    if (newCount === total)  { badge = 'New';          badgeClass = ''; }
    else if (done === total) { badge = 'Done ✓';       badgeClass = 'done'; }
    else if (due > 0)        { badge = `${due} due`;   badgeClass = 'due'; }
    else                     { badge = `${done}/${total}`; badgeClass = ''; }
    const unitsHtml = sec.units ? `<span class="section-units">Units ${sec.units}</span>` : '';
    const btn = document.createElement('button');
    btn.className = 'section-item';
    btn.innerHTML = `
      <div class="section-info">
        <span class="section-num">Section ${sec.section}</span>
        <span class="section-name">${sec.title}</span>
        ${unitsHtml}
      </div>
      <div class="section-right">
        <span class="section-count">${done}/${total}</span>
        <span class="section-badge ${badgeClass}">${badge}</span>
      </div>`;
    btn.onclick = () => startSection(book, sec.section);
    list.appendChild(btn);
  });
}

// ── Study session ─────────────────────────────────────────────────────────────
function startSection(book, sectionNum) {
  const sec = getData(book).find(s => s.section === sectionNum);
  if (!sec) return;
  state.currentBook = book;
  state.currentSection = sec;
  state.isAllDue = false;
  state.isCustomQueue = false;
  const due     = sec.cards.filter(c => isDue(getCardProgress(c.id)) && getCardProgress(c.id) !== null);
  const newCards = sec.cards.filter(c => getCardProgress(c.id) === null);
  const notDue  = sec.cards.filter(c => !isDue(getCardProgress(c.id)));
  beginBlockedStudy([...shuffle(due), ...shuffle(newCards), ...notDue], sec.title);
}

function startAllDue() {
  const due = getAllCardsAllBooks().filter(c => isDue(getCardProgress(c.id)) && getCardProgress(c.id) !== null);
  if (due.length === 0) return;
  state.currentBook = null;
  state.currentSection = null;
  state.isAllDue = true;
  state.isCustomQueue = false;
  beginBlockedStudy(shuffle(due), 'All due cards');
}

function startCustomQueue(cards, title, origin) {
  if (!cards || cards.length === 0) return;
  state.currentBook = null;
  state.currentSection = null;
  state.isAllDue = false;
  state.isCustomQueue = true;
  state.customQueueOrigin = origin || 'glossary';
  const due      = cards.filter(c => isDue(getCardProgress(c.id)) && getCardProgress(c.id) !== null);
  const newCards = cards.filter(c => getCardProgress(c.id) === null);
  const notDue   = cards.filter(c => !isDue(getCardProgress(c.id)) && getCardProgress(c.id) !== null);
  beginBlockedStudy([...shuffle(due), ...shuffle(newCards), ...shuffle(notDue)], title);
}

function studyGlossarySelection() {
  const cards = getCurrentGlossaryCards();
  if (cards.length === 0) { alert('No cards match this filter.'); return; }
  const filterLabel = { all: 'All', unknown: 'To learn', known: 'Known', tricks: 'Tricks' }[glossaryFilter] || 'Glossary';
  startCustomQueue(cards, `${filterLabel} · ${cards.length} cards`);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// id -> {book, section} for every card in every book, built once and reused
// to tag cards with where they came from regardless of entry point
// (startSection/startAllDue/startCustomQueue/glossary all reach
// beginBlockedStudy with plain card objects that may not carry _book/
// _section) — multiple-choice distractor pooling needs to know a card's
// section without re-deriving it per call site.
let _cardLocationIndex = null;
function getCardLocationIndex() {
  if (_cardLocationIndex) return _cardLocationIndex;
  _cardLocationIndex = {};
  ['blue', 'green', 'vocab'].forEach(book => {
    getData(book).forEach(sec => {
      sec.cards.forEach(c => { _cardLocationIndex[c.id] = { book, section: sec.section }; });
    });
  });
  return _cardLocationIndex;
}
function tagCardLocation(card) {
  if (card._book && card._section != null) return card;
  const loc = getCardLocationIndex()[card.id];
  return loc ? { ...card, _book: loc.book, _section: loc.section } : card;
}

// ── Blocked study: theory -> practice loop, Duolingo-style ─────────────────────
// Splits a queue into chunks of BLOCK_SIZE. Each block is shown as a theory
// pass (read every card, front+back, no quiz) followed by a practice loop
// where a missed card is pushed back into the block's queue instead of just
// moving on, so it keeps reappearing until answered correctly once. Only
// then does the next block start (back to its own theory pass).
function beginBlockedStudy(cards, title) {
  state.sessionStats = { again: 0, hard: 0, good: 0, easy: 0 };
  state.blocks = [];
  const tagged = cards.map(tagCardLocation);
  for (let i = 0; i < tagged.length; i += BLOCK_SIZE) state.blocks.push(tagged.slice(i, i + BLOCK_SIZE));
  state.blockIndex = 0;
  document.getElementById('study-title').textContent = title;
  showScreen('study');
  startBlockTheory();
}

function startBlockTheory() {
  state.phase = 'theory';
  state.theoryIndex = 0;
  document.getElementById('phase-question').classList.add('hidden');
  document.getElementById('phase-correction').classList.add('hidden');
  document.getElementById('phase-theory').classList.remove('hidden');
  loadTheoryCard();
}

function loadTheoryCard() {
  const block = state.blocks[state.blockIndex];
  const card = block[state.theoryIndex];
  document.getElementById('theory-front').textContent = card.front;
  document.getElementById('theory-back').textContent = card.back;
  const blockLabel = state.blocks.length > 1 ? `Block ${state.blockIndex + 1}/${state.blocks.length} · ` : '';
  document.getElementById('theory-counter').textContent = `${blockLabel}${state.theoryIndex + 1}/${block.length}`;
  const nextBtn = document.getElementById('btn-theory-next');
  nextBtn.textContent = state.theoryIndex + 1 < block.length ? 'Next →' : "Start practice →";
  renderTheoryNote(card);
}

function renderTheoryNote(card) {
  const note = state.notes[card.id] || '';
  const noteText = document.getElementById('theory-note-text');
  const btn = document.getElementById('btn-theory-note');
  if (note) {
    noteText.textContent = '💡 ' + note;
    noteText.classList.remove('hidden');
    btn.textContent = '✏️ Edit trick';
  } else {
    noteText.classList.add('hidden');
    btn.textContent = '+ Add a trick';
  }
}

function openTheoryNoteModal() {
  const block = state.blocks[state.blockIndex];
  const card = block[state.theoryIndex];
  openNoteModalForCard(card, () => renderTheoryNote(card));
}

function nextTheoryCard() {
  const block = state.blocks[state.blockIndex];
  state.theoryIndex++;
  if (state.theoryIndex < block.length) loadTheoryCard();
  else startBlockPractice();
}

function startBlockPractice() {
  state.phase = 'practice';
  state.blockQueue = shuffle(state.blocks[state.blockIndex]);
  document.getElementById('phase-theory').classList.add('hidden');
  loadCard();
}

function finishCurrentBlock() {
  state.blockIndex++;
  if (state.blockIndex < state.blocks.length) startBlockTheory();
  else { updateStreak(); showSummary(); }
}

// ── Choice rendering (shared by blocked study + level test) ────────────────────
// Every question is answered by picking one of 2-4 buttons instead of
// typing. Picking a choice highlights it (green if correct, red if wrong,
// and the correct one is revealed in green either way) and disables the
// whole group so it can't be re-picked, then calls onSubmit with the
// picked text once — same "answer locked in" semantics the old text input
// had via the disabled-while-answered guard.
function renderChoiceGroup(container, options, correctDisplay, onSubmit) {
  container.innerHTML = '';
  const correctNorm = normalise(correctDisplay);
  let answered = false;
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'dynamic-choice-btn';
    btn.textContent = opt;
    btn.onclick = () => {
      if (answered) return;
      answered = true;
      const picked = opt;
      const pickedCorrect = normalise(picked) === correctNorm;
      container.querySelectorAll('.dynamic-choice-btn').forEach(b => {
        b.disabled = true;
        if (normalise(b.textContent) === correctNorm) b.classList.add('choice-correct');
        else if (b === btn) b.classList.add('choice-wrong');
      });
      onSubmit(picked, pickedCorrect);
    };
    container.appendChild(btn);
  });
}

// Single-answer card (no card.blanks): builds the options from the section/
// book distractor pool and renders one choice group. Falls back to null
// when there's truly no distractor anywhere (caller decides what to do —
// in practice this never happens given the dataset size, but a section
// could theoretically be down to 1 card with nothing else to compare against).
function buildSingleChoiceOptions(card, book, sectionNum) {
  const correctDisplay = getReadableAnswer(card);
  const pool = getDistractorPool(book, sectionNum, card.id);
  return buildChoiceOptions(correctDisplay, pool, CHOICE_TARGET);
}

// Multi-blank rendering: ONE choice group of up to 4 buttons, each button a
// full combined answer across every blank (e.g. "go / was reading" for a
// 2-blank card), joined with " / " to match how alternatives are already
// displayed elsewhere. Picking a button answers every blank in the card at
// once instead of one blank-group at a time — onSubmit still receives an
// array of per-blank strings (same contract finishAnswer/
// checkLevelTestMultiBlankAnswer already expect), it's just parsed back out
// of whichever combined option was picked.
function buildCombinedAnswerText(perBlankAnswers) {
  return perBlankAnswers.join(' / ');
}

function renderMultiBlankChoices(container, card, book, sectionNum, onSubmit) {
  container.innerHTML = '';
  const correctAnswers = card.blanks.map(b => b.split(' / ')[0].trim());
  const correctDisplay = buildCombinedAnswerText(correctAnswers);
  const options = buildCombinedMultiBlankOptions(card, book, sectionNum, correctAnswers);

  const group = document.createElement('div');
  group.className = 'dynamic-choices';
  renderChoiceGroup(group, options, correctDisplay, (picked) => {
    onSubmit(picked.split(' / ').map(s => s.trim()));
  });
  container.appendChild(group);
}

function renderMultiBlankReview(container, card, userAnswers) {
  container.innerHTML = '';
  card.blanks.forEach((blank, i) => {
    const userAns = userAnswers[i] || '(empty)';
    const correct = isBlankCorrect(userAnswers[i] || '', blank);
    const row = document.createElement('div');
    row.className = 'multi-blank-review-row';
    row.innerHTML = `
      <div class="multi-blank-label">Blank ${i + 1} of ${card.blanks.length}</div>
      <div class="multi-blank-review-pair">
        <div class="correction-your ${correct ? 'correct' : 'wrong'}">${userAns}</div>
        <div class="correction-correct">${blank}</div>
      </div>`;
    container.appendChild(row);
  });
}

// ── Card rendering ────────────────────────────────────────────────────────────
function loadCard() {
  const card = state.blockQueue[0];
  if (!card) { finishCurrentBlock(); return; }
  document.querySelectorAll('.btn-rate').forEach(b => b.disabled = false);

  // Show question phase
  document.getElementById('phase-question').classList.remove('hidden');
  document.getElementById('phase-correction').classList.add('hidden');
  document.getElementById('card-front-text').textContent = card.front;

  const choiceArea = document.getElementById('input-area');
  const multiArea = document.getElementById('multi-blank-area');
  const freeTextArea = document.getElementById('freetext-area');
  if (card.freeText) {
    // Cards whose answer is a match/sequence/list of several short items
    // (e.g. "give up = quit, find out = discover...") don't reduce to one
    // clean multiple-choice option — typing stays the honest way to answer.
    choiceArea.classList.add('hidden');
    multiArea.classList.add('hidden');
    freeTextArea.classList.remove('hidden');
    const input = document.getElementById('answer-input');
    input.value = '';
    setTimeout(() => input.focus(), 100);
  } else if (hasBlanks(card)) {
    choiceArea.classList.add('hidden');
    freeTextArea.classList.add('hidden');
    multiArea.classList.remove('hidden');
    renderMultiBlankChoices(multiArea, card, card._book, card._section, (picks) => finishAnswer(card, picks));
  } else {
    multiArea.classList.add('hidden');
    freeTextArea.classList.add('hidden');
    choiceArea.classList.remove('hidden');
    const options = buildSingleChoiceOptions(card, card._book, card._section);
    if (options) {
      renderChoiceGroup(choiceArea, options, getReadableAnswer(card), (picked) => finishAnswer(card, picked));
    } else {
      // No distractor anywhere in the data for this card (practically never
      // happens) — show the single correct answer as a one-button "reveal".
      renderChoiceGroup(choiceArea, [getReadableAnswer(card)], getReadableAnswer(card), (picked) => finishAnswer(card, picked));
    }
  }

  const blockTotal = state.blocks[state.blockIndex].length;
  const remaining = state.blockQueue.length;
  const blockLabel = state.blocks.length > 1 ? `Block ${state.blockIndex + 1}/${state.blocks.length} · ` : '';
  document.getElementById('study-counter').textContent = `${blockLabel}${remaining} left`;
  document.getElementById('progress-bar-fill').style.width =
    Math.round(((blockTotal - remaining) / blockTotal) * 100) + '%';
}

function submitFreeTextAnswer() {
  const card = state.blockQueue[0];
  if (!card) return;
  const input = document.getElementById('answer-input');
  const val = input.value.trim();
  if (!val) return;
  finishAnswer(card, val);
}

// Called once the user has answered (single choice picked, every
// multi-blank group picked + Check pressed, or free-text Check pressed).
// `picked` is a string (single choice / free text) or an array of
// per-blank picks (multi-blank).
function finishAnswer(card, picked) {
  if (document.getElementById('phase-question').classList.contains('hidden')) return; // already answered

  const multiReview = document.getElementById('multi-blank-review');
  let userAnswer, correct;

  if (hasBlanks(card)) {
    const answers = picked;
    correct = isAllBlanksCorrect(answers, card);
    userAnswer = answers.join(' / ');
    renderMultiBlankReview(multiReview, card, answers);
    multiReview.classList.remove('hidden');
  } else {
    userAnswer = picked;
    correct = isCorrect(userAnswer, card);
    multiReview.classList.add('hidden');
  }
  state.lastAnswerCorrect = correct;

  // Build correction view
  document.getElementById('correction-question').textContent = card.front;

  const yourEl = document.getElementById('correction-your');
  if (hasBlanks(card)) {
    yourEl.classList.add('hidden');
    document.getElementById('correction-correct').classList.add('hidden');
  } else {
    yourEl.classList.remove('hidden');
    document.getElementById('correction-correct').classList.remove('hidden');
    yourEl.textContent = userAnswer || '(empty)';
    yourEl.className = 'correction-your ' + (correct ? 'correct' : 'wrong');
    document.getElementById('correction-correct').textContent = getReadableAnswer(card);
  }

  // Extra: translation (after \n\n) for vocab cards
  const parts = card.back.split('\n\n');
  const extraEl = document.getElementById('correction-extra');
  extraEl.textContent = parts.length > 1 ? parts[1] : '';

  renderCorrectionNote(card, !correct);

  document.getElementById('phase-question').classList.add('hidden');
  document.getElementById('phase-correction').classList.remove('hidden');
}

function renderCorrectionNote(card, justFailed) {
  const note = state.notes[card.id] || '';
  const wrap = document.getElementById('correction-note-wrap');
  const noteText = document.getElementById('correction-note-text');
  const btn = document.getElementById('btn-correction-note');
  if (note) {
    noteText.textContent = '💡 ' + note;
    noteText.classList.remove('hidden');
    btn.textContent = '✏️ Edit trick';
    btn.classList.remove('prompt');
  } else {
    noteText.classList.add('hidden');
    btn.textContent = '+ Add a trick';
    btn.classList.toggle('prompt', !!justFailed);
  }
  wrap.dataset.cardId = card.id;
}

function openCorrectionNoteModal() {
  const card = state.blockQueue[0];
  if (!card) return;
  openNoteModalForCard(card, () => renderCorrectionNote(card, false));
}

function showQuestion() {
  document.getElementById('phase-question').classList.remove('hidden');
  document.getElementById('phase-correction').classList.add('hidden');
  // Choice buttons already show what was picked (disabled, highlighted
  // correct/wrong) — just re-reveal the question phase, nothing to reset.
}

function rateCard(rating) {
  const ratingButtons = document.querySelectorAll('.btn-rate');
  if (ratingButtons[0] && ratingButtons[0].disabled) return; // already rated, waiting for next card to render
  const card = state.blockQueue[0];
  if (!card) return;
  ratingButtons.forEach(b => b.disabled = true); // re-enabled by loadCard()/showSummary() on the next render
  const prev = getCardProgress(card.id) || {};
  state.progress[card.id] = sm2(prev, rating);
  saveProgress(state.progress);
  if (rating === 0) state.sessionStats.again++;
  else if (rating === 1) state.sessionStats.hard++;
  else if (rating === 3) state.sessionStats.good++;
  else if (rating === 5) state.sessionStats.easy++;

  state.blockQueue.shift();
  // A card whose typed answer was wrong keeps circling back within this
  // block's practice loop, regardless of the SM-2 rating chosen, so it
  // only "graduates" once actually answered correctly in this session.
  if (state.lastAnswerCorrect === false) {
    state.blockQueue.push(card);
  } else {
    // Graduated this session — reflect it in the glossary automatically.
    state.known[card.id] = true;
    saveKnown(state.known);
  }

  loadCard();
}

// ── Summary ───────────────────────────────────────────────────────────────────
function showSummary() {
  document.querySelectorAll('.btn-rate').forEach(b => b.disabled = false);
  const { again, hard, good, easy } = state.sessionStats;
  document.getElementById('sum-again').textContent = again;
  document.getElementById('sum-hard').textContent = hard;
  document.getElementById('sum-good').textContent = good;
  document.getElementById('sum-easy').textContent = easy;
  showScreen('summary');
  refreshHomeStats();
}

function studyAgain() {
  if (state.isCustomQueue) showScreen(state.customQueueOrigin === 'topics' ? 'topics' : 'glossary');
  else if (state.isAllDue) startAllDue();
  else if (state.currentSection) startSection(state.currentBook, state.currentSection.section);
  else showScreen('home');
}

// ── Streak ────────────────────────────────────────────────────────────────────
function updateStreak() {
  const s = loadStreak();
  const today = todayStr();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().slice(0, 10);
  if (s.lastDate === today) return;
  s.count = s.lastDate === yStr ? s.count + 1 : 1;
  s.lastDate = today;
  saveStreak(s);
}

// ── Home stats ────────────────────────────────────────────────────────────────
function refreshHomeStats() {
  document.getElementById('progress-blue').textContent  = `${countStudied('blue')} / ${totalCards('blue')} studied`;
  document.getElementById('progress-green').textContent = `${countStudied('green')} / ${totalCards('green')} studied`;
  document.getElementById('progress-vocab').textContent = `${countStudied('vocab')} / ${totalCards('vocab')} studied`;

  const due    = totalDueAll();
  const total  = countStudied('blue') + countStudied('green') + countStudied('vocab');
  const streak = loadStreak().count;

  document.getElementById('stat-streak').textContent = streak;
  document.getElementById('stat-total').textContent  = total;
  document.getElementById('stat-due').textContent    = due;

  const dueBtn = document.getElementById('btn-study-due');
  document.getElementById('due-badge').textContent = due;
  document.getElementById('due-label').textContent = due === 0 ? 'No cards due' : 'Study due cards';
  dueBtn.disabled = due === 0;

  const backupLabel = document.getElementById('backup-status');
  if (backupLabel) backupLabel.textContent = formatLastBackup();
}

// ── Study by topic (tags) ────────────────────────────────────────────────────
function showTopics() {
  const tags = getAllTags();
  const list = document.getElementById('topics-list');
  list.innerHTML = '';

  if (tags.length === 0) {
    list.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:40px">No tagged topics yet</div>';
  }

  tags.forEach(({ tag, count }) => {
    const btn = document.createElement('button');
    btn.className = 'topic-item';
    btn.innerHTML = `
      <span class="topic-name">${formatTagLabel(tag)}</span>
      <span class="topic-count">${count} cards</span>`;
    btn.onclick = () => startCustomQueue(getCardsByTag(tag), formatTagLabel(tag), 'topics');
    list.appendChild(btn);
  });

  showScreen('topics');
}

function formatTagLabel(tag) {
  return tag.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// ── Dynamic tests (template-generated, no fixed correct-answer bank) ────────
function makeRand() {
  return {
    pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; },
    shuffle(arr) {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
  };
}

let dynamicState = { templates: [], title: '', exercise: null, stats: { correct: 0, total: 0 } };

function getDynamicTemplates() {
  return typeof TEMPLATE_DATA !== 'undefined' ? TEMPLATE_DATA : [];
}

function showDynamicTests() {
  const templates = getDynamicTemplates();
  const list = document.getElementById('dynamic-templates-list');
  list.innerHTML = '';
  if (templates.length === 0) {
    list.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:40px">No dynamic templates yet</div>';
  }
  templates.forEach(tpl => {
    const btn = document.createElement('button');
    btn.className = 'topic-item';
    btn.innerHTML = `
      <span class="topic-name">${tpl.title}</span>
      <span class="topic-count">∞ generated</span>`;
    btn.onclick = () => startDynamicTest([tpl], tpl.title);
    list.appendChild(btn);
  });

  const mixBtn = document.getElementById('btn-mixed-review');
  if (mixBtn) mixBtn.disabled = templates.length < 2;

  showScreen('dynamic-templates');
}

function startMixedReview() {
  const templates = getDynamicTemplates();
  if (templates.length === 0) return;
  startDynamicTest(templates, `🎲 Mixed review · ${templates.length} topics`);
}

function startDynamicTest(templates, title) {
  dynamicState.templates = templates;
  dynamicState.stats = { correct: 0, total: 0 };
  document.getElementById('dynamic-title').textContent = title;
  showScreen('dynamic-study');
  loadDynamicExercise();
}

function loadDynamicExercise() {
  const rand = makeRand();
  const template = rand.pick(dynamicState.templates);
  const gen = rand.pick(template.generators);
  const exercise = gen.build(rand);
  exercise._templateTitle = template.title;
  dynamicState.exercise = exercise;

  document.getElementById('dynamic-phase-question').classList.remove('hidden');
  document.getElementById('dynamic-phase-correction').classList.add('hidden');
  document.getElementById('dynamic-front-text').textContent = exercise.front;
  document.getElementById('dynamic-score').textContent =
    `${dynamicState.stats.correct} / ${dynamicState.stats.total}`;
  const topicLabel = document.getElementById('dynamic-topic-label');
  if (topicLabel) topicLabel.textContent = dynamicState.templates.length > 1 ? exercise._templateTitle : '';

  const inputArea = document.getElementById('dynamic-input-area');
  const choiceArea = document.getElementById('dynamic-choice-area');
  if (exercise.options) {
    inputArea.classList.add('hidden');
    choiceArea.classList.remove('hidden');
    choiceArea.innerHTML = '';
    exercise.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'dynamic-choice-btn';
      btn.textContent = opt;
      btn.onclick = () => checkDynamicAnswer(opt);
      choiceArea.appendChild(btn);
    });
  } else {
    choiceArea.classList.add('hidden');
    inputArea.classList.remove('hidden');
    const input = document.getElementById('dynamic-answer-input');
    input.value = '';
    setTimeout(() => input.focus(), 100);
  }
}

function submitDynamicAnswer() {
  const input = document.getElementById('dynamic-answer-input');
  const val = input.value.trim();
  if (!val) return;
  checkDynamicAnswer(val);
}

function checkDynamicAnswer(userAnswer) {
  const questionPhase = document.getElementById('dynamic-phase-question');
  if (questionPhase.classList.contains('hidden')) return; // already answered this exercise

  const exercise = dynamicState.exercise;
  const correct = normalise(userAnswer) === normalise(exercise.correct);
  dynamicState.stats.total++;
  if (correct) dynamicState.stats.correct++;
  document.getElementById('dynamic-score').textContent =
    `${dynamicState.stats.correct} / ${dynamicState.stats.total}`;

  document.getElementById('dynamic-correction-question').textContent = exercise.front;
  const yourEl = document.getElementById('dynamic-correction-your');
  yourEl.textContent = userAnswer;
  yourEl.className = 'correction-your ' + (correct ? 'correct' : 'wrong');
  document.getElementById('dynamic-correction-correct').textContent = exercise.correct;
  document.getElementById('dynamic-correction-extra').textContent = exercise.explanation || '';

  questionPhase.classList.add('hidden');
  document.getElementById('dynamic-phase-correction').classList.remove('hidden');
}

function nextDynamicExercise() {
  loadDynamicExercise();
}

function exitDynamicTest() {
  showScreen('dynamic-templates');
}

// ── Glossary ──────────────────────────────────────────────────────────────────
let glossaryFilter = 'all';
let glossaryBook = 'vocab';
let noteTargetId = null;

let glossarySearchDebounceTimer = null;
function debouncedRenderGlossary() {
  clearTimeout(glossarySearchDebounceTimer);
  glossarySearchDebounceTimer = setTimeout(renderGlossary, 150);
}

function populateGlossarySections() {
  const sel = document.getElementById('glossary-section-select');
  sel.innerHTML = '<option value="">All sections</option>';
  getData(glossaryBook).forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.section;
    opt.textContent = `${s.section}. ${s.title}`;
    sel.appendChild(opt);
  });
}

function setGlossaryBook(book) {
  glossaryBook = book;
  document.querySelectorAll('.gbook').forEach(b => b.classList.remove('active'));
  document.getElementById('gb-' + book).classList.add('active');
  populateGlossarySections();
  document.getElementById('glossary-search').value = '';
  renderGlossary();
}

function showGlossary(book) {
  glossaryBook = book || 'vocab';
  document.querySelectorAll('.gbook').forEach(b => b.classList.remove('active'));
  const bookBtn = document.getElementById('gb-' + glossaryBook);
  if (bookBtn) bookBtn.classList.add('active');
  populateGlossarySections();
  document.getElementById('glossary-search').value = '';
  glossaryFilter = 'all';
  document.querySelectorAll('.gfilter').forEach(b => b.classList.remove('active'));
  document.getElementById('gf-all').classList.add('active');
  renderGlossary();
  showScreen('glossary');
}

function showPhrasalVerbGlossary() {
  showGlossary('phrasal');
}

function setGFilter(f) {
  glossaryFilter = f;
  document.querySelectorAll('.gfilter').forEach(b => b.classList.remove('active'));
  document.getElementById('gf-' + f).classList.add('active');
  renderGlossary();
}

function getCurrentGlossaryCards() {
  const query  = document.getElementById('glossary-search').value.toLowerCase().trim();
  const secVal = document.getElementById('glossary-section-select').value;
  const data   = getData(glossaryBook);

  let cards = [];
  data.forEach(sec => {
    if (secVal && String(sec.section) !== secVal) return;
    sec.cards.forEach(c => cards.push({ ...c, _secTitle: sec.title }));
  });

  // Filter by known/notes state
  if (glossaryFilter === 'known')   cards = cards.filter(c => state.known[c.id]);
  if (glossaryFilter === 'unknown') cards = cards.filter(c => !state.known[c.id]);
  if (glossaryFilter === 'tricks')  cards = cards.filter(c => state.notes[c.id]);

  // Filter by search
  if (query) {
    cards = cards.filter(c =>
      c.front.toLowerCase().includes(query) ||
      c.back.toLowerCase().includes(query)
    );
  }

  return cards;
}

function renderGlossary() {
  const secVal = document.getElementById('glossary-section-select').value;
  const data   = getData(glossaryBook);
  const cards  = getCurrentGlossaryCards();

  document.getElementById('glossary-counter').textContent = `${cards.length} words`;
  document.getElementById('glossary-known-badge').textContent = `${Object.keys(state.known).length} known`;
  document.getElementById('glossary-title').textContent =
    secVal ? data.find(s => String(s.section) === secVal)?.title || 'Glossary' : 'Glossary';

  const studyBtn = document.getElementById('btn-glossary-study');
  if (studyBtn) {
    studyBtn.textContent = `▶ Test these ${cards.length} cards`;
    studyBtn.disabled = cards.length === 0;
  }

  const list = document.getElementById('glossary-list');
  list.innerHTML = '';
  const fragment = document.createDocumentFragment();

  cards.forEach(card => {
    const isKnown = !!state.known[card.id];
    const note    = state.notes[card.id] || '';

    // Parse word and translation from card
    const answer      = card.back.split('\n')[0];
    const translation = card.back.split('\n\n')[1] || '';

    const item = document.createElement('div');
    item.className = 'glossary-item' + (isKnown ? ' is-known' : '');
    item.dataset.id = card.id;

    item.innerHTML = `
      <button class="gitem-check ${isKnown ? 'checked' : ''}" onclick="toggleKnown('${card.id}')" title="Mark as known">
        ${isKnown ? '✓' : ''}
      </button>
      <div class="gitem-body">
        <div class="gitem-word">${answer}</div>
        ${translation ? `<div class="gitem-translation">${translation}</div>` : ''}
        <div class="gitem-sentence">${card.front}</div>
        ${note ? `<div class="gitem-note">💡 ${note}</div>` : ''}
      </div>
      <button class="gitem-note-btn ${note ? 'has-note' : ''}" onclick="openNoteModal('${card.id}')">
        ${note ? '✏️' : '+ note'}
      </button>`;

    fragment.appendChild(item);
  });

  if (cards.length === 0) {
    list.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:40px">No words found</div>';
  } else {
    list.appendChild(fragment);
  }
}

function toggleKnown(id) {
  if (state.known[id]) delete state.known[id];
  else state.known[id] = true;
  saveKnown(state.known);
  // Update just this item in DOM for speed
  const item = document.querySelector(`.glossary-item[data-id="${id}"]`);
  if (item) {
    const isKnown = !!state.known[id];
    item.classList.toggle('is-known', isKnown);
    const btn = item.querySelector('.gitem-check');
    btn.classList.toggle('checked', isKnown);
    btn.textContent = isKnown ? '✓' : '';
  }
  // Update badge
  document.getElementById('glossary-known-badge').textContent = `${Object.keys(state.known).length} known`;
  refreshHomeStats();
}

let noteSavedCallback = null;

function openNoteModal(id) {
  let card = null;
  for (const sec of getData(glossaryBook)) {
    card = sec.cards.find(c => c.id === id);
    if (card) break;
  }
  if (!card) return;
  openNoteModalForCard(card, renderGlossary);
}

function openNoteModalForCard(card, onSaved) {
  noteTargetId = card.id;
  noteSavedCallback = onSaved || null;

  const answer      = card.back.split('\n')[0];
  const translation = card.back.split('\n\n')[1] || '';

  document.getElementById('modal-word').textContent        = answer;
  document.getElementById('modal-translation').textContent = translation;
  document.getElementById('modal-textarea').value          = state.notes[card.id] || '';
  document.getElementById('note-modal').classList.remove('hidden');
  setTimeout(() => document.getElementById('modal-textarea').focus(), 100);
}

function saveNote() {
  const text = document.getElementById('modal-textarea').value.trim();
  if (text) state.notes[noteTargetId] = text;
  else delete state.notes[noteTargetId];
  saveNotes(state.notes);
  const cb = noteSavedCallback;
  closeNoteModal();
  if (cb) cb();
}

function closeNoteModal(e) {
  if (e && e.target !== document.getElementById('note-modal')) return;
  document.getElementById('note-modal').classList.add('hidden');
  noteTargetId = null;
  noteSavedCallback = null;
}

// ── Backup / Restore ──────────────────────────────────────────────────────────
function loadLastBackup() {
  return localStorage.getItem(BACKUP_KEY);
}
function markBackupDone() {
  localStorage.setItem(BACKUP_KEY, new Date().toISOString());
}

function exportBackup() {
  const payload = {
    type: 'english-app-backup',
    version: 1,
    exportedAt: new Date().toISOString(),
    progress: state.progress,
    notes: state.notes,
    known: state.known,
    streak: loadStreak(),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const dateStr = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `english-app-backup-${dateStr}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  markBackupDone();
  refreshHomeStats();
}

function triggerImportBackup() {
  document.getElementById('backup-file-input').click();
}

function importBackupFile(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!data || data.type !== 'english-app-backup') {
        alert('This file doesn\'t look like an English App backup.');
        return;
      }
      mergeBackup(data);
    } catch (e) {
      alert('Could not read that file. Make sure it\'s an unmodified backup .json.');
    } finally {
      input.value = '';
    }
  };
  reader.readAsText(file);
}

function mergeBackup(data) {
  // Merge, don't overwrite: newer per-card progress wins, notes/known are unioned.
  const incomingProgress = data.progress || {};
  let updatedCards = 0;
  Object.keys(incomingProgress).forEach(id => {
    const incoming = incomingProgress[id];
    const existing = state.progress[id];
    if (!existing || !existing.dueDate || (incoming.dueDate && incoming.dueDate > existing.dueDate)) {
      state.progress[id] = incoming;
      updatedCards++;
    }
  });
  saveProgress(state.progress);

  const incomingNotes = data.notes || {};
  Object.keys(incomingNotes).forEach(id => {
    if (!state.notes[id]) state.notes[id] = incomingNotes[id];
  });
  saveNotes(state.notes);

  const incomingKnown = data.known || {};
  Object.keys(incomingKnown).forEach(id => { state.known[id] = true; });
  saveKnown(state.known);

  if (data.streak && typeof data.streak.count === 'number') {
    const current = loadStreak();
    if (data.streak.count > current.count) saveStreak(data.streak);
  }

  refreshHomeStats();
  alert(`Backup imported. ${updatedCards} card(s) updated, notes and known words merged.`);
}

function formatLastBackup() {
  const iso = loadLastBackup();
  if (!iso) return 'Never backed up';
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (days <= 0) return 'Backed up today';
  if (days === 1) return 'Backed up 1 day ago';
  return `Backed up ${days} days ago`;
}

// ── Level test ────────────────────────────────────────────────────────────────
// One-shot diagnostic: 2-3 fixed-card questions per grammar section (Blue+Green,
// 29 sections total) — plus 1-2 dynamically generated exercises for the sections
// that already have a template — and a general random sample of vocab. Unlike
// blocked study, there's no theory pass and no manual Again/Hard/Good/Easy rating:
// correctness is scored automatically from the typed answer, exactly like Dynamic
// Tests. On finish, each section's hit rate decides known/due, so "Study due
// cards" and the glossary immediately reflect the diagnosis.
const LEVELTEST_PER_SECTION = 3;      // fixed cards sampled per grammar section
const LEVELTEST_TEMPLATE_EXTRA = 2;   // dynamic exercises added when a section has a template
const LEVELTEST_VOCAB_SAMPLE = 25;    // random vocab cards, no category weighting

// Maps a Blue/Green section title to the TEMPLATE_DATA ids that cover the same
// grammar point, so the level test can add live-generated exercises for it.
// Sections not listed here simply get no dynamic exercises (fixed cards only) —
// this mirrors the real coverage gap already documented in memory (only 12/29
// sections have a template).
const LEVELTEST_SECTION_TEMPLATES = {
  'blue:1':  ['present-simple-vs-continuous', 'past-simple', 'past-continuous'],
  'blue:2':  ['present-perfect'],
  'blue:4':  ['modals-obligation'],
  'blue:5':  ['conditionals'],
  'blue:6':  ['passive-voice'],
  'blue:12': ['relative-clauses'],
  'green:1': ['narrative-tenses'],
  'green:2': ['future-continuous-vs-perfect'],
  'green:5': ['would-rather', 'causative-verbs'],
};

let levelTestState = { queue: [], index: 0, exercise: null, correct: 0, total: 0, sectionStats: {} };

function startLevelTest() {
  const queue = buildLevelTestQueue();
  levelTestState = { queue: shuffle(queue), index: 0, exercise: null, correct: 0, total: 0, sectionStats: {} };
  showScreen('leveltest-study');
  loadLevelTestExercise();
}

function buildLevelTestQueue() {
  const items = [];

  ['blue', 'green'].forEach(book => {
    getData(book).forEach(sec => {
      const key = `${book}:${sec.section}`;
      const sampled = shuffle(sec.cards).slice(0, Math.min(LEVELTEST_PER_SECTION, sec.cards.length));
      sampled.forEach(card => items.push({
        kind: 'card', card, book, sectionKey: key, sectionTitle: sec.title
      }));

      const templateIds = LEVELTEST_SECTION_TEMPLATES[key] || [];
      const templates = getDynamicTemplates().filter(t => templateIds.includes(t.id));
      templates.forEach(tpl => {
        for (let i = 0; i < LEVELTEST_TEMPLATE_EXTRA; i++) {
          items.push({ kind: 'dynamic', template: tpl, book, sectionKey: key, sectionTitle: sec.title });
        }
      });
    });
  });

  const allVocab = getAllCards('vocab');
  shuffle(allVocab).slice(0, Math.min(LEVELTEST_VOCAB_SAMPLE, allVocab.length)).forEach(card => {
    items.push({ kind: 'card', card, book: 'vocab', sectionKey: 'vocab', sectionTitle: 'Vocabulary' });
  });

  return items;
}

// A level test item's section number for distractor pooling: blue/green
// items carry it in sectionKey ("blue:4" -> 4); vocab items' sectionKey is
// just the literal string "vocab", so the real section number comes from
// the card's own _section (set by getAllCards('vocab') in buildLevelTestQueue).
function levelTestItemSectionNum(item) {
  if (item.book === 'vocab') return item.card._section;
  return Number(item.sectionKey.split(':')[1]);
}

function loadLevelTestExercise() {
  const item = levelTestState.queue[levelTestState.index];
  if (!item) { finishLevelTest(); return; }

  let front, exercise;
  if (item.kind === 'dynamic') {
    const rand = makeRand();
    const gen = rand.pick(item.template.generators);
    exercise = gen.build(rand);
    front = exercise.front;
  } else {
    front = item.card.front;
  }
  levelTestState.exercise = exercise;

  document.getElementById('leveltest-title').textContent = `🎯 ${item.sectionTitle}`;
  document.getElementById('leveltest-counter').textContent =
    `${levelTestState.index + 1} / ${levelTestState.queue.length}`;
  document.getElementById('leveltest-progress-fill').style.width =
    Math.round((levelTestState.index / levelTestState.queue.length) * 100) + '%';

  document.getElementById('leveltest-phase-question').classList.remove('hidden');
  document.getElementById('leveltest-phase-correction').classList.add('hidden');
  document.getElementById('leveltest-front-text').textContent = front;

  const choiceArea = document.getElementById('leveltest-input-area');
  const multiArea = document.getElementById('leveltest-multi-blank-area');
  const freeTextArea = document.getElementById('leveltest-freetext-area');
  if (exercise && exercise.options) {
    // Dynamic Tests generator already built its own options (multiple-choice
    // type) — untouched, same as the Dynamic Tests screen.
    multiArea.classList.add('hidden');
    freeTextArea.classList.add('hidden');
    choiceArea.classList.remove('hidden');
    renderChoiceGroup(choiceArea, exercise.options, exercise.correct, (picked) => checkLevelTestAnswer(picked));
  } else if (exercise) {
    // Dynamic Tests generator with no built-in options (gap-fill type) —
    // there's no card/section to pool distractors from, so regenerate a
    // few more instances of the same template and use their distinct
    // `correct` values as distractors (always available, templates are
    // infinite by design).
    multiArea.classList.add('hidden');
    freeTextArea.classList.add('hidden');
    choiceArea.classList.remove('hidden');
    const options = buildChoiceOptions(exercise.correct, generateDynamicDistractorPool(item.template, exercise.correct), CHOICE_TARGET);
    renderChoiceGroup(choiceArea, options || [exercise.correct], exercise.correct, (picked) => checkLevelTestAnswer(picked));
  } else if (item.card.freeText) {
    choiceArea.classList.add('hidden');
    multiArea.classList.add('hidden');
    freeTextArea.classList.remove('hidden');
    const input = document.getElementById('leveltest-answer-input');
    input.value = '';
    setTimeout(() => input.focus(), 100);
  } else if (hasBlanks(item.card)) {
    choiceArea.classList.add('hidden');
    freeTextArea.classList.add('hidden');
    multiArea.classList.remove('hidden');
    renderMultiBlankChoices(multiArea, item.card, item.book, levelTestItemSectionNum(item), checkLevelTestMultiBlankAnswer);
  } else {
    multiArea.classList.add('hidden');
    freeTextArea.classList.add('hidden');
    choiceArea.classList.remove('hidden');
    const options = buildSingleChoiceOptions(item.card, item.book, levelTestItemSectionNum(item));
    const correctDisplay = getReadableAnswer(item.card);
    renderChoiceGroup(choiceArea, options || [correctDisplay], correctDisplay, (picked) => checkLevelTestAnswer(picked));
  }
}

function submitLevelTestFreeTextAnswer() {
  const input = document.getElementById('leveltest-answer-input');
  const val = input.value.trim();
  if (!val) return;
  checkLevelTestAnswer(val);
}

// Regenerates a template's exercises a handful of times to collect other
// `correct` values as multiple-choice distractors — used only for the
// level test's dynamic gap-fill items, which have no card/section to pool
// from otherwise. Skips options-based generators (already handled above)
// and any run that reproduces the same correct answer.
function generateDynamicDistractorPool(template, excludeCorrect) {
  const rand = makeRand();
  const pool = [];
  for (let i = 0; i < 12 && pool.length < CHOICE_TARGET * 2; i++) {
    const gen = rand.pick(template.generators);
    const ex = gen.build(rand);
    if (ex.options) continue;
    if (normalise(ex.correct) === normalise(excludeCorrect)) continue;
    pool.push(ex.correct);
  }
  return pool;
}

function checkLevelTestMultiBlankAnswer(answers) {
  const questionPhase = document.getElementById('leveltest-phase-question');
  if (questionPhase.classList.contains('hidden')) return;
  const item = levelTestState.queue[levelTestState.index];
  recordLevelTestAnswer(item, isAllBlanksCorrect(answers, item.card), answers);
}

function checkLevelTestAnswer(userAnswer) {
  const questionPhase = document.getElementById('leveltest-phase-question');
  if (questionPhase.classList.contains('hidden')) return; // already answered this exercise

  const item = levelTestState.queue[levelTestState.index];
  const exercise = levelTestState.exercise;
  const correct = exercise ? normalise(userAnswer) === normalise(exercise.correct) : isCorrect(userAnswer, item.card);
  recordLevelTestAnswer(item, correct, userAnswer);
}

function recordLevelTestAnswer(item, correct, userAnswer) {
  const exercise = levelTestState.exercise;

  levelTestState.total++;
  if (correct) levelTestState.correct++;

  const stat = levelTestState.sectionStats[item.sectionKey] ||
    (levelTestState.sectionStats[item.sectionKey] = { title: item.sectionTitle, book: item.book, correct: 0, total: 0, cardIds: [] });
  stat.total++;
  if (correct) stat.correct++;
  if (item.kind === 'card') stat.cardIds.push(item.card.id);

  const questionText = exercise ? exercise.front : item.card.front;
  const isMulti = !exercise && hasBlanks(item.card);
  const multiReview = document.getElementById('leveltest-multi-blank-review');
  const yourEl = document.getElementById('leveltest-correction-your');
  const correctEl = document.getElementById('leveltest-correction-correct');

  document.getElementById('leveltest-correction-question').textContent = questionText;
  if (isMulti) {
    yourEl.classList.add('hidden');
    correctEl.classList.add('hidden');
    renderMultiBlankReview(multiReview, item.card, userAnswer);
    multiReview.classList.remove('hidden');
    document.getElementById('leveltest-correction-extra').textContent = item.card.back.split('\n\n')[1] || '';
  } else {
    yourEl.classList.remove('hidden');
    correctEl.classList.remove('hidden');
    multiReview.classList.add('hidden');
    const correctText = exercise ? exercise.correct : getReadableAnswer(item.card);
    const extraText = exercise ? (exercise.explanation || '') : (item.card.back.split('\n\n')[1] || '');
    yourEl.textContent = userAnswer;
    yourEl.className = 'correction-your ' + (correct ? 'correct' : 'wrong');
    correctEl.textContent = correctText;
    document.getElementById('leveltest-correction-extra').textContent = extraText;
  }

  // Resolve SM-2 + known status right away for fixed cards, same signal
  // "Good"/nothing would give in a normal study session — a level test
  // answer is graded exactly like a real review, not a freebie.
  if (item.kind === 'card') {
    const prev = getCardProgress(item.card.id) || {};
    state.progress[item.card.id] = sm2(prev, correct ? 3 : 0);
    if (correct) { state.known[item.card.id] = true; }
  }

  document.getElementById('leveltest-phase-question').classList.add('hidden');
  document.getElementById('leveltest-phase-correction').classList.remove('hidden');
}

function nextLevelTestExercise() {
  levelTestState.index++;
  loadLevelTestExercise();
}

function exitLevelTest() {
  if (levelTestState.total > 0 && !confirm('Cancel the level test? Progress on answered questions is kept, the rest is discarded.')) return;
  finishLevelTest();
}

function finishLevelTest() {
  saveProgress(state.progress);
  saveKnown(state.known);
  updateStreak();
  refreshHomeStats();

  const { correct, total, sectionStats } = levelTestState;
  document.getElementById('leveltest-sum-correct').textContent = correct;
  document.getElementById('leveltest-sum-total').textContent = total;
  document.getElementById('leveltest-sum-pct').textContent = total > 0 ? Math.round((correct / total) * 100) + '%' : '0%';

  const weak = Object.entries(sectionStats)
    .filter(([key]) => key !== 'vocab')
    .map(([key, s]) => ({ key, ...s, pct: s.total > 0 ? s.correct / s.total : 1 }))
    .filter(s => s.pct < 0.7)
    .sort((a, b) => a.pct - b.pct);

  levelTestState.weakSections = weak;

  const list = document.getElementById('leveltest-weak-sections');
  list.innerHTML = '';
  if (weak.length === 0) {
    list.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:20px">💪 Strong across the board — nothing flagged for review!</div>';
  } else {
    const heading = document.createElement('p');
    heading.className = 'topics-hint';
    heading.textContent = 'Sections to review, weakest first:';
    list.appendChild(heading);
    weak.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'topic-item';
      btn.innerHTML = `
        <span class="topic-name">${s.title}</span>
        <span class="topic-count">${s.correct}/${s.total} · ${Math.round(s.pct * 100)}%</span>`;
      btn.onclick = () => startSection(s.book, Number(s.key.split(':')[1]));
      list.appendChild(btn);
    });
  }

  const startPlanBtn = document.getElementById('btn-leveltest-start-plan');
  startPlanBtn.classList.toggle('hidden', weak.length === 0);

  showScreen('leveltest-result', { skipPersist: true });
}

function startWeakestSection() {
  const weak = levelTestState.weakSections || [];
  if (weak.length === 0) return;
  const worst = weak[0];
  startSection(worst.book, Number(worst.key.split(':')[1]));
}

// ── Init ──────────────────────────────────────────────────────────────────────
refreshHomeStats();
restoreLastScreen();
