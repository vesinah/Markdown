---
name: mdbrowse-mobile-ui
description: >-
  Use this skill when developing, debugging, or testing the mobile UI/UX on smartphones,
  touch interaction, slide-in drawers, mobile bottom navigation bar, or testing viewports with headless Chrome.
---

# MDBrowse Mobile UI/UX Development & Testing

This skill guides development and testing for smartphone portrait viewports (360px–430px wide).

## 1. Architectural Principles

1. **Zero Desktop Regression**: Desktop (>768px) must never be altered. All mobile rules live under `@media (max-width: 768px)`.
2. **Thumb-Zone Bottom Navigation Dock (`#mobile-bottom-bar`)**:
   - 5 actions: Files, TOC, Theme/Fonts, Bookmarks, Pet Sanctuary.
   - Auto-hide on scroll down (`scroll delta > 10px`), restore on scroll up (`scroll delta < -10px`).
3. **Off-Canvas Drawers & Universal Backdrop**:
   - Left Drawer (`#sidebar`): `width: min(350px, 88vw) !important; transform: translateX(-100%) !important; z-index: 125 !important;`
   - Right Drawer (`#toc-panel`): `width: min(340px, 86vw) !important; transform: translateX(100%) !important; z-index: 125 !important;`
   - Right Drawer (`#bm-panel`): `width: min(340px, 86vw) !important; z-index: 125 !important;`
   - Universal Backdrop (`.mobile-backdrop`): `z-index: 105;` Closes all drawers on tap.

## 2. Invariants & Critical Gotchas

- **Negative Margin-Left is FORBIDDEN**: Never use `margin-left: calc(-1 * ...)` to hide `#sidebar` on mobile. It shifts `#main` and `.menubar` off-screen to the left (-87px bug). Use `transform: translateX(-100%)` exclusively.
- **TOC Mini-Rail Override**: Always enforce `#toc-header, #toc-full-view { display: flex !important; }` and `#toc-mini-rail { display: none !important; }` in mobile media queries. Desktop `.toc-mini` saved in localStorage must not hide the mobile TOC drawer.
- **Two-Tier Research Root Card**: `.node-row.node-root` must use `flex-wrap: wrap` on mobile. Line 1: full archive title `คลังงานวิจัย (Research Archive)`. Line 2: folder and file count pills + refresh/del buttons.
- **iOS Safari Auto-Zoom**: Search inputs (`.sb-search-input`) must have `font-size: 16px` to prevent automatic zoom on focus.
- **Safe Area Insets**: Use `calc(... + env(safe-area-inset-bottom, 0px))` for bottom controls.

## 3. Visual Verification with Headless Chrome

Run Chrome Headless across standard mobile viewports:
- iPhone SE (375x667)
- iPhone 14/15/16 (390x844)
- Pixel 7 / Galaxy (412x915)

```javascript
// Test snippet for Chrome Headless:
const cp = require('child_process');
cp.spawnSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--disable-gpu',
  '--virtual-time-budget=6000',
  '--window-size=390,844',
  '--screenshot=tests/mobile_verify.png',
  'file:///d:/01_APP/Markdown/MDBrowse.html'
]);
```
