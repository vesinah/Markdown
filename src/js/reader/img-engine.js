import { State } from '../core/state.js';
import { fmtBytes, mimeByExt } from '../tree/tree-node.js';

export const ImageViewer = {
  frame: null,
  metaBadge: null,

  init(frame, metaBadge) {
    this.frame = frame;
    this.metaBadge = metaBadge;

    if (this.frame) {
      this.frame.onclick = () => {
        this.frame.classList.toggle('zoom-full');
      };
    }
  },

  render(file, node) {
    let url = State.blobUrls.get(node.path);
    if (!url) {
      if (node.isRemote || file.isRemote) {
        url = encodeURI(file.url || node.url || ('docs/' + (node.relPath || node.path)));
      } else {
        const ext = node.name.split('.').pop().toLowerCase();
        url = URL.createObjectURL(new Blob([file], { type: mimeByExt[ext] || file.type || 'image/jpeg' }));
        State.blobUrls.set(node.path, url);
      }
    }

    this.frame.src = url;
    this.frame.alt = node.name;
    this.frame.classList.remove('zoom-full');

    const img = new Image();
    img.onload = () => {
      if (this.metaBadge) {
        this.metaBadge.textContent = `${node.name} · ${img.naturalWidth} × ${img.naturalHeight} px · ${fmtBytes(file.size)}`;
      }
    };
    img.onerror = () => {
      if (this.metaBadge) {
        this.metaBadge.textContent = `${node.name} · ${fmtBytes(file.size)}`;
      }
    };
    img.src = url;
  }
};
