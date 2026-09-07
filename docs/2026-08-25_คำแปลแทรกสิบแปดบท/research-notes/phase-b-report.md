# รายงานสรุประยะ B (Phase B Report) — 20 Foraging Loops เจาะลึก
**วันที่ปิดเฟส:** 2026-08-25
**สถานะ:** สืบค้นครบ 20 ลูป / รอการตรวจสอบโดย Independent/Unbiased Agent ก่อนปิดเฟส
**ข้อมูลดิบรวมเพิ่มในเฟสนี้:** 20 ไฟล์ findings.md + 105 ไฟล์เอกสารฉบับเต็ม (รวมโครงการสะสม: 292 documents)

---

## ภาพรวมการดำเนินงานรายลูป

| Loop | ประเด็น | docs | ผลการปิดช่องว่าง |
|:---:|:---|:---:|:---|
| B01 | China jiajie/fushiyin print layout + Cherniack 1994 | 5 | ปิดหลัก — ได้ primary text 九經三傳沿革例 + Tsien chronology; เหลือ decade-scale claim |
| B02 | Translation bureau roles + Guanding pipeline + Japan Yinyi reception | 6 | ปิดหลัก — fanchang role-list จาก T2131 primary; Ruiju myogi sho ~1,300 quotes |
| B03 | Tocharian gloss typology (Malzahn 2007b/Peyrot Notes I-II) + CEToM 51 gloss fragments | 5 | ปิดหลัก — placement typology จาก page-cited editions; negative result Old Turkish-Sogdian |
| B04 | Uighur/Tangut direct interlinear evidence + Pearl-in-the-Palm layout | 5 | ปิด 4/5; Tangut blockprint interlinear ยัง partial |
| B05 | Galambos full text (Wayback EPUB) + Takata 2019 + schoolroom cluster + Tangut-not-in-Cave-17 | 3 | ปิดครบ 4/5 targets |
| B06 | Korea: Cambridge Handbook ch.6 identified; jeomto census 14 sources; hyeonmun term = documented negative | 5 | ปิด 1,2,4 ครบ; Myeongsim bogam = negative |
| B07 | Japan: shoten four-corner mapping closed; kakuhitsu 3,250+ items; Vietnam POSITIVE (giải âm genre, Nguyễn 2025) | 5 | ปิดครบ 5/5 |
| B08 | Bali: Rubinstein 2000 KITLV Verh.181 DOI; Pusdok maarti corpus cards (Ramayana 154 leaves etc.); pasantian term verified | 7 | ปิดหลัก; Wikisource-specific claims ยังต้อง institutional check |
| B09 | Malay: Sultan Alauddin Qur'an = documented negative; new pre-1610 pegon candidate (Studia Islamika 2026); A.51/W.277 detail via Archipel OA | 5 | ปิดหลัก |
| B10 | Myanmar: Walker body firsthand + Bode 1909 Appendix to Chapter III (1442 inscription, list numbered 1-295+, exactly 15 nissaya items) + Shwezigon Mon nissaya + Pruitt EFEO no.174 | 5 | ปิดครบเกินเป้า (bonus Epigraphia Birmanica) |
| B11 | Thailand/Lao: Laulertvorakul 2003 full text; Sripum-Walker abstract; Poolrak = Assanee Chula MA 2012; DLLM no-nissaya-term observation | 5 | ปิด 4/5; MCU curriculum = documented negative |
| B12 | Vedic: Bronkhorst pada-redaction argument full text; Kerala Whish/Burnell grantha+Malayalam RV pada mss; pratisakhya scans; Sarvanukramani structure | 5 | ปิด 4/5; interleaved-folio tikā = honest negative |
| B13 | Nepal: "In the margins" project resolved (Manuskriptkulturen subproject → Formigatti dissertation 2015 full harvest); tripāṭha/pañcapāṭha terms; Suśruta NAK 5/333 (1465) | 6 | ปิดครบ 5/5 |
| B14 | Tibet: mchan/mchan bu verified via RYwiki; Scherrer-Schaub 2002 full harvest; Dotson TUFS parsed; per-manuscript scripts quoted; side-title term = documented negative | 5 | ปิด 4/5 |
| B15 | Carolingian: CCCM III-IX never published (Brepols live listing); palace-school framing verbatim; VLF 48 edition layers; Notker Cod. Sang. 21; Reichenau Psalter Rh.34 = phantom monument correction | 6 | ปิดหลัก + แก้ข้อผิดพลาดสำคัญจาก Phase A |
| B16 | Vernacular corpora: Reichenauer Glossen RESOLVED (Gallo-Romance, Karlsruhe Aug. perg. 248 = BStK 317); McCone pp.89-90 verbatim; O Neill 2002 exact title; Krotz/Müller Monsee De Gruyter 2026; Lindisfarne review depth | 6 | ปิดครบ 6/6 |
| B17 | Glossa ordinaria: Smith subtitle corrected (+TOC ch.3 Layout pp.91-139); Andree 2011 exact title MS 73:217-260; Froehlich LQ 23(2009):29-48 double-anchored; gloss-e stats updated 2026 + GLOSSEM 5,352 witnesses | 5 | ปิด 4/6 |
| B18 | Egypt: Feder CCE section 2.1 CLOSED (Chester Beatty VII Isaiah TM 61951 etc.); Miyagawa-Sawy LiTGaP 2020 abstract; von Lieven typology verbatim; Osing 1998 verified; P.Bingen = documented negative | 5 | ปิด 4/5 |
| B19 | Greco-Roman: McNamee title corrected (Sigla... 1992 OA scan, ~300 papyri); sigla families (Villoison/Allen/West); Venetus B Z.453 confirmed; Juvenal scholia vetera = Montpellier H.125 Pithoeanus; Love Boethius chapter; Dickey columnar CQ 65.2 | 6 | ปิดครบ 6/6 |
| B20 | Islamic/comparative: Chagatai Rylands trilingual digitized 2026 + Peacock full PDF; Judaeo-Arabic Hebrew-gloss lines = honest negative; Hexapla six columns anchored (Salvesen TSAJ 58); Kin ch.2 landing captured; Ottoman first print = Sekerzade 1874 | 5 | ปิด 5/6 |

## ข้อค้นพบสำคัญระดับเฟส

1. **การแก้ไขความผิดพลาดจาก Phase A ที่มีคุณค่าสูง:** "Reichenau Psalter/OHG" ไม่มีจริงตามที่เข้าใจ — Reichenauer Glossen เป็น glosses Gallo-Romance บน Karlsruhe Aug. perg. 248 (BStK 317); OHG residue เป็น Alemannic; มาตรฐาน OHG psalter จริงคือ Cod. Sang. 916/Notker
2. **Primary texts ที่ได้เพิ่มใน Phase B:** Fanyimingyi ji T2131 bureau-role list; Guanding Mohe zhiguan reportatio markers; 九經三傳沿革例; Bode 1909 library list (15 nissaya items); Formigatti 2015 dissertation 272 pp.; Scherrer-Schaub 2002 82 pp.; Galambos 2020 full book; Peacock JAIS 2025 full PDF; McNamee 1992 OA scan
3. **Documented negatives (สำคัญเทียบเท่า positive):** hyeonmun seokdokgugyeol term; Myeongsim bogam eonhae; Sultan Alauddin Qur'an; MCU nissaya curriculum source; Judaeo-Arabic Hebrew-glossed lines; Old Turkish-Sogdian word-level glosses; FOR 963 frame; CCCM III-IX; pamurtian term
4. **Vietnam breakthrough:** giải âm genre + Luận ngữ ước giải (1839 AB.270/3) + Nguyễn Thị Thu Huyền 2025 = ปิด comparative East Asian triangle (kunten-gugyeol-giai am)
5. **Digital infrastructure updates 2026:** gloss-e 500k sentences/46k pages + GLOSSEM 5,352 dated witnesses (peak 3,342 in 13th c.); Rylands Arabic 760-773 digitized Feb 2026; Monsee Fragments De Gruyter edition Feb 2026

## ช่องว่างที่เหลือสำหรับ Phase C (10 ลูป)

1. C01: Cherniack layout passages in her own words + Huang Shanfu Shiji dating + visual scan of Song jiajie editions
2. C02: Issaikyo collator-role colophon transcriptions + Huayan shiki author + Chen Jinhua title verification
3. C03: Malzahn 2007b/Peyrot full PDFs (login/print-only channels) + Corbie-vs-Soissons archetype for Latin gloss collections
4. C04: Tangut blockprint interlinear direct evidence + W.277 vs W.278 shelfmark resolution
5. C05: Korea/Japan residual: 명심보감언해 final attempt + gugyeol OCR/AI projects when search recovers + Edo woodblock 加点 study
6. C06: Bali residual: Citrawati & Putra 2024 full text (institutional verification of saka 1814 claims) + Sutasoma maarti + van der Meij 2017
7. C07: Thai residual: Thai-script Poolrak thesis title + Monks-Nissaya-2017 lead + Lao vohara item-level
8. C08: Greco-Roman residual: Erbse prolegomena siglum table itself + McNamee 2007 count + Hornung 1967 Amduat scholia content
9. C09: Glossa ordinaria residual: numeric interlinear/marginal space ratios + Melanchthon 1528 Basel verification + quantitative layout studies
10. C10: Cross-cutting synthesis loop: compile master comparison table across all traditions (layout types, functions, dating anchors, key scholars per region) from local data + fill any single remaining citation holes found during compilation

## ข้อจำกัดที่พบ

- websearch/OpenAlex/Semantic Scholar rate-limits ต่อเนื่องทั้งเฟส (429/budget) — fallback ใช้ Wayback Machine, r.jina.ai proxy, curl+Brave HTML, Crossref API, archive.org scans, J-STAGE landing pages
- Paywalls ที่ไม่สามารถข้ามได้อย่างถูกกฎ: JSTOR bodies, Cambridge Core, Brill chapters, Duke UP, Mediaeval Studies, tandfonline
- Documented negatives ทั้งหมดบันทึกพร้อมเหตุผลและช่องทางที่ค้นแล้ว

## ขั้นตอนถัดไป

1. [กำลังทำ] Unbiased Agent ตรวจสอบ Phase B
2. [รอ] Phase C: 10 ลูป + Saturation Check
3. [รอ] Outline Gate ฉบับเต็ม 18 บท
