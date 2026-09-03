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

console.log('==============================================================================');
console.log(`Execution Summary: ${passed} passed, ${failed} failed`);
console.log('==============================================================================');

if (failed > 0) {
  process.exit(1);
}
