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
        <img src="${faviconData}" width="22" height="22" alt="มาร์คมาก" style="border-radius:5px;vertical-align:middle;display:inline-block;box-shadow:0 1px 3px rgba(0,0,0,0.12)">
        มาร์คมาก
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
          <img src="${faviconData}" width="64" height="64" alt="มาร์คมาก" style="border-radius:14px;margin-bottom:14px;box-shadow:0 3px 10px rgba(0,0,0,0.12);display:inline-block">
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

fs.writeFileSync(path.join(ROOT, 'MDBrowse.html'), htmlTemplate, 'utf8');
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

        # Also update 'MDBrowse.lnk' if present
        $lnk2 = Join-Path $dir 'MDBrowse.lnk'
        $sc2 = $WshShell.CreateShortcut($lnk2)
        $sc2.TargetPath = '${chromePath.replace(/\\/g, '\\\\')}'
        $sc2.Arguments = '--app=${targetHtml}'
        $sc2.WorkingDirectory = '${ROOT.replace(/\\/g, '\\\\')}'
        $sc2.IconLocation = '${iconPath.replace(/\\/g, '\\\\')},0'
        $sc2.Description = 'มาร์คมาก — เครื่องมืออ่านไฟล์มาร์คดาวแบบง่าย ๆ'
        $sc2.Save()
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

