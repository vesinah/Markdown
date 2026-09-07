# Phase A Verification Report — Independent/Unbiased Agent

**โปรเจกต์:** buddhist_sacred_text_gloss
**ผู้ตรวจ:** Unbiased Agent (อิสระ ไม่เกี่ยวข้องกับ Explorer-A/B/C/D)
**วันที่ตรวจ:** 2026-08-25
**ขอบเขต:** ทวนสอบผลการสืบค้น Phase A (loop_01–loop_15) ก่อนปิดเฟส ตามโปรโตคอล anti-hallucination

---

## 1. วิธีการตรวจสอบ

- อ่านไฟล์ `source-index.md` + `research_notes.md` ครบทั้ง 15 ลูป (ไม่ใช้แหล่งอื่นในการสรุป)
- **Live Fetch จริง ~24 คำขอ** กระจายครบทั้ง 15 ลูป (ลูปละอย่างน้อย 1–2 ลิงก์) เน้นแหล่งหลักที่จะถูกอ้างในร่างรายงาน:
  - หน้าสำนักพิมพ์/สถาบันโดยตรง: UW Press, EFEO publications, EFEO Archives, Persée, J-STAGE, Cambridge Core, Columbia DLC, NINJAL, OBP, Swarthmore, trentwalker.org
  - **Metadata APIs เชิง canonical:** Crossref API (MDPI ×2, JBS, Acta Koreana), OpenLibrary API (works/search JSON), archive.org metadata API
- ลิงก์ที่ fetch ไม่ได้เพราะ bot-block/paywall (403/captcha/empty) แต่ URL pattern + metadata ถูกยืนยันด้วยแหล่งข้างเคียง → mark **BLOCKED-BUT-CONSISTENT** ตามโปรโตคอล (ไม่ mark FAIL)
- ไม่ใช้ Wikipedia; websearch API ติด 429 ระหว่างตรวจ → ใช้ Crossref/OpenLibrary/archive.org APIs แทน (ได้ผลดีกว่า)

---

## 2. ตารางผลการทวนสอบรายลูป

| ลูป | ลิงก์ที่ตรวจ | สถานะ | หลักฐานที่พบจาก live fetch |
|:---|:---|:---|:---|
| 01 | uwapress.uw.edu — McDaniel, *Gathering Leaves and Lifting Words* | **PASS** | Title/author/ปี Oct 2008/384 pp./ISBN 9780295988498/series Critical Dialogues/Benda Prize — ตรงโน้ตทุกบรรทัด |
| 01 | trentwalker.org/publications | **PASS (+CORRECTED)** | JAOS 140.3 (Jul–Sep 2020): 675–699 ✓; แต่พบบท "Echoes of a Sanskrit Past" = pp. 55–134 (โน้ตเดิมเขียน 49–116 → แก้ไฟล์ loop_01 แล้ว); ชื่อเรื่อง JAOS ลงท้าย "…and Poetry" ไม่ใช่ "[Aesthetics]" (แก้แล้ว) |
| 02 | publications.efeo.fr — Pruitt, *Étude linguistique de nissaya birmans* | **PASS** | William Pruitt, Monographies/PEFEO no.174, 1994, ISBN 285539774X / 9782855397740, ISSN 1269-8326, "280 p. / Description: 287 p." — รวม discrepancy 280/287 ซึ่งมีอยู่บนหน้าสำนักพิมพ์เอง โน้ตบันทึกถูกต้อง |
| 02 | ses.library.usyd.edu.au/handle/2123/13438 (Chris Clark thesis) + Crossref JBS article | **BLOCKED-BUT-CONSISTENT → PASS** | USyd 403; Crossref ยืนยัน **Chris Clark**, "The Sixth Buddhist Council…", *Journal of Burma Studies* 19(1), Jun 2015: 79–112, DOI 10.1353/jbs.2015.0007 → ยืนยันชื่อ Chris (ไม่ใช่ Alicia) Clark |
| 03 | archives.efeo.fr MSS PALI 22 | **PASS** | Quote catalogue ตรงคำต่อคำ: "texte pāli glosé en khmer (nissaya) de la première section de la grammaire de Kaccāyana (Sandhikappa)"; 8 ôles, 51×568 mm, 2 holes, ~14 big/~64 small chars, script mūl, alt id CO 147 |
| 03 | escholarship.org/uc/item/5199w721 + trentwalker.org | **BLOCKED-BUT-CONSISTENT → PASS** | eScholarship return ว่าง (bot-block); author site ยืนยัน dissertation เต็ม: chair von Rospatt, committee Edwards/Jenks/de Bernon, 1651 pp. |
| 04 | journals.uni-lj.si/ala/article/view/16 (Lee Yong) | **PASS** | Yong LEE, "Morphology and Syntax in Holes and Scratches…", ALA 1(1) 2011: 53–70, DOI 10.4312/ala.1.1.53-70; reference list ตรง citation chain ในโน้ต (Chang/Chung/Kobayashi Y. 2002, 2003/Lee S. et al./Nam P./Park J.) |
| 04 | earticle A200031 / KCI ART001775402 + Crossref | **BLOCKED-BUT-CONSISTENT → PASS** | earticle 403; Crossref ยืนยัน **Ross King**, "The Kugyŏl Glosses in the Asami Collection Copy of the Ch'ŏllo Kŭmgang kyŏng", *Acta Koreana* 16(1), Jun 2013: **199–233**, DOI 10.18399/acta.2013.16.1.009; primary resource URL ของ DOI = KCI ART001775402 → ยืนยันว่า KCI tag "An, Pyŏnghŭi" เป็น metadata เพี้ยน ตามข้อสันนิษฐานในโน้ต |
| 05 | cambridge.org — Taylor, JAS "What Lies Behind the Earliest Story…" | **PASS** | K. W. Taylor (Cornell), JAS 77(1), Feb 2018: 107–122 (online 17 Nov 2017), DOI 10.1017/S0021911817000985; เนื้อความยืนยัน Cổ Châu pháp vân Phật bản hạnh ngữ lục พิมพ์ 1752, Hán prose + phrase-by-phrase Nôm, Nôm forms → 17th c., 7 editorial episodes, 4 divergence types — ตรงโน้ตทุกข้อ |
| 05 | dlc.library.columbia.edu/npf_vietnamese | **PASS** | ~1,100 texts; NLV + Thắng Nghiêm + Phổ Nhân; VNPF ก่อตั้ง 1999 สลาย 2018 collection ย้ายไป Columbia 2021; Digitizing Việt Nam + VSC Fulbright — ตรงโน้ตทุกบรรทัด |
| 06 | clrd.ninjal.ac.jp/chj/heian-en.html | **PASS** | CHJ Heian Series II = 西大寺本金光明最勝王経平安初期点 巻一 kundokubun; Kasuga 1924/1985; dev staff 柳原恵津子/Yanagihara Etsuko + 近藤明日子/Kondō Asuko + cooperation 高田智 Takada Tomokazu; JSPS 18H00674; Series III incl. 法華百座聞書抄・高山寺本古往來・尾張国解文 — ทุกรายการตรงโน้ต |
| 06 | works.swarthmore.edu/fac-japanese/29 (Bundschuh ch.) | **PASS (+CORRECTED)** | Title/pp.347–363/DOI 10.4324/9781003251699-29/quote ตรงคำต่อคำ แต่ Publication Date = **2025** (โน้ตเขียน 2024) และ editors = R. Meade, C. Shih, K. H. Kim → แก้โน้ต loop_06 + ปรับระเบียน I-10 แล้ว |
| 07 | J-STAGE ibk/70/3/70_1185 (Yonezawa) | **PASS (+CORRECTED)** | Yoshiyasu Yonezawa, title ตรง, Vol 70 Issue 3, published 2022-03-25, DOI 10.4259/ibk.70.3_1185 ✓; **เลขหน้าจริง 1185–1192** (โน้ตเดิม "147–154 [1185]" ผิด → แก้แล้ว) |
| 07 | persee.fr/doc/asie_0766-1177_2005_num_15_1_1221 [07-S15] | **FAIL → CORRECTED** | ลิงก์เปิดได้แต่ attribution ในโน้ตผิด 2 จุด: ผู้เขียนจริง = **Orna Almogi** (ไม่ใช่ "likely Dorje Wangchuk"), วารสารจริง = **Cahiers d'Extrême-Asie** 15 (2005): 27–58 (ไม่ใช่ Cahiers de Linguistique — Asie Orientale); DOI 10.3406/asie.2005.1221; สาระ bilingual titles ตรง → แก้โน้ต loop_07 แล้ว |
| 08 | mdpi.com/2077-1444/15/6/748 + Crossref | **PASS (+CORRECTED)** | MDPI บล็อก direct fetch (empty ×3) → Crossref 10.3390/rel15060748: ผู้แต่ง = **Changchun Pei** (Shandong Normal Univ.), Religions 15(6):748, online 2024-06-19; abstract ตรงสาระโน้ตทุกจุด (1 Tibetan hand + 3 Chinese hands, workbook model) → เติมชื่อผู้แต่งแทน [UNVERIFIED] แล้ว |
| 09 | mdpi.com/2077-1444/16/7/899 + Crossref | **PASS (+CORRECTED)** | MDPI บล็อก direct → Crossref 10.3390/rel16070899: ผู้แต่ง = **Ayixiemuguli Tuersun** (Minzu Univ. of China), Religions 16(7):899, online 2025-07-13; abstract ยืนยัน complete corpus/two lineages/Kumārajīva collation ตามโน้ต → เติมชื่อผู้แต่งแล้ว |
| 09 | doi.org/10.1556/062.2020.00028 (Mirkamal) | BLOCKED-BUT-CONSISTENT | Akjournals ไม่ได้ fetch โดยตรง; DOI format ถูกต้อง + ถูกอ้างเป็น ref_14 ใน Crossref record ของ Tuersun 2025 ("Turning the Wheel of Dharma…" Mirkamal, AOHung 75) → consistency ข้างเคียงยืนยัน author Mirkamal มีตัวตนและ active ในสายงานนี้ |
| 10 | benjamins.com/catalog/z.180 (Tamoto) + OpenLibrary | **BLOCKED-BUT-CONSISTENT → PASS** | Benjamins 403; OpenLibrary OL20956439W: Kenichi Tamoto, *The Macregol Gospels or The Rushworth Gospels*, 2013 ✓ (ตรง ISBN-series Z180 claim ที่บันทึก) |
| 11 | openbookpublishers.com/books/10.11647/obp.0330 | **PASS** | eds. Daniel J. Crowther, Aaron D. Hornkohl, Geoffrey Khan; Semitic Languages and Cultures vol. 15; published 2022-11-07; xxii+428; DOI 10.11647/OBP.0330; TOC ยืนยันบท Martín-Contreras (pp.1–22), Phillips (RNL EVR II B 80+), Beiler "Marginal nun/zayin" (pp.75–114), Hornkohl ketiv-qere, Breuer, Crowther Ṭeʿamim — ทุกบทตรงโน้ต |
| 11 | archive.org/metadata/page-h.-kelley… + OpenLibrary | **PASS (+CORRECTED)** | archive.org item มีจริง (PDF+OCR, 258 pages) แต่ไม่มีปีใน metadata → OpenLibrary OL2675375W ยืนยัน first_publish_year = **1998** → แก้ "year U" ใน source-index A11-01 และ loop_11 แล้ว |
| 12 | openlibrary.org/works/OL16593085W.json (Zadeh) | **PASS** | *The Vernacular Qur'an*, author key OL7077872A (ตรงลิงก์ author ในโน้ต), description มี quote "interlinearly, wove Persian commentaries between its lines and verses…" **ตรงคำต่อคำ**; created 2012 ✓ |
| 13 | openlibrary.org/works/OL24702632W.json (Grierson, Śivaparinaya) | **PASS** | Title เต็ม: "Sivaparinayah; a Poem in the Kashmiri Language by Krsna Rajanaka… With a Chaya of Gloss in Sanskrit by Mahamahopadhyaya Mukundarama Sastri. Edited by George A. Grierson" — ยืนยันหลักฐาน chāyā ฝั่ง Kashmiri ตามโน้ตทุกตัวอักษร |
| 14 | openlibrary.org/works/OL5442539W.json (Berghaus) | **PASS** | "Die Verwandtschaftsverhältnisse der altenglischen Interlinearversionen des Psalters und der Cantica", first_publish_date 1979, subjects ยืนยัน interlinear translations/Old English Psalters/Canticles ✓ |
| 15 | archive.org/metadata/marginsofwriting0000unse (Sanders ed.) | **PASS** | date 2006, Oriental Institute Chicago, ISBN 9781885923394, xi+300 pp., seminar Feb 25–26 2005; description ยืนยัน TOC **ตรงคำต่อคำทุกบท** รวม Rubio "Writing in another tongue: alloglottography…Postscript (December 2007)" + Pollock response session 3 + Machinist final response |
| 15 | openlibrary OL28858938W (*Glossing Practice*) | **PASS** | Franck Cinato, Aimée Lahaussois, John B. Whitman, first_publish_year 2023, publisher Lexington Books/Fortress Academic (Rowman & Littlefield) — authors/year ตรง source-index A15-01 |

**สรุปสถิติ:** PASS 20 · BLOCKED-BUT-CONSISTENT 5 (ทั้งหมด resolve เป็น PASS ผ่าน metadata API) · FAIL→CORRECTED 1 · CORRECTED (metadata) 7 รายการ

---

## 3. Hallucination Red Flags ที่สแกนพบ

### 3.1 ชื่อผู้เขียนผสม/ผิด (จับได้ 1 รายการใหม่)
- ✅ **[07-S15] "Dorje Wangchuk?" + วารสารผิด** — attribution ผิดจริง แก้เป็น Orna Almogi / Cahiers d'Extrême-Asie แล้ว (น่าจะเกิดจาก Dorji Wangchuk ถูกกล่าวถึงใน acknowledgements ของบทความ)
- ✅ "Kensaku Okell" (prompt artifact) — Explorer-A จัดการถูกต้องแล้วตั้งแต่ต้น: ไม่พบ scholar นี้, ที่ถูกคือ John Okell (Lingua 15, 1965) — ไม่พบ residual
- ✅ "Alicia Clark" — ถูกแก้เป็น Chris Clark แล้วในโน้ต; live check ยืนยัน Chris Clark (JBS 19(1) 2015) จริง
- ⚠️ KCI landing page tag "An, Pyŏnghŭi" บนบท Ross King — เป็นความเพี้ยนของ KCI metadata (Crossref/DOI ยืนยัน Ross King) โน้ตจับถูกต้องแล้ว

### 3.2 DOI/URL ที่รูปแบบผิด
- ไม่พบ DOI ที่ malformed ในไฟล์ที่สแกน (ทุก DOI ที่ตรวจผ่าน Crossref/J-STAGE/Persée resolve ตรง)
- ⚠️ [09-S18] ลิงก์ SAGE เป็น URL proxy `https-sage-cnpereading-com-443.webvpn1.xju.edu.cn/...` — ใช้งานได้เฉพาะใน network มหาวิทยาลัย Xinjiang; ควรแทนด้วย DOI canonical 10.1177/2513850218783095 ใน Phase B (ไม่ mark FAIL เพราะเป็น mirror ของ DOI จริง)
- ⚠️ I-11 (Zisk, academia.edu/36764548/) — ID pattern academia สูงแบบนี้มักเป็นปี 2017 ไม่ใช่ 2023; ไม่ verify ได้ในรอบนี้ → **flag: ควร re-locate ลิงก์ chapter "Glossing Glosses" ใหม่ใน Phase B** (volume แม่ *Glossing Practice* 2023 ยืนยันแล้วว่ามีจริง)

### 3.3 Quote ที่ไม่มี URL กำกับ
- ตรวจทุก quote ใน 15 ไฟล์: ทุก quote สำคัญมี URL/แหล่งกำกับในบรรทัดเดียวกันหรือหัวรายการ ✓
- Quote ที่ดึงจาก search snippet มี annotation "จาก snippet" ครบ ✓
- Quote ของ Zadeh และ Bundschuh ที่ตรวจ live — ตรงคำต่อคำกับ description/abstract จริง ✓

### 3.4 [UNVERIFIED] ที่ยืนยันเพิ่มได้ด้วยการ fetch 1 ครั้ง — RESOLVED แล้ว
1. ปี Kelley/Mynatt/Crawford → **1998** (OpenLibrary)
2. ผู้แต่ง [08-S03] PT 1257 → **Pei Changchun** (Crossref)
3. ผู้แต่ง [09-S03] Old Uyghur Lotus → **Ayixiemuguli Tuersun** (Crossref)
4. ปี/บรรณาธิการ Bundschuh ch. → **2025 / Meade-Shih-Kim** (Swarthmore)
5. เลขหน้า Yonezawa IBK → **1185–1192** (J-STAGE)
6. Attribution [07-S15] → **Almogi / Cahiers d'Extrême-Asie** (Persée)

[UNVERIFIED] ที่ยังเปิดค้าง (ยุติธรรมที่จะค้าง เพราะ search engine ถูกบล็อกทั้งรอบ): ผู้แต่ง [09-S04]/Belleten/[09-S21], ALA 2014 paper, 한문고전연구 40(1) 2020, BnF 능엄경 paper, CiNii カンナンバン, Leiden [07-S04], ORA Aldred paper, Brill Lindisfarne chapter, Üşenmez full title, Kulieva TOC, Narayanan รายละเอียด, Liu/Pollock รายละเอียดเชิงลึก — ทั้งหมดถูก mark ไว้ถูกต้องในโน้ตและไม่ถูกใช้เป็นข้อเท็จจริงเชิงอ้างสำคัญ

---

## 4. ข้อสังเกตเชิงโครงสร้าง (ไม่ใช่ hallucination แต่ต้องตามเก็บ)

1. **source-index.md มีระเบียนเฉพาะ Init Report + loops 10–15** — loops 01–09 (Explorer-A/B/C) ยังไม่ถูก ingest ขึ้นดัชนี แม้ไฟล์โน้ตสมบูรณ์ดี → ต้องเพิ่มระเบียนก่อนใช้ draft (update สถานะตาราง stats แล้วพร้อม note)
2. loop_01 fn-chain "Echoes of a Sanskrit Past" pages 49–116 vs Walker site 55–134 → แก้แล้ว; loop_03 ใช้ 55–134 ถูกต้องอยู่แล้ว
3. Kobayashi Y. (2002/2003, Kugyŏl Studies) ปรากฏเป็น "Kobayashi Yoshiyuki" ใน loop_06 chaining แต่ "Kobayashi, Y." ใน loop_04 — romanization ไม่ตรงกัน, ยัง verify ไม่ได้ราคาถูก → flag เล็กน้อยสำหรับ Phase B
4. Complutensian Polyglot "1514" (loop_14 #6) — ปีที่ NT เสร็จ; ฉบับเต็ม/privilege 1517–1520 — ควรระบุ "1514–17" เมื่อเขียนรายงาน
5. loop_15: ชื่อฉบับแปลจีน Translingual Practice "Kua yu ji shian" สะกดเพี้ยน (มาตรฐาน: Kuayu shijian 跨语实践) — แก้เมื่อเขียนร่าง
6. loop_04 ระบุ King 2013 pp.199–233 — ยืนยันตรง Crossref ✓ (บันทึกไว้เป็นหลักฐานปิด gap)

---

## 5. การแก้ไขที่ลงมือทำแล้ว (edit ไฟล์จริง พร้อม tag "[CORRECTED by Unbiased Agent]")

| ไฟล์ | การแก้ |
|:---|:---|
| source-index.md | (1) A11-01 ปี year U → 1998 + canonical archive.org identifier; (2) I-10 เพิ่ม note ปี repository 2025 + editors; (3) ตาราง stats: สถานะ Phase A → "เสร็จ + ทวนสอบแล้ว" พร้อม note เรื่องระเบียนลูป 01–09 |
| loop_01 | ชื่อเรื่อง JAOS (and Poetry); หน้า Echoes of a Sanskrit Past → 55–134 |
| loop_06 | เพิ่ม correction note ปี 2025 + editors ของบท Bundschuh |
| loop_07 | เลขหน้า Yonezawa → 1185–1192; [07-S15] attribution → Almogi / Cahiers d'Extrême-Asie |
| loop_08 | [08-S03] เติมผู้แต่ง Pei Changchun + update gaps |
| loop_09 | [09-S03] เติมผู้แต่ง Ayixiemuguli Tuersun + update gaps |
| loop_11 | ปี Kelley/Mynatt/Crawford → 1998 |

---

## 6. บทสรุป: Phase A ผ่านเกณฑ์ปิดเฟสหรือไม่?

**ผ่านเกณฑ์ปิดเฟส (PASS with minor conditions)**

- ไม่พบ hallucination เชิงสาระ (quote ปลอม/แหล่งปลอม) ในทุกลิงก์ที่ fetch จริง 20+ จุด — ทุก quote ที่ตรวจตรงคำต่อคำกับแหล่งจริง
- พบและแก้แล้ว: attribution error 1 รายการ ([07-S15]), metadata error 6 รายการ (ปี 2, ผู้แต่ง 2, หน้า 1, ชื่อเรื่อง 1) — ทั้งหมดเป็นความผิดพลาดระดับ citation detail ไม่ใช่การมโนแหล่ง
- จุดอ่อนที่ต้องเก็บต่อใน Phase B (ไม่เป็นอุปสรรคการปิดเฟส):
  1. ingest ระเบียน loops 01–09 ขึ้น source-index.md
  2. re-locate ลิงก์ I-11 (Zisk academia ID น่าสงสัย)
  3. แทน proxy link [09-S18] ด้วย DOI canonical
  4. [UNVERIFIED] ค้าง ~13 รายการ (mark ถูกต้องแล้วทุกจุด) — ใช้ websearch เมื่อ quota ฟื้น
  5. Loop 03 ฝั่ง sannaya ศรีลักษณ์ "ยังไม่อิ่มตัว" — โน้ตรับทราบไว้ถูกต้อง ให้ forage รอบสองใน Phase B

**คำแนะนำ:** ปิด Phase A ได้ทันที โดยให้ข้อ 1–2 เป็น action item แรกของ Phase B (loop_16)

---
*Unbiased Agent — ตรวจสอบอิสระ 2026-08-25*
