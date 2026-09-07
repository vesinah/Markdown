# อภิธานศัพท์ HTR เอกสารโบราณ — ไทย-อังกฤษ
# HTR for Historical Documents — Thai-English Glossary

> **วัตถุประสงค์:** รวบรวมคำศัพท์เทคนิคที่ใช้ในรายงานชุด HTR Literature Review ทั้งหมด  
> **วิธีใช้:** เรียงตามตัวอักษร A–Z (ภาษาอังกฤษ) ค้นหาด้วย Ctrl+F  
> **วันที่แก้ไขล่าสุด:** 2026-06-05  
> **เวอร์ชัน:** 1.1

---

## A

### Ablation Study
**คำอธิบาย:** การทดลองที่ตัดออกหรือเปลี่ยนแปลงทีละส่วนประกอบของ model/pipeline เพื่อวัดว่าแต่ละส่วนมีผลกระทบต่อผลลัพธ์มากน้อยเพียงใด  
**ตัวอย่าง:** ทดสอบว่า data augmentation ช่วยลด CER ลงเท่าไหร่ โดยเทรน model เหมือนกันทุกอย่าง ต่างแค่มี/ไม่มี augmentation

### Active Learning
**คำอธิบาย:** วิธีการเรียนรู้แบบวนซ้ำ (iterative) ที่ model เลือกตัวอย่างที่ "ไม่มั่นใจ" ที่สุดให้มนุษย์ annotate เพิ่ม เพื่อให้ได้ประสิทธิภาพสูงสุดจากจำนวน annotation น้อยที่สุด  
**ขั้นตอน:** Train → Predict → เลือกตัวอย่างที่ไม่มั่นใจ → มนุษย์ตรวจ/แก้ → Re-train → วนซ้ำ

### ALTO XML (Analyzed Layout and Text Object XML)
**คำอธิบาย:** มาตรฐาน XML สำหรับเก็บข้อมูล layout และ text ของเอกสารที่ผ่านการ digitize  
**พัฒนาโดย:** Library of Congress (US)  
**ใช้กับ:** ห้องสมุดดิจิทัลหลายแห่ง, ABBYY FineReader  
**ดูเพิ่ม:** [มาตรฐาน PAGE XML และ ALTO XML เชิงเปรียบเทียบ](02_HTR_Theory_and_XML/2.2_มาตรฐานPAGE_XMLและALTO_XMLเชิงเปรียบเทียบ.md)

### Annotation
**คำอธิบาย:** กระบวนการทำเครื่องหมาย/ระบุข้อมูลบนภาพเอกสาร เช่น ขีดเส้นขอบข้อความ ถอดความตัวอักษร  
**ประเภทหลัก:** Layout annotation (ขอบเขต), Text annotation (ถอดความ)

### ARU-Net (Attention Residual U-Net)
**คำอธิบาย:** สถาปัตยกรรม neural network แบบ U-Net ที่เพิ่ม attention mechanism สำหรับ document layout analysis  
**ใช้สำหรับ:** Baseline detection, text region segmentation

---

## B

### Baseline
**คำอธิบาย:** เส้นสมมติที่ตัวอักษรส่วนใหญ่ "นั่ง" อยู่ ใน HTR สมัยใหม่ (รวมถึง Kraken) ใช้ baseline เป็นหลักในการกำหนดบรรทัดข้อความ แทนที่จะใช้ bounding box  
**ข้อดี:** รองรับบรรทัดที่โค้งงอได้ดีกว่า bounding box  
**เทียบกับ:** Bounding box approach (เก่ากว่า)

### Baseline Detection
**คำอธิบาย:** กระบวนการตรวจจับ baseline ของแต่ละบรรทัดข้อความในภาพเอกสาร  
**เครื่องมือ:** Kraken `blla`, dhSegment, P2PaLA

### Batch Size
**คำอธิบาย:** จำนวนตัวอย่าง (samples) ที่ป้อนเข้า model ในแต่ละรอบการ update weights  
**ผลกระทบ:** Batch size ใหญ่ → เทรนเร็วกว่าแต่ใช้ memory มาก, Batch size เล็ก → เทรนช้าแต่อาจ generalize ดีกว่า

### Binarization
**คำอธิบาย:** กระบวนการแปลงภาพเอกสารจากหลายสี (grayscale/color) เป็นภาพขาว-ดำ (binary) แยกข้อความออกจากพื้นหลัง  
**วิธีหลัก:**  
- **Otsu:** วิธี global threshold อัตโนมัติ — ง่าย แต่ไม่ดีกับเอกสารที่มีแสงไม่สม่ำเสมอ  
- **Sauvola:** วิธี local adaptive threshold — ดีกว่า Otsu สำหรับเอกสารโบราณที่มีรอยเปื้อน  
- **Learnable binarization:** ใช้ neural network เรียนรู้การ binarize — ดีที่สุดแต่ต้องเทรน model

### Bleed-through
**คำอธิบาย:** ปรากฏการณ์ที่หมึกจากด้านหลังกระดาษ "ซึม" มาเห็นที่ด้านหน้า เป็นปัญหาสำคัญของเอกสารโบราณ  
**ผลกระทบ:** ทำให้ binarization และ recognition ผิดพลาด

### blla (Baseline Layout Analysis)
**คำอธิบาย:** Segmentation model ของ Kraken ที่ใช้ตรวจจับ baselines และ regions ในภาพเอกสาร  
**คำสั่ง:** `kraken blla` หรือฝึกด้วย `ketos segtrain`

### Bounding Box
**คำอธิบาย:** สี่เหลี่ยมที่ครอบรอบวัตถุ (เช่น บรรทัดข้อความ หรือ text region) ในภาพ  
**ข้อจำกัด:** ไม่เหมาะกับบรรทัดที่โค้งงอ ปัจจุบัน baseline approach ได้รับความนิยมมากกว่า

### ByT5 [APPROVED]
**คำอธิบาย:** แบบจำลองภาษาประเภท Transformer ระดับไบต์ (Byte-level T5) พัฒนาโดย Google สำหรับประมวลผลและแก้ไขคำผิดหลังกระบวนการ HTR (Post-OCR/HTR Correction) โดยประมวลผลข้อความจากรหัสไบต์ดิบแทนการตัดโทเค็นระดับคำ (Token-free)  
**ข้อดี:** เหมาะสมอย่างยิ่งสำหรับภาษาประวัติศาสตร์และภาษาทรัพยากรต่ำ (Low-resource Languages) เช่น ภาษาบาลี-สันสกฤตที่เขียนแบบต่อเนื่อง (Scriptura Continua) ซึ่งไม่มีช่องว่างระหว่างคำและมีการใช้ตัวสะกดเชิงซ้อน ทำให้สามารถเดาและกู้คืนตัวสะกดที่ผิดพลาดได้ดีในระดับอักขระเดี่ยว  
**สถานะ:** [APPROVED]

---

## C

### CER (Character Error Rate)
**คำอธิบาย:** อัตราความผิดพลาดระดับอักขระ — metric หลักสำหรับวัดผล HTR  
**สูตร:** `CER = (S + D + I) / N × 100%`  
- S = Substitutions (แทนที่ผิด)
- D = Deletions (ขาดหาย)
- I = Insertions (เพิ่มเกิน)
- N = จำนวนอักขระใน ground truth  
**ตัวอย่าง:** GT = "สวัสดี" (4 chars), Predicted = "สวัสตี" → S=1, D=0, I=0 → CER = 1/4 = 25%  
**เกณฑ์ทั่วไป:**  
- < 5% = ดีมาก (ใช้งานจริงได้)  
- 5–10% = ดี (ใช้ได้กับการค้นหา)  
- 10–20% = พอใช้ (ต้อง manual correction)  
- > 20% = ต้องปรับปรุง

### Charset
**คำอธิบาย:** ชุดตัวอักษรทั้งหมดที่ model รู้จักและสามารถทำนายได้  
**ตัวอย่าง:** อักษรไทย charset อาจมี ~100 ตัวอักษร (พยัญชนะ, สระ, วรรณยุกต์, เลข, เครื่องหมาย)

### Citizen Science
**คำอธิบาย:** การระดมอาสาสมัครจากสาธารณชนมาช่วยทำงาน annotation/transcription  
**ตัวอย่าง:** Transkribus Citizen Science campaigns

### Codec
**คำอธิบาย:** ใน Kraken หมายถึง mapping ระหว่าง Unicode characters กับ numerical indices ที่ model ใช้ภายใน  
**สำคัญ:** ต้องตรงกันระหว่าง training data และ inference

### CRAFT (Character Region Awareness for Text Detection) [APPROVED]
**คำอธิบาย:** แบบจำลองดีปเลิร์นนิงสำหรับตรวจจับขอบเขตข้อความในรูปภาพ โดยวิเคราะห์ความสัมพันธ์เชิงพิกเซลเพื่อทำนายจุดศูนย์กลางของอักขระเดี่ยว (Character Region Score) และความเชื่อมโยงระหว่างอักขระ (Affinity Score)  
**ข้อดี:** สามารถสร้างกรอบโพลีกอนรูปทรงอิสระ (Polygon Bounding Boxes) โอบล้อมข้อความโบราณที่โค้งงอหรือลาดเอียง แทนการตีกรอบสี่เหลี่ยมผืนผ้าทั่วไป ป้องกันการตัดพยัญชนะเชิงและสระของบรรทัดรอบข้างขาดแหว่ง  
**สถานะ:** [APPROVED]

### CRNN (Convolutional Recurrent Neural Network)
**คำอธิบาย:** สถาปัตยกรรม neural network ที่รวม CNN (สกัดภาพ) + RNN/LSTM (ลำดับอักขระ)  
**ใช้ใน:** Kraken, PyLaia  
**ขั้นตอน:** Input image → CNN features → RNN sequence → CTC decoding → Text output

### CTC (Connectionist Temporal Classification)
**คำอธิบาย:** วิธีการ decoding ที่ให้ model ทำนายอักขระจากลำดับ features โดยไม่ต้อง segment ตัวอักษรแต่ละตัวก่อน  
**ข้อดี:** ไม่ต้อง align แต่ละตัวอักษรกับตำแหน่งใน image  
**ใช้ใน:** Kraken, PyLaia  
**เทียบกับ:** Attention-based decoding (ที่ TrOCR ใช้)

### Curriculum Learning
**คำอธิบาย:** การจัดลำดับข้อมูลเทรนจากง่ายไปยาก เพื่อให้ model เรียนรู้ได้มีประสิทธิภาพกว่า  
**ตัวอย่าง:** เริ่มเทรนจากหน้าที่อ่านง่าย → ค่อยเพิ่มหน้าที่อ่านยาก

---

## D

### Data Augmentation
**คำอธิบาย:** เทคนิคการสร้างข้อมูลเทรนเพิ่มจากข้อมูลที่มีอยู่ โดยการ transform ต่างๆ  
**ประเภท:**
- **Geometric:** หมุน, เอียง, ยืดหด, elastic deformation
- **Photometric:** ปรับสว่าง, contrast, เบลอ
- **Degradation:** จำลองความเสียหาย (รอยเปื้อน, ซีดจาง, bleed-through)

### Dataset
**คำอธิบาย:** ชุดข้อมูลที่ใช้เทรน/ทดสอบ model ประกอบด้วย image + ground truth (transcription)

### Dewarping
**คำอธิบาย:** การแก้ไขภาพเอกสารที่โค้งงอ (เช่น จากการถ่ายหนังสือที่เปิดไม่ได้สนิท) ให้แบนราบ  
**สำคัญกับ:** สมุดพับ, ใบลาน ที่มักมีพื้นผิวโค้ง

### Deskewing
**คำอธิบาย:** การแก้ไขภาพเอกสารที่เอียง (skew) จากการสแกน/ถ่ายภาพ ให้ตรง

### dhSegment
**คำอธิบาย:** Framework สำหรับ historical document image segmentation ใช้ deep learning (ResNet + U-Net)  
**พัฒนาโดย:** Digital Humanities Lab, EPFL  
**URL:** https://dhsegment.readthedocs.io

### Diplomatic Transcription
**คำอธิบาย:** การถอดความแบบ "ตามต้นฉบับทุกประการ" — รักษาตัวสะกด, อักษรย่อ, เครื่องหมาย ตามที่ปรากฏในต้นฉบับ  
**เทียบกับ:** Normalized transcription (ปรับให้เป็นมาตรฐาน)

### DOI (Digital Object Identifier)
**คำอธิบาย:** รหัสเฉพาะสากลสำหรับเอกสารวิชาการ ใช้ในการอ้างอิง  
**รูปแบบ:** `10.xxxx/xxxxx`  
**URL:** `https://doi.org/10.xxxx/xxxxx`

---

## E

### Early Stopping
**คำอธิบาย:** เทคนิคหยุดเทรน model ก่อนจะครบ epochs ที่กำหนด เมื่อ validation loss หยุดลดลง (หรือเริ่มเพิ่ม) เพื่อป้องกัน overfitting

### Elastic Deformation
**คำอธิบาย:** เทคนิค augmentation ที่บิดงอภาพด้วย random displacement fields ทำให้ลายมือดู "แตกต่างนิดหน่อย"  
**ผลดี:** ช่วยให้ model เรียนรู้ความหลากหลายของลายมือ

### Encoder-Decoder
**คำอธิบาย:** สถาปัตยกรรม neural network ที่มี 2 ส่วน:
- **Encoder:** แปลง input (ภาพ) เป็น representation กลาง
- **Decoder:** แปลง representation เป็น output (ข้อความ)  
**ใช้ใน:** TrOCR (Vision Encoder + Text Decoder)

### EpiDoc XML [APPROVED]
**คำอธิบาย:** มาตรฐานข้อมูลและสัญนิยมในการลงรหัสกำกับเอกสารประเภทจารึกและศิลาจารึกโบราณแบบดิจิทัล (Digital Epigraphy) พัฒนาขึ้นโดยเป็นส่วนขยายของมาตรฐาน TEI (Text Encoding Initiative) XML  
**การประยุกต์ใช้:** ใช้ควบคุมข้อมูลตัวสะกดจารึกจริง การซ่อมแซมคำที่สูญหาย รอยกะเทาะบิ่น และเมทาดาตาเชิงประวัติศาสตร์ เพื่อสร้างฐานข้อมูลจารึกวิทยาสากลข้ามชาติ  
**ดูเพิ่ม:** [DHARMA ERC Project]  
**สถานะ:** [APPROVED]

### Epoch
**คำอธิบาย:** หนึ่งรอบการเทรนที่ model เห็นข้อมูลทั้งหมดครบหนึ่งรอบ  
**ตัวอย่าง:** ถ้ามี 1,000 images, batch size = 10 → 1 epoch = 100 iterations

### eScriptorium
**คำอธิบาย:** แพลตฟอร์มเว็บ open-source สำหรับ transcription เอกสารโบราณ ทำงานร่วมกับ Kraken  
**ฟีเจอร์:** Annotation UI, model training, API, multi-user collaboration  
**เทคโนโลยี:** Django, Celery, Redis, PostgreSQL  
**URL:** https://gitlab.com/scripta/escriptorium

---

## F

### F-score (F1-score)
**คำอธิบาย:** ค่าเฉลี่ยฮาร์โมนิกของ Precision และ Recall — ใช้วัดผลเมื่อต้องการ balance ระหว่างสองค่า  
**สูตร:** `F1 = 2 × (P × R) / (P + R)`

### Few-shot Learning
**คำอธิบาย:** การเรียนรู้จากตัวอย่างจำนวนน้อยมาก (เช่น 5–20 ตัวอย่างต่อ class)  
**สำคัญสำหรับ:** อักษรหายากที่มี training data น้อย

### Fine-tuning
**คำอธิบาย:** การนำ pre-trained model มาเทรนต่อ (ปรับ weights) กับ dataset ใหม่ที่เล็กกว่า  
**ข้อดี:** ใช้ข้อมูลน้อยกว่า training from scratch, เทรนเร็วกว่า, มักได้ผลดีกว่า

### Foundation Model
**คำอธิบาย:** Model ขนาดใหญ่ที่ pre-train จาก dataset ขนาดใหญ่มาก สามารถ fine-tune ใช้กับ task ย่อยได้หลากหลาย  
**ตัวอย่าง:** TrOCR (fine-tune จาก BEiT + RoBERTa)

---

## G

### GAN (Generative Adversarial Network)
**คำอธิบาย:** สถาปัตยกรรม neural network ที่มี 2 ส่วนแข่งกัน (Generator สร้างข้อมูล + Discriminator แยกของจริง/ปลอม) ใช้สร้างภาพสังเคราะห์  
**ใช้สำหรับ HTR:** สร้าง synthetic handwriting สำหรับ augmentation

### Ground Truth (GT)
**คำอธิบาย:** ข้อมูลที่ถูกต้อง 100% (ตรวจสอบโดยมนุษย์ผู้เชี่ยวชาญ) ใช้เป็นมาตรฐานในการเทรนและประเมิน model  
**ประกอบด้วย:** ภาพเอกสาร + transcription ที่ถูกต้อง + ข้อมูล layout (region, baseline)

---

## H

### hOCR
**คำอธิบาย:** มาตรฐานเก็บผล OCR ในรูปแบบ XHTML ผสม microformat  
**ข้อดี:** เปิดด้วย browser ได้เลย  
**ข้อจำกัด:** ไม่ค่อยนิยมสำหรับ HTR training

### HTR (Handwritten Text Recognition)
**คำอธิบาย:** เทคโนโลยีการรู้จำตัวอักษรลายมือเขียนโดยอัตโนมัติ  
**ต่างจาก OCR:** OCR ออกแบบสำหรับตัวพิมพ์, HTR ออกแบบสำหรับลายมือ ซึ่งยากกว่ามากเพราะลายมือมีความหลากหลายสูง

### HTR-United
**คำอธิบาย:** โครงการรวมศูนย์ ground truth datasets สำหรับ HTR บน GitHub  
**จุดเด่น:** Catalog ที่ค้นหาได้, มาตรฐาน metadata, ใช้ได้กับ Kraken  
**URL:** https://htr-united.github.io

### Human-in-the-Loop
**คำอธิบาย:** กระบวนการที่มีมนุษย์เข้ามามีส่วนร่วมใน pipeline อัตโนมัติ เช่น ตรวจสอบผล HTR แล้วส่งกลับไปปรับปรุง model

---

## I

### IAA (Inter-Annotator Agreement)
**คำอธิบาย:** ค่าวัดความตรงกันของ annotation ระหว่างผู้ annotate หลายคน ใช้ประเมินคุณภาพ ground truth  
**Metrics:** Cohen's Kappa, Krippendorff's Alpha

### ICDAR (International Conference on Document Analysis and Recognition)
**คำอธิบาย:** การประชุมวิชาการหลักสำหรับงานวิจัยด้าน document analysis and recognition จัดทุก 2 ปี  
**สำคัญ:** มี competitions ที่เป็น benchmark มาตรฐาน (เช่น cBAD — Competition on Baseline Detection)

### IoU (Intersection over Union)
**คำอธิบาย:** ค่าวัดความทับซ้อนระหว่าง predicted region กับ ground truth region  
**สูตร:** `IoU = Area of Overlap / Area of Union`  
**ค่า:** 0 = ไม่ทับซ้อนเลย, 1 = ทับซ้อนสมบูรณ์  
**ใช้สำหรับ:** Layout analysis / segmentation

---

## K

### Ketos
**คำอธิบาย:** Command-line tool ของ Kraken สำหรับเทรน model  
**คำสั่งหลัก:**
- `ketos train` — เทรน recognition model
- `ketos segtrain` — เทรน segmentation model
- `ketos test` — ทดสอบ model
- `ketos compile` — compile model

### Kraken
**คำอธิบาย:** HTR/OCR engine open-source ออกแบบมาเพื่อรองรับ non-Latin scripts และเอกสารโบราณ  
**พัฒนาโดย:** Benjamin Kiessling (PSL / Université Paris Sciences & Lettres)  
**ภาษา:** Python  
**สถาปัตยกรรม:** CRNN + CTC (recognition), blla (segmentation)  
**URL:** https://kraken.re, https://github.com/mittagessen/kraken

---

## L

### Lacuna (พหูพจน์: Lacunae)
**คำอธิบาย:** ส่วนของเอกสารที่หายไป/อ่านไม่ได้ เนื่องจากความเสียหาย  
**การจัดการใน GT:** มักใช้สัญลักษณ์เฉพาะ เช่น `[...]` หรือ Unicode character พิเศษ

### Layout Analysis
**คำอธิบาย:** กระบวนการวิเคราะห์โครงสร้างหน้าเอกสาร — แยก text regions, marginalia, illustrations, decorations  
**ระดับ:**
1. Page-level: แยก region ต่างๆ ในหน้า
2. Region-level: แยกบรรทัดภายใน region
3. Line-level: หา baseline ของแต่ละบรรทัด

### Learning Rate
**คำอธิบาย:** ค่าที่กำหนดว่า model จะปรับ weights มากน้อยแค่ไหนในแต่ละรอบการเทรน  
**ค่าน้อยเกินไป:** เทรนช้า อาจติดอยู่ที่ local minimum  
**ค่ามากเกินไป:** เทรนไม่เสถียร model อาจ diverge

### Levenshtein Distance (Edit Distance)
**คำอธิบาย:** จำนวนการแก้ไขขั้นต่ำ (insertion, deletion, substitution) ที่ต้องทำเพื่อเปลี่ยนสตริงหนึ่งไปเป็นอีกสตริง  
**ใช้ใน:** คำนวณ CER

### Ligature
**คำอธิบาย:** ตัวอักษรสองตัว (หรือมากกว่า) ที่เขียนรวมกันเป็นหนึ่งรูป  
**ตัวอย่าง:** ในอักษรละติน "fi" → ﬁ, ในอักษรอาหรับเกือบทุกตัวอักษรต่อเนื่องกัน

### LSTM (Long Short-Term Memory)
**คำอธิบาย:** ประเภทของ RNN ที่ออกแบบมาให้จำข้อมูลระยะยาวได้ดี แก้ปัญหา vanishing gradient  
**ใช้ใน:** CRNN architecture ของ Kraken สำหรับ sequence recognition

---

## M

### Marginalia
**คำอธิบาย:** ข้อความที่เขียนที่ขอบหน้ากระดาษ (margin) มักเป็นบันทึกเพิ่มเติมหรือคำอธิบาย  
**ความท้าทาย:** Layout analysis ต้องแยก marginalia ออกจาก main text

### Mask R-CNN
**คำอธิบาย:** สถาปัตยกรรม deep learning สำหรับ instance segmentation (ตรวจจับ + segmentation ในขั้นตอนเดียว)  
**ใช้สำหรับ HTR:** Document layout analysis, region detection

---

## N

### NLP (Natural Language Processing)
**คำอธิบาย:** สาขาของ AI ที่เกี่ยวกับการประมวลผลภาษาธรรมชาติ  
**ใช้ใน HTR:** Post-OCR correction ด้วย language models

### Normalized Transcription
**คำอธิบาย:** การถอดความแบบปรับเป็นมาตรฐาน — แก้ตัวสะกดให้เป็นปัจจุบัน, ขยายอักษรย่อ  
**เทียบกับ:** Diplomatic transcription (ตามต้นฉบับ)

---

## O

### OCR (Optical Character Recognition)
**คำอธิบาย:** เทคโนโลยีรู้จำตัวอักษรจากภาพ ออกแบบหลักสำหรับตัวพิมพ์  
**เทียบกับ HTR:** OCR ใช้กับ printed text, HTR ใช้กับ handwritten text

### Optimizer
**คำอธิบาย:** อัลกอริทึมที่ใช้ update weights ของ model ระหว่างเทรน  
**ตัวอย่าง:** Adam, SGD, AdamW, RAdam

### Otsu's Method
**คำอธิบาย:** วิธี binarization แบบ global threshold อัตโนมัติ ใช้สถิติของ pixel intensity  
**ข้อดี:** ง่าย เร็ว อัตโนมัติ  
**ข้อจำกัด:** ไม่ดีกับเอกสารที่มีแสงไม่สม่ำเสมอ/เปื้อน

### Overfitting
**คำอธิบาย:** สถานะที่ model เรียนรู้ training data จนเกินไป ทำให้ผลบน data ใหม่ (test set) แย่ลง  
**สัญญาณ:** Training loss ต่ำมากแต่ validation loss สูง  
**วิธีแก้:** Regularization, early stopping, data augmentation, dropout

---

## P

### P2PaLA (Page to PAGE Layout Analysis)
**คำอธิบาย:** เครื่องมือ layout analysis ที่ใช้ neural network เพื่อ segment เอกสารและ produce output ใน PAGE XML format  
**URL:** https://github.com/lquirosd/P2PaLA

### PAGE XML (Page Analysis and Ground Truth Elements XML)
**คำอธิบาย:** มาตรฐาน XML สำหรับเก็บข้อมูล layout, segmentation, และ transcription ของเอกสาร  
**ใช้กับ:** Kraken/eScriptorium, Transkribus  
**จุดเด่น:** รองรับ polygon regions และ baselines  
**ดูเพิ่ม:** [มาตรฐาน PAGE XML และ ALTO XML เชิงเปรียบเทียบ](02_HTR_Theory_and_XML/2.2_มาตรฐานPAGE_XMLและALTO_XMLเชิงเปรียบเทียบ.md)

### Palm Leaf Manuscript (ใบลาน)
**คำอธิบาย:** เอกสารโบราณที่เขียนบนใบตาล (palm leaf) แพร่หลายในเอเชียใต้และเอเชียตะวันออกเฉียงใต้  
**ลักษณะ:** แคบยาว (~5×50 ซม.), มีรูร้อยเชือก, มักมีรูปร้อยเชือก, มัดรวมเป็นผูก  
**ความท้าทายสำหรับ HTR:** สภาพเสียหาย, เส้นสายบาง, พื้นผิวไม่เรียบ

### Pre-trained Model
**คำอธิบาย:** Model ที่เทรนสำเร็จแล้วกับ dataset ขนาดใหญ่ พร้อมใช้งานหรือ fine-tune  
**แหล่งหา:** Zenodo, HTR-United, HuggingFace

### Pseudo-label
**คำอธิบาย:** ป้ายกำกับ (label) ที่สร้างจาก model prediction แทนที่จะมาจากมนุษย์ ใช้ในกระบวนการ semi-supervised learning

### PyLaia
**คำอธิบาย:** HTR engine open-source ที่ใช้ CRNN + CTC เขียนด้วย PyTorch  
**URL:** https://github.com/jpuigcerver/PyLaia

---

## R

### Region
**คำอธิบาย:** ขอบเขตพื้นที่ในหน้าเอกสาร เช่น text region, image region, decoration region  
**ใน PAGE XML:** แทนด้วย `TextRegion`, `ImageRegion`, etc.

### RNN (Recurrent Neural Network)
**คำอธิบาย:** ประเภท neural network ที่ออกแบบสำหรับ sequential data — มี memory สำหรับจำข้อมูลก่อนหน้า  
**ใช้ใน HTR:** รู้จำลำดับอักขระจาก image features

---

## S

### Sauvola's Method
**คำอธิบาย:** วิธี binarization แบบ local adaptive threshold — คำนวณ threshold จาก local statistics ของ pixel  
**ข้อดี:** ดีกับเอกสารที่มีแสงไม่สม่ำเสมอ, รอยเปื้อน  
**ใช้บ่อยกับ:** เอกสารโบราณ

### Segmentation
**คำอธิบาย:** กระบวนการแบ่งภาพเอกสารออกเป็นส่วนๆ  
**ระดับ:** Page → Region → Line → Word → Character  
**สำคัญ:** Segmentation ที่ดี = รากฐานของ HTR ที่ดี

### SegmOnto [APPROVED]
**คำอธิบาย:** โครงสร้างคำศัพท์ควบคุมเชิงความหมาย (Controlled Vocabulary and Ontology) สำหรับการวิเคราะห์การแบ่งเลย์เอาต์หน้าเอกสาร (Document Layout Analysis) ในการพัฒนา HTR และการแปลงเอกสารเป็นดิจิทัล  
**วัตถุประสงค์:** เพื่อกำหนดประเภทและเขตของหน้าเอกสาร เช่น `DamageZone` (เขตความเสียหาย), `MarginText` (ข้อความขอบสมุด), `MainTextZone` (เขตข้อความหลัก) ให้สอดคล้องกันข้ามแพลตฟอร์ม (เช่น e-Scriptorium, Transkribus)  
**สถานะ:** [APPROVED]

### Self-supervised Learning
**คำอธิบาย:** วิธีเทรน model โดยไม่ต้องมี manual labels — model เรียนรู้จากโครงสร้างของข้อมูลเอง  
**ตัวอย่าง:** Masked image modeling — ปิดส่วนหนึ่งของภาพ ให้ model ทำนายส่วนที่หาย

### Semi-supervised Learning
**คำอธิบาย:** วิธีเทรน model โดยใช้ทั้ง labeled data (น้อย) และ unlabeled data (มาก) ร่วมกัน  
**ใช้เมื่อ:** มี GT น้อยแต่มีภาพเอกสารเยอะ

### Synthetic Data
**คำอธิบาย:** ข้อมูลที่สร้างขึ้นโดยอัตโนมัติ (ไม่ได้มาจากเอกสารจริง) ใช้เสริม training data  
**วิธีสร้าง:** Font rendering, GAN, Diffusion model

---

## T

### Transfer Learning
**คำอธิบาย:** เทคนิคนำ knowledge จาก model ที่เทรนกับ task/dataset หนึ่ง ไปใช้กับ task/dataset อื่น  
**ใน HTR:** เช่น ใช้ model ที่เทรนกับ Latin script เป็นฐาน แล้ว fine-tune กับ Thai script

### Transkribus
**คำอธิบาย:** แพลตฟอร์ม HTR ที่ได้รับความนิยมมากที่สุดในด้าน Digital Humanities  
**พัฒนาโดย:** READ-COOP SCE (spin-off จากมหาวิทยาลัย Innsbruck)  
**ลักษณะ:** Semi-commercial (ฟรีจำกัด + paid plans)  
**URL:** https://readcoop.eu/transkribus/

### TrOCR (Transformer-based OCR)
**คำอธิบาย:** Model OCR/HTR ที่ใช้ Transformer ทั้ง encoder (Vision) และ decoder (Language)  
**พัฒนาโดย:** Microsoft Research  
**สถาปัตยกรรม:** BEiT (image encoder) + RoBERTa (text decoder)  
**ข้อดี:** State-of-the-art accuracy, end-to-end training  
**ข้อจำกัด:** ต้องการ compute สูง, ไม่มี layout analysis ในตัว

### Tsheg (ཚེག) [APPROVED]
**คำอธิบาย:** เครื่องหมายจุดคั่นระหว่างพยางค์ในระบบการเขียนอักษรทิเบต ทำหน้าที่คั่นพยางค์แต่ละคำภายในประโยคซึ่งเขียนยาวต่อเนื่องกัน (Scriptura Continua)  
**ความสำคัญใน HTR:** ใช้เป็นขอบเขตในการตัดแบ่งข้อมูลคำย่อย (Syllable Tokenization) ในการประมวลผลโครงข่ายประสาทเพื่อจดจำลายมือเขียนอักษรทิเบตโบราณ  
**สถานะ:** [APPROVED]

---

## U

### U-Net
**คำอธิบาย:** สถาปัตยกรรม neural network สำหรับ image segmentation ลักษณะ encoder-decoder กับ skip connections  
**ใช้ใน HTR:** Layout analysis, baseline detection, binarization

### Unicode
**คำอธิบาย:** มาตรฐานการเข้ารหัสอักขระที่ครอบคลุมเกือบทุกระบบอักษรในโลก  
**สำคัญสำหรับ HTR:** การ encoding ต้องถูกต้อง โดยเฉพาะ non-Latin scripts ที่มี combining characters

---

## V

### Validation Set
**คำอธิบาย:** ชุดข้อมูลที่แยกไว้ (ไม่ใช้เทรน) สำหรับวัดผล model ระหว่างเทรน เพื่อ tune hyperparameters และ detect overfitting

### VGSL (Variable-size Graph Specification Language)
**คำอธิบาย:** ภาษาสำหรับอธิบายสถาปัตยกรรม neural network ใน Kraken ด้วยสตริงสั้นๆ  
**ตัวอย่าง:** `[1,48,0,1 Cr3,3,32 Mp2,2 Cr3,3,64 Mp2,2 S1(1x0)1,3 Lbx200 Do0.1,2 Lbx200 Do.1,2 O1c...]`  
**แต่ละส่วน:** C=Convolution, M=MaxPool, L=LSTM, D=Dropout, O=Output, S=Reshape

---

## W

### WER (Word Error Rate)
**คำอธิบาย:** อัตราความผิดพลาดระดับคำ  
**สูตร:** เหมือน CER แต่นับเป็นคำแทนอักขระ  
**ปัญหา:** ไม่เหมาะกับภาษาที่ไม่มี word boundary ชัดเจน (ไทย, ขอม, จีน, ญี่ปุ่น)

---

## X

### Xylograph
**คำอธิบาย:** เอกสารที่พิมพ์ด้วยแม่พิมพ์ไม้ (woodblock printing) พบมากในเอเชีย เช่น ทิเบต จีน  
**ลักษณะ:** กึ่งพิมพ์กึ่งลายมือ มีลักษณะเฉพาะของแม่พิมพ์

---

## Z

### Zenodo
**คำอธิบาย:** คลัง open-access ที่ CERN ดูแล สำหรับเผยแพร่ datasets, models, code  
**ใช้ใน HTR:** เก็บ pre-trained Kraken models, GT datasets  
**URL:** https://zenodo.org

### Zero-shot Learning
**คำอธิบาย:** การใช้ model กับ task ที่ไม่เคยเห็นตอนเทรน โดยใช้ knowledge จาก task ที่เกี่ยวข้อง  
**ใน HTR:** เช่น รู้จำอักษรที่ไม่มีใน training set โดยใช้ visual similarity

---

## คำศัพท์เฉพาะเอกสารโบราณไทย/ขอม

### สมุดไทย (Samut Thai)
**คำอธิบาย:** เอกสารโบราณไทยที่ทำจากกระดาษข่อย พับเป็นชั้นๆ แบบ accordion fold  
**ประเภท:** สมุดไทยดำ (พื้นดำ เขียนด้วยดินสอหรดาลหรือรงค์), สมุดไทยขาว (พื้นขาว เขียนด้วยหมึก)

### คัมภีร์ใบลาน (Bai Lan / Palm Leaf Manuscript)
**คำอธิบาย:** เอกสารที่จารึกบนใบตาลที่ตัดแต่งและรีดเรียบ ใช้เหล็กแหลม (เหล็กจาร) จารอักษร แล้วทาหมึก  
**ลักษณะ:** แคบยาว (~5×50 ซม.), มีรูร้อยเชือก, มัดรวมเป็นผูก

### อักษรขอม (Khom Script)
**คำอธิบาย:** ระบบอักษรที่พัฒนาจากอักษรเขมร ใช้ในไทยสำหรับเขียนภาษาบาลี-สันสกฤต และเนื้อหาทางศาสนา  
**ความท้าทาย:** มีหลายยุค, ลายมือแตกต่างมาก, มี ligatures ซับซ้อน

### ยันต์ (Yantra)
**คำอธิบาย:** ภาพสัญลักษณ์ทางไสยศาสตร์/ศาสนาที่ผสมผสานอักษร ตัวเลข และลวดลาย  
**ความท้าทายสำหรับ HTR:** ผสมผสานระหว่าง text, symbol, และ illustration — layout analysis ยากมาก

---

> **หมายเหตุ:** อภิธานศัพท์นี้จะถูก update เพิ่มเติมเมื่อมีศัพท์ใหม่ปรากฏในรายงาน
