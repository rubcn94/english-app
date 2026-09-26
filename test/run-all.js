#!/usr/bin/env node
'use strict';
// Single entry point: discovers every test/*.spec.js, runs its exported
// test functions, and reports pass/fail. No external test framework —
// this repo has no node_modules/build step (plain JS served by GitHub
// Pages) and this stays consistent with that.
//
// A spec file exports either a single function or an object of named
// functions: `module.exports = { testFoo() {...}, testBar() {...} }` or
// `module.exports = function testFoo() {...}`. Each function receives no
// arguments and should call assert()/assertEqual() (from ./assert.js) —
// a thrown AssertionError is caught here and reported as a failure with
// its message; any other thrown error is also reported as a failure
// (spec bug or app.js regression that crashed the harness itself).

const fs = require('fs');
const path = require('path');

const testDir = __dirname;
const specFiles = fs.readdirSync(testDir).filter(f => f.endsWith('.spec.js')).sort();

let passed = 0;
let failed = 0;
const failures = [];

for (const file of specFiles) {
  const mod = require(path.join(testDir, file));
  const tests = typeof mod === 'function' ? { [mod.name || file]: mod } : mod;

  for (const [name, fn] of Object.entries(tests)) {
    const label = `${file} :: ${name}`;
    try {
      fn();
      console.log(`\x1b[32m✓\x1b[0m ${label}`);
      passed++;
    } catch (err) {
      console.log(`\x1b[31m✗\x1b[0m ${label}`);
      console.log(`  ${(err && err.message) || err}`);
      if (err && err.expected !== undefined) {
        console.log(`  expected: ${JSON.stringify(err.expected)}`);
        console.log(`  actual:   ${JSON.stringify(err.actual)}`);
      }
      failed++;
      failures.push(label);
    }
  }
}

console.log('');
console.log(`${passed} passed, ${failed} failed`);
if (failed > 0) {
  console.log('Failed:');
  failures.forEach(f => console.log(`  - ${f}`));
  process.exitCode = 1;
}
