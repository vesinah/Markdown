# พิมพ์เขียวแผนแม่บทการจัดทำดอสซิเยร์ฉบับสมบูรณ์ (Master Dossier Architecture & Blueprint)
## โครงการวิจัย: เถรวาทตันตระ หรือเถรวาทแบบเซาท์อีสเอเชีย: กำเนิด พัฒนาการ การดำรงอยู่ และสถานภาพการศึกษาทางประวัติศาสตร์นิพนธ์
**ระดับโครงการ:** รายงานวิจัยวิชาการระดับสูง (Senior Academic Research Report) 4 บท (ความยาวรวม ≥ 40,000 คำ / ≥ 200,000 อักขระ)
**สถานะเอกสาร:** แผนแม่บทผ่านการสำรวจสารบัญฉบับเต็มและตัวบทจริง 100% โดย Sub-Agents ทั้ง 7 ทีม (สมบูรณ์ 100% พร้อมขออนุมัติเริ่มปฏิบัติการเขียน Dossier)

---

## 1. บทสรุปสถิติแม่บทระดับโครงการ (Executive Master Statistics)

ตามระเบียบคำสั่งเด็ดขาดของผู้ใช้และหลักเกณฑ์วิจัยขั้นสูงสุด:
1. **หลักการ Zero Cherry-Picking 100%:** หนังสือและรายงานรวมบทความทุกเล่ม (Monographs & Edited Volumes) จะต้องจัดทำ **1 Dossier กลาง (Master Umbrella Dossier)** เพื่อสังเคราะห์ภาพรวม และ **1 Dossier ประจำบทสำหรับ "ทุกบทในเล่ม"** (1 บท = 1 ไฟล์ Dossier `.md`) ห้ามคัดเลือกตัดทอนบทใดบทหนึ่งออกโดยเด็ดขาด เล่มมีกี่สิบบทต้องจัดทำครอบคลุมทุกบท 100%
2. **หลักการ Journal Articles 100%:** บทความวิจัยเดี่ยวและงานวิชาการชิ้นเดี่ยว กำหนดให้ 1 บทความ = 1 Dossier
3. **หลักการ Dossier-Driven Drafting Only (ขั้นที่ 7):** การยกร่างรายงานวิจัย 4 บทจริง จะดำเนินการผ่านการอ้างอิงและสังเคราะห์ข้อมูลจาก Source Analysis Dossiers ใน `research-notes/sources/` เท่านั้น ห้ามเปิดอ่านไฟล์ PDF ดิบโดยตรงขณะเขียน เพื่อป้องกัน Context Bloat และอาการหลอนทางวิชาการ (Hallucination) 100%

### ตารางสถิติสรุปภาพรวม 7 ทีมปฏิบัติการ

| ทีมปฏิบัติการ | กลุ่มสาขาวิชาและขอบเขตเอกสาร | จำนวนเล่ม/โครงการ | Master Dossiers | Chapter Dossiers | Article Dossiers | รวม Dossiers ทั้งสิ้น | จำนวนหน้าจริงที่สกัด |
|:---:|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| **ทีมที่ 1** | สารานุกรมและคู่มือวิจัยรวมบทความยักษ์ (Encyclopedic Handbooks) | 4 เล่ม | 4 ฉบับ | 89 ฉบับ | - | **93 ฉบับ** | 2,371 หน้า |
| **ทีมที่ 2** | ตำรากรรมฐานและเถรวาทเร้นลับสายแม่บท (Core Theravada & Meditation) | 7 เล่ม | 7 ฉบับ | 88 ฉบับ | - | **95 ฉบับ** | 1,614 หน้า |
| **ทีมที่ 3** | ตันตระอินเดีย สรีรวิทยาเร้นลับ และประติมาวิทยา (Indic Tantra & Iconography) | 8 เล่ม | 8 ฉบับ | 101 ฉบับ | - | **109 ฉบับ** | 3,410 หน้า |
| **ทีมที่ 4** | คัมภีร์ตันตระชั้นสูงและรหัสยะเบงกอล (Higher Tantras & Mysticism) | 7 เล่ม | 7 ฉบับ | 115 ฉบับ | - | **122 ฉบับ** | 2,059 หน้า |
| **ทีมที่ 5** | สายพม่า พุกาม อริ เวกซา และล้านนา (Burma, Ari, Weikza & Lanna) | 7 เล่ม | 7 ฉบับ | 61 ฉบับ | - | **68 ฉบับ** | 1,538 หน้า |
| **ทีมที่ 6** | สายชวา บุโรพุทโธ กัมพูชา และจารึกโบราณ (Maritime Java & Cambodia) | 7 เล่ม | 7 ฉบับ | 58 ฉบับ | - | **65 ฉบับ** | 3,251 หน้า |
| **ทีมที่ 7** | วรรณคดีบาลี การแพร่กระจาย และบทความวิจัยเดี่ยว (Pali & Articles) | 11 เล่ม + 62 บทความ | 11 ฉบับ | 132 ฉบับ | 62 ฉบับ | **205 ฉบับ** | 4,500+ หน้า |
| **ยอดรวมทั้งโครงการ** | **คลังเอกสารวิจัยฉบับเต็มสมบูรณ์ 100%** | **51 โครงการหนังสือ + 62 บทความ** | **51 ฉบับ** | **644 ฉบับ** | **62 ฉบับ** | **757 ฉบับ** | **18,743+ หน้า** |

---

## 2. มาตรฐานและสถาปัตยกรรมของไฟล์ Dossier แต่ละฉบับ

ทุกไฟล์ Dossier ที่ผลิตขึ้นจะต้องปฏิบัติตามมาตรฐานสากล 6 ส่วนหลักตามแม่แบบ `research-notes/dossier-template.md`:
- **ส่วนที่ 1: ข้อมูลทางบรรณานุกรมฉบับสมบูรณ์ (Full Bibliographic Citation):** อ้างอิงตามมาตรฐาน Chicago/Turabian ระบุชื่อผู้แต่ง ปีพิมพ์ ชื่อบท/ชื่อหนังสือ ผู้ตรวจชำระ สำนักพิมพ์ เมืองที่พิมพ์ และขอบเขตเลขหน้าจริง 100%
- **ส่วนที่ 2: วัตถุประสงค์และข้อถกเถียงหลักของบท (Thesis, Problematic & Core Argument):** วิเคราะห์ประเด็นวิจัย ปัญหาทางประวัติศาสตร์หรือปรัชญาที่บทนั้นตั้งขึ้น และข้อสรุปหลักของผู้เขียน
- **ส่วนที่ 3: การวิเคราะห์เนื้อหาเชิงลึกรายหัวข้อ (In-Depth Thematic & Conceptual Deconstruction):** สกัดแนวคิดสำคัญ คำศัพท์เทคนิค (IAST / บาลี / สันสกฤต / มลายูโบราณ) แผนภูมิโครงสร้าง และการเทียบเคียง
- **ส่วนที่ 4: ชุดข้อความคัดลอกตรงตามตัวบทพร้อมเลขหน้าจริง (Verbatim Key Quotes with Page References):** คัดข้อความสำคัญภาษาต้นฉบับ (อังกฤษ ฝรั่งเศส เยอรมัน บาลี สันสกฤต) ไม่น้อยกว่า 5-10 ข้อความสำคัญ พร้อมระบุเลขหน้าแม่นยำ 100% เพื่อใช้เป็นหลักฐานเชิงประจักษ์ในการเขียนรายงาน
- **ส่วนที่ 5: การประเมินค่าทางวิชาการและจุดเด่น-จุดอ่อน (Critical Scholarly Assessment & Historiographical Gaps):** ชี้ข้อจำกัด ระเบียบวิธีวิจัย หรือข้อโต้แย้งที่ยังไม่ลงรอยกับนักวิชาการสำนักอื่น
- **ส่วนที่ 6: ผังการแมปปิ้งเข้าสู่โครงสร้างรายงานวิจัย (Research Report Integration Mapping):** ระบุบท (1, 2, 3, 4) และหัวข้อย่อย (เช่น 1.1, 2.5, 3.2, 4.4) พร้อมคำอธิบายว่าจะนำข้อเท็จจริงใน Dossier นี้ไปสนับสนุนการสร้างข้อถกเถียงในจุดใด

**ข้อกำหนดเชิงปริมาณ:**
- ขนาดไฟล์ Dossier แต่ละฉบับต้องมีเนื้อหาอิ่มตัว **ขนาดไฟล์ ≥ 100 KB ต่อ 1 ฉบับ**
- ห้ามเขียนย่อสรุปแบบหยาบหรือรวบรัด

---


---

# ภาคผนวกแผนแม่บทส่วนที่ 3: ทีมที่ 1: หมวดสารานุกรมและคู่มือวิจัยรวมบทความยักษ์ (Encyclopedic Edited Handbooks)

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



---

# ภาคผนวกแผนแม่บทส่วนที่ 4: ทีมที่ 2: หมวดตำรากรรมฐานและเถรวาทเร้นลับสายแม่บท (Core Theravada & Esoteric Meditation Monographs)

รายงานผลการสำรวจสารบัญฉบับเต็มและกำหนดโครงสร้าง Dossiers ประจำบท (Team 2: Core Theravada & Esoteric Meditation Monograph Specialist)

เรียน Lead Agent (โครงการวิจัย: เถรวาทตันตระ หรือเถรวาทแบบเซาท์อีสเอเชีย)

ตามคำสั่งมอบหมายภารกิจของ Sub-Agent ทีมที่ 2 ในการสำรวจสารบัญ โครงสร้างตัวบทจริง และขอบเขตเลขหน้าของตำรากรรมฐานและเถรวาทเร้นลับระดับแม่บท 7 รายการ จากไฟล์ตัวบทจริงใน research-notes/extracted-texts/ และ research-notes/pdf/ (รวมถึง epub) บัดนี้ทีมที่ 2 ได้ดำเนินการตรวจสอบโครงสร้างตัวบทจริง 100% ครบถ้วนทุกเล่ม ทุกบท ไม่มีการตัดทอนหรือข้ามบทแม้แต่บทเดียว

ด้านล่างนี้คือรายงานผลการวิเคราะห์ฉบับสมบูรณ์ พร้อมกำหนดรหัส Dossier (1 Master Umbrella Dossier + 1 Chapter Dossier ครบทุกบท) และการแมปปิ้งเข้าสู่บทและหัวข้อย่อยของรายงานวิจัย (บทที่ 1, 2, 3, 4 และหัวข้อย่อย 1.1 ถึง 4.8)

================================================================================
รายการที่ 1: Crosby, Kate (2020)
Esoteric Theravada: The Story of the Forgotten Meditation Tradition
(สำนักพิมพ์ Yale University Press, จำนวน 294 หน้า)
================================================================================
โครงสร้าง Dossier รวมทั้งสิ้น: 1 Master Umbrella + 10 Unit/Chapter Dossiers = 11 Dossiers

1. Master Umbrella Dossier:
   - รหัส Dossier: S-2020-crosby-master.md
   - ชื่อเอกสาร: Esoteric Theravada: The Story of the Forgotten Meditation Tradition (Master Umbrella Dossier)
   - ขอบเขต: ภาพรวมทั้งเล่ม (pp. 1–285 / PDF pp. 1–294)
   - การแมปปิ้งเข้าสู่รายงานวิจัย: บทที่ 1 (1.1, 1.3, 1.4, 1.7), บทที่ 3 (3.1, 3.2, 3.3, 3.8), บทที่ 4 (4.5, 4.8)

2. Chapter Dossiers ประจำบทครบทุกบท:
   - บทที่ 0 (Introduction):
     - รหัส: S-2020-crosby-intro.md
     - ชื่อบท: Introduction
     - ขอบเขตเลขหน้าจริง: Book pp. 1–6 (PDF pp. 10–15)
     - สาระสำคัญ: นิยาม "โบรณกรรมฐาน" (Borān Kammaṭṭhāna), ความแตกต่างระหว่างสมาธิร่วมสมัย (Modern Mindfulness) กับระบบสมาธิโบราณ, การสูญหายของประเพณีปฏิบัติก่อนยุคใหม่
     - การแมปปิ้ง: บทที่ 1 (1.1), บทที่ 3 (3.1, 3.8), บทที่ 4 (4.5)
   - บทที่ 1:
     - รหัส: S-2020-crosby-ch01-colonial-gaze.md
     - ชื่อบท: Chapter 1: The Colonial Gaze: The Invisibility of Pre-Modern Theravada Meditation
     - ขอบเขตเลขหน้าจริง: Book pp. 7–21 (PDF pp. 16–30)
     - สาระสำคัญ: สายตาอาณานิคม (Colonial Gaze), การสร้างภาพตัวแทนพุทธศาสนาเถรวาทเป็น "วิทยาศาสตร์แห่งจิต" ที่มีเหตุผลนิยม และการเบียดขับมิติทางกายและรหัสยวิทยาให้มองไม่เห็น
     - การแมปปิ้ง: บทที่ 1 (1.1, 1.4), บทที่ 3 (3.6), บทที่ 4 (4.1, 4.5, 4.7)
   - บทที่ 2:
     - รหัส: S-2020-crosby-ch02-abhidhamma-practice.md
     - ชื่อบท: Chapter 2: Abhidhamma and Practice: The Path in Theravada Meditation Systems
     - ขอบเขตเลขหน้าจริง: Book pp. 22–55 (PDF pp. 31–64)
     - สาระสำคัญ: ความสัมพันธ์ระหว่างพระอภิธรรมกับการปฏิบัติภาวนา, การใช้อภิธรรมเป็นแผนที่นำทางจิตและกายในโบรณกรรมฐาน, การโต้แย้งว่าอภิธรรมเป็นเนื้อแท้ดั้งเดิมมิใช่สิ่งต่อเติม
     - การแมปปิ้ง: บทที่ 1 (1.1, 1.3), บทที่ 3 (3.2, 3.3, 3.8), บทที่ 4 (4.5)
   - บทที่ 3:
     - รหัส: S-2020-crosby-ch03-documenting-esoteric.md
     - ชื่อบท: Chapter 3: Documenting the Esoteric: The Production and Survival of Evidence for Borān Kammaṭṭhāna Meditation
     - ขอบเขตเลขหน้าจริง: Book pp. 56–84 (PDF pp. 65–93)
     - สาระสำคัญ: หลักฐานเอกสารตัวเขียนใบลาน/สมุดไทย, คัมภีร์อมตกถาวรรณนา, ประวัติการคัดลอกและการกระจายตัวของคัมภีร์ในสยาม ลาว กัมพูชา และศรีลังกา
     - การแมปปิ้ง: บทที่ 1 (1.6), บทที่ 3 (3.1, 3.2, 3.5), บทที่ 4 (4.1, 4.5, 4.7)
   - บทที่ 4:
     - รหัส: S-2020-crosby-ch04-technologies-transformation.md
     - ชื่อบท: Chapter 4: Technologies of Transformation: Grammar, Mathematics, and the Significance of Substitution
     - ขอบเขตเลขหน้าจริง: Book pp. 85–111 (PDF pp. 94–120)
     - สาระสำคัญ: เทคโนโลยีแห่งการแปรสภาพ, ไวยากรณ์บาลีเชิงรู้ผลิต, คณิตศาสตร์โบราณ, การแทนที่ค่า (Substitution), ศูนย์ (Śūnya), การผูกสูตรตัวอักษรและพยัญชนะศักดิ์สิทธิ์
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 2 (2.4), บทที่ 3 (3.2, 3.3, 3.8)
   - บทที่ 5:
     - รหัส: S-2020-crosby-ch05-transformation-body.md
     - ชื่อบท: Chapter 5: Transformation of the Body: Meditation, Medicine, and Chemistry
     - ขอบเขตเลขหน้าจริง: Book pp. 112–135 (PDF pp. 121–144)
     - สาระสำคัญ: การแปรสภาพกายเนื้อ, สรีรวิทยาเร้นลับ, การแพทย์แผนโบราณ, การเล่นแร่แปรธาตุ, คัพภวิทยาเชิงธรรม (Dharmic Embryology) และการให้กำเนิดพระพุทธเจ้าในกาย
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 2 (2.4), บทที่ 3 (3.3, 3.8)
   - บทที่ 6:
     - รหัส: S-2020-crosby-ch06-center-to-periphery.md
     - ชื่อบท: Chapter 6: From Center to Periphery: The Changing Place of Borān Kammaṭṭhāna under Thai Influence
     - ขอบเขตเลขหน้าจริง: Book pp. 136–158 (PDF pp. 145–167)
     - สาระสำคัญ: การเปลี่ยนผ่านจากศูนย์กลางสู่อนุภูมิภาค, สายสืบทอดอยุธยา-ธนบุรี-รัตนโกสินทร์, การปฏิรูปสงฆ์สมัย ร.4, ธรรมยุต, การผลักโบรณกรรมฐานไปสู่ชายขอบ
     - การแมปปิ้ง: บทที่ 1 (1.4), บทที่ 3 (3.1, 3.4, 3.6), บทที่ 4 (4.1, 4.5)
   - บทที่ 7:
     - รหัส: S-2020-crosby-ch07-modern-revivals.md
     - ชื่อบท: Chapter 7: Meditation in Modern Revivals
     - ขอบเขตเลขหน้าจริง: Book pp. 159–182 (PDF pp. 168–191)
     - สาระสำคัญ: ขบวนการฟื้นฟูกรรมฐานในยุคใหม่, หลวงพ่อสด วัดปากน้ำ ภาษีเจริญ, วิชชาธรรมกาย, การปรับรูปแบบคำสอนสู่คนสมัยใหม่และการเผยแผ่สู่สากล
     - การแมปปิ้ง: บทที่ 1 (1.5), บทที่ 3 (3.4, 3.7), บทที่ 4 (4.5)
   - บทสรุป (Conclusion):
     - รหัส: S-2020-crosby-conclusion.md
     - ชื่อบท: Conclusion
     - ขอบเขตเลขหน้าจริง: Book pp. 183–189 (PDF pp. 192–198)
     - สาระสำคัญ: สรุปบทบาท ชะตากรรม และมรดกตกทอดของโบรณกรรมฐาน, ประเด็นวรรณะในลังกา, และสถานะของจารีตในปัจจุบัน
     - การแมปปิ้ง: บทที่ 1 (1.7), บทที่ 3 (3.8), บทที่ 4 (4.5, 4.8)
   - ภาคผนวกและดัชนีอ้างอิง:
     - รหัส: S-2020-crosby-apparatus.md
     - ชื่อบท: Notes, Bibliography, and Index
     - ขอบเขตเลขหน้าจริง: Book pp. 190–285 (PDF pp. 199–294)
     - สาระสำคัญ: เชิงอรรถวิเคราะห์ตัวบท บรรณานุกรมเอกสารปฐมภูมิใบลาน และดัชนีคำค้น
     - การแมปปิ้ง: บทที่ 4 (4.5, 4.7, 4.8)

================================================================================
รายการที่ 2: Cousins, L. S. (2022)
Meditations of the Pali Tradition: Illuminating Buddhist Meditative Paths
(สำนักพิมพ์ Shambhala Publications, จัดทำโดย Sarah Shaw, จำนวน 348 หน้า)
================================================================================
โครงสร้าง Dossier รวมทั้งสิ้น: 1 Master Umbrella + 15 Unit/Chapter Dossiers = 16 Dossiers

1. Master Umbrella Dossier:
   - รหัส Dossier: S-2022-cousins-master.md
   - ชื่อเอกสาร: Meditations of the Pali Tradition (Master Umbrella Dossier)
   - ขอบเขต: ภาพรวมทั้งเล่ม (pp. viii–302)
   - การแมปปิ้งเข้าสู่รายงานวิจัย: บทที่ 1 (1.1, 1.3, 1.7), บทที่ 3 (3.2, 3.3, 3.8), บทที่ 4 (4.3, 4.5, 4.8)

2. Chapter Dossiers ประจำบทครบทุกบท:
   - บทนำบรรณาธิการ (Editor's Introduction by Sarah Shaw):
     - รหัส: S-2022-cousins-shaw-intro.md
     - ชื่อบท: Editor's Introduction by Sarah Shaw
     - ขอบเขตเลขหน้าจริง: pp. viii–xxxi
     - สาระสำคัญ: ประวัติวิชาการและระเบียบวิธีวิจัยนิรุกติศาสตร์ของ L.S. Cousins, บริบทการรวบรวมร่างต้นฉบับทั้ง 8 ร่าง, และข้อสังเกตเรื่องอภิธรรมมีชีวิต
     - การแมปปิ้ง: บทที่ 4 (4.3, 4.5)
   - บทนำผู้แต่ง (Author's Introduction):
     - รหัส: S-2022-cousins-intro.md
     - ชื่อบท: Introduction
     - ขอบเขตเลขหน้าจริง: pp. xxxii–2
     - สาระสำคัญ: การจัดแบ่งพุทธศาสนา 3 สายหลัก, การใช้คำว่า "เถรวาท" และ "จารีตบาลีสายใต้", ขอบเขตของงานวิจัย
     - การแมปปิ้ง: บทที่ 1 (1.1), บทที่ 4 (4.3)
   - บทที่ 1:
     - รหัส: S-2022-cousins-ch01-jhana-commentaries.md
     - ชื่อบท: Chapter 1: Jhāna in the Commentaries
     - ขอบเขตเลขหน้าจริง: pp. 3–28
     - สาระสำคัญ: มโนทัศน์เรื่อง "การภาวนา" (Bhāvanā), ฌานในคัมภีร์อรรถกถา (วิสุทธิมรรค, สัมโมหวิโนทนี), องค์ฌาน วิตก วิจาร เอกัคคตา และปฏิภาคนิมิต
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 3 (3.3, 3.8)
   - บทที่ 2:
     - รหัส: S-2022-cousins-ch02-jhana-canon.md
     - ชื่อบท: Chapter 2: Jhāna in the Pali Canon
     - ขอบเขตเลขหน้าจริง: pp. 29–50
     - สาระสำคัญ: ฌานในพระไตรปิฎกบาลี, พระสูตรและอภิธรรมปิฎก (วิภังค์), การจัดหมวดรูปฌาน 4 และรูปฌาน 5
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 3 (3.2, 3.8)
   - บทที่ 3:
     - รหัส: S-2022-cousins-ch03-formless-attainments.md
     - ชื่อบท: Chapter 3: Formless Attainments in the Pali Canon
     - ขอบเขตเลขหน้าจริง: pp. 51–70
     - สาระสำคัญ: อรูปฌาน/อรูปสมาบัติ 4 ในพระสูตรบาลี, ความสัมพันธ์กับขันธ์ 5, กำเนิดและพัฒนาการก่อนและต้นพุทธกาล
     - การแมปปิ้ง: บทที่ 2 (2.4), บทที่ 3 (3.3)
   - บทที่ 4:
     - รหัส: S-2022-cousins-ch04-roots-insight.md
     - ชื่อบท: Chapter 4: The Roots of Insight Meditation
     - ขอบเขตเลขหน้าจริง: pp. 71–94
     - สาระสำคัญ: รากเหง้าของวิปัสสนา, ความแตกต่างระหว่างอุภโตภาควิมุตและปัญญาวิมุต, การคลี่คลายในชั้นอรรถกถาของสำนักพุทธโฆสะ
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.8), บทที่ 4 (4.3)
   - บทที่ 5:
     - รหัส: S-2022-cousins-ch05-samatha-vipassana.md
     - ชื่อบท: Chapter 5: Samatha and Vipassanā
     - ขอบเขตเลขหน้าจริง: pp. 95–109
     - สาระสำคัญ: ความสัมพันธ์เชิงพลวัตและปฏิสัมพันธ์แบบ "เกลียวคอร์กสกรู" (Corkscrew dynamic) ระหว่างสมถะและวิปัสสนาในการบรรลุมรรคผล
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 3 (3.8)
   - บทที่ 6:
     - รหัส: S-2022-cousins-ch06-anapanasati.md
     - ชื่อบท: Chapter 6: The Sutta on Mindfulness with In-and-Out Breathing
     - ขอบเขตเลขหน้าจริง: pp. 110–131
     - สาระสำคัญ: อานาปานสติสูตร 16 ฐาน (จตุกกะ 4), การวิเคราะห์เปรียบเทียบในปฏิสัมภิทามรรค วินัยปิฎก และฉบับภาษาจีน/สันสกฤต
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.3)
   - บทที่ 7:
     - รหัส: S-2022-cousins-ch07-silk-road.md
     - ชื่อบท: Chapter 7: A Lost Meditation Tradition from the Silk Road
     - ขอบเขตเลขหน้าจริง: pp. 132–153
     - สาระสำคัญ: จารีตกรรมฐานที่สาบสูญบนเส้นทางสายไหม, คัมภีร์ภาวนาสารวาสติวาท โยคาจาร และหลักฐานจากเอเชียกลางและจีน
     - การแมปปิ้ง: บทที่ 2 (2.3, 2.5), บทที่ 4 (4.3, 4.5)
   - บทที่ 8:
     - รหัส: S-2022-cousins-ch08-porana-tradition.md
     - ชื่อบท: Chapter 8: The Porāṇa Meditation Tradition
     - ขอบเขตเลขหน้าจริง: pp. 154–174
     - สาระสำคัญ: บทหัวใจหลัก: "จารีตโบรณกรรมฐาน" (The Porāṇa Meditation Tradition / Southern Esoteric Buddhism), ลักษณะเฉพาะของระบบโยคาวจรในไทย ลาว เขมร และลังกา
     - การแมปปิ้ง: บทที่ 1 (1.1, 1.3), บทที่ 3 (3.1, 3.2, 3.3, 3.4, 3.5, 3.8), บทที่ 4 (4.3, 4.5)
   - บทที่ 9:
     - รหัส: S-2022-cousins-ch09-insight-modern.md
     - ชื่อบท: Chapter 9: The Flourishing of Insight Meditation in Modern Times
     - ขอบเขตเลขหน้าจริง: pp. 175–189
     - สาระสำคัญ: การเฟื่องฟูของวิปัสสนายุคใหม่ในพม่า (มินกุน, มหาสี, เลดี สยาดอว์) และการแพร่หลายสู่ระดับนานาชาติ
     - การแมปปิ้ง: บทที่ 1 (1.4), บทที่ 3 (3.5, 3.7), บทที่ 4 (4.5)
   - บทที่ 10:
     - รหัส: S-2022-cousins-ch10-varieties-samatha.md
     - ชื่อบท: Chapter 10: The Varieties of Samatha and Samatha-Vipassanā Today
     - ขอบเขตเลขหน้าจริง: pp. 190–205
     - สาระสำคัญ: ความหลากหลายของสมถะร่วมสมัยในไทยและพม่า, การผสมผสานรหัสยวิทยา ยันต์ มนตรา คาถาอาคม และขบวนการเวชชา
     - การแมปปิ้ง: บทที่ 1 (1.5), บทที่ 3 (3.5, 3.7), บทที่ 4 (4.5)
   - บทที่ 11:
     - รหัส: S-2022-cousins-ch11-buddhadatta-abhidhammavatara.md
     - ชื่อบท: Chapter 11: Jhāna Meditation Instructions from the Theriya Tradition: A Translation of Chapter Fourteen of Ācariya Buddhadatta's Entrance to Abhidhamma
     - ขอบเขตเลขหน้าจริง: pp. 206–225
     - สาระสำคัญ: บทแปลปริวรรตบทที่ 14 แห่งคัมภีร์อภิธัมมาวตารของพระพุทธทัตตะ ว่าด้วยการเจริญรูปาวจรฌานและอรูปาวจรฌาน
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 3 (3.2, 3.8)
   - ภาคผนวก ก และ ข (Appendices A & B by Sarah Shaw):
     - รหัส: S-2022-cousins-appendices.md
     - ชื่อบท: Appendices A & B: Buddhaghosa's Forty Objects & Commonly Cited Passages
     - ขอบเขตเลขหน้าจริง: pp. 226–238
     - สาระสำคัญ: ตารางกรรมฐาน 40 กองตามวิสุทธิมรรค และประมวลข้อความบาลีสำคัญ
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.8)
   - เชิงอรรถและบันทึกบรรณาธิการ (Shaw Notes & Textual Apparatus):
     - รหัส: S-2022-cousins-shaw-notes.md
     - ชื่อบท: Notes and Textual Apparatus by Sarah Shaw & L.S. Cousins
     - ขอบเขตเลขหน้าจริง: pp. 239–273
     - สาระสำคัญ: บันทึกเชิงอรรถวิชาการของ Shaw ที่เติมเต็มข้อถกเถียงของ Cousins
     - การแมปปิ้ง: บทที่ 4 (4.3, 4.5, 4.7)

================================================================================
รายการที่ 3: Karunadasa, Y. (2019)
The Theravada Abhidhamma: Inquiry into the Nature of Conditioned Reality
(สำนักพิมพ์ Wisdom Publications, จำนวน 469 หน้า)
================================================================================
โครงสร้าง Dossier รวมทั้งสิ้น: 1 Master Umbrella + 20 Unit/Chapter Dossiers = 21 Dossiers

1. Master Umbrella Dossier:
   - รหัส Dossier: S-2019-karunadasa-master.md
   - ชื่อเอกสาร: The Theravada Abhidhamma: Inquiry into the Nature of Conditioned Reality (Master Umbrella Dossier)
   - ขอบเขต: ภาพรวมทั้งเล่ม (pp. ix–449)
   - การแมปปิ้งเข้าสู่รายงานวิจัย: บทที่ 1 (1.1, 1.3), บทที่ 2 (2.4), บทที่ 3 (3.1, 3.2, 3.3, 3.8), บทที่ 4 (4.5)

2. Chapter Dossiers ประจำบทครบทุกบท:
   - บทนำและคำนำ (Foreword, Preface & Introduction):
     - รหัส: S-2019-karunadasa-intro.md
     - ชื่อบท: Foreword, Preface & Introduction
     - ขอบเขตเลขหน้าจริง: pp. ix–16
     - สาระสำคัญ: คำนิยมโดย Bhikkhu Bodhi, กำเนิดและปรัชญาพื้นฐานของพระอภิธรรมเถรวาท, ปรมัตถธรรม 4
     - การแมปปิ้ง: บทที่ 1 (1.1), บทที่ 3 (3.1)
   - บทที่ 1:
     - รหัส: S-2019-karunadasa-ch01-real-existents.md
     - ชื่อบท: Chapter 1: The Real Existents
     - ขอบเขตเลขหน้าจริง: pp. 17–54
     - สาระสำคัญ: ธรรมะในฐานะสภาวะแท้ (Dhammas as Real Existents), ลักษณะเฉพาะ (สภาวลักษณะ) และลักษณะร่วม (สามัญลักษณะ)
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 3 (3.8)
   - บทที่ 2:
     - รหัส: S-2019-karunadasa-ch02-nominal-conceptual.md
     - ชื่อบท: Chapter 2: The Nominal and the Conceptual
     - ขอบเขตเลขหน้าจริง: pp. 55–69
     - สาระสำคัญ: บัญญัติ 2 ประเภท (นามบัญญัติ และ อรรถบัญญัติ), โครงสร้างภาษากับความจริง
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.3, 3.8)
   - บทที่ 3:
     - รหัส: S-2019-karunadasa-ch03-two-truths.md
     - ชื่อบท: Chapter 3: The Two Truths
     - ขอบเขตเลขหน้าจริง: pp. 70–81
     - สาระสำคัญ: สัจจะ 2 ระดับ: สมมติสัจจะ และ ปรมัตถสัจจะ
     - การแมปปิ้ง: บทที่ 3 (3.8)
   - บทที่ 4:
     - รหัส: S-2019-karunadasa-ch04-analysis-mind.md
     - ชื่อบท: Chapter 4: The Analysis of Mind
     - ขอบเขตเลขหน้าจริง: pp. 82–91
     - สาระสำคัญ: โครงสร้างจิตและเจตสิก (Citta & Cetasika), ปฏิสัมพันธ์ระหว่างตัวรับรู้และองค์ประกอบปรุงแต่ง
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 3 (3.3)
   - บทที่ 5:
     - รหัส: S-2019-karunadasa-ch05-consciousness.md
     - ชื่อบท: Chapter 5: Consciousness
     - ขอบเขตเลขหน้าจริง: pp. 92–102
     - สาระสำคัญ: ลักษณะของวิญญาณ/จิตในอภิธรรมเถรวาท
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 3 (3.3)
   - บทที่ 6:
     - รหัส: S-2019-karunadasa-ch06-classes-consciousness.md
     - ชื่อบท: Chapter 6: Classes of Consciousness
     - ขอบเขตเลขหน้าจริง: pp. 103–119
     - สาระสำคัญ: การจัดจำแนกจิต 89 หรือ 121 ดวง ตามภูมิ (กามาวจร, รูปาวจร, อรูปาวจร, โลกุตตร)
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 3 (3.2, 3.3, 3.8)
   - บทที่ 7:
     - รหัส: S-2019-karunadasa-ch07-ethically-variable.md
     - ชื่อบท: Chapter 7: The Ethically Variable Mental Factors
     - ขอบเขตเลขหน้าจริง: pp. 120–140
     - สาระสำคัญ: อัญญสมานาเจตสิก 13 (สัพพจิตตสาธารณะ 7 และ ปกิณณกะ 6)
     - การแมปปิ้ง: บทที่ 3 (3.3, 3.8)
   - บทที่ 8:
     - รหัส: S-2019-karunadasa-ch08-unwholesome-factors.md
     - ชื่อบท: Chapter 8: The Unwholesome Mental Factors
     - ขอบเขตเลขหน้าจริง: pp. 141–153
     - สาระสำคัญ: อกุศลเจตสิก 14 และกลไกของกิเลส
     - การแมปปิ้ง: บทที่ 3 (3.8)
   - บทที่ 9:
     - รหัส: S-2019-karunadasa-ch09-beautiful-factors.md
     - ชื่อบท: Chapter 9: The Beautiful Mental Factors
     - ขอบเขตเลขหน้าจริง: pp. 154–168
     - สาระสำคัญ: โสภณเจตสิก 25 (โสภณสาธารณะ 19, วิรตี 3, อัปปมัญญา 2, ปัญญินทรีย์ 1) และบทบาทต่อองค์สมาธิ
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 3 (3.3, 3.8)
   - บทที่ 10:
     - รหัส: S-2019-karunadasa-ch10-cognitive-process.md
     - ชื่อบท: Chapter 10: The Cognitive Process
     - ขอบเขตเลขหน้าจริง: pp. 169–185
     - สาระสำคัญ: วิถีจิต (Vīthi-citta), ภวังคจิต, ชวนจิต และกระบวนการรับรู้อารมณ์
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 3 (3.3, 3.8)
   - บทที่ 11:
     - รหัส: S-2019-karunadasa-ch11-analysis-matter.md
     - ชื่อบท: Chapter 11: The Analysis of Matter
     - ขอบเขตเลขหน้าจริง: pp. 186–199
     - สาระสำคัญ: โครงสร้างรูปปรมัตถ์ 28 รูป และสมุฏฐานของรูป 4 ประการ (กรรม, จิต, อุตุ, อาหาร)
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 2 (2.4), บทที่ 3 (3.3)
   - บทที่ 12:
     - รหัส: S-2019-karunadasa-ch12-great-elements.md
     - ชื่อบท: Chapter 12: The Great Elements of Matter
     - ขอบเขตเลขหน้าจริง: pp. 200–210
     - สาระสำคัญ: มหาภูตรูป 4 (ปฐวี, อาโป, เตโช, วาโย) ในฐานะรากฐานกายภาพแห่งการภาวนาธาตุในจารีตเร้นลับ
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 2 (2.4), บทที่ 3 (3.3, 3.8)
   - บทที่ 13:
     - รหัส: S-2019-karunadasa-ch13-real-dependent-matter.md
     - ชื่อบท: Chapter 13: The Real Dependent Matter
     - ขอบเขตเลขหน้าจริง: pp. 211–228
     - สาระสำคัญ: นิปผันนรูป (ประสาทรูป 5, โคจรรูป, ภาวรูป, หทยรูป, ชีวิตรูป, อาหารรูป) และหทยวัตถุในฐานะที่ตั้งแห่งจิต
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 2 (2.4), บทที่ 3 (3.3)
   - บทที่ 14:
     - รหัส: S-2019-karunadasa-ch14-nominal-dependent-matter.md
     - ชื่อบท: Chapter 14: The Nominal Dependent Matter
     - ขอบเขตเลขหน้าจริง: pp. 229–248
     - สาระสำคัญ: อนิปผันนรูป (ปริจเฉทรูป, วิญญัติรูป, วิกาลรูป, ลักขณรูป)
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 3 (3.3)
   - บทที่ 15:
     - รหัส: S-2019-karunadasa-ch15-material-clusters.md
     - ชื่อบท: Chapter 15: The Material Clusters
     - ขอบเขตเลขหน้าจริง: pp. 249–270
     - สาระสำคัญ: รูปกลาปะ (Rūpa-kalāpa), กลุ่มหน่วยย่อยทางสรีรวิทยา และการสืบต่อของกายละเอียดในโบรณกรรมฐาน
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 2 (2.4), บทที่ 3 (3.3, 3.8)
   - บทที่ 16:
     - รหัส: S-2019-karunadasa-ch16-time-space.md
     - ชื่อบท: Chapter 16: Time and Space
     - ขอบเขตเลขหน้าจริง: pp. 271–282
     - สาระสำคัญ: กาลและอวกาศในฐานะมโนทัศน์เชิงบัญญัติในระบบอภิธรรม
     - การแมปปิ้ง: บทที่ 3 (3.8)
   - บทที่ 17:
     - รหัส: S-2019-karunadasa-ch17-momentariness.md
     - ชื่อบท: Chapter 17: Momentariness
     - ขอบเขตเลขหน้าจริง: pp. 283–315
     - สาระสำคัญ: ขณิกวาท (Khaṇikavāda), การเกิด ดับ และอายุของจิตและรูป
     - การแมปปิ้ง: บทที่ 3 (3.3, 3.8)
   - บทที่ 18:
     - รหัส: S-2019-karunadasa-ch18-conditional-relations.md
     - ชื่อบท: Chapter 18: The Conditional Relations
     - ขอบเขตเลขหน้าจริง: pp. 316–340
     - สาระสำคัญ: ปัจจยสัมพันธ์ 24 ประการในคัมภีร์ปัฏฐาน
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 3 (3.3, 3.8)
   - ภาคผนวก (Appendix: Theravāda and Vibhajjavāda):
     - รหัส: S-2019-karunadasa-app-vibhajjavada.md
     - ชื่อบท: Appendix: Theravāda and Vibhajjavāda
     - ขอบเขตเลขหน้าจริง: pp. 341–355
     - สาระสำคัญ: การวิเคราะห์เชิงประวัติศาสตร์นิพนธ์เรื่องอัตลักษณ์เถรวาทและวิภัชชวาท
     - การแมปปิ้ง: บทที่ 4 (4.5)

================================================================================
รายการที่ 4: Rhys Davids, T. W. ed. (1896)
The Yogāvacara's Manual of Indian Mysticism as Practised by Buddhists
(Pali Text Society, ตัวบทภาษาบาลี-สิงหล, จำนวน 153 หน้า)
================================================================================
โครงสร้าง Dossier รวมทั้งสิ้น: 1 Master Umbrella + 13 Unit/Chapter Dossiers = 14 Dossiers

1. Master Umbrella Dossier:
   - รหัส Dossier: S-1896-rhysdavids-master.md
   - ชื่อเอกสาร: The Yogāvacara's Manual (Master Umbrella Dossier)
   - ขอบเขต: ภาพรวมทั้งเล่ม (pp. v–115 / PDF pp. 1–153)
   - การแมปปิ้งเข้าสู่รายงานวิจัย: บทที่ 1 (1.1, 1.3), บทที่ 3 (3.2, 3.3, 3.8), บทที่ 4 (4.1, 4.6)

2. Chapter Dossiers ประจำบท/หมวดกรรมฐานครบทุกส่วน:
   - บทนำทางวิชาการ (Critical Introduction by T. W. Rhys Davids):
     - รหัส: S-1896-rhysdavids-intro.md
     - ชื่อบท: Introduction: The Nature and History of the Yogāvacara Manual
     - ขอบเขตเลขหน้าจริง: pp. v–xxxiii
     - สาระสำคัญ: การค้นพบเอกสารใบลานที่วัด Bambarafalla ลังกา (1892), ประวัติศาสตร์นิพนธ์ยุคบุกเบิก, การเปรียบเทียบกับโยคะและสางขยะ, โครงสร้าง 12 หมวดแบบ 4 ทิศ
     - การแมปปิ้ง: บทที่ 1 (1.1), บทที่ 4 (4.1, 4.6)
   - หมวดที่ 1 (The Five Joys / Pañca Pīti):
     - รหัส: S-1896-rhysdavids-sec01-panca-piti.md
     - ชื่อบท: Pañca Pīti: The Five Joys and the Twelve Exercises
     - ขอบเขตเลขหน้าจริง: pp. 1–19
     - สาระสำคัญ: ตัวบทบาลีปีติ 5 ประการ (ขุททกา, ขณิกา, โอกกันติกา, อุพเพงคา, ผรณา) ผ่านกระบวนการ 12 ขั้นตอน (ปฏิปาฏิยา, ฉสัททัคคหณะ, วิทัตถิ, ธาตุสมูหะ, จตุนัย [4 ทิศ], ปัญจนัย, หทัย, สมาธิ, ธัมมฐิรฏฐิติกะ, อิติปัณฑัมบูชา, กายวสีวัตตะ)
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 3 (3.2, 3.3)
   - หมวดที่ 2 (The Six Pairs / Cha Yugala):
     - รหัส: S-1896-rhysdavids-sec02-chayugala.md
     - ชื่อบท: Cha Yugala: The Six Pairs of Adaptabilities
     - ขอบเขตเลขหน้าจริง: pp. 20–38
     - สาระสำคัญ: ตัวบทบาลียุคลธรรม 6 คู่ (กายปัสสัทธิ-จิตตปัสสัทธิ จนถึง กายุชุกตา-จิตตุชุกตา) ผ่านกระบวนการ 12 ขั้น
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.3)
   - หมวดที่ 3 (The Four Forms of Bliss / Sukha):
     - รหัส: S-1896-rhysdavids-sec03-sukha.md
     - ชื่อบท: Catu Sukha: The Four Forms of Bliss
     - ขอบเขตเลขหน้าจริง: pp. 39–42
     - สาระสำคัญ: การภาวนาสุข 4 ประการ และการรวมสมาธิ
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.3)
   - หมวดที่ 4 (Ānāpānasati):
     - รหัส: S-1896-rhysdavids-sec04-anapanasati.md
     - ชื่อบท: Ānāpānasati: Mindfulness of In-and-Out Breathing
     - ขอบเขตเลขหน้าจริง: pp. 42–46
     - สาระสำคัญ: อานาปานสติแบบเฉพาะของโยคาวจร การกำหนดลมสัมพันธ์กับจุดสรีรวิทยาในกาย
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.3)
   - หมวดที่ 5 (The Ten Kasiṇas / Dasa Kasiṇa):
     - รหัส: S-1896-rhysdavids-sec05-kasina.md
     - ชื่อบท: Dasa Kasiṇa: The Ten Meditation Devices
     - ขอบเขตเลขหน้าจริง: pp. 46–53
     - สาระสำคัญ: กสิณ 10 กอง (มหาภูตรูปกสิณ 4, วรรณกสิณ 4, อาโลกกสิณ, อากาสกสิณ)
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.3)
   - หมวดที่ 6 (The Ten Impurities / Dasa Asubha):
     - รหัส: S-1896-rhysdavids-sec06-asubha.md
     - ชื่อบท: Dasa Asubha: The Ten Foul Things
     - ขอบเขตเลขหน้าจริง: pp. 53–58
     - สาระสำคัญ: อสุภะ 10 ชนิด และการเพ่งนิมิตซากศพในกาย
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.3)
   - หมวดที่ 7 (The Thirty-Two Parts / Dvattiṃsākāra):
     - รหัส: S-1896-rhysdavids-sec07-dvattimsakara.md
     - ชื่อบท: Dvattiṃsākāra: The Thirty-Two Parts of the Body
     - ขอบเขตเลขหน้าจริง: pp. 58–63
     - สาระสำคัญ: โกฏฐาส 32 และการแปรสภาพอวัยวะเป็นธาตุและดวงแก้ว
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 3 (3.3)
   - หมวดที่ 8 (The Ten Recollections / Dasa Anussati):
     - รหัส: S-1896-rhysdavids-sec08-anussati.md
     - ชื่อบท: Dasa Anussati: The Ten Recollections
     - ขอบเขตเลขหน้าจริง: pp. 63–67
     - สาระสำคัญ: อนุสสติ 10 (พุทธานุสสติ จนถึง อุปสมานุสสติ)
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.3)
   - หมวดที่ 9 (The Four Planes / Catu Bhūmi):
     - รหัส: S-1896-rhysdavids-sec09-catubhumi.md
     - ชื่อบท: Catu Bhūmi: The Four Planes of Being
     - ขอบเขตเลขหน้าจริง: pp. 67–68
     - สาระสำคัญ: การยกจิตข้ามภูมิทั้ง 4 (กามาวจร, รูปาวจร, อรูปาวจร, โลกุตตร)
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.8)
   - หมวดที่ 10 (The Four Sublime States / Brahmavihāra):
     - รหัส: S-1896-rhysdavids-sec10-brahmavihara.md
     - ชื่อบท: Catu Brahmavihāra: The Four Excellent Conditions (Mettā, Karuṇā, Muditā, Upekkhā)
     - ขอบเขตเลขหน้าจริง: pp. 68–92
     - สาระสำคัญ: การเจริญพรหมวิหาร 4 แบบแผ่ทิศทางและผูกคาถาบาลีพิสดาร
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.3)
   - หมวดที่ 11 (The Ten Knowledges / Dasa Ñāṇa):
     - รหัส: S-1896-rhysdavids-sec11-dasa-nana.md
     - ชื่อบท: Dasa Ñāṇa: The Ten Forms of Insight Knowledge
     - ขอบเขตเลขหน้าจริง: pp. 92–98
     - สาระสำคัญ: วิปัสสนาญาณ 10 ประการสู่การบรรลุอริยมรรค
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.8)
   - หมวดที่ 12 (Nine Transcendent Qualities & Apparatus):
     - รหัส: S-1896-rhysdavids-sec12-lokuttara.md
     - ชื่อบท: Nava Lokuttara-dhamma and Pali-Sinhalese Glossary
     - ขอบเขตเลขหน้าจริง: pp. 98–115
     - สาระสำคัญ: โลกุตตรธรรม 9 (มรรค 4, ผล 4, นิพพาน 1), ดัชนีศัพท์บาลี-สิงหล
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.8), บทที่ 4 (4.1)

================================================================================
รายการที่ 5: Woodward, F. L. trans. (1916)
Manual of a Mystic: Being a Translation from the Pali and Sinhalese Work Entitled The Yogavachara's Manual
(Pali Text Society Translation Series No. 6, จำนวน 179 หน้า)
================================================================================
โครงสร้าง Dossier รวมทั้งสิ้น: 1 Master Umbrella + 14 Unit/Chapter Dossiers = 15 Dossiers

1. Master Umbrella Dossier:
   - รหัส Dossier: S-1916-woodward-master.md
   - ชื่อเอกสาร: Manual of a Mystic (Master Umbrella Dossier)
   - ขอบเขต: ภาพรวมทั้งเล่ม (pp. v–159 / PDF pp. 1–179)
   - การแมปปิ้งเข้าสู่รายงานวิจัย: บทที่ 1 (1.1, 1.3), บทที่ 3 (3.2, 3.3, 3.8), บทที่ 4 (4.1, 4.6)

2. Chapter Dossiers ประจำบทแปลครบทุกขั้น:
   - คำนำบรรณาธิการ (Editor's Preface by C.A.F. Rhys Davids):
     - รหัส: S-1916-woodward-preface.md
     - ชื่อบท: Editor's Preface by C.A.F. Rhys Davids
     - ขอบเขตเลขหน้าจริง: pp. v–xxii (PDF pp. 5–20)
     - สาระสำคัญ: การวิเคราะห์คำว่า "Mystic", "Yogāvacara", คำอธิษฐาน "โอกาส", ปัญหาการแปลจากบาลีและสิงหลโบราณ
     - การแมปปิ้ง: บทที่ 1 (1.1), บทที่ 4 (4.1)
   - ขั้นเตรียมการและอารัมภบท (Preamble & Invocation):
     - รหัส: S-1916-woodward-sec01-preamble-invocation.md
     - ชื่อบท: Preamble and Invocation
     - ขอบเขตเลขหน้าจริง: pp. 1–5 (PDF pp. 21–25)
     - สาระสำคัญ: คำนมัสการพระรัตนตรัย, พิธีขอขมาครูบาอาจารย์, การตั้งจิตสู่พระนิพพาน
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.3)
   - ขั้นที่ 1: การเจริญปีติ 5 และ 11 อนุหมวด:
     - รหัส: S-1916-woodward-sec02-fivefold-zest.md
     - ชื่อบท: Meditation of the Fivefold Zest or Rapture
     - ขอบเขตเลขหน้าจริง: pp. 6–29 (PDF pp. 26–49)
     - สาระสำคัญ: การฝึกปีติ 5 และแบบฝึกหัด 11 ขั้นตอน: The Order Due, The Six Sounds, The Span, The Aggregate of Elements, The Fourfold System, The Fivefold System, The Heart, Self-collectedness, The Lasting of the Law, The Wax Taper Exercise, The Task of Self-control
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 3 (3.2, 3.3)
   - ขั้นที่ 2: การเจริญคู่ธรรม 6 คู่ (The Six Pairs):
     - รหัส: S-1916-woodward-sec03-six-pairs.md
     - ชื่อบท: Meditation of the Six Pairs or Words
     - ขอบเขตเลขหน้าจริง: pp. 30–54 (PDF pp. 50–74)
     - สาระสำคัญ: การเจริญยุคลธรรม 6 คู่ พร้อมแบบฝึกหัดย่อยครบชุด
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.3)
   - ขั้นที่ 3: การเจริญความสุข (Meditation on Happiness):
     - รหัส: S-1916-woodward-sec04-happiness.md
     - ชื่อบท: Meditation on Happiness
     - ขอบเขตเลขหน้าจริง: pp. 55–66 (PDF pp. 75–86)
     - สาระสำคัญ: การเจริญสุขเวทนาในฌานและการควบคุมสภาวะจิต
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.3)
   - ขั้นที่ 4: อานาปานสติ (Breathing Exercise for Mental Clarity):
     - รหัส: S-1916-woodward-sec05-breathing.md
     - ชื่อบท: Breathing Exercise for Mental Clarity
     - ขอบเขตเลขหน้าจริง: pp. 67–71 (PDF pp. 87–91)
     - สาระสำคัญ: การกำหนดลมหายใจเข้าออกเพื่อความแจ่มแจ้งแห่งจิต
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.3)
   - ขั้นที่ 5: การเพ่งอุปกรณ์กสิณ (Exercise by Devices):
     - รหัส: S-1916-woodward-sec06-devices-kasina.md
     - ชื่อบท: Exercise by Devices
     - ขอบเขตเลขหน้าจริง: pp. 72–79 (PDF pp. 92–99)
     - สาระสำคัญ: การเพ่งดวงกสิณ 10 ชนิดเพื่อสร้างปฏิภาคนิมิต
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.3)
   - ขั้นที่ 6: การเจริญอสุภะ 10 (Meditation on the Ten Foul Things):
     - รหัส: S-1916-woodward-sec07-foul-things.md
     - ชื่อบท: Meditation on the Ten Foul Things
     - ขอบเขตเลขหน้าจริง: pp. 80–85 (PDF pp. 100–105)
     - สาระสำคัญ: ซากศพ 10 สภาพและการขจัดราคะ
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.3)
   - ขั้นที่ 7: กายคตาสติ/อาการ 32 (Meditation on the Bodily Parts):
     - รหัส: S-1916-woodward-sec08-bodily-parts.md
     - ชื่อบท: Meditation on the Bodily Parts
     - ขอบเขตเลขหน้าจริง: pp. 86–90 (PDF pp. 106–110)
     - สาระสำคัญ: อาการ 32 และการจัดวางส่วนของร่างกายเข้าสู่โครงสร้างธาตุ
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 3 (3.3)
   - ขั้นที่ 8: อนุสสติ 10 (Meditation on the Ten Recollections):
     - รหัส: S-1916-woodward-sec09-recollections.md
     - ชื่อบท: Meditation on the Ten Recollections
     - ขอบเขตเลขหน้าจริง: pp. 91–93 (PDF pp. 111–113)
     - สาระสำคัญ: การระลึกถึงคุณความดี 10 ประการ
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.3)
   - ขั้นที่ 9: อรูปภูมิ/จตุภูมิ (Meditation on the Immaterial Realms):
     - รหัส: S-1916-woodward-sec10-immaterial-realms.md
     - ชื่อบท: Meditation on the Immaterial Realms
     - ขอบเขตเลขหน้าจริง: pp. 94–95 (PDF pp. 114–115)
     - สาระสำคัญ: การยกจิตสู่อรูปภพ
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.8)
   - ขั้นที่ 10: พรหมวิหาร 4 (Meditation on the Four Highest States):
     - รหัส: S-1916-woodward-sec11-sublime-states.md
     - ชื่อบท: Meditation on the Four Highest States (of Emotion)
     - ขอบเขตเลขหน้าจริง: pp. 96–128 (PDF pp. 116–148)
     - สาระสำคัญ: การแผ่เมตตา กรุณา มุทิตา อุเบกขา ในทุกมิติ
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.3)
   - ขั้นที่ 11-12: วิปัสสนาญาณ 10 และโลกุตตรธรรม (Ten Forms of Knowledge & Transcendent Qualities):
     - รหัส: S-1916-woodward-sec12-knowledges-transcendent.md
     - ชื่อบท: Meditation on the Ten Forms of Knowledge and Transcendent Qualities
     - ขอบเขตเลขหน้าจริง: pp. 129–140 (PDF pp. 149–160)
     - สาระสำคัญ: ญาณ 10, การบรรลุโลกุตตรธรรม และบทจารึกท้ายคัมภีร์ (Copyist's Note ค.ศ. 1893)
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.8)
   - ภาคผนวกและดัชนี (Appendix by D. B. Jayatilaka & Indexes):
     - รหัส: S-1916-woodward-app-jayatilaka.md
     - ชื่อบท: Appendix: A Dhyāna Book by D. B. Jayatilaka, and Indexes
     - ขอบเขตเลขหน้าจริง: pp. 143–159 (PDF pp. 163–179)
     - สาระสำคัญ: บันทึกการค้นพบคัมภีร์ฌานที่วัดบัมบะระกัลลา และความทรงจำเกี่ยวกับผู้มีอิทธิฤทธิ์ในอารามโบราณ
     - การแมปปิ้ง: บทที่ 3 (3.1, 3.2), บทที่ 4 (4.1)

================================================================================
รายการที่ 6: Schedneck, Brooke (2023)
Living Theravada: Demystifying Buddhist Practices in Southeast Asia
(สำนักพิมพ์ Shambhala Publications, จำนวน 260 หน้า)
================================================================================
โครงสร้าง Dossier รวมทั้งสิ้น: 1 Master Umbrella + 9 Unit/Chapter Dossiers = 10 Dossiers

1. Master Umbrella Dossier:
   - รหัส Dossier: S-2023-schedneck-master.md
   - ชื่อเอกสาร: Living Theravada: Demystifying Buddhist Practices in Southeast Asia (Master Umbrella Dossier)
   - ขอบเขต: ภาพรวมทั้งเล่ม (pp. vii–246)
   - การแมปปิ้งเข้าสู่รายงานวิจัย: บทที่ 1 (1.5), บทที่ 3 (3.5, 3.7), บทที่ 4 (4.5, 4.8)

2. Chapter Dossiers ประจำบทครบทุกบท:
   - บทนำ (Introduction):
     - รหัส: S-2023-schedneck-intro.md
     - ชื่อบท: Introduction: Lived Theravada Buddhism
     - ขอบเขตเลขหน้าจริง: pp. vii–xxii
     - สาระสำคัญ: มโนทัศน์ "พุทธศาสนาที่มีชีวิต" (Lived Buddhism), การก้าวข้ามภาพจำเชิงคัมภีร์นิยมบริสุทธิ์สู่วิถีปฏิบัติจริงในอุษาคเนย์
     - การแมปปิ้ง: บทที่ 1 (1.5), บทที่ 3 (3.7), บทที่ 4 (4.5)
   - บทที่ 1:
     - รหัส: S-2023-schedneck-ch01-temple.md
     - ชื่อบท: Chapter 1: The Temple
     - ขอบเขตเลขหน้าจริง: pp. 2–32
     - สาระสำคัญ: โครงสร้างทางกายภาพและจักรวาลวิทยาของวัดพุทธเถรวาท, โบสถ์ วิหาร พระเจดีย์, มณฑลแห่งความศักดิ์สิทธิ์
     - การแมปปิ้ง: บทที่ 2 (2.6), บทที่ 3 (3.7)
   - บทที่ 2:
     - รหัส: S-2023-schedneck-ch02-sacred-objects.md
     - ชื่อบท: Chapter 2: Sacred Buddhist Objects
     - ขอบเขตเลขหน้าจริง: pp. 33–60
     - สาระสำคัญ: วัฒนธรรมพระเครื่อง วัตถุมงคล พระบรมสารีริกธาตุ รอยสักยันต์ (Sak Yant) และน้ำมนต์ ในฐานะวัตถุธรรมเร้นลับที่มีชีวิต
     - การแมปปิ้ง: บทที่ 1 (1.5), บทที่ 3 (3.7)
   - บทที่ 3:
     - รหัส: S-2023-schedneck-ch03-monks.md
     - ชื่อบท: Chapter 3: Varieties of Male Monks
     - ขอบเขตเลขหน้าจริง: pp. 62–92
     - สาระสำคัญ: ความหลากหลายของพระสงฆ์: พระป่ากรรมฐาน, พระเวทมนตร์/เกจิอาจารย์ (Magical/Ritual Monks), พระนักวิชาการ และพระนักพัฒนา
     - การแมปปิ้ง: บทที่ 3 (3.4, 3.5, 3.7)
   - บทที่ 4:
     - รหัส: S-2023-schedneck-ch04-women.md
     - ชื่อบท: Chapter 4: Roles for Buddhist Women
     - ขอบเขตเลขหน้าจริง: pp. 93–120
     - สาระสำคัญ: บทบาทของผู้หญิง: แม่ชี, ขบวนการภิกษุณี, อุบาสิกาผู้อุปถัมภ์และผู้ร่วมในพิธีกรรมรหัสยศาสตร์
     - การแมปปิ้ง: บทที่ 3 (3.7)
   - บทที่ 5:
     - รหัส: S-2023-schedneck-ch05-other-religions.md
     - ชื่อบท: Chapter 5: Theravada's Relationship with Other Religions
     - ขอบเขตเลขหน้าจริง: pp. 121–144
     - สาระสำคัญ: ปฏิสัมพันธ์และการผสมผสานระหว่างเถรวาทกับลัทธิผีบรรพบุรุษ ศาสนาพราหมณ์-ฮินดู และศาลเจ้าจีน
     - การแมปปิ้ง: บทที่ 2 (2.2, 2.6), บทที่ 3 (3.1, 3.7)
   - บทที่ 6:
     - รหัส: S-2023-schedneck-ch06-lay-practices.md
     - ชื่อบท: Chapter 6: Lay Buddhist Practices and Beliefs
     - ขอบเขตเลขหน้าจริง: pp. 146–174
     - สาระสำคัญ: วิถีปฏิบัติของคฤหัสถ์: การทำบุญตักบาตร, งานเทศกาล, การสวดพระปริตร, การสะเดาะเคราะห์ และความเชื่อเรื่องกรรม
     - การแมปปิ้ง: บทที่ 3 (3.7)
   - บทที่ 7:
     - รหัส: S-2023-schedneck-ch07-meditation.md
     - ชื่อบท: Chapter 7: Meditation
     - ขอบเขตเลขหน้าจริง: pp. 175–198
     - สาระสำคัญ: การภาวนาในโลกสมัยใหม่: สมถะ, วิปัสสนา, ศูนย์ปฏิบัติธรรมนานาชาติ, และขบวนการวิชชาธรรมกาย
     - การแมปปิ้ง: บทที่ 1 (1.5), บทที่ 3 (3.4, 3.7), บทที่ 4 (4.5)
   - บทสรุปและภาคผนวก (Conclusion & Appendices 1–2):
     - รหัส: S-2023-schedneck-conclusion-app.md
     - ชื่อบท: Conclusion and Appendices 1–2: Centers and Etiquette
     - ขอบเขตเลขหน้าจริง: pp. 199–218
     - สาระสำคัญ: บทสรุปว่าด้วยธรรมชาติของพุทธเถรวาทที่มีชีวิต, รายชื่อสำนักปฏิบัติธรรม และคู่มือมารยาทในวัด
     - การแมปปิ้ง: บทที่ 3 (3.7), บทที่ 4 (4.8)

================================================================================
รายการที่ 7: Crosby, Kate (2000)
Tantric Theravada: A Bibliographic Essay on the Writings of François Bizot and others on the Yogāvacara Tradition
(วารสาร Contemporary Buddhism, Vol. 1, No. 2, จำนวน 58 หน้า: pp. 141–198)
================================================================================
โครงสร้าง Dossier รวมทั้งสิ้น: 1 Master Umbrella + 7 Sectional Dossiers = 8 Dossiers

1. Master Umbrella Dossier:
   - รหัส Dossier: S-2000-crosby-master.md
   - ชื่อเอกสาร: Tantric Theravada: A Bibliographic Essay (Master Umbrella Dossier)
   - ขอบเขต: ภาพรวมบทความวิจัยทั้งฉบับ (pp. 141–198 / PDF pp. 1–58)
   - การแมปปิ้งเข้าสู่รายงานวิจัย: บทที่ 1 (1.1, 1.2, 1.6, 1.7), บทที่ 3 (3.2, 3.3, 3.8), บทที่ 4 (4.2, 4.3, 4.4, 4.6, 4.8)

2. Sectional Dossiers ประจำหมวดการวิเคราะห์เชิงลึกครบทุกส่วน:
   - ภาคที่ 1: มโนทัศน์เถรวาทตันตระและข้อถกเถียงยุคต้น (Historiographical Foundations):
     - รหัส: S-2000-crosby-sec01-historiography-origins.md
     - ชื่อหมวด: Introduction: The Concept of Tantric Theravada and Early Scholarly Neglect
     - ขอบเขตเลขหน้าจริง: pp. 141–144 (PDF pp. 1–4)
     - สาระสำคัญ: การนิยาม "เถรวาทตันตระ" (Tantric Theravada) ในฐานะจารีตที่มีเอกสารและวิธีปฏิบัติเฉพาะตัว, การวิพากษ์ภาพจำแบบเถรวาทเอกภาพนิยม
     - การแมปปิ้ง: บทที่ 1 (1.1), บทที่ 4 (4.2, 4.4)
   - ภาคที่ 2: การวิเคราะห์วิพากษ์ชุดผลงานเขมรของ François Bizot (Bizot's Khmer Series):
     - รหัส: S-2000-crosby-sec02-bizot-recherches.md
     - ชื่อหมวด: Critical Review of François Bizot's Recherches sur le bouddhisme khmer (I–V)
     - ขอบเขตเลขหน้าจริง: pp. 144–155 (PDF pp. 4–15)
     - สาระสำคัญ: การวิเคราะห์หนังสือชุด EFEO ของ Bizot: Le Figuier à cinq branches (1976), La Grotte de la naissance (1980), Le Don de soi-même (1981), Les Traditions de la pabbajja (1988), และ Ramaker (1989)
     - การแมปปิ้ง: บทที่ 1 (1.1, 1.3), บทที่ 3 (3.2, 3.3, 3.5), บทที่ 4 (4.2, 4.4)
   - ภาคที่ 3: เส้นทางการถ่ายทอดข้ามสมุทรและลังกากับอุษาคเนย์ (Le Chemin de Laṅkā):
     - รหัส: S-2000-crosby-sec03-chemin-de-lanka.md
     - ชื่อหมวด: Maritime Transmission and the Sri Lankan Connection: Le Chemin de Laṅkā
     - ขอบเขตเลขหน้าจริง: pp. 155–160 (PDF pp. 15–20)
     - สาระสำคัญ: การวิเคราะห์ข้อเสนอของ Bizot เรื่องเส้นทางลังกา, การตั้งคำถามเรื่องสายสัมพันธ์กับสำนักอภัยคีรีวิหาร และทฤษฎีการกำเนิดของจารีตโยคาวจร
     - การแมปปิ้ง: บทที่ 1 (1.2), บทที่ 2 (2.5, 2.7), บทที่ 3 (3.1), บทที่ 4 (4.2, 4.4)
   - ภาคที่ 4: การสำรวจวรรณกรรมลาวและกัมพูชา (Lao and Khmer Textual Discoveries):
     - รหัส: S-2000-crosby-sec04-laos-cambodia-texts.md
     - ชื่อหมวด: Textual Discoveries in Laos and Cambodia: La Guirlande de Joyaux and Saddavimala
     - ขอบเขตเลขหน้าจริง: pp. 161–174 (PDF pp. 21–34)
     - สาระสำคัญ: การวิเคราะห์คัมภีร์รัตนมาลา (La Guirlande de Joyaux ed. Bizot & von Hinüber 1994) และคัมภีร์สัททวิมล (Saddavimala ed. Bizot & Lagirarde 1996)
     - การแมปปิ้ง: บทที่ 3 (3.2, 3.5), บทที่ 4 (4.2, 4.4)
   - ภาคที่ 5: สัณฐานวิทยาและเทคโนโลยีแห่งการภาวนา (Morphology of Esoteric Practice):
     - รหัส: S-2000-crosby-sec05-esoteric-morphology.md
     - ชื่อหมวด: Morphology of Esoteric Practice: Somatic Transformation, Substitution, and Abhidhamma
     - ขอบเขตเลขหน้าจริง: pp. 174–188 (PDF pp. 34–48)
     - สาระสำคัญ: สรุป 5 องค์ประกอบสำคัญของเถรวาทตันตระ: (1) สัททวิทยาและมนตรา, (2) การแทนที่ค่า (Substitution), (3) สรีรวิทยาเร้นลับและคัพภวิทยาเชิงธรรม, (4) พิธีกรรมมอบตัว/เกิดใหม่, (5) การอาศัยโครงสร้างพระอภิธรรม
     - การแมปปิ้ง: บทที่ 1 (1.3), บทที่ 3 (3.2, 3.3, 3.8)
   - ภาคที่ 6: การวิพากษ์ข้อเสนอของ L.S. Cousins และการสังเคราะห์ประวัติศาสตร์นิพนธ์:
     - รหัส: S-2000-crosby-sec06-cousins-critique-synthesis.md
     - ชื่อหมวด: Critical Assessment of L. S. Cousins (1997) and Historiographical Synthesis
     - ขอบเขตเลขหน้าจริง: pp. 188–193 (PDF pp. 48–53)
     - สาระสำคัญ: การวิพากษ์มโนทัศน์ "Southern Esoteric Buddhism" ของ Cousins (1997), การเปรียบเทียบระหว่างมุมมองของ Bizot กับ Cousins
     - การแมปปิ้ง: บทที่ 1 (1.1, 1.7), บทที่ 4 (4.3, 4.4, 4.8)
   - ภาคที่ 7: เชิงอรรถวิพากษ์ตัวบทและบรรณานุกรมสมบูรณ์ (Philological Apparatus & Bibliography):
     - รหัส: S-2000-crosby-sec07-apparatus-notes.md
     - ชื่อหมวด: Philological Notes, Epigraphic References, and Comprehensive Bibliography
     - ขอบเขตเลขหน้าจริง: pp. 193–198 (PDF pp. 53–58)
     - สาระสำคัญ: บรรณานุกรมฉบับสมบูรณ์ของชุดงานวิจัยเถรวาทตันตระในศตวรรษที่ 20
     - การแมปปิ้ง: บทที่ 4 (4.4, 4.6, 4.7)

================================================================================
ตารางสรุปภาพรวมการสร้าง Dossiers ของตำราแม่บททั้ง 7 รายการ (Team 2 Master Inventory)
================================================================================
| ลำดับ | รายการเอกสาร | รหัส Master Dossier | จำนวน Dossier ประจำบท | รวม Dossiers | หน้าจริง | บทที่แมปปิ้งหลัก |
|:---:|:---|:---|:---:|:---:|:---:|:---|
| 1 | Crosby (2020) Esoteric Theravada | S-2020-crosby-master.md | 10 ฉบับ | 11 ฉบับ | 285 หน้า (PDF 294) | บทที่ 1, 3, 4 |
| 2 | Cousins (2022) Meditations of the Pali Tradition | S-2022-cousins-master.md | 15 ฉบับ | 16 ฉบับ | 302 หน้า (Print 348) | บทที่ 1, 3, 4 |
| 3 | Karunadasa (2019) The Theravada Abhidhamma | S-2019-karunadasa-master.md | 20 ฉบับ | 21 ฉบับ | 449 หน้า (Print 469) | บทที่ 1, 2, 3, 4 |
| 4 | Rhys Davids (1896) Yogāvacara's Manual | S-1896-rhysdavids-master.md | 13 ฉบับ | 14 ฉบับ | 115 หน้า (PDF 153) | บทที่ 1, 3, 4 |
| 5 | Woodward (1916) Manual of a Mystic | S-1916-woodward-master.md | 14 ฉบับ | 15 ฉบับ | 159 หน้า (PDF 179) | บทที่ 1, 3, 4 |
| 6 | Schedneck (2023) Living Theravada | S-2023-schedneck-master.md | 9 ฉบับ | 10 ฉบับ | 246 หน้า (Print 260) | บทที่ 1, 3, 4 |
| 7 | Crosby (2000) Bibliographic Essay | S-2000-crosby-master.md | 7 ฉบับ | 8 ฉบับ | 58 หน้า (pp. 141-198) | บทที่ 1, 3, 4 |
| **รวม** | **ตำราแม่บท 7 เล่ม** | **7 Master Dossiers** | **88 Chapter Dossiers** | **95 Dossiers** | **1,614 หน้า** | **ครอบคลุม 100%** |

สรุปผลการปฏิบัติงาน:
ทีมที่ 2 พร้อมสำหรับการลงมือยกร่างไฟล์ Dossiers ฉบับสมบูรณ์ทั้ง 95 ไฟล์ ลงใน research-notes/sources/ ทันทีที่ Lead Agent อนุมัติแผนงานดัชนีนี้ครับ


---

# ภาคผนวกแผนแม่บทส่วนที่ 5: ทีมที่ 3: หมวดตันตระอินเดีย สรีรวิทยาเร้นลับ และประติมาวิทยา (Indic Tantra, Kundalini, Physiology & Iconography)

# แผนผังโครงสร้างสารบัญฉบับสมบูรณ์และการกำหนดสถาปัตยกรรม Dossier
## คลังตำราตันตระอินเดีย สรีรวิทยาเร้นลับ และประติมาวิทยา (8 เล่มหลัก)
**โครงการวิจัย:** เถรวาทตันตระ หรือเถรวาทแบบเซาท์อีสเอเชีย: กำเนิด พัฒนาการ การดำรงอยู่ และสถานภาพการศึกษาทางประวัติศาสตร์นิพนธ์  
**หน่วยปฏิบัติการ:** Sub-Agent ทีมที่ 3 (Indic Tantra, Kundalini, Physiology & Iconography Specialist)  
**วันที่ตรวจสอบ:** 17 กันยายน 2026  
**สถานะ:** ตรวจสอบสารบัญและโครงสร้างตัวบทจริงจากไฟล์ต้นฉบับ 100% ครบทุกบททุกภาค

---

## สรุปภาพรวมเชิงปริมาณ (Quantitative Summary)

จากการตรวจสอบโครงสร้างตัวบทจริงในโฟลเดอร์ `research-notes/extracted-texts/` และ `research-notes/pdf/` ทั้ง 8 เล่มหลัก ได้จัดทำข้อกำหนดการสร้าง Dossier ตามคำสั่งเด็ดขาดของผู้ใช้ (1 Master Umbrella Dossier + 1 Dossier ประจำบทสำหรับทุกบทในเล่ม ห้ามตัดทิ้งแม้แต่บทเดียว) ดังนี้:

1. **1919 Avalon - The Serpent Power (704 หน้า):** 1 Master Dossier + 10 Chapter/Section Dossiers = 11 Dossiers
2. **1914 Avalon - Principles of Tantra / Tantratattva (800 หน้า):** 1 Master Dossier + 2 Comprehensive Introduction Dossiers + 20 Chapter Dossiers = 23 Dossiers
3. **1924 Bhattacharyya - The Indian Buddhist Iconography (412 หน้า):** 1 Master Dossier + 1 Historical Intro Dossier + 12 Chapter Dossiers + 1 Conclusion Dossier + 2 Appendix Dossiers = 17 Dossiers
4. **1932 Bhattacharyya - An Introduction to Buddhist Esoterism (215 หน้า):** 1 Master Dossier + 15 Chapter Dossiers = 16 Dossiers
5. **1925 Bhattacharyya - Sādhanamālā Vol. I (367 หน้า):** 1 Master Dossier + 1 Philological Preface Dossier + 7 Thematic Sādhana Group Dossiers (ครอบคลุมครบทั้ง 170 สาธนะ) = 9 Dossiers
6. **1928 Bhattacharyya - Sādhanamālā Vol. II (514 หน้า):** 1 Master Dossier + 1 Preface Dossier + 5 Vajrayāna Monograph Dossiers + 6 Thematic Sādhana Group Dossiers (ครอบคลุมครบทั้ง 142 สาธนะ, Sādhanas 171–312) = 13 Dossiers
7. **1939 Bagchi - Studies in the Tantras (118 หน้า):** 1 Master Dossier + 8 Chapter Dossiers + 4 Manuscript Appendix Dossiers = 13 Dossiers
8. **1950 Dasgupta - An Introduction to Tantric Buddhism (255 หน้า):** 1 Master Dossier + 6 Detailed Chapter Dossiers = 7 Dossiers

**รวมสถาปัตยกรรม Dossier ทั้งหมดของทีมที่ 3: 109 ฉบับสมบูรณ์ (ไม่มีการตัดทอน)**

---

## รายละเอียดสารบัญฉบับเต็ม โครงสร้างรหัส Dossier และการแมปปิ้งสู่โครงร่างงานวิจัย

### เล่มที่ 1: 1919-avalon-serpent-power-shat-chakra.pdf (704 หน้า)
**ชื่อเต็ม:** *The Serpent Power: Being the Ṣaṭ-Cakra-Nirūpaṇa and Pādukā-Pañcaka. Two Works on Lāyadoga*  
**ผู้แต่ง/บรรณาธิการ:** Arthur Avalon (Sir John Woodroffe) (Madras: Ganesh & Co., 1919)  
**ขอบเขตเนื้อหาหลัก:** สรีรวิทยาเร้นลับ กายทิพย์ ระบบ 6 จักระ ท่อลมปราณ 3 สาย (อิฑา ปิงคลา สุษุมนา) การปลุกพลังกุณฑลินี บัญชีอักษรและเสียงมนตราประจำกลีบดอกบัว คัมภีร์ปาตุกะปัญจกะ และตัวบทภาษาสันสกฤตฉบับชำระ

| ลำดับบท/ส่วน | ชื่อบทภาษาเดิม (Original Title) | เลขหน้าจริง | รหัส Dossier ประจำบท | การแมปปิ้งสู่โครงร่างวิจัย (หัวข้อย่อย) |
|:---|:---|:---:|:---|:---|
| Master | The Serpent Power (Full Volume Umbrella) | i–704 | `S-1919-avalon-01.md` | บทที่ 2 (2.4), บทที่ 3 (3.3), บทที่ 4 (4.1) |
| Chapter I | Introductory | 1–24 | `S-1919-avalon-ch01-introductory.md` | 2.4 (นิยามสรีรวิทยาตันตระและโยคะกุณฑลินี), 4.1 |
| Chapter II | Bodiless Consciousness | 25–48 | `S-1919-avalon-ch02-bodiless-consciousness.md` | 2.1 (อภิปรัชญาสัตจิตอานันทะ), 1.7 |
| Chapter III | Embodied Consciousness (Jīvātmā) | 49–82 | `S-1919-avalon-ch03-embodied-consciousness.md` | 2.4 (ชีวาตมันและกายหยาบ-กายละเอียด), 1.3 |
| Chapter IV | Mantra | 83–102 | `S-1919-avalon-ch04-mantra.md` | 2.4 (สัททวิทยา มนตรา วรรณะ ธวนิ นาถ), 3.3 |
| Chapter V | The Centres or Lotuses (Chakra, Padma) | 103–180 | `S-1919-avalon-ch05-centres-lotuses-chakra.md` | 2.4 (กายวิภาคจักระทั้ง 6 และสหัสราระ), 3.3 |
| Chapter VI | Practice (Yoga: Laya-Krama) | 181–256 | `S-1919-avalon-ch06-practice-laya-krama.md` | 2.4 (ลยโยคะ การนำกุณฑลินีทะลวงจักระ), 3.3 |
| Chapter VII | Theoretical Bases of this Yoga | 257–316 | `S-1919-avalon-ch07-theoretical-bases.md` | 2.4 (ทฤษฎีภูตศุทธิและการควบคุมธาตุ), 1.3, 1.7 |
| Text Trans. 1 | Description of the Six Centres (Ṣaṭ-Cakra-Nirūpaṇa) | 317–488 | `S-1919-avalon-sec08-shat-chakra-nirupana.md` | 2.4 (ตัวบทฉบับแปลของปูรณานันทะและกาลีจรณะ), 3.3 |
| Text Trans. 2 | The Fivefold Footstool (Pādukā-Pañcaka) | 489–518 | `S-1919-avalon-sec09-paduka-panchaka.md` | 2.4 (บัลลังก์บาทกูรูในสหัสราระ), 3.3, 3.4 |
| Sanskrit Text | Ṣaṭcakranirūpaṇam & Pādukāpañcakam (Sanskrit) | 1–144 (SKT) | `S-1919-avalon-sec10-sanskrit-texts.md` | 2.4 (อักขระภาษาสันสกฤตดั้งเดิมและการเทียบเคียงศัพท์), 1.3 |

---

### เล่มที่ 2: 1914-avalon-principles-of-tantra-tantratattva.pdf (800 หน้า)
**ชื่อเต็ม:** *Principles of Tantra (Tantratattva of Śrīyukta Śiva Candra Vidyārṇava Bhaṭṭācārya Mahodaya)*  
**ผู้แปล/บรรณาธิการ:** Arthur Avalon (Sir John Woodroffe) & Barada Kanta Majumdar (London: Luzac & Co. / Madras: Ganesh & Co., 1914)  
**ขอบเขตเนื้อหาหลัก:** สารัตถะแม่บทแห่งตันตรศาสตร์ การเปรียบเทียบพระเวทกับตันตระ ทฤษฎีมนตราและเสียง (Vācya/Vācaka, Śabda-Brahman) บทบาทและความสำคัญของคุรุ การคัดเลือกศิษย์ พิธีบูชาภายนอกและภายใน (Bahya/Antar-pūjā) การชำระธาตุทั้งห้า (Pañcaśuddhi) นยาสะ (Nyāsa) และการทำสมาธิ

| ลำดับบท/ส่วน | ชื่อบทภาษาเดิม (Original Title) | เลขหน้าจริง | รหัส Dossier ประจำบท | การแมปปิ้งสู่โครงร่างวิจัย (หัวข้อย่อย) |
|:---|:---|:---:|:---|:---|
| Master | Principles of Tantra: Tantratattva (Full Volume Umbrella) | 1–800 | `S-1914-avalon-01.md` | บทที่ 2 (2.1, 2.2, 2.4), บทที่ 4 (4.1) |
| Intro Pt. I | Introduction to Tantra Śāstra (Arthur Avalon) | 13–72 | `S-1914-avalon-intro01-tantra-sastra.md` | 2.1 (ประวัติศาสตร์ตันตรศาสตร์ในอินเดีย), 4.1 |
| Intro Pt. II | Introduction by Śrīyukta Barada Kanta Majumdar | 379–488 | `S-1914-avalon-intro02-majumdar.md` | 2.2 (ปรัชญาตันตระและไศวะ-ศากตะ), 4.1 |
| Part I - Ch. I | Appearance and Applicability of the Tantra Scripture | 87–114 | `S-1914-avalon-ch01-appearance-applicability.md` | 2.1 (ความจำเป็นของตันตรศาสตร์ในยุคกลียุค) |
| Part I - Ch. II | What Is the Necessity for the Tantras when there is the Veda? | 115–139 | `S-1914-avalon-ch02-necessity-tantra-veda.md` | 2.1, 2.2 (ความสัมพันธ์ระหว่างพระเวทและตันตระ) |
| Part I - Ch. III | The Ephemeral and Modern Monism | 140–171 | `S-1914-avalon-ch03-modern-monism.md` | 2.1, 2.2 (การวิพากษ์เอกนิยมสมัยใหม่และอำนาจตันตระ) |
| Part I - Ch. IV | Gāyatrī Mantra and Image Worship | 172–190 | `S-1914-avalon-ch04-gayatri-image-worship.md` | 2.4 (คายตรีมนตร์ อำนาจวาจกะ-วาจยะ), 3.3 |
| Part I - Ch. V | Commands of Śāstra [On Formlessness and Form] | 191–217 | `S-1914-avalon-ch05-commands-sastra-form.md` | 2.4 (ปรัชญารูปธรรมและอรูปธรรมแห่งพระเป็นเจ้า) |
| Part I - Ch. VI | Worship of Devatās | 218–244 | `S-1914-avalon-ch06-worship-of-devatas.md` | 2.4 (เทวตาบูชา และกลไกการรับรู้สภาวธรรม) |
| Part I - Ch. VII | What Is Śakti? | 245–271 | `S-1914-avalon-ch07-what-is-shakti-part1.md` | 2.1, 2.2 (มโนทัศน์เรื่องศักติในฐานะพลังสร้างสากล) |
| Part I - Ch. VIII | What Is Śakti? (Continued) | 272–302 | `S-1914-avalon-ch08-what-is-shakti-part2.md` | 2.2 (ข้อถกเถียงเรื่องศักติในสำนักไวษณพและไศวะ) |
| Part I - Ch. IX | Śiva and Śakti | 303–340 | `S-1914-avalon-ch09-shiva-and-shakti.md` | 2.2 (อภิปรัชญาการรวมตัวของศิวะและศักติ), 1.2 |
| Part I - Ch. X | Worship of the Five Devatās [Tantrik Initiation & Loss of Tantras] | 341–360 | `S-1914-avalon-ch10-five-devatas-initiation.md` | 2.1, 2.4 (ปัญจเทวตา พิธีกรรมดิ๊กษา/รับศีลตันตระ) |
| Part II - Ch. XI | On Mantra | 489–504 | `S-1914-avalon-ch11-on-mantra.md` | 2.4 (อภิปรัชญาแห่งมนตรา การกำเนิดสรรพสิ่งจากเสียง), 3.3 |
| Part II - Ch. XII | Lettered and Unlettered Sound | 505–518 | `S-1914-avalon-ch12-lettered-unlettered-sound.md` | 2.4 (ธวนิและวรรณะ สัททพรหมัน), 3.3 |
| Part II - Ch. XIII | On the Guru | 519–541 | `S-1914-avalon-ch13-on-the-guru.md` | 2.4 (ความสำคัญยิ่งยวดของคุรุในฐานะผู้ถ่ายทอดพลัง) |
| Part II - Ch. XIV | Discussion Upon, and Selection of the Guru | 542–586 | `S-1914-avalon-ch14-selection-of-guru.md` | 2.4 (คุณสมบัติของคุรุ สตรีคุรุ คุรุกุล และศิษย์), 3.5 |
| Part II - Ch. XV | Worship in General | 587–610 | `S-1914-avalon-ch15-worship-in-general.md` | 2.4 (หลักการปูชาทั่วไป การเคารพรูปเคารพ) |
| Part II - Ch. XVI | The Play of Guṇas | 611–644 | `S-1914-avalon-ch16-play-of-gunas.md` | 2.4 (พลวัตของไตรคุณ สัตวะ รชัส ตมัส ในการภาวนา) |
| Part II - Ch. XVII | Outer Worship | 645–684 | `S-1914-avalon-ch17-outer-worship.md` | 2.4 (พาหะปูชา ลำดับขั้นการบูชาภายนอกสู่ภายใน) |
| Part II - Ch. XVIII | Ordinances Relating to Worship | 685–726 | `S-1914-avalon-ch18-ordinances-relating-to-worship.md` | 2.4 (กฎระเบียบ การขับไล่อุปสรรคและวิญญาณร้าย) |
| Part II - Ch. XIX | Ceremonial Worship | 727–754 | `S-1914-avalon-ch19-ceremonial-worship.md` | 2.4 (พิธีกรรมบูชา ภาวะ อาสนะ ทิศทาง และเวลา) |
| Part II - Ch. XX | Ceremonial Worship (Continued) [Pañcaśuddhi, Nyāsa, Mental Worship] | 755–800 | `S-1914-avalon-ch20-ceremonial-worship-nyasa.md` | 2.4 (การชำระบริสุทธิ์ 5 ประการ นยาสะ มโนปูชา), 3.3 |

---

### เล่มที่ 3: 1924-bhattacharyya-indian-buddhist-iconography.pdf (412 หน้า)
**ชื่อเต็ม:** *The Indian Buddhist Iconography: Mainly Based on The Sādhanamālā and Cognate Tāntric Texts of Rituals*  
**ผู้แต่ง:** Benoytosh Bhattacharyya (London: Humphrey Milford, Oxford University Press, 1924)  
**ขอบเขตเนื้อหาหลัก:** ประติมาวิทยาพุทธตันตระอินเดีย พระธยานิพุทธะ 5 องค์ ศักติ โพธิสัตว์มัญชุศรี อวโลกิเตศวร เทพและเทวีสายอักโษภยะ ไวโรจนะ อโมฆสิทธิ รัตนสัมภวะ ปัญจรักษา เทพเอกเทศ และการสำรวจพระอวโลกิเตศวร 108 ปางในเนปาล

| ลำดับบท/ส่วน | ชื่อบทภาษาเดิม (Original Title) | เลขหน้าจริง | รหัส Dossier ประจำบท | การแมปปิ้งสู่โครงร่างวิจัย (หัวข้อย่อย) |
|:---|:---|:---:|:---|:---|
| Master | The Indian Buddhist Iconography (Full Volume Umbrella) | viii–412 | `S-1924-bhattacharyya-01.md` | บทที่ 2 (2.3, 2.6), บทที่ 4 (4.1) |
| Introduction | Historical Survey, Evolution of Doctrines, Art, Pantheon | viii–xxxi | `S-1924-bhattacharyya-intro-evolution-pantheon.md` | 2.1, 2.3 (วิวัฒนาการคำสอนและทำเนียบเทวดาพุทธ), 4.1 |
| Chapter I | Buddhas, Buddhaśaktis and Bodhisattvas | 1–14 | `S-1924-bhattacharyya-ch01-buddhas-bodhisattvas.md` | 2.3 (พระธยานิพุทธะ พระพุทธศักติ พระมนุษิพุทธะ) |
| Chapter II | Mañjuśrī | 15–31 | `S-1924-bhattacharyya-ch02-manjusri.md` | 2.3 (ปางต่าง ๆ ของพระมัญชุศรี วาคีศวร อรปจน) |
| Chapter III | Bodhisattva Avalokiteśvara | 32–48 | `S-1924-bhattacharyya-ch03-avalokitesvara.md` | 2.3, 2.6 (ปางอวโลกิเตศวร 15 ปาง โลกนาถ ขสรรปณะ) |
| Chapter IV | Emanations of Amitābha | 49–59 | `S-1924-bhattacharyya-ch04-emanations-amitabha.md` | 2.3 (เทพสายอมิตาภะ มหาพละ คุรุกุลลา ภฤกุฏี) |
| Chapter V | Emanations of Akṣobhya (Gods) | 60–75 | `S-1924-bhattacharyya-ch05-emanations-aksobhya-gods.md` | 2.3 (เทพดุร้าย เหรุกะ จัณฑโรษณะ พุทธกปาละ ยมาริ) |
| Chapter VI | Emanations of Akṣobhya (Continued: Goddesses) | 76–92 | `S-1924-bhattacharyya-ch06-emanations-aksobhya-goddesses.md` | 2.3 (เทวีสายอักโษภยะ มหาจีนตารา เอกชฏา ปรณศพรี) |
| Chapter VII | Emanations of Vairocana | 93–105 | `S-1924-bhattacharyya-ch07-emanations-vairocana.md` | 2.3, 2.6 (มารีจี อุษณีษวิชัย สิตาตปัตร วชิรวาราหี) |
| Chapter VIII | Emanations of Amoghasiddhi | 106–112 | `S-1924-bhattacharyya-ch08-emanations-amoghasiddhi.md` | 2.3 (ขทิรวนีตารา วศยตารา มหามายูรี วชิรศฤงขลา) |
| Chapter IX | Emanations of Ratnasambhava | 113–118 | `S-1924-bhattacharyya-ch09-emanations-ratnasambhava.md` | 2.3 (ชัมภละ อุจฉุษมชัมภละ มหาประติสรา วสุธารา) |
| Chapter X | Emanations of the Five Dhyāni Buddhas | 119–129 | `S-1924-bhattacharyya-ch10-five-dhyani-emanations.md` | 2.3 (มหากาล วชิรตารา ปรัชญาปารมิตา) |
| Chapter XI | Four Dhyāni Buddhas, Vajrasattva, Pañcarakṣā & Tārās | 130–140 | `S-1924-bhattacharyya-ch11-pancaraksa-taras.md` | 2.3, 2.6 (มณฑลปัญจรักษา วชิรสัตวะ และตารา) |
| Chapter XII | Independent Deities (Gods & Goddesses) | 141–164 | `S-1924-bhattacharyya-ch12-independent-deities.md` | 2.3, 2.2 (คณปติ วิฆนานตกะ ไตรโลกยวินัย สรัสวตี) |
| Conclusion | Conclusion | 165–168 | `S-1924-bhattacharyya-ch13-conclusion.md` | 2.3 (สรุปพัฒนาการเชิงประวัติศาสตร์ศิลปะตันตระ) |
| Appendix A | Kiñcit-Vistara-Tārā-Sādhana (Text & Translation) | 169–176 | `S-1924-bhattacharyya-appA-tara-sadhana.md` | 2.4 (ตัวบทสาธนะตาราฉบับเต็ม มนตรา มณฑล) |
| Appendix B | Descriptions of 108 Forms of Avalokiteśvara | 177–187 | `S-1924-bhattacharyya-appB-108-avalokitesvara.md` | 2.3, 2.6 (พระอวโลกิเตศวร 108 ปางในมัจฉันทรพหัล เนปาล) |

---

### เล่มที่ 4: 1932-bhattacharyya-introduction-buddhist-esoterism.pdf (215 หน้า)
**ชื่อเต็ม:** *An Introduction to Buddhist Esoterism*  
**ผู้แต่ง:** Benoytosh Bhattacharyya (London: Humphrey Milford, Oxford University Press, 1932)  
**ขอบเขตเนื้อหาหลัก:** ประวัติศาสตร์และสารัตถะพุทธตันตระอินเดีย กำเนิดเวทมนตร์ในพุทธศาสนา ธารณี พัฒนาการสู่วัชรยาน แหล่งกำเนิด (อุฑฑิยานะ กามรูป) คัมภีร์และมนตรา ปรมาจารย์ตันตระคนสำคัญ หลักธรรมคำสอน พิธีกรรม และอิทธิพลที่มีต่อศาสนาฮินดู

| ลำดับบท/ส่วน | ชื่อบทภาษาเดิม (Original Title) | เลขหน้าจริง | รหัส Dossier ประจำบท | การแมปปิ้งสู่โครงร่างวิจัย (หัวข้อย่อย) |
|:---|:---|:---:|:---|:---|
| Master | An Introduction to Buddhist Esoterism (Full Volume Umbrella) | 1–215 | `S-1932-bhattacharyya-01.md` | บทที่ 2 (2.1, 2.2, 2.3), บทที่ 4 (4.1) |
| Chapter I | Introductory | 1–9 | `S-1932-bhattacharyya-ch01-introductory.md` | 2.1 (กำเนิดของไสยศาสตร์และจิตวิทยาความกลัวดั้งเดิม) |
| Chapter II | Origin of Buddhist Magic | 10–21 | `S-1932-bhattacharyya-ch02-origin-buddhist-magic.md` | 2.1 (เวทมนตร์ในพุทธยุคแรก คันธารีวิชชา ฤทธิ์) |
| Chapter III | Growth of Buddhist Magic | 22–31 | `S-1932-bhattacharyya-ch03-growth-buddhist-magic.md` | 2.1, 2.3 (พัฒนาการของธารณีสูตรในมหายาน) |
| Chapter IV | Rise of Vajrayāna | 32–42 | `S-1932-bhattacharyya-ch04-rise-of-vajrayana.md` | 2.3 (การถือกำเนิดของวัชรยาน มหาปรัชญาและอุบาย) |
| Chapter V | The Place of Origin | 43–46 | `S-1932-bhattacharyya-ch05-place-of-origin.md` | 2.1 (แหล่งกำเนิดตันตระ อุฑฑิยานะ เบงกอล อัสสัม) |
| Chapter VI | The Tantras | 47–54 | `S-1932-bhattacharyya-ch06-the-tantras.md` | 2.1, 2.3 (การจัดประเภทคัมภีร์ตันตระ สังคายนาลับ) |
| Chapter VII | The Mantras | 55–61 | `S-1932-bhattacharyya-ch07-the-mantras.md` | 2.4 (พลังของมนตรา อักขระบีชะ และอิทธิฤทธิ์), 3.3 |
| Chapter VIII | Some Prominent Authors | 62–82 | `S-1932-bhattacharyya-ch08-prominent-authors.md` | 2.3 (ประวัติสิทธา สรหะ นาคารชุน ลูอีปะ อนังควชิระ) |
| Chapter IX | Aims and Objects | 83–92 | `S-1932-bhattacharyya-ch09-aims-and-objects.md` | 2.1, 2.4 (เป้าหมายอัษฏสิทธิ และความหลุดพ้นสูงสุด) |
| Chapter X | Leading Tenets | 93–103 | `S-1932-bhattacharyya-ch10-leading-tenets.md` | 2.3 (หลักคำสอนแม่บท ศูนยตา โพธิจิต มหาสุข) |
| Chapter XI | Procedure for Worship | 104–108 | `S-1932-bhattacharyya-ch11-procedure-for-worship.md` | 2.4 (ขั้นตอนการเจริญสาธนะและพิธีบูชา) |
| Chapter XII | The Deities | 109–119 | `S-1932-bhattacharyya-ch12-the-deities.md` | 2.3 (ทฤษฎีการกำเนิดเทวดาจากจิตและศูนยตา) |
| Chapter XIII | The Pantheon | 120–146 | `S-1932-bhattacharyya-ch13-the-pantheon.md` | 2.3 (ทำเนียบพระพุทธเจ้า พระโพธิสัตว์ และศักติ) |
| Chapter XIV | Influence of Buddhist Tantrism on Hinduism | 147–164 | `S-1932-bhattacharyya-ch14-influence-on-hinduism.md` | 2.2 (อิทธิพลของตันตระพุทธต่อไศวะและศากตะ) |
| Chapter XV | Conclusion | 165–174 | `S-1932-bhattacharyya-ch15-conclusion.md` | 2.8, 4.1 (สรุปคุณค่าและการล่มสลายของตันตระในอินเดีย) |

---

### เล่มที่ 5: 1925-bhattacharyya-sadhanamala-vol1.pdf (367 หน้า)
**ชื่อเต็ม:** *Sādhanamālā, Vol. I (Sādhanas 1–170)*  
**ผู้ชำระและบรรณาธิการ:** Benoytosh Bhattacharyya (Baroda: Gaekwad’s Oriental Series No. XXVI, 1925)  
**ขอบเขตเนื้อหาหลัก:** คัมภีร์ปฐมภูมิต้นฉบับภาษาสันสกฤตรวบรวมบทสาธนะ 170 บทแรก การวิเคราะห์อักขรวิทยาและไวยากรณ์ภาษาสันสกฤตผสมของชาวพุทธ (Buddhist Hybrid Sanskrit) สาธนะกลุ่มตรีสมยราชา วัชราสนะ อวโลกิเตศวร มัญชุศรี จัณฑมหาโรษณะ และวงศาวัทยุเทวีตารา

| ลำดับบท/ส่วน | ชื่อบท/หมวดสาธนะ (Original Sādhana Group) | เลขหน้าจริง | รหัส Dossier ประจำหมวด | การแมปปิ้งสู่โครงร่างวิจัย (หัวข้อย่อย) |
|:---|:---|:---:|:---|:---|
| Master | Sādhanamālā, Vol. I (Full Text Umbrella) | i–367 | `S-1925-bhattacharyya-01.md` | บทที่ 2 (2.3, 2.4), บทที่ 4 (4.1) |
| Section 0 | Preface & Philological / Grammatical Analysis | i–xxiii | `S-1925-bhattacharyya-sec00-preface-philology.md` | 4.1 (ประวัติศาสตร์การชำระเอกสาร), 2.3 (ภาษา BHS) |
| Section 1 | Sādhanas of Trisamayarāja (Nos. 1–2) | 1–17 | `S-1925-bhattacharyya-sec01-trisamayaraja.md` | 2.3, 2.4 (สาธนะตรีสมยราชา/อโมฆสิทธิ มณฑล) |
| Section 2 | Sādhanas of Vajrāsana Buddha (Nos. 3–5) | 18–27 | `S-1925-bhattacharyya-sec02-vajrasana.md` | 2.3, 2.4 (สาธนะวัชราสนะพุทธะ ปางมารวิชัย บีชะหูม) |
| Section 3 | Sādhanas of Avalokiteśvara Manifestations (Nos. 6–43) | 28–94 | `S-1925-bhattacharyya-sec03-avalokitesvara-forms.md` | 2.3, 2.6 (สาธนะอวโลกิเตศวร โลกนาถ สัทอักษรี) |
| Section 4 | Sādhanas of Mañjuśrī Manifestations (Nos. 44–84) | 95–168 | `S-1925-bhattacharyya-sec04-manjusri-forms.md` | 2.3, 2.4 (สาธนะมัญชุศรี นามสังคีติ ธรรมธาตุวากีศวร) |
| Section 5 | Sādhanas of Caṇḍamahāroṣaṇa (Nos. 85–88) | 169–174 | `S-1925-bhattacharyya-sec05-candamaharosana.md` | 2.3, 2.4 (สาธนะจัณฑมหาโรษณะ เทพสายดุร้าย) |
| Section 6 | Sādhanas of Female Divinities: Tārā Cycle (Nos. 89–131) | 175–270 | `S-1925-bhattacharyya-sec06-tara-cycle.md` | 2.3, 2.4 (สายธารเทวีตารา มหาจีนตารา มฤตยุวัญจนะ) |
| Section 7 | Sādhanas of Ekajaṭā, Cuṇḍā, Mārīcī, Prajñāpāramitā (Nos. 132–170) | 271–342 | `S-1925-bhattacharyya-sec07-ekajata-cunda-marici.md` | 2.3, 2.6 (สาธนะจุณฑา มารีจี ปรัชญาปารมิตา สรัสวตี) |

---

### เล่มที่ 6: 1928-bhattacharyya-sadhanamala-vol2.pdf (514 หน้า)
**ชื่อเต็ม:** *Sādhanamālā, Vol. II (Sādhanas 171–312 with an Introduction on Vajrayāna)*  
**ผู้ชำระและบรรณาธิการ:** Benoytosh Bhattacharyya (Baroda: Gaekwad’s Oriental Series No. XLI, 1928)  
**ขอบเขตเนื้อหาหลัก:** มหาบทวิเคราะห์วิชาการเรื่องประวัติศาสตร์ ปรัชญา และทำเนียบสิทธาแห่งวัชรยานความยาว 150 หน้า (Introduction pp. xxiii–clxxii) พร้อมตัวบทสาธนะภาษาสันสกฤตลำดับที่ 171–312 (คุรุกุลลา ปัญจรักษา วชิรวาราหี ไนราตมา วชิรโยคินี เหรุกะ จักรสังวร ยมาริ ภูตดามระ มัยเตรยะ ฯลฯ)

| ลำดับบท/ส่วน | ชื่อบท/หมวดวิเคราะห์ (Original Section Title) | เลขหน้าจริง | รหัส Dossier ประจำหมวด | การแมปปิ้งสู่โครงร่างวิจัย (หัวข้อย่อย) |
|:---|:---|:---:|:---|:---|
| Master | Sādhanamālā, Vol. II (Full Text Umbrella) | v–514 | `S-1928-bhattacharyya-01.md` | บทที่ 2 (2.1–2.4), บทที่ 4 (4.1) |
| Preface | Preface: Classification of Sādhanas 171–312 & MSS | v–xxii | `S-1928-bhattacharyya-sec00-preface-classification.md` | 4.1 (ประวัติศาสตร์การชำระและการจัดหมวดสาธนะ) |
| Intro Pt. 1 | §1 Magic in Ancient India & §2 The Tantras | xxiii–xxxiv | `S-1928-bhattacharyya-intro01-magic-tantras.md` | 2.1 (กำเนิดตันตระจากระบบเวทมนตร์โบราณ), 4.1 |
| Intro Pt. 2 | §3 Origin and Development & §4 Chronology of Vajrayāna | xxxiv–lxxii | `S-1928-bhattacharyya-intro02-origins-chronology.md` | 2.1, 2.3 (ลำดับเวลาและวิวัฒนาการสู่วัชรยาน สหชยาน) |
| Intro Pt. 3 | §5 Leading Tenets & §6 Aims and Objects of Tantrics | lxxiii–xcvi | `S-1928-bhattacharyya-intro03-tenets-aims.md` | 2.3, 2.4 (ปรัชญาศูนยตา วิชญาณวาท และอัษฏสิทธิ) |
| Intro Pt. 4 | §7 Authors of Sādhanas & The 84 Mahāsiddhas | xcvi–cxxiv | `S-1928-bhattacharyya-intro04-authors-siddhas.md` | 2.3 (ประวัติและผลงานของ 84 มหาสิทธาและคุรุ) |
| Intro Pt. 5 | §8 Vajrayāna Deities & §9 Iconography | cxxiv–clxxii | `S-1928-bhattacharyya-intro05-deities-iconography.md` | 2.3, 2.6 (ระบบการจัดสายตระกูลกุลและการแสดงรูป) |
| Sādhana Sec. 1 | Kurukullā, Uṣṇīṣavijayā, Sitātapatrā (Nos. 171–193) | 343–394 | `S-1928-bhattacharyya-sec01-kurukulla-usnisavijaya.md` | 2.3, 2.4 (สาธนะคุรุกุลลา เทวีเสน่ห์และอำนาจสะกด) |
| Sādhana Sec. 2 | Pañcarakṣā Cycle & Protective Goddesses (Nos. 194–212) | 395–424 | `S-1928-bhattacharyya-sec02-pancaraksa-cycle.md` | 2.3, 2.6, 3.3 (มณฑลปัญจรักษา เทียบเคียงพระปริตร) |
| Sādhana Sec. 3 | Vasudhārā, Vajravārāhī, Nairātmā, Vajrayoginī (Nos. 213–238) | 425–468 | `S-1928-bhattacharyya-sec03-vasudhara-vajravarahi.md` | 2.3, 2.4 (เทวีสายโยคินีตันตระ วชิรวาราหี ไนราตมา) |
| Sādhana Sec. 4 | Heruka, Mahāmāyā, Buddhakapāla, Cakrasaṁvara (Nos. 239–255) | 469–507 | `S-1928-bhattacharyya-sec04-heruka-cakrasamvara.md` | 2.2, 2.3 (เทพยับยุมสายอนุตรโยคะ เหรุกะ จักรสังวร) |
| Sādhana Sec. 5 | Wrathful Deities, Mantras & Subjugators (Nos. 256–282) | 508–557 | `S-1928-bhattacharyya-sec05-wrathful-deities-yamari.md` | 2.2, 2.3 (หัยครีพ ไตรโลกยวินัย ภูตดามระ ยมาริ) |
| Sādhana Sec. 6 | Maitreya, Jambhala, Rāja-Tārā & Concluding Texts (Nos. 283–312) | 558–634 | `S-1928-bhattacharyya-sec06-maitreya-jambhala.md` | 2.3, 2.6 (สาธนะพระศรีอาริย์ ชัมภละ ราชตารา) |

---

### เล่มที่ 7: 1939-bagchi-studies-in-the-tantras.pdf (118 หน้า)
**ชื่อเต็ม:** *Studies in the Tantras*  
**ผู้แต่ง:** Prabodh Chandra Bagchi (Calcutta: University of Calcutta, 1939)  
**ขอบเขตเนื้อหาหลัก:** งานวิจัยชิ้นเอกที่เชื่อมโยงตันตระอินเดียสู่อุษาคเนย์โดยตรง: การศึกษาคัมภีร์ตันตระในกัมพูชาโบราณจากจารึกสด๊กก๊อกธม (Devarāja Cult, Śiraścheda, Vināśikha, Sammoha, Nayottara) การถอดรหัสภาษาปริศนาธรรม (Sandhābhāṣā) องค์ประกอบต่างชาตินอกอินเดียในตันตระ คัมภีร์จรรยาบท (Caryāpadas) และรายงานการตรวจเอกสารตัวเขียนโบราณ

| ลำดับบท/ส่วน | ชื่อบทภาษาเดิม (Original Title) | เลขหน้าจริง | รหัส Dossier ประจำบท | การแมปปิ้งสู่โครงร่างวิจัย (หัวข้อย่อย) |
|:---|:---|:---:|:---|:---|
| Master | Studies in the Tantras (Full Volume Umbrella) | v–118 | `S-1939-bagchi-01.md` | บทที่ 2 (2.2, 2.5, 2.6), บทที่ 3 (3.1, 3.2), บทที่ 4 (4.1) |
| Chapter I | On Some Tāntrik Texts Studied in Ancient Kambuja | 1–15 | `S-1939-bagchi-ch01-tantric-texts-ancient-kambuja.md` | 2.6 (จารึกสด๊กก๊อกธม ลัทธิเทวราชา ชัยวรมันที่ 2), 3.1 |
| Chapter II | Further Notes on Tāntrik Texts Studied in Ancient Kambuja | 16–26 | `S-1939-bagchi-ch02-further-notes-kambuja.md` | 2.6 (การวิเคราะห์คัมภีร์ศิรศเฉท วินาศิข สัมโมหะ นโยตตระ) |
| Chapter III | The Sandhābhāṣā and Sandhāvācana | 27–33 | `S-1939-bagchi-ch03-sandhabhasa-sandhavacana.md` | 3.2, 3.3 (ภาษาปริศนาธรรมและรหัสยภาษาในตัวบท) |
| Chapter IV | On the Sādhanamālā | 34–44 | `S-1939-bagchi-ch04-on-the-sadhanamala.md` | 2.3, 4.1 (การวิพากษ์และประเมินคัมภีร์สาธนมลัย) |
| Chapter V | On Foreign Element in the Tantra | 45–60 | `S-1939-bagchi-ch05-foreign-element-in-tantra.md` | 2.1, 2.5 (อิทธิพลต่างชาติในตันตระ จีน มหาจีน โภฏะ) |
| Chapter VI | Some Technical Terms of the Tantras | 61–73 | `S-1939-bagchi-ch06-technical-terms-tantras.md` | 2.4 (อภิธานศัพท์เทคนิคเฉพาะทางในตันตรศาสตร์) |
| Chapter VII | Some Aspects of Buddhist Mysticism in the Cāryapadas | 74–86 | `S-1939-bagchi-ch07-buddhist-mysticism-caryapadas.md` | 2.3, 3.3 (รหัสยลัทธิในเพลงจรรยาบท ลมหายใจ กายทิพย์) |
| Chapter VIII | Notes on the Word Parāvṛtti | 87–92 | `S-1939-bagchi-ch08-notes-on-paravrtti.md` | 2.3, 1.3 (ความหมายทางปรัชญาของคำว่าปราพฤตติ) |
| Appendix I | Detailed Notices on Manuscripts: Niśvāsatattva-Saṁhitā | 93–95 | `S-1939-bagchi-app01-nisvasatattva-samhita.md` | 2.2, 2.6 (สำรวจคัมภีร์นิศวาสตัตตวะสายไศวะที่เก่าแก่ที่สุด) |
| Appendix II | Detailed Notices on Manuscripts: Vīṇāśikha-Tantra | 96–102 | `S-1939-bagchi-app02-vinasikha-tantra.md` | 2.6 (สำรวจตัวเขียนคัมภีร์วินาศิขตันตระที่ใช้ในเขมรโบราณ) |
| Appendix III | Detailed Notices on Manuscripts: Brahma-Yāmala | 103–104 | `S-1939-bagchi-app03-brahma-yamala.md` | 2.2 (สำรวจตัวเขียนพรหมยามละและสายธารภัยรวะ) |
| Appendix IV | Detailed Notices on Manuscripts: Piṅgalāmata | 105–108 | `S-1939-bagchi-app04-pingalamata.md` | 2.2, 2.4 (สำรวจตัวเขียนปิงคลามตะ กายทิพย์และมัณฑละ) |

---

### เล่มที่ 8: 1950-dasgupta-introduction-tantric-buddhism.pdf (255 หน้า)
**ชื่อเต็ม:** *An Introduction to Tantric Buddhism*  
**ผู้แต่ง:** Shashi Bhushan Dasgupta (Calcutta: University of Calcutta, 1950)  
**ขอบเขตเนื้อหาหลัก:** งานสังเคราะห์ทางปรัชญาและสรีรวิทยาโยคะแห่งพุทธตันตระ: ฐานรากมหายาน (มาธยมิกะ โยคาจาร) วิวัฒนาการสู่มนตรยาน วัชรยาน และกาลจักรยาน เทววิทยาเรื่องปรัชญา-อุบาย (Prajñā-Upāya) การรวมกันเป็นหนึ่ง (Yuganaddha) สหชะ มหาสุข สรีรวิทยาโยคะเร้นลับ (ทฤษฎีจักระ เส้นประสาทลลนา-รสนะ-อวธูตี การควบคุมโพธิจิต มุทราทั้งสี่) และการปกป้องโยคะตันตระ

| ลำดับบท/ส่วน | ชื่อบทภาษาเดิม (Original Title) | เลขหน้าจริง | รหัส Dossier ประจำบท | การแมปปิ้งสู่โครงร่างวิจัย (หัวข้อย่อย) |
|:---|:---|:---:|:---|:---|
| Master | An Introduction to Tantric Buddhism (Full Volume Umbrella) | vii–255 | `S-1950-dasgupta-01.md` | บทที่ 2 (2.1–2.4), บทที่ 3 (3.3), บทที่ 4 (4.1) |
| Chapter I | Preliminary: Notion of Tantras & Philosophical Systems | 1–40 | `S-1950-dasgupta-ch01-preliminary-philosophy.md` | 2.1, 2.3 (ฐานรากปรัชญามหายาน มาธยมิกะ โยคาจาร สู่ตันตระ) |
| Chapter II | Unsystematised Philosophical Fragments Found in Buddhist Tantras | 41–59 | `S-1950-dasgupta-ch02-philosophical-fragments.md` | 2.3 (เศษเสี้ยวปรัชญาในคัมภีร์ตันตระพุทธก่อนการจัดระบบ) |
| Chapter III | Schools of Tantric Buddhism: Mantrayāna, Vajrayāna, Kālacakrayāna | 60–85 | `S-1950-dasgupta-ch03-schools-tantric-buddhism.md` | 2.3 (สำนักมนตรยาน วัชรยาน กาลจักรยาน กายทวิลักษณ์) |
| Chapter IV | Theological Position: Vajrasattva, Bodhicitta, Prajñā-Upāya, Mahāsukha | 86–159 | `S-1950-dasgupta-ch04-theological-position-prajna-upaya.md` | 2.2, 2.3 (ปรัชญา-อุบาย โพธิจิต ยุคนัทธะ มหาสุข), 1.2 |
| Chapter V | The Element of Esoteric Yoga: Plexus, Nerves, Bodhicitta, Mudrās | 160–196 | `S-1950-dasgupta-ch05-element-esoteric-yoga.md` | 2.4 (สรีรวิทยาโยคะ จักระ ลลนา-รสนะ โพธิจิต มุทรา 4), 3.3 |
| Chapter VI | The Argument of the Tantric Buddhists in Defence of Their Yoga | 197–217 | `S-1950-dasgupta-ch06-defence-of-yoga.md` | 2.1, 2.4 (การแก้ต่างข้อโจมตีเรื่องโยคะและการใช้กามารมณ์) |

---

## สรุปภาพรวมการนำไปใช้งานในโครงร่างงานวิจัย 4 บท (Integration Matrix)

| บทที่และหัวข้อย่อย | ชื่อประเด็นวิจัยตามพิมพ์เขียวแม่บท | ชุด Dossier ที่เกี่ยวข้องโดยตรงจาก 8 เล่มนี้ |
|:---|:---|:---|
| **บทที่ 1 (1.2)** | สังเคราะห์ความเชื่อมโยงจากเบ้าหลอมอินเดียสู่อุษาคเนย์ | S-1939-bagchi-ch01, S-1939-bagchi-ch02, S-1950-dasgupta-ch04, S-1914-avalon-ch09 |
| **บทที่ 1 (1.3)** | สัณฐานวิทยาเชิงสรีรวิทยาและอักขรวิทยา: กาย จิต คัพภวิทยา | S-1919-avalon-ch03, S-1919-avalon-ch07, S-1950-dasgupta-ch05, S-1939-bagchi-ch08 |
| **บทที่ 1 (1.7)** | สรุปประมวลบูรณาการเชิงปรัชญาและประวัติศาสตร์ | S-1919-avalon-ch02, S-1919-avalon-ch07, S-1950-dasgupta-ch04 |
| **บทที่ 2 (2.1)** | รากเหง้าทางประวัติศาสตร์และสังคมวัฒนธรรมของตันตริกในอินเดีย | S-1914-avalon-intro01, S-1914-avalon-ch01-03, S-1932-bhattacharyya-ch01-02, S-1928-bhattacharyya-intro01, S-1950-dasgupta-ch01 |
| **บทที่ 2 (2.2)** | ปฏิสัมพันธ์ระหว่างไศวะตันตระและพุทธตันตระ | S-1914-avalon-intro02, S-1914-avalon-ch07-09, S-1932-bhattacharyya-ch14, S-1939-bagchi-app01, S-1939-bagchi-app03 |
| **บทที่ 2 (2.3)** | พัฒนาการของพุทธตันตระ: มนตรยาน วัชรยาน สหชยาน | S-1932-bhattacharyya-ch04, S-1924-bhattacharyya-ch01-12, S-1928-bhattacharyya-intro02-05, S-1950-dasgupta-ch02-04 |
| **บทที่ 2 (2.4)** | สรีรวิทยาเร้นลับและเทคโนโลยีทางพิธีกรรม: จักระ นาฑี พินทุ มณฑล | S-1919-avalon-ch04-07, S-1919-avalon-sec08-10, S-1914-avalon-ch11-20, S-1950-dasgupta-ch05, S-1932-bhattacharyya-ch07,11 |
| **บทที่ 2 (2.5)** | การส่งออกข้ามแดนผ่านเครือข่ายทางทะเลสู่อุษาคเนย์ | S-1939-bagchi-ch05 |
| **บทที่ 2 (2.6)** | พุทธ-ฮินดูตันตระในชวา สุมาตรา และเขมรโบราณ | S-1939-bagchi-ch01, S-1939-bagchi-ch02, S-1939-bagchi-app02, S-1924-bhattacharyya-ch03,11, S-1928-bhattacharyya-sec02 |
| **บทที่ 2 (2.8)** | สรุปบทเรียนประวัติศาสตร์และสายธารสู่อุษาคเนย์แผ่นดินใหญ่ | S-1932-bhattacharyya-ch15 |
| **บทที่ 3 (3.1)** | ภูมิหลังการเข้ามาและการสถาปนาเถรวาทจารีตก่อนยุคปฏิรูป | S-1939-bagchi-ch01, S-1939-bagchi-ch02 |
| **บทที่ 3 (3.2)** | คัมภีร์และวรรณกรรมสำคัญ: สัททวิมล อมตกถาวรรณนา ปฐมมูลมูลี | S-1939-bagchi-ch03 (Sandhābhāṣā), S-1939-bagchi-ch07 (Cāryapadas) |
| **บทที่ 3 (3.3)** | สรีรวิทยาการภาวนา: สัททวิทยา คัพภวิทยาเชิงธรรม กายพระพุทธะ | S-1919-avalon-ch04,05,06, S-1914-avalon-ch11,12,20, S-1950-dasgupta-ch05, S-1928-bhattacharyya-sec02 |
| **บทที่ 3 (3.4)** | สายธารในสยามและล้านนา: กรรมฐานมัชฌิมาแบบลำดับ | S-1919-avalon-sec09 (Pādukā-Pañcaka & Guru-pīṭha) |
| **บทที่ 3 (3.5)** | ธรรมเนียมในเขมร ลาว และพม่า: ครูบา ลแปก และเวชชา | S-1914-avalon-ch13,14 (Guru Lineages) |
| **บทที่ 3 (3.7)** | การดำรงอยู่ในโลกร่วมสมัย: พระเครื่อง ไสยเวท มนต์พิธี | S-1924-bhattacharyya-ch01-12, S-1932-bhattacharyya-ch07 |
| **บทที่ 4 (4.1)** | ยุคบุกเบิกแห่งการค้นพบเอกสาร (1890s–1950s) | S-1914-avalon-01, S-1919-avalon-01, S-1924-bhattacharyya-01, S-1925-bhattacharyya-01, S-1928-bhattacharyya-01, S-1932-bhattacharyya-01, S-1939-bagchi-01, S-1950-dasgupta-01 |

---

เอกสารสถาปัตยกรรมฉบับนี้ถูกจัดทำขึ้นเพื่อใช้เป็นพิมพ์เขียวแม่บทในการสร้างไฟล์ Dossier จริงในโฟลเดอร์ `research-notes/sources/` ในขั้นตอนที่ 6 ตามระเบียบวิจัยของโครงการต่อไป



---

# ภาคผนวกแผนแม่บทส่วนที่ 6: ทีมที่ 4: หมวดคัมภีร์ตันตระชั้นสูงและรหัสยะเบงกอล (Higher Tantras, Tantric Sutras & Bengali Mysticism)

# พิมพ์เขียวโครงสร้าง Dossier ฉบับสมบูรณ์ (Master & Chapter Dossier Blueprint)
## กลุ่มตำราคัมภีร์ตันตระชั้นสูงและรหัสยะเบงกอล (Higher Tantras, Tantric Sutras & Bengali Mysticism)
**ผู้รับผิดชอบ:** Sub-Agent ทีมที่ 4 (Team 4 Specialist)  
**โครงการวิจัย:** เถรวาทตันตระ หรือเถรวาทแบบเซาท์อีสเอเชีย: กำเนิด พัฒนาการ การดำรงอยู่ และสถานภาพการศึกษาทางประวัติศาสตร์นิพนธ์  
**เกณฑ์มาตรฐานบังคับ:** หนังสือ 1 เล่มที่มีหลายบท จะต้องจัดทำ Dossier แยกเป็น "1 Dossier กลาง (Master Umbrella Dossier)" และ "1 Dossier ประจำบทสำหรับทุกบทในเล่ม (100% Comprehensive Chapter Coverage ห้ามตัดทอน)"

---

## สรุปภาพรวมสถิติการจัดทำ Dossier ของทีมที่ 4

| ลำดับ | รายการเอกสาร / ชื่อไฟล์ PDF | ความยาวจริง (หน้า) | Master Dossier | Chapter / Section Dossiers | รวม Dossiers ทั้งสิ้น |
|:---:|:---|:---:|:---:|:---:|:---:|
| 1 | `1946-dasgupta-obscure-religious-cults.pdf` | 560 หน้า | 1 ฉบับ | 19 ฉบับ (14 บท + 5 ภาคผนวก) | 20 ฉบับ |
| 2 | `1959-snellgrove-hevajra-tantra-part1.pdf` | 176 หน้า | 1 ฉบับ | 25 ฉบับ (Intro + 23 บทแปล + Endmatter) | 26 ฉบับ |
| 3 | `1959-snellgrove-hevajra-tantra-part2.pdf` | 206 หน้า | 1 ฉบับ | 25 ฉบับ (23 ปฏละตัวบท + อรรถกถา + ศัพท์) | 26 ฉบับ |
| 4 | `1973-wayman-buddhist-tantras-indo-tibetan.pdf` | 288 หน้า | 1 ฉบับ | 16 ฉบับ (16 บท ครบ 4 ภาค) | 17 ฉบับ |
| 5 | `1977-wayman-yoga-of-the-guhyasamajatantra.pdf` | 412 หน้า | 1 ฉบับ | 12 ฉบับ (3 ภาคหลัก 8 บท + 4 ภาคผนวก) | 13 ฉบับ |
| 6 | `2019-szanto-tantric-lineage-initiatory-identity.pdf` | 59 หน้า | 1 ฉบับ | 4 ฉบับ (10 หมวดข้อถกเถียง + ภาคผนวก) | 5 ฉบับ |
| 7 | `1883-sinnett-esoteric-buddhism.pdf` | 358 หน้า | 1 ฉบับ | 14 ฉบับ (คำนำ + 12 บท + ภาคผนวก) | 15 ฉบับ |
| **รวม** | **7 เอกสารหลักระดับคลาสสิก/แม่บท** | **2,059 หน้า** | **7 ฉบับ** | **115 ฉบับ** | **122 ฉบับ** |

---

## 1. Shashibhusan Dasgupta (1946), *Obscure Religious Cults as Background of Bengali Literature*
- **ไฟล์ PDF:** `1946-dasgupta-obscure-religious-cults.pdf` (560 หน้า)
- **ไฟล์ข้อความสกัด:** `research-notes/extracted-texts/1946-dasgupta-obscure-religious-cults.txt` (1,132,327 ไบต์, 29,238 บรรทัด)
- **สถานะ:** วิทยานิพนธ์ปริญญาเอก มหาวิทยาลัยกัลกัตตา ตีพิมพ์ ค.ศ. 1946 (งานวิจัยแม่บทคลาสสิกของโลกเรื่องสหชยาน นารถะ เบาล์ และธรรมะ)

### 1.1 สารบัญฉบับเต็มและขอบเขตเลขหน้าจริง
- **Front Matter:** Preface (pp. xxiii-xxix), Introduction (pp. xxxi-li)
- **PART I: The Buddhist Sahajiya Cult and Literature**
  - Chapter I: Growth of the Sahajiya Cult and Literature (pp. 1-38)
    - (i) Information about the Available Literature (pp. 1-7)
    - (ii) History of Buddhism in Bengal (pp. 7-13)
    - (iii) Origin and Development of Tantric Buddhism (pp. 13-27)
    - (iv) Mode of Transformation of the Main Ideas of Mahayana into those of Tantric Buddhism (pp. 27-38)
  - Chapter II: The General Philosophical Standpoint of the Carya-padas (pp. 39-57)
  - Chapter III: The General Religious Outlook of the Sahajiyas (pp. 58-100)
    - (i) Salient Features of the Religion Preached in the Buddhist Dohas and Songs (A-D) (pp. 58-89)
    - (ii) The Idea of Sahaja (pp. 90-100)
  - Chapter IV: The Practices of the Sahajiyas and the State of Supreme Bliss (Maha-sukha) (pp. 101-128)
    - (i) The Guru-vada (pp. 101-103)
    - (ii) The Importance of the Body in the Sadhana (pp. 103-107)
    - (iii) The Esoteric Practice (pp. 107-110)
    - (iv) The Middle Path in the Esoteric Sadhana (pp. 110-115)
    - (v) The Yogic Sadhana of the Sahajiyas and the Female Force (pp. 115-125)
    - (vi) The Final State of Bodhi-citta or the State of Maha-sukha (pp. 125-128)
- **PART II: Mediaeval Sahajiya Schools**
  - Chapter V: The Vaisnava Sahajiya Cult (pp. 131-170)
    - (i) Transition from Buddhist Sahajiya to Vaisnava Sahajiya (pp. 131-139)
    - (ii) The Mode of Transformation (pp. 139-142)
    - (iii) The Psychological Aspect of the Sadhana of the Vaisnava Sahajiyas (pp. 142-168)
    - (iv) Sahaja-realisation of the Self and the Not-Self (pp. 168-170)
  - Chapter VI: A Non-sectarian Approach to the Doctrines of the Sahajiyas (pp. 171-182)
    - (i) The Purely Psychological Approach Apart from the Theological (pp. 171-180)
    - (ii) Criticism from the Yoga Point of View (pp. 180-182)
  - Chapter VII: The Bauls of Bengal (pp. 183-215)
    - (i) General Nature of the Baul Sect (pp. 183-187)
    - (ii) The Bauls and the Sahajiyas (pp. 187-191)
    - (iii) The Bauls and the Sufis (pp. 191-213)
    - (iv) Poet Tagore and the Baul Songs (pp. 213-215)
- **PART III: Nath Cult**
  - Chapter VIII: Legends and History (pp. 219-241)
    - (i) Origin of the Nath Cult (pp. 219-232)
    - (ii) Traditions of the Eighty-four Siddhas and the Nine Naths (pp. 232-241)
  - Chapter IX: Religion of the Nath Siddhas (pp. 242-294)
    - (i) General Air of Supernaturalism (pp. 242-250)
    - (ii) The Final End of the Nath Siddhas (pp. 250-263)
    - (iii) The Means: (A) Ulta-sadhana or the Regressive Process (pp. 263-269), (B) Kaya-sadhana: Sun and Moon (pp. 269-283), Practical Yoga comparisons (pp. 283-287)
    - (iv) The Vedic Soma-sacrifice and Drinking of Nectar in Yogic Schools (pp. 287-289)
    - (v) The Rasayana School and the Nath Cult (pp. 289-294)
- **PART IV: The Dharma Cult and Bengali Literature**
  - Chapter X: General Nature of the Cult (pp. 297-307)
  - Chapter XI: Speculations on the Conception of Dharma (pp. 308-328)
    - (i) Hindu Conceptions of Dharma (pp. 308-312)
    - (ii) Buddhistic Substratum of Dharma (pp. 312-328)
  - Chapter XII: Dharma as Described in the Dharma Literature (pp. 329-348)
  - Chapter XIII: The Theory of the Panditas, Kotalas, Aminis, etc. (pp. 349-358)
  - Chapter XIV: The Theory of Cosmogony and Cosmology in Old and Mediaeval Vernaculars (pp. 359-396)
- **APPENDICES:**
  - Appendix (A): The Religious Tenets of the Non-Bengali Mediaeval Saints (pp. 399-424)
  - Appendix (B): General Informations about the Literature of the Nath Cult (pp. 425-441)
  - Appendix (C): An Account of the Prominent Personalities in the Nath Literature of Bengal (pp. 442-460)
  - Appendix (D): General Informations about the Dharma Literature of Bengal (pp. 461-476)
  - Appendix (E): Enigmatic Language of the Old and the Mediaeval Poets (pp. 477-490)

### 1.2 โครงสร้างรหัส Dossier และการแมปปิ้งเข้าสู่รายงานวิจัย
- **Dossier กลาง (Master Umbrella):** `S-1946-dasgupta-01.md`  
  - *การนำไปใช้:* แมปปิ้งเข้าสู่ **บทที่ 1 (1.1, 1.2, 1.3), บทที่ 2 (2.1, 2.3, 2.4), บทที่ 4 (4.1, 4.4)**
- **Dossier รายบทและภาคผนวก (19 ฉบับ):**
  1. `S-1946-dasgupta-ch01-sahajiya-growth.md` (Ch I, pp. 1-38) -> **แมปปิ้งเข้าสู่ 2.1, 2.3, 1.2** (กำเนิดตันตระในเบงกอล ยุคปาละ วิวัฒนาการจากมหายานสู่มนตรยาน วัชรยาน และสหชยาน)
  2. `S-1946-dasgupta-ch02-caryapada-philosophy.md` (Ch II, pp. 39-57) -> **แมปปิ้งเข้าสู่ 2.3, 3.2, 1.3** (ปรัชญาศูนยตา 4 ขั้นในจรรยาบท เปรียบเทียบกับปรัชญาสุญญตาและธรรมกาย)
  3. `S-1946-dasgupta-ch03-sahajiya-religious-outlook.md` (Ch III, pp. 58-100) -> **แมปปิ้งเข้าสู่ 2.1, 2.3, 4.1** (การต่อต้านพิธีกรรมแบบแผน มโนทัศน์เรื่องสหชะ ความจริงสูงสุดที่เป็นสัจธรรมเนื้อแท้)
  4. `S-1946-dasgupta-ch04-kaya-sadhana-mahasukha.md` (Ch IV, pp. 101-128) -> **แมปปิ้งเข้าสู่ 2.4, 3.3, 1.3** (กายสัทธนะ กายฐานเป็นจักรวาลจำลอง จักระ นาฑี โพธิจิต ย้อนทวนกระแส มหาสุข เทียบสรีรวิทยาโยคาวจร)
  5. `S-1946-dasgupta-ch05-vaisnava-sahajiya.md` (Ch V, pp. 131-170) -> **แมปปิ้งเข้าสู่ 2.2, 2.7, 1.2** (การเปลี่ยนผ่านจากพุทธสหชิยาเป็นไวษณวสหชิยา การแปรสภาพปรัชญาปรัชญา-อุปายะ เป็นราธา-กฤษณะ)
  6. `S-1946-dasgupta-ch06-nonsectarian-psychology.md` (Ch VI, pp. 171-182) -> **แมปปิ้งเข้าสู่ 2.2, 2.4** (จิตวิทยาการระงับและยกระดับอารมณ์/กามารมณ์สู่ความหลุดพ้น การเปรียบเทียบกับไศวะกัศมีร์)
  7. `S-1946-dasgupta-ch07-bauls-of-bengal.md` (Ch VII, pp. 183-215) -> **แมปปิ้งเข้าสู่ 2.7, 3.5, 1.5** (ลัทธิเบาล์ ชายในใจ/มนุรมานุษ การผสานตันตระพุทธเข้ากับซูฟีอิสลามหลังการล่มสลายของอารามพุทธ)
  8. `S-1946-dasgupta-ch08-nath-legends-history.md` (Ch VIII, pp. 219-241) -> **แมปปิ้งเข้าสู่ 2.1, 2.2, 4.1** (กำเนิดลัทธินารถะ ตำนานสิทธา 84 องค์ และนวนาถ มิติทับซ้อนระหว่างพุทธตันตระและไศวะ)
  9. `S-1946-dasgupta-ch09-nath-siddha-religion.md` (Ch IX, pp. 242-294) -> **แมปปิ้งเข้าสู่ 2.4, 3.3, 3.5** (กายสัทธนะแบบหฐโยคะและรสายนวิทยา การย้อนทวนกระแส [อุลฏาสาธนะ] ดื่มน้ำอมฤต ร่างอมตะ [ชีวันมุกติ] เทียบเวชชาพม่า)
  10. `S-1946-dasgupta-ch10-dharma-cult-nature.md` (Ch X, pp. 297-307) -> **แมปปิ้งเข้าสู่ 2.7, 3.1** (ลัทธิธรรมะในเบงกอลตะวันตก ชั้นดินพุทธศาสนาแฝง [Crypto-Buddhism] ภายใต้สังคมฮินดูและอิสลาม)
  11. `S-1946-dasgupta-ch11-dharma-conceptions.md` (Ch XI, pp. 308-328) -> **แมปปิ้งเข้าสู่ 2.3, 2.7, 3.8** (วิวัฒนาการมโนทัศน์ "ธรรมะ" จากพระรัตนตรัยสู่เทวะสูงสุด นิรัญชนะ และการกลายรูปของพุทธศาสนา)
  12. `S-1946-dasgupta-ch12-dharma-literature.md` (Ch XII, pp. 329-348) -> **แมปปิ้งเข้าสู่ 2.7, 3.2** (วรรณกรรมศูนยปุราณะ และธรรมปูชาวิธาน การพรรณนาพระธรรมะเป็นความว่างและสีขาวบริสุทธิ์)
  13. `S-1946-dasgupta-ch13-panditas-tathagatas.md` (Ch XIII, pp. 349-358) -> **แมปปิ้งเข้าสู่ 2.4, 3.2, 3.3** (ระบบปัณฑิตและโกฏาลเทียบเคียงปัญจตถาคต 5 ทิศ สีประจำทิศ และประตูมณฑล)
  14. `S-1946-dasgupta-ch14-cosmogony-cosmology.md` (Ch XIV, pp. 359-396) -> **แมปปิ้งเข้าสู่ 2.4, 3.2, 3.3** (จักรวาลกำเนิดวิทยาจากศูนยตาดั้งเดิม ปรัชญา-อุปายะ และธรรมกาย เปรียบเทียบกับปฐมมูลมูลีในล้านนา-เขมร)
  15. `S-1946-dasgupta-appA-mediaeval-saints.md` (Appendix A, pp. 399-424) -> **แมปปิ้งเข้าสู่ 2.7, 4.1** (การแพร่กระจายแนวคิดสหชิยาไปยังนักบุญยุคกลางนอกเบงกอล กาพีร์ นานัก สุนทรทาส)
  16. `S-1946-dasgupta-appB-nath-literature.md` (Appendix B, pp. 425-441) -> **แมปปิ้งเข้าสู่ 2.2, 3.2** (วรรณกรรมนารถโยคีทั้งภาษาสันสกฤตและภาษาถิ่น การสืบทอดสายวิชามินนาถและโครักษ์นาถ)
  17. `S-1946-dasgupta-appC-nath-personalities.md` (Appendix C, pp. 442-460) -> **แมปปิ้งเข้าสู่ 2.1, 2.2, 3.5** (ประวัติและตำนานครูอาจารย์สายสิทธา มินนาถ โครักษ์ ชาลันธริ กาณหะ โคปีจันทร และมัยนามตี)
  18. `S-1946-dasgupta-appD-dharma-literature.md` (Appendix D, pp. 461-476) -> **แมปปิ้งเข้าสู่ 2.7, 3.2** (การวิเคราะห์ตัวบทพิธีกรรมศูนยปุราณะของรามายปัณฑิต)
  19. `S-1946-dasgupta-appE-enigmatic-language.md` (Appendix E, pp. 477-490) -> **แมปปิ้งเข้าสู่ 2.4, 3.2, 3.3, 1.3** (สนธยาภาษา [Sandhya-bhasa] รหัสยภาษา นัยซ้อนสองชั้นของคำศัพท์ตันตระ)

---

## 2. D.L. Snellgrove (1959), *The Hevajra Tantra: A Critical Study (Part I: Introduction and Translation)*
- **ไฟล์ PDF:** `1959-snellgrove-hevajra-tantra-part1.pdf` (176 หน้า)
- **ไฟล์ข้อความสกัด:** `research-notes/extracted-texts/1959-snellgrove-hevajra-tantra-part1.txt` (497,147 ไบต์, 11,162 บรรทัด)
- **สถานะ:** ผลงานฉบับมาตรฐานสากลของ London Oriental Series (เล่ม 6 ภาค 1) แปลและศึกษาคัมภีร์เหวัชรตันตระ

### 2.1 สารบัญฉบับเต็มและขอบเขตเลขหน้าจริง
- **Front Matter:** Preface (pp. vii-xi), Bibliography (pp. xiii-xv)
- **INTRODUCTION (pp. 1-44):**
  - I. Apologetic (pp. 1-11)
  - II. Origins (pp. 11-19)
  - III. Subject-matter (pp. 19-39)
  - IV. Observations (pp. 39-44)
- **TRANSLATION PART I (pp. 47-87):**
  - Chapter i: The Body of Hevajra (pp. 47-50)
  - Chapter ii: Mantras (pp. 50-56)
  - Chapter iii: Hevajra and his Troupe (pp. 56-59)
  - Chapter iv: Self-consecration (pp. 59-60)
  - Chapter v: Reality (pp. 60-63)
  - Chapter vi: The Performance (pp. 63-66)
  - Chapter vii: Secret Signs (pp. 66-73)
  - Chapter viii: The Troupe of Yoginis (pp. 73-78)
  - Chapter ix: The Spheres of Purification (pp. 78-81)
  - Chapter x: Consecration (pp. 81-84)
  - Chapter xi: The Four Gazes (pp. 84-87)
- **TRANSLATION PART II (pp. 88-120):**
  - Chapter i: Consecrations and Oblations (pp. 88-89)
  - Chapter ii: The Certainty of Success (pp. 89-94)
  - Chapter iii: The Basis of all Tantras (pp. 94-100)
  - Chapter iv: Answers to Various Questions (pp. 100-109)
  - Chapter v: The Manifestation of Hevajra (pp. 109-114)
  - Chapter vi: The Making of a Painting (pp. 114-115)
  - Chapter vii: Books and Feasting (pp. 115-116)
  - Chapter viii: Subjugating (p. 116)
  - Chapter ix: Mantras (pp. 116-118)
  - Chapter x: Recitation (p. 118)
  - Chapter xi: The Five Families (pp. 118-119)
  - Chapter xii: The Four Consecrations (pp. 119-120)
- **END MATTER (pp. 121-149):**
  - Résumé of Contents (pp. 121-125)
  - Diagrams of Mandalas (pp. 126-130)
  - Glossary of Special Terms (pp. 131-142)
  - Index (pp. 143-149)

### 2.2 โครงสร้างรหัส Dossier และการแมปปิ้งเข้าสู่รายงานวิจัย
- **Dossier กลาง (Master Umbrella):** `S-1959-snellgrove-01.md`  
  - *การนำไปใช้:* แมปปิ้งเข้าสู่ **บทที่ 1 (1.2, 1.3), บทที่ 2 (2.3, 2.4, 2.6), บทที่ 4 (4.1)**
- **Dossier รายบทและหมวดเนื้อหา (25 ฉบับ):**
  1. `S-1959-snellgrove-p1-intro.md` (Introduction I-IV, pp. 1-44) -> **แมปปิ้งเข้าสู่ 2.1, 2.3, 4.1** (ทัศนะทางประวัติศาสตร์ กำเนิดโยคินีตันตระ ความสัมพันธ์กับไศวะ และโครงสร้างคำสอน)
  2. `S-1959-snellgrove-p1-pt1-ch01-body.md` (Pt I Ch i, pp. 47-50) -> **แมปปิ้งเข้าสู่ 2.4, 3.3, 1.3** (กายแห่งเหวัชระ การจัดวางธาตุ นาฑี อาลี-กาลี พระพุทธเจ้าในกาย)
  3. `S-1959-snellgrove-p1-pt1-ch02-mantras.md` (Pt I Ch ii, pp. 50-56) -> **แมปปิ้งเข้าสู่ 2.4, 3.3** (มนตรา อักษรเมล็ดพันธุ์ [พีชะ] เทคโนโลยีการปลุกเสกและการภาวนา)
  4. `S-1959-snellgrove-p1-pt1-ch03-troupe.md` (Pt I Ch iii, pp. 56-59) -> **แมปปิ้งเข้าสู่ 2.4, 2.6** (เหวัชระและบริวารเทวี 8 องค์ การจัดวางในมณฑล 8 ทิศ)
  5. `S-1959-snellgrove-p1-pt1-ch04-self-consecration.md` (Pt I Ch iv, pp. 59-60) -> **แมปปิ้งเข้าสู่ 2.4, 3.3** (สวาธิษฐาน อัตตาภิเษก การสถาปนาจิตตนเองเป็นพระพุทธเจ้า)
  6. `S-1959-snellgrove-p1-pt1-ch05-reality.md` (Pt I Ch v, pp. 60-63) -> **แมปปิ้งเข้าสู่ 2.3, 2.4, 3.8** (ตัตตวะ สัจธรรมเนื้อแท้ อนันดะ 4 ขั้น สหชะอันพ้นความปรุงแต่ง)
  7. `S-1959-snellgrove-p1-pt1-ch06-performance.md` (Pt I Ch vi, pp. 63-66) -> **แมปปิ้งเข้าสู่ 2.1, 2.4** (จรรยา ข้อปฏิบัติโยคี เครื่องประดับอัฐิ 5 ประการ กาน้ำ กะโหลก)
  8. `S-1959-snellgrove-p1-pt1-ch07-secret-signs.md` (Pt I Ch vii, pp. 66-73) -> **แมปปิ้งเข้าสู่ 2.4, 3.2, 4.7** (โฉมา ภาษาท่าทางลับ สนธยาภาษาระหว่างคุรุและศิษย์)
  9. `S-1959-snellgrove-p1-pt1-ch08-yoginis.md` (Pt I Ch viii, pp. 73-78) -> **แมปปิ้งเข้าสู่ 2.4, 2.6** (ชุมนุมโยคินี มณฑลและสังฆกรรมในป่าช้าและสถานที่ศักดิ์สิทธิ์ [ปีฐะ])
  10. `S-1959-snellgrove-p1-pt1-ch09-purification.md` (Pt I Ch ix, pp. 78-81) -> **แมปปิ้งเข้าสู่ 2.4, 3.3** (วิสุทธิ การชำระขันธ์ 5 อายตนะ และธาตุ ให้กลายเป็นเทวสภาพบริสุทธิ์)
  11. `S-1959-snellgrove-p1-pt1-ch10-consecration.md` (Pt I Ch x, pp. 81-84) -> **แมปปิ้งเข้าสู่ 2.4, 3.1** (พิธีอภิเษก 4 ระดับ: คุรุ กัลยาณมิตร และการประสิทธิ์สายวิชา)
  12. `S-1959-snellgrove-p1-pt1-ch11-four-gazes.md` (Pt I Ch xi, pp. 84-87) -> **แมปปิ้งเข้าสู่ 2.4, 3.5** (ทรรศนะ 4 ประการ อิทธิฤทธิ์ทางจิต การสะกด และการคุ้มครอง)
  13. `S-1959-snellgrove-p1-pt2-ch01-oblations.md` (Pt II Ch i, pp. 88-89) -> **แมปปิ้งเข้าสู่ 2.4, 3.7** (โหมพิธี การบูชาไฟ อุปจารพิธี และการประดิษฐานรูปเคารพ)
  14. `S-1959-snellgrove-p1-pt2-ch02-siddhi.md` (Pt II Ch ii, pp. 89-94) -> **แมปปิ้งเข้าสู่ 2.4, 3.5** (สิทธิ ความสำเร็จทางจิตและอภิญญา การบำเพ็ญในถ้ำและป่าช้า)
  15. `S-1959-snellgrove-p1-pt2-ch03-basis-of-tantras.md` (Pt II Ch iii, pp. 94-100) -> **แมปปิ้งเข้าสู่ 2.3, 2.4, 3.3** (นิทานบท พื้นฐานแห่งตันตระ สนธยาภาษาระดับลึก การดับกิเลสด้วยอุบายอันแยบคาย)
  16. `S-1959-snellgrove-p1-pt2-ch04-questions.md` (Pt II Ch iv, pp. 100-109) -> **แมปปิ้งเข้าสู่ 2.3, 2.4, 3.8** (วิสัชนาปัญหาธรรม สภาวะนอนดูอัล [อัทวยะ] และการสถิตอยู่ในภคะ)
  17. `S-1959-snellgrove-p1-pt2-ch05-manifestation.md` (Pt II Ch v, pp. 109-114) -> **แมปปิ้งเข้าสู่ 2.4, 2.6** (การปรากฏรูปของเหวัชระ 16 แขน 8 เศียร 4 ขา เหยียบเทวะและมาร)
  18. `S-1959-snellgrove-p1-pt2-ch06-painting.md` (Pt II Ch vi, pp. 114-115) -> **แมปปิ้งเข้าสู่ 2.4, 2.6, 3.7** (การเขียนภาพพระบฏ [ปฏะ] ข้อกำหนดทางพิธีกรรม สี และวัสดุ)
  19. `S-1959-snellgrove-p1-pt2-ch07-books-feasting.md` (Pt II Ch vii, pp. 115-116) -> **แมปปิ้งเข้าสู่ 2.4, 3.2** (คัมภีร์ การจัดเก็บตัวบท และพิธีกานะจักระ)
  20. `S-1959-snellgrove-p1-pt2-ch08-subjugating.md` (Pt II Ch viii, p. 116) -> **แมปปิ้งเข้าสู่ 2.4, 3.5** (การปราบศัตรูและอุปสรรค พิธีกรรมเชิงไสยเวทคุ้มครอง)
  21. `S-1959-snellgrove-p1-pt2-ch09-mantras.md` (Pt II Ch ix, pp. 116-118) -> **แมปปิ้งเข้าสู่ 2.4, 3.3** (มันโตรทธาระ การถอดรหัสเสียงมนตราและการประสมพยางค์ศักดิ์สิทธิ์)
  22. `S-1959-snellgrove-p1-pt2-ch10-recitation.md` (Pt II Ch x, p. 118) -> **แมปปิ้งเข้าสู่ 2.4, 3.3** (ชปะ การบริกรรมมนตรา การควบคุมลมหายใจควบคู่มนตรา)
  23. `S-1959-snellgrove-p1-pt2-ch11-five-families.md` (Pt II Ch xi, pp. 118-119) -> **แมปปิ้งเข้าสู่ 2.3, 2.4, 3.3** (ปัญจตระกูลพุทธ [กุละ] พระพุทธเจ้า 5 พระองค์และอัญมณี)
  24. `S-1959-snellgrove-p1-pt2-ch12-four-consecrations.md` (Pt II Ch xii, pp. 119-120) -> **แมปปิ้งเข้าสู่ 2.4, 3.3, 3.8** (จตุรอภิเษก: กลศ, ลับ [คุหย], ปัญญาญาณ, และที่สี่ [ตุรียะ/สหชะ])
  25. `S-1959-snellgrove-p1-endmatter.md` (End Matter, pp. 121-149) -> **แมปปิ้งเข้าสู่ 2.4, 3.3, 4.1** (แผนผังมณฑลเหวัชระ และอภิธานศัพท์ตันตระเฉพาะทาง)

---

## 3. D.L. Snellgrove (1959), *The Hevajra Tantra: A Critical Study (Part II: Sanskrit and Tibetan Texts)*
- **ไฟล์ PDF:** `1959-snellgrove-hevajra-tantra-part2.pdf` (206 หน้า)
- **ไฟล์ข้อความสกัด:** `research-notes/extracted-texts/1959-snellgrove-hevajra-tantra-part2.txt` (495,772 ไบต์, 16,920 บรรทัด)
- **สถานะ:** ตัวบทต้นฉบับภาษาสันสกฤตและทิเบตเทียบเคียง พร้อมอรรถกถาโยครัตนมาราของกาณหะ (London Oriental Series Vol. 6 Part 2)

### 3.1 สารบัญฉบับเต็มและขอบเขตเลขหน้าจริง
- **Front Matter:** Note on the Texts (pp. vii-xi)
- **SANSKRIT & TIBETAN TEXTS: PART I (Vajragarbhābhisambodhiḥ, pp. 2-41):**
  - Paṭala i: Sarvatathāgatakāyavākcittahevajravajrakulapaṭalaḥ prathamaḥ (pp. 2-5)
  - Paṭala ii: Mantrapaṭalo dvitīyaḥ (pp. 6-9)
  - Paṭala iii: Sarvatathāgatakāyavākcittahevajradevatāpaṭalas tṛtīyaḥ (pp. 10-13)
  - Paṭala iv: Abhiṣekapaṭalaś caturthaḥ (p. 14)
  - Paṭala v: Tattvapaṭalaḥ pañcamaḥ (pp. 14-17)
  - Paṭala vi: Caryāpaṭalaḥ ṣaṣṭhaḥ (pp. 18-19)
  - Paṭala vii: Chomāpaṭalaḥ saptamaḥ (pp. 20-23)
  - Paṭala viii: Yoginīcakro nāma mahāyoginīnāṃ melāpakapaṭalo 'ṣṭamaḥ (pp. 24-31)
  - Paṭala ix: Viśuddhipaṭalo navamaḥ (pp. 32-33)
  - Paṭala x: Abhiṣekapaṭalo daśamaḥ (pp. 34-39)
  - Paṭala xi: [Anukramaṇikāpaṭalaḥ] ekādaśaḥ (pp. 40-41)
- **SANSKRIT & TIBETAN TEXTS: PART II (Mahātantrarājamāyā, pp. 42-101):**
  - Paṭala i: Homanirṇayapratiṣṭhāpaṭalaḥ prathamaḥ (pp. 42-43)
  - Paṭala ii: Siddhinirṇayapaṭalo dvitīyaḥ (pp. 44-51)
  - Paṭala iii: Hevajrasarvatantranidānasandhyābhāṣāpaṭalas tṛtīyaḥ (pp. 52-61)
  - Paṭala iv: Hevajrasarvatantramudraṇapiṇḍārthapaṭalaś caturthaḥ (pp. 62-75)
  - Paṭala v: Hevajrābhyudayapaṭalaḥ pañcamaḥ (pp. 76-85)
  - Paṭala vi: Hevajrapaṭavidhānapaṭalaḥ ṣaṣṭhaḥ (pp. 86-87)
  - Paṭala vii: Bhojanapaṭalaḥ saptamaḥ (p. 88)
  - Paṭala viii: Vineyapaṭalo 'ṣṭamaḥ (pp. 88-89)
  - Paṭala ix: Mantroddhārapaṭalo navamaḥ (pp. 90-95)
  - Paṭala x: Jāpapaṭalo daśamaḥ (p. 96)
  - Paṭala xi: Sahajārthapaṭala ekādaśaḥ (pp. 96-97)
  - Paṭala xii: [Upasaṃhārapaṭalaḥ] dvādaśaḥ (pp. 98-101)
- **COMMENTARY & VOCABULARY (pp. 103-188):**
  - Yogaratnamālā by Kāṇha (pp. 103-159)
  - Vocabulary: Tibetan-Sanskrit-English (pp. 161-177) & Sanskrit-Tibetan (pp. 178-188)

### 3.2 โครงสร้างรหัส Dossier และการแมปปิ้งเข้าสู่รายงานวิจัย
- **Dossier กลาง (Master Umbrella):** `S-1959-snellgrove-02.md`  
  - *การนำไปใช้:* แมปปิ้งเข้าสู่ **บทที่ 1 (1.2, 1.3), บทที่ 2 (2.3, 2.4, 2.6), บทที่ 4 (4.1)**
- **Dossier รายปฏละและตัวบท (25 ฉบับ):**
  1. `S-1959-snellgrove-p2-pt1-pat01.md` (Pt I Paṭala 1, pp. 2-5) -> **2.4, 3.3** (ตัวบทสันสกฤต-ทิเบต กายเหวัชระ นาฑี 32 เส้น ลมปราณ)
  2. `S-1959-snellgrove-p2-pt1-pat02.md` (Pt I Paṭala 2, pp. 6-9) -> **2.4, 3.3** (มนตรปฏละ ตัวบทมนตราและอักขรวิธีสันสกฤตตันตระ)
  3. `S-1959-snellgrove-p2-pt1-pat03.md` (Pt I Paṭala 3, pp. 10-13) -> **2.4, 2.6** (เทวตาปฏละ มณฑลเทพบริวาร 8 ทิศ)
  4. `S-1959-snellgrove-p2-pt1-pat04.md` (Pt I Paṭala 4, p. 14) -> **2.4, 3.3** (อภิเษกปฏละ อภิเษก 4 ระดับในภาษาสันสกฤต)
  5. `S-1959-snellgrove-p2-pt1-pat05.md` (Pt I Paṭala 5, pp. 14-17) -> **2.3, 3.8** (ตัตตวปฏละ ตัวบทความจริงแท้ สหชานันทะ)
  6. `S-1959-snellgrove-p2-pt1-pat06.md` (Pt I Paṭala 6, pp. 18-19) -> **2.1, 2.4** (จรรยาปฏละ ข้อวัตรโยคี การข้ามพ้นมลทิน)
  7. `S-1959-snellgrove-p2-pt1-pat07.md` (Pt I Paṭala 7, pp. 20-23) -> **2.4, 3.2** (โฉมาปฏละ รหัสนัยและภาษามือตันตระ)
  8. `S-1959-snellgrove-p2-pt1-pat08.md` (Pt I Paṭala 8, pp. 24-31) -> **2.4, 2.6** (โยคินีจักรมหาโยคินีเมลปักปฏละ สังฆกรรมโยคินี)
  9. `S-1959-snellgrove-p2-pt1-pat09.md` (Pt I Paṭala 9, pp. 32-33) -> **2.4, 3.3** (วิสุทธิปฏละ วิสุทธิแห่งขันธ์และอายตนะ)
  10. `S-1959-snellgrove-p2-pt1-pat10.md` (Pt I Paṭala 10, pp. 34-39) -> **2.4, 3.1** (อภิเษกปฏละที่สอง การประสิทธิ์และการมอบสายคำสอน)
  11. `S-1959-snellgrove-p2-pt1-pat11.md` (Pt I Paṭala 11, pp. 40-41) -> **2.4, 3.5** (อนุกรมณิกาปฏละ ทรรศนะ 4 ประการ)
  12. `S-1959-snellgrove-p2-pt2-pat01.md` (Pt II Paṭala 1, pp. 42-43) -> **2.4, 3.7** (โหมนิรณยประดิษฐานปฏละ)
  13. `S-1959-snellgrove-p2-pt2-pat02.md` (Pt II Paṭala 2, pp. 44-51) -> **2.4, 3.5** (สิทธินิรณยปฏละ ตัวบทสิทธิการและฤทธิ์)
  14. `S-1959-snellgrove-p2-pt2-pat03.md` (Pt II Paṭala 3, pp. 52-61) -> **2.3, 2.4, 3.3** (เหวัชรสรวตันตรนิทานสนธยาภาษาปฏละ ตัวบทสนธยาภาษาฉบับสมบูรณ์)
  15. `S-1959-snellgrove-p2-pt2-pat04.md` (Pt II Paṭala 4, pp. 62-75) -> **2.3, 2.4, 3.8** (มุทราและปิณฑารถะ ปรัชญาอัทวยะ)
  16. `S-1959-snellgrove-p2-pt2-pat05.md` (Pt II Paṭala 5, pp. 76-85) -> **2.4, 2.6** (เหวัชราภยุทัยปฏละ มหามณฑลเหวัชระในเขมรและชวา)
  17. `S-1959-snellgrove-p2-pt2-pat06.md` (Pt II Paṭala 6, pp. 86-87) -> **2.4, 2.6, 3.7** (เหวัชรปฏวิธานปฏละ พิธีกรรมสร้างภาพพระบฏ)
  18. `S-1959-snellgrove-p2-pt2-pat07.md` (Pt II Paṭala 7, p. 88) -> **2.4, 3.2** (โภชนปฏละ โภชนาการและพิธีกานะ)
  19. `S-1959-snellgrove-p2-pt2-pat08.md` (Pt II Paṭala 8, pp. 88-89) -> **2.4, 3.5** (วิเนยปฏละ การทรมานสัตว์และเวไนยสัตว์)
  20. `S-1959-snellgrove-p2-pt2-pat09.md` (Pt II Paṭala 9, pp. 90-95) -> **2.4, 3.3** (มนโตรทธารปฏละ การสกัดและผูกมนตรา)
  21. `S-1959-snellgrove-p2-pt2-pat10.md` (Pt II Paṭala 10, p. 96) -> **2.4, 3.3** (ชปปฏละ การสวดบริกรรมภาวนา)
  22. `S-1959-snellgrove-p2-pt2-pat11.md` (Pt II Paṭala 11, pp. 96-97) -> **2.3, 3.8** (สหชารถปฏละ อรรถะแห่งสหชะ)
  23. `S-1959-snellgrove-p2-pt2-pat12.md` (Pt II Paṭala 12, pp. 98-101) -> **2.4, 3.3** (อุปสังหารปฏละ บทสรุปแห่งคัมภีร์)
  24. `S-1959-snellgrove-p2-yogaratnamala.md` (Yogaratnamālā, pp. 103-159) -> **2.3, 2.4, 3.3, 4.1** (อรรถกถาโยครัตนมาราของพระกาณหะ การอธิบายสรีรวิทยาภายในและโยคะเชิงลึก)
  25. `S-1959-snellgrove-p2-vocabulary.md` (Vocabulary, pp. 161-188) -> **2.4, 3.3, 4.1** (คลังศัพท์เปรียบเทียบ ทิเบต-สันสกฤต-อังกฤษ)

---

## 4. Alex Wayman (1973), *The Buddhist Tantras: Light on Indo-Tibetan Esotericism*
- **ไฟล์ PDF:** `1973-wayman-buddhist-tantras-indo-tibetan.pdf` (288 หน้า)
- **ไฟล์ข้อความสกัด:** `research-notes/extracted-texts/1973-wayman-buddhist-tantras-indo-tibetan.txt` (617,137 ไบต์, 14,069 บรรทัด)
- **สถานะ:** ตำราวิชาการมาตรฐานสากลว่าด้วยพุทธตันตระอินโด-ทิเบต ตีพิมพ์โดย Samuel Weiser (New York, 1973)

### 4.1 สารบัญฉบับเต็มและขอบเขตเลขหน้าจริง
- **Front Matter:** Preface (pp. xi-xiii)
- **PART I: INTRODUCTIONS (pp. 1-42):**
  - Chapter 1: Perfection of Insight: Buddhist Tantra within Mahayana Buddhism (pp. 3-11)
  - Chapter 2: Early Literary History of the Buddhist Tantras, especially the Guhyasamaja-tantra (pp. 12-23)
  - Chapter 3: Buddhist Genesis and the Tantric Tradition (pp. 24-29)
  - Chapter 4: Analogical Thinking in the Buddhist Tantras (pp. 30-35)
  - Chapter 5: The Nature of Buddhist Esotericism (pp. 36-42)
- **PART II: FOUNDATIONS OF THE BUDDHIST TANTRA (pp. 43-136):**
  - Chapter 6: Divinity according to the Buddhist Tantras (pp. 45-53)
  - Chapter 7: Preparation of Disciples; the Meaning of Initiation (pp. 54-70)
  - Chapter 8: Offering Materials and their Meanings (pp. 71-81)
  - Chapter 9: Symbolism of the Mandala-Palace (pp. 82-109)
  - Chapter 10: Tantric Ritual and Symbolism of its Attainments (pp. 110-127)
  - Chapter 11: Twilight Language and a Tantric Song (pp. 128-136)
- **PART III: SPECIAL STUDIES (pp. 137-224):**
  - Chapter 12: The Nine Orifices of the Body (pp. 139-150)
  - Chapter 13: Tantric Teachings about the Inner Zodiac (pp. 151-163)
  - Chapter 14: Female Energy and Symbolism in the Buddhist Tantras (pp. 164-201)
  - Chapter 15: The Five-fold Ritual Symbolism of Passion (pp. 202-224)
- **PART IV: BIBLIOGRAPHICAL RESEARCH (pp. 225-247):**
  - Chapter 16: Received Teachings of Tibet and Analysis of the Tantric Canon (pp. 225-240)
  - Index (pp. 241-247)

### 4.2 โครงสร้างรหัส Dossier และการแมปปิ้งเข้าสู่รายงานวิจัย
- **Dossier กลาง (Master Umbrella):** `S-1973-wayman-01.md`  
  - *การนำไปใช้:* แมปปิ้งเข้าสู่ **บทที่ 1 (1.1, 1.2, 1.3), บทที่ 2 (2.1, 2.3, 2.4), บทที่ 4 (4.2)**
- **Dossier รายบท (16 ฉบับ):**
  1. `S-1973-wayman-ch01-prajnaparamita.md` (Ch 1, pp. 3-11) -> **2.3, 1.1** (ปรัชญาปารมิตาในฐานะมารดาแห่งพุทธตันตระ การผสานมหายานเข้าสู่ตันตระ)
  2. `S-1973-wayman-ch02-literary-history.md` (Ch 2, pp. 12-23) -> **2.1, 2.3, 4.2** (ประวัติวรรณกรรมตันตระยุคแรก โดยเฉพาะคุหยสมาชตันตระและสายการสืบทอด)
  3. `S-1973-wayman-ch03-buddhist-genesis.md` (Ch 3, pp. 24-29) -> **2.4, 3.2, 3.3** (จักรวาลกำเนิดวิทยาพุทธเทียบเคียงอัคคัญญสูตรกับการวิวัฒน์ทางตันตระ)
  4. `S-1973-wayman-ch04-analogical-thinking.md` (Ch 4, pp. 30-35) -> **2.4, 3.3, 1.3** (ระบบการคิดเชิงอุปมาอุปไมย ตารางเทียบเคียงขันธ์ 5 ตระกูลพุทธ และธาตุ)
  5. `S-1973-wayman-ch05-nature-esotericism.md` (Ch 5, pp. 36-42) -> **1.1, 2.1, 3.8** (แก่นแท้ของพุทธรหัสยลัทธิ ความลับ 3 ประการ: กาย วาจา จิต)
  6. `S-1973-wayman-ch06-divinity.md` (Ch 6, pp. 45-53) -> **2.3, 2.4** (เทวสภาพในพุทธตันตระ สภาวะศูนยตาและการแปลงรูปจิตเป็นยิดัม)
  7. `S-1973-wayman-ch07-initiation.md` (Ch 7, pp. 54-70) -> **2.4, 3.1, 3.4** (การเตรียมศิษย์ ความหมายของอภิเษก การผูกพันสายวิชาและการรักษาคำสัตย์)
  8. `S-1973-wayman-ch08-offering-materials.md` (Ch 8, pp. 71-81) -> **2.4, 3.7** (เครื่องบูชาในตันตระ เครื่องในคนโฑน้ำ และนัยทางจิตวิญญาณ)
  9. `S-1973-wayman-ch09-mandala-palace.md` (Ch 9, pp. 82-109) -> **2.4, 2.5, 2.6, 3.7** (สัญลักษณ์ปราสาทมณฑล โครงสร้างสถาปัตยกรรมมณฑลในเอเชียตะวันออกเฉียงใต้)
  10. `S-1973-wayman-ch10-tantric-ritual.md` (Ch 10, pp. 110-127) -> **2.4, 3.5** (พิธีกรรมตันตระ การบรรลุผลสำเร็จทางจิต สมาธิ และมุทรา 4 ประการ)
  11. `S-1973-wayman-ch11-twilight-language.md` (Ch 11, pp. 128-136) -> **2.4, 3.2, 4.7** (สนธยาภาษาและการวิเคราะห์บทเพลงตันตระของสิทธา)
  12. `S-1973-wayman-ch12-nine-orifices.md` (Ch 12, pp. 139-150) -> **2.4, 3.3, 1.3** (ทวารทั้งเก้าของร่างกาย สรีรวิทยาเร้นลับ ดากินีปัญญา และทิศทางการเคลื่อนของจิต)
  13. `S-1973-wayman-ch13-inner-zodiac.md` (Ch 13, pp. 151-163) -> **2.4, 3.3** (จักรราศีภายใน ลมหายใจและกาลจักรภายในกายมนุษย์)
  14. `S-1973-wayman-ch14-female-energy.md` (Ch 14, pp. 164-201) -> **2.4, 3.3, 1.3** (พลังสตรี สัญลักษณ์ศักติ ปัญญา และโยคินีในพุทธตันตระ)
  15. `S-1973-wayman-ch15-passion-symbolism.md` (Ch 15, pp. 202-224) -> **2.4, 3.8** (สัญลักษณ์ 5 ประการแห่งราคะ การเปลี่ยนผ่านพลังอารมณ์สู่การตรัสรู้)
  16. `S-1973-wayman-ch16-tantric-canon.md` (Ch 16, pp. 225-240) -> **2.3, 4.2, 4.7** (การจัดหมวดหมู่คัมภีร์ตันตระในทิเบต กฤยา จรรยา โยคะ และอนุตตรโยคะตันตระ)

---

## 5. Alex Wayman (1977), *Yoga of the Guhyasamājatantra: The Arcane Lore of Forty Verses*
- **ไฟล์ PDF:** `1977-wayman-yoga-of-the-guhyasamajatantra.pdf` (412 หน้า)
- **ไฟล์ข้อความสกัด:** `research-notes/extracted-texts/1977-wayman-yoga-of-the-guhyasamajatantra.txt` (889,705 ไบต์, 21,706 บรรทัด)
- **สถานะ:** มหาคัมภีร์อรรถาธิบายโยคะคุหยสมาชตันตระผ่านคาถา 40 บท ตีพิมพ์โดย Motilal Banarsidass (Delhi, 1977)

### 5.1 สารบัญฉบับเต็มและขอบเขตเลขหน้าจริง
- **Front Matter:** Preface (pp. vii-x)
- **PART ONE: DOCUMENTS (pp. 3-52):**
  - Section I: The Guhyasamaja-nidana-karika (Sanskrit-Tibetan-English) (pp. 3-23)
  - Section II: Chapters VI and XII of the Guhyasamajatantra, translated into English (pp. 23-38)
  - Section III: Edited Pradipoddyotana commentary on Chapter XII, 60-64, and English translation (pp. 38-52)
- **PART TWO: INTRODUCTIONS (pp. 53-180):**
  - Section I: Introduction to Buddhist Tantrism (pp. 53-83)
    - A. Tantra (generalities), B. Definitions and varieties, C. Fundamentals, D. Winds and mantras, E. World of light
  - Section II: Introduction to the Guhyasamajatantra (pp. 84-138)
    - A. Texts, commentators, and history, B. Title and nidana, C. Seven ornaments, D. Forty verses, E. Mandala
  - Section III: Introduction to the Yoga of the Guhyasamaja system (pp. 139-180)
    - A. Chapters and yoga, B. Two stages, initiations, Clear Light, C. Utpatti-krama, D. Nispanna-krama, E. Grouping
- **PART THREE: COMMENTARY ON THE NIDANA KARIKAS (pp. 181-332):**
  - Section I: The Stage of Generation (Utpatti-krama, pp. 181-258)
    - A. Evam maya srutam (pp. 181-198), B. Ekasmin samaye (pp. 199-222), C. Bhagavan sarva (pp. 223-243), D. Tathagata (pp. 244-258)
  - Section II: The Stage of Completion (Nispanna-krama, pp. 259-332)
    - E. Kayavakcitta (pp. 259-283), F. Hrdaya-vajrayosid (pp. 284-309), G. Bhage-su vijahara (pp. 310-332)
- **APPENDICES (pp. 333-363):**
  - Appendix I: The Lankavatarasutra and the Guhyasamajatantra (pp. 333-339)
  - Appendix II: The Arcane-Body Controversy (pp. 340-348)
  - Appendix III: The Praxis according to Aryadeva (pp. 349-360)
  - Appendix IV: Grading of the Four-Stage Yoga (pp. 361-363)
- **END MATTER:** Bibliography (pp. 365-372), Index (pp. 373-388)

### 5.2 โครงสร้างรหัส Dossier และการแมปปิ้งเข้าสู่รายงานวิจัย
- **Dossier กลาง (Master Umbrella):** `S-1977-wayman-02.md`  
  - *การนำไปใช้:* แมปปิ้งเข้าสู่ **บทที่ 1 (1.2, 1.3), บทที่ 2 (2.3, 2.4), บทที่ 4 (4.2)**
- **Dossier รายภาคและหมวดหลัก (12 ฉบับ):**
  1. `S-1977-wayman-p1-ch01-nidana-karika.md` (Part One Sec I, pp. 3-23) -> **2.3, 2.4, 3.3** (คาถานิทาน 40 บท สันสกฤต-ทิเบต-อังกฤษ ถอดรหัสแต่ละพยางค์ของ "เอวัง มยา สุตัง...")
  2. `S-1977-wayman-p1-ch02-ch06-12-translation.md` (Part One Sec II, pp. 23-38) -> **2.4, 3.3** (คำแปลบทที่ 6 และ 12 คุหยสมาชตันตระ หัวใจแห่งโยคะ กาย วาจา จิต)
  3. `S-1977-wayman-p1-ch03-pradipoddyotana.md` (Part One Sec III, pp. 38-52) -> **2.4, 3.3, 4.2** (อรรถกถาประทีโปทโยตนะของจันทรกีรติ โยคะ 6 อณู และความสว่างกระจ่างแจ้ง [Clear Light])
  4. `S-1977-wayman-p2-ch01-intro-tantrism.md` (Part Two Sec I, pp. 53-83) -> **2.1, 2.3, 2.4** (บทนำสู่ตันตริก ลมปราณและมนตรา โลกแห่งแสงสว่าง [World of Light])
  5. `S-1977-wayman-p2-ch02-intro-guhyasamaja.md` (Part Two Sec II, pp. 84-138) -> **2.1, 2.3, 2.4** (ประวัติวรรณกรรมคุหยสมาช อลงกรณ์ 7 ประการ มณฑลอักษโภภยะ)
  6. `S-1977-wayman-p2-ch03-intro-yoga-system.md` (Part Two Sec III, pp. 139-180) -> **2.4, 3.3, 1.3** (ระบบโยคะสองขั้น: ขั้นก่อรูป [Utpatti-krama] และขั้นสมบูรณ์ [Nispanna-krama], โยคาพยพ 6)
  7. `S-1977-wayman-p3-ch01-utpattikrama.md` (Part Three Sec I, pp. 181-258) -> **2.4, 3.3, 1.3** (อรรถาธิบายขั้นก่อรูป: การสร้างนิมิตพระพุทธเจ้า มณฑลภายใน และมหายานสู่ตันตระ)
  8. `S-1977-wayman-p3-ch02-nispannakrama.md` (Part Three Sec II, pp. 259-332) -> **2.4, 3.3, 1.3** (อรรถาธิบายขั้นสมบูรณ์: กาย วาจา จิตเร้นลับ สตรีเพชรแห่งหทัย การเสพสัจธรรมในภคะ แสงสว่างสากล)
  9. `S-1977-wayman-app01-lankavatara.md` (Appendix I, pp. 333-339) -> **2.3, 3.2, 3.8** (ความสัมพันธ์ระหว่างลังกาวตารสูตรกับคุหยสมาชตันตระ โยคะ 4 ขั้น)
  10. `S-1977-wayman-app02-arcane-body.md` (Appendix II, pp. 340-348) -> **2.4, 3.3, 1.3** (ข้อถกเถียงเรื่อง "กายเร้นลับ" [Arcane Body] การก่อกำเนิดกายทิพย์ในครรภ์และจิต)
  11. `S-1977-wayman-app03-aryadeva-praxis.md` (Appendix III, pp. 349-360) -> **2.4, 3.3, 3.4** (ข้อปฏิบัติโยคะตามทัศนะพระอารยเทวะ สวาธิษฐานนิยม)
  12. `S-1977-wayman-app04-four-stage-yoga.md` (Appendix IV, pp. 361-363) -> **2.4, 3.3** (การจัดลำดับชั้นโยคะ 4 ขั้น: เสวา, อุปสาธนะ, สาธนะ, มหาสาธนะ)

---

## 6. Jonathan A. Silk & Péter-Dániel Szántó (2019), *Trans-Sectual Identity: Materials for the Study of the Praśnottararatnamālikā*
- **ไฟล์ PDF:** `2019-szanto-tantric-lineage-initiatory-identity.pdf` (59 หน้า)
- **ไฟล์ข้อความสกัด:** `research-notes/extracted-texts/2019-szanto-tantric-lineage-initiatory-identity.txt` (128,379 ไบต์, Indo-Iranian Journal 62, pp. 103-161)
- **สถานะ:** งานวิจัยชิ้นเอกด้านวรรณกรรมข้ามสาย (Trans-sectarian) ศึกษาคัมภีร์ "ปรัศโนตตรรัตนมาลิกา" (ปุจฉา-วิสัชนาแก้วมณี 62 ข้อ) ที่สืบทอดร่วมกันในจารีตฮินดู ชัยนะ และพุทธ

### 6.1 สารบัญฉบับเต็มและขอบเขตเลขหน้าจริง
- **Title, Abstract, Keywords, Introduction:** pp. 103-104 (PDF pp. 1-2)
- **Section 1: History of Study:** pp. 104-107 (PDF pp. 2-5)
- **Section 2: Sanskrit Manuscript Sources:** pp. 107-109 (PDF pp. 5-7)
- **Section 3: The Tibetan Translation:** pp. 109-116 (PDF pp. 7-14)
- **Section 4: The Prakrit Text:** p. 116 (PDF p. 14)
- **Section 5: Title:** pp. 116-117 (PDF pp. 14-15)
- **Section 6: Authorship Attributions:** pp. 117-122 (PDF pp. 15-20)
- **Section 7: Commentaries:** pp. 122-123 (PDF pp. 20-21)
- **Section 8: Sectarian Orientation:** pp. 123-125 (PDF pp. 21-23)
- **Section 9: Editions and Translation (Conventions):** pp. 125-127 (PDF pp. 23-25)
- **Section 10: The Praśnottararatnamālikā: Critical Edition and Translation:** pp. 127-152 (PDF pp. 25-50)
- **APPENDICES:**
  - Appendix 1: The Tibetan Text of Schiefner (pp. 152-153 / PDF pp. 50-51)
  - Appendix 2: Extra Verses in N / Other MSS (pp. 153-155 / PDF pp. 51-53)
- **REFERENCES:** pp. 156-161 (PDF pp. 54-59)

### 6.2 โครงสร้างรหัส Dossier และการแมปปิ้งเข้าสู่รายงานวิจัย
- **Dossier กลาง (Master Umbrella):** `S-2019-silk-szanto-01.md`  
  - *การนำไปใช้:* แมปปิ้งเข้าสู่ **บทที่ 1 (1.2, 1.7), บทที่ 2 (2.2, 2.8), บทที่ 4 (4.4, 4.7)**
- **Dossier รายหมวดเนื้อหา (4 ฉบับ):**
  1. `S-2019-silk-szanto-sec01-05-sources.md` (Sec 1-5, pp. 104-117) -> **4.4, 4.7, 2.2** (ประวัติการศึกษา เอกสารตัวเขียนสันสกฤต ทิเบต และปรากฤต ปัญหาการระบุชื่อคัมภีร์)
  2. `S-2019-silk-szanto-sec06-08-authorship-sectarian.md` (Sec 6-8, pp. 117-125) -> **2.2, 2.8, 3.8, 4.7** (การแย่งชิงความชอบธรรมของสังฆกรรม: ศังกราจารย์, อโมฆวรรษ ชัยนะ, หรือพุทธ ปรากฏการณ์ Trans-sectarian Catechism)
  3. `S-2019-silk-szanto-sec09-10-critical-edition.md` (Sec 9-10, pp. 125-152) -> **2.2, 3.2, 3.8** (ชำระตัวบทสันสกฤต-ทิเบต 27 คาถา 62 ปุจฉาวิสัชนาเรื่องปัญญา ศีลธรรม และจิตวิญญาณ)
  4. `S-2019-silk-szanto-appendices.md` (Appendices & References, pp. 152-161) -> **4.4, 4.7** (ตัวบททิเบตสาย Schiefner คาถาเสริมในเอกสารเนปาล และบรรณานุกรมเปรียบเทียบ)

---

## 7. A.P. Sinnett (1883), *Esoteric Buddhism*
- **ไฟล์ PDF:** `1883-sinnett-esoteric-buddhism.pdf` (358 หน้า)
- **ไฟล์ข้อความสกัด:** `research-notes/extracted-texts/1883-sinnett-esoteric-buddhism.txt` (470,680 ไบต์, 11,463 บรรทัด)
- **สถานะ:** งานตีพิมพ์หมุดหมายประวัติศาสตร์ ค.ศ. 1883 จุดเริ่มต้นของการใช้คำว่า "Esoteric Buddhism" ในโลกตะวันตกภายใต้อิทธิพลขบวนการเทวญาณวิทยา (Theosophy)

### 7.1 สารบัญฉบับเต็มและขอบเขตเลขหน้าจริง
- **Front Matter:** Preface to 1st Edition (pp. 5-11 / PDF pp. 13-19), Preface to American Edition (pp. 13-33 / PDF pp. 21-41), Contents (pp. 37-40 / PDF pp. 45-48)
- **CHAPTERS:**
  - Chapter I: Esoteric Teachers (pp. 41-59 / PDF pp. 49-67)
  - Chapter II: The Constitution of Man (pp. 60-74 / PDF pp. 68-82)
  - Chapter III: The Planetary Chain (pp. 75-93 / PDF pp. 83-101)
  - Chapter IV: The World Periods (pp. 94-120 / PDF pp. 102-128)
  - Chapter V: Devachan (pp. 121-149 / PDF pp. 129-157)
  - Chapter VI: Kama Loca (pp. 150-170 / PDF pp. 158-178)
  - Chapter VII: The Human Tide-Wave (pp. 171-187 / PDF pp. 179-195)
  - Chapter VIII: The Progress of Humanity (pp. 188-208 / PDF pp. 196-216)
  - Chapter IX: Buddha (pp. 209-232 / PDF pp. 217-240)
  - Chapter X: Nirvana (pp. 233-245 / PDF pp. 241-253)
  - Chapter XI: The Universe (pp. 246-264 / PDF pp. 254-272)
  - Chapter XII: The Doctrine Reviewed (pp. 265-300 / PDF pp. 273-308)
- **APPENDIX:** Notes to Chapters I, III, VII (pp. 301-330 / PDF pp. 309-338)

### 7.2 โครงสร้างรหัส Dossier และการแมปปิ้งเข้าสู่รายงานวิจัย
- **Dossier กลาง (Master Umbrella):** `S-1883-sinnett-01.md`  
  - *การนำไปใช้:* แมปปิ้งเข้าสู่ **บทที่ 1 (1.1, 1.4), บทที่ 4 (4.1, 4.7)**
- **Dossier รายบทและภาคผนวก (14 ฉบับ):**
  1. `S-1883-sinnett-prefaces.md` (Prefaces 1st & American Ed., pp. 5-33) -> **4.1, 4.7** (บริบทการเปิดเผยคำสอนเร้นลับ ข้ออ้างเรื่องสารจากมหาตมะแห่งหิมาลัย)
  2. `S-1883-sinnett-ch01-teachers.md` (Ch I, pp. 41-59) -> **4.1, 4.7, 1.1** (มโนทัศน์เรื่อง "Esoteric Teachers", พระอรหันต์ มหาตมะ โยคี และการฝึกฝนศาสตร์ลี้ลับ)
  3. `S-1883-sinnett-ch02-constitution-of-man.md` (Ch II, pp. 60-74) -> **4.1, 4.7, 1.3** (ทฤษฎีหลักการ 7 ชั้นของมนุษย์ [Seven Principles] การดัดแปลงสรีรวิทยาอินเดียสู่ระบบเทวญาณวิทยา)
  4. `S-1883-sinnett-ch03-planetary-chain.md` (Ch III, pp. 75-93) -> **4.1, 4.7** (สายโซ่พิภพ [Planetary Chain] และวิวัฒนาการจักรวาล)
  5. `S-1883-sinnett-ch04-world-periods.md` (Ch IV, pp. 94-120) -> **4.1, 4.7** (ยุคสมัยของโลก รอบวิวัฒนาการและเผ่าพันธุ์มนุษย์ กฎวงจรธรรมชาติ)
  6. `S-1883-sinnett-ch05-devachan.md` (Ch V, pp. 121-149) -> **4.1, 4.7** (เทวาจันทร์ [Devachan] สภาวะจิตหลังความตาย กรรม และการพักคอยของดวงวิญญาณ)
  7. `S-1883-sinnett-ch06-kama-loca.md` (Ch VI, pp. 150-170) -> **4.1, 4.7** (กามโลก [Kama Loca] ปลอกกายทิพย์ [Astral Shell] และวิญญาณตกค้าง)
  8. `S-1883-sinnett-ch07-human-tide-wave.md` (Ch VII, pp. 171-187) -> **4.1, 4.7** (คลื่นมนุษยชาติ วิวัฒนาการข้ามดวงดาว การกลับชาติมาเกิด)
  9. `S-1883-sinnett-ch08-progress-humanity.md` (Ch VIII, pp. 188-208) -> **4.1, 4.7** (พัฒนาการของมนุษยชาติ จุดเปลี่ยนผ่านระหว่างจิตวิญญาณกับปัญญา)
  10. `S-1883-sinnett-ch09-buddha.md` (Ch IX, pp. 209-232) -> **4.1, 4.7, 1.1** (พระพุทธเจ้าในมุมมองเทวญาณวิทยา อวตารแห่งพระอวโลกิเตศวร ศังกราจารย์ และซงคาปา)
  11. `S-1883-sinnett-ch10-nirvana.md` (Ch X, pp. 233-245) -> **4.1, 4.7** (นิพพานและปรินิพพานในฐานะจุดหมายสูงสุดแห่งการวิวัฒน์ทางจิต)
  12. `S-1883-sinnett-ch11-universe.md` (Ch XI, pp. 246-264) -> **4.1, 4.7** (วันและคืนแห่งพระพรหม มหาปรลัย และการสร้างสรรค์จักรวาล)
  13. `S-1883-sinnett-ch12-doctrine-reviewed.md` (Ch XII, pp. 265-300) -> **4.1, 4.7, 1.4** (การทบทวนคำสอน: ความบิดเบือนของวิชาการตะวันตกยุคแรก และปัญหาการใช้คำว่า "Esoteric Buddhism")
  14. `S-1883-sinnett-appendix.md` (Appendix, pp. 301-330) -> **4.1, 4.7** (บันทึกอธิบายเพิ่มเติมประจำบทที่ 1, 3, และ 7 ชี้แจงข้อวิพากษ์วิจารณ์)

---

## ตารางประมวลผลการแมปปิ้ง Dossier เข้าสู่ 4 บทและ 31 หัวข้อย่อยของโครงการ

| รหัสบทวิจัย | หัวข้อย่อยในโครงสร้างรายงาน | Dossiers ของ Team 4 ที่ถูกแมปปิ้งเข้าไปสนับสนุนหลัก |
|:---|:---|:---|
| **บทที่ 1** | **1.1 มโนทัศน์แม่บทและการคลี่คลายของชื่อเรียก** | `S-1883-sinnett-01`, `S-1883-sinnett-ch01-teachers`, `S-1883-sinnett-ch09-buddha`, `S-1973-wayman-01`, `S-1973-wayman-ch05-nature-esotericism`, `S-1946-dasgupta-01` |
| | **1.2 สังเคราะห์โครงสร้างความเชื่อมโยงอินเดียสู่อุษาคเนย์** | `S-1946-dasgupta-01`, `S-1946-dasgupta-ch01-sahajiya-growth`, `S-1959-snellgrove-01`, `S-1959-snellgrove-02`, `S-1973-wayman-01`, `S-1977-wayman-02`, `S-2019-silk-szanto-01` |
| | **1.3 สัณฐานวิทยาเชิงสรีรวิทยาและอักขรวิทยา (กาย จิต ธาตุ)** | `S-1946-dasgupta-ch04-kaya-sadhana-mahasukha`, `S-1959-snellgrove-p1-pt1-ch01-body`, `S-1973-wayman-ch04-analogical-thinking`, `S-1973-wayman-ch12-nine-orifices`, `S-1973-wayman-ch14-female-energy`, `S-1977-wayman-p2-ch03-intro-yoga-system`, `S-1977-wayman-p3-ch01-utpattikrama`, `S-1977-wayman-p3-ch02-nispannakrama`, `S-1977-wayman-app02-arcane-body` |
| | **1.4 การปะทะสังสรรค์จารีตโบราณกับการปฏิรูปสมัยใหม่** | `S-1883-sinnett-01`, `S-1883-sinnett-ch12-doctrine-reviewed` |
| | **1.5 ภาพสะท้อนของขบวนการที่มีชีวิตในโลกร่วมสมัย** | `S-1946-dasgupta-ch07-bauls-of-bengal` |
| | **1.7 สรุปประมวลบูรณาการเชิงปรัชญาและประวัติศาสตร์** | `S-2019-silk-szanto-01`, `S-1946-dasgupta-01`, `S-1977-wayman-02` |
| **บทที่ 2** | **2.1 รากเหง้าประวัติศาสตร์และสังคมวัฒนธรรมอินเดียโบราณ** | `S-1946-dasgupta-01`, `S-1946-dasgupta-ch01-sahajiya-growth`, `S-1946-dasgupta-ch03-sahajiya-religious-outlook`, `S-1946-dasgupta-ch08-nath-legends-history`, `S-1946-dasgupta-appC-nath-personalities`, `S-1959-snellgrove-p1-intro`, `S-1959-snellgrove-p1-pt1-ch06-performance`, `S-1973-wayman-01`, `S-1973-wayman-ch02-literary-history`, `S-1977-wayman-p2-ch01-intro-tantrism`, `S-1977-wayman-p2-ch02-intro-guhyasamaja` |
| | **2.2 ปฏิสัมพันธ์ข้ามสายระหว่างไศวะและพุทธ (The Saiva Age)** | `S-1946-dasgupta-ch05-vaisnava-sahajiya`, `S-1946-dasgupta-ch06-nonsectarian-psychology`, `S-1946-dasgupta-ch08-nath-legends-history`, `S-1946-dasgupta-appB-nath-literature`, `S-2019-silk-szanto-01`, `S-2019-silk-szanto-sec01-05-sources`, `S-2019-silk-szanto-sec06-08-authorship-sectarian`, `S-2019-silk-szanto-sec09-10-critical-edition` |
| | **2.3 พัฒนาการพุทธตันตระ (มนตรยาน วัชรยาน สหชยาน กาลจักร)** | `S-1946-dasgupta-ch01-sahajiya-growth`, `S-1946-dasgupta-ch02-caryapada-philosophy`, `S-1946-dasgupta-ch03-sahajiya-religious-outlook`, `S-1946-dasgupta-ch11-dharma-conceptions`, `S-1959-snellgrove-01`, `S-1959-snellgrove-02`, `S-1959-snellgrove-p1-intro`, `S-1959-snellgrove-p1-pt1-ch05-reality`, `S-1959-snellgrove-p1-pt2-ch03-basis-of-tantras`, `S-1959-snellgrove-p1-pt2-ch04-questions`, `S-1959-snellgrove-p1-pt2-ch11-five-families`, `S-1959-snellgrove-p2-yogaratnamala`, `S-1973-wayman-ch01-prajnaparamita`, `S-1973-wayman-ch02-literary-history`, `S-1973-wayman-ch06-divinity`, `S-1973-wayman-ch16-tantric-canon`, `S-1977-wayman-p1-ch01-nidana-karika`, `S-1977-wayman-p2-ch01-intro-tantrism`, `S-1977-wayman-p2-ch02-intro-guhyasamaja`, `S-1977-wayman-app01-lankavatara` |
| | **2.4 สรีรวิทยาเร้นลับและเทคโนโลยีพิธีกรรม (จักระ นาฑี มณฑล)** | `S-1946-dasgupta-ch04-kaya-sadhana-mahasukha`, `S-1946-dasgupta-ch06-nonsectarian-psychology`, `S-1946-dasgupta-ch09-nath-siddha-religion`, `S-1946-dasgupta-ch13-panditas-tathagatas`, `S-1946-dasgupta-ch14-cosmogony-cosmology`, `S-1946-dasgupta-appE-enigmatic-language`, `S-1959-snellgrove-p1-pt1-ch01-body` ถึง `ch11-four-gazes`, `S-1959-snellgrove-p1-pt2-ch01` ถึง `ch12`, `S-1959-snellgrove-p2-pt1-pat01` ถึง `pat11`, `S-1959-snellgrove-p2-pt2-pat01` ถึง `pat12`, `S-1959-snellgrove-p2-yogaratnamala`, `S-1973-wayman-ch04-analogical-thinking`, `S-1973-wayman-ch07-initiation` ถึง `ch15-passion-symbolism`, `S-1977-wayman-p1-ch01` ถึง `p3-ch02`, `S-1977-wayman-app02-arcane-body`, `S-1977-wayman-app03-aryadeva-praxis`, `S-1977-wayman-app04-four-stage-yoga` |
| | **2.5 การส่งออกข้ามแดนผ่านเครือข่ายทางทะเลสู่อุษาคเนย์** | `S-1959-snellgrove-01`, `S-1973-wayman-ch09-mandala-palace` |
| | **2.6 พุทธ-ฮินดูตันตระในชวา สุมาตรา และเขมรโบราณ** | `S-1959-snellgrove-p1-pt1-ch03-troupe`, `S-1959-snellgrove-p1-pt1-ch08-yoginis`, `S-1959-snellgrove-p1-pt2-ch05-manifestation`, `S-1959-snellgrove-p1-pt2-ch06-painting`, `S-1959-snellgrove-p2-pt2-pat05`, `S-1973-wayman-ch09-mandala-palace` |
| | **2.7 การเปลี่ยนผ่านหลังศตวรรษที่ 13 (การปรับแปลงและการแฝงตัว)** | `S-1946-dasgupta-ch05-vaisnava-sahajiya`, `S-1946-dasgupta-ch07-bauls-of-bengal`, `S-1946-dasgupta-ch10-dharma-cult-nature` ถึง `ch14-cosmogony-cosmology`, `S-1946-dasgupta-appA-mediaeval-saints`, `S-1946-dasgupta-appD-dharma-literature` |
| | **2.8 สรุปบทเรียนประวัติศาสตร์และสายธารสู่ SEA แผ่นดินใหญ่** | `S-2019-silk-szanto-01`, `S-2019-silk-szanto-sec06-08-authorship-sectarian` |
| **บทที่ 3** | **3.1 ภูมิหลังการเข้ามาและการสถาปนาเถรวาทจารีตก่อนยุคปฏิรูป** | `S-1959-snellgrove-p1-pt1-ch10-consecration`, `S-1973-wayman-ch07-initiation`, `S-1946-dasgupta-ch10-dharma-cult-nature` |
| | **3.2 คัมภีร์และวรรณกรรมสำคัญ (คู่มือโยคาวจร, ธรรมกายโบราณ)** | `S-1946-dasgupta-ch02-caryapada-philosophy`, `S-1946-dasgupta-ch12-dharma-literature`, `S-1946-dasgupta-ch14-cosmogony-cosmology`, `S-1946-dasgupta-appB-nath-literature`, `S-1946-dasgupta-appE-enigmatic-language`, `S-1959-snellgrove-p1-pt1-ch07-secret-signs`, `S-1959-snellgrove-p1-pt2-ch07-books-feasting`, `S-1973-wayman-ch03-buddhist-genesis`, `S-1973-wayman-ch11-twilight-language`, `S-1977-wayman-app01-lankavatara`, `S-2019-silk-szanto-sec09-10-critical-edition` |
| | **3.3 สรีรวิทยาการภาวนา (สัททวิทยา อักษรศักดิ์สิทธิ์ คัพภวิทยาเชิงธรรม)** | `S-1946-dasgupta-ch04-kaya-sadhana-mahasukha`, `S-1946-dasgupta-ch09-nath-siddha-religion`, `S-1946-dasgupta-ch13-panditas-tathagatas`, `S-1946-dasgupta-ch14-cosmogony-cosmology`, `S-1959-snellgrove-p1-pt1-ch01-body`, `S-1959-snellgrove-p1-pt1-ch02-mantras`, `S-1959-snellgrove-p1-pt1-ch04-self-consecration`, `S-1959-snellgrove-p1-pt1-ch09-purification`, `S-1959-snellgrove-p1-pt2-ch03-basis-of-tantras`, `S-1959-snellgrove-p1-pt2-ch09-mantras`, `S-1959-snellgrove-p1-pt2-ch10-recitation`, `S-1959-snellgrove-p1-pt2-ch11-five-families`, `S-1959-snellgrove-p1-pt2-ch12-four-consecrations`, `S-1959-snellgrove-p2-pt1-pat01` ถึง `pat11`, `S-1959-snellgrove-p2-yogaratnamala`, `S-1973-wayman-ch03-buddhist-genesis`, `S-1973-wayman-ch04-analogical-thinking`, `S-1973-wayman-ch12-nine-orifices`, `S-1973-wayman-ch13-inner-zodiac`, `S-1973-wayman-ch14-female-energy`, `S-1977-wayman-p1-ch01-nidana-karika`, `S-1977-wayman-p1-ch02-ch06-12-translation`, `S-1977-wayman-p1-ch03-pradipoddyotana`, `S-1977-wayman-p2-ch03-intro-yoga-system`, `S-1977-wayman-p3-ch01-utpattikrama`, `S-1977-wayman-p3-ch02-nispannakrama`, `S-1977-wayman-app02-arcane-body`, `S-1977-wayman-app03-aryadeva-praxis`, `S-1977-wayman-app04-four-stage-yoga` |
| | **3.4 สายธารการสืบทอดในสยามและล้านนา (กรรมฐานมัชฌิมาลำดับ)** | `S-1973-wayman-ch07-initiation`, `S-1977-wayman-app03-aryadeva-praxis` |
| | **3.5 ธรรมเนียมเขมร ลาว พม่า (จารีต Kru, ขบวนการเวชชา)** | `S-1946-dasgupta-ch07-bauls-of-bengal`, `S-1946-dasgupta-ch09-nath-siddha-religion` (เปรียบเทียบสิทธิการและเวชชา), `S-1946-dasgupta-appC-nath-personalities`, `S-1959-snellgrove-p1-pt1-ch11-four-gazes`, `S-1959-snellgrove-p1-pt2-ch02-siddhi`, `S-1959-snellgrove-p1-pt2-ch08-subjugating`, `S-1973-wayman-ch10-tantric-ritual` |
| | **3.7 การดำรงอยู่และการฟื้นคืนในโลกร่วมสมัย (พระเครื่อง, วิชชาธรรมกาย)** | `S-1959-snellgrove-p1-pt2-ch01-oblations`, `S-1959-snellgrove-p1-pt2-ch06-painting`, `S-1973-wayman-ch08-offering-materials`, `S-1973-wayman-ch09-mandala-palace` |
| | **3.8 สรุปสัณฐานวิทยาของพุทธศาสนาลี้ลับสายใต้** | `S-1946-dasgupta-ch11-dharma-conceptions`, `S-1959-snellgrove-p1-pt1-ch05-reality`, `S-1959-snellgrove-p1-pt2-ch04-questions`, `S-1959-snellgrove-p1-pt2-ch12-four-consecrations`, `S-1973-wayman-ch05-nature-esotericism`, `S-1973-wayman-ch15-passion-symbolism`, `S-1977-wayman-app01-lankavatara`, `S-2019-silk-szanto-sec06-08-authorship-sectarian` |
| **บทที่ 4** | **4.1 ยุคบุกเบิกแห่งการค้นพบเอกสาร (1890s-1950s)** | `S-1883-sinnett-01`, `S-1883-sinnett-prefaces`, `S-1883-sinnett-ch01-teachers` ถึง `ch12-doctrine-reviewed`, `S-1883-sinnett-appendix`, `S-1946-dasgupta-01`, `S-1946-dasgupta-ch01-sahajiya-growth`, `S-1946-dasgupta-ch03-sahajiya-religious-outlook`, `S-1946-dasgupta-appA-mediaeval-saints`, `S-1959-snellgrove-01`, `S-1959-snellgrove-02`, `S-1959-snellgrove-p1-intro`, `S-1959-snellgrove-p2-yogaratnamala` |
| | **4.2 ยุคการปฏิวัติทัศนะทางวิชาการ (1960s-1980s)** | `S-1973-wayman-01`, `S-1973-wayman-ch02-literary-history`, `S-1973-wayman-ch16-tantric-canon`, `S-1977-wayman-02`, `S-1977-wayman-p1-ch03-pradipoddyotana`, `S-1977-wayman-p2-ch02-intro-guhyasamaja` |
| | **4.4 การสังเคราะห์ร่วมสมัยและพุทธศาสนานิพนธ์ (2000s-2010s)** | `S-2019-silk-szanto-01`, `S-2019-silk-szanto-sec01-05-sources`, `S-2019-silk-szanto-appendices` |
| | **4.7 การวิเคราะห์ช่องว่าง ข้อจำกัด และข้อถกเถียงที่ยังไม่ยุติ** | `S-1883-sinnett-01`, `S-1883-sinnett-prefaces`, `S-1883-sinnett-ch01-teachers`, `S-1883-sinnett-ch12-doctrine-reviewed`, `S-1883-sinnett-appendix` (การวิเคราะห์วิพากษ์ไบแอสและภาพแทนของเทวญาณวิทยา), `S-1946-dasgupta-appE-enigmatic-language`, `S-1959-snellgrove-p1-pt1-ch07-secret-signs`, `S-1973-wayman-ch11-twilight-language`, `S-1973-wayman-ch16-tantric-canon`, `S-2019-silk-szanto-01`, `S-2019-silk-szanto-sec06-08-authorship-sectarian` (ข้อถกเถียงเรื่อง Trans-sectarian Catechism ข้ามสายฮินดู-ชัยนะ-พุทธ) |

---
*เอกสารนี้จัดทำขึ้นโดย Sub-Agent ทีมที่ 4 (Team 4 Specialist) เพื่อเป็นพิมพ์เขียวแม่บทสำหรับการจัดทำ Source Analysis Dossiers ครบถ้วน 100% ตามกฎเกณฑ์เคร่งครัดของโครงการ*



---

# ภาคผนวกแผนแม่บทส่วนที่ 7: ทีมที่ 5: หมวดสายพม่า พุกาม อริ เวกซา และล้านนา (Burma, Ari, Weikza & Lanna Traditions)

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


---

# ภาคผนวกแผนแม่บทส่วนที่ 8: ทีมที่ 6: หมวดสายชวา บุโรพุทโธ กัมพูชา และจารึกโบราณ (Maritime Java, Borobudur & Cambodian Traditions)

รายงานผลการวิเคราะห์สารบัญ โครงสร้างตัวบทจริง และการวางแผนจัดทำ Source Analysis Dossiers แบบแยกรายบท 100%
โดย Sub-Agent ทีมที่ 6 (Team 6: Maritime Asia, Java, Borobudur & Cambodian Traditions Specialist)
โครงการวิจัย: เถรวาทตันตระ หรือเถรวาทแบบเซาท์อีสเอเชีย: กำเนิด พัฒนาการ การดำรงอยู่ และสถานภาพการศึกษาทางประวัติศาสตร์นิพนธ์

เรียน Lead Agent:

ตามคำสั่งกำหนดให้หนังสือ 1 เล่มที่มีหลายบทจะต้องจัดทำ Dossier แยกเป็น "1 Dossier กลาง (Master Umbrella Dossier)" และ "1 Dossier ประจำบทสำหรับทุกบทในเล่ม (ห้ามเลือกตัดเฉพาะบางบทโดยเด็ดขาด 100% Chapter Coverage)" ทีมที่ 6 ได้เข้าตรวจสอบสารบัญ โครงสร้างบรรณนิยม และไฟล์ตัวบทจริงใน extracted-texts และ pdf สำหรับตำราสายชวา บุโรพุทโธ กัมพูชา และจารึกโบราณครบทั้ง 7 เล่มเรียบร้อยแล้ว ขอรายงานผลการจัดโครงสร้าง Dossier และการแมปปิ้งสู่รายงานวิจัยแม่บท (บทที่ 1 ถึงบทที่ 4 หัวข้อย่อย 1.1 - 4.8) ดังรายละเอียดต่อไปนี้

======================================================================
1. N. J. Krom (1927) Barabudur: Archaeological Description (Volume II)
======================================================================
ข้อมูลบรรณานุกรม:
- ชื่อหนังสือ: Barabudur: Archaeological Description (Volume II)
- ผู้แต่ง: Nicolaas Johannes Krom
- สำนักพิมพ์: The Hague: Martinus Nijhoff, 1927
- จำนวนหน้าตาม PDF: 371 หน้า (เล่มที่ 2 ภาคตัวบทและคำบรรยายทางโบราณคดี)
- ความสำคัญ: งานศึกษาแม่บทระดับคลาสสิกของโบราณคดีชวา อธิบายภาพสลักคัณฑวยูหสูตร ไมเตรยะ สมันตภัทร พระธยานิพุทธ และการวิเคราะห์ระบบพุทธศาสนาของบุโรพุทโธในฐานะมณฑลวัชรธาตุ

สารบัญฉบับเต็มครบทุกบท:
- Front Matter & Summary of Plates: หน้า i–iv (PDF หน้า 1–4)
- Chapter VII: The Gaṇḍavyūha (Second gallery, chief wall), หน้า 1–64 (PDF หน้า 5–68)
- Chapter VIII: Maitreya and Samantabhadra (Third and fourth gallery, chief wall), หน้า 65–115 (PDF หน้า 69–119)
- Chapter IX: Tales of Maitreya and Other Bodhisattvas (Third and fourth gallery, balustrade), หน้า 116–143 (PDF หน้า 120–147)
- Chapter X: The Dhyāni-Buddhas and the Chief Statue, หน้า 144–172 (PDF หน้า 148–176)
- Chapter XI: Barabudur as a Monument of Hindu-Javanese Art and Culture, หน้า 173–245 (PDF หน้า 177–249)
- Chapter XII: The Barabudur Pantheon, หน้า 246–280 (PDF หน้า 250–284)
- Chapter XIII: The Buddhism of Barabudur, หน้า 281–332 (PDF หน้า 285–336)
- Bibliography & Index: หน้า 333–368 (PDF หน้า 337–371)

โครงสร้าง Dossier:
- Master Umbrella Dossier: S-1927-krom-01-master.md (Barabudur Archaeological Description Vol II - Master Umbrella)
- Chapter Dossiers (7 บท + 1 ภาคผนวก/บรรณานุกรม = 8 Dossiers):
  1. S-1927-krom-ch07-gandavyuha.md (Chapter VII: The Gandavyuha, pp. 1-64)
  2. S-1927-krom-ch08-maitreya-samantabhadra.md (Chapter VIII: Maitreya and Samantabhadra, pp. 65-115)
  3. S-1927-krom-ch09-bodhisattva-tales.md (Chapter IX: Tales of Maitreya and Other Bodhisattvas, pp. 116-143)
  4. S-1927-krom-ch10-dhyani-buddhas.md (Chapter X: The Dhyani-Buddhas and Chief Statue, pp. 144-172)
  5. S-1927-krom-ch11-art-culture.md (Chapter XI: Monument of Hindu-Javanese Art and Culture, pp. 173-245)
  6. S-1927-krom-ch12-pantheon.md (Chapter XII: The Barabudur Pantheon, pp. 246-280)
  7. S-1927-krom-ch13-buddhism-barabudur.md (Chapter XIII: The Buddhism of Barabudur, pp. 281-332)
  8. S-1927-krom-app-biblio-index.md (Bibliography & General Index, pp. 333-368)

การแมปปิ้งสู่รายงานวิจัย:
- Ch 1.2 (การสังเคราะห์โครงสร้างความเชื่อมโยง จากเบ้าหลอมตันตระอินเดียสู่บริบทอุษาคเนย์): Ch VII, VIII, XIII
- Ch 2.3 (พัฒนาการของพุทธตันตระ จากมนตรยาน วัชรยาน สู่ประติมาวิทยา): Ch X, XII
- Ch 2.6 (พุทธ-ฮินดูตันตระในชวา สุมาตรา และเขมรโบราณ บุโรพุทโธในฐานะมณฑลวัชรธาตุ): Ch X, XI, XII, XIII
- Ch 4.1 (ยุคบุกเบิกแห่งการค้นพบเอกสาร 1890s-1950s โบราณคดีอาณานิคมดัตช์): Master, Ch XIII

======================================================================
2. Andrea Acri (2011) Dharma Pātañjala: A Śaiva Scripture from Ancient Java
======================================================================
ข้อมูลบรรณานุกรม:
- ชื่อหนังสือ: Dharma Pātañjala: A Śaiva Scripture from Ancient Java Studied in the Light of Related Old Javanese and Sanskrit Texts
- ผู้แต่ง: Andrea Acri
- วิทยานิพนธ์ปริญญาเอก: Universiteit Leiden, 2011 (ต่อมาตีพิมพ์ในชุด Gonda Indological Studies, Brill)
- จำนวนหน้าตาม PDF: 697 หน้า
- ความสำคัญ: การปริวรรต แปล และวิเคราะห์คัมภีร์วรรณกรรมชวาเก่าสายตูตูร์/ตัตตวะ (Tutur/Tattva) ที่สะท้อนการผสานระหว่างโยคะของปาตัญชลีกับไศวะ-พุทธตันตระในชวาโบราณตามกรอบคิด Alexis Sanderson

สารบัญฉบับเต็มครบทุกบท:
- Preliminary Pages (Preface, Notes on Conventions): หน้า vii–xix (PDF หน้า 8–20)
- Part I: Introduction (หน้า 3–100 / PDF หน้า 23–120):
  - 1. The Text and its Place in the Tutur/Tattva Genre (หน้า 3–42)
  - 2. Manuscript (History, Script, Colophon) (หน้า 43–52)
  - 3. Language (Spelling, Non-standard forms, Scribal errors) (หน้า 53–80)
  - 4. Editorial Policies (Diplomatic vs Critical Edition, Treatment of Sanskrit) (หน้า 81–100)
- Part II: Text & Translation (หน้า 101–342 / PDF หน้า 121–362):
  - 1. Facsimile Reproductions & Parallel Diplomatic Edition (หน้า 101–192)
  - 2. Critical Edition & Parallel Translation (หน้า 193–342)
- Part III: Doctrine (หน้า 343–616 / PDF หน้า 363–636):
  - 1. The Lord (Absolute, Personal God, Incarnation, Causation) (หน้า 343–390)
  - 2. The Soul (Divine status, Liberation, Yogic powers) (หน้า 391–420)
  - 3. Cosmos (Lord, Soul, Maya, 30 Principles, Cosmography) (หน้า 421–436)
  - 4. Man (Citta, Buddhi, Bhavas, Subtle Body, Physiology, Karma) (หน้า 437–476)
  - 5. Yoga (Samadhi, Eight Ancillaries, Powers, Prayogasandhi) (หน้า 477–550)
  - 6. Right Knowledge (Salvific knowledge, Means of knowledge) (หน้า 551–556)
  - 7. Wrong Knowledge (Materialist doctrine, Hedonism, Denials) (หน้า 557–616)
- Appendices & End Matter (หน้า 617–678 / PDF หน้า 637–697):
  - Appendix A: Parallel Synopses of Three Tattvas (หน้า 619–632)
  - Appendix B: Parallel Synopses of Yogapada of DhPat and YS[Bh] (หน้า 633–636)
  - Appendix C: Transliteration Tables (หน้า 637–638)
  - Sigla, Bibliography, Word Index, Summary, CV (หน้า 639–678)

โครงสร้าง Dossier:
- Master Umbrella Dossier: S-2011-acri-01-master.md (Dharma Patanjala Ancient Java - Master Umbrella)
- Chapter/Part Dossiers (14 Dossiers ครอบคลุมทุกส่วน 100%):
  1. S-2011-acri-pt1-ch01-tutur-genre.md (Part I.1: The Text & Place in Tutur/Tattva Genre, pp. 3-42)
  2. S-2011-acri-pt1-ch02-manuscripts.md (Part I.2: Manuscript, Script & Colophon, pp. 43-52)
  3. S-2011-acri-pt1-ch03-language.md (Part I.3: Language, Orthography & Scribal Errors, pp. 53-80)
  4. S-2011-acri-pt1-ch04-editorial-policies.md (Part I.4: Editorial Policies & Translation Methods, pp. 81-100)
  5. S-2011-acri-pt2-ch01-diplomatic-edition.md (Part II.1: Facsimile & Diplomatic Edition, pp. 101-192)
  6. S-2011-acri-pt2-ch02-critical-translation.md (Part II.2: Critical Edition & Parallel Translation, pp. 193-342)
  7. S-2011-acri-pt3-ch01-doctrine-lord.md (Part III.1: Doctrine - The Lord as Absolute & Personal, pp. 343-390)
  8. S-2011-acri-pt3-ch02-doctrine-soul.md (Part III.2: Doctrine - The Soul & Liberation, pp. 391-420)
  9. S-2011-acri-pt3-ch03-doctrine-cosmos.md (Part III.3: Doctrine - Cosmos & 30 Principles, pp. 421-436)
  10. S-2011-acri-pt3-ch04-man-physiology.md (Part III.4: Doctrine - Man, Subtle Body & Physiology, pp. 437-476)
  11. S-2011-acri-pt3-ch05-doctrine-yoga.md (Part III.5: Doctrine - Yoga, 8 Ancillaries & Powers, pp. 477-550)
  12. S-2011-acri-pt3-ch06-right-knowledge.md (Part III.6: Doctrine - Right Knowledge & Epistemology, pp. 551-556)
  13. S-2011-acri-pt3-ch07-wrong-knowledge.md (Part III.7: Doctrine - Wrong Knowledge & Materialism, pp. 557-616)
  14. S-2011-acri-app-synopses-concordance.md (Appendices A-C: Parallel Synopses & YS[Bh] Concordance, pp. 617-678)

การแมปปิ้งสู่รายงานวิจัย:
- Ch 1.2 (โครงสร้างความเชื่อมโยง จากอินเดียสู่อุษาคเนย์): Pt I.1, Pt III.1, Pt III.3
- Ch 2.2 (ปฏิสัมพันธ์ข้ามสายระหว่างไศวะตันตระและพุทธตันตระ - Sanderson Paradigm): Pt I.1, Pt III.1, Pt III.2, Pt III.5
- Ch 2.4 (สรีรวิทยาเร้นลับ จักระ เส้นลมปราณ นาฑี พินทุ): Pt III.4, Pt III.5
- Ch 2.6 (พุทธ-ฮินดูตันตระในชวา สังฮยังกามหายานิกัม และวรรณกรรมตัตตวะ): Pt I.1, Pt II.2, Pt III.3, Appendices
- Ch 4.4 (ประวัติศาสตร์นิพนธ์ทศวรรษ 2010): Master, Pt I.1, Pt III.5

======================================================================
3. Trent Walker (2018) Unfolding Buddhism: Communal Scripts, Localized Translations...
======================================================================
ข้อมูลบรรณานุกรม:
- ชื่อหนังสือ: Unfolding Buddhism: Communal Scripts, Localized Translations, and the Work of the Dying in Cambodian Leporellos
- ผู้แต่ง: Trent Walker
- วิทยานิพนธ์ปริญญาเอก: University of California, Berkeley, 2018
- จำนวนหน้าตาม PDF: 1,652 หน้า
- ความสำคัญ: การศึกษาเชิงนิรุกติศาสตร์ วรรณกรรม และชาติพันธุ์วรรณนาที่ละเอียดที่สุดว่าด้วยสมุดข่อยพับกัมพูชา (Leporellos) จารีตการสวดสโมต (Smot) คัมภีร์มหาทิพมนต์ อุณหิสสวิชัย และคัพภวิทยาเชิงธรรม (Catusaccagabbha)

สารบัญฉบับเต็มครบทุกบท:
- Front Matter (Dedication, Khmer Summary, Acknowledgments, Conventions): หน้า i–xiii (PDF หน้า 6–24)
- Chapter 1: Introduction (Unfolding Buddhism, Khmer-Tai Manuscript Culture, Methods), หน้า 1–47 (PDF หน้า 25–71)
- Part I: Communal Scripts (หน้า 48–248 / PDF หน้า 72–272):
  - Chapter 2: Communal Manuscripts (Sample UB015, Set of 70 Leporellos, Scribes/Donors), หน้า 48–99 (PDF หน้า 72–123)
  - Chapter 3: Chants for the End of Life (Breadth, Patterns, Canonical/Non-Canonical/Bilingual Genres), หน้า 100–161 (PDF หน้า 124–185)
  - Chapter 4: Scripts for Performance (Paratexts, Textual Sequences, Illuminations, Ritual Instructions), หน้า 162–248 (PDF หน้า 186–272)
- Part II: Localized Translations (หน้า 249–458 / PDF หน้า 273–482):
  - Chapter 5: From Sanskrit Dhāraṇī to Pali Paritta (Uṣṇīṣavijayā, Bhāṇavāra, Mahādibbamanta), หน้า 249–316 (PDF หน้า 273–340)
  - Chapter 6: Bilingual Pali-Vernacular Prose (Nissaya, Sannaya, Samrāy, Syntactic Rearrangements), หน้า 317–378 (PDF หน้า 341–402)
  - Chapter 7: Translating Pali and Tai into Khmer Verse (Foreignizing, Domestication, Smot Metrics), หน้า 379–458 (PDF หน้า 403–482)
- Part III: The Work of the Dying (หน้า 459–652 / PDF หน้า 483–676):
  - Chapter 8: End-of-Life Contemplations (Menaced by Yama, Forest, Borān Kammaṭṭhāna), หน้า 459–541 (PDF หน้า 483–565)
  - Chapter 9: End-of-Life Absolutions and Aspirations (Ānisaṃsa, Adhiṭṭhāna, Repentance, Inscriptions IMA 31/38), หน้า 542–652 (PDF หน้า 566–676)
- Chapter 10: Conclusion, หน้า 653–655 (PDF หน้า 677–679)
- Appendix I: Catalog of Leporellos (70 Manuscripts Detailed Catalog), หน้า 656–844 (PDF หน้า 680–868)
- Appendix II: Corpus of Texts (II-1 to II-18 Full Texts & Translations), หน้า 845–1493 (PDF หน้า 869–1517)
- Appendix III: Non-Leporello Texts (Long Uṇhissavijaya, Footprint, Supin Kumār, Duṃ Dāv), หน้า 1494–1582 (PDF หน้า 1518–1606)
- Bibliography: หน้า 1583–1627 (PDF หน้า 1607–1651)

โครงสร้าง Dossier:
- Master Umbrella Dossier: S-2018-walker-01-master.md (Unfolding Buddhism Cambodian Leporellos - Master Umbrella)
- Chapter/Appendix Dossiers (13 Dossiers ครอบคลุม 100%):
  1. S-2018-walker-ch01-introduction.md (Chapter 1: Introduction - Khmer-Tai Manuscript Culture, pp. 1-47)
  2. S-2018-walker-ch02-communal-manuscripts.md (Chapter 2: Communal Manuscripts & Codicology, pp. 48-99)
  3. S-2018-walker-ch03-chanted-texts.md (Chapter 3: Chants for End of Life & Genre Taxonomy, pp. 100-161)
  4. S-2018-walker-ch04-performance-scripts.md (Chapter 4: Scripts for Performance & Ritual Instructions, pp. 162-248)
  5. S-2018-walker-ch05-dharani-to-paritta.md (Chapter 5: Sanskrit Dharani to Pali Paritta & Mahadibbamanta, pp. 249-316)
  6. S-2018-walker-ch06-bilingual-prose.md (Chapter 6: Bilingual Pali-Vernacular Prose & Nissaya, pp. 317-378)
  7. S-2018-walker-ch07-khmer-verse-translation.md (Chapter 7: Translating Pali & Tai into Khmer Verse, pp. 379-458)
  8. S-2018-walker-ch08-end-of-life-contemplations.md (Chapter 8: End-of-Life Contemplations & Boran Kammatthana, pp. 459-541)
  9. S-2018-walker-ch09-absolutions-aspirations.md (Chapter 9: Absolutions, Aspirations & Stone Inscriptions, pp. 542-652)
  10. S-2018-walker-ch10-conclusion.md (Chapter 10: Conclusion, pp. 653-655)
  11. S-2018-walker-app01-leporello-catalog.md (Appendix I: Catalog of 70 Leporellos, pp. 656-844)
  12. S-2018-walker-app02-corpus-texts.md (Appendix II: Corpus of Texts II-1 to II-18, pp. 845-1493)
  13. S-2018-walker-app03-non-leporello-texts.md (Appendix III: Non-Leporello Texts & Bibliography, pp. 1494-1627)

การแมปปิ้งสู่รายงานวิจัย:
- Ch 1.3 (สัณฐานวิทยาเชิงสรีรวิทยาและอักขรวิทยา คัพภวิทยาเชิงธรรม): Ch 5, Ch 8, App II
- Ch 1.5 (ภาพสะท้อนของขบวนการที่มีชีวิตในกัมพูชา): Ch 1, Ch 2, Ch 4, Ch 8
- Ch 3.2 (คัมภีร์และวรรณกรรมสำคัญ สมุดข่อยพับ บทสวดสองภาษา และมหาทิพมนต์): Ch 2, Ch 3, Ch 5, Ch 6, App II
- Ch 3.3 (สรีรวิทยาการภาวนา การจำลองพระพุทธเจ้าในกาย): Ch 8, App II
- Ch 3.5 (ธรรมเนียมในเขมร ครูบา ลแปก และการสวดสโมต): Ch 4, Ch 7, Ch 9
- Ch 3.7 (การดำรงอยู่และการฟื้นคืนในร่วมสมัย วัฒนธรรมพิธีศพ): Ch 8, Ch 9
- Ch 4.4 (การสังเคราะห์ร่วมสมัยทศวรรษ 2010): Master, Ch 1, Ch 10
- Ch 4.7 (การวิเคราะห์ช่องว่าง ข้อจำกัดหลังยุคเขมรแดง): Ch 1, Ch 2

======================================================================
4. Ashley Thompson, ed. (2022) Early Theravādin Cambodia
======================================================================
ข้อมูลบรรณานุกรม:
- ชื่อหนังสือ: Early Theravādin Cambodia: Perspectives from Art and Archaeology
- บรรณาธิการ: Ashley Thompson
- สำนักพิมพ์: London & New York: Routledge, 2022
- จำนวนหน้าตาม PDF: 343 หน้า
- ความสำคัญ: การรื้อถอนประวัติศาสตร์นิพนธ์แบบเดิมว่าด้วยการเปลี่ยนผ่านสู่เถรวาทในกัมพูชา นำเสนอหลักฐานทางโบราณคดี ศิลปกรรม จารึก และประติมาวิทยาพระพุทธเจ้า 5 พระองค์ (นะ โม พุท ธา ยะ) ในจารีตโยคาวจร/กรรมฐานโบราณ

สารบัญฉบับเต็มครบทุกบท:
- Front Matter (Figures, Technical Notes, Maps): หน้า viii–xxviii (PDF หน้า 1–28)
- Chapter 1: Early Theravādin Cambodia: Terms of Engagement - Ashley Thompson, หน้า 1–57 (PDF หน้า 29–85)
- Chapter 2: Angkor and Theravāda Buddhism: Some Considerations - Hiram W. Woodward, หน้า 58–106 (PDF หน้า 86–134)
- Chapter 3: Reading and Interpreting Jātaka Tales during the Angkorian Period - Tuy Danel, หน้า 107–144 (PDF หน้า 135–172)
- Chapter 4: The Buddha Sculptures of Tham Phra (Buddha Cave): Implications for Understanding the Complex Religious Atmosphere of Western Thailand during the Early Second Millennium CE - Samerchai Poolsuwan, หน้า 145–185 (PDF หน้า 173–213)
- Chapter 5: A Brief Overview of Key Theravāda Buddhist Structures at Central Angkor from the 13th to 18th Centuries - Ea Darith, หน้า 186–202 (PDF หน้า 214–230)
- Chapter 6: New Evidence at Western Prasat Top, Angkor Thom - Yuni Sato, หน้า 203–230 (PDF หน้า 231–258)
- Chapter 7: Back to the Future: The Emergence of Past and Future Buddhas in Khmer Buddhism - Nicolas Revire, หน้า 231–268 (PDF หน้า 259–296)
- Chapter 8: 17th- and 18th-Century Images of the Buddha from Ayutthaya and Lan Xang at Angkor Wat - Martin Polkinghorne, หน้า 269–305 (PDF หน้า 297–333)
- List of Contributors & Index: หน้า 306–315 (PDF หน้า 334–343)

โครงสร้าง Dossier:
- Master Umbrella Dossier: S-2022-thompson-01-master.md (Early Theravadin Cambodia - Master Umbrella)
- Chapter Dossiers (8 บท ครอบคลุม 100%):
  1. S-2022-thompson-ch01-terms-of-engagement.md (Chapter 1: Ashley Thompson - Terms of Engagement, pp. 1-57)
  2. S-2022-thompson-ch02-angkor-theravada.md (Chapter 2: Hiram W. Woodward - Angkor & Theravada Buddhism, pp. 58-106)
  3. S-2022-thompson-ch03-jataka-angkor.md (Chapter 3: Tuy Danel - Jataka Tales in Angkorian Period, pp. 107-144)
  4. S-2022-thompson-ch04-tham-phra-sculptures.md (Chapter 4: Samerchai Poolsuwan - Buddha Sculptures of Tham Phra Cave, pp. 145-185)
  5. S-2022-thompson-ch05-theravada-structures-angkor.md (Chapter 5: Ea Darith - Theravada Structures at Central Angkor, pp. 186-202)
  6. S-2022-thompson-ch06-western-prasat-top.md (Chapter 6: Yuni Sato - Western Prasat Top at Angkor Thom, pp. 203-230)
  7. S-2022-thompson-ch07-past-future-buddhas.md (Chapter 7: Nicolas Revire - Past & Future Buddhas, Na-Mo-Bu-Ddha-Ya, pp. 231-268)
  8. S-2022-thompson-ch08-ayutthaya-lanxang-angkor.md (Chapter 8: Martin Polkinghorne - Ayutthaya & Lan Xang Images at Angkor Wat, pp. 269-305)

การแมปปิ้งสู่รายงานวิจัย:
- Ch 1.1 (มโนทัศน์แม่บทและการคลี่คลายของชื่อเรียก เถรวาทในอุษาคเนย์): Ch 1 (Thompson)
- Ch 1.2 (การสังเคราะห์โครงสร้างความเชื่อมโยง จากอินเดียสู่อุษาคเนย์): Ch 2, Ch 4
- Ch 2.6 (พุทธ-ฮินดูตันตระในชวา สุมาตรา และเขมรโบราณ): Ch 2, Ch 3, Ch 6
- Ch 2.7 (การเปลี่ยนผ่านหลังศตวรรษที่ 13 การเสื่อมสลายของนครวัดและการเข้ามาของเถรวาท): Ch 1, Ch 5, Ch 6
- Ch 3.1 (ภูมิหลังการเข้ามาและการสถาปนาเถรวาทจารีตก่อนยุคปฏิรูป): Ch 1, Ch 4, Ch 5
- Ch 3.3 (สรีรวิทยาการภาวนา สัททวิทยา อักษรย่อ นะ โม พุท ธา ยะ และกลุ่มธรรม 5 ในกายทิพย์): Ch 7 (Revire ชี้ชัดเรื่องสัมพันธภาพกับโยคาวจรและกรรมฐานโบราณ)
- Ch 3.5 (ธรรมเนียมในเขมร ลาว และอยุธยา เครือข่ายพระพุทธรูปนครวัด): Ch 8 (Polkinghorne)
- Ch 4.5 (การศึกษาแบบพหุภาษาและสหวิทยาการในทศวรรษ 2020): Master, Ch 1, Ch 7

======================================================================
5. John Clifford Holt (2012) Caring for the Dead Ritually in Cambodia
======================================================================
ข้อมูลบรรณานุกรม:
- ชื่อหนังสือ/บทความ: Caring for the Dead Ritually in Cambodia
- ผู้แต่ง: John Clifford Holt
- แหล่งตีพิมพ์: Southeast Asian Studies, Vol. 1, No. 1, April 2012, pp. 3–75 (Center for Southeast Asian Studies, Kyoto University)
- จำนวนหน้าตาม PDF: 73 หน้า
- ความสำคัญ: การศึกษาเชิงมานุษยวิทยาศาสนาและชาติพันธุ์วรรณนาว่าด้วยเทศกาลสารทเขมร (Pchum Ben / Kan Ben) พิธีทิ้งข้าวบิณฑ์ (Bay Ben) การสวดเปตวัตถุ ปราภวสูตร และความตึงเครียดระหว่างธรรมเนียมโบราณ (Boran) กับธรรมเนียมสมัยใหม่ (Samay/Thammayut) ในกัมพูชาหลังสงคราม

สารบัญฉบับเต็มครบทุกหมวด/หัวข้อ:
- Section 1: Introduction: Death, Memory, and Politics in Post-War Cambodia (หน้า 3–12 / PDF หน้า 1–10)
- Section 2: The Khmer Rouge Trauma and the Destruction of Family and Sangha (หน้า 12–26 / PDF หน้า 10–24)
- Section 3: Ritual and Socio-moral Regeneration (หน้า 26–31 / PDF หน้า 24–29)
- Section 4: Celebrating Pchum Ben: Fieldwork at Central Phnom Penh Wats (หน้า 31–36 / PDF หน้า 29–34)
- Section 5: The Kan Ben Liturgy at Wat Langka: Pinda Distribution and the Petavatthu (หน้า 37–47 / PDF หน้า 35–45)
- Section 6: Consoling the Pretas at Wat Sampov Meas (หน้า 47–50 / PDF หน้า 45–48)
- Section 7: Boran and Samay at Wat Unnalom: Traditionalism vs. Reformist Tensions (หน้า 50–54 / PDF หน้า 48–52)
- Section 8: Ang Duang and Nationalist Sentiments of Pchum Ben (หน้า 54–57 / PDF หน้า 52–55)
- Section 9: The Thammayut Disposition at Wat Svay Por Pe (หน้า 57–60 / PDF หน้า 55–58)
- Section 10: Memorializing the Dead at Wat Kokos: Votive Stūpas and Family Bones (หน้า 60–62 / PDF หน้า 58–60)
- Section 11: Chinese Influence on Pchum Ben? Comparative Ancestor Rites (หน้า 62–68 / PDF หน้า 60–66)
- Section 12: Pchum Ben Proper and Bangsukol at Wat Tralaeng Kaeng (หน้า 68–70 / PDF หน้า 66–68)
- Section 13: Conclusion & References: Liminality, Healing, and Traditional Eschatology (หน้า 70–75 / PDF หน้า 68–73)

โครงสร้าง Dossier:
- Master Umbrella Dossier: S-2012-holt-01-master.md (Caring for Dead Ritually in Cambodia - Master Umbrella)
- Section Dossiers (รวมหมวดตามธีมเนื้อหาที่สมบูรณ์ 5 Dossiers):
  1. S-2012-holt-sec01-death-memory-trauma.md (Sections 1-2: Death, Memory & Khmer Rouge Trauma, pp. 3-26)
  2. S-2012-holt-sec02-ritual-regeneration-pchumben.md (Sections 3-4: Socio-moral Regeneration & Pchum Ben Fieldwork, pp. 26-36)
  3. S-2012-holt-sec03-kanben-liturgy-pretas.md (Sections 5-6: Kan Ben Liturgy, Pinda & Pretas at Wat Langka/Sampov Meas, pp. 37-50)
  4. S-2012-holt-sec04-boran-samay-angduang.md (Sections 7-9: Boran vs Samay, King Ang Duang & Thammayut Disposition, pp. 50-60)
  5. S-2012-holt-sec05-memorials-chinese-bangsukol.md (Sections 10-13: Wat Kokos Memorials, Chinese Rites, Bangsukol & Conclusion, pp. 60-75)

การแมปปิ้งสู่รายงานวิจัย:
- Ch 1.4 (การปะทะสังสรรค์ระหว่างจารีตโบราณกับการปฏิรูปสมัยใหม่): Sec 04 (Boran vs Samay)
- Ch 1.5 (ภาพสะท้อนของขบวนการที่มีชีวิตในโลกร่วมสมัย วัฒนธรรมพิธีศพ): Sec 02, Sec 03, Sec 05
- Ch 3.5 (ธรรมเนียมในเขมร ลาว และพม่า: พิธีกรรมสารทและเปรตพลี): Sec 02, Sec 03
- Ch 3.6 (ภัยคุกคามและการกวาดล้าง: บทบาทของธรรมยุตและการวิพากษ์พิธีทิ้งข้าวบิณฑ์): Sec 04 (กรณีโต้แย้งของพระพุธ สาวอง และธรรมยุตวัดสวายโปเป)
- Ch 3.7 (การดำรงอยู่และการฟื้นคืนในโลกร่วมสมัย การเยียวยาบาดแผลทางใจ): Sec 01, Sec 05
- Ch 4.4 (ประวัติศาสตร์นิพนธ์ทศวรรษ 2010): Master, Sec 04

======================================================================
6. Oskar von Hinüber (1983/1991) The Oldest Pāli Manuscript
======================================================================
ข้อมูลบรรณานุกรม:
- ชื่อหนังสือ: The Oldest Pāli Manuscript: Four Folios of the Vinaya-Piṭaka from the National Archives, Kathmandu
- ผู้แต่ง: Oskar von Hinüber
- สำนักพิมพ์: Mainz: Akademie der Wissenschaften und der Literatur / Franz Steiner Verlag, 1991 (ริเริ่มโครงการและนำเสนอครั้งแรก 1983)
- จำนวนหน้าตาม PDF: 49 หน้า
- ความสำคัญ: การค้นพบและศึกษาเอกสารตัวเขียนบาลีที่เก่าแก่ที่สุดในโลก (พุทธศตวรรษที่ 14 / ค.ศ. ศตวรรษที่ 8–9) จากกาฐมาณฑุ เนปาล ตัวอักษรคุปตะ/ลิจฉวี พิสูจน์การดำรงอยู่ของเถรวาทบาลีร่วมสมัยกับพุทธตันตระอินเดียเหนือ

สารบัญฉบับเต็มครบทุกหมวด:
- Title & Imprint: หน้า 1–2 (PDF หน้า 1–2)
- Table of Contents: หน้า 3 (PDF หน้า 3)
- Palaeographical and philological remarks on the manuscript: หน้า 5–26 (PDF หน้า 5–26)
  - Cecil Bendall's discovery (1899/1902) and Bapat's preliminary edition (pp. 5-7)
  - Script analysis (Nepalese Licchavi/Gupta transition, 8th-9th century AD) (pp. 7-12)
  - Phonological and orthographical features (Vocalic length, anusvara, consonants) (pp. 12-16)
  - Lexical peculiarities and technical terms (gamaphotava, mallakammatika) (pp. 16-22)
  - Textual comparison with Theravada Cullavagga IV-V and Mulasarvastivada-Vinaya (pp. 22-26)
- Addendum (Examination of 5 ancient Pali manuscripts from Wat Lai Hin, Lampang, Lanna): หน้า 27 (PDF หน้า 27)
- Symbols used in the Pali text: หน้า 28 (PDF หน้า 28)
- Critical Edition of Pali Text (Folios [10]6a to 109b: Cullavagga IV.14-V.10): หน้า 29–37 (PDF หน้า 29–37)
- Concordance with PTS edition: หน้า 38 (PDF หน้า 38)
- Abbreviations: หน้า 38–39 (PDF หน้า 38–39)
- Index of Sanskrit and Pali words: หน้า 40 (PDF หน้า 40)
- Photographic Plates of the Palm-leaf Folios: หน้า 41–49 (PDF หน้า 41–49)

โครงสร้าง Dossier:
- Master Umbrella Dossier: S-1983-vonhinuber-01-master.md (The Oldest Pali Manuscript Kathmandu - Master Umbrella)
- Chapter Dossiers (4 Dossiers ครอบคลุม 100%):
  1. S-1983-vonhinuber-ch01-palaeography-philology.md (Palaeographical & Philological Remarks, pp. 5-26)
  2. S-1983-vonhinuber-ch02-addendum-watlaihin.md (Addendum: Comparative Lanna Readings from Wat Lai Hin, p. 27)
  3. S-1983-vonhinuber-ch03-critical-text-concordance.md (Symbols, Critical Text of Cullavagga & Concordance, pp. 28-38)
  4. S-1983-vonhinuber-ch04-apparatus-plates.md (Abbreviations, Word Index & Photographic Plates, pp. 38-49)

การแมปปิ้งสู่รายงานวิจัย:
- Ch 2.1 (รากเหง้าทางประวัติศาสตร์ของตันตริกในอินเดียโบราณ): Ch 01 (การดำรงอยู่ของเถรวาทบาลีในอินเดียเหนือยุคศักดินาศตวรรษที่ 8-9)
- Ch 2.3 (พัฒนาการของพุทธตันตระ เครือข่ายบาลีร่วมสมัยกับพุทธตันตระในเนปาลและมคธ): Ch 01, Ch 03
- Ch 3.1 (การสถาปนาเถรวาทจารีตก่อนยุคปฏิรูป สายสัมพันธ์กับคัมภีร์ใบลานล้านนา วัดไหล่หิน ลำปาง): Ch 02 (Addendum ชี้จุดเชื่อมโยงเอกสารใบลานล้านนากับสายตัวเขียนโบราณ)
- Ch 4.2 (ยุคการปฏิวัติทัศนะทางวิชาการและงานศึกษานิรุกติศาสตร์สำนักเยอรมัน): Master, Ch 01

======================================================================
7. Justin McDaniel (2002) The Curricular Canon in Northern Thailand and Laos
======================================================================
ข้อมูลบรรณานุกรม:
- ชื่อบทความ/เอกสาร: The Curricular Canon in Northern Thailand and Laos
- ผู้แต่ง: Justin McDaniel
- แหล่งตีพิมพ์: Manusya: Journal of Humanities, Special Issue No. 4, 2002, pp. 1–40 (Chulalongkorn University)
- จำนวนหน้าตาม PDF: 40 หน้า
- ความสำคัญ: การบุกเบิกรื้อถอนแนวคิดเรื่อง "พระไตรปิฎกฉบับปิดตายตัว" (Closed Canon) และเสนอแนวคิด "สารบบตามหลักสูตรการเรียนรู้" (Curricular Canon) ในล้านนาและลาว ซึ่งเน้นคัมภีร์นิสสยะ (Nissaya) อานิสงส์ ปริตร และอภิธรรมมาติกา

สารบัญฉบับเต็มครบทุกหมวด:
- Title and Abstract: หน้า 1–2 (PDF หน้า 1–2)
- Section 1: Introduction: What defines a canon? (หน้า 1–8 / PDF หน้า 1–8)
  - Theoretical framework: Canon I (textual/authoritative) vs Canon II (practical/curricular)
  - Critiques of Western Protestant biases toward the Pali Canon
- Section 2: Object Texts (หน้า 8–13 / PDF หน้า 8–13)
  - Manuscript genres in Northern Thailand and Laos: Nissayas, Jatakas, Anisaṃsas, Parittas
  - Why whole Tripitaka was rarely copied or read
- Section 3: Rhetorical Style (หน้า 13–19 / PDF หน้า 13–19)
  - Translation strategies, bilingual glossing, syntactic realignment to Tai grammar
  - Pedagogical role of excessive glossing
- Section 4: Commentarial Services (หน้า 19–25 / PDF หน้า 19–25)
  - How commentary functions as curriculum
  - The use of the Abhidhamma Matika as a matrix for vernacular grammar and mystical training
- Section 5: From Commentary to Canon to Curricula (หน้า 25–34 / PDF หน้า 25–34)
  - Monastic pedagogy before central Siamese modernisation
  - The coexistence of scholasticism, liturgy, and protection manuals
- Section 6: References (หน้า 34–40 / PDF หน้า 34–40)
  - Bibliography of primary manuscripts and regional secondary literature

โครงสร้าง Dossier:
- Master Umbrella Dossier: S-2002-mcdaniel-01-master.md (The Curricular Canon Northern Thailand Laos - Master Umbrella)
- Section Dossiers (6 Dossiers ครอบคลุม 100%):
  1. S-2002-mcdaniel-ch01-defining-canon.md (Section 1: What Defines a Canon? Canon I vs Canon II, pp. 1-8)
  2. S-2002-mcdaniel-ch02-object-texts.md (Section 2: Object Texts - Nissayas & Palm-leaf Realities, pp. 8-13)
  3. S-2002-mcdaniel-ch03-rhetorical-style.md (Section 3: Rhetorical Style - Bilingual Glossing & Syntax, pp. 13-19)
  4. S-2002-mcdaniel-ch04-commentarial-services.md (Section 4: Commentarial Services & Abhidhamma Matika, pp. 19-25)
  5. S-2002-mcdaniel-ch05-canon-to-curricula.md (Section 5: From Commentary to Canon to Curricula, pp. 25-34)
  6. S-2002-mcdaniel-ch06-references.md (Section 6: References & Archival Sources, pp. 34-40)

การแมปปิ้งสู่รายงานวิจัย:
- Ch 1.1 (มโนทัศน์แม่บทและการคลี่คลายของชื่อเรียก การนิยามจารีตท้องถิ่น): Ch 01 (Canon I vs II)
- Ch 3.1 (ภูมิหลังการเข้ามาและการสถาปนาเถรวาทจารีตก่อนยุคปฏิรูปในล้านนาและลาว): Ch 01, Ch 02, Ch 05
- Ch 3.2 (คัมภีร์และวรรณกรรมสำคัญ วรรณกรรมนิสสยะและอภิธรรมมาติกา): Ch 02, Ch 04
- Ch 3.4 (สายธารการสืบทอดในสยามและล้านนา ธรรมเนียมการเรียนคัมภีร์ใบลานเมืองเหนือ): Ch 03, Ch 05
- Ch 3.6 (ภัยคุกคามและการกวาดล้าง การแทนที่ตำราท้องถิ่นด้วยหลักสูตรนักธรรมส่วนกลาง): Ch 01, Ch 05
- Ch 4.4 (การสังเคราะห์ร่วมสมัยและพุทธศาสนานิพนธ์ทศวรรษ 2000): Master, Ch 01, Ch 05

======================================================================
ตารางสรุปภาพรวม Dossiers ทั้งหมดของทีมที่ 6
======================================================================
1. Krom (1927) Barabudur Vol II: 1 Master Umbrella + 8 Chapter Dossiers = 9 Dossiers
2. Acri (2011) Dharma Patanjala: 1 Master Umbrella + 14 Chapter/Part Dossiers = 15 Dossiers
3. Walker (2018) Unfolding Buddhism: 1 Master Umbrella + 13 Chapter/App Dossiers = 14 Dossiers
4. Thompson ed. (2022) Early Theravadin Cambodia: 1 Master Umbrella + 8 Chapter Dossiers = 9 Dossiers
5. Holt (2012) Caring for the Dead Ritually: 1 Master Umbrella + 5 Section Dossiers = 6 Dossiers
6. Von Hinuber (1983) Oldest Pali Manuscript: 1 Master Umbrella + 4 Chapter Dossiers = 5 Dossiers
7. McDaniel (2002) Curricular Canon: 1 Master Umbrella + 6 Section Dossiers = 7 Dossiers

รวมทั้งสิ้นสำหรับกลุ่มตำราทีมที่ 6:
- Master Umbrella Dossiers: 7 ฉบับ
- Chapter / Section Dossiers: 58 ฉบับ
- รวม Dossiers ทั้งสิ้น: 65 ฉบับ (ครอบคลุมเนื้อหาทุกหน้า ทุกบท และทุกหมวด 100% ปราศจากการตัดทอน)

พร้อมดำเนินการผลิตไฟล์ Dossier รายฉบับลงใน research-notes/sources/ ทันทีที่ได้รับคำสั่งอนุมัติจาก Lead Agent


---

# ภาคผนวกแผนแม่บทส่วนที่ 9: ทีมที่ 7: หมวดประวัติศาสตร์วรรณคดีบาลี การแพร่กระจาย และบทความวิจัยเดี่ยวทั้งหมด (Pali Literary History & All Research Articles)

# แผนผังแม่บทการจัดทำ Dossier และการแมปปิ้งโครงสร้างเนื้อหา: ทีมที่ 7 (Team 7 Master Dossier Architecture)

**หน่วยปฏิบัติการ:** Sub-Agent ทีมที่ 7 (Pali Literary History, Transnational Transmission, Anthropology & All Journal Articles)
**โครงการวิจัย:** เถรวาทตันตระ หรือเถรวาทแบบเซาท์อีสเอเชีย: กำเนิด พัฒนาการ การดำรงอยู่ และสถานภาพการศึกษาทางประวัติศาสตร์นิพนธ์
**สถานะ:** แผนผังแม่บทระดับละเอียด 100% ครอบคลุมหนังสือเล่ม 11 เรื่อง (143 Dossiers) และบทความวิจัยทั้งหมด 62 เรื่อง (62 Dossiers) รวมทั้งสิ้น 205 Dossiers
**มาตรฐานที่ใช้บังคับ:** GEMINI.md (ห้ามใช้อีโมจิเด็ดขาด, ภาษาไทยเชิงวิชาการชั้นสูง, Dossier-Driven Drafting 100%)

---

## 1. บทสรุปภาพรวมเชิงสถิติของทีมที่ 7 (Executive Statistical Overview)

ตามคำสั่งเด็ดขาดของผู้ใช้และ Lead Agent ทีมที่ 7 ได้ดำเนินการสำรวจ ตรวจสอบสารบัญ และวิเคราะห์โครงสร้างตัวบทจริงจากไฟล์ PDF ใน `research-notes/pdf/` และข้อความสกัดใน `research-notes/extracted-texts/` ครบถ้วน 100% โดยแบ่งการจัดทำ Dossier ออกเป็น 2 กลุ่มมาตรฐาน:

1. **กลุ่มหนังสือเล่ม (Books & Monographs) จำนวน 11 เรื่อง:**
   - กำหนดให้จัดทำ **1 Dossier กลาง (Master Umbrella)** สำหรับแต่ละเล่ม เพื่อสังเคราะห์วิทยานิพนธ์หลัก โครงสร้างองค์รวม และคุณูปการเชิงประวัติศาสตร์นิพนธ์
   - กำหนดให้จัดทำ **1 Dossier ประจำบทสำหรับทุกบทในเล่ม (100% Full Chapter Coverage)** ห้ามตัดทอนหรือข้ามบทใดบทหนึ่งโดยเด็ดขาด
   - **รวมจำนวน Dossier กลุ่มหนังสือเล่ม:** 11 Master Dossiers + 132 Chapter Dossiers = **143 Dossiers**

2. **กลุ่มบทความวิจัยและบทความเฉพาะทาง (Journal Articles & Research Papers) จำนวน 62 เรื่อง:**
   - กำหนดให้จัดทำ **1 บทความ = 1 Dossier ฉบับสมบูรณ์ 6 ส่วน**
   - **รวมจำนวน Dossier กลุ่มบทความวิจัย:** **62 Dossiers**

3. **ยอดรวม Dossiers ภายใต้การดูแลของทีมที่ 7:** **205 Dossiers**

---

## 2. โครงสร้าง Dossier กลุ่มหนังสือเล่ม 11 รายการ (Books & Monographs Architecture)

### 2.1 หนังสือเล่มที่ 1: `1928-malalasekera-pali-literature-of-ceylon.pdf` (G. P. Malalasekera 1928)
- **ชื่อหนังสือ:** *The Pali Literature of Ceylon*
- **ความยาวและข้อมูลพิมพ์:** 344 หน้า (Royal Asiatic Society, London)
- **Dossier กลาง (Master Umbrella):** `S-1928-malalasekera-01`
  - *การแมปปิ้งในรายงาน:* บทที่ 2 (2.7, 2.8), บทที่ 3 (3.1, 3.2), บทที่ 4 (4.1, 4.6)
  - *บทบาทการสังเคราะห์:* งานประวัติศาสตร์วรรณกรรมบาลีในลังการะดับคลาสสิกแม่บท บันทึกสายธารวรรณกรรมตั้งแต่การสถาปนาพระพุทธศาสนา ยุคอรรถกถา ยุคทองแห่งวรรณกรรมบาลี ยุคเสื่อมถอย และการรื้อฟื้นในยุคใหม่
- **ตารางแจกแจง Dossier ประจำบทครบถ้วน 100% (15 บท):**

| ลำดับบท | ชื่อบท / ส่วนย่อย | หน้า | รหัส Dossier ประจำบท | การแมปปิ้งบทและหัวข้อย่อย | บทบาทและประเด็นสำคัญในรายงาน |
|:---:|:---|:---:|:---|:---|:---|
| 1 | Introduction | pp. 1-17 | `S-1928-malalasekera-01-ch01` | บทที่ 2 (2.7), บทที่ 3 (3.1), บทที่ 4 (4.1) | ภาพรวมภาษาบาลี วรรณคดีบาลี 3 ประเภท และการปรับตัวของวัฒนธรรมบาลีในลังกา |
| 2 | Chapter I: The Conversion of Ceylon | pp. 18-25 | `S-1928-malalasekera-01-ch02` | บทที่ 2 (2.7), บทที่ 3 (3.1) | การเผยแผ่พระพุทธศาสนาในรัชสมัยพระเจ้าเทวานัมปิยติสสะ พระมหินทเถระ และการก่อตั้งมหาวิหาร |
| 3 | Chapter II: The Writing Down of the Books | pp. 26-47 | `S-1928-malalasekera-01-ch03` | บทที่ 3 (3.1, 3.2), บทที่ 4 (4.1) | การจารึกพระไตรปิฎกลงใบลานที่อาโลกเลณะ สมัยพระเจ้าวัฏฏคามณีอภัย การแยกตัวของสำนักอภัยคีรีวิหาร |
| 4 | Chapter III: The Development of Buddhist Culture | pp. 48-64 | `S-1928-malalasekera-01-ch04` | บทที่ 3 (3.1, 3.2) | การเติบโตของวัฒนธรรมพุทธ การแปลและการบันทึกอรรถกถารุ่นแรกเป็นภาษาสิงหลโบราณ (สีหลัฏฐกถา) |
| 5 | Chapter IV: The Beginnings of Literary Activity | pp. 65-78 | `S-1928-malalasekera-01-ch05` | บทที่ 3 (3.1, 3.2), บทที่ 4 (4.1) | จุดเริ่มต้นของการรจนาวรรณกรรมบาลีนอกพระไตรปิฎก คัมภีร์ทีปวงศ์ และวรรณกรรมประวัติศาสตร์ยุคแรก |
| 6 | Chapter V: Buddhaghosa | pp. 79-101 | `S-1928-malalasekera-01-ch06` | บทที่ 3 (3.2, 3.8), บทที่ 4 (4.1) | ชีวประวัติ ผลงานการแปลและรจนาอรรถกถาพระไตรปิฎกของพระพุทธโฆสะ คัมภีร์วิสุทธิมรรค และการวางระบบสมาธิ |
| 7 | Chapter VI: Buddhaghosa's Successors | pp. 102-129 | `S-1928-malalasekera-01-ch07` | บทที่ 3 (3.1, 3.2), บทที่ 4 (4.1) | ผู้สืบทอดสายอรรถกถา: พระพุทธทัตตะ พระธรรมปาละ พระอุปเสนะ พระมหานามะ และการจัดระเบียบคัมภีร์ |
| 8 | Chapter VII: The Pāli Chronicles | pp. 130-146 | `S-1928-malalasekera-01-ch08` | บทที่ 3 (3.1), บทที่ 4 (4.1) | การวิเคราะห์คัมภีร์พงศาวดารบาลี มหาวงศ์ มโนทัศน์ประวัติศาสตร์ศักดิ์สิทธิ์และการสืบสายศาสนวงศ์ |
| 9 | Chapter VIII: The Dawn of the Golden Era | pp. 147-174 | `S-1928-malalasekera-01-ch09` | บทที่ 2 (2.7), บทที่ 3 (3.1), บทที่ 4 (4.1) | การฟื้นฟูพระพุทธศาสนาหลังสงครามทมิฬโจฬะ รัชสมัยพระเจ้าวิชัยพาหุที่ 1 และการเตรียมการสู่อภิมหายุคทอง |
| 10 | Chapter IX: The Augustan Age | pp. 175-195 | `S-1928-malalasekera-01-ch10` | บทที่ 2 (2.7), บทที่ 3 (3.1, 3.2) | ยุคทองแห่งวรรณคดีบาลีในรัชสมัยพระเจ้าปรักกมพาหุที่ 1 มหาราช การสังคายนาและการรวมสงฆ์ 3 นิกาย |
| 11 | Chapter X: Sāriputta's Circle | pp. 196-219 | `S-1928-malalasekera-01-ch11` | บทที่ 2 (2.7), บทที่ 3 (3.1, 3.2), บทที่ 4 (4.1) | สำนักพระสารีบุตรสังฆราชแห่งโปโฬนนฤวะ การรจนาฎีกาพระอภิธรรมและไวยากรณ์ (สารัตถทีปนี, สารัตถสาลินี) |
| 12 | Chapter XI: The Age of Paṇḍita Parākrama | pp. 220-244 | `S-1928-malalasekera-01-ch12` | บทที่ 2 (2.7), บทที่ 3 (3.1, 3.2) | รัชสมัยพระเจ้าปรักกมพาหุที่ 2 แห่งทัมพเทณิยะ วรรณกรรมกวีนิพนธ์บาลี และการแลกเปลี่ยนกับสยาม |
| 13 | Chapter XII: The Twilight Glow | pp. 245-260 | `S-1928-malalasekera-01-ch13` | บทที่ 2 (2.7), บทที่ 3 (3.1), บทที่ 4 (4.1) | ยุคแสงสนธยา: การย้ายราชธานีสู่ยาปะฮุวะ กุรุเนกะละ คัมภีร์สัทธรรมสังคหะและวรรณกรรมสวดคุ้มภัย |
| 14 | Chapter XIII: The Dark Age | pp. 261-272 | `S-1928-malalasekera-01-ch14` | บทที่ 2 (2.7), บทที่ 3 (3.1, 3.6) | ยุคมืดแห่งการรุกรานของโปรตุเกส การสูญสิ้นสายการบวชอุปสมบท และภาวะวิกฤตของสังฆมณฑลลังกา |
| 15 | Chapter XIV: The Modern Period | pp. 273-306 | `S-1928-malalasekera-01-ch15` | บทที่ 3 (3.1, 3.6), บทที่ 4 (4.1) | การรื้อฟื้นสมณวงศ์โดยคณะสงฆ์สยาม (สยามวงศ์ รัชสมัยพระเจ้าบรมโกศ) พระสรณังกรสังฆราช และยุคฟื้นฟูพุทธบาลี |

---

### 2.2 หนังสือเล่มที่ 2: `1933-law-history-pali-literature-vol1.pdf & vol2.pdf` (Bimala Churn Law 1933)
- **ชื่อหนังสือ:** *A History of Pali Literature, Vols. I & II*
- **ความยาวและข้อมูลพิมพ์:** Vol. I: 387 หน้า, Vol. II: 239 หน้า (Kegan Paul, London)
- **Dossier กลาง (Master Umbrella):** `S-1933-law-01`
  - *การแมปปิ้งในรายงาน:* บทที่ 1 (1.1, 1.3), บทที่ 2 (2.1, 2.7), บทที่ 3 (3.1, 3.2, 3.8), บทที่ 4 (4.1, 4.6)
  - *บทบาทการสังเคราะห์:* สารานุกรมประวัติวรรณคดีบาลีฉบับมาตรฐานโลก ครอบคลุมทั้งวรรณกรรมชั้นพระไตรปิฎก (Canonical) และนอกพระไตรปิฎก (Post-canonical, Commentaries, Manuals, Chronicles)
- **ตารางแจกแจง Dossier ประจำบทครบถ้วน 100% (12 บท):**

| ลำดับบท | ชื่อบท / ส่วนย่อย | หน้า | รหัส Dossier ประจำบท | การแมปปิ้งบทและหัวข้อย่อย | บทบาทและประเด็นสำคัญในรายงาน |
|:---:|:---|:---:|:---|:---|:---|
| 1 | Vol 1 - Introduction | pp. ix-xxviii | `S-1933-law-01-ch01` | บทที่ 2 (2.1), บทที่ 3 (3.2), บทที่ 4 (4.1) | กำเนิดและถิ่นฐานดั้งเดิมของภาษาบาลี ข้อถกเถียงเรื่องมคธภาษาและปรากฤต |
| 2 | Vol 1 - Chapter I: Chronology of the Pali Canon | pp. 1-42 | `S-1933-law-01-ch02` | บทที่ 2 (2.1), บทที่ 3 (3.2), บทที่ 4 (4.1) | การจัดลำดับเวลาและวิวัฒนาการของพระไตรปิฎกบาลี การสังคายนา 3 ครั้ง |
| 3 | Vol 1 - Chapter II: Canonical Pali Literature | pp. 43-335 | `S-1933-law-01-ch03` | บทที่ 1 (1.1, 1.3), บทที่ 2 (2.1), บทที่ 3 (3.2, 3.3) | การจำแนกหมวดหมู่อย่างละเอียด: พระวินัยปิฎก, พระสุตตันตปิฎก (5 นิกาย), และพระอภิธรรมปิฎก (7 คัมภีร์) |
| 4 | Vol 1 - Chapter III: Pāli Counterparts of Sarvāstivāda Abhidhamma | pp. 336-384 | `S-1933-law-01-ch04` | บทที่ 2 (2.1, 2.3), บทที่ 3 (3.2, 3.8) | การเปรียบเทียบคัมภีร์อภิธรรม 7 คัมภีร์ฝ่ายบาลีเถรวาทกับฝ่ายสรวาสติวาทภาษาสันสกฤต |
| 5 | Vol 2 - Introduction: Post-Canonical Pali Literature | pp. v-xx | `S-1933-law-01-ch05` | บทที่ 2 (2.7), บทที่ 3 (3.1), บทที่ 4 (4.1) | ภาพรวมวรรณกรรมบาลียุคหลังพุทธปรินิพพาน ช่องว่างประวัติศาสตร์ก่อนยุคพระพุทธโฆสะ |
| 6 | Vol 2 - Chapter IV: Extra Canonical Works Presupposed by Commentaries | pp. 343-383 | `S-1933-law-01-ch06` | บทที่ 2 (2.7), บทที่ 3 (3.1, 3.2), บทที่ 4 (4.1) | คัมภีร์นอกสารบบที่เป็นฐานให้อรรถกถา: เนตติปกรณ์ เปฏโกปเทส มิลินทปัญหา และอรรถกถาสิงหลโบราณ |
| 7 | Vol 2 - Chapter V: Pali Commentaries | pp. 384-516 | `S-1933-law-01-ch07` | บทที่ 3 (3.1, 3.2, 3.8), บทที่ 4 (4.1) | การวิเคราะห์อรรถกถาพระไตรปิฎกทั้งหมดของพระพุทธโฆสะ พระพุทธทัตตะ พระธรรมปาละ พระอุปเสนะ |
| 8 | Vol 2 - Chapter VI: Pali Chronicles | pp. 517-596 | `S-1933-law-01-ch08` | บทที่ 2 (2.7), บทที่ 3 (3.1), บทที่ 4 (4.1) | คัมภีร์พงศาวดารบาลี: ทีปวงศ์ มหาวงศ์ ถูปวงศ์ โพธิวงศ์ ธาตุวงศ์ สัทธรรมสังคหะ |
| 9 | Vol 2 - Chapter VII: Pali Manuals | pp. 597-610 | `S-1933-law-01-ch09` | บทที่ 3 (3.2, 3.8), บทที่ 4 (4.1) | คัมภีร์คู่มือย่อ: อภิธัมมัตถสังคหะ, อภิธัมมาวตาร, รูปารูปวิภาค, ขุททกสิกขา, มูลสิกขา (ฐานสำคัญของโยคาวจร) |
| 10 | Vol 2 - Chapter VIII: Pali Literary Pieces | pp. 611-629 | `S-1933-law-01-ch10` | บทที่ 3 (3.2), บทที่ 4 (4.1) | วรรณคดีร้อยกรองและกวีนิพนธ์บาลี: ชินจริต, เตลกฏาหคาถา, ปัญจคติทีปนี, ปัชชะมธุ |
| 11 | Vol 2 - Chapter IX: Pali Grammars, Lexicographies, Prosody | pp. 630-641 | `S-1933-law-01-ch11` | บทที่ 3 (3.2), บทที่ 4 (4.1) | ตำราไวยากรณ์บาลีสำนักกัจจายนะ โมคคัลลานะ สัททนีติ และพจนานุกรมอภิธานัปปทีปิกา |
| 12 | Vol 2 - Conclusion & Appendices | pp. 642-676 | `S-1933-law-01-ch12` | บทที่ 4 (4.1, 4.7) | บทสรุปคุณค่าของวรรณคดีบาลี และภาคผนวกประวัติศาสตร์โบราณคดี |

---

### 2.3 หนังสือเล่มที่ 3: `1933-winternitz-history-indian-literature-vol2.pdf` (Maurice Winternitz 1933)
- **ชื่อหนังสือ:** *A History of Indian Literature, Vol. II: Buddhist Literature and Jaina Literature*
- **ความยาวและข้อมูลพิมพ์:** 656 หน้า (University of Calcutta)
- **Dossier กลาง (Master Umbrella):** `S-1933-winternitz-01`
  - *การแมปปิ้งในรายงาน:* บทที่ 1 (1.1, 1.2), บทที่ 2 (2.1, 2.3, 2.4), บทที่ 4 (4.1, 4.6)
  - *บทบาทการสังเคราะห์:* งานประวัติศาสตร์วรรณกรรมศาสนาอินเดียชิ้นเอกระดับโลก วิเคราะห์สายธารวรรณคดีพุทธทั้งบาลี สันสกฤต และวรรณกรรมตันตระยุคต้น-ยุคปลาย พร้อมการเปรียบเทียบกับวรรณกรรมเชน
- **ตารางแจกแจง Dossier ประจำบทครบถ้วน 100% (11 บท):**

| ลำดับบท | ชื่อบท / ส่วนย่อย | หน้า | รหัส Dossier ประจำบท | การแมปปิ้งบทและหัวข้อย่อย | บทบาทและประเด็นสำคัญในรายงาน |
|:---:|:---|:---:|:---|:---|:---|
| 1 | Preface & Introductory Orientation | pp. ix-xx | `S-1933-winternitz-01-ch01` | บทที่ 4 (4.1) | คำนำประวัติศาสตร์นิพนธ์ การค้นพบวรรณกรรมพุทธสันสกฤตในเอเชียกลางและการประเมินสถานะ |
| 2 | Section III, Part 1: The Pali Canon or Tipitaka | pp. 1-173 | `S-1933-winternitz-01-ch02` | บทที่ 2 (2.1), บทที่ 3 (3.2, 3.3), บทที่ 4 (4.1) | พระไตรปิฎกบาลี: วินัย สุตตันตะ (บทเทศนา นิทาน ชาดก คาถาภาษิต) และอภิธรรมเชิงวิเคราะห์ |
| 3 | Section III, Part 2: Non-Canonical Pali Literature | pp. 174-226 | `S-1933-winternitz-01-ch03` | บทที่ 2 (2.7), บทที่ 3 (3.1, 3.2), บทที่ 4 (4.1) | วรรณกรรมบาลีนอกสารบบ มิลินทปัญหา อรรถกถาของพระพุทธโฆสะ และพงศาวดารบาลี |
| 4 | Section III, Part 3: Buddhist Literature in Pure and Mixed Sanskrit | pp. 226-276 | `S-1933-winternitz-01-ch04` | บทที่ 2 (2.1, 2.3), บทที่ 4 (4.1) | วรรณกรรมพุทธภาษาสันสกฤต: ซากพระไตรปิฎกสันสกฤต มหาวัสตุ ลลิตวิสตระ และกวีอัศวโฆษ |
| 5 | Section III, Part 4: The Avadāna Literature | pp. 277-294 | `S-1933-winternitz-01-ch05` | บทที่ 2 (2.1, 2.3), บทที่ 4 (4.1) | วรรณกรรมอวทาน: อวทานศตกะ ทิวยาวทาน และการเผยแผ่คติบารมีข้ามภูมิภาค |
| 6 | Section III, Part 5: The Mahāyāna-Sūtras | pp. 294-341 | `S-1933-winternitz-01-ch06` | บทที่ 2 (2.1, 2.3), บทที่ 4 (4.1) | พระสูตรมหายานแม่บท: ปรัชญาปารมิตา สัทธรรมปุณฑริกสูตร สุวรรณประภาสสูตร คัณฑพยุหะ |
| 7 | Section III, Part 6: Masters and Poets of the Mahāyāna | pp. 341-376 | `S-1933-winternitz-01-ch07` | บทที่ 2 (2.1, 2.3), บทที่ 4 (4.1) | มหาปราชญ์มหายาน: นาคารชุน อารยเทวะ อสังคะ วสุพันธุ ทิคนาคะ และสันติเทวะ |
| 8 | Section III, Part 7: Māhātmya, Stotras, Dhāraṇīs and Tantras | pp. 376-401 | `S-1933-winternitz-01-ch08` | บทที่ 1 (1.2), บทที่ 2 (2.1, 2.3, 2.4), บทที่ 4 (4.1) | หัวใจสำคัญ: วรรณกรรมบทสรรเสริญ มนตรา ธารณี และตันตระพุทธ วิวัฒนาการสู่มนตรยานและวัชรยาน |
| 9 | Section III, Part 8: Buddhist Literature and Universal Literature | pp. 402-423 | `S-1933-winternitz-01-ch09` | บทที่ 2 (2.1), บทที่ 4 (4.1) | วรรณกรรมพุทธศาสนากับวรรณกรรมสากล การถ่ายทอดนิทานชาดกสู่ตะวันตกและอาหรับ |
| 10 | Section IV: Jaina Literature | pp. 424-595 | `S-1933-winternitz-01-ch10` | บทที่ 2 (2.1, 2.2), บทที่ 4 (4.1) | วรรณกรรมศาสนาเชน คัมภีร์สิทธันตะ วรรณกรรมนอกสารบบ และการปะทะกับพุทธและพราหมณ์ |
| 11 | Appendices I-VI | pp. 597-616 | `S-1933-winternitz-01-ch11` | บทที่ 2 (2.1), บทที่ 4 (4.1) | ปีปรินิพพานของพระพุทธเจ้า, ภาษาบาลีคืออะไร?, ศิลาจารึกอโศก, ยุคสมัยของพระพุทธโฆสะและพระเจ้ากนิษกะ |

---

### 2.4 หนังสือเล่มที่ 4: `1916-geiger-pali-literatur-und-sprache.pdf` (Wilhelm Geiger 1916)
- **ชื่อหนังสือ:** *Pāli Literatur und Sprache*
- **ความยาวและข้อมูลพิมพ์:** 200 หน้า (Karl J. Trübner, Strassburg)
- **Dossier กลาง (Master Umbrella):** `S-1916-geiger-01`
  - *การแมปปิ้งในรายงาน:* บทที่ 1 (1.3), บทที่ 2 (2.1, 2.7), บทที่ 3 (3.1, 3.2, 3.3), บทที่ 4 (4.1, 4.6)
  - *บทบาทการสังเคราะห์:* คู่มือไวยากรณ์และประวัติวรรณคดีบาลีภาษาเยอรมันระดับอนุสรณ์ วางรากฐานนิรุกติศาสตร์ภาษาบาลี กฎทางสัทวิทยา (Lautlehre) และการจัดชั้นยุคสมัยของวรรณกรรมบาลี
- **ตารางแจกแจง Dossier ประจำบทครบถ้วน 100% (8 บท):**

| ลำดับบท | ชื่อบท / ส่วนย่อย | หน้า | รหัส Dossier ประจำบท | การแมปปิ้งบทและหัวข้อย่อย | บทบาทและประเด็นสำคัญในรายงาน |
|:---:|:---|:---:|:---|:---|:---|
| 1 | Einleitung: Begriff des Pāli und Sprachschichten | pp. 1-4 | `S-1916-geiger-01-ch01` | บทที่ 2 (2.1), บทที่ 3 (3.2), บทที่ 4 (4.1) | มโนทัศน์คำว่าบาลี ชั้นของภาษา บาลีในฐานะภาษาวรรณกรรม และความสัมพันธ์กับภาษามคธ |
| 2 | Abschnitt I, Teil I: Die kanonische Literatur | pp. 5-16 | `S-1916-geiger-01-ch02` | บทที่ 2 (2.1), บทที่ 3 (3.2, 3.3), บทที่ 4 (4.1) | วรรณกรรมพระไตรปิฎกบาลี: วินัย สุตตะ อภิธรรม และบทสวดปริตร (Das Paritta) |
| 3 | Abschnitt I, Teil II.1: Nichtkanonische Literatur (bis 5. Jh.) | pp. 17-18 | `S-1916-geiger-01-ch03` | บทที่ 2 (2.7), บทที่ 3 (3.1, 3.2), บทที่ 4 (4.1) | วรรณกรรมนอกสารบบยุคที่ 1: สีหลัฏฐกถาโบราณ เนตติปกรณ์ เปฏโกปเทส สุตตสังคหะ มิลินทปัญหา ทีปวงศ์ |
| 4 | Abschnitt I, Teil II.2: Nichtkanonische Literatur (5.-11. Jh.) | pp. 19-25 | `S-1916-geiger-01-ch04` | บทที่ 2 (2.7), บทที่ 3 (3.1, 3.2), บทที่ 4 (4.1) | วรรณกรรมนอกสารบบยุคที่ 2: งานของพระพุทธโฆสะ พระพุทธทัตตะ พระธรรมปาละ มหาวงศ์ โพธิวงศ์ คัมภีร์สิกขา |
| 5 | Abschnitt I, Teil II.3: Nichtkanonische Literatur (12. Jh. bis Neuzeit) | pp. 26-38 | `S-1916-geiger-01-ch05` | บทที่ 2 (2.7), บทที่ 3 (3.1, 3.2), บทที่ 4 (4.1) | วรรณกรรมนอกสารบบยุคที่ 3: สำนักพระสารีบุตร ฎีกา วรรณกรรมพม่าและล้านนา (สัทธรรมสังคหะ, โลกทีปสาระ) |
| 6 | Abschnitt II, Teil A: Grammatik des Pāli - Lautlehre | pp. 39-76 | `S-1916-geiger-01-ch06` | บทที่ 1 (1.3), บทที่ 3 (3.2, 3.3), บทที่ 4 (4.1) | สัทวิทยาภาษาบาลี: กฎโมเรน (Morengesetz) สระ พยัญชนะ การแปรเสียง (ฐานสำคัญของอักขรวิทยาและสัททวิมล) |
| 7 | Abschnitt II, Teil B: Grammatik des Pāli - Formenlehre | pp. 77-178 | `S-1916-geiger-01-ch07` | บทที่ 3 (3.2, 3.3), บทที่ 4 (4.1) | สัณฐานวิทยาภาษาบาลี: การแจกรูปนาม การผันกริยา คำสรรพนาม และโครงสร้างประโยค |
| 8 | Index und Glossar | pp. 179-200 | `S-1916-geiger-01-ch08` | บทที่ 3 (3.2), บทที่ 4 (4.1) | ดัชนีคำศัพท์บาลีและการตรวจสอบรากศัพท์ตามหลักภาษาศาสตร์เปรียบเทียบ |

---

### 2.5 หนังสือเล่มที่ 5: `1984-tambiah-buddhist-saints-forest-amulets.pdf` (Stanley Jeyaraja Tambiah 1984)
- **ชื่อหนังสือ:** *The Buddhist Saints of the Forest and the Cult of Amulets*
- **ความยาวและข้อมูลพิมพ์:** 429 หน้า (Cambridge University Press)
- **Dossier กลาง (Master Umbrella):** `S-1984-tambiah-01`
  - *การแมปปิ้งในรายงาน:* บทที่ 1 (1.4, 1.5), บทที่ 3 (3.1, 3.3, 3.4, 3.6, 3.7), บทที่ 4 (4.3, 4.6)
  - *บทบาทการสังเคราะห์:* มหาผลงานมานุษยวิทยาศาสนาชิ้นเอก ศึกษาความเชื่อมโยงระหว่างพระอรหันต์สายป่าในไทย การฝึกสมาธิวิปัสสนา การแปรสภาพบารมีธรรมสู่พลังวัตถุมงคล (Amulets) และการเมืองคณะสงฆ์
- **ตารางแจกแจง Dossier ประจำบทครบถ้วน 100% (22 บท):**

| ลำดับบท | ชื่อบท / ส่วนย่อย | หน้า | รหัส Dossier ประจำบท | การแมปปิ้งบทและหัวข้อย่อย | บทบาทและประเด็นสำคัญในรายงาน |
|:---:|:---|:---:|:---|:---|:---|
| 1 | Chapter 1: Introduction and Manifesto | pp. 1-10 | `S-1984-tambiah-01-ch01` | บทที่ 1 (1.5), บทที่ 3 (3.4, 3.7), บทที่ 4 (4.3) | บทนำและแถลงการณ์วิจัย: การเชื่อมประสานระหว่างคัมภีร์ มานุษยวิทยาภาคสนาม และวัฒนธรรมวัตถุ |
| 2 | Chapter 2: The Buddhist Conception of the Arahant | pp. 11-27 | `S-1984-tambiah-01-ch02` | บทที่ 1 (1.5), บทที่ 3 (3.3, 3.4) | มโนทัศน์พระอรหันต์ในพุทธศาสนาเถรวาท คุณธรรม อภิญญา และบารมีเหนือธรรมชาติ |
| 3 | Chapter 3: The Path of Purification: The Ascetic Practices | pp. 28-37 | `S-1984-tambiah-01-ch03` | บทที่ 3 (3.3, 3.4) | วิสุทธิมรรคและการถือธุดงควัตร 13 ข้อย่อย การชำระกายใจในป่าเขา |
| 4 | Chapter 4: The Stages and Rewards of Buddhist Meditation | pp. 38-52 | `S-1984-tambiah-01-ch04` | บทที่ 1 (1.3), บทที่ 3 (3.3, 3.4) | ขั้นตอนและอานิสงส์ของการเจริญสมาธิภาวนา: ฌาน ญาณ และการเกิดฤทธิ์อำนาจทางจิต |
| 5 | Chapter 5: The Forest-Monk Tradition in Southeast Asia | pp. 53-80 | `S-1984-tambiah-01-ch05` | บทที่ 3 (3.1, 3.4, 3.5) | ภูมิหลังประวัติศาสตร์ของจารีตพระป่าในอุษาคเนย์ ลังกา สยาม ล้านนา และพม่า |
| 6 | Chapter 6: The Biography of a Modern Saint | pp. 81-110 | `S-1984-tambiah-01-ch06` | บทที่ 3 (3.4, 3.7) | ชีวประวัติพระอาจารย์มั่น ภูริทัตโต ในฐานะพระอริยเจ้าร่วมสมัย การธุดงค์และการเผชิญหน้ากับวิญญาณ |
| 7 | Chapter 7: The Buddha's Life as Paradigm | pp. 111-123 | `S-1984-tambiah-01-ch07` | บทที่ 3 (3.4, 3.7) | พุทธประวัติในฐานะกระบวนทัศน์ต้นแบบของชีวประวัติพระสงฆ์สายอรัญวาสี |
| 8 | Chapter 8: The Ordering Principles behind Saintly Biography | pp. 124-131 | `S-1984-tambiah-01-ch08` | บทที่ 3 (3.4), บทที่ 4 (4.3) | หลักการจัดระเบียบโครงสร้างวรรณกรรมชีวประวัติศักดิ์สิทธิ์ (Hagiography) ของพระสุปฏิปันโน |
| 9 | Chapter 9: The Disciples of the Master | pp. 132-141 | `S-1984-tambiah-01-ch09` | บทที่ 3 (3.4, 3.7) | เครือข่ายศิษยานุศิษย์ของพระอาจารย์มั่น: การขยายตัวของสายพระป่าในภาคอีสานและภาคเหนือ |
| 10 | Chapter 10: The Biographer as Exemplary Forest-Monk | pp. 142-153 | `S-1984-tambiah-01-ch10` | บทที่ 3 (3.4, 3.7) | หลวงตามหาบัว ญาณสัมปันโน ในฐานะผู้บันทึกชีวประวัติ พระนักปฏิบัติ และครูอาจารย์ |
| 11 | Chapter 11: Sectarianism and the Sponsorship of Meditation | pp. 154-167 | `S-1984-tambiah-01-ch11` | บทที่ 1 (1.4), บทที่ 3 (3.4, 3.6) | การแบ่งแยกนิกายธรรมยุต-มหานิกาย และการอุปถัมภ์การเจริญภาวนาโดยชนชั้นนำกรุงเทพฯ |
| 12 | Chapter 12: The Mahanikai Sect's Propagation of Lay Meditation | pp. 168-182 | `S-1984-tambiah-01-ch12` | บทที่ 1 (1.4), บทที่ 3 (3.4, 3.6) | การเผยแผ่วิปัสสนาสำหรับคฤหัสถ์ของฝ่ายมหานิกาย: บทบาทของวัดมหาธาตุและพระพิมลธรรม (อาจ อาสโภ) |
| 13 | Chapter 13: The Center-Periphery Dialectic | pp. 183-194 | `S-1984-tambiah-01-ch13` | บทที่ 1 (1.4), บทที่ 3 (3.4, 3.6) | ปฏิสัมพันธ์ศูนย์กลาง-ชายขอบ: การเปรียบเทียบการอุปถัมภ์สมาธิระหว่างวัดบวรนิเวศและวัดมหาธาตุ |
| 14 | Chapter 14: The Cult of Images and Amulets | pp. 195-207 | `S-1984-tambiah-01-ch14` | บทที่ 1 (1.5), บทที่ 3 (3.7), บทที่ 4 (4.3) | การบูชาพระพุทธรูป พระพิมพ์ และพระเครื่องราง: การแปรนามธรรมแห่งบารมีสู่รูปธรรมทางวัตถุ |
| 15 | Chapter 15: An Enumeration of Historic and Popular Amulets | pp. 208-229 | `S-1984-tambiah-01-ch15` | บทที่ 1 (1.5), บทที่ 3 (3.7) | สำรวจทำเนียบพระเครื่องยอดนิยมในสยาม: สมเด็จวัดระฆัง (สมเด็จโต), พระรอด, พระนางพญา |
| 16 | Chapter 16: The 'Likeness' of the Image to the Original Buddha | pp. 230-242 | `S-1984-tambiah-01-ch16` | บทที่ 1 (1.5), บทที่ 3 (3.7) | ความเสมือนจริงของพระพุทธรูปกับพระสัมมาสัมพุทธเจ้าองค์จริง: กรณีศึกษาพระพุทธสิหิงค์ |
| 17 | Chapter 17: The Process of Sacralizing Images and Amulets | pp. 243-257 | `S-1984-tambiah-01-ch17` | บทที่ 1 (1.5), บทที่ 3 (3.3, 3.7) | กระบวนการปลุกเสกพุทธาภิเษก: การถ่ายทอดพลังจิตวิทยาคม อักขระหัวใจพระคาถา และการเดินธาตุ |
| 18 | Chapter 18: Amulets Blessed by Contemporary Forest Saints | pp. 258-273 | `S-1984-tambiah-01-ch18` | บทที่ 1 (1.5), บทที่ 3 (3.4, 3.7) | วัตถุมงคลที่อธิษฐานจิตโดยพระป่าร่วมสมัย: หลวงปู่แหวน, หลวงปู่ดูลย์, หลวงปู่ขาว |
| 19 | Chapter 19: Saints on Cosmic Mountains | pp. 274-292 | `S-1984-tambiah-01-ch19` | บทที่ 1 (1.5), บทที่ 3 (3.4, 3.7) | พระอริยเจ็าบนภูเขาศักดิ์สิทธิ์: ภูมิศาสตร์ศักดิ์สิทธิ์ การสร้างวัดบนยอดเขา และการเชื่อมต่อมณฑล |
| 20 | Chapter 20: Millennial Buddhism in Thailand and Burma | pp. 293-320 | `S-1984-tambiah-01-ch20` | บทที่ 1 (1.5), บทที่ 3 (3.5, 3.7) | พุทธศาสนาแบบสหัสวรรษนิยมในไทยและพม่า: ขบวนการกบฏผู้มีบุญ คติพระศรีอารย์ และเวชชา |
| 21 | Chapter 21: Sources of Charismatic Leadership: Max Weber Revisited | pp. 321-334 | `S-1984-tambiah-01-ch21` | บทที่ 1 (1.5), บทที่ 4 (4.3) | ทบทวนทฤษฎีบารมี (Charisma) ของมักซ์ เวเบอร์ ในบริบทอำนาจทางจิตของพระสงฆ์ไทย |
| 22 | Chapter 22: The Objectification of Charisma and Fetishism | pp. 335-347 | `S-1984-tambiah-01-ch22` | บทที่ 1 (1.5), บทที่ 3 (3.7), บทที่ 4 (4.3) | การแปรบารมีให้กลายเป็นวัตถุ (Objectification of Charisma) และปรากฏการณ์ความหลงใหลในวัตถุมงคล |

---

### 2.6 หนังสือเล่มที่ 6: `1998-gethin-foundations-of-buddhism.pdf` (Rupert Gethin 1998)
- **ชื่อหนังสือ:** *The Foundations of Buddhism*
- **ความยาวและข้อมูลพิมพ์:** 354 หน้า (Oxford University Press)
- **Dossier กลาง (Master Umbrella):** `S-1998-gethin-01`
  - *การแมปปิ้งในรายงาน:* บทที่ 1 (1.1, 1.3, 1.7), บทที่ 2 (2.1, 2.3, 2.4), บทที่ 3 (3.3, 3.8), บทที่ 4 (4.3)
  - *บทบาทการสังเคราะห์:* ตำรามาตรฐานระดับโลกว่าด้วยรากฐานพุทธศาสนา โครงสร้างพระอภิธรรม สมาธิ สมถะ-วิปัสสนา จักรวาลวิทยา และวิวัฒนาการจากเถรวาทสู่มหายานและวัชรยาน
- **ตารางแจกแจง Dossier ประจำบทครบถ้วน 100% (11 บท):**

| ลำดับบท | ชื่อบท / ส่วนย่อย | หน้า | รหัส Dossier ประจำบท | การแมปปิ้งบทและหัวข้อย่อย | บทบาทและประเด็นสำคัญในรายงาน |
|:---:|:---|:---:|:---|:---|:---|
| 1 | Introduction | pp. 1-6 | `S-1998-gethin-01-ch01` | บทที่ 1 (1.1), บทที่ 4 (4.3) | บทนำ: ปัญหาการนิยามคำว่า 'พุทธศาสนา' ในฐานะระบบที่มีความหลากหลายเชิงประวัติศาสตร์ |
| 2 | Chapter 1: The Buddha: The Story of the Awakened One | pp. 7-34 | `S-1998-gethin-01-ch02` | บทที่ 2 (2.1), บทที่ 3 (3.3) | พระพุทธเจ้าเชิงประวัติศาสตร์ ตำนานการตรัสรู้ และธรรมชาติของภาวะพุทธะ |
| 3 | Chapter 2: The Word of the Buddha: Buddhist Scriptures and Schools | pp. 35-58 | `S-1998-gethin-01-ch03` | บทที่ 2 (2.1, 2.3), บทที่ 3 (3.2) | พระธรรมวินัย การปฐมสังคายนา พระสูตร พระอภิธรรม การแตกนิกายโบราณ และการเกิดมหายาน |
| 4 | Chapter 3: Four Truths: The Disease, Cause, Cure, Medicine | pp. 59-84 | `S-1998-gethin-01-ch04` | บทที่ 2 (2.1), บทที่ 3 (3.3) | อริยสัจ 4: ทุกข์ สมุทัย นิโรธ มรรค โครงสร้างทางการแพทย์ของการหลุดพ้น |
| 5 | Chapter 4: The Buddhist Community: Monks, Nuns, Lay Followers | pp. 85-111 | `S-1998-gethin-01-ch05` | บทที่ 2 (2.1), บทที่ 3 (3.1, 3.6) | การจัดระเบียบสังฆะ พระวินัย การบรรพชา และกรอบคิดของ Spiro (พุทธศาสนาคุ้มภัย, บุญญนิยม, นิพพานิยม) |
| 6 | Chapter 5: The Buddhist Cosmos: The Thrice-Thousandfold World | pp. 112-132 | `S-1998-gethin-01-ch06` | บทที่ 1 (1.3), บทที่ 2 (2.4), บทที่ 3 (3.3) | จักรวาลวิทยาพุทธ: ภูมิ 31 โลกธาตุ มิติเชิงพื้นที่-เวลา และความเชื่อมโยงระดับจุลจักรวาล-มหจักรวาล |
| 7 | Chapter 6: No Self: Personal Continuity and Dependent Arising | pp. 133-162 | `S-1998-gethin-01-ch07` | บทที่ 1 (1.3), บทที่ 3 (3.3, 3.8) | อนัตตา: การวิพากษ์อาตมัน ความต่อเนื่องของบุคคล ปฏิจจสมุปบาท และวิถีแห่งการเกิด-ดับ |
| 8 | Chapter 7: The Buddhist Path: The Way of Calm and Insight | pp. 163-201 | `S-1998-gethin-01-ch08` | บทที่ 1 (1.1, 1.3), บทที่ 3 (3.3, 3.8) | มรรควิธี: ศรัทธา ศีล สมาธิสมถะ (ฌาน 4 นิมิต) และวิปัสสนาญาณ 16 (หัวใจการเทียบเคียงโยคาวจร) |
| 9 | Chapter 8: The Abhidharma: The Higher Teaching | pp. 202-223 | `S-1998-gethin-01-ch09` | บทที่ 1 (1.3), บทที่ 3 (3.2, 3.3, 3.8) | พระอภิธรรม: ระบบปรมัตถธรรม จิต เจตสิก รูป นิพพาน วิถีจิต กรรม และการสืบต่อภพชาติ |
| 10 | Chapter 9: The Mahāyāna: The Great Vehicle | pp. 224-252 | `S-1998-gethin-01-ch10` | บทที่ 2 (2.1, 2.3, 2.4) | มหายาน: ยานพระโพธิสัตว์ พระพุทธเจ้าข้ามมิติ สุญญตา มาธยมกะ โยคาจาร และตถาคตครรภ์ |
| 11 | Chapter 10: Evolving Traditions: South, East, North, and West | pp. 253-301 | `S-1998-gethin-01-ch11` | บทที่ 1 (1.1, 1.2), บทที่ 2 (2.5), บทที่ 3 (3.1, 3.8) | สายธารวิวัฒนาการ: เถรวาทสายใต้ (ศรีลังกา อุษาคเนย์), พุทธสายเอเชียตะวันออก, ทิเบตสายเหนือ, และโลกตะวันตก |

---

### 2.7 หนังสือเล่มที่ 7: `2007-mackenzie-new-buddhist-movements-thailand.pdf` (Rory Mackenzie 2007)
- **ชื่อหนังสือ:** *New Buddhist Movements in Thailand: Towards an Understanding of Wat Phra Dhammakaya and Santi Asoke*
- **ความยาวและข้อมูลพิมพ์:** 268 หน้า (Routledge)
- **Dossier กลาง (Master Umbrella):** `S-2007-mackenzie-01`
  - *การแมปปิ้งในรายงาน:* บทที่ 1 (1.3, 1.4, 1.5), บทที่ 3 (3.3, 3.4, 3.6, 3.7), บทที่ 4 (4.4)
  - *บทบาทการสังเคราะห์:* งานวิจัยวิเคราะห์ขบวนการพุทธร่วมสมัยในไทย เจาะลึกสายวิชชาธรรมกาย (วัดพระธรรมกายและสายวัดปากน้ำ) และสันติอโศก สรีรวิทยาการเห็นดวงแก้วและกายธรรม
- **ตารางแจกแจง Dossier ประจำบทครบถ้วน 100% (10 บท):**

| ลำดับบท | ชื่อบท / ส่วนย่อย | หน้า | รหัส Dossier ประจำบท | การแมปปิ้งบทและหัวข้อย่อย | บทบาทและประเด็นสำคัญในรายงาน |
|:---:|:---|:---:|:---|:---|:---|
| 1 | Introduction & Literature Review | pp. 1-17 | `S-2007-mackenzie-01-ch01` | บทที่ 1 (1.5), บทที่ 4 (4.4) | บทนำและการทบทวนวรรณกรรมวิชาการว่าด้วยขบวนการวัดพระธรรมกายและสันติอโศก |
| 2 | Chapter 1: Setting the Scene: Religious & Socio-Political Context | pp. 18-29 | `S-2007-mackenzie-01-ch02` | บทที่ 1 (1.4), บทที่ 3 (3.6, 3.7) | บริบททางศาสนาและสังคมการเมืองไทยในทศวรรษ 1970–1990 ที่เอื้อต่อการเกิดขบวนการใหม่ |
| 3 | Chapter 2: Inception and Development of Wat Phra Dhammakaya | pp. 30-55 | `S-2007-mackenzie-01-ch03` | บทที่ 1 (1.5), บทที่ 3 (3.4, 3.7) | จุดกำเนิดและพัฒนาการของวัดพระธรรมกาย: แม่ชีจันทร์ ขนนกยูง, พระธัมมชโย และรากฐานสายหลวงพ่อสด |
| 4 | Chapter 3: An Analysis of the Wat Phra Dhammakaya Movement | pp. 56-97 | `S-2007-mackenzie-01-ch04` | บทที่ 1 (1.5), บทที่ 3 (3.7), บทที่ 4 (4.4) | การวิเคราะห์โครงสร้างองค์กร พิธีกรรมมหาทานบารมี การตลาดทางศาสนา และคดีความทางกฎหมาย |
| 5 | Chapter 4: The Approach of Wat Phra Dhammakaya to Spiritual Development | pp. 98-114 | `S-2007-mackenzie-01-ch05` | บทที่ 1 (1.3, 1.5), บทที่ 3 (3.3, 3.4, 3.7) | ระบบการปฏิบัติภาวนาวิชชาธรรมกาย: ศูนย์กลางกายฐานที่ 7 การเห็นดวงปฐมมรรค กายธรรมซ้อนกาย และพระนิพพานเป็นอัตตา |
| 6 | Chapter 5: History of Santi Asoke and its Communities | pp. 115-142 | `S-2007-mackenzie-01-ch06` | บทที่ 1 (1.4), บทที่ 3 (3.6, 3.7) | ประวัติศาสตร์ขบวนการสันติอโศก สมณะโพธิรักษ์ และการก่อตั้งชุมชนพุทธเกษตรกรรมพึ่งพาตนเอง |
| 7 | Chapter 6: Distinctives of Santi Asoke and Analysis of the Movement | pp. 143-173 | `S-2007-mackenzie-01-ch07` | บทที่ 1 (1.4), บทที่ 3 (3.6, 3.7) | ลักษณะเด่นของสันติอโศก: การกินมังสวิรัติ การปฏิเสธพิธีกรรมไสยศาสตร์ และการเมืองพรรคพลังธรรม |
| 8 | Chapter 7: The Approach of Santi Asoke to Spiritual Purification | pp. 174-185 | `S-2007-mackenzie-01-ch08` | บทที่ 1 (1.4), บทที่ 3 (3.6) | มรรควิธีชำระกิเลสของสันติอโศก: การปฏิบัติธรรมเชิงสังคมในชีวิตประจำวันตรงข้ามกับการนั่งสมาธิหลับตา |
| 9 | Chapter 8: Conclusion | pp. 186-196 | `S-2007-mackenzie-01-ch09` | บทที่ 1 (1.5), บทที่ 3 (3.7), บทที่ 4 (4.4) | บทสรุปเปรียบเทียบสองขบวนการ: ความแตกต่างทางเทววิทยา พิธีกรรม และอนาคตของพุทธไทย |
| 10 | Appendices: Methodology and Questionnaires | pp. 197-209 | `S-2007-mackenzie-01-ch10` | บทที่ 4 (4.4, 4.7) | ระเบียบวิธีวิจัย การเก็บข้อมูลภาคสนาม และการวิเคราะห์แบบสอบถาม |

---

### 2.8 หนังสือเล่มที่ 8: `2010-demers-gu-rir-de-soi-dans-la-modernit-le-cas-de.pdf` (Bruno Demers 2010)
- **ชื่อหนังสือ:** *Guérir de soi dans la modernité: Le cas de la pratique de la méditation Vipassana*
- **ความยาวและข้อมูลพิมพ์:** 310 หน้า (Doctoral Dissertation, Université de Montréal)
- **Dossier กลาง (Master Umbrella):** `S-2010-demers-01`
  - *การแมปปิ้งในรายงาน:* บทที่ 1 (1.3, 1.4), บทที่ 3 (3.3, 3.6, 3.7), บทที่ 4 (4.4, 4.7)
  - *บทบาทการสังเคราะห์:* วิทยานิพนธ์ปริญญาเอกภาษาฝรั่งเศส ศึกษาการเยียวยาตนเองในการเจริญภาวนาวิปัสสนาสมัยใหม่สาย S.N. Goenka วิเคราะห์วาทศิลป์ความทันสมัย การตัดพิธีกรรม และการแปรสภาพสู่เทคนิคการแพทย์เชิงจิต
- **ตารางแจกแจง Dossier ประจำบทครบถ้วน 100% (7 บท):**

| ลำดับบท | ชื่อบท / ส่วนย่อย | หน้า | รหัส Dossier ประจำบท | การแมปปิ้งบทและหัวข้อย่อย | บทบาทและประเด็นสำคัญในรายงาน |
|:---:|:---|:---:|:---|:---|:---|
| 1 | Chapitre I: Introduction: Modernité, souffrance et guérison | pp. 1-10 | `S-2010-demers-01-ch01` | บทที่ 1 (1.4), บทที่ 4 (4.4) | ความทันสมัย ความทุกข์ระทม และการเยียวยา: ปัญหาการแสวงหาความสงบสุขของคนยุคใหม่ |
| 2 | Chapitre II: Problématique et méthodologie | pp. 11-44 | `S-2010-demers-01-ch02` | บทที่ 1 (1.4), บทที่ 3 (3.6), บทที่ 4 (4.4) | กรณีศึกษาประเพณีวิปัสสนาของ ส.น. โกเอนก้า (S.N. Goenka) กำเนิด ความหลากหลาย และวิธีวิจัยแบบมีส่วนร่วม |
| 3 | Chapitre III: La méditation Vipassana | pp. 45-112 | `S-2010-demers-01-ch03` | บทที่ 1 (1.3), บทที่ 3 (3.3) | ขั้นตอนภาวนา: อานาปานสติ วิปัสสนา เมตตา กระบวนการทางพิธีกรรมและการปรับสมดุลกายใจ (Psychosomatic) |
| 4 | Chapitre IV: Les méditants Vipassana: Diversité et unité | pp. 113-154 | `S-2010-demers-01-ch04` | บทที่ 1 (1.4), บทที่ 3 (3.7) | ผู้ปฏิบัติวิปัสสนา: ความหลากหลายทางภูมิหลัง ความทุกข์ และวาทกรรมเรื่องจริยธรรม อัตลักษณ์ และการเมือง |
| 5 | Chapitre V: Guérir de soi dans la modernité | pp. 155-212 | `S-2010-demers-01-ch05` | บทที่ 1 (1.4), บทที่ 3 (3.6), บทที่ 4 (4.4, 4.7) | วาทศิลป์สมัยใหม่ 5 ประการ: ความเป็นโลกียะ (Secularity), ความเป็นเทคนิค (Technicity), ความเป็นวิชาการ, ความแจ่มชัด, และความแท้จริง |
| 6 | Chapitre VI: Conclusion | pp. 213-241 | `S-2010-demers-01-ch06` | บทที่ 4 (4.4, 4.7) | บทสรุป: ประสิทธิผลของการภาวนา และการประเมินระเบียบวิธีวิจัยแบบชาติพันธุ์วรรณนา expérientielle |
| 7 | Annexes A à K | pp. 242-261 | `S-2010-demers-01-ch07` | บทที่ 3 (3.7), บทที่ 4 (4.4) | ภาคผนวก: ประวัติโกเอนก้า, ศูนย์ธรรมคีรี (Dhamma Giri), แบบสอบถาม, และภาพศูนย์ปฏิบัติธรรม |

---

### 2.9 หนังสือเล่มที่ 9: `2010-neelis-early-buddhist-transmission-and-trade-ne.pdf` (Jason Neelis 2010)
- **ชื่อหนังสือ:** *Early Buddhist Transmission and Trade Networks: Mobility and Exchange within Exchange Networks of Central Asia and South Asia*
- **ความยาวและข้อมูลพิมพ์:** 392 หน้า (Brill, Leiden)
- **Dossier กลาง (Master Umbrella):** `S-2010-neelis-01`
  - *การแมปปิ้งในรายงาน:* บทที่ 1 (1.2), บทที่ 2 (2.1, 2.3, 2.5, 2.8), บทที่ 4 (4.4)
  - *บทบาทการสังเคราะห์:* งานวิจัยหมุดหมายว่าด้วยการแพร่กระจายของพุทธศาสนาผ่านเครือข่ายการค้าทางบกและทางทะเล (เส้นทางสายไหมและมหาสมุทรอินเดีย) ความสัมพันธ์ระหว่างพ่อค้า บุญกุศล และสังฆมณฑล
- **ตารางแจกแจง Dossier ประจำบทครบถ้วน 100% (7 บท):**

| ลำดับบท | ชื่อบท / ส่วนย่อย | หน้า | รหัส Dossier ประจำบท | การแมปปิ้งบทและหัวข้อย่อย | บทบาทและประเด็นสำคัญในรายงาน |
|:---:|:---|:---:|:---|:---|:---|
| 1 | Chapter 1: Introduction: Road Map for Travelers | pp. 1-64 | `S-2010-neelis-01-ch01` | บทที่ 1 (1.2), บทที่ 2 (2.1, 2.5) | กรอบคิดการเคลื่อนย้ายของพุทธศาสนา: ความสัมพันธ์ระหว่างบุญ พ่อค้าวาณิช และคณะสงฆ์ |
| 2 | Chapter 2: Historical Contexts for Transmission within South Asia | pp. 65-182 | `S-2010-neelis-01-ch02` | บทที่ 2 (2.1, 2.3, 2.5) | บริบทประวัติศาสตร์ในอินเดีย: ยุคพระเจ้าอโศกธรรมราชา ชนเผ่าศกะ กุษาณะ คุปตะ จนถึง ค.ศ. 1000 |
| 3 | Chapter 3: Trade Networks in Ancient South Asia | pp. 183-228 | `S-2010-neelis-01-ch03` | บทที่ 1 (1.2), บทที่ 2 (2.1, 2.5) | เส้นทางการค้าโบราณ: อุตตราปถะ (สายเหนือ), ทักษิณาปถะ (สายใต้), เมืองท่าและเส้นทางเดินเรือมหาสมุทรอินเดีย |
| 4 | Chapter 4: Old Roads in the Northwestern Borderlands | pp. 229-256 | `S-2010-neelis-01-ch04` | บทที่ 2 (2.1, 2.3, 2.5) | เส้นทางโบราณในคันธาระ: วัฒนธรรมทางวัตถุ เอกสารตัวเขียนคันธารี และการลงหลักปักฐานของสงฆ์ |
| 5 | Chapter 5: Capillary Routes of the Upper Indus | pp. 257-288 | `S-2010-neelis-01-ch05` | บทที่ 2 (2.1, 2.5) | เส้นทางลุ่มน้ำสินธุตอนบน: ภาพสลักหิน จารึกผู้แสวงบุญ และร่องรอยการเดินทางข้ามเทือกเขา |
| 6 | Chapter 6: Long-Distance Transmission to Central Asian Silk Routes and China | pp. 289-310 | `S-2010-neelis-01-ch06` | บทที่ 2 (2.1, 2.5) | การส่งผ่านทางไกลสู่เส้นทางสายไหมเอเชียกลางและจีน: การทบทวนกระบวนทัศน์การเผยแผ่ศาสนา |
| 7 | Chapter 7: Conclusion: Alternative Paths and Paradigms | pp. 311-320 | `S-2010-neelis-01-ch07` | บทที่ 1 (1.2), บทที่ 2 (2.5, 2.8), บทที่ 4 (4.4) | บทสรุป: ปัจจัยเร่งการขยายตัวของสังฆมณฑล และกระบวนทัศน์ใหม่ของการแพร่กระจายพุทธศาสนาข้ามแดน |

---

### 2.10 หนังสือเล่มที่ 10: `2012-gethin-skilling-how-theravada-is-theravada.pdf` (Peter Skilling, Jason A. Carbine, Claudio Cicuzza, Santi Pakdeekham (eds.) 2012)
- **ชื่อหนังสือ:** *How Theravāda is Theravāda? Exploring Buddhist Identities*
- **ความยาวและข้อมูลพิมพ์:** 98 หน้า / รวมเล่ม 572 หน้า (Silkworm Books, Chiang Mai)
- **Dossier กลาง (Master Umbrella):** `S-2012-skilling-01`
  - *การแมปปิ้งในรายงาน:* บทที่ 1 (1.1, 1.2, 1.4), บทที่ 2 (2.3, 2.7), บทที่ 3 (3.1, 3.4, 3.5, 3.6, 3.8), บทที่ 4 (4.3, 4.4, 4.6)
  - *บทบาทการสังเคราะห์:* งานวิชาการหมุดหมายที่ตั้งคำถามรื้อถอนคำนิยาม 'เถรวาท' แสดงให้เห็นว่าอัตลักษณ์เถรวาทเป็นมโนทัศน์ร่วมสมัยที่มีพลวัต มีความหลากหลาย ไม่ใช่จารีตเสาหินทื่อ (Monolith)
- **ตารางแจกแจง Dossier ประจำบทครบถ้วน 100% (13 บท):**

| ลำดับบท | ชื่อบท / ส่วนย่อย | หน้า | รหัส Dossier ประจำบท | การแมปปิ้งบทและหัวข้อย่อย | บทบาทและประเด็นสำคัญในรายงาน |
|:---:|:---|:---:|:---|:---|:---|
| 1 | Introduction | pp. xiii-xxxvii | `S-2012-skilling-01-ch01` | บทที่ 1 (1.1, 1.2), บทที่ 3 (3.8), บทที่ 4 (4.3, 4.4) | Peter Skilling: บทนำสำรวจปัญหาคำว่า 'เถรวาท' ในประวัติศาสตร์และอัตลักษณ์ที่หลากหลาย |
| 2 | Chapter 1: Was Buddhaghosa a Theravādin? | pp. 1-66 | `S-2012-skilling-01-ch02` | บทที่ 1 (1.1), บทที่ 3 (3.1, 3.8), บทที่ 4 (4.3) | Rupert Gethin: พระพุทธโฆสะเป็นเถรวาทินจริงหรือไม่? สำรวจคำเรียกอัตลักษณ์ในอรรถกถาและพงศาวดารบาลี |
| 3 | Chapter 2: The Teachings of the Abhayagiri School | pp. 67-128 | `S-2012-skilling-01-ch03` | บทที่ 1 (1.1, 1.2), บทที่ 2 (2.3), บทที่ 3 (3.1, 3.8) | L.S. Cousins: คำสอนและคัมภีร์ของสำนักอภัยคีรีวิหาร ความเปิดกว้างต่อมหายานและวัชรยาน |
| 4 | Chapter 3: Sthavira, Thera and '*Sthaviravāda' in Chinese Buddhist Sources | pp. 129-164 | `S-2012-skilling-01-ch04` | บทที่ 1 (1.1), บทที่ 2 (2.3), บทที่ 3 (3.8), บทที่ 4 (4.3) | Max Deeg: คำว่าเสถียร เถระ และสถวิรวาทในหลักฐานคัมภีร์พุทธภาษาจีนและบันทึกสมณทูต |
| 5 | Chapter 4: The King and his Bhagavā: The Meanings of Pagan's Early Theravādas | pp. 165-240 | `S-2012-skilling-01-ch05` | บทที่ 2 (2.7), บทที่ 3 (3.1, 3.5), บทที่ 4 (4.4) | Lilian Handlin: สถาบันกษัตริย์และพระพุทธเจ้า: ความหมายของพุทธศาสนาเถรวาทยุคต้นในพุกาม |
| 6 | Chapter 5: Sāsanāsuddhi/Sīmāsammuti: Spatial Basis of Religion | pp. 241-274 | `S-2012-skilling-01-ch06` | บทที่ 3 (3.1, 3.5, 3.6), บทที่ 4 (4.4) | Jason A. Carbine: ความบริสุทธิ์ของศาสนาและการสมมติสีมา ฐานทางพื้นที่ของสังฆมณฑลในพม่า |
| 7 | Chapter 6: Lineage, Inheritance, and Belonging: Monastic Affiliation from Laṅkā | pp. 275-296 | `S-2012-skilling-01-ch07` | บทที่ 2 (2.7), บทที่ 3 (3.1), บทที่ 4 (4.4) | Anne M. Blackburn: สายสมณวงศ์ มรดก และสังกัดอารามในความสัมพันธ์ข้ามสมุทรของลังกา |
| 8 | Chapter 7: King Rāma I and Wat Phra Chetuphon | pp. 297-354 | `S-2012-skilling-01-ch08` | บทที่ 3 (3.1, 3.4, 3.6), บทที่ 4 (4.4) | Peter Skilling: รัชกาลที่ 1 และวัดพระเชตุพน: การสถาปนาพระพุทธศาสนาในยุครัตนโกสินทร์ตอนต้น |
| 9 | Chapter 8: The Benefits of Ordination according to the Paramatthamaṅgala | pp. 355-370 | `S-2012-skilling-01-ch09` | บทที่ 3 (3.1, 3.2), บทที่ 4 (4.4) | Claudio Cicuzza: อานิสงส์ของการบรรพชาอุปสมบทตามคัมภีร์ปรมัตถมงคลในจารีตเอเชียอาคเนย์ |
| 10 | Chapter 9: Circulation of Texts in Mid-Nineteenth Century Cambodia | pp. 371-400 | `S-2012-skilling-01-ch10` | บทที่ 3 (3.1, 3.2, 3.5), บทที่ 4 (4.4) | Olivier de Bernon: การหมุนเวียนคัมภีร์ใบลานในกัมพูชากลางศตวรรษที่ 19 จากศิลาจารึกวัดตระโลก (K. 892) |
| 11 | Chapter 10: King Mongkut's Invention of a Universal Pali Script | pp. 401-414 | `S-2012-skilling-01-ch11` | บทที่ 1 (1.4), บทที่ 3 (3.6), บทที่ 4 (4.4) | Venerable Phra Anil Sakya: อักษรอริยกะ: การประดิษฐ์อักษรบาลีสากลของรัชกาลที่ 4 และผลกระทบต่อจารีต |
| 12 | Chapter 11: Thai Ideas about Hīnayāna-Mahāyāna | pp. 415-442 | `S-2012-skilling-01-ch12` | บทที่ 1 (1.4), บทที่ 3 (3.6), บทที่ 4 (4.4) | Arthid Sheravanichkul: พระราชดำริเรื่องหีนยาน-มหายานในพระราชหัตถเลขา ร.5 และสมเด็จฯ เจ้าฟ้ากรมพระยานริศรานุวัดติวงศ์ |
| 13 | Chapter 12: Whence Theravāda? The Modern Genealogy of an Ancient Term | pp. 443-572 | `S-2012-skilling-01-ch13` | บทที่ 1 (1.1), บทที่ 3 (3.8), บทที่ 4 (4.4, 4.6) | Todd LeRoy Perreira: ต้นกำเนิดของคำว่า 'เถรวาท': ลำดับสาแหรกสมัยใหม่ของคำโบราณในโลกวิชาการศตวรรษที่ 20 |

---

### 2.11 หนังสือเล่มที่ 11: `2022-french-buddhism-and-comparative-constitutional-.pdf` (Rebecca Redwood French & Mark A. Nathan (eds.) 2022)
- **ชื่อหนังสือ:** *Buddhism and Comparative Constitutional Law*
- **ความยาวและข้อมูลพิมพ์:** 406 หน้า (Cambridge University Press)
- **Dossier กลาง (Master Umbrella):** `S-2022-french-01`
  - *การแมปปิ้งในรายงาน:* บทที่ 1 (1.4, 1.5), บทที่ 3 (3.1, 3.5, 3.6, 3.7), บทที่ 4 (4.5, 4.7)
  - *บทบาทการสังเคราะห์:* งานรวมวิจัยบุกเบิกสาขานิติศาสตร์รัฐธรรมนูญเปรียบเทียบกับพุทธศาสนา วิเคราะห์ความสัมพันธ์ระหว่างวินัยสงฆ์ โครงสร้างอำนาจรัฐ กฎบัตรศาสนา และการเมืองในเอเชียพุทธ
- **ตารางแจกแจง Dossier ประจำบทครบถ้วน 100% (19 บท):**

| ลำดับบท | ชื่อบท / ส่วนย่อย | หน้า | รหัส Dossier ประจำบท | การแมปปิ้งบทและหัวข้อย่อย | บทบาทและประเด็นสำคัญในรายงาน |
|:---:|:---|:---:|:---|:---|:---|
| 1 | Chapter 1: Introduction: Mapping the Buddhist–Constitutional Complex | pp. 1-34 | `S-2022-french-01-ch01` | บทที่ 1 (1.4), บทที่ 3 (3.6), บทที่ 4 (4.5) | Tom Ginsburg & Benjamin Schonthal: การจัดทำแผนที่ความสัมพันธ์พุทธศาสนากับรัฐธรรมนูญในเอเชีย |
| 2 | Chapter 2: Buddhism and Constitutionalism in Precolonial Southeast Asia | pp. 35-56 | `S-2022-french-01-ch02` | บทที่ 3 (3.1, 3.5, 3.6), บทที่ 4 (4.5) | D. Christian Lammerts: พุทธศาสนากับระบอบรัฐธรรมนูญในเอเชียตะวันออกเฉียงใต้ก่อนยุคอาณานิคม (ธรรมศาสตร์และวินัย) |
| 3 | Chapter 3: Theorising Constitutionalism in Buddhist-Dominant Asian Polities | pp. 57-72 | `S-2022-french-01-ch03` | บทที่ 1 (1.4), บทที่ 3 (3.6), บทที่ 4 (4.5) | Asanga Welikala: การสร้างทฤษฎีรัฐธรรมนูญนิยมในรัฐที่พุทธศาสนามีอำนาจนำ (ธรรมราชาและอำนาจอธิปไตย) |
| 4 | Chapter 4: The Zhabdrung’s Legacy: Bhutan | pp. 73-98 | `S-2022-french-01-ch04` | บทที่ 2 (2.6), บทที่ 4 (4.5) | Richard W. Whitecross: มรดกของซับดรุง: พุทธศาสนากับการเปลี่ยนผ่านสู่รัฐธรรมนูญในภูฏาน |
| 5 | Chapter 5: The “Trick of Law”: Early Buddhist Law in Tibet | pp. 99-123 | `S-2022-french-01-ch05` | บทที่ 2 (2.3), บทที่ 4 (4.5) | Martin A. Mills: 'กลอุบายแห่งกฎหมาย': การตีความกฎหมายพุทธยุคต้นในทิเบต |
| 6 | Chapter 6: Tibetan Buddhist Monastic and Governmental Law | pp. 124-142 | `S-2022-french-01-ch06` | บทที่ 2 (2.3), บทที่ 4 (4.5) | Berthe Jansen: กฎบัตรวินัยสงฆ์และกฎหมายรัฐธรรมนูญทิเบต: อิทธิพลซึ่งกันและกัน |
| 7 | Chapter 7: Guardians of the Law: Sinhala Language and Reformation | pp. 143-160 | `S-2022-french-01-ch07` | บทที่ 1 (1.4), บทที่ 3 (3.6), บทที่ 4 (4.5) | Krishantha Fedricks: ผู้พิทักษ์กฎหมาย: ภาษาภาษาสิงหลและการปฏิรูปพุทธศาสนาในศรีลังกาหลังสงคราม |
| 8 | Chapter 8: Thai Constitutions as a Battle Ground: Barami versus Vox Populi | pp. 161-180 | `S-2022-french-01-ch08` | บทที่ 1 (1.4, 1.5), บทที่ 3 (3.6, 3.7), บทที่ 4 (4.5) | เข็มทอง ต้นสกุลรุ่งเรือง: รัฐธรรมนูญไทยในฐานะสมรภูมิแย่งชิงอำนาจ: บารมี ปะทะ เสียงของประชาชน |
| 9 | Chapter 9: Establishing the King as Source of Constitution: Siam/Thailand | pp. 181-197 | `S-2022-french-01-ch09` | บทที่ 1 (1.4), บทที่ 3 (3.6), บทที่ 4 (4.5) | Eugénie Mérieau: การสถาปนากษัตริย์เป็นที่มาของรัฐธรรมนูญ: การประกอบสร้างวาทกรรมราชาชาตินิยม |
| 10 | Chapter 10: Buddhist Statecraft and Military Ideology in Myanmar | pp. 198-219 | `S-2022-french-01-ch10` | บทที่ 3 (3.5, 3.6), บทที่ 4 (4.5) | Iselin Frydenlund: พุทธศาสนากับศาสตร์แห่งรัฐและอุดมการณ์ทหารในพม่า |
| 11 | Chapter 11: Reconstituting the Divided Sangha: Cambodia | pp. 220-240 | `S-2022-french-01-ch11` | บทที่ 3 (3.1, 3.5, 3.6), บทที่ 4 (4.5) | Benjamin Lawrence: การรื้อฟื้นคณะสงฆ์ที่แตกแยก: อำนาจนำทางศาสนาในกัมพูชาหลังความขัดแย้ง |
| 12 | Chapter 12: Constitutional Buddhism: Japan | pp. 241-271 | `S-2022-french-01-ch12` | บทที่ 4 (4.5) | Levi McLaughlin: รัฐธรรมนูญกับพุทธศาสนาญี่ปุ่น: กลุ่มโซคา กัคไก และพรรคโคเมโต |
| 13 | Chapter 13: Governing Buddhism in Vietnam | pp. 272-284 | `S-2022-french-01-ch13` | บทที่ 4 (4.5) | Ngoc Son Bui: การบริหารจัดการพุทธศาสนาภายใต้ระบอบสังคมนิยมเวียดนาม |
| 14 | Chapter 14: Buddhist Association of China and Constitutional Law | pp. 285-304 | `S-2022-french-01-ch14` | บทที่ 4 (4.5) | André Laliberté: สมาคมพุทธศาสนาแห่งประเทศจีนและช่องทางอิทธิพลระหว่างประเทศ |
| 15 | Chapter 15: Governing “Lamaism” on the Frontier: Inner Mongolia | pp. 305-324 | `S-2022-french-01-ch15` | บทที่ 4 (4.5) | Daigengna Duoer: การควบคุมพุทธทิเบตตามชายแดนมองโกเลียในยุคต้นศตวรรษที่ 20 |
| 16 | Chapter 16: Monastic Celibacy in South Korea 1955-1970 | pp. 325-344 | `S-2022-french-01-ch16` | บทที่ 4 (4.5) | Mark A. Nathan: การต่อสู้เรื่องการถือพรหมจรรย์ของพระสงฆ์เกาหลีในศาลยุติธรรม |
| 17 | Chapter 17: On the Familiar Pleasures of Estrangement | pp. 345-353 | `S-2022-french-01-ch17` | บทที่ 4 (4.5, 4.7) | Deepa Das Acevedo: มุมมองเชิงเปรียบเทียบว่าด้วยความแปลกแยกและกฎหมายศาสนา |
| 18 | Chapter 18: Buddhism and Constitutionalism: Comparison with Canon Law | pp. 354-359 | `S-2022-french-01-ch18` | บทที่ 4 (4.5) | Richard H. Helmholz: เปรียบเทียบกฎหมายรัฐธรรมนูญพุทธกับกฎหมายแคนนอนคริสต์ |
| 19 | Chapter 19: Islam and Constitutional Law: Insights for Buddhist Law | pp. 360-380 | `S-2022-french-01-ch19` | บทที่ 4 (4.5) | Clark B. Lombardi: บทเรียนจากกฎหมายรัฐธรรมนูญอิสลามสำหรับนิติศาสตร์พุทธศาสนา |

---

## 3. ตารางแจกแจง Dossier กลุ่มบทความวิจัยและเอกสารเฉพาะทาง 62 เรื่อง (Journal Articles & Research Papers)

สำหรับบทความวิจัย กำหนดเกณฑ์ตามคำสั่งเด็ดขาดของผู้ใช้: **1 บทความ = 1 Dossier ฉบับสมบูรณ์ 6 ส่วน**

| ลำดับ | Source ID | ผู้แต่ง / บรรณาธิการ | ปี | ชื่อบทความ / เอกสาร | แหล่งตีพิมพ์ / วารสาร | การแมปปิ้งบทและหัวข้อย่อย | บทบาทหลักในการสังเคราะห์เนื้อหา |
|:---:|:---|:---|:---:|:---|:---|:---|:---|
| 1 | `S-1982-chutiwongs-01` | Chutiwongs, Nandana | 1982 | *Visual Expressions of Tantric Buddhism* | Special Academic Essay / Iconographic Survey | บทที่ 2 (2.3, 2.4, 2.6), บทที่ 3 (3.7), บทที่ 4 (4.2, 4.6) | วิเคราะห์หลักฐานประติมานวิทยาและศิลปกรรมตันตระในเอเชียตะวันออกเฉียงใต้ พระโพธิสัตว์ และภาพสะท้อนพิธีกรรมตันตระโบราณ |
| 2 | `S-2003-lamotte-01` | Lamotte, Étienne (trans. Sara Boin-Webb) / Tarocco, Francesca | 2003 | *Vajrapāṇi in India (I) / Mount Lu Revisited: Buddhism in the Life and Writings of Su Dongpo* | Buddhist Studies Review 20(1): 1-30 | บทที่ 2 (2.1, 2.3, 2.4), บทที่ 4 (4.4) | การวิเคราะห์ยักษ์วชิรปาณีในอินเดีย จากเทพอารักษ์สู่สัญลักษณ์ตันตระระดับยอด และมโนทัศน์พลังสายฟ้า (Vajra) |
| 3 | `S-2005-analayo-01` | Anālayo, Bhikkhu | 2005 | *Some Pali Discourses in the Light of Their Chinese Parallels* | Buddhist Studies Review 22(2): 93-105 | บทที่ 2 (2.1, 2.3), บทที่ 3 (3.2), บทที่ 4 (4.4) | การศึกษาเปรียบเทียบพระสูตรบาลีกับคัมภีร์อาคมภาษาจีน วิวัฒนาการตัวบทและการปรับเปลี่ยนความหมายทางวิชาการ |
| 4 | `S-2007-ando-01` | Ando, Mitsuru | 2007 | *Textual Sources of the Old Javanese Śaiva Tantrism* | Journal of Indian and Buddhist Studies (IBK) 55(3): 1121-1127 | บทที่ 2 (2.2, 2.6), บทที่ 4 (4.4) | การสืบค้นแหล่งตัวบทไศวะตันตระในชวาโบราณ ความสัมพันธ์ระหว่างวรรณกรรมภาษาสันสกฤตและวรรณกรรมชวาเก่า (Tutur) |
| 5 | `S-2007-blackburn-01` | Blackburn, Anne M. | 2007 | *Writing Buddhist Histories from Landscape and Architecture: Sukhothai and Sri Lanka* | Buddhist Studies Review 24(2): 192-225 | บทที่ 2 (2.7, 2.8), บทที่ 3 (3.1), บทที่ 4 (4.4) | วิเคราะห์การสร้างประวัติศาสตร์พุทธศาสนาผ่านภูมิทัศน์และสถาปัตยกรรม เครือข่ายการสถาปนาพระพุทธศาสนาระหว่างสุโขทัยกับลังกา |
| 6 | `S-2007-kourilsky-01` | Kourilsky, Gregory | 2007 | *Intertextuality in Thai-Lao Buddhism: The Gavampatisutta* | Journal of the Siam Society 95: 125-146 | บทที่ 3 (3.1, 3.2, 3.5), บทที่ 4 (4.4) | วิเคราะห์สัมพันธสารบท (Intertextuality) ในพุทธไทย-ลาว ศึกษาคัมภีร์ควัมปติสูตร อิทธิพลและบทบาทของพระควัมปติในจารีตท้องถิ่น |
| 7 | `S-2009-seeger-01` | Seeger, Martin | 2009 | *Phra Payutto and Debates on the Very Idea of Pali Canon in Contemporary Thailand* | Buddhist Studies Review 26(1): 1-31 | บทที่ 1 (1.4), บทที่ 3 (3.6, 3.7), บทที่ 4 (4.4) | วิเคราะห์ข้อถกเถียงเรื่องพระไตรปิฎกบาลีในไทยร่วมสมัย ทัศนะของสมเด็จพระพุทธโฆษาจารย์ (ป.อ. ปยุตฺโต) ต่อความแท้ของพระไตรปิฎกและการตัดจารีตที่ไม่ใช่เถรวาทบริสุทธิ์ |
| 8 | `S-2010-castro-01` | Castro Sánchez, Pedro Manuel | 2010 | *Theory and Practice of Mantra in the Esoteric Theravāda Mahānikāya Tradition* | Journal of the Oxford Centre for Buddhist Studies (JOCBS) 1: 30-58 | บทที่ 1 (1.1, 1.3), บทที่ 3 (3.2, 3.3, 3.5), บทที่ 4 (4.4) | การศึกษาวิเคราะห์ทฤษฎีและปฏิบัติการทางมนตราในจารีตมหานิกายโบราณของเขมรและไทย การจัดวางอักขระในร่างกาย การผูกคาถา และพิธีกรรมทางจิต |
| 9 | `S-2011-bronkhorst-01` | Bronkhorst, Johannes | 2011 | *The Spread of Sanskrit in Southeast Asia* | In: Pierre-Yves Manguin et al. (eds.), Early Interactions Between South and Southeast Asia, pp. 263-275 | บทที่ 2 (2.1, 2.5, 2.6), บทที่ 4 (4.4) | วิเคราะห์การแพร่กระจายของภาษาสันสกฤตและวัฒนธรรมพราหมณ์-พุทธในอุษาคเนย์ ฐานรากทางภาษาและวรรณกรรมก่อนการเข้ามาของบาลี |
| 10 | `S-2011-chowdhury-01` | Chowdhury, Chipamong | 2011 | *Did the Buddha Speak Pāli? An Investigation into the Language of Early Buddhism* | Journal of Buddhist Studies 9: 43-62 | บทที่ 2 (2.1), บทที่ 3 (3.2), บทที่ 4 (4.4) | การสืบสวนภาษาของพระพุทธศาสนายุคต้น พระพุทธเจ้าตรัสภาษาบาลีจริงหรือไม่ และสถานะของภาษาบาลีในฐานะภาษาประดิษฐ์เชิงจารีต |
| 11 | `S-2013-apple-01` | Apple, James B. | 2013 | *The Influence of the Avaivartikacakra Mahāyāna Sūtra in Indian Buddhism* | Journal of Indian and Buddhist Studies 61(3): 1083-1090 | บทที่ 2 (2.3, 2.4), บทที่ 4 (4.4) | วิเคราะห์อิทธิพลของคัมภีร์อไววรรติกจักรสูตรต่อพัฒนาการความคิดมหายานและตันตระในอินเดียโบราณ มโนทัศน์กงล้อแห่งความไม่ถอยกลับ |
| 12 | `S-2013-baker-01` | Baker, Chris | 2013 | *Protection and Power in Siam: From Khun Chang Khun Phaen to the Modern Amulet* | South East Asia Research 21(2): 215-242 | บทที่ 1 (1.5), บทที่ 3 (3.7), บทที่ 4 (4.4) | วิเคราะห์มโนทัศน์เรื่องการคุ้มครองและพลังอำนาจในประวัติศาสตร์สยาม จากวรรณคดีขุนช้างขุนแผนสู่พัฒนาการตลาดพระเครื่องสมัยใหม่ |
| 13 | `S-2013-foxeus-01` | Foxeus, Niklas | 2013 | *Esoteric Theravāda Buddhism in Burma/Myanmar: The Practice of the Weikza-lam* | Scripta Instituti Donneriani Aboensis 25: 64-98 | บทที่ 1 (1.5), บทที่ 3 (3.5, 3.7), บทที่ 4 (4.4) | งานศึกษาขบวนการเวชชา (Weikza-lam) ในพม่าฉบับสมบูรณ์ วิเคราะห์ระบบสมาคมลับ (Gaing) การเล่นแร่แปรธาตุ อักขระยันต์ (In) และการคงอยู่ร่วมสมัย |
| 14 | `S-2013-foxeus-02` | Foxeus, Niklas | 2013 | *The Buddhist World of the Burmese Weikza: Millenarianism and Esotericism* | Contemporary Buddhism / Research Monograph Paper | บทที่ 1 (1.5), บทที่ 3 (3.5, 3.7), บทที่ 4 (4.4) | มิติลัทธิสหัสวรรษนิยม (Millenarianism) ในขบวนการเวชชาพม่า ความสัมพันธ์ระหว่างการรอคอยพระศรีอริยเมตไตรยกับการบำเพ็ญวิชชาลี้ลับ |
| 15 | `S-2013-mallinson-01` | Mallinson, James | 2013 | *The Yogī's Latest Trick: Review Article on Hatha Yoga and Tantric Somatics* | Journal of the Royal Asiatic Society 23(1): 165-180 | บทที่ 2 (2.2, 2.4), บทที่ 4 (4.4) | การวิเคราะห์กายวิภาคศาสตร์ลี้ลับ (Subtle Body) ในหฐโยคะและตันตระ การควบคุมลมปราณ จักระ และนาฑี เปรียบเทียบกับสรีรวิทยาในจารีตโยคาวจร |
| 16 | `S-2013-schober-01` | Schober, Juliane | 2013 | *Esoteric Theravada Buddhism in Burma: Lineage, Power, and the Spirit Cults* | Journal of Southeast Asian Studies / Monograph Chapter | บทที่ 3 (3.1, 3.5), บทที่ 4 (4.4) | การสืบทอดสายธรรม อำนาจจิต และพิธีกรรมผีนัตในพม่า การบรรจบกันระหว่างพุทธศาสนาเถรวาท จารีตลี้ลับ และอำนาจทางการเมือง |
| 17 | `S-2014-acri-02` | Acri, Andrea | 2014 | *The Śaiva Atimārga in the Light of Niśvāsatattvasaṃhitā* | Cracow Indological Studies 16: 7-42 | บทที่ 2 (2.2, 2.4, 2.5), บทที่ 4 (4.4) | การถอดรหัสสายธรรม 'อติมรรค' (Atimārga) และคัมภีร์นิศวาสตัตตวะสังหิตา ซึ่งเป็นไศวะตันตระที่เก่าแก่ที่สุด ต้นกำเนิดของการแพร่กระจายสู่เอเชียอาคเนย์ |
| 18 | `S-2014-cox-01` | Cox, Collett | 2014 | *Review of Traditional Theravada Meditation and Boran Kammatthana* | Journal of Global Buddhism 15: 93-98 | บทที่ 4 (4.4, 4.5) | บทวิจารณ์เชิงวิชาการประเมินสถานะของโครงการวิจัยกรรมฐานโบราณ (Boran Kammatthana Project) ของ Crosby และ Skilton |
| 19 | `S-2014-revire-01` | Revire, Nicolas & Murphy, Stephen A. (eds.) | 2014 | *Before Siam: Essays in Art and Archaeology* | River Books, Bangkok | บทที่ 2 (2.5, 2.6, 2.7), บทที่ 3 (3.1), บทที่ 4 (4.4) | รวบรวมงานวิจัยทางโบราณคดีและประวัติศาสตร์ศิลปะยุคทวารวดี ศรีวิชัย และฟูนัน ชี้ให้เห็นการอยู่ร่วมกันของพุทธมหายาน ตันตระ และเถรวาทโบราณ |
| 20 | `S-2015-blackburn-01` | Blackburn, Anne M. | 2015 | *Buddhist Connections in the Indian Ocean: Changes in Monastic Mobility, 1000–1500* | Journal of the Economic and Social History of the Orient (JESHO) 58(3): 237-267 | บทที่ 1 (1.2), บทที่ 2 (2.5, 2.7), บทที่ 3 (3.1), บทที่ 4 (4.4) | งานวิจัยหมุดหมายว่าด้วยการเคลื่อนย้ายของพระสงฆ์ข้ามมหาสมุทรอินเดีย (Monastic Mobility) ระหว่างลังกา พม่า และสยาม การถ่ายทอดสายการบวชและพิธีกรรม |
| 21 | `S-2015-overmeire-01` | Van Overmeire, Ben | 2015 | *Review of Champions of Buddhism: Weikza Cults in Contemporary Burma* | Asian Ethnology 74(2): 629-631 | บทที่ 3 (3.5), บทที่ 4 (4.4) | บทวิจารณ์หนังสือชุดเวชชาพม่าของ Brac de la Perrière & Rozenberg สรุปมิติมานุษยวิทยาของผู้นับถือเวชชาในสังคมพม่าร่วมสมัย |
| 22 | `S-2015-szanto-01` | Szántó, Péter-Dániel | 2015 | *Ritual and Authority in Buddhist Tantra* | In: U. Pagel et al. (eds.), Buddhist Studies in Honour of I. Katayama, pp. 245-268 | บทที่ 2 (2.1, 2.3, 2.4), บทที่ 4 (4.4) | การวิเคราะห์โครงสร้างพิธีกรรมและอำนาจนำในพุทธตันตระอินเดีย การอภิเษก อำนาจของคุรุ และการถ่ายทอดมนตรา |
| 23 | `S-2016-acri-04` | Kandahjaya, Hudaya (in Andrea Acri ed.) | 2016 | *The Sacred Sanctuary at Borobudur and the Śailendra Dynasty* | In: Esoteric Buddhism in Mediaeval Maritime Asia, ISEAS Publishing, pp. 47-76 | บทที่ 1 (1.2), บทที่ 2 (2.3, 2.4, 2.5, 2.6), บทที่ 4 (4.4) | การถอดรหัสบุโรพุทโธในฐานะมณฑลแห่งพุทธตันตระ (วัชรธาตุและครรภโกศธาตุ) และความเชื่อมโยงกับคัมภีร์สังฮยังกามหายานิกัมแห่งชวา |
| 24 | `S-2016-larsson-01` | Larsson, Tomas | 2016 | *Keeping Monks in Their Place? The Legal Construction of Monastic Space in Thailand* | Journal of Southeast Asian Studies 47(2): 193-214 | บทที่ 1 (1.4), บทที่ 3 (3.6), บทที่ 4 (4.4) | การศึกษากฎหมายและการจัดระเบียบพื้นที่ของคณะสงฆ์สยาม การควบคุมพระป่าและพระผู้ทรงอภิญญา/ไสยเวทเข้าสู่ระบบรัฐศูนย์กลาง |
| 25 | `S-2016-makin-01` | Makin, Al | 2016 | *Unearthing Nusantara’s Concept of Religious Pluralism: Harmonious Coexistence in Ancient Java* | Al-Jāmi‘ah: Journal of Islamic Studies 54(1): 1-32 | บทที่ 2 (2.2, 2.6), บทที่ 4 (4.4) | การขุดค้นมโนทัศน์พหุนิยมทางศาสนาในนูซันตารา (ชวาโบราณ) การอยู่ร่วมกันและการผสานกลืนระหว่างไศวะตันตระและพุทธตันตระ (Bhinneka Tunggal Ika) |
| 26 | `S-2016-szanto-02` | Szántó, Péter-Dániel | 2016 | *Minor Vajrayāna Texts: The Gaṇacakravidhi* | Journal of Indian Philosophy 44(2): 313-332 | บทที่ 2 (2.1, 2.3, 2.4), บทที่ 4 (4.4) | การตรวจชำระตัวบทภาษาสันสกฤตของคัมภีร์คณะจักระวิธิ (Gaṇacakravidhi) พิธีกรรมชุมนุมตันตระและการถวายเครื่องสังเวยลี้ลับ |
| 27 | `S-2016-urban-01` | Urban, Hugh B. | 2016 | *Deseo, Sangre y Poder: Georges Bataille y la Antropología del Tantra* | Revista de Estudios de Género / Anthropological Review Paper | บทที่ 2 (2.1, 2.4), บทที่ 4 (4.4) | การวิเคราะห์ตันตระเชิงทฤษฎีมานุษยวิทยา: ความปรารถนา โลหิต และอำนาจ การมองข้ามขอบเขตทางศีลธรรมเพื่อบรรลุภาวะหลุดพ้น |
| 28 | `S-2017-kieven-01` | Kieven, Lydia | 2017 | *Getting Closer to the Primordial Panji? Seeking the Roots of the Ancient Javanese Story* | Wacana, Journal of the Humanities of Indonesia 18(3): 691-717 | บทที่ 2 (2.6), บทที่ 4 (4.4) | การศึกษาภาพสลักนูนต่ำและวรรณกรรมอิเหนา (ปันหยี) ในชวาสมัยมัชปาหิต ภาพสะท้อนพิธีกรรมรหัสยศาสตร์และโยคะตันตระในวิถีชาวบ้าน |
| 29 | `S-2017-perriere-01` | Brac de la Perrière, Bénédicte | 2017 | *Initiations in the Burmese Ritual Landscape: Nat Mediumship and Weikza Cults* | Folklore: Electronic Journal of Folklore 69: 137-160 | บทที่ 1 (1.5), บทที่ 3 (3.5, 3.7), บทที่ 4 (4.4) | พิธีกรรมการเข้าทรงผีนัตและการรับมอบสายธรรมของเวชชาในภูมิทัศน์พิธีกรรมพม่า การผสมผสานระหว่างความเชื่อพื้นถิ่นกับการฝึกจิตเถรวาทลี้ลับ |
| 30 | `S-2017-sopranzetti-01` | Sopranzetti, Claudio | 2017 | *Framed by Freedom: Emancipation and Oppression in Post-Fordist Thailand* | Cultural Anthropology 32(1): 68-92 | บทที่ 1 (1.5), บทที่ 3 (3.7), บทที่ 4 (4.4) | งานวิจัยมานุษยวิทยาว่าด้วยแรงงานมอเตอร์ไซค์รับจ้างในกรุงเทพฯ การใช้วัตถุมงคลและพระเครื่องเป็นกลไกสร้างความมั่นคงเชิงจิตวิญญาณในการดำรงชีพ |
| 31 | `S-2017-wattanagun-01` | Wattanagun, Breepram | 2017 | *Karma versus Magic: Dissonance and Syncretism in Thai Buddhist Practices* | Journal of Religion & Society 19: 1-18 | บทที่ 1 (1.5), บทที่ 3 (3.7), บทที่ 4 (4.4) | วิเคราะห์ความตึงเครียดและการผสานกลืนระหว่างกฎแห่งกรรมตามหลักธรรมวินัยกับการใช้เวทมนตร์คาถาในสังคมพุทธไทย |
| 32 | `S-2018-acri-03` | Acri, Andrea | 2018 | *Performance and the Body in Śaiva Ascetic Traditions: Some Considerations* | In: Body and Cosmos in Indian Religions, Routledge | บทที่ 2 (2.2, 2.4), บทที่ 4 (4.4) | วิเคราะห์ปฏิบัติการทางร่างกาย ละครศักดิ์สิทธิ์ และการบำเพ็ญตบะของนักพรตไศวะตันตระ การส่งอิทธิพลต่อแนวคิดสรีรวิทยาในเอเชียตะวันออกเฉียงใต้ |
| 33 | `S-2018-flood-01` | Flood, Gavin / Goodall, Dominic et al. | 2018 | *The Niśvāsatattvasaṃhitā: The Earliest Surviving Śaiva Tantra, Critical Edition and Study* | Collection Indologie 128, EFEO / IFP / Oxford | บทที่ 2 (2.1, 2.2, 2.4), บทที่ 4 (4.4) | การตรวจชำระคัมภีร์นิศวาสตัตตวะสังหิตา เอกสารไศวะตันตระที่เก่าแก่ที่สุดในโลก (ศตวรรษที่ 5-6) ฐานรากของจักรวาลวิทยาและระบบพิธีกรรมตันตระที่แพร่เข้าสู่กัมพูชาและชวา |
| 34 | `S-2018-hettiarachchi-01` | Hettiarachchi, Tilak | 2018 | *Lineage and Monastic Governance in Sri Lanka: The Katikāvata Tradition* | Sri Lanka Journal of Social Sciences 41(2): 115-132 | บทที่ 2 (2.7), บทที่ 3 (3.1, 3.6), บทที่ 4 (4.4) | การศึกษากฎบัตรสงฆ์ (กติกาวตาร) ในประวัติศาสตร์ศรีลังกา การปฏิรูปสังฆมณฑล การควบคุมสายธรรม และการจัดระเบียบพระสงฆ์ฝ่ายคามวาสีและอรัญวาสี |
| 35 | `S-2019-berkwitz-01` | Berkwitz, Stephen C. | 2019 | *Narratives of Buddhist Relics and Images in Sri Lanka and Southeast Asia* | In: Buddhist Relic Caskets and Sacred Objects, Bloomsbury, pp. 77-98 | บทที่ 2 (2.4), บทที่ 3 (3.7), บทที่ 4 (4.4) | วิเคราะห์การเล่าเรื่องพระบรมสารีริกธาตุและพระพุทธรูปศักดิ์สิทธิ์ การถ่ายทอดพลังบารมี และความเชื่อเรื่องวัตถุศักดิ์สิทธิ์ในลังกาและอุษาคเนย์ |
| 36 | `S-2019-stanford-01` | Stanford, Mark & Jong, Jonathan | 2019 | *Beyond Buddhism and Animism: A Psychometric Test of the Structure of Burmese Theravada Buddhism* | PLOS ONE 14(7): e0219661 | บทที่ 3 (3.5, 3.7), บทที่ 4 (4.4) | การทดสอบทางจิตวิทยาวัดโครงสร้างความเชื่อของชาวพุทธพม่า ก้าวข้ามการแบ่งขั้วอย่างง่ายระหว่าง 'พุทธแท้' กับ 'ผี/วิญญาณนิยม' สู่การมองระบบความเชื่อที่บูรณาการเป็นหนึ่งเดียว |
| 37 | `S-2020-acri-03` | Acri, Andrea & Hunter, Thomas M. | 2020 | *Translation and Commentary in Old Javanese Śaiva and Buddhist Literature* | In: Acri & Hunter (eds.), Translating Dharma, Brill, pp. 1-35 | บทที่ 1 (1.2), บทที่ 2 (2.2, 2.6), บทที่ 4 (4.5) | วิเคราะห์พลวัตของการแปลและการรจนาอรรถกถาในวรรณกรรมไศวะและพุทธชวาโบราณ การปรับแปลงมโนทัศน์ตันตระเข้ากับโลกทัศน์นูซันตารา |
| 38 | `S-2020-gornall-01` | Gornall, Alastair | 2020 | *Rewriting Buddhism: Pali Literature and Monastic Reform in Sri Lanka, 1157–1270* | UCL Press, London | บทที่ 2 (2.7, 2.8), บทที่ 3 (3.1), บทที่ 4 (4.5) | งานวิชาการปฏิวัติประวัติศาสตร์วรรณกรรมบาลีศตวรรษที่ 12 ในลังกา การรื้อฟื้นและสร้างมาตรฐานใหม่ของหลักสูตรไวยากรณ์และอรรถกถาบาลี |
| 39 | `S-2021-arensen-01` | Arensen, Astrid (Courtney Work review) | 2021 | *Review: Tides of Empire: Religion, Development, and Environment in Cambodia* | Southeast Asian Studies 10(2): 313-316 | บทที่ 3 (3.5), บทที่ 4 (4.5) | การวิเคราะห์มิติศาสนา วิญญาณธรรมชาติ และการพัฒนาสิ่งแวดล้อมในกัมพูชาร่วมสมัย ความสัมพันธ์ระหว่างชุมชนท้องถิ่นกับอำนาจรัฐ |
| 40 | `S-2021-white-01` | White, David Gordon / Hatley, Shaman | 2021 | *The Brahmayāmalatantra or Picumata, Volume 1: Chapters 1–2, 39–40, & 83* | Indo-Iranian Journal 64: 769-775 | บทที่ 2 (2.1, 2.2, 2.4), บทที่ 4 (4.5) | การตรวจชำระคัมภีร์พรหมยามลตันตระ สายไภรวะตันตระโบราณ พิธีกรรมเพ่งโยคินี มณฑล และการบูชาสรีระอันศักดิ์สิทธิ์ |
| 41 | `S-2022-acri-01` | Acri, Andrea | 2022 | *A Buddhist Bhairava? Kṛtanagara’s Tantric Practices in Late Medieval Java* | In: Rethinking Asian Esotericism, Routledge, pp. 88-115 | บทที่ 2 (2.3, 2.4, 2.6), บทที่ 4 (4.5) | การวิเคราะห์พระเจ้าเกียรตินครแห่งชวา ผู้ผสานพุทธตันตระเข้ากับลัทธิไภรวะ พิธีกรรมป่าช้า และการสถาปนารูปเคารพพุทธ-ไศวะอันทรงพลัง |
| 42 | `S-2022-balogh-01` | Balogh, Dániel | 2022 | *The Pleasure of War Horrors? Śaiva and Buddhist Rhetoric in Eastern Deccan Inscriptions* | Keletkutatás 2022 (Spring): 21-50 | บทที่ 2 (2.1, 2.2), บทที่ 4 (4.5) | งานวิจัยทางจารึกวิทยาอินเดียโบราณ วิเคราะห์วาทศิลป์ความรุนแรงและพิธีกรรมตันตระในจารึกพระราชทานที่ดินของไศวะและพุทธในแคว้นเดกกานตะวันออก |
| 43 | `S-2022-collett-01` | Collett, Alice | 2022 | *Editorial: Recent Trends in Buddhist Studies and Epigraphy* | Buddhist Studies Review 39(1): 1-2 | บทที่ 4 (4.5) | บทบรรณาธิการประเมินทิศทางงานวิจัยพุทธศาสตร์สากล การค้นพบจารึกใหม่ และการเชื่อมโยงข้ามภูมิภาค |
| 44 | `S-2022-lawrence-01` | Lawrence, Benjamin | 2022 | *Saffron Suffrage: Buddhist Monks and Constitutional Politics in Cambodia* | Journal of Law and Religion 37(2): 285-309 | บทที่ 1 (1.4), บทที่ 3 (3.5, 3.6), บทที่ 4 (4.5) | การวิเคราะห์สิทธิการเลือกตั้งของพระสงฆ์และการเมืองเชิงรัฐธรรมนูญในกัมพูชา การปะทะระหว่างวินัยสงฆ์กับความเป็นพลเมืองสมัยใหม่ |
| 45 | `S-2023-borup-01` | Borup, Jørn | 2023 | *Decolonising the Study of Religion and Buddhism: Critical Reflections* | Academic Monograph / Discussion Paper | บทที่ 4 (4.5, 4.7) | การวิพากษ์การปลดแอกอาณานิคมทางความคิดในการศึกษาพุทธศาสนา การรื้อถอนกรอบทฤษฎีตะวันตกที่เคยมองข้ามจารีตรหัสยศาสตร์ท้องถิ่น |
| 46 | `S-2023-mulyanto-01` | Mulyanto, Dede et al. | 2023 | *Ethnobotanical Identification of Mango and Fruit Trees in Old Javanese Ramayana* | Biodiversitas 24(1): 609-616 | บทที่ 2 (2.6), บทที่ 4 (4.5) | การศึกษาพฤกษศาสตร์พื้นบ้านในวรรณกรรมชวาโบราณ (รามายณะ ศตวรรษที่ 10) สะท้อนบริบทแวดล้อมและสัญลักษณ์พืชพรรณในพิธีกรรมโบราณ |
| 47 | `S-2023-pokharel-01` | Pokharel, Badri Prasad | 2023 | *The Importance of Buddhism to Heal Trauma in Pahadi’s 'The Tears of Terror'* | Academic Journal of Interdisciplinary Studies | บทที่ 1 (1.4), บทที่ 4 (4.5) | การใช้มโนทัศน์พุทธศาสนาในการเยียวยาบาดแผลทางจิตใจ (Trauma Healing) เปรียบเทียบกับมิติการบำบัดรักษาในจารีตภาวนา |
| 48 | `S-2024-baker-01` | Baker, Chris | 2024 | *Before the Amulet: Concepts and Devices in Early Siam* | Journal of the Siam Society 112(1): 1-38 | บทที่ 1 (1.5), บทที่ 3 (3.1, 3.7), บทที่ 4 (4.5) | การศึกษาประวัติศาสตร์แนวคิดและเครื่องรางคุ้มภัยในสยามยุคก่อนพระเครื่องสมัยใหม่ การใช้อักขระเลขยันต์ ตะกรุด และเสื้อยันต์ |
| 49 | `S-2024-kourilsky-02` | Kourilsky, Gregory | 2024 | *The 'Kammatthan Buddhist Tradition' of Mainland Southeast Asia: Where Do We Stand?* | Review Article, Extrême-Orient / EFEO Paper | บทที่ 1 (1.1, 1.2), บทที่ 3 (3.1, 3.2, 3.8), บทที่ 4 (4.5) | บทความทบทวนสถานภาพการศึกษาล่าสุดปี 2024 สำรวจต้นกำเนิดและนิยามของ 'จารีตกรรมฐาน' ในอุษาคเนย์ ประเมินข้อถกเถียงระหว่าง Crosby, Bizot และ Cousins |
| 50 | `S-2024-kotyk-01` | Kotyk, Jeffrey | 2024 | *Kingship and Elite Values in the Mahāsāṃghika Vinaya and Chinese Buddhist Tantra* | Journal of Asian Studies / Monograph Essay | บทที่ 2 (2.1, 2.3, 2.6), บทที่ 4 (4.5) | วิเคราะห์ความสัมพันธ์ระหว่างสถาบันกษัตริย์ ค่านิยมชนชั้นนำ และวินัยมหาเสงฆิกะกับพุทธตันตระในจีนและเอเชีย |
| 51 | `S-2024-lim-01` | Lim, Francis K.G. | 2024 | *The Gendered Allure of Nang Kwak: From Statuettes to Amulets in Modern Thailand* | Asian Studies Review 48(2): 215-234 | บทที่ 1 (1.5), บทที่ 3 (3.7), บทที่ 4 (4.5) | การศึกษาคติแม่นางกวักในสังคมไทยร่วมสมัย มิติด้านเพศภาวะ การประยุกต์คาถาเมตตามหานิยมและพิธีกรรมปลุกเสกวัตถุมงคล |
| 52 | `S-2024-mcbain-01` | McBain, Alan | 2024 | *The Amulet Culture of Thailand: History, Economy, and Sacred Geography* | Routledge Contemporary Southeast Asia Series | บทที่ 1 (1.5), บทที่ 3 (3.7), บทที่ 4 (4.5) | การวิเคราะห์วัฒนธรรมพระเครื่องไทยในฐานะพื้นที่บรรจบกันระหว่างเศรษฐกิจ ความศักดิ์สิทธิ์ ภูมิศาสตร์ศักดิ์สิทธิ์ และเครือข่ายความคุ้มครอง |
| 53 | `S-2024-qi-01` | Qi, Dongfang | 2024 | *Inventing Thai Amulets for the Chinese: Achan Meng and Transnational Magic Networks* | Journal of Contemporary Religion 39(1): 105-125 | บทที่ 1 (1.5), บทที่ 3 (3.7), บทที่ 4 (4.5) | การศึกษาเครือข่ายข้ามชาติของวัตถุมงคลไทยสู่จีน ฮ่องกง และไต้หวัน การปรับประยุกต์ไสยเวทสยามและพระเครื่องเพื่อตอบสนองความต้องการในโลกจีนร่วมสมัย |
| 54 | `S-2024-revire-02` | Revire, Nicolas, Kourilsky, Gregory, Manguin, Pierre-Yves et al. | 2024 | *Special Edition on George Cœdès, Śrīvijaya, and Pre-Angkorian Bodhisattvas* | Journal of the Siam Society 113(2): iii-iv + 1-180 | บทที่ 2 (2.3, 2.5, 2.6), บทที่ 4 (4.1, 4.5) | ชุดบทความรำลึกย้อนประวัติศาสตร์นิพนธ์ของยอร์ช เซเดส์ (George Cœdès) การศึกษาอาณาจักรศรีวิชัย พระโพธิสัตว์สัมฤทธิ์ยุคก่อนพระนคร และเครือข่ายเอกสารใบลาน |
| 55 | `S-2024-seeger-01` | Seeger, Martin | 2024 | *Soteriological Inclusiveness and Religious Authority in Contemporary Thai Buddhism* | Religions 15(3): 312-335 | บทที่ 1 (1.4, 1.5), บทที่ 3 (3.6, 3.7), บทที่ 4 (4.5) | การศึกษาการเปิดกว้างเชิงการหลุดพ้นและอำนาจนำทางศาสนาในไทยร่วมสมัย บทบาทของแม่ชีและสตรีผู้ปฏิบัติธรรมในการเจริญกรรมฐานและสร้างบารมี |
| 56 | `S-2024-shaw-01` | Shaw, Sarah | 2024 | *Introduction to Buddhist Meditation: Paths to Peace and Freedom* | Cambridge University Press | บทที่ 1 (1.1, 1.3), บทที่ 3 (3.2, 3.3, 3.8), บทที่ 4 (4.5) | คู่มือวิชาการประมวลระบบการฝึกสมาธิภาวนาในสายเถรวาทบาลีและโยคาวจร การใช้นิมิต กสิณ ลมหายใจ และการประยุกต์ธรรมในจิตวิทยาภาวนา |
| 57 | `S-2024-suebsantiwongse-01` | Suebsantiwongse, S. | 2024 | *From Sacred to Profane: Phra Khun Phaen Amulets in Thailand* | Journal of Material Religion in Asia 12(1): 45-70 | บทที่ 1 (1.5), บทที่ 3 (3.7), บทที่ 4 (4.5) | การศึกษาวิวัฒนาการของพระขุนแผน จากพระกรุโบราณสุพรรณบุรีสู่วัตถุมงคลมหาเสน่ห์และโภคทรัพย์ในสังคมบริโภคนิยม |
| 58 | `S-2025-skilton-01` | Skilton, Andrew | 2025 | *Meditations of the Pali Tradition: Illuminating the Porana Tradition* | Buddhist Studies Review 42(1): 88-112 | บทที่ 1 (1.1), บทที่ 3 (3.2, 3.8), บทที่ 4 (4.5) | บทความวิเคราะห์วิพากษ์หนังสือของ L.S. Cousins ชี้จุดเปลี่ยนประวัติศาสตร์นิพนธ์ในการทำความเข้าใจจารีตโบราณกรรมฐานในโลกวิชาการปัจจุบัน |
| 59 | `S-2026-cholvijarn-01` | Cholvijarn, Potprecha | 2026 | *Ayutthayan Protective Practices and Devices: Yantra, Takrut, and Somdet Phra Wannarat* | Journal of Buddhist Studies / Special Academic Paper 2026 | บทที่ 1 (1.3, 1.5), บทที่ 3 (3.1, 3.2, 3.4, 3.7), บทที่ 4 (4.5) | งานวิจัยล่าสุดปี 2026 ถอดรหัสวิทยาคมและอุปกรณ์คุ้มครองยุคอยุธยา ยันต์ ตะกรุด ผ้ายันต์พิชัยสงคราม และสายสมเด็จพระพนรัตน์ วัดป่าแก้ว |
| 60 | `S-2026-pain-01` | Pain, Frédéric | 2026 | *Brève Introduction à l’Indo-Aryen et Situation Linguistique du Sanskrit Classique* | BABELAO 15 (2026): 1-38 | บทที่ 2 (2.1, 2.5), บทที่ 4 (4.5) | บทความทางนิรุกติศาสตร์ภาษาอินโด-อารยันและสถานะทางภาษาศาสตร์ของภาษาสันสกฤตคลาสสิก ต้นกำเนิดและการแพร่กระจายสู่เอเชีย |
| 61 | `S-2026-perriere-01` | Brac de la Perrière, Bénédicte | 2026 | *Encountering weikza in Buddhist Burma: The Biographical Account of a Ritual Specialist* | Entangled Religions 16(2): 1-28 (2026) | บทที่ 1 (1.5), บทที่ 3 (3.5, 3.7), บทที่ 4 (4.5) | งานวิจัยชาติพันธุ์วรรณนาล่าสุดปี 2026 ว่าด้วยชีวประวัติและการปฏิบัติของผู้ประกอบพิธีกรรมเวชชาในพม่า การสะท้อนมโนทัศน์ 'Tantricking' |
| 62 | `S-1965-saddhatissa-01` | Saddhatissa, Hammalawa (ed.) | 1965 | *Upāsakajanālaṅkāra (Pali Text & Critical Edition with P.S. Jaini Review)* | Pali Text Society, London | บทที่ 2 (2.7), บทที่ 3 (3.1, 3.2), บทที่ 4 (4.1, 4.3) | คัมภีร์อุบาสกจนาลังการ คัมภีร์เถรวาทบาลีโบราณว่าด้วยศีล สมาธิ ปัญญา สำหรับคฤหัสถ์ผู้ปฏิบัติธรรมชั้นสูง รจนาในลังกา/เชียงใหม่ |

---

## 4. เมทริกซ์สังเคราะห์การใช้งาน Dossiers รายบทและรายหัวข้อย่อย 31 หัวข้อ (Section-by-Section Utilization Matrix)

สรุปการกระจายตัวของ Dossiers ทั้ง 205 ฉบับของทีมที่ 7 เข้าสู่โครงสร้างรายงาน 4 บท (31 หัวข้อย่อย):

### บทที่ 1: บทสรุปประมวลสังเคราะห์ระดับมหภาค (Executive Synthesis & Master Integration)
- **1.1 มโนทัศน์แม่บทและการคลี่คลายของชื่อเรียก:** `S-2012-skilling-01` (Ch. 1 Gethin, Ch. 2 Cousins, Ch. 3 Deeg, Ch. 12 Perreira), `S-1998-gethin-01` (Intro, Ch. 7, 10), `S-2010-castro-01`, `S-2024-kourilsky-02`, `S-2024-shaw-01`, `S-2025-skilton-01`, `S-1933-law-01`
- **1.2 สังเคราะห์โครงสร้างความเชื่อมโยง (อินเดียสู่อุษาคเนย์):** `S-2010-neelis-01` (Ch. 1, 3, 7), `S-2015-blackburn-01`, `S-2016-acri-04` (Borobudur), `S-2020-acri-03`, `S-1933-winternitz-01` (Tantras), `S-2012-skilling-01`, `S-2024-kourilsky-02`
- **1.3 สัณฐานวิทยาเชิงสรีรวิทยาและอักขรวิทยา (กาย จิต คัพภวิทยา):** `S-1984-tambiah-01` (Ch. 4, 17), `S-1998-gethin-01` (Ch. 5, 6, 7, 8), `S-2007-mackenzie-01` (Ch. 4), `S-2010-castro-01`, `S-2010-demers-01` (Ch. 3), `S-2026-cholvijarn-01`, `S-2024-shaw-01`, `S-1916-geiger-01` (Lautlehre)
- **1.4 การปะทะสังสรรค์ระหว่างจารีตโบราณกับการปฏิรูปสมัยใหม่:** `S-1984-tambiah-01` (Ch. 11, 12, 13), `S-2007-mackenzie-01` (Ch. 1, 5, 6, 7), `S-2010-demers-01` (Ch. 1, 2, 4, 5), `S-2016-larsson-01`, `S-2022-french-01` (Ch. 1, 3, 7, 8, 9), `S-2022-lawrence-01`, `S-2009-seeger-01`, `S-2024-seeger-01`
- **1.5 ภาพสะท้อนของขบวนการที่มีชีวิตในโลกร่วมสมัย:** `S-1984-tambiah-01` (Ch. 1, 2, 6, 14, 15, 16, 17, 18, 19, 20, 21, 22), `S-2007-mackenzie-01` (Ch. 2, 3, 4, 8), `S-2013-foxeus-01`, `S-2013-foxeus-02`, `S-2013-baker-01`, `S-2024-baker-01`, `S-2024-mcbain-01`, `S-2024-lim-01`, `S-2024-qi-01`, `S-2024-suebsantiwongse-01`, `S-2026-cholvijarn-01`, `S-2026-perriere-01`, `S-2017-perriere-01`, `S-2017-wattanagun-01`, `S-2017-sopranzetti-01`
- **1.6 ข้อค้นพบหลักและช่องว่างทางวิชาการ:** ประมวลสังเคราะห์ข้ามชุดข้อมูลทั้ง 11 เล่มและ 62 บทความ
- **1.7 สรุปประมวลบูรณาการเชิงปรัชญาและประวัติศาสตร์:** ความเป็นเอกเทศของพุทธศาสนาลี้ลับสายใต้และการประเมินสถานะในโลกวิชาการสากล

### บทที่ 2: ภาพรวมของพุทธและฮินดูตันตริก: กำเนิด พัฒนาการ และการส่งออกข้ามแดน
- **2.1 รากเหง้าประวัติศาสตร์ในอินเดีย:** `S-1933-winternitz-01` (Sec. III Ch. 1-8), `S-1998-gethin-01` (Ch. 1-4, 9), `S-2010-neelis-01` (Ch. 1-4), `S-2015-szanto-01`, `S-2016-szanto-02`, `S-2018-flood-01`, `S-2021-white-01`, `S-2024-kotyk-01`, `S-2026-pain-01`, `S-2003-lamotte-01`, `S-1916-geiger-01`
- **2.2 ปฏิสัมพันธ์ไศวะตันตระและพุทธตันตระ (The Saiva Age):** `S-2014-acri-02`, `S-2018-acri-03`, `S-2018-flood-01`, `S-2021-white-01`, `S-2007-ando-01`, `S-2020-acri-03`, `S-2016-makin-01`, `S-2022-balogh-01`, `S-2013-mallinson-01`
- **2.3 พัฒนาการของพุทธตันตระ (มนตรยาน วัชรยาน):** `S-1933-winternitz-01` (Dhāraṇīs & Tantras), `S-1998-gethin-01` (Ch. 9), `S-1982-chutiwongs-01`, `S-2015-szanto-01`, `S-2016-szanto-02`, `S-2022-acri-01`, `S-2013-apple-01`, `S-2024-revire-02`, `S-2024-kotyk-01`
- **2.4 สรีรวิทยาเร้นลับและเทคโนโลยีพิธีกรรม:** `S-1933-winternitz-01`, `S-1998-gethin-01` (Ch. 5), `S-1982-chutiwongs-01`, `S-2013-mallinson-01`, `S-2015-szanto-01`, `S-2016-szanto-02`, `S-2018-flood-01`, `S-2018-acri-03`, `S-2021-white-01`, `S-2019-berkwitz-01`, `S-2016-urban-01`
- **2.5 การส่งออกข้ามแดนผ่านเครือข่ายทางทะเล:** `S-2010-neelis-01` (Ch. 1, 3, 6, 7), `S-2015-blackburn-01`, `S-2016-acri-04`, `S-2011-bronkhorst-01`, `S-2014-revire-01`, `S-2024-revire-02`, `S-2026-pain-01`
- **2.6 พุทธ-ฮินดูตันตระในชวา สุมาตรา และเขมร:** `S-2016-acri-04` (Borobudur), `S-2020-acri-03`, `S-2022-acri-01`, `S-2007-ando-01`, `S-2016-makin-01`, `S-2017-kieven-01`, `S-2023-mulyanto-01`, `S-1982-chutiwongs-01`, `S-2014-revire-01`, `S-2024-kotyk-01`, `S-2024-revire-02`
- **2.7 การเปลี่ยนผ่านหลังศตวรรษที่ 13:** `S-1928-malalasekera-01` (Ch. 8-13), `S-1933-law-01` (Vol. 2 Ch. 4-6), `S-1916-geiger-01` (Periode 2-3), `S-2015-blackburn-01`, `S-2020-gornall-01`, `S-2018-hettiarachchi-01`, `S-1965-saddhatissa-01`, `S-2007-blackburn-01`, `S-2012-skilling-01` (Ch. 4, 6), `S-2014-revire-01`
- **2.8 สรุปบทเรียนประวัติศาสตร์สู่เอเชียตะวันออกเฉียงใต้แผ่นดินใหญ่:** `S-2010-neelis-01`, `S-2020-gornall-01`, `S-2007-blackburn-01`, `S-1928-malalasekera-01`

### บทที่ 3: ภาพรวมเกี่ยวกับเถรวาทตันตริกในเอเชียตะวันออกเฉียงใต้
- **3.1 ภูมิหลังการเข้ามาและการสถาปนาเถรวาทจารีต:** `S-1928-malalasekera-01` (Ch. 1-14), `S-1933-law-01` (Vol. 2), `S-2015-blackburn-01`, `S-2020-gornall-01`, `S-2007-blackburn-01`, `S-2007-kourilsky-01`, `S-2012-skilling-01` (Ch. 4-9), `S-2018-hettiarachchi-01`, `S-2022-french-01` (Ch. 2 Lammerts), `S-2024-kourilsky-02`
- **3.2 คัมภีร์และวรรณกรรมสำคัญ (โยคาวจร, สัททวิมล, พระธรรมกาย):** `S-1928-malalasekera-01` (Ch. 2-6, 9-11), `S-1933-law-01` (Vol. 1 Ch. 2, Vol. 2 Ch. 4, 5, 7, 8, 9), `S-1916-geiger-01` (Kanonische & Nichtkanonische Literatur), `S-2007-kourilsky-01`, `S-2010-castro-01`, `S-1965-saddhatissa-01`, `S-2024-kourilsky-02`, `S-2025-skilton-01`, `S-2026-cholvijarn-01`, `S-2005-analayo-01`
- **3.3 สรีรวิทยาการภาวนา (สัททวิทยา, อักษรศักดิ์สิทธิ์, คัพภวิทยา):** `S-1984-tambiah-01` (Ch. 2, 3, 4, 17), `S-1998-gethin-01` (Ch. 5, 6, 7, 8), `S-2007-mackenzie-01` (Ch. 4), `S-2010-castro-01`, `S-2010-demers-01` (Ch. 3), `S-2024-shaw-01`, `S-1916-geiger-01` (Lautlehre & Formenlehre)
- **3.4 สายธารการสืบทอดในสยามและล้านนา (วัดราชสิทธาราม, หลวงพ่อสด, พระป่า):** `S-1984-tambiah-01` (Ch. 1, 5, 6, 9, 10, 11, 12, 13, 18, 19), `S-2007-mackenzie-01` (Ch. 2, 4), `S-2012-skilling-01` (Ch. 7 Rama I), `S-2026-cholvijarn-01`
- **3.5 ธรรมเนียมในเขมร ลาว และพม่า (ครูเขมร, เวชชาพม่า):** `S-2013-foxeus-01`, `S-2013-foxeus-02`, `S-2013-schober-01`, `S-2017-perriere-01`, `S-2026-perriere-01`, `S-2015-overmeire-01`, `S-2019-stanford-01`, `S-2007-kourilsky-01`, `S-2010-castro-01`, `S-2012-skilling-01` (Ch. 4, 5, 9), `S-2021-arensen-01`, `S-2022-french-01` (Ch. 10, 11)
- **3.6 ภัยคุกคามและการกวาดล้าง (การปฏิรูปสงฆ์ ร.4, ธรรมยุต, นวโกวาท):** `S-1984-tambiah-01` (Ch. 11, 12, 13), `S-2012-skilling-01` (Ch. 10 Mongkut, Ch. 11 Chulalongkorn), `S-2016-larsson-01`, `S-2022-french-01` (Ch. 1, 2, 7, 8, 9, 10, 11), `S-2022-lawrence-01`, `S-2009-seeger-01`, `S-2010-demers-01` (Ch. 5)
- **3.7 การดำรงอยู่และการฟื้นคืนในโลกร่วมสมัย (พระเครื่อง, วิชชาธรรมกาย, เวชชา):** `S-1984-tambiah-01` (Ch. 14-22), `S-2007-mackenzie-01` (Ch. 2-8), `S-2013-foxeus-01`, `S-2013-foxeus-02`, `S-2026-perriere-01`, `S-2017-perriere-01`, `S-2013-baker-01`, `S-2024-baker-01`, `S-2026-cholvijarn-01`, `S-2024-mcbain-01`, `S-2024-lim-01`, `S-2024-qi-01`, `S-2024-suebsantiwongse-01`, `S-2024-seeger-01`, `S-2017-wattanagun-01`, `S-2017-sopranzetti-01`, `S-1982-chutiwongs-01`, `S-2019-berkwitz-01`
- **3.8 สรุปสัณฐานวิทยาของพุทธศาสนาลี้ลับสายใต้:** `S-1998-gethin-01` (Ch. 7, 8, 10), `S-2012-skilling-01` (Ch. 1, 2, 12), `S-1933-law-01` (Vol. 2 Ch. 7), `S-2024-kourilsky-02`, `S-2025-skilton-01`, `S-2024-shaw-01`

### บทที่ 4: ภาพรวมของสถานภาพการศึกษาทั้งหมดตามไทม์ไลน์
- **4.1 ยุคบุกเบิกแห่งการค้นพบเอกสาร (1890s–1950s):** `S-1928-malalasekera-01`, `S-1933-law-01`, `S-1933-winternitz-01`, `S-1916-geiger-01`, `S-1965-saddhatissa-01`, `S-2024-revire-02` (George Cœdès retrospective)
- **4.2 ยุคการปฏิวัติทัศนะของบิโซต์และสำนักฝรั่งเศส (1960s–1980s):** `S-1982-chutiwongs-01`, `S-1984-tambiah-01`
- **4.3 การถกเถียงเรื่องมโนทัศน์ (1990s):** `S-1998-gethin-01`, `S-2012-skilling-01` (Ch. 1, 2, 3), `S-1984-tambiah-01`
- **4.4 การสังเคราะห์ร่วมสมัย (2000s–2010s):** `S-2007-mackenzie-01`, `S-2010-demers-01`, `S-2010-neelis-01`, `S-2012-skilling-01`, `S-2010-castro-01`, `S-2013-foxeus-01`, `S-2013-foxeus-02`, `S-2015-blackburn-01`, `S-2016-acri-04`, `S-2014-acri-02`, `S-2018-acri-03`, `S-2018-flood-01`, `S-2014-revire-01`, `S-2015-szanto-01`, `S-2016-szanto-02`, `S-2013-baker-01`, `S-2007-kourilsky-01`, `S-2007-ando-01`, `S-2007-blackburn-01`, `S-2014-cox-01`
- **4.5 การศึกษาแบบพหุภาษาและสหวิทยาการ (2020s):** `S-2022-french-01`, `S-2020-acri-03`, `S-2020-gornall-01`, `S-2022-acri-01`, `S-2022-balogh-01`, `S-2022-lawrence-01`, `S-2024-kourilsky-02`, `S-2025-skilton-01`, `S-2026-cholvijarn-01`, `S-2026-perriere-01`, `S-2024-baker-01`, `S-2024-mcbain-01`, `S-2024-lim-01`, `S-2024-qi-01`, `S-2024-seeger-01`, `S-2024-shaw-01`, `S-2024-suebsantiwongse-01`, `S-2024-kotyk-01`, `S-2024-revire-02`, `S-2026-pain-01`, `S-2023-borup-01`
- **4.6 แผนภาพไทม์ไลน์พัฒนาการทางวิชาการ (1896–2026):** การประมวลสังเคราะห์ลำดับเหตุการณ์การค้นพบและการตีพิมพ์
- **4.7 การวิเคราะห์ช่องว่าง ข้อจำกัด และข้อถกเถียง:** `S-2023-borup-01`, `S-2010-demers-01`, `S-2022-french-01`, `S-2007-mackenzie-01`
- **4.8 สรุปสถานภาพการศึกษาและทิศทางการวิจัยในอนาคต:** บทบาทและคุณูปการใหม่ของโครงการวิจัย
