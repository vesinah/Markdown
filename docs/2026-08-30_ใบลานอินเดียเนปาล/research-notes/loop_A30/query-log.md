# Loop A-30 Query Log — ใบลานอินเดียใต้เก่าแก่ + การกำหนดอายุด้วย palaeography

วันที่: 2026-08-30 | Tool: crossref_search.py (หลัก — OpenAlex 429 ทั้ง session), document_harvester.py, Invoke-WebRequest, webfetch

| # | Query/Action | Tool | ผลลัพธ์ |
|---|---|---|---|
| 1 | `scholar_api.py search "Tamil palm leaf manuscript dating palaeography" --limit 15` | OpenAlex | HTTP 429 |
| 2 | `crossref_search.py "Tamil palm leaf manuscript dating palaeography"` | Crossref | 15 ผล; ส่วนใหญ่ OCR/dataset; พบ Marrison 2002 (East Java palaeography — เกี่ยว PALAEOGRAPHY ของ palm leaf); Vagada Sangraha Chintamani (IRJT 2022) |
| 3 | `crossref_search.py "Grantha script South India manuscripts"` | Crossref | พบ **Rath 2012 "Varieties of Grantha Script: The Date and Place of Origin of Manuscripts"** (Brill); Rajagopal 2021 "Tamil Grantha script" (EAH); Marr 1969 (Grantha MSS in Bangkok); Grünendahl review by v. Hinüber 2002 IIJ |
| 4 | `crossref_search.py "radiocarbon dating Sanskrit manuscripts South Asia"` | Crossref | พบ **Wujastyk/Hayashi/Keller/Montelle/Plofker 2017 HSSA (Bakhshālī)**; Perumal 2012 (Sanskrit MSS in Tamilnadu) |
| 5 | `crossref_search.py "Vatteluttu script Tamil dating"` | Crossref | ไม่พบงาน palaeography Vatteluttu เชิง dating โดยตรง (ส่วนใหญ่ DL/epigraphy) — ยังไม่พบ |
| 6 | `crossref_search.py "oldest dated palm leaf manuscript South India"` | Crossref | พบ Prakash 2025 (off-target ดู A-29), Poliakova/Ciotti 2026 (phytolith), Chandramouli 2020 (Ayurveda Rayalaseema) |
| 7 | `crossref_search.py "Subbarayalu Tamil-Brahmi"`, "Mahadevan early Tamil epigraphy" | Crossref | Subbarayalu 2023 "Tamil-Brāhmī" (EAH 10.1002/9781119399919.eahaa00516); Mahadevan *Early Tamil Epigraphy* 2003 (review โดย Salomon, JAOS 2004 10.2307/4132283) |
| 8 | `crossref_search.py "Ciotti Franceschini scribal colophons Tamil manuscripts"` + "modular framework" | Crossref | พบ **Ciotti & Franceschini 2016** (Tracing MSS, 10.1515/9783110479010-004) + **Franceschini 2022** (Syntax of Colophons, 10.1515/9783110795271-006, CC BY-NC-ND) |
| 9 | Harvest HSSA Bakhshālī article 22/27 | harvester + Invoke-WebRequest | สำเร็จ — PDF 20pp PASS (ผ่าน article/download/22/27; URL /view/ ให้ HTML) |
| 10 | Harvest Frontiers phytolith 2024 | harvester | สำเร็จ — HTML fulltext 147KB PASS |
| 11 | Harvest Current Science Sharma 2020 | harvester | สำเร็จ — PDF 8pp PASS (currentscience.ac.in direct PDF) |
| 12 | Radiocarbon Tehran (Cambridge, 10.1017/rdc.2023.2) | harvester/webfetch | Cambridge "Temporary Disruption" — PDF 404 shell ×2, landing 500 — **ไม่สำเร็จ** (เก็บ metadata) |
| 13 | `scholar_api.py` ลองซ้ำ 3 ครั้ง (ห่าง 30–60s) | OpenAlex | 429 ทุกครั้ง |
| 14 | Harvest Gallop/Scheper/Dee 2025 dluwang (manuscript cultures) | harvester + Invoke-WebRequest | สำเร็จ — พบ galley ID ผ่าน HTML (article/download/9/13) — PDF 27pp PASS |
| 15 | `crossref_search.py "Kozok Tanjung Tanah"` | Crossref | Kozok 2004 Archipel 10.3406/arch.2004.3807 + 2015 monograph (ISEAS) — ไม่มี OA fulltext เปิดใน session นี้ |
| 16 | Harimoto 2017 (Bodhisattvabhūmi dating, DG) | harvester/Invoke-WebRequest | d-nb.info 400; DG empty shell — **ไม่สำเร็จ** (เก็บ DOI) |
| 17 | De Gruyter Franceschini 2022 PDF | harvester | JS-challenge shell — **ไม่สำเร็จ** (CC BY-NC-ND แต่ถูกบล็อกทางเทคนิค) |

หมายเหตุ: สาขา radiocarbon + palaeography + colophon ใช้ Bakhshālī paper เป็น case study หลักที่ตีพิมพ์ละเอียดที่สุด (บน birch bark ไม่ใช่ palm leaf — ระบุไว้ใน findings)
