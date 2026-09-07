# 09 METS XML โครงสร้างระดับเอกสาร (Document-Level Structure)

## สารบัญ
1. [บทนำ: METS คืออะไร และทำไม ALTO ถึงต้องการ METS](#1-บทนำ-mets-คืออะไร-และทำไม-alto-ถึงต้องการ-mets)
2. [สถาปัตยกรรม 7 ส่วนของ METS](#2-สถาปัตยกรรม-7-ส่วนของ-mets)
   - [2.1 METS Header (`<metsHdr>`)](#21-mets-header-metshdr)
   - [2.2 Descriptive Metadata (`<dmdSec>`)](#22-descriptive-metadata-dmdsec)
   - [2.3 Administrative Metadata (`<amdSec>`)](#23-administrative-metadata-amdsec)
   - [2.4 File Section (`<fileSec>`)](#24-file-section-filesec)
   - [2.5 Structural Map (`<structMap>`)](#25-structural-map-structmap)
   - [2.6 Structural Links (`<structLink>`)](#26-structural-links-structlink)
   - [2.7 Behavior (`<behaviorSec>`)](#27-behavior-behaviorsec)
3. [ส่วนสำคัญ: Structural Map และ File Section ทำงานร่วมกันอย่างไร](#3-ส่วนสำคัญ-structural-map-และ-file-section-ทำงานร่วมกันอย่างไร)
4. [การทำงานร่วมกันแบบ METS และ ALTO](#4-การทำงานร่วมกันแบบ-mets-และ-alto)
5. [ตัวอย่าง METS XML ฉบับเต็มพร้อมคำอธิบาย](#5-ตัวอย่าง-mets-xml-ฉบับเต็มพร้อมคำอธิบาย)
6. [แหล่งอ้างอิง](#6-แหล่งอ้างอิง)

---

## 1. บทนำ: METS คืออะไร และทำไม ALTO ถึงต้องการ METS

ในโครงการดิจิทัล หรือโครงการแปลงเอกสารกระดาษให้อยู่ในรูปแบบดิจิทัล (Digitalization) หนึ่งในความท้าทายที่ยิ่งใหญ่ที่สุดคือการจัดการข้อมูลจำนวนมหาศาลที่เกิดขึ้นจากการสแกนเอกสาร การทำให้เอกสารเหล่านั้นสามารถอ่าน เผยแพร่ และเก็บรักษาได้อย่างยั่งยืนจำเป็นต้องอาศัยมาตรฐานกลาง [1]

### METS คืออะไร?
**METS** มีชื่อเต็มว่า **Metadata Encoding and Transmission Standard** เป็นมาตรฐานโครงสร้างข้อมูลแบบ XML ที่ทำหน้าที่เป็น **wrapper หรือ container** (ภาชนะหรือซองจดหมาย) ในการรวบรวม metadata หลากหลายรูปแบบและ digital objects (เช่น ไฟล์รูปภาพ, ไฟล์ข้อความ, ไฟล์เสียง) เข้าไว้ด้วยกันในเอกสารเดียว 

มาตรฐาน METS อยู่ภายใต้หน่วยงานดูแลที่เรียกว่า **METS Editorial Board (Library of Congress)** ซึ่งเป็นหน่วยงานระดับโลกที่ดูแลมาตรฐานการจัดการข้อมูลทางบรรณานุกรม 

> [!NOTE]
> METS ไม่ได้สร้าง metadata ขึ้นมาใหม่ทั้งหมดด้วยตัวเอง แต่มันเปิดโอกาสให้นำมาตรฐาน metadata อื่นๆ (เช่น MARC, MODS, Dublin Core) เข้ามาฝัง (embed) หรืออ้างอิง (reference) อยู่ภายในโครงสร้างของมันได้ ทำให้มีความยืดหยุ่นสูงมาก

### ทำไม ALTO ถึงต้องการ METS?
ความสัมพันธ์ระหว่าง **METS** และ **ALTO** ถือเป็นสิ่งสำคัญยิ่งในการสร้างเอกสารดิจิทัลแบบสมบูรณ์ โดยสามารถสรุปความแตกต่างและความสัมพันธ์ได้ดังนี้:

- **ALTO จัดการข้อมูลระดับหน้า (Page level):** ไฟล์ ALTO XML หนึ่งไฟล์ จะอธิบายข้อมูลเชิงพื้นที่ (Physical Layout) และเนื้อหาของ "เอกสาร 1 หน้า" เท่านั้น เช่น พิกัดของกรอบข้อความ (Bounding Box), ขนาดตัวอักษร, และเนื้อหาข้อความ (Text content) ของหน้านั้นๆ
- **METS จัดการข้อมูลระดับเล่ม/เอกสาร (Document level):** เมื่อเรามีเอกสารที่เป็นหนังสือ 1 เล่ม เราไม่ได้มีแค่ 1 หน้า 

**ตัวอย่าง Workflow อธิบายความสัมพันธ์:**
สมมติว่าเรามีหนังสือ 1 เล่ม การทำงานจะเป็นดังนี้:
1. **สแกนหนังสือ** -> ได้ภาพ (Image files เช่น `.tif`, `.jpg`) จำนวน 100 รูป
2. **ทำ OCR (Optical Character Recognition)** หรือ HTR (Handwritten Text Recognition) -> ได้ไฟล์ **ALTO XML จำนวน 100 ไฟล์** (1 ไฟล์ ต่อ 1 หน้า)
3. **ปัญหาเกิดขึ้น:** ตอนนี้เรามีไฟล์รูปภาพ 100 ไฟล์ และไฟล์ ALTO 100 ไฟล์ กระจัดกระจายอยู่ ระบบคอมพิวเตอร์หรือซอฟต์แวร์อ่านหนังสือดิจิทัลจะไม่รู้เลยว่า ภาพไหนคู่กับ ALTO ไฟล์ไหน, หน้าไหนคือหน้าปก, หน้าไหนคือสารบัญ, หน้าไหนคือบทที่ 1 หรือเรียงลำดับอย่างไร
4. **การแก้ปัญหาด้วย METS:** สร้าง **METS 1 ไฟล์** เพื่อทำหน้าที่ผูกไฟล์ภาพและไฟล์ ALTO เข้าด้วยกันตามลำดับหน้า และสร้างโครงสร้างเชิงตรรกะ (Logical structure) ระดับเล่ม

ด้วยเหตุนี้ ALTO จึงขาด METS ไปไม่ได้ หากต้องการให้เอกสารที่ถูกสแกนและแปลงข้อความสามารถประกอบร่างกลับคืนเป็นหนังสือที่สมบูรณ์ 1 เล่มในโลกดิจิทัล 

การใช้เพียงแค่ ALTO ไฟล์เดียวเดี่ยวๆ ไม่สามารถสื่อสารบริบทภาพรวมของเอกสารได้ เช่นเดียวกับที่การมีเพียงแค่หน้ากระดาษหนึ่งแผ่นที่ฉีกขาดออกมาจากหนังสือ เราสามารถอ่านข้อความในหน้านั้นได้ (ด้วย ALTO) แต่เราจะไม่รู้เลยว่าหน้านั้นมาจากหนังสือชื่ออะไร ใครแต่ง และอยู่หน้าที่เท่าไรของเล่ม (ซึ่งเป็นหน้าที่ของ METS ในการให้คำตอบ)

---

## 2. สถาปัตยกรรม 7 ส่วนของ METS

เอกสาร METS มีความโดดเด่นที่สถาปัตยกรรมที่มีการแบ่งส่วนการทำงานออกเป็น 7 ส่วนหลักอย่างชัดเจน (โครงสร้างหลัก 7 ส่วน) ซึ่งแต่ละส่วนทำหน้าที่แตกต่างกันและสามารถอ้างอิงถึงกันได้ 

โครงสร้างพื้นฐานของไฟล์ METS จะมี root element คือ `<mets>` และประกอบด้วยส่วนย่อย 7 ส่วนดังต่อไปนี้:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<mets xmlns="http://www.loc.gov/METS/" 
      xmlns:xlink="http://www.w3.org/1999/xlink" 
      OBJID="book-001" 
      PROFILE="[ต้องตรวจสอบเพิ่มเติม]">
    
    <!-- 1. METS Header -->
    <metsHdr>...</metsHdr>
    
    <!-- 2. Descriptive Metadata -->
    <dmdSec>...</dmdSec>
    
    <!-- 3. Administrative Metadata -->
    <amdSec>...</amdSec>
    
    <!-- 4. File Section -->
    <fileSec>...</fileSec>
    
    <!-- 5. Structural Map -->
    <structMap>...</structMap>
    
    <!-- 6. Structural Links -->
    <structLink>...</structLink>
    
    <!-- 7. Behavior -->
    <behaviorSec>...</behaviorSec>
    
</mets>
```

ต่อไปนี้คือรายละเอียดเชิงลึกของสถาปัตยกรรมทั้ง 7 ส่วน [2]

### 2.1 METS Header (`<metsHdr>`)
หน้าที่หลัก: เก็บ **ข้อมูลของตัวไฟล์ METS เอง (ใครสร้าง เมื่อไร)** 

ส่วนนี้จะไม่เกี่ยวกับเนื้อหาของเอกสาร (เช่น ไม่ใช่ชื่อผู้แต่งหนังสือ) แต่เป็น metadata ที่บอกว่า ไฟล์ XML นี้ถูกสร้างขึ้นเมื่อใด ใครเป็นผู้สร้าง หรือแก้ไขล่าสุดเมื่อใด

| Element/Attribute | คำอธิบาย |
|-------------------|----------|
| `CREATEDATE`      | วันและเวลาที่ไฟล์ METS นี้ถูกสร้างขึ้น |
| `LASTMODDATE`     | วันและเวลาที่มีการแก้ไขไฟล์นี้ครั้งล่าสุด |
| `<agent>`         | บุคคล, องค์กร, หรือซอฟต์แวร์ที่มีส่วนในการสร้างไฟล์นี้ |
| `<name>`          | ชื่อของ agent |
| `<note>`          | หมายเหตุเพิ่มเติม |

**ตัวอย่างโค้ด XML:**
```xml
<metsHdr CREATEDATE="2026-01-15T09:00:00" LASTMODDATE="2026-01-20T10:30:00">
    <agent ROLE="CREATOR" TYPE="ORGANIZATION">
        <name>National Library Digital Preservation Team</name>
        <note>Generated using AutoMETS Generator v2.0</note>
    </agent>
    <agent ROLE="EDITOR" TYPE="INDIVIDUAL">
        <name>Somchai Rak-archive</name>
    </agent>
    <!-- สามารถเพิ่ม agent ได้หลายคน/หลายหน่วยงาน -->
    <agent ROLE="PRESERVATION" TYPE="ORGANIZATION">
        <name>National Archives of Thailand</name>
        <note>รับผิดชอบการจัดเก็บถาวรระยะยาว (Long-term preservation)</note>
    </agent>
</metsHdr>
```

> [!NOTE]
> `ROLE` ที่ระบบ METS ยอมรับเป็นมาตรฐาน มีหลายแบบ เช่น `CREATOR` (ผู้สร้าง), `EDITOR` (ผู้แก้ไข), `ARCHIVIST` (นักจดหมายเหตุ), `PRESERVATION` (ผู้ดูแลการอนุรักษ์), และ `DISSEMINATOR` (ผู้เผยแพร่) การระบุ Role อย่างชัดเจนช่วยในการตรวจสอบย้อนกลับ (Traceability) ได้อย่างมีประสิทธิภาพ

### 2.2 Descriptive Metadata (`<dmdSec>`)
หน้าที่หลัก: เก็บ **ข้อมูลบรรณานุกรม (Descriptive metadata)** เช่น ชื่อเรื่อง (Title), ผู้แต่ง (Author), ปีที่พิมพ์ (Publication year) เป็นต้น 

ส่วนสำคัญของ `<dmdSec>` คือมันไม่ได้บังคับใช้ schema ของตัวเอง แต่มันยอมให้เรา "ฝัง" (Embed) หรือ "ชี้ไปยัง" (Reference) มาตรฐานอื่น โดย **มักใช้ร่วมกับ MARC หรือ MODS** (Metadata Object Description Schema) รวมถึง Dublin Core (DC)

**ตัวอย่างโค้ด XML (แบบฝัง Dublin Core ไว้ภายใน):**
```xml
<dmdSec ID="dmd-001">
    <mdWrap MDTYPE="DC">
        <xmlData>
            <dc:title xmlns:dc="http://purl.org/dc/elements/1.1/">
                ประวัติศาสตร์กรุงศรีอยุธยา
            </dc:title>
            <dc:creator xmlns:dc="http://purl.org/dc/elements/1.1/">
                สมเด็จพระเจ้าบรมวงศ์เธอ กรมพระยาดำรงราชานุภาพ
            </dc:creator>
            <dc:date xmlns:dc="http://purl.org/dc/elements/1.1/">
                1920
            </dc:date>
        </xmlData>
    </mdWrap>
</dmdSec>
```

### 2.3 Administrative Metadata (`<amdSec>`)
หน้าที่หลัก: เก็บ **ข้อมูลทางเทคนิค, สิทธิ, แหล่งที่มา (Administrative Metadata)** เกี่ยวกับไฟล์ที่อยู่ในโครงสร้าง ซึ่งจะถูกแบ่งย่อยออกเป็น 4 ประเภทหลัก ได้แก่:

1. `<techMD>` (Technical Metadata): ข้อมูลทางเทคนิคของไฟล์ เช่น ความละเอียดภาพ (DPI), ความลึกของสี (Color Depth), อุปกรณ์กล้องหรือเครื่องสแกนเนอร์ที่ใช้ (มักใช้มาตรฐาน NISO MIX ในการจัดเก็บ)
2. `<rightsMD>` (Rights Metadata): ข้อมูลด้านลิขสิทธิ์, สิทธิการเข้าถึง, และข้อจำกัดในการเผยแพร่ (มักใช้มาตรฐาน PREMIS หรือเผยแพร่ด้วย Creative Commons)
3. `<sourceMD>` (Source Metadata): ข้อมูลของต้นฉบับดั้งเดิม (Physical source) ว่ามาจากไหน สภาพเอกสารกระดาษเป็นอย่างไร มีรอยฉีกขาดหรือเชื้อราหรือไม่
4. `<digiprovMD>` (Digital Provenance Metadata): ประวัติการเปลี่ยนแปลงไฟล์ดิจิทัล หรือที่เรียกว่าสายพานการผลิต (Workflow history) เช่น การแปลงไฟล์จาก TIFF ต้นฉบับมาเป็น JPEG เกิดขึ้นเมื่อไหร่ และทำด้วยโปรแกรมอะไร (เช่น ImageMagick)

**ตัวอย่างโค้ด XML (การใช้ `<techMD>` และ `<rightsMD>`):**
```xml
<amdSec ID="amd-001">
    <!-- ตัวอย่าง Technical Metadata -->
    <techMD ID="tech-001">
        <mdWrap MDTYPE="NISOIMG">
            <xmlData>
                <mix:mix xmlns:mix="http://www.loc.gov/mix/v20">
                    <mix:BasicDigitalObjectInformation>
                        <mix:FormatDesignation>
                            <mix:formatName>image/tiff</mix:formatName>
                        </mix:FormatDesignation>
                    </mix:BasicDigitalObjectInformation>
                    <mix:ImageCaptureMetadata>
                        <mix:ScannerModel>
                            <mix:scannerManufacturer>Zeutschel</mix:scannerManufacturer>
                            <mix:scannerModelName>OS 12000 V</mix:scannerModelName>
                        </mix:ScannerModel>
                    </mix:ImageCaptureMetadata>
                </mix:mix>
            </xmlData>
        </mdWrap>
    </techMD>

    <!-- ตัวอย่าง Rights Metadata -->
    <rightsMD ID="right-001">
        <mdWrap MDTYPE="OTHER" OTHERMDTYPE="TEXT">
            <xmlData>
                <rights>สงวนลิขสิทธิ์ ห้ามทำซ้ำเพื่อการค้า (CC BY-NC)</rights>
            </xmlData>
        </mdWrap>
    </rightsMD>
</amdSec>
```

> [!TIP]
> `<amdSec>` มักจะซับซ้อนที่สุดในทางปฏิบัติ เพราะแต่ละสถาบันมีมาตรฐานการเก็บข้อมูลทางเทคนิคและลิขสิทธิ์ที่แตกต่างกันออกไป อย่างไรก็ตาม การเก็บข้อมูลเหล่านี้ไว้ใน METS จะเป็นประโยชน์อย่างมากในอีก 50 ปีข้างหน้า เมื่อนักอนุรักษ์ต้องการทราบว่าไฟล์ภาพนี้ถูกสร้างด้วยเทคโนโลยีใด

### 2.4 File Section (`<fileSec>`)
หน้าที่หลัก: เป็นบัญชีรายชื่อหรือ **รายการไฟล์ทั้งหมด** ที่เกี่ยวข้องกับ Digital Object นี้ (เช่น รูปภาพ `.tif`, ไฟล์ ALTO `.xml`, ไฟล์ PDF) 

โดยไฟล์ต่างๆ จะถูกจัดกลุ่มย่อยด้วยแท็ก `<fileGrp>` (File Group) ตามประเภทของไฟล์หรือการใช้งาน เช่น กลุ่มไฟล์ Master (TIFF), กลุ่มไฟล์ Access (JPEG), กลุ่มไฟล์ข้อความ (ALTO XML)

**ตัวอย่างโค้ด XML:**
```xml
<fileSec>
    <!-- กลุ่มไฟล์รูปภาพความละเอียดสูง (Master) -->
    <fileGrp ID="IMG_GRP" USE="Master Image">
        <file ID="IMG_001" MIMETYPE="image/tiff">
            <FLocat LOCTYPE="URL" xlink:href="images/page_001.tif" />
        </file>
        <file ID="IMG_002" MIMETYPE="image/tiff">
            <FLocat LOCTYPE="URL" xlink:href="images/page_002.tif" />
        </file>
    </fileGrp>
    
    <!-- กลุ่มไฟล์ข้อความที่ได้จาก OCR (ALTO) -->
    <fileGrp ID="ALTO_GRP" USE="OCR Text">
        <file ID="ALTO_001" MIMETYPE="application/xml">
            <FLocat LOCTYPE="URL" xlink:href="alto/page_001.xml" />
        </file>
        <file ID="ALTO_002" MIMETYPE="application/xml">
            <FLocat LOCTYPE="URL" xlink:href="alto/page_002.xml" />
        </file>
    </fileGrp>
</fileSec>
```

### 2.5 Structural Map (`<structMap>`)
หน้าที่หลัก: นี่คือ **หัวใจสำคัญ** ของ METS - ทำหน้าที่ **กำหนดโครงสร้างเอกสาร (เช่น เล่ม -> บท -> หน้า) และเชื่อมโยงหน้ากับไฟล์ใน `fileSec`**

`<structMap>` จะสร้างโครงสร้างแบบต้นไม้ (Hierarchical tree) คล้ายกับการทำโฟลเดอร์หรือสารบัญ โดยใช้แท็ก `<div>` ซ้อนกัน และใช้แท็ก `<fptr>` (File Pointer) เพื่อชี้ไปยังไฟล์ที่ประกาศไว้ใน `<fileSec>`

*(รายละเอียดของส่วนนี้จะอธิบายเจาะลึกใน หัวข้อที่ 3)*

### 2.6 Structural Links (`<structLink>`)
หน้าที่หลัก: สร้าง **hyperlinks ระหว่างโหนดใน `structMap`** 

ใช้ในกรณีที่มีความสัมพันธ์ข้ามไปมาที่ไม่สามารถแสดงด้วยโครงสร้างแบบต้นไม้ (Hierarchical) แบบปกติได้ เช่น ลิงก์จากหน้าสารบัญ (Table of Content) ชี้ไปยังหน้าเนื้อหา, หรือการเชื่อมโยงเนื้อหาที่กระโดดข้ามหน้า (เช่น "อ่านต่อหน้า 50") [3]

**ตัวอย่างโค้ด XML:**
```xml
<structLink>
    <!-- smLink เชื่อมโยงจาก div ที่เป็นสารบัญ ชี้ไปยัง div ที่เป็นบทที่ 1 -->
    <smLink xlink:from="div_TOC" xlink:to="div_Chapter1" />
</structLink>
```

### 2.7 Behavior (`<behaviorSec>`)
หน้าที่หลัก: กำหนด **พฤติกรรมของ executable** สำหรับ Digital Object นี้

ใช้ในกรณีที่เอกสารไม่ได้มีเพียงข้อมูลนิ่งๆ แต่อาจต้องการซอฟต์แวร์หรือแอปพลิเคชัน (Web Service หรือ Executable code) เพื่อนำเสนอเนื้อหา เช่น การฝัง URL ของ API ที่ใช้แปลงพิกัดภาพเพื่อเรนเดอร์ใน viewer เป็นต้น ส่วนนี้ไม่ค่อยนิยมใช้กันแพร่หลายนักในโครงการสแกนเอกสารทั่วไป

---

## 3. ส่วนสำคัญ: Structural Map และ File Section ทำงานร่วมกันอย่างไร

สาเหตุที่ `<structMap>` ถือเป็น **หัวใจสำคัญ** ของ METS ก็เพราะว่าข้อมูลใน `<fileSec>` นั้นเป็นเพียงรายชื่อไฟล์ (Inventory) ที่วางเรียงกันในระดับระนาบ (Flat) แต่คอมพิวเตอร์จะไม่รู้เลยว่า ไฟล์ `page_001.tif` ถือเป็นองค์ประกอบอะไรของหนังสือ (เช่น เป็นหน้าปก, เป็นใบรองปก หรือเป็นเนื้อหา?)

การนำรายชื่อไฟล์เหล่านั้นมาประกอบเป็นโครงสร้างตรรกะ (Logical structure) หรือ โครงสร้างทางกายภาพ (Physical structure) ต้องอาศัย `<structMap>` 

### กระบวนการเชื่อมโยง (The Linking Mechanism)
การทำงานร่วมกันจะใช้กลไกการอ้างอิงรหัส (ID Referencing) ระหว่าง **`ID` ใน `<file>`** และ **`FILEID` ใน `<fptr>`**

1. ใน `<fileSec>`: ทุกๆ `<file>` จะต้องถูกตั้งชื่อ `ID` (เช่น `ID="IMG_001"`)
2. ใน `<structMap>`: มีการสร้างแท็กย่อย `<div>` เพื่อสร้างโครงสร้างต้นไม้
3. ภายใน `<div>` จะมีแท็ก `<fptr>` (File Pointer) ที่ใช้ attribute ชื่อ `FILEID` ชี้กลับไปยัง `ID` ใน `<fileSec>`

### แผนภาพแสดงการเชื่อมโยง (Diagram)

```mermaid
graph TD
    subgraph "fileSec (รายการไฟล์)"
        A1[file ID="IMG_001" / images/page1.tif]
        A2[file ID="ALTO_001" / alto/page1.xml]
        B1[file ID="IMG_002" / images/page2.tif]
        B2[file ID="ALTO_002" / alto/page2.xml]
    end

    subgraph "structMap (โครงสร้างเอกสาร)"
        Book[div TYPE="book" LABEL="ประวัติศาสตร์กรุงศรีฯ"]
        Page1[div TYPE="page" ORDER="1" LABEL="Page 1"]
        Page2[div TYPE="page" ORDER="2" LABEL="Page 2"]
        
        Book --> Page1
        Book --> Page2
        
        fptr1_img[fptr FILEID="IMG_001"]
        fptr1_alto[fptr FILEID="ALTO_001"]
        Page1 --> fptr1_img
        Page1 --> fptr1_alto
        
        fptr2_img[fptr FILEID="IMG_002"]
        fptr2_alto[fptr FILEID="ALTO_002"]
        Page2 --> fptr2_img
        Page2 --> fptr2_alto
    end
    
    fptr1_img -.->|ชี้ไปยัง ID| A1
    fptr1_alto -.->|ชี้ไปยัง ID| A2
    fptr2_img -.->|ชี้ไปยัง ID| B1
    fptr2_alto -.->|ชี้ไปยัง ID| B2
```

จากไดอะแกรมข้างต้น จะเห็นว่า `<div>` ชนิด `page` ที่ระบุลำดับเป็นหน้าที่ 1 (`ORDER="1"`) มีการเรียกใช้ไฟล์ 2 ไฟล์พร้อมกันผ่าน `<fptr>` คือ ไฟล์รูปภาพและไฟล์ข้อความ ALTO ทำให้ซอฟต์แวร์นำเสนอหนังสือ (Viewer) สามารถนำรูปภาพหน้า 1 มาแสดง พร้อมทั้งนำเนื้อหาและพิกัดจาก ALTO ไฟล์ที่ 1 มาซ้อนทับ (Overlay) กันได้อย่างสมบูรณ์

### ประเภทของ `<div>` ในการสร้างโครงสร้าง
ในระดับมาตรฐาน การสร้าง `<div>` ภายใน `<structMap>` มีความยืดหยุ่นสูงมาก แต่ในการจัดทำเอกสารดิจิทัล เรามักจะพบประเภทของ `TYPE` ที่ใช้บ่อยดังตารางด้านล่างนี้:

| ประเภท (TYPE) | คำอธิบายและการใช้งาน | ตัวอย่างการใช้งานจริง |
|---------------|----------------------|------------------------|
| `document` | ระดับสูงสุดของโครงสร้าง ใช้บอกว่านี่คือเอกสาร 1 ชิ้น | `<div TYPE="document" LABEL="รายงาน">` |
| `book` | คล้าย document แต่เจาะจงว่าเป็นลักษณะรูปเล่มหนังสือ | `<div TYPE="book" LABEL="พงศาวดาร">` |
| `chapter` | ระดับบทย่อยภายในหนังสือ | `<div TYPE="chapter" LABEL="บทที่ 1">` |
| `section` | หมวดหมู่ หรือตอนย่อย | `<div TYPE="section" LABEL="ภาคตะวันออก">` |
| `page` | ระดับหน้ากระดาษ (Physical) | `<div TYPE="page" ORDER="1" LABEL="หน้า 1">` |
| `illustration`| ระบุส่วนที่เป็นภาพประกอบโดยเฉพาะ | `<div TYPE="illustration">` |

การกำหนด `TYPE` อย่างชัดเจนช่วยให้ระบบสืบค้น (Search Engine) และระบบ Viewer เข้าใจบริบทของหน้าหรือเนื้อหานั้นๆ ได้ดีขึ้น ว่ากำลังนำเสนอส่วนใดของหนังสือ [4]

---

## 4. การทำงานร่วมกันแบบ METS และ ALTO

ตาม **ตัวอย่าง_Workflow** ที่กำหนดไว้คือ: "สแกนหนังสือ -> ได้ภาพ 100 รูป -> ทำ OCR ได้ ALTO 100 ไฟล์ -> สร้าง METS 1 ไฟล์เพื่อผูกภาพ+ALTO เข้าด้วยกันตามลำดับหน้า"

หัวข้อนี้จะแสดงให้เห็นถึงวิธีปฏิบัติที่โปรเจกต์ระดับสากลนิยมใช้ในการผูกรวม METS และ ALTO ในโลกของการทำ OCR (Optical Character Recognition) หรือ HTR (Handwritten Text Recognition)

### โครงสร้างตรรกะแบบ Physical Structure
โดยปกติแล้ว `<structMap>` สามารถสร้างได้ 2 แบบ คือแบบ Logical (ตามบทบรรณาธิการ เช่น บทที่ 1, บทที่ 2) และแบบ Physical (ตามกายภาพหนังสือ เช่น หน้า 1, หน้า 2, หน้า 3)

ในการผูกกับ ALTO เรามักจะใช้โครงสร้างแบบ **Physical** เป็นหลัก เนื่องจาก ALTO เก็บพิกัดและข้อความทีละหน้า (Page level) อย่างเคร่งครัด 

### ตัวอย่าง XML อ้างอิง ALTO หลายๆ หน้า
ด้านล่างนี้คือตัวอย่างการนำเสนอข้อมูลของ `<fileSec>` และ `<structMap>` ที่แสดงการทำงานร่วมกันโดยที่ METS 1 ไฟล์ อ้างอิงไฟล์ภาพ 2 ไฟล์ และไฟล์ ALTO 2 ไฟล์

```xml
<!-- ส่วนประกาศรายการไฟล์ (File Section) -->
<fileSec>
    <!-- ไฟล์ภาพ TIF -->
    <fileGrp ID="IMG_GROUP" USE="Master Image">
        <file ID="IMG_001" MIMETYPE="image/tiff">
            <FLocat LOCTYPE="URL" xlink:href="images/book001_p001.tif"/>
        </file>
        <file ID="IMG_002" MIMETYPE="image/tiff">
            <FLocat LOCTYPE="URL" xlink:href="images/book001_p002.tif"/>
        </file>
    </fileGrp>
    
    <!-- ไฟล์ข้อความเชิงพิกัด ALTO XML -->
    <fileGrp ID="ALTO_GROUP" USE="ALTO XML">
        <file ID="ALTO_001" MIMETYPE="application/xml">
            <FLocat LOCTYPE="URL" xlink:href="alto/book001_p001.xml"/>
        </file>
        <file ID="ALTO_002" MIMETYPE="application/xml">
            <FLocat LOCTYPE="URL" xlink:href="alto/book001_p002.xml"/>
        </file>
    </fileGrp>
</fileSec>

<!-- ส่วนโครงสร้างระดับเล่ม (Structural Map) -->
<structMap TYPE="PHYSICAL">
    <!-- โหนดหลักระดับเล่ม -->
    <div TYPE="physSequence">
        
        <!-- หน้าที่ 1 -->
        <div TYPE="page" ORDER="1" ID="page_001">
            <fptr FILEID="IMG_001"/>  <!-- ดึงภาพหน้า 1 -->
            <fptr FILEID="ALTO_001"/> <!-- ดึง ALTO หน้า 1 มาวางคู่กับภาพ -->
        </div>
        
        <!-- หน้าที่ 2 -->
        <div TYPE="page" ORDER="2" ID="page_002">
            <fptr FILEID="IMG_002"/>  <!-- ดึงภาพหน้า 2 -->
            <fptr FILEID="ALTO_002"/> <!-- ดึง ALTO หน้า 2 มาวางคู่กับภาพ -->
        </div>
        
    </div>
</structMap>
```

> [!IMPORTANT]
> **ระบบ IIIF (International Image Interoperability Framework)** และระบบ Viewer จำนวนมาก จะอาศัยโครงสร้าง `<structMap>` ร่วมกับ `<fileSec>` นี้ ในการสร้างแถบการเลื่อนอ่านหน้าหนังสือ (Page navigation) และสามารถสร้างแถบสืบค้นข้อความ (Text search) ด้วยการนำข้อมูลจากไฟล์ ALTO มาทำงานอยู่เบื้องหลังภาพแผ่นนั้น

---

## 5. ตัวอย่าง METS XML ฉบับเต็มพร้อมคำอธิบาย

เพื่อความเข้าใจที่ครอบคลุม นี่คือตัวอย่างไฟล์ METS ฉบับเต็ม (ในรูปแบบความยาวปานกลาง) ที่รวมโครงสร้างหลักครบถ้วน โดยจำลองกรณี "เอกสารจดหมายเหตุ 1 เล่ม (มี 2 หน้า)" ที่ผ่านกระบวนการ HTR เรียบร้อยแล้ว

```xml
<?xml version="1.0" encoding="UTF-8"?>
<mets xmlns="http://www.loc.gov/METS/" 
      xmlns:xlink="http://www.w3.org/1999/xlink" 
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      OBJID="doc-th-hist-001" 
      LABEL="รายงานการประชุมปี พ.ศ. 2475"
      PROFILE="[ต้องตรวจสอบเพิ่มเติม]">

    <!-- 1. METS Header: ข้อมูลของไฟล์ METS เอง -->
    <metsHdr CREATEDATE="2026-06-03T10:00:00" LASTMODDATE="2026-06-03T11:00:00">
        <agent ROLE="CREATOR" TYPE="ORGANIZATION">
            <name>สถาบันเทคโนโลยีดิจิทัล</name>
            <note>โครงการอนุรักษ์เอกสารโบราณแห่งชาติ</note>
        </agent>
        <agent ROLE="ARCHIVIST" TYPE="INDIVIDUAL">
            <name>นักจดหมายเหตุดิจิทัล A</name>
        </agent>
    </metsHdr>

    <!-- 2. Descriptive Metadata: ข้อมูลบรรณานุกรม (ใช้ Dublin Core) -->
    <dmdSec ID="dmd-001">
        <mdWrap MDTYPE="DC">
            <xmlData>
                <dc:title>รายงานการประชุมสภาผู้แทนราษฎร ครั้งที่ 1</dc:title>
                <dc:date>1932</dc:date>
                <dc:language>th</dc:language>
                <dc:description>เอกสารพิมพ์ดีดบันทึกการประชุม ผ่านกระบวนการ OCR แล้ว</dc:description>
            </xmlData>
        </mdWrap>
    </dmdSec>

    <!-- 3. Administrative Metadata: ข้อมูลทางเทคนิคและสิทธิ์ -->
    <amdSec ID="amd-001">
        <rightsMD ID="right-001">
            <mdWrap MDTYPE="OTHER" OTHERMDTYPE="TEXT">
                <xmlData>
                    <rightsDeclaration>เอกสารนี้เป็นสาธารณสมบัติ (Public Domain) ไม่สงวนลิขสิทธิ์</rightsDeclaration>
                </xmlData>
            </mdWrap>
        </rightsMD>
    </amdSec>

    <!-- 4. File Section: รายการไฟล์ทั้งหมดในเล่ม -->
    <fileSec>
        <!-- กลุ่มที่ 1: ภาพต้นฉบับ Master -->
        <fileGrp ID="GRP_MASTER" USE="Master">
            <file ID="IMG_01" MIMETYPE="image/tiff" SIZE="25000000">
                <FLocat LOCTYPE="URL" xlink:href="file:///archive/master/p01.tif" />
            </file>
            <file ID="IMG_02" MIMETYPE="image/tiff" SIZE="25500000">
                <FLocat LOCTYPE="URL" xlink:href="file:///archive/master/p02.tif" />
            </file>
        </fileGrp>

        <!-- กลุ่มที่ 2: ภาพสำหรับแสดงผล Access (เช่น JPEG ย่อขนาด) -->
        <fileGrp ID="GRP_ACCESS" USE="Access">
            <file ID="JPG_01" MIMETYPE="image/jpeg">
                <FLocat LOCTYPE="URL" xlink:href="file:///web/access/p01.jpg" />
            </file>
            <file ID="JPG_02" MIMETYPE="image/jpeg">
                <FLocat LOCTYPE="URL" xlink:href="file:///web/access/p02.jpg" />
            </file>
        </fileGrp>

        <!-- กลุ่มที่ 3: ไฟล์ข้อความและพิกัด ALTO XML -->
        <fileGrp ID="GRP_ALTO" USE="ALTO">
            <file ID="ALTO_01" MIMETYPE="application/xml">
                <FLocat LOCTYPE="URL" xlink:href="file:///ocr/alto/p01.xml" />
            </file>
            <file ID="ALTO_02" MIMETYPE="application/xml">
                <FLocat LOCTYPE="URL" xlink:href="file:///ocr/alto/p02.xml" />
            </file>
        </fileGrp>
    </fileSec>

    <!-- 5. Structural Map: โครงสร้างตรรกะแบบกายภาพของหนังสือ -->
    <structMap TYPE="PHYSICAL">
        <!-- โหนดระดับเล่มเอกสาร เชื่อมกับ dmd-001 เพื่อบอกว่าเล่มนี้คือหนังสือชื่ออะไร -->
        <div TYPE="document" DMDID="dmd-001" ADMID="amd-001">
            
            <!-- หน้าปก / หน้าแรก -->
            <div ID="page_1" TYPE="page" ORDER="1" LABEL="หน้าปก">
                <!-- fptr ชี้ไปที่ไฟล์ภาพ Master -->
                <fptr FILEID="IMG_01" />
                <!-- fptr ชี้ไปที่ไฟล์ภาพ Access -->
                <fptr FILEID="JPG_01" />
                <!-- fptr ชี้ไปที่ไฟล์ ALTO สำหรับข้อความหน้า 1 -->
                <fptr FILEID="ALTO_01" />
            </div>

            <!-- หน้าเนื้อหา / หน้าสอง -->
            <div ID="page_2" TYPE="page" ORDER="2" LABEL="หน้า 2">
                <fptr FILEID="IMG_02" />
                <fptr FILEID="JPG_02" />
                <fptr FILEID="ALTO_02" />
            </div>

        </div>
    </structMap>

</mets>
```

### คำอธิบายโค้ดทีละส่วน (Line-by-line explanation summary):
- **ส่วนหัว (`<mets>`):** เป็นการประกาศ namespace พื้นฐาน รวมถึงชี้ไปยัง `xlink` ซึ่งจำเป็นสำหรับการทำ FLocat ในการอ้างอิงไฟล์ภายนอก
- **ส่วน `<metsHdr>`:** ระบุตัวสถาบันหรือผู้ทำหน้าที่สร้างไฟล์ METS นี้ พร้อมเวลา (Timestamp)
- **ส่วน `<dmdSec>`:** ใช้ `MDTYPE="DC"` เพื่อบอกว่าโครงสร้างภายในจะปฏิบัติตามมาตรฐาน Dublin Core ซึ่งเป็นที่นิยมและใช้งานง่ายสำหรับการใส่ metadata ชื่อเรื่อง ผู้แต่ง และปี
- **ส่วน `<fileSec>`:** ถูกแบ่งเป็น 3 `<fileGrp>` คือ Master, Access, และ ALTO นี่เป็น Best Practice เพื่อให้ระบบเลือกว่าจะใช้ไฟล์คุณภาพสูงสำหรับประมวลผล, ใช้ JPEG สำหรับเว็บแอปพลิเคชัน, และใช้ ALTO สำหรับสืบค้นข้อความ
- **ส่วน `<structMap>`:** โหนดระดับบนสุด (document) มีการอ้างอิงกลับไปยังบรรณานุกรมด้วย `DMDID="dmd-001"` จากนั้นสร้าง `<div>` ชนิด `page` 2 หน้า แต่ละหน้าจะเชื่อมโยงไฟล์จาก 3 `<fileGrp>` มาผูกติดไว้ที่เดียวกันอย่างสวยงาม

การใช้ METS ทำให้ข้อมูลที่กระจัดกระจายหลายไฟล์ถูกประกอบร่างเป็นเอกสารเดียวที่มีความหมายทั้งทางโครงสร้าง (Structure), ทางบรรณานุกรม (Metadata) และสอดคล้องกับพิกัดในระดับหน้าของ ALTO XML

---

## 6. แหล่งอ้างอิง

- **METS Editorial Board (Library of Congress):** ข้อมูลมาตรฐานหลักเกี่ยวกับโครงสร้างและสถาปัตยกรรม 7 ส่วน
- ข้อมูลดิบที่ผ่านการตรวจสอบจากโปรเจกต์ HTR (Verified Data: METS Metadata Encoding and Transmission Standard)
- มาตรฐานการเชื่อมโยงข้อมูล Physical Layout (ALTO Page level) และ Document level (METS)

## ภาคผนวก ฌ: คู่มือการจัดโครงสร้างเอกสารระดับระบบ: การเชื่อมโยง METS XML, ALTO XML และภาพถ่ายดิจิทัล
มาตรฐาน METS (Metadata Encoding and Transmission Standard) ทำหน้าที่เสมือนกับ 'แฟ้มห่อหุ้ม' (Wrapper) ที่รวบรวมไฟล์รูปภาพสแกนระดับมาสเตอร์ (TIFF) ไฟล์ภาพเผยแพร่เว็บ (JPEG) และข้อความที่แปลงจาก OCR (ALTO XML) เข้าเป็นหน่วยสารสนเทศเดียวกัน (Archival Information Package - AIP)

### แผนผังความสัมพันธ์ระดับแท็ก
ในเอกสาร METS ไฟล์โครงสร้างบรรทัดและคำจะถูกลงทะเบียนไว้ภายในแท็ก `<fileSec>` (File Section) และจัดหมวดหมู่ผ่านแท็ก `<structMap>` (Structural Map) ดังแผนภาพตัวอย่างด้านล่างนี้:
```xml
<mets xmlns="http://www.loc.gov/METS/"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.loc.gov/METS/ http://www.loc.gov/standards/mets/mets.xsd">
    <metsHdr CREATEDATE="2026-06-05T10:00:00Z">
        <agent ROLE="CREATOR" TYPE="ORGANIZATION">
            <name>National Library Archive</name>
        </agent>
    </metsHdr>
    <fileSec>
        <fileGrp USE="master">
            <file ID="IMG_001" MIMETYPE="image/tiff">
                <FLocat LOCTYPE="URL" xlink:href="master/page_001.tif" xmlns:xlink="http://www.w3.org/1999/xlink"/>
            </file>
        </fileGrp>
        <fileGrp USE="ocr">
            <file ID="ALTO_001" MIMETYPE="text/xml">
                <FLocat LOCTYPE="URL" xlink:href="ocr/page_001.xml" xmlns:xlink="http://www.w3.org/1999/xlink"/>
            </file>
        </fileGrp>
    </fileSec>
    <structMap TYPE="physical">
        <div ID="phys_book" TYPE="book">
            <div ID="p_001" ORDER="1" TYPE="page">
                <fptr FILEID="IMG_001"/>
                <fptr FILEID="ALTO_001"/>
            </div>
        </div>
    </structMap>
</mets>
```

### เชิงอรรถ
[1] Digital Library Federation. *METS: Metadata Encoding and Transmission Standard Schema Version 1.12*. (Library of Congress, 2020). https://www.loc.gov/standards/mets/.
[2] Cantara, Linda. "METS: The Metadata Encoding and Transmission Standard." *Cataloging & Classification Quarterly* 40, no. 3-4 (2005): 237-253. doi:10.1300/J104v40n03_16.
[3] McDonough, Jerome P. "XML APIs and Digital Libraries: The METS Experience." *D-Lib Magazine* 12, no. 4 (2006). doi:10.1045/april2006-mcdonough.
[4] Library of Congress. *METS Implementation Registry Guidelines*. (Library of Congress, 2018).
