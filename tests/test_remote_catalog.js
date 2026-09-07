const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('Testing Remote Catalog & Cloudflare Dual Mode Integration...');

// 1. Check catalog.json existence and structure
const catalogPath = path.join(__dirname, '../docs/catalog.json');
assert(fs.existsSync(catalogPath), 'docs/catalog.json must exist');
const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
assert.strictEqual(catalog.name, 'คลังงานวิจัย (Research Archive)');
assert(Array.isArray(catalog.files) && catalog.files.length > 0, 'catalog.files must have items');
console.log(`  [PASS] catalog.json valid with ${catalog.files.length} items`);

// 2. Test buildNodesFromCatalog and resolvePath logic
const { buildNodesFromCatalog, resolvePath, findFileByPath } = require('../src/js/core/fs.js');
const { State } = require('../src/js/core/state.js');

const nodes = buildNodesFromCatalog(catalog, 0);
assert(nodes.length > catalog.files.length, 'Node count should exceed file count due to directories');
const rootNode = nodes.find(n => n.kind === 'root');
assert.strictEqual(rootNode.name, 'คลังงานวิจัย (Research Archive)');
assert.strictEqual(rootNode.isRemote, true);
console.log(`  [PASS] buildNodesFromCatalog created ${nodes.length} virtual nodes`);

// 3. Test resolvePath with absolute file:/// links from research output
const sampleCurrentPath = 'คลังงานวิจัย (Research Archive)/00_MASTER_RESEARCH_DIRECTORY.md';
const link1 = 'file:///d:/01_APP/Research/output/2026-09-03_แม่บทตัวบทสองภาษา/project-plan.md';
const resolved1 = resolvePath(sampleCurrentPath, link1);
assert.strictEqual(resolved1, 'คลังงานวิจัย (Research Archive)/2026-09-03_แม่บทตัวบทสองภาษา/project-plan.md');
console.log('  [PASS] resolvePath strips file:///d:/01_APP/Research/output/ cleanly');

const link2 = 'output/2026-05-28_งานวิจัยทวีปานตระ/00/01_introduction.md';
const resolved2 = resolvePath(sampleCurrentPath, link2);
assert.strictEqual(resolved2, 'คลังงานวิจัย (Research Archive)/2026-05-28_งานวิจัยทวีปานตระ/00/01_introduction.md');
console.log('  [PASS] resolvePath handles output/ prefix cleanly');

// 4. Test findFileByPath with State populated
State.byPath = nodes.byPath;
const found = findFileByPath(resolved1);
assert(found, 'Should find 2026-09-03_แม่บทตัวบทสองภาษา/project-plan.md');
assert.strictEqual(found.kind, 'file');
console.log('  [PASS] findFileByPath successfully located resolved file node');

// 5. Test finding folder reference fallback
const folderLink = 'file:///d:/01_APP/Research/output/2026-09-03_แม่บทตัวบทสองภาษา';
const resolvedFolder = resolvePath(sampleCurrentPath, folderLink);
const foundInFolder = findFileByPath(resolvedFolder);
assert(foundInFolder && foundInFolder.kind === 'file', 'Folder lookup should resolve to doc inside folder');
console.log('  [PASS] Folder link resolves to document inside folder');

// 6. Check Cloudflare index.html and _headers
assert(fs.existsSync(path.join(__dirname, '../index.html')), 'index.html must exist');
assert(fs.existsSync(path.join(__dirname, '../_headers')), '_headers must exist');
console.log('  [PASS] Cloudflare static deployment files (index.html, _headers) present');

console.log('\nAll Remote Catalog & Cloudflare verification checks PASSED!');
