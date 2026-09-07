# Loop A-23 — Query Log: แคตตาล็อกคัมภีร์ยุคคลาสสิก (Bühler, Aufrecht, ราชสำนักยุโรป)

Date: 2026-08-30 | Raw log only

| # | เครื่องมือ | Query / URL | ผล |
|---|---|---|---|
| Q1 | scholar_api.py (OpenAlex) | search "catalogue Sanskrit manuscripts India 19th century" --limit 15 | **HTTP 429** — ล้มเหลว |
| Q2 | webfetch archive.org advancedsearch | q=Buhler+catalogue+manuscripts&rows=10 | พบ 7 items — Bühler Gujarat 1871 จริง 2 identifier: `india.history.resource.89860`, `acataloguesansk00bhgoog`; และ `catalogueofmanuscriptsinprivatelibrariesofgujaratetcbuhler_732_f`; Stein Collection Kashmir 1912 (Clauson & Macdonell); `catalogicodicumm21bodl_0` (Bodleian 1845) |
| Q3 | crossref_search.py | "Aufrecht catalogue Sanskrit manuscripts" --limit 10 | พบ Pingree, *Catalogue of Jyotiṣa Manuscripts in the Wellcome Library* (Brill 2004), DOI 10.1163/9789047412694 (+บทย่อย _005–_016); Who Was Who entry Aufrecht 10.1093/ww/9780199540884.013.u183343 — ไม่มี OA fulltext |
| Q4 | webfetch archive.org | q="catalogue of Sanskrit manuscripts" rows=25 | พบ 337 items; รายการเด่น: Bhandarkar Oriental Research Institute vols. 4/12/13/14/16, Adyar 1908 (`adyar-dc`), Calcutta Sanskrit College vols 4/10, Mysore & Coorg 1884 (`in.ernet.dli.2015.240140`), NW Provinces vol 9, Orissa State Museum 1954, **Śāstrī Nepal Durbar v2 1915** (ย้ายไป A-24) |
| Q5 | webfetch archive.org | q=Aufrecht+catalogus+catalogorum rows=10 | พบ 12 items: `b30094124_0001` (Part 1, 1891), `b30094124_0002` (Part 2, 1891/1896), `cataloguscatalogorumtheodoraufrechtpart31903_854_r` (Part 3, 1903), `in.ernet.dli.2015.56538` (Pt.2 1896), `kkfr_...` (Pt.2&3 Wiesbaden 1962 reprint) |
| Q6 | scholar_api.py (OpenAlex) | search "Aufrecht catalogue Sanskrit manuscripts" --limit 10 | **HTTP 429** — ล้มเหลว (ลองซ้ำ) |
| Q7 | document_harvester | https://archive.org/download/acataloguesansk00bhgoog/acataloguesansk00bhgoog.pdf | สำเร็จ 847 หน้า แต่ **LOW-TEXT (image-only, avg 2.9 chars/page)** |
| Q8 | document_harvester | https://archive.org/download/b30094124_0001/b30094124_0001.pdf | สำเร็จ 820 หน้า **PASS (avg 2290.8 chars/page)** |
| Q9 | document_harvester | https://archive.org/download/in.ernet.dli.2015.240140/2015.240140.Catalogue-Of_text.pdf | ไฟล์เปิดได้ 50 หน้า PASS แต่ตรวจเนื้อหาพบ **MISMATCH**: เนื้อหาจริงคือ *Proceedings of the California Academy of Sciences* Vol. XXVII (1951–53) — metadata อ้าง Rice "Catalogue of Sanskrit MSS in Mysore and Coorg 1884" ไม่ตรงกับไฟล์ → บันทึก CORRUPT-mismatch |
| Q10 | archive.org metadata API | /metadata/in.ernet.dli.2015.240140 | ยืนยัน: มี 2 PDF (`Image Container` + `Additional Text`), creator "Carl L.", date 1884 — metadata กับ content ขัดแย้งกันเอง |

## Downloaded (documents/)
1. `acataloguesansk00bhgoog.pdf` (S-270) — Bühler 1871 — LOW-TEXT (image-only)
2. `b30094124_0001.pdf` (S-271) — Aufrecht Catalogus Catalogorum Pt.1 1891 — PASS
3. `2015.240140.Catalogue-Of_text.pdf` (S-277) — CORRUPT (content mismatch)

## Located but NOT downloaded (ยังไม่ harvest)
- `catalogueofmanuscriptsinprivatelibrariesofgujaratetcbuhler_732_f` (Bühler, อีก scan)
- `clauson-and-macdonell-catalogue-of-the-stein-collection-of-sanskrit-mss.-from-ka` (1912)
- `catalogicodicumm21bodl_0` — Catalogi codicum manuscriptorum bibliothecae Bodleianae (1845)
- `cataloguscatalogorumtheodoraufrechtpart31903_854_r` (Aufrecht Pt.3 1903)
- Pingree Wellcome (Brill 2004) — ไม่มี OA
