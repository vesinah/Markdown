# รายงานสรุประยะ A (Phase A Report) — 15 Foraging Loops
**วันที่ปิดเฟส:** 2026-08-25
**สถานะ:** ค้นคว้าครบ 15 ลูป / รอการตรวจสอบโดย Independent/Unbiased Agent ก่อนปิดเฟส

---

## ภาพรวมการดำเนินงาน

| Loop | ประเด็น | ไฟล์ findings | documents | ประเมินความอิ่มตัว |
|:---:|:---|:---:|:---:|:---|
| 01 | Greek scholia & origins of annotation | มี | 3 | saturated |
| 02 | Carolingian Latin glossing | มี | 2 | needs Phase B (Reichenau Psalter, Glossa ordinaria) |
| 03 | Old Irish glosses (Wb./Ml./Sg.) | มี | 4 | needs Phase B (dating Würzburg/Milan, จำนวน glosses) |
| 04 | Anglo-Saxon (Lindisfarne/Rushworth) | มี | 2+ | saturated |
| 05 | OHG glosses (Abrogans/Tatian/Monsee) | มี | 3 | saturated |
| 06 | Masorah & Targumim | มี | 4 | saturated |
| 07 | Syriac & Arabic interlinear traditions | มี | 3 | saturated |
| 08 | Sanskrit padapāṭha & annotations | มี | 3 (+PDF) | saturated |
| 09 | Chinese zhu/shu/jiazhu & Buddhist glosses | มี | 3 (+PDF) | needs Phase B (Kanno, Yijing glosses) |
| 10 | Japanese kunten 訓点 | มี | 6 | saturated |
| 11 | Korean gugyeol 구결 + Khitan | มี | 5 | saturated |
| 12 | Tibetan annotations & Dunhuang MSS | มี | 7 | needs Phase B (Dalton/van Schaik typology) |
| 13 | Balinese maarti & kakawin | มี | 5 | saturated |
| 14 | Malay tarjamah & Pegon | มี | 4 | needs Phase B เฉพาะจุด (Nurtawab 2020 full text) |
| 15 | Lanna/Burmese nissaya | มี | 6 | saturated |

## ข้อค้นพบหลักระดับเฟส

1. **โครงสร้างเชิงเปรียบเทียบเกิดขึ้นจริง:** ทุกอารยธรรมพัฒนาระบบ annotation ประกอบตัวบทศักดิ์สิทธิ์/ต่างภาษา — ฟังก์ชัน didactic + textual authority ร่วมกันทุกภูมิภาค
2. **แหล่งดิจิทัลสำคัญที่ยืนยันแล้ว:** Homer Multitext (Venetus A), E-laborate/Huygens (Martianus), stgallpriscian.ie v2.1, e-codices (Cod. Sang. 904/911/56), Thesaurus Palaeohibernicus vol.1-2 (archive.org), Corpus Masoreticum (Heidelberg), Khan OAPEN Tiberian, CSIC Cairo Codex, Formigatti dissertation PDF (Hamburg), Keyworth 2020 (Hualin DOI), Li Silong 2022 (J-STAGE), NINJAL Shōshō Kunten DB, F1000 wokototen quantitative study, Chung & Whitman Cambridge kugyŏl chapter, BabelStone Khitan, Nishizawa/Fukuda sa-bcad (IBK J-STAGE), Bibliotheca Polyglotta Mahavyutpatti, Creese 1999 BKI OA, Hooykaas OAPEN, Gallop RAS Qur'an Malay, van Bruinessen 1990 BKI OA, Pannabhoga Manusya 2023, Walker JAOS 2020, DLNTM Lanna database
3. **ช่องว่างที่ยังไม่อิ่มตัว (สำหรับ Phase B):**
   - Reichenau Psalter glosses + Glossa ordinaria origins (Loop 02)
   - Dating/counts ของ Würzburg/Milan glosses + McCone Ériu 36 (Loop 03)
   - Kanno Hiroshi Lotus Sutra commentaries + Yijing translation glosses detail (Loop 09)
   - Dalton & van Schaik 2006 / van Schaik & Galambos 2012 Tibetan annotation typology + Mahavyutpatti statistics verification (Loop 12)
   - Nurtawab 2020 IMW full text + colophon terminology "tarjamah" (Loop 14)
   - Shan nissaya (Khur-Yearn) + tham script palaeography (Loop 15)

## ข้อจำกัดที่พบ

- websearch API เจอ HTTP 429 rate limit เป็นช่วง ๆ → ทีมใช้ DuckDuckGo HTML endpoint + OpenAlex/Crossref APIs + archive.org API เป็น fallback ตามสิทธิ์ที่ rules อนุญาต (custom scraping protocol)
- Wikipedia/Baidu Baike ถูกใช้เฉพาะ keyword-finding และระบุกำกับใน findings ว่าต้อง verify — ไม่มีการอ้างอิงตรง
- บางแหล่ง paywall (Nurtawab 2020 T&F) หรือ bot-blocked (CSIC, Goodman page) — บันทึก excerpts แทน

## ขั้นตอนถัดไป

1. [กำลังทำ] ส่ง Independent/Unbiased Agent ตรวจสอบไฟล์ ลิงก์ และความสอดคล้องทั้งเฟส
2. [รอ] Phase B: 10 Foraging Loops เจาะช่องว่างข้างต้น
3. [รอ] Saturation Check + Checkpoint A glossary batch ใหม่
4. [รอ] Outline Gate ครั้งที่ 2 (ยืนยันโครงร่างฉบับสมบูรณ์ก่อน drafting)
