# Loop A-21 — Query Log: โครงการดิจิทัลคัมภีร์ใบลาน (digitization projects, OCR/HTR for manuscripts)

Date: 2026-08-30 | Agent: Explorer (Phase A)

| # | Tool | Query | Result |
|---|------|-------|--------|
| 1 | scholar_api.py (OpenAlex) | "palm leaf manuscript digitization India" --limit 15 | HTTP 429 (OpenAlex rate-limit ทั้ง session) — สลับไป Crossref ตามแผนสำรอง |
| 2 | crossref_search.py | "palm leaf manuscript digitization India" | 15 ผล: Mehta & Challa ICECCT 2017 (IEEE, ไม่ OA), Rajeswar & Kavinisha OTCON 2026 (MobileNet V2), THPLMD Data in Brief 2024 (CC-BY), HMPLMD Data in Brief 2023 (CC-BY), ICTACT 2021 Tamil hybrid features, blockchain chapter (ไม่เกี่ยวสาระ) |
| 3 | crossref_search.py | "manuscript OCR Sanskrit Devanagari recognition" | 15 ผล: Chaudhuri 2009 (Bangla/Devanagari OCR chapter), Bansal & Sinha ICDAR 2001 (printed Hindi), Moudgil et al. ICRITO 2024 (AlexNet คัมภีร์โบราณ Devanagari), Bhandari & Harit 2026 Research Square (Devanagari Post-OCR correction, CC-BY), Girdher 2022 SSRN survey — ส่วนใหญ่ IEEE paywall |
| 4 | crossref_search.py | "handwritten text recognition historical manuscript Indic" | 15 ผล: Meelen & Griffiths JOHD 2025 (Collaborative HTR Workflows, OA — johd domain ล่ม DNS ไม่ได้เนื้อหา), Miktub LREC 2026 (Maltese — ไม่ใช่ Indic), iiit-indic-hw-words LNCS 2021 (Indic HTR dataset), Guruprasad & Rao 2021 (Nandinagari palm leaf — Springer paywall), Agre et al. PuneCon 2025 (survey low-resource Indic HTR, IEEE) |
| 5 | crossref_search.py | "digital library Sanskrit manuscripts India platform" | 15 ผล: Bansode 2008 Library Hi Tech News (Shivaji Univ. digital library), Pingree 2004 Wellcome Jyotiṣa catalogue (Brill) — ไม่มี OA ใหม่ที่เกี่ยวตรง |
| 6 | crossref_search.py | "eLibrary manuscript metadata standard IIIF" | ผลส่วนใหญ่ไม่ตรง (IEEE LOM standards, proteomics); Cirnigliaro & Robson 2022 The Italianist (IIIF Leonardo codices — ไม่ใช่ Indic, Taylor & Francis) — บันทึกเป็นภาพรวม IIIF เท่านั้น |
| 7 | crossref_search.py | "Indic manuscript image dataset benchmark character recognition palm leaf" | 15 ผลชุดสำคัญ: Sivan & Pati Scientific Data 2026 (LeafOCR-Line benchmark 1710 text lines, CC-BY-NC-ND), Balaji & Lalitha ICISS 2026 (Real-ESRGAN + Deformable ViT Tamil), THPLMD Data in Brief 2024 (CC-BY), HMPLMD Data in Brief 2023, Kesiman ICDAR 2017 (Sundanese 15th c. dataset), Valy 2017 (Khmer palm leaf dataset), TlMamba Visual Computer 2026 (Tai Lue), Guruprasad 2021 (Nandinagari) |
| 8 | document_harvester.py | DOI 10.1038/s41597-026-06718-1 (Crossref metadata) | metadata JSON สำเร็จ |
| 9 | document_harvester.py | https://aclanthology.org/2026.acl-long.671.pdf | PASS — ดาวน์โหลด 27 หน้า + extract สำเร็จ (ทวนสอบ Sarawgi ACL 2026 ตามภารกิจ) |
| 10 | document_harvester.py | https://www.nature.com/articles/s41597-026-06718-1.pdf → Puppeteer | PDF 1 หน้า = viewer shell (LOW-TEXT); ลอง /htm → Puppeteer ได้ HTML เต็ม 57KB (Abstract + Methods อ่านได้) |
| 11 | document_harvester.py | DOI 10.1016/j.dib.2024.110100 (THPLMD) | metadata JSON เท่านั้น (Elsevier — fulltext ผ่าน api.elsevier ไม่เปิด) |
| 12 | document_harvester.py | MDPI 2405-9661/12/5/72 (ข้อผิดพลาด path) + 2405-9661/12/5/72 | 404 ทั้งสอง — ลบไฟล์ (บันทึกเพื่อความโปร่งใส) |
| 13 | document_harvester.py | johd.lib.uchicago.edu / johd.llc.mv-cc.com / johd.erudit.org (10.5334/johd.388) | DNS resolve ล้มเหลวทั้ง 3 host — ไม่ได้ fulltext; บันทึก metadata JSON |
| 14 | document_harvester.py + pdf_extractor | https://epub.oeaw.ac.at/0xc1aa5572%200x003f63e4.pdf (Griffiths 2024 Tibetan HTR, DOI 10.1553/tibschol_erc_htr — link จาก Crossref) | PASS 10 หน้า |
| 15 | document_harvester.py | https://www.mdpi.com/2079-9292/11/23/3919 (Zhang et al. 2022, Electronics — Uchen Tibetan dataset) | Puppeteer ผ่าน Cloudflare — HTML text 83KB PASS |
| 16 | scholar_api.py | (retry "handwritten text recognition historical manuscript Indic") | ยัง 429 — ไม่ได้ใช้ OpenAlex ในลูปนี้ |

Citation chaining (A-21): S-250 (Sarawgi ACL 2026) อ้าง — Nakarmi et al. 2024 "Nepal script text recognition using CRNN CTC architecture" (SIGUL@LREC-COLING 2024, pp.244-251); Merkel-Hilf 2022 "Ground Truth data for printed Devanagari" (heiDATA); Kiessling 2019 (Kraken, DH 2019 Utrecht); Nockels, Gooding & Terras 2024 J. Documentation 80(7):148-167 ("implications of HTR for accessing the past at scale"); Garces Arias et al. 2023; Pant & Pierce 1989 (Administrative Documents of the Shah Dynasty... Mustang). S-252 (Griffiths) อ้าง — Namsel OCR (github.com/zmr/namsel), Esukhia, BDRC, O'Neill & Hill 2022 (Pracalit script HTR!), Merkel-Hilf 2022 (Devanagari).
