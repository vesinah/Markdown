# Query Log — Loop 06 (A-06 ทิเบต: mchan མཆན — interlinear/marginal annotations)

วันที่: 2026-09-01 | Agent: Explorer B v2 (เอเชียตะวันออก)

## การค้นหา

| # | Query | ภาษา | เครื่องมือ | ผลลัพธ์ | Source ใหม่ | หมายเหตุ |
|---|-------|------|-----------|---------|------------|----------|
| 1 | mchan Tibetan manuscript interlinear marginal annotations | EN | scholar_api (OpenAlex) | HTTP 429 (OpenAlex ยัง rate-limit สะสมจากลูปก่อน) | — | เปลี่ยนไป Crossref |
| 2 | mchan Tibetan manuscript annotation interlinear | EN | Crossref API | 15 ผล ส่วนใหญ่ noise (nuclear hazard, linguistic linked data) ยกเว้น: Ricci 2025 "Implicit Comparisons: Visuality and the Interlinear Manuscript Page" (History and Theory) | S-2025-Ricci (metadata-only) | "mchan" ยังไม่ติด index ใน Crossref abstract |
| 3 | Sam van Schaik Peter Skilling mchan Tibetan manuscript annotations | EN | DDG html | ยืนยันตัวตน/ผลงาน van Schaik (British Library, ERC Beyond Boundaries, Tibetan Chan Manuscripts 2014, earlytibet.com); ยังไม่เจองานเขียนเรื่อง mchan โดยตรง | — | Skilling: เจอแต่ JSTOR review Mahāsūtras |
| 4 | "mchan" Tibetan manuscript interlinear gloss NGMCP catalogue | EN | DDG html | **พบตรง:** "Scribble and Notes: Remarks on the Tibetan Marginalia / Interlinear Notes (mchan bu)" (academia.edu 37077247) + Rangjung Yeshe dictionary entry mchan | S-mchanbu (metadata-only), S-RY-mchan | NGMCP catalogue เฉพาะ: ไม่มี quota เหลือ — ย้ายไปลูปถัดไป |
| (5) | (fetch เนื้อหาที่รู้ URL แล้ว — ไม่นับ query) | EN | webfetch | Rangjung Yeshe "mchan" entry อ่านจริงครบ | S-RY-mchan ✅ | — |

## ไฟล์ดิบค้างจากเอเจนต์ก่อนหน้า (ตรวจแล้ว)

| ไฟล์ | --check | อ่านจริง |
|------|---------|---------|
| S-2024-dunhuang-bundles-srah.pdf | **PASS** (21 pp, 5159 chars/page) | ✅ (หน้า 1–4) → S-2024-Terzi-Whitfield |

## Skip log

- **OpenAlex API** — HTTP 429 (สะสมเกิน 3 ครั้งจาก Loop 04–06) → ใช้ Crossref API แทนทั้งลูป
- **academia.edu** (mchan bu article) — Cloudflare challenge ×1 (IWR) + HTTP 403 ×1 (webfetch) = 2 ครั้ง; ครั้งที่ 3 ไม่ลอง → **skip**: ได้เพียง title + snippet จากผลค้นหา ไม่มี PDF/HTML เต็ม, ไม่รู้ชื่อผู้เขียน
- **Bing** — ผลลัพธ์ไม่เกี่ยวข้องทั้งหมด (สับสนกับเกม skribbl.io) → ไม่นำมาใช้
- **NGMCP catalogue** — ไม่ได้ค้น (query cap 4 ครั้ง/ลูปครบก่อน) → รอลูปถัดไป
