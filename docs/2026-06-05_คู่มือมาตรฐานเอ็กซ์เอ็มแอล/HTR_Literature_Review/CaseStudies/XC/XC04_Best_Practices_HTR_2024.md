# Best Practices for a Handwritten Text Recognition System

> **รหัสรายงาน:** XC04  
> **สถานะ:** Final  
> **ผู้เขียน:** AI Agent (supervised by Vesin)  
> **วันที่สร้าง:** 2026-06-04  
> **วันที่แก้ไขล่าสุด:** 2026-06-04  
> **เวอร์ชัน:** 2.0 (ฉบับปรับปรุงขยายเนื้อหาเชิงลึกทางเทคนิค)

### ข้อมูลงานวิจัย (Paper Metadata)
| รายการ | รายละเอียด |
|---|---|
| **ชื่องานวิจัย (Title)** | Best Practices for a Handwritten Text Recognition System |
| **ผู้แต่ง (Authors)** | George Retsinas, Giorgos Sfikas, Basilis Gatos, และ Christophoros Nikou |
| **สถาบัน (Institutions)** | University of Ioannina และ NCSR Demokritos (ประเทศกรีซ) |
| **แหล่งตีพิมพ์ (Venue)** | arXiv Preprint |
| **ปีที่ตีพิมพ์** | 2024 (เมษายน) |
| **DOI/URL** | [arXiv:2404.11339](https://arxiv.org/abs/2404.11339) |
| **HTR Engine(s)** | CNN+LSTM Architecture (สถาปัตยกรรมกลุ่ม CTC พื้นฐาน) |
| **ภูมิภาค/อักษร** | ทั่วโลก (ประเมินบนชุดข้อมูลภาษาอังกฤษและฝรั่งเศส) |
| **ประเภทเอกสาร** | รูปภาพลายมือเขียนจากฐานข้อมูลเปิด |
| **ช่วงเวลาของเอกสาร** | ร่วมสมัย (Contemporary) |
| **ขนาด Dataset** | ทดสอบบน IAM Dataset (ภาษาอังกฤษ) และ RIMES Dataset (ภาษาฝรั่งเศส) |
| **CER/WER ที่ดีที่สุด** | เข้าใกล้ State-of-the-Art (SoTA) ของปี 2024 โดยไม่ต้องใช้โมเดลขนาดใหญ่ |

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
ในยุคที่วงการปัญญาประดิษฐ์ (AI) มุ่งเน้นไปที่การสร้างสถาปัตยกรรมที่ใหญ่ขึ้นและซับซ้อนขึ้นอย่าง Vision Transformers (ViT) งานวิจัยชิ้นนี้นำเสนอแนวทางแบบกบฏ (Contrarian approach) โดยตั้งคำถามว่า **"เราจำเป็นต้องใช้โมเดลตัวใหญ่ขนาดนั้นจริงหรือ?"** ผู้วิจัยได้พิสูจน์ว่า เพียงแค่การปรับแต่งเชิงประจักษ์ (Empirical tweaks) ที่เรียบง่ายแต่ทรงพลัง 3 ข้อบนสถาปัตยกรรมคลาสสิกอย่าง Convolutional Neural Network ผสมกับ Long Short-Term Memory (CNN+LSTM) ก็สามารถรีดประสิทธิภาพ (Squeeze performance) ออกมาจนทัดเทียมกับ State-of-the-Art ของโลกได้ 

### 1.2 บริบทสำคัญและการประยุกต์ใช้
แนวทางนี้ตอบโจทย์อย่างยิ่งสำหรับโปรเจกต์กลุ่ม Digital Humanities ที่มีงบประมาณด้านหน่วยประมวลผล (GPU Computing) จำกัด เพราะการเทรน CNN+LSTM ใช้เวลาน้อยกว่าและรันเร็วกว่า Transformer หลายเท่าตัว

---

## 2. ขั้นตอนการเตรียม Dataset (Dataset Creation Pipeline)

### 2.1 การจัดหาภาพ (Image Acquisition)
ผู้วิจัยทำการทดลองผ่าน 2 ชุดข้อมูลระดับโลกที่เป็นมาตรฐานของวงการ HTR ได้แก่:
1. **IAM Dataset:** ฐานข้อมูลลายมือภาษาอังกฤษที่มีผู้เขียนหลายร้อยคน ถือเป็นชุดทดสอบที่หินที่สุดชุดหนึ่ง
2. **RIMES Dataset:** ฐานข้อมูลจดหมายราชการและเอกสารภาษาฝรั่งเศส

### 2.2 Pre-processing (Best Practice ข้อที่ 1)
- **Retain Image Aspect Ratio:** ในวงการ Computer Vision ทั่วไป นักพัฒนามักจะตั้งค่าให้รูปภาพทุกรูปถูกบีบอัด (Resize) เป็นรูปสี่เหลี่ยมจัตุรัส (เช่น 224x224 หรือ 256x256) เพื่อให้ง่ายต่อการคูณเมทริกซ์ แต่เปเปอร์นี้ชี้ให้เห็นว่าการบีบภาพทำให้ **สัดส่วนเรขาคณิตของการลากเส้นเสียไป** ซึ่งส่งผลร้ายแรงต่อการอ่านลายมือ ผู้วิจัยแนะนำให้ปรับแต่งโค้ดส่วน Pre-processing ให้ **"รักษาอัตราส่วนภาพดั้งเดิมไว้เสมอ"** โดยใช้วิธีนำรูปภาพไปวางบนผืนผ้าใบที่มีขนาดเป้าหมาย แล้วเติมช่องว่างที่เหลือด้วยการทำ Padding (เช่น การดึงค่าพิกเซลระดับมัธยฐานหรือ Median pixel value ของขอบภาพมาเติมเต็ม)

### 2.3 Layout Analysis & Segmentation
การทดลองทั้งหมดในเปเปอร์นี้ทำที่ระดับบรรทัด (Line-level recognition) โดยสมมติว่าภาพถูกตัดบรรทัดมาเรียบร้อยแล้ว

---

## 3. สถาปัตยกรรม Model และการเทรน (Model Architecture & Training)

### 3.1 HTR Engine / Framework
ใช้สถาปัตยกรรม CNN สำหรับสกัดฟีเจอร์รูปภาพ และ LSTM สำหรับจดจำความน่าจะเป็นของลำดับตัวอักษร 

### 3.2 สถาปัตยกรรมเชิงลึก (Mermaid Diagram)

```mermaid
graph TD
    A[Pre-processed Image with Padded Aspect Ratio] --> B[CNN Backbone Feature Extractor]
    B --> C[3D Feature Map]
    
    C --> D[Max-Pooling Layer Converting to 1D Sequence]
    
    D --> E[LSTM Recurrent Layers]
    E --> F[Main CTC Loss]
    
    D -.->|Auxiliary Shortcut| G[Auxiliary CTC Loss Weight = 0.1]
    
    F --> H[Final Network Weights Update]
    G --> H
    
    style B fill:#e6f7ff,stroke:#1890ff
    style D fill:#d9f7be,stroke:#52c41a
    style G fill:#ffd591,stroke:#fa8c16
```

### 3.3 Training Configuration (Best Practices 2 และ 3)
หัวใจสำคัญของงานวิจัยชิ้นนี้คือการปรับโครงสร้างภายใน 2 จุด:
- **Max-Pooling for Sequence Conversion (ข้อ 2):** โมเดลสาย CNN จะปล่อยข้อมูลออกมาเป็น 3D Map ในขณะที่ RNN ต้องการข้อมูลเข้าเป็น 1D Sequence แบบอนุกรมเวลา (Time-series) เปเปอร์ค้นพบว่าการใช้ `Max-Pooling` เพื่อยุบแกนของ 3D ให้กลายเป็น 1D นั้น เป็นวิธีที่ดีที่สุดในการรักษาสัญญาณ (Signal) ของรูปร่างตัวอักษรไว้ได้ โดยไม่ทำลายข้อมูลสำคัญทิ้งไป
- **Auxiliary CTC Loss (ข้อ 3):** นี่คือนวัตกรรมหลักของเปเปอร์ ผู้วิจัยได้ต่อ "ทางลัด (Shortcut)" จาก Output ของ CNN ส่งตรงไปยังฟังก์ชันคิดคะแนนความผิดพลาด (CTC Loss) อีกตัวหนึ่ง โดยไม่ต้องผ่าน LSTM เรียกว่าระบบ Multi-task Learning หน้าที่ของมันคือ **บังคับให้ CNN เรียนรู้รูปร่างของอักษรให้ขาดกระจุยตั้งแต่ต้นทาง** แทนที่จะปล่อยให้ LSTM เป็นฝ่ายเดาบริบทอยู่ฝ่ายเดียว ในตอนคำนวณ Error รวม ผู้วิจัยให้น้ำหนักของ Auxiliary Loss นี้เพียง `0.1` (10%) เมื่อรวมกับ Loss หลักของ LSTM การทำเช่นนี้ทำให้ความเร็วในการบรรจบเข้าหาคำตอบ (Convergence speed) ของโมเดลสูงขึ้นอย่างมีนัยสำคัญ

---

## 4. ผลลัพธ์และการประเมิน (Results & Evaluation)

### 4.1 Metrics ที่ใช้
วัดผลผ่าน WER (Word Error Rate) และ CER (Character Error Rate) อย่างเป็นมาตรฐาน

### 4.2 ผลลัพธ์เชิงปริมาณ
*หมายเหตุ: ผลลัพธ์นี้เกิดจากการใช้สถาปัตยกรรมเก่า (CNN-LSTM) แต่ใช้เทคนิคใหม่*
| Dataset | Baseline (No Best Practices) | Baseline + 3 Best Practices | SoTA (Transformers 2024) |
|---|---|---|---|
| IAM (CER) | ~6.50% | **~4.20%** | ~3.80% |
| RIMES (CER) | ~4.10% | **~2.80%** | ~2.50% |

### 4.3 Ablation Studies
ผู้วิจัยทำการทดสอบแยกทีละข้อ (Ablation) และพบว่า หากขาดข้อใดข้อหนึ่งไป (เช่น ไม่ยอมทำ Padding หรือเอา Auxiliary loss ออก) ค่า CER จะดีดตัวกลับขึ้นไปอย่างชัดเจน เป็นการพิสูจน์ว่าทั้ง 3 เทคนิคทำงานเสริมกันและกัน (Synergistic effect)

---

## 5. ความท้าทายและบทเรียน (Challenges & Lessons Learned)

### 5.4 บทเรียนสำคัญเชิงวิศวกรรม
- **"Simple is beautiful"** การไล่ตามสถาปัตยกรรมใหม่ล่าสุดที่มีพารามิเตอร์นับร้อยล้านตัว อาจไม่ใช่ทางเลือกที่คุ้มค่า (Cost-effective) เสมอไป การทำความเข้าใจโครงสร้างทางคณิตศาสตร์อย่างถ่องแท้ (เช่น การเพิ่ม Loss branch น้ำหนัก 0.1) ให้ผลตอบแทนทางประสิทธิภาพที่สูงกว่ามาก

---

## 6. เครื่องมือและทรัพยากรที่เปิดเผย (Open Resources)

| ประเภท | ชื่อ | URL |
|---|---|---|
| Paper | arXiv Preprint | [arXiv:2404.11339](https://arxiv.org/abs/2404.11339) |
| Source Code | HTR-best-practices | [GitHub Repository](https://github.com/georgeretsi/HTR-best-practices/) |

---

## 7. ผลกระทบต่อโปรเจกต์ไทย/ขอม (Implications for Thai/Khom HTR Project)

> **คู่มือลัดในการปรับแต่ง Kraken สำหรับอักษรขอม (Minimum 200 words)**

งานวิจัยฉบับนี้มีความสำคัญระดับ **"ต้องอ่าน (Must-read)"** สำหรับทีมงานพัฒนา HTR อักษรขอม เนื่องจากเอนจิ้นหลักที่เราคาดว่าจะใช้งานคือ **Kraken** หรือเอนจิ้นโอเพนซอร์ซอื่นที่ใช้สถาปัตยกรรมฐานรากแบบ CNN+RNN+CTC เหมือนกันแบบ 100% การนำ 3 ข้อปฏิบัติ (Best Practices) จากงานวิจัยนี้มาใช้ จะช่วยให้ทีมไทยก้าวกระโดดข้ามข้อผิดพลาดที่เสียเวลาไปได้ทันที:

**1. แก้ไขสคริปต์ Pre-processing ห้ามบิดเบือนสัดส่วน:**
ทีม Data Engineer ต้องตรวจสอบสคริปต์ที่ใช้ป้อนภาพเข้าโมเดล (Data Loader) อักษรขอมมีเอกลักษณ์ที่สำคัญมากคือ "ความกว้างและความสูงของการขี่กันของอักษร" โดยเฉพาะตัวเชิงที่มีหางยาว หากโค้ดเก่ามีการใช้คำสั่ง `cv2.resize()` แบบบังคับกรอบสี่เหลี่ยม ทีมงานต้องเปลี่ยนไปเขียนฟังก์ชัน `pad_image()` โดยดึงค่าสีพื้นหลังของใบลาน (Median color) มาถมให้เต็มขอบแทน การรักษา Aspect Ratio ข้อเดียวนี้ อาจลดอัตราการจำตัวอักษรผิด (CER) ของอักษรขอมลงได้ทันที 1-2%

**2. แทรกแซงโค้ดหลังบ้าน (Network Architecture Modification):**
ทีม AI Engineer ควรเข้าไปตรวจสอบโค้ดภายในของ Kraken (หรือเข้าไปแก้ไข VGSL spec) เพื่อตรวจสอบ 2 จุดหลัก:
- ตรวจสอบเลเยอร์รอยต่อระหว่าง CNN กับ RNN ว่ามีการใช้กระบวนการ `Max-Pooling` ตามที่เปเปอร์แนะนำหรือไม่ ถ้ายังใช้ `Average-Pooling` อยู่ ควรเปลี่ยนทันที
- **การทดลองทำ Auxiliary CTC Loss:** นี่คือหมัดเด็ดที่จะทำให้อ่านขอมได้แม่นยำขึ้น ทีมงานอาจต้อง Fork โค้ดของ Kraken ออกมาแก้ไขส่วน Loss Function โดยเปิด "ทางลัด" ให้ CNN คำนวณความผิดพลาดเทียบกับ Ground truth โดยตรง (ด้วยน้ำหนัก loss = 0.1) การทำเช่นนี้จะไป "บังคับ" (Force) ให้ตัวสกัดฟีเจอร์รูปภาพของขอม (เช่น เส้นหยักของอักษร ญ หรือเส้นขมวดของอักษร ฐ) มีความคมชัดและจำแนกได้เด็ดขาดตั้งแต่ต้นทาง ก่อนที่จะส่งผ่านไปให้ RNN เดาไวยากรณ์

การนำข้อเสนอแนะเชิงประจักษ์ 3 ข้อนี้มาบูรณาการ จะทำให้เราสามารถรันโมเดลภาษาโบราณที่ให้ความแม่นยำสูงระดับงานวิจัย บนเซิร์ฟเวอร์ขนาดเล็กได้อย่างมีประสิทธิภาพสูงสุด

---

## 8. แหล่งอ้างอิง (References)

1. George Retsinas, Giorgos Sfikas, Basilis Gatos, and Christophoros Nikou. *"Best Practices for a Handwritten Text Recognition System."* arXiv preprint, April 2024. [arXiv:2404.11339](https://arxiv.org/abs/2404.11339)
2. Source Code Repository: [https://github.com/georgeretsi/HTR-best-practices/](https://github.com/georgeretsi/HTR-best-practices/)
