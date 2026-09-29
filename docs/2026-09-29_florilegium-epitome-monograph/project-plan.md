# Project Plan: วัฒนธรรมเอกสารโบราณ Florilegium และ Epitome

## 1. สรุปโจทย์และกรอบการวิจัย (Project Intake & Theoretical Scope)

**ชื่อโครงการวิจัย:**  
วัฒนธรรมเอกสารโบราณ Florilegium และ Epitome: ภววิทยาตัวบท ญาณวิทยาการจัดระเบียบความรู้ และประวัติศาสตร์การสืบทอดในสายธารละตินและไบแซนไทน์  
(*Florilegium and Epitome in Ancient and Medieval Manuscript Culture: Textual Ontology, Epistemologies of Knowledge Management, and Transmission Histories in the Latin and Byzantine Traditions*)

**ประเภทงานวิจัย:**  
รายงานวิชาการเชิงลึกบทเดียวระดับมหากาพย์ (Single-Chapter Monograph)

**เป้าหมายความยาวคำรวม:**  
≥ 15,000 คำ (คำนวณตามสูตรมาตรฐานสากล: อักขระตัดช่องว่าง ÷ 5.0 ตรวจสอบด้วย `count_words.py`)

**วัตถุประสงค์การวิจัยหลัก:**
1. วิเคราะห์ภววิทยาตัวบท (Textual Ontology) เพื่อจำแนกความแตกต่างเชิงโครงสร้างและวิธีวิทยาการประพันธ์ระหว่าง **Florilegium** (การคัดสรรร้อยกรองถ้อยคำประเสริฐ *verbatim* จากหลายผู้แต่งตามหมวดหมู่ความคิด) กับ **Epitome** (การย่อความ สรุปโครงสร้าง และเขียนใหม่ของตัวบทเดี่ยวเพื่อรักษาแก่นสาระ)
2. สำรวจญาณวิทยาการจัดระเบียบความรู้ (Epistemology of Knowledge Management) และสถาปัตยกรรมสารสนเทศในยุคก่อนแท่นพิมพ์ เพื่อทำความเข้าใจวิธีการรับมือกับภาวะข้อมูลล้นเกิน (Information Overload), การตรึงอำนาจความชอบธรรมของข้อความ (*auctoritas*), และการประยุกต์ใช้อุดมคติความกระชับ (*brevitas*)
3. ศึกษาสัณฐานวิทยาของสมุดตัวเขียน (Codicology) และผังการจัดวางหน้ากระดาษ (*mise-en-page*), การลงหมึกแดงกำกับหัวข้อ (*rubrication*), การจัดทำสารบัญแจกแจง (*capitulatio*), ระบบคำสำคัญ (*lemmata*), และตารางค้นคว้าช่วยจำสำหรับการเทศนา (*ars praedicandi*)
4. วิจัยประวัติศาสตร์การสืบทอดและการสูญหายของตัวบท (Transmission History & Textual Survival) โดยเฉพาะพลวัต "การกลืนกินตัวบทต้นฉบับ" (*Survival of the Most Condensed*) ที่ส่งผลให้งานต้นฉบับขนาดยาวสาบสูญไป เหลือเพียงบทคัดย่อ
5. เปรียบเทียบเชิงวิพากษ์ข้ามสายธารวัฒนธรรมระหว่างโลกละตินตะวันตก (Latin West) กับจักรวรรดิไบแซนไทน์ (Byzantine East)

---

## 2. สถาปัตยกรรมการทำงานร่วมกันของทีมวิจัยเสมือน (Teamwork Architecture)

เพื่อรักษากฎเหล็กสูงสุด **"ข้อมูลมีจริง เอกสารฉบับเต็มมีจริง อ้างอิงจากไฟล์จริง และปราศจากข้อมูลหลอน 100% (Zero Hallucination)"** ระบบจึงแบ่งหน้าที่การทำงานออกเป็น 5 บทบาทอย่างเคร่งครัด:

```
[ฝ่ายที่ 1: Harvesting Specialist]
       │  (ดาวน์โหลด Full-text PDF จริงจากคลังเปิด มี DOI/URL ชัดเจน)
       ▼
[ฝ่ายที่ 2: Text Extraction & Anchor Specialist]
       │  (สกัดข้อความเป็น High-Fidelity Markdown ตรึงเลขหน้าจริง)
       ▼
[ฝ่ายที่ 3: Dossier Production & Verification Engine]
       │  (จัดทำ Dossier 4 ส่วน สกัด Verbatim Quotes และตรวจผ่าน verify_dossier.py 100%)
       ▼
[ฝ่ายที่ 4: Monograph Author / Synthesizer]
       │  (ยกร่างเนื้อหา Micro-Sprints 2,500–3,000 คำ โดยอิงจาก Dossiers เท่านั้น ห้ามเปิดไฟล์ดิบ)
       ▼
[ฝ่ายที่ 5: Critical Auditor & Footnote Engine]
          (รัน footnote_engine.py ล้างรหัส ชำระเชิงอรรถ Chicago และตรวจนับจำนวนคำ)
```

1. **ฝ่ายสืบค้นและจัดหาเอกสารฉบับเต็ม (Harvesting Specialist):**  
   สืบค้นและดาวน์โหลดเฉพาะไฟล์ PDF ตัวจริงจาก Open Access APIs (OpenAlex, CrossRef, Persée, Internet Archive, Digital Manuscript Libraries) บันทึก URL, DOI, ภาษา, และระบบอักษรลงใน `research-notes/source-index.md`
2. **ฝ่ายสกัดข้อความและตรึงตำแหน่งหน้า (Text Extraction & Anchor Specialist):**  
   ใช้ `document_to_markdown.py` และ `pdf_extractor.py` สกัดข้อความ ตรวจสอบสุขภาพไฟล์ และตรึงตำแหน่งเลขหน้าหน้าต่อหน้าลงใน `research-notes/extracted-texts/*.md`
3. **ฝ่ายจัดทำแฟ้มวิเคราะห์แหล่งข้อมูล (Dossier Production & Verification):**  
   จัดทำ Dossier 4 ส่วนมาตรฐาน (`research-notes/sources/S-YYYY-author-XX.md`) รวบรวม Verbatim Quotes พร้อมระบุเลขหน้าจริง และรัน `verify_dossier.py` เพื่อตรวจสอบ Multi-Layer Exact Substring Match 100%
4. **ฝ่ายยกร่างเนื้อหาวิชาการ (Monograph Author / Synthesizer):**  
   ยกร่างเนื้อหาทีละ Micro-Sprint (ความยาว 2,500–3,000 คำ/รอบ) ลงใน `drafts/sections/ch01_secXX.md` โดยใช้ข้อมูลจาก Dossier ที่ผ่านการรับรองแล้วเท่านั้น ห้ามเปิดไฟล์ดิบโดยตรงขณะเขียน
5. **ฝ่ายตรวจสอบความถูกต้องและกำกับเชิงอรรถ (Critical Auditor & Footnote Engine):**  
   รวมส่วนยกร่างเป็นบทสมบูรณ์ รัน `footnote_engine.py` เพื่อจัดเรียงลำดับเชิงอรรถตามมาตรฐาน Chicago ลบรหัสระบบภายใน (`S-YYYY-author-XX` และ `.md`) ออกจากตัวบท 100% และตรวจนับจำนวนคำด้วย `count_words.py`

---

## 3. แผนครอบคลุมหลายภาษา (Language Coverage Plan)

### Tier 0: ภาษาหลักในการสื่อสารและการวิเคราะห์ (Primary Analytical Languages)
| ภาษา | รหัส | บทบาทในโครงการ |
|:---|:---:|:---|
| ไทย | TH | ภาษาหลักในการนำเสนอเนื้อหาวิชาการ เขียนร้อยเรียงประโยคต่อเนื่องสละสลวย |
| อังกฤษ | EN | ภาษาวิชาการสากลหลักสำหรับวรรณกรรมทุติยภูมิ (Secondary Literature) และการเทียบเคียงศัพท์วิชาการ |

### Tier 1: ภาษาปฐมภูมิของตัวบทโบราณ (Primary Source Languages)
| ภาษา | รหัส | อักษร/Script | เหตุผลและความจำเป็นเชิงวิชาการ |
|:---|:---:|:---:|:---|
| ละติน | LA | ละติน (Latin) | ภาษาปฐมภูมิของ Florilegia ตะวันตก (*Florilegium Gallicum*, *Liber Scintillarum*, *Manipulus Florum*) และ Epitomae โรมันและยุคกลาง (Justin's Trogus, Livy's *Periochae*, Isidore of Seville) |
| กรีกโบราณ/ไบแซนไทน์ | EL | กรีก (Greek) | ภาษาปฐมภูมิของขนบ Gnomologia, *Sacra Parallela*, *Excerpta Constantiniana*, Photios' *Bibliotheca*, และบทคัดย่อประวัติศาสตร์ของ Zonaras และ Xiphilinus |

### Tier 2: ภาษาประวัติศาสตร์นิพนธ์ยุโรป (European Historiographical Languages)
| ภาษา | รหัส | เหตุผลและความจำเป็น |
|:---|:---:|:---|
| ฝรั่งเศส | FR | วรรณกรรมวิชาการระดับรากฐานด้าน Florilèges และบรรพชีวินวิทยาตัวเขียน (H.-M. Rochais, J. de Ghellinck, B. Munk Olsen, P. Odorico) |
| เยอรมัน | DE | ผลงานวิชาการด้านคลาสสิกศึกษา การย่อความ และการสืบทอดตัวบทโบราณ (M. Dubischar, M. Horster, C. Reitz, B. Bischoff) |
| อิตาลี | IT | งานวิจัยด้านประวัติศาสตร์นิพนธ์ของ Epitome และสมุดตัวเขียนโบราณ (R. Nicolai, G. Cavallo) |

---

## 4. ตารางคำสำคัญหลายภาษา (Multilingual Keyword Matrix)

| มิติการค้นคว้า | ภาษาอังกฤษ (EN) | ภาษาละติน (LA) | ภาษากรีก (EL) | ภาษาฝรั่งเศส (FR) | ภาษาเยอรมัน (DE) |
|:---|:---|:---|:---|:---|:---|
| **วัฒนธรรม Florilegium** | florilegium, florilegia, anthology, anthological culture, commonplacing, sententiae, moral anthology | florilegium, sententiae, flores, collectaneum, excerpta, dictis, auctoritates | ἀνθολογία, ἀνθολόγιον, γνωμολογία, γνῶμαι, ἐκλογαί | florilège, florilèges médiévaux, recueil d'extraits, sentences patristiques | Florilegium, Florilegien, Spruchsammlung, Sentenzensammlung, Blumenlese |
| **วัฒนธรรม Epitome** | epitome, epitomator, abridgment, condensation, summary, compendium, synoptic text | epitoma, epitome, breviarium, compendium, summa, abbreviatio | ἐπιτομή, σύντομος, σύνοψις, περίληψις | épitomé, abrégé, condensation textuelle, résumé historique | Epitome, Auszug, Kurzfassung, Textverdichtung, Kompendium |
| **การสืบทอดและการสูญหาย** | textual transmission, loss of originals, survival of the most condensed, textual parasitism, stemma codicum | transmissio textus, deperdita, codices, traditio manuscripta | παράδοσις, ἀπώλεια κειμένων | transmission des textes, perte des originaux, survie textuelle | Textüberlieferung, Textverlust, Überlieferungsgeschichte |
| **โคดิโคโลยีและหน้ากระดาษ** | codicology, mise-en-page, layout, rubrication, lemmata, finding devices, alphabetical indexing | capitulatio, rubricatio, lemmata, distinctiones, tabula, concordantia | σελιδοποίηση, πινάκιον, κεφάλαια | mise-en-page, rubrication, indexation alphabétique, repérage textuel | Buchgestaltung, Rubrizierung, Lemma-Struktur, Registerkultur |
| **ญาณวิทยาและอำนาจตัวบท** | auctoritas, brevitas, knowledge management, information overload, decontextualization | auctoritas, brevitas, utilitas, memoria, lectio divina | αὐθεντία, βραχυλογία, παιδεία | autorité du texte, brièveté, gestion du savoir | Textautorität, Kürze, Wissensordnung, Informationsüberlastung |

---

## 5. แผนการแบ่งสปรินต์ยกร่างและเป้าหมายจำนวนคำ (Drafting Sprints & Word Targets)

รายงานวิจัยฉบับนี้กำหนดเป้าหมายรวม **≥ 15,000 คำ** แบ่งการทำงานออกเป็น 6 Micro-Sprints (สปรินต์ละ 2,500–3,000 คำ):

| สปรินต์ | รหัสไฟล์ | หัวข้อเนื้อหา | เป้าหมายคำขั้นต่ำ |
|:---:|:---|:---|:---:|
| **Sprint 1** | `ch01_sec01.md` | **1. บทนำและกรอบมโนทัศน์:** ภววิทยาของ Florilegium และ Epitome ในวัฒนธรรมสมุดตัวเขียน | ≥ 2,500 คำ |
| **Sprint 2** | `ch01_sec02.md` | **2. วัฒนธรรม Florilegium:** จาก Sententiae ปิตุรงค์ คาโรแล็งเชียน สู่ Manipulus Florum | ≥ 2,500 คำ |
| **Sprint 3** | `ch01_sec03.md` | **3. วัฒนธรรม Epitome:** อุดมคติ Brevitas และกลไกการย่อความคลาสสิกสู่ยุคกลาง | ≥ 2,500 คำ |
| **Sprint 4** | `ch01_sec04.md` | **4. โคดิโคโลยีและสถาปัตยกรรมหน้ากระดาษ:** Mise-en-page, Rubrication, และ Finding Devices | ≥ 2,500 คำ |
| **Sprint 5** | `ch01_sec05.md` | **5. การวิเคราะห์เปรียบเทียบเชิงวิพากษ์:** การสืบทอด การสูญหาย และการกลืนกินตัวบทต้นฉบับ | ≥ 2,500 คำ |
| **Sprint 6** | `ch01_sec06.md` | **6. กรณีศึกษาตัวบทเปรียบเทียบ (Latin West vs. Byzantine) และบทสรุปทางญาณวิทยา** | ≥ 2,500 คำ |
| **รวมทั้งเล่ม** | `final/01-บทที่หนึ่ง.md` | **รายงานฉบับสมบูรณ์บทเดียว (Single-Chapter Monograph)** | **≥ 15,000 คำ** |

---

## 6. ประตูด่านตรวจคุณภาพ (6 Research Gates)

1. **Gate 1: Outline Gate** — นำเสนอ `outline-proposal.md` ขออนุมัติโครงร่างจากผู้ใช้ก่อนเริ่มฮาร์เวสเอกสารจริง
2. **Gate 2: Saturation Gate** — ตรวจสอบการดาวน์โหลด PDF ฉบับเต็ม ตรวจสอบความถูกต้องและสกัดข้อความลง `extracted-texts/` พร้อมซิงค์ `source-index.md`
3. **Gate 3: Anti-Hallucination Gate** — ตรวจสอบ Dossier ทุกฉบับด้วย `verify_dossier.py` ต้องผ่าน Exact Match 100%
4. **Gate 4: Section Quality Gate** — ตรวจนับคำรายสปรินต์ด้วย `count_words.py --file` ต้องได้ ≥ 2,500 คำ และมีความหนาแน่นของข้อมูลเชิงประจักษ์
5. **Gate 5: Chapter Audit Gate** — รวมบท รัน `footnote_engine.py` จัดเรียงเชิงอรรถ ลบรหัสอ้างอิงภายในระบบ และตรวจสอบความต่อเนื่อง
6. **Gate 6: Final Sign-off Gate** — ตรวจสอบบรรณานุกรมรวม `references.md` สรุปจำนวนคำรวมทั้งเล่ม (≥ 15,000 คำ) และส่งมอบงานวิจัยฉบับสมบูรณ์
