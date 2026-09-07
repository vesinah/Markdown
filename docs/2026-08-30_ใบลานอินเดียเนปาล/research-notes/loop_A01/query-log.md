# Query Log — Loop A-01 (วัสดุการเขียน: ใบลาน + ภูรชบัตร)

> วันที่รัน: 2026-08-30 | เครื่องมือหลัก: scholar_api.py (OpenAlex), document_harvester.py, pdf_extractor.py, webfetch
> หมายเหตุเทคนิค: default sort ของ scholar_api.py คือ cited_by_count:desc ทำให้ผลแรกไม่ relevant — รันซ้ำด้วย `--sort relevance_score:desc` ทุก query

| Loop | Query | ภาษา | เครื่องมือ | ผลลัพธ์ (รายการ) | Source ใหม่ | Novelty % | หมายเหตุ |
|:---:|:---|:---:|:---|:---:|:---:|:---:|:---|
| A-01 | palm leaf manuscript material preparation | EN | OpenAlex (scholar_api.py, cited-sort) | 20 | 0 | 0% | ผล irrelevant เกือบหมด (food/plant science) — เจอ Wiland Part 1+2 แวบแรก |
| A-01 | palm leaf manuscript material preparation (relevance-sort) | EN | OpenAlex | 20 | 2 | 10% | พบ Wiland 2022 Part 1 + Part 2 (JIC) |
| A-01 | talipot palm leaf writing material | EN | OpenAlex (relevance) | 15 | 6 | 40% | พบกลุ่ม conservation science จีน (Polymers/Molecules/Forests/npj HS), Nipah or Gebang (Brill), Vidyodaya |
| A-01 | birch bark manuscript Betula utilis Himalaya | EN | OpenAlex (relevance) | 15 | 1 | 7% | ส่วนใหญ่ ecology — พบ Loshali 2025 (JAPS, Bhojpatra review) |
| A-01 | palmyra palm manuscript South India | EN | OpenAlex (relevance) | 15 | 0 | 0% | ผลเป็น palm agriculture ทั้งหมด — ยังไม่พบงาน Tamil โดยตรง (gap) |
| A-01 | Palmblatthandschriften | DE | OpenAlex (relevance) | 10 | 2 | 20% | พบ Ehlers, Indische Handschriften Teil 15 (IIJ review) + JRAS review 2007; Zenodo "Catalogues of Indic Manuscripts" |
| A-01 | ताड़पत्र हस्तलेख (tadapatra hastalekh) | SA/HI | OpenAlex | 0 | 0 | 0% | ยังไม่พบใน OpenAlex — ต้องค้นผ่าน web .ac.in ต่อ |
| A-01 | bhurjapatra | EN/SA | OpenAlex (relevance) | 10 | 1 | 10% | พบ Zenodo "BHURJAPATRA (BETULA UTILIS) IN AYURVEDIC CLASSICAL LITERATURE: A REVIEW" (2026) + IJAPR 2022 |
| A-01 | J-Stage search "palm leaf manuscript" (URL GET) | EN/JA | webfetch | 0 | 0 | 0% | J-Stage GET-search ไม่ทำงาน (No article found) — JA ใช้ผลสะสมจาก A-00 (Tanaka, Yoshizaki) แทน |
| A-01 | (harvest) MDPI Forests 1775, UNL libphilprac 1397, Nature npj HS | EN | document_harvester.py | - | 0 | - | MDPI 403 + Puppeteer ไม่มี Chrome; UNL 403; Nature 404 redirect idp.nature.com — harvest ไม่สำเร็จ (เก็บ metadata อย่างเดียว) |
| A-01 | (harvest สำเร็จ) Brill BKI 171, JAPS 4512, SJP/VJHSS 5948, IJAPR 2281 | EN/NL | document_harvester.py | 4 PDF | 4 | - | PDF health ทั้งหมด PASS (ตรวจ --check แล้ว) |

**ผลสรุป A-01:** query 9 ชุด, source ใหม่ 12 รายการ (S-2022-wiland-28 ถึง S-2026-zenodo-39 ใน findings.md), harvest สำเร็จ 4 PDF (PASS 4, CORRUPT 0), citation chaining จาก Wiland Part 1 พบงานอ้างถึง 26 ชิ้น (ส่งต่อให้ลูป A-02 และ A-04)
