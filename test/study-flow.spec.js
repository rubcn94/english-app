'use strict';
// Full blocked-study sessions (theory -> practice loop -> next block ->
// summary) end to end, for the three shapes that matter: a large vocab
// section (many blocks), a small Blue section (exercises the whole-book
// distractor-pool fallback), and a section containing multi-blank cards.

const { load } = require('./harness');
const { assert, assertEqual } = require('./assert');

function testVocabSectionCompletesAllCorrect() {
  const h = load();
  const sectionCards = h.getData('vocab').find(s => s.section === 1).cards.length;
  h.call('startSection', 'vocab', 1);
  const res = h.runFullBlockedStudy('correct');
  assertEqual(h.activeScreenId(), 'screen-summary', 'did not reach summary screen');
  assertEqual(res.answers.length, sectionCards, 'answered a different number of cards than the section contains');
  assert(res.answers.every(a => true), 'sanity: answers array present');
  // Answering everything correctly on the first try means the practice
  // loop never requeues, so every card graduates -> known.
  const knownCount = Object.keys(h.run('state.known')).length;
  assertEqual(knownCount, sectionCards, 'not every card in the section was marked known after an all-correct run');
}

function testSherlockEpisodeCompletesAllCorrect() {
  const h = load();
  const sectionCards = h.getData('sherlock').find(s => s.section === 1).cards.length;
  h.call('startSection', 'sherlock', 1);
  const res = h.runFullBlockedStudy('correct');
  assertEqual(h.activeScreenId(), 'screen-summary', 'did not reach summary screen for Sherlock episode');
  assertEqual(res.answers.length, sectionCards, 'answered a different number of cards than the episode contains');
}

function testEpisodeGlossaryShowsOnlyThatEpisodeInOrder() {
  const h = load();
  const ep = h.getData('sherlock').find(s => s.section === 4);
  h.call('showEpisodeGlossary', 4);
  assertEqual(h.activeScreenId(), 'screen-glossary', 'episode glossary did not open');
  const ids = h.run('getCurrentGlossaryCards().map(c => c.id)');
  assertEqual(JSON.stringify(ids), JSON.stringify(ep.cards.map(c => c.id)), 'episode glossary is not exactly that episode in data order');
  h.call('exitGlossary');
  assertEqual(h.activeScreenId(), 'screen-book', 'Back from an episode glossary should return to the episode list');
}

function testSmallBlueSectionUsesWholeBookFallback() {
  const h = load();
  // Section 12 (Relative Clauses) is one of the smallest Blue sections —
  // exercises getDistractorPool()'s fallback to the whole book.
  const section = h.getData('blue').find(s => s.section === 12);
  assert(section.cards.length <= 5, 'test assumption violated: blue section 12 is no longer small — pick a different small section');
  h.call('startSection', 'blue', 12);
  const res = h.runFullBlockedStudy('correct');
  assertEqual(h.activeScreenId(), 'screen-summary', 'did not reach summary screen for small section');
  assertEqual(res.answers.length, section.cards.length, 'answered a different number of cards than the section contains');
}

function testSectionWithMultiBlankCardsCompletes() {
  const h = load();
  // Blue section 2 (Present Perfect & Past) contains several multi-blank
  // cards (b2_01, b2_04, b2_08, b2_09 as of this writing).
  const section = h.getData('blue').find(s => s.section === 2);
  const multiBlankCount = section.cards.filter(c => c.blanks).length;
  assert(multiBlankCount > 0, 'test assumption violated: blue section 2 has no multi-blank cards anymore — pick a different section');
  h.call('startSection', 'blue', 2);
  const res = h.runFullBlockedStudy('correct');
  assertEqual(h.activeScreenId(), 'screen-summary', 'did not reach summary screen for multi-blank section');
  const multiAnswered = res.answers.filter(a => a.wasMulti).length;
  assertEqual(multiAnswered, multiBlankCount, 'not every multi-blank card in the section was answered via the multi-blank path');
}

function testWrongAnswerRequeuesAndDoesNotGraduate() {
  const h = load();
  h.call('startSection', 'blue', 12);
  h.driveTheoryPass();
  const firstCardId = h.run('state.blockQueue[0].id');
  const initialLen = h.run('state.blockQueue.length');
  h.answerCurrentCard('wrong');
  assertEqual(h.run('state.lastAnswerCorrect'), false, 'lastAnswerCorrect should be false after a wrong pick');
  h.rate(3); // SM-2 rating is independent of correctness per app.js design
  const afterLen = h.run('state.blockQueue.length');
  assertEqual(afterLen, initialLen, 'a wrong answer should shift the card off the front and push it to the back (net queue length unchanged)');
  const stillPresent = h.run(`state.blockQueue.some(c => c.id === ${JSON.stringify(firstCardId)})`);
  assert(stillPresent, 'the wrongly-answered card should still be in blockQueue (requeued), not dropped');
  const known = h.run('state.known');
  assert(!known[firstCardId], 'a card answered wrong should NOT be marked known');
}

function testCorrectAnswerGraduatesAndMarksKnown() {
  const h = load();
  h.call('startSection', 'blue', 12);
  h.driveTheoryPass();
  const cardId = h.run('state.blockQueue[0].id');
  const initialLen = h.run('state.blockQueue.length');
  h.answerCurrentCard('correct');
  assertEqual(h.run('state.lastAnswerCorrect'), true, 'lastAnswerCorrect should be true after picking the correct option');
  h.rate(3);
  const afterLen = h.run('state.blockQueue.length');
  assertEqual(afterLen, initialLen - 1, 'a correct answer should remove the card from blockQueue without requeuing it');
  const known = h.run('state.known');
  assert(known[cardId], 'a card answered correctly should be marked known');
}

function testAllDueQueueAcrossBooksCompletes() {
  const h = load();
  // Manually mark a handful of cards from different books as due (dueDate
  // in the past) so startAllDue() has something to pull from, then drive
  // the resulting session to completion.
  h.run(`
    (function() {
      const past = '2000-01-01';
      const sample = [
        ...getAllCards('blue').slice(0, 2),
        ...getAllCards('green').slice(0, 2),
        ...getAllCards('vocab').slice(0, 2),
      ];
      sample.forEach(c => { state.progress[c.id] = { interval: 1, repetitions: 1, easeFactor: 2.5, dueDate: past }; });
    })()
  `);
  h.call('startAllDue');
  assertEqual(h.activeScreenId(), 'screen-study', 'startAllDue did not open the study screen with due cards present');
  const res = h.runFullBlockedStudy('correct');
  assertEqual(h.activeScreenId(), 'screen-summary', 'all-due session across books did not reach summary');
  assertEqual(res.answers.length, 6, 'expected exactly the 6 manually-due cards to be answered');
}

module.exports = {
  testSherlockEpisodeCompletesAllCorrect,
  testEpisodeGlossaryShowsOnlyThatEpisodeInOrder,
  testVocabSectionCompletesAllCorrect,
  testSmallBlueSectionUsesWholeBookFallback,
  testSectionWithMultiBlankCardsCompletes,
  testWrongAnswerRequeuesAndDoesNotGraduate,
  testCorrectAnswerGraduatesAndMarksKnown,
  testAllDueQueueAcrossBooksCompletes,
};
