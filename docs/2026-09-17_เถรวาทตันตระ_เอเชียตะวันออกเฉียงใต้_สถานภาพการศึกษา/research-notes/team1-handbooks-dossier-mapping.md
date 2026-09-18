# แผนผังสารบัญฉบับเต็มและการกำหนดโครงสร้างดอสซิเยร์รายบท (Team 1: Encyclopedic Edited Handbooks)

**โครงการวิจัย:** เถรวาทตันตระ หรือเถรวาทแบบเซาท์อีสเอเชีย: กำเนิด พัฒนาการ การดำรงอยู่ และสถานภาพการศึกษาทางประวัติศาสตร์นิพนธ์
**ภาษาอังกฤษ:** Tantric Theravāda / Southern Esoteric Buddhism: Origins, Evolution, Living Traditions, and Historiography
**หน่วยปฏิบัติการ:** Sub-Agent ทีมที่ 1 (Team 1: Encyclopedic Edited Handbooks)
**ฐานข้อมูลอ้างอิง:** `d:\01_APP\Research\output\2026-09-17_เถรวาทตันตระ_เอเชียตะวันออกเฉียงใต้_สถานภาพการศึกษา\research-notes\` (`pdf/` และ `extracted-texts/`)
**สถานะ:** รายงานผลการสำรวจสารบัญฉบับเต็ม 100% ครบทุกบท พร้อมการกำหนดโครงสร้าง Master Umbrella Dossiers และ Chapter Dossiers และการแมปปิ้งสู่โครงสร้างรายงานวิจัย 4 บท 31 หัวข้อย่อย
**กฎเหล็กทางวิชาการ:** ปราศจากการปรุงแต่งข้อมูล (Zero Hallucination), ห้ามใช้ emoji เด็ดขาด, สื่อสารเป็นภาษาไทยวิชาการ, อ้างอิงชื่อบทและชื่อผู้เขียนด้วยภาษาเดิม, ระบุขอบเขตเลขหน้าจริง (Book Pagination & PDF Page Number) ครบถ้วน 100%

---

## 1. บทสรุปภาพรวมเชิงสถิติและการจัดระบบดอสซิเยร์ (Executive Summary & Architectural Overview)

ตามคำสั่งเด็ดขาดของผู้ใช้และสถาปัตยกรรมงานวิจัยระดับสูง Dossier-Driven Workflow หนังสือรวมบทความวิชาการ (Edited Volumes & Handbooks) 1 เล่มที่มีหลายบท จะต้องจัดทำดอสซิเยร์แยกเป็น:
1. **1 ดอสซิเยร์กลาง (Master Umbrella Dossier):** ประมวลภาพรวมทั้งเล่ม บริบททางประวัติศาสตร์นิพนธ์ของหนังสือ กรอบทฤษฎีร่วม ความเชื่อมโยงระหว่างบท และดัชนีชี้ทิศทางการกระจายเนื้อหา
2. **1 ดอสซิเยร์ประจำบท สำหรับทุกบทในเล่ม (Chapter Dossiers):** ห้ามเลือกตัดเฉพาะบางบทโดยเด็ดขาด เล่มมีกี่สิบบทต้องจัดทำดอสซิเยร์ครอบคลุมทุกบท 100% ตามแม่แบบ 6 ส่วน (`dossier-template.md`)

จากการตรวจสอบและอ่านตัวบทจริงในโฟลเดอร์ `extracted-texts/` และ `pdf/` สรุปภาพรวมของหนังสือยักษ์ทั้ง 4 เล่มได้ดังตารางต่อไปนี้:

| ลำดับ | ชื่อไฟล์เอกสารในระบบ | ชื่อหนังสือ / วารสาร | บรรณาธิการ / ผู้รับผิดชอบ | ปีพิมพ์ | จำนวนหน้าจริง (PDF / เล่ม) | จำนวนบทเนื้อหา | จำนวน Dossiers ที่กำหนด |
|:---:|:---|:---|:---|:---:|:---:|:---:|:---:|
| 1 | `2024-payne-hayes-oxford-handbook-of-tantric-studies.pdf` | The Oxford Handbook of Tantric Studies | Richard K. Payne & Glen A. Hayes | 2024 | 1,273 หน้า (xxiii + 1,208 น.) | บทนำ + 45 บท (8 ภาค) | 1 Master + 46 บท = **47 Dossiers** |
| 2 | `2022-berkwitz-thompson-routledge-handbook-theravada-buddhism.pdf` | Routledge Handbook of Theravāda Buddhism | Stephen C. Berkwitz & Ashley Thompson | 2022 | 395 หน้า (xx + 374 น.) | บทนำ + 23 บท (4 ภาค) | 1 Master + 24 บท = **25 Dossiers** |
| 3 | `2017-acri-spirits-and-ships-cultural-transfers.pdf` | Spirits and Ships: Cultural Transfers in Early Monsoon Asia | Andrea Acri, Roger Blench & Alexandra Landmann | 2017 | 588 หน้า (xii + 576 น.) | 12 บทวิจัยเต็ม | 1 Master + 12 บท = **13 Dossiers** |
| 4 | `2010-various-buddhist-studies-review-20-1-2003.pdf` | Buddhist Studies Review, Vol. 20, No. 1 | Russell Webb (ed.) & Editorial Board | 2003 | 115 หน้า (iv + 114 น.) | บทบรรณาธิการ + 5 บทความ + รวมวิจารณ์ | 1 Master + 7 หน่วย = **8 Dossiers** |
| **รวม** | **4 รายการเอกสารยักษ์** | - | - | - | **2,371 หน้า PDF** | **86 บทวิจัย/หน่วย** | **93 Dossiers สมบูรณ์** |

---

## 2. เล่มที่ 1: The Oxford Handbook of Tantric Studies (2024)

- **ข้อมูลบรรณานุกรมมาตรฐาน:** Payne, Richard K., and Glen A. Hayes, eds. 2024. *The Oxford Handbook of Tantric Studies*. Oxford Handbooks. New York: Oxford University Press.
- **ชื่อไฟล์ PDF ในระบบ:** `2024-payne-hayes-oxford-handbook-of-tantric-studies.pdf`
- **ชื่อไฟล์ข้อความสกัด:** `2024-payne-hayes-oxford-handbook-of-tantric-studies.txt` (3,669,048 ไบต์)
- **ขอบเขตความยาวทางกายภาพ:** 1,273 หน้า PDF (ลำดับหน้าตามตัวเล่มพิมพ์: ปก, นำสารบัญ i–xxiii, เนื้อหา 1–1208 หน้า)
- **โครงสร้างสารัตถะ:** บทนำ (Introduction) และ 45 บทวิจัย แบ่งออกเป็น 8 ภาค (Parts I–VIII) พร้อม Glossary และ Index

### 2.1 ดอสซิเยร์กลางระดับแม่บท (Master Umbrella Dossier)
- **รหัส Dossier กลาง:** `S-2024-payne-oxford-handbook-master.md`
- **ชื่อดอสซิเยร์:** Master Umbrella Dossier: The Oxford Handbook of Tantric Studies (2024)
- **บทบาทและสังเคราะห์ภาพรวม:** ประมวลสถานภาพทางวิชาการร่วมสมัยของ "ตันตริกศึกษา" (Tantric Studies) ในฐานะแขนงวิชาสหวิทยาการที่ก้าวพ้นข้อจำกัดเดิม การวิพากษ์อคติแบบอาณานิคมและ Orientalism โครงสร้างความสัมพันธ์ระหว่างตันตระพุทธ ฮินดู และเชน การเชื่อมโยงสรีรวิทยาภายใน มณฑล พิธีกรรม และการเป็นสะพานเชื่อมข้ามมหาสมุทรสู่อุษาคเนย์
- **การแมปปิ้งสู่โครงสร้างรายงานวิจัย:**
  - **บทเป้าหมายหลัก:** บทที่ 4 (หัวข้อ 4.5 การศึกษาแบบพหุภาษาและสหวิทยาการในทศวรรษ 2020, 4.6 แผนภาพไทม์ไลน์, 4.8 สรุปสถานภาพการศึกษา)
  - **บทเป้าหมายรอง:** บทที่ 1 (หัวข้อ 1.1, 1.2, 1.7), บทที่ 2 (หัวข้อ 2.1, 2.3, 2.4, 2.5, 2.6)

### 2.2 ตารางสารบัญฉบับเต็มและดอสซิเยร์รายบท (46 Chapter Dossiers)

| ลำดับบท | ภาค (Part) | ชื่อบทภาษาเดิม | ผู้เขียนประจำบท | หน้าในเล่ม | หน้าใน PDF | รหัส Chapter Dossier | บทและหัวข้อย่อยที่นำไปใช้ | สาระสำคัญและคุณูปการต่องานวิจัย |
|:---:|:---|:---|:---|:---:|:---:|:---|:---:|:---|
| บทนำ | Front Matter | Introduction | Richard K. Payne and Glen A. Hayes | xv–xx | 16–21 | `S-2024-payne-ch00-intro.md` | บท 4 (4.5, 4.8), บท 1 (1.1) | ภาพรวมกระบวนทัศน์ตันตริกศึกษาร่วมสมัย การจัดระบบความรู้ 8 ภาค และเครือข่ายวิชาการสากล |
| บทที่ 1 | Introductory Essay | Tantric Studies: Issues, Methods, and Scholarly Collaborations | Richard K. Payne and Glen A. Hayes | 1–28 | 26–53 | `S-2024-payne-ch01-tantric-studies.md` | บท 4 (4.5, 4.7, 4.8), บท 1 (1.1) | ประวัติศาสตร์นิพนธ์ของศาสตร์ตันตระ ระเบียบวิธีวิจัยสหวิทยาการ และการก้าวข้ามข้อจำกัดของนิรุกติศาสตร์ยุคอาณานิคม |
| บทที่ 2 | Part I: Action | Initiation (Abhiṣeka) in Indian Buddhism | Ronald M. Davidson | 29–52 | 54–77 | `S-2024-davidson-ch02-abhiseka.md` | บท 2 (2.1, 2.4), บท 3 (3.3) | การอภิเษกในพุทธศาสนาอินเดีย โครงสร้างพิธีกรรม สัญลักษณ์อำนาจศักดินา และการถ่ายทอดสายวิชา |
| บทที่ 3 | Part I: Action | The Inner and Outer Worship: The Rhythms of Domestic and Temple Practice in Nepālī Tantra | Jeffrey S. Lidke and L. S. Akshunna | 53–74 | 78–99 | `S-2024-lidke-ch03-nepali-tantra.md` | บท 2 (2.4), บท 3 (3.4, 3.5) | การปฏิบัติบูชาภายใน-ภายนอกในเนปาล จังหวะชีวิตครัวเรือนและวัด การสืบทอดตันตระที่มีชีวิต |
| บทที่ 4 | Part I: Action | On the Union of Emptiness and Bliss: Buddhist Thought and Tantric Practice | Paul B. Donnelly | 75–100 | 100–125 | `S-2024-donnelly-ch04-emptiness-bliss.md` | บท 2 (2.3, 2.4), บท 1 (1.3), บท 3 (3.8) | ปรัชญาศูนยตาและความสุขอันยิ่ง (Śūnyatā & Mahāsukha) การผสานพุทธปรัชญาเข้ากับการปฏิบัติโยคะตันตระ |
| บทที่ 5 | Part I: Action | Goryū Shintō Goma: Tantric Foundations | Richard K. Payne | 101–124 | 126–149 | `S-2024-payne-ch05-shinto-goma.md` | บท 2 (2.4, 2.7), บท 4 (4.5) | พิธีโหมะ (Goma) ในชินโตสายโกรยู รากฐานตันตระและกระบวนการปรับแปลงข้ามศาสนาในญี่ปุ่น |
| บทที่ 6 | Part I: Action | Homa in Jain Traditions | Ellen Gough | 125–150 | 150–175 | `S-2024-gough-ch06-jain-homa.md` | บท 2 (2.2, 2.4) | พิธีโหมบูชาไฟในจารีตศาสนาเชน การรับและปรับใช้เทคโนโลยีพิธีกรรมตันตระข้ามศาสนา |
| บทที่ 7 | Part I: Action | The Neuroscience of Tantric Practice | Geoffrey Samuel and Maria Kozhevnikov | 151–176 | 176–199 | `S-2024-samuel-ch07-neuroscience-tantra.md` | บท 1 (1.3), บท 2 (2.4), บท 3 (3.3) | ประสาทวิทยาศาสตร์กับการภาวนาตันตระ กลไกสมอง การจินตภาพขั้นสูง (Deity Yoga) และสรีรวิทยาภายใน |
| บทที่ 8 | Part II: Transformations | Cosmic Process, Philosophy, and Soteriology in the Works of Abhinavagupta | Sthaneshwar Timalsina | 177–196 | 202–221 | `S-2024-timalsina-ch08-abhinavagupta.md` | บท 2 (2.2, 2.4), บท 1 (1.3) | จักรวาลวิทยา ปรัชญา และวิมุตติวิทยาในงานของอภินวคุปตะ รากฐานอภิปรัชญาไศวะตันตระนอกคู่ |
| บทที่ 9 | Part II: Transformations | Esoteric Physiology and Subtle Body Systems | Glen A. Hayes | 197–224 | 222–249 | `S-2024-hayes-ch09-esoteric-physiology.md` | บท 1 (1.3), บท 2 (2.4), บท 3 (3.3, 3.8) | สรีรวิทยาเร้นลับและระบบกายละเอียด (Nāḍī, Cakra, Prāṇa, Bindu) เครือข่ายธาตุ และการจำลองจักรวาลในกาย |
| บทที่ 10 | Part II: Transformations | Transforming the Body by Mastering the Elements, Some Tantric Sources | Lubomír Ondračka | 225–248 | 250–273 | `S-2024-ondracka-ch10-transforming-body.md` | บท 1 (1.3), บท 2 (2.4), บท 3 (3.3) | การแปรสภาพกายด้วยการควบคุมมหาภูตรูปและธาตุทั้งหลาย เทคนิคโยคะและมนตราจากคัมภีร์ตันตระสันสกฤต |
| บทที่ 11 | Part II: Transformations | Cosmology and Embryology in Medieval Japan | Anna Andreeva | 249–272 | 274–297 | `S-2024-andreeva-ch11-japan-embryology.md` | บท 1 (1.3), บท 3 (3.3) | จักรวาลวิทยาและคัพภวิทยา (Embryology) ในญี่ปุ่นยุคกลาง การเปรียบเทียบมโนทัศน์กำเนิดทารกในครรภ์กับคัพภวิทยาเถรวาท |
| บทที่ 12 | Part II: Transformations | Astrology and Astral Magic in Tantric Japan | Jeffrey Kotyk | 273–300 | 298–325 | `S-2024-kotyk-ch12-astrology-japan.md` | บท 2 (2.4, 2.7), บท 3 (3.7) | โหราศาสตร์และเวทมนตร์ดาราศาสตร์ในพุทธตันตระญี่ปุ่น การไหลเวียนของตารางดวงดาวและยันต์ศักดิ์สิทธิ์ |
| บทที่ 13 | Part II: Transformations | Tantric Dimensions of Alchemy | Patricia Sauthoff | 301–322 | 326–345 | `S-2024-sauthoff-ch13-alchemy-tantra.md` | บท 1 (1.5), บท 2 (2.4), บท 3 (3.5, 3.7) | มิติตันตระของการเล่นแร่แปรธาตุ (Rasāyana) ปรอท ยาอายุวัฒนะ และความเชื่อมโยงกับวิชาเล่นแร่แปรธาตุของเวชชาพม่า |
| บทที่ 14 | Part III: Gender & Power | Śrīvidyā and Goddess Traditions: A Critical Historiographic Essay | Anna A. Golovkova | 323–346 | 348–371 | `S-2024-golovkova-ch14-srividya.md` | บท 2 (2.2), บท 4 (4.5, 4.7) | จารีตศรีวิทยาและเทวีศึกษา ประวัติศาสตร์นิพนธ์เชิงวิพากษ์ การบูชาศักติ และโครงสร้างศรีจักรมณฑล |
| บทที่ 15 | Part III: Gender & Power | The Ḍākinī in Indo-Tibetan Buddhism | Judith Simmer-Brown | 347–368 | 372–393 | `S-2024-simmerbrown-ch15-dakini.md` | บท 2 (2.1, 2.3), บท 4 (4.5) | มโนทัศน์ฑากินีในพุทธศาสนาอินเดีย-ทิเบต จากนางผีป่าช้าสู่สัญลักษณ์แห่งปัญญาญาณสูงสุดและการตรัสรู้ |
| บทที่ 16 | Part III: Gender & Power | Three Shades of Tantric Yoga: Chapter 20 of the Netra Tantra | David Gordon White | 369–394 | 394–419 | `S-2024-white-ch16-netra-tantra.md` | บท 2 (2.2, 2.4), บท 1 (1.3) | โยคะตันตระสามระดับในบทที่ 20 ของเนตรตันตระ เทคนิคการเพ่งจิต การควบคุมลมปราณ และการเอาชนะความตาย |
| บทที่ 17 | Part III: Gender & Power | Generative Buddhahood: Enlightened Plants and Trees in Japanese Tendai Esoteric Buddhism | Matthew D. McMullen | 395–408 | 420–433 | `S-2024-mcmullen-ch17-tendai-plants.md` | บท 2 (2.4, 2.7) | พุทธภาวะของพืชและต้นไม้ในพุทธศาสนาลี้ลับนิกายเทนได ญาณวิทยาแห่งความเชื่อมโยงระหว่างธรรมชาติและจิต |
| บทที่ 18 | Part III: Gender & Power | Embodiment and Subjugation: Exoteric-Esoteric Buddhist Practice in Medieval Japan | Eric Haruki Swanson | 409–426 | 434–449 | `S-2024-swanson-ch18-japan-embodiment.md` | บท 2 (2.4, 2.7), บท 3 (3.1) | การรวมกายและการปราบมารในพุทธปฏิบัติเปิดเผย-ลี้ลับ (Kenmitsu) ในญี่ปุ่นยุคกลาง มิติพิธีกรรมทางการเมือง |
| บทที่ 19 | Part IV: Deities & Founders | “Hard-Core” Tantric Traditions and the Cult of Bhairava in Java | Andrea Acri | 427–452 | 452–477 | `S-2024-acri-ch19-bhairava-java.md` | บท 1 (1.2), บท 2 (2.2, 2.5, 2.6), บท 4 (4.5) | ตันตระสายเข้มข้นและลัทธิไภรวะในเกาะชวาโบราณ จารึกกฤตนาคร กษัตริย์อาทิตยวรมัน และปฏิสัมพันธ์ไศวะ-พุทธ |
| บทที่ 20 | Part IV: Deities & Founders | Timeless Symbolism: An Early Dzogchen Patriarch’s Hagiography and Scriptures | Georgios T. Halkias | 453–471 | 478–496 | `S-2024-halkias-ch20-dzogchen-patriarch.md` | บท 2 (2.3), บท 4 (4.5) | ชีวประวัติศักดิ์สิทธิ์และคัมภีร์ของบูรพาจารย์ซกเชนยุคแรก สัญลักษณ์เหนือกาลเวลาและมโนทัศน์ริกปะ (Rigpa) |
| บทที่ 21 | Part IV: Deities & Founders | The Twin Miracle: The Two-Headed Aizen Myōō [Ryōzu Aizen] in Exorcistic Shugendō Practice at the Japanese Tantric Buddhist Complex of Kōyasan | Elizabeth Noelle Tinsley | 472–488 | 497–513 | `S-2024-tinsley-ch21-aizen-myoo.md` | บท 2 (2.4), บท 3 (3.7) | ยมกปาฏิหาริย์และไอเซ็นเมียวโอสองเศียรในการปฏิบัติชูเก็นโดขับผี ณ ภูเขาโคยะ พิธีกรรมปราบและเยียวยา |
| บทที่ 22 | Part IV: Deities & Founders | A Dharma Protector in a Transcultural Tantric Buddhist Context | Vesna A. Wallace | 489–506 | 514–531 | `S-2024-wallace-ch22-dharma-protector.md` | บท 2 (2.3, 2.4), บท 3 (3.7) | ธรรมบาลในบริบทพุทธตันตระข้ามวัฒนธรรม การปรับเปลี่ยนเทพอารักษ์ท้องถิ่นเข้าสู่ระบบมณฑลและจักรวาลวิทยา |
| บทที่ 23 | Part IV: Deities & Founders | The Goddesses of Jaina Tantra | Michael Slouber | 507–532 | 532–555 | `S-2024-slouber-ch23-jaina-goddesses.md` | บท 2 (2.2, 2.4) | เทวีแห่งตันตระเชน บทบาทของยักษิณี (เช่น ปัทมาวตี) มนตรา ยันต์ และพิธีกรรมคุ้มครองป้องกันภัย |
| บทที่ 24 | Part V: Imagery & Art | The Tantric Temple: Rule-Bound Beauty | Libbie Mills | 533–556 | 558–581 | `S-2024-mills-ch24-tantric-temple.md` | บท 2 (2.4, 2.6) | เทวาลัยตันตระ: สุนทรียศาสตร์ภายใต้กฎเกณฑ์ คัมภีร์วาสตุศาสตร์ การวางผังมณฑล และสถาปัตยกรรมศักดิ์สิทธิ์ |
| บทที่ 25 | Part V: Imagery & Art | Mandalas and Landscape in Maritime Asia | Peter Sharrock | 557–580 | 582–605 | `S-2024-sharrock-ch25-mandalas-landscape.md` | บท 1 (1.2), บท 2 (2.4, 2.5, 2.6), บท 4 (4.5) | มณฑลและภูมิทัศน์ในเอเชียสมุทร เส้นทางสายไหมทางทะเล ศรีวิชัย จามปา กัมพูชา และเครือข่ายวัชรยานข้ามสมุทร |
| บทที่ 26 | Part V: Imagery & Art | Mandalas and Monarchs: Tantra and Temple Architecture in Buddhist Southeast Asia | Swati Chemburkar | 581–678 | 606–703 | `S-2024-chemburkar-ch26-mandalas-sea-architecture.md` | บท 1 (1.2), บท 2 (2.5, 2.6, 2.8), บท 3 (3.1), บท 4 (4.5) | มณฑลและกษัตริย์: ตันตระและสถาปัตยกรรมวัดในเอเชียตะวันออกเฉียงใต้พุทธ (ปราสาทบายน บุโรพุทโธ พุกาม) |
| บทที่ 27 | Part V: Imagery & Art | Jain Tantric Diagrams of the Goddess Padmāvatī | Ellen Gough | 679–702 | 704–727 | `S-2024-gough-ch27-padmavati-diagrams.md` | บท 2 (2.4), บท 3 (3.7) | แผนภาพยันต์ตันตระเชนของเทวีปัทมาวตี โครงสร้างเรขาคณิตศักดิ์สิทธิ์ การลงอักขระมนต์ และการเปรียบเทียบยันต์ไทย |
| บทที่ 28 | Part V: Imagery & Art | Imagery Practice in Tantric Buddhism | David L. Gardiner | 703–730 | 728–755 | `S-2024-gardiner-ch28-imagery-practice.md` | บท 1 (1.3), บท 2 (2.4), บท 3 (3.3) | การปฏิบัติจินตภาพในพุทธตันตระ การสร้างภาพนิมิตพระพุทธเจ้าและเทวรูปในจิตเพื่อการแปรสภาพอัตตา |
| บทที่ 29 | Part V: Imagery & Art | Attention, Memory, and the Imagination: A Cognitive Analysis of Tantric Visualization | Sthaneshwar Timalsina | 731–754 | 756–777 | `S-2024-timalsina-ch29-visualization-cognition.md` | บท 1 (1.3), บท 2 (2.4), บท 3 (3.3) | การวิเคราะห์การจินตภาพตันตระเชิงปริชาน สมาธิ ความจำ และจินตนาการในการทำสมาธิตันตระ |
| บทที่ 30 | Part VI: Language & Text | Exploring Metaphors and Conceptual Blending in Vaiṣṇava Sahajiyā Texts | Glen A. Hayes | 755–786 | 780–811 | `S-2024-hayes-ch30-sahajiya-metaphors.md` | บท 2 (2.3, 2.4), บท 3 (3.3) | อุปลักษณ์และการผสมผสานมโนทัศน์ในคัมภีร์ไวษณพสหชิยา การอุปมาสรีระภายในเป็นแม่น้ำ ทะเลสาบ และสรวงสวรรค์ |
| บทที่ 31 | Part VI: Language & Text | Cosmogenesis and Phonematic Emanation | Ben Williams | 787–810 | 812–835 | `S-2024-williams-ch31-cosmogenesis-phonemes.md` | บท 1 (1.3), บท 2 (2.4), บท 3 (3.2, 3.3) | กำเนิดจักรวาลและการแผ่ออกของหน่วยเสียง (Mātṛkā) อภิปรัชญาสัททวิทยาและอักขระศักดิ์สิทธิ์ในสายตันตระ |
| บทที่ 32 | Part VI: Language & Text | Jain Tantra: An Overview | Christopher Key Chapple | 811–838 | 836–863 | `S-2024-chapple-ch32-jain-tantra.md` | บท 2 (2.1, 2.2) | ภาพรวมตันตระเชน คัมภีร์ ญาณวิทยา และการปฏิบัติตันตระในกรอบอหิงสาและการหลุดพ้นของเชน |
| บทที่ 33 | Part VI: Language & Text | Tibetan Tantric Buddhist Literature | Paul Hackett | 839–852 | 864–877 | `S-2024-hackett-ch33-tibetan-literature.md` | บท 2 (2.3), บท 4 (4.5) | วรรณกรรมพุทธตันตระทิเบต การจัดหมวดหมู่คัมภีร์ตันตระ 4 ชั้น (Kriyā, Caryā, Yoga, Anuttarayoga) และสารบบพระไตรปิฎก |
| บทที่ 34 | Part VI: Language & Text | The Cakrasaṃvara Tantra | David B. Gray | 853–870 | 878–893 | `S-2024-gray-ch34-cakrasamvara.md` | บท 2 (2.2, 2.3, 2.4), บท 4 (4.5) | คัมภีร์จักรสังวรตันตระ กำเนิด พัฒนาการ พิธีกรรมป่าช้า มัณฑล และการแลกเปลี่ยนข้ามสายกับลัทธิไศวะกาปาลิกะ |
| บทที่ 35 | Part VII: Institutions | What the Kālamukhas Can Tell Us about Identity, Institutions, and Community in the Early Medieval Deccan | Jason Schwartz | 871–914 | 896–939 | `S-2024-schwartz-ch35-kalamukhas-deccan.md` | บท 2 (2.1, 2.2) | สำนักกาฬมุขะ (Kālamukha) ในที่ราบสูงเดคคานยุคกลางตอนต้น อัตลักษณ์ สถาบันสงฆ์ฮินดู และชุมชนผู้อุปถัมภ์ |
| บทที่ 36 | Part VII: Institutions | The Total Revelation Tantra: The Geopolitical Origins and Significance of the Name, Nepālī Sarvāmnāya Tantra | Jeffrey S. Lidke and L. S. Akshunna | 915–952 | 940–977 | `S-2024-lidke-ch36-sarvamnaya-tantra.md` | บท 2 (2.2, 2.4), บท 4 (4.5) | คัมภีร์สรรวามนายตันตระ (Sarvāmnāya Tantra) ภูมิรัฐศาสตร์เนปาลและการประมวลสายส่งทอดตันตระทั้ง 4 ทิศ |
| บทที่ 37 | Part VII: Institutions | The Soteriologies of Buddhist Tantrism | Iain Sinclair | 953–982 | 978–1007 | `S-2024-sinclair-ch37-buddhist-soteriologies.md` | บท 2 (2.1, 2.3, 2.4), บท 1 (1.7), บท 3 (3.8) | วิมุตติวิทยาของพุทธตันตริก การบรรลุพุทธภาวะในชาตินี้ด้วยกายเนื้อ ปรัชญามหายาน และเส้นทางลัดสู่นิพพาน |
| บทที่ 38 | Part VII: Institutions | Singing Tantra: Aural Media and Sonic Soteriology in Bengali Esoteric Lineages | Carola Erika Lorea | 983–1014 | 1008–1039 | `S-2024-lorea-ch38-singing-tantra.md` | บท 2 (2.4), บท 3 (3.3, 3.5) | การขับขานตันตระ สื่อเสียงและวิมุตติวิทยาเชิงเสียง (Sonic Soteriology) ในสายรหัสยิกเบงกอล (Baul, Sahajiyā) |
| บทที่ 39 | Part VII: Institutions | From the Fringes to Center Stage: Hijṛās and Fertility Rituals in Kāmākhyā | Sravana Borkataky-Varma | 1015–1034 | 1040–1057 | `S-2024-varma-ch39-kamakhya-fertility.md` | บท 2 (2.1, 2.4) | กลุ่มฮิจราและพิธีกรรมความอุดมสมบูรณ์ ณ กามาขยา ชายขอบทางสังคมกับการปฏิบัติพิธีกรรมตันตระศักติ |
| บทที่ 40 | Part VIII: Historiography | Śaiva Tantra: Toward a History | Dominic Goodall | 1035–1056 | 1060–1081 | `S-2024-goodall-ch40-saiva-history.md` | บท 2 (2.1, 2.2), บท 4 (4.5) | ประวัติศาสตร์ไศวะตันตระ การคลี่คลายของคัมภีร์ไศวสิทธานตะและไภรวตันตระ การวิเคราะห์เอกสารตัวเขียนสันสกฤต |
| บทที่ 41 | Part VIII: Historiography | On the Chronology of the Buddhist Tantras | Tsunehiko Sugiki | 1057–1082 | 1082–1107 | `S-2024-sugiki-ch41-tantra-chronology.md` | บท 2 (2.1, 2.3), บท 4 (4.5, 4.6) | ลำดับเวลาและพัฒนาการทางประวัติศาสตร์ของคัมภีร์พุทธตันตระ จากกริยาตันตระ สู่โยคินีตันตระและกาลจักรตันตระ |
| บทที่ 42 | Part VIII: Historiography | Somānanda’s Śivadṛṣṭi as an Argument against Dharmakīrti | John Nemec | 1083–1108 | 1108–1133 | `S-2024-nemec-ch42-sivadristi-dharmakirti.md` | บท 2 (2.2), บท 4 (4.5) | คัมภีร์ศิวทฤษฏิของโสมนันทะในฐานะการโต้แย้งปรัชญาตรรกวิทยาของธรรมกีรติ ปฏิสัมพันธ์ทางปัญญาพุทธ-ไศวะ |
| บทที่ 43 | Part VIII: Historiography | Dynamic Manifestations of Eternal Divinity: Late Nondual Śaivism on the Emanation and Contemplative Reabsorption of Time | David Peter Lawrence | 1109–1134 | 1134–1159 | `S-2024-lawrence-ch43-nondual-saivism-time.md` | บท 2 (2.2, 2.4) | การสำแดงพลวัตของเทวภาพนิรันดร์: ไศวะนอกคู่ยุคหลังว่าด้วยการแผ่ออกและการดูดซับเวลากลับคืนในการเพ่งภาวนา |
| บทที่ 44 | Part VIII: Historiography | Buddhist Magic and Vajrayāna | Sam van Schaik | 1135–1152 | 1160–1177 | `S-2024-vanschaik-ch44-magic-vajrayana.md` | บท 2 (2.3, 2.4, 2.7), บท 3 (3.7), บท 4 (4.5) | ไสยเวทพุทธและวัชรยาน จากเอกสารดันหวงสู่บริบทเอเชีย พุทธมนต์ ธารณี พิธีกรรมคุ้มครอง และเวทมนตร์ศาสนา |
| บทที่ 45 | Part VIII: Historiography | Modernity and Neo-Tantra | Hugh B. Urban | 1153–1172 | 1178–1197 | `S-2024-urban-ch45-modernity-neo-tantra.md` | บท 1 (1.4, 1.5), บท 4 (4.5, 4.7) | ตันตระกับความทันสมัยและขบวนการนีโอตันตระ (Neo-Tantra) การตีความตันตระใหม่ในโลกตะวันตกและโลกาภิวัตน์ |

---

## 3. เล่มที่ 2: Routledge Handbook of Theravāda Buddhism (2022)

- **ข้อมูลบรรณานุกรมมาตรฐาน:** Berkwitz, Stephen C., and Ashley Thompson, eds. 2022. *Routledge Handbook of Theravāda Buddhism*. Routledge Handbooks in Religion. London and New York: Routledge.
- **ชื่อไฟล์ PDF ในระบบ:** `2022-berkwitz-thompson-routledge-handbook-theravada-buddhism.pdf`
- **ชื่อไฟล์ข้อความสกัด:** `2022-berkwitz-thompson-routledge-handbook-theravada-buddhism.txt` (1,480,311 ไบต์)
- **ขอบเขตความยาวทางกายภาพ:** 395 หน้า PDF (ลำดับหน้าตามตัวเล่มพิมพ์: ปก, นำสารบัญ i–xx, เนื้อหา 1–374 หน้า)
- **โครงสร้างสารัตถะ:** บทนำ (Introduction: Theravāda Civilizations) และ 23 บทวิจัยหลัก แบ่งออกเป็น 4 ภาค (Parts I–IV) พร้อม Index

### 3.1 ดอสซิเยร์กลางระดับแม่บท (Master Umbrella Dossier)
- **รหัส Dossier กลาง:** `S-2022-berkwitz-routledge-handbook-master.md`
- **ชื่อดอสซิเยร์:** Master Umbrella Dossier: Routledge Handbook of Theravāda Buddhism (2022)
- **บทบาทและสังเคราะห์ภาพรวม:** ประมวลสถานภาพทางวิชาการและประวัติศาสตร์นิพนธ์ของ "อารยธรรมเถรวาท" (Theravāda Civilizations) ทบทวนกรอบคิดดั้งเดิมที่เคยมองเถรวาทเป็นเสาหินเนื้อเดียว (monolithic) โดยนำเสนอมุมมองพหุนิยม ความหลากหลายเชิงพื้นที่และกาลเวลา วรรณกรรมใบลานสองภาษา (Bitexts) จิตรกรรมฝาผนัง และการปฏิบัติจริงที่เชื่อมโยงกับพุทธศาสนาลี้ลับสายใต้
- **การแมปปิ้งสู่โครงสร้างรายงานวิจัย:**
  - **บทเป้าหมายหลัก:** บทที่ 4 (หัวข้อ 4.5 การศึกษาแบบพหุภาษาและสหวิทยาการในทศวรรษ 2020, 4.7 การวิเคราะห์ช่องว่าง, 4.8 สรุปสถานภาพการศึกษา)
  - **บทเป้าหมายรอง:** บทที่ 1 (หัวข้อ 1.1, 1.2, 1.4, 1.5, 1.6), บทที่ 2 (หัวข้อ 2.7), บทที่ 3 (หัวข้อ 3.1, 3.2, 3.3, 3.7)

### 3.2 ตารางสารบัญฉบับเต็มและดอสซิเยร์รายบท (24 Chapter Dossiers)

| ลำดับบท | ภาค (Part) | ชื่อบทภาษาเดิม | ผู้เขียนประจำบท | หน้าในเล่ม | หน้าใน PDF | รหัส Chapter Dossier | บทและหัวข้อย่อยที่นำไปใช้ | สาระสำคัญและคุณูปการต่องานวิจัย |
|:---:|:---|:---|:---|:---:|:---:|:---|:---:|:---|
| บทนำ | Front Matter | Introduction: Theravāda Civilizations | Stephen C. Berkwitz and Ashley Thompson | 1–12 | 22–33 | `S-2022-berkwitz-ch00-intro-civilizations.md` | บท 4 (4.5, 4.8), บท 1 (1.1) | มโนทัศน์อารยธรรมเถรวาท การรื้อสร้างภาพตัวแทนเถรวาทแบบเดิม และแผนที่นำทางสู่การวิจัยสหวิทยาการ |
| บทที่ 1 | Part I: Ideas/Ideals | “Theravāda”: Sectarianism and Diversity in Mahāvihāra Historiography | Sven Bretfeld | 15–42 | 36–63 | `S-2022-bretfeld-ch01-mahavihara-historiography.md` | บท 1 (1.1, 1.4), บท 4 (4.5, 4.7) | การประกอบสร้างชื่อ "เถรวาท" ลัทธินิกายและความหลากหลายในประวัติศาสตร์นิพนธ์มหาวิหารแห่งศรีลังกา |
| บทที่ 2 | Part I: Ideas/Ideals | Pāli: Its Place in the Theravāda Buddhist Tradition | Alastair Gornall | 43–57 | 64–78 | `S-2022-gornall-ch02-pali-place-tradition.md` | บท 2 (2.7), บท 3 (3.1, 3.2), บท 4 (4.5) | บทบาทของภาษาบาลีในฐานะภาษาสากลทางศาสนา (Pāli Cosmopolis) วรรณกรรมอลังการและไวยากรณ์บาลีโบราณ |
| บทที่ 3 | Part I: Ideas/Ideals | Circulations: Linked Spaces and Divergent Temporalities in the Pāli World | Anne M. Blackburn | 58–69 | 79–90 | `S-2022-blackburn-ch03-circulations-pali-world.md` | บท 1 (1.2), บท 2 (2.5, 2.7), บท 3 (3.1) | เครือข่ายการหมุนเวียนข้ามมหาสมุทรอินเดีย พื้นที่เชื่อมโยงและการเดินทางของพระสงฆ์ระหว่างลังกา-อุษาคเนย์ |
| บทที่ 4 | Part I: Ideas/Ideals | Statecraft: From Buddhist Kingship to Modern States | Patrice Ladwig | 70–82 | 91–103 | `S-2022-ladwig-ch04-statecraft-buddhist-kingship.md` | บท 1 (1.4), บท 2 (2.6), บท 3 (3.6) | ธรรมราชาและศาสตร์แห่งการปกครอง จากราชาธิราชพุทธสู่รัฐสมัยใหม่ การใช้อำนาจและพิธีกรรมบารมี |
| บทที่ 5 | Part I: Ideas/Ideals | Reform: Ideas and Events in Modern Theravāda Reformism | Anne R. Hansen and Anthony Lovenheim Irwin | 83–98 | 104–119 | `S-2022-hansen-ch05-reform-modern-theravada.md` | บท 1 (1.4), บท 3 (3.6), บท 4 (4.4, 4.5) | ขบวนการปฏิรูปเถรวาทสมัยใหม่ การชำระความเชื่อดั้งเดิม และผลกระทบต่อการเบียดขับจารีตโยคาวจร |
| บทที่ 6 | Part I: Ideas/Ideals | Tradition: Nuns and “Theravāda” in Sri Lanka | Nirmala S. Salgado | 99–112 | 120–133 | `S-2022-salgado-ch06-tradition-nuns-sri-lanka.md` | บท 3 (3.1, 3.7), บท 4 (4.5) | จารีตแม่ชีและภิกษุณีในศรีลังกา การต่อรองอำนาจเชิงสถาบันสงฆ์และการตีความพระวินัย |
| บทที่ 7 | Part II: Practices/Persons | Merit: Ritual Giving and Its Cultural Mediations | Juliane Schober | 115–126 | 136–147 | `S-2022-schober-ch07-merit-ritual-giving.md` | บท 3 (3.1, 3.5), บท 4 (4.4, 4.5) | การทำบุญและการให้ทานเชิงพิธีกรรม เศรษฐกิจเชิงบุญบารมี และมิติวัฒนธรรมในเอเชียตะวันออกเฉียงใต้ |
| บทที่ 8 | Part II: Practices/Persons | Meditation: Techniques and Processes of Transformation | Pyi Phyo Kyaw and Kate Crosby | 127–139 | 148–160 | `S-2022-kyaw-ch08-meditation-transformations.md` | บท 1 (1.1, 1.3), บท 3 (3.2, 3.3, 3.5, 3.8), บท 4 (4.5) | เทคนิคการภาวนาและกระบวนการแปรสภาพจิต-กาย กรรมฐานโบราณ (Borān Kammaṭṭhāna) และการเปลี่ยนผ่านสู่วิปัสสนายุคใหม่ |
| บทที่ 9 | Part II: Practices/Persons | Repetition: Pāli Iterations of Ritual Commitment, Commentarial Refrain, and Assiduous Practice | Christoph Emmrich | 140–155 | 161–176 | `S-2022-emmrich-ch09-repetition-pali-ritual.md` | บท 3 (3.2, 3.3), บท 2 (2.4) | การสวดสาธยายซ้ำ (Repetition) ในพิธีกรรมบาลี อิทธิพลของเสียงสวดมนต์ต่อการปรับเปลี่ยนสภาวะจิต |
| บทที่ 10 | Part II: Practices/Persons | Filial Piety: Shades of Difference Across Theravādin Traditions | Grégory Kourilsky | 156–169 | 177–190 | `S-2022-kourilsky-ch10-filial-piety-theravada.md` | บท 3 (3.1, 3.5), บท 4 (4.5) | ความกตัญญูกตเวทีในจารีตเถรวาทลุ่มน้ำโขง คัมภีร์มาตุคุณสูตร อานิสงส์การบวช และพิธีฉลองคุณบิดามารดา |
| บทที่ 11 | Part II: Practices/Persons | Laity: Status, Role, and Practice in Theravāda | Asanga Tilakaratne | 170–181 | 191–202 | `S-2022-tilakaratne-ch11-laity-status-practice.md` | บท 3 (3.1, 3.7) | สถานะ บทบาท และการปฏิบัติของคฤหัสถ์ในเถรวาท การมีส่วนร่วมในขบวนการสมาธิภาวนาและองค์กรพุทธ |
| บทที่ 12 | Part II: Practices/Persons | Discipline: Beyond the Vinaya | Thomas Borchert | 182–193 | 203–214 | `S-2022-borchert-ch12-discipline-beyond-vinaya.md` | บท 3 (3.1, 3.6) | วินัยสงฆ์นอกเหนือจากพระวินัยปิฎก กฎหมายคณะสงฆ์ ธรรมนูญวัด และระเบียบปฏิบัติในโลกสมัยใหม่ |
| บทที่ 13 | Part II: Practices/Persons | Funerals: Changing Funerary Practices | Katherine A. Bowie | 194–206 | 215–227 | `S-2022-bowie-ch13-funerals-changing-practices.md` | บท 3 (3.1, 3.7) | พิธีกรรมงานศพและการเปลี่ยนแปลงในภาคเหนือและภาคกลางของไทย สัญลักษณ์ป่าช้าและเมรุเผาศพ |
| บทที่ 14 | Part III: Texts/Teachings | Canons: Authoritative Texts of the Theravaṃsa | Peter Skilling | 209–226 | 230–247 | `S-2022-skilling-ch14-canons-theravamsa.md` | บท 1 (1.1, 1.6), บท 3 (3.2), บท 4 (4.3, 4.5) | สารบบคัมภีร์และคัมภีร์ที่มีอำนาจของเถรวงศ์ พระไตรปิฎกฉบับจารึกศิลาและใบลาน คัมภีร์นอกสารบบหลวง |
| บทที่ 15 | Part III: Texts/Teachings | Abhidhamma: Theravāda Thought in Relation to Sarvāstivāda Thought | Rupert Gethin | 227–242 | 248–263 | `S-2022-gethin-ch15-abhidhamma-sarvastivada.md` | บท 1 (1.3, 1.7), บท 2 (2.3), บท 3 (3.3, 3.8) | ปรัชญาพระอภิธรรมเถรวาทเปรียบเทียบกับสรวาสติวาท ปรมัตถธรรม ปฏิจจสมุปบาท และวิถีจิต |
| บทที่ 16 | Part III: Texts/Teachings | Vaṃsa: History and Lineage in the Theravāda | Stephen C. Berkwitz | 243–256 | 264–277 | `S-2022-berkwitz-ch16-vamsa-history-lineage.md` | บท 3 (3.1, 3.2), บท 4 (4.5) | วรรณกรรมประเภทวงศ์ (Vaṃsa) ประวัติศาสตร์ สายธาร และการสถาปนาความชอบธรรมแห่งพุทธศาสนาเถรวาท |
| บทที่ 17 | Part III: Texts/Teachings | Merit: Ten Ways of Making Merit in Theravāda Exegetical Literature and Contemporary Sri Lanka | Rita Langer | 257–270 | 278–291 | `S-2022-langer-ch17-ten-merits-exegetical.md` | บท 3 (3.1, 3.2, 3.7) | บุญกิริยาวัตถุ 10 ในวรรณกรรมอรรถกถาและสังคมร่วมสมัยศรีลังกา คัมภีร์อุปาสกชนลังการ |
| บทที่ 18 | Part III: Texts/Teachings | Bilingualism: Theravāda Bitexts Across South and Southeast Asia | Trent Walker | 271–284 | 292–305 | `S-2022-walker-ch18-bilingualism-bitexts.md` | บท 1 (1.6), บท 3 (3.2), บท 4 (4.5, 4.7) | วรรณกรรมสองภาษา (Bitexts / นิสสยะ / โวหาร / สัททสารัตถะ) เครือข่ายตัวเขียนบาลีคู่ภาษาถิ่นในอุษาคเนย์ |
| บทที่ 19 | Part IV: Images/Imaginations | Visual Narratives: Buddha Life Stories in the “Medieval Theravāda” of Southeast Asia | Samerchai Poolsuwan | 287–304 | 308–325 | `S-2022-poolsuwan-ch19-visual-narratives-pagan.md` | บท 2 (2.6, 2.7), บท 3 (3.1, 3.7) | การเล่าเรื่องผ่านภาพ: พุทธประวัติใน "เถรวาทยุคกลาง" แห่งอุษาคเนย์ จิตรกรรมฝาผนังพุกามและอยุธยา |
| บทที่ 20 | Part IV: Images/Imaginations | Icons: Standing Out from the Narrative in Theravādin Art | Ashley Thompson | 305–326 | 326–347 | `S-2022-thompson-ch20-icons-standing-out.md` | บท 2 (2.6, 2.7), บท 3 (3.1, 3.7) | ประติมาและพระพุทธรูปในศิลปะเถรวาท ความสัมพันธ์ระหว่างรูปเคารพ ข้อความจารึกพระธรรมขันธ์ และธรรมกาย |
| บทที่ 21 | Part IV: Images/Imaginations | Affect: Notes from Contemporary Southeast Asian Visual Culture | Chairat Polmuk | 327–342 | 348–363 | `S-2022-polmuk-ch21-affect-visual-culture.md` | บท 3 (3.7), บท 4 (4.5) | ทฤษฎีอารมณ์ความรู้สึก (Affect) และวัฒนธรรมทางสายตาร่วมสมัย พระบรมสารีริกธาตุในภาพยนตร์ของอภิชาติพงศ์และริธี ปานห์ |
| บทที่ 22 | Part IV: Images/Imaginations | Deities: Supernatural Forces in Theravāda Buddhist Religious Cultures | John Clifford Holt | 343–354 | 364–375 | `S-2022-holt-ch22-deities-supernatural-forces.md` | บท 3 (3.5, 3.7), บท 4 (4.5) | เทวดา ผี และอำนาจเหนือธรรมชาติในวัฒนธรรมศาสนาเถรวาท (เทพารักษ์ศรีลังกา ผีไทย-ลาว และนัตพม่า) |
| บทที่ 23 | Part IV: Images/Imaginations | Mons: Creating a Narrative of the Origins of Theravāda | Patrick McCormick | 355–366 | 376–387 | `S-2022-mccormick-ch23-mons-narrative-origins.md` | บท 3 (3.1, 3.5), บท 4 (4.5, 4.7) | ชาวมอญกับการสร้างคำอธิบายจุดกำเนิดเถรวาทในอุษาคเนย์ การประกอบสร้างทางประวัติศาสตร์และข้อวิพากษ์ |

---

## 4. เล่มที่ 3: Spirits and Ships: Cultural Transfers in Early Monsoon Asia (2017)

- **ข้อมูลบรรณานุกรมมาตรฐาน:** Acri, Andrea, Roger Blench, and Alexandra Landmann, eds. 2017. *Spirits and Ships: Cultural Transfers in Early Monsoon Asia*. Nalanda-Sriwijaya Series. Singapore: ISEAS – Yusof Ishak Institute.
- **ชื่อไฟล์ PDF ในระบบ:** `2017-acri-spirits-and-ships-cultural-transfers.pdf`
- **ชื่อไฟล์ข้อความสกัด:** `2017-acri-spirits-and-ships-cultural-transfers.txt` (1,314,398 ไบต์)
- **ขอบเขตความยาวทางกายภาพ:** 588 หน้า PDF (ลำดับหน้าตามตัวเล่มพิมพ์: นำสารบัญ i–xii, เนื้อหา 1–576 หน้า)
- **โครงสร้างสารัตถะ:** 12 บทวิจัยเต็มรูปแบบ ครอบคลุมสหวิทยาการโบราณคดี ภาษาศาสตร์ ประวัติศาสตร์ศาสนา และสถาปัตยกรรมทางทะเล

### 4.1 ดอสซิเยร์กลางระดับแม่บท (Master Umbrella Dossier)
- **รหัส Dossier กลาง:** `S-2017-acri-spirits-ships-master.md`
- **ชื่อดอสซิเยร์:** Master Umbrella Dossier: Spirits and Ships: Cultural Transfers in Early Monsoon Asia (2017)
- **บทบาทและสังเคราะห์ภาพรวม:** การเปิดกระบวนทัศน์ "เอเชียมรสุม" (Monsoon Asia) และการถ่ายทอดวัฒนธรรมข้ามสมุทรอินเดียและแปซิฟิก (Indo-Pacific) การรื้อสร้างทฤษฎี Indianization แบบเดิมโดยเน้นการแลกเปลี่ยนสองทิศทาง (Convergence) และการที่ตันตระก่อกำเนิดจากปฏิสัมพันธ์กับวัฒนธรรมดั้งเดิมของเอเชียตะวันออกเฉียงใต้
- **การแมปปิ้งสู่โครงสร้างรายงานวิจัย:**
  - **บทเป้าหมายหลัก:** บทที่ 2 (หัวข้อ 2.5 การส่งออกข้ามแดนผ่านเครือข่ายทางทะเล, 2.6 พุทธ-ฮินดูตันตระในชวา, 2.8 สรุปบทเรียนประวัติศาสตร์)
  - **บทเป้าหมายรอง:** บทที่ 1 (หัวข้อ 1.2 สังเคราะห์โครงสร้างความเชื่อมโยง), บทที่ 4 (หัวข้อ 4.4, 4.5)

### 4.2 ตารางสารบัญฉบับเต็มและดอสซิเยร์รายบท (12 Chapter Dossiers)

| ลำดับบท | ชื่อบทภาษาเดิม | ผู้เขียนประจำบท | หน้าในเล่ม | หน้าใน PDF | รหัส Chapter Dossier | บทและหัวข้อย่อยที่นำไปใช้ | สาระสำคัญและคุณูปการต่องานวิจัย |
|:---:|:---|:---|:---:|:---:|:---|:---:|:---|
| บทที่ 1 | Introduction: Re-connecting Histories across the Indo-Pacific | Andrea Acri, Roger Blench and Alexandra Landmann | 1–37 | 12–48 | `S-2017-acri-ch01-intro-indo-pacific.md` | บท 1 (1.2), บท 2 (2.5), บท 4 (4.5) | กรอบคิดการเชื่อมโยงประวัติศาสตร์ข้ามอินโด-แปซิฟิก ลมมรสุม การเดินเรือ และการแลกเปลี่ยนทางวัฒนธรรม |
| บทที่ 2 | Fearsome Bleeding, Boogeyman Gods and Chaos Victorious: A Conjectural History of Insular South Asian Religious Tropes | Robert Knox Dentan | 38–70 | 49–81 | `S-2017-dentan-ch02-fearsome-bleeding-chaos.md` | บท 2 (2.1, 2.2), บท 3 (3.5) | คติความเชื่อเรื่องความน่าสะพรึงกลัว เลือด เทพดุร้าย และความโกลาหลในเอเชียใต้หมู่เกาะ ฐานรากดั้งเดิมก่อนตันตระ |
| บทที่ 3 | Tantrism “Seen from the East” | Andrea Acri | 71–144 | 82–155 | `S-2017-acri-ch03-tantrism-from-east.md` | บท 1 (1.2), บท 2 (2.2, 2.5, 2.6), บท 4 (4.5) | ตันตริกชนม์ "มองจากฟากตะวันออก": ข้อเสนอระดับปฏิวัติวงการว่าด้วยการที่องค์ประกอบตันตระมีรากเหง้าจากการหลอมรวมกับอุษาคเนย์ |
| บทที่ 4 | Can We Reconstruct a “Malayo-Javanic” Law Area? | Alexandra Landmann | 145–206 | 156–217 | `S-2017-landmann-ch04-malayo-javanic-law.md` | บท 2 (2.6, 2.8) | การประกอบสร้างเขตแดนทางกฎหมาย "มลายู-ชวา" อิทธิพลของธรรมศาสตร์อินเดียผสานกับจารีตท้องถิ่น (Adat) |
| บทที่ 5 | Ethnographic and Archaeological Correlates for a Mainland Southeast Asia Linguistic Area | Roger Blench | 207–238 | 218–249 | `S-2017-blench-ch05-mainland-linguistic-area.md` | บท 2 (2.5, 2.8), บท 3 (3.1) | ความสัมพันธ์ทางชาติพันธุ์วรรณนา โบราณคดี และภาษาศาสตร์ในเขตแดนเอเชียตะวันออกเฉียงใต้แผ่นดินใหญ่ |
| บทที่ 6 | Was There a Late Prehistoric Integrated Southeast Asian Maritime Space? Insight from Settlements and Industries | Bérénice Bellina | 239–272 | 250–283 | `S-2017-bellina-ch06-maritime-space-settlements.md` | บท 2 (2.5, 2.8) | พื้นที่ทางทะเลของอุษาคเนย์ยุคก่อนประวัติศาสตร์ตอนปลาย หลักฐานจากการตั้งถิ่นฐาน อุตสาหกรรมลูกปัดและแก้ว |
| บทที่ 7 | Looms, Weaving and the Austronesian Expansion | Christopher Buckley | 273–324 | 284–335 | `S-2017-buckley-ch07-looms-weaving-austronesian.md` | บท 2 (2.5), บท 4 (4.5) | กี่ทอผ้า การทอ และการแพร่กระจายของกลุ่มภาษาออสโตรนีเซียน เทคโนโลยีการถ่ายทอดสัญลักษณ์สิ่งทอศักดิ์สิทธิ์ |
| บทที่ 8 | Pre-Austronesian Origins of Seafaring in Insular Southeast Asia | Waruno Mahdi | 325–374 | 336–385 | `S-2017-mahdi-ch08-pre-austronesian-seafaring.md` | บท 2 (2.5) | กำเนิดการเดินเรือสมุทรยุคก่อนออสโตรนีเซียนในเอเชียตะวันออกเฉียงใต้หมู่เกาะ เครือข่ายการค้าทางทะเลยุคโบราณ |
| บทที่ 9 | The Role of “Prakrit” in Maritime Southeast Asia through 101 Etymologies | Tom Hoogervorst | 375–440 | 386–451 | `S-2017-hoogervorst-ch09-prakrit-maritime-sea.md` | บท 2 (2.5, 2.6), บท 3 (3.1), บท 4 (4.5) | บทบาทของภาษาปรากฤตในเอเชียตะวันออกเฉียงใต้สมุทรผ่าน 101 ศัพทมูลวิทยา หลักฐานการติดต่อทางภาษาที่มิใช่เพียงสันสกฤตชั้นสูง |
| บทที่ 10 | Who Were the First Malagasy, and What Did They Speak? | Alexander Adelaar | 441–469 | 452–480 | `S-2017-adelaar-ch10-first-malagasy-language.md` | บท 2 (2.5) | ชาวมาลากาซีกลุ่มแรกคือใครและพูดภาษาอะไร การอพยพทางทะเลจากบอร์เนียวและสุมาตราข้ามมหาสมุทรอินเดียสู่มาดากัสการ์ |
| บทที่ 11 | Śāstric and Austronesian Comparative Perspectives: Parallel Frameworks on Indic Architectural and Cultural Translations among Western Malayo-Polynesian Societies | Imran bin Tajudeen | 470–514 | 481–525 | `S-2017-tajudeen-ch11-sastric-austronesian-architecture.md` | บท 2 (2.4, 2.6), บท 3 (3.7) | มุมมองเปรียบเทียบเชิงศาสตร์และออสโตรนีเซียน การแปลความทางสถาปัตยกรรมอินเดียในสังคมมลายู-โพลินีเชียนตะวันตก |
| บทที่ 12 | The Lord of the Land Relationship in Southeast Asia | Robert Wessing | 515–556 | 526–567 | `S-2017-wessing-ch12-lord-of-the-land.md` | บท 2 (2.6), บท 3 (3.1, 3.5) | ความสัมพันธ์เรื่อง "เจ้าของแผ่นดิน" (Lord of the Land) ในเอเชียตะวันออกเฉียงใต้ การผสานความเชื่อวิญญาณนิยมกับอำนาจกษัตริย์ |

---

## 5. เล่มที่ 4: Buddhist Studies Review, Vol. 20, No. 1 (2003)

- **ข้อมูลบรรณานุกรมมาตรฐาน:** Webb, Russell, ed. 2003. *Buddhist Studies Review* 20 (1). London: UK Association for Buddhist Studies / Institut de recherche bouddhique Linh-Son.
- **ชื่อไฟล์ PDF ในระบบ:** `2010-various-buddhist-studies-review-20-1-2003.pdf`
- **ชื่อไฟล์ข้อความสกัด:** `2010-various-buddhist-studies-review-20-1-2003.txt` (253,338 ไบต์)
- **ขอบเขตความยาวทางกายภาพ:** 115 หน้า PDF (ลำดับหน้าตามตัวเล่มพิมพ์: ปกหน้าและสารบัญ i–iv, เนื้อหา 1–114 หน้า, ปกหลัง)
- **โครงสร้างสารัตถะ:** บทบรรณาธิการรำลึก 100 ปี ชาตกาล Étienne Lamotte, 5 บทความวิจัย/คำแปลทางวิชาการ และ 1 หมวดรวมบันทึกวิจารณ์หนังสือวิชาการระดับชิ้นเอก (Book Reviews)

### 5.1 ดอสซิเยร์กลางระดับแม่บท (Master Umbrella Dossier)
- **รหัส Dossier กลาง:** `S-2003-bsr-vol20no1-master.md`
- **ชื่อดอสซิเยร์:** Master Umbrella Dossier: Buddhist Studies Review, Vol. 20, No. 1 (2003)
- **บทบาทและสังเคราะห์ภาพรวม:** ประมวลคุณูปการของวารสารพุทธศาสตร์ศึกษาชั้นนำแห่งสหราชอาณาจักร ฉบับฉลอง 100 ปี Étienne Lamotte ซึ่งรวมบทความหมุดหมายทางประวัติศาสตร์ของพระวัชรปาณี การแลกเปลี่ยนระหว่างพุทธศาสนากับจิตวิทยา จริยศาสตร์ซกเชน และบทวิจารณ์หนังสือวิชาการที่สำคัญยิ่งต่อวงการเถรวาทศึกษา (โดยเฉพาะการประเมินงานแปลอภิธัมมัตถสังคหะและวิภาวินีฎีกาของ Gethin โดย K.R. Norman)
- **การแมปปิ้งสู่โครงสร้างรายงานวิจัย:**
  - **บทเป้าหมายหลัก:** บทที่ 4 (หัวข้อ 4.3 การถกเถียงเรื่องมโนทัศน์ในทศวรรษ 1990–2000, 4.4 การสังเคราะห์ร่วมสมัย, 4.6 แผนภาพไทม์ไลน์)
  - **บทเป้าหมายรอง:** บทที่ 1 (หัวข้อ 1.1, 1.3), บทที่ 2 (หัวข้อ 2.1, 2.3), บทที่ 3 (หัวข้อ 3.2, 3.3, 3.8)

### 5.2 ตารางสารบัญฉบับเต็มและดอสซิเยร์รายบท (7 Unit Dossiers)

| ลำดับหน่วย | ชื่อบทความ / หมวดภาษาเดิม | ผู้เขียน / ผู้แปล | หน้าในเล่ม | หน้าใน PDF | รหัส Chapter Dossier | บทและหัวข้อย่อยที่นำไปใช้ | สาระสำคัญและคุณูปการต่องานวิจัย |
|:---:|:---|:---|:---:|:---:|:---|:---:|:---|
| หน่วยนำ | Editorial: Centenary of Étienne Lamotte (1903–1983) | Russell Webb and Editorial Board | iii–iv | 3 | `S-2003-webb-ed00-lamotte-centenary.md` | บท 4 (4.1, 4.4, 4.6) | ประวัติศาสตร์นิพนธ์ชีวประวัติและคุณูปการของ Étienne Lamotte ปรมาจารย์แห่งพุทธศาสนานิรุกติศาสตร์อินเดีย-จีน |
| บทความ 1 | Vajrapāṇi in India (I) | Étienne Lamotte (trans. Sara Boin-Webb) | 1–30 | 4–33 | `S-2003-lamotte-art01-vajrapani-india-1.md` | บท 2 (2.1, 2.3, 2.4), บท 1 (1.2), บท 4 (4.1, 4.4) | การศึกษาวิเคราะห์พัฒนาการของพระวัชรปาณีในอินเดีย จากเทพอสูร/ยักษ์ผู้ถือวชิระในปิฎกบาลี สู่ราชาแห่งคุยหกะ และพระโพธิสัตว์ตันตระ |
| บทความ 2 | The Pārāyaṇasūtra in Old Turkish | Peter Zieme | 31–48 | 34–48 | `S-2003-zieme-art02-parayanasutra-turkish.md` | บท 2 (2.3), บท 3 (3.2), บท 4 (4.4) | การศึกษาคัมภีร์ปารายนสูตรภาษาเติร์กโบราณ (Old Turkish) จากเอเชียกลาง สายธารการแพร่กระจายของวรรณกรรมพุทธโบราณ |
| บทความ 3 | On the Interaction of Buddhism and Psychology | John Pickering | 49–66 | 49–66 | `S-2003-pickering-art03-buddhism-psychology.md` | บท 1 (1.3), บท 3 (3.3), บท 4 (4.4) | ปฏิสัมพันธ์ระหว่างพุทธปรัชญากับจิตวิทยาตะวันตก การรับรู้ สติ สัมปชัญญะ และโครงสร้างจิตเชิงปริชาน |
| บทความ 4 | The Ethics of Thoughtlessness: The Problem of Ethics in rDzogs Chen Thought | John Peacock | 67–75 | 67–75 | `S-2003-peacock-art04-ethics-rdzogs-chen.md` | บท 2 (2.3, 2.4), บท 4 (4.4) | ปัญหาจริยศาสตร์ในความคิดซกเชน (rDzogs Chen) ภาวะพ้นความคิดเชิงมโนทัศน์ (Thoughtlessness) และการพ้นขั้วทวิลักษณ์ |
| บทความ 5 | Ekottarāgama (XXXI) | Thích Huyền-Vi and Bhikkhu Pāsādika (trans.) | 76–82 | 76–79 | `S-2003-huyenvi-art05-ekottaragama-xxxi.md` | บท 2 (2.3), บท 3 (3.2) | คำแปลและการวิเคราะห์คัมภีร์เอกุตตราคมหมวดที่ 31 จากภาษาจีนสู่ภาษาอังกฤษ การศึกษาเปรียบเทียบอรรถกถาบาลี-สันสกฤต |
| หมวดวิจารณ์ 6 | Book Reviews Section (Comprehensive Review of 13 Works) | K.R. Norman, Rupert Gethin, Michael Hahn, D. Seyfort Ruegg, Cathy Cantwell, Ian Harris, et al. | 83–114 | 80–114 | `S-2003-various-rev06-scholarly-reviews.md` | บท 1 (1.3, 1.7), บท 2 (2.3, 2.6), บท 3 (3.2, 3.8), บท 4 (4.3, 4.4) | รวมบทวิจารณ์หนังสือวิชาการ 13 รายการ โดยเฉพาะการวิจารณ์งานแปลอภิธัมมัตถสังคหะและฎีกาวิภาวินีของ Gethin โดย K.R. Norman, การวิจารณ์ภาพเขียนผนังถ้ำตันตระทิเบต โดย Cantwell, และการวิจารณ์ Ancient Angkor โดย Harris |

---

## 6. เมทริกซ์การกระจายตัวของดอสซิเยร์เข้าสู่บทและหัวข้อย่อย (Cross-Chapter Integration Matrix)

เพื่อเป็นพิมพ์เขียวแม่บทในการยกร่างรายงานวิจัย 4 บท (31 หัวข้อย่อย) ดอสซิเยร์ทั้ง 93 ฉบับของทีมที่ 1 ได้รับการจัดสรรเข้าสู่บทต่าง ๆ ดังนี้:

### 6.1 การสนับสนุนบทที่ 1: บทสรุปประมวลสังเคราะห์ระดับมหภาค (Executive Synthesis & Master Integration)
- **1.1 มโนทัศน์แม่บทและการคลี่คลายของชื่อเรียก ("เถรวาทตันตระ", "พุทธศาสนาลี้ลับสายใต้", "จารีตโยคาวจร"):**  
  - `S-2024-payne-oxford-handbook-master`, `S-2024-payne-ch00-intro`, `S-2024-payne-ch01-tantric-studies`
  - `S-2022-berkwitz-routledge-handbook-master`, `S-2022-berkwitz-ch00-intro-civilizations`, `S-2022-bretfeld-ch01-mahavihara-historiography`, `S-2022-kyaw-ch08-meditation-transformations`, `S-2022-skilling-ch14-canons-theravamsa`
  - `S-2003-bsr-vol20no1-master`
- **1.2 สังเคราะห์โครงสร้างความเชื่อมโยง: จากเบ้าหลอมตันตระอินเดียสู่บริบทอุษาคเนย์:**  
  - `S-2024-acri-ch19-bhairava-java`, `S-2024-sharrock-ch25-mandalas-landscape`, `S-2024-chemburkar-ch26-mandalas-sea-architecture`
  - `S-2022-blackburn-ch03-circulations-pali-world`
  - `S-2017-acri-spirits-ships-master`, `S-2017-acri-ch01-intro-indo-pacific`, `S-2017-acri-ch03-tantrism-from-east`
  - `S-2003-lamotte-art01-vajrapani-india-1`
- **1.3 สัณฐานวิทยาเชิงสรีรวิทยาและอักขรวิทยา (กาย จิต และคัพภวิทยาเชิงธรรม):**  
  - `S-2024-donnelly-ch04-emptiness-bliss`, `S-2024-samuel-ch07-neuroscience-tantra`, `S-2024-timalsina-ch08-abhinavagupta`, `S-2024-hayes-ch09-esoteric-physiology`, `S-2024-ondracka-ch10-transforming-body`, `S-2024-andreeva-ch11-japan-embryology`, `S-2024-white-ch16-netra-tantra`, `S-2024-gardiner-ch28-imagery-practice`, `S-2024-timalsina-ch29-visualization-cognition`, `S-2024-williams-ch31-cosmogenesis-phonemes`
  - `S-2022-kyaw-ch08-meditation-transformations`, `S-2022-gethin-ch15-abhidhamma-sarvastivada`
  - `S-2003-pickering-art03-buddhism-psychology`, `S-2003-various-rev06-scholarly-reviews`
- **1.4 การปะทะสังสรรค์ระหว่างจารีตโบราณกับการปฏิรูปสมัยใหม่:**  
  - `S-2024-urban-ch45-modernity-neo-tantra`
  - `S-2022-bretfeld-ch01-mahavihara-historiography`, `S-2022-ladwig-ch04-statecraft-buddhist-kingship`, `S-2022-hansen-ch05-reform-modern-theravada`
- **1.5 ภาพสะท้อนของขบวนการที่มีชีวิตในโลกร่วมสมัย:**  
  - `S-2024-sauthoff-ch13-alchemy-tantra`, `S-2024-urban-ch45-modernity-neo-tantra`
  - `S-2022-berkwitz-routledge-handbook-master`
- **1.6 ข้อค้นพบหลัก ช่องว่างทางวิชาการ และทิศทางสู่อนาคต:**  
  - `S-2022-skilling-ch14-canons-theravamsa`, `S-2022-walker-ch18-bilingualism-bitexts`
- **1.7 สรุปประมวลบูรณาการเชิงปรัชญาและประวัติศาสตร์:**  
  - `S-2024-payne-oxford-handbook-master`, `S-2024-sinclair-ch37-buddhist-soteriologies`
  - `S-2022-gethin-ch15-abhidhamma-sarvastivada`
  - `S-2003-various-rev06-scholarly-reviews`

### 6.2 การสนับสนุนบทที่ 2: ภาพรวมของพุทธและฮินดูตันตริก (Buddhist & Hindu Tantra: Origins, Evolution, Trans-regional Diffusion)
- **2.1 รากเหง้าทางประวัติศาสตร์และสังคมวัฒนธรรมในอินเดียโบราณ:**  
  - `S-2024-davidson-ch02-abhiseka`, `S-2024-simmerbrown-ch15-dakini`, `S-2024-chapple-ch32-jain-tantra`, `S-2024-schwartz-ch35-kalamukhas-deccan`, `S-2024-sinclair-ch37-buddhist-soteriologies`, `S-2024-varma-ch39-kamakhya-fertility`, `S-2024-goodall-ch40-saiva-history`, `S-2024-sugiki-ch41-tantra-chronology`
  - `S-2017-dentan-ch02-fearsome-bleeding-chaos`
  - `S-2003-lamotte-art01-vajrapani-india-1`
- **2.2 ปฏิสัมพันธ์ระหว่างไศวะตันตระและพุทธตันตระ ("The Śaiva Age"):**  
  - `S-2024-gough-ch06-jain-homa`, `S-2024-timalsina-ch08-abhinavagupta`, `S-2024-golovkova-ch14-srividya`, `S-2024-white-ch16-netra-tantra`, `S-2024-acri-ch19-bhairava-java`, `S-2024-slouber-ch23-jaina-goddesses`, `S-2024-gray-ch34-cakrasamvara`, `S-2024-lidke-ch36-sarvamnaya-tantra`, `S-2024-goodall-ch40-saiva-history`, `S-2024-nemec-ch42-sivadristi-dharmakirti`, `S-2024-lawrence-ch43-nondual-saivism-time`
  - `S-2017-acri-ch03-tantrism-from-east`
- **2.3 พัฒนาการของพุทธตันตระ (มนตรยาน, วัชรยาน, สหชยาน, กาลจักร):**  
  - `S-2024-donnelly-ch04-emptiness-bliss`, `S-2024-simmerbrown-ch15-dakini`, `S-2024-halkias-ch20-dzogchen-patriarch`, `S-2024-wallace-ch22-dharma-protector`, `S-2024-hayes-ch30-sahajiya-metaphors`, `S-2024-hackett-ch33-tibetan-literature`, `S-2024-gray-ch34-cakrasamvara`, `S-2024-sinclair-ch37-buddhist-soteriologies`, `S-2024-sugiki-ch41-tantra-chronology`, `S-2024-vanschaik-ch44-magic-vajrayana`
  - `S-2022-gethin-ch15-abhidhamma-sarvastivada`
  - `S-2003-lamotte-art01-vajrapani-india-1`, `S-2003-peacock-art04-ethics-rdzogs-chen`
- **2.4 สรีรวิทยาเร้นลับและเทคโนโลยีทางพิธีกรรม (จักระ, นาฑี, พินทุ, มณฑล, มุทรา):**  
  - `S-2024-davidson-ch02-abhiseka`, `S-2024-lidke-ch03-nepali-tantra`, `S-2024-donnelly-ch04-emptiness-bliss`, `S-2024-payne-ch05-shinto-goma`, `S-2024-gough-ch06-jain-homa`, `S-2024-samuel-ch07-neuroscience-tantra`, `S-2024-timalsina-ch08-abhinavagupta`, `S-2024-hayes-ch09-esoteric-physiology`, `S-2024-ondracka-ch10-transforming-body`, `S-2024-kotyk-ch12-astrology-japan`, `S-2024-sauthoff-ch13-alchemy-tantra`, `S-2024-white-ch16-netra-tantra`, `S-2024-swanson-ch18-japan-embodiment`, `S-2024-tinsley-ch21-aizen-myoo`, `S-2024-wallace-ch22-dharma-protector`, `S-2024-slouber-ch23-jaina-goddesses`, `S-2024-mills-ch24-tantric-temple`, `S-2024-sharrock-ch25-mandalas-landscape`, `S-2024-gough-ch27-padmavati-diagrams`, `S-2024-gardiner-ch28-imagery-practice`, `S-2024-timalsina-ch29-visualization-cognition`, `S-2024-hayes-ch30-sahajiya-metaphors`, `S-2024-williams-ch31-cosmogenesis-phonemes`, `S-2024-gray-ch34-cakrasamvara`, `S-2024-lidke-ch36-sarvamnaya-tantra`, `S-2024-sinclair-ch37-buddhist-soteriologies`, `S-2024-lorea-ch38-singing-tantra`, `S-2024-varma-ch39-kamakhya-fertility`, `S-2024-lawrence-ch43-nondual-saivism-time`, `S-2024-vanschaik-ch44-magic-vajrayana`
  - `S-2022-emmrich-ch09-repetition-pali-ritual`
  - `S-2017-tajudeen-ch11-sastric-austronesian-architecture`
- **2.5 การส่งออกข้ามแดนผ่านเครือข่ายทางทะเลสู่อุษาคเนย์:**  
  - `S-2024-acri-ch19-bhairava-java`, `S-2024-sharrock-ch25-mandalas-landscape`, `S-2024-chemburkar-ch26-mandalas-sea-architecture`
  - `S-2022-blackburn-ch03-circulations-pali-world`
  - `S-2017-acri-spirits-ships-master`, `S-2017-acri-ch01-intro-indo-pacific`, `S-2017-acri-ch03-tantrism-from-east`, `S-2017-blench-ch05-mainland-linguistic-area`, `S-2017-bellina-ch06-maritime-space-settlements`, `S-2017-buckley-ch07-looms-weaving-austronesian`, `S-2017-mahdi-ch08-pre-austronesian-seafaring`, `S-2017-hoogervorst-ch09-prakrit-maritime-sea`, `S-2017-adelaar-ch10-first-malagasy-language`
- **2.6 พุทธ-ฮินดูตันตระในชวา สุมาตรา และเขมรโบราณ:**  
  - `S-2024-acri-ch19-bhairava-java`, `S-2024-mills-ch24-tantric-temple`, `S-2024-sharrock-ch25-mandalas-landscape`, `S-2024-chemburkar-ch26-mandalas-sea-architecture`
  - `S-2022-ladwig-ch04-statecraft-buddhist-kingship`, `S-2022-poolsuwan-ch19-visual-narratives-pagan`, `S-2022-thompson-ch20-icons-standing-out`
  - `S-2017-acri-ch03-tantrism-from-east`, `S-2017-landmann-ch04-malayo-javanic-law`, `S-2017-hoogervorst-ch09-prakrit-maritime-sea`, `S-2017-tajudeen-ch11-sastric-austronesian-architecture`, `S-2017-wessing-ch12-lord-of-the-land`
  - `S-2003-various-rev06-scholarly-reviews` (Ian Harris on Ancient Angkor)
- **2.7 การเปลี่ยนผ่านหลังศตวรรษที่ 13 (การคลี่คลายและการแฝงตัว):**  
  - `S-2024-payne-ch05-shinto-goma`, `S-2024-kotyk-ch12-astrology-japan`, `S-2024-mcmullen-ch17-tendai-plants`, `S-2024-swanson-ch18-japan-embodiment`, `S-2024-vanschaik-ch44-magic-vajrayana`
  - `S-2022-gornall-ch02-pali-place-tradition`, `S-2022-blackburn-ch03-circulations-pali-world`, `S-2022-poolsuwan-ch19-visual-narratives-pagan`, `S-2022-thompson-ch20-icons-standing-out`
- **2.8 สรุปบทเรียนประวัติศาสตร์และสายธารสู่เอเชียตะวันออกเฉียงใต้แผ่นดินใหญ่:**  
  - `S-2024-chemburkar-ch26-mandalas-sea-architecture`
  - `S-2017-acri-spirits-ships-master`, `S-2017-landmann-ch04-malayo-javanic-law`, `S-2017-blench-ch05-mainland-linguistic-area`, `S-2017-bellina-ch06-maritime-space-settlements`

### 6.3 การสนับสนุนบทที่ 3: ภาพรวมเกี่ยวกับเถรวาทตันตริกในอุษาคเนย์ (Southern Esoteric Buddhism: Morphologies & Living Traditions)
- **3.1 ภูมิหลังการเข้ามาและการสถาปนาเถรวาทจารีตก่อนยุคปฏิรูป:**  
  - `S-2024-swanson-ch18-japan-embodiment`, `S-2024-chemburkar-ch26-mandalas-sea-architecture`
  - `S-2022-gornall-ch02-pali-place-tradition`, `S-2022-blackburn-ch03-circulations-pali-world`, `S-2022-salgado-ch06-tradition-nuns-sri-lanka`, `S-2022-schober-ch07-merit-ritual-giving`, `S-2022-kourilsky-ch10-filial-piety-theravada`, `S-2022-tilakaratne-ch11-laity-status-practice`, `S-2022-borchert-ch12-discipline-beyond-vinaya`, `S-2022-bowie-ch13-funerals-changing-practices`, `S-2022-berkwitz-ch16-vamsa-history-lineage`, `S-2022-langer-ch17-ten-merits-exegetical`, `S-2022-poolsuwan-ch19-visual-narratives-pagan`, `S-2022-thompson-ch20-icons-standing-out`, `S-2022-mccormick-ch23-mons-narrative-origins`
  - `S-2017-blench-ch05-mainland-linguistic-area`, `S-2017-hoogervorst-ch09-prakrit-maritime-sea`, `S-2017-wessing-ch12-lord-of-the-land`
- **3.2 คัมภีร์และวรรณกรรมสำคัญ (โยคาวจร, อมตกถา, สัททวิมล, ปฐมมูลมูลี, พระธรรมกายโบราณ):**  
  - `S-2024-williams-ch31-cosmogenesis-phonemes`
  - `S-2022-gornall-ch02-pali-place-tradition`, `S-2022-kyaw-ch08-meditation-transformations`, `S-2022-emmrich-ch09-repetition-pali-ritual`, `S-2022-skilling-ch14-canons-theravamsa`, `S-2022-berkwitz-ch16-vamsa-history-lineage`, `S-2022-langer-ch17-ten-merits-exegetical`, `S-2022-walker-ch18-bilingualism-bitexts`
  - `S-2003-zieme-art02-parayanasutra-turkish`, `S-2003-huyenvi-art05-ekottaragama-xxxi`, `S-2003-various-rev06-scholarly-reviews` (Norman on Abhidh-s and Ṭīkā)
- **3.3 สรีรวิทยาการภาวนา (สัททวิทยา, อักษรศักดิ์สิทธิ์, คัพภวิทยาเชิงธรรม, การจำลองพระพุทธเจ้าในกาย):**  
  - `S-2024-davidson-ch02-abhiseka`, `S-2024-samuel-ch07-neuroscience-tantra`, `S-2024-hayes-ch09-esoteric-physiology`, `S-2024-ondracka-ch10-transforming-body`, `S-2024-andreeva-ch11-japan-embryology`, `S-2024-gardiner-ch28-imagery-practice`, `S-2024-timalsina-ch29-visualization-cognition`, `S-2024-hayes-ch30-sahajiya-metaphors`, `S-2024-williams-ch31-cosmogenesis-phonemes`, `S-2024-lorea-ch38-singing-tantra`
  - `S-2022-kyaw-ch08-meditation-transformations`, `S-2022-emmrich-ch09-repetition-pali-ritual`, `S-2022-gethin-ch15-abhidhamma-sarvastivada`
  - `S-2003-pickering-art03-buddhism-psychology`
- **3.4 สายธารการสืบทอดในสยามและล้านนา (กรรมฐานมัชฌิมาแบบลำดับ, วัดราชสิทธาราม):**  
  - `S-2024-lidke-ch03-nepali-tantra`
  - `S-2022-kyaw-ch08-meditation-transformations`
- **3.5 ธรรมเนียมในเขมร ลาว และพม่า (จารีตครู, เครือข่ายใบลาน, ขบวนการเวชชา):**  
  - `S-2024-lidke-ch03-nepali-tantra`, `S-2024-sauthoff-ch13-alchemy-tantra`, `S-2024-lorea-ch38-singing-tantra`
  - `S-2022-schober-ch07-merit-ritual-giving`, `S-2022-kyaw-ch08-meditation-transformations`, `S-2022-kourilsky-ch10-filial-piety-theravada`, `S-2022-holt-ch22-deities-supernatural-forces`, `S-2022-mccormick-ch23-mons-narrative-origins`
  - `S-2017-dentan-ch02-fearsome-bleeding-chaos`, `S-2017-wessing-ch12-lord-of-the-land`
- **3.6 ภัยคุกคามและการกวาดล้าง (การปฏิรูป ร.4, ธรรมยุต, ตัดคัมภีร์กรรมฐานโบราณ):**  
  - `S-2022-ladwig-ch04-statecraft-buddhist-kingship`, `S-2022-hansen-ch05-reform-modern-theravada`, `S-2022-borchert-ch12-discipline-beyond-vinaya`
- **3.7 การดำรงอยู่และการฟื้นคืนในโลกร่วมสมัย (พระเครื่อง, พุทธาภิเษก, วิชชาธรรมกาย, เวชชา, ผ้ายันต์):**  
  - `S-2024-kotyk-ch12-astrology-japan`, `S-2024-sauthoff-ch13-alchemy-tantra`, `S-2024-tinsley-ch21-aizen-myoo`, `S-2024-wallace-ch22-dharma-protector`, `S-2024-gough-ch27-padmavati-diagrams`, `S-2024-vanschaik-ch44-magic-vajrayana`
  - `S-2022-salgado-ch06-tradition-nuns-sri-lanka`, `S-2022-tilakaratne-ch11-laity-status-practice`, `S-2022-bowie-ch13-funerals-changing-practices`, `S-2022-langer-ch17-ten-merits-exegetical`, `S-2022-poolsuwan-ch19-visual-narratives-pagan`, `S-2022-thompson-ch20-icons-standing-out`, `S-2022-polmuk-ch21-affect-visual-culture`, `S-2022-holt-ch22-deities-supernatural-forces`
  - `S-2017-tajudeen-ch11-sastric-austronesian-architecture`
- **3.8 สรุปสัณฐานวิทยาของพุทธศาสนาลี้ลับสายใต้ (รากฐานบาลีและอภิธรรม):**  
  - `S-2024-donnelly-ch04-emptiness-bliss`, `S-2024-hayes-ch09-esoteric-physiology`, `S-2024-sinclair-ch37-buddhist-soteriologies`
  - `S-2022-kyaw-ch08-meditation-transformations`, `S-2022-gethin-ch15-abhidhamma-sarvastivada`
  - `S-2003-various-rev06-scholarly-reviews`

### 6.4 การสนับสนุนบทที่ 4: ประวัติศาสตร์นิพนธ์และสถานภาพการศึกษาตามไทม์ไลน์ (Historiography & State of the Field)
- **4.1 ยุคบุกเบิกแห่งการค้นพบเอกสาร (1890s–1950s):**  
  - `S-2003-webb-ed00-lamotte-centenary`, `S-2003-lamotte-art01-vajrapani-india-1`
- **4.3 การถกเถียงเรื่องมโนทัศน์ (1990s):**  
  - `S-2022-skilling-ch14-canons-theravamsa`
  - `S-2003-bsr-vol20no1-master`, `S-2003-various-rev06-scholarly-reviews`
- **4.4 การสังเคราะห์ร่วมสมัยและพุทธศาสนานิพนธ์ทศวรรษ 2000–2010:**  
  - `S-2022-hansen-ch05-reform-modern-theravada`, `S-2022-schober-ch07-merit-ritual-giving`
  - `S-2017-spirits-ships-master`
  - `S-2003-bsr-vol20no1-master`, `S-2003-webb-ed00-lamotte-centenary`, `S-2003-lamotte-art01-vajrapani-india-1`, `S-2003-zieme-art02-parayanasutra-turkish`, `S-2003-pickering-art03-buddhism-psychology`, `S-2003-peacock-art04-ethics-rdzogs-chen`, `S-2003-various-rev06-scholarly-reviews`
- **4.5 การศึกษาแบบพหุภาษาและสหวิทยาการในทศวรรษ 2020:**  
  - `S-2024-payne-oxford-handbook-master`, `S-2024-payne-ch00-intro`, `S-2024-payne-ch01-tantric-studies`, `S-2024-payne-ch05-shinto-goma`, `S-2024-golovkova-ch14-srividya`, `S-2024-simmerbrown-ch15-dakini`, `S-2024-acri-ch19-bhairava-java`, `S-2024-halkias-ch20-dzogchen-patriarch`, `S-2024-sharrock-ch25-mandalas-landscape`, `S-2024-chemburkar-ch26-mandalas-sea-architecture`, `S-2024-hackett-ch33-tibetan-literature`, `S-2024-gray-ch34-cakrasamvara`, `S-2024-lidke-ch36-sarvamnaya-tantra`, `S-2024-goodall-ch40-saiva-history`, `S-2024-sugiki-ch41-tantra-chronology`, `S-2024-nemec-ch42-sivadristi-dharmakirti`, `S-2024-vanschaik-ch44-magic-vajrayana`, `S-2024-urban-ch45-modernity-neo-tantra`
  - `S-2022-berkwitz-routledge-handbook-master`, `S-2022-berkwitz-ch00-intro-civilizations`, `S-2022-bretfeld-ch01-mahavihara-historiography`, `S-2022-gornall-ch02-pali-place-tradition`, `S-2022-hansen-ch05-reform-modern-theravada`, `S-2022-salgado-ch06-tradition-nuns-sri-lanka`, `S-2022-schober-ch07-merit-ritual-giving`, `S-2022-kyaw-ch08-meditation-transformations`, `S-2022-kourilsky-ch10-filial-piety-theravada`, `S-2022-skilling-ch14-canons-theravamsa`, `S-2022-berkwitz-ch16-vamsa-history-lineage`, `S-2022-walker-ch18-bilingualism-bitexts`, `S-2022-polmuk-ch21-affect-visual-culture`, `S-2022-holt-ch22-deities-supernatural-forces`, `S-2022-mccormick-ch23-mons-narrative-origins`
  - `S-2017-acri-ch01-intro-indo-pacific`, `S-2017-acri-ch03-tantrism-from-east`, `S-2017-buckley-ch07-looms-weaving-austronesian`, `S-2017-hoogervorst-ch09-prakrit-maritime-sea`
- **4.6 แผนภาพไทม์ไลน์พัฒนาการทางวิชาการและลำดับเหตุการณ์สำคัญ:**  
  - `S-2024-payne-oxford-handbook-master`, `S-2024-sugiki-ch41-tantra-chronology`
  - `S-2003-bsr-vol20no1-master`, `S-2003-webb-ed00-lamotte-centenary`
- **4.7 การวิเคราะห์ช่องว่าง ข้อจำกัด และข้อถกเถียงที่ยังไม่ยุติ:**  
  - `S-2024-payne-ch01-tantric-studies`, `S-2024-golovkova-ch14-srividya`, `S-2024-urban-ch45-modernity-neo-tantra`
  - `S-2022-berkwitz-routledge-handbook-master`, `S-2022-bretfeld-ch01-mahavihara-historiography`, `S-2022-walker-ch18-bilingualism-bitexts`, `S-2022-mccormick-ch23-mons-narrative-origins`
- **4.8 สรุปสถานภาพการศึกษาและทิศทางการสังเคราะห์ในโครงการวิจัย:**  
  - `S-2024-payne-oxford-handbook-master`, `S-2024-payne-ch00-intro`, `S-2024-payne-ch01-tantric-studies`
  - `S-2022-berkwitz-routledge-handbook-master`, `S-2022-berkwitz-ch00-intro-civilizations`

---

**รายงานโดย:** Sub-Agent ทีมที่ 1 (Team 1: Encyclopedic Edited Handbooks)
**บันทึกเมื่อ:** 17 กันยายน 2026
**เอกสารอ้างอิงหลักในระบบ:** `team1-handbooks-dossier-mapping.md`
