const test = require('node:test');
const assert = require('node:assert/strict');

const { buildPerRowCounts } = require('../layout.js');

test('eight letters use a balanced three-row layout', () => {
    assert.deepEqual(buildPerRowCounts(8, 396, 600), [3, 2, 3]);
});

test('nine letters retain their three-by-three layout', () => {
    assert.deepEqual(buildPerRowCounts(9, 396, 600), [3, 3, 3]);
});
