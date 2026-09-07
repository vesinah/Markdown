# รายงานสรุประยะ A (Phase A Report) — 30 Foraging Loops
**วันที่ปิดเฟส:** 2026-08-25
**สถานะ:** สืบค้นครบ 30 ลูป / รอการตรวจสอบโดย Independent/Unbiased Agent ก่อนปิดเฟส
**ข้อมูลดิบรวม:** 30 ไฟล์ findings.md + 187 ไฟล์เอกสารฉบับเต็มที่กักเก็บในเครื่อง (documents/)

---

## ภาพรวมการดำเนินงานรายลูป

| Loop | ประเด็น | docs | ประเมินความอิ่มตัว |
|:---:|:---|:---:|:---|
| 01 | Alexandrian scholarship/critical signs | 4 | saturated; McNamee book = gap Phase B |
| 02 | Pre-14th Islamic/Jewish scholarship (Masorah, Geonic, mushaf annotations) | 9 | saturated; Fedeli/waqf-studies = gap |
| 03 | Pre-14th East/South Asian scholarship (Jingdian shiwen, Nirukta, wokototen, gugyeol origins) | 11 | saturated; Mao/Zheng Xuan + Panini = gap |
| 04 | Humanist philology 14th-16th c. (Poggio, Valla, Poliziano, Erasmus, Scaliger) | 5 | saturated; Poliziano collation wording = gap |
| 05 | Institutionalized scholarship 16th-18th (Mabillon, Bollandists, Simon, Bentley, Orientalism) | 8 | saturated; Papebroch/Horace 1711 primaries = gap |
| 06 | Modern philology (Wolf-Lachmann-Bédier-Maas-Pasquali-New Philology-digital turn) | 6 | saturated; Cerquiglini original/Lobel = gap |
| 07 | China zhu/shu/jian/jijie lineage + kaozheng | 6 | needs Phase B (jiajie layout dating, Cherniack 1994) |
| 08 | China Buddhist Yiqiejing yinyi (Xuanying/Huilin) + translation bureaus | 9 | needs Phase B (yiyu role titles, Tiantai mechanics) |
| 09 | Sanskrit-Tocharian/Sogdian bilinguals (CEToM THT 527-540, gloss fragments ~50) | 4 | needs Phase B (Malzahn/Peyrot typology) |
| 10 | Old Uighur/Tangut glossed texts (Qianziwen, Altun Yaruk, Khara-Khoto) | 5 | needs Phase B (direct interlinear evidence) |
| 11 | Dunhuang-Turfan multilingual ecosystem (PT1257, phrasebooks, colophon audit culture) | 7 | needs Phase B (Galambos full text) |
| 12 | Korea gugyeol typology/manuscripts/kunten-influence debate | 6 | needs Phase B (Cambridge Handbook ch., jeomto detail) |
| 13 | Japan kunten components/schools/NINJAL databases | 4 | needs Phase B (shoten/kakuhitsu, Edo prints, Vietnam) |
| 14 | Japan Buddhist canon copying + Yinyi transmission bridge + digital infra | 8 | needs Phase B (gozan-ban printed kunten) |
| 15 | Bali/Old Java maarti lontar tradition | 7 | needs Phase B (Creese/Rubinstein primaries) |
| 16 | Malay tarjamah/Pegon/kitab kuning (RAS Arabic 4, Sloane 2645) | 5 | needs Phase B (Inju-era dating, pegon chronology) |
| 17 | Myanmar nissaya definition/history/seven methods/contemporary practice | 4 | needs Phase B (Okell/Walker bodies, 1442 inscription) |
| 18 | Lanna tham script/DLNTM corpus scale/nissaya-vohara densities | 5 | needs Phase B (Thai-language sources, Hundius 1990) |
| 19 | Central Thai bitexts: Walker JAOS 2020 full text, 1482 Mahachat kham luang, khaam hvat decoding | 6 | needs Phase B (MCU practice, Lao item-level) |
| 20 | India-Vedic padapatha markers/pratisakhya/anukramani/Sayana/Staal | 7 | needs Phase B (pada dating debate, Kerala grantha) |
| 21 | Nepal NGMCP scale/Add.1049 (828 CE)/Add.1643 colophons/interlinear-insertion encoding | 7 | needs Phase B (Newari tikā layout placement) |
| 22 | Tibet sa bcad origin debates/dbu med/tsheg reforms/Mahavyutpatti decrees | 8 | needs Phase B (side-title Wylie term) |
| 23 | Carolingian Latin glossing (CCCM 237 O'Sullivan, Leiden VLF 48, St Gall Priscian, margins 47-50%) | 5 | needs Phase B (Reichenau Psalter shelfmark) |
| 24 | Vernacular gloss corpora (Würzburg 3,501+, Milan, St Gall 9,400+, Lindisfarne, Abrogans, Tatian columns) | 6 | needs Phase B (BStK Bavarian/Alemannic clarity) |
| 25 | Glossa ordinaria genesis/layout/print/law-gloss parallel/reportationes | 6 | needs Phase B (Smith interior, Andrée 2011) |
| 26 | Egypt: Clarysse bilingual stats, oldest Egyptian interlinear translations, Coptic-Arabic glossing | 6 | needs Phase B (Feder exact study, Miyagawa-Sawy full) |
| 27 | Homeric scholia zones/subscriptions/bT families/D-scholia lexical layer/Beck 2025 | 5 | needs Phase B (Erbse sigla scheme) |
| 28 | Latin scholia (Servius, Bernensia, Porphyrio/Pseudo-Acro)/Hermeneumata columnar layout/Festus/Nonius | 5 | needs Phase B (Juvenal scholia origins) |
| 29 | Islamic interlinear: Zaferani 1151-52 Persian, Ottoman tefsirli, Shah Wali Allah, Morisco, Ibn Tibbon | 6 | needs Phase B (Chagatai catalogs, Judaeo-Arabic Hebrew line) |
| 30 | Comparative infrastructure: Textual Microcosms/GlossIT/Gloss Corpus/Walker framework/Complutensian | 7 | needs Phase B (Hexapla anchoring, Chinese-world comparative) |

## ข้อค้นพบหลักระดับเฟส

1. **โครงสร้างเชิงเปรียบเทียบยืนยันได้จากหลักฐานจริง:** annotation apparatus ประเภท interlinear/marginal เกิดขึ้นอิสระในทุกอารยธรรมที่มีตัวบทศักดิ์สิทธิ์/ต่างภาษา — ฟังก์ชัน didactic + textual authority + transmission control พบร่วมทุกภูมิภาค (Alexandrian signs → Masorah → Jingdian shiwen/Yinyi → kunten/gugyeol → maarti/nissaya/bitexts → Glossa ordinaria)
2. **หลักฐานเชิงวันที่สำคัญที่ยืนยันแล้วในเฟสนี้:** Aristarchus hypomnemata (800 vols) ผ่าน Venetus A subscriptions; Cairo Codex 895 (colophon ถูกตั้งคำถาม C14); Zaferani Qur'an 1151-52; Add.1049 = 828 CE; Add.1643 = 1015 CE; Mahachat kham luang 1482; RAS Arabic 4 early 18th c.; Sloane 2645 = 1623/24; Abrogans c. 790; Würzburg mid-8th c.; St Gall Priscian 851
3. **โครงการดิจิทัลที่ยืนยันแล้ว:** Homer Multitext (5 โซนสโคเลีย), CEToM Vienna, stgallpriscian.ie v2.1, Gloss Corpus v1.0 (66 collections/24,872 glosses), GlossIT ERC 101123203, Corpus Masoreticum, Open Masorah, Manuscripta Coranicum (>50k pages), NINJAL WokotoDB/Shōshō Kunten DB, DLNTM→CrossAsia (dlntm.org dead), e-codices (3,049 mss), Bibliotheca Polyglotta Mahavyutpatti, Coptic Scriptorium, gloss-e IRHT (500k sentences)
4. **กรอบทฤษฎีที่พร้อมใช้สำหรับบท 4/17/18:** Walker bitext modes (interlinear/interphrasal; philological/exegetical/homiletic/poetic); Herngseng seven nissaya methods; von Lieven commentary typology (Egypt); Dickey columnar-vs-interlinear distinction (Greco-Roman)

## ช่องว่างหลักสำหรับ Phase B (สรุป 20 ลูปที่วางแผน)

1. จีน: jiajie/fushiyin print-layout dating + Cherniack 1994 (HJAS) — B01
2. จีนพุทธ: yiyu role titles + Tiantai mechanics + Japanese Yinyi reception — B02
3. สายไหม: Malzahn/Peyrot gloss typology + Uighur/Tangut direct interlinear evidence — B03/B04
4. Dunhuang: Galambos full text + Fujieda originals — B05
5. เกาหลี: Cambridge Handbook ch. + jeomto corpus + Myeongsim bogam — B06
6. ญี่ปุ่น: shoten/kakuhitsu + Edo print kunten + Vietnam analogues + gozan-ban — B07 (+B02 ส่วนญี่ปุ่น)
7. อินโดนีเซีย: Creese/Rubinstein primaries + pegon chronology + Inju Qur'an verify — B08/B09
8. พม่า: Okell/Walker bodies + Kirichenko/Handlin + 1442 inscription — B10
9. ไทย: MCU practice + Thai-language sources + Lao item-level — B11
10. อินเดีย: pada-pāṭha fine dating + Kerala grantha + ṭīkā page conventions — B12
11. เนปาล: Newari interlinear-tikā layout placement studies — B13
12. ทิเบต: side-title Wylie term + Scherrer-Schaub 2002 + vulgar scribes — B14
13. ยุโรปยุคกลาง: Reichenau Psalter shelfmark + BStK Bavarian/Alemannic + Smith 2009/Andrée 2011 — B15/B16/B17
14. อียิปต์: Feder exact study + P.Bingen ID + Amduat scholia — B18
15. กรีก-โรมัน: McNamee corpus + Erbse sigla + Venetus B shelfmark + Juvenal origins + Boethius glossae — B19
16. อิสลาม+เปรียบเทียบ: Chagatai catalogs + Judaeo-Arabic Hebrew interlinears + Hexapla anchoring — B20

## ข้อจำกัดที่พบ (ระบุตามจริง)

- websearch API และ OpenAlex เจอ HTTP 429/daily budget exhaustion เกือบทุกลูป → ทีมใช้ fallback: Crossref API, archive.org advancedsearch, DuckDuckGo lite, r.jina.ai proxy (บางกรณี), J-STAGE/Perseé HTML previews, GRETIL ตรง
- Wikipedia/Baidu Baike ใช้เฉพาะ keyword-finding — ไม่มีการอ้างอิงตรงทุกลูป
- แหล่งที่ถูกบล็อก (paywall/WAF/CAPTCHA): De Gruyter, Brill เฉพาะบาง chapter, JSTOR, academia.edu, Persée PDF endpoint, idp.bl.uk Cloudflare — บันทึก metadata/excerpt แทน และทำเครื่องหมาย "(ยังไม่พบข้อมูลยืนยัน)" ทุกจุดที่ไม่สามารถตรวจสอบได้

## ขั้นตอนถัดไป

1. [กำลังทำ] ส่ง Independent/Unbiased Agent ตรวจสอบไฟล์ ลิงก์ และความสอดคล้องทั้งเฟส (สุ่ม + ตรวจโครงสร้าง)
2. [รอ] Phase B: 20 Foraging Loops เจาะช่องว่างข้างต้น + Unbiased Agent
3. [รอ] Phase C: 10 Foraging Loops ปิดช่องว่างสุดท้าย + Saturation Check
4. [รอ] Outline Gate ฉบับเต็ม 18 บท
