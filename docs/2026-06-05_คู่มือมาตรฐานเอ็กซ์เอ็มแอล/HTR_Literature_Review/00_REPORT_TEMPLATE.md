# แม่แบบรายงาน (Report Templates)

> **วัตถุประสงค์:** เอกสารนี้เป็นแม่แบบกลางสำหรับการเขียนรายงานทุกเล่มในชุด HTR Literature Review
> ทุกรายงานต้องใช้โครงสร้างตาม template นี้อย่างเคร่งครัด เพื่อให้ทีมอ่านและเปรียบเทียบข้ามรายงานได้สะดวก

---

## สารบัญ

1. [Template A: Foundation Report](#template-a-foundation-report)
2. [Template B: Case Study Report](#template-b-case-study-report)
3. [Template C: Synthesis Report](#template-c-synthesis-report)
4. [ข้อกำหนดการเขียนทั่วไป](#ข้อกำหนดการเขียนทั่วไป)

---

## Template A: Foundation Report

```markdown
# [ชื่อหัวข้อภาษาไทย — ชื่อหัวข้อภาษาอังกฤษ]

> **รหัสรายงาน:** F0X  
> **สถานะ:** Draft / Review / Final  
> **ผู้เขียน:** AI Agent (supervised by [ชื่อ])  
> **วันที่สร้าง:** YYYY-MM-DD  
> **วันที่แก้ไขล่าสุด:** YYYY-MM-DD  
> **เวอร์ชัน:** 1.0  
> **รายงานที่เกี่ยวข้อง:** [F0Y](../Foundation/F0Y_xxx.md), [F0Z](../Foundation/F0Z_xxx.md)

---

## สารบัญ

<!-- สร้างด้วย heading links -->

---

## 1. บทนำ (Introduction)

### 1.1 ขอบเขตของรายงานนี้
- รายงานนี้ครอบคลุมอะไร ไม่ครอบคลุมอะไร

### 1.2 ทำไมหัวข้อนี้สำคัญสำหรับ HTR เอกสารโบราณ
- บริบทและความสำคัญ

### 1.3 ความสัมพันธ์กับรายงานอื่น
- Cross-reference links ไปยังรายงานอื่นในชุด
- อ่านรายงานนี้ก่อน/หลังรายงานใด

### 1.4 ข้อกำหนดเบื้องต้น (Prerequisites)
- ความรู้พื้นฐานที่ผู้อ่านควรมี (หรือระบุว่า "ไม่จำเป็น")

---

## 2. พื้นฐานและคำศัพท์ (Background & Terminology)

### 2.1 แนวคิดหลัก
- อธิบายแนวคิดหลักอย่างเข้าใจง่าย
- ใช้ analogy ถ้าช่วยให้เข้าใจ

### 2.2 คำศัพท์สำคัญ
| ศัพท์ (อังกฤษ) | ความหมาย (ไทย) | หมายเหตุ |
|---|---|---|
| ... | ... | ... |

> **หมายเหตุ:** ดูรายการศัพท์ครบถ้วนใน [อภิธานศัพท์](../00_GLOSSARY.md)

### 2.3 ไดอะแกรมภาพรวม
<!-- Mermaid diagram -->

---

## 3. เนื้อหาหลัก

<!-- แบ่งเป็น sections ตามความเหมาะสม -->
### 3.1 [หัวข้อย่อย]
### 3.2 [หัวข้อย่อย]
### 3.3 [หัวข้อย่อย]

---

## 4. เปรียบเทียบแนวทางต่าง ๆ (Comparative Analysis)

### 4.1 ตารางเปรียบเทียบ
| เกณฑ์ | แนวทาง A | แนวทาง B | แนวทาง C |
|---|---|---|---|
| ... | ... | ... | ... |

### 4.2 สรุปข้อดีข้อเสีย

### 4.3 แนวทางที่แนะนำสำหรับบริบทต่าง ๆ

---

## 5. ผลกระทบต่อโปรเจกต์ไทย/ขอม (Implications for Thai/Khom HTR Project)

> **ขั้นต่ำ 300 คำ** — section นี้ต้องมีเนื้อหาเฉพาะเจาะจง ไม่ใช่ generic

### 5.1 บทเรียนที่ apply ได้โดยตรง
- ระบุชัดเจนว่า apply กับสมุดไทย / ใบลาน / อักษรไทย / อักษรขอม อย่างไร

### 5.2 ข้อควรระวัง
- สิ่งที่ไม่ควรทำตามโดยตรง เพราะบริบทต่างกัน

### 5.3 ข้อเสนอแนะเฉพาะ
- Actionable recommendations พร้อมเหตุผล

---

## 6. แหล่งอ้างอิง (References)

### งานวิจัย (Papers)
1. [Author(s), "Title," *Venue*, Year. DOI/URL]

### เอกสารเทคนิค (Documentation)
1. [ชื่อเอกสาร, URL]

### Datasets
1. [ชื่อ dataset, URL, License]

### เครื่องมือ (Tools)
1. [ชื่อเครื่องมือ, URL, License]
```

---

## Template B: Case Study Report

```markdown
# [ชื่อโปรเจกต์/งานวิจัย]

> **รหัสรายงาน:** EU0X / AS0X / XC0X  
> **สถานะ:** Draft / Review / Final  
> **ผู้เขียน:** AI Agent (supervised by [ชื่อ])  
> **วันที่สร้าง:** YYYY-MM-DD  
> **วันที่แก้ไขล่าสุด:** YYYY-MM-DD  
> **เวอร์ชัน:** 1.0

### ข้อมูลงานวิจัย (Paper Metadata)
| รายการ | รายละเอียด |
|---|---|
| **ชื่องานวิจัย (Title)** | [ชื่อเต็ม] |
| **ผู้แต่ง (Authors)** | [รายชื่อ] |
| **สถาบัน (Institutions)** | [ชื่อสถาบัน] |
| **แหล่งตีพิมพ์ (Venue)** | [ชื่อวารสาร/การประชุม] |
| **ปีที่ตีพิมพ์** | YYYY |
| **DOI/URL** | [link ที่ verify แล้ว] |
| **HTR Engine(s)** | [Kraken / Transkribus / TrOCR / PyLaia / อื่นๆ] |
| **ภูมิภาค/อักษร** | [ระบุ] |
| **ประเภทเอกสาร** | [ต้นฉบับลายมือ / ใบลาน / สมุดพับ / ม้วนคัมภีร์ / แผนที่ / อื่นๆ] |
| **ช่วงเวลาของเอกสาร** | [ศตวรรษที่ X – Y] |
| **ขนาด Dataset** | [จำนวนหน้า/บรรทัด/อักขระ] |
| **CER ที่ดีที่สุด** | [X.XX%] |

---

## สารบัญ

---

## 1. บทนำและบริบท (Introduction & Context)

### 1.1 ภาพรวมโปรเจกต์
- เป้าหมายของงานวิจัย
- สถาบัน/ทีมวิจัย และแหล่งทุน
- ลักษณะเอกสารที่ศึกษา (ยุคสมัย, วัสดุ, สภาพ, ภาษา, อักษร)
- ขนาดของ dataset

### 1.2 ลักษณะเอกสาร
- คำอธิบายลักษณะทางกายภาพ (วัสดุ, ขนาด, สภาพ)
- ลักษณะการเขียน (ลายมือ, หมึก, เครื่องมือเขียน)
- ความท้าทายเฉพาะที่มองเห็นได้ (รอยขาด, สีซีด, หมึกเลือน, bleed-through)
- ลักษณะ layout (คอลัมน์, marginalia, illustrations)

### 1.3 บริบทสำคัญ (Background)
- สรุปย่อความรู้พื้นฐานเฉพาะที่จำเป็นสำหรับเข้าใจ case study นี้
- อ้างอิงไปยัง Foundation Reports สำหรับรายละเอียด

---

## 2. ขั้นตอนการเตรียม Dataset (Dataset Creation Pipeline)

### 2.1 การจัดหาภาพ (Image Acquisition)
- แหล่งที่มาของภาพ (digitization project, digital archive, library)
- ความละเอียดภาพ (DPI), format (TIFF/JPEG/PNG), color depth
- จำนวนภาพ
- กระบวนการ digitization (ถ้ามีรายละเอียด)

### 2.2 Pre-processing
- Binarization method ที่ใช้ (Otsu / Sauvola / learnable / อื่นๆ)
- Deskewing, cropping, dewarping
- Noise removal techniques
- เครื่องมือ/library ที่ใช้
- ผลลัพธ์ก่อน-หลัง (ถ้ามี)

### 2.3 Layout Analysis & Segmentation
- วิธีการแบ่ง region / line / baseline
- Model/algorithm ที่ใช้
- เครื่องมือ (Kraken blla / ScanTailor / dhSegment / custom)
- ปัญหาที่พบและวิธีแก้
- Segmentation accuracy (ถ้ามี)

### 2.4 Ground Truth Creation
- **Annotation tool:** [เครื่องมือที่ใช้]
- **Transcription guidelines:** สรุปกฎสำคัญ
- **GT format:** PAGE XML / ALTO XML / plain text pairs / อื่นๆ
- **จำนวน annotators:** [จำนวน]
- **Inter-annotator agreement:** [metric & ค่า] (ถ้ามี)
- **ระยะเวลา annotation:** [ชั่วโมง/หน้า] (ถ้ามี)
- **ต้นทุน:** [ถ้ามี]
- **ปัญหาที่พบ:** [อธิบาย]

### 2.5 Data Augmentation (ถ้ามี)
- เทคนิคที่ใช้
- จำนวนข้อมูลก่อน/หลัง augmentation
- ผลกระทบต่อ model performance

---

## 3. สถาปัตยกรรม Model และการเทรน (Model Architecture & Training)

### 3.1 HTR Engine / Framework
- Engine ที่ใช้ และ version
- เหตุผลในการเลือก (ถ้าระบุใน paper)

### 3.2 Model Architecture
- ประเภท (CRNN / Transformer / Attention / hybrid / อื่นๆ)
- รายละเอียด network architecture (layers, parameters)
- Input specification (image size, preprocessing)
- Output specification (charset, encoding)

### 3.3 Training Configuration
| Parameter | ค่า |
|---|---|
| Learning Rate | |
| Batch Size | |
| Epochs | |
| Optimizer | |
| Loss Function | |
| Early Stopping | |
| Regularization | |

- Hardware ที่ใช้เทรน (GPU model, RAM)
- เวลาที่ใช้เทรน

### 3.4 Transfer Learning (ถ้ามี)
- Pre-trained model ที่ใช้เป็นฐาน (ชื่อ, source)
- Fine-tuning strategy (freeze layers, learning rate schedule)
- ผลเปรียบเทียบ train from scratch vs fine-tune

---

## 4. ผลลัพธ์และการประเมิน (Results & Evaluation)

### 4.1 Metrics ที่ใช้
- รายการ metrics พร้อมคำอธิบายสั้น

### 4.2 ผลลัพธ์หลัก
| Model/Configuration | CER (%) | WER (%) | อื่นๆ |
|---|---|---|---|
| Baseline | | | |
| Best Model | | | |
| ... | | | |

### 4.3 Ablation Studies (ถ้ามี)
- ตารางผลการทดสอบแยกปัจจัย

### 4.4 Error Analysis
- ประเภทข้อผิดพลาดที่พบบ่อย
- ตัวอย่างข้อผิดพลาด (ถ้ามี)
- สาเหตุที่วิเคราะห์ได้
- ตัวอักษร/pattern ที่ model มีปัญหา

---

## 5. ความท้าทายและบทเรียน (Challenges & Lessons Learned)

### 5.1 ความท้าทายด้านเอกสาร
- สภาพวัสดุ, ความเสียหาย, ความซับซ้อนของ layout

### 5.2 ความท้าทายด้านเทคนิค
- ปัญหาด้าน preprocessing, segmentation, recognition

### 5.3 ความท้าทายด้านบุคลากร/ทรัพยากร
- ปัญหาด้านผู้เชี่ยวชาญ, เวลา, งบประมาณ

### 5.4 บทเรียนสำคัญ
- สิ่งที่ได้เรียนรู้จากโปรเจกต์นี้

### 5.5 สิ่งที่จะทำต่างไปหากเริ่มใหม่ (ถ้ามีระบุใน source)

---

## 6. เครื่องมือและทรัพยากรที่เปิดเผย (Open Resources)

| ประเภท | ชื่อ | URL | License | หมายเหตุ |
|---|---|---|---|---|
| Dataset | | | | |
| Pre-trained Model | | | | |
| Code Repository | | | | |
| Annotation Guidelines | | | | |

---

## 7. ผลกระทบต่อโปรเจกต์ไทย/ขอม (Implications for Thai/Khom HTR Project)

> **ขั้นต่ำ 200 คำ** — ต้องเฉพาะเจาะจง ไม่ใช่ generic

### 7.1 บทเรียนที่ apply ได้โดยตรง
- ระบุชัดเจนว่าใช้กับ สมุดไทย / ใบลาน / อักษรไทย / อักษรขอม / ยันต์ อย่างไร

### 7.2 ข้อควรระวัง
- สิ่งที่ไม่ควรลอกตาม เพราะบริบทต่างกัน

### 7.3 ข้อเสนอแนะเฉพาะ
- Actionable items สำหรับทีม

---

## 8. แหล่งอ้างอิง (References)

### แหล่งหลัก (Primary Source)
1. [Full citation ของ paper หลักที่วิเคราะห์]

### แหล่งเสริม (Supporting Sources)
1. [Citations อื่นๆ ที่อ้างถึงในรายงาน]
```

---

## Template C: Synthesis Report

```markdown
# [ชื่อหัวข้อสังเคราะห์]

> **รหัสรายงาน:** S0X  
> **สถานะ:** Draft / Review / Final  
> **ผู้เขียน:** AI Agent (supervised by [ชื่อ])  
> **วันที่สร้าง:** YYYY-MM-DD  
> **วันที่แก้ไขล่าสุด:** YYYY-MM-DD  
> **เวอร์ชัน:** 1.0  
> **รายงานที่สังเคราะห์จาก:** [รายชื่อ report IDs ทั้งหมด]

---

## สารบัญ

---

## 1. บทนำ (Introduction)
- วัตถุประสงค์ของรายงานสังเคราะห์นี้
- ขอบเขต: สังเคราะห์จากรายงานจำนวนกี่เล่ม

## 2. สรุปภาพรวม (Overview Summary)
- ตารางสรุปทุกโปรเจกต์ที่ศึกษา
- สถิติภาพรวม

## 3. การวิเคราะห์เชิงเปรียบเทียบ (Comparative Analysis)
- ตารางเปรียบเทียบข้ามโปรเจกต์
- Mermaid diagrams

## 4. รูปแบบและแนวโน้มที่พบ (Patterns & Trends)

## 5. ช่องว่างในงานวิจัย (Research Gaps)

## 6. ข้อเสนอแนะสำหรับโปรเจกต์ไทย/ขอม (Recommendations)

## 7. แหล่งอ้างอิง (References)
- อ้างกลับไป case study reports ด้วย relative links
```

---

## ข้อกำหนดการเขียนทั่วไป

### ภาษาและศัพท์
- **ภาษาหลัก:** ไทย
- **ศัพท์เทคนิค:** ใช้ภาษาอังกฤษตามสากล เช่น "baseline detection", "CER", "binarization"
- **เมื่อใช้ศัพท์ครั้งแรก:** อธิบายความหมายสั้นๆ ในวงเล็บ แล้วใช้ศัพท์อังกฤษต่อไป
- **ตัวอย่าง:** "การตรวจจับเส้นฐาน (baseline detection — เส้นสมมติที่ตัวอักษรวางอยู่) เป็นขั้นตอนสำคัญ..."

### การอ้างอิง (Citations)
- **ทุก factual claim ต้องมี citation** ยกเว้นความรู้ทั่วไป
- **รูปแบบ:** `[Author et al., Year]` ใน text, full citation ใน References
- **DOI/URL:** ต้อง verify ว่า accessible ได้จริง
- **ห้าม fabricate:** ถ้าไม่มี source ให้ระบุ `[⚠️ ต้องการ source]`

### ตารางและไดอะแกรม
- **ใช้ตาราง** สำหรับ comparison data ทุกครั้ง
- **ใช้ Mermaid diagrams** สำหรับ pipeline, architecture, workflow
- **ทุกตาราง/ไดอะแกรม** ต้องมี caption อธิบาย

### Cross-references
- **ใช้ relative paths:** `[ชื่อรายงาน](../Foundation/F01_xxx.md)`
- **อ้างถึง section:** `ดูรายละเอียดใน [F01 §3.2](../Foundation/F01_xxx.md#32-...)`
- **อ้าง Glossary:** `ดูคำอธิบายใน [อภิธานศัพท์](../00_GLOSSARY.md)`

### ข้อห้าม
1. ❌ ห้าม fabricate citations, ตัวเลข, หรือผลลัพธ์
2. ❌ ห้ามข้าม section ใน template — ถ้าไม่มีข้อมูลให้ระบุ "ไม่มีข้อมูลใน source"
3. ❌ ห้ามสรุปแบบ generic ใน Implications section — ต้องเฉพาะเจาะจง
4. ❌ ห้ามรวมหลาย papers เป็น case study เดียว (ยกเว้นเป็นโปรเจกต์เดียวกัน)
5. ❌ ห้ามใช้ข้อมูลจาก papers ที่ไม่สามารถ verify ได้

### ขั้นตอนการเขียนแต่ละรายงาน
1. ค้นหาด้วย search queries ที่กำหนด
2. Verify ว่า paper/source มีอยู่จริง (DOI/URL accessible)
3. อ่านและจดบันทึกข้อมูลสำคัญ
4. เขียนตาม template อย่างครบถ้วน
5. ตรวจสอบตามเกณฑ์ (checklist)
6. Update `00_INDEX.md`
