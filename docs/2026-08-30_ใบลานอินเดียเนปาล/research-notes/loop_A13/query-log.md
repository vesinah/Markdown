# Query Log — Loop A-13: ธรรมเนียมการคัดลอกคัมภีร์ (copying rituals, re-copying cycles, jīrṇoddhāra)

> วันที่ 2026-08-30 | หมายเหตุ: OpenAlex (scholar_api.py) ติด HTTP 429 ทุก query → ใช้ Crossref REST (crossref_search.py) แทนตามแผนสำรอง

| # | เครื่องมือ | API/แหล่ง | Query | ผล |
|:--|:--|:--|:---|:---|
| 1 | scholar_api.py | OpenAlex | "manuscript copying ritual India sacred" | **429 Too Many Requests** |
| 2 | crossref_search.py | Crossref | "manuscript copying ritual India sacred" | HIT: **De Simini, *Of Gods and Books* (De Gruyter 2016)** DOI 10.1515/9783110478815 หลายบท (ch.1 "Manuscripts, Ritual, and the State", ch.3 "Manuscripts, Ritual, and the Medieval Literature on Dharma") — CC BY / BY-NC-ND |
| 3 | crossref_search.py | Crossref | "jirnoddhara manuscript renewal repair Sanskrit" | MISS ตรง (ไม่มีงาน title มีคำ jīrṇoddhāra) — ได้งานอื่นแทรก (Sanskrit Yasna, Bakhshālī) |
| 4 | crossref_search.py | Crossref | "temple renovation India jirnoddhara ritual" | HIT: **Davis, *The Hegemony of Heritage* ch.2 "Temple as Catalyst: Renovation and Religious Merit in the Field"** (UC Press Luminos OA, DOI 10.1525/luminos.46.c / 10.1515/9780520968882-005); *The Renewal of the Priesthood* (Minakshi temple renovation ritual, Princeton) |
| 5 | crossref_search.py | Crossref | "sacred text reproduction Hindu tradition merit" | MISS ส่วนใหญ่ (งานเชิง religion ทั่วไป) |
| 6 | crossref_search.py | Crossref | "copyist manuscript colophon date scribe India" | HIT บางส่วน: Qurboniev & Van den Bossche "A Scholarly Copyist: Early Ilkhanid Intellectual Networks through Two Colophons" (*Literary Snippets* 2024, OA) — เชิงเปรียบเทียบ |
| 7 | crossref_search.py | Crossref | "scripture worship pujA copying Hindu Tantra manuscript cult" | HIT: ยืนยัน De Simini 2016 เป็นแกน (book review Brick 2019 JSALL) |
| 8 | crossref_search.py | Crossref | "renewal consecration old image Hindu ritual renovation temple South India" | HIT: Ślączka, *Temple Consecration Rituals in Ancient India* (Brill 2007, Kāśyapaśilpa); *Consecration Rituals in South Asia* (Brill 2017) |
| 9 | crossref_search.py | Crossref | "palm leaf manuscript copying merit Buddhist India Nepal" | HIT: **Keyworth, "Copying for the Kami"** (JJRS 44.2, 2017, OA); Nishanthi 2025 (Kelaniya conf.); Nishanthi & Wijayasundara 2022 (VJHSS) |
| 10 | crossref_search.py | Crossref | "scripture copying Buddhist merit sutra transcribe" | HIT ฝั่งญี่ปุ่น/จีน: Hasegawa "Sutra Copying in the Song Dynasty"; Aoki "Groups of People Who Gathered for Sutra Copying in the Isshinji Temple" — บริบทเปรียบเทียบ |
| 11 | document_harvester | JJRS/Nanzan | harvest Keyworth PDF (หลาย URL pattern) | nfile/4621 → 404; /journal/article/4621/pdf → 404; สำรวจ back-issue tree → พบ path จริง **/journal/6/article/1459/pdf/download** → PDF 30 หน้า PASS |
| 12 | crossref_search.py | Crossref | "Orr Words for Worship Tamil Sanskrit medieval temple inscriptions" | HIT: Orr 2013 (IFP/OpenEdition, OA) |
| 13 | document_harvester/Puppeteer | OpenEdition | harvest Orr | รอบแรกโดน Anubis challenge; Puppeteer full-JS → ได้ fulltext 63 "pages" PASS |
| 14 | dg_inpage_fetch.js | De Gruyter | Davis ch.2 PDF | รอบแรก harvester ได้ JS-challenge page (CORRUPT ลบทิ้ง); in-page fetch ผ่าน html→pdf → 20 หน้า PASS |
| 15 | crossref_search.py | Crossref | "manuscript culture India worship of books Sarasvati punya scribe salutation" | MISS/HIT น้อย — ยืนยันว่างานระดับ "ธรรมเนียมการคัดลอกเป็นพิธี" ใน EN กระจุกอยู่ที่ De Simini/Ciotti/Colas |
| 16 | dg_inpage_fetch.js | De Gruyter | Ciotti "Ontological Approach ... Pothi Manuscript" (*Exploring Written Artefacts* 2021, 10.1515/9783110753301-042) | PDF 24 หน้า PASS — ได้ vidyādāna/rebirth framing |
| 17 | dg_inpage_fetch.js | De Gruyter | van der Meij "Colophons in Palm-Leaf Manuscripts from Bali and Lombok" (Syntax of Colophons ch.10) | PDF 42 หน้า PASS (79 MB เพราะรูป) — ธรรมเนียมคัดลอก lontar + Saraswati invocation |
| 18 | document_harvester | DOI/VJHSS | Nishanthi & Wijayasundara 2022 (10.31357/fhss/vjhss.v07i02.06) | โดเมน sjlibrary.lk / vjhss.sjp.ac.lk **ERR_NAME_NOT_RESOLVED**; ผ่าน doi.org redirect → landing page abstract (PASS แต่เฉพาะ abstract) |
| 19 | crossref_search.py | Crossref | "manuscript Hindu ritual script sacred writing India scribe punya" ฯลฯ (ตรวจซ้ำ) | MISS — ไม่มีงาน fulltext EN เรื่อง jīrṇoddhāra ของคัมภีร์โดยเฉพาะ |

## สรุป route ที่ใช้ได้/ใช้ไม่ได้ (วันนี้)
- OpenAlex: 429 ทั้งหมด
- Crossref: ปกติ
- De Gruyter: dg_inpage_fetch.js (html→pdf?licenseType=open-access) = route หลักที่สำเร็จ
- OpenEdition: Anubis → ต้อง Puppeteer รอ JS
- Nanzan JJRS: ต้องหา path /journal/6/article/{id}/pdf/download
- Vidyodaya (sjp.ac.lk): DNS ล่ม
