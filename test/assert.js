'use strict';
// Tiny assertion helpers shared by every spec. Throwing carries
// `.expected`/`.actual` when relevant so run-all.js can print a useful
// diff instead of just the message.

class AssertionError extends Error {
  constructor(message, expected, actual) {
    super(message);
    this.name = 'AssertionError';
    if (expected !== undefined) this.expected = expected;
    if (actual !== undefined) this.actual = actual;
  }
}

function assert(cond, message) {
  if (!cond) throw new AssertionError(message || 'assertion failed');
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new AssertionError(
      message || `expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`,
      expected, actual
    );
  }
}

function assertDeepEqual(actual, expected, message) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a !== e) {
    throw new AssertionError(message || 'deep equality failed', expected, actual);
  }
}

module.exports = { assert, assertEqual, assertDeepEqual, AssertionError };
