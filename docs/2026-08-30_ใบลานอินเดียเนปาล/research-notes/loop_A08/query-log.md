# Loop A-08 Query Log — Sarasvathi Mahal Library Thanjavur และห้องสมุดราชสำนัก

วันที่: 2026-08-30 | เครื่องมือหลัก: Crossref REST, webfetch (Persée), document_harvester.py

| # | เครื่องมือ/Query | ผลลัพธ์ |
|:---:|:---|:---|
| 1 | `crossref_search.py "Sarasvathi Mahal library Thanjavur manuscripts" --limit 15` | ไม่เจอตรง ๆ (noise Javanese/Lambeth) ยกเว้น 10.66219/sakha... "Marathas of Thanjavur: Preserver of the Ancient Manuscripts" (2025) — ไม่มี OA link |
| 2 | `crossref_search.py "Serfoji Tanjore Maratha manuscripts" --limit 15` | พบชุด Serfoji II: Nair 2005 (JRAS, 10.1017/s1356186305005298), Peterson 1999 (J. Hist. Collections, 10.1093/jhc/11.1.71), Nair 2014 (book 10.4324/9781315816081), Rastén 2009 |
| 3 | `crossref_search.py "bibliothèque Sarasvati Mahal manuscrits Tanjore" --limit 15` (FR) | **FR hit สำคัญ**: 10.37896/jxu14.9/155 (EN แต่มี title ตรง); FR แท้ยังหายากบน Crossref |
| 4 | webfetch `https://www.persee.fr/search?q=Sarasvati+Mahal` | **ใช้ได้** — 1,066 ผลลัพธ์; FR เด่น: Wilden (BEFEO 2010) "T. S. Gangadharan" note; Houben (Annuaires EPHE 2004) "Sources et histoire de la tradition sanskrite"; Chevillard (BEFEO 2007) "T. V. Gopal Iyer (1926-2007)"; Chevillard (BEFEO 1992) Beschi; ยืนยัน Tanjore Sarasvati Mahal Series (เลข 86, 133) มีการอ้างถึงแพร่หลาย |
| 5 | `crossref_search.py "Sarasvati Mahal" --limit 10` | ยืนยัน 10.37896/jxu14.9/155 เป็น title match ที่ดีที่สุด |
| 6 | harvest `10.37896/jxu14.9/155` → Crossref link = Google Drive ของผู้แต่ง | Drive `uc?export=download` ล้มเหลว (ERR_ABORTED) → ใช้ `drive.usercontent.google.com/download?id=...&export=download` ตรง | **สำเร็จ PDF 8 หน้า → PASS** (sarasvati_mahal_serfoji_jxu2020.pdf) |
| 7 | `crossref_search.py "Rajah Serfoji Sarasvati Mahal library palm leaf" --limit 10` | ยืนยันชุด Xidian/serfoji; ไม่พบเพิ่ม |
| 8 | webfetch SAGE `10.1177/034003529402000310` (Samuel 1994, IFLA J) | เข้าถึงได้เฉพาะ landing page — **paywall** (Restricted access), ไม่มี OA; บันทึก metadata ไว้ |
| 9 | `crossref_search.py "Nair Serfoji Tanjore centre of calculation" --limit 3` | ยืนยัน Nair 2005 + book 2014 |
| 10 | `crossref_search.py "Shaw Tanjore Aesop Marathi printing" --limit 3` | พบ Shaw 1978 "The Tanjore 'Aesop' in the Context of Early Marathi Printing" (*The Library*, 10.1093/library/s5-xxxiii.3.207) — ไม่มี OA link บน Crossref (อย่า harvest ตอนนี้) |
| 11 | webfetch Persée doc URL ที่คาด (befeo_..._2007_num_94_1_5303) | **404 จริง** — ตัวเลข id ต้องเดาจาก search ไม่ได้ |
| 12 | harvest `10.3406/befeo.1992.1813` (Chevillard Beschi FR) | Crossref ไม่มี pdf link; ลอง `docAsPDF` → ได้ PDF แต่เป็น **altcha block page** → CORRUPT-logic ลบทิ้ง; scrape หน้า `/doc/` ตรงได้ **abstract + 2 ย่อหน้าแรกเต็มภาษาฝรั่งเศส** (www_persee_fr_doc_befeo_0336_1519_1992_num_79_1_18.txt) |
| 13 | Semantic Scholar cited-by `10.1017/s1356186305005298` (Nair 2005) | 13 citations (Crossref is-referenced-by-count=13) → รายการ: Venkateswaran ("...Of real use to the people" 2011, IESHR), Wengrow 2010, Andrade 2010, Venkataraman 2019 (Ragoonatha Charry), ฯลฯ |

## Citation chaining (ลูปนี้)
- งานสำคัญที่สุด: Nair 2005 (Serfoji II as 'Centre of Calculation') — cited-by 13 ผ่าน Crossref/S2 API → ทางแตก: Venkateswaran, T.V. (2011) "'...Of real use to the people': Science, technology and culture in the Tanjore court of Serfoji II" *Indian Economic & Social History Review* 48(4) DOI 10.1177/001946461104800402; Venkateswaran (2019) "Ragoonatha Charry and His 'Scientific' Pañcāṅga" (Springer, 10.1007/978-981-13-3645-4_20)
- หมายเหตุ FR: งาน FR แท้ที่พบ = Chevillard 1992 (BEFEO 79-1: 77–88) และ Houben 2004 (EPHE annuaire) — ทั้งคู่อ้างถึงห้องสมุด Sarasvati Mahal แต่ full-text OA บน Persée ยังเข้าไม่ได้ (altcha/paywall) — harvest เฉพาะ abstract+opening
