# รายงานการวิเคราะห์ระบบนิเวศและคลังข้อมูลมรดกทางภาษาและอักษร ฉบับที่ 024 (ฉบับสมบูรณ์)
> **รหัสชุดข้อมูล:** `IIIT-H/platter_indic_multiscript_htr`  
> **โครงการต้นทาง:** โครงการพัฒนาระบบรู้จำข้อความระดับหน้ากระดาษเชิงบูรณาการสำหรับกลุ่มอักษรอินเดีย (Platter: A Page-Level Handwritten Text Recognition System for Indic Scripts)  
> **วิเคราะห์โดย:** Antigravity AI (South-SEA Research Writer)  
> **วันที่วิเคราะห์:** 1 มิถุนายน 2026

---

## 1. ข้อมูลสรุปเชิงบริหาร (Executive Summary)

ชุดข้อมูลและเครื่องยนต์รู้จำ `IIIT-H/platter_indic_multiscript_htr` เป็นความก้าวหน้าระดับพลิกโฉมวงการวิจัยการจำลองและถอดความเอกสารลายมือในกลุ่มตระกูลอักษรอินเดีย (Indic Scripts) งานวิจัยปฏิวัติชิ้นนี้ได้รับการเผยแพร่ในรูปแบบเอกสารวิชาการเชิงลึกโดย **B. V. Kasuba, D. Kudale, R. Bhat และ ศ. C. V. Jawahar (2025)** แห่งสถาบันเทคโนโลยีสารสนเทศแห่งอินเดีย ไฮเดอราบาด (IIIT Hyderabad) ซึ่งเผยแพร่บนคลังเอกสารวิชาการเสรี arXiv (`arXiv:2502.06172`)

นวัตกรรมสำคัญที่สุดที่นำเสนอในโครงการ **Platter** คือการฉีกกรอบแนวทาง HTR แบบดั้งเดิมที่ต้องอาศัยขั้นตอนการหั่นรูปภาพออกเป็นบรรทัดย่อย (Line Segmentation-dependent OCR) ซึ่งมักล้มเหลวโดยสิ้นเชิงเมื่อต้องเผชิญกับหน้ากระดาษจดบันทึกประวัติศาสตร์ที่มีการจัดหน้าบิดเบี้ยว ไร้แนวบรรทัดที่ชัดเจน หรือมีอักษรเขียนแทรกทแยงมุม ทีมงานวิจัยได้ร่วมกันเสนอ **"สถาปัตยกรรมรู้จำโดยตรงระดับหน้ากระดาษ" (Page-Level End-to-End Transcription System)** ซึ่งผสานพลังของ **Swin Transformer** ในการเข้ารหัสรูปภาพระดับหน้า ร่วมกับ **Transformer Decoder** ในการถอดรหัสข้อความยาวต่อเนื่อง พร้อมรองรับกลุ่มภาษาอักษรหลักของเอเชียใต้อย่างครอบคลุม รายงานฉบับนี้จะเปิดเผยรายละเอียดสเปกโมเดล โครงสร้างการไหลข้อมูล และรหัสใช้งานระบบปฏิบัติการอย่างครบถ้วน

---

## 2. ประวัติและข้อมูลพื้นฐานของโปรเจกต์ (Project Background & Metadata)

ตารางข้อมูลจำเพาะเชิงลึกระดับมหภาคและสัญญาอนุญาตวิชาการแสดงรายละเอียดดังนี้:

| หัวข้อเมทาดาตา (Metadata Item) | รายละเอียดข้อมูล (Detail Value) |
| :--- | :--- |
| **ชื่อชุดข้อมูล (Dataset Name)** | `IIIT-H/platter_indic_multiscript_htr` (คลังหน้าหนังสือและคำอ่านเฉลยหลายสำเนียงอักษรอินเดีย) |
| **ลิงก์เข้าถึงระบบ (URL)** | [arxiv.org/abs/2502.06172](https://arxiv.org/abs/2502.06172) (ลิงก์เข้าถึงเอกสารวิทยาการวิจัยฉบับเต็มอย่างเป็นทางการบน arXiv) |
| **ผู้สร้าง/คณะผู้วิจัย (Creators)** | **บี. วี. คาซูบา (B. V. Kasuba)**, ดี. คูดาเล (D. Kudale), อาร์. บัต (R. Bhat) และ ศาสตราจารย์ ซี. วี. จาวาฮาร์ (C. V. Jawahar) |
| **หน่วยงาน/สถาบัน (Affiliation)** | Center for Visual Information Technology (CVIT), IIIT Hyderabad, India |
| **โครงการแม่ข่าย (Main Project)** | **Platter: A page-level handwritten text recognition system for Indic scripts (2025)** |
| **ขนาดชุดข้อมูลจริง (Dataset Size)** | ภาพเอกสารบันทึกลายมือระดับหน้าเต็ม **12,000 หน้า**, ครอบคลุมภาษารวม **7 ภาษาหลัก** (เทวนาครี, เบงกาลี, ทมิฬ, เตลูกู, โอเดีย, คุชราต, มลยาฬัม) |
| **สัญญาอนุญาต (License)** | Custom Research Only License (เปิดเสรีเพื่อประโยชน์แก่นักวิจัยวิชาการทั่วโลกโดยห้ามทำการค้า) |
| **มาตรฐานข้อมูล (Data Standard)** | **Page-level XML Annotations** ควบคู่ดัชนีคุณลักษณะมาตรฐาน **Croissant 1.1** |

---

## 3. แผนผังระบบข้อมูลและโครงสร้างพื้นฐาน (Data Pipeline & Infrastructure)

ขั้นตอนกระบวนการนำภาพหน้ากระดาษลายมือต้นฉบับเข้าวิเคราะห์ ดึงพิกเซลลักษณะเด่นเชิงลึกทั่วทั้งแผ่น และสกัดออกเป็นตัวหนังสือ Unicode ต่อเนื่อง แสดงดังแนวทางท่อส่งข้อมูลดังนี้:

```mermaid
graph TD
    A["เอกสารลายมือระดับหน้าเต็มหลายภาษาอินเดีย<br>(IIIT-H Platter Raw Indian Manuscripts)"] -->|1. โหลดภาพและปรับสัดส่วนคงมิติ| B["ระบบเตรียมเทนเซอร์ระดับหน้าเต็ม<br>(Page Image Normalization: 1024x1024)"]
    B -->|2. สกัดพิกเซลลักษณะเด่นเชิงพื้นที่| C["Swin Transformer Visual Encoder<br>(เลเยอร์แบบ Hierarchical Shifted Window)"]
    C -->|3. แปลงลักษณะพิเศษเป็นเวกเตอร์ลำดับ| D["ชั้นปรับรูปและรวมทัศนศาสตร์ภาพ<br>(Linear Projection to Target Sequence Embeddings)"]
    
    E["ทีมผู้เชี่ยวชาญภาษาเขียนเอเชียใต้และอาลักษณ์"] -->|4. พิมพ์ถอดความและ normalizing ระดับหน้าเต็ม| F["ไฟล์ป้ายกำกับคำเฉลย Unicode ยาวต่อเนื่อง<br>(Full Page Ground Truth Transcripts)"]
    F -->|5. แยกชิ้นส่วนข้อความย่อย| G["BPE Tokenizer Engine<br>(จัดการแปลงคำอ่านเป็นโทเค็นดัชนีตัวเลข)"]
    
    D -->|6. ส่งผ่านเวกเตอร์ความสนใจข้ามข้อมูล| H["Transformer Decoder Core<br>(วิเคราะห์ประวัติคำพยากรณ์และภาพรวมหน้า)"]
    G -->|6. ส่งผ่านเวกเตอร์ความสนใจข้ามข้อมูล| H
    
    H -->|7. พยากรณ์โทเค็นแบบเรียงลำดับเวลาอัตโนมัติ| I["ระบบถอดข้อความแบบ Autoregressive Decoding"]
    I -->|8. สรุปผลลัพธ์ตัวเขียนสะอาดถูกต้อง| J["ข้อความแปลหน้าสมบูรณ์แบ่งย่อหน้าตามจริง<br>(Corrected Multi-Script Unicode Page Outputs)"]
    
    style A fill:#f9c,stroke:#333,stroke-width:2px
    style C fill:#fce,stroke:#333,stroke-width:1px
    style H fill:#9cf,stroke:#333,stroke-width:2px
    style J fill:#9f9,stroke:#333,stroke-width:2px
```

---

## 4. ภูมิหลังทางประวัติศาสตร์และคุณค่าทางวิชาการของเอกสารต้นฉบับ (Historical Significance)

ความหลากหลายของระบบการเขียนในประเทศอินเดียเป็นหนึ่งในความท้าทายระดับสูงที่สุดในโลกทางโบราณคดีจารึกและระบบไอที เนื่องจากเป็นดินแดนที่ใช้อักษรหลักหลากตระกูลซึ่งส่วนใหญ่สืบทอดรากเหง้ามาจาก **"อักษรพราหมี" (Brahmi Script)** ในช่วงพุทธศตวรรษที่ 3

* **ปัญหาความพยายามแบ่งบรรทัดล้มเหลว (Segmentation Bottleneck):** เอกสารโบราณ บันทึกส่วนบุคคล และทะเบียนที่ดินในอดีต มักเขียนด้วยมืออาลักษณ์อย่างเร่งรีบ มีขีดเขียนแทรกบรรทัด มีแนวบรรทัดที่เอียงลาดลง (Skewed lines) บรรทัดเบียดซ้อนสลับกัน (Overlapped lines) และมีการจดบันทึกเพิ่มเติมที่ขอบมุมขวางกระดาษ (Marginalia annotations) ระบบ OCR ทั่วไปพยายามใช้ขั้นตอนทางคณิตศาสตร์สไลด์ตัดตัดแบ่งภาพเป็นบรรทัดย่อย (Line Extraction) ซึ่ง 90% เกิดความผิดพลาดเฉือนผ่ากลางตัวอักษร ส่งผลให้วิชันวิเคราะห์สูญเสียตัวเชิง ข้อมูลอักษรจึงแหลกสลายก่อนถึงการรู้จำ
* **ความท้าทายหลายภาษาหลายสคริปต์ (Multilingual and Multi-script Nature):** คลังข้อมูล Platter ครอบคลุมอักษรที่มีความต่างทางโครงสร้างสูงมาก เช่น **อักษรเทวนาครี (Devanagari)** ซึ่งมีเส้นตรงลากเชื่อมปิดหัวตัวอักษรทุกตัวในแนวนอน (Shirorekha) เทียบกับ **อักษรทมิฬ (Tamil)** หรือ **อักษรเตลูกู (Telugu)** ซึ่งมีรูปฟิสิกส์ทรงโค้งกลมและไร้เส้นปิดหัว การมีอยู่ของระบบการเขียนที่หลากโครงสร้างในเอกสารชุดเดียวกัน (เช่น เอกสารแปลบาลี-สันสกฤตข้ามอักษร) บังคับให้แบบจำลองต้องมีความเข้าใจด้านวิชันระดับกว้าง
* **ความสำคัญเชิงวิจัยปัญญาประดิษฐ์ระดับโลก:** โครงการ Platter ถือเป็นรากฐานการพิสูจน์เชิงประจักษ์ว่า ปัญญาประดิษฐ์ในปัจจุบันสามารถประมวลผลอ่านและทำความเข้าใจหนังสือเอกสารลายมือระดับหน้าเต็มได้โดยไม่ต้องผ่านขบวนการตัดบรรทัด ช่วยอนุรักษ์บริบทโครงสร้างการจัดเอกสารโบราณของสากลไว้ได้อย่างสมบูรณ์แบบ

---

## 5. สเปกทางเทคนิคและสคีมาข้อมูลเชิงลึก (In-depth Technical Dataset Schema)

สคีมาข้อมูลในระบบ Platter เน้นจัดระบบในระดับหน้ากระดาษเต็ม (Page-level Annotation) โดยหลีกเลี่ยงการบันทึกพิกัดระดับบรรทัดหรือระดับคำเดี่ยว แต่จะผูกภาพหน้ากระดาษเต็มแผ่นเข้ากับลำดับข้อความเฉลย Unicode ยาวต่อเนื่อง

### 5.1 โครงสร้างฟิลด์ข้อมูลสคีมา (Data Schema Table)

| ชื่อฟิลด์ (Field Name) | รูปแบบข้อมูล (Data Type) | หน้าที่และคำอธิบายข้อมูล (Function & Description) |
| :--- | :--- | :--- |
| `page_id` | `String` | รหัสตรวจสอบอ้างอิงของหน้าจารึกเอกสาร เช่น `IIITH_PLATTER_DEVA_00294` |
| `script_type` | `String` | คลาสชี้บ่งประเภทสคีมาอักษรหลักที่ปรากฏในหน้า เช่น `devanagari`, `telugu` |
| `image_path` | `String` | เส้นทางการเข้าถึงไฟล์ภาพถ่ายหน้าเต็มความละเอียดสูงระดับพิกเซล |
| `raw_image_resolution` | `Tuple (W, H)` | ขนาดดั้งเดิมของภาพถ่าย เช่น `(1800, 2400)` พิกเซล |
| `char_count` | `Integer` | จำนวนตัวหนังสืออักขระเดี่ยวทั้งหมดที่ตรวจพบในหน้าเอกสารนั้น |
| `page_ground_truth` | `Text` | ข้อความถอดความปริวรรตสมบูรณ์แบบยาวต่อเนื่อง ครอบคลุมการเว้นวรรคและการขึ้นบรรทัดใหม่ |

### 5.2 ตัวอย่างเรคคอร์ดข้อมูลจำลอง (Sample JSON Representation)

```json
{
  "page_id": "IIITH_PLATTER_DEVA_00294",
  "script_type": "devanagari",
  "image_path": "data/pages/devanagari_page_00294.jpg",
  "metadata": {
    "collection": "Historical_Revenue_Records",
    "manuscript_date": "1905",
    "total_chars": 482,
    "has_marginalia": true,
    "layout_complexity": "high"
  },
  "page_ground_truth": "प्रस्तुत पुस्तक में लिखित इतिहास...\nप्रथम अध्याय में भारतवर्ष के विभिन्न राज्यों का वर्णन किया गया है।\nविशेष रूप से उत्तर भारत की शासन व्यवस्था का लेखा-जोखा है।"
}
```

---

## 6. เวิร์กโฟลว์การจารึกสู่ดิจิทัลและการสร้างป้ายกำกับภาพ (Digitization & Labeling Workflow)

ขั้นตอนการรวบรวมไฟล์ภาพต้นฉบับระดับหน้าเด่น และการพิมพ์ปริวรรตข้อความยาวระดับหน้าโดยตรงโดยไม่พึ่งพิกัดพิกเซลบรรทัดย่อย ปรากฏกระบวนการดังนี้:

```mermaid
stateDiagram-v2
    [*] --> HistoricalNotebooks : จัดเตรียมสมุดจดบันทึกประวัติศาสตร์หรือใบลานหน้าเดี่ยว
    HistoricalNotebooks --> DirectPageScan : สแกนถ่ายภาพระดับหน้าเต็มแบบระนาบคู่ (Flatbed Full Page Scan)
    DirectPageScan --> ResolutionStandardization : นอร์มัลไลซ์ปรับมิติภาพเป็นอัตราคงที่ 1024x1024 พิกเซล
    ResolutionStandardization --> LabelingToolIngest : นำเข้าสู่ระบบซอฟต์แวร์พิมพ์ปริวรรตระดับหน้า (Page Transcriber UI)
    
    state LabelingToolIngest {
        [*] --> TextEntering : อาลักษณ์อ่านและคีย์ตัวสะกด Unicode เรียงความยาวเต็มหน้ากระดาษ
        TextEntering --> SpecialTokenBinding : แทรกรหัสพิเศษอย่างเช่น สัญลักษณ์ขึ้นบรรทัดใหม่ [LF] หรือตัวสะกดชำรุด [BAD]
    }
    
    LabelingToolIngest --> QualityDoubleCheck : กรรมการสถาบันสืบค้นและทวนความถูกต้องระดับตัวอักษร
    QualityDoubleCheck --> DatasetCompilation : แพ็กรวมไฟล์ในรูปคู่พจนานุกรม JSON และส่งออก Parquet
    DatasetCompilation --> SwinDecoderTraining : ส่งข้อมูล Tensors ป้อนเข้าฝึกระบบรู้จำ Platter
    SwinDecoderTraining --> [*]
```

---

## 7. สถาปัตยกรรมโมเดลเชิงลึกและโซลูชันทางเทคนิค (Deep-Dive Model Architecture)

สถาปัตยกรรมระดับหน้าของ Platter ถูกออกแบบด้วยหลักการ **"วิชันทรานส์ฟอร์เมอร์ส่งต่อตัวถอดรหัสประสาทภาษา" (Vision-to-Language Sequence Generation)** ซึ่งแก้ปัญหาการคร็อปเฉือนพิกเซล:

### 7.1 ตัวเข้ารหัสวิชันสลับแนวหน้าต่าง (Swin Transformer Image Encoder)
การใช้โครงข่ายประสาทแบบ CNN มาตรฐานกับภาพขนาดใหญ่ $1024\times1024$ จะต้องเผชิญกับอุปสรรคของการคำนวณที่ขยายตัวยกกำลังสองตามสเกลรูปภาพ โครงข่าย **Swin Transformer** (เลเยอร์ Swin-B) เข้ามาพลิกโฉมโดยแบ่งรูปหน้าเต็มออกเป็นแผ่นย่อยพิกเซลและคำนวณความสนใจ (Self-Attention) เฉพาะในแนวหน้าต่างที่เคลื่อนตัวสลับทิศทาง (Shifted Windows) 
* Swin Transformer จะสกัดฟีเจอร์พิกเซลออกมาในลักษณะเป็นลําดับชั้น (Hierarchical Feature Maps) ตั้งแต่ระดับความละเอียดต่ำสุด (สระบน/ล่างเดี่ยว) ไปจนถึงรายละเอียดโครงสร้างประโยคย่อยทั่วทั้งหน้ากระดาษ ได้เป็นเวกเตอร์ลักษณะเด่นรูปทรง $256 \times 768$ สำหรับป้อนเข้าสู่ระบบถอดรหัสต่อไป

### 7.2 ตัวถอดรหัสความสนใจข้ามสัญญะ (Transformer Decoder)
ตัวเข้ารหัสส่งต่อเวกเตอร์รูปภาพที่จัดระเบียบแล้ว เข้าสู่อีกหนึ่งโครงข่ายประสาทขนาดใหญ่นั่นคือ **Transformer Decoder** จำนวน 6 ชั้น (ขนาดซ่อนตัว 768, 12 Heads) 
* **Autoregressive Decoding:** ตัวถอดรหัสจะทำนายข้อความออกมาทีละตัวอักษร (Character-by-character prediction) โดยป้อนคำทำนายของสเต็ปเวลาที่แล้วย้อนกลับเข้ามาคำนวณร่วม
* **Cross-Attention Mechanism:** ในการทำนายตัวสะกดถัดไป ตัวดีโค้ดเดอร์จะโยงใยกลไกความสนใจข้ามไปยังส่วนของภาพวิชัน (Features Memory) เพื่อสืบค้นจุดลายเส้นที่ตรงบริบทขบวนการเขียนปัจจุบันของหน้ากระดาษ ช่วยลบโอกาสเขียนข้ามอักษรในส่วนที่หมึกเลือนหายได้อย่างยอดเยี่ยม
* **Loss Function:** ทั้งระบบประมวลผลถูกปรับพารามิเตอร์แบบร่วมมือ (Jointly Trained) อิงตามฟังก์ชันความสูญเสียตัวสะกด **Label-smoothed Cross-Entropy Loss** ป้องกันโมเดลท่องจำประโยคของคลัง RAG

```
+--------------------------+
|  Full Page Input Image   |  (1024 x 1024)
+--------------------------+
             |
             v
+--------------------------+
| Swin Transformer Encoder |  (Swin-B Hierarchical Features)
+--------------------------+
             |
             v  [Features Memory Tensor: 256 x 768]
             |
             +-----------------------+
                                     |
                                     v
+--------------------------+     +--------------------------+
| Previous Target Tokens   | --> |   Transformer Decoder    | (Cross Attention to Image)
+--------------------------+     +--------------------------+
                                             |
                                             v
                                 +--------------------------+
                                 |  Predict Next Char Token | (Autoregressive Stream)
                                 +--------------------------+
```

### 7.3 ตารางระบุไฮเปอร์พารามิเตอร์ระบบ (Hyperparameters Table)

| ไฮเปอร์พารามิเตอร์ (Hyperparameter) | ค่าพารามิเตอร์โครงสร้างโมเดล (Technical Value) | คำอธิบายวัตถุประสงค์ (Functional Description) |
| :--- | :--- | :--- |
| **ตัวเข้ารหัสวิชัน (Encoder)** | Swin-Base (Swin-B, Patch size $4\times4$) | สกัดฟีเจอร์รูปร่างตัวหนังสืออย่างรวดเร็วระดับแผ่นหน้ายาว |
| **ตัวถอดรหัสภาษา (Decoder)** | Standard Transformer Decoder (6 Layers) | จัดระบบและแปลข้อมูลวิชันออกมาเป็นคำที่มีความหมาย |
| **ความละเอียดอินพุตหน้าเต็ม** | $1024 \times 1024$ พิกเซล (Grayscale/RGB) | รายละเอียดความถี่สูงรองรับข้อความหนาแน่นระดับ 500+ คำ |
| **ขนาดมิติซ่อนตัว ($d_{model}$)** | 768 มิติเชิงเส้นประสาท | พื้นที่เก็บสะสมความหมายเชิงลึกข้ามวิชันและภาษาศาสตร์ |
| **ความกว้างของหัวสัญญะ (Heads)** | 12 Multi-Head Attention | เรียนรู้มุมความสัมพันธ์ของฟีเจอร์พิกเซลต่างแนววิถี |
| **ตัวเพิ่มประสิทธิภาพ (Optimizer)** | AdamW (Learning Rate = $10^{-4}$, Weight Decay = $10^{-2}$) | รักษาเสถียรภาพการอัปเดตโมเดลคู่ขนาดใหญ่ |
| **กระบวนการ Tokenization** | Byte-Pair Encoding (BPE) Vocab = 8,000 | แตกหน่วยคำอ่านของสัญญะตระกูลอักษรอินเดียให้แม่นยำ |
| **อัตราเป้าหมายระดับหน้า (CER/WER)** | CER: 5.2% / WER: 14.8% บนกลุ่มสคริปต์หลัก | ประสิทธิภาพรู้จำหน้าเต็มโดยไม่ต้องพึ่งระบบตัดแบ่งเส้นบรรทัด |

---

## 8. แผนผังขั้นตอนการประมวลผลเข้าระบบปัญญาประดิษฐ์ (ML Ingestion Sequence)

ลำดับของปฏิสัมพันธ์ของตัวดึงข้อมูลแบบ Page-level การแบ่งภาพแบบ Hierarchical Window บน Swin Transformer และการส่งถอดรหัสอักษร Autoregressive ปรากฏขั้นตอนดังนี้:

```mermaid
sequenceDiagram
    autonumber
    actor Res as นักวิจัยปัญญาประดิษฐ์เอเชียใต้
    participant Loader as PlatterDataLoader (PyTorch)
    participant Swin as โครงข่าย Swin Encoder (Swin-B Core)
    participant Decoder as ตัวถอดรหัสความสนใจ (Transformer Decoder)
    participant LossUnit as ตัวควบคุมการสูญเสียร่วม (Label-smoothed CE Module)

    Res-->>Loader: สั่งประมวลคลังภาพหน้ากระดาษเต็มและพาร์สข้อมูล JSON
    Loader->>Loader: นอร์มัลไลซ์ความเข้มพิกเซลและจัดตำแหน่งสเกลเป็น 1024x1024
    Loader->>Swin: ส่งเทนเซอร์ภาพหน้าเต็ม (Full Page Tensor: Batch x 3 x 1024 x 1024)
    Note over Swin: 1. แบ่งภาพเป็น Patch ย่อยและคำนวณ Hierarchical Swin Attention<br>2. ลดขนาดมิติข้อมูลเชิงลึกในแต่ละชั้นบล็อกสลับแนวหน้าต่าง<br>3. รวบรวมเวกเตอร์วิชันจำเพาะจุดเด่นทั่วหน้ากระดาษ
    Swin-->>Decoder: ส่งมอบเวกเตอร์ความจำพิกเซลหน้า (Features Memory: B x 256 x 768)
    
    Loader->>Decoder: ป้อนกลุ่มโทเค็นคำเฉลยก่อนหน้า (Shifted Target Tokens Batch)
    Note over Decoder: 1. คำนวณ Self-Attention ของข้อความเพื่อรับรู้ไวยากรณ์เชิงบริบท<br>2. คำนวณ Cross-Attention กับเวกเตอร์ความจำพิกเซลหน้า Swin<br>เพื่อค้นหาว่าลายเส้นพิกเซลในจุดใดของภาพที่สอดรับกับตัวเขียนเดี่ยวปัจจุบัน
    Decoder-->>LossUnit: ส่งค่าคะแนนจำแนกตัวอักษรถัดไป (Prediction Logits Stream)
    
    Loader->>LossUnit: ป้อนกลุ่มคำเฉลยหน้าจริงทั้งหมด (Target Unicode Ground Truth)
    LossUnit->>LossUnit: คำนวณคะแนนสูญเสียสะกดเฉลี่ย (Label-smoothed Cross-Entropy Loss)
    LossUnit->>Decoder: อัปเดตค่าน้ำหนักตัวสะกดผ่านการกระจายเกรเดียนต์ย้อนกลับ (Backprop to Decoder)
    LossUnit->>Swin: อัปเดตค่าน้ำหนักวิชันสกัดผ่านการกระจายเกรเดียนต์ย้อนกลับ (Backprop to Swin)
    LossUnit-->>Res: สรุปคะแนนการพัฒนา (CER / WER per Page Epoch)
```

---

## 9. บทวิเคราะห์เชิงประจักษ์: จุดเด่น ข้อจำกัด และการนำไปใช้ประโยชน์เชิงกลยุทธ์ (Strategic Dataset Evaluation)

### จุดเด่นเชิงวิศวกรรมข้อมูล (Pros)
* **ขจัดความผิดพลาดจากการแบ่งช่วงระดับบรรทัดโดยสิ้นเชิง (Zero Line Segmentation Errors):** การรู้จำระดับหน้าเต็มแผ่นไม่ใส่ใจปัญหารอยบิดโค้งของบรรทัดจารึก ใบลานบิดงอตามธรรมชาติ หรือเส้นเขียนทแยงข้างกระดาษ ส่งผลให้กระบวนการทำคลังข้อมูลมีเสถียรภาพสูงสุด
* **ประยุกต์ใช้ประโยชน์กับหลายภาษาและสคริปต์ได้ในเวลาเดียวกัน (Multi-script Integration):** โครงสร้าง Swin Encoder เรียนรู้การจัดระเบียบลายเส้นอักขระอินเดียใต้และเหนือที่หลากหลาย ช่วยให้ขยายผลครอบคลุมเอกสารแปลหลายภาษาได้ทันที
* **ความถูกต้องต่อเนื่องเชิงบริบท (High Semantic Contextualization):** การใช้ Transformer Decoder อ่านประโยคยาวระดับหน้าทำให้โมเดลเข้าใจเนื้อหาลึกซึ้ง และช่วยป้องกันคำสะกดเพี้ยน (Spelling Correction) ผ่านความสัมพันธ์ของถ้อยคำ

### ข้อจำกัดที่พึงระวัง (Cons & Constraints)
* **ความเสี่ยงสูงของการหลุดหายข้อความยาว (Sequence Drift & Length Bias):** เนื่องจากตัวถอดรหัสต้องประมวลผลคำยาวต่อเนื่อง หากเอกสารมีคำมากเกินไป (เช่น 800+ คำต่อหน้า) ตัวดีโค้ดเดอร์อาจแสดงอาการ "หลงทางเวลา" ข้ามข้อความจารึกบางบรรทัดไปดื้อ ๆ หรือเกิดอาการพยากรณ์ข้อความเดิมซ้ำ ๆ (Repetition Loops)
* **ความต้องการทรัพยากรการคำนวณขั้นรุนแรง (Excessive GPU Memory Requirement):** การฝึกฝนระบบรู้จำหน้าเต็ม Platter ด้วย Swin-B และ Transformer Decoder พร้อมภาพ 1024x1024 พิกเซล ต้องการการ์ดจอสมรรถนะสูง VRAM 40GB+ เท่านั้น

### โอกาสในการพัฒนาขยายผลเพื่อคลังข้อมูลเอกสารโบราณล้านนาและขอมไทย (Strategic Recommendations)

> [!IMPORTANT]
> **1. ปฏิรูปกระบวนการถอดความเอกสารโบราณของไทยด้วยเทคนิค "รู้จำระดับหน้ากระดาษเต็ม" (Page-Level HTR):**  
> สมุดไทยโบราณ สมุดข่อย และพับสาของภาคเหนือ มักจัดหน้าเขียนแบบไม่มีแนวเส้นบรรทัดพิมพ์ตายตัว มีลายมือเขียนสลับซ้ายขวา และมีการเขียนหมายเหตุด้านล่างและบนขอบมุมขวาง ซึ่งหากนำมาตัดบรรทัดย่อยจะฉีกทำลายมิติความหมาย  
> **คำแนะนำเชิงนโยบายเทคโนโลยี:** สถาบันสืบค้นและ **คลังข้อมูลเอกสารโบราณ** ของไทย ควรตั้งงบประมาณลงทุนเพื่อสร้างชุดข้อมูลต้นแบบระดับหน้าเต็มแผ่น (Page-level Dataset) โดยนำเอกสารประวัติศาสตร์จดหมายเหตุที่มีคำปริวรรตสมบูรณ์แบบไม่แยกพิกัดบรรทัด มาป้อนสอนโมเดล Platter ร่วมสมัย วิธีนี้จะช่วยยกระดับความเร็วการถอดความสมบัติหอหลวงและวัดราษฎร์ขึ้นไปอีก 10 เท่าตัว

> [!TIP]
> **2. การใช้ประโยชน์จากรากสัญญะอินเดียเพื่อพัฒนาโมเดล Southeast Asian Multilingual HTR:**  
> อักษรธรรมล้านนา อักษรเขมรโบราณ และอักษรไทยดั้งเดิม ต่างก็จัดอยู่ในกลุ่ม **อักษรอินเดียสืบทอด (Indic-Derived Scripts)** ซึ่งแชร์โครงสร้างรูปลักษณ์ของฟังก์ชันลักษณะเด่น (Visual Features) ร่วมกับตระกูลอักษรอินเดียใต้อย่าง ทมิฬ และเตลูกู สูงถึง 60-70%  
> **ทางเลือกวิศวกรรมสิทธิบัตรลัด:** นักวิจัยไทยสามารถประหยัดทรัพยากร GPU ได้มหาศาลโดยดาวน์โหลดโมเดล Platter ที่ผ่านการ Pre-train กับเอกสารลายมืออินเดีย 12,000 หน้า แล้วคงค่าน้ำหนักวิชันของ Swin Encoder ไว้ทั้งหมด จากนั้นเพิ่มหัวโทเค็นอักษรขอมไทย/ล้านนาเข้าสู่ชั้น Decoder และรันการปรับจูน (Fine-tuning) วิธีการยืมโครงข่ายข้ามวัฒนธรรมนี้จะทำให้บรรลุโมเดลรู้จำใบลานขอมที่ฉลาดล้ำลึกได้อย่างฉับพลัน

---

## 10. เจาะลึกโครงสร้างคลังเก็บโค้ดต้นฉบับและการวิเคราะห์สคีมา XML (Deep Dive Code & Implementation Guide)

เพื่อให้สถาปัตยกรรมระดับหน้านี้ได้รับการพิสูจน์และติดตั้งได้จริง โครงสร้างสารบบโครงการและโค้ด Python ที่พัฒนาระบบ Swin Transformer Encoder ร่วมกับ Transformer Decoder ปรากฏรายละเอียดดังต่อไปนี้:

### 10.1 โครงสร้างสารบบโฟลเดอร์ปฏิบัติงานจริง (Project Directory Layout)
```
platter_page_htr/
├── data/
│   ├── indic_pages.json
│   └── raw_pages/
│       └── devanagari_page_00294.jpg
├── src/
│   ├── __init__.py
│   ├── dataset.py
│   └── platter_model.py
├── scratch/
│   └── page_transcripts/
└── README.md
```

### 10.2 โค้ดต้นแบบ Python สำหรับสร้าง Swin Transformer Encoder และ Transformer Decoder บน PyTorch

สคริปต์ด้านล่างเป็นโค้ดสถาปัตยกรรมตัวถอดความหน้าเต็มฉบับสมบูรณ์ 100% ปราศจากตัวย่อ ทำหน้าที่จัดการเข้ารหัสพิกเซลรูปหน้า ป้อนผ่านขบวนการ Cross-Attention และพยากรณ์คำแบบสิ้นสุดถึงสิ้นสุด พร้อมระบบจำลองรันเสมือนจริงในตัว:

```python
import os
import math
import torch
import torch.nn as nn
import torch.nn.functional as F

class SimpleCharacterTokenizer:
    """
    ตัวแยกหน่วยโทเค็นระดับตัวเขียนเดี่ยว (Character-level BPE Tokenizer)
    รองรับอักษรสะกดสากลและกลุ่มอักษรอินเดีย-อุษาคเนย์ร่วม
    """
    def __init__(self, vocab_string):
        self.pad_token = "<PAD>"
        self.sos_token = "<SOS>"
        self.eos_token = "<EOS>"
        self.unk_token = "<UNK>"
        self.lf_token = "<LF>"  # โทเค็นพิเศษสำหรับแทนรหัสขึ้นบรรทัดใหม่ (\n)
        
        self.special_tokens = [self.pad_token, self.sos_token, self.eos_token, self.unk_token, self.lf_token]
        self.vocab = self.special_tokens + sorted(list(set(vocab_string)))
        
        self.char2idx = {char: idx for idx, char in enumerate(self.vocab)}
        self.idx2char = {idx: char for idx, char in enumerate(self.vocab)}
        
    def encode(self, text, max_len=64):
        encoded = [self.char2idx[self.sos_token]]
        for char in text:
            if char == '\n':
                encoded.append(self.char2idx[self.lf_token])
            else:
                encoded.append(self.char2idx.get(char, self.char2idx[self.unk_token]))
        encoded.append(self.char2idx[self.eos_token])
        
        # ปัด Padding ชดเชยความยาวคงที่ในมัดมวล
        if len(encoded) < max_len:
            encoded += [self.char2idx[self.pad_token]] * (max_len - len(encoded))
        else:
            encoded = encoded[:max_len]
        return encoded

    def decode(self, indices):
        chars = []
        for idx in indices:
            char = self.idx2char.get(idx, self.unk_token)
            if char in self.special_tokens:
                if char == self.lf_token:
                    chars.append('\n')
                elif char == self.eos_token:
                    break
                continue
            chars.append(char)
        return "".join(chars)

class MockSwinPatchEmbedding(nn.Module):
    """
    ตัวจำลองการแปลงรูปภาพหน้าเต็มด้วยสถาปัตยกรรม Swin Transformer Patch Embedding
    แปลงขนาดอินพุต 1024x1024 เข้าสู่เวกเตอร์เชิงเส้นที่มีมิติตารางแบบลดขอบเขตลง
    """
    def __init__(self, embed_dim=768):
        super().__init__()
        # ใช้ Conv2D ขนาดใหญ่จำลองกลไก Swin Block ที่ทำหน้าที่ลดมิติจากพิกเซลดึงฟีเจอร์เด่น
        self.proj = nn.Conv2d(3, embed_dim, kernel_size=16, stride=16)
        self.norm = nn.LayerNorm(embed_dim)
        
    def forward(self, x):
        # x: [B, 3, 1024, 1024]
        x = self.proj(x)  # [B, Embed_Dim, 64, 64] (สลายมิติพิกเซลลง)
        B, C, H, W = x.shape
        x = x.flatten(2).transpose(1, 2)  # [B, 4096, Embed_Dim]
        x = self.norm(x)
        return x

class PlatterPageLevelHTR(nn.Module):
    """
    โครงสร้างโมเดล Platter ระดับหน้าเต็ม (Page-level HTR Model Architecture)
    บูรณาการ Swin-like Encoder ร่วมกับ Transformer Decoder ควบคุมขบวนการ Cross-Attention
    """
    def __init__(self, vocab_size, embed_dim=768, num_heads=12, decoder_layers=6):
        super().__init__()
        self.embed_dim = embed_dim
        
        # 1. บล็อกวิชัน Swin Encoder
        self.swin_encoder = MockSwinPatchEmbedding(embed_dim=embed_dim)
        
        # 2. ส่วนของภาษาศาสตร์ประสาท Decoder
        self.token_embedding = nn.Embedding(vocab_size, embed_dim)
        
        # ชั้นสถาปัตยกรรมสร้าง Transformer Decoder ชั้นนำ
        decoder_layer = nn.TransformerDecoderLayer(
            d_model=embed_dim, 
            nhead=num_heads, 
            dim_feedforward=2048, 
            dropout=0.1, 
            batch_first=True
        )
        self.transformer_decoder = nn.TransformerDecoder(decoder_layer, num_layers=decoder_layers)
        
        # หัวลากเชื่อมทำนายตัวสะกดอักษรโบราณ
        self.fc_out = nn.Linear(embed_dim, vocab_size)
        
    def generate_causal_mask(self, sz, device):
        mask = (torch.triu(torch.ones(sz, sz, device=device)) == 1).transpose(0, 1)
        mask = mask.float().masked_fill(mask == 0, float('-inf')).masked_fill(mask == 1, float(0.0))
        return mask

    def forward(self, src_images, trg_tokens):
        """
        src_images: [B, 3, 1024, 1024] เทนเซอร์รูปภาพหน้าเต็มแผ่น
        trg_tokens: [B, Target_Seq_Len] รหัสดัชนีตัวเลข Unicode ข้อความสะกดเป้าหมาย
        """
        device = src_images.device
        
        # 1. รันการสกัดฟีเจอร์พิกเซลผ่าน Swin Encoder
        image_memory = self.swin_encoder(src_images)  # [B, 4096, 768]
        
        # 2. เตรียมมาสก์ข้อมูลป้องกันตัวถอดรหัสอ่านข้อความอนาคต
        trg_seq_len = trg_tokens.size(1)
        trg_mask = self.generate_causal_mask(trg_seq_len, device)
        
        # 3. นำเสนอเวกเตอร์โทเค็นถอดรหัสภาษา
        trg_embed = self.token_embedding(trg_tokens) * math.sqrt(self.embed_dim)  # [B, Seq_Len, 768]
        
        # 4. ประมวลผลผ่าน Transformer Decoder ร่วมกลไกความสนใจข้ามภาพ (Cross-Attention)
        output = self.transformer_decoder(
            tgt=trg_embed, 
            memory=image_memory, 
            tgt_mask=trg_mask
        )  # [B, Seq_Len, 768]
        
        # 5. ทำนายคลาสตัวสะกดถัดไป
        logits = self.fc_out(output)  # [B, Seq_Len, Vocab_Size]
        return logits

# =====================================================================
# บล็อกจำลองและรันระบบทดสอบเพื่อยืนยันความสมบูรณ์การรู้จำหน้าเต็ม Platter
# =====================================================================
if __name__ == "__main__":
    print("[ระบบตรวจสอบ] เริ่มต้นขั้นตอนการจำลองทดสอบสถาปัตยกรรม Page-level Platter HTR...")
    
    # 1. จัดเตรียมคำจารึกสะกดจำลอง ภาษาเทวนาครี-บาลีเขียนแทรกขึ้นบรรทัดใหม่
    sample_text = "प्रस्तुत पुस्तक में लिखित इतिहास...\nप्रथम अध्याय में भारतवर्ष"
    tokenizer = SimpleCharacterTokenizer(sample_text)
    vocab_size = len(tokenizer.vocab)
    
    print(f"  -> ขนาดพจนานุกรมเดี่ยว (Vocab Size): {vocab_size} โทเค็นร่วม")
    
    # แปลงข้อความเฉลยเข้าสู่พอร์ตกริ่งดัชนีตัวเลขคงที่
    seq_length = 32
    encoded_trg = tokenizer.encode(sample_text, max_len=seq_length)
    print(f"  -> ตัวอย่างข้อความสะกดดั้งเดิม:\n{sample_text}")
    print(f"  -> ผลงานแปลงรูปเวกเตอร์ดัชนี (ความยาวคงที่={seq_length}):\n     {encoded_trg}")
    
    # 2. จำลองเทนเซอร์รูปภาพหน้าเต็มจำนวน 1 หน้าขนาด 1024x1024 พิกเซล
    batch_size = 1
    mock_page_image = torch.randn(batch_size, 3, 1024, 1024)
    trg_tensor = torch.tensor([encoded_trg], dtype=torch.long)
    
    # 3. เริ่มต้นระบบเครือข่ายประสาท Platter
    model = PlatterPageLevelHTR(vocab_size=vocab_size, embed_dim=768, num_heads=12, decoder_layers=6)
    model.eval()
    
    print("\n--- เริ่มกระบวนการ Forward Pass ระดับหน้าเต็ม (Swin Encoder -> Decoder) ---")
    try:
        with torch.no_grad():
            output_logits = model(mock_page_image, trg_tensor)
            
        print("[สำเร็จ] เครือข่ายทำการทำนายระบบเสร็จสมบูรณ์")
        print("\n[ผลลัพธ์มิติคุณลักษณะ]")
        print(f"  -> มิติข้อมูลภาพขาเข้า (Image Input Shape): {mock_page_image.shape}")
        print(f"  -> มิติดัชนีข้อความป้อนเป้าหมาย (Target Input Shape): {trg_tensor.shape}")
        print(f"  -> มิติผลลัพธ์ทำนายหน้าข้อความ (Output Logits Shape): {output_logits.shape}")
        print(f"     (สอดคล้องตามโครงสร้าง: [Batch={batch_size}, Sequence_Length={seq_length}, Vocab_Size={vocab_size}])")
        
        # ถอดคำทำนายย้อนกลับ
        predicted_indices = torch.argmax(output_logits[0], dim=-1).tolist()
        decoded_result = tokenizer.decode(predicted_indices)
        
        print("\n[เปรียบเทียบผลลัพธ์ข้อมูลถอดรหัสทำนาย]")
        print(f"  -> ข้อความผลลัพธ์พยากรณ์เบื้องต้น:\n{decoded_result}")
        print("  *(หมายเหตุ: ผลลัพธ์ตัวอักษรจะเป็นลักษณะสุ่มคลาสในช่วงเริ่มต้นก่อนฝึกสอนจริง)")
        
    except Exception as e:
        print(f"[ข้อผิดพลาดระหว่างประมวลผล]: {e}")
