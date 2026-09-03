const fs = require('fs');
const built = fs.readFileSync('MDBrowse.html', 'utf8');
const checks = [
  ['onblocked (degraded mode)', 'onblocked', true],
  ['open v2', "indexedDB.open('mdbrowse_v2', 2)", true],
  ['annotations store', "createObjectStore('annotations'", true],
  ['fileKey index', "createIndex('fileKey'", true],
  ['toggle button', 'id="btn-bm-toggle"', true],
  ['panel', 'id="bm-panel"', true],
  ['divider before btn', 'Vertical Divider separating ? from Bookmark toggle', true],
  ['init highlights', 'initHighlights', true],
  ['anchor engine', 'resolveAnchor', true],
  ['text quote anchor', 'createAnchorFromRange', true],
  ['panel refresh', 'BookmarkPanel.refresh', true],
  ['restore flow', 'restoreHighlights', true],
  ['bm css', 'body.bm-open #bm-panel', true],
  ['mark style', 'mark.bm-hl', true],
  ['no dynamic import remains', 'import(', false]
];
let pass = 0;
for (const [label, needle, shouldExist] of checks) {
  const found = built.includes(needle);
  const ok = found === shouldExist;
  if (ok) pass++;
  console.log((ok ? 'OK  ' : 'FAIL') + '  ' + label);
}
console.log(pass + '/' + checks.length + ' passed');
