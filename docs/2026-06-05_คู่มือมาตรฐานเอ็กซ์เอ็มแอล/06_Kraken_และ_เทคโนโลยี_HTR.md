# 🐙 การทำงานร่วมกับ Kraken และเทคโนโลยี HTR — คู่มือฉบับละเอียด

## สารบัญ

- [1. Kraken — ภาพรวม](#1-kraken--ภาพรวม)
- [2. Kraken — Commands ละเอียด](#2-kraken--commands-ละเอียด)
- [3. eScriptorium — ภาพรวมและ Workflow](#3-escriptorium--ภาพรวมและ-workflow)
- [4. Transkribus](#4-transkribus)
- [5. Tesseract](#5-tesseract)
- [6. เครื่องมืออื่น ๆ](#6-เครื่องมืออื่น-ๆ)
- [7. HTR-United — ระบบนิเวศข้อมูล Ground Truth](#7-htr-united--ระบบนิเวศข้อมูล-ground-truth)
- [8. ตารางสรุปการรองรับ XML ของทุกเครื่องมือ](#8-ตารางสรุปการรองรับ-xml-ของทุกเครื่องมือ)
- [9. ตัวอย่าง End-to-End Workflow](#9-ตัวอย่าง-end-to-end-workflow)
- [แหล่งอ้างอิง](#แหล่งอ้างอิง)


## 10. ภาคผนวก: ตัวอย่างผลลัพธ์โครงสร้าง XML จาก Kraken

เพื่อให้เห็นภาพที่ชัดเจนที่สุดสำหรับนักพัฒนาและผู้ดูแลระบบ หัวข้อนี้จะแสดงตัวอย่างผลลัพธ์ (Output XML) ที่สร้างจากเครื่องมือ Kraken ในรูปแบบต่างๆ 

### 10.1 ตัวอย่างผลลัพธ์รูปแบบ ALTO XML (v4) จาก Kraken

เมื่อเรารันคำสั่ง `kraken -f alto` ผลลัพธ์ที่ได้จะมีลักษณะดังนี้:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<alto xmlns="http://www.loc.gov/standards/alto/ns-v4#" 
      xmlns:xlink="http://www.w3.org/1999/xlink" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.loc.gov/standards/alto/ns-v4# http://www.loc.gov/standards/alto/v4/alto-4-4.xsd">
    <Description>
        <MeasurementUnit>pixel</MeasurementUnit>
        <sourceImageInformation>
            <fileName>manuscript_001.png</fileName>
        </sourceImageInformation>
        <Processing>
            <processingStep>
                <processingSoftware>
                    <softwareCreator>Benjamin Kiessling</softwareCreator>
                    <softwareName>kraken</softwareName>
                    <softwareVersion>4.1.1</softwareVersion>
                </processingSoftware>
            </processingStep>
        </Processing>
    </Description>
    <Tags>
        <LayoutTag ID="tag_1" LABEL="Paragraph"/>
        <LayoutTag ID="tag_2" LABEL="Heading"/>
    </Tags>
    <Layout>
        <Page ID="page_1" PHYSICAL_IMG_NR="1" WIDTH="2400" HEIGHT="3200">
            <PrintSpace ID="print_1" HPOS="0" VPOS="0" WIDTH="2400" HEIGHT="3200">
                <TextBlock ID="block_1" HPOS="150" VPOS="200" WIDTH="2100" HEIGHT="2800">
                    <TextLine ID="line_1" HPOS="155" VPOS="205" WIDTH="2050" HEIGHT="50" BASELINE="155,250 2205,250">
                        <String ID="string_1" HPOS="155" VPOS="205" WIDTH="500" HEIGHT="50" CONTENT="ตัวอย่าง" WC="0.95"/>
                        <SP HPOS="655" VPOS="205" WIDTH="20"/>
                        <String ID="string_2" HPOS="675" VPOS="205" WIDTH="600" HEIGHT="50" CONTENT="ข้อความ" WC="0.92"/>
                        <SP HPOS="1275" VPOS="205" WIDTH="20"/>
                        <String ID="string_3" HPOS="1295" VPOS="205" WIDTH="400" HEIGHT="50" CONTENT="จาก" WC="0.98"/>
                        <SP HPOS="1695" VPOS="205" WIDTH="20"/>
                        <String ID="string_4" HPOS="1715" VPOS="205" WIDTH="490" HEIGHT="50" CONTENT="Kraken" WC="0.99"/>
                    </TextLine>
                    <TextLine ID="line_2" HPOS="155" VPOS="260" WIDTH="2050" HEIGHT="50" BASELINE="155,305 2205,305">
                        <String ID="string_5" HPOS="155" VPOS="260" WIDTH="500" HEIGHT="50" CONTENT="แสดง" WC="0.91"/>
                        <SP HPOS="655" VPOS="260" WIDTH="20"/>
                        <String ID="string_6" HPOS="675" VPOS="260" WIDTH="600" HEIGHT="50" CONTENT="พิกัด" WC="0.97"/>
                        <SP HPOS="1275" VPOS="260" WIDTH="20"/>
                        <String ID="string_7" HPOS="1295" VPOS="260" WIDTH="400" HEIGHT="50" CONTENT="บน" WC="0.88"/>
                        <SP HPOS="1695" VPOS="260" WIDTH="20"/>
                        <String ID="string_8" HPOS="1715" VPOS="260" WIDTH="490" HEIGHT="50" CONTENT="ภาพ" WC="0.94"/>
                    </TextLine>
                    <TextLine ID="line_3" HPOS="155" VPOS="315" WIDTH="2050" HEIGHT="50" BASELINE="155,360 2205,360">
                        <String ID="string_9" HPOS="155" VPOS="315" WIDTH="2050" HEIGHT="50" CONTENT="ทดสอบความยาวของเอกสารจำลอง" WC="0.90"/>
                    </TextLine>
                    <TextLine ID="line_4" HPOS="155" VPOS="370" WIDTH="2050" HEIGHT="50" BASELINE="155,415 2205,415">
                        <String ID="string_10" HPOS="155" VPOS="370" WIDTH="2050" HEIGHT="50" CONTENT="เพื่อดูโครงสร้างของ ALTO XML" WC="0.99"/>
                    </TextLine>
                </TextBlock>
            </PrintSpace>
        </Page>
    </Layout>
</alto>
```

### 10.2 ตัวอย่างผลลัพธ์รูปแบบ PAGE XML จาก Kraken

เมื่อสั่งรันด้วย `kraken -f page` ผลลัพธ์ที่ได้จะมีลำดับชั้น (Hierarchy) ที่ซับซ้อนกว่าในแง่ของพิกัดรูปหลายเหลี่ยม (Polygon):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<PcGts xmlns="http://schema.primaresearch.org/PAGE/gts/pagecontent/2019-07-15" 
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
       xsi:schemaLocation="http://schema.primaresearch.org/PAGE/gts/pagecontent/2019-07-15 http://schema.primaresearch.org/PAGE/gts/pagecontent/2019-07-15/pagecontent.xsd">
    <Metadata>
        <Creator>Kraken</Creator>
        <Created>2025-06-03T18:00:00</Created>
        <LastChange>2025-06-03T18:00:00</LastChange>
    </Metadata>
    <Page imageFilename="manuscript_001.png" imageWidth="2400" imageHeight="3200">
        <TextRegion id="region_001">
            <Coords points="150,200 2250,200 2250,3000 150,3000"/>
            <TextLine id="line_001">
                <Coords points="155,205 2205,205 2205,255 155,255"/>
                <Baseline points="155,250 2205,250"/>
                <TextEquiv conf="0.95">
                    <Unicode>ตัวอย่างข้อความจาก Kraken</Unicode>
                </TextEquiv>
            </TextLine>
            <TextLine id="line_002">
                <Coords points="155,260 2205,260 2205,310 155,310"/>
                <Baseline points="155,305 2205,305"/>
                <TextEquiv conf="0.92">
                    <Unicode>แสดงพิกัดบนภาพ</Unicode>
                </TextEquiv>
            </TextLine>
            <TextLine id="line_003">
                <Coords points="155,315 2205,315 2205,365 155,365"/>
                <Baseline points="155,360 2205,360"/>
                <TextEquiv conf="0.90">
                    <Unicode>ทดสอบความยาวของเอกสารจำลอง</Unicode>
                </TextEquiv>
            </TextLine>
            <TextLine id="line_004">
                <Coords points="155,370 2205,370 2205,420 155,420"/>
                <Baseline points="155,415 2205,415"/>
                <TextEquiv conf="0.99">
                    <Unicode>เพื่อดูโครงสร้างของ PAGE XML</Unicode>
                </TextEquiv>
            </TextLine>
        </TextRegion>
    </Page>
</PcGts>
```

### 10.3 บันทึกการฝึกฝน (Training Logs) ระหว่างการรัน ketos train

เพื่อให้ผู้อ่านคุ้นเคยกับสถานการณ์จริงในการรันคำสั่งสอนโมเดล ด้านล่างนี้คือตัวอย่าง Log มาตรฐานที่จะปรากฏบนหน้าจอ Terminal ระหว่างรัน `ketos train` ตลอดระยะเวลาหลายชั่วโมง:

```text
[2025-06-03 18:00:00] [INFO] ketos.train - Starting training process
[2025-06-03 18:00:01] [INFO] ketos.train - Loading dataset.arrow
[2025-06-03 18:00:02] [INFO] ketos.data - Loaded 12450 samples
[2025-06-03 18:00:05] [INFO] ketos.model - Initializing generic CRNN architecture
[2025-06-03 18:00:07] [INFO] ketos.model - Moving model to device cuda:0
[2025-06-03 18:00:08] [INFO] ketos.train - Epoch 1/50
[2025-06-03 18:00:38] [INFO] ketos.train - Loss: 2.8945, CER: 0.8542
[2025-06-03 18:01:08] [INFO] ketos.train - Epoch 2/50
[2025-06-03 18:01:38] [INFO] ketos.train - Loss: 2.1034, CER: 0.5432
[2025-06-03 18:02:08] [INFO] ketos.train - Epoch 3/50
[2025-06-03 18:02:38] [INFO] ketos.train - Loss: 1.8021, CER: 0.3845
[2025-06-03 18:03:08] [INFO] ketos.train - Epoch 4/50
[2025-06-03 18:03:38] [INFO] ketos.train - Loss: 1.5034, CER: 0.2541
[2025-06-03 18:04:08] [INFO] ketos.train - Epoch 5/50
[2025-06-03 18:04:38] [INFO] ketos.train - Loss: 1.2045, CER: 0.1832
[2025-06-03 18:05:08] [INFO] ketos.train - Epoch 6/50
[2025-06-03 18:05:38] [INFO] ketos.train - Loss: 1.0542, CER: 0.1421
[2025-06-03 18:06:08] [INFO] ketos.train - Epoch 7/50
[2025-06-03 18:06:38] [INFO] ketos.train - Loss: 0.9532, CER: 0.1215
[2025-06-03 18:07:08] [INFO] ketos.train - Epoch 8/50
[2025-06-03 18:07:38] [INFO] ketos.train - Loss: 0.8541, CER: 0.0984
[2025-06-03 18:08:08] [INFO] ketos.train - Epoch 9/50
[2025-06-03 18:08:38] [INFO] ketos.train - Loss: 0.7854, CER: 0.0845
[2025-06-03 18:09:08] [INFO] ketos.train - Epoch 10/50
[2025-06-03 18:09:38] [INFO] ketos.train - Loss: 0.7541, CER: 0.0754
[2025-06-03 18:10:08] [INFO] ketos.train - Validation step...
[2025-06-03 18:10:15] [INFO] ketos.train - Validation CER: 0.0801
[2025-06-03 18:10:16] [INFO] ketos.train - Saving checkpoint to model_epoch_10.mlmodel
[2025-06-03 18:10:18] [INFO] ketos.train - Epoch 11/50
[2025-06-03 18:10:48] [INFO] ketos.train - Loss: 0.7121, CER: 0.0701
[2025-06-03 18:11:18] [INFO] ketos.train - Epoch 12/50
[2025-06-03 18:11:48] [INFO] ketos.train - Loss: 0.6845, CER: 0.0654
[2025-06-03 18:12:18] [INFO] ketos.train - Epoch 13/50
[2025-06-03 18:12:48] [INFO] ketos.train - Loss: 0.6512, CER: 0.0612
[2025-06-03 18:13:18] [INFO] ketos.train - Epoch 14/50
[2025-06-03 18:13:48] [INFO] ketos.train - Loss: 0.6321, CER: 0.0587
[2025-06-03 18:14:18] [INFO] ketos.train - Epoch 15/50
[2025-06-03 18:14:48] [INFO] ketos.train - Loss: 0.6015, CER: 0.0541
[2025-06-03 18:15:18] [INFO] ketos.train - Early stopping condition met or training complete.
[2025-06-03 18:15:20] [INFO] ketos.train - Best model saved as historical_handwriting.mlmodel
```

> [!NOTE]
> ข้อสังเกตจาก Log: ในช่วงแรกค่า Loss และ CER (Character Error Rate) จะสูงมาก แต่เมื่อเวลาผ่านไป (Epoch มากขึ้น) โมเดลจะค่อยๆ เรียนรู้และปรับน้ำหนัก (Weights) ทำให้ CER ลดลงเรื่อยๆ จนเหลือตัวเลขต่ำหลักเดียว ซึ่งหมายความว่าโมเดลมีความแม่นยำสูงมากพร้อมนำไปใช้กับ `kraken ocr` แล้ว



### 10.4 ตัวอย่างข้อกำหนด (YAML Configuration) สำหรับ HTRflow (2025)

ดังที่ได้กล่าวไปในบทที่ 6.5 ว่าเครื่องมือ HTRflow ใช้งานผ่านสถาปัตยกรรม YAML-based pipeline configuration ด้านล่างนี้คือตัวอย่างไฟล์คอนฟิก (`pipeline.yaml`) ที่แสดงให้เห็นว่านักพัฒนาสามารถกำหนดลำดับการทำงาน (Workflow) และตั้งค่า input/output formats ของ XML ได้อย่างง่ายดายเพียงใด:

```yaml
# HTRflow Configuration Example (2025)
pipeline_name: "Historical_Manuscripts_Processing"
description: "Pipeline for digitizing 18th century handwritten documents"

global_settings:
  workspace_dir: "./data/workspace"
  num_workers: 4
  gpu_acceleration: true
  device: "cuda:0"

steps:
  - step_id: 1
    action: "import_images"
    source: "./data/raw_images"
    format: "image/tiff"
    preprocessing:
      binarization: true
      deskew: true
      crop_borders: true

  - step_id: 2
    action: "layout_analysis"
    engine: "kraken_segmenter"
    model_path: "./models/segmentation/general_historical.mlmodel"
    output_temp_format: "page_xml"
    parameters:
      text_direction: "horizontal-lr"
      detect_margins: true

  - step_id: 3
    action: "text_recognition"
    engine: "kraken_recognizer"
    model_path: "./models/recognition/18th_century_handwriting.mlmodel"
    input_format: "page_xml"
    batch_size: 16
    parameters:
      confidence_threshold: 0.75

  - step_id: 4
    action: "post_processing"
    module: "dictionary_correction"
    language_dict: "th_historical"
    apply_to: "text_recognition_results"

  - step_id: 5
    action: "export_results"
    formats:
      - type: "alto_xml"
        version: "4.4"
        output_dir: "./data/exports/alto"
        include_images: false
      - type: "page_xml"
        version: "2019-07-15"
        output_dir: "./data/exports/page"
      - type: "plain_text"
        output_dir: "./data/exports/txt"
      - type: "json"
        schema: "htr_united_metrics"
        output_dir: "./data/exports/metadata"
```

> [!TIP]
> สังเกตใน `step_id: 5` ว่าผู้ใช้สามารถสั่งส่งออก (export) ทีเดียวได้ทั้ง ALTO XML v4.4 และ PAGE XML สิ่งนี้ทำให้ HTRflow (2025) กลายเป็นเครื่องมือที่ช่วยลดความยุ่งยากในเรื่อง Interoperability ลงได้อย่างมหาศาล เพราะไม่ต้องพึ่งพาเครื่องมือแปลงแบบ manual อีกต่อไป



---

## 1. Kraken — ภาพรวม

Kraken เป็นเครื่องมือ HTR (Handwritten Text Recognition) แบบ open-source ที่ได้รับความนิยมอย่างสูงในวงการ Digital Humanities (DH) เนื่องจากมีความยืดหยุ่นสูงและรองรับรูปแบบไฟล์ที่หลากหลาย เหมาะสำหรับการจัดการกับเอกสารทางประวัติศาสตร์ที่มีสภาพทรุดโทรม มีตัวอักษรจางหาย หรือมีรูปทรงของบรรทัดที่บิดเบี้ยว

### 1.1 ข้อมูลทั่วไปของแพลตฟอร์ม

ข้อมูลเบื้องต้นเกี่ยวกับโครงการ Kraken อ้างอิงจากข้อมูลล่าสุด:

- **ผู้พัฒนาหลัก**: Benjamin Kiessling
- **เว็บไซต์อย่างเป็นทางการ**: [https://kraken.re/](https://kraken.re/)
- **การให้สิทธิการใช้งาน (License)**: Apache 2.0
- **รูปแบบไฟล์โมเดล (Model Format)**: Kraken ใช้ไฟล์นามสกุล `.mlmodel`

> [!NOTE]
> Kraken ถูกออกแบบมาให้สามารถจัดการกับเอกสารหลายภาษาและหลายทิศทาง (multi-script และ multi-directional) ทำให้เหมาะสำหรับต้นฉบับทางประวัติศาสตร์ที่มีความซับซ้อน เช่น เอกสารภาษาอาหรับ ฮีบรู หรือสคริปต์แบบผสม

### 1.2 สถาปัตยกรรมคร่าว ๆ ของระบบ

สถาปัตยกรรมของ Kraken จะแบ่งแยกโมดูลการทำงานชัดเจน โดยมีเครื่องมือในระดับ command-line 2 ตัวหลักที่ใช้งานคู่กันคือ:

1. **`kraken`** — สำหรับกระบวนการ inference (การทำนาย) เช่น การทำ segmentation เพื่อหาเส้นบรรทัด และ text recognition (OCR/HTR) เพื่อเปลี่ยนภาพเป็นอักษร
2. **`ketos`** — สำหรับกระบวนการ model training เช่น การเตรียมข้อมูล ground truth จาก XML และการรัน training loop

สำหรับโครงสร้างข้อมูลภายใน (Binary Format) ช่วงที่ประมวลผลข้อมูล training set ข้อมูลพิกัดจาก XML และไฟล์ภาพจะถูกดึงเข้ามารวมกันและแปลงให้อยู่ในรูปแบบ **Apache Arrow (`.arrow`)** 

> [!TIP]
> Apache Arrow เป็นมาตรฐานหน่วยความจำที่มีประสิทธิภาพสูงมาก ช่วยให้ GPU สามารถเข้าถึงข้อมูลรูปภาพและ Text ได้อย่างรวดเร็วโดยไม่ต้องอ่านไฟล์ XML ซ้ำ ๆ ในขณะที่กำลังรัน Epoch

### 1.3 การรองรับ Input / Output Formats

Kraken มีความสามารถที่โดดเด่นในการรองรับ XML schema หลักของวงการ โดยมี formats ที่รองรับดังนี้:

**Input Formats (ข้อมูลขาเข้า):**
- **PAGE XML**: มาตรฐานชั้นนำจาก PRImA Lab 
- **ALTO XML**: มาตรฐานห้องสมุดดิจิทัล 
- **hOCR**: รูปแบบการใส่ microformat HTML 
- **abbyyXML**: โครงสร้างเอกสารจาก ABBYY 

**Output Formats (ข้อมูลขาออก):**
- **PAGE XML**
- **ALTO XML**
- **hOCR**
- **abbyyXML**
- **Custom (Jinja templates)** — ผู้ใช้สามารถเขียนเทมเพลตเองได้

> [!IMPORTANT]
> **ระบบ Auto-detect อัจฉริยะ**:
> ในการใช้งานผ่าน CLI หากคุณใช้ flag `-f xml` เครื่องมือ Kraken จะทำการตรวจสอบอัตโนมัติ (auto-detect) ว่าไฟล์ XML ที่ได้รับมานั้นเป็น PAGE XML หรือ ALTO XML โดยพิจารณาจาก Root element และ Namespace ภายในไฟล์

---

## 2. Kraken — Commands ละเอียด

การทำงานกับ Kraken จะทำผ่านหน้าต่าง Command Line (เช่น Bash หรือ PowerShell) ต่อไปนี้คือตัวอย่างและการเจาะลึกคำสั่งที่จำเป็นต้องใช้ตลอด Pipeline

### 2.1 คำสั่ง `ketos compile` (การจัดเตรียมข้อมูล)

คำสั่ง `ketos compile` ทำหน้าที่ดึงข้อมูลจากไฟล์ ground truth มาแปลงและบีบอัดให้อยู่ในรูปแบบ Binary Format (`.arrow`) 

**การทำงานกับ ALTO XML:**
```bash
ketos compile -f alto -o dataset.arrow my_alto_files/*.xml
```

*รายละเอียดพารามิเตอร์:*
- `ketos compile` : โมดูลแปลงข้อมูล
- `-f alto` : กำหนด input format เป็น ALTO XML เครื่องมือจะเข้าไปหาแท็ก `<String>` และ `<TextLine>` เพื่อดึงพิกัด
- `-o dataset.arrow` : กำหนดชื่อไฟล์ output ที่เป็นนามสกุล `.arrow` 
- `my_alto_files/*.xml` : รูปแบบเส้นทางเพื่อเหมาไฟล์ทั้งหมด

**การทำงานกับ PAGE XML:**
```bash
ketos compile -f page -o dataset.arrow my_page_files/*.xml
```
*ความแตกต่างคือการเปลี่ยนค่า `-f page` ซึ่งเครื่องมือจะเปลี่ยนไปมองหา `<TextRegion>` และ `<TextEquiv>` แทน*

**ตัวอย่าง Mock Output ระหว่างการทำงาน:**
```text
[INFO] Loading XML files...
[INFO] Detected 150 PAGE XML files.
[INFO] Compiling image and text pairs...
100%|███████████████████████████████████████████████| 150/150 [00:15<00:00,  9.80it/s]
[INFO] Successfully written 12,450 lines to dataset.arrow
```

### 2.2 คำสั่ง `ketos train` (การสอนโมเดล)

หลังจากได้ `.arrow` มาแล้ว ขั้นตอนต่อไปคือการเทรนด้วย `ketos train`

**คำสั่งที่ใช้:**
```bash
ketos train -f binary -d cuda:0 -o my_custom_model dataset.arrow
```

*รายละเอียดพารามิเตอร์:*
- `ketos train` : สั่งเริ่มกระบวนการ Training
- `-f binary` : ระบุว่า input ไม่ใช่ XML หรือรูปภาพแยกชิ้นแล้ว แต่เป็นไฟล์ `.arrow` 
- `-d cuda:0` : ระบุ Device ที่ใช้ประมวลผลเป็น GPU ตัวที่ศูนย์
- `-o my_custom_model` : กำหนดชื่อโมเดล output 
- `dataset.arrow` : ไฟล์จากการ compile

**ตัวอย่าง Mock Output:**
```text
[INFO] Initializing model...
[INFO] Starting training loop.
Epoch 1/50 - Loss: 2.1034 - Accuracy: 0.45 
Epoch 2/50 - Loss: 1.5034 - Accuracy: 0.65
...
[INFO] Saving model to my_custom_model.mlmodel
```

### 2.3 คำสั่ง `kraken segment` (แบ่งส่วนเอกสาร)

คำสั่ง `kraken` เดี่ยว ๆ ใช้สำหรับการทำ Prediction หรือ Inference

```bash
kraken -f xml -i page_01.tif page_01.xml segment
```
ในกระบวนการนี้ ไฟล์ `page_01.xml` จะถูกสร้างขึ้นมา โดยมีค่าพิกัด (Coordinates) ของบรรทัดต่างๆ บนรูป แต่ยังไม่มีการรู้จำตัวอักษรใดๆ 

### 2.4 คำสั่ง `kraken ocr` (รู้จำข้อความ) และกระบวนการต่อเนื่อง

เราสามารถสั่งรันต่อเนื่องกัน (Pipeline) แบบนี้ได้:
```bash
kraken -f xml -i input.tif output.xml segment ocr
```
ระบบจะทำ segment ก่อนแล้วส่งพิกัดไปให้ ocr ดึงภาพมาแปลงเป็นข้อความ และเก็บลงโครงสร้าง XML (หากต้นทางใช้ flag `-f xml` ตัว default จะขึ้นอยู่กับเวอร์ชัน หรือบางครั้งต้องระบุชัดเจนด้วย flag `-f page` สำหรับการเขียนออก)

### 2.5 การใช้งาน Custom Output ด้วย Jinja Templates

Kraken รองรับการเขียนออกเป็นรูปแบบไฟล์ใด ๆ ก็ได้ผ่าน **Jinja templates** ซึ่งมีประโยชน์อย่างยิ่งเมื่อห้องสมุดต้องการดึงเฉพาะ Text พร้อม Metadata

**ตัวอย่าง Jinja Template แบบละเอียด (`custom_tei.j2`):**
```jinja
<?xml version="1.0" encoding="UTF-8"?>
<TEI xmlns="http://www.tei-c.org/ns/1.0">
  <teiHeader>
    <fileDesc>
      <titleStmt>
        <title>Kraken Automated Transcription</title>
      </titleStmt>
      <publicationStmt>
        <p>Generated by Kraken HTR</p>
      </publicationStmt>
      <sourceDesc>
        <p>Image Source: {{ file_name }}</p>
      </sourceDesc>
    </fileDesc>
  </teiHeader>
  <text>
    <body>
      <div type="page" facs="#{{ file_name }}">
        <!-- ลูปอ่านทีละบรรทัดจากโมเดล -->
        {% for line in lines %}
        <l xml:id="line_{{ loop.index }}" 
           conf="{{ line.confidence | round(2) }}"
           facs="bbox: {{ line.boundary }}">
           {{ line.text }}
        </l>
        {% endfor %}
      </div>
    </body>
  </text>
</TEI>
```

การทำงานของระบบ Jinja จะรับเอาอ็อบเจ็กต์ข้อมูลภายในของ Kraken เช่น ตัวแปร `lines` มากระจายเป็นข้อมูลจริง (ตัวแปร `line.confidence`, `line.boundary`, และ `line.text`) ทำให้ผู้ใช้ได้ผลลัพธ์เป็นมาตรฐาน TEI ได้เลยโดยไม่ต้องไปยุ่งกับ ALTO หรือ PAGE

---

## 3. eScriptorium — ภาพรวมและ Workflow

### 3.1 ข้อมูลพื้นฐาน

- **เว็บไซต์**: [https://escripta.hypotheses.org/](https://escripta.hypotheses.org/)
- **บทบาท**: ทำหน้าที่เป็น **web interface สำหรับ Kraken**
- **ความเข้ากันได้**: **ไม่มี Format preference** กล่าวคือ ปฏิบัติกับ ALTO และ PAGE อย่างเท่าเทียมกันในการ import และ export

### 3.2 ฟีเจอร์ที่สำคัญ (Key Features)

1. **Batch import via ZIP**: สามารถบีบอัดรูปภาพควบคู่ไปกับไฟล์ XML เข้าด้วยกัน และโยนเข้าเว็บทีเดียว รองรับปริมาณมหาศาล
2. **Segment matching by ID**: กรณีที่มีการแก้ XML ไปแล้ว เมื่อนำเข้าแพลตฟอร์ม ระบบจะอิงข้อมูลจาก ID ของบรรทัดให้ตรงกับรูปภาพได้อย่างสมบูรณ์
3. **Model export (`.mlmodel`)**: ผู้ใช้สามารถสั่งรันการฝึกฝนปัญญาประดิษฐ์จากหน้าเบราว์เซอร์ เมื่อได้โมเดลแล้วสามารถ export ไฟล์ออกมาเป็น `.mlmodel` เอาไปใช้รันบน local `kraken` ได้
4. **IIIF image import**: การดึงภาพผ่าน API ชนิด International Image Interoperability Framework ทำให้ดึงภาพจากเซิร์ฟเวอร์ห้องสมุดได้ทันที

### 3.3 แผนผังกระบวนการทำงานแบบละเอียด (Workflow)

กระบวนการแบบ Step-by-step มีดังนี้:

```mermaid
flowchart TD
    A[Start Project] --> B{Import Method}
    B -->|ZIP (Images + XML)| C[Upload ZIP]
    B -->|IIIF Manifest| D[Fetch Images from Library]
    
    C --> E[Segment Matching / Layout Analysis]
    D --> E
    
    E --> F[Run Recognition Model]
    F --> G[Collaborative Correction]
    
    G --> H{Next Step?}
    H -->|Improve Model| I[Export Ground Truth & Train]
    H -->|Publish| J[Export ALTO / PAGE / Text]
    
    I --> F
    J --> K[End]
```

> [!WARNING]
> **คำแนะนำ (Recommendation):**
> ควร "ใช้ format เดียวตลอดทั้งโปรเจกต์" 
> 
> หากเริ่มต้นด้วย ALTO XML ควรคงการ export และ import ภายในทีมเป็น ALTO XML เสมอ การแปลงไปแปลงมาระหว่าง PAGE อาจทำให้ Metadata หรือ Coordinates บางจุดสูญหายได้

---

## 4. Transkribus

Transkribus เป็นแพลตฟอร์มขนาดใหญ่ที่ผูกพันกับ PAGE XML อย่างลึกซึ้ง

- **เว็บไซต์**: [https://transkribus.org/](https://transkribus.org/)
- **Primary format**: **PAGE XML** เป็นแกนกลางในการเก็บข้อมูลทุกตารางนิ้ว

### 4.1 ฟอร์แมตที่ส่งออกได้ (Export Formats)
- **PAGE XML** (ระดับสมบูรณ์ที่สุด)
- **ALTO XML (v2)**
- **TXT** 
- **DOCX** 
- **PDF** 
- **METS** 
- **CSV/Excel** 
- **TEI**

> [!CAUTION]
> **ALTO Version Warning**: 
> ระบบของ Transkribus มักจะทำการส่งออกไฟล์เป็น ALTO XML เวอร์ชัน 2 (`v2`) ซึ่งปัจจุบันล้าสมัยไปแล้วเล็กน้อย หากต้องการส่งให้ระบบอื่นวิเคราะห์ต่อ อาจจะต้องเขียน XSLT แปลงให้เป็น v4 เสียก่อน

### 4.2 ระบบ Custom Tags ใน PAGE XML
ใน Transkribus ผู้ใช้สามารถแปะป้ายกำกับข้อความได้ (เช่น ระบุชื่อคน สถานที่) ระบบจัดเก็บผ่าน attribute ปลายทางแบบนี้:

**ตัวอย่าง PAGE XML จาก Transkribus:**
```xml
<TextRegion id="r1" custom="structure {type:paragraph;}">
    <Coords points="100,100 500,100 500,200 100,200"/>
    <TextLine id="l1" custom="readingOrder {index:0;}">
        <Coords points="105,105 495,105 495,195 105,195"/>
        <TextEquiv>
            <Unicode>ตัวอย่างเอกสารจาก Transkribus</Unicode>
        </TextEquiv>
    </TextLine>
</TextRegion>
```
จะเห็นว่า `custom` ทำหน้าที่เป็นตัวเก็บสถานะ `structure` หรือ `readingOrder` ในรูปแบบคล้าย CSS 

### 4.3 อัปเดตใหม่ในปี 2024-2025
- **Enhanced Layout Editing (2024)**: ปรับปรุงการวาดเลย์เอาท์ 
- **Redesigned Action Bar (2025)**: เมนูบาร์ออกแบบใหม่ทั้งหมด
- **Batch Actions (2025)**: รันประมวลผลพร้อมกันหลายเอกสาร 
- **Document Labeling system (2025)**: ติดป้ายหมวดหมู่ให้หนังสือได้ง่ายขึ้น

---

## 5. Tesseract

เครื่องมือระดับตำนานที่ถูกพัฒนาต่อเนื่องยาวนานโดย Google

- **Output หลักดั้งเดิม**: hOCR (ซึ่งแท้จริงแล้วไม่ใช่ XML บริสุทธิ์ แต่เป็น HTML)
- **ALTO XML**: ตั้งแต่ Tesseract เวอร์ชัน 4.0 เป็นต้นมา มีการนำเอา parser ของ ALTO เสียบเข้ามา ส่งผลให้ Tesseract สามารถสร้าง ALTO XML ได้โดยตรง 
- **PAGE XML**: ระบบของ Tesseract **ไม่รองรับ natively** 

### 5.1 การสั่งงานผ่าน Command Line

การเอา output ออกเป็น hOCR:
```bash
tesseract input.tif output hocr
```

การเอา output ออกเป็น ALTO XML:
```bash
tesseract input.tif output alto
```

### 5.2 การบูรณาการผ่าน Python
เราสามารถรัน Tesseract ผ่านโมดูลเสริมยอดฮิตอย่าง `pytesseract` ได้ดังนี้:

```python
import pytesseract
from PIL import Image

# ตรวจสอบพาธ
pytesseract.pytesseract.tesseract_cmd = r'/usr/bin/tesseract'

try:
    # โหลดรูปภาพ
    img = Image.open('historical_page.png')
    
    # รัน Tesseract และสั่งให้ return ข้อมูลเป็น bytes ของ ALTO XML
    alto_data = pytesseract.image_to_alto_xml(img)
    
    # บันทึกลงไฟล์
    with open('output_page.xml', 'wb') as f:
        f.write(alto_data)
        
    print("ALTO XML generation successful!")
except Exception as e:
    print(f"Error occurred: {e}")
```

---

## 6. เครื่องมืออื่น ๆ

ในทศวรรษที่ผ่านมามีระบบประมวลผลใหม่เกิดขึ้นมากมาย ดังนี้:

### 6.1 Calamari OCR
- **รองรับ PAGE XML**: ผ่านการระบุพารามิเตอร์ `--train PageXML`
- **รองรับ abbyy**: `--train Abbyy`
- **รองรับ ALTO XML**: **ไม่รองรับ** ต้องผ่านการแปลงก่อนถึงจะใช้งานได้
- **ข้อควรทราบ (Note)**: โปรแกรมนี้เป็น line-level engine หน้าที่หลักคืออ่านบรรทัดอย่างเดียว ไม่สามารถทำกระบวนการตัดภาพทั้งหน้า (no page segmentation) ได้

### 6.2 OCR-D Framework
- **เว็บไซต์**: [https://ocr-d.de/](https://ocr-d.de/)
- **Primary Format**: **PAGE XML** — ใช้มาตรฐานนี้ตลอดเส้นทาง processing chain ของโปรแกรม
- **ALTO Support**: มีสถานะเป็น secondary โดยสามารถแปลงด้วยคำสั่ง `ocrd-page-to-alto` หรือ `ocrd-fileformat-transform`
- **สถาปัตยกรรม (Architecture)**: ทำงานในระบบ **modular processors chained** คือเอาหลายโปรแกรมมาต่อเรียงกัน ควบคุมโดยไฟล์ METS/PAGE workspaces
- **ความเชี่ยวชาญ (Project Focus)**: มุ่งไปที่ประวัติศาสตร์งานพิมพ์ของเยอรมนีในศตวรรษที่ 16-19 (กลุ่มรหัส VD16, VD17, VD18)
- **อัปเดต 2025**: เพิ่ม OCR-D v3 API, มีความสามารถ table recognition, VLM integration

### 6.3 OCRopus / OCRopy
- **XML Support**: **ไม่รองรับ XML** สำหรับกระบวนการ training / ground truth แต่อย่างใด
- **Native Format**: อาศัยรูปแบบคู่ข้อมูลไฟล์ภาพบรรทัดและไฟล์ข้อความล้วน `image.png + image.gt.txt pairs` 
- **ข้อควรทราบ**: เป็น line-level only 

### 6.4 PyLaia / Laia
- **XML Support**: ไม่มีความสามารถในการอ่าน XML โดยตรงจากตัวโปรแกรมหลัก
- **Workflow มาตรฐาน**: 
  1. Parse (แยกโครงสร้าง) PAGE XML ด้วยภาษาคอมพิวเตอร์
  2. สกัด (Extract) ค่าพิกัด TextLine ออกมา
  3. ตัด (Crop) รูปบรรทัด
  4. สร้าง mapping files นำไปป้อนเข้า PyLaia
- **เครื่องมือผู้ช่วย (Tools)**: พึ่งพาระบบนิเวศอื่น เช่น ไลบรารี Python ชื่อ `pagexml-tools` หรือโยนให้แพลตฟอร์มฝรั่งเศส Arkindex/Teklia ทำให้

### 6.5 HTRflow (เครื่องมือใหม่ 2025)
- **ผู้พัฒนา**: AI Lab แห่งหอจดหมายเหตุสวีเดน (Swedish National Archives / Riksarkivet) 
- **สถาปัตยกรรม (Architecture)**: เป็นเครื่องมือแนว **YAML-based pipeline configuration** กำหนดงานผ่านไฟล์ปรับแต่งข้อความ 
- **รูปแบบที่ส่งออกได้ (Export Formats)**: **ALTO XML, PAGE XML**, Plain Text, และ JSON
- **การเข้าถึง**: ระบบ source code อยู่บน GitHub และสามารถโหลดตัว pre-trained ได้ผ่าน Hugging Face

---

## 7. HTR-United — ระบบนิเวศข้อมูล Ground Truth

ระบบ AI จะเก่งไม่ได้เลยหากขาดข้อมูลที่มีคุณภาพ HTR-United ได้รับการพัฒนามาเพื่อแก้ปัญหานี้

- **เว็บไซต์**: [https://htr-united.github.io/](https://htr-united.github.io/)
- **GitHub**: [https://github.com/HTR-United](https://github.com/HTR-United)
- **ประเภทโครงการ (Type)**: เป็นระบบ Data catalog สำหรับชี้เป้าฐานข้อมูล (ไม่ใช่เครื่องมือ OCR/HTR โดยตรง)

### 7.1 หลักการ FAIR Principles
วิสัยทัศน์ของ HTR-United ผูกติดกับกฎ **FAIR**:
- **F - Findable**: มี Metadata ครบถ้วน สามารถค้นเจอได้ในระบบ
- **A - Accessible**: มีมาตรฐานการเข้าถึง แตกต่างจากการเก็บข้อมูลแบบปิดในอดีต
- **I - Interoperable**: ข้อมูลสามารถดึงไปประมวลผลข้ามเครื่องมือได้ (อาศัย XML)
- **R - Reusable**: มีไฟล์ License (ไลเซนส์) ควบคู่ เพื่อบอกเงื่อนไขการนำไปใช้ใหม่

### 7.2 Accepted Formats 
คลังข้อมูลเปิดรับ:
1. **PAGE XML**
2. **ALTO XML**
3. **Plain text pairs**

### 7.3 เครื่องมือวิเคราะห์ข้อมูล (Tools)
ทางโครงการยังมีสคริปต์เสริมสำหรับนักวิทยาศาสตร์ข้อมูล:
- **HUMGenerator**: ระบบสำหรับ generate ไฟล์ metadata และสร้างสถิติ metrics (เช่น จำนวนบรรทัด จำนวนอักษร)
- **HTRUC**: ใช้ทำกระบวนการ catalog validation ตรวจสอบฟิลด์ต่างๆ ให้ถูกต้อง
- **HTRVX**: ตรวจสอบโครงสร้างไฟล์ XML (XML validation) พร้อมทั้งมีฟังก์ชัน Segmonto compliance check เช็คคำศัพท์

---

## 8. ตารางสรุปการรองรับ XML ของทุกเครื่องมือ

| เครื่องมือ | PAGE XML | ALTO XML | Format อื่น ๆ ที่ใช้งาน / หมายเหตุ |
|:---:|:---:|:---:|:---|
| **Kraken** | รองรับ | รองรับ | hOCR, abbyyXML, Custom Jinja (มี Auto-detect flag) |
| **eScriptorium** | รองรับ | รองรับ | Plain Text (ไม่มี Format Preference) |
| **Transkribus** | **Primary Format** | รองรับ (มักส่งออก v2) | DOCX, METS, TEI, CSV (ใช้ custom attributes บน PAGE) |
| **Tesseract** | ไม่รองรับ natively | รองรับเป็น Output (v4.0+) | hOCR เป็น output ดั้งเดิม |
| **Calamari** | รองรับ (`--train PageXML`) | ไม่รองรับ | abbyyXML (ต้องทำเป็น PAGE ก่อนนำมา Train) |
| **OCR-D** | **Primary Format** | Secondary (ต้องแปลง) | ทำงานแบบ pipeline ใน METS workspace |
| **OCRopus / OCRopy**| ไม่รองรับ XML | ไม่รองรับ XML | รับเป็น image.png + image.gt.txt pairs (Line-level only) |
| **PyLaia** | ไม่อ่านโดยตรง | ไม่อ่านโดยตรง | ใช้งานผ่าน pagexml-tools หรือ Arkindex |
| **HTRflow (2025)** | รองรับเป็น Output | รองรับเป็น Output | Plain Text, JSON (ตั้งค่าด้วย YAML) |
| **HTR-United** | รองรับในฐานะ Data | รองรับในฐานะ Data | รองรับ Plain text pairs |

---

## 9. ตัวอย่าง End-to-End Workflow

หัวข้อนี้จะเป็นการจำลองขั้นตอนทุกสเตป ตั้งแต่กระดาษเปล่าไปจนถึงโครงสร้าง ALTO XML สุดท้าย เหมาะสำหรับเป็นแนวทางให้บรรณารักษ์ดิจิทัลได้ศึกษากระบวนการจริง

**สถานการณ์อ้างอิง:** 
นักวิจัยค้นพบเอกสาร "ต้นฉบับลายมือ (Handwritten manuscript)" ภาษาโบราณจำนวน 100 หน้า ต้องการดึงข้อมูลข้อความทั้งหมดออกมา 

### ขั้นตอน 1: Scan → Images (การสแกนภาพต้นฉบับ)
- สแกนเอกสารด้วยความละเอียด 300 หรือ 400 DPI ขึ้นไป
- บันทึกเป็นนามสกุล TIFF หรือ PNG เพื่อลดความสูญเสียทางพิกเซล (Lossless)
- ระบบจะสร้างไฟล์ เช่น `manuscript_001.png` ไปจนถึง `manuscript_100.png`

### ขั้นตอน 2: Import เข้า eScriptorium
- เข้าไปที่หน้าเว็บไซต์ **eScriptorium** และสร้างโปรเจกต์
- รวบรวมไฟล์ภาพ 100 ภาพเข้าในโฟลเดอร์เดียวกัน พร้อมระบุ Metadata
- ใช้ความสามารถ **Batch import via ZIP** โดยการบีบอัดโฟลเดอร์ภาพเป็น `.zip` แล้วอัปโหลด 
- หรือหากห้องสมุดมีบริการ IIIF อยู่แล้ว ก็ใช้ **IIIF image import** ผ่าน URL Manifest ได้ทันที

### ขั้นตอน 3: Segment ด้วย Kraken Engine
- บน eScriptorium ผู้ใช้จะเลือกฟังก์ชัน "Segment" 
- ระบบจะเรียก **Kraken** จากเซิร์ฟเวอร์หลังบ้าน 
- Kraken จะทำการคำนวณหารูปร่างของบรรทัดและสร้าง Polygon ควบคู่กับ Baseline ซ้อนทับลงบนภาพทุกภาพ (Layout Analysis)
- ผู้ใช้สามารถสุ่มตรวจสอบความถูกต้องบนจอภาพ หากมีเส้นตกหล่นก็คลิกลากเมาส์เพิ่มเติม

### ขั้นตอน 4: Initial Recognition (Pre-trained model)
- ผู้ใช้สั่งเริ่มโมดูล OCR/HTR โดยเลือกใช้โมเดลสำเร็จรูปที่มีลักษณะอักษรใกล้เคียงกับต้นฉบับ 
- ผลลัพธ์เบื้องต้นจะปรากฏขึ้นบนหน้าจอ ซึ่งแน่นอนว่าจะมีข้อผิดพลาด (เช่น อ่านตัว ค.ควาย เป็น ด.เด็ก)

### ขั้นตอน 5: Manual Correction (การตรวจสอบและสร้าง Ground Truth)
- เชิญนักวิจัยอีกสองท่านเข้ามาในระบบ eScriptorium (Collaborative work)
- แต่ละท่านช่วยกันพิมพ์แก้ไขข้อความที่ระบบทายผิดให้ถูกต้อง 100%
- การแก้ไขนี้เท่ากับการสร้าง **Ground Truth** คุณภาพสูงสำหรับการนำไปต่อยอด

### ขั้นตอน 6: Export PAGE XML
- กดปุ่ม **Export** 
- เลือกระบุ Format เป็น **PAGE XML** พร้อมติ๊กเลือกภาพต้นฉบับออกมาด้วย
- แพลตฟอร์มจะบีบอัดไฟล์ ZIP ออกมา โดยแต่ละรูปจะจับคู่กับไฟล์ XML (เช่น `manuscript_001.xml`) ซึ่งบรรจุ Polygon, Baseline, และพิกัดข้อความที่มนุษย์แก้ไขอย่างครบถ้วน

### ขั้นตอน 7: `ketos compile` + `train` (การสอนโมเดล)
- นำไฟล์ข้อมูลจากขั้นตอนที่แล้ว มาวางในเครื่องเซิร์ฟเวอร์ห้องปฏิบัติการที่มี GPU แข็งแกร่ง
- ใช้คำสั่งแปลงฐานข้อมูลเป็น Arrow Format:
  ```bash
  ketos compile -f page -o historical_train.arrow dataset/*.xml
  ```
- รันโมดูลปัญญาประดิษฐ์ให้เรียนรู้ลายมือนี้เป็นการเฉพาะกิจ:
  ```bash
  ketos train -f binary -d cuda:0 -o model_best historical_train.arrow
  ```
- หลังผ่านไปหลาย Epochs (อาจจะ 1-3 ชั่วโมง) ระบบจะให้ไฟล์ที่มีนามสกุล `.mlmodel` ออกมา

### ขั้นตอน 8: Apply new model → ปรับปรุงงานเดิม
- ผู้ใช้นำไฟล์ `model_best.mlmodel` อัปโหลดกลับไปที่หน้า Model Manager ของ eScriptorium
- สั่งรันกระบวนการ Recognition อีกครั้งด้วยโมเดลใหม่ 
- คราวนี้ความแม่นยำจะสูงขึ้นมาก (Error Rate ลดลงแบบก้าวกระโดด)

### ขั้นตอน 9: Final Export ALTO XML สำหรับ Archive
- เมื่อระบบเรียนรู้และอ่านภาพจนหมด ครบ 100 หน้า อย่างสมบูรณ์ 
- เพื่อให้สอดคล้องกับมาตรฐานห้องสมุดดิจิทัลระดับสากล จะต้องเก็บถาวรในรูปแบบ ALTO
- เข้าสู่เมนู Export ครั้งสุดท้าย แต่เปลี่ยนฟอร์แมตเป้าหมายจาก PAGE ให้กลายเป็น **ALTO XML** 
- ได้รับชุดไฟล์ผลลัพธ์ ALTO นำไปบรรจุลงระบบจัดการฐานข้อมูล (Repository) ร่วมกับไฟล์ภาพ TIFF ต้นฉบับต่อไป

---

## แหล่งอ้างอิง

- ข้อมูลเกี่ยวกับเครื่องมือ Kraken: [https://kraken.re/](https://kraken.re/)
- ข้อมูลระบบจัดการ eScriptorium: [https://escripta.hypotheses.org/](https://escripta.hypotheses.org/)
- ข้อมูลแพลตฟอร์ม Transkribus: [https://transkribus.org/](https://transkribus.org/)
- ข้อมูลการดำเนินงาน OCR-D Project: [https://ocr-d.de/](https://ocr-d.de/)
- ข้อมูลระบบนิเวศฐานข้อมูล HTR-United: [https://htr-united.github.io/](https://htr-united.github.io/)
- พื้นที่แหล่งอ้างอิงและ Code Repository: [https://github.com/HTR-United](https://github.com/HTR-United)
