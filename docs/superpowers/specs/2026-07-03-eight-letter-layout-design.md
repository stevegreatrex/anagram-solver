# Eight-letter tile layout

## Problem

The fixed eight-letter row distribution is `2 / 2 / 2 / 2`. On a portrait Google Pixel 8 Pro, the resulting narrow segments leave too little useful horizontal variation, so repeated layouts resemble a static grid. The existing nine-letter `3 / 3 / 3` distribution has the desired balance and randomness.

## Design

Change only the eight-letter entry in the fixed row-count map to `3 / 2 / 3`.

This gives eight letters the same three-row footprint as nine letters. The first and third rows each span three segments. The middle row has two wider segments, distributing its tiles across the screen while allowing greater horizontal random jitter. The existing layout algorithm continues to calculate tile size and apply bounded random horizontal and vertical offsets within each segment.

No behavior changes are intended for other letter counts, tile rendering, letter shuffling, or responsive breakpoints.

## Verification

Add an automated test for the fixed row distributions that fails while eight letters return `2 / 2 / 2 / 2` and passes when they return `3 / 2 / 3`. Preserve the nine-letter `3 / 3 / 3` assertion as a regression reference. Run the complete available test suite after the targeted test passes.
