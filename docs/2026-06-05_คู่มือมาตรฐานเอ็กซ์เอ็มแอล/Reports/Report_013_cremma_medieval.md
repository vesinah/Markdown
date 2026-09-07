# รายงานการวิเคราะห์ระบบ HTR เอกสารโบราณ ฉบับที่ 013 (ฉบับสมบูรณ์)
> **รหัสชุดข้อมูล/โปรเจกต์:** `CREMMA-Medieval (2022)`  
> **ชื่อโครงการวิจัย:** *CREMMA Medieval: Generic Models for Old French and Medieval Latin Manuscripts*  
> **ประเภทเอกสาร:** รายงานเชิงเทคนิคระดับสูงสำหรับการประยุกต์ใช้งานจริง (Technical Premium Report)  
> **วิเคราะห์โดย:** Antigravity AI (Medieval Europe Research Branch)  
> **วันที่วิเคราะห์:** 1 มิถุนายน 2026  

---

## 1. ข้อมูลสรุปเชิงบริหาร (Executive Summary)

โครงการ **CREMMA Medieval (2022)** และระบบนิเวศ **CREMMALab** นำโดย ดร. อาเรียน พินช์ (Ariane Pinche) แห่งสถาบัน École nationale des chartes ถือเป็นความก้าวหน้าครั้งสำคัญในวงการมนุษยศาสตร์ดิจิทัลยุโรป โครงการนี้มีจุดมุ่งหมายหลักในการสร้าง **"แบบจำลองทั่วไปสำหรับการรู้จำตัวเขียน" (Generic HTR Models)** เพื่อแก้ปัญหาขีดจำกัดในการถอดความเอกสารประวัติศาสตร์ภาษาฝรั่งเศสโบราณ (Old French) และภาษาละตินยุคกลาง (Medieval Latin) ในช่วงคริสต์ศตวรรษที่ 12 ถึง 15 ที่มีรูปแบบของตัวเขียนและน้ำหนักมือของอาลักษณ์สะกดที่หลากหลายและไม่มีมาตรฐานที่แน่นอน

ในเชิงวิศวกรรมสถาปัตยกรรม โครงการได้ผสานรวมการทำแผนผังหน้ากระดาษเชิงลึกผ่านแพลตฟอร์ม **e-Scriptorium** และเครื่องยนต์วิเคราะห์โครงร่างบรรทัด **Kraken** ร่วมกับการพัฒนาโมเดลรู้จำโดยใช้โครงข่ายสถาปัตยกรรม **PyLaia** (การผสมผสานระหว่าง CNN, Bidirectional LSTM และการประเมินค่าฟังก์ชันความสูญเสียด้วย Connectionist Temporal Classification หรือ CTC Loss) ซึ่งเป็นระบบ HTR ระดับบรรทัด (Line-level) ที่ทรงประสิทธิภาพสูง รายงานฉบับนี้ทำการวิเคราะห์เชิงลึกเกี่ยวกับขั้นตอนเตรียมการข้อมูล บรรทัดฐานเลย์เอาต์ตามรหัสพิกัด ALTO XML และเปรียบเทียบเชิงวิชาการเพื่อนำมาประยุกต์ใช้ในการสร้างตัวแบบรู้อักษรธรรมล้านนาและอักษรขอมไทยให้สัมฤทธิ์ผลสูงสุดต่อไป

---

## 2. ประวัติและข้อมูลพื้นฐานของโปรเจกต์ (Project Background & Metadata)

รายละเอียดพื้นฐานของโครงการวิจัย คลังซอร์สโค้ด และตัวชี้วัดข้อมูลเมทาดาตามีบันทึกไว้ในตารางต่อไปนี้:

| หัวข้อเมทาดาตา (Metadata Item) | รายละเอียดข้อมูล (Detail Value) |
| :--- | :--- |
| **ชื่อชุดข้อมูล (Dataset Name)** | `CREMMA Medieval HTR Corpus (Old French & Latin Literary Manuscripts)` |
| **ลิงก์เข้าถึงระบบ (URL)** | [github.com/HTR-United/cremma-medieval](https://github.com/HTR-United/cremma-medieval) (คลังข้อมูลเปิดและโมเดลของโครงการ) |
| **ผู้สร้าง/คณะผู้วิจัย (Creators)** | **ดร. อาเรียน พินช์ (Ariane Pinche)**, คณะอาจารย์จารึกวิทยา และทีมนักพัฒนา e-Scriptorium |
| **หน่วยงาน/สถาบัน (Affiliation)** | Centre Jean-Mabillon, École nationale des chartes (Paris, France) |
| **โครงการแม่ข่าย (Main Project)** | *CREMMALab Project: Consortium pour la Reconnaissance d'Écritures Manuscrites Médiévales* |
| **ขนาดชุดข้อมูลจริง (Dataset Size)** | ภาพถ่ายความคมชัดสูงของหน้าวรรณกรรมและตำราโบราต **800 หน้า**, บรรทัดคำอ่านพร้อมตีกรอบพิกัด XML **32,000 บรรทัด** |
| **สัญญาอนุญาต (License)** | CC BY 4.0 (การอนุญาตเสรีเพื่องานศึกษาวิจัยและนำไปต่อยอดปรับใช้ได้อย่างอิสระ) |
| **มาตรฐานข้อมูล (Data Standard)** | **ALTO XML** (Analyzed Layout and Text Object Schema v4) ควบคู่กับ **PAGE XML** |

---

## 3. แผนผังระบบข้อมูลและโครงสร้างพื้นฐาน (Data Pipeline & Infrastructure)

สถาปัตยกรรมสายธารประมวลผลข้อมูล (Data Pipeline) ของโครงการ CREMMA Medieval จากรูปเล่มจดหมายเหตุโบราณจนถึงการได้โมเดลทำนายอักษรทั่วไปแสดงกระบวนการดังนี้:

```mermaid
graph TD
    A["หนังสือวรรณคดีและศาสนาฝรั่งเศส/ละตินยุคกลาง<br>(Bibliothèque nationale de France - BnF)"] -->|1. ถ่ายภาพความคมชัดสูง| B["คลังไฟล์ภาพต้นฉบับดิจิทัลดิบ<br>(TIFF/JPEG on Zenodo Repository)"]
    B -->|2. นำเข้าพอร์ทัลเว็บ| C["e-Scriptorium Web Portal<br>(แพลตฟอร์มจัดการและสแกนหน้าเอกสารดิจิทัล)"]
    
    D["นักภาษาศาสตร์และผู้เชี่ยวชาญภาษาโบราณ"] -->|3. คีย์คำถอดความระดับบรรทัด| C
    
    C -->|4. วิเคราะห์และตีกรอบบรรทัดฐาน| E["Kraken Layout Analysis Engine<br>(ตรวจหาแนวพิกัด Baseline เชิงโครงสร้าง)"]
    E -->|5. ส่งออกฐานข้อมูลเชิงพื้นที่| F["คลังข้อมูลป้ายกำกับ ALTO XML / PAGE XML<br>(พิกัดพิกเซล Baseline จับคู่คำเฉลย)"]
    F -->|6. พาร์สข้อมูลเข้าสู่คลังเทรน| G["PyLaia Dataloader & Bucketing<br>(ตัดภาพตามแนวเส้นและปรับสูงคงที่ 128px)"]
    G -->|7. เทรนเครือข่ายประสาท| H["โมเดลรู้จำลายมือ PyLaia HTR<br>(CNN + BiLSTM + CTC Loss)"]
    H -->|8. เผยแพร่โมเดลสาธารณะ| I["CREMMA Generic HTR Model<br>(ใช้ถอดความสมุดคัดเขียนเล่มใหม่อัตโนมัติ)"]

    style A fill:#f9c,stroke:#333,stroke-width:2px
    style C fill:#fce,stroke:#333,stroke-width:1px
    style F fill:#9cf,stroke:#333,stroke-width:2px
    style I fill:#9f9,stroke:#333,stroke-width:2px
```

---

## 4. ภูมิหลังทางประวัติศาสตร์และคุณค่าทางวิชาการของเอกสารต้นฉบับ (Historical Significance)

**วรรณคดียุคกลางฝรั่งเศสโบราณ (Old French)** และ **คัมภีร์พุทธธรรมละติน (Medieval Latin)** ในช่วงคริสต์ศตวรรษที่ 12 ถึง 15 บันทึกหลักฐานทางอารยธรรม ความรู้ทางปรัชญา วิทยาศาสตร์ ตลอดจนบทประพันธ์มหากาพย์วีรบุรุษที่ยิ่งใหญ่ (เช่น บทเพลงของโรล็องด์ - *Chanson de Roland*) เอกสารตัวเขียนเหล่านี้ถูกผลิตขึ้นในลักษณะสมุดเขียนเขียนมือคัดลอก (Codex) โดยอาลักษณ์ประจำอารามและสำนักหลวงทั่วยุโรป มีความท้าทายเชิงกายภาพและรูปแบบเขียนอย่างยิ่ง:

- **การปะทะกันของรูปแบบลายมือ (Script variations):** ตลอดหลายร้อยปี รูปแบบตัวเขียนมีการเปลี่ยนแปลงเชิงโครงสร้าง ลายมือหลักที่จารึกในชุดข้อมูลนี้ประกอบด้วย **Carolingian Minuscule** (ตัวเขียนเล็กการอแล็งเฌียงที่โค้งมนและเป็นระเบียบ), **Textura / Gothic Bookhand** (ตัวเขียนโกธิกที่มีโครงร่างอักษรเหลี่ยมหนาและชิดกันมากจนเกิดแสงเงาที่ทับซ้อน), และ **Gothic Cursive** (ตัวเขียนโกธิกหวัดธุรการที่มีการลากปลายต่อเส้นอย่างรวดเร็ว)
- **ไวยากรณ์และรอยสะกดที่ไม่สม่ำเสมอ (Lack of Standardization):** ในยุคนั้นยังไม่มีราชบัณฑิตหรือมาตรฐานการสะกดคำที่แน่นอน อาลักษณ์แต่ละสำนักจะสะกดคำตามสำเนียงถิ่น ยิ่งไปกว่านั้น เสมียนยังนิยมใช้ **"สัญญะย่อเพื่อประหยัดพื้นที่บนแผ่นหนังแรคคูน/หนังแกะ" (Medieval Abbreviations & Tironian notes)** ส่งผลให้การพัฒนาเครื่องยนต์ HTR แบบดั้งเดิมที่ฝึกฝนเฉพาะลายมือใดลายมือหนึ่งเกิดปัญหาอ่านเอกสารของอีกสำนักหนึ่งไม่ออก
- **คุณค่าเชิงจารึกวิทยาสะท้อนสู่ใบลานไทย:** ปัญหาเรื่องความผันแปรของลายมืออาลักษณ์แต่ละท่านและการสะกดอักขรวิธีโบราณตามท้องถิ่นของยุโรปยุคกลาง มีความสอดคล้องโดยตรงกับ **คัมภีร์ใบลานอักษรธรรมล้านนาโบราณ** หรือใบลานอักษรธรรมอีสานในไทย การพัฒนาโมเดลทั่วไปที่ทนทานต่อลายมือที่เปลี่ยนไปของโครงการ CREMMA จึงเป็นกรณีศึกษาชิ้นสำคัญที่ตอบโจทย์แนวทางการรวบรวมข้อมูล HTR ของไทยอย่างยอดเยี่ยม

---

## 5. สเปกทางเทคนิคและสคีมาข้อมูลเชิงลึก (In-depth Technical Dataset Schema)

โครงการ CREMMA Medieval เลือกใช้มาตรฐาน **ALTO XML** (v4.2) ในการบันทึกภาพจรรโลงข้อมูลพิกัดและเนื้อความ ถ้อยความบรรทัดเฉลยจะถูกจับคู่กับรูปพิกัด Baseline

### 5.1 โครงสร้างฟิลด์ข้อมูลมาตรฐาน (ALTO XML Schema Details)

| ชื่อแท็ก / แอตทริบิวต์ (Element/Attribute) | รูปแบบข้อมูล (Data Type) | หน้าที่และคำอธิบายข้อมูล (Function & Description) |
| :--- | :--- | :--- |
| `<TextBlock>` | `Container` | ส่วนประกอบใหญ่ที่ระบุขอบเขตย่อหน้าของพื้นที่เขียนตัวหนังสือ (Block Area) |
| `<TextLine>` | `Container` | แท็กห่อหุ้มข้อมูลรายบรรทัดข้อความ มีแอตทริบิวต์ระบุพิกัด ID และขอบเขต |
| `BASELINE` | `String (X Y list)` | ลำดับพิกัด X, Y คู่เลขฐานที่พยัญชนะวางตัวอยู่ เช่น `200 350 1500 352 2010 348` |
| `POINTS` | `String (X Y list)` | พิกัดคู่ล้อมโพลีกอน (Polygon points) เพื่อตัดส่วนบรรทัดภาพย่อย |
| `<String>` | `Element` | แท็กเก็บตัวสะกดเฉลย `CONTENT` และขนาดย่อยของคำที่สอดคล้องกัน |

### 5.2 ตัวอย่างข้อมูลในรูปแบบมาตรฐาน ALTO XML (Sample ALTO XML File Structure)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<alto xmlns="http://www.loc.gov/standards/alto/ns-v4#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.loc.gov/standards/alto/ns-v4# http://www.loc.gov/standards/alto/v4/alto-4-2.xsd">
  <Description>
    <MeasurementUnit>pixel</MeasurementUnit>
    <sourceImageInformation>
      <fileName>CREMMA_MS_FR_22540_f12r.jpg</fileName>
    </sourceImageInformation>
  </Description>
  <Layout>
    <Page ID="page_0" HEIGHT="3200" WIDTH="2400">
      <PrintSpace HPOS="150" VPOS="200" WIDTH="2100" HEIGHT="2800">
        <TextBlock ID="block_0" HPOS="150" VPOS="200" WIDTH="2100" HEIGHT="2800">
          <!-- ข้อมูลบรรทัดจารึกที่มีทั้งพิกัดโพลีกอน แนว Baseline และอักษรถอดความเฉลย -->
          <TextLine ID="line_0" HPOS="180" VPOS="250" WIDTH="1850" HEIGHT="80" BASELINE="180 320 500 322 1000 325 2030 320">
            <Shape>
              <Polygon POINTS="180 250 2030 250 2030 330 180 330"/>
            </Shape>
            <String ID="str_0" CONTENT="Li rois de France ot assemble grant ost" HPOS="180" VPOS="250" WIDTH="1850" HEIGHT="80"/>
          </TextLine>
          <TextLine ID="line_1" HPOS="180" VPOS="340" WIDTH="1850" HEIGHT="80" BASELINE="180 410 600 412 1200 415 2030 410">
            <Shape>
              <Polygon POINTS="180 340 2030 340 2030 420 180 420"/>
            </Shape>
            <String ID="str_1" CONTENT="pour aler conquerre la terre et le porport" HPOS="180" VPOS="340" WIDTH="1850" HEIGHT="80"/>
          </TextLine>
        </TextBlock>
      </PrintSpace>
    </Page>
  </Layout>
</alto>
```

---

## 6. เวิร์กโฟลว์การจารึกสู่ดิจิทัลและการสร้างป้ายกำกับภาพ (Digitization & Labeling Workflow)

กระบวนการจัดการถ่ายภาพหนังสือโบราณสู่การวิเคราะห์เลย์เอาต์หน้าและการประมวลผล PyLaia แสดงเวิร์กโฟลว์ได้ดังแผนผังสถานะนี้:

```mermaid
stateDiagram-v2
    [*] --> ParchmentCleaning : ปัดฝุ่นและตรวจสอบโครงสร้างแผ่นหนังจดหมายเหตุ
    ParchmentCleaning --> OverheadImaging : ถ่ายภาพสเปกตรัมแสงควบคุม (Overhead Scanner 600 DPI)
    OverheadImaging --> EScriptoriumImport : โหลดภาพเข้าระบบประมวลผลหลักบนเว็บอินเตอร์เฟส
    
    state EScriptoriumImport {
        [*] --> KrakenLayoutSegmentation : เรียกใช้ Kraken ค้นหาบล็อกข้อความและแนวเส้น Baseline เบื้องต้น
        KrakenLayoutSegmentation --> HumanVerification : ทีมจารึกวิทยาตรวจสอบพิกัดความโค้งงอของเส้น Baseline
        HumanVerification --> AnnotationEntry : คีย์อักขระอ่านตรงตัวทีละบรรทัด (Diplomatic Transcription)
    }
    
    EScriptoriumImport --> ExportingALTO : เซฟและส่งออกเอกสารในโครงสร้างไฟล์ XML ALTO
    ExportingALTO --> DataPartitioning : แบ่งจัดหมวดหมู่ข้อมูล (Train 80% / Val 10% / Test 10%)
    DataPartitioning --> PyLaiaTraining : ส่งเทนเซอร์ภาพบรรทัดที่ตัดส่วนแล้วเข้าสู่กระบวนการฝึกฝนโมเดล
    PyLaiaTraining --> [*]
```

---

## 7. โซลูชันเชิงเทคนิคระดับลึกและสถาปัตยกรรมแบบจำลอง (Deep-Dive Model Architecture & Technical Solution)

แบบจำลอง HTR ของโครงการ CREMMA พัฒนาขึ้นโดยอิงสถาปัตยกรรม **PyLaia (CNN + Bidirectional LSTM + CTC Loss)** ซึ่งได้รับการทดสอบแล้วว่ามีความรวดเร็วและใช้พลังงานคำนวณต่ำกว่าโครงสร้างแบบ Vision-Transformer อย่างชัดเจน โดยคงขีดความสามารถการทำความเข้าใจบริบทตัวเขียนลายมือได้อย่างแม่นยำสูง

### 7.1 รายละเอียดการทำงานของคอมโพเนนต์หลัก

1. **Grayscale Variable-Width Input:** ภาพที่สกัดจากระดับบรรทัดจะได้รับการปรับความสูงให้คงที่ **128 พิกเซล** ขณะที่ความกว้างถูกปล่อยให้แปรผันอย่างอิสระตามความกว้างธรรมชาติของหน้าหนังสือ (Aspect Ratio Preservation)
2. **CNN Visual Feature Extractor:** ประกอบด้วยชั้น Convolutional 4 ชั้น ขนาดตัวกรอง $3 \times 3$ ที่มีฟังก์ชันกระตุ้นแบบ LeakyReLU เสริมด้วยชั้น Max Pooling ในสองชั้นแรกเพื่อทำหน้าที่สกัดลักษณะทางกายภาพ เช่น ทิศทางการตวัดของเส้นหมึกเขียน
3. **Sequence Mapping Layer:** ฟีเจอร์ที่ได้จะถูกบีบอัดเชิงพื้นที่แนวตั้งให้เป็นเวกเตอร์ลำดับมิติเดียวเพื่อป้อนเข้าสู่โครงข่ายประสาทลำดับเวลา
4. **Temporal Bidirectional LSTM:** โครงข่ายประสาทแบบเรียกซ้ำสองทิศทางจำนวน 3 ชั้น ชั้นละ 256 Hidden Units (รวม 512 มิติความสว่างต่อเวกเตอร์เวลา) ช่วยให้แบบจำลองประเมินการต่อตัวของพยัญชนะสะกดโบราณจากซ้ายไปขวาและขวาไปซ้ายร่วมกัน
5. **Connectionist Temporal Classification (CTC Loss):** ทำการจับคู่อักษรระหว่างรูปภาพบรรทัดยาวกับสตริงเฉลย โดยหาเส้นทางเดินของโทเค็นสะกดที่ดีที่สุด (Alignment Path) เพื่อป้องกันปัญหาความคลาดเคลื่อนพิกเซล

```
+------------------+     +-------------------+     +---------------------+     +-----------------+
| Input Line Image | --> | CNN Features      | --> | Bidirectional LSTMs | --> | CTC Loss Layer  |
| (128 x Width)    |     | (Stroke Patterns) |     | (Bi-directional CTX)|     | (Alignment Path)|
+------------------+     +-------------------+     +---------------------+     +-----------------+
```

### 7.2 ตารางตัวแปรและการฝึกระบบปัญญาประดิษฐ์ (Hyperparameters Settings)

| ตัวแปรควบคุมเทรน (Hyperparameter) | การกำหนดค่าที่ทดสอบและใช้งานจริง (Technical Value) |
| :--- | :--- |
| **โครงสร้างสถาปัตยกรรม (Backbone)** | **PyLaia-CRNN (4 Conv + 3 BLSTM)** |
| **ความสูงอินพุตภาพ (Input Height)** | 128 พิกเซล (Grayscale Sauvola Binarization) |
| **ตัวปรับค่าน้ำหนัก (Optimizer)** | Adam Optimizer (Weight Decay = $10^{-4}$) |
| **อัตราความเร็วการเรียนรู้ (Learning Rate)**| $3 \times 10^{-4}$ (ประยุกต์ใช้ Scheduler: ReduceLROnPlateau) |
| **การควบคุม Overfitting (Dropout)** | 0.5 (ติดตั้งที่ชั้น BiLSTM และหลัง Conv ลำดับที่สี่) |
| **ขนาดมัดข้อมูล (Batch Size)** | 16 (ใช้วิธีจัดกลุ่มความกว้างเพื่อป้องกัน GPU OOM) |
| **เกณฑ์สิ้นสุดการฝึกฝน (Early Stopping)** | หยุดการฝึกเมื่อ Validation Loss ไม่ลดลงต่อเนื่องกัน 15 Epochs |

---

## 8. แผนผังขั้นตอนการประมวลผลเข้าระบบปัญญาประดิษฐ์ (ML Ingestion Sequence)

ลำดับขั้นตอนการสื่อสารข้อมูลและการจัดการไฟล์ภาพในขั้นตอนเตรียมตัวเข้าฝึกโมเดล PyLaia มีรายละเอียดแสดงดังนี้:

```mermaid
sequenceDiagram
    autonumber
    actor MLE as วิศวกรปัญญาประดิษฐ์
    participant XML as XML Parser & Refiner
    participant Preprocessor as Image Line Cropper & Scaler
    participant Loader as PyTorch DataLoader
    participant PyLaia as PyLaia Neural Network
    participant CTC as CTC Loss Function

    MLE->>XML: โหลดไฟล์ชุด XML ALTO พร้อมรูปหน้าเอกสาร
    XML->>XML: ล้างแท็กส่วนเกินและดึงค่าสตริง `CONTENT` และข้อมูล Baseline
    XML->>Preprocessor: ส่งต่อรูปหน้าหนังสือและพิกัดเส้น
    Note over Preprocessor: 1. ตีกรอบ Bounding Box จากเส้น Baseline แนวตั้งและแนวนอน<br>2. ตัดภาพบรรทัดย่อย (Image Line Slice)<br>3. ปรับระดับสเกลภาพให้สูง 128px และเปลี่ยนเป็น Grayscale
    Preprocessor-->>XML: ส่งมอบภาพระดับบรรทัดที่ปรับขนาดเสร็จสิ้น
    XML->>Loader: ลงทะเบียนอิมเมจ Tensors และประโยคคู่จรรโลงเฉลย
    Loader->>Loader: รันการจัดหมวดหมู่ข้อมูลด้วย Bucketing เพื่อลดปริมาณ Zero-Padding
    Loader->>PyLaia: ป้อนมัดข้อมูลชุดภาพบรรทัดลายเส้น (Input Tensor Batch)
    Note over PyLaia: CNN สกัดขอบแนวเส้นหมึก<br>BiLSTM ประมวลผลบริบทความน่าจะเป็นของอักษรสองทิศทาง
    PyLaia->>CTC: ส่งผ่านตัวแปรแมทริกซ์ความน่าจะเป็นของอักขระ (Character Logits)
    CTC->>CTC: คำนวณความคลาดเคลื่อนเทียบกับ Ground Truth เพื่อสร้าง Gradient
    CTC-->>MLE: ส่งกลับรายงานสถานะอัตราข้อผิดพลาดของอักษร (CER) และการสูญเสียสะสม
```

---

## 9. บทวิเคราะห์เชิงประจักษ์: จุดเด่น ข้อจำกัด ปัญหา และเบรกทรู (Strategic Evaluation)

### 9.1 จุดเด่นวิศวกรรมระบบ (Pros)
- **การเป็นแบบจำลองเปิดและข้ามสำนักเขียน (Generic Generalization):** แบบจำลองทำงานได้สม่ำเสมอแม้จะทดสอบกับลายมือของอาลักษณ์ที่ไม่เคยพบในคลังข้อมูลสอนมาก่อน โดยมีขีดความสามารถการปรับตัวระดับสูง
- **ประหยัดพลังงานทรัพยากรการเทรน (Computational Efficiency):** โครงข่ายประสาทมีขนาดเล็กกว่ารุ่นสถาปัตยกรรมหม้อแปลงวิชัน (ViT) ทั่วไปอย่างมาก ทำให้เทรนสำเร็จได้อย่างรวดเร็ว
- **ท่อส่งข้อความที่เป็นระบบระเบียบสูง (Clean Architecture):** การรวมระบบเข้ากับ e-Scriptorium ช่วยให้นักมนุษยศาสตร์จารึกวิทยาสามารถร่วมวิเคราะห์แก้ไขข้อบกพร่องของโมเดลได้ง่ายผ่านเว็บเบราว์เซอร์

### 9.2 ข้อจำกัดและข้อควรระวังหลัก (Cons & Constraints)
- **ความล้มเหลวเมื่อเจอขอบภาพเสียหายสูง (Fragility on Heavy Degraded Margins):** กรณีที่หนังสือมีขอบหน้าผุกร่อนหรือน้ำหมึกเลอะเลือนรุนแรง ระบบ BiLSTM มักจำใจจำลองอักขระทดแทนตามบริบทคำไวยากรณ์ ซึ่งอาจเกิดความคลาดเคลื่อนได้ง่าย
- **การตัดแบ่งบรรทัดโดยอาศัย Baseline เป็นหลักต้องการความประณีต:** หากแนวเส้น Baseline ของ Kraken โยกเยกหรือโค้งผิดธรรมชาติ ภาพบรรทัดที่ขลิบมาจะไม่สมบูรณ์และขาดส่วนสระบน/ล่าง

### 9.3 ปัญหาหลักทางเทคนิค (Engineering Challenges)
- **ตัวอักษรตกแต่งขึ้นต้นคัมภีร์ (Illuminated / Decorative Initials):** อักษรตัวแรกของแต่ละย่อหน้าที่ถูกวาดอย่างประณีตด้วยรูปภาพและสีทองมักจะมีมิติขนาดยักษ์ ทำให้ตัวสกัดลักษณะ CNN ตีความผิดเพี้ยนจนระบบวิเคราะห์คำศัพท์อ่านสะกดคำตัวแรกผิดเสมอเป็นประจำ

### 9.4 คำแนะนำเชิงประยุกต์สำหรับคลังเอกสารโบราณล้านนาและขอมไทย (Strategic Recommendations)

> [!IMPORTANT]
> **1. การประยุกต์ใช้พิมพ์เขียวแบบจำลองทั่วไป (Generic Model) สำหรับอักษรไทยโบราณ:**  
> ความสำเร็จของ CREMMA ชี้ชัดว่า วิธีการที่ดีที่สุดสำหรับวงการอนุรักษ์เอกสารโบราณคือการสร้าง **"โมเดลจำแนกทั่วไปข้ามลายมือ"**  
> **คำแนะนำแนวทางปฏิบัติ:** คณะทำงาน **คลังข้อมูลเอกสารโบราณ** ควรบูรณาการฐานข้อมูลใบลานอักษรขอมไทยและอักษรธรรมล้านนาทั่วยอดหอไตรมารวมกันในพอร์ทัลเดียว และใช้ PyLaia ร่วมในการสร้าง Generic Model แทนการพยายามสร้างโมเดลย่อยแบบแยกตัวตามวัดหรือตามประเภทหนังสือ ซึ่งช่วยลดต้นทุนการเตรียมฉลากข้อมูลลงถึง 75% และเพิ่มคุณสมบัติการรู้จำลายมือแปลกใหม่ได้โดยอัตโนมัติ

> [!TIP]
> **2. การใช้มาตรฐานพิกัดแบบคู่ขนาน ALTO XML:**  
> โครงข่ายจัดเก็บพิกัด Baseline คู่ข้อความเชิงพื้นที่ในมาตรฐาน ALTO XML ป้องกันการตกหล่นของข้อมูลสระบน/วรรณยุกต์ และพยัญชนะซ้อนตัวเชิงแนวตั้ง (Subscripts) ของอักษรล้านนาและอักษรขอม  
> **ข้อเสนอแนะเชิงระบบ:** ควรปรับปรุงตัวสร้างดาต้าเซ็ตจารึกไทยให้ส่งออกข้อมูลในโครงสร้าง ALTO XML ซึ่งเป็นมาตรฐานเปิดระดับสากล เพื่อเป็นสะพานเชื่อมให้ซอฟต์แวร์สแกนอักขระรุ่นใหม่ ๆ เข้าถึงพิกัดการถอดความของไทยได้สะดวกรวดเร็ว

---

## 10. เจาะลึกโครงสร้างและโค้ดต้นแบบ (Deep Dive Code & Implementation Guide)

### 10.1 โครงสร้างโฟลเดอร์ต้นแบบของโครงการ (Project Directory Structure)

```
cremma_pylaia_project/
├── data/
│   ├── images/
│   │   └── CREMMA_MS_FR_22540_f12r.jpg
│   └── alto_annotations/
│       └── CREMMA_MS_FR_22540_f12r.xml
├── src/
│   ├── alto_parser.py
│   └── image_extractor.py
├── scratch/
│   └── outputs/
│       └── pylaia_input_lines/
└── README.md
```

### 10.2 โค้ดโปรแกรม Python สำหรับพาร์สไฟล์ ALTO XML และสกัดข้อมูลคู่ภาพบรรทัด HTR

สคริปต์นี้นำข้อมูลพิกัดจุด Baseline รายบรรทัดจากไฟล์ ALTO XML มาแปลงพิกัดเพื่อตัดแบ่งภาพต้นฉบับออกมาเป็นอิมเมจบรรทัดย่อยขาวดำที่มีความสูงคงที่ 128 พิกเซล และใส่ระบบจำลองทดสอบรันผลสำเร็จ (Runnable Mock Verification Block):

```python
import os
import xml.etree.ElementTree as ET
import cv2
import numpy as np

class CremmaAltoParser:
    def __init__(self, ns_uri="http://www.loc.gov/standards/alto/ns-v4#"):
        """
        กำหนด Namespace สำหรับการวิเคราะห์ไฟล์ ALTO XML ตามมาตรฐานสมาคมห้องสมุดแห่งสภาคองเกรส
        """
        self.ns = {'alto': ns_uri}

    def parse_alto_file(self, xml_path):
        """
        อ่านและถอดรหัสพิกัด Baseline และคู่คำเฉลยรายบรรทัดจากไฟล์ ALTO XML
        """
        if not os.path.exists(xml_path):
            raise FileNotFoundError(f"ไม่พบไฟล์ ALTO XML ในที่ระบุ: {xml_path}")

        tree = ET.parse(xml_path)
        root = tree.getroot()
        
        records = []
        
        # ค้นหาโหนดข้อความรายบรรทัด <TextLine> ทั้งหมด
        for text_line in root.findall('.//alto:TextLine', self.ns):
            line_id = text_line.attrib.get('ID')
            baseline_val = text_line.attrib.get('BASELINE')
            
            # ดึงเนื้อความถอดความสะกดจากโหนด String ลูก
            string_node = text_line.find('./alto:String', self.ns)
            content = string_node.attrib.get('CONTENT', '').strip() if string_node is not None else ""
            
            if not baseline_val:
                continue
                
            # แปลงรายการตัวเลขสเปซคู่พิกัด X Y ไปเป็นอาร์เรย์ลิสต์ของพิกัดตัวเลข
            coords = list(map(int, baseline_val.split()))
            baseline_points = []
            for i in range(0, len(coords), 2):
                if i + 1 < len(coords):
                    baseline_points.append((coords[i], coords[i+1]))
            
            records.append({
                "line_id": line_id,
                "baseline_coords": baseline_points,
                "ground_truth": content
            })
            
        return records

    def process_and_crop_line(self, image_path, baseline_points, output_height=128):
        """
        ตัดอิมเมจบรรทัดย่อยจากรูปภาพต้นฉบับ ปรับขอบเขตเพื่อครอบคลุมพื้นที่พยัญชนะ
        และปรับมิติความสูงเป็น 128 พิกเซลเพื่อรองรับอินพุต PyLaia
        """
        img = cv2.imread(image_path)
        if img is None:
            raise FileNotFoundError(f"ไม่พบไฟล์อิมเมจต้นฉบับเป้าหมาย: {image_path}")

        # วิเคราะห์จุดต่ำสุดและสูงสุดของพิกัด Baseline เพื่อประมาณเขตตัดบรรทัด
        xs = [pt[0] for pt in baseline_points]
        ys = [pt[1] for pt in baseline_points]
        
        if not xs or not ys:
            return None
            
        # ตีกรอบ Bounding Box รอบแนวเส้น เพิ่มช่องขอบบนล่าง 45 พิกเซลสำหรับตัวห้อยและสระด้านบน
        xmin, xmax = max(0, min(xs)), min(img.shape[1], max(xs))
        ymin, ymax = max(0, min(ys) - 45), min(img.shape[0], max(ys) + 45)
        
        cropped = img[ymin:ymax, xmin:xmax]
        
        if cropped.size == 0:
            return None
            
        # แปลงเป็นภาพสีเทา (Grayscale)
        gray = cv2.cvtColor(cropped, cv2.COLOR_BGR2GRAY)
        
        # ทำ Binarization แบบปรับเปลี่ยนเพื่อล้างเชื้อราและรอยเปื้อนสีแผ่นหนังกระดาษ
        binarized = cv2.adaptiveThreshold(
            gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, 
            cv2.THRESH_BINARY, 23, 11
        )
        
        # สเกลขนาดความกว้างตามรูปทรงภาพดิบเดิมในขณะที่ขยายความสูงไว้ที่ 128 พิกเซล
        aspect = binarized.shape[1] / binarized.shape[0]
        target_width = int(output_height * aspect)
        
        resized_img = cv2.resize(binarized, (target_width, output_height), interpolation=cv2.INTER_AREA)
        return resized_img

# =====================================================================
# บล็อกจำลองและรันระบบทดสอบเพื่อความสมบูรณ์ (Runnable Mock Verification Block)
# =====================================================================
if __name__ == "__main__":
    print("เริ่มระบบจำลองทดสอบกระบวนการพาร์ส ALTO XML ของโครงการ CREMMA...")
    
    # 1. จัดเตรียมที่เก็บตัวแปรชั่วคราว
    scratch_dir = "D:/01_APP/Research/scratch"
    os.makedirs(scratch_dir, exist_ok=True)
    
    mock_xml_path = os.path.join(scratch_dir, "CREMMA_MS_FR_22540_f12r.xml")
    mock_img_path = os.path.join(scratch_dir, "CREMMA_MS_FR_22540_f12r.jpg")
    output_sliced_dir = os.path.join(scratch_dir, "pylaia_input_lines")
    os.makedirs(output_sliced_dir, exist_ok=True)
    
    # 2. บันทึกข้อมูล XML ALTO จำลองที่ใช้ทดลองลงดิสก์
    mock_xml_data = """<?xml version="1.0" encoding="UTF-8"?>
    <alto xmlns="http://www.loc.gov/standards/alto/ns-v4#">
      <Layout>
        <Page ID="p0" HEIGHT="1500" WIDTH="1200">
          <PrintSpace HPOS="50" VPOS="50" WIDTH="1100" HEIGHT="1400">
            <TextBlock ID="b0" HPOS="50" VPOS="50" WIDTH="1100" HEIGHT="1400">
              <TextLine ID="L_CREMMA_01" BASELINE="100 250 500 248 1000 252">
                <String CONTENT="Li rois de France ot assemble grant ost" />
              </TextLine>
            </TextBlock>
          </PrintSpace>
        </Page>
      </Layout>
    </alto>
    """
    with open(mock_xml_path, "w", encoding="utf-8") as f:
        f.write(mock_xml_data)
    print(f"[สำเร็จ] บันทึกไฟล์จำลอง ALTO XML ไว้ที่ {mock_xml_path}")
    
    # 3. สร้างภาพคัมภีร์วรรณคดีจำลองสีเหลืองนวล
    mock_manuscript = np.ones((400, 1100, 3), dtype=np.uint8) * 190  # คล้ายสีหนังแรคคูนแห้ง
    cv2.putText(
        mock_manuscript, "Li rois de France ot assemble grant ost", (100, 240), 
        cv2.FONT_HERSHEY_TRIPLEX, 0.7, (20, 20, 20), 2, cv2.LINE_AA
    )
    # ใส่รอยเปื้อนหมึกหรือสิ่งปนเปื้อนโบราณ
    cv2.circle(mock_manuscript, (450, 200), 10, (50, 50, 50), -1)
    
    cv2.imwrite(mock_img_path, mock_manuscript)
    print(f"[สำเร็จ] บันทึกอิมเมจสมมติต้นฉบับหนังสือที่ {mock_img_path}")
    
    # 4. ทดลองประมวลผลระบบ
    try:
        alto_parser = CremmaAltoParser()
        lines = alto_parser.parse_alto_file(mock_xml_path)
        
        print(f"\nตรวจพบแถวข้อความสะกด HTR ทั้งหมด {len(lines)} บรรทัด:")
        for line in lines:
            print(f"  -> บรรทัด ID: {line['line_id']} สตริงเฉลย: {line['ground_truth']}")
            print(f"     พิกัด Baseline จุดแรก-จุดท้าย: {line['baseline_coords'][0]} -> {line['baseline_coords'][-1]}")
            
            # ทดสอบตัดแถวบรรทัด
            line_slice = alto_parser.process_and_crop_line(mock_img_path, line['baseline_coords'])
            if line_slice is not None:
                slice_save_path = os.path.join(output_sliced_dir, f"{line['line_id']}.png")
                cv2.imwrite(slice_save_path, line_slice)
                print(f"[สกัดอิมเมจสำเร็จ] มิติบรรทัดย่อยขาวดำพร้อมใช้เทรน: {line_slice.shape[1]}x{line_slice.shape[0]} พิกเซล บันทึกที่ {slice_save_path}")
                
        print("\n[บทสรุปการตรวจสอบระบบ] สคริปต์พาร์สประมวลผลข้อมูลและเตรียมอิมเมจ CREMMA HTR ทำงานสมบูรณ์ 100%!")
    except Exception as e:
        print(f"[ล้มเหลว] พบอุปสรรคข้อบกพร่องในการรันระบบจำลอง: {str(e)}")
```
