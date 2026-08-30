import { esc } from '../tree/tree-node.js';

export function preprocessFootnotes(text) {
  if (!text) return '';
  // 1. Normalize line endings (CRLF / CR -> LF) to support Windows line breaks
  text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  const defs = new Map();
  const lines = text.split('\n');
  const bodyLines = [];
  let inDef = false, curId = null;
  let inCode = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Track fenced code blocks (``` or ~~~) so code examples aren't mistaken for footnotes
    if (line.trim().startsWith('```') || line.trim().startsWith('~~~')) {
      inCode = !inCode;
      inDef = false;
      bodyLines.push(line);
      continue;
    }

    if (inCode) {
      bodyLines.push(line);
      continue;
    }

    // Pattern 1: [^id]: text or [id]: text or 1. [id]: text or - [id]: text
    const mColon = line.match(/^[ \t]*(?:[-*+]|\d+\.)?[ \t]*\[\^?([a-zA-Z0-9_\u0E00-\u0E7F.-]+)\]:\s*(.*)$/);
    if (mColon) {
      curId = mColon[1];
      defs.set(curId, [mColon[2]]);
      inDef = true;
      continue;
    }

    // Pattern 2: [id] text or [^id] text or 1. [id] text or - [id] text
    const mSpace = line.match(/^[ \t]*(?:[-*+]|\d+\.)?[ \t]*\[\^?([a-zA-Z0-9_\u0E00-\u0E7F.-]+)\][ \t]+(\S.*)$/);
    if (mSpace && !line.match(/^[ \t]*\[[ xX]\]/)) {
      curId = mSpace[1];
      defs.set(curId, [mSpace[2]]);
      inDef = true;
      continue;
    }

    // Multiline continuation: indented lines or blank lines within footnote def or unindented text
    if (inDef) {
      if (line.startsWith('    ') || line.startsWith('\t')) {
        if (curId && defs.has(curId)) {
          defs.get(curId).push(line.replace(/^ {1,4}|^\t/, ''));
          continue;
        }
      } else if (line.trim() === '') {
        // Look ahead to check if next non-empty line starts a new footnote definition or header
        let nextIsDefOrHeading = false;
        for (let j = i + 1; j < lines.length; j++) {
          const nextTrim = lines[j].trim();
          if (nextTrim === '') continue;
          if (/^(?:[-*+]|\d+\.)?[ \t]*\[\^?[a-zA-Z0-9_\u0E00-\u0E7F.-]+\](?::|[ \t]+\S)/.test(lines[j]) || /^#{1,6}\s/.test(lines[j]) || /^---/.test(lines[j])) {
            nextIsDefOrHeading = true;
          }
          break;
        }
        if (nextIsDefOrHeading) {
          inDef = false;
          bodyLines.push(line);
          continue;
        }
        if (curId && defs.has(curId)) {
          defs.get(curId).push('');
          continue;
        }
      } else if (!line.match(/^[#*-]|^\[/)) {
        if (curId && defs.has(curId)) {
          defs.get(curId).push(line);
          continue;
        }
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

  // Match in-body references: single [1], [^1], consecutive [1][2], or comma-separated lists [1, 2], [1, 2, 3]
  // Ignore images (![alt](url)) or inline markdown links ([text](url))
  const processedBody = bodyText.replace(/(!)?\[(\^?[a-zA-Z0-9_\u0E00-\u0E7F.-]+(?:[ \t]*,[ \t]*\^?[a-zA-Z0-9_\u0E00-\u0E7F.-]+)*)\](?!\()/g, (match, isImg, rawContent) => {
    if (isImg) return match;
    
    const parts = rawContent.split(',').map(s => s.trim());
    const validParts = [];
    
    for (const part of parts) {
      const cleanId = part.startsWith('^') ? part.slice(1) : part;
      if (defs.has(cleanId)) {
        validParts.push(cleanId);
      }
    }

    // Only convert if all elements in the bracket are valid footnote definitions
    if (validParts.length === 0 || validParts.length !== parts.length) return match;

    return validParts.map(cleanId => {
      if (!seenDefs.has(cleanId)) {
        seenDefs.add(cleanId);
        order.push(cleanId);
      }
      const count = (refCounts.get(cleanId) || 0) + 1;
      refCounts.set(cleanId, count);
      const refAnchor = count === 1 ? `fnref-${cleanId}` : `fnref-${cleanId}-${count}`;
      return `<sup id="${esc(refAnchor)}" class="fn-ref"><a href="#fn-${esc(cleanId)}" data-fn="${esc(cleanId)}" title="ไปยังเชิงอรรถ [${esc(cleanId)}]">[${esc(cleanId)}]</a></sup>`;
    }).join('');
  });

  // Append any defined footnotes that were not referenced in body to the end of order
  for (const id of defs.keys()) {
    if (!seenDefs.has(id)) order.push(id);
  }

  const hasFnHeading = /#{1,6}\s*(?:เชิงอรรถ|Footnotes|Notes|อ้างอิง|เอกสารอ้างอิง|บรรณานุกรม|References)/i.test(bodyText);

  let fnSection = '\n\n<section class="footnotes">\n';
  if (!hasFnHeading) {
    fnSection += '<div class="footnotes-title">เชิงอรรถ</div>\n';
  }
  fnSection += '<ol class="footnotes-list">\n';

  for (const id of order) {
    const rawDef = defs.get(id).join(' ').trim();
    const parsedDef = window.marked ? window.marked.parseInline(rawDef) : rawDef;
    const refCount = refCounts.get(id) || 0;
    
    let backLinks = '';
    let backArrow = '';
    if (refCount === 0) {
      backLinks = `<span class="fn-back-static">[${esc(id)}]</span>`;
    } else if (refCount === 1) {
      backLinks = `<a class="fn-back" href="#fnref-${esc(id)}" data-fnref="fnref-${esc(id)}" title="กลับไปที่ตำแหน่งในเนื้อหา">[${esc(id)}]</a>`;
      backArrow = `<a class="fn-back-arrow" href="#fnref-${esc(id)}" data-fnref="fnref-${esc(id)}" title="กลับไปที่ข้อความ">↩</a>`;
    } else {
      backLinks = `<a class="fn-back" href="#fnref-${esc(id)}" data-fnref="fnref-${esc(id)}" title="กลับไปที่ตำแหน่งในเนื้อหา">[${esc(id)}]</a>`;
      let multiLinks = '';
      for (let c = 1; c <= refCount; c++) {
        const anchor = c === 1 ? `fnref-${id}` : `fnref-${id}-${c}`;
        multiLinks += `<a class="fn-back-multi" href="#${esc(anchor)}" data-fnref="${esc(anchor)}" title="กลับไปที่ตำแหน่ง ${c}">↩<sup>${c}</sup></a> `;
      }
      backArrow = `<span class="fn-back-multi-wrap">${multiLinks.trim()}</span>`;
    }
    
    fnSection += `<li id="fn-${esc(id)}" class="fn-item">${backLinks} <span class="fn-text">${parsedDef}</span> ${backArrow}</li>\n`;
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

  container.querySelectorAll('.footnotes a.fn-back, .footnotes a.fn-back-arrow, .footnotes a.fn-back-multi').forEach(a => {
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
