// Text Quote Anchor — ค้นหาตำแหน่งข้อความใน DOM ด้วย quote + prefix/suffix
// แนวทางเดียวกับ W3C Web Annotation / Hypothes.is ทนทานต่อการแก้ไขไฟล์เล็กน้อย

export function normalizeText(s) {
  return String(s || '')
    .replace(/\u00A0/g, ' ')
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

// สร้าง anchor descriptor จาก DOM Range
export function createAnchorFromRange(range, container) {
  const root = container || document.getElementById('md-content');
  if (!root || !range) return null;
  const full = normalizeText(root.textContent);
  if (!full) return null;

  const probe = document.createElement('div');
  probe.appendChild(range.cloneContents());
  const quote = normalizeText(probe.textContent);
  if (!quote) return null;

  // หาตำแหน่งของ quote ใน full text ของ root (ค้นหาช่วงที่ prefix/suffix ตรง)
  const pre = normalizeBefore(root, range);
  const post = normalizeAfter(root, range);

  const pos = findQuotePosition(full, quote, pre, post);
  if (pos < 0) {
    // fallback: หา quote แบบตรง ๆ อย่างเดียว
    const p = full.indexOf(quote);
    if (p < 0) return null;
    return {
      quote,
      prefix: full.slice(Math.max(0, p - 32), p),
      suffix: full.slice(p + quote.length, p + quote.length + 32)
    };
  }

  return {
    quote,
    prefix: full.slice(Math.max(0, pos - 32), pos),
    suffix: full.slice(pos + quote.length, pos + quote.length + 32)
  };
}

function normalizeBefore(root, range) {
  try {
    const r = document.createRange();
    r.setStart(root, 0);
    r.setEnd(range.startContainer, range.startOffset);
    return normalizeText(r.toString());
  } catch (e) { return ''; }
}

function normalizeAfter(root, range) {
  try {
    const r = document.createRange();
    r.setStart(range.endContainer, range.endOffset);
    r.setEnd(root, root.childNodes.length);
    return normalizeText(r.toString());
  } catch (e) { return ''; }
}

function findQuotePosition(full, quote, pre, post) {
  // หา quote ทุกตำแหน่ง แล้วเลือกตำแหน่งที่ prefix/suffix ตรงกับบริบทจริงมากที่สุด
  let best = -1, bestScore = -1;
  let idx = full.indexOf(quote);
  while (idx >= 0) {
    let score = 0;
    const preLen = Math.min(pre.length, idx);
    if (preLen && pre.slice(pre.length - preLen) === full.slice(idx - preLen, idx)) score++;
    const postStart = idx + quote.length;
    const postLen = Math.min(post.length, full.length - postStart);
    if (postLen && post.slice(0, postLen) === full.slice(postStart, postStart + postLen)) score++;
    if (score > bestScore) { bestScore = score; best = idx; }
    idx = full.indexOf(quote, idx + 1);
  }
  return best;
}

// คืน DOM Range จาก anchor descriptor (ค้นใน text nodes)
export function resolveAnchor(root, anchor) {
  if (!root || !anchor || !anchor.quote) return null;
  const full = normalizeText(root.textContent);
  if (!full) return null;

  const pos = findQuotePosition(full, anchor.quote, anchor.prefix || '', anchor.suffix || '');
  const candidate = pos >= 0 ? pos : full.indexOf(anchor.quote);
  if (candidate < 0) return null;

  return mapPlainTextOffsetToRange(root, full, candidate, candidate + anchor.quote.length);
}

// แปลง offset ใน plain text (ที่ normalize แล้ว) → DOM Range จริง
function mapPlainTextOffsetToRange(root, fullText, start, end) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: n => (n.nodeValue && n.nodeValue.trim()) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
  });

  const nodes = [];
  let n;
  let rawText = '';
  while ((n = walker.nextNode())) {
    nodes.push(n);
    rawText += n.nodeValue;
  }

  // เทียบ raw text กับ normalized full text เพื่อหาช่วง raw ที่สอดคล้องกับ normalized offset
  // normalize แบบเดียวกับ normalizeText แต่ทำต่อ node เพื่อ map offset กลับ
  const map = []; // normalizedIndex -> {node, rawIndex}
  let normOut = '';
  for (const node of nodes) {
    const raw = node.nodeValue;
    for (let i = 0; i < raw.length; i++) {
      const ch = raw[i];
      if (ch === '\u00A0') {
        normOut += ' ';
        map.push({ node, rawIndex: i });
      } else if (/[\r\n\t]/.test(ch)) {
        normOut += ' ';
        map.push({ node, rawIndex: i });
      } else {
        normOut += ch;
        map.push({ node, rawIndex: i });
      }
      // ยุบช่องว่างซ้ำ: เมื่อ normOut ลงท้ายด้วยช่องว่างซ้อน ให้ drop ตัวเกิน
    }
    // separator ระหว่าง block elements — ประมาณด้วยช่องว่างเดียว (rawText รวมกันแล้วไม่มี จึงใช้ raw ต่อกัน)
  }

  // ยุบช่องว่างซ้ำ + trim แบบ normalizeText แต่เก็บ map ไปด้วย
  const collapsed = [];
  let norm2 = '';
  let lastWasSpace = true; // เริ่มเท่ากับ trim หัว
  for (let i = 0; i < normOut.length; i++) {
    const ch = normOut[i];
    if (ch === ' ') {
      if (lastWasSpace) continue;
      lastWasSpace = true;
    } else {
      lastWasSpace = false;
    }
    norm2 += ch;
    collapsed.push(map[i]);
  }
  // trim ท้าย
  while (norm2.endsWith(' ')) {
    norm2 = norm2.slice(0, -1);
    collapsed.pop();
  }

  if (start >= collapsed.length) return null;
  const endClamped = Math.min(end, collapsed.length);
  if (endClamped <= start) return null;

  const s = collapsed[start];
  const e = collapsed[endClamped - 1];
  let eNode = e.node, eOff = e.rawIndex + 1;
  // ถ้า end offset เลยความยาว node → เลื่อนไป node ถัดไป (สำหรับ range boundary แบบ exclusive ก็ไม่จำเป็นต้องขยับ)
  if (eOff > e.node.nodeValue.length) { eOff = e.node.nodeValue.length; }

  const range = document.createRange();
  try {
    range.setStart(s.node, s.rawIndex);
    range.setEnd(eNode, eOff);
    return range;
  } catch (err) {
    return null;
  }
}
