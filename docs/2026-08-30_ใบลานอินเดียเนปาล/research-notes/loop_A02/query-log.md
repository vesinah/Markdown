# Query Log — Loop A-02 (การเตรียมวัสดุและวัฒนธรรมการคัดเลือกวัสดุ)

> วันที่รัน: 2026-08-30 | เครื่องมือหลัก: scholar_api.py (OpenAlex), document_harvester.py, pdf_extractor.py, DOAJ API, OpenAlex API

| Loop | Query | ภาษา | เครื่องมือ | ผลลัพธ์ (รายการ) | Source ใหม่ | Novelty % | หมายเหตุ |
|:---:|:---|:---:|:---|:---:|:---:|:---:|:---|
| A-02 | palm leaf manuscript preservation traditional treatment | EN | OpenAlex (cited-sort) | 20 | 1 | 5% | ผลส่วนใหญ่ food science; พบ "effect of traditional processing craft on hygroscopicity" (Herit Sci 2024) |
| A-02 | manuscript writing material selection India Sanskrit | EN | OpenAlex (relevance) | 15 | 2 | 13% | พบ Modes of Philology in Medieval South India (Brill, Wilder 2016); Indic Manuscript Cultures (มีอยู่แล้ว S-2017-vergiani-10) |
| A-02 | palm leaf seasoning curing writing | EN | OpenAlex (relevance) | 15 | 1 | 7% | ผลส่วนใหญ่ไม่ตรง; ยืนยันซ้ำ Vidyodaya 2022 + npj HS 2025 (มีใน A-01) |
| A-02 | Handschriften Indien Schreibmaterial | DE | OpenAlex (relevance) | 10 | 1 | 10% | พบ Die nordturkistanischen Sanskrit-Handschriften der Sammlung Pelliot (LMU epub 21375); Göttingen res doctae Teil 25 (10.26015/adwdocs-601) |
| A-02 | manuscrits feuille de palme préparation | FR | OpenAlex (relevance) | 10 | 0 | 0% | ผลไม่ตรงเลย (HAL thesis ด้านวัสดุศาสตร์ palm fiber) — FR ยังเป็น gap |
| A-02 | (harvest) Springer link.springer.com PDF 2 ไฟล์ | EN | document_harvester.py | 0 | 0 | - | ได้ JS challenge page → health check CORRUPT → ลบทิ้ง (record reason: Springer anti-bot) |
| A-02 | (harvest) springeropen counter/pdf → Puppeteer fallback | EN | document_harvester.py | 1 | 0 | - | ได้ homepage journal ไม่ใช่ article → ลบทิ้ง (record reason: redirect วนไม่จบ + fallback ได้ผิดเนื้อหา) |
| A-02 | (harvest) Europe PMC / DOAJ หา fulltext Herit Sci 10.1186/s40494-024-01402-2 | EN | bash (REST API) | 1 | 0 | - | DOAJ ให้ HTML fulltext; harvest ผ่าน Puppeteer ได้ข้อความเต็มบทความ (ไม่ใช่ PDF) — บันทึกเป็น HTML-fulltext |
| A-02 | (harvest สำเร็จ) currentscience.ac.in 1359.pdf + 0285.pdf | EN | document_harvester.py | 2 PDF | 2 | - | Sāncipāt 2022 + Pigment Analysis 2020 — health check PASS ทั้งคู่ |

**ผลสรุป A-02:** query 5 ชุด + การปรับกลยุทธ์ harvest 4 รอบ, source ใหม่ 6 รายการ (S-2024-yu-40 ถึง S-2016-wilder-45), PDF สำเร็จ 2 (PASS 2), CORRUPT/ผิดเนื้อหา 3 ไฟล์ (ลบทิ้งพร้อมเหตุผล), พบกลุ่มงาน conservation-science จีน (2024-2026) เป็น vein ใหม่สำหรับลูป A-03+
