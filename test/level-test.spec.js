'use strict';
// End-to-end level test runs: answering everything correctly must yield
// 100%, answering everything wrong must yield 0% without crashing, and
// both must land on the result screen. Also checks the per-section stats
// used to build the "weak sections" list are internally consistent.

const { load } = require('./harness');
const { assert, assertEqual } = require('./assert');

function testAllCorrectYieldsFullScore() {
  const h = load();
  const result = h.runFullLevelTest('correct');
  assertEqual(result.finalScreen, 'screen-leveltest-result', 'level test did not end on the result screen');
  assert(result.total > 0, 'level test produced zero questions');
  assertEqual(result.correct, result.total, `expected every question correct (${result.total}), got ${result.correct}`);
}

function testAllWrongYieldsZeroScoreWithoutCrashing() {
  const h = load();
  const result = h.runFullLevelTest('wrong');
  assertEqual(result.finalScreen, 'screen-leveltest-result', 'level test did not end on the result screen after an all-wrong run');
  assertEqual(result.correct, 0, `expected zero correct answers, got ${result.correct}`);
  assert(result.total > 0, 'level test produced zero questions');
}

function testSectionStatsTotalsMatchOverallTotal() {
  const h = load();
  const result = h.runFullLevelTest('correct');
  const summed = Object.values(result.sectionStats).reduce((sum, s) => sum + s.total, 0);
  assertEqual(summed, result.total, 'sum of per-section question counts does not match the overall total');
}

function testFinishLevelTestPersistsProgress() {
  const h = load();
  h.runFullLevelTest('correct');
  const progress = h.run('state.progress');
  const known = h.run('state.known');
  assert(Object.keys(progress).length > 0, 'level test finished without writing anything to state.progress');
  assert(Object.keys(known).length > 0, 'an all-correct level test should have marked at least some cards known');
  // Confirm it actually reached localStorage, not just in-memory state —
  // finishLevelTest() calls saveProgress()/saveKnown() explicitly.
  const stored = JSON.parse(h.localStorage.getItem('eng_known_v1') || '{}');
  assert(Object.keys(stored).length > 0, 'known cards were not persisted to localStorage (eng_known_v1)');
}

function testCancellingMidTestKeepsAnsweredProgress() {
  const h = load();
  h.call('startLevelTest');
  // Answer exactly 3 questions correctly, then bail out via exitLevelTest()
  // — app.js prompts confirm() first; the dom-shim's confirm() defaults to
  // true, so this exercises the "confirmed cancel" path.
  for (let i = 0; i < 3; i++) {
    h.answerCurrentLevelTestItem('correct');
    h.call('nextLevelTestExercise');
  }
  const answeredSoFar = h.run('levelTestState.total');
  assertEqual(answeredSoFar, 3, 'expected exactly 3 questions answered before cancelling');
  h.call('exitLevelTest');
  assertEqual(h.activeScreenId(), 'screen-leveltest-result', 'exitLevelTest() should still land on the result screen');
  assertEqual(h.run('levelTestState.total'), 3, 'cancelling mid-test should not discard already-answered questions');
}

module.exports = {
  testAllCorrectYieldsFullScore,
  testAllWrongYieldsZeroScoreWithoutCrashing,
  testSectionStatsTotalsMatchOverallTotal,
  testFinishLevelTestPersistsProgress,
  testCancellingMidTestKeepsAnsweredProgress,
};
