const fs = require('fs');
const path = require('path');

const ROOT = 'D:/01_APP/Markdown';
const SRC = path.join(ROOT, 'src');

console.log('Building MDBrowse with sleek auto-fading ruler & solid bar handles...');

// Ensure directory structure
['css', 'js/core', 'js/tree', 'js/reader', 'js/search', 'js/ui', 'vendor'].forEach(d => {
  fs.mkdirSync(path.join(SRC, d), { recursive: true });
});

// 1. Read vendor files from backup & node_modules
const backupHtml = fs.readFileSync(path.join(ROOT, 'MDBrowse_backup.html'), 'utf8');

const styleRegex = /<style>([\s\S]*?)<\/style>/gi;
const styles = [];
let sm;
while ((sm = styleRegex.exec(backupHtml)) !== null) styles.push(sm[1]);

const scriptRegex = /<script>([\s\S]*?)<\/script>/gi;
const scripts = [];
let sc;
while ((sc = scriptRegex.exec(backupHtml)) !== null) scripts.push(sc[1]);

fs.writeFileSync(path.join(SRC, 'vendor/vendor.css'), styles[0] || '', 'utf8');
fs.writeFileSync(path.join(SRC, 'vendor/marked.min.js'), scripts[0] || '', 'utf8');
fs.writeFileSync(path.join(SRC, 'vendor/purify.min.js'), scripts[1] || '', 'utf8');
fs.writeFileSync(path.join(SRC, 'vendor/highlight.min.js'), scripts[2] || '', 'utf8');
fs.writeFileSync(path.join(SRC, 'vendor/katex.min.js'), scripts[3] || '', 'utf8');
fs.writeFileSync(path.join(SRC, 'vendor/katex-auto-render.min.js'), scripts[4] || '', 'utf8');

const pdfDistDir = path.join(ROOT, 'node_modules/pdfjs-dist/build');
if (fs.existsSync(pdfDistDir)) {
  fs.copyFileSync(path.join(pdfDistDir, 'pdf.min.js'), path.join(SRC, 'vendor/pdf.min.js'));
  fs.copyFileSync(path.join(pdfDistDir, 'pdf.worker.min.js'), path.join(SRC, 'vendor/pdf.worker.min.js'));
}

// 2. CSS Files
fs.writeFileSync(path.join(SRC, 'css/base.css'), `/* ================= Base Styles & Layout ================= */
:root {
  --sbw: 320px;
  --fscale: 1;
  --md-pad-left: 60px;
  --md-pad-right: 60px;
  --font-serif: "Noto Serif Thai", "Noto Serif", "TH Sarabun New", "Cordia New", Georgia, Cambria, "Times New Roman", serif;
  --font-ui: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans Thai", "Helvetica Neue", Arial, sans-serif;
  --font-base: var(--font-serif);
  --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
  
  --bg: #ffffff;
  --bg2: #f6f8fa;
  --bg3: #ebeff3;
  --border: #d0d7de;
  --border2: #e1e4e8;
  --text: #1f2328;
  --text2: #656d76;
  --text3: #8c959f;
  --accent: #0969da;
  --accent2: #ddf4ff;
  --accent-text: #0550ae;
  --folder-stroke: #54aeff;
  --file-stroke: #8c959f;
  --hl: #fff8c5;
  --hl2: #ffdf5d;
  --shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

*, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-family: var(--font-base);
  font-size: calc(15px * var(--fscale, 1));
  color: var(--tx, var(--text));
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
}

#app {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
}

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--text3);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 6px;
  font-family: var(--font-ui);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  transition: all .15s ease;
  user-select: none;
}
.btn:hover {
  background: var(--bg2);
  border-color: var(--text3);
}
.btn.primary {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}
.btn.primary:hover {
  background: #0858b9;
}
.btn.small {
  padding: 3px 8px;
  font-size: 12px;
}

body.resizing {
  cursor: col-resize !important;
  user-select: none !important;
}
body.dragging-ruler {
  cursor: ew-resize !important;
  user-select: none !important;
}
body.resizing iframe, body.resizing canvas, body.dragging-ruler iframe, body.dragging-ruler canvas {
  pointer-events: none !important;
}
`, 'utf8');

fs.writeFileSync(path.join(SRC, 'css/themes.css'), `/* ================= Themes ================= */
html[data-theme="dark"] {
  --bg: #0d1117;
  --bg2: #161b22;
  --bg3: #21262d;
  --border: #30363d;
  --border2: #21262d;
  --text: #e6edf3;
  --text2: #8b949e;
  --text3: #6e7681;
  --accent: #2f81f7;
  --accent2: #1f2a3c;
  --accent-text: #79c0ff;
  --folder-stroke: #58a6ff;
  --file-stroke: #8b949e;
  --hl: #383214;
  --hl2: #5c4e10;
  --shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

html[data-theme="cream"] {
  --bg: #fcf8ee;
  --bg2: #f4ecda;
  --bg3: #e8ddc4;
  --border: #dcd0b6;
  --border2: #e8dcbf;
  --text: #3d3527;
  --text2: #756a56;
  --text3: #9b8f78;
  --accent: #a05a1c;
  --accent2: #faebd7;
  --accent-text: #82440f;
  --folder-stroke: #c27d38;
  --file-stroke: #9b8f78;
  --hl: #ffe3a8;
  --hl2: #ffd27a;
  --shadow: 0 4px 16px rgba(61, 53, 39, 0.08);
}

html[data-theme="deepblue"] {
  --bg: #0b1528;
  --bg2: #10203b;
  --bg3: #182e54;
  --border: #1e3a68;
  --border2: #162c4e;
  --text: #dbe7f7;
  --text2: #8ba5cc;
  --text3: #5f7a9f;
  --accent: #3b82f6;
  --accent2: #19335c;
  --accent-text: #60a5fa;
  --folder-stroke: #60a5fa;
  --file-stroke: #8ba5cc;
  --hl: #2a3e66;
  --hl2: #3b5a94;
  --shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
}

.mb-swatch {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  padding: 0;
  transition: transform .15s, border-color .15s;
}
.mb-swatch:hover {
  transform: scale(1.15);
}
.mb-swatch.on {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px var(--bg), 0 0 0 3px var(--accent);
}
.mb-swatch[data-theme="light"] { background: linear-gradient(135deg, #ffffff 0%, #dce3eb 100%); }
.mb-swatch[data-theme="dark"] { background: linear-gradient(135deg, #21262d 0%, #0d1117 100%); }
.mb-swatch[data-theme="cream"] { background: linear-gradient(135deg, #fdf6e5 0%, #e8d9b5 100%); }
.mb-swatch[data-theme="deepblue"] { background: linear-gradient(135deg, #1d3a5f 0%, #0e1a2b 100%); }
`, 'utf8');

fs.writeFileSync(path.join(SRC, 'css/sidebar.css'), `/* ================= Sidebar Styles ================= */
#sidebar {
  width: var(--sbw, 320px);
  min-width: 200px;
  max-width: 65vw;
  flex: none;
  background: var(--bg2);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  z-index: 10;
  font-family: var(--font-ui);
  transition: margin-left .18s cubic-bezier(0.4, 0, 0.2, 1);
}

body.sb-closed #sidebar {
  margin-left: calc(-1 * var(--sbw, 320px));
}

.sb-header {
  padding: 12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border2);
  background: var(--bg2);
}

.brand {
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -.01em;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text);
}

.sb-search-box {
  padding: 8px 12px;
  border-bottom: 1px solid var(--border2);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.sb-search-input {
  width: 100%;
  padding: 6px 10px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-family: var(--font-ui);
  font-size: 13px;
  background: var(--bg);
  color: var(--text);
  outline: none;
  transition: border-color .15s, box-shadow .15s;
}
.sb-search-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent2);
}

.sb-search-opts {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11.5px;
  color: var(--text2);
}
.sb-search-opts label {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.sb-search-info {
  font-size: 11.5px;
  color: var(--accent);
  font-weight: 500;
}

.sb-ws-bar {
  padding: 6px 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  border-bottom: 1px solid var(--border2);
  max-height: 90px;
  overflow-y: auto;
}
.sb-ws-bar:empty {
  display: none;
}

.ws-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 2px 8px;
  font-size: 11.5px;
  max-width: 100%;
}
.ws-chip b {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ws-chip button {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: var(--text3);
  font-size: 14px;
  line-height: 1;
  display: flex;
}
.ws-chip button:hover {
  color: #cf222e;
}

.sb-tree {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 6px 0 20px;
  user-select: none;
}

.node-row {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  font-size: 13px;
  color: var(--text);
  cursor: pointer;
  border-radius: 4px;
  margin: 1px 6px;
  transition: background .1s ease;
}
.node-row:hover {
  background: var(--border2);
}
.node-row.active {
  background: var(--accent2);
  color: var(--accent-text);
  font-weight: 600;
}
.node-row.hit {
  color: var(--accent);
  font-weight: 600;
}
.node-row .twisty {
  width: 14px;
  height: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: var(--text3);
  flex: none;
}
.node-row .ico {
  flex: none;
}
.node-row .nm {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sb-footer {
  padding: 8px 12px;
  border-top: 1px solid var(--border2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 11.5px;
  color: var(--text3);
  background: var(--bg2);
}

.sb-footer-actions {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: none;
}

#sb-resizer {
  width: 5px;
  cursor: col-resize;
  background: transparent;
  flex: none;
  position: relative;
  z-index: 15;
  margin-left: -2px;
  transition: background .2s ease;
}
#sb-resizer:hover, #sb-resizer.dragging {
  background: var(--accent);
}
`, 'utf8');

fs.writeFileSync(path.join(SRC, 'css/reader.css'), `/* ================= Reader Layout & Toolbar ================= */
#main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg);
  position: relative;
}

.menubar {
  height: 44px;
  flex: none;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  border-bottom: 1px solid var(--border);
  background: var(--bg2);
  font-family: var(--font-ui);
  z-index: 5;
}

.mb-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  min-width: 28px;
  padding: 0 8px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all .15s ease;
}
.mb-btn:hover {
  background: var(--border2);
}
.mb-group {
  display: flex;
  align-items: center;
  gap: 6px;
}
.mb-label {
  font-size: 11.5px;
  color: var(--text3);
  font-weight: 500;
}
#tx-color {
  width: 28px;
  height: 26px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--bg);
  padding: 1px;
  cursor: pointer;
}

.file-crumb {
  margin-left: auto;
  font-size: 12px;
  color: var(--text3);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 45%;
}

#reader-viewport {
  flex: 1;
  min-height: 0;
  display: flex;
  position: relative;
  overflow: hidden;
}

#md-view {
  flex: 1;
  display: flex;
  min-height: 0;
  height: 100%;
}
#md-view[hidden] {
  display: none !important;
}

#toc-panel {
  width: 250px;
  flex: none;
  overflow-y: auto;
  padding: 36px 16px 60px 6px;
  font-family: var(--font-ui);
  font-size: calc(12.5px * var(--fscale, 1));
  border-right: 1px solid var(--border2);
  scrollbar-width: thin;
}
#toc-panel .toc-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--text3);
  margin: 0 0 10px 10px;
}
#toc-panel a {
  display: block;
  color: var(--text2);
  text-decoration: none;
  padding: 4px 10px;
  border-left: 2px solid transparent;
  border-radius: 0 6px 6px 0;
  line-height: 1.45;
  text-wrap: balance;
  transition: all .1s ease;
}
#toc-panel a:hover {
  color: var(--accent);
  background: var(--bg2);
}
#toc-panel a.l2 { padding-left: 22px; }
#toc-panel a.l3 { padding-left: 34px; }
#toc-panel a.l4 { padding-left: 46px; }
#toc-panel a.l5 { padding-left: 58px; }
#toc-panel a.l6 { padding-left: 58px; }
#toc-panel a.on {
  color: var(--accent);
  border-left-color: var(--accent);
  background: var(--accent2);
  font-weight: 600;
}

.empty-state {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  z-index: 20;
}
.empty-card {
  max-width: 440px;
  text-align: center;
  color: var(--text2);
  padding: 24px;
}
.empty-card svg {
  color: var(--accent);
}
.empty-card h1 {
  font-size: 26px;
  margin: 14px 0 6px;
  color: var(--text);
}
.empty-card p {
  margin: 6px 0 16px;
  line-height: 1.5;
}
.empty-card .hint {
  font-size: 12px;
  color: var(--text3);
  margin-top: 14px;
}
`, 'utf8');

fs.writeFileSync(path.join(SRC, 'css/ruler.css'), `/* ================= Interactive Ruler & Margin Guides ================= */
.md-reader-container {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: var(--bg);
}

.md-ruler-bar {
  height: 20px;
  flex: none;
  background: var(--bg2);
  border-bottom: 1px solid var(--border2);
  position: relative;
  user-select: none;
  z-index: 8;
  overflow: hidden;
  opacity: 0.18;
  transition: opacity 0.35s ease, background 0.2s ease;
}

.md-ruler-bar:hover,
body.dragging-ruler .md-ruler-bar {
  opacity: 1;
}

.ruler-track {
  width: 100%;
  height: 100%;
  position: relative;
}

.ruler-scale {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0.55;
}

.ruler-scale svg {
  display: block;
  width: 100%;
  height: 100%;
}

/* Thick Solid Line / Bar Marker */
.ruler-handle {
  position: absolute;
  top: 1px;
  bottom: 1px;
  width: 16px;
  cursor: ew-resize;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transform: translateX(-50%);
  transition: transform 0.15s;
}

.ruler-handle.left {
  left: var(--md-pad-left, 60px);
}

.ruler-handle.right {
  left: calc(100% - var(--md-pad-right, 60px));
}

.ruler-bar-handle {
  width: 4px;
  height: 14px;
  background: var(--text3);
  border-radius: 2px;
  transition: width 0.15s, height 0.15s, background-color 0.15s, box-shadow 0.15s;
}

.ruler-handle:hover .ruler-bar-handle,
.ruler-handle.dragging .ruler-bar-handle {
  width: 6px;
  height: 16px;
  background: var(--accent);
  box-shadow: 0 0 0 2px var(--accent2);
}

.md-scroll-pane {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  position: relative;
  scroll-behavior: smooth;
}

/* Margin Guide Lines */
.margin-guide {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  pointer-events: none;
  z-index: 4;
  opacity: 0;
  border-left: 1.5px dashed var(--accent);
  transition: opacity 0.3s ease;
}

.margin-guide.left {
  left: var(--md-pad-left, 60px);
}

.margin-guide.right {
  left: calc(100% - var(--md-pad-right, 60px));
}

/* Show subtle guide on ruler hover, and active guide during dragging */
.md-ruler-bar:hover ~ .md-scroll-pane .margin-guide {
  opacity: 0.25;
}

body.dragging-ruler .margin-guide {
  opacity: 0.85;
  border-left: 2px solid var(--accent);
}
`, 'utf8');

fs.writeFileSync(path.join(SRC, 'css/markdown.css'), `/* ================= Markdown Typography & Footnotes ================= */
.markdown-body {
  font-family: var(--font-serif, "Noto Serif Thai", "Noto Serif", Georgia, serif);
  font-size: calc(15.5px * var(--fscale, 1));
  line-height: 1.8;
  color: inherit;
  margin: 0;
  padding-left: var(--md-pad-left, 60px);
  padding-right: var(--md-pad-right, 60px);
  padding-top: 36px;
  padding-bottom: 120px;
  max-width: 100%;
  box-sizing: border-box;
  word-wrap: break-word;
}

.markdown-body h1, .markdown-body h2, .markdown-body h3,
.markdown-body h4, .markdown-body h5, .markdown-body h6 {
  margin-top: 28px;
  margin-bottom: 16px;
  font-weight: 700;
  line-height: 1.35;
  color: var(--text);
}
.markdown-body h1 { font-size: 2.1em; border-bottom: 1px solid var(--border); padding-bottom: .3em; }
.markdown-body h2 { font-size: 1.6em; border-bottom: 1px solid var(--border2); padding-bottom: .25em; }
.markdown-body h3 { font-size: 1.3em; }
.markdown-body h4 { font-size: 1.1em; }

.markdown-body p { margin-top: 0; margin-bottom: 18px; }
.markdown-body blockquote {
  padding: 0.2em 1.2em;
  color: var(--text2);
  border-left: .28em solid var(--border);
  margin: 0 0 18px 0;
  background: var(--bg2);
  border-radius: 0 6px 6px 0;
}

.markdown-body ul, .markdown-body ol {
  padding-left: 2em;
  margin-top: 0;
  margin-bottom: 18px;
}
.markdown-body li + li { margin-top: .35em; }

.markdown-body code {
  font-family: var(--font-mono);
  font-size: 88%;
  background: var(--bg2);
  padding: .2em .45em;
  border-radius: 4px;
  border: 1px solid var(--border2);
}
.markdown-body pre {
  padding: 14px 18px;
  overflow: auto;
  font-size: calc(13.5px * var(--fscale, 1));
  line-height: 1.5;
  background: var(--bg2);
  border-radius: 8px;
  border: 1px solid var(--border);
  margin-bottom: 18px;
}
.markdown-body pre code {
  padding: 0;
  background: transparent;
  border: none;
  font-size: inherit;
}

.markdown-body table {
  border-spacing: 0;
  border-collapse: collapse;
  margin-bottom: 18px;
  width: 100%;
}
.markdown-body table th, .markdown-body table td {
  padding: 8px 14px;
  border: 1px solid var(--border);
}
.markdown-body table tr:nth-child(2n) {
  background: var(--bg2);
}

.markdown-body img {
  max-width: 100%;
  border-radius: 6px;
  box-shadow: var(--shadow);
}

.markdown-body a {
  color: var(--accent);
  text-decoration: none;
}
.markdown-body a:hover {
  text-decoration: underline;
}

.markdown-body mark {
  background: var(--hl);
  border-radius: 2px;
  padding: 0 2px;
  color: inherit;
}
.markdown-body mark.cur {
  background: var(--hl2);
  outline: 2px solid #d9a400;
}

/* Footnotes Styling */
.fn-ref {
  font-size: 0.78em;
  line-height: 0;
  vertical-align: super;
  padding: 0 2px;
}
.fn-ref a {
  color: var(--accent);
  font-weight: 700;
  text-decoration: none;
  padding: 1px 3px;
  border-radius: 3px;
}
.fn-ref a:hover {
  background: var(--accent2);
  text-decoration: underline;
}

.footnotes {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  font-size: calc(13.8px * var(--fscale, 1));
  color: var(--text2);
}
.footnotes-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 16px;
}
.footnotes-list {
  padding-left: 20px;
  margin: 0;
}
.fn-item {
  margin-bottom: 10px;
  line-height: 1.65;
  scroll-margin-top: 90px;
  border-radius: 4px;
  padding: 3px 6px;
  transition: background .2s ease;
}
.fn-back {
  font-weight: 700;
  color: var(--accent);
  text-decoration: none;
  margin-right: 6px;
}
.fn-back:hover {
  text-decoration: underline;
}
.fn-back-arrow {
  color: var(--accent);
  text-decoration: none;
  font-family: var(--font-base);
  margin-left: 6px;
  display: inline-block;
}
.fn-back-arrow:hover {
  transform: scale(1.2);
}

@keyframes fnPulse {
  0% { background: var(--hl2); box-shadow: 0 0 0 4px var(--hl2); }
  50% { background: var(--hl); box-shadow: 0 0 0 8px var(--hl); }
  100% { background: transparent; box-shadow: none; }
}
.fn-flash {
  animation: fnPulse 1.8s ease-out forwards;
}
`, 'utf8');

// 3. Ruler JS
fs.writeFileSync(path.join(SRC, 'js/ui/ruler.js'), `import { State } from '../core/state.js';

export const RulerModule = {
  rulerBar: null,
  rulerTrack: null,
  rulerScale: null,
  handleLeft: null,
  handleRight: null,
  guideLeft: null,
  guideRight: null,
  container: null,
  scrollPane: null,
  onSaveUi: null,

  defaultPadLeft: 60,
  defaultPadRight: 60,

  init(rulerBar, rulerTrack, rulerScale, handleLeft, handleRight, guideLeft, guideRight, container, scrollPane, onSaveUi) {
    this.rulerBar = rulerBar;
    this.rulerTrack = rulerTrack;
    this.rulerScale = rulerScale;
    this.handleLeft = handleLeft;
    this.handleRight = handleRight;
    this.guideLeft = guideLeft;
    this.guideRight = guideRight;
    this.container = container;
    this.scrollPane = scrollPane;
    this.onSaveUi = onSaveUi;

    if (!this.rulerTrack) return;

    this.setupDrag();
    this.setupDblClick();
    this.drawScale();

    window.addEventListener('resize', () => this.drawScale());
  },

  setMargins(padLeft, padRight) {
    const l = (typeof padLeft === 'number' && !isNaN(padLeft)) ? Math.max(16, padLeft) : this.defaultPadLeft;
    const r = (typeof padRight === 'number' && !isNaN(padRight)) ? Math.max(16, padRight) : this.defaultPadRight;
    State.ui.padLeft = l;
    State.ui.padRight = r;

    document.documentElement.style.setProperty('--md-pad-left', l + 'px');
    document.documentElement.style.setProperty('--md-pad-right', r + 'px');
  },

  drawScale() {
    if (!this.rulerScale || !this.rulerTrack) return;
    const width = this.rulerTrack.clientWidth || window.innerWidth;
    if (width <= 0) return;

    let svgHtml = \`<svg width="\${width}" height="20" xmlns="http://www.w3.org/2000/svg">\`;
    svgHtml += \`<line x1="0" y1="19" x2="\${width}" y2="19" stroke="var(--border2)" stroke-width="1"/>\`;

    for (let x = 0; x <= width; x += 10) {
      if (x % 100 === 0) {
        svgHtml += \`<line x1="\${x}" y1="8" x2="\${x}" y2="19" stroke="var(--text3)" stroke-width="1"/>\`;
        if (x > 0 && x < width - 24) {
          svgHtml += \`<text x="\${x + 3}" y="9" font-size="8.5" fill="var(--text3)" font-family="sans-serif">\${x}</text>\`;
        }
      } else if (x % 50 === 0) {
        svgHtml += \`<line x1="\${x}" y1="12" x2="\${x}" y2="19" stroke="var(--text3)" stroke-width="1"/>\`;
      } else {
        svgHtml += \`<line x1="\${x}" y1="15" x2="\${x}" y2="19" stroke="var(--border)" stroke-width="1"/>\`;
      }
    }

    svgHtml += '</svg>';
    this.rulerScale.innerHTML = svgHtml;
  },

  setupDrag() {
    let activeDrag = null;

    const onMouseDown = (type, e) => {
      e.preventDefault();
      activeDrag = type;
      document.body.classList.add('dragging-ruler');
      if (type === 'left' && this.handleLeft) this.handleLeft.classList.add('dragging');
      if (type === 'right' && this.handleRight) this.handleRight.classList.add('dragging');

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = e => {
      if (!activeDrag || !this.rulerTrack) return;
      const rect = this.rulerTrack.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const trackWidth = rect.width;
      const minDistance = 180;

      if (activeDrag === 'left') {
        const curRight = State.ui.padRight || this.defaultPadRight;
        const maxLeft = trackWidth - curRight - minDistance;
        const newLeft = Math.max(16, Math.min(maxLeft, Math.round(mouseX)));
        this.setMargins(newLeft, curRight);
      } else if (activeDrag === 'right') {
        const curLeft = State.ui.padLeft || this.defaultPadLeft;
        const maxRight = trackWidth - curLeft - minDistance;
        const rightPos = trackWidth - mouseX;
        const newRight = Math.max(16, Math.min(maxRight, Math.round(rightPos)));
        this.setMargins(curLeft, newRight);
      }
    };

    const onMouseUp = () => {
      if (!activeDrag) return;
      document.body.classList.remove('dragging-ruler');
      if (this.handleLeft) this.handleLeft.classList.remove('dragging');
      if (this.handleRight) this.handleRight.classList.remove('dragging');
      activeDrag = null;

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (this.onSaveUi) this.onSaveUi();
    };

    if (this.handleLeft) this.handleLeft.addEventListener('mousedown', e => onMouseDown('left', e));
    if (this.handleRight) this.handleRight.addEventListener('mousedown', e => onMouseDown('right', e));
  },

  setupDblClick() {
    if (this.handleLeft) {
      this.handleLeft.addEventListener('dblclick', e => {
        e.stopPropagation();
        this.setMargins(this.defaultPadLeft, State.ui.padRight || this.defaultPadRight);
        if (this.onSaveUi) this.onSaveUi();
      });
    }

    if (this.handleRight) {
      this.handleRight.addEventListener('dblclick', e => {
        e.stopPropagation();
        this.setMargins(State.ui.padLeft || this.defaultPadLeft, this.defaultPadRight);
        if (this.onSaveUi) this.onSaveUi();
      });
    }
  }
};
`, 'utf8');

// 4. Update app.js
fs.writeFileSync(path.join(SRC, 'js/app.js'), `import { Store } from './core/store.js';
import { State } from './core/state.js';
import { rescanWorkspaces, ensurePermission, findFileByPath, resolvePath } from './core/fs.js';
import { isMd, isPdf, isImg, isDoc, fmtBytes, esc } from './tree/tree-node.js';
import { getFinalExpandedPaths, expandOnlyFinal, collapseAllTruly } from './tree/tree-exp.js';
import { renderTree } from './tree/tree-ui.js';
import { renderMarkdownContent } from './reader/markdown.js';
import { PDFViewer } from './reader/pdf-engine.js';
import { ImageViewer } from './reader/img-engine.js';
import { SearchEngine } from './search/search.js';
import { setupSidebarResizer } from './ui/resizer.js';
import { RulerModule } from './ui/ruler.js';
import { applyTheme, THEMES } from './ui/theme.js';

const D = {};
['btn-add', 'btn-add2', 'search-input', 'search-content', 'search-info', 'ws-bar', 'tree', 'stat',
 'btn-final', 'btn-collapse-all',
 'sb-toggle', 'sb-resizer', 'sidebar', 'reader-viewport', 'md-view',
 'md-reader-container', 'md-ruler-bar', 'ruler-track', 'ruler-scale', 'ruler-handle-left', 'ruler-handle-right',
 'md-scroll-pane', 'margin-guide-left', 'margin-guide-right', 'md-content', 'toc-panel', 'toc-list',
 'pdf-view', 'pdf-canvas-container', 'pdf-page-num', 'pdf-total-pages', 'pdf-zoom-val', 'pdf-prev', 'pdf-next',
 'pdf-zoom-in', 'pdf-zoom-out', 'pdf-zoom-reset', 'pdf-fit-width',
 'img-view', 'img-preview-frame', 'img-meta-badge', 'empty-state',
 'file-crumb', 'fs-dec', 'fs-inc', 'fs-reset', 'tx-color', 'tx-reset']
.forEach(id => D[id.replace(/-(\\w)/g, (_, c) => c.toUpperCase())] = document.getElementById(id));

export function switchView(type) {
  D.mdView.hidden = (type !== 'md');
  D.pdfView.hidden = (type !== 'pdf');
  D.imgView.hidden = (type !== 'img');
  D.emptyState.style.display = (type === 'empty') ? 'flex' : 'none';
  if (type === 'md') {
    setTimeout(() => RulerModule.drawScale(), 50);
  }
}

async function saveWorkspace() {
  const roots = [];
  for (const r of State.roots) {
    try {
      if (await r.handle.queryPermission({ mode: 'read' }) === 'granted') {
        roots.push({ name: r.name, handle: r.handle });
      }
    } catch (e) {}
  }
  Store.set('workspace', {
    roots,
    expanded: [...State.expanded],
    collapsed: [...State.collapsed]
  });
}

function saveUi() {
  Store.set('ui', {
    sbClosed: document.body.classList.contains('sb-closed'),
    sbWidth: State.ui.sbWidth,
    theme: State.ui.theme,
    fscale: State.ui.fscale,
    tx: State.ui.tx,
    padLeft: State.ui.padLeft,
    padRight: State.ui.padRight
  });
}

function updateStat(currentFile) {
  const files = State.flat.filter(n => n.kind === 'file' && isDoc(n.name));
  const dirs = State.flat.filter(n => n.kind === 'directory');
  const nmd = files.filter(n => isMd(n.name)).length;
  const npdf = files.filter(n => isPdf(n.name)).length;
  const nimg = files.filter(n => isImg(n.name)).length;

  let info = \`\${nmd} .md · \${npdf} .pdf\`;
  if (nimg) info += \` · \${nimg} รูปภาพ\`;
  
  if (currentFile) {
    D.stat.textContent = State.roots.length
      ? \`\${State.roots.length} โฟลเดอร์ · \${dirs.length} โฟลเดอร์ย่อย · \${info} — ไฟล์ปัจจุบัน \${fmtBytes(currentFile.size)}\`
      : \`ไฟล์ปัจจุบัน \${fmtBytes(currentFile.size)}\`;
  } else {
    D.stat.textContent = State.roots.length
      ? \`\${State.roots.length} โฟลเดอร์ · \${dirs.length} โฟลเดอร์ย่อย · \${info}\`
      : '';
  }
}

function renderWsBar() {
  if (!State.roots.length) { D.wsBar.innerHTML = ''; return; }
  D.wsBar.innerHTML = State.roots.map((r, i) =>
    \`<span class="ws-chip" title="\${esc(r.name)}"><b>\${esc(r.name)}</b><button data-i="\${i}" title="เอาโฟลเดอร์นี้ออก">×</button></span>\`
  ).join('');
}

D.wsBar.addEventListener('click', async e => {
  const b = e.target.closest('button[data-i]');
  if (!b) return;
  const i = +b.dataset.i;
  State.roots.splice(i, 1);
  State.flat = State.flat.filter(n => n.rootIdx !== i);
  for (const n of State.flat) if (n.rootIdx > i) n.rootIdx--;
  State.byPath = new Map(State.flat.map(n => [n.path, n]));
  for (const n of State.flat) if (n.kind !== 'root') n.parent = n.path.includes('/') ? State.byPath.get(n.path.slice(0, n.path.lastIndexOf('/'))) : null;
  for (const n of State.flat) if ((n.kind === 'root' || n.kind === 'directory') && n.kids) n.kids = n.kids.filter(k => k.rootIdx !== i);
  if (State.current && State.current.rootIdx === i) {
    State.current = null;
    switchView('empty');
  }
  renderWsBar();
  renderTree(D.tree);
  updateStat();
  await saveWorkspace();
});

export async function openFile(node, opt = {}) {
  if (!node || node.kind !== 'file' || !isDoc(node.name)) return;
  try {
    const hasPerm = await ensurePermission(node);
    if (!hasPerm) {
      alert('กรุณาอนุญาตการเข้าถึงโฟลเดอร์เพื่อเปิดอ่านไฟล์');
      return;
    }

    const file = await node.handle.getFile();
    State.current = node;
    renderTree(D.tree);
    D.fileCrumb.textContent = node.path;

    if (isPdf(node.name)) {
      switchView('pdf');
      PDFViewer.load(file);
    } else if (isImg(node.name)) {
      switchView('img');
      ImageViewer.render(file, node);
    } else {
      switchView('md');
      const text = await file.text();
      await renderMarkdownContent(text, node, D.mdContent, D.tocPanel, D.tocList);
      SearchEngine.highlightDoc();
    }

    updateStat(file);
    if (!opt.silent && D.mdScrollPane) D.mdScrollPane.scrollTop = 0;
    Store.set('lastFile', node.path);
  } catch (err) {
    console.error('openFile error:', err);
    alert('เปิดไฟล์ไม่สำเร็จ: ' + (err.message || err));
  }
}

async function addFolder() {
  if (!State.hasFSA) {
    alert('เบราว์เซอร์นี้ไม่รองรับ File System Access API — กรุณาใช้ Google Chrome');
    return;
  }
  try {
    const h = await window.showDirectoryPicker({ mode: 'read' });
    for (const r of State.roots) {
      try { if (await r.handle.isSameEntry(h)) return; } catch (e) {}
    }
    State.roots.push({ handle: h, name: h.name });
    await rescanWorkspaces();
    expandOnlyFinal();
    renderWsBar();
    renderTree(D.tree);
    updateStat();

    const first = State.flat.find(n => n.kind === 'file' && isDoc(n.name));
    if (first && !State.current) openFile(first, { silent: true });
    await saveWorkspace();
  } catch (err) {
    if (err && err.name !== 'AbortError') console.warn(err);
  }
}

[D.btnAdd, D.btnAdd2].forEach(b => b.addEventListener('click', addFolder));

D.btnFinal.addEventListener('click', () => {
  expandOnlyFinal(saveWorkspace);
  renderTree(D.tree);
});

D.btnCollapseAll.addEventListener('click', () => {
  collapseAllTruly(saveWorkspace);
  renderTree(D.tree);
});

D.tree.addEventListener('click', e => {
  const row = e.target.closest('.node-row');
  if (!row) return;
  const node = State.byPath.get(row.parentElement.dataset.path);
  if (!node) return;

  if (node.kind === 'root' || node.kind === 'directory') {
    if (node.kids && node.kids.length) {
      if (State.expanded.has(node.path)) {
        State.expanded.delete(node.path);
        State.collapsed.add(node.path);
      } else {
        State.expanded.add(node.path);
        State.collapsed.delete(node.path);
      }
      renderTree(D.tree);
      saveWorkspace();
    }
    return;
  }
  openFile(node);
});

D.sbToggle.addEventListener('click', () => {
  document.body.classList.toggle('sb-closed');
  saveUi();
  setTimeout(() => RulerModule.drawScale(), 200);
});

document.querySelectorAll('.mb-swatch').forEach(b => b.addEventListener('click', () => {
  State.ui.theme = b.dataset.theme;
  applyTheme(D.txColor);
  saveUi();
}));
D.fsInc.addEventListener('click', () => { State.ui.fscale = Math.min(1.8, +(State.ui.fscale + 0.1).toFixed(2)); applyTheme(D.txColor); saveUi(); });
D.fsDec.addEventListener('click', () => { State.ui.fscale = Math.max(0.7, +(State.ui.fscale - 0.1).toFixed(2)); applyTheme(D.txColor); saveUi(); });
D.fsReset.addEventListener('click', () => { State.ui.fscale = 1; applyTheme(D.txColor); saveUi(); });
D.txColor.addEventListener('input', () => { State.ui.tx = D.txColor.value; applyTheme(D.txColor); saveUi(); });
D.txReset.addEventListener('click', () => { State.ui.tx = ''; applyTheme(D.txColor); saveUi(); });

D.pdfZoomIn.addEventListener('click', () => PDFViewer.zoomIn());
D.pdfZoomOut.addEventListener('click', () => PDFViewer.zoomOut());
D.pdfZoomReset.addEventListener('click', () => PDFViewer.zoomReset());
D.pdfFitWidth.addEventListener('click', () => PDFViewer.fitWidth());

D.mdContent.addEventListener('click', async e => {
  const a = e.target.closest('a.internal');
  if (!a) return;
  e.preventDefault();
  const href = a.getAttribute('href');
  const target = findFileByPath(resolvePath(State.current.path, href));
  if (target && target.kind === 'file' && isDoc(target.name)) {
    openFile(target);
    return;
  }
  if (target && target.kind === 'file') {
    try {
      const file = await target.handle.getFile();
      const url = URL.createObjectURL(file);
      window.open(url, '_blank');
      setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch (err) {}
    return;
  }
  alert('หาไฟล์ปลายทางไม่พบ: ' + href);
});

export async function initApp() {
  await Store.open();

  PDFViewer.init(D.pdfCanvasContainer, D.pdfPageNum, D.pdfTotalPages, D.pdfZoomVal, D.pdfPrev, D.pdfNext);
  ImageViewer.init(D.imgPreviewFrame, D.imgMetaBadge);
  SearchEngine.init(D.searchInput, D.searchContent, D.searchInfo, D.mdContent, () => renderTree(D.tree));
  setupSidebarResizer(D.sbResizer, D.sidebar, () => {
    saveUi();
    RulerModule.drawScale();
  });

  RulerModule.init(
    D.mdRulerBar,
    D.rulerTrack,
    D.rulerScale,
    D.rulerHandleLeft,
    D.rulerHandleRight,
    D.marginGuideLeft,
    D.marginGuideRight,
    D.mdReaderContainer,
    D.mdScrollPane,
    saveUi
  );

  const ui = await Store.get('ui');
  if (ui) {
    if (ui.sbClosed) document.body.classList.add('sb-closed');
    if (ui.sbWidth && ui.sbWidth >= 200) State.ui.sbWidth = ui.sbWidth;
    if (ui.theme && THEMES.includes(ui.theme)) State.ui.theme = ui.theme;
    if (ui.fscale) State.ui.fscale = ui.fscale;
    if (typeof ui.tx === 'string') State.ui.tx = ui.tx;
    if (typeof ui.padLeft === 'number') State.ui.padLeft = ui.padLeft;
    if (typeof ui.padRight === 'number') State.ui.padRight = ui.padRight;
  }
  applyTheme(D.txColor);
  RulerModule.setMargins(State.ui.padLeft, State.ui.padRight);

  const rec = await Store.get('workspace');
  if (rec && rec.roots && rec.roots.length) {
    for (const r of rec.roots) State.roots.push({ handle: r.handle, name: r.name });
    await rescanWorkspaces();
    renderWsBar();
    updateStat();

    if (rec.expanded && rec.expanded.length) {
      State.expanded = new Set(rec.expanded.filter(p => State.byPath.has(p)));
      State.collapsed = new Set((rec.collapsed || []).filter(p => State.byPath.has(p)));
    } else {
      State.expanded = getFinalExpandedPaths();
    }
    renderTree(D.tree);

    const lastPath = await Store.get('lastFile');
    if (lastPath) {
      const n = State.byPath.get(lastPath);
      if (n && n.kind === 'file') {
        openFile(n, { silent: true });
        return;
      }
    }
  }

  switchView('empty');
}

initApp();
`, 'utf8');

// 5. Build Standalone HTML Template
const vendorCss = fs.readFileSync(path.join(SRC, 'vendor/vendor.css'), 'utf8');
const baseCss = fs.readFileSync(path.join(SRC, 'css/base.css'), 'utf8');
const themesCss = fs.readFileSync(path.join(SRC, 'css/themes.css'), 'utf8');
const sidebarCss = fs.readFileSync(path.join(SRC, 'css/sidebar.css'), 'utf8');
const readerCss = fs.readFileSync(path.join(SRC, 'css/reader.css'), 'utf8');
const rulerCss = fs.readFileSync(path.join(SRC, 'css/ruler.css'), 'utf8');
const markdownCss = fs.readFileSync(path.join(SRC, 'css/markdown.css'), 'utf8');
const pdfviewCss = fs.readFileSync(path.join(SRC, 'css/pdfview.css'), 'utf8');
const imgviewCss = fs.readFileSync(path.join(SRC, 'css/imgview.css'), 'utf8');

const combinedCss = [vendorCss, baseCss, themesCss, sidebarCss, readerCss, rulerCss, markdownCss, pdfviewCss, imgviewCss].join('\n\n');

const markedJs = fs.readFileSync(path.join(SRC, 'vendor/marked.min.js'), 'utf8');
const purifyJs = fs.readFileSync(path.join(SRC, 'vendor/purify.min.js'), 'utf8');
const hljsJs = fs.readFileSync(path.join(SRC, 'vendor/highlight.min.js'), 'utf8');
const katexJs = fs.readFileSync(path.join(SRC, 'vendor/katex.min.js'), 'utf8');
const katexAutoJs = fs.readFileSync(path.join(SRC, 'vendor/katex-auto-render.min.js'), 'utf8');
const pdfWorkerJs = fs.readFileSync(path.join(SRC, 'vendor/pdf.worker.min.js'), 'utf8');
const pdfJs = fs.readFileSync(path.join(SRC, 'vendor/pdf.min.js'), 'utf8');

function cleanModule(code) {
  return code
    .replace(/^import\s+.*?from\s+['"].*?['"];?\r?\n/gm, '')
    .replace(/^export\s+const\s+/gm, 'const ')
    .replace(/^export\s+function\s+/gm, 'function ')
    .replace(/^export\s+async\s+function\s+/gm, 'async function ')
    .replace(/^export\s+let\s+/gm, 'let ')
    .replace(/^export\s+default\s+/gm, '');
}

const storeCode = cleanModule(fs.readFileSync(path.join(SRC, 'js/core/store.js'), 'utf8'));
const stateCode = cleanModule(fs.readFileSync(path.join(SRC, 'js/core/state.js'), 'utf8'));
const treeNodeCode = cleanModule(fs.readFileSync(path.join(SRC, 'js/tree/tree-node.js'), 'utf8'));
const fsCode = cleanModule(fs.readFileSync(path.join(SRC, 'js/core/fs.js'), 'utf8'));
const treeExpCode = cleanModule(fs.readFileSync(path.join(SRC, 'js/tree/tree-exp.js'), 'utf8'));
const treeUiCode = cleanModule(fs.readFileSync(path.join(SRC, 'js/tree/tree-ui.js'), 'utf8'));
const footnotesCode = cleanModule(fs.readFileSync(path.join(SRC, 'js/reader/footnotes.js'), 'utf8'));
const tocCode = cleanModule(fs.readFileSync(path.join(SRC, 'js/reader/toc.js'), 'utf8'));
const markdownCode = cleanModule(fs.readFileSync(path.join(SRC, 'js/reader/markdown.js'), 'utf8'));
const pdfEngineCode = cleanModule(fs.readFileSync(path.join(SRC, 'js/reader/pdf-engine.js'), 'utf8'));
const imgEngineCode = cleanModule(fs.readFileSync(path.join(SRC, 'js/reader/img-engine.js'), 'utf8'));
const searchCode = cleanModule(fs.readFileSync(path.join(SRC, 'js/search/search.js'), 'utf8'));
const resizerCode = cleanModule(fs.readFileSync(path.join(SRC, 'js/ui/resizer.js'), 'utf8'));
const rulerCode = cleanModule(fs.readFileSync(path.join(SRC, 'js/ui/ruler.js'), 'utf8'));
const themeCode = cleanModule(fs.readFileSync(path.join(SRC, 'js/ui/theme.js'), 'utf8'));
const appCode = cleanModule(fs.readFileSync(path.join(SRC, 'js/app.js'), 'utf8'));

const combinedAppJs = [
  "'use strict';",
  storeCode,
  stateCode,
  treeNodeCode,
  fsCode,
  treeExpCode,
  treeUiCode,
  footnotesCode,
  tocCode,
  markdownCode,
  pdfEngineCode,
  imgEngineCode,
  searchCode,
  resizerCode,
  rulerCode,
  themeCode,
  appCode
].join('\n\n');

const htmlTemplate = `<!DOCTYPE html>
<html lang="th" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>MDBrowse — Markdown, PDF & Image Reader</title>
<style>
${combinedCss}
</style>
</head>
<body>
<div id="app">
  <!-- Sidebar -->
  <aside id="sidebar">
    <div class="sb-header">
      <span class="brand">
        <svg viewBox="0 0 16 16" width="18" height="18" fill="var(--accent)"><path d="M14.5 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2Zm-10 9H3V5h1.5l2 2.5L8.5 5H10v6H8.5V7.5L6.5 10 4.5 7.5V11Zm8.5 0h-1.5V5H13v3.5l1.5-1.5L16 8.5V11h-1.5V8.5L13 10v1Z"/></svg>
        MDBrowse
      </span>
      <button id="btn-add" class="btn primary small" title="เพิ่มโฟลเดอร์สำหรับอ่าน">+ เพิ่มโฟลเดอร์</button>
    </div>

    <div class="sb-search-box">
      <input type="search" id="search-input" class="sb-search-input" placeholder="ค้นหาชื่อไฟล์ / เนื้อหา..." autocomplete="off">
      <div class="sb-search-opts">
        <label><input type="checkbox" id="search-content"> ในเนื้อหา</label>
        <span id="search-info" class="sb-search-info" hidden></span>
      </div>
    </div>

    <div id="ws-bar" class="sb-ws-bar"></div>
    <div id="tree" class="sb-tree"></div>

    <div class="sb-footer">
      <span id="stat"></span>
      <div class="sb-footer-actions">
        <button id="btn-final" class="btn small" title="กางเฉพาะโฟลเดอร์ final และเส้นทางที่เกี่ยวข้อง">เฉพาะ final</button>
        <button id="btn-collapse-all" class="btn small" title="พับทุกโฟลเดอร์">พับทั้งหมด</button>
      </div>
    </div>
  </aside>

  <!-- Draggable Resizer Splitter -->
  <div id="sb-resizer" title="ลากเพื่อปรับขนาดไซด์บาร์"></div>

  <!-- Main View Area -->
  <main id="main">
    <div class="menubar">
      <button id="sb-toggle" class="mb-btn" title="ซ่อน/แสดงไซด์บาร์ (Ctrl+B)">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M1 2.75A1.75 1.75 0 0 1 2.75 1h10.5C14.22 1 15 1.78 15 2.75v10.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25V2.75ZM5.5 2H2.75a.75.75 0 0 0-.75.75v10.5c0 .41.34.75.75.75H5.5V2Zm1.5 11h6.25a.75.75 0 0 0 .75-.75V2.75a.75.75 0 0 0-.75-.75H7v11Z"/></svg>
      </button>

      <span class="mb-group">
        <span class="mb-label">ธีม</span>
        <button class="mb-swatch on" data-theme="light" title="สว่าง"></button>
        <button class="mb-swatch" data-theme="dark" title="มืด"></button>
        <button class="mb-swatch" data-theme="cream" title="ถนอมสายตา (Cream)"></button>
        <button class="mb-swatch" data-theme="deepblue" title="น้ำเงินเข้ม (Deep Blue)"></button>
      </span>

      <span class="mb-group">
        <button id="fs-dec" class="mb-btn" title="ลดขนาดอักษร (A-)">A-</button>
        <button id="fs-reset" class="mb-btn" title="ขนาดอักษรปกติ (A)">A</button>
        <button id="fs-inc" class="mb-btn" title="เพิ่มขนาดอักษร (A+)">A+</button>
      </span>

      <span class="mb-group">
        <label class="mb-label" for="tx-color">สีอักษร</label>
        <input type="color" id="tx-color" value="#1f2328" title="เปลี่ยนสีอักษรเนื้อหา">
        <button id="tx-reset" class="mb-btn" title="ใช้สีอักษรตามธีม">รีเซ็ต</button>
      </span>

      <span id="file-crumb" class="file-crumb"></span>
    </div>

    <div id="reader-viewport">
      <!-- 1. Markdown Viewer with Interactive Ruler -->
      <div id="md-view">
        <div id="toc-panel">
          <div class="toc-title">สารบัญ</div>
          <div id="toc-list"></div>
        </div>
        <div id="md-reader-container" class="md-reader-container">
          <!-- Top Ruler Bar -->
          <div id="md-ruler-bar" class="md-ruler-bar">
            <div class="ruler-track" id="ruler-track">
              <div class="ruler-scale" id="ruler-scale"></div>
              <div class="ruler-handle left" id="ruler-handle-left" title="ลากเพื่อปรับระยะขอบซ้าย (ดับเบิลคลิกเพื่อคืนค่าเริ่มต้น)">
                <div class="ruler-bar-handle"></div>
              </div>
              <div class="ruler-handle right" id="ruler-handle-right" title="ลากเพื่อปรับระยะขอบขวา (ดับเบิลคลิกเพื่อคืนค่าเริ่มต้น)">
                <div class="ruler-bar-handle"></div>
              </div>
            </div>
          </div>

          <!-- Markdown Scroll Area -->
          <div id="md-scroll-pane" class="md-scroll-pane">
            <div class="margin-guide left" id="margin-guide-left"></div>
            <div class="margin-guide right" id="margin-guide-right"></div>
            <article id="md-content" class="markdown-body"></article>
          </div>
        </div>
      </div>

      <!-- 2. PDF.js Canvas Viewer -->
      <div id="pdf-view" hidden>
        <div class="pdf-toolbar">
          <div class="pdf-page-nav">
            <button id="pdf-prev" class="btn-icon" title="หน้าก่อนหน้า">‹</button>
            <input type="number" id="pdf-page-num" min="1" value="1">
            <span id="pdf-total-pages">/ 1</span>
            <button id="pdf-next" class="btn-icon" title="หน้าถัดไป">›</button>
          </div>
          <div class="pdf-zoom-nav">
            <button id="pdf-zoom-out" class="btn-icon" title="ย่อ">-</button>
            <span id="pdf-zoom-val">120%</span>
            <button id="pdf-zoom-in" class="btn-icon" title="ขยาย">+</button>
            <button id="pdf-fit-width" class="mb-btn" title="พอดีความกว้าง">พอดีหน้าจอ</button>
            <button id="pdf-zoom-reset" class="mb-btn" title="ขนาด 100%">100%</button>
          </div>
        </div>
        <div id="pdf-canvas-container" class="pdf-canvas-container"></div>
      </div>

      <!-- 3. Image Viewer -->
      <div id="img-view" hidden>
        <div class="img-canvas-wrap">
          <img id="img-preview-frame" alt="" />
        </div>
        <div id="img-meta-badge" class="img-meta-badge"></div>
      </div>

      <!-- 4. Empty State -->
      <div id="empty-state" class="empty-state">
        <div class="empty-card">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          <h1>MDBrowse</h1>
          <p>โปรแกรมอ่าน Markdown, PDF และรูปภาพแบบออฟไลน์บน Chrome</p>
          <button id="btn-add2" class="btn primary">เลือกโฟลเดอร์เพื่อเริ่มอ่าน</button>
          <p class="hint">รองรับไฟล์ .md, .pdf, รูปภาพ · ขยายเฉพาะโฟลเดอร์ final เป็นค่าเริ่มต้น</p>
        </div>
      </div>
    </div>
  </main>
</div>

<script>
${markedJs}
</script>
<script>
${purifyJs}
</script>
<script>
${hljsJs}
</script>
<script>
${katexJs}
</script>
<script>
${katexAutoJs}
</script>
<script>
${pdfWorkerJs}
</script>
<script>
${pdfJs}
</script>
<script>
${combinedAppJs}
</script>
</body>
</html>`;

fs.writeFileSync(path.join(ROOT, 'MDBrowse.html'), htmlTemplate, 'utf8');
console.log('Build successful: MDBrowse.html generated (' + htmlTemplate.length + ' bytes)');
