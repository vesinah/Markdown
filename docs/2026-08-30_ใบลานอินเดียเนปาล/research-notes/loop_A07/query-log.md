# Loop A-07 Query Log — ห้องสมุดวัดฮินดูและมัตถ์ในอินเดียใต้

วันที่: 2026-08-30 | เครื่องมือหลัก: Crossref REST (OpenAlex 429 ตลอด — ยืนยันแล้ว), webfetch, document_harvester.py

| # | เครื่องมือ/Query | ผลลัพธ์ |
|:---:|:---|:---|
| 1 | `scholar_api.py search "temple library manuscript South India" --limit 10` | **HTTP 429** (OpenAlex rate-limit) → สลับไป Crossref |
| 2 | `crossref_search.py "temple library manuscript South India" --limit 20` | พบ 20 ผลลัพธ์ — เด่น: Rath (ed.) *Aspects of Manuscript Culture in South India* (Brill 2012, DOI 10.1163/9789004223479), Colas 2023 (harvest แล้ว), Tallotte *Music and Temple Ritual in South India* (2022) |
| 3 | `crossref_search.py "matha monastery library Sanskrit manuscripts" --limit 15` | พบแต่ Pingree *Catalogue of Jyotiṣa Manuscripts in the Wellcome Library* (2004) รวมบท "Sūcīpattras" — ไม่พบงาน matha-library โดยตรงบน Crossref |
| 4 | `crossref_search.py "manuscript collection Hindu temple Tamil Nadu Kerala" --limit 15` | คุณภาพต่ำ (agri journals เข้ามาเยอะ) — ยังไม่พบ temple-library primary |
| 5 | `crossref_search.py "Oriental Research Institute Mysore manuscripts" --limit 15` | ไม่พบ ORI Mysore โดยตรง (noise จาก IOM RAS/Madras Agric. J.) |
| 6 | `crossref_search.py "Oriental manuscript institute Madras palm leaf" --limit 15` | พบ THPLMD dataset (Data in Brief 2024), IRJT 2022 Vagada Sangraha Chintamani |
| 7 | webfetch `https://www.sarasvatimahallibrary.tn.gov.in/` | **Transport error — ใช้ไม่ได้** (ยืนยันซ้ำ: สถานะเดิมใน source-index "ไม่ตอบสนอง") |
| 8 | webfetch IRJT ค้นหาในเว็บไซต์: `irjt.iorpress.org/index.php/irjt/search/search?query=Vagada Sangraha Chintamani` | พบบทความ view/2106, ได้ download link จาก Crossref API `/works/10.34256/irjt22455` → PDF |
| 9 | harvest `10.34256/irjt22455` → irjt download/2106/1675 | **สำเร็จ PDF 6 หน้า → PASS** (suba_aji_2022_vagada_sangraha_irjt.pdf) |
| 10 | `crossref_search.py "Tamil palm leaf manuscript collection Tamil Nadu library" --limit 12` | พบ Shanlax 2026 (10.34293/tamil.v10i3.10037) |
| 11 | harvest `10.34293/tamil.v10i3.10037` → shanlax download/10037/8552 | **สำเร็จ PDF 7 หน้า → PASS** (sivakumar_2026_4448_palmleaf_medicine_shanlax.pdf) |
| 12 | webfetch Mysore: `uni-mysore.ac.in/.../oriental_research.php` | **Transport error / ERR_CERT_DATE_INVALID** — เว็บ ORI ของ ม.มัยสูร์ ใช้ไม่ได้โดยตรง |
| 13 | DuckDuckGo HTML ค้น "Oriental Research Institute Mysore palm leaf manuscripts" | พบ: ม.มัยสูร์ (ORI ก่อตั้ง 1885, ~70,000 palm leaf+paper mss, โครงการ digitize 2022–2024 เสร็จ >90%), Mythic Society โครงการ conservation, The Hindu (2024) |
| 14 | harvest `https://mythicsociety.org/manuscripts` | **สำเร็จ** (mythicsociety_org_manuscripts.txt) — ORI repository >12,000 mss, >1.2M folios, บางฉบับอายุ ~1,000 ปี; รายการ mss เด่น (Arthaśāstra, Līlāvatī, Sūrya-Siddhānta, Kāśyapa-saṃhitā) |
| 15 | harvest `10.34256/irjt21210` → irjt download/235/111 | **สำเร็จ PDF 8 หน้า → PASS** (r_s_2021_tamil_ocr_palmleaf_irjt.pdf) |
| 16 | `crossref_search.py "manuscript library mutt India preservation palm" --limit 10` | ไม่พบงาน mutt-library เฉพาะ — gap |
| 17 | Semantic Scholar cited-by `10.1177/034003529402000310` (Samuel 1994) | พบ 6 citations → เลือก Poliakova et al. 2026 (Botany Letters) |
| 18 | harvest `10.1080/23818107.2026.2634848` (tandfonline epdf) | **สำเร็จ** — eReader text 46KB (poliakova_2026_plants_plm_tandfonline.txt) — OA CC-BY-NC-ND |

## Citation chaining (ลูปนี้)
- cited-by ของ Samuel 1994 "Preservation of Palm-leaf Manuscripts in Tamil" (IFLA J. 20(3)) ผ่าน Semantic Scholar API → Poliakova, Ciotti, Perumal, Balachandran (2026) "Plants used for palm-leaf manuscript production and conservation in South and Southeast Asia: a review of the literature" *Botany Letters* 173(3): 333–358, DOI 10.1080/23818107.2026.2634848 (harvest แล้ว)
- หมายเหตุ: ผู้แต่งร่วม P. Perumal = นักวิชาการ **ของ Sarasvati Mahal Library เอง**; N. Balachandran = French Institute of Pondicherry
