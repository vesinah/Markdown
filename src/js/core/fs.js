import { State } from './state.js';
import { cmpNodes } from '../tree/tree-node.js';

const sep = '/';

export function joinPath(base, name) {
  return base ? base + sep + name : name;
}

export function resolvePath(fromPath, rel) {
  try { rel = decodeURIComponent(rel); } catch (e) {}
  const i = fromPath.indexOf(sep);
  const rootName = i < 0 ? fromPath : fromPath.slice(0, i);
  let parts;
  if (/^[A-Za-z]:[\\/]/.test(rel)) parts = [rootName].concat(rel.replace(/^[A-Za-z]:[\\/]/, '').split(/[\\/]/));
  else if (rel.startsWith('/')) parts = [rootName].concat(rel.slice(1).split('/'));
  else parts = fromPath.split(sep).slice(0, -1).concat(rel.split('/'));
  const out = [];
  for (const p of parts) {
    if (!p || p === '.') continue;
    if (p === '..') out.pop();
    else out.push(p);
  }
  return out.join(sep);
}

export function findFileByPath(path) {
  let n = State.byPath.get(path);
  if (n && n.kind === 'file') return n;
  const low = path.toLowerCase();
  for (const [k, v] of State.byPath) {
    if (k.toLowerCase() === low && v.kind === 'file') return v;
  }
  return null;
}

export async function ensurePermission(node) {
  if (!node) return true;
  if (node.rootIdx !== undefined && State.roots[node.rootIdx]) {
    const r = State.roots[node.rootIdx];
    try {
      let perm = await r.handle.queryPermission({ mode: 'read' });
      if (perm === 'granted') return true;
      perm = await r.handle.requestPermission({ mode: 'read' });
      return perm === 'granted';
    } catch (e) {
      return false;
    }
  }
  return true;
}

export async function walkDirectory(dir, base, depth, out, rootIdx) {
  for await (const e of dir.values()) {
    if (e.name.startsWith('.')) continue;
    const path = joinPath(base, e.name);
    const node = { kind: e.kind, name: e.name, path, handle: e, depth, kids: null, parent: null, rootIdx };
    out.push(node);
    out.byPath.set(path, node);
    if (e.kind === 'directory' && depth < 16) {
      await walkDirectory(e, path, depth + 1, out, rootIdx);
    }
  }
}

export async function rescanWorkspaces() {
  const out = [];
  out.byPath = new Map();
  for (let i = 0; i < State.roots.length; i++) {
    const r = State.roots[i];
    const rootNode = { kind: 'root', name: r.name, path: r.name, handle: r.handle, depth: 0, kids: null, parent: null, rootIdx: i };
    out.push(rootNode);
    out.byPath.set(r.name, rootNode);
    try {
      await walkDirectory(r.handle, r.name, 1, out, i);
    } catch (err) {
      console.warn('walk fail', r.name, err);
    }
  }
  for (const n of out) {
    if (n.kind !== 'root') {
      n.parent = n.path.includes(sep) ? out.byPath.get(n.path.slice(0, n.path.lastIndexOf(sep))) : null;
    }
  }
  for (const n of out) {
    if (n.kind === 'directory' || n.kind === 'root') {
      n.kids = out.filter(x => x.parent === n);
      n.kids.sort(cmpNodes);
    }
  }
  State.flat = out;
  State.byPath = out.byPath;
  if (State.current) State.current = State.byPath.get(State.current.path) || null;
}
