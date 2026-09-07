# Query Log — Loop A-09: หอคัมภีร์ไชนะ (Jain bhandaras): Jaisalmer, Patan, Moodabidri

วันที่: 2026-08-30 | เครื่องมือ: scholar_api.py (OpenAlex) → ติด 429; สลับ Crossref REST (crossref_search.py — สร้างใหม่ใน .agent/scripts) + webfetch ตรง

| # | Query / การกระทำ | ช่องทาง | ผลลัพธ์หลัก |
|---|---|---|---|
| 1 | "Jain bhandara manuscript library Rajasthan" (limit 20) | OpenAlex | HTTP 429 — fail |
| 2 | (ซ้ำ #1 หลัง sleep 20s, มี mailto) | OpenAlex | HTTP 429 — fail |
| 3 | "Jain bhandara manuscript library Rajasthan" (rows 20) | Crossref REST | noise สูง (Bhandara district, library science) — ไม่พบงานตรง |
| 4 | "Jaisalmer Jain manuscripts palm leaf" (rows 15) | Crossref REST | พบ Balbir 2022 colophons (DOI 10.1515/9783110795271-004, CC BY-NC-ND) — **งานแกน**; Punyavijaya Cambay catalogue Part 1 (10.2307/597962) & Part 2 (10.2307/597298) — JSTOR |
| 5 | "Moodabidri Jain manuscript library Karnataka" (rows 15) | Crossref REST | noise — ไม่พบงานวิชาการตรงเรื่อง Moodabidri bhandara |
| 6 | "Patan Gujarat Jain bhandara Santinatha manuscript" (rows 15) | Crossref REST | noise — ไม่พบงานตรง |
| 7 | "Jain manuscript colophon bhandara western India" (rows 15) | Crossref REST | พบ Krüger 2022 (Jain MS paintings), Chanchani 2021 (MNS), Maitra 2023 (monograph) |
| 8 | DOI resolve 10.1515/9783110795271-004 & 10.1515/9783110645989-001 | Crossref API | ยืนยัน metadata ครบ (De Gruyter, CC BY-NC-ND, pp. 119–148 / pp. 1–36) |
| 9 | harvest Balbir colophons | document_harvester → ได้ metadata เท่านั้น; De Gruyter direct/Invoke-WebRequest → 202 empty; stealth_puppeteer html → ได้; **วิธีสำเร็จ: in-page fetch (dg_inpage_fetch.js) ผ่านหน้า /html ก่อน** | PDF 467 KB ✅ |
| 10 | harvest Balbir multiple-text (DOI แกนของ A-09) | dg_inpage_fetch.js | PDF 470 KB ✅ |
| 11 | "Detige Digambara manuscript colophons bhattaraka" | Crossref REST | พบ Detige 2019 (Religions, OA), 2023, 2024 — Digambara side |
| 12 | "Balbir Cambridge Jain Manuscripts Provenances" | Crossref REST | พบ 10.1515/9783110543100-003 (CC BY-ND) |
| 13 | harvest Balbir Cambridge Jain | dg_inpage_fetch.js | PDF 1.29 MB ✅ |
| 14 | "Punyavijaya Catalogue Palm-Leaf Santinatha Cambay" | Crossref REST | ยืนยัน Part 1/2 เป็น JSTOR paywall (ไม่มี license OA) — metadata only |
| 15 | "Jinavijaya prasasti colophons Jain bhandara" + "Koba Jain institute" | Crossref REST | ไม่พบ OA ตรง; ยืนยัน Jinavijaya 1943 เป็นหนังสือพิมพ์ Bombay (อ้างใน Balbir 2022) |
| 16 | "Ciotti ontological pothi" (ผ่าน query 13) | Crossref REST | พบ 10.1515/9783110753301-042 (CC BY-NC-ND) |
| 17 | harvest Ciotti ontological pothi | dg_inpage_fetch.js | PDF 272 KB ✅ |
| 18 | Citation chaining จาก Balbir 2022 (fn.1 → Formigatti) | Crossref REST | พบ Formigatti 2022 Nepalese Colophons (10.1515/9783110795271-003, OA) |
| 19 | harvest Formigatti Nepalese colophons | dg_inpage_fetch.js | PDF 1.05 MB, 76 หน้า ✅ |
| 20 | webfetch jaina-antiquary.com | DNS fail (ทั้ง www/ไม่มี www) | โดเมนไม่ resolve — **ยังไม่พบเว็บไซต์** |
| 21 | webfetch JSTOR 10.2307/597962 | JS challenge | paywall — metadata only |

## สถานะสุขภาพ PDF (สุดท้าย)
- balbir_colophons_jain_palmleaf.pdf — PASS (30 หน้า, avg 2,324 chars/หน้า)
- balbir_multiple_text_jain.pdf — PASS (36 หน้า, 2 หน้าว่าง = divider)
- balbir_cambridge_jain.pdf — PASS (30 หน้า)
- ciotti_ontological_pothi.pdf — PASS (24 หน้า)
- formigatti_nepalese_colophons.pdf — PASS (76 หน้า)
