# Query Log — Loop A-05 (วัสดุเขียนภูมิภาค: sāñcipāt / lokta / การเปลี่ยนผ่านวัสดุ)

> วันที่รัน: 2026-08-30 | เครื่องมือหลัก: scholar_api.py (OpenAlex), document_harvester.py, pdf_extractor.py, stealth_puppeteer.js
> หมายเหตุเทคนิค: OpenAlex ติด HTTP 429 (rate limit) ช่วงท้ายลูป — queries ภาษาเยอรมัน/ฮินดีบางส่วนสลับไปใช้ Crossref REST แทน

| # | Query | ภาษา | เครื่องมือ | ผลลัพธ์ | Source ใหม่ | หมายเหตุ |
|:---:|:---|:---:|:---|:---:|:---:|:---|
| 1 | sancipat manuscript Assam | EN | OpenAlex (scholar_api.py) | 3 | 1 | พบ Ali 2022 (มีอยู่แล้ว) + Mahi ink 2017 + IJRPP 2025 |
| 2 | Nepalese paper manuscripts lokta Daphne | EN | OpenAlex | 11 | 0 | ส่วนใหญ่ ethnobotany/forestry ไม่ใช่ codicology |
| 3 | manuscript material transition paper palm leaf India | EN | OpenAlex | 1766 | 0 | noise สูงมาก — query กว้างเกิน ไม่นำไปใช้ |
| 4 | Nepali handmade paper Daphne history | EN | OpenAlex | 14 | 2 | พบ Lokta JTSP 2021, Daphne bholua MRD 2017, Banko 2013, Panchalaksha JA 1990 |
| 5 | Asthadhyayi pancalaksana manuscript paper | EN | OpenAlex | 0 | 0 | ไม่พบ |
| 6 | hindi palm leaf manuscript talapatra (มี leading space) | EN/HI | OpenAlex | 0 | 0 | ไม่พบ |
| 7 | pothi Handschriften Indien Aufbau Deckel | DE | OpenAlex → HTTP 429 | 0* | 0 | *ยืนยันผ่าน Crossref: ไม่มีงานตรง keyword นี้ (พบ noise เท่านั้น) |
| 8 | Nepal Handschriften Papier Lokta | DE | OpenAlex → 429 → Crossref | 8 (noise) | 0 | พบ noise; "Beschreibung der Handschriften" (10.1515/9783110928068.801) ไม่เกี่ยวโดยตรง |
| 9 | pothi Handschriften Indien | DE | Crossref fallback | 8 | 0 | พบ "The Manichean Turkic Pothi-Book" (10.1524/aofo.1982.9.jg.145) — เกี่ยว pothi นอกอินเดีย |
| 10 | wooden board manuscript cover India birch | EN | OpenAlex → 429 | 0 | 0 | ยังไม่พบ (ต้องรันซ้ำเมื่อ rate limit คลาย) |
| 11 | cited-by 10.18520/cs/v123/i11/1359-1364 | EN | OpenAlex | 4 | 0 | forward chaining — ดู findings |
| 12 | guṭakā / lokta / Newari conservation (Crossref batch) | EN | Crossref REST | 15 | 1 | พบ Jnawali 2024 (lokta habitat) |

**สรุปลูป:** ผลตอบกลับ OpenAlex รวม ~1,830 รายการ (ส่วนใหญ่ noise จาก query 3) — คัดเลือกได้ 4 source ใหม่, ดาวน์โหลด PDF สำเร็จ 3 ไฟล์ (PASS ทั้งหมด)

## สถานะการ harvest ฉบับเต็ม (A-05)

| งาน | สถานะ | เหตุผล |
|:---|:---|:---|
| Ali 2022 Sāncipāt (Current Science) | ✅ PASS | currentscience.ac.in โดยตรง |
| Goswami 2017 Mahi ink (Current Science) | ✅ PASS | currentscience.ac.in โดยตรง |
| Chhetri 2021 Lokta surface treatment (JTSP) | ✅ PASS | jtsp.eu โดยตรง |
| Jain 2021 handmade paper review (Problemy Ekorozwoju) | ❌ ลบทิ้ง (CORRUPT) | ไฟล์ดาวน์โหลดได้ 1,100 bytes เท่านั้น — ไม่ใช่ PDF จริง |
| Panchalaksha manuscript paper 1990 (南アジア研究/JStage) | ❌ ลบทิ้ง (CORRUPT) | JStage ตอบ HTTP 500 ส่ง HTML error มาแทน PDF — ยังไม่พบฉบับเต็ม |
| Banko 2013 Daphne raw materials (NepJOL) | ❌ ยังไม่พบ | NepJOL HTTP 500 ทั้ง request และ Puppeteer — server ล่ม |
| Sharma 2017 Daphne bholua bark (MRD/BioOne) | ❌ ยังไม่พบ | BioOne บล็อก direct + puppeteer download ไม่สำเร็จ |
| Jnawali 2024 Lokta habitat (IOP ERC) | ⏸ metadata เท่านั้น | IOP ส่ง HTML แทน PDF (paywall/anti-bot) — รอ harvest ใหม่ |
| IJRPP 2025 herbs in traditional writings | ❌ ยังไม่พบ | ijrpp.com download ล้มเหลว |
