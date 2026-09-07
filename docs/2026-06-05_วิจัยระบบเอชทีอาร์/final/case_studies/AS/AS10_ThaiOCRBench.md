# ThaiOCRBench: A Task-Diverse Benchmark for Vision-Language Understanding in Thai

> **รหัสรายงาน:** AS10  
> **สถานะ:** Final  
> **ผู้เขียน:** AI Agent (supervised by Vesin)  
> **วันที่สร้าง:** 2026-06-04  
> **วันที่แก้ไขล่าสุด:** 2026-06-04  
> **เวอร์ชัน:** 1.1 (ปรับปรุงโครงสร้างตาม Template B)

### ข้อมูลงานวิจัย (Paper Metadata)
| รายการ | รายละเอียด |
|---|---|
| **ชื่องานวิจัย (Title)** | ThaiOCRBench: A Task-Diverse Benchmark for Vision-Language Understanding in Thai |
| **ผู้แต่ง (Authors)** | SCB 10X (Typhoon AI) Research Team |
| **สถาบัน (Institutions)** | SCB 10X, Thailand |
| **แหล่งตีพิมพ์ (Venue)** | Accepted to IJCNLP-AACL 2025 |
| **ปีที่ตีพิมพ์** | 2025 |
| **DOI/URL** | [arXiv:2511.04479](https://arxiv.org/abs/2511.04479) |
| **HTR Engine(s)** | Vision-Language Models (e.g., Gemini 2.5 Pro, Qwen-VL, Typhoon-VL) |
| **ภูมิภาค/อักษร** | เอเชียตะวันออกเฉียงใต้ / อักษรไทย (Thai Script) |
| **ประเภทเอกสาร** | เอกสารราชการ, การเงิน, เขียนด้วยลายมือ, ตาราง |
| **ช่วงเวลาของเอกสาร** | ยุคปัจจุบันและอดีตอันใกล้ |
| **ขนาด Dataset** | 2,808 human-annotated samples (13 task categories) |
| **CER/WER ที่ดีที่สุด** | Gemini 2.5 Pro (CER = 5.2% บน Full-page OCR) [1] |

---

## สารบัญ
- [1. บทนำและบริบท (Introduction & Context)](#1-บทนำและบริบท-introduction--context)
- [2. ขั้นตอนการเตรียม Dataset (Dataset Creation Pipeline)](#2-ขั้นตอนการเตรียม-dataset-dataset-creation-pipeline)
- [3. สถาปัตยกรรม Model และการเทรน (Model Architecture & Training)](#3-สถาปัตยกรรม-model-และการเทรน-model-architecture--training)
- [4. ผลลัพธ์และการประเมิน (Results & Evaluation)](#4-ผลลัพธ์และการประเมิน-results--evaluation)
- [5. ความท้าทายและบทเรียน (Challenges & Lessons Learned)](#5-ความท้าทายและบทเรียน-challenges--lessons-learned)
- [6. เครื่องมือและทรัพยากรที่เปิดเผย (Open Resources)](#6-เครื่องมือและทรัพยากรที่เปิดเผย-open-resources)
- [7. ผลกระทบต่อโปรเจกต์ไทย/ขอม (Implications for Thai/Khom HTR Project)](#7-ผลกระทบต่อโปรเจกต์ไทยขอม-implications-for-thaikhom-htr-project)
- [8. แหล่งอ้างอิง (References)](#8-แหล่งอ้างอิง-references)

---

## 1. บทนำและบริบท (Introduction & Context)

### 1.1 ภาพรวมโปรเจกต์
**ThaiOCRBench** เป็น Benchmark แบบครอบคลุมที่พัฒนาโดยทีมวิจัย SCB 10X (Typhoon AI) เพื่อใช้วัดประสิทธิภาพของ Vision-Language Models (VLMs) ทั้งแบบ Proprietary และ Open-source ในการทำความเข้าใจเอกสารภาษาไทย (Thai text-rich visual understanding) เป้าหมายคือการอุดช่องโหว่ของการประเมินผลโมเดล AI ในเอกสารภาษาไทย เนื่องจากภาษาไทยเป็น low-resource language ที่มีโครงสร้างอักษรซับซ้อน [1]

### 1.2 ภาพตัวอย่างเอกสาร (ลักษณะเอกสาร)
ความท้าทายหลักของเอกสารใน Benchmark นี้คือ:
- **Stacked Diacritics:** สระและวรรณยุกต์ที่ซ้อนกันหลายชั้น (Upper/Lower vowels) ทำให้เกิดข้อผิดพลาดในการแปลความ [1]
- **Complex Layouts:** ตาราง, กราฟ, เอกสารราชการที่มีตราครุฑ, แบบฟอร์มทางการเงิน [1]
- **Fine-grained Text:** การสกัดข้อความลายมือที่หวัดและอ่านยากจากแบบฟอร์มจำพวกคำร้อง [1]


---

## 2. ขั้นตอนการเตรียม Dataset (Dataset Creation Pipeline)

*(เปเปอร์นี้เป็นงานสร้าง Benchmark จึงเน้นที่กระบวนการเตรียมข้อมูลสำหรับการประเมินผล)*

### 2.1 การจัดหาภาพ (Image Acquisition)
- รวบรวมภาพเอกสารภาษาไทยที่สะท้อนการใช้งานจริง เช่น เอกสารราชการ ใบเสร็จ และแบบฟอร์มที่มีการเขียนด้วยลายมือ

### 2.2 Pre-processing
ไม่มีความจำเป็นต้องทำ Binarization เนื่องจากใช้ศักยภาพการจำแนกภาพสี (Color-modality) ของ VLMs โดยตรง [1]

### 2.3 Layout Analysis & Segmentation
ไม่มีการทำ Augmentation ในกระบวนการประเมินเนื่องจากเป็นการทดสอบโมเดลสำเร็จรูป [1]

### 2.4 Ground Truth Creation
- ใช้ผู้เชี่ยวชาญชาวมนุษย์ (Human annotators) ในการสร้าง Ground Truth เพื่อรับประกันคุณภาพ ไม่ใช้ AI generate เพื่อป้องกัน Data contamination
- ครอบคลุม 13 หมวดหมู่งาน เช่น Full-page OCR, Key Information Extraction (KIE), Table Parsing, และ Handwritten Content Extraction

### 2.5 Data Augmentation (ถ้ามี)
ไม่มีการทำ Augmentation ในกระบวนการประเมินเนื่องจากเป็นการทดสอบโมเดลสำเร็จรูป [1]

---

## 3. สถาปัตยกรรม Model และการเทรน (Model Architecture & Training)

*(เปเปอร์นี้ไม่ได้พัฒนา Model Architecture ใหม่ แต่เป็นการประเมินโมเดลที่มีอยู่แล้วในรูปแบบ Zero-shot Evaluation)*

### 3.1 HTR Engine / Framework
ทดสอบด้วยโมเดล VLMs สองกลุ่มหลัก:
- **Proprietary:** Gemini 2.5 Pro, GPT-4o, Claude 3.5 Sonnet
- **Open-source:** Qwen2.5-VL, LLaVA, Typhoon-VL

### 3.2 Model Architecture
*(โมเดล VLMs ขนาดใหญ่ทั่วไป)*

### 3.3 Training Configuration
| Parameter | ค่า |
|---|---|
| Learning Rate | *[ไม่มีข้อมูลใน source (Zero-shot Evaluation)]* |
| Batch Size | *[ไม่มีข้อมูลใน source]* |
| Epochs | *[ไม่มีข้อมูลใน source]* |
| Optimizer | *[ไม่มีข้อมูลใน source]* |

### 3.4 Transfer Learning (ถ้ามี)
ไม่มีการทำ Augmentation ในกระบวนการประเมินเนื่องจากเป็นการทดสอบโมเดลสำเร็จรูป [1]

---

## 4. ผลลัพธ์และการประเมิน (Results & Evaluation)

### 4.1 Metrics ที่ใช้
- **CER / WER:** อัตราความผิดพลาดระดับตัวอักษรและระดับคำ สำหรับงาน OCR แบบเต็มหน้า (Full-page) และลายมือ (Handwritten)
- **Accuracy:** ความแม่นยำในการตอบคำถาม (VQA) และสกัดข้อมูล (KIE)

### 4.2 ผลลัพธ์เชิงปริมาณ
| Model / Category | ผลลัพธ์โดยรวม | ข้อสังเกต |
|---|---|---|
| Proprietary (e.g., Gemini 2.5 Pro) | ดีเยี่ยมใน Table Parsing/VQA | ประสิทธิภาพตกลงเมื่อเจอลายมือหวัดและเอกสาร Layout ซับซ้อนมาก |
| Open-source (e.g., Qwen2.5-VL) | ต่ำกว่าอย่างมีนัยสำคัญ | มีปัญหา Language Bias และการแปลไทยเป็นอังกฤษ |

### 4.3 Error Analysis
1. **Structural Mismatch:** โมเดลอ่านข้อความออก แต่ไม่สามารถคงโครงสร้างตารางหรือย่อหน้าเอาไว้ได้
2. **Language Bias & Translation Errors:** อาการ "หลอน" โดยแปลข้อความภาษาไทยเป็นภาษาอังกฤษ
3. **Fine-grained Recognition Failures:** ปัญหากับสระลอย วรรณยุกต์ซ้อน และอักษรคล้ายคลึง (ด/ต, ข/ช) โดยเฉพาะในลายมือเขียน

---

## 5. ความท้าทายและบทเรียน (Challenges & Lessons Learned)

### 5.1 ความท้าทายด้านเอกสาร-การไม่มีการเว้นวรรคคำของภาษาไทย ทำให้โมเดลตัดคำ (Tokenization) ผิดพลาดได้ง่าย-สระซ้อนทับ (Stacked vowels/diacritics) เป็นจุดอ่อนสำคัญของ VLMs

### 5.4 บทเรียนสำคัญ-การนำ Zero-shot VLMs มาใช้อ่านลายมือภาษาไทย (Handwritten Text) โดยไม่ทำ Fine-tuning ยังคงให้ผลลัพธ์ที่ต่ำเกินกว่าจะนำไปใช้งานจริง (Production)

---

## 6. เครื่องมือและทรัพยากรที่เปิดเผย (Open Resources)

| ประเภท | ชื่อ | URL | หมายเหตุ |
|---|---|---|---|
| Dataset | scb10x/ThaiOCRBench | [Hugging Face](https://huggingface.co/datasets/scb10x/ThaiOCRBench) | ข้อมูล 2,808 samples |
| Code Repository | Evaluation Toolkit | [GitHub](https://github.com/scb-10x/ThaiOCRBench) | สคริปต์สำหรับการประเมินผล |

---

## 7. ผลกระทบต่อโปรเจกต์ไทย/ขอม (Implications for Thai/Khom HTR Project)

> **การวิเคราะห์เชิงลึกสำหรับโปรเจกต์ HTR เอกสารโบราณไทย-ขอม (คำแนะนำสำหรับทีมงาน)**

จากผลการวิจัยใน ThaiOCRBench ทำให้เราได้ข้อสรุปที่สำคัญมากในการทำโปรเจกต์ HTR สมุดไทยและคัมภีร์ใบลาน ดังนี้: [2] [3]

**1. อย่าหวังพึ่ง Zero-shot VLMs ในการแกะลายมือโบราณเพียงอย่างเดียว (Do not rely solely on Zero-shot):**
ThaiOCRBench ชี้ให้เห็นว่าแม้แต่โมเดลที่ทรงพลังที่สุดระดับโลก (Gemini 2.5 Pro) หรือโมเดลภาษาไทยเฉพาะทาง (Typhoon) ก็ยังคงทำคะแนนได้ต่ำมากในงาน "Handwritten Content Extraction" สำหรับลายมือภาษาไทยยุคปัจจุบัน หากนำโมเดลเหล่านี้มา Zero-shot กับ "อักษรขอม" หรือ "ลายมือสมุดไทย" ที่ไม่มีข้อมูลใน pre-training corpus ผลลัพธ์จะล้มเหลว (Hallucinate) อย่างรุนแรง ดังนั้น **การเทรน Specialized HTR Engine อย่าง Kraken หรือ TrOCR โดยทำ Fine-tuning บน Ground Truth เฉพาะทาง จึงยังคงเป็นเส้นทางที่บังคับต้องทำ (Mandatory)**

**2. ระวังปัญหา Language Bias และ Structural Mismatch (Post-processing Design):**
หากทีมงานตัดสินใจใช้ VLMs มาช่วยในการทำ Post-correction (แก้ไขข้อผิดพลาดหลังทำ OCR) ต้องระวังพฤติกรรม Language Bias ที่เปเปอร์นี้ค้นพบ โมเดลอาจพยายาม "เติมคำให้สมบูรณ์" หรือ "เปลี่ยนคำศัพท์โบราณเป็นคำปัจจุบัน" โดยอัตโนมัติ ซึ่งจะทำลายเอกลักษณ์ของอักขรวิธีโบราณ (Diplomatic transcription) ทีมงานจำเป็นต้องเขียน Prompt หรือ Fine-tune language model ให้เคร่งครัดต่อกฎการคงรูปอักขระเดิม

**3. ใช้ ThaiOCRBench เป็นต้นแบบในการสร้าง KhomOCRBench:**
โครงสร้าง 13 Tasks ของ ThaiOCRBench เป็น Template ชั้นยอด ทีมงานสามารถออกแบบ Dataset ชุดย่อยเพื่อประเมินโมเดลของทีม โดยแบ่งหมวดหมู่ความยาก เช่น 1) ลายมือบรรจงบนใบลาน, 2) ลายมือหวัดบนสมุดไทย, 3) หน้าที่มีตารางยันต์, และ 4) หน้าที่มีภาพวาดประกอบ เพื่อวัดความทนทาน (Robustness) ของโมเดลในแต่ละ Scenario แทนที่จะวัดผลรวมเพียงอย่างเดียว

---

## 8. แหล่งอ้างอิง (References)

### เชิงอรรถ

[1] SCB 10X / Typhoon AI. "ThaiOCRBench: A Task-Diverse Benchmark for Vision-Language Understanding in Thai." *Proceedings of the AACL-IJCNLP 2025* (2025). https://arxiv.org/abs/2511.04479.
[2] SCB 10X. "ThaiOCRBench Dataset Repository." Hugging Face, 2025. https://huggingface.co/datasets/scb10x/ThaiOCRBench.
[3] Typhoon AI. "OpenTyphoon OCR VLM Model Series Technical Report." SCB 10X, 2025. https://github.com/scb-10x/ThaiOCRBench.

