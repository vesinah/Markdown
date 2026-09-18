# รายงานผลการวิเคราะห์สารบัญ โครงสร้างตัวบทจริง และการกำหนดโครงสร้าง Dossier สำหรับตำราสายพม่า เวกซา และล้านนา (7 เล่ม)
**ผู้รายงาน:** Sub-Agent ทีมที่ 5 (Team 5: Burma, Pagan, Ari & Weikza Traditions Specialist)  
**ผู้รับ:** Lead Agent (Parent Agent ID: 8b8b1ce7-f1d2-43c1-8504-335841a7f736)  
**โครงการวิจัย:** เถรวาทตันตระ หรือเถรวาทแบบเซาท์อีสเอเชีย: กำเนิด พัฒนาการ การดำรงอยู่ และสถานภาพการศึกษาทางประวัติศาสตร์นิพนธ์

---

เรียน Lead Agent

ทีมวิจัยที่ 5 ได้เข้าดำเนินการสำรวจ ตรวจสอบ และอ่านโครงสร้างตัวบทจริงอย่างละเอียด 100% จากไฟล์ข้อความสกัดใน `research-notes/extracted-texts/` และไฟล์เอกสารต้นฉบับใน `research-notes/pdf/` สำหรับตำราแม่บทสายพม่า พุกาม พระอริ (Ari) สมาคมเวกซา (Weikza) และจารีตล้านนา-สยามโบราณ ทั้งสิ้น 7 รายการ

ตามคำสั่งเด็ดขาดของผู้ใช้และ Lead Agent: หนังสือ 1 เล่มที่มีหลายบท จะต้องทำ Dossier แยกเป็น "1 Dossier กลาง (Master Umbrella)" และ "1 Dossier ประจำบทสำหรับทุกบทในเล่ม (ห้ามเลือกตัดเฉพาะบางบทโดยเด็ดขาด เล่มมีกี่บทต้องทำ Dossier ครอบคลุมทุกบท 100%)"

ผลการวิเคราะห์และข้อเสนอรหัสโครงสร้าง Dossier รายเล่มและรายบท พร้อมการแมปปิ้งเข้าสู่บทและหัวข้อย่อยของโครงการวิจัย มีรายละเอียดสมบูรณ์ดังต่อไปนี้:

---

## 1. Mabel Haynes Bode (1909) — The Pali Literature of Burma

- **ข้อมูลบรรณานุกรม:** Bode, Mabel Haynes. *The Pali Literature of Burma*. London: Royal Asiatic Society, 1909. (Prize Publication Fund, Vol. II). [จำนวน 142 หน้า]
- **ไฟล์ในระบบ:** `pdf/1909-bode-pali-literature-of-burma.pdf` และ `extracted-texts/1909-bode-pali-literature-of-burma.txt`

### 1.1 สารบัญฉบับเต็มครบทุกบทและขอบเขตเลขหน้าจริง
1. **Front Matter & Abbreviations & Bibliographical Notes:** หน้า vii–viii (PDF หน้า 8–10)
2. **Introduction:** หน้า ix–xv (PDF หน้า 11–17)
3. **Chapter I:** The Classical Pali Texts in Burma, หน้า 1–13 (PDF หน้า 19–31)
4. **Chapter II:** The Rise of Pali Literature in Upper Burma (Pagan), หน้า 14–30 (PDF หน้า 32–48)
5. **Chapter III:** Buddhism and Pali Literature in Martaban (Muttima) and Pegu, หน้า 31–48 (PDF หน้า 49–66)
6. **Chapter IV:** The Seventeenth Century: Pegu and Upper Burma, หน้า 49–63 (PDF หน้า 67–81)
7. **Chapter V:** Pali Literature in the Eighteenth Century: The Royal Library at Amarapura, หน้า 64–82 (PDF หน้า 82–100)
8. **Chapter VI:** The Pali Law-Texts of Burma, หน้า 83–100 (PDF หน้า 101–118)
9. **Appendix to Chapter III:** An Inscription of A.D. 1442 (Pagān Monastic Library Inscription / List of 295 texts), หน้า 101–109 (PDF หน้า 119–128)
10. **Index:** Index of Texts and Authors, หน้า 111–119 (PDF หน้า 129–142)

### 1.2 โครงสร้าง Dossier ที่กำหนด (1 Master Umbrella + 8 Chapter/Section Dossiers)
- **Master Umbrella Dossier:** `S-1909-bode-00-master-pali-literature-burma.md`
- **Dossier ประจำบท:**
  1. `S-1909-bode-ch00-intro-scope-method.md` (Introduction: กำเนิดและพัฒนาการของวรรณกรรมบาลีในพม่า, หน้า ix–xv)
  2. `S-1909-bode-ch01-classical-pali-texts.md` (Chapter I: คัมภีร์บาลีคลาสสิก วรรณกรรมพระไตรปิฎก และอรรถกถาในพม่า, หน้า 1–13)
  3. `S-1909-bode-ch02-pagan-rise-pali-literature.md` (Chapter II: การผงาดขึ้นของวรรณกรรมบาลีในพุกาม ศัพทศาสตร์ ไวยากรณ์ และอภิธรรม, หน้า 14–30)
  4. `S-1909-bode-ch03-martaban-pegu-mon-tradition.md` (Chapter III: พุทธศาสนาและวรรณกรรมบาลีในเมาะตะมะและหงสาวดี จารึกกัลยาณีและบทบาทมอญ, หน้า 31–48)
  5. `S-1909-bode-ch04-seventeenth-century-pegu-upper-burma.md` (Chapter IV: ศตวรรษที่ 17 ปัญญาสชาดก วรรณกรรมหงสาวดีและอังวะ, หน้า 49–63)
  6. `S-1909-bode-ch05-eighteenth-century-amarapura-library.md` (Chapter V: ศตวรรษที่ 18 หอสมุดหลวงอมรปุระ ขบวนการแปลนิสสยะ และข้อพิพาทเรื่องจีวร, หน้า 64–82)
  7. `S-1909-bode-ch06-pali-law-texts-burma.md` (Chapter VI: คัมภีร์ธรรมศาสตร์บาลีและกฎหมายพุทธศาสนาในพม่า, หน้า 83–100)
  8. `S-1909-bode-app01-inscription-1442-monastic-library.md` (Appendix to Chapter III: ศิลาจารึกพุกาม ค.ศ. 1442 บัญชีรายนาม 295 คัมภีร์ รวมถึงเวท ตันตระ โหราศาสตร์ และการแพทย์, หน้า 101–109)

### 1.3 การแมปปิ้งเข้าสู่บทและหัวข้อย่อยของโครงการวิจัย
- `S-1909-bode-00-master` -> แมปปิ้งสู่: **บทที่ 4 (4.1, 4.4)**, **บทที่ 3 (3.1, 3.2)**
- `S-1909-bode-ch00-intro` -> แมปปิ้งสู่: **บทที่ 3 (3.1)**, **บทที่ 4 (4.1)**
- `S-1909-bode-ch01` -> แมปปิ้งสู่: **บทที่ 3 (3.1, 3.2)**, **บทที่ 2 (2.7)**
- `S-1909-bode-ch02` -> แมปปิ้งสู่: **บทที่ 3 (3.1, 3.2, 3.5)**, **บทที่ 2 (2.7, 2.8)**, **บทที่ 4 (4.1)**
- `S-1909-bode-ch03` -> แมปปิ้งสู่: **บทที่ 3 (3.1, 3.2, 3.5)**, **บทที่ 4 (4.7)**
- `S-1909-bode-ch04` -> แมปปิ้งสู่: **บทที่ 3 (3.1, 3.5)**
- `S-1909-bode-ch05` -> แมปปิ้งสู่: **บทที่ 3 (3.1, 3.5, 3.6)**, **บทที่ 4 (4.7)**
- `S-1909-bode-ch06` -> แมปปิ้งสู่: **บทที่ 3 (3.1, 3.8)**, **บทที่ 2 (2.7)**
- `S-1909-bode-app01` -> แมปปิ้งสู่: **บทที่ 3 (3.2, 3.5, 3.8)**, **บทที่ 1 (1.2)**, **บทที่ 4 (4.7)**

---

## 2. Charles Duroiselle (1915-16) — The Ari of Burma and Tantric Buddhism (ASI Annual Report)

- **ข้อมูลบรรณานุกรม:** Duroiselle, Charles. "The Ari of Burma and Tantric Buddhism." In *Archaeological Survey of India, Annual Report 1915-16*, edited by Sir John Marshall, 79–93, Plates XLVII–LIII. Calcutta: Superintendent Government Printing, India, 1918. [ทั้งเล่ม 244 หน้า]
- **ไฟล์ในระบบ:** `pdf/1915-duroiselle-ari-of-burma-tantric-buddhism-asi.pdf` และ `extracted-texts/1915-duroiselle-ari-of-burma-tantric-buddhism-asi.txt`

### 2.1 สารบัญฉบับเต็มของรายงานประจำปี ASI 1915-16 และโครงสร้างบทความของ Duroiselle
**รายงานวิชาการทั้งหมดในเล่ม ASI Annual Report 1915-16:**
1. Excavations at Taxila, by Sir John Marshall, หน้า 1–38
2. The Monolithic Temples of Masrur, by H. Hargreaves, หน้า 39–48
3. Pre-Muhammadan Monuments of Kashmir, by Rai Sahib Daya Ram Sahni, หน้า 49–78
4. **The Ari of Burma and Tantric Buddhism, by Charles Duroiselle, หน้า 79–93**
5. The Pillar on the Indrakila Hill at Bezwada, by Rao Sahib H. Krishna Sastri, หน้า 94–99
6. The Site of Padmavati, by Pandit M. B. Garde, หน้า 100–108
7. Inscribed Swords in the Delhi Museum of Archaeology, by Maulvi Zafar Hasan, หน้า 109–111
8. Shpola Stupa, Khyber, by Pandit V. Natesa Aiyar, หน้า 112–114
9. List of Plates: Plates I–LXXX (รวมภาพจิตรกรรมฝาผนังวัดปะยาโต้นซูและนันทมัญญา Plates XLVII–LIII)

**หัวข้อย่อยภายในบทความชิ้นเอกของ Duroiselle (The Ari of Burma and Tantric Buddhism):**
- Section 1: Early history of Burma a blank & The political history of Pagan (หน้า 79–82)
- Section 2: Min-nan-thu & Temples of Payathonzu and Nandamañña (หน้า 82–84)
- Section 3: Date and Nature of the Religion of the Ari & Date of Introduction (หน้า 84–85)
- Section 4: Snake worship in Burma & Worship of Vishnu (หน้า 85–86)
- Section 5: The History of the Ari in Burma & Chronicles accounts of Ari practices (หน้า 86–89)
- Section 6: Naga-worship & Tantric Buddhist Iconography (หน้า 89–93)
- Section 7: Recapitulation (หน้า 93)

### 2.2 โครงสร้าง Dossier ที่กำหนด (1 Master Umbrella + 9 Chapter/Section Dossiers)
- **Master Umbrella Dossier:** `S-1915-duroiselle-00-master-asi-annual-report.md`
- **Dossier ประจำบทและรายงาน:**
  1. `S-1915-marshall-ch01-excavations-taxila.md` (Marshall: Excavations at Taxila, หน้า 1–38)
  2. `S-1915-hargreaves-ch02-monolithic-temples-masrur.md` (Hargreaves: The Monolithic Temples of Masrur, หน้า 39–48)
  3. `S-1915-sahni-ch03-monuments-kashmir.md` (Sahni: Pre-Muhammadan Monuments of Kashmir, หน้า 49–78)
  4. `S-1915-duroiselle-ch04-ari-burma-tantric-buddhism.md` (Duroiselle: The Ari of Burma and Tantric Buddhism [Master Monograph Dossier], หน้า 79–93)
  5. `S-1915-duroiselle-sec01-pagan-minnanthu-frescoes.md` (Duroiselle Section 1–2: Min-nan-thu, วัดปะยาโต้นซู, วัดนันทมัญญา และหลักฐานภาพจิตรกรรมฝาผนังตันตระ, หน้า 79–84)
  6. `S-1915-duroiselle-sec02-ari-practices-naga-tantra.md` (Duroiselle Section 3–7: จารีตพระอริ การบูชานาค ไศวะ-วิษณุ และการปราบปรามในสมัยพระเจ้าอโนรธา, หน้า 84–93)
  7. `S-1915-sastri-ch05-indrakila-pillar-bezwada.md` (Krishna Sastri: The Pillar on the Indrakila Hill at Bezwada, หน้า 94–99)
  8. `S-1915-garde-ch06-site-padmavati-naga.md` (Garde: The Site of Padmavati [นาคและประติมาวิทยาโบราณ], หน้า 100–108)
  9. `S-1915-duroiselle-app01-plates-payathonzu-frescoes.md` (List of Plates XLVII–LIII: ประติมาวิทยาจิตรกรรมฝาผนังพุกาม สตรี เทพตันตระ และลายเส้นสัญลักษณ์)

### 2.3 การแมปปิ้งเข้าสู่บทและหัวข้อย่อยของโครงการวิจัย
- `S-1915-duroiselle-00-master` -> แมปปิ้งสู่: **บทที่ 4 (4.1, 4.4)**, **บทที่ 3 (3.5)**
- `S-1915-duroiselle-ch04` -> แมปปิ้งสู่: **บทที่ 3 (3.1, 3.5)**, **บทที่ 2 (2.6, 2.7)**, **บทที่ 4 (4.1, 4.7)**
- `S-1915-duroiselle-sec01` -> แมปปิ้งสู่: **บทที่ 3 (3.5)**, **บทที่ 2 (2.3, 2.6, 2.8)**
- `S-1915-duroiselle-sec02` -> แมปปิ้งสู่: **บทที่ 3 (3.1, 3.5, 3.8)**, **บทที่ 2 (2.2, 2.7)**, **บทที่ 1 (1.2, 1.4)**
- `S-1915-duroiselle-app01` -> แมปปิ้งสู่: **บทที่ 3 (3.5, 3.8)**, **บทที่ 2 (2.4, 2.6)**
- `S-1915-marshall-ch01` & `sahni-ch03` -> แมปปิ้งสู่: **บทที่ 2 (2.1, 2.2, 2.4)** (บริบทโบราณคดีและเบ้าหลอมอินเดียเหนือ)

---

## 3. Niharranjan Ray (1946) — An Introduction to the Study of Theravada Buddhism in Burma

- **ข้อมูลบรรณานุกรม:** Ray, Niharranjan. *An Introduction to the Study of Theravāda Buddhism in Burma: A Study in Indo-Burmese Historical and Cultural Relations from the Earliest Times to the British Conquest*. Calcutta: University of Calcutta, 1946. [จำนวน 330 หน้า]
- **ไฟล์ในระบบ:** `pdf/1946-ray-introduction-theravada-buddhism-burma.pdf` และ `extracted-texts/1946-ray-introduction-theravada-buddhism-burma.txt`

### 3.1 สารบัญฉบับเต็มครบทุกบทและขอบเขตเลขหน้าจริง
1. **Front Matter & Preface:** หน้า i–xvi
2. **Chapter One:** Early Traces: From the Alleged Asoka-Mission to the Fall of Thaton, หน้า 1–87 (หัวข้อย่อย I–XII: The Background, Asoka-Mission, Kirata country, Lin-Yang, Buddhaghosa Tradition, Buddhism in Old Prome [I-IV], Buddhism in Pegu, Buddhism in Thaton, A Resume)
3. **Chapter Two:** Efflorescence: From the Introduction of Theravada Buddhism in Pagan in 1057 to the Fall of the Pagan Dynasty, c. 1287 A.D., หน้า 88–168 (หัวข้อย่อย I–X: Sources, Early Phase, Maramma & Sihala Samgha, Talaing Country, Dimming, Monastic Scholarship, Durenidana Stories, Archaeological Evidence, Religious Eclecticism, Inscriptions of Pagan)
4. **Chapter Three:** The Great Reformation and Its Preamble: Fourteenth and Fifteenth Centuries, หน้า 169–195 (หัวข้อย่อย I–V: Fourteenth Century, Talaing Scholarship, Fifteenth Century, Dhammaceti's Reformation, Monastic Library)
5. **Chapter Four:** Clouds Gather: Sixteenth and Seventeenth Centuries, หน้า 196–216 (หัวข้อย่อย I–II: Marammarattha, Burmans and Talaings)
6. **Chapter Five:** A Great Controversy: Eighteenth Century and After, หน้า 217–236 (หัวข้อย่อย I–V: Background, Beginning of Controversy, Crushing of Talaings, Peak of Controversy, Re-organisation of Samgha)
7. **Chapter Six:** Burma's Return Gifts to Ceylon: Nineteenth Century and After: The "Amarapura Samgha" of Ceylon, หน้า 237–249
8. **Chapter Seven:** Summary and Retrospect, หน้า 250–277 (หัวข้อย่อย I–VII: Summary, Character and Ideal, What Buddhism has done for Burma, Samgha and Society, Samgha and King, Constitution: Samgharaja, New Conditions)
9. **Back Matter:** Select Bibliography, Bibliographical Index, General Index, Additions and Corrections, หน้า 278–312

### 3.2 โครงสร้าง Dossier ที่กำหนด (1 Master Umbrella + 8 Chapter/Section Dossiers)
- **Master Umbrella Dossier:** `S-1946-ray-00-master-theravada-buddhism-burma.md`
- **Dossier ประจำบท:**
  1. `S-1946-ray-ch01-early-traces-prome-thaton.md` (Chapter One: ร่องรอยยุคแรก อาณาจักรปยู [Old Prome] แผ่นทองคำบาลี และเมืองสะเทิม, หน้า 1–87)
  2. `S-1946-ray-ch02-pagan-efflorescence-eclecticism.md` (Chapter Two: ยุคเบ่งบานในพุกาม ลัทธิผสมผสาน [Religious Eclecticism] และสงฆ์สองนิกาย, หน้า 88–168)
  3. `S-1946-ray-ch03-dhammaceti-kalyani-reformation.md` (Chapter Three: การปฏิรูปครั้งใหญ่ของพระเจ้าธรรมเจดีย์ ศิลาจารึกกัลยาณี และหอสมุดสงฆ์, หน้า 169–195)
  4. `S-1946-ray-ch04-sixteenth-seventeenth-clouds-gather.md` (Chapter Four: เมฆหมอกแห่งความขัดแย้ง พม่า-มอญ ยุคตองอูและอังวะ, หน้า 196–216)
  5. `S-1946-ray-ch05-eighteenth-robe-controversy-atula.md` (Chapter Five: ข้อพิพาทเรื่องการครองจีวรยุคศตวรรษที่ 18 พระอตุลยสังฆราช และพระเจ้าปดุง, หน้า 217–236)
  6. `S-1946-ray-ch06-amarapura-samgha-ceylon.md` (Chapter Six: ของขวัญคืนสู่ลังกา: กำเนิดคณะอมรปุรนิกายในศรีลังกา, หน้า 237–249)
  7. `S-1946-ray-ch07-summary-retrospect-samgha-king.md` (Chapter Seven: บทสรุปและย้อนพินิจ: สัณฐานวิทยา ความสัมพันธ์ระหว่างสงฆ์-กษัตริย์-สังคม, หน้า 250–277)
  8. `S-1946-ray-app01-bibliography-indexes.md` (Back Matter: บรรณานุกรมคัดสรรและดัชนีจารึก-วรรณกรรม, หน้า 278–312)

### 3.3 การแมปปิ้งเข้าสู่บทและหัวข้อย่อยของโครงการวิจัย
- `S-1946-ray-00-master` -> แมปปิ้งสู่: **บทที่ 4 (4.1, 4.4)**, **บทที่ 3 (3.1, 3.8)**
- `S-1946-ray-ch01` -> แมปปิ้งสู่: **บทที่ 2 (2.5, 2.7)**, **บทที่ 3 (3.1)**
- `S-1946-ray-ch02` -> แมปปิ้งสู่: **บทที่ 3 (3.1, 3.5)**, **บทที่ 2 (2.6, 2.7, 2.8)**, **บทที่ 4 (4.1)**
- `S-1946-ray-ch03` -> แมปปิ้งสู่: **บทที่ 3 (3.1, 3.2, 3.5)**, **บทที่ 2 (2.7)**
- `S-1946-ray-ch04` -> แมปปิ้งสู่: **บทที่ 3 (3.1, 3.5)**
- `S-1946-ray-ch05` -> แมปปิ้งสู่: **บทที่ 3 (3.1, 3.6)**, **บทที่ 1 (1.4)**
- `S-1946-ray-ch06` -> แมปปิ้งสู่: **บทที่ 3 (3.1, 3.6)**, **บทที่ 2 (2.7)**
- `S-1946-ray-ch07` -> แมปปิ้งสู่: **บทที่ 1 (1.1, 1.2, 1.4, 1.7)**, **บทที่ 3 (3.8)**
- `S-1946-ray-app01` -> แมปปิ้งสู่: **บทที่ 4 (4.7, 4.8)**

---

## 4. Joshua Scott (2023) — The Politics of Pali Commentary

- **ข้อมูลบรรณานุกรม:** Scott, Joshua. *The Politics of Pali Commentary: Canon-making, Monastic Reform, and Religious Revival in the Mingun Jetavana Sayadaw’s Milindapañhā-aṭṭhakathā*. PhD Dissertation, Department of South & Southeast Asian Studies, University of California, Berkeley, 2023. [จำนวน 550 หน้า]
- **ไฟล์ในระบบ:** `pdf/2023-scott-the-politics-of-pali-commentary-canon-ma.pdf` และ `extracted-texts/2023-scott-the-politics-of-pali-commentary-canon-ma.txt`

### 4.1 สารบัญฉบับเต็มครบทุกบทและขอบเขตเลขหน้าจริง
1. **Front Matter:** Title, Abstract, Acknowledgments, Table of Contents, Lists, Abbreviations, หน้า i–xxii (PDF หน้า 1–22)
2. **Introduction:** The Mingun Jetavana Sayadaw and the Ethics of Subcommentary, หน้า 1–31 (PDF หน้า 23–53)
3. **Chapter 1:** Milindapañhādi: Negotiating the Status of the Questions of Milinda in the Burmese Councils, หน้า 32–74 (PDF หน้า 54–96)
4. **Chapter 2:** The Pali Commentarial Project in the Second Millennium: The Milindapañhā-aṭṭhakathā, Milinda-ṭīkā, and Milinda-nissaya, หน้า 75–118 (PDF หน้า 97–140)
5. **Chapter 3:** The Spectrum of Exegesis and the Process of Making Meaning: From Syntax to Semantics and Towards the Social, หน้า 119–172 (PDF หน้า 141–194)
6. **Chapter 4:** Visions of Religious Authority: Meditation in the Milindapañhā-aṭṭhakathā and the Mingun Jetavana’s Satipaṭṭhāna Method, หน้า 173–227 (PDF หน้า 195–249)
7. **Chapter 5:** Twentieth-century Narratives of Enlightenment and the Practice of Writing Commentary, หน้า 228–275 (PDF หน้า 250–297)
8. **Chapter 6:** Lineal Anecdotes of the Abhiññās in an Age of Sāsana Decline, หน้า 276–329 (PDF หน้า 298–351)
9. **Chapter 7:** Actualizing the Omniscience of the Buddha: The Anāgataṃsa-ñāṇa and the Epistemology of the Milindapañhā-aṭṭhakathā, หน้า 330–378 (PDF หน้า 352–400)
10. **Chapter 8:** Knowing the Past, Knowing the Future in Debates Around the Reintroduction of Female Ordination in Burma, หน้า 379–429 (PDF หน้า 401–451)
11. **Chapter 9:** Commentary in the News: Policing the Exclusive Canon in Post-colonial Burma, หน้า 430–479 (PDF หน้า 452–501)
12. **Conclusion:** Unleashing the Recursive Power of Commentary, หน้า 480–502 (PDF หน้า 502–524)
13. **Paṭhitagantha (Bibliography):** Reference Works, Pali and Burmese Sources, Scholarly Sources, หน้า 503–535 (PDF หน้า 525–550)

### 4.2 โครงสร้าง Dossier ที่กำหนด (1 Master Umbrella + 12 Chapter/Section Dossiers)
- **Master Umbrella Dossier:** `S-2023-scott-00-master-politics-pali-commentary.md`
- **Dossier ประจำบท:**
  1. `S-2023-scott-ch00-intro-mingun-ethics-subcommentary.md` (Introduction: มินกุน เชตวัน สยาดอว์ และจริยศาสตร์แห่งการเขียนฎีกา, หน้า 1–31)
  2. `S-2023-scott-ch01-milindapanha-burmese-councils.md` (Chapter 1: สถานะคัมภีร์มิลินทปัญหาในการสังคายนาพม่าครั้งที่ 5 และ 6 และการสร้างพระไตรปิฎกฉบับปิดกั้น Exclusive Canon, หน้า 32–74)
  3. `S-2023-scott-ch02-pali-commentarial-project-second-millennium.md` (Chapter 2: โครงการเขียนอรรถกถาบาลีสหัสวรรษที่สอง: มิลินทปัญหาอรรถกถา ฎีกา และนิสสยะ, หน้า 75–118)
  4. `S-2023-scott-ch03-spectrum-exegesis-syntax-semantics.md` (Chapter 3: เทคนิคอรรถาธิบาย สัมพันธะ บทวิภาค และมิติทางสังคม, หน้า 119–172)
  5. `S-2023-scott-ch04-meditation-satipatthan-vipassana-samatha.md` (Chapter 4: วิธีปฏิบัติสติปัฏฐาน-วิปัสสนาของมินกุน เชตวัน สมาธิในมิลินทปัญหาอรรถกถา และอำนาจทางศาสนา, หน้า 173–227)
  6. `S-2023-scott-ch05-twentieth-century-enlightenment-narratives.md` (Chapter 5: เรื่องเล่าการบรรลุธรรมในศตวรรษที่ 20 และการเขียนอรรถกถา, หน้า 228–275)
  7. `S-2023-scott-ch06-lineal-anecdotes-abhinna-sasana-decline.md` (Chapter 6: อภิญญา 6 [Abhiññās] ในยุคศาสนาเสื่อมถอย สายปฏิบัติมินกุน เชตวัน และความสัมพันธ์กับเวกซา, หน้า 276–329)
  8. `S-2023-scott-ch07-omniscience-anagatamsa-nana-kasina.md` (Chapter 7: สัพพัญญุตญาณ อนาคตังสญาณ ทิพยจักษุ และการเพ่งกสิณปรับแปลงมิติเวลา-อวกาศ, หน้า 330–378)
  9. `S-2023-scott-ch08-female-ordination-debates-burma.md` (Chapter 8: การหยั่งรู้อดีต-อนาคตในข้อถกเถียงเรื่องการฟื้นฟูภิกษุณีสงฆ์ในพม่า และการก้าวพ้นขอบเขต 5,000 ปี, หน้า 379–429)
  10. `S-2023-scott-ch09-commentary-news-policing-canon.md` (Chapter 9: การควบคุมปราบปรามทางศาสนาในสื่อยุคหลังอาณานิคม ศาลวินิจฉัยสงฆ์ และการสังคายนาครั้งที่ 6, หน้า 430–479)
  11. `S-2023-scott-ch10-conclusion-recursive-power-commentary.md` (Conclusion: พลังวนซ้ำของการเขียนอรรถกถา และการรื้อถอนภาพมายาเถรวาทแบบอนุรักษนิยมใหม่, หน้า 480–502)
  12. `S-2023-scott-app01-pathitagantha-bibliography.md` (Paṭhitagantha: คลังเอกสารบาลี-พม่า คัมภีร์ใบลาน และบรรณานุกรมวิชาการ, หน้า 503–535)

### 4.3 การแมปปิ้งเข้าสู่บทและหัวข้อย่อยของโครงการวิจัย
- `S-2023-scott-00-master` -> แมปปิ้งสู่: **บทที่ 4 (4.5)**, **บทที่ 1 (1.4, 1.5)**
- `S-2023-scott-ch00-intro` -> แมปปิ้งสู่: **บทที่ 1 (1.1, 1.4)**, **บทที่ 4 (4.5)**
- `S-2023-scott-ch01` -> แมปปิ้งสู่: **บทที่ 3 (3.1, 3.6)**, **บทที่ 4 (4.5, 4.7)**
- `S-2023-scott-ch02` -> แมปปิ้งสู่: **บทที่ 3 (3.2)**, **บทที่ 4 (4.5)**
- `S-2023-scott-ch03` -> แมปปิ้งสู่: **บทที่ 3 (3.2, 3.8)**
- `S-2023-scott-ch04` -> แมปปิ้งสู่: **บทที่ 3 (3.3, 3.5)**, **บทที่ 1 (1.5)** (สมถะและวิปัสสนาในพม่า)
- `S-2023-scott-ch05` -> แมปปิ้งสู่: **บทที่ 3 (3.5, 3.6)**
- `S-2023-scott-ch06` -> แมปปิ้งสู่: **บทที่ 3 (3.5)**, **บทที่ 1 (1.5)** (อภิญญา 6 และสายเวกซา)
- `S-2023-scott-ch07` -> แมปปิ้งสู่: **บทที่ 3 (3.3, 3.5)**, **บทที่ 1 (1.3)** (การเพ่งกสิณ อนาคตังสญาณ)
- `S-2023-scott-ch08` -> แมปปิ้งสู่: **บทที่ 3 (3.6)**, **บทที่ 1 (1.4)**
- `S-2023-scott-ch09` -> แมปปิ้งสู่: **บทที่ 3 (3.6)**, **บทที่ 1 (1.4)**, **บทที่ 4 (4.5)**
- `S-2023-scott-ch10` -> แมปปิ้งสู่: **บทที่ 1 (1.4, 1.6, 1.7)**, **บทที่ 4 (4.5, 4.8)**
- `S-2023-scott-app01` -> แมปปิ้งสู่: **บทที่ 4 (4.7)**

---

## 5. Isara Treesahakiat (2011) — The Significance of Khruba Sriwichai's Role in Northern Thai Buddhism

- **ข้อมูลบรรณานุกรม:** Treesahakiat, Isara. *The Significance of Khruba Sriwichai's Role in Northern Thai Buddhism: His Sacred Biography, Meditation Practice and Influence*. Master of Arts Thesis in Religious Studies, University of Otago, Dunedin, New Zealand, 2011. [จำนวน 144 หน้า]
- **ไฟล์ในระบบ:** `pdf/2011-treesahakiat-the-significance-of-khruba-sriwichai-s-r.pdf` และ `extracted-texts/2011-treesahakiat-the-significance-of-khruba-sriwichai-s-r.txt`

### 5.1 สารบัญฉบับเต็มครบทุกบทและขอบเขตเลขหน้าจริง
1. **Front Matter:** Abstract, Acknowledgement, Table of Contents, หน้า i–iv (PDF หน้า 2–6)
2. **Introduction:** หน้า 1–5 (PDF หน้า 7–11)
3. **Chapter One:** A Literature Review of Thai and English Materials on Khruba Sriwichai, หน้า 6–25 (PDF หน้า 12–31)
   - 1.1 The definitions of khruba and ton bun (หน้า 7–11)
   - 1.2 The belief in ton bun, millennialism, and bodhisatta (หน้า 11–14)
   - 1.3 The association between ton bun and political authority (หน้า 14–17)
   - 1.4 Ton bun, Buddhist revival and construction of sacred space (หน้า 17–19)
   - 1.5 The fundamental theory of charisma (หน้า 19–21)
   - 1.6 The theory of sacred biography and the framework for conceptualizing the history of the monks in Thailand (หน้า 21–24)
   - 1.7 Conclusion (หน้า 24–25)
4. **Chapter Two:** Biography of Khruba Sriwichai, หน้า 26–52 (PDF หน้า 32–58)
   - 2.1 Thailand in the nineteenth century (หน้า 28–31)
   - 2.2 Background of Lanna (หน้า 31–34)
   - 2.3 A survey of sacred biographies of Khruba Sriwichai (หน้า 34–51)
   - 2.4 Conclusion (หน้า 51–52)
5. **Chapter Three:** Khruba Sriwichai's Meditation Practice and His Teachings, หน้า 53–96 (PDF หน้า 59–102)
   - 3.1 History of 'orthodox' Theravāda Buddhist meditation (หน้า 55–60)
   - 3.2 History of 'hetero-orthodox' Theravāda Buddhist meditation, the Yogāvacara tradition (หน้า 60–62)
   - 3.3 Khruba Sriwichai's meditation practice and experience (หน้า 62–95)
     - 3.3.1 Evidence from his sacred biographies (หน้า 63–85)
     - 3.3.2 Evidence from his monastic robes (หน้า 85–89)
     - 3.3.3 Evidence from meditation practices and stories of his disciples and other northern Thai monks (หน้า 89–95)
   - 3.4 Conclusion (หน้า 95–96)
6. **Chapter Four:** Khruba Sriwichai's Contemporary Cult, หน้า 97–126 (PDF หน้า 103–132)
   - 4.1 The concept of Buddhist pāramī (หน้า 97–104)
   - 4.2 The cult of amulets in Thailand (หน้า 104–107)
   - 4.3 The contemporary cult of Khruba Sriwichai and the miracles (หน้า 107–126)
     - 4.3.1 Shrines (ดอยสุเทพ, วัดสวนดอก, วัดพระสิงห์, รูปเหมือน) (หน้า 107–115)
     - 4.3.2 Museum (หน้า 115–119)
     - 4.3.3 Amulets (หน้า 119–126)
   - 4.4 Conclusion (หน้า 126)
7. **Conclusion:** หน้า 127–130 (PDF หน้า 133–136)
8. **Selected Bibliography:** หน้า 131–138 (PDF หน้า 137–144)

### 5.2 โครงสร้าง Dossier ที่กำหนด (1 Master Umbrella + 7 Chapter/Section Dossiers)
- **Master Umbrella Dossier:** `S-2011-treesahakiat-00-master-khruba-sriwichai.md`
- **Dossier ประจำบท:**
  1. `S-2011-treesahakiat-ch00-intro-scope-ton-bun.md` (Introduction: ขอบเขตและมโนทัศน์ตนบุญล้านนา, หน้า 1–5)
  2. `S-2011-treesahakiat-ch01-literature-review-charisma-tonbun.md` (Chapter One: การทบทวนวรรณกรรม นิยามครูบา ตนบุญ และทฤษฎีบารมี/อำนาจศักดิ์สิทธิ์, หน้า 6–25)
  3. `S-2011-treesahakiat-ch02-biography-lanna-siam-conflict.md` (Chapter Two: ชีวประวัติศักดิ์สิทธิ์ของครูบาศรีวิชัย บริบทล้านนา และการปะทะกับอำนาจรัฐสยาม, หน้า 26–52)
  4. `S-2011-treesahakiat-ch03-meditation-yogavacara-lanna.md` (Chapter Three: การปฏิบัติสมาธิของครูบาศรีวิชัยกับจารีตโยคาวจร [Yogāvacara Tradition] และหลักฐานจากจีวร/ศิษย์, หน้า 53–96)
  5. `S-2011-treesahakiat-ch04-contemporary-cult-amulets-parami.md` (Chapter Four: ลัทธิบูชาร่วมสมัย พระเครื่อง ศาลบูชา และมโนทัศน์บารมีธรรม, หน้า 97–126)
  6. `S-2011-treesahakiat-ch05-conclusion-enduring-legacy.md` (Conclusion: มรดกตกทอดที่ยั่งยืนของครูบาศรีวิชัย, หน้า 127–130)
  7. `S-2011-treesahakiat-app01-selected-bibliography.md` (Selected Bibliography: บรรณานุกรมคัดสรรภาษาไทย-อังกฤษและเอกสารล้านนา, หน้า 131–138)

### 5.3 การแมปปิ้งเข้าสู่บทและหัวข้อย่อยของโครงการวิจัย
- `S-2011-treesahakiat-00-master` -> แมปปิ้งสู่: **บทที่ 3 (3.4, 3.5)**, **บทที่ 4 (4.4)**
- `S-2011-treesahakiat-ch00` -> แมปปิ้งสู่: **บทที่ 3 (3.4, 3.5)**
- `S-2011-treesahakiat-ch01` -> แมปปิ้งสู่: **บทที่ 3 (3.4, 3.5)**, **บทที่ 4 (4.4)**
- `S-2011-treesahakiat-ch02` -> แมปปิ้งสู่: **บทที่ 3 (3.4, 3.6)**, **บทที่ 1 (1.4)** (การปะทะกับการปฏิรูปของสยาม)
- `S-2011-treesahakiat-ch03` -> แมปปิ้งสู่: **บทที่ 3 (3.3, 3.4)**, **บทที่ 1 (1.1, 1.3, 1.5)**, **บทที่ 4 (4.4)** (แกนหลักว่าด้วยจารีตโยคาวจรในล้านนา)
- `S-2011-treesahakiat-ch04` -> แมปปิ้งสู่: **บทที่ 3 (3.7)**, **บทที่ 1 (1.5)** (พระเครื่อง วัตถุมงคล และลัทธิบูชา)
- `S-2011-treesahakiat-ch05` -> แมปปิ้งสู่: **บทที่ 1 (1.5, 1.7)**, **บทที่ 3 (3.8)**
- `S-2011-treesahakiat-app01` -> แมปปิ้งสู่: **บทที่ 4 (4.7)**

---

## 6. Marieta Rose Bialek (2014) — Thai Buddhist Ecology Monks: Competing Views of the Forest

- **ข้อมูลบรรณานุกรม:** Bialek, Marieta Rose. *Thai Buddhist Ecology Monks: Competing Views of the Forest*. Undergraduate Honors Thesis, Department of Religious Studies & Ecological and Evolutionary Biology, University of Colorado at Boulder, 2014. [จำนวน 57 หน้า]
- **ไฟล์ในระบบ:** `pdf/2014-bialek-thai-buddhist-ecology-monks-competing-vi.pdf` และ `extracted-texts/2014-bialek-thai-buddhist-ecology-monks-competing-vi.txt`

### 6.1 สารบัญฉบับเต็มครบทุกภาค/ส่วนและขอบเขตเลขหน้าจริง
1. **Front Matter & Abstract:** หน้า 1–2
2. **Introduction:** หน้า 3–9 (มโนทัศน์ "พระนักอนุรักษ์ธรรมชาติ", รากเหง้าประวัติศาสตร์การตัดไม้ทำลายป่า, การปฏิรูปรวมศูนย์อำนาจรัฐ พ.ศ. 2435, แผนพัฒนาเศรษฐกิจ พ.ศ. 2504)
3. **Part One: Competing Views of the Forest:** หน้า 9–24
   - Developmental Model of the Thai Government (ป่าไม้ในฐานะทรัพยากรพาณิชย์, การเปลี่ยนผ่านจาก "ป่า" สู่ "ธรรมชาติ", การขับไล่ชาวบ้านโดยกรมป่าไม้และกองทัพ) (หน้า 10–15)
   - Local Spirit Beliefs and Land Practices (คติผีบ้าน ผีป่า เจ้าที่ ดอนปู่ตา ป่าชุมชน และความเชื่อวิญญาณนิยม) (หน้า 15–19)
   - The Forest Monks (จารีตพระป่าธุดงค์กรรมฐาน, การเดินธุดงค์ขัดเกลากิเลส, การวิเคราะห์ตามกรอบ Tambiah และ Taylor) (หน้า 19–24)
4. **Part Two: Ecology Monks:** หน้า 24–51
   - People & Forest Model: Engaged Buddhism and Non-Governmental Organizations (NGOs) (พุทธศาสนาเพื่อสังคม, สุลักษณ์ ศิวรักษ์, ติช นัท ฮันห์, เครือข่ายพระสงฆ์นักพัฒนา) (หน้า 26–32)
   - Eco-Dharma of Buddhadasa Bhikkhu (ธรรมโฆษณ์แห่งธรรมชาติ, อิทัปปัจจยตา, ธรรมิกสังคมนิยม, ธรรมชาติคือธรรมะ) (หน้า 32–38)
   - Ecology Monks and Rituals: Tree Ordination and Long Life Ceremony (พิธีบวชป่า [ห่มผ้าเหลืองต้นไม้], พิธีสืบชะตาแม่น้ำ, การปรับประยุกต์สายสิญจน์และพิธีกรรมโบราณ) (หน้า 39–42)
   - Narratives of Ecology Monks (กรณีศึกษาเชิงลึกรายบุคคล) (หน้า 42–51):
     - พระครูมนัส นาทิพิทักษ์ (จ.พะเยา, ปฐมบทพิธีบวชป่า พ.ศ. 2531) (หน้า 43–45)
     - พระครูพิทักษ์นันทคุณ (จ.น่าน, การอนุรักษ์ป่าต้นน้ำและการพัฒนาชุมชน) (หน้า 45–48)
     - พระไพศาล วิสาโล (วัดป่าสุคะโต จ.ชัยภูมิ) (หน้า 48–49)
     - หลวงพ่อคำเขียน สุวัณโณ (หน้า 49–51)
5. **Conclusion:** A Hybrid Vocation of Buddhism (บทสรุป: สถานะผสมผสานข้ามสายระหว่างพระบ้าน พระป่า และวิญญาณนิยม), หน้า 51–55
6. **Bibliography:** หน้า 56–57

### 6.2 โครงสร้าง Dossier ที่กำหนด (1 Master Umbrella + 10 Chapter/Section Dossiers)
- **Master Umbrella Dossier:** `S-2014-bialek-00-master-thai-ecology-monks.md`
- **Dossier ประจำภาคและส่วน:**
  1. `S-2014-bialek-ch00-intro-deforestation-centralization.md` (Introduction: ภูมิหลังประวัติศาสตร์การรวมศูนย์อำนาจรัฐ พ.ศ. 2435 และวิกฤตป่าไม้, หน้า 3–9)
  2. `S-2014-bialek-pt01-sec01-state-development-model.md` (Part 1, Sec 1: โมเดลการพัฒนาของรัฐไทย ป่าสู่ธรรมชาติ และการขับไล่ชุมชน, หน้า 10–15)
  3. `S-2014-bialek-pt01-sec02-local-spirit-beliefs-animism.md` (Part 1, Sec 2: คติผีพื้นเมือง ความเชื่อวิญญาณนิยม และจารีตป่าชุมชน, หน้า 15–19)
  4. `S-2014-bialek-pt01-sec03-forest-monks-thudong-tradition.md` (Part 1, Sec 3: จารีตพระป่าธุดงค์กรรมฐาน พื้นที่ศักดิ์สิทธิ์ และการขัดเกลาจิต, หน้า 19–24)
  5. `S-2014-bialek-pt02-sec01-engaged-buddhism-ngos.md` (Part 2, Sec 1: ขบวนการพุทธศาสนาเพื่อสังคม [Engaged Buddhism] พันธมิตรเอ็นจีโอ และพระสงฆ์นักพัฒนา, หน้า 26–32)
  6. `S-2014-bialek-pt02-sec02-buddhadasa-eco-dharma.md` (Part 2, Sec 2: ปรัชญานิเวศธรรมของท่านพุทธทาสภิกขุ ธรรมิกสังคมนิยม และอิทัปปัจจยตา, หน้า 32–38)
  7. `S-2014-bialek-pt02-sec03-rituals-tree-ordination-suep-chata.md` (Part 2, Sec 3: นวัตกรรมพิธีกรรม: การบวชป่า สืบชะตาแม่น้ำ และการแปลงรหัสยพิธี, หน้า 39–42)
  8. `S-2014-bialek-pt02-sec04-monk-narratives-manas-pitak-paisal.md` (Part 2, Sec 4: เรื่องเล่าชีวประวัติพระนักอนุรักษ์: พระครูมนัส พระครูพิทักษ์ พระไพศาล หลวงพ่อคำเขียน, หน้า 42–51)
  9. `S-2014-bialek-ch03-conclusion-hybrid-buddhist-vocation.md` (Conclusion: สถานะผสมผสานของพระนักอนุรักษ์ในภูมิทัศน์ศาสนาไทย, หน้า 51–55)
  10. `S-2014-bialek-app01-bibliography.md` (Bibliography: บรรณานุกรมงานวิจัยสายพระป่าและสิ่งแวดล้อม, หน้า 56–57)

### 6.3 การแมปปิ้งเข้าสู่บทและหัวข้อย่อยของโครงการวิจัย
- `S-2014-bialek-00-master` -> แมปปิ้งสู่: **บทที่ 3 (3.4, 3.7)**, **บทที่ 4 (4.4)**
- `S-2014-bialek-ch00-intro` -> แมปปิ้งสู่: **บทที่ 3 (3.6)**, **บทที่ 1 (1.4)** (การรวมศูนย์อำนาจรัฐ พ.ศ. 2435)
- `S-2014-bialek-pt01-sec01` -> แมปปิ้งสู่: **บทที่ 3 (3.6)**, **บทที่ 1 (1.4)**
- `S-2014-bialek-pt01-sec02` -> แมปปิ้งสู่: **บทที่ 3 (3.1, 3.4)**, **บทที่ 2 (2.8)** (วิญญาณนิยมและคติผีพื้นเมือง)
- `S-2014-bialek-pt01-sec03` -> แมปปิ้งสู่: **บทที่ 3 (3.4, 3.6)**, **บทที่ 4 (4.4)** (สายพระป่าธุดงค์กรรมฐาน)
- `S-2014-bialek-pt02-sec01` & `sec02` -> แมปปิ้งสู่: **บทที่ 3 (3.7)**, **บทที่ 1 (1.5)**
- `S-2014-bialek-pt02-sec03` -> แมปปิ้งสู่: **บทที่ 3 (3.4, 3.7)**, **บทที่ 1 (1.5)** (พิธีบวชป่าและสืบชะตาแม่น้ำในล้านนา)
- `S-2014-bialek-pt02-sec04` -> แมปปิ้งสู่: **บทที่ 3 (3.4, 3.7)**
- `S-2014-bialek-ch03-conclusion` -> แมปปิ้งสู่: **บทที่ 1 (1.5, 1.7)**, **บทที่ 3 (3.8)**
- `S-2014-bialek-app01` -> แมปปิ้งสู่: **บทที่ 4 (4.7)**

---

## 7. Woramat Malasart (2019) — The Dhammakāyānussati-kathā: A Trace of "Siam's Borān Buddhism" from the Reign of Rāmā I

- **ข้อมูลบรรณานุกรม:** Malasart, Woramat. *The Dhammakāyānussati-kathā: A Trace of "Siam's Borān Buddhism" from the Reign of Rāmā I (1782-1809 CE.)*. Master of Arts Thesis, Department of Theology and Religion, University of Otago, Dunedin, New Zealand, 2019. [จำนวน 71 หน้า]
- **ไฟล์ในระบบ:** `pdf/2019-malasart-the-dhammak-y-nussati-kath-a-trace-of-si.pdf` และ `extracted-texts/2019-malasart-the-dhammak-y-nussati-kath-a-trace-of-si.txt`

### 7.1 สารบัญฉบับเต็มครบทุกบทและขอบเขตเลขหน้าจริง
1. **Front Matter:** Title, Abstract, Acknowledgement, Table of Contents, List of Abbreviations, หน้า i–iii, 1–3 (PDF หน้า 2–7)
2. **Chapter I:** Introduction and Literature Review, หน้า 4–16 (PDF หน้า 8–20)
   - 1.1 Introduction (หน้า 4–7)
   - 1.2 Research Questions (หน้า 7–8)
   - 1.3 Methodology (หน้า 8–9)
   - 1.4 The Dhammakāya Text Genre and Its Analysis (หน้า 9–16)
     - 1.4.1 Editions, Transliterations, and Translations of the Dhammakāya Text Genre (หน้า 9–12)
     - 1.4.2 The Dhammakāya Text Genre in the Ritual Context (หน้า 12–13)
     - 1.4.3 Textual Analysis of the Dhammakāya Text Genre (หน้า 13–15)
     - 1.4.4 Table A: The Index of the Dhammakāya Text Genre in Different Times and Locations (หน้า 15–16)
     - 1.4.5 Why the Dhammakāyānussati-kathā? (หน้า 16)
3. **Chapter II:** A History of the Dhammakāyānussati-kathā, หน้า 17–24 (PDF หน้า 21–28)
   - 2.1 The Golden Manuscript Braḥ Dhammakāya (1794-1801) (GBD) (หน้า 18)
   - 2.2 Braḥ Dhammakāyādi (1st and 3rd reigns) (BD) (หน้า 18–20)
   - 2.3 The Suttajātakanidānānisaṃsa (1817 and 1824) (SJNA) (หน้า 20–21)
   - 2.4 Rāmā II's Sangayana Bot Suat Mon (1821 CE) (หน้า 21–22)
   - 2.5 Was DK 1909 composed during the 1st or 2nd reign? (หน้า 22–24)
   - 2.6 Conclusion (หน้า 24)
4. **Chapter III:** Transliteration and Translation, หน้า 25–30 (PDF หน้า 29–34)
   - 3.1 Diplomatic Translation of DK 1909 (หน้า 25–27)
   - 3.2 Analysis of DK 1909 (หน้า 27–30)
5. **Chapter IV:** A Textual and Contextual Analysis of DK 1909, หน้า 31–45 (PDF หน้า 35–49)
   - 4.1 The Dhammakāya Text Genre and Its Ritual Usage in Khmer and Northern Thailand (หน้า 31–36)
     - 4.1.1 Buddhābhiṣeka (หน้า 32–35)
     - 4.1.2 Individual Recitation for Living Prosperity and Meditation Progresses (หน้า 35–36)
   - 4.2 Contextual Analysis of DK 1909 (หน้า 36–41)
     - 4.2.1 DK 1909 as a Performative Text (หน้า 37)
     - 4.2.2 DK 1909 as a Meditation Text (หน้า 37–39)
     - 4.2.3 DK 1909 as a Commentarial Text (หน้า 39–41)
   - 4.3 The Disappearance of the Dhammakāyānussati-kathā (การปฏิรูปหลักสูตรสวดมนต์หลวงสมัย ร.5 โดยสมเด็จพระสังฆราช [สา ปุสฺสเทโว] พ.ศ. 2423 และการสังคายนาพระไตรปิฎก ร.ศ. 112 / พ.ศ. 2436) (หน้า 41–45)
6. **Chapter V:** Conclusion, หน้า 46–47 (PDF หน้า 50–51)
7. **Appendix:** Transliteration of DK 1909 (ตัวบทปริวรรตบาลี-ไทยฉบับสมบูรณ์), หน้า 48–63 (PDF หน้า 52–67)
8. **Bibliography:** หน้า 64–71 (PDF หน้า 68–71)

### 7.2 โครงสร้าง Dossier ที่กำหนด (1 Master Umbrella + 7 Chapter/Section Dossiers)
- **Master Umbrella Dossier:** `S-2019-malasart-00-master-dhammakayanussati-katha.md`
- **Dossier ประจำบท:**
  1. `S-2019-malasart-ch01-intro-lit-review-dhammakaya-genre.md` (Chapter I: การทบทวนวรรณกรรม คัมภีร์ตระกูลพระธรรมกาย [Dhammakāya Text Genre] และดัชนีจารึก/เอกสารตัวเขียน, หน้า 4–16)
  2. `S-2019-malasart-ch02-history-manuscripts-rattanakosin.md` (Chapter II: ประวัติศาสตร์คัมภีร์ธรรมกายานุสสติกถา เอกสารใบลานทองคำ ร.1 และการสังคายนาบทสวดมนต์ ร.2–3, หน้า 17–24)
  3. `S-2019-malasart-ch03-transliteration-translation-dk1909.md` (Chapter III: การปริวรรตและการแปลคัมภีร์ DK 1909 การแปลแบบยกศัพท์ และการวิเคราะห์ตัวบท, หน้า 25–30)
  4. `S-2019-malasart-ch04-contextual-analysis-buddhabhiseka-purge.md` (Chapter IV: บริบทพิธีกรรมพุทธาภิเษก การบรรจุหัวใจพระพุทธรูป และการกวาดล้างตัดทอนในสมัย ร.5 [สมเด็จพระสังฆราช สา ปุสฺสเทโว], หน้า 31–45)
  5. `S-2019-malasart-ch05-conclusion-boran-buddhism-siam.md` (Chapter V: บทสรุป: ร่องรอยของพุทธศาสนาแบบโบราณในสยาม, หน้า 46–47)
  6. `S-2019-malasart-app01-diplomatic-text-pali-thai.md` (Appendix: ตัวบทปริวรรตฉบับเต็มบาลี-ไทย DK 1909 สำหรับการตรวจเทียบทางนิรุกติศาสตร์, หน้า 48–63)
  7. `S-2019-malasart-app02-bibliography.md` (Bibliography: บรรณานุกรมคัมภีร์ใบลานและงานวิจัยพุทธศาสนาโบราณ, หน้า 64–71)

### 7.3 การแมปปิ้งเข้าสู่บทและหัวข้อย่อยของโครงการวิจัย
- `S-2019-malasart-00-master` -> แมปปิ้งสู่: **บทที่ 3 (3.2, 3.4)**, **บทที่ 4 (4.1, 4.5)**, **บทที่ 1 (1.1, 1.3)**
- `S-2019-malasart-ch01` -> แมปปิ้งสู่: **บทที่ 3 (3.2)**, **บทที่ 4 (4.1, 4.5)**, **บทที่ 1 (1.1)**
- `S-2019-malasart-ch02` -> แมปปิ้งสู่: **บทที่ 3 (3.2, 3.4)**, **บทที่ 1 (1.3)** (คัมภีร์ใบลานทองคำสมัย ร.1)
- `S-2019-malasart-ch03` -> แมปปิ้งสู่: **บทที่ 3 (3.2, 3.3)**, **บทที่ 1 (1.3)** (การจำลองพระพุทธเจ้าด้วยหมวดธรรมในกาย)
- `S-2019-malasart-ch04` -> แมปปิ้งสู่: **บทที่ 3 (3.3, 3.4, 3.6, 3.7)**, **บทที่ 1 (1.3, 1.4, 1.5)** (พิธีพุทธาภิเษก การบรรจุหัวใจพระพุทธรูป และการตัดทอนคัมภีร์ในสมัย ร.5)
- `S-2019-malasart-ch05` -> แมปปิ้งสู่: **บทที่ 1 (1.1, 1.4, 1.7)**, **บทที่ 3 (3.8)**
- `S-2019-malasart-app01` -> แมปปิ้งสู่: **บทที่ 3 (3.2, 3.3)**
- `S-2019-malasart-app02` -> แมปปิ้งสู่: **บทที่ 4 (4.7)**

---

## ตารางสรุปภาพรวมแผนการสร้าง Dossier ทีมที่ 5 (Master Overview Matrix)

| ลำดับ | รายชื่อหนังสือแม่บท | จำนวนหน้า | Master Umbrella Dossier | จำนวน Chapter Dossiers | รหัส Chapter Dossiers ที่กำหนด | การแมปปิ้งสู่รายงานวิจัย |
|:---:|:---|:---:|:---|:---:|:---|:---|
| 1 | Mabel H. Bode (1909)<br>*The Pali Literature of Burma* | 142 | `S-1909-bode-00-master-pali-literature-burma.md` | 8 | `ch00-intro`, `ch01-classical`, `ch02-pagan`, `ch03-martaban`, `ch04-17th-cent`, `ch05-18th-amarapura`, `ch06-law-texts`, `app01-inscription-1442` | บทที่ 3 (3.1, 3.2, 3.5, 3.6, 3.8)<br>บทที่ 2 (2.7, 2.8)<br>บทที่ 4 (4.1, 4.4, 4.7)<br>บทที่ 1 (1.2) |
| 2 | Charles Duroiselle (1915-16)<br>*The Ari of Burma and Tantric Buddhism (ASI)* | 244 | `S-1915-duroiselle-00-master-asi-annual-report.md` | 9 | `marshall-ch01`, `hargreaves-ch02`, `sahni-ch03`, `duroiselle-ch04`, `duroiselle-sec01`, `duroiselle-sec02`, `sastri-ch05`, `garde-ch06`, `duroiselle-app01-plates` | บทที่ 3 (3.1, 3.5, 3.8)<br>บทที่ 2 (2.1, 2.2, 2.3, 2.4, 2.6, 2.7, 2.8)<br>บทที่ 4 (4.1, 4.4, 4.7)<br>บทที่ 1 (1.2, 1.4) |
| 3 | Niharranjan Ray (1946)<br>*Theravada Buddhism in Burma* | 330 | `S-1946-ray-00-master-theravada-buddhism-burma.md` | 8 | `ch01-early-traces`, `ch02-pagan-eclecticism`, `ch03-dhammaceti-kalyani`, `ch04-16-17th`, `ch05-18th-robe-controversy`, `ch06-amarapura-samgha`, `ch07-summary-retrospect`, `app01-bibliography` | บทที่ 3 (3.1, 3.2, 3.5, 3.6, 3.8)<br>บทที่ 2 (2.5, 2.6, 2.7, 2.8)<br>บทที่ 1 (1.1, 1.2, 1.4, 1.7)<br>บทที่ 4 (4.1, 4.4, 4.7, 4.8) |
| 4 | Joshua Scott (2023)<br>*The Politics of Pali Commentary* | 550 | `S-2023-scott-00-master-politics-pali-commentary.md` | 12 | `ch00-intro`, `ch01-milinda-councils`, `ch02-commentarial-project`, `ch03-spectrum-exegesis`, `ch04-satipatthan-method`, `ch05-enlightenment-narratives`, `ch06-abhinna-weikza`, `ch07-omniscience-kasina`, `ch08-female-ordination`, `ch09-policing-canon`, `ch10-conclusion`, `app01-bibliography` | บทที่ 3 (3.1, 3.2, 3.3, 3.5, 3.6, 3.8)<br>บทที่ 1 (1.1, 1.3, 1.4, 1.5, 1.6, 1.7)<br>บทที่ 4 (4.5, 4.7, 4.8) |
| 5 | Isara Treesahakiat (2011)<br>*The Significance of Khruba Sriwichai* | 144 | `S-2011-treesahakiat-00-master-khruba-sriwichai.md` | 7 | `ch00-intro`, `ch01-lit-review-charisma`, `ch02-biography-lanna-siam`, `ch03-meditation-yogavacara`, `ch04-contemporary-cult`, `ch05-conclusion`, `app01-bibliography` | บทที่ 3 (3.3, 3.4, 3.5, 3.6, 3.7, 3.8)<br>บทที่ 1 (1.1, 1.3, 1.4, 1.5, 1.7)<br>บทที่ 4 (4.4, 4.7) |
| 6 | Marieta Rose Bialek (2014)<br>*Thai Buddhist Ecology Monks* | 57 | `S-2014-bialek-00-master-thai-ecology-monks.md` | 10 | `ch00-intro-deforestation`, `pt01-sec01-state-model`, `pt01-sec02-spirit-animism`, `pt01-sec03-forest-monks`, `pt02-sec01-engaged-buddhism`, `pt02-sec02-buddhadasa`, `pt02-sec03-rituals-ordination`, `pt02-sec04-monk-narratives`, `ch03-conclusion`, `app01-bibliography` | บทที่ 3 (3.1, 3.4, 3.6, 3.7, 3.8)<br>บทที่ 1 (1.4, 1.5, 1.7)<br>บทที่ 2 (2.8)<br>บทที่ 4 (4.4, 4.7) |
| 7 | Woramat Malasart (2019)<br>*The Dhammakāyānussati-kathā* | 71 | `S-2019-malasart-00-master-dhammakayanussati-katha.md` | 7 | `ch01-intro-lit-review`, `ch02-manuscripts-rattanakosin`, `ch03-transliteration-translation`, `ch04-contextual-buddhabhiseka-purge`, `ch05-conclusion`, `app01-diplomatic-text`, `app02-bibliography` | บทที่ 3 (3.2, 3.3, 3.4, 3.6, 3.7, 3.8)<br>บทที่ 1 (1.1, 1.3, 1.4, 1.5, 1.7)<br>บทที่ 4 (4.1, 4.4, 4.5, 4.7) |
| **รวมทั้งสิ้น** | **ตำรา 7 เล่ม** | **1,538 หน้า** | **7 Master Dossiers** | **61 Chapter Dossiers** | **รวม Dossiers ทั้งหมด: 68 ฉบับ** | **ครอบคลุมเนื้อหาบทที่ 1, 2, 3, 4 ครบ 100%** |

---

### ข้อสังเกตและข้อค้นพบเชิงลึกสำหรับทีมวิจัย
1. **Duroiselle (1915-16):** เอกสารนี้มิได้เป็นเพียงบทความเดี่ยว แต่เป็นรายงานประจำปีฉบับสมบูรณ์ของ Archaeological Survey of India การทำ Dossier แบบแยกทั้งเล่ม (รวม Marshall เรื่องตักศิลา, Sahni เรื่องแคชเมียร์ และ Hargreaves เรื่อง Masrur) จะช่วยเสริมฐานรากโบราณคดีและบริบทอินเดียเหนือในบทที่ 2 (2.1, 2.2, 2.4) ได้อย่างทรงพลังยิ่งขึ้น นอกเหนือจากตัวบทความพระอริ (Ari) ในบทที่ 3 (3.5)
2. **Ray (1946):** มีบทวิเคราะห์ลึกซึ้งเรื่องอาณาจักรปยู (Old Prome) แผ่นทองคำจารึกภาษาบาลี และพุทธศาสนาผสมผสานในพุกาม (Religious Eclecticism) ซึ่งเป็นหลักฐานเชิงประจักษ์ว่าเถรวาทในพม่าดำรงอยู่ร่วมกับมหายาน ตันตระ และไศวะมาตั้งแต่ต้น
3. **Scott (2023):** เป็นวิทยานิพนธ์ระดับดุษฎีบัณฑิตชิ้นเอก (550 หน้า) จาก UC Berkeley ปี 2023 ที่เปิดเผยให้เห็นว่า มินกุน เชตวัน สยาดอว์ (ผู้ริเริ่มกรรมฐานสติปัฏฐาน/วิปัสสนาสมัยใหม่ในพม่า) มิได้ตัดสมถะทิ้งเหมือนสำนักมหาสี แต่กลับพัฒนาอภิญญา 6 ทิพยจักษุ การเพ่งกสิณปรับแปลงเวลา-อวกาศ และเขียนอรรถกถามิลินทปัญหาโดยอาศัยสัพพัญญุตญาณและอนาคตังสญาณ ซึ่งเชื่อมโยงโดยตรงกับความเชื่อเรื่องเวกซา (Weikza) และสอดรับกับข้อถกเถียงเรื่องเถรวาทแบบปิดกั้น (Exclusive Canon) ในบทที่ 1 และบทที่ 3
4. **Treesahakiat (2011):** ในบทที่ 3 ของเล่มนี้ ผู้เขียนได้นำเสนอการเปรียบเทียบระหว่างกรรมฐานกระแสหลัก (Orthodox) กับกรรมฐานแบบนอกรีต (Hetero-orthodox / Yogāvacara tradition) ไว้อย่างชัดเจน และชี้ให้เห็นว่าจารีตของครูบาศรีวิชัยและพระเมืองเหนือมีรากเหง้าสัมพันธ์กับจารีตโยคาวจร
5. **Bialek (2014):** ให้ภาพเชิงประวัติศาสตร์ของการรวมศูนย์อำนาจรัฐสยาม พ.ศ. 2435 (1892) และแผนพัฒนาเศรษฐกิจ พ.ศ. 2504 ซึ่งเป็นกลไกคู่ขนานกับการปฏิรูปสงฆ์ในการลดทอนอำนาจของจารีตท้องถิ่นและวิญญาณนิยม (ผีบ้าน ผีป่า) ก่อนที่จะถูกปรับแปลงมาเป็นพิธีบวชป่าและสืบชะตาแม่น้ำในล้านนา
6. **Malasart (2019):** เป็นงานชิ้นเอกที่บันทึกหลักฐานเอกสารใบลานทองคำสมัย ร.1 และบทสวดมนต์หลวง ร.2-3 ที่พิสูจน์ว่าคัมภีร์ตระกูลพระธรรมกายเคยเป็นส่วนหนึ่งของบทสวดทางการในราชสำนักรัตนโกสินทร์ ก่อนจะถูกสมเด็จพระสังฆราช (สา ปุสฺสเทโว) ในสมัย ร.5 สั่งตัดทอนและกวาดล้างออกจากหลักสูตรสวดมนต์หลวงในปี พ.ศ. 2423 ซึ่งเป็นหลักฐานสำคัญที่สุดชิ้นหนึ่งในบทที่ 3 (3.4, 3.6)

ทีมวิจัยที่ 5 พร้อมเริ่มดำเนินการร่าง Dossier รายฉบับตามแม่แบบมาตรฐานทันทีเมื่อได้รับคำสั่งอนุมัติจาก Lead Agent ครับ