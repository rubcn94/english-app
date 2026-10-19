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

function testFirstIntervalsDependOnTheButton() {
  const h = load();
  const iv = r => h.run(`sm2(null, ${r}).interval`);
  assertEqual(iv(3), 1, 'Hard on a new card → tomorrow');
  assertEqual(iv(4), 3, 'Good on a new card → 3 days');
  assertEqual(iv(5), 7, 'Easy on a new card → a week');
  h.ctx.__p = { interval: 3, repetitions: 1, easeFactor: 2.5 };
  assertEqual(h.run('sm2(__p, 4).interval'), 7, 'second Good → a week');
}

function testReviewsAreCappedAndMixedWithNewCards() {
  const h = load();
  const sec = h.getData('vocab').find(s => s.section === 1);
  const studied = sec.cards.slice(0, 50).map(c => c.id);
  markProgress(h, studied, PAST);
  h.call('startSection', 'vocab', 1);
  const q = h.run('state.blocks.flat().map(c => c._isNew)');
  assertEqual(q.filter(x => !x).length, 20, 'at most 20 reviews per session');
  assertEqual(q.filter(x => x).length, 10, 'new cards still get in when reviews pile up');
  assert(q.slice(0, 10).includes(true), 'new cards should be mixed in, not left for the end');
}

function testDailyReviewLimitAcrossSections() {
  const h = load();
  h.run(`localStorage.setItem(DAILY_KEY, JSON.stringify({ date: todayStr(), reviews: DAILY_REVIEW_LIMIT - 5, news: 0 }))`);
  const sec = h.getData('vocab').find(s => s.section === 1);
  markProgress(h, sec.cards.slice(0, 50).map(c => c.id), PAST);
  h.call('startSection', 'vocab', 1);
  const q = h.run('state.blocks.flat().map(c => c._isNew)');
  assertEqual(q.filter(x => !x).length, 5, 'only the reviews left for today');
  assertEqual(q.filter(x => x).length, 20, 'the rest of the session is new cards');
  h.driveTheoryPass();
  h.answerCurrentCard('correct'); h.rate(4);
  const d = h.run('loadDaily()');
  assertEqual(d.reviews + d.news, h.run('DAILY_REVIEW_LIMIT') - 5 + 1, 'answered cards are counted for today');
}

function testNewOnlyModeSkipsReviews() {
  const h = load();
  const sec = h.getData('vocab').find(s => s.section === 1);
  markProgress(h, sec.cards.slice(0, 50).map(c => c.id), PAST);
  h.call('startSection', 'vocab', 1, 'new');
  const q = h.run('state.blocks.flat().map(c => c._isNew)');
  assert(q.length > 0 && q.every(Boolean), 'new-only mode must not serve reviews');
  assertEqual(q.length, 20, 'new-only mode serves a full set of new cards');
}

function testSettingsChangeTheSession() {
  const h = load();
  h.call('showSettings');
  h.document.getElementById('set-reviewsPerSession').value = '5';
  h.document.getElementById('set-minNewPerSession').value = '3';
  h.document.getElementById('set-dailyReviews').value = '9999';
  h.call('saveSettingsForm');
  assertEqual(h.run('DAILY_REVIEW_LIMIT'), 500, 'values are clamped to the allowed range');
  assertEqual(h.run('loadSettings().reviewsPerSession'), 5, 'settings persist');
  const sec = h.getData('vocab').find(s => s.section === 1);
  markProgress(h, sec.cards.slice(0, 50).map(c => c.id), PAST);
  h.call('startSection', 'vocab', 1);
  const q = h.run('state.blocks.flat().map(c => c._isNew)');
  assertEqual(q.filter(x => !x).length, 5, 'reviews per session follows the setting');
  assertEqual(q.filter(x => x).length, 3, 'with a full set of reviews, only the minimum of new cards');
  h.call('refreshHomeStats');
  assert(h.document.getElementById('today-reviews').textContent.endsWith('/ 500'), 'home panel shows the daily limit');
}

module.exports = {
  testSettingsChangeTheSession,
  testDailyReviewLimitAcrossSections,
  testNewOnlyModeSkipsReviews,
  testFirstIntervalsDependOnTheButton,
  testReviewsAreCappedAndMixedWithNewCards,
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
