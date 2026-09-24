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
  // For vocab cards back is "answer1 / answer2\n\ntranslation"
  // For grammar cards back is full explanation — first line is the answer
  const firstLine = card.back.split('\n')[0];
  // Split by " / " to get alternates
  return firstLine.split(' / ').map(a => normalise(a.replace(/\(.*?\)/g, '').trim())).filter(Boolean);
}

function isCorrect(userInput, card) {
  const user = normalise(userInput);
  return getCorrectAnswers(card).some(ans => user === ans);
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

// ── Blocked study: theory -> practice loop, Duolingo-style ─────────────────────
// Splits a queue into chunks of BLOCK_SIZE. Each block is shown as a theory
// pass (read every card, front+back, no quiz) followed by a practice loop
// where a missed card is pushed back into the block's queue instead of just
// moving on, so it keeps reappearing until answered correctly once. Only
// then does the next block start (back to its own theory pass).
function beginBlockedStudy(cards, title) {
  state.sessionStats = { again: 0, hard: 0, good: 0, easy: 0 };
  state.blocks = [];
  for (let i = 0; i < cards.length; i += BLOCK_SIZE) state.blocks.push(cards.slice(i, i + BLOCK_SIZE));
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
  document.getElementById('theory-back').textContent = card.back.split('\n\n')[0];
  const blockLabel = state.blocks.length > 1 ? `Block ${state.blockIndex + 1}/${state.blocks.length} · ` : '';
  document.getElementById('theory-counter').textContent = `${blockLabel}${state.theoryIndex + 1}/${block.length}`;
  const nextBtn = document.getElementById('btn-theory-next');
  nextBtn.textContent = state.theoryIndex + 1 < block.length ? 'Next →' : "Start practice →";
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

// ── Card rendering ────────────────────────────────────────────────────────────
function loadCard() {
  const card = state.blockQueue[0];
  if (!card) { finishCurrentBlock(); return; }
  document.querySelectorAll('.btn-rate').forEach(b => b.disabled = false);

  // Show question phase
  document.getElementById('phase-question').classList.remove('hidden');
  document.getElementById('phase-correction').classList.add('hidden');
  document.getElementById('card-front-text').textContent = card.front;

  const input = document.getElementById('answer-input');
  input.value = '';
  setTimeout(() => input.focus(), 100);

  const blockTotal = state.blocks[state.blockIndex].length;
  const remaining = state.blockQueue.length;
  const blockLabel = state.blocks.length > 1 ? `Block ${state.blockIndex + 1}/${state.blocks.length} · ` : '';
  document.getElementById('study-counter').textContent = `${blockLabel}${remaining} left`;
  document.getElementById('progress-bar-fill').style.width =
    Math.round(((blockTotal - remaining) / blockTotal) * 100) + '%';
}

function checkAnswer() {
  if (document.getElementById('phase-question').classList.contains('hidden')) return; // already answered
  const card = state.blockQueue[0];
  if (!card) return;
  const input = document.getElementById('answer-input');
  const userAnswer = input.value.trim();
  if (!userAnswer) return;

  const correct = isCorrect(userAnswer, card);
  state.lastAnswerCorrect = correct;

  // Build correction view
  document.getElementById('correction-question').textContent = card.front;

  const yourEl = document.getElementById('correction-your');
  yourEl.textContent = userAnswer || '(empty)';
  yourEl.className = 'correction-your ' + (correct ? 'correct' : 'wrong');

  // Correct answer: first line of back
  const firstLine = card.back.split('\n')[0];
  document.getElementById('correction-correct').textContent = firstLine;

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
  const input = document.getElementById('answer-input');
  input.value = '';
  setTimeout(() => input.focus(), 100);
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

// ── Init ──────────────────────────────────────────────────────────────────────
refreshHomeStats();
restoreLastScreen();
