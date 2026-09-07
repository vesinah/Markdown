const fs = require('fs');
const path = require('path');

// Configuration
const DEFAULT_SOURCE = path.resolve('D:/01_APP/Research/output');
const SOURCE_DIR = process.env.RESEARCH_SOURCE || (fs.existsSync(DEFAULT_SOURCE) ? DEFAULT_SOURCE : path.resolve(__dirname, '../../Research/output'));
const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const CATALOG_PATH = path.join(DOCS_DIR, 'catalog.json');
const ROOT_CATALOG_PATH = path.join(ROOT_DIR, 'catalog.json');

// File filters
const ALLOWED_EXTENSIONS = new Set([
  // Documents & Text
  '.md', '.markdown', '.mdown',
  '.txt', '.csv', '.tsv',
  '.html', '.htm',
  '.xml', '.xsl',
  '.json', '.jsonld',
  '.ttl', '.rdf',
  '.yml', '.yaml',
  // Media & Images
  '.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.bmp', '.ico'
]);

const IGNORED_NAMES = new Set([
  '.git', '.gitignore', '.gitkeep', '.DS_Store', 'Thumbs.db', 'node_modules', '.vscode', '.idea'
]);

const IGNORED_EXTENSIONS = new Set([
  '.pdf', '.gz', '.zip', '.tar', '.7z', '.rar',
  '.backup', '.invalid', '.placeholder', '.tmp', '.temp', '.bak'
]);

console.log('====================================================');
console.log('🚀 MDBrowse Research Sync Engine');
console.log(`📁 Source: ${SOURCE_DIR}`);
console.log(`📁 Target: ${DOCS_DIR}`);
console.log('====================================================');

if (!fs.existsSync(SOURCE_DIR)) {
  console.error(`❌ Error: Source directory not found: ${SOURCE_DIR}`);
  process.exit(1);
}

if (!fs.existsSync(DOCS_DIR)) {
  fs.mkdirSync(DOCS_DIR, { recursive: true });
}

let scannedCount = 0;
let copiedCount = 0;
let unchangedCount = 0;
let skippedCount = 0;
let totalBytes = 0;

const validFiles = [];
const sourceRelPaths = new Set();

function walkAndSync(currentSrc, relPrefix = '') {
  let entries;
  try {
    entries = fs.readdirSync(currentSrc, { withFileTypes: true });
  } catch (err) {
    console.warn(`⚠️ Warning: Failed to read directory ${currentSrc}:`, err.message);
    return;
  }

  for (const entry of entries) {
    if (IGNORED_NAMES.has(entry.name) || entry.name.startsWith('.')) {
      continue;
    }

    const srcPath = path.join(currentSrc, entry.name);
    const relPath = relPrefix ? `${relPrefix}/${entry.name}` : entry.name;
    const destPath = path.join(DOCS_DIR, relPath);

    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      walkAndSync(srcPath, relPath);
    } else if (entry.isFile()) {
      scannedCount++;
      const ext = path.extname(entry.name).toLowerCase();

      if (IGNORED_EXTENSIONS.has(ext) || !ALLOWED_EXTENSIONS.has(ext)) {
        skippedCount++;
        continue;
      }

      let srcStat;
      try {
        srcStat = fs.statSync(srcPath);
      } catch (e) {
        continue;
      }

      // Cloudflare Pages hard limit: 25 MiB per single static asset
      const MAX_FILE_SIZE_BYTES = 24 * 1024 * 1024;
      if (srcStat.size > MAX_FILE_SIZE_BYTES) {
        console.log(`  [SKIP >24MB] ${relPath} (${(srcStat.size / (1024 * 1024)).toFixed(1)} MB exceeds Cloudflare Pages 25MB limit)`);
        skippedCount++;
        continue;
      }

      sourceRelPaths.add(relPath);
      totalBytes += srcStat.size;

      // Incremental copy check
      let needCopy = true;
      if (fs.existsSync(destPath)) {
        try {
          const destStat = fs.statSync(destPath);
          if (destStat.size === srcStat.size && Math.abs(destStat.mtimeMs - srcStat.mtimeMs) < 1000) {
            needCopy = false;
          }
        } catch (e) {
          needCopy = true;
        }
      }

      if (needCopy) {
        const destParent = path.dirname(destPath);
        if (!fs.existsSync(destParent)) {
          fs.mkdirSync(destParent, { recursive: true });
        }
        fs.copyFileSync(srcPath, destPath);
        fs.utimesSync(destPath, srcStat.atime, srcStat.mtime);
        copiedCount++;
      } else {
        unchangedCount++;
      }

      validFiles.push({
        path: relPath.replace(/\\/g, '/'),
        size: srcStat.size,
        mtime: Math.floor(srcStat.mtimeMs)
      });
    }
  }
}

console.log('🔄 Scanning and syncing files...');
const startTime = Date.now();
walkAndSync(SOURCE_DIR);

// Clean up deleted files in destination
let removedCount = 0;
function cleanOrphans(currentDest, relPrefix = '') {
  let entries;
  try {
    entries = fs.readdirSync(currentDest, { withFileTypes: true });
  } catch (err) {
    return;
  }

  for (const entry of entries) {
    if (entry.name === 'catalog.json' || entry.name === '.gitkeep') continue;
    const destPath = path.join(currentDest, entry.name);
    const relPath = relPrefix ? `${relPrefix}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      cleanOrphans(destPath, relPath);
      try {
        const remaining = fs.readdirSync(destPath);
        if (remaining.length === 0) {
          fs.rmdirSync(destPath);
        }
      } catch (e) {}
    } else if (entry.isFile()) {
      if (!sourceRelPaths.has(relPath)) {
        try {
          fs.unlinkSync(destPath);
          removedCount++;
        } catch (e) {}
      }
    }
  }
}

cleanOrphans(DOCS_DIR);

// Sort valid files by path alphabetically
validFiles.sort((a, b) => a.path.localeCompare(b.path, 'th', { numeric: true }));

// Generate catalog.json
const catalog = {
  name: 'คลังงานวิจัย (Research Archive)',
  baseUrl: 'docs/',
  updatedAt: new Date().toISOString(),
  totalFiles: validFiles.length,
  totalBytes: totalBytes,
  files: validFiles
};

const catalogJson = JSON.stringify(catalog, null, 2);
fs.writeFileSync(CATALOG_PATH, catalogJson, 'utf8');
fs.writeFileSync(ROOT_CATALOG_PATH, catalogJson, 'utf8');

const duration = ((Date.now() - startTime) / 1000).toFixed(2);

console.log('====================================================');
console.log('✅ Sync Completed Successfully!');
console.log(`⏱️ Duration: ${duration} seconds`);
console.log(`📊 Total Scanned: ${scannedCount.toLocaleString()} files`);
console.log(`📥 Copied/Updated: ${copiedCount.toLocaleString()} files`);
console.log(`⚡ Unchanged: ${unchangedCount.toLocaleString()} files`);
console.log(`🗑️ Removed: ${removedCount.toLocaleString()} files`);
console.log(`⏭️ Skipped (e.g. PDF/Temp): ${skippedCount.toLocaleString()} files`);
console.log(`📚 Catalog Total: ${validFiles.length.toLocaleString()} files (${(totalBytes / (1024 * 1024)).toFixed(2)} MB)`);
console.log(`📄 Catalog generated: ${CATALOG_PATH}`);
console.log('====================================================');
