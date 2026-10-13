'use strict';
// Structural checks on the card data itself — catches typos/copy-paste
// mistakes in data/*.js before they surface as a broken question in the
// app (missing front/back, duplicate ids across books, a `blanks` entry
// that doesn't line up with the number of ___ in `front`, etc).

const { load } = require('./harness');
const { assert, assertEqual } = require('./assert');

function testNoDuplicateIdsAcrossBooks() {
  const h = load();
  const ids = new Map(); // id -> book
  const dupes = [];
  ['blue', 'green', 'vocab', 'sherlock'].forEach(book => {
    h.allCards(book).forEach(c => {
      if (ids.has(c.id)) dupes.push(`${c.id} in both ${ids.get(c.id)} and ${book}`);
      ids.set(c.id, book);
    });
  });
  assert(dupes.length === 0, `duplicate card ids found: ${dupes.slice(0, 10).join(', ')}${dupes.length > 10 ? ` (+${dupes.length - 10} more)` : ''}`);
}

function testEveryCardHasFrontAndBack() {
  const h = load();
  const broken = [];
  ['blue', 'green', 'vocab', 'sherlock'].forEach(book => {
    h.allCards(book).forEach(c => {
      if (!c.front || !c.front.trim()) broken.push(`${book}/${c.id}: empty front`);
      if (!c.back || !c.back.trim()) broken.push(`${book}/${c.id}: empty back`);
    });
  });
  assert(broken.length === 0, `cards with missing front/back: ${broken.slice(0, 10).join(', ')}`);
}

function testBlanksCountMatchesFrontBlanks() {
  const h = load();
  const mismatched = [];
  ['blue', 'green'].forEach(book => {
    h.allCards(book).forEach(c => {
      if (!c.blanks) return;
      const blankMarkers = (c.front.match(/_{3,}/g) || []).length;
      if (blankMarkers !== c.blanks.length) {
        mismatched.push(`${book}/${c.id}: front has ${blankMarkers} blanks, card.blanks has ${c.blanks.length}`);
      }
    });
  });
  assert(mismatched.length === 0, `blanks/___ count mismatch: ${mismatched.join('; ')}`);
}

function testEveryBlankHasNonEmptyAlternatives() {
  const h = load();
  const empty = [];
  ['blue', 'green'].forEach(book => {
    h.allCards(book).forEach(c => {
      if (!c.blanks) return;
      c.blanks.forEach((b, i) => {
        const alts = b.split(' / ').map(s => s.trim()).filter(Boolean);
        if (alts.length === 0) empty.push(`${book}/${c.id} blank[${i}]`);
      });
    });
  });
  assert(empty.length === 0, `blanks with no usable alternative text: ${empty.join(', ')}`);
}

function testGetCorrectAnswersNeverEmpty() {
  const h = load();
  const broken = [];
  ['blue', 'green', 'vocab', 'sherlock'].forEach(book => {
    h.allCards(book).forEach(c => {
      if (c.blanks) return; // multi-blank cards don't use getCorrectAnswers
      const answers = h.run(`getCorrectAnswers(${JSON.stringify(c)})`);
      if (!answers || answers.length === 0) broken.push(`${book}/${c.id}`);
    });
  });
  assert(broken.length === 0, `getCorrectAnswers() returned nothing for: ${broken.slice(0, 10).join(', ')}`);
}

function testGetReadableAnswerNeverEmptyOrDirty() {
  const h = load();
  const broken = [];
  ['blue', 'green'].forEach(book => {
    h.allCards(book).forEach(c => {
      const ans = h.run(`getReadableAnswer(${JSON.stringify(c)})`);
      if (!ans || !ans.trim()) { broken.push(`${book}/${c.id}: empty`); return; }
      if (/[✅❌]|^[a-d]\)/.test(ans)) broken.push(`${book}/${c.id}: dirty text "${ans}"`);
    });
  });
  assertEqual(broken.length, 0, `getReadableAnswer produced empty/dirty output: ${broken.join('; ')}`);
}

function testSectionNumbersUniqueWithinBook() {
  const h = load();
  ['blue', 'green', 'vocab', 'sherlock'].forEach(book => {
    const sections = h.getData(book).map(s => s.section);
    const unique = new Set(sections);
    assertEqual(unique.size, sections.length, `${book} has duplicate section numbers`);
  });
}


// data/extras.js: every entry points at a real card, example sentences have
// exactly one ___, aren't the card's own sentence and don't leak the answer.
function testCardExtrasAreWellFormed() {
  const h = load();
  const extras = h.run('CARD_EXTRAS');
  const byId = {};
  h.run('getAllCardsAllBooks()').forEach(c => { byId[c.id] = c; });
  const problems = [];
  Object.entries(extras).forEach(([id, x]) => {
    const card = byId[id];
    if (!card) { problems.push(`${id}: no such card`); return; }
    if (x.us !== undefined && (typeof x.us !== 'string' || !x.us.trim())) problems.push(`${id}: empty us`);
    if (x.dated !== undefined && x.dated !== true) problems.push(`${id}: dated must be true`);
    if (x.ex === undefined) return;
    if (!Array.isArray(x.ex) || x.ex.length < 3) { problems.push(`${id}: ex needs 3+ sentences`); return; }
    if (card.blanks) problems.push(`${id}: multi-blank cards can't use an example bank`);
    const own = card.front.split('\n\n')[0].trim();
    const answer = h.run(`getReadableAnswer(${JSON.stringify(card)})`).toLowerCase();
    if (new Set(x.ex).size !== x.ex.length) problems.push(`${id}: duplicate example`);
    x.ex.forEach(e => {
      if ((e.match(/___/g) || []).length !== 1) problems.push(`${id}: "${e}" needs exactly one ___`);
      if (/___[a-z]/i.test(e)) problems.push(`${id}: "${e}" glues a suffix to the blank — the answer must fit as-is`);
      const words = e.replace(/___/g, '').replace(/[.!?"—-]/g, ' ').trim().split(/\s+/).filter(Boolean);
      if (words.length < 3) problems.push(`${id}: "${e}" is too short to give real context`);
      if (/\.\.\.\s*[A-Z]/.test(e) || e.includes('=>')) problems.push(`${id}: "${e}" looks like an unfinished draft`);
      if (e.trim() === own) problems.push(`${id}: example repeats the card's own sentence`);
      if (answer.length > 3 && e.toLowerCase().includes(answer)) problems.push(`${id}: "${e}" gives the answer away`);
    });
  });
  assert(problems.length === 0, `bad CARD_EXTRAS entries:\n  ${problems.slice(0, 20).join('\n  ')}${problems.length > 20 ? `\n  (+${problems.length - 20} more)` : ''}`);
}

module.exports = {
  testCardExtrasAreWellFormed,
  testNoDuplicateIdsAcrossBooks,
  testEveryCardHasFrontAndBack,
  testBlanksCountMatchesFrontBlanks,
  testEveryBlankHasNonEmptyAlternatives,
  testGetCorrectAnswersNeverEmpty,
  testGetReadableAnswerNeverEmptyOrDirty,
  testSectionNumbersUniqueWithinBook,
};
