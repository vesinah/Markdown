# Query Log — Loop 01 (ไทย: Siam + Lanna bitexts) — คืนสถานะ

วันที่: 2026-09-01 | Agent: Ledger Rebuilder (ไฟล์เดิมสูญหาย — สร้างใหม่จากสิ่งที่ยืนยันได้จริง)

> ข้อจำกัด: query-log ชุดเดิมหาย จึงไม่สามารถบันทึก query เดิมได้ รายการนี้บันทึกเฉพาะการตรวจสอบย้อนหลังจากไฟล์ PDF ที่มีจริง + DOI ที่ทราบ

## การตรวจสอบย้อนหลัง (Recovery verification)

| # | รายการ | เครื่องมือ | ผลลัพธ์ | หมายเหตุ |
|---|--------|-----------|---------|----------|
| 1 | 2020-walker-indic-vernacular-bitexts-thailand.pdf | pdf_extractor.py + pdfplumber | PASS 26 หน้า | ยืนยัน: JAOS 140.3 (2020), 675–699, Trent Walker, Stanford |
| 2 | 2002-curricular-canon-northern-thailand-laos.pdf | pdf_extractor.py + pdfplumber | PASS 40 หน้า | ยืนยัน: MANUSYA Special Issue No. 4 (2002), 20–59, Justin McDaniel |
| 3 | DOI 10.7817/jameroriesoci.140.3.0675 (Walker) | Crossref API (webfetch) | PASS | title/journal/volume/pages ตรงกับ PDF |
| 4 | DOI 10.1163/26659077-00504003 (McDaniel 2002) | Crossref API (webfetch) | PASS | MANUSYA vol. 5 issue 4, pp. 20–59, ตรงกับ PDF |

## Skip log

- ไม่มีการค้นหาใหม่ (ภารกิจ = สร้างไฟล์ใหม่จากไฟล์ที่มีจริงเท่านั้น; ห้ามดาวน์โหลดอะไรใหม่)
