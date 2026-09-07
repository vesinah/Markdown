# AGENTS.md — Workspace Guidelines for AI Agents

See [GEMINI.md](./GEMINI.md) for the primary rules, directory map, and verification protocols.

## Quick Summary
- **Source of Truth**: Edit files in `src/`, never edit `MDBrowse.html` or `index.html` directly.
- **Build**: Run `node build.js` to compile and verify all 85 DOM contracts.
- **Offline Invariant**: Zero external scripts/styles (`https://...`). Everything must be bundled.
- **Mobile Invariant**: Mobile styles must use `@media (max-width: 768px)` with zero desktop regression. Use `transform: translateX(-100%)` for `#sidebar` drawer (never negative `margin-left`).
- **Tests**: Run `node tests/core_features.test.js` and `node tests/e2e/runner.js`.
