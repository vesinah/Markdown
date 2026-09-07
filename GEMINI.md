# MDBrowse (มาร์คมาก) — AI Agent Rules & Workspace Guidelines

> **Project Mission**: Dual-mode document reader (Markdown, PDF, Images, Code) running offline 100% via `file:///` and online via Cloudflare Pages ([markmakk.pages.dev](https://markmakk.pages.dev/)).

---

## 1. Absolute Invariants (กฎเหล็กที่ไม่ยอมรับการประนีประนอม)

1. **Source Only**: แก้ไขโค้ดในโฟลเดอร์ `src/` เท่านั้น **ห้ามแก้ไข `MDBrowse.html` หรือ `index.html` โดยตรง** เพราะจะถูกทับเมื่อรัน `node build.js`
2. **Compile Protocol**: ทุกครั้งที่แก้โค้ดใน `src/` ต้องสั่งรัน `node build.js` เสมอ ซึ่งจะตรวจสอบ JavaScript Module Syntax และ 85 DOM Contracts โดยอัตโนมัติ
3. **100% Offline-First (No External Dependencies)**:
   - ห้ามใส่ `<script src="https://...">` หรือ `<link href="https://...">` เด็ดขาด
   - ไลบรารีทั้งหมดต้องอยู่ใน `src/vendor/` และถูก Bundled เข้าไฟล์เดี่ยว
4. **file:/// Sandbox Constraints**:
   - **PDF.js**: ห้ามสร้าง Worker ผ่าน Blob URL เพราะ Chrome จะบล็อก ต้องใช้ In-Memory Worker (`globalThis.pdfjsWorker`) เท่านั้น
5. **Zero Desktop Regression**:
   - เลย์เอาต์และฟังก์ชันบนเดสก์ท็อป (>768px) ต้องคงเดิม 100% เสมอ
   - สไตล์มือถือทั้งหมดต้องอยู่ใน `@media (max-width: 768px)`

---

## 2. Critical Mobile Gotchas (จุดควรระวังพิเศษสำหรับจอมือถือ)

- **Layout Shift Prevention**: ห้ามใช้ `margin-left` ติดลบบน `#sidebar` ในโหมดมือถือเด็ดขาด (จะดึง `#main` และเมนูบาร์หลุดขอบจอ -87px) ให้ใช้ `transform: translateX(-100%)` และ `translateX(0)` เสมอ
- **TOC Drawer Display**: ต้อง override คลาส `.toc-mini` ในโหมดมือถือด้วย `#toc-header, #toc-full-view { display: flex !important; }` และซ่อน `#toc-mini-rail` ป้องกันสารบัญหดหาย
- **Research Archive Root Card**: บรรทัดบนสุดของคลังงานวิจัย 6,066 รายการ (`.node-row.node-root`) ต้องเป็น 2-Tier Flex Card เสมอ เพื่อให้ชื่อ `คลังงานวิจัย (Research Archive)` แสดงครบ 100% ไม่ถูกตัดเหลือเพียง `คลัง...`
- **iOS Safari Auto-Zoom**: ช่องค้นหา `.sb-search-input` ต้องคงขนาด `font-size: 16px` เสมอ เพื่อป้องกัน Safari ซูมจอเวลาพิมพ์

---

## 3. Directory Map (แผนผังซอร์สโค้ด)

```text
D:/01_APP/Markdown/
├── src/
│   ├── css/          # base, sidebar, reader, markdown, ruler, bookmark, pet, themes
│   ├── js/
│   │   ├── core/     # store.js (IndexedDB), state.js, router.js, fs.js (File System Access)
│   │   ├── tree/     # tree-node.js, tree-exp.js ('final' auto-expand), tree-ui.js
│   │   ├── reader/   # markdown.js (Marked+DOMPurify), pdf-engine.js, img-engine.js, toc.js, footnotes.js
│   │   ├── search/   # search.js (Full-text & Filename with 200-item FIFO cache)
│   │   ├── bookmark/ # bm-store.js, bm-panel.js, bm-highlight.js (Text Quote Anchors)
│   │   ├── ui/       # menubar.js, ruler.js, resizer.js, theme.js, reading-progress.js
│   │   └── pet/      # 6-Axis Cat Sanctuary Engine (Breeds, Rigging, Hygiene, Social, Props)
│   └── vendor/       # marked, purify, hljs, katex, pdfjs (All offline minified)
├── docs/             # Remote catalog repository (catalog.json + markdown papers)
├── tests/            # core_features.test.js & e2e/ (300 opaque-box test suite)
├── build.js          # Compiler & DOM contract validator (src/ -> MDBrowse.html & index.html)
└── scripts/          # sync_research.js (Incremental sync from D:\01_APP\Research\output)
```

---

## 4. Verification Protocol (คำสั่งตรวจสอบก่อนส่งมอบงาน)

เมื่อทำงานเสร็จ ต้องรัน 3 คำสั่งนี้เสมอ:
1. `node build.js` — ตรวจสอบ 85 DOM Contracts และ Bundle ไฟล์
2. `node tests/core_features.test.js` — รัน Unit Tests (16/16 Pass)
3. `node tests/e2e/runner.js` — รัน E2E Tests (300/300 Pass)
