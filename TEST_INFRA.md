# Test Infrastructure Specification: MDBrowse Desktop Pet System

## 1. Executive Summary

The MDBrowse Desktop Pet System test infrastructure provides an automated, high-performance, opaque-box, requirement-driven E2E testing framework with zero external dependencies. It validates all 27 functional features defined in `PROJECT.md § Feature Inventory` and `ORIGINAL_REQUEST.md` across 4 progressive tiers of testing:
1. **Tier 1: Feature Coverage** (135 tests; >=5 happy path tests per feature)
2. **Tier 2: Boundary & Corner Cases** (135 tests; >=5 limits/extremes/error-handling tests per feature)
3. **Tier 3: Cross-Feature Combinations** (25 pairwise combination tests)
4. **Tier 4: Real-World Application Scenarios** (5 end-to-end multi-step application journeys)

**Total Test Count**: 300 test cases  
**Runtime**: ~0.50 seconds on Node.js v24.16.0  
**Pass Rate**: 100.0% (300/300 passing)

---

## 2. Architecture & Design Principles

### 2.1 Zero-Dependency Headless Sandbox (`tests/e2e/harness.js`)
- **Native Node.js VM Sandbox**: Leverages Node's built-in `vm` and `fs` modules to compile and evaluate ES6 client-side pet modules within an isolated browser-like scope.
- **Stack-Based Mock DOM Engine**: Emulates standard browser DOM elements (`MockDOMElement`) supporting arbitrary HTML nesting, tag parsing, `classList`, `style`, `dataset`, attributes, `querySelector`, `querySelectorAll`, and `addEventListener`.
- **CSS & SVG Introspection**:
  - `CssAssert.hasKeyframes(css, keyframeName)`: Inspects CSS string for `@keyframes` definitions and animations.
  - `SvgAssert.hasElement(svgStr, tag, attrs)`: Inspects SVG strings for geometric elements (`path`, `ellipse`, `defs`, `radialGradient`) and attributes.
- **State & Storage Sandboxing**: Lightweight in-memory storage simulating `localStorage` and `Store` preventing cross-test state leakage.

### 2.2 Progressive Testability
The test runner supports fine-grained filtering flags to allow progressive verification during milestone implementations:
- `--tier=<1|2|3|4>`: Filters test execution by tier.
- `--milestone=<M1|M2|M3|M4>`: Filters test execution to features belonging to the specified milestone and its completed dependencies.
- `--feature=<1..27>`: Targets an individual feature across all tiers.
- `--verbose`: Prints detailed step-by-step test execution output.

---

## 3. Directory Layout

```
d:/01_APP/Markdown/
├── tests/
│   └── e2e/
│       ├── harness.js       # Headless VM environment, DOM mock, assertions
│       ├── runner.js        # CLI test runner with flag parsing and reporting
│       ├── tier1.test.js    # Tier 1: Feature coverage (135 tests)
│       ├── tier2.test.js    # Tier 2: Boundary & corner cases (135 tests)
│       ├── tier3.test.js    # Tier 3: Cross-feature combinations (25 tests)
│       └── tier4.test.js    # Tier 4: Real-world user journeys (5 tests)
├── build.js                 # Production bundle compiler & contract validator
├── TEST_INFRA.md            # This infrastructure document
└── TEST_READY.md            # Test readiness declaration
```

---

## 4. Test Suite Taxonomy & Mapping

| Feature # | Feature Name | Milestone | Tier 1 (Coverage) | Tier 2 (Boundary) | Tier 3 (Cross) | Tier 4 (Scenario) |
|---|---|---|---|---|---|---|
| F1 | Coat Patterns & Markings | M1 | 5 tests | 5 tests | Combo 1, 2, 3, 21 | Scenario 2 |
| F2 | 5 Tail Variations | M1 | 5 tests | 5 tests | Combo 1, 2, 3, 4, 23 | Scenario 2 |
| F3 | 3 Body Types | M1 | 5 tests | 5 tests | Combo 1, 4, 6, 7, 23 | Scenario 2 |
| F4 | Two-Legged Standing Posture | M1 | 5 tests | 5 tests | Combo 1, 13 | Scenario 1 |
| F5 | Ball Batting Posture | M1 | 5 tests | 5 tests | Combo 2, 25 | Scenario 4 |
| F6 | Scratching / Fetching Posture | M1 | 5 tests | 5 tests | Combo 3 | Scenario 1 |
| F7 | Playful Pounce / Neck-Bite Posture | M1 | 5 tests | 5 tests | Combo 12 | Scenario 2 |
| F8 | Pooping Posture | M1 | 5 tests | 5 tests | Combo 4, 5, 21 | Scenario 3 |
| F9 | Poop Object Spawn | M1 | 5 tests | 5 tests | Combo 4, 5, 18 | Scenario 3 |
| F10 | Click-to-Clean Poop | M1 | 5 tests | 5 tests | Combo 5, 21 | Scenario 3 |
| F11 | Neglected Poop Fly Swarm | M1 | 5 tests | 5 tests | Combo 5, 18 | Scenario 3 |
| F12 | 6-Axis Personality Engine | M2 | 5 tests | 5 tests | Combo 6, 7, 8, 9, 22 | Scenario 1 |
| F13 | Mathematical Behavior Scaling | M2 | 5 tests | 5 tests | Combo 6, 7, 14 | Scenario 1 |
| F14 | Talkativeness Speech Frequency | M2 | 5 tests | 5 tests | Combo 8, 9, 22 | Scenario 1 |
| F15 | Dynamic Contextual Dialogues | M2 | 5 tests | 5 tests | Combo 8, 13, 24 | Scenario 1 |
| F16 | Multi-Pet Detection & Compatibility | M2 | 5 tests | 5 tests | Combo 10, 11, 24 | Scenario 2 |
| F17 | Multi-Pet Autonomous Social Dynamics | M2 | 5 tests | 5 tests | Combo 10, 11, 12 | Scenario 2 |
| F18 | Smart User Interactions | M2 | 5 tests | 5 tests | Combo 9, 13, 14, 22 | Scenario 1 |
| F19 | Rolling Yarn Ball Prop | M3 | 5 tests | 5 tests | Combo 2, 25 | Scenario 2 |
| F20 | Laser Pointer Dot Prop | M3 | 5 tests | 5 tests | Combo 6, 16 | Scenario 4 |
| F21 | Feather Teaser Wand Prop | M3 | 5 tests | 5 tests | Combo 16 | Scenario 4 |
| F22 | Cat House / Box Furniture | M3 | 5 tests | 5 tests | Combo 14, 17 | Scenario 2 |
| F23 | Cat Condo / Tree Furniture | M3 | 5 tests | 5 tests | Combo 3, 8, 17 | Scenario 2 |
| F24 | Cat Bed Furniture | M3 | 5 tests | 5 tests | Combo 7, 17, 18 | Scenario 5 |
| F25 | Pet Control Bar On-Screen UI | M3 | 5 tests | 5 tests | Combo 15, 20 | Scenario 4 |
| F26 | Prop Drag-and-Drop | M3 | 5 tests | 5 tests | Combo 15, 19, 25 | Scenario 5 |
| F27 | Prop Navigation & State Preservation | M3 | 5 tests | 5 tests | Combo 15, 19, 20 | Scenario 5 |

---

## 5. Execution Commands

```bash
# 1. Run all 300 tests across all tiers and milestones
node tests/e2e/runner.js

# 2. Run Tier 1 Feature Coverage suite (135 tests)
node tests/e2e/runner.js --tier=1

# 3. Run Tier 2 Boundary & Corner Cases suite (135 tests)
node tests/e2e/runner.js --tier=2

# 4. Run Tier 3 Cross-Feature Combinations suite (25 tests)
node tests/e2e/runner.js --tier=3

# 5. Run Tier 4 Real-World Application Scenarios (5 tests)
node tests/e2e/runner.js --tier=4

# 6. Progressive Milestone Filtering (e.g. Milestone 1 tests only)
node tests/e2e/runner.js --milestone=M1

# 7. Target an individual feature (e.g. Feature 8: Pooping Posture)
node tests/e2e/runner.js --feature=8

# 8. Detailed verbose logging with assertion traces
node tests/e2e/runner.js --verbose
```
