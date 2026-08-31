const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const assetsDir = path.join(ROOT, 'assets');

function pngsToIco(pngEntries) {
  const numImages = pngEntries.length;
  const headerSize = 6 + (16 * numImages);
  let currentOffset = headerSize;

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type = 1 (icon)
  header.writeUInt16LE(numImages, 4);

  const dirEntries = [];
  for (const item of pngEntries) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.size >= 256 ? 0 : item.size, 0); // width (0 = 256)
    entry.writeUInt8(item.size >= 256 ? 0 : item.size, 1); // height (0 = 256)
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bit count (32-bit RGBA)
    entry.writeUInt32LE(item.buffer.length, 8); // image byte size
    entry.writeUInt32LE(currentOffset, 12); // offset in file
    dirEntries.push(entry);
    currentOffset += item.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngEntries.map(p => p.buffer)]);
}

function buildIco(prefix, outFilenames) {
  const sizes = [256, 128, 64, 48, 32, 16];
  const entries = [];
  for (const s of sizes) {
    const p = path.join(assetsDir, `${prefix}-${s}.png`);
    if (fs.existsSync(p)) {
      entries.push({ size: s, buffer: fs.readFileSync(p) });
    }
  }
  if (entries.length === 0) {
    console.warn(`No PNG files found for prefix: ${prefix}`);
    return;
  }
  const icoBuffer = pngsToIco(entries);
  for (const fn of outFilenames) {
    const outPath = path.join(assetsDir, fn);
    fs.writeFileSync(outPath, icoBuffer);
    console.log(`Generated ${fn} (${icoBuffer.length} bytes, ${entries.length} resolutions, 32-bit transparent)`);
  }
}

buildIco('icon-app', ['app.ico', 'icon-app.ico', 'app_clean.ico']);
buildIco('icon-browser', ['browser.ico', 'icon-browser.ico', 'browser_clean.ico']);

