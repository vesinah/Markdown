const fs = require('fs');
const path = require('path');

const ROOT = __dirname || 'D:/01_APP/Markdown';
const SRC = path.join(ROOT, 'src');

console.log('Building MDBrowse from src/...');

// Ensure directory structure
['css', 'js/core', 'js/tree', 'js/reader', 'js/search', 'js/ui', 'vendor'].forEach(d => {
  fs.mkdirSync(path.join(SRC, d), { recursive: true });
});

// Write Web App Manifest
const manifestData = {
  name: 'มาร์คมาก — เครื่องมืออ่านไฟล์มาร์คดาวแบบง่าย ๆ',
  short_name: 'มาร์คมาก',
  start_url: 'MDBrowse.html',
  display: 'standalone',
  background_color: '#ffffff',
  theme_color: '#0969da',
  icons: [
    { src: 'assets/icon-markmak.png', sizes: '256x256', type: 'image/png' },
    { src: 'assets/icon-128.png', sizes: '128x128', type: 'image/png' },
    { src: 'assets/icon-64.png', sizes: '64x64', type: 'image/png' }
  ]
};
fs.writeFileSync(path.join(ROOT, 'manifest.json'), JSON.stringify(manifestData, null, 2), 'utf8');

// 1. Read vendor files from backup if not present
const vendorCssPath = path.join(SRC, 'vendor/vendor.css');
if (!fs.existsSync(vendorCssPath) && fs.existsSync(path.join(ROOT, 'MDBrowse_backup.html'))) {
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
}

const pdfDistDir = path.join(ROOT, 'node_modules/pdfjs-dist/build');
if (fs.existsSync(pdfDistDir)) {
  if (fs.existsSync(path.join(pdfDistDir, 'pdf.min.js'))) {
    fs.copyFileSync(path.join(pdfDistDir, 'pdf.min.js'), path.join(SRC, 'vendor/pdf.min.js'));
  }
  if (fs.existsSync(path.join(pdfDistDir, 'pdf.worker.min.js'))) {
    fs.copyFileSync(path.join(pdfDistDir, 'pdf.worker.min.js'), path.join(SRC, 'vendor/pdf.worker.min.js'));
  }
}

// 2. Read and combine CSS files
const cssFiles = [
  'vendor/vendor.css',
  'css/base.css',
  'css/themes.css',
  'css/sidebar.css',
  'css/reader.css',
  'css/ruler.css',
  'css/markdown.css',
  'css/pdfview.css',
  'css/imgview.css'
];
const combinedCss = cssFiles.map(f => fs.existsSync(path.join(SRC, f)) ? fs.readFileSync(path.join(SRC, f), 'utf8') : '').join('\n\n');

// 3. Read vendor JS
const markedJs = fs.existsSync(path.join(SRC, 'vendor/marked.min.js')) ? fs.readFileSync(path.join(SRC, 'vendor/marked.min.js'), 'utf8') : '';
const purifyJs = fs.existsSync(path.join(SRC, 'vendor/purify.min.js')) ? fs.readFileSync(path.join(SRC, 'vendor/purify.min.js'), 'utf8') : '';
const hljsJs = fs.existsSync(path.join(SRC, 'vendor/highlight.min.js')) ? fs.readFileSync(path.join(SRC, 'vendor/highlight.min.js'), 'utf8') : '';
const katexJs = fs.existsSync(path.join(SRC, 'vendor/katex.min.js')) ? fs.readFileSync(path.join(SRC, 'vendor/katex.min.js'), 'utf8') : '';
const katexAutoJs = fs.existsSync(path.join(SRC, 'vendor/katex-auto-render.min.js')) ? fs.readFileSync(path.join(SRC, 'vendor/katex-auto-render.min.js'), 'utf8') : '';
const pdfWorkerJs = fs.existsSync(path.join(SRC, 'vendor/pdf.worker.min.js')) ? fs.readFileSync(path.join(SRC, 'vendor/pdf.worker.min.js'), 'utf8') : '';
const pdfJs = fs.existsSync(path.join(SRC, 'vendor/pdf.min.js')) ? fs.readFileSync(path.join(SRC, 'vendor/pdf.min.js'), 'utf8') : '';

// 4. Read & clean app modules
function cleanModule(code) {
  return code
    .replace(/^import\s+.*?from\s+['"].*?['"];?\r?\n/gm, '')
    .replace(/^export\s+const\s+/gm, 'const ')
    .replace(/^export\s+function\s+/gm, 'function ')
    .replace(/^export\s+async\s+function\s+/gm, 'async function ')
    .replace(/^export\s+let\s+/gm, 'let ')
    .replace(/^export\s+default\s+/gm, '');
}

const jsModules = [
  'js/core/store.js',
  'js/core/state.js',
  'js/tree/tree-node.js',
  'js/core/fs.js',
  'js/tree/tree-exp.js',
  'js/tree/tree-ui.js',
  'js/reader/footnotes.js',
  'js/reader/toc.js',
  'js/reader/markdown.js',
  'js/reader/pdf-engine.js',
  'js/reader/img-engine.js',
  'js/search/search.js',
  'js/ui/resizer.js',
  'js/ui/ruler.js',
  'js/ui/theme.js',
  'js/app.js'
];

const cleanedAppJs = jsModules.map(f => {
  const p = path.join(SRC, f);
  if (!fs.existsSync(p)) return '';
  return cleanModule(fs.readFileSync(p, 'utf8'));
}).join('\n\n');

const combinedAppJs = "'use strict';\n\n" + cleanedAppJs;

const faviconData = fs.existsSync(path.join(ROOT, 'assets/favicon_data_uri.txt'))
  ? fs.readFileSync(path.join(ROOT, 'assets/favicon_data_uri.txt'), 'utf8').trim()
  : '';

const htmlTemplate = `<!DOCTYPE html>
<html lang="th" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>มาร์คมาก — เครื่องมืออ่านไฟล์มาร์คดาวแบบง่าย ๆ</title>
<meta name="application-name" content="มาร์คมาก">
<meta name="apple-mobile-web-app-title" content="มาร์คมาก">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<link rel="manifest" href="manifest.json">
${faviconData ? `<link rel="icon" type="image/png" href="${faviconData}">` : ''}
<link rel="apple-touch-icon" href="assets/icon-markmak.png">
<style>
${combinedCss}
</style>
</head>
<body>
<div id="app">
  <!-- Sidebar -->
  <aside id="sidebar">
    <div class="sb-header">
      <span class="brand" title="มาร์คมาก — เครื่องมืออ่านไฟล์มาร์คดาวแบบง่าย ๆ">
        <img src="${faviconData}" width="22" height="22" alt="มาร์คมาก" style="vertical-align:middle;display:inline-block">
        มาร์คมาก
      </span>
      <button id="btn-add" class="sb-btn-add" title="เพิ่มโฟลเดอร์สำหรับอ่าน" aria-label="เพิ่มโฟลเดอร์">+</button>
    </div>

    <div class="sb-search-box">
      <div class="sb-search-input-wrap">
        <input type="search" id="search-input" class="sb-search-input" placeholder="ค้นหาชื่อไฟล์ / เนื้อหา..." autocomplete="off">
        <button type="button" id="btn-filter-toggle" class="sb-filter-toggle-btn" title="ตัวกรองชนิดไฟล์ (Dropdown)" aria-label="ตัวกรองชนิดไฟล์">
          <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor"><path d="M1.5 1.75a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .53 1.28L9.5 7.06v5.69a.75.75 0 0 1-.32.62l-2 1.33A.75.75 0 0 1 6 14.08V7.06L1.72 2.28a.75.75 0 0 1-.22-.53Z"/></svg>
        </button>
      </div>

      <div class="sb-search-opts">
        <label><input type="checkbox" id="search-content"> ในเนื้อหา</label>
        <span id="search-info" class="sb-search-info" hidden></span>
      </div>

      <!-- Floating Dropdown Checkbox Panel -->
      <div class="type-filter-dropdown" id="type-filter-dropdown" hidden>
        <div class="sb-filter-header">
          <span class="sb-filter-title">
            <svg class="sb-filter-icon" viewBox="0 0 16 16" width="12" height="12" fill="currentColor"><path d="M1.5 1.75a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .53 1.28L9.5 7.06v5.69a.75.75 0 0 1-.32.62l-2 1.33A.75.75 0 0 1 6 14.08V7.06L1.72 2.28a.75.75 0 0 1-.22-.53Z"/></svg>
            ชนิดไฟล์
          </span>
          <div class="sb-filter-actions">
            <button type="button" id="btn-filter-all" class="filter-action-btn" title="เลือกทั้งหมด" aria-label="เลือกทั้งหมด">
              <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor"><path d="M12.78 4.22a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l2.47 2.47 5.97-5.97a.75.75 0 0 1 1.06 0Z"/><path d="M15.78 4.22a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-.5-.5a.75.75 0 1 1 1.06-1.06l.5.5 5.44-5.44a.75.75 0 0 1 1.06 0Z" opacity=".7"/></svg>
            </button>
            <button type="button" id="btn-filter-none" class="filter-action-btn" title="ไม่เลือกทั้งหมด" aria-label="ไม่เลือกทั้งหมด">
              <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor"><path d="M2.5 4A1.5 1.5 0 0 1 4 2.5h8A1.5 1.5 0 0 1 13.5 4v8a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V4Zm1.5 0v8h8V4H4Z"/><path d="M5 8a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 8Z" opacity=".8"/></svg>
            </button>
            <button type="button" id="btn-filter-reset" class="filter-action-btn" title="รีเซ็ต" aria-label="รีเซ็ต">
              <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor"><path fill-rule="evenodd" d="M8 2.5a5.487 5.487 0 0 0-4.131 1.869l-1.2-1.2A.75.75 0 0 0 1.4 3.7v3.55a.75.75 0 0 0 .75.75H5.7a.75.75 0 0 0 .53-1.28l-1.272-1.272A3.987 3.987 0 0 1 8 4a4 4 0 1 1-3.464 6 .75.75 0 0 0-1.3.75A5.5 5.5 0 1 0 8 2.5Z"/></svg>
            </button>
          </div>
        </div>
        <div class="sb-filter-list" id="filter-type-list">
          <label class="filter-chip" title="ไฟล์ Markdown (.md)">
            <input type="checkbox" name="type-filter" value="md" checked>
            <span class="chip-label">.md</span>
          </label>
          <label class="filter-chip" title="ไฟล์ PDF (.pdf)">
            <input type="checkbox" name="type-filter" value="pdf" checked>
            <span class="chip-label">.pdf</span>
          </label>
          <label class="filter-chip" title="ไฟล์ข้อความ (.txt)">
            <input type="checkbox" name="type-filter" value="txt" checked>
            <span class="chip-label">.txt</span>
          </label>
          <label class="filter-chip" title="ไฟล์ HTML (.html)">
            <input type="checkbox" name="type-filter" value="html" checked>
            <span class="chip-label">.html</span>
          </label>
          <label class="filter-chip" title="ไฟล์ XML (.xml)">
            <input type="checkbox" name="type-filter" value="xml" checked>
            <span class="chip-label">.xml</span>
          </label>
          <label class="filter-chip" title="ไฟล์ RDF (.rdf, .ttl)">
            <input type="checkbox" name="type-filter" value="rdf" checked>
            <span class="chip-label">.rdf</span>
          </label>
          <label class="filter-chip" title="ไฟล์รูปภาพ (.png, .jpg, .svg, .webp)">
            <input type="checkbox" name="type-filter" value="img" checked>
            <span class="chip-label">รูปภาพ</span>
          </label>
        </div>
      </div>
    </div>

    <div id="tree" class="sb-tree"></div>

    <div class="sb-footer">
      <div class="sb-metrics-header">
        <span id="stat-title" class="stat-title">สัดส่วนเอกสาร</span>
        <span id="stat-filesize" class="stat-filesize"></span>
      </div>
      <div class="sb-progress-bar" id="sb-progress-bar" title="สัดส่วนชนิดไฟล์"></div>
      <div class="sb-footer-actions">
        <button id="btn-final" class="sb-action-btn" title="กางเฉพาะโฟลเดอร์ final และเส้นทางที่เกี่ยวข้อง">เฉพาะ final</button>
        <button id="btn-collapse-all" class="sb-action-btn" title="พับทุกโฟลเดอร์">พับทั้งหมด</button>
      </div>
    </div>
  </aside>

  <!-- Draggable Resizer Splitter -->
  <div id="sb-resizer" title="ลากเพื่อปรับขนาดไซด์บาร์"></div>

  <!-- Main View Area -->
  <main id="main">
    <div class="menubar">
      <div class="mb-sb-slot">
        <button id="sb-toggle" class="mb-btn" title="ซ่อน/แสดงแถบรายการไฟล์ (Ctrl+B)">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M1 2.75A1.75 1.75 0 0 1 2.75 1h10.5C14.22 1 15 1.78 15 2.75v10.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25V2.75ZM5.5 2H2.75a.75.75 0 0 0-.75.75v10.5c0 .41.34.75.75.75H5.5V2Zm1.5 11h6.25a.75.75 0 0 0 .75-.75V2.75a.75.75 0 0 0-.75-.75H7v11Z"/></svg>
        </button>
      </div>

      <div class="mb-right-tools">
        <!-- Segmented Badge Island Theme Tools (Collapsible) -->
        <div class="theme-tools-wrap" id="theme-tools-wrap">
          <div class="theme-tools-content" id="theme-tools-content">
            <!-- Segment 1: Theme Swatches -->
            <div class="theme-segment theme-swatch-segment" title="เลือกธีมสี">
              <button class="mb-swatch on" data-theme="light" title="สว่าง"></button>
              <button class="mb-swatch" data-theme="dark" title="มืด"></button>
              <button class="mb-swatch" data-theme="cream" title="ถนอมสายตา (Cream)"></button>
              <button class="mb-swatch" data-theme="deepblue" title="น้ำเงินเข้ม (Deep Blue)"></button>
            </div>

            <!-- Segment 2: Font Size Controls -->
            <div class="theme-segment theme-font-segment" title="ปรับขนาดอักษร">
              <button id="fs-dec" class="theme-seg-btn" title="ลดขนาดอักษร (A-)">A-</button>
              <button id="fs-reset" class="theme-seg-btn" title="ขนาดอักษรปกติ (A)">A</button>
              <button id="fs-inc" class="theme-seg-btn" title="เพิ่มขนาดอักษร (A+)">A+</button>
            </div>

            <!-- Segment 3: Text Color -->
            <div class="theme-segment theme-color-segment" title="สีอักษรเนื้อหา">
              <input type="color" id="tx-color" value="#1f2328" title="เปลี่ยนสีอักษรเนื้อหา">
              <button id="tx-reset" class="theme-seg-btn theme-btn-reset" title="ใช้สีอักษรตามธีม">รีเซ็ต</button>
            </div>
          </div>

          <!-- Trigger Button (Aa •) -->
          <button type="button" id="btn-theme-toggle" class="theme-toggle-btn" title="ปรับแต่งธีมและการแสดงผล (คลิกเพื่อขยาย)" aria-label="ปรับแต่งธีม">
            <span class="theme-toggle-text">Aa</span>
            <span class="theme-active-dot" id="theme-active-dot"></span>
          </button>
        </div>

        <!-- Vertical Divider separating Theme tools from ? -->
        <div class="mb-divider"></div>

        <!-- File Info Popover & Button (?) -->
        <div class="doc-info-wrap" id="doc-info-wrap">
          <button type="button" id="btn-doc-info" class="doc-info-btn" title="ข้อมูลไฟล์ปัจจุบัน (คลิกเพื่อดูรายละเอียด)" aria-label="ข้อมูลไฟล์">?</button>
          <div id="doc-info-popover" class="doc-info-popover" hidden>
          <div class="doc-info-header">
            <div class="doc-info-badge" id="doc-info-ext">.md</div>
            <div class="doc-info-title-wrap">
              <div class="doc-info-name" id="doc-info-name">-</div>
              <div class="doc-info-type" id="doc-info-type">เอกสาร</div>
            </div>
          </div>
          <div class="doc-info-section">
            <div class="doc-info-label">ตำแหน่งไฟล์ (Path)</div>
            <div class="doc-info-path-box">
              <span class="doc-info-path" id="doc-info-path">-</span>
              <button type="button" id="btn-copy-path" class="doc-copy-btn" title="คัดลอก Path" aria-label="คัดลอก Path">
                <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
                  <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"/>
                  <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="doc-info-stats">
            <div class="doc-stat-box">
              <div class="doc-stat-label">จำนวนคำ (Words)</div>
              <div class="doc-stat-val text-accent" id="doc-stat-words">-</div>
              <div class="doc-stat-sub" id="doc-stat-chars">-</div>
            </div>
            <div class="doc-stat-box">
              <div class="doc-stat-label">ขนาดไฟล์ (Size)</div>
              <div class="doc-stat-val" id="doc-stat-size">-</div>
              <div class="doc-stat-sub" id="doc-stat-lines">-</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    <div id="reader-viewport">
      <!-- 1. Markdown Viewer with Interactive Ruler -->
      <div id="md-view">
        <div id="toc-panel">
          <div id="toc-header" title="คลิกเพื่อย่อสารบัญ (Alt+T)">
            <span class="toc-title">สารบัญ</span>
            <button id="btn-toc-collapse" class="toc-collapse-btn" title="ย่อสารบัญเป็นแถบแคบ (Alt+T)">
              <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor"><path fill-rule="evenodd" d="M9.78 12.78a.75.75 0 0 1-1.06 0L4.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 1.06L6.06 8l3.72 3.72a.75.75 0 0 1 0 1.06Z"/></svg>
            </button>
          </div>
          <div id="toc-full-view">
            <div id="toc-list"></div>
          </div>
          <div id="toc-mini-rail">
            <button id="btn-toc-expand" class="toc-expand-btn" title="ขยายสารบัญเต็ม (Alt+T)">
              <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor"><path fill-rule="evenodd" d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"/></svg>
            </button>
            <div id="toc-rail-list"></div>
            <div id="toc-rail-logo" class="toc-rail-logo" title="มาร์คมาก — คลิกเพื่อเปิดแถบรายการไฟล์ (Ctrl+B)">
              <img src="${faviconData}" width="22" height="22" alt="มาร์คมาก">
            </div>
          </div>
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

      <!-- 2. Chrome Native PDF Viewer -->
      <div id="pdf-view" hidden>
        <iframe id="pdf-frame" class="pdf-frame" src="about:blank" title="PDF Viewer"></iframe>
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
          <img src="${faviconData}" width="64" height="64" alt="มาร์คมาก" style="margin-bottom:14px;display:inline-block">
          <h1>มาร์คมาก</h1>
          <p>เครื่องมืออ่านไฟล์มาร์คดาวแบบง่าย ๆ (รองรับ Markdown, PDF และรูปภาพ)</p>
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

// 5. Automated Build Verification & Quality Assurance
const vm = require('vm');
console.log('Running automated verification checks...');

// A. Syntax & Script Compilation Check
try {
  new vm.Script(combinedAppJs);
  console.log('  [PASS] JavaScript syntax and module compilation valid');
} catch (syntaxErr) {
  console.error('  [FAIL] JavaScript syntax error detected in app modules:', syntaxErr);
  process.exit(1);
}

// B. DOM Contract Integrity Check
const domIdMatches = fs.readFileSync(path.join(SRC, 'js/app.js'), 'utf8').match(/\['btn-add'[\s\S]*?\]/);
if (domIdMatches) {
  try {
    const requiredIds = eval(domIdMatches[0]);
    const missingIds = requiredIds.filter(id => !htmlTemplate.includes(`id="${id}"`));
    if (missingIds.length > 0) {
      console.warn('  [WARN] Missing DOM IDs in template:', missingIds);
    } else {
      console.log('  [PASS] All (' + requiredIds.length + ') DOM element contracts verified');
    }
  } catch (e) {}
}

// 6. Automated Backup & Output Generation
const targetFile = path.join(ROOT, 'MDBrowse.html');
const backupFile = path.join(ROOT, 'MDBrowse_stable_backup.html');

if (fs.existsSync(targetFile)) {
  fs.copyFileSync(targetFile, backupFile);
  console.log('  [BACKUP] Saved snapshot to MDBrowse_stable_backup.html');
}

fs.writeFileSync(targetFile, htmlTemplate, 'utf8');
console.log('Build successful: MDBrowse.html generated (' + htmlTemplate.length + ' bytes)');

// Update Desktop and Project Shortcuts
try {
  const { execSync } = require('child_process');
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const targetHtml = 'file:///D:/01_APP/Markdown/MDBrowse.html';
  const markmakPng = path.join(ROOT, 'assets/icon-markmak.png');
  const iconPath = path.join(ROOT, 'assets/app.ico');

  const psScript = `
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# 1. Generate app.ico from icon-markmak.png
Add-Type -AssemblyName System.Drawing
$pngPath = '${markmakPng.replace(/\\/g, '\\\\')}'
$icoPath = '${iconPath.replace(/\\/g, '\\\\')}'
if (Test-Path $pngPath) {
    $bmp = [System.Drawing.Bitmap]::FromFile($pngPath)
    $thumb = New-Object System.Drawing.Bitmap $bmp, 256, 256
    $hIcon = $thumb.GetHicon()
    $icon = [System.Drawing.Icon]::FromHandle($hIcon)
    $fs = New-Object System.IO.FileStream($icoPath, [System.IO.FileMode]::Create)
    $icon.Save($fs)
    $fs.Close()
    $bmp.Dispose()
    $thumb.Dispose()
    Write-Host "Generated MarkMak app.ico successfully"
}

# 2. Create and Update Shortcuts
$WshShell = New-Object -ComObject WScript.Shell
$userProfile = [System.Environment]::GetFolderPath('UserProfile')
$desktopPaths = @(
    [System.Environment]::GetFolderPath('Desktop'),
    (Join-Path $userProfile 'Desktop'),
    (Join-Path $userProfile 'OneDrive\\เดสก์ท็อป'),
    (Join-Path $userProfile 'OneDrive\\Desktop'),
    '${ROOT.replace(/\\/g, '\\\\')}'
)

foreach ($dir in $desktopPaths) {
    if (Test-Path $dir) {
        # Create 'มาร์คมาก.lnk'
        $lnk1 = Join-Path $dir 'มาร์คมาก.lnk'
        $sc1 = $WshShell.CreateShortcut($lnk1)
        $sc1.TargetPath = '${chromePath.replace(/\\/g, '\\\\')}'
        $sc1.Arguments = '--app=${targetHtml}'
        $sc1.WorkingDirectory = '${ROOT.replace(/\\/g, '\\\\')}'
        $sc1.IconLocation = '${iconPath.replace(/\\/g, '\\\\')},0'
        $sc1.Description = 'มาร์คมาก — เครื่องมืออ่านไฟล์มาร์คดาวแบบง่าย ๆ'
        $sc1.Save()
        Write-Host "Updated shortcut: $lnk1"

        # Remove legacy 'MDBrowse.lnk' if present on desktop
        if ($dir -ne '${ROOT.replace(/\\/g, '\\\\')}') {
            $legacy = Join-Path $dir 'MDBrowse.lnk'
            if (Test-Path $legacy) {
                Remove-Item -Path $legacy -Force -ErrorAction SilentlyContinue
                Write-Host "Cleaned legacy shortcut: $legacy"
            }
        }
    }
}
`;
  const psFile = path.join(ROOT, '_temp_sc.ps1');
  const bom = Buffer.from([0xEF, 0xBB, 0xBF]);
  fs.writeFileSync(psFile, Buffer.concat([bom, Buffer.from(psScript, 'utf8')]));
  const out = execSync(`powershell -ExecutionPolicy Bypass -File "${psFile}"`).toString();
  console.log(out.trim());
  if (fs.existsSync(psFile)) fs.unlinkSync(psFile);

  // Update MDBrowse.bat as well
  const batContent = `@echo off\r\nstart "" "${chromePath}" --app=${targetHtml}\r\n`;
  fs.writeFileSync(path.join(ROOT, 'MDBrowse.bat'), batContent, 'utf8');
  fs.writeFileSync(path.join(ROOT, 'มาร์คมาก.bat'), batContent, 'utf8');
  console.log('Updated launchers');
} catch (e) {
  console.warn('Shortcut creation warning:', e.message);
}

