# Query Log — Loop 03 (สิงหล: sannaya + การอนุรักษ์ใบลาน) — คืนสถานะ

วันที่: 2026-09-01 | Agent: Ledger Rebuilder (ไฟล์เดิมสูญหาย — สร้างใหม่จากสิ่งที่ยืนยันได้จริง)

## การตรวจสอบย้อนหลัง (Recovery verification)

| # | รายการ | เครื่องมือ | ผลลัพธ์ | หมายเหตุ |
|---|--------|-----------|---------|----------|
| 1 | 2022-preservation-palm-leaf-manuscripts-sri-lanka.pdf | pdf_extractor.py + pdfplumber | PASS 16 หน้า | ยืนยัน: VJHSS 7.2 (2022) 81–96, Nishanthi & Wijayasundara, USJ library |
| 2 | 2023-first-sinhala-tripitakaya-translation-dezoysa.pdf | pdf_extractor.py + pdfplumber | PASS 18 หน้า | ยืนยัน: VJHSS 7.2 (2022) 28–45, Mahinda Deegalle — **ชื่อไฟล์ระบุ 2023 แต่ตัวบทเป็น 2022** |
| 3 | c19-ras-brahmajala-sutta-sannaya-palmleaf.pdf | pdf_extractor.py + pdfplumber | PARTIAL — 38 หน้า แต่ได้เพียง ~109 คำ | **IMAGE-PDF (LOW-TEXT)** — OCR ฝังตัวให้ glyph สิงหลเศษ ๆ ไม่พออ่าน; ต้องอ่านภาพรายหน้าภายหลัง |
| 4 | DOI 10.31357/fhss/vjhss.v07i02.06 (Nishanthi) | Crossref API (webfetch) | PASS | VJHSS 7.2, pp. 81–96 — ตรงกับ PDF |
| 5 | DOI 10.31357/fhss/vjhss.v07i02.03 (Deegalle) | Crossref API (webfetch) | PASS | VJHSS 7.2, pp. 28–45, published 2022-07-06 — ยืนยันปี 2022 (ตามตัวบท ไม่ใช่ชื่อไฟล์) |

## Skip log

- c19-ras-brahmajala-sutta-sannaya-palmleaf.pdf — พยายามสกัดข้อความ (LOW-TEXT, 109 คำ) → หยุดบันทึกสถานะ image-pdf พร้อม TODO อ่านภาพรายหน้า (ไม่มโน metadata)
- ไม่มีการค้นหาใหม่ (ห้ามดาวน์โหลดอะไรใหม่)
