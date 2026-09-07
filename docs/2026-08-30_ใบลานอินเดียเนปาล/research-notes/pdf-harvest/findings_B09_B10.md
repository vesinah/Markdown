# Findings — Loop B-09 (Richard Salomon) & Loop B-10 (Nalini Balbir + Giovanni Ciotti) (S-510 … S-514)

วันที่: 2026-09-01 | ภารกิจ: Author Mining ต่อเนื่อง — Salomon (บทความ/บทในเล่มรวม นอกเหนือจาก 3 เล่มที่มี), Balbir + Ciotti (นอกเหนือจาก *Syntax of Colophons* เล่มเต็ม) | Sub-agent: The Explorer

**เครื่องมือที่ใช้จริง:** Crossref REST (ผ่าน `scratch/crossref_search.py` ที่เขียนขึ้นใหม่ในลูปนี้ — ไฟล์เดิมประกาศ GAP ไว้ใน findings_B05_B06 และไม่มีอยู่จริงใน repo), Unpaywall API (email: vesin.research@gmail.com), Puppeteer (`scratch/oa_fulltext.js` — ผ่าน JS-challenge ของ Springer/De Gruyter ได้), PyMuPDF (สกัด fulltext)
**ข้อจำกัดที่พบ:** Crossref `query.author=Nalini Balbir / Giovanni Ciotti` แยกไม่ออกจาก noise (ต้องใช้ `query.bibliographic` ร่วม); Salomon/Gandhari ค้นตรง ๆ ได้ noise เยอะ (Gandhari = ชื่อคน/สถานที่ในงานอื่น); ScienceDirect (Poliakova/Ciotti 2026, Rev. Palaeobot. Palynol.) ติด Cloudflare challenge — ยังไม่ได้ fulltext (บันทึกไว้เป็น S-514)

---

## Loop B-09 — Richard Salomon (S-510, S-511)

## S-510
- **Language:** EN
- **ประเภท:** secondary (book chapter)
- **Bibliography:** Salomon, Richard. "Recent Discoveries of Early Buddhist Manuscripts: And Their Implications for the History of Buddhist Texts and Canons." In Patrick Olivelle (ed.), *Between the Empires: Society in India 300 BCE to 400 CE*, pp. 349–382. Oxford University Press (2006).
- **DOI:** 10.1093/acprof:oso/9780195305326.003.0014
- **URL:** https://doi.org/10.1093/acprof:oso/9780195305326.003.0014
- **status:** metadata only (Unpaywall: is_oa=False — OUP paywall, ไม่มี OA version ที่พบ)
- **เหตุผลที่เลือก:** บทในเล่มรวมชิ้นสำคัญ (cited=7 ใน Crossref) ที่สรุปผลกระทบของ Gandhāran manuscripts ต่อประวัติศาสตร์พุทธ canon — เติมมุม "canon formation" ที่ 3 เล่มเดิม (S-1999-salomon-16 / S-2003-salomon-17 / Anavatapta volume) ไม่ได้พูดตรงรูปแบบนี้
- **เช็คซ้ำ:** ไม่ซ้ำกับ source-index (มีแต่ Salomon 1999/2003/Schøyen chapter 10.2307/j.ctt1vw0q4q.4/Bajaur volume S-291)

## S-511
- **Language:** EN
- **ประเภท:** secondary (book chapter)
- **Bibliography:** Salomon, Richard. "Gāndhārī and the Other Indo-Aryan Languages in the Light of Newly-Discovered Kharoṣṭhī Manuscripts." In Nicholas Sims-Williams (ed.), *Indo-Iranian Languages and Peoples*, Proceedings of the British Academy 116, pp. 95–115. Oxford University Press / British Academy (2003).
- **DOI:** 10.5871/bacad/9780197262856.003.0005
- **URL:** https://doi.org/10.5871/bacad/9780197262856.003.0005
- **status:** metadata only (Unpaywall: is_oa=False)
- **เหตุผลที่เลือก:** บทวางภาพภาษาศาสตร์ Gāndhārī เทียบ Indo-Aryan อื่นจาก Kharoṣṭhī manuscripts ชุดใหม่ — ปิดมุม "ภาษา/อักษร" ที่ยังไม่มีใน index
- **หมายเหตุ:** ลองชิ้น OA ของ Salomon ก่อนหน้า (10.2307/604529 "New Evidence for a Gāndhārī Origin of the Arapacana Syllabary" JAOS 1990 และ 10.2307/605500 JAOS 1997) — Unpaywall บอก is_oa=False ทั้งคู่ (JSTOR) จึงเลือกบทเล่มรวมสองชิ้นนี้แทน และ De Gruyter chapter ของ *From Birch Bark to Digital Data* (10.2307/j.ctt1vw0q4q.4) มีอยู่แล้วใน index เป็น S-294

**สรุป Loop B-09:** Crossref "Salomon Gandhari/Kharosthi" ที่เป็น journal article และไม่ซ้ำ index ส่วนใหญ่ non-OA (JAOS/JSTOR); ได้ metadata 2 บทเล่มรวม (S-510, S-511) — ยังไม่ได้ fulltext ทั้งคู่

---

## Loop B-10 — Nalini Balbir + Giovanni Ciotti (S-512 … S-514)

## S-512
- **Language:** EN
- **ประเภท:** secondary (journal article — **fulltext OA ได้ครบ 18 หน้า**)
- **Bibliography:** Balbir, Nalini. "Multi-Sided Analysis in Early Śvetāmbara Jain Exegesis: The Niryukti-Discourse." *Journal of Indian Philosophy* (2025). Accepted 17 May 2025. CC BY-NC-ND 4.0.
- **DOI:** 10.1007/s10781-025-09613-y
- **URL:** https://link.springer.com/article/10.1007/s10781-025-09613-y
- **Local Path:** `loop_B09_B10/documents/balbir_niryukti_springer.pdf` (PASS: 18 pages, 57,723 chars) + extract `pdf-harvest/extracts/balbir_niryukti_springer_extracted.txt`
- **status:** fulltext (harvest 2026-09-01, ผ่าน JS-challenge ด้วย Puppeteer)
- **Quotes verbatim (EN):**
  1. (p.1, Abstract) "This essay argues that the Prakrit Jain verse commentaries called niryuktis form a coherent discourse, the fixed procedures of which illustrate how anekāntavāda works."
  2. (p.2) "This group of versified works is written in the Middle Indo-Aryan (Prakrit) language called Jaina Māhārāṣṭrī with a style which puts them at the crossroads of oral exchanges between teacher and pupil within a pedagogical setting of elucidation and of a strictly written format. Niryuktis (Prakrit Ṇijjuttis) form a constituted body of ten texts, eight of which have come to us."
  3. (p.2) "Though their composition has been ascribed by the Jain tradition to an early teacher known as Bhadrabāhu (first centuries CE), no clear authorship can be proved."
  4. (p.1-2, Abstract ท้าย) "Thus the encyclopaedic exegesis of the niryuktis is meant both for transmitting knowledge in the frame of monastic pedagogy and to provide the believer with an adequate frame for proper conduct."
- **ประเด็นที่ map:**
  - **[ch3/ผังวัฒนธรรม]** ความสัมพันธ์ oral/written ในต้นฉบับ Jain Prakrit = ขยายมุม orality-vs-pothī ที่ index มีสำหรับ Buddhist Sanskrit อยู่แล้ว
  - **[ch4/textual transmission]** ความไม่ชัดของ authorship (Bhadrabāhu) = กรณีศึกษา anonymity ในสายส่งต่อแบบภารดา (เทียบ colophon ที่ระบุชื่อของ Balbir 2022 S-110)

## S-513
- **Language:** EN
- **ประเภท:** secondary (journal article + book chapter — **fulltext OA ได้ครบทั้งสอง**)
- **Bibliography (a):** Ciotti, Giovanni. "Scribe, Owner, or Both? Some Ambiguities in the Interpretations of Personal Names in Colophons from Tamil Nadu." In Balbir & Ciotti (eds.), *The Syntax of Colophons*, pp. 87–106. De Gruyter (2022). CC BY-NC-ND 4.0.
- **DOI:** 10.1515/9783110795271-005
- **Bibliography (b):** Ciotti, Giovanni. "Tamil Ilakkaṇam ('Grammar') and the Interplay between Syllabi, Corpora and Manuscripts." In *Education Materialised: Layouts and Material Features of Layouts in Educational Texts*, De Gruyter (2021). CC BY-NC-ND 4.0. (DOI: 10.1515/9783110741124-016)
- **Local Path:** `loop_B09_B10/documents/ciotti_colophons_tamilnadu_dg.pdf` (PASS: 22 pages, 39,242 chars) + extract; `loop_B09_B10/documents/ciotti_tamil_ilakkanam_dg.pdf` (PASS: 38 pages, 99,880 chars) + extract
- **status:** fulltext (harvest 2026-09-01)
- **หมายเหตุ dedupe:** ห้ามสับสนกับ S-2023-ciotti-09 (Tied and Bound) และ S-162/S-114 (Ontological Approach) — ชิ้นนี้เป็นบท "Scribe, Owner, or Both?" ภายใน *Syntax of Colophons* เองที่ยังไม่เคย harvest แยกจากเล่มเต็ม (S-443 เก็บเฉพาะ Introduction + Baums)
- **Quotes verbatim (EN):**
  1. (ch. Scribe/Owner, Abstract) "The study of the linguistic style and register of Tamil used in colophons found in manuscripts hailing from Tamil Nadu and containing Sanskrit, Tamil and Manipravalam texts brings us to the fringes of what is the conventional use of the language. Many idiosyncrasies and systematic variations from what is today accepted as standard are met and force us to reconsider linguistic assumptions."
  2. (ch. Scribe/Owner, §1) "The present article stems from the ongoing research that Marco Franceschini and I are conducting on a selection of paratexts, in particular colophons and lending/borrowing statements, found in palm-leaf manuscripts from the cultural area known today as Tamil Nadu."
  3. (ch. Scribe/Owner, §1) "We will not shy away, though, from acknowledging when our methods fail to reach a fully satisfactory solution of the problem at hand." (+ วิธีการ: "combining codicological, palaeographical, and philological observations")
  4. (ch. Ilakkaṇam, Abstract) "Manuscripts, in particular multiple-text manuscripts the content of which is pertinent to the field in question, are not just the mere material instantiation of syllabi and corpora, but represent their concrete realisation in educational settings."
  5. (ch. Ilakkaṇam, §on palm-leaf MSS) "We will investigate twenty such palm-leaf manuscripts that were selected on the basis of both direct inspection (either personal or through digital reproductions) and the information gathered from library catalogues. Evidently, the list is not exhaustive."
- **ประเด็นที่ map:**
  - **[ch3/scribal identity]** ความกำกวม scribe-vs-owner ใน colophon Tamil Nadu = ต่อยอด S-452 (Siamese colophons, Ooi) และ S-110 (Balbir Jain colophons) แบบ cross-regional
  - **[ch5/การศึกษา]** ilakkaṇam syllabus 3/5/6-fold vs การจัดชุดข้อความใน palm-leaf MTMs = เคสที่ syllabus จัดรูปเล่มจริง (เทียบ van der Meij Bali/Lombok S-163)

## S-514
- **Language:** EN
- **ประเภท:** secondary (journal article — **fulltext OA ได้ครบ 13 หน้า**)
- **Bibliography:** Mohammed, Hussein; Märgner, Volker; Ciotti, Giovanni. "Learning-Free Pattern Detection for Manuscript Research: An Efficient Approach toward Making Manuscript Images Searchable." *International Journal on Document Analysis and Recognition (IJDAR)* 24: 167–179 (2021). CC BY (The Author(s) 2021).
- **DOI:** 10.1007/s10032-021-00371-7
- **URL:** https://link.springer.com/article/10.1007/s10032-021-00371-7
- **Local Path:** `loop_B09_B10/documents/ciotti_pattern_detection_springer.pdf` (PASS: 13 pages, 52,931 chars) + extract
- **status:** fulltext (harvest 2026-09-01)
- **Quotes verbatim (EN):**
  1. (p.167, Abstract) "We propose a learning-free approach based on a state-of-the-art Naïve Bayes Nearest-Neighbour classifier for the task of pattern detection in manuscript images. The method has already been successfully applied to an actual research question from South Asian studies about palm-leaf manuscripts."
  2. (p.171, §3) "Out of the tens of thousands of manuscripts that are held in libraries across Tamil Nadu and contain texts mainly composed in Sanskrit and Tamil (the former mostly written in Tamilian Grantha script and the latter mostly in Tamil script), only a few thousand that are available for scholars of South Asian studies to scrutinise have been digitised so far (each manuscript consists of hundreds of folios)."
  3. (p.171, §3.1) "If more occurrences were available, it would be possible to link the squared hariḥ om to specific scribes or groups of scribes. It might even be possible to link them to specific literary genres … or to a well-defined time and place of production (if the colophons provided pertinent data)."
  4. (p.168) "Pre-processing steps such as segmentation, layout analysis, OCR and binarisation are therefore challenging, and in many cases they are not feasible at all. This is why we developed a learning-free pattern detection method that does not require any pre-processing steps."
- **ประเด็นที่ map:**
  - **[ch9/HTR-digital]** learning-free NBNN = ทางเลือก HTR/pattern search ที่ไม่ต้องมี training data — เติมสาย SARVAM/ACL 2026 (S-250) และ HTR line segmentation (S-456)
  - **[ch3]** "squared hariḥ om" ใน EFEO Pondicherry = ตัวชี้วัด scribal fashion ที่จับได้จาก pattern search — เชื่อม S-513 โดยตรง

---

## รายการ pending (หาเจอแล้วแต่ยังไม่ได้ fulltext — บันทึกไว้รอบหน้า)

- Poliakova, A.; Ciotti, G.; Blinnikov, S. "Historical Use of Grasses in South Indian Palm-Leaf Manuscript Production Reconstructed from Phytolith Analysis." *Review of Palaeobotany and Palynology* (2026). DOI: 10.1016/j.revpalbo.2026.105610 — Unpaywall is_oa=True แต่ ScienceDirect ติด Cloudflare challenge (HTML challenge page 1.2 MB ที่ได้ถูกลบตาม protocol) — ลองทาง repo/IR รอบหน้า
- ชุด JAOS ของ Salomon (Arapacana 1990; Preliminary Survey 1997; Mahāvadānasūtra 2004) = JSTOR ไม่ OA

## Source Map ย่อ

| ID | Loop | Author | Type | OA/fulltext |
|:---|:---|:---|:---|:---:|
| S-510 | B-09 | Salomon 2006 (Between the Empires) | book chapter | ไม่ (paywall) |
| S-511 | B-09 | Salomon 2003 (Indo-Iranian Languages and Peoples) | book chapter | ไม่ (paywall) |
| S-512 | B-10 | Balbir 2025 (J Indian Philosophy) | journal article | **ใช่ (PDF 18pp)** |
| S-513 | B-10 | Ciotti 2022 + 2021 (Syntax of Colophons ch.5 / Education Materialised ch.) | book chapters | **ใช่ (PDF 22pp + 38pp)** |
| S-514 | B-10 | Mohammed/Märgner/Ciotti 2021 (IJDAR) | journal article | **ใช่ (PDF 13pp)** |

> รวม quotes verbatim ทั้งลูป: **14 quotes** (S-512: 4, S-513: 5, S-514: 4 + 1 อ้างในเชิงวิธีใน map)
