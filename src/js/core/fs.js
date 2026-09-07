import { State } from './state.js';
import { cmpNodes, extractDateFromName, getNodeDate } from '../tree/tree-node.js';

const sep = '/';

export function joinPath(base, name) {
  return base ? base + sep + name : name;
}

export function resolvePath(fromPath, rel) {
  try { rel = decodeURIComponent(rel); } catch (e) { console.warn('[fs] decodeURIComponent failed:', e.message); }
  const i = fromPath.indexOf(sep);
  const rootName = i < 0 ? fromPath : fromPath.slice(0, i);

  // Normalize absolute file:/// links (e.g. from research markdown files)
  rel = rel.replace(/^file:\/\/\/?(?:[a-zA-Z]:[\\/])?(?:01_APP[\\/])?(?:Research[\\/])?output[\\/]?/i, '');
  rel = rel.replace(/^output[\\/]/i, '');
  rel = rel.replace(/^file:\/\/\/?/, '');

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
  if (n && (n.kind === 'directory' || n.kind === 'root')) {
    if (n.kids && n.kids.length) {
      const plan = n.kids.find(k => k.kind === 'file' && (k.name === 'project-plan.md' || k.name === 'README.md' || k.name.endsWith('.md')));
      if (plan) return plan;
    }
  }
  const low = path.toLowerCase();
  for (const [k, v] of State.byPath) {
    if (k.toLowerCase() === low && v.kind === 'file') return v;
  }
  if (!path.endsWith('.md')) {
    const withMd = State.byPath.get(path + '.md');
    if (withMd && withMd.kind === 'file') return withMd;
    const lowMd = low + '.md';
    for (const [k, v] of State.byPath) {
      if (k.toLowerCase() === lowMd && v.kind === 'file') return v;
    }
  }
  return null;
}

export async function checkRootPermission(rootObj) {
  if (!rootObj || !rootObj.handle) return 'denied';
  try {
    const perm = await rootObj.handle.queryPermission({ mode: 'read' });
    rootObj.permission = perm;
    rootObj.isLocked = (perm !== 'granted');
    return perm;
  } catch (e) {
    rootObj.permission = 'prompt';
    rootObj.isLocked = true;
    return 'prompt';
  }
}

export async function requestRootPermission(rootIdx) {
  const r = State.roots[rootIdx];
  if (!r || !r.handle) return false;
  try {
    let perm = await r.handle.queryPermission({ mode: 'read' });
    if (perm !== 'granted') {
      perm = await r.handle.requestPermission({ mode: 'read' });
    }
    const ok = (perm === 'granted');
    r.permission = perm;
    r.isLocked = !ok;
    return ok;
  } catch (e) {
    console.warn('requestRootPermission fail', r.name, e);
    return false;
  }
}

export async function ensurePermission(node) {
  if (!node || node.isRemote) return true;
  if (node.rootIdx !== undefined && State.roots[node.rootIdx]) {
    const r = State.roots[node.rootIdx];
    if (r.isRemote) return true;
    try {
      let perm = await r.handle.queryPermission({ mode: 'read' });
      if (perm === 'granted') {
        r.isLocked = false;
        r.permission = 'granted';
        return true;
      }
      perm = await r.handle.requestPermission({ mode: 'read' });
      const granted = (perm === 'granted');
      r.isLocked = !granted;
      r.permission = perm;
      return granted;
    } catch (e) {
      return false;
    }
  }
  return true;
}

export function buildNodesFromCatalog(catalog, rootIdx = 0) {
  const rootName = catalog.name || 'คลังงานวิจัย (Research Archive)';
  const baseUrl = catalog.baseUrl || 'docs/';
  const files = catalog.files || [];

  const out = [];
  out.byPath = new Map();

  const rootNode = {
    kind: 'root',
    name: rootName,
    path: rootName,
    handle: null,
    depth: 0,
    kids: [],
    parent: null,
    rootIdx,
    isLocked: false,
    isRemote: true,
    baseUrl,
    dateFromName: extractDateFromName(rootName),
    mtime: catalog.updatedAt ? new Date(catalog.updatedAt).getTime() : Date.now(),
    size: catalog.totalBytes || 0
  };
  out.push(rootNode);
  out.byPath.set(rootName, rootNode);

  function ensureDir(dirPath, depth) {
    if (out.byPath.has(dirPath)) return out.byPath.get(dirPath);
    const i = dirPath.lastIndexOf(sep);
    const parentPath = i >= 0 ? dirPath.slice(0, i) : rootName;
    const dirName = i >= 0 ? dirPath.slice(i + 1) : dirPath;
    const parentNode = ensureDir(parentPath, depth - 1);

    const dirNode = {
      kind: 'directory',
      name: dirName,
      path: dirPath,
      handle: null,
      depth,
      kids: [],
      parent: parentNode,
      rootIdx,
      isRemote: true,
      baseUrl,
      dateFromName: extractDateFromName(dirName),
      mtime: null,
      size: 0
    };
    out.push(dirNode);
    out.byPath.set(dirPath, dirNode);
    if (parentNode && !parentNode.kids.includes(dirNode)) {
      parentNode.kids.push(dirNode);
    }
    return dirNode;
  }

  for (const f of files) {
    const rel = f.path.replace(/\\/g, '/');
    const parts = rel.split('/');
    const fileName = parts.pop();
    const dirParts = parts;
    const dirPath = dirParts.length ? `${rootName}/${dirParts.join('/')}` : rootName;
    const parentDir = ensureDir(dirPath, dirParts.length);

    const fullPath = `${rootName}/${rel}`;
    const fileNode = {
      kind: 'file',
      name: fileName,
      path: fullPath,
      relPath: rel,
      url: `${baseUrl}${rel}`,
      handle: null,
      depth: dirParts.length + 1,
      kids: null,
      parent: parentDir,
      rootIdx,
      isRemote: true,
      baseUrl,
      dateFromName: extractDateFromName(fileName),
      mtime: f.mtime || null,
      size: f.size || 0
    };
    out.push(fileNode);
    out.byPath.set(fullPath, fileNode);
    parentDir.kids.push(fileNode);
  }

  return out;
}

export async function walkDirectory(dir, base, depth, out, rootIdx) {
  const dirFiles = [];
  for await (const e of dir.values()) {
    if (e.name.startsWith('.')) continue;
    const path = joinPath(base, e.name);
    const dateFromName = extractDateFromName(e.name);
    const node = { kind: e.kind, name: e.name, path, handle: e, depth, kids: null, parent: null, rootIdx, dateFromName, mtime: null };
    out.push(node);
    out.byPath.set(path, node);
    if (e.kind === 'file') {
      dirFiles.push(node);
    } else if (e.kind === 'directory' && depth < 16) {
      await walkDirectory(e, path, depth + 1, out, rootIdx);
    }
  }

  if (dirFiles.length > 0) {
    await Promise.all(dirFiles.map(async n => {
      try {
        const f = await n.handle.getFile();
        n.mtime = f.lastModified;
        n.size = f.size;
      } catch (err) {
        n.mtime = n.dateFromName || 0;
      }
    }));
  }
}

export async function ensureFileMtimes(nodes = State.flat) {
  const missing = nodes.filter(n => n.kind === 'file' && (n.mtime === null || n.mtime === undefined) && n.handle && typeof n.handle.getFile === 'function');
  if (!missing.length) return;
  const CHUNK = 50;
  for (let i = 0; i < missing.length; i += CHUNK) {
    const slice = missing.slice(i, i + CHUNK);
    await Promise.all(slice.map(async n => {
      try {
        const f = await n.handle.getFile();
        n.mtime = f.lastModified;
        n.size = f.size;
      } catch (err) {
        n.mtime = n.dateFromName || 0;
      }
    }));
  }
}

export async function rescanWorkspaces() {
  const out = [];
  out.byPath = new Map();

  // If remote catalog is loaded, build its nodes first
  let nextRootIdx = 0;
  if (State.remoteCatalog) {
    const remoteNodes = buildNodesFromCatalog(State.remoteCatalog, nextRootIdx);
    for (const n of remoteNodes) {
      out.push(n);
      out.byPath.set(n.path, n);
    }
    nextRootIdx++;
  }

  for (let i = 0; i < State.roots.length; i++) {
    const r = State.roots[i];
    if (r.isRemote) continue; // Remote catalog already handled above

    await checkRootPermission(r);
    const rootIdx = nextRootIdx++;
    r.rootIdx = rootIdx;

    const rootNode = {
      kind: 'root',
      name: r.name,
      path: r.name,
      handle: r.handle,
      depth: 0,
      kids: null,
      parent: null,
      rootIdx,
      isLocked: !!r.isLocked,
      dateFromName: extractDateFromName(r.name),
      mtime: null
    };
    out.push(rootNode);
    out.byPath.set(r.name, rootNode);

    if (!r.isLocked) {
      try {
        await walkDirectory(r.handle, r.name, 1, out, rootIdx);
      } catch (err) {
        console.warn('walk fail', r.name, err);
        r.isLocked = true;
        rootNode.isLocked = true;
      }
    }
  }

  for (const n of out) {
    if (n.kind !== 'root' && !n.parent) {
      n.parent = n.path.includes(sep) ? out.byPath.get(n.path.slice(0, n.path.lastIndexOf(sep))) : null;
    }
  }
  for (const n of out) {
    if ((n.kind === 'directory' || n.kind === 'root') && !n.kids) {
      n.kids = out.filter(x => x.parent === n);
    }
  }
  // Bottom-up pass to resolve and cache dates for directories from their children
  for (let i = out.length - 1; i >= 0; i--) {
    out[i]._cachedDate = undefined;
    getNodeDate(out[i]);
  }
  const sortBy = (State.sort && State.sort.by) || 'name';
  const sortOrder = (State.sort && State.sort.order) || 'asc';
  for (const n of out) {
    if ((n.kind === 'directory' || n.kind === 'root') && n.kids) {
      n.kids.sort((a, b) => cmpNodes(a, b, sortBy, sortOrder));
    }
  }
  State.flat = out;
  State.byPath = out.byPath;
  if (State.current) State.current = State.byPath.get(State.current.path) || null;
}
