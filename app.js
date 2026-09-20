'use strict';

// ── Storage ──────────────────────────────────────────────────────────────────
const STORE_KEY = 'eng_cards_v1';
const STREAK_KEY = 'eng_streak_v1';

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
  catch { return {}; }
}
function saveProgress(p) {
  localStorage.setItem(STORE_KEY, JSON.stringify(p));
}
function loadStreak() {
  try { return JSON.parse(localStorage.getItem(STREAK_KEY)) || { count: 0, lastDate: null }; }
  catch { return { count: 0, lastDate: null }; }
}
function saveStreak(s) {
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
}

// ── SM-2 ──────────────────────────────────────────────────────────────────────
function sm2(card, rating) {
  let { interval = 1, repetitions = 0, easeFactor = 2.5 } = card || {};

  if (rating < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    repetitions += 1;
  }

  easeFactor = Math.max(1.3, easeFactor + 0.1 - (5 - rating) * (0.08 + (5 - rating) * 0.02));

  const due = new Date();
  due.setDate(due.getDate() + interval);

  return {
    interval,
    repetitions,
    easeFactor: Math.round(easeFactor * 1000) / 1000,
    dueDate: due.toISOString().slice(0, 10),
  };
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function isDue(card) {
  if (!card || !card.dueDate) return true;
  return card.dueDate <= todayStr();
}

// ── App state ─────────────────────────────────────────────────────────────────
let state = {
  currentBook: null,
  currentSection: null,
  isAllDue: false,
  queue: [],
  queueIndex: 0,
  flipped: false,
  sessionStats: { again: 0, hard: 0, good: 0, easy: 0 },
  progress: loadProgress(),
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function getData(book) {
  if (book === 'blue') return BLUE_DATA;
  if (book === 'green') return GREEN_DATA;
  return VOCAB_DATA;
}

function getAllCards(book) {
  return getData(book).flatMap(s => s.cards.map(c => ({ ...c, _section: s.section })));
}

function getAllCardsAllBooks() {
  return ['blue', 'green', 'vocab'].flatMap(b =>
    getData(b).flatMap(s => s.cards.map(c => ({ ...c, _book: b, _section: s.section })))
  );
}

function getCardProgress(cardId) {
  return state.progress[cardId] || null;
}

function countDue(book) {
  return getAllCards(book).filter(c => isDue(getCardProgress(c.id))).length;
}

function countStudied(book) {
  return getAllCards(book).filter(c => getCardProgress(c.id) !== null).length;
}

function totalCards(book) {
  return getAllCards(book).length;
}

function totalDueAll() {
  return getAllCardsAllBooks().filter(c => isDue(getCardProgress(c.id)) && getCardProgress(c.id) !== null).length;
}

// ── Screen navigation ─────────────────────────────────────────────────────────
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + name).classList.add('active');
}

function showBookMenu(book) {
  state.currentBook = book;
  const titles = { blue: '📘 Blue Book', green: '📗 Green Book', vocab: '📒 Vocabulary' };
  document.getElementById('book-menu-title').textContent = titles[book] || 'Sections';
  renderSectionList(book);
  showScreen('book');
}

function exitStudy() {
  const done = state.sessionStats.again + state.sessionStats.hard +
               state.sessionStats.good + state.sessionStats.easy;
  if (done > 0) {
    showSummary();
  } else if (state.isAllDue) {
    showScreen('home');
  } else {
    showScreen('book');
  }
}

// ── Section list ──────────────────────────────────────────────────────────────
function renderSectionList(book) {
  const data = getData(book);
  const list = document.getElementById('section-list');
  list.innerHTML = '';

  data.forEach(sec => {
    const due = sec.cards.filter(c => isDue(getCardProgress(c.id)) && getCardProgress(c.id) !== null).length;
    const newCount = sec.cards.filter(c => getCardProgress(c.id) === null).length;
    const done = sec.cards.length - newCount;
    const total = sec.cards.length;

    let badge, badgeClass;
    if (newCount === total) { badge = 'New'; badgeClass = ''; }
    else if (done === total) { badge = 'Done ✓'; badgeClass = 'done'; }
    else if (due > 0) { badge = `${due} due`; badgeClass = 'due'; }
    else { badge = `${done}/${total}`; badgeClass = ''; }

    const unitsHtml = sec.units
      ? `<span class="section-units">Units ${sec.units}</span>` : '';

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
  state.sessionStats = { again: 0, hard: 0, good: 0, easy: 0 };

  const due = sec.cards.filter(c => isDue(getCardProgress(c.id)) && getCardProgress(c.id) !== null);
  const newCards = sec.cards.filter(c => getCardProgress(c.id) === null);
  const notDue = sec.cards.filter(c => !isDue(getCardProgress(c.id)));

  state.queue = [...shuffle(due), ...shuffle(newCards), ...notDue];
  state.queueIndex = 0;

  document.getElementById('study-title').textContent = sec.title;
  showScreen('study');
  loadCard();
}

function startAllDue() {
  const due = getAllCardsAllBooks().filter(
    c => isDue(getCardProgress(c.id)) && getCardProgress(c.id) !== null
  );
  if (due.length === 0) return;

  state.currentBook = null;
  state.currentSection = null;
  state.isAllDue = true;
  state.sessionStats = { again: 0, hard: 0, good: 0, easy: 0 };
  state.queue = shuffle(due);
  state.queueIndex = 0;

  document.getElementById('study-title').textContent = 'All due cards';
  showScreen('study');
  loadCard();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Card rendering ────────────────────────────────────────────────────────────
function renderCardBack(card) {
  const el = document.getElementById('card-back');
  // Vocab cards: id starts with 'v' — split answer and translation
  if (card.id && card.id.startsWith('v')) {
    const parts = card.back.split('\n\n');
    const answer = parts[0] || '';
    const translation = parts[1] || '';
    el.innerHTML = `<div>
      <div class="answer-main">${answer}</div>
      ${translation ? `<div class="answer-translation">${translation}</div>` : ''}
    </div>`;
  } else {
    el.textContent = card.back;
  }
}

function loadCard() {
  const card = state.queue[state.queueIndex];
  if (!card) { showSummary(); return; }

  state.flipped = false;

  document.getElementById('card-front').textContent = card.front;
  renderCardBack(card);
  document.getElementById('card-inner').classList.remove('flipped');
  document.getElementById('tap-hint').classList.remove('hidden');
  document.getElementById('rating-wrap').classList.remove('visible');

  const total = state.queue.length;
  const idx = state.queueIndex + 1;
  document.getElementById('study-counter').textContent = `${idx} / ${total}`;

  const pct = Math.round(((idx - 1) / total) * 100);
  document.getElementById('progress-bar-fill').style.width = pct + '%';
}

function flipCard() {
  if (state.flipped) return;
  state.flipped = true;
  document.getElementById('card-inner').classList.add('flipped');
  document.getElementById('tap-hint').classList.add('hidden');
  document.getElementById('rating-wrap').classList.add('visible');
}

function rateCard(rating) {
  const card = state.queue[state.queueIndex];
  if (!card) return;

  const prev = getCardProgress(card.id) || {};
  state.progress[card.id] = sm2(prev, rating);
  saveProgress(state.progress);

  if (rating === 0) state.sessionStats.again++;
  else if (rating === 1) state.sessionStats.hard++;
  else if (rating === 3) state.sessionStats.good++;
  else if (rating === 5) state.sessionStats.easy++;

  state.queueIndex++;
  if (state.queueIndex < state.queue.length) {
    loadCard();
  } else {
    updateStreak();
    showSummary();
  }
}

// ── Summary ───────────────────────────────────────────────────────────────────
function showSummary() {
  const { again, hard, good, easy } = state.sessionStats;
  document.getElementById('sum-again').textContent = again;
  document.getElementById('sum-hard').textContent = hard;
  document.getElementById('sum-good').textContent = good;
  document.getElementById('sum-easy').textContent = easy;
  showScreen('summary');
  refreshHomeStats();
}

function studyAgain() {
  if (state.isAllDue) {
    startAllDue();
  } else if (state.currentSection) {
    startSection(state.currentBook, state.currentSection.section);
  } else {
    showScreen('home');
  }
}

// ── Streak ────────────────────────────────────────────────────────────────────
function updateStreak() {
  const s = loadStreak();
  const today = todayStr();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().slice(0, 10);

  if (s.lastDate === today) return;
  if (s.lastDate === yStr) s.count += 1;
  else s.count = 1;
  s.lastDate = today;
  saveStreak(s);
}

// ── Home stats ────────────────────────────────────────────────────────────────
function refreshHomeStats() {
  const blueStudied = countStudied('blue');
  const greenStudied = countStudied('green');
  const vocabStudied = countStudied('vocab');

  document.getElementById('progress-blue').textContent =
    `${blueStudied} / ${totalCards('blue')} studied`;
  document.getElementById('progress-green').textContent =
    `${greenStudied} / ${totalCards('green')} studied`;
  document.getElementById('progress-vocab').textContent =
    `${vocabStudied} / ${totalCards('vocab')} studied`;

  const due = totalDueAll();
  const total = blueStudied + greenStudied + vocabStudied;
  const streak = loadStreak().count;

  document.getElementById('stat-streak').textContent = streak;
  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-due').textContent = due;

  const dueBtn = document.getElementById('btn-study-due');
  const dueBadge = document.getElementById('due-badge');
  dueBadge.textContent = due;
  if (due === 0) {
    dueBtn.disabled = true;
    document.getElementById('due-label').textContent = 'No cards due';
  } else {
    dueBtn.disabled = false;
    document.getElementById('due-label').textContent = 'Study due cards';
  }
}

// ── Init ──────────────────────────────────────────────────────────────────────
refreshHomeStats();
