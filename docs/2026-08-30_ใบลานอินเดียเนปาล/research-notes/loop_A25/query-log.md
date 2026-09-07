# Loop A-25 Query Log — Gandhāran manuscripts: dating & collections (BL Kharosthi, Senior, Schøyen)
Date: 2026-08-30 | Agent: Explorer sub-agent | Toolchain: crossref_search.py (primary; OpenAlex scholar_api.py 429 เกือบทั้ง session), webfetch, document_harvester.py, pdf_extractor.py

| # | Query / Action | Tool | ผลลัพธ์ |
|---|---|---|---|
| 1 | scholar_api search "Gandharan Buddhist manuscripts dating radiocarbon" --limit 15 | OpenAlex | **HTTP 429** (rate-limited ทั้ง session; ยกเว้น doi cmd ซึ่ง fallback crossref ให้ title+container+issued เท่านั้น) |
| 2 | crossref "Gandharan Buddhist manuscripts dating radiocarbon" --limit 15 | Crossref | 15 ผลลัพธ์ — ท็อป: Salomon 2003 (10.2307/3217845), Aghaei et al. 2023 Radiocarbon Tehran MSS (10.1017/rdc.2023.2, CC-BY), Sander "Dating and Localizing Undated Manuscripts" (10.2307/j.ctt1vw0q4q.12) |
| 3 | crossref "Senior manuscripts Gandhara birch bark" --limit 15 | Crossref | 15 ผล — Allon "The Senior Kharoṣṭhī Manuscripts" (10.2307/j.ctt1vw0q4q.5), Salomon "Gāndhārī Manuscripts in the BL, Schøyen and Other Collections" (10.2307/j.ctt1vw0q4q.4), Cox (j.ctt1vw0q4q.6), Falk & Strauch Bajaur/Split (j.ctt1vw0q4q.7), Sidorov 2018 computational paleography birch-bark age (10.1134/s0361768818040114) |
| 4 | crossref "Schøyen collection manuscripts Gandhara" --limit 15 | Crossref | Omland "Claiming Gandhara: Legitimizing Ownership of Buddhist MSS in the Schøyen Collection" (10.1163/9789047418351_020), Braarvig BMC vol III review (10.1163/001972409x445870), Braarvig "The Schøyen Collection" (10.2307/j.ctt1vw0q4q.10) |
| 5 | scholar_api doi 10.2307/3217845 | OpenAlex(429)→crossref | fallback metadata: Salomon, JAOS 123(1):73 (2003) — **ไม่มี OA link, ไม่มี abstract ใน Crossref** |
| 6 | scholar_api cited-by 10.2307/3217845 (retry 4 ครั้ง + สคริปต์แยก 6 ครั้ง) | OpenAlex | **429 ต่อเนื่อง** — เปลี่ยนไป Semantic Scholar Graph API → ได้ 14 citing works (ดู findings) |
| 7 | harvester https://www.jstor.org/stable/3217845 | scraper | ได้แต่ shell/cookie-banner ไม่มีเนื้อหา — ลบไฟล์ |
| 8 | crossref "British Library Kharosthi fragments radiocarbon dating birch bark Scroll" | Crossref | ยืนยัน: **ไม่พบงาน radiocarbon เฉพาะเจาะจง BL Kharoṣṭhī ใน Crossref** (มีแต่ Dead Sea / Kohitsugire) |
| 9 | crossref "Buddhist manuscriptsFrom Schøyen Gilgit oldest birch bark new collections date" + "Gandhara dead of night..." (typo probe) | Crossref | Falk & Strauch Bajaur/Split (j.ctt1vw0q4q.7), Strauch Bajaur preliminary (ผ่าน S2), von Hinüber Gilgit (j.ctt1vw0q4q.8) |
| 10 | harvester 10.46586/rub.204 (DiGA digitization concept, BuddhistRoad) | scraper | landing PASS — โครงการ digitize 1,791 ชิ้นโบราณวัตถุพุทธศาสนิก 13 แหล่งใน Lower Dir/Swat (ประติมากรรม ไม่ใช่ MSS) |
| 11 | harvester https://gandhari.org/ | scraper | PASS — Corpus: Catalog: Dictionary: Grammar: Bibliography: Blog; Baums & Glass |
| 12 | harvester https://gandhari.org/catalog/ | puppeteer | PASS 77KB — Inscriptions CKI 1–1260 (1,234 results) |
| 13 | webfetch + harvester https://gandhari.org/catalog/manuscripts | puppeteer | **PASS — CKM 1–431 (376 results) ครบ** (จาระเม็ดสำคัญดู findings) |
| 14 | harvester https://gandhari.org/manuscripts/ | scraper | 404 → เก็บเป็น evidence โครงสร้าง URL |
| 15 | crossref "Allon Mark Gandharan Senior manuscripts Sanyukta" | Crossref | Glass & Allon "Four Gāndhārī Samyuktāgama Sūtras, Senior Kharoṣṭhī Fragments" review (10.1163/001972412x620295) |
| 16 | harvester DG "Three Early Mahāyāna Treatises from Gandhāra" (10.1515/9780295750750, CC BY-NC-ND) — html page | puppeteer | PASS — TOC ยืนยัน chapter DOI ต่อเนื่อง |
| 17 | dg_pdf_fetch.js + dg_capture_tmp.js (CDP) → Downloads → move | puppeteer | **-002 (Series Preface) 1.5MB และ -006 (Ch.1-2 Introduction+Physical Description) 1.8MB — PASS ทั้งคู่** |
| 18 | crossref "Falk Strauch Bajaur Split collections Kharosthi manuscripts" | Crossref | Strauch "The Bajaur Collection of Kharoṣṭhī Manuscripts" (OUP 2013 ch., 10.1093/acprof:oso/9780199326044.003.0002), Strauch "Early Mahāyāna in Gandhāra: New Evidence from the Bajaur Mahāyāna Sūtra" (10.1558/equinox.24518), Schlosser et al. 2022 (10.1515/9780295750750 OA) |
