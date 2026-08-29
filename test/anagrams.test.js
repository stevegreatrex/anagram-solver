const test = require('node:test');
const assert = require('node:assert/strict');

const { findAnagrams } = require('../words.js');

test('finds words locally from a set of letters', () => {
    const results = findAnagrams('listen');

    for (const expected of ['enlist', 'inlets', 'listen', 'silent', 'tinsel']) {
        assert.ok(results.includes(expected), `expected ${expected} in results`);
    }
});

test('returns no results when no dictionary word can be made', () => {
    assert.deepEqual(findAnagrams('qzx'), []);
});
