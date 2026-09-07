# Query Log — Loop 02 (พม่า: nissaya) — คืนสถานะ

วันที่: 2026-09-01 | Agent: Ledger Rebuilder (ไฟล์เดิมสูญหาย — สร้างใหม่จากสิ่งที่ยืนยันได้จริง)

## การตรวจสอบย้อนหลัง (Recovery verification)

| # | รายการ | เครื่องมือ | ผลลัพธ์ | หมายเหตุ |
|---|--------|-----------|---------|----------|
| 1 | 2023-burmese-nissaya-literature-manusya.pdf | pdf_extractor.py + pdfplumber | PASS 23 หน้า | ยืนยัน: MANUSYA 26 (2023) 1–23, Ven. Pannabhoga Herngseng, SSBU; DOI ปรากฏในตัวไฟล์ p. 1 |
| 2 | 2023-politics-of-pali-commentary-toronto-thesis.pdf | pdf_extractor.py + pdfplumber | PASS 550 หน้า | ยืนยัน: PhD thesis, Anthony Scott, Univ. of Toronto, 2023; ไม่มี DOI ในไฟล์ |
| 3 | DOI 10.1163/26659077-25010027 (Pannabhoga) | Crossref API (webfetch) | PASS | Brill/de Gruyter, MANUSYA 26.1 (2023) 1–23, CC BY 4.0 — ตรงกับ PDF |

## Skip log

- DOI ของ Toronto thesis — ไม่มี DOI ในตัวไฟล์และไม่ได้ระบุมาในภารกิจ → ข้าม (ไม่มโนขึ้นเอง)
- ไม่มีการค้นหาใหม่ (ห้ามดาวน์โหลดอะไรใหม่)
