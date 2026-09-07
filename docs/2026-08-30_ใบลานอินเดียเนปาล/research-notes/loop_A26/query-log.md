# Loop A-26 Query Log — Bakhshālī radiocarbon controversy; Spitzer manuscript
Date: 2026-08-30 | Toolchain: crossref_search.py (หลัก — OpenAlex 429), webfetch, document_harvester.py, dg_pdf_fetch/capture, pdf_extractor.py, Wayback CDX

| # | Query / Action | Tool | ผลลัพธ์ |
|---|---|---|---|
| 1 | crossref "Bakhshali manuscript dating controversy" --limit 15 | Crossref | Gobets & Kuhn "Status Update/Petition on the Bakhshali Manuscript" (10.1163/9789004691568_049, 2024); Hayashi "The Symbol ya..." (10.4259/ibk.36.445); ไม่พบ response-paper อื่นเฉพาะเรื่อง |
| 2 | crossref "Spitzer manuscript Sanskrit oldest philosophical" --limit 15 | Crossref | **Franco. "The Oldest Philosophical Manuscript in Sanskrit." JIP 31.1-3:21-31 (2003), 10.1023/a:1024690001755**; review Leduc-Pagel BSOAS 2006; Franco "Towards a Reconstruction of the Spitzer Manuscript" WZKS 2003 (10.1553/wzksxlvis171 ฯลฯ); 10.1553/3-7001-3301-4 (monograph OAW 2004) |
| 3 | harvester https://journals.library.ualberta.ca/hssa/.../view/22 | scraper | PASS — **abstract เต็มของ Wujastyk et al. 2017**; Downloads: "Download data is not yet available" บน view page |
| 4 | find galley: href scan view/22 | urllib | galley ID = /view/22/27 |
| 5 | scan view/22/27 → href | urllib | **download link = /article/download/22/27/137** (application/pdf) |
| 6 | harvester download/22/27/137 | scraper | **PDF 2.1MB** → rename Wujastyk_etal_2017_Bakhshali_Response_Bodleian.pdf |
| 7 | pdf_extractor --check | — | **PASS 20pp, avg 1775.5 chars/page**; extract text → Wujastyk_etal_2017_text.txt |
| 8 | scholar_api doi 10.18732/h2xt07 + harvester DOI | OpenAlex(429)/crossref | metadata JSON เก็บแล้ว (metadata_10_18732_h2xt07.json) — HSSA 5.1:134-150 |
| 9 | webfetch bodleian.ox.ac.uk/whatson/...scrolls | webfetch | 404-adjacent (หน้า events ไม่มี Bakhshali) |
| 10 | Wayback availability API: bodleian.../worlds-oldest-recorded-origin-of-the-zero-symbol | archive.org | **archived_snapshots: {} — ไม่มี capture ของ URL นี้** |
| 11 | Wayback CDX: bodleian.ox.ac.uk/news/2017/sep/14*, bodleian.ox.ac.uk*bakhshali*, ox.ac.uk*bakhshali*, ox.ac.uk*zero-symbol* | CDX API | **(no captures) ทุก pattern** — statement ฉบับเว็บ Bodleian ยังไม่พบ archive เข้าถึงได้ |
| 12 | crossref "Bakhshali manuscript zero symbol oldest radiocarbon folio" + "Bodleian radiocarbon" | Crossref | ยืนยันไม่มี DOI ของ Bodleian statement (เป็น press release ไม่ผ่าน peer-review — ตัวเอก side) |
| 13 | crossref "Bakhshali manuscript mathematical treatise Hayashi" | Crossref | **Hayashi. *The Bakhshālī Manuscript*. Groningen: Egbert Forsten, 1995, 10.1163/9789004646643** (+ chapter DOIs: ch.8 Script, ch.18 Sources, ch.36 Photographs) |
| 14 | harvester degruyterbrill 10.1023/a:1024690001755 (Franco JIP 2003) | scraper | **404 "Page not found" บน DG** (Springer legacy DOI ไม่อยู่ DG) — paywall Springer, ไม่มี OA → metadata only |
| 15 | harvester austriaca.at/3-7001-3301-4 + verlag.oeaw.ac.at product page | scraper | austriaca: blank/JS-only; verlag product: 404 — Spitzer monograph ไม่ OA |
| 16 | Semantic Scholar citing Wujastyk 2017 (ผ่าน chain probe) | S2 API | ใช้แทน OpenAlex cited-by ที่ 429 (ผลใน findings) |
