# ทะเบียนคลังข้อมูลและการแจกแจงเอกสารแม่บท (Corpus Inventory & Analytical Register)

> **โครงการแม่บท:** `output/2026-09-03_แม่บทมนุษยศาสตร์ดิจิทัล`  
> **วัตถุประสงค์:** รวบรวมสถิติ บันทึกข้อมูลกายภาพ และแจกแจงสาระสำคัญของรายงานด้านมนุษยศาสตร์ดิจิทัล HTR และสเต็มมาเชิงคำนวณใน `output/`  
> **ระบบอ้างอิง:** มาตรฐาน Chicago Manual of Style (17th Edition)

---

## 1. บทสรุปสถิติคลังข้อมูลรวม (Overall Corpus Statistics)

| หมวดหมู่การประเมิน | ปริมาณ / รายละเอียด |
|:---|:---|
| **จำนวนโครงการหลักที่บูรณาการ** | 3 โครงการหลัก + 2 ชุดคู่มือทางเทคนิคในบทความเก่า |
| **จำนวนบท/ไฟล์รายงานทั้งหมด** | 45+ ไฟล์รายงานหลัก (+ 23 ไฟล์คู่มือเสริม) |
| **ปริมาณขนาดไฟล์รวม (Total Size)** | ~66 MB |
| **จำนวนคำประเมินรวม (Estimated Words)** | > 420,000 คำ (มาตรฐานอักขระไทยตัดช่องว่างหาร 5.0) |
| **เทคโนโลยีและซอฟต์แวร์ที่ประเมิน** | Kraken, eScriptorium, Transkribus, BEAST 2, teiphy, PAGE XML, ALTO XML, METS, TEI |

---

## 2. การแจกแจงรายละเอียดรายโครงการ (Detailed Project Register)

### 2.1 โครงการที่ 1: `HTR_Research_Upgrade` (27 บท)
- **โฟลเดอร์ปฏิบัติการ:** [`output/2026-06-05_วิจัยระบบเอชทีอาร์/final/`](file:///d:/01_APP/Research/output/2026-06-05_วิจัยระบบเอชทีอาร์/final/)
- **สาระสำคัญ:** ระบบวิจัย HTR ฉบับสมบูรณ์สำหรับเอกสารโบราณในไทย: การเปรียบเทียบ Kraken vs Transkribus, สถาปัตยกรรม CTC (Connectionist Temporal Classification), ขอบเขตอักขระขอมไทยและธรรมล้านนา, การติดตั้ง eScriptorium บน Docker, การสกัดและแปลงฐานข้อมูลเหมรังษีเป็น PAGE XML, กฎการปริวรรตอักษรโบราณด้วย Unicode Virama, และการฝึกฝนโมเดลให้มีความแม่นยำสูง (CER < 5%)
- **ไฟล์สำคัญ:**
  - [`00_สารบัญแกนกลาง_Master_Index.md`](file:///d:/01_APP/Research/output/2026-06-05_วิจัยระบบเอชทีอาร์/final/00_สารบัญแกนกลาง_Master_Index.md)
  - [`1.1_ภาพรวมระบบนิเวศHTRและเป้าหมายโครงการ.md`](file:///d:/01_APP/Research/output/2026-06-05_วิจัยระบบเอชทีอาร์/final/1.1_ภาพรวมระบบนิเวศHTRและเป้าหมายโครงการ.md)
  - [`1.2_เปรียบเทียบเครื่องมือHTRทั่วโลกและทำไมต้องKraken.md`](file:///d:/01_APP/Research/output/2026-06-05_วิจัยระบบเอชทีอาร์/final/1.2_เปรียบเทียบเครื่องมือHTRทั่วโลกและทำไมต้องKraken.md)
  - [`2.1_ทฤษฎีการอ่านข้อความด้วยAIและกลไกCTC.md`](file:///d:/01_APP/Research/output/2026-06-05_วิจัยระบบเอชทีอาร์/final/2.1_ทฤษฎีการอ่านข้อความด้วยAIและกลไกCTC.md)
  - [`2.2_มาตรฐานPAGE_XMLและALTO_XMLเชิงเปรียบเทียบ.md`](file:///d:/01_APP/Research/output/2026-06-05_วิจัยระบบเอชทีอาร์/final/2.2_มาตรฐานPAGE_XMLและALTO_XMLเชิงเปรียบเทียบ.md)
  - [`4.2_การติดตั้งและตั้งค่าeScriptoriumผ่านDocker.md`](file:///d:/01_APP/Research/output/2026-06-05_วิจัยระบบเอชทีอาร์/final/4.2_การติดตั้งและตั้งค่าeScriptoriumผ่านDocker.md)

### 2.2 โครงการที่ 2: `XML_Standards_Guide` (14+ บท)
- **โฟลเดอร์ปฏิบัติการ:** [`output/2026-06-05_คู่มือมาตรฐานเอ็กซ์เอ็มแอล/`](file:///d:/01_APP/Research/output/2026-06-05_คู่มือมาตรฐานเอ็กซ์เอ็มแอล/)
- **สาระสำคัญ:** คู่มือมาตรฐานข้อมูลเชิงโครงสร้าง XML: ประวัติ โครงสร้าง Schema และตารางเปรียบเทียบแท็กแบบบรรทัดต่อบรรทัดระหว่าง PAGE XML (PRImA Research) กับ ALTO XML (Library of Congress), การบริหารจัดการโครงสร้างมัลติมีเดียระดับเอกสารด้วย METS XML, การประยุกต์ใช้ TEI XML (Text Encoding Initiative) กับเอกสารตัวเขียนเอเชีย (ทิเบต, ชวา, บาหลี, สยาม), และแนวปฏิบัติการสร้างชุดข้อมูล Ground Truth
- **ไฟล์สำคัญ:**
  - [`01_พื้นฐาน_XML_สำหรับ_OCR_HTR.md`](file:///d:/01_APP/Research/output/2026-06-05_คู่มือมาตรฐานเอ็กซ์เอ็มแอล/01_พื้นฐาน_XML_สำหรับ_OCR_HTR.md)
  - [`02_ALTO_XML_ประวัติ_โครงสร้าง_Schema.md`](file:///d:/01_APP/Research/output/2026-06-05_คู่มือมาตรฐานเอ็กซ์เอ็มแอล/02_ALTO_XML_ประวัติ_โครงสร้าง_Schema.md)
  - [`03_PAGE_XML_ประวัติ_โครงสร้าง_Schema.md`](file:///d:/01_APP/Research/output/2026-06-05_คู่มือมาตรฐานเอ็กซ์เอ็มแอล/03_PAGE_XML_ประวัติ_โครงสร้าง_Schema.md)
  - [`04_ตารางเปรียบเทียบ_Tag_ฉบับสมบูรณ์.md`](file:///d:/01_APP/Research/output/2026-06-05_คู่มือมาตรฐานเอ็กซ์เอ็มแอล/04_ตารางเปรียบเทียบ_Tag_ฉบับสมบูรณ์.md)
  - [`09_METS_XML_โครงสร้างระดับเอกสาร.md`](file:///d:/01_APP/Research/output/2026-06-05_คู่มือมาตรฐานเอ็กซ์เอ็มแอล/09_METS_XML_โครงสร้างระดับเอกสาร.md)
  - [`12_TEI_XML_สำหรับมนุษยศาสตร์ดิจิทัล.md`](file:///d:/01_APP/Research/output/2026-06-05_คู่มือมาตรฐานเอ็กซ์เอ็มแอล/12_TEI_XML_สำหรับมนุษยศาสตร์ดิจิทัล.md)

### 2.3 โครงการที่ 3: `Genetics_Report` (4 บทวิจัยหลัก)
- **โฟลเดอร์ปฏิบัติการ:** [`output/2026-06-05_พันธุศาสตร์คัมภีร์วิเคราะห์/drafts/`](file:///d:/01_APP/Research/output/2026-06-05_พันธุศาสตร์คัมภีร์วิเคราะห์/drafts/)
- **สาระสำคัญ:** การผสานรวมชีววิทยาเชิงคำนวณเข้ากับนิรุกติศาสตร์: "พันธุศาสตร์คัมภีร์วิเคราะห์" (Phylogenetic Stemmatology), การประยุกต์ทฤษฎีการกลายพันธุ์ของยีน (Mutation) กับข้อผิดพลาดของอาลักษณ์ (Scribal Errors), การใช้โมเดลนิเวศวิทยาสายพันธุ์ที่มองไม่เห็น (Unseen Species Models) คาดคะเนวรรณกรรมที่สูญหายในยุคกลาง, การสร้าง Stemma Codicum ด้วยโมเดลเบย์เซียนผ่าน BEAST 2, และการจัดสายวิวัฒนาการของเหรียญกษาปณ์โบราณ (Evolutionary Numismatics)
- **ไฟล์สำคัญ:**
  - [`Chapter_3_Phylogenetic_Stemmatology.md`](file:///d:/01_APP/Research/output/2026-06-05_พันธุศาสตร์คัมภีร์วิเคราะห์/drafts/Chapter_3_Phylogenetic_Stemmatology.md)
  - [`Chapter_4_Evolutionary_Numismatics.md`](file:///d:/01_APP/Research/output/2026-06-05_พันธุศาสตร์คัมภีร์วิเคราะห์/drafts/Chapter_4_Evolutionary_Numismatics.md)
  - [`Annotated_Bibliography.md`](file:///d:/01_APP/Research/output/2026-06-05_พันธุศาสตร์คัมภีร์วิเคราะห์/drafts/Annotated_Bibliography.md)
  - [`Bibliography_Master.md`](file:///d:/01_APP/Research/output/2026-06-05_พันธุศาสตร์คัมภีร์วิเคราะห์/drafts/Bibliography_Master.md)
