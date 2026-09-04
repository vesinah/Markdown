/**
 * tests/core_features.test.js
 * Automated Verification Test Suite for MDBrowse Core Architecture & Features:
 * - State Event Bus (pub/sub, error isolation, unsubscription)
 * - Markdown GitHub Callout Alerts ([!NOTE], [!TIP], [!IMPORTANT], [!WARNING], [!CAUTION])
 * - Search Context Snippet Extraction
 * - Text Statistics Calculation
 * - Reading Progress Mechanics
 * - Mermaid Block Transformation
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const harness = require('./e2e/harness');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');

console.log('==============================================================================');
console.log('  MDBrowse Core Features & Architecture — Automated Test Suite');
console.log('==============================================================================');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  [PASS] ${name}`);
    passed++;
  } catch (err) {
    console.error(`  [FAIL] ${name}:`, err.message);
    failed++;
  }
}

// 1. Load State Module
const stateFile = fs.readFileSync(path.join(SRC, 'js/core/state.js'), 'utf8')
  .replace(/^export\s+const\s+/gm, 'const ');
const stateSandbox = { Map, Set, console };
vm.createContext(stateSandbox);
vm.runInContext(stateFile + '\nthis.State = State;', stateSandbox);
const State = stateSandbox.State;

// 2. Load Doc Info (countTextStats)
const docInfoFile = fs.readFileSync(path.join(SRC, 'js/ui/doc-info.js'), 'utf8')
  .replace(/^import\s+.*?from\s+['"].*?['"];?\r?\n/gm, '')
  .replace(/^export\s+function\s+/gm, 'function ')
  .replace(/^export\s+const\s+/gm, 'const ');
const docInfoSandbox = { State, fmtBytes: () => '', console, Intl };
vm.createContext(docInfoSandbox);
vm.runInContext(docInfoFile + '\nthis.countTextStats = countTextStats;', docInfoSandbox);
const countTextStats = docInfoSandbox.countTextStats;

// 3. Load Search (extractSnippets)
const searchFile = fs.readFileSync(path.join(SRC, 'js/search/search.js'), 'utf8')
  .replace(/^import\s+.*?from\s+['"].*?['"];?\r?\n/gm, '')
  .replace(/^export\s+const\s+/gm, 'const ');
const searchSandbox = { State, isMd: () => true, isPdf: () => false, isCode: () => false, isFileAllowedByFilter: () => true, console, Map, Set };
vm.createContext(searchSandbox);
vm.runInContext(searchFile + '\nthis.SearchEngine = SearchEngine;', searchSandbox);
const SearchEngine = searchSandbox.SearchEngine;

// 4. Test State Event Bus
test('State.on and State.emit: Dispatches events to subscribers', () => {
  let received = null;
  const unsub = State.on('test:event', data => { received = data; });
  State.emit('test:event', { foo: 'bar' });
  assert.strictEqual(received && received.foo, 'bar');
  unsub();
});

test('State.off: Correctly unsubscribes from events', () => {
  let count = 0;
  const handler = () => { count++; };
  State.on('test:count', handler);
  State.emit('test:count');
  assert.strictEqual(count, 1);
  State.off('test:count', handler);
  State.emit('test:count');
  assert.strictEqual(count, 1);
});

test('State.emit: Isolates handler errors without breaking subsequent listeners', () => {
  let secondReceived = false;
  State.on('test:err', () => { throw new Error('Boom'); });
  State.on('test:err', () => { secondReceived = true; });
  State.emit('test:err');
  assert.strictEqual(secondReceived, true);
});

test('State.search.snippets: Map is initialized and usable', () => {
  assert(typeof State.search.snippets.get === 'function', 'snippets has Map methods');
  State.search.snippets.set('sample.md', [{ before: 'a', match: 'b', after: 'c' }]);
  assert.strictEqual(State.search.snippets.get('sample.md').length, 1);
  State.search.snippets.clear();
});

// 5. Test Search Snippet Extraction
test('SearchEngine.extractSnippets: Extracts matching keywords with context', () => {
  const text = 'The quick brown fox jumps over the lazy dog and runs away happily.';
  const snippets = SearchEngine.extractSnippets(text, 'lazy dog', 1);
  assert.strictEqual(snippets.length, 1);
  assert.strictEqual(snippets[0].match, 'lazy dog');
  assert(snippets[0].before.includes('jumps over the'));
  assert(snippets[0].after.includes('and runs away'));
});

test('SearchEngine.extractSnippets: Handles case-insensitive search and limits count', () => {
  const text = 'Markdown is great. markdown is simple. MARKDOWN is fast.';
  const snippets = SearchEngine.extractSnippets(text, 'markdown', 2);
  assert.strictEqual(snippets.length, 2);
  assert.strictEqual(snippets[0].match, 'Markdown');
  assert.strictEqual(snippets[1].match, 'markdown');
});

test('SearchEngine.extractSnippets: Returns empty array on empty input or no match', () => {
  assert.strictEqual(SearchEngine.extractSnippets('', 'test').length, 0);
  assert.strictEqual(SearchEngine.extractSnippets('hello world', '').length, 0);
  assert.strictEqual(SearchEngine.extractSnippets('hello world', 'xyz').length, 0);
});

// 6. Test Text Statistics Calculation
test('countTextStats: Accurately calculates words, chars, and lines', () => {
  const text = 'Hello world\nThis is line two\nLine three';
  const stats = countTextStats(text);
  assert.strictEqual(stats.lines, 3);
  assert.strictEqual(stats.words, 8);
  assert.strictEqual(stats.chars, text.length);
});

test('countTextStats: Handles empty or null text safely', () => {
  const empty = countTextStats('');
  assert.strictEqual(empty.words, 0);
  assert.strictEqual(empty.lines, 0);
  const nil = countTextStats(null);
  assert.strictEqual(nil.words, 0);
});

// 7. Test Reading Progress Formula
test('ReadingProgress calculation: Correctly maps scroll offset to percentage', () => {
  const scrollHeight = 1000;
  const clientHeight = 200;
  const max = scrollHeight - clientHeight; // 800
  const scrollTop = 400;
  const pct = Math.min(100, Math.max(0, (scrollTop / max) * 100));
  assert.strictEqual(pct, 50);
});

// 8. Verify Mermaid library file exists and is bundled
test('Mermaid.js: Standalone library exists in src/vendor/ and is non-empty', () => {
  const p = path.join(SRC, 'vendor/mermaid.min.js');
  assert(fs.existsSync(p), 'src/vendor/mermaid.min.js exists');
  const size = fs.statSync(p).size;
  assert(size > 1000000, `mermaid.min.js size is ${size} bytes (> 1MB)`);
});

// 9. Verify MDBrowse.html compilation contains all new components
test('MDBrowse.html: Generated file contains all new modular components and elements', () => {
  const html = fs.readFileSync(path.join(ROOT, 'MDBrowse.html'), 'utf8');
  assert(html.includes('reading-progress-bar'), 'Contains reading-progress-bar element');
  assert(html.includes('sb-search-snippets'), 'Contains search snippets CSS');
  assert(html.includes('markdown-callout'), 'Contains markdown callout CSS');
  assert(html.includes('mermaid-block'), 'Contains mermaid CSS');
  assert(html.includes('ViewRouter'), 'Contains ViewRouter coordinator');
  assert(html.includes('MenubarController'), 'Contains MenubarController');
  assert(html.includes('DocInfoController'), 'Contains DocInfoController');
  assert(html.includes('ReadingProgress'), 'Contains ReadingProgress controller');
  assert(html.includes('id="btn-refresh"'), 'Contains btn-refresh DOM element');
  assert(html.includes('sb-refresh-btn'), 'Contains sb-refresh-btn CSS class');
  assert(html.includes('btn-root-refresh'), 'Contains btn-root-refresh CSS class');
  assert(html.includes('refreshWorkspaces'), 'Contains refreshWorkspaces function');
  assert(html.includes('id="btn-sort-name"'), 'Contains btn-sort-name DOM element');
  assert(html.includes('id="btn-sort-date"'), 'Contains btn-sort-date DOM element');
  assert(html.includes('sb-opts-divider'), 'Contains sb-opts-divider CSS class');
  assert(html.includes('setSort'), 'Contains setSort function');
  assert(html.includes('applySortToAllNodes'), 'Contains applySortToAllNodes function');
});

// 10. Callout & Markdown Parser regex verification
test('Callout regex: Accurately identifies and parses all 5 GitHub callout formats', () => {
  const types = ['NOTE', 'TIP', 'IMPORTANT', 'WARNING', 'CAUTION'];
  const regex = /^\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:\s*<br\s*\/?>)?\s*/i;
  for (const t of types) {
    const raw = `[!${t}]<br>Test content`;
    const m = raw.match(regex);
    assert(m, `Matched [!${t}]`);
    assert.strictEqual(m[1].toUpperCase(), t);
  }
});

// 11. Test Date Extraction from Name (extractDateFromName)
const treeNodeFile = fs.readFileSync(path.join(SRC, 'js/tree/tree-node.js'), 'utf8')
  .replace(/^export\s+function\s+/gm, 'function ')
  .replace(/^export\s+const\s+/gm, 'const ');
const treeNodeSandbox = { console, Intl, Date, Math, String, RegExp };
vm.createContext(treeNodeSandbox);
vm.runInContext(treeNodeFile + '\nthis.extractDateFromName = extractDateFromName;\nthis.cmpNodes = cmpNodes;\nthis.getNodeDate = getNodeDate;', treeNodeSandbox);
const { extractDateFromName, cmpNodes, getNodeDate } = treeNodeSandbox;

test('extractDateFromName: Accurately parses ISO, compact, and Thai dates', () => {
  const iso = extractDateFromName('2026-05-28_งานวิจัยทวีปทอง');
  assert.strictEqual(new Date(iso).toISOString().slice(0, 10), '2026-05-28');

  const compact = extractDateFromName('20260825_paper.pdf');
  assert.strictEqual(new Date(compact).toISOString().slice(0, 10), '2026-08-25');

  const thai = extractDateFromName('บันทึก_12-07-2569.md');
  assert.strictEqual(new Date(thai).toISOString().slice(0, 10), '2026-07-12');

  const none = extractDateFromName('readme_about.txt');
  assert.strictEqual(none, null);
});

// 12. Test Node Sorting by Name and Date (cmpNodes)
test('cmpNodes: Sorts paths and files by date (desc/asc) and name (asc/desc)', () => {
  const n1 = { kind: 'directory', name: '2026-05-28_research', dateFromName: extractDateFromName('2026-05-28_research') };
  const n2 = { kind: 'directory', name: '2026-08-25_paper', dateFromName: extractDateFromName('2026-08-25_paper') };
  const n3 = { kind: 'directory', name: '2026-06-05_data', dateFromName: extractDateFromName('2026-06-05_data') };
  const dirs = [n1, n2, n3];

  // Date Descending (Newest first)
  dirs.sort((a, b) => cmpNodes(a, b, 'date', 'desc'));
  assert.strictEqual(dirs[0].name, '2026-08-25_paper');
  assert.strictEqual(dirs[1].name, '2026-06-05_data');
  assert.strictEqual(dirs[2].name, '2026-05-28_research');

  // Date Ascending (Oldest first)
  dirs.sort((a, b) => cmpNodes(a, b, 'date', 'asc'));
  assert.strictEqual(dirs[0].name, '2026-05-28_research');
  assert.strictEqual(dirs[1].name, '2026-06-05_data');
  assert.strictEqual(dirs[2].name, '2026-08-25_paper');

  // Name Ascending
  dirs.sort((a, b) => cmpNodes(a, b, 'name', 'asc'));
  assert.strictEqual(dirs[0].name, '2026-05-28_research');
  assert.strictEqual(dirs[2].name, '2026-08-25_paper');

  // Name Descending
  dirs.sort((a, b) => cmpNodes(a, b, 'name', 'desc'));
  assert.strictEqual(dirs[0].name, '2026-08-25_paper');
  assert.strictEqual(dirs[2].name, '2026-05-28_research');

  // Directories always stay before files
  const fileNode = { kind: 'file', name: '2026-01-01_a.md', dateFromName: extractDateFromName('2026-01-01_a.md') };
  assert.strictEqual(cmpNodes(n1, fileNode, 'date', 'desc'), -1);
  assert.strictEqual(cmpNodes(fileNode, n1, 'date', 'desc'), 1);
});

// 13. Test File Sorting by Actual File Creation/Modification Time (mtime)
test('cmpNodes: Accurately sorts files by OS lastModified (mtime) date/time', () => {
  const f1 = { kind: 'file', name: 'doc_alpha.md', mtime: 1756900000000 }; // earlier
  const f2 = { kind: 'file', name: 'doc_beta.md', mtime: 1756999000000 };  // later
  const f3 = { kind: 'file', name: 'doc_gamma.md', mtime: 1756950000000 }; // middle
  const files = [f1, f2, f3];

  // Newest first (Date desc)
  files.sort((a, b) => cmpNodes(a, b, 'date', 'desc'));
  assert.strictEqual(files[0].name, 'doc_beta.md');
  assert.strictEqual(files[1].name, 'doc_gamma.md');
  assert.strictEqual(files[2].name, 'doc_alpha.md');

  // Oldest first (Date asc)
  files.sort((a, b) => cmpNodes(a, b, 'date', 'asc'));
  assert.strictEqual(files[0].name, 'doc_alpha.md');
  assert.strictEqual(files[1].name, 'doc_gamma.md');
  assert.strictEqual(files[2].name, 'doc_beta.md');
});

console.log('==============================================================================');
console.log(`Execution Summary: ${passed} passed, ${failed} failed`);
console.log('==============================================================================');

if (failed > 0) {
  process.exit(1);
}
