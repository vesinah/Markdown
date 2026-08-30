import { esc } from '../tree/tree-node.js';

export function preprocessFootnotes(text) {
  const defs = new Map();
  const lines = text.split('\n');
  const bodyLines = [];
  let inDef = false, curId = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const mColon = line.match(/^[ \t]*(?:[-*]|\d+\.)?[ \t]*\[\^?([a-zA-Z0-9_\u0E00-\u0E7F.-]+)\]:\s*(.*)$/);
    if (mColon) {
      curId = mColon[1];
      defs.set(curId, [mColon[2]]);
      inDef = true;
      continue;
    }

    const mSpace = line.match(/^[ \t]*(?:[-*]|\d+\.)?[ \t]*\[([a-zA-Z0-9_\u0E00-\u0E7F.-]+)\][ \t]+(\S.*)$/);
    if (mSpace && !line.match(/^[ \t]*\[[ xX]\]/)) {
      curId = mSpace[1];
      defs.set(curId, [mSpace[2]]);
      inDef = true;
      continue;
    }

    if (inDef && (line.startsWith('    ') || line.startsWith('\t') || (line.trim() && !line.match(/^[#*-]|^\[/)))) {
      if (curId && defs.has(curId)) {
        defs.get(curId).push(line.replace(/^ {1,4}|^\t/, ''));
        continue;
      }
    }

    inDef = false;
    bodyLines.push(line);
  }

  if (!defs.size) return text;

  const refCounts = new Map();
  const order = [];
  const seenDefs = new Set();
  const bodyText = bodyLines.join('\n');

  const processedBody = bodyText.replace(/(!)?\[(\^?[a-zA-Z0-9_\u0E00-\u0E7F.-]+)\](?!\(|\/|\[|:)/g, (match, isImg, rawId) => {
    if (isImg) return match;
    const cleanId = rawId.startsWith('^') ? rawId.slice(1) : rawId;
    if (!defs.has(cleanId)) return match;

    if (!seenDefs.has(cleanId)) {
      seenDefs.add(cleanId);
      order.push(cleanId);
    }

    const count = (refCounts.get(cleanId) || 0) + 1;
    refCounts.set(cleanId, count);
    const refAnchor = count === 1 ? `fnref-${cleanId}` : `fnref-${cleanId}-${count}`;

    return `<sup id="${esc(refAnchor)}" class="fn-ref"><a href="#fn-${esc(cleanId)}" data-fn="${esc(cleanId)}" title="ไปยังเชิงอรรถ [${esc(cleanId)}]">[${esc(cleanId)}]</a></sup>`;
  });

  for (const id of defs.keys()) {
    if (!seenDefs.has(id)) order.push(id);
  }

  const hasFnHeading = /#{1,6}\s*(เชิงอรรถ|Footnotes|Notes|อ้างอิง)/i.test(bodyText);

  let fnSection = '\n\n<section class="footnotes">\n';
  if (!hasFnHeading) {
    fnSection += '<div class="footnotes-title">เชิงอรรถ</div>\n';
  }
  fnSection += '<ol class="footnotes-list">\n';

  for (const id of order) {
    const rawDef = defs.get(id).join('\n');
    const parsedDef = window.marked ? window.marked.parseInline(rawDef) : rawDef;
    fnSection += `<li id="fn-${esc(id)}" class="fn-item"><a class="fn-back" href="#fnref-${esc(id)}" data-fnref="fnref-${esc(id)}" title="กลับไปที่ตำแหน่งในเนื้อหา">[${esc(id)}]</a> <span class="fn-text">${parsedDef}</span> <a class="fn-back-arrow" href="#fnref-${esc(id)}" data-fnref="fnref-${esc(id)}" title="กลับไปที่ข้อความ">↩</a></li>\n`;
  }
  fnSection += '</ol>\n</section>\n';

  return processedBody + fnSection;
}

export function enhanceFootnotes(container) {
  container.querySelectorAll('.fn-ref a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const targetId = decodeURIComponent(a.getAttribute('href').slice(1));
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.classList.remove('fn-flash');
        void target.offsetWidth;
        target.classList.add('fn-flash');
      }
    });
  });

  container.querySelectorAll('.footnotes a.fn-back, .footnotes a.fn-back-arrow').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const targetId = a.getAttribute('data-fnref') || decodeURIComponent(a.getAttribute('href').slice(1));
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.classList.remove('fn-flash');
        void target.offsetWidth;
        target.classList.add('fn-flash');
      }
    });
  });
}
