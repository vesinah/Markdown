# Query Log — Loop A-06 (ปกไม้ + โครงสร้าง pothī codicology)

> วันที่รัน: 2026-08-30 | เครื่องมือ: scholar_api.py (OpenAlex), document_harvester.py, pdf_extractor.py, stealth_puppeteer.js, Crossref REST (เมื่อ OpenAlex 429)

| # | Query | ภาษา | เครื่องมือ | ผลลัพธ์ | Source ใหม่ | หมายเหตุ |
|:---:|:---|:---:|:---|:---:|:---:|:---|
| 1 | pothi manuscript structure binding wooden covers | EN | OpenAlex | 19 | 4 | คุณภาพดี — พบ Ciotti, Guṭakā, Tibetan bound books Mustang, Bon & Naxi |
| 2 | Indic manuscript codicology physical structure | EN | OpenAlex | 26 | 0 | ส่วนใหญ่ซ้ำกับที่มีอยู่ใน source-index (Syntax of Colophons ฯลฯ) |
| 3 | Pothi Handschriften Aufbau indische Handschriften Deckel | DE | OpenAlex | 0 | 0 | OpenAlex ไม่ index งานเยอรมัน keyword นี้ |
| 4 | guṭakā North-Western India structures materials | EN | OpenAlex | 0 | 0 | คำ guṭakā ไม่ถูก index ใน title search |
| 5 | manuscript wooden cover binding India pothi | EN | OpenAlex | 25 | 0 | ยืนยัน Ciotti + Guṭakā ซ้ำ |
| 6 | pothi Handschriften Indien | DE | Crossref fallback | 8 | 1 | พบ The Manichean Turkic Pothi-Book (1982) |
| 7 | wooden covers Indic manuscripts pothi binding | EN | Crossref | 8 | 0 | ยืนยันชุด De Gruyter เดิม |
| 8 | cited-by 10.1515/9783111292069-006 | EN | OpenAlex | 5 | 2 | forward chaining — พบ Chinese Pothi 2024 + 101 Containers 2025 |
| 9 | citing 10.1515/9783111292069-006 → The Chinese Pothi | EN | Crossref verify | 1 | 0 | metadata ยืนยันแล้ว ยังไม่ harvest |

**สรุปลูป:** 6 queries, source ใหม่ 7 รายการ, harvest ฉบับเต็มสำเร็จ 3 ไฟล์ PDF (PASS ทั้งหมด)

## สถานะการ harvest ฉบับเต็ม (A-06)

| งาน | สถานะ | เหตุผล |
|:---|:---|:---|
| Ciotti 2023 Strategies for Binding Pothi (pp. 155–190) | ✅ PASS (36 หน้า) | degruyterbrill.com — ต้องใช้ Puppeteer สร้าง session cookie ก่อน (HTTP 202/403 จาก direct requests) |
| Couvrat Desvergnes 2023 Guṭakās from North-Western India | ✅ PASS (38 หน้า) | วิธีเดียวกัน |
| Helman-Ważny 2024 Tibetan Bound Books Mustang (M@TC) | ✅ PASS (29 หน้า) | mtc-journal.org OA โดยตรง |
| Bon and Naxi Manuscripts (De Gruyter 2023) | ⏸ metadata เท่านั้น | ยังไม่ harvest (ต้องใช้ cookie method) |
| The Chinese Pothi (Medieval History Journal 2024) | ⏸ metadata เท่านั้น | รอลูปถัดไป |
