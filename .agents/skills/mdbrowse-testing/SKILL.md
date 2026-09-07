---
name: mdbrowse-testing
description: >-
  Use this skill when running, adding, or debugging automated test suites,
  including core features unit tests (16 tests) and opaque-box E2E test suites (300 tests).
---

# MDBrowse Automated Testing Suite Runbook

This guide covers running, adding, and debugging tests in MDBrowse.

## 1. Test Suite Commands

```powershell
# 1. Core architecture & features tests (16 tests)
node tests/core_features.test.js

# 2. Opaque-box E2E test suite (300 tests across 4 tiers)
node tests/e2e/runner.js

# 3. Complete verification pipeline
node build.js; node tests/core_features.test.js; node tests/e2e/runner.js
```

## 2. Test Suites Structure

- **`tests/core_features.test.js`**:
  - `State.on` / `State.emit` / `State.off` event bus tests.
  - Search snippet extraction (case insensitivity, limits, context windows).
  - Word, character, and line count calculators (`countTextStats`).
  - Reading progress scroll-to-percentage mapping.
  - Callout regex parsing (NOTE, TIP, IMPORTANT, WARNING, CAUTION).
  - Date extraction from names (`extractDateFromName`) and node sorting (`cmpNodes`).

- **`tests/e2e/runner.js`**:
  - 300 tests covering 4 Tiers of Desktop Pet Sanctuary:
    - Tier 1: Genetics, breeds, coats, 5 tails, 3 builds, postures, hygiene (poop & flies).
    - Tier 2: 6-Axis AI Personality Engine, contextual Thai dialogues, social dynamics, user interactions.
    - Tier 3: Interactive props, 2D physics, Pet Control Bar dock.
    - Tier 4: Edge cases, adversarial scenarios, and state transitions.

## 3. Testing Rules for AI Agents

1. **Never Break Existing Tests**: If changes cause a test failure, do NOT modify the test to artificially pass unless requirements have explicitly changed. Fix the underlying implementation.
2. **Deterministic Assertions**: Tests must use deterministic timestamps and mocked delays to run cleanly in under 1 second without timing flakiness.
