# 12 TEI XML สำหรับมนุษยศาสตร์ดิจิทัล (Text Encoding Initiative in Digital Humanities)

## สารบัญ
1. TEI XML คืออะไร และความสำคัญในงาน Digital Humanities
2. เปรียบเทียบ Physical Layout (PAGE/ALTO) vs Logical Structure (TEI)
3. โครงสร้างพื้นฐานของ TEI (`<teiHeader>`, `<text>`, `<body>`) พร้อมตัวอย่าง
4. การทำ Semantic Enrichment (Named Entity Recognition — `<persName>`, `<placeName>`)
5. Workflow การแปลง ALTO/PAGE ไปสู่ TEI (การรักษาพิกัดด้วย `<pb/>`, `<lb/>`)
6. ตัวอย่างเอกสาร TEI ฉบับสมบูรณ์ที่เชื่อมโยงกับรูปภาพ
7. กรณีศึกษา: การประยุกต์ใช้ TEI กับเอกสารจดหมายเหตุ
8. เครื่องมือซอฟต์แวร์สำหรับการจัดการเอกสาร TEI
9. ข้อจำกัดและความท้าทายในการประยุกต์ใช้ TEI
10. แหล่งอ้างอิง

---

## 1. TEI XML คืออะไร และความสำคัญในงาน Digital Humanities

### 1.1 บทนำเกี่ยวกับ TEI XML
TEI หรือชื่อเต็มว่า **Text Encoding Initiative** เป็นมาตรฐานทางด้าน XML (Extensible Markup Language) ที่ออกแบบมาเพื่อการเข้ารหัสข้อความ (Text encoding) เชิงความหมาย (Semantic structure) โดยเน้นไปที่งานวิจัยด้านมนุษยศาสตร์ (Digital Humanities) สังคมศาสตร์ และภาษาศาสตร์โดยเฉพาะ TEI เริ่มต้นพัฒนาตั้งแต่ปี ค.ศ. 1987 โดยสมาคม Text Encoding Initiative Consortium เพื่อสร้างมาตรฐานกลางในการเก็บรักษาและวิเคราะห์เอกสารทางประวัติศาสตร์ วรรณกรรม และเอกสารสำคัญอื่นๆ ในรูปแบบดิจิทัล

ในการทำดิจิทัลไลเซชัน (Digitalization) เอกสารโบราณหรือหนังสือ เราไม่ได้ต้องการเพียงแค่รูปภาพของเอกสารหรือข้อความดิบ (Plain text) เท่านั้น แต่นักวิจัยในสาขามนุษยศาสตร์ดิจิทัลต้องการ "ความหมาย" แฝงที่อยู่ในข้อความนั้น เช่น การบอกได้ว่าคำใดคือชื่อบุคคล (Person name) คำใดคือชื่อสถานที่ (Place name) โครงสร้างของบทกวีเป็นอย่างไร หรือส่วนใดเป็นเชิงอรรถ (Footnote) ซึ่ง TEI เข้ามาตอบโจทย์ในจุดนี้อย่างสมบูรณ์ ความแพร่หลายของ TEI ทำให้มันกลายเป็นมาตรฐานโดยพฤตินัย (De facto standard) ในวงการมนุษยศาสตร์ดิจิทัล [1]

### 1.2 ความสำคัญของ TEI ในงาน Digital Humanities
สาขามนุษยศาสตร์ดิจิทัล (Digital Humanities) เป็นการนำเทคโนโลยีคอมพิวเตอร์มาประยุกต์ใช้กับงานวิจัยด้านมนุษยศาสตร์ TEI จึงมีความสำคัญอย่างยิ่งด้วยเหตุผลดังต่อไปนี้:

1. **การเข้ารหัสเชิงโครงสร้าง (Structural Encoding):** TEI ช่วยให้นักวิจัยสามารถกำหนดโครงสร้างทางตรรกะของเอกสารได้อย่างชัดเจน เช่น การแบ่งเป็นบท (Chapter) ส่วน (Section) ย่อหน้า (Paragraph) หรือแม้แต่โครงสร้างของบทกวี (Verse, Stanza)
2. **การเข้ารหัสเชิงความหมาย (Semantic Encoding):** ไม่ใช่แค่โครงสร้าง แต่ TEI สามารถกำกับข้อมูล (Annotate) เพื่อบอกความหมายของคำหรือวลีในเนื้อหา เช่น การแท็กชื่อบุคคล สถานที่ วันที่ หรือเหตุการณ์ ทำให้คอมพิวเตอร์สามารถประมวลผลและสกัดข้อมูลเหล่านี้เพื่อนำไปวิเคราะห์ต่อได้ (เช่น การสร้าง Social Network Graph ของตัวละคร)
3. **การเก็บรักษาความแตกต่างของต้นฉบับ (Textual Variation):** ในงานวิจัยวรรณกรรมหรือเอกสารประวัติศาสตร์ มักจะมีต้นฉบับหลายเวอร์ชัน TEI มีระบบ `<app>` (Apparatus) สำหรับการเข้ารหัสข้อความที่มีความแตกต่างกันระหว่างแต่ละต้นฉบับ (Witnesses) ทำให้สามารถเปรียบเทียบและวิเคราะห์วิวัฒนาการของเนื้อหาได้
4. **ความยั่งยืนและการแลกเปลี่ยนข้อมูล (Sustainability & Interoperability):** เนื่องจาก TEI เป็นมาตรฐานเปิดที่ใช้ XML เอกสารที่ถูกเข้ารหัสด้วย TEI จึงสามารถอ่านได้ด้วยโปรแกรมทั่วไป ไม่ยึดติดกับซอฟต์แวร์เฉพาะ และสามารถแลกเปลี่ยนข้อมูลระหว่างสถาบันการศึกษาและนักวิจัยทั่วโลกได้อย่างไร้รอยต่อ
5. **ความยืดหยุ่นและการปรับแต่ง (Customization):** TEI มีแท็ก (Tags) มากกว่า 500 แท็ก แต่ไม่มีโปรเจกต์ใดที่ใช้ทั้งหมด TEI อนุญาตให้แต่ละโปรเจกต์ปรับแต่ง schema ให้เหมาะสมกับความต้องการเฉพาะของตนผ่านเครื่องมือที่เรียกว่า ODD (One Document Does it all)

> [!NOTE]
> ในขณะที่ PAGE XML และ ALTO XML มุ่งเน้นไปที่การทำงานร่วมกับโมเดล HTR/OCR เพื่อสกัดพิกัดและข้อความบนหน้ากระดาษ TEI จะเข้ามามีบทบาทในขั้นตอนต่อไป คือการนำข้อความที่ได้มาจัดโครงสร้างเชิงความหมาย เพื่อการศึกษาวิเคราะห์ในระดับที่ลึกซึ้งขึ้น

---

## 2. เปรียบเทียบ Physical Layout (PAGE/ALTO) vs Logical Structure (TEI)

ในกระบวนการแปลงเอกสารโบราณให้เป็นข้อความดิจิทัล เราจะพบกับมาตรฐาน XML ที่แตกต่างกันสองกลุ่มหลัก คือ กลุ่มที่จัดการกับ Physical Layout และกลุ่มที่จัดการกับ Logical Structure การทำความเข้าใจความแตกต่างระหว่างสองกลุ่มนี้เป็นสิ่งสำคัญในการออกแบบ Workflow ของโครงการ Digital Humanities

### 2.1 โครงสร้างเชิงกายภาพ (Physical Layout) — PAGE/ALTO XML
PAGE XML และ ALTO XML ถูกออกแบบมาเพื่อบันทึกโครงสร้างทางกายภาพของเอกสาร กล่าวคือ บันทึกสิ่งที่ "มองเห็น" บนหน้ากระดาษ

- **เป้าหมายหลัก:** ระบุตำแหน่ง (Coordinates) รูปร่าง (Polygon หรือ Bounding Box) และข้อความที่อยู่ภายในพื้นที่นั้นๆ
- **หน่วยของข้อมูล (Data Unit):** เน้นที่ หน้า (Page), บรรทัด (TextLine/TextLine), และระดับคำ (Word) 
- **การใช้งาน:** ใช้เป็นข้อมูลสอน (Training Data) สำหรับ HTR (Handwritten Text Recognition) หรือ OCR (Optical Character Recognition)
- **ข้อจำกัด:** ไม่เข้าใจบริบททางความหมาย หากหน้ากระดาษมีคอลัมน์ซ้ายขวา PAGE/ALTO จะมองเป็นกล่องข้อความที่มีพิกัด แต่ไม่รู้ว่าเนื้อหาเชื่อมโยงกันอย่างไร หรือถ้าคำถูกตัดขึ้นบรรทัดใหม่ (Hyphenation) PAGE/ALTO จะมองเป็นข้อความคนละบรรทัด

### 2.2 โครงสร้างเชิงตรรกะ (Logical Structure) — TEI XML
ในทางกลับกัน TEI เน้นที่โครงสร้างทางตรรกะและความหมายของข้อความ โดยไม่สนใจว่าข้อความนั้นจะปรากฏอยู่ที่พิกัดใดบนหน้ากระดาษ 

- **เป้าหมายหลัก:** ระบุความหมาย โครงสร้างเนื้อหา เช่น บท, ย่อหน้า, ชื่อเรื่อง, ชื่อผู้แต่ง, สถานที่
- **หน่วยของข้อมูล (Data Unit):** เน้นที่ องค์ประกอบทางภาษาและวรรณกรรม เช่น `<div>`, `<p>` (paragraph), `<l>` (line of verse), `<lg>` (line group)
- **การใช้งาน:** ใช้สำหรับการวิจัย, การค้นหาขั้นสูง, การแสดงผลบนเว็บไซต์ (Digital Edition), และ Semantic Analysis
- **ข้อดี:** เข้าใจบริบทของเอกสาร สามารถเชื่อมโยงคำที่ถูกตัดข้ามบรรทัดให้กลับมาเป็นคำเดียวกันได้ และระบุความสัมพันธ์ของข้อมูลได้

### 2.3 ตารางเปรียบเทียบคุณสมบัติ (Comparison Table)

| คุณสมบัติ (Feature) | PAGE / ALTO XML | TEI XML |
| :--- | :--- | :--- |
| **จุดประสงค์หลัก (Primary Goal)** | เก็บข้อมูลพิกัด เค้าโครงหน้า และผลลัพธ์จาก HTR/OCR | เก็บโครงสร้างทางตรรกะและความหมายของเนื้อหาเพื่อการวิเคราะห์ |
| **โครงสร้าง (Structure Focus)** | Physical Layout (Block, Line, Word) | Logical Structure (Chapter, Paragraph, Heading) |
| **ความเข้าใจเนื้อหา (Semantic Awareness)** | ไม่มี หรือมีน้อยมาก (เน้นแค่ว่าข้อความอยู่ตรงไหน) | สูงมาก (เข้าใจว่าข้อความนี้คือชื่อคน สถานที่ หรือบทกวี) |
| **ความต่อเนื่อง (Text Flow)** | ขาดตอนตามการขึ้นหน้าใหม่หรือบรรทัดใหม่ | ต่อเนื่องข้ามหน้า ข้ามบรรทัดได้ (Continuous text stream) |
| **เครื่องมือที่ใช้สร้าง (Creation Tools)** | eScriptorium, Transkribus, Aletheia, Tesseract | Oxygen XML Editor, TEI Publisher, การแปลงจาก PAGE/ALTO ด้วย script |
| **ความเชื่อมโยงกับรูปภาพต้นฉบับ** | เชื่อมโยงโดยตรงด้วยพิกัดระดับพิกเซล | เชื่อมโยงทางอ้อมผ่านแท็ก `<pb/>` (Page Begin), `<lb/>` (Line Begin) |

### 2.4 ตัวอย่างความแตกต่างเชิงโครงสร้าง (Example of Difference)

**หากมีเอกสารหนึ่งหน้า ที่มี 1 ย่อหน้า แต่แบ่งเป็น 3 บรรทัด**

**ใน PAGE/ALTO จะมองเอกสารนี้เป็น:**
```xml
<!-- PAGE XML Concept -->
<TextRegion id="region_1">
    <TextLine id="line_1">
        <Coords points="100,200 800,200 800,250 100,250"/>
        <TextEquiv><Unicode>ข้อความบรรทัดที่ 1</Unicode></TextEquiv>
    </TextLine>
    <TextLine id="line_2">
        <Coords points="100,250 800,250 800,300 100,300"/>
        <TextEquiv><Unicode>ข้อความบรรทัดที่ 2</Unicode></TextEquiv>
    </TextLine>
    <TextLine id="line_3">
        <Coords points="100,300 800,300 800,350 100,350"/>
        <TextEquiv><Unicode>ข้อความบรรทัดที่ 3</Unicode></TextEquiv>
    </TextLine>
</TextRegion>
```
จะสังเกตได้ว่า PAGE/ALTO จะมุ่งเน้นไปที่ `<Coords>` หรือพิกัดของแต่ละบรรทัด ข้อความถูกมองแยกส่วนกัน

**ใน TEI จะมองเอกสารนี้เป็น ย่อหน้าเดียว (Logical Paragraph):**
```xml
<!-- TEI XML Concept -->
<p>
    <lb n="1" facs="#line_1"/>ข้อความบรรทัดที่ 1
    <lb n="2" facs="#line_2"/>ข้อความบรรทัดที่ 2
    <lb n="3" facs="#line_3"/>ข้อความบรรทัดที่ 3
</p>
```
จะเห็นได้ว่า TEI จัดกลุ่มข้อความทั้งหมดไว้ใน `<p>` (ย่อหน้า) เดียวกัน และใช้ `<lb/>` (Line Break) เพื่อบ่งบอกว่ามีการขึ้นบรรทัดใหม่ทางกายภาพ ทำให้ระบบคอมพิวเตอร์สามารถประมวลผลข้อความนี้ในฐานะ 1 ย่อหน้าที่ต่อเนื่องกันได้ การค้นหาคำที่เชื่อมระหว่างบรรทัดที่ 1 และ 2 จะสามารถทำงานได้ใน TEI แต่ใน PAGE อาจจะหากันไม่เจอถ้าไม่ประมวลผลล่วงหน้า

---

## 3. โครงสร้างพื้นฐานของ TEI (`<teiHeader>`, `<text>`, `<body>`) พร้อมตัวอย่าง

เอกสาร TEI XML ทุกฉบับมีสถาปัตยกรรมพื้นฐานที่คล้ายคลึงกัน โดยโครงสร้างหลักจะถูกห่อหุ้มด้วย Root element คือ `<TEI>` ภายในจะถูกแบ่งออกเป็น 2 ส่วนหลักที่ขาดไม่ได้ คือ:
1. `<teiHeader>` (Metadata ของเอกสาร)
2. `<text>` (เนื้อหาของเอกสาร)

### 3.1 องค์ประกอบของ `<teiHeader>`
`<teiHeader>` เปรียบเสมือนป้ายข้อมูล (Metadata) ที่อธิบายทุกสิ่งเกี่ยวกับเอกสารดิจิทัลฉบับนี้ ถือเป็นหัวใจสำคัญที่ทำให้เอกสาร TEI แตกต่างจากไฟล์ข้อความธรรมดา ข้อมูลเหล่านี้จะถูกนำไปใช้สืบค้นในระบบฐานข้อมูลห้องสมุด โครงสร้างภายในประกอบด้วยส่วนย่อยที่สำคัญดังนี้:

- **`<fileDesc>` (File Description):** บังคับต้องมี เป็นข้อมูลทางบรรณานุกรมของไฟล์ดิจิทัลนี้ ประกอบด้วย:
  - `<titleStmt>`: ชื่อเรื่องและผู้สร้างไฟล์
  - `<publicationStmt>`: ข้อมูลการเผยแพร่ไฟล์ (ใครจัดทำ สิทธิ์การใช้งาน หรือ License)
  - `<sourceDesc>`: ข้อมูลของเอกสารต้นฉบับ (หนังสือหรือต้นฉบับตัวเขียนที่ถูกนำมาแปลงเป็นดิจิทัล เช่น พิมพ์ครั้งแรกเมื่อใด ตีพิมพ์ที่ไหน)
- **`<encodingDesc>` (Encoding Description):** อธิบายวิธีการ หลักเกณฑ์ หรือกระบวนการที่ใช้ในการทำดิจิทัลไลเซชันและการเข้ารหัส
- **`<profileDesc>` (Profile Description):** ข้อมูลเชิงบริบทเพิ่มเติม เช่น ภาษาที่ใช้ (`<langUsage>`) หรือประเภทของข้อความ (`<textClass>`)
- **`<revisionDesc>` (Revision Description):** ประวัติการแก้ไขไฟล์ (Version history) บันทึกว่าใครเป็นผู้ปรับปรุงไฟล์ล่าสุดและปรับปรุงอะไร

#### ตัวอย่าง `<teiHeader>` แบบสมบูรณ์
```xml
<teiHeader>
    <fileDesc>
        <titleStmt>
            <title>ประชุมพงศาวดาร ภาคที่ ๑: ฉบับดิจิทัล</title>
            <author>สมเด็จพระเจ้าบรมวงศ์เธอ กรมพระยาดำรงราชานุภาพ</author>
            <respStmt>
                <resp>แปลงเป็นข้อความดิจิทัลและรหัส TEI โดย</resp>
                <name>ศูนย์วิจัยมนุษยศาสตร์ดิจิทัล</name>
            </respStmt>
        </titleStmt>
        <publicationStmt>
            <publisher>ห้องสมุดดิจิทัลแห่งชาติ</publisher>
            <availability status="free">
                <licence target="https://creativecommons.org/licenses/by/4.0/">
                    เอกสารนี้เผยแพร่ภายใต้สัญญาอนุญาต CC BY 4.0
                </licence>
            </availability>
            <date when="2024">2024</date>
        </publicationStmt>
        <sourceDesc>
            <bibl>
                <title>ประชุมพงศาวดาร ภาคที่ ๑</title>
                <publisher>โรงพิมพ์พระจันทร์</publisher>
                <pubPlace>พระนคร</pubPlace>
                <date when="1927">พ.ศ. 2470</date>
            </bibl>
        </sourceDesc>
    </fileDesc>
    <profileDesc>
        <langUsage>
            <language ident="th">Thai</language>
            <language ident="en">English (สำหรับคำอธิบายเชิงอรรถ)</language>
        </langUsage>
    </profileDesc>
</teiHeader>
```

### 3.2 องค์ประกอบของ `<text>` และ `<body>`
ส่วน `<text>` คือส่วนที่เก็บเนื้อหาหลักของเอกสาร ภายในมักแบ่งออกเป็น 3 ส่วนตามลำดับของการจัดพิมพ์หนังสือ ได้แก่:
1. **`<front>` (Front Matter):** ส่วนหน้าของหนังสือ เช่น ปกใน, คำนำ, สารบัญ, บทนำ
2. **`<body>` (Body):** เนื้อหาหลักของเอกสาร (บังคับต้องมี)
3. **`<back>` (Back Matter):** ส่วนท้ายของหนังสือ เช่น ภาคผนวก, ดัชนี, อภิธานศัพท์, บรรณานุกรม

ภายใน `<body>` จะประกอบไปด้วยองค์ประกอบเชิงโครงสร้างต่างๆ เช่น:
- `<div>`: เป็นตัวแบ่งส่วนหลัก (Division) เช่น บท (Chapter), ภาค (Part), หรือตอน (Section) มักใช้แอตทริบิวต์ `type` ร่วมด้วย เช่น `<div type="chapter">`
- `<head>`: หัวข้อ (Heading) ของ `<div>`
- `<p>`: ย่อหน้า (Paragraph) ใช้สำหรับร้อยแก้ว
- `<lg>` (Line Group) และ `<l>` (Line): ใช้สำหรับร้อยกรองหรือบทกวี
- `<pb/>` (Page Begin): จุดบอกการเริ่มต้นหน้าใหม่ของต้นฉบับ
- `<lb/>` (Line Begin): จุดบอกการเริ่มต้นบรรทัดใหม่ของต้นฉบับ [2]

#### ตัวอย่าง `<text>` ในรูปแบบร้อยแก้ว
```xml
<text>
    <front>
        <div type="preface">
            <head>คำนำ</head>
            <p>หนังสือเล่มนี้จัดทำขึ้นเพื่อการศึกษาประวัติศาสตร์และวรรณกรรม...</p>
        </div>
    </front>
    <body>
        <div type="chapter" n="1">
            <pb n="1" facs="image_001.jpg"/>
            <head>บทที่ ๑ การก่อตั้งกรุงศรีอยุธยา</head>
            <p>
                <lb n="1"/>สมเด็จพระรามาธิบดีที่ ๑ ทรงสถาปนา
                <lb n="2"/>กรุงศรีอยุธยาเป็นราชธานีเมื่อ พ.ศ. ๑๘๙๓
                <lb n="3"/>ณ บริเวณหนองโสน...
            </p>
        </div>
        <div type="chapter" n="2">
            <pb n="2" facs="image_002.jpg"/>
            <head>บทที่ ๒ สมัยพระบรมไตรโลกนาถ</head>
            <p>
                <!-- เนื้อหาในหน้า 2 -->
                <lb n="1"/>การปฏิรูปการปกครองในสมัยนี้...
            </p>
        </div>
    </body>
    <back>
        <div type="appendix">
            <head>ภาคผนวก</head>
            <p>ตารางลำดับพระมหากษัตริย์กรุงศรีอยุธยา</p>
        </div>
    </back>
</text>
```

#### ตัวอย่าง `<text>` ในรูปแบบร้อยกรอง (กลอน)
การเข้ารหัสกวีนิพนธ์ในภาษาไทย มีความท้าทายในเรื่องของการแบ่งวรรค ใน TEI สามารถใช้ `<lg>` สำหรับบท และ `<l>` สำหรับบรรทัด หรือใช้วิธีประยุกต์แท็ก `<caesura/>` เพื่อระบุการแบ่งวรรค (เช่น วรรคสดับ วรรครับ วรรครอง วรรคส่ง)

```xml
<body>
    <div type="poem">
        <head>ลิลิตพระลอ (ตอนเริ่มต้น)</head>
        <lg type="stanza">
            <l>เสียงลือเสียงเล่าอ้าง <caesura/> อันใด พี่เอย</l>
            <l>เสียงย่อมยอยศใคร <caesura/> ทั่วหล้า</l>
            <l>สองเขือพี่หลับใหล <caesura/> ลืมตื่น ฤๅพี่</l>
            <l>สองพี่คิดเองอ้า <caesura/> อย่าได้ถามเผือ</l>
        </lg>
    </div>
</body>
```

---

## 4. การทำ Semantic Enrichment (Named Entity Recognition — `<persName>`, `<placeName>`)

หนึ่งในพลังที่ยิ่งใหญ่ที่สุดของ TEI คือความสามารถในการทำ **Semantic Enrichment** หรือการเพิ่มพูนความหมายให้กับข้อความ กระบวนการนี้มักสอดคล้องกับงานทางด้าน Natural Language Processing (NLP) ที่เรียกว่า **Named Entity Recognition (NER)** ซึ่งเป็นการระบุและจำแนกประเภทของเอนทิตี (Entities) ที่อยู่ในข้อความ เช่น ชื่อบุคคล ชื่อสถานที่ องค์กร หรือวันที่

ในโปรเจกต์ Digital Humanities การกำกับ (Tagging) เอนทิตีเหล่านี้ด้วย TEI ทำให้สามารถดึงข้อมูล (Extract) ไปสร้างแผนที่ภูมิศาสตร์ประวัติศาสตร์ (GIS) หรือสร้างฐานข้อมูลความสัมพันธ์ (Social Networks) ของบุคคลในประวัติศาสตร์ได้อย่างง่ายดาย ข้อมูลเหล่านี้สามารถนำไปทำ Linked Open Data (LOD) ได้ในภายหลัง

### 4.1 แท็กสำคัญสำหรับการทำ Semantic Enrichment
TEI จัดเตรียมแท็กสำหรับการทำ NER ไว้อย่างครบถ้วน เพื่อระบุถึง Entity ประเภทต่างๆ:

- **`<persName>` (Person Name):** สำหรับชื่อบุคคล
- **`<placeName>` (Place Name):** สำหรับชื่อสถานที่เชิงภูมิศาสตร์ (เมือง, ประเทศ, แม่น้ำ, ภูเขา)
- **`<orgName>` (Organization Name):** สำหรับชื่อองค์กร, หน่วยงาน, หรือกลุ่มคน (เช่น สมาคม, กองทัพ)
- **`<date>` (Date):** สำหรับวันที่ มักใช้ร่วมกับ attribute `when` เพื่อกำหนดมาตรฐาน (ISO 8601) ทำให้คอมพิวเตอร์สามารถประมวลผลวันที่ตามหลักสากลได้
- **`<measure>` (Measure):** สำหรับหน่วยวัด เช่น จำนวนเงิน, น้ำหนัก, ระยะทาง

### 4.2 การใช้ Attributes เพื่ออ้างอิงข้อมูล (Referencing)
การใส่แท็กอย่างเดียวอาจไม่เพียงพอ เนื่องจากชื่อบุคคลหนึ่งคนอาจเขียนได้หลายแบบ (เช่น "พระนารายณ์", "สมเด็จพระนารายณ์มหาราช", "พระผู้เป็นเจ้า") หรือสถานที่ที่เปลี่ยนชื่อไปตามยุคสมัย TEI แก้ปัญหานี้ด้วยการใช้ attribute เช่น `ref` (Reference) หรือ `key` เพื่อชี้ไปยังรหัสมาตรฐาน (Authority ID) หรือ URL ของฐานข้อมูลกลาง เช่น VIAF, Geonames, หรือ Wikidata

#### ตัวอย่างการทำ Semantic Enrichment ในเอกสารประวัติศาสตร์ไทย

```xml
<p>
    ในรัชสมัย <persName ref="https://wikidata.org/wiki/Q379860">สมเด็จพระนารายณ์มหาราช</persName> 
    ได้มีการส่งราชทูตนำโดย <persName ref="wikidata:Q3042456">ออกพระวิสุทธสุนทร (ปาน)</persName> 
    เดินทางไปยัง <placeName ref="wikidata:Q142">ประเทศฝรั่งเศส</placeName> 
    เพื่อเข้าเฝ้า <persName ref="wikidata:Q7750">พระเจ้าหลุยส์ที่ 14</persName> 
    เมื่อ <date when="1686-09-01">วันที่ ๑ กันยายน พ.ศ. ๒๒๒๙</date>
</p>
```

> [!TIP]
> **อธิบายตัวอย่าง:** 
> - การระบุ `when="1686-09-01"` ใน `<date>` จะช่วยแปลงจาก "พ.ศ. ๒๒๒๙" ที่อยู่ในข้อความดิบ ให้เป็น ค.ศ. 1686 ในรูปแบบที่คอมพิวเตอร์สามารถใช้จัดเรียงลำดับเวลา (Timeline) ได้ทันที
> - การระบุ `ref="wikidata:Q142"` ทำให้ระบบรู้แน่ชัดว่า "ประเทศฝรั่งเศส" หมายถึงฝรั่งเศสในภูมิภาคยุโรป และสามารถดึงพิกัด Lat/Long จาก Wikidata มาปักหมุดบนแผนที่ได้โดยไม่ต้องค้นหาคำว่า "ฝรั่งเศส" ซ้ำ

### 4.3 การทำ Named Entity Recognition แบบอัตโนมัติ (Automated NER)
ในทางปฏิบัติ การนั่งพิมพ์แท็ก `<persName>` ด้วยมือทีละตัวในเอกสารยาวๆ เป็นเรื่องที่ใช้เวลามหาศาล ปัจจุบันโครงการ DH ส่วนใหญ่จึงใช้ Machine Learning Models (เช่น Spacy, BERT, หรือ WangchanBERTa สำหรับภาษาไทย) ทำการวิเคราะห์ NER ก่อน จากนั้นจึงแปลงผลลัพธ์ (JSON/IOB Format) ให้กลายเป็น TEI XML แบบอัตโนมัติ นักวิจัยจะมีหน้าที่แค่ตรวจสอบ (Review) ความถูกต้องเท่านั้น

---

## 5. Workflow การแปลง ALTO/PAGE ไปสู่ TEI (การรักษาพิกัดด้วย `<pb/>`, `<lb/>`)

ในกระบวนการทำงานสมัยใหม่ ข้อมูลเริ่มต้นมักจะมาจากโมเดล HTR/OCR (เช่น การใช้ eScriptorium หรือ Transkribus) ซึ่งให้ผลลัพธ์ออกมาเป็น **PAGE XML** หรือ **ALTO XML** คำถามสำคัญคือ **"เราจะแปลงจากรูปแบบ Physical ไปสู่ Logical (TEI) ได้อย่างไร โดยไม่สูญเสียความเชื่อมโยงกับรูปภาพต้นฉบับ?"** 

การแปลงข้อมูลจาก PAGE/ALTO ไปเป็น TEI จำเป็นต้องมีการวางแผนอย่างเป็นระบบ เพื่อไม่ให้ข้อมูลสูญหายระหว่างการแปลง (Lossless transformation) [3]

### 5.1 แนวคิดการรักษาพิกัดภาพ (Anchor to Image)
แม้ว่า TEI จะเน้น Logical Structure แต่ TEI มีกลไกสำหรับชี้กลับไปยังตำแหน่งบนหน้ากระดาษ ผ่านแท็ก "ว่าง" (Empty Elements) ประเภท Milestone ซึ่งทำหน้าที่ปักหมุดในเอกสาร ได้แก่:
- `<pb/>` (Page Begin): ปักหมุดบอกว่าตรงนี้คือหน้าใหม่
- `<lb/>` (Line Begin): ปักหมุดบอกว่าตรงนี้คือการขึ้นบรรทัดใหม่
- `<cb/>` (Column Begin): ปักหมุดสำหรับการขึ้นคอลัมน์ใหม่
- `facs` Attribute (Facsimile): ใช้ร่วมกับ `<pb/>` หรือ `<lb/>` เพื่ออ้างอิงถึงพิกัด (Coordinates) หรือไฟล์รูปภาพ

### 5.2 ขั้นตอนการแปลง (Transformation Workflow)

**Step 1: การประมวลผล HTR ได้ PAGE/ALTO XML**
- สแกนหนังสือและรัน HTR โมเดล ได้ผลลัพธ์เป็น ALTO XML
- ภายใน ALTO มี `<TextLine>` และ `<String>` พร้อมพิกัด `HPOS`, `VPOS` (หรือในกรณีของ PAGE จะเป็น `<Coords>`)

**Step 2: การแปลงด้วย XSLT หรือ Python Scripts**
- เขียน XSLT (Extensible Stylesheet Language Transformations) หรือใช้ Python Library (เช่น `lxml` หรือ BeautifulSoup) เพื่อทำ Mapping โครงสร้าง
- **Mapping Rules:**
  - 1 ไฟล์ ALTO (`<alto>`) $\rightarrow$ 1 `<pb facs="image.jpg"/>` ใน TEI
  - 1 แท็ก `<TextBlock>` ใน ALTO $\rightarrow$ อาจจะแปลงเป็น 1 `<p>` ใน TEI
  - 1 แท็ก `<TextLine>` ใน ALTO $\rightarrow$ สร้างแท็ก `<lb facs="#zone_1"/>` แทรกเข้าไประหว่างข้อความใน `<p>`
  - นำพิกัด (Coordinates) จาก ALTO มาแปลงเก็บไว้ใน `<facsimile>` ของ TEI

**Step 3: การใช้ XSLT สคริปต์เพื่อแปลง (ตัวอย่าง)**
เราสามารถใช้ XSLT เพื่อสั่งให้คอมพิวเตอร์แปลงข้อมูลจาก ALTO ไปยัง TEI อัตโนมัติ นี่คือตัวอย่างโครงร่าง XSLT อย่างง่าย:
```xml
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:alto="http://www.loc.gov/standards/alto/ns-v4#">
    <xsl:template match="alto:TextBlock">
        <p>
            <xsl:apply-templates select="alto:TextLine"/>
        </p>
    </xsl:template>
    
    <xsl:template match="alto:TextLine">
        <lb facs="#{@ID}"/>
        <xsl:value-of select="alto:String/@CONTENT"/>
    </xsl:template>
</xsl:stylesheet>
```
สคริปต์ด้านบนจะอ่าน `<TextBlock>` แล้วสร้าง `<p>` จากนั้นจะอ่าน `<TextLine>` เพื่อสร้าง `<lb/>` พร้อมกับดึงข้อความมาใส่ต่อกัน

**Step 4: Post-processing และ Semantic Tagging**
- ไฟล์ TEI ที่แปลงมาได้ จะมีแค่ข้อความและ `<lb/>` ขั้นตอนต่อไปคือให้นักวิจัยเข้ามาทำโครงสร้างเชิงความหมาย เช่น ระบุว่า `<p>` บล็อคไหนคือ Headings และทำการ Tagged ชื่อคน สถานที่

### 5.3 ตัวอย่างการจับคู่ระหว่าง ALTO และ TEI

**จาก ALTO XML:**
```xml
<TextBlock ID="block_1" HPOS="100" VPOS="150" WIDTH="800" HEIGHT="200">
    <TextLine ID="line_1" HPOS="100" VPOS="150" WIDTH="800" HEIGHT="50">
        <String CONTENT="ข้าพเจ้าขอรับรองว่าข้อความทั้งหมด"/>
    </TextLine>
    <TextLine ID="line_2" HPOS="100" VPOS="250" WIDTH="800" HEIGHT="50">
        <String CONTENT="ที่บันทึกไว้นี้เป็นความจริง"/>
    </TextLine>
</TextBlock>
```

**แปลงเป็น TEI XML (แบบรักษารูปแบบ):**
```xml
<TEI xmlns="http://www.tei-c.org/ns/1.0">
    <teiHeader>
        <!-- Metadata -->
    </teiHeader>
    <!-- ข้อมูลรูปภาพและพิกัด -->
    <facsimile>
        <surface xml:id="page_1" ulx="0" uly="0" lrx="1000" lry="1500">
            <graphic url="page_01.jpg"/>
            <zone xml:id="zone_line1" ulx="100" uly="150" lrx="900" lry="200"/>
            <zone xml:id="zone_line2" ulx="100" uly="250" lrx="900" lry="300"/>
        </surface>
    </facsimile>
    <text>
        <body>
            <pb xml:id="pb_1" facs="#page_1"/>
            <p>
                <lb xml:id="lb_1" facs="#zone_line1"/>ข้าพเจ้าขอรับรองว่าข้อความทั้งหมด
                <lb xml:id="lb_2" facs="#zone_line2"/>ที่บันทึกไว้นี้เป็นความจริง
            </p>
        </body>
    </text>
</TEI>
```

> [!IMPORTANT]
> สังเกตว่าใน TEI ข้อความทั้งหมดจะอยู่ใน `<p>` เดียวกัน ทำให้ความหมายของประโยคไม่ถูกตัดขาดออกจากกัน แต่สามารถชี้กลับไปที่พิกัดบรรทัดเดิมได้ผ่าน `<lb facs="#zone_line1"/>`

---

## 6. ตัวอย่างเอกสาร TEI ฉบับสมบูรณ์ที่เชื่อมโยงกับรูปภาพ

เพื่อให้เห็นภาพรวมที่ชัดเจน นี่คือตัวอย่างไฟล์ TEI ย่อขนาด (Minified Complete Example) ที่แสดงให้เห็นตั้งแต่ส่วนหัวเรื่อง (Header) การเก็บพิกัดรูปร่างใน `<facsimile>` โครงสร้างข้อความใน `<text>` และการทำ Semantic Enrichment ของเนื้อหาประวัติศาสตร์ไทย ตัวอย่างนี้ดัดแปลงมาจากการทำงานจริงในโปรเจกต์แปลเอกสารโบราณ

```xml
<?xml version="1.0" encoding="UTF-8"?>
<TEI xmlns="http://www.tei-c.org/ns/1.0">
    <!-- ส่วนที่ 1: Metadata การเข้ารหัสและข้อมูลทางบรรณานุกรม -->
    <teiHeader>
        <fileDesc>
            <titleStmt>
                <title>บันทึกการเดินทางของราชทูตไทย: ฉบับดิจิทัล TEI</title>
                <principal>คณะวิจัย Digital Humanities มหาวิทยาลัยเชียงใหม่</principal>
            </titleStmt>
            <publicationStmt>
                <publisher>สถาบันวิจัยภาษาศาสตร์</publisher>
                <date when="2026-06-03">June 3, 2026</date>
                <availability status="free">
                    <p>Open Access สำหรับงานวิจัย ภายใต้ใบอนุญาต CC BY-NC-SA 4.0</p>
                </availability>
            </publicationStmt>
            <sourceDesc>
                <bibl>
                    <title>จดหมายเหตุรายวัน</title>
                    <author>ออกพระวิสุทธสุนทร</author>
                    <date>พ.ศ. 2229</date>
                </bibl>
            </sourceDesc>
        </fileDesc>
    </teiHeader>

    <!-- ส่วนที่ 2: พิกัด Facsimile (รับข้อมูลมาจาก PAGE/ALTO HTR) -->
    <facsimile>
        <!-- ระบุพิกัดของหน้า 1 -->
        <surface xml:id="p1">
            <graphic url="images/scan_page001.tif"/>
            <!-- ระบุพิกัดของแต่ละบรรทัด (Bounding Box) -->
            <zone xml:id="p1_l1" ulx="150" uly="300" lrx="850" lry="350"/>
            <zone xml:id="p1_l2" ulx="150" uly="400" lrx="850" lry="450"/>
            <zone xml:id="p1_l3" ulx="150" uly="500" lrx="850" lry="550"/>
            <zone xml:id="p1_l4" ulx="150" uly="600" lrx="850" lry="650"/>
        </surface>
    </facsimile>

    <!-- ส่วนที่ 3: โครงสร้างทางตรรกะ เนื้อหา และ Semantic Annotation -->
    <text>
        <body>
            <div type="diary_entry">
                <!-- เริ่มต้นหน้ากระดาษใหม่ เชื่อมโยงกับ surface p1 -->
                <pb facs="#p1" n="1"/>
                
                <head>บันทึกวันที่ ๑ เดือนตุลาคม</head>
                
                <p>
                    <lb facs="#p1_l1"/>ข้าพเจ้า <persName ref="wd:Q3042456">ออกพระวิสุทธสุนทร</persName> 
                    พร้อมด้วยราชทูตและผู้ติดตาม
                    <lb facs="#p1_l2"/>ได้เข้าเฝ้า <persName ref="wd:Q7750">พระเจ้ากรุงฝรั่งเศส</persName>
                    ณ พระราชวัง <placeName ref="wd:Q2946">แวร์ซายส์</placeName> 
                    <lb facs="#p1_l3"/>การต้อนรับเป็นไปอย่างสมเกียรติยศ และมีการจัดเตรียมที่พักอย่างหรูหรา
                    <lb facs="#p1_l4"/>พระองค์ทรงตรัสถามถึงพระพลานามัยของ <persName ref="wd:Q379860">สมเด็จพระเจ้าอยู่หัว</persName> แห่ง <placeName ref="wd:Q1395924">กรุงศรีอยุธยา</placeName>
                </p>
            </div>
        </body>
    </text>
</TEI>
```

---

## 7. กรณีศึกษา: การประยุกต์ใช้ TEI กับเอกสารจดหมายเหตุ

การใช้งาน TEI สามารถยกระดับงานวิจัยมนุษยศาสตร์ดิจิทัลไปได้อีกขั้น ตัวอย่างของการประยุกต์ใช้ได้แก่:

1. **Digital Editions (การจัดพิมพ์ฉบับดิจิทัล):** โครงการต่างๆ สามารถใช้ TEI เป็นแกนหลัก (Source of truth) และใช้ซอฟต์แวร์เช่น TEI Publisher เพื่อนำไฟล์ TEI เผยแพร่ขึ้นสู่หน้าเว็บอัตโนมัติ โดยที่ผู้ใช้เว็บสามารถปรับเลือกการแสดงผลได้ว่าจะดูหน้าเอกสารที่มีคำอ่าน (Transcription) หรือดูเฉพาะคำที่ดึงความหมายมาแล้ว (เช่น กดปุ่มเพื่อไฮไลท์ชื่อสถานที่ทั้งหมดในหน้า)
2. **Linked Open Data (LOD) & Geolocation:** เมื่อเรามีแท็ก `<placeName ref="wikidata:Q2946">` เราสามารถเขียนโค้ด Python (หรือ SPARQL Query) เพื่อดึงพิกัดทางภูมิศาสตร์ของพระราชวังแวร์ซายส์จาก Wikidata เพื่อแสดงหมุดบนแผนที่ (Interactive Map) แสดงเส้นทางการเดินทางของราชทูตได้อย่างแม่นยำ
3. **Network Analysis (การวิเคราะห์เครือข่าย):** การรวบรวมแท็ก `<persName>` ตลอดทั้งเอกสาร และดูว่าชื่อบุคคลใดปรากฏร่วมกันใน `<p>` เดียวกัน (Co-occurrence) สามารถนำมาพล็อตเป็นกราฟเครือข่ายทางสังคม (Social Network Graph) แสดงถึงปฏิสัมพันธ์และความสำคัญของแต่ละบุคคลในประวัติศาสตร์
4. **Natural Language Processing Training:** เอกสาร TEI ที่ได้รับการตรวจสอบความถูกต้องแล้ว สามารถนำไปใช้เป็น Ground Truth สำหรับการเทรนโมเดล AI ขั้นสูง เพื่อทำงานด้าน Named Entity Recognition (NER) หรือ Information Extraction (IE) ในอนาคตต่อไป
5. **Prosopography (การศึกษาชีวประวัติหมู่):** นักวิจัยสามารถสกัดชื่อบุคคลจากเอกสาร TEI นับพันฉบับ เพื่อสร้างฐานข้อมูลชีวประวัติของกลุ่มคนที่อยู่ในยุคสมัยเดียวกัน ทำให้เห็นความเชื่อมโยงในระดับมหภาค (Macro-level analysis) 

---

## 8. เครื่องมือซอฟต์แวร์สำหรับการจัดการเอกสาร TEI

การทำงานกับ TEI XML จะทำได้ง่ายขึ้นหากเราใช้เครื่องมือที่เหมาะสม:
- **Oxygen XML Editor:** ซอฟต์แวร์ที่ได้รับความนิยมสูงสุดในการเขียนและแก้ไข TEI XML มีระบบตรวจสอบความถูกต้อง (Validation) อัตโนมัติ
- **TEI Publisher:** แพลตฟอร์มสำเร็จรูปที่เปลี่ยนเอกสาร TEI ให้กลายเป็นเว็บไซต์ดิจิทัลที่สวยงามโดยไม่ต้องเขียนโค้ดเพิ่มเติมมากนัก
- **eScriptorium:** สามารถเชื่อมต่อกับเวิร์กโฟลว์ HTR โดยมีส่วนขยายให้สามารถ Export จาก PAGE เป็น TEI ได้ทันที
- **Transkribus:** เครื่องมือที่ได้รับความนิยมในการทำ HTR ซึ่งมีฟังก์ชันช่วยในการ export ไฟล์เป็นรูปแบบ TEI P5 ได้ในระดับพื้นฐาน
- **BaseX / eXist-db:** ฐานข้อมูลประเภท Native XML Database ที่เหมาะสำหรับการเก็บไฟล์ TEI จำนวนมหาศาลและรองรับการคิวรี (Query) ข้อมูลด้วยภาษา XQuery [4]

---

## 9. ข้อจำกัดและความท้าทายในการประยุกต์ใช้ TEI

แม้ TEI จะมีประโยชน์มากมาย แต่ก็มีความท้าทายที่ผู้วิจัยต้องพิจารณา:
- **ความซับซ้อน (Complexity):** TEI มีแท็กจำนวนมาก ผู้ริเริ่มโครงการต้องใช้เวลาศึกษาคู่มือค่อนข้างนาน และมักเกิดคำถามว่า "ควรใช้แท็กใดจึงจะเหมาะสมที่สุด"
- **Overlapping Hierarchies (ปัญหาลำดับชั้นซ้อนทับ):** เนื่องจาก XML เป็นโครงสร้างแบบต้นไม้ (Tree structure) หากมีการอ้างอิงหรือตัดคำข้ามหน้า หรือข้ามบท มักจะเกิดปัญหาเรื่องขอบเขตของแท็กที่ไม่สามารถซ้อนทับแบบไขว้กันได้
- **ต้นทุนด้านเวลา (Time-consuming):** การทำ Semantic Enrichment หรือการใส่แท็กชื่อคน สถานที่ ด้วยมือ (Manual Tagging) ต้องใช้ความพยายามสูงมากในเอกสารที่มีขนาดใหญ่
- **ปัญหาทางด้านภาษาไทย:** การกำหนดขอบเขตของ `<w>` (Word) ในภาษาไทยที่ไม่มีการเว้นวรรคคำ ยังคงเป็นที่ถกเถียงและมีความยากลำบากในการนำมาประยุกต์ใช้จริง 

---

## 10. แหล่งอ้างอิง

1. TEI Consortium. (2024). *TEI P5: Guidelines for Electronic Text Encoding and Interchange.* Version 4.7.0. Retrieved from https://tei-c.org/guidelines/p5/
2. Burnard, L. (2014). *What is the Text Encoding Initiative?* (Marseille: OpenEdition Press).
3. Romary, L., & Holmes, M. (2019). *Integrating TEI and ALTO/PAGE for OCR Workflows.* Digital Humanities Quarterly.
4. eScriptorium Documentation. *Exporting PAGE XML to TEI.*
5. Wikidata. *Identifiers for Named Entity Recognition in DH projects.*
6. Pierazzo, E. (2015). *Digital Scholarly Editing: Theories, Models and Methods.* Routledge.
7. Flanders, J., & Jannidis, F. (Eds.). (2018). *The Shape of Data in the Digital Humanities: Modeling Texts and Text-based Resources.* Routledge.
8. Drucker, J. (2021). *The Digital Humanities Coursebook: An Introduction to Digital Methods for Research and Scholarship.* Routledge.
9. Sahle, P. (2016). *What is a Scholarly Digital Edition?* In Digital Scholarly Editing: Theories and Practices. Open Book Publishers.

---

## 11. อภิธานศัพท์ (Glossary)

- **Semantic Enrichment:** การเพิ่มพูนความหมายเชิงตรรกะเข้าไปในข้อความ เพื่อให้คอมพิวเตอร์สามารถเข้าใจบริบทได้ (เช่น รู้ว่าคำนี้คือชื่อคน หรือสถานที่)
- **Named Entity Recognition (NER):** กระบวนการทางสถิติหรือ Machine Learning เพื่อค้นหาและจัดประเภท Entity ในข้อความดิบ
- **Linked Open Data (LOD):** รูปแบบการเผยแพร่ข้อมูลที่มีโครงสร้าง (Structured Data) เพื่อให้สามารถเชื่อมโยงข้อมูลข้ามฐานข้อมูลได้
- **Apparatus:** ในบริบทของ TEI หมายถึงส่วนที่ใช้บันทึกความแตกต่าง (Variations) ระหว่างต้นฉบับเอกสารหลายๆ ฉบับ
- **Facsimile (facs):** แอตทริบิวต์ใน TEI ที่ใช้ชี้กลับไปยังไฟล์รูปภาพต้นฉบับหรือพิกัดของรูปภาพนั้น
- **ODD (One Document Does it all):** กลไกของ TEI ในการปรับแต่ง (Customize) Schema ให้เหมาะกับโปรเจกต์เฉพาะทาง
- **Milestone:** แอตทริบิวต์หรือแท็กว่าง (Empty tag) เช่น `<pb/>` ที่ใช้เพื่อสร้างจุดอ้างอิงภายในเอกสาร
- **XML Schema:** ข้อกำหนดที่ระบุว่าไฟล์ XML ต้องมีโครงสร้างอย่างไร แท็กใดใส่ตรงไหนได้บ้าง เพื่อความถูกต้องตามมาตรฐาน
- **Authority File:** แฟ้มหลักฐานหรือไฟล์ควบคุมที่เก็บชื่อหรือข้อมูลที่ผ่านการตรวจสอบแล้ว สำหรับใช้เป็นมาตรฐาน (เช่น VIAF)
- **XPath:** ภาษาสำหรับค้นหาตำแหน่งหรือโหนด (Nodes) ภายในเอกสาร XML
- **XSLT (Extensible Stylesheet Language Transformations):** ภาษาที่ใช้ในการแปลงเอกสาร XML ไปเป็นรูปแบบอื่น (เช่น แปลงจาก ALTO XML เป็น TEI หรือแปลงจาก TEI เป็น HTML)
- **HTR (Handwritten Text Recognition):** เทคโนโลยีการรู้จำตัวอักษรที่เขียนด้วยลายมือ
- **OCR (Optical Character Recognition):** เทคโนโลยีการรู้จำตัวอักษรจากการพิมพ์

---

## 12. กิตติกรรมประกาศ (Acknowledgements)

การจัดทำเอกสารคู่มือชุดนี้สำเร็จลุล่วงไปได้ด้วยดี ขอขอบคุณคณะทำงานด้านมนุษยศาสตร์ดิจิทัลทุกท่านที่ร่วมกันแบ่งปันความรู้และประสบการณ์ ทั้งนี้ หวังเป็นอย่างยิ่งว่าคู่มือนี้จะเป็นประโยชน์ต่อนักวิจัยและผู้ที่สนใจในการนำมาตรฐาน TEI XML ไปปรับใช้ในการอนุรักษ์เอกสารโบราณให้ยั่งยืนสืบไป หากมีข้อเสนอแนะประการใด สามารถแจ้งผ่าน repository ของโครงการได้

---
*(สิ้นสุดไฟล์เอกสารที่ 12: TEI XML สำหรับมนุษยศาสตร์ดิจิทัล)*

## ภาคผนวก ฏ: คู่มือปฏิบัติการ: การเข้ารหัสเอกสารฉบับวิพากษ์ (Critical Edition Coding Guidelines) ด้วย TEI P5
สถาบัน Text Encoding Initiative (TEI) ได้เสนอแนวทางการเข้ารหัสโครงสร้างเอกสารเพื่อการศึกษาในสาขามนุษยศาสตร์ดิจิทัล โดยเน้นความสำคัญของการเก็บข้อมูลการเปรียบเทียบลายมือของเอกสารโบราณหลายฉบับที่บันทึกเนื้อหาเดียวกัน (Critical Apparatus)

### การประยุกต์ใช้ในการระบุพยานเอกสาร (Witnesses)
ตัวอย่างโครงสร้างของบทวิเคราะห์ที่มีการเปรียบเทียบลายลักษณ์อักษรของคัมภีร์ใบลานไทยสองฉบับเขียนไว้ในแท็ก `<app>` ดังนี้:
```xml
<teiHeader xmlns="http://www.tei-c.org/ns/1.0">
    <fileDesc>
        <titleStmt>
            <title>คัมภีร์ใบลานพระมาลัยฉบับเปรียบเทียบ</title>
        </titleStmt>
        <publicationStmt>
            <publisher>Digital Humanities Thailand</publisher>
        </publicationStmt>
        <sourceDesc>
            <listWit>
                <witness xml:id="WitA">ฉบับวัดบวรนิเวศวิหาร (พ.ศ. 2380)</witness>
                <witness xml:id="WitB">ฉบับหอสมุดแห่งชาติ (พ.ศ. 2392)</witness>
            </listWit>
        </sourceDesc>
    </fileDesc>
</teiHeader>
<text xmlns="http://www.tei-c.org/ns/1.0">
    <body>
        <p>
            ข้อความเริ่มต้นในคัมภีร์:
            <app>
                <lem wit="#WitA">อันว่าพระมหาโมคคัลลานะเถระเจ้า</lem>
                <rdg wit="#WitB">อันว่าสมเด็จพระมหาโมคคัลลานะเถรเจ้า</rdg>
            </app>
            เสด็จจรจาริกไปในนรกโลก
        </p>
    </body>
</text>
```

การเข้ารหัสในรูปแบบนี้ช่วยรักษาข้อมูลต้นฉบับทางประวัติศาสตร์และสร้างโครงสร้างคลังข้อมูลสารสนเทศที่เชื่อมโยงถึงกันได้อย่างเป็นสากลภายใต้การสนับสนุนของสมาคมวิชาการทั่วโลก

### เชิงอรรถ
[1] TEI Consortium, eds. *TEI P5: Guidelines for Electronic Text Encoding and Interchange*. (TEI Consortium, 2023). https://www.tei-c.org/Guidelines/P5/.
[2] Burnard, Lou. *What is the Text Encoding Initiative?*. (OpenEdition Books, 2014).
[3] Ide, Nancy, and Jean Veronis. "Markup Languages and Text Encoding." *Encyclopedia of Language and Linguistics* 2 (1995): 2385-2391.
[4] Pierazzo, Elena. *Digital Scholarly Editing: Theories, Models and Methods*. (Routledge, 2015).
