# Eight-letter Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make eight-letter words use a balanced, pseudo-random three-row layout on portrait phones.

**Architecture:** Move the pure row-count calculation from the inline application script into a small browser/Node-compatible module. Change only the eight-letter fixed distribution from `2 / 2 / 2 / 2` to `3 / 2 / 3`, while preserving the existing segmented positioning algorithm.

**Tech Stack:** Static HTML, vanilla JavaScript, Node.js built-in test runner, service worker.

---

### Task 1: Test the row distribution

**Files:**
- Create: `layout.js`
- Create: `test/layout.test.js`
- Modify: `index.html`
- Modify: `sw.js`

- [ ] **Step 1: Add a pure `buildPerRowCounts` module with the current eight-letter behavior.**
- [ ] **Step 2: Add tests requiring eight letters to return `[3, 2, 3]` and nine letters to remain `[3, 3, 3]`.**
- [ ] **Step 3: Run `node --test test/layout.test.js` and verify the eight-letter assertion fails with actual value `[2, 2, 2, 2]`.**
- [ ] **Step 4: Change the eight-letter map entry to `[3, 2, 3]`.**
- [ ] **Step 5: Run `node --test test/layout.test.js` and verify both tests pass.**
- [ ] **Step 6: Load `layout.js` before the inline application script, remove the duplicate inline helper, and add the module to the service-worker asset list.**
- [ ] **Step 7: Increment the service-worker cache version so existing installations receive the new asset and layout.**
- [ ] **Step 8: Run the focused test and the repository's static-site validation checks.**
- [ ] **Step 9: Inspect the diff, commit the scoped files, push the branch, and open a draft PR.**
