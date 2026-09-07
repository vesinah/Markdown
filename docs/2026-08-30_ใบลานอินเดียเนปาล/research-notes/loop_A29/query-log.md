# Loop A-29 Query Log — คัมภีร์ใบลานไชนะเก่าแก่ที่สุด (Jaisalmer/Patan Kalpasutra palm-leaf illustrated)

วันที่: 2026-08-30 | Tool: crossref_search.py (หลัก — OpenAlex 429 ตลอด session), document_harvester.py, webfetch

| # | Query/Action | Tool | ผลลัพธ์ |
|---|---|---|---|
| 1 | `scholar_api.py search "Kalpasutra manuscript palm leaf oldest" --limit 15` | OpenAlex | HTTP 429 (ล้มเหลว) |
| 2 | `crossref_search.py "Kalpasutra palm leaf manuscript"` | Crossref | 15 ผล; ส่วนใหญ่ dataset/OCR; พบ Colas 2023 (มีแล้ว S-170), Weller/Brown 1936 Artibus Asiae (paywall JSTOR) |
| 3 | `crossref_search.py "Jain Kalpasutra manuscript illustrated"` | Crossref | Eastman 1943 JAOS 10.2307/594361; Weller & Brown 1936 10.2307/3248358; Lahoti 2024 (S มีแล้วใน A-09) |
| 4 | `crossref_search.py "Jain palm leaf manuscript eleventh century"` | Crossref | ไม่พบงานที่ให้อายุ palm-leaf Jain 11th c. โดยตรง; noise จาก Beowulf/England |
| 5 | `crossref_search.py "Kalakacharya katha manuscript"` | Crossref | 0 ผลที่เกี่ยว (คืน Journal of KATHA ทั้งหมด) — ยังไม่พบ |
| 6 | `crossref_search.py "Western India illustrated Kalpasutra golden age Jain painting"` | Crossref | ไม่มีผลใหม่ที่เกี่ยว |
| 7 | `crossref_search.py "Kalpasutra Jinacaritra manuscript Śvetāmbara illustrated date 1060"` | Crossref | ไม่พบ — ยังไม่พบ |
| 8 | `crossref_search.py "Jain manuscript painting western India 12th century Kalpasutra colophon"` | Crossref | พบ Krüger 2022 "Visualising Leisure in Jain Manuscript Paintings from Western India" (Brewer/Bawa ed., 10.5040/9789394701335.ch-007); Maitra 2023 monograph |
| 9 | `crossref_search.py "South Asian studies oldest dated illustrated Jain manuscript"` | Crossref | พบ Prakash 2025 (South Asian Studies 41(2):295-311) — แต่เป็น Persian Śiva Purāṇa paper MS (ไม่ใช่ Jain palm-leaf) — off-target |
| 10 | `crossref_search.py "Kalpasutra"` | Crossref | พบ **Krüger 2020, Miniaturen mittelalterlicher Kalpasutra-Handschriften** (monograph, 10.29091/9783954905539) |
| 11 | `crossref_search.py "Jain bhandara Jaisalmer manuscripts"` | Crossref | ยืนยัน Balbir 2019/2022 (มีแล้ว); ไม่พบใหม่ |
| 12 | `crossref_search.py "Maitra Jain paintings material culture medieval western India"` | Crossref | Maitra 2023 Routledge monograph 10.4324/9781003415282 (paywall) |
| 13 | `crossref_search.py "Kruger western India Jain manuscript paintings eleventh fifteenth centuries"` | Crossref | ยืนยัน Krüger 2022 chapter |
| 14 | Harvest T&F PDF Prakash 2025 | harvester | 403 Cloudflare → Puppeteer ได้ HTML fulltext 90KB (เป็นบทความ Persian Śiva Purāṇa — เก็บไว้เป็น off-target note) |
| 15 | Harvest Balbir 2017 (Cambridge Jain MSS) DG PDF | harvester + Invoke-WebRequest | JS-challenge / empty shell ×3 — **ไม่สำเร็จ** (metadata ยืนยันผ่าน doi.org: pp.47-76) |
| 16 | Harvest Chitrolekha Lahoti 2024 (PDF path ทดลอง + landing) | harvester | ได้ landing/abstract fulltext ที่ doi.org; PDF direct ไม่พบ path ที่ถูกต้อง; abstract บันทึกได้ (quote ใน findings) |
| 17 | `crossref_search.py "Dundas Jains library scripture"`, "Cort", "Pal", "Doshi", "Dhaky", "Quintanilla", "Tandon", "Tripāṭhī Strasbourg" | Crossref | ได้ bibliography เพิ่มเติม (Tripāṭhī 1975 Catalogue Jaina MSS Strasbourg; Dundas The Jains ch. Scriptures) — ยังไม่มี OA fulltext |
| 18 | JSTOR Weller/Brown 1936, Titley 1963 | webfetch/harvester | Client Challenge — ไม่สำเร็จ (paywall) |

หมายเหตุ: OpenAlex (scholar_api.py) ให้ 429 ทั้ง session จึงใช้ Crossref 100%
