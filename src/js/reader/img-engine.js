/**
 * @fileoverview Advanced Image & SVG Vector Engine for MDBrowse
 * Supports Vector SVG (inline rendering, sanitization, auto-namespace, code viewer)
 * and High-Resolution Raster Formats (JPG, JPEG, PNG, WebP, GIF, BMP, ICO, AVIF).
 * Features: Smooth Zoom (In/Out/Fit/100%), Rotate 90°, Pan & Drag, Copy, and SVG Source toggle.
 */

import { State } from '../core/state.js';
import { fmtBytes, mimeByExt } from '../tree/tree-node.js';

/**
 * Prepares and sanitizes SVG markup for safe and responsive rendering.
 * Injects missing xmlns namespace and calculates dimensions from viewBox if available.
 */
export function prepareSvg(rawText) {
  let text = (rawText || '').trim();

  // 1. Ensure root <svg> has standard XML namespace
  if (!/xmlns\s*=\s*["']http:\/\/www\.w3\.org\/2000\/svg["']/i.test(text)) {
    text = text.replace(/<svg\b([^>]*)>/i, '<svg xmlns="http://www.w3.org/2000/svg" $1>');
  }

  // 2. Sanitize using DOMPurify if available in global scope
  if (typeof window !== 'undefined' && window.DOMPurify && typeof window.DOMPurify.sanitize === 'function') {
    text = window.DOMPurify.sanitize(text, {
      USE_PROFILES: { svg: true, svgFilters: true },
      ADD_TAGS: ['use'],
      ADD_ATTR: ['target']
    });
  }

  // 3. Extract dimensions and viewBox
  let width = null;
  let height = null;
  let viewBox = null;

  if (typeof DOMParser !== 'undefined') {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'image/svg+xml');
      const svgEl = doc.querySelector('svg');
      if (svgEl) {
        viewBox = svgEl.getAttribute('viewBox');
        const wAttr = svgEl.getAttribute('width');
        const hAttr = svgEl.getAttribute('height');

        if (viewBox) {
          const parts = viewBox.trim().split(/[\s,]+/).map(Number);
          if (parts.length === 4 && parts[2] > 0 && parts[3] > 0) {
            width = Math.round(parts[2]);
            height = Math.round(parts[3]);
          }
        } else if (wAttr && hAttr && !wAttr.includes('%') && !hAttr.includes('%')) {
          const pw = parseFloat(wAttr);
          const ph = parseFloat(hAttr);
          if (pw > 0 && ph > 0) {
            width = Math.round(pw);
            height = Math.round(ph);
            svgEl.setAttribute('viewBox', `0 0 ${width} ${height}`);
            text = svgEl.outerHTML;
          }
        }
      }
    } catch (e) {
      console.warn('[img-engine] SVG parse warning:', e);
    }
  }

  return { cleanSvg: text, width, height, viewBox };
}

export const ImageViewer = {
  frame: null,
  metaBadge: null,
  container: null,
  canvasWrap: null,
  svgContainer: null,
  codeContainer: null,
  codeBlock: null,
  toolbar: null,
  zoomLabel: null,
  modeToggleBtn: null,
  modeToggleLabel: null,
  copyBtn: null,
  zoomInBtn: null,
  zoomOutBtn: null,
  zoomFitBtn: null,
  zoom100Btn: null,
  rotateBtn: null,

  // Transform state
  scale: 1,
  fitScale: 1,
  rotation: 0,
  translateX: 0,
  translateY: 0,
  isDragging: false,
  dragStartX: 0,
  dragStartY: 0,

  // Content state
  isSvg: false,
  viewMode: 'vector', // 'vector' | 'code'
  rawSvgText: '',
  cleanSvgText: '',
  svgDimensions: null,
  naturalWidth: 0,
  naturalHeight: 0,
  currentFile: null,
  currentNode: null,

  init(frame, metaBadge, container) {
    this.frame = frame;
    this.metaBadge = metaBadge;
    this.container = container || (frame ? frame.closest('#img-view') : document.getElementById('img-view'));

    if (this.container) {
      this.canvasWrap = this.container.querySelector('#img-canvas-wrap') || this.container.querySelector('.img-canvas-wrap');
      this.svgContainer = this.container.querySelector('#img-svg-container');
      this.codeContainer = this.container.querySelector('#img-code-container');
      this.codeBlock = this.container.querySelector('#img-code-block');
      this.toolbar = this.container.querySelector('#img-toolbar');
      this.zoomLabel = this.container.querySelector('#img-zoom-label');
      this.modeToggleBtn = this.container.querySelector('#btn-img-mode-toggle');
      this.modeToggleLabel = this.container.querySelector('#img-mode-toggle-label');
      this.copyBtn = this.container.querySelector('#btn-img-copy');
      this.zoomInBtn = this.container.querySelector('#btn-img-zoom-in');
      this.zoomOutBtn = this.container.querySelector('#btn-img-zoom-out');
      this.zoomFitBtn = this.container.querySelector('#btn-img-zoom-fit');
      this.zoom100Btn = this.container.querySelector('#btn-img-zoom-100');
      this.rotateBtn = this.container.querySelector('#btn-img-rotate');
    }

    this.bindEvents();
  },

  bindEvents() {
    // Toolbar buttons
    if (this.zoomInBtn) this.zoomInBtn.onclick = () => this.zoomIn();
    if (this.zoomOutBtn) this.zoomOutBtn.onclick = () => this.zoomOut();
    if (this.zoomFitBtn) this.zoomFitBtn.onclick = () => this.zoomFit();
    if (this.zoom100Btn) this.zoom100Btn.onclick = () => this.zoom100();
    if (this.rotateBtn) this.rotateBtn.onclick = () => this.rotate();
    if (this.zoomLabel) this.zoomLabel.onclick = () => (this.scale === 1 ? this.zoomFit() : this.zoom100());
    if (this.modeToggleBtn) this.modeToggleBtn.onclick = () => this.toggleViewMode();
    if (this.copyBtn) this.copyBtn.onclick = () => this.copyContent();

    // Click on frame to toggle Zoom Fit / 100%
    if (this.frame) {
      this.frame.onclick = (e) => {
        if (this._hasDragged) return;
        if (Math.abs(this.scale - 1) < 0.05) this.zoomFit();
        else this.zoom100();
      };
    }

    if (this.svgContainer) {
      this.svgContainer.onclick = (e) => {
        if (this._hasDragged) return;
        if (Math.abs(this.scale - 1) < 0.05) this.zoomFit();
        else this.zoom100();
      };
    }

    // Pan / Drag Mechanics
    if (this.canvasWrap) {
      this.canvasWrap.addEventListener('mousedown', (e) => {
        if (this.viewMode === 'code') return;
        if (e.target.closest('#img-toolbar') || e.target.closest('#img-meta-badge')) return;
        this.isDragging = true;
        this._hasDragged = false;
        this.dragStartX = e.clientX - this.translateX;
        this.dragStartY = e.clientY - this.translateY;
        this.canvasWrap.style.cursor = 'grabbing';
      });

      window.addEventListener('mousemove', (e) => {
        if (!this.isDragging) return;
        const dx = e.clientX - this.dragStartX;
        const dy = e.clientY - this.dragStartY;
        if (Math.abs(dx - this.translateX) > 3 || Math.abs(dy - this.translateY) > 3) {
          this._hasDragged = true;
        }
        this.translateX = dx;
        this.translateY = dy;
        this.applyTransform();
      });

      window.addEventListener('mouseup', () => {
        if (this.isDragging) {
          this.isDragging = false;
          if (this.canvasWrap) this.canvasWrap.style.cursor = '';
        }
      });

      // Mouse Wheel Zoom
      this.canvasWrap.addEventListener('wheel', (e) => {
        if (this.viewMode === 'code') return;
        e.preventDefault();
        if (e.deltaY < 0) {
          this.zoomIn(0.15);
        } else {
          this.zoomOut(0.15);
        }
      }, { passive: false });
    }

    // Keyboard Shortcuts (active when img-view is visible)
    window.addEventListener('keydown', (e) => {
      if (!this.container || this.container.hidden) return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;

      if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        this.zoomIn();
      } else if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        this.zoomOut();
      } else if (e.key === '0') {
        e.preventDefault();
        this.zoomFit();
      } else if (e.key === '1') {
        e.preventDefault();
        this.zoom100();
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        this.rotate();
      } else if ((e.key === 's' || e.key === 'S') && this.isSvg && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        this.toggleViewMode();
      } else if ((e.key === 'c' || e.key === 'C') && (e.ctrlKey || e.metaKey)) {
        if (this.viewMode !== 'code') {
          e.preventDefault();
          this.copyContent();
        }
      }
    });
  },

  async render(file, node) {
    this.currentFile = file;
    this.currentNode = node;
    const name = (node && node.name) || (file && file.name) || '';
    const ext = name.split('.').pop().toLowerCase();
    this.isSvg = (ext === 'svg');

    // Reset transformations
    this.rotation = 0;
    this.translateX = 0;
    this.translateY = 0;
    this.viewMode = 'vector';

    if (this.modeToggleBtn) {
      this.modeToggleBtn.hidden = !this.isSvg;
      if (this.modeToggleLabel) this.modeToggleLabel.textContent = '</> SVG โค้ด';
    }

    if (this.codeContainer) this.codeContainer.hidden = true;

    if (this.isSvg) {
      await this.renderSvg(file, node);
    } else {
      await this.renderRaster(file, node, ext);
    }

    this.zoomFit();
    this.applyTransform();
  },

  async renderSvg(file, node) {
    let rawText = '';
    try {
      if (node.isRemote || file.isRemote) {
        const fetchUrl = encodeURI(file.url || node.url || ('docs/' + (node.relPath || node.path)));
        const resp = await fetch(fetchUrl);
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        rawText = await resp.text();
      } else if (file && typeof file.text === 'function') {
        rawText = await file.text();
      } else if (node.handle && typeof node.handle.getFile === 'function') {
        const f = await node.handle.getFile();
        rawText = await f.text();
      }
    } catch (err) {
      console.warn('[img-engine] Failed to read SVG text:', err);
    }

    this.rawSvgText = rawText;
    const { cleanSvg, width, height } = prepareSvg(rawText);
    this.cleanSvgText = cleanSvg;
    this.svgDimensions = { width, height };

    // 1. Render Vector container
    if (this.svgContainer) {
      this.svgContainer.innerHTML = cleanSvg;
      this.svgContainer.hidden = false;
      const svgElement = this.svgContainer.querySelector('svg');
      if (svgElement) {
        svgElement.style.maxWidth = '100%';
        svgElement.style.maxHeight = '100%';
        svgElement.style.height = 'auto';
        svgElement.style.display = 'block';
      }
    }

    // 2. Hide raster frame
    if (this.frame) {
      this.frame.hidden = true;
    }

    // 3. Populate code block
    if (this.codeBlock) {
      this.codeBlock.textContent = rawText;
      if (typeof window !== 'undefined' && window.hljs && typeof window.hljs.highlightElement === 'function') {
        window.hljs.highlightElement(this.codeBlock);
      }
    }

    // 4. Update Meta Badge
    const sizeStr = fmtBytes(file.size || (node && node.size) || rawText.length || 0);
    const dimStr = (width && height) ? `${width} × ${height} px · ` : '';
    if (this.metaBadge) {
      this.metaBadge.textContent = `${node.name} · ${dimStr}Vector SVG · ${sizeStr}`;
      this.metaBadge.title = 'เวกเตอร์กราฟิก SVG คมชัด 100% ทุกระดับการซูม';
    }

    // Cache blob URL for markdown embedding consistency
    if (!State.blobUrls.has(node.path) && cleanSvg) {
      try {
        const blobUrl = URL.createObjectURL(new Blob([cleanSvg], { type: 'image/svg+xml;charset=utf-8' }));
        State.blobUrls.set(node.path, blobUrl);
      } catch (e) {}
    }
  },

  async renderRaster(file, node, ext) {
    if (this.svgContainer) this.svgContainer.hidden = true;
    if (this.frame) this.frame.hidden = false;

    let url = State.blobUrls.get(node.path);
    if (!url) {
      if (node.isRemote || file.isRemote) {
        url = encodeURI(file.url || node.url || ('docs/' + (node.relPath || node.path)));
      } else {
        const mime = mimeByExt[ext] || file.type || 'image/jpeg';
        url = URL.createObjectURL(new Blob([file], { type: mime }));
        State.blobUrls.set(node.path, url);
      }
    }

    this.frame.src = url;
    this.frame.alt = node.name;

    const img = new Image();
    img.onload = () => {
      this.naturalWidth = img.naturalWidth;
      this.naturalHeight = img.naturalHeight;
      const sizeStr = fmtBytes(file.size || (node && node.size) || 0);
      if (this.metaBadge) {
        this.metaBadge.textContent = `${node.name} · ${img.naturalWidth} × ${img.naturalHeight} px · ${sizeStr}`;
        this.metaBadge.title = '';
      }
      this.zoomFit();
    };
    img.onerror = () => {
      const sizeStr = fmtBytes(file.size || (node && node.size) || 0);
      if (this.metaBadge) {
        this.metaBadge.textContent = `${node.name} · ${sizeStr} (โหลดภาพไม่สำเร็จ)`;
        this.metaBadge.title = 'ไม่สามารถถอดรหัสรูปภาพนี้ได้ อาจเป็นไฟล์ที่ไม่สมบูรณ์';
      }
    };
    img.src = url;
  },

  applyTransform() {
    const transformStr = `translate(${this.translateX}px, ${this.translateY}px) rotate(${this.rotation}deg) scale(${this.scale})`;

    if (this.frame && !this.frame.hidden) {
      this.frame.style.transform = transformStr;
    }
    if (this.svgContainer && !this.svgContainer.hidden) {
      this.svgContainer.style.transform = transformStr;
    }

    if (this.zoomLabel) {
      this.zoomLabel.textContent = `${Math.round(this.scale * 100)}%`;
    }
  },

  zoomIn(step = 0.25) {
    if (this.viewMode === 'code') return;
    this.scale = Math.min(8.0, +(this.scale + step).toFixed(2));
    this.applyTransform();
  },

  zoomOut(step = 0.25) {
    if (this.viewMode === 'code') return;
    this.scale = Math.max(0.1, +(this.scale - step).toFixed(2));
    this.applyTransform();
  },

  zoom100() {
    if (this.viewMode === 'code') return;
    this.scale = 1.0;
    this.translateX = 0;
    this.translateY = 0;
    this.applyTransform();
  },

  zoomFit() {
    if (this.viewMode === 'code') return;
    this.translateX = 0;
    this.translateY = 0;

    if (!this.canvasWrap) {
      this.scale = 1.0;
      this.applyTransform();
      return;
    }

    const wrapW = this.canvasWrap.clientWidth - 48;
    const wrapH = this.canvasWrap.clientHeight - 48;

    let targetW = this.naturalWidth;
    let targetH = this.naturalHeight;

    if (this.isSvg && this.svgDimensions && this.svgDimensions.width && this.svgDimensions.height) {
      targetW = this.svgDimensions.width;
      targetH = this.svgDimensions.height;
    }

    if (wrapW > 0 && wrapH > 0 && targetW > 0 && targetH > 0) {
      const scaleW = wrapW / targetW;
      const scaleH = wrapH / targetH;
      const fit = Math.min(scaleW, scaleH, 1.0); // Never upscale by default, fit within view
      this.scale = Math.max(0.1, +(fit).toFixed(2));
      this.fitScale = this.scale;
    } else {
      this.scale = 1.0;
      this.fitScale = 1.0;
    }

    this.applyTransform();
  },

  rotate() {
    if (this.viewMode === 'code') return;
    this.rotation = (this.rotation + 90) % 360;
    this.applyTransform();
  },

  toggleViewMode() {
    if (!this.isSvg) return;
    if (this.viewMode === 'vector') {
      this.viewMode = 'code';
      if (this.svgContainer) this.svgContainer.hidden = true;
      if (this.frame) this.frame.hidden = true;
      if (this.codeContainer) this.codeContainer.hidden = false;
      if (this.modeToggleLabel) this.modeToggleLabel.textContent = '🖼️ ดูรูปภาพเวกเตอร์';
      if (this.metaBadge && this.currentNode) {
        this.metaBadge.textContent = `${this.currentNode.name} · ซอร์สโค้ด SVG · ${fmtBytes(this.rawSvgText.length)}`;
      }
    } else {
      this.viewMode = 'vector';
      if (this.codeContainer) this.codeContainer.hidden = true;
      if (this.svgContainer) this.svgContainer.hidden = false;
      if (this.modeToggleLabel) this.modeToggleLabel.textContent = '</> SVG โค้ด';
      this.zoomFit();
    }
  },

  async copyContent() {
    if (this.isSvg && this.rawSvgText) {
      try {
        await navigator.clipboard.writeText(this.rawSvgText);
        this.flashNotice('✓ คัดลอกโค้ด SVG สำเร็จ');
        return;
      } catch (e) {}
    }

    // Fallback: Copy file path or image blob
    try {
      if (this.currentNode && this.currentNode.path) {
        await navigator.clipboard.writeText(this.currentNode.path);
        this.flashNotice('✓ คัดลอกที่อยู่ไฟล์แล้ว');
      }
    } catch (e) {
      this.flashNotice('ไม่สามารถคัดลอกได้');
    }
  },

  flashNotice(msg) {
    if (!this.metaBadge) return;
    const orig = this.metaBadge.textContent;
    this.metaBadge.textContent = msg;
    setTimeout(() => {
      if (this.metaBadge && this.metaBadge.textContent === msg) {
        this.metaBadge.textContent = orig;
      }
    }, 1800);
  }
};
