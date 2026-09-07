---
name: mdbrowse-builder
description: >-
  Use this skill when compiling, bundling, or verifying the MDBrowse project,
  checking DOM contract integrity (85 contracts), or updating application shortcuts.
---

# MDBrowse Build & Bundle Pipeline

Use this runbook to build and verify `MDBrowse.html` and `index.html` from the modular sources in `src/`.

## 1. Primary Build Command

```powershell
node build.js
```

## 2. What the Build Pipeline Does

1. **Vendor Concatenation**: Inlines CSS and minified vendor scripts from `src/vendor/` (Marked, DOMPurify, Highlight.js, KaTeX, PDF.js).
2. **ES Module Desugaring**: Strips `import` and `export` statements and bundles app modules in strict dependency order:
   - `core/store.js` -> `core/state.js` -> `core/fs.js` -> `tree/` -> `reader/` -> `search/` -> `bookmark/` -> `pet/` -> `ui/` -> `core/router.js` -> `app.js`
3. **Syntax Verification**: Validates compiled JavaScript via Node.js `vm.Script`.
4. **DOM Contract Verification**: Verifies that all **85 required DOM element IDs and classes** exist in the compiled HTML template.
5. **Dual Output Generation**:
   - `MDBrowse.html`: Standalone local reader for `file:///` usage.
   - `index.html`: Web deployment bundle for Cloudflare Pages.
6. **Automatic Backup**: Creates `MDBrowse_stable_backup.html` before updating files.
7. **Desktop Shortcut Sync**: Automatically refreshes Windows desktop launchers.

## 3. Failure Troubleshooting

- **DOM Contract Mismatch**: If `build.js` fails with missing DOM contract, check if an ID or element was accidentally renamed or removed. Update both the HTML template inside `build.js` and `DOM_CONTRACTS` array if the change was intentional.
- **Syntax Error**: If `vm.Script` throws, check recently edited files in `src/js/` for missing semicolons, unbalanced braces, or unclosed template literals.
