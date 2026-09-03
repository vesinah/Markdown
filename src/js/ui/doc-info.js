import { State } from '../core/state.js';
import { isMd, isPdf, isImg, isTxt, isHtml, isXml, isRdf, isCode, fmtBytes } from '../tree/tree-node.js';

let _docInfoD = null;

export function countTextStats(text) {
  if (!text) return { words: 0, chars: 0, lines: 0 };
  let words = 0;
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    try {
      const segmenter = new Intl.Segmenter('th', { granularity: 'word' });
      for (const seg of segmenter.segment(text)) {
        if (seg.isWordLike) words++;
      }
    } catch (e) {
      words = text.trim().split(/\s+/).filter(Boolean).length;
    }
  } else {
    words = text.trim().split(/\s+/).filter(Boolean).length;
  }
  const chars = text.length;
  const lines = text.split(/\r\n|\r|\n/).length;
  return { words, chars, lines };
}

export const DocInfoController = {
  init(domMap) {
    _docInfoD = domMap;
    if (!_docInfoD || !_docInfoD.btnDocInfo) return;

    _docInfoD.btnDocInfo.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });

    if (_docInfoD.docInfoPopover) {
      _docInfoD.docInfoPopover.addEventListener('click', (e) => e.stopPropagation());
    }

    if (_docInfoD.btnCopyPath) {
      _docInfoD.btnCopyPath.addEventListener('click', async (e) => {
        e.stopPropagation();
        if (State.current && State.current.path) {
          try {
            await navigator.clipboard.writeText(State.current.path);
            const origTitle = _docInfoD.btnCopyPath.title;
            _docInfoD.btnCopyPath.title = 'คัดลอก Path แล้ว!';
            _docInfoD.btnCopyPath.classList.add('copied');
            setTimeout(() => {
              _docInfoD.btnCopyPath.title = origTitle;
              _docInfoD.btnCopyPath.classList.remove('copied');
            }, 1800);
          } catch (err) {
            console.warn('[doc-info] Clipboard copy failed:', err && err.message);
          }
        }
      });
    }

    document.addEventListener('click', () => {
      if (_docInfoD.docInfoPopover && !_docInfoD.docInfoPopover.hidden) {
        _docInfoD.docInfoPopover.hidden = true;
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && _docInfoD.docInfoPopover && !_docInfoD.docInfoPopover.hidden) {
        _docInfoD.docInfoPopover.hidden = true;
      }
    });

    State.on('file:open', (data) => {
      if (data && data.node) {
        this.update(data.node, data.file, data.fileText);
      }
    });

    State.on('file:close', () => {
      this.update(null, null, '');
    });
  },

  toggle(force) {
    if (!_docInfoD || !_docInfoD.docInfoPopover) return;
    const isHidden = _docInfoD.docInfoPopover.hidden;
    const show = (typeof force === 'boolean') ? force : isHidden;
    _docInfoD.docInfoPopover.hidden = !show;
  },

  update(node, file, text) {
    if (!_docInfoD || !_docInfoD.btnDocInfo) return;
    _docInfoD.btnDocInfo.hidden = false;
    if (!node) {
      if (_docInfoD.docInfoExt) _docInfoD.docInfoExt.textContent = '-';
      if (_docInfoD.docInfoName) _docInfoD.docInfoName.textContent = 'ยังไม่ได้เปิดเอกสาร';
      if (_docInfoD.docInfoType) _docInfoD.docInfoType.textContent = 'มาร์คมาก';
      if (_docInfoD.docInfoPath) _docInfoD.docInfoPath.textContent = 'กรุณาเลือกไฟล์เอกสารจากรายการด้านซ้าย';
      if (_docInfoD.docStatWords) _docInfoD.docStatWords.textContent = '-';
      if (_docInfoD.docStatChars) _docInfoD.docStatChars.textContent = '-';
      if (_docInfoD.docStatLines) _docInfoD.docStatLines.textContent = '-';
      if (_docInfoD.docStatSize) _docInfoD.docStatSize.textContent = '-';
      return;
    }

    const ext = node.name.includes('.') ? ('.' + node.name.split('.').pop().toLowerCase()) : '';
    if (_docInfoD.docInfoExt) _docInfoD.docInfoExt.textContent = ext || '.file';
    if (_docInfoD.docInfoName) {
      _docInfoD.docInfoName.textContent = node.name;
      _docInfoD.docInfoName.title = node.name;
    }
    if (_docInfoD.docInfoPath) {
      _docInfoD.docInfoPath.textContent = node.path;
      _docInfoD.docInfoPath.title = node.path;
    }

    let typeLabel = 'เอกสาร';
    if (isMd(node.name)) typeLabel = 'Markdown Document';
    else if (isPdf(node.name)) typeLabel = 'PDF Document';
    else if (isImg(node.name)) typeLabel = `รูปภาพ (${ext.replace('.', '').toUpperCase()})`;
    else if (isTxt(node.name)) typeLabel = 'ข้อความ Text';
    else if (isHtml(node.name)) typeLabel = 'HTML Document';
    else if (isXml(node.name)) typeLabel = 'XML Document';
    else if (isRdf(node.name)) typeLabel = 'RDF / Turtle';
    else if (isCode(node.name)) typeLabel = 'Source Code';
    if (_docInfoD.docInfoType) _docInfoD.docInfoType.textContent = typeLabel;

    if (_docInfoD.docStatSize) _docInfoD.docStatSize.textContent = fmtBytes(file ? file.size : 0);

    if (isMd(node.name) || isTxt(node.name) || isHtml(node.name) || isXml(node.name) || isRdf(node.name) || isCode(node.name)) {
      const stats = countTextStats(text);
      if (_docInfoD.docStatWords) _docInfoD.docStatWords.textContent = stats.words.toLocaleString('th-TH') + ' คำ';
      if (_docInfoD.docStatChars) _docInfoD.docStatChars.textContent = '~' + stats.chars.toLocaleString('th-TH') + ' ตัวอักษร';
      if (_docInfoD.docStatLines) _docInfoD.docStatLines.textContent = stats.lines.toLocaleString('th-TH') + ' บรรทัด';
    } else if (isPdf(node.name)) {
      if (_docInfoD.docStatWords) _docInfoD.docStatWords.textContent = 'เอกสาร PDF';
      if (_docInfoD.docStatChars) _docInfoD.docStatChars.textContent = 'PDF File';
      if (_docInfoD.docStatLines) _docInfoD.docStatLines.textContent = '-';
    } else if (isImg(node.name)) {
      if (_docInfoD.docStatWords) _docInfoD.docStatWords.textContent = 'ไฟล์รูปภาพ';
      if (_docInfoD.docStatChars) _docInfoD.docStatChars.textContent = 'Image File';
      if (_docInfoD.docStatLines) _docInfoD.docStatLines.textContent = '-';
    } else {
      if (_docInfoD.docStatWords) _docInfoD.docStatWords.textContent = '-';
      if (_docInfoD.docStatChars) _docInfoD.docStatChars.textContent = '-';
      if (_docInfoD.docStatLines) _docInfoD.docStatLines.textContent = '-';
    }
  }
};
