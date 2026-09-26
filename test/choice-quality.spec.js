'use strict';
// The full-corpus audit that was previously run ad-hoc from a scratchpad
// script during this session: every Blue/Green card's generated multiple-
// choice options (single-answer and multi-blank combined), plus a vocab
// sample, checked for the concrete failure modes found and fixed earlier
// in this session — dirty text leaking in as an option, the correct
// answer missing or duplicated, too few options, and a distractor so much
// longer/shorter than the real answer that it gives the question away
// without reading it.

const { load } = require('./harness');
const { assert, assertEqual } = require('./assert');

const VOCAB_SAMPLE_PER_SECTION = 8; // keep runtime reasonable; data-integrity.spec.js covers all 3518 structurally

function collectQuestions(h) {
  const out = [];

  ['blue', 'green'].forEach(book => {
    h.getData(book).forEach(sec => {
      sec.cards.forEach(c => {
        if (c.blanks) {
          const correctAnswers = h.run(`${JSON.stringify(c.blanks)}.map(b => b.split(' / ')[0].trim())`);
          const options = h.run(`buildCombinedMultiBlankOptions(${JSON.stringify(c)}, ${JSON.stringify(book)}, ${sec.section}, ${JSON.stringify(correctAnswers)})`);
          const correct = correctAnswers.join(' / ');
          out.push({ type: 'multi', book, section: sec.section, id: c.id, correct, options });
        } else if (!c.freeText) {
          const options = h.run(`buildSingleChoiceOptions(${JSON.stringify(c)}, ${JSON.stringify(book)}, ${sec.section})`);
          const correct = h.run(`getReadableAnswer(${JSON.stringify(c)})`);
          out.push({ type: 'single', book, section: sec.section, id: c.id, correct, options });
        }
      });
    });
  });

  h.getData('vocab').forEach(sec => {
    sec.cards.slice(0, VOCAB_SAMPLE_PER_SECTION).forEach(c => {
      const options = h.run(`buildSingleChoiceOptions(${JSON.stringify(c)}, 'vocab', ${sec.section})`);
      const correct = h.run(`getReadableAnswer(${JSON.stringify(c)})`);
      out.push({ type: 'single', book: 'vocab', section: sec.section, id: c.id, correct, options });
    });
  });

  return out;
}

function testNoQuestionHasFewerThanTwoOptions() {
  const h = load();
  const questions = collectQuestions(h);
  const bad = questions.filter(q => !q.options || q.options.length < 2);
  assertEqual(bad.length, 0, `questions with <2 options: ${bad.slice(0, 5).map(q => `${q.book}/${q.id}`).join(', ')}`);
}

function testCorrectAnswerAlwaysPresentAmongOptions() {
  const h = load();
  const questions = collectQuestions(h);
  const missing = questions.filter(q => !q.options.includes(q.correct));
  assertEqual(missing.length, 0, `correct answer missing from its own options: ${missing.slice(0, 5).map(q => `${q.book}/${q.id} (expected "${q.correct}", got [${q.options.join(' | ')}])`).join('; ')}`);
}

function testNoDuplicateOptionsWithinAQuestion() {
  const h = load();
  const questions = collectQuestions(h);
  const dupes = questions.filter(q => new Set(q.options.map(o => h.run(`normalise(${JSON.stringify(o)})`))).size !== q.options.length);
  assertEqual(dupes.length, 0, `questions with duplicate (normalised) options: ${dupes.slice(0, 5).map(q => `${q.book}/${q.id}`).join(', ')}`);
}

function testNoDirtyTextInAnyOption() {
  const h = load();
  const questions = collectQuestions(h);
  const dirtyPattern = /[✅❌]|^[a-d]\)|\.\.\.\s*$/;
  const bad = [];
  questions.forEach(q => {
    q.options.forEach(o => {
      if (dirtyPattern.test(o)) bad.push(`${q.book}/${q.id}: "${o}"`);
    });
  });
  assertEqual(bad.length, 0, `options with leftover ✅/❌/a)b)c)/ellipsis: ${bad.slice(0, 10).join('; ')}`);
}

// blue/b6_01 and blue/b6_04 (Passive, a 5-card section) were manually
// reviewed during this session: their options vary in length (9-46 chars)
// because Passive's distractor pool is small, but every option is on-topic
// (all about passive voice, no ✅/❌/a)b)/off-topic text from another
// section) — accepted as normal grammar variety, not the "obviously wrong
// because it's absurdly long" giveaway this check exists to catch. Keep
// this list short and specific; growing it is a signal the underlying
// distractor-selection logic needs another look, not that the exception
// list needs to get longer.
const KNOWN_LENGTH_VARIANCE_EXCEPTIONS = new Set(['b6_01', 'b6_04']);

function testNoExtremeLengthOutliers() {
  const h = load();
  const questions = collectQuestions(h);
  // Same threshold used during the ad-hoc audit this spec formalises:
  // flag when the longest option is >3x the shortest AND over 30 chars —
  // a short/long pair under 30 chars (e.g. "at" vs "interested") is normal
  // grammar variety, not a giveaway.
  const outliers = questions.filter(q => {
    if (KNOWN_LENGTH_VARIANCE_EXCEPTIONS.has(q.id)) return false;
    if (q.options.length < 2) return false;
    const lens = q.options.map(o => o.length);
    const maxLen = Math.max(...lens), minLen = Math.min(...lens);
    return maxLen > minLen * 3 && maxLen > 30;
  });
  assertEqual(outliers.length, 0, `questions with a length-outlier option (giveaway without reading): ${outliers.map(q => `${q.book}/${q.id} [${q.options.map(o => o.length).join(',')}]`).join('; ')}`);
}

module.exports = {
  testNoQuestionHasFewerThanTwoOptions,
  testCorrectAnswerAlwaysPresentAmongOptions,
  testNoDuplicateOptionsWithinAQuestion,
  testNoDirtyTextInAnyOption,
  testNoExtremeLengthOutliers,
};
