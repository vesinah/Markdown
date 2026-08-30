# MDBrowse — Markdown, PDF & Image Reader

MDBrowse เป็นโปรแกรมอ่านเอกสาร Markdown (.md), PDF (.pdf) และรูปภาพ (.png, .jpg, .webp, ฯลฯ) แบบออฟไลน์ 100% บน Google Chrome โดยใช้สถาปัตยกรรม Modular Source (`src/`) และคอมไพล์เป็น Standalone Single-File (`MDBrowse.html`)

---

## สารบัญเอกสาร (Documentation Index)
- [คู่มือเชิงเทคนิคฉบับสมบูรณ์ (TECHNICAL_MANUAL.md)](./TECHNICAL_MANUAL.md) — สถาปัตยกรรมระบบ, Data Model, กลไกแต่ละโมดูล และแนวทางการพัฒนาต่อสำหรับนักพัฒนาและ AI Agent
- [ไฟล์ต้นฉบับเดิม (MDBrowse_backup.html)](./MDBrowse_backup.html) — ไฟล์สำรองเวอร์ชันก่อนการยกเครื่องสถาปัตยกรรม

---

## โครงสร้างโครงการ (Project Structure)
```
D:/01_APP/Markdown/
├── MDBrowse.html              # แอปพลิเคชันพร้อมใช้งาน (Standalone Single-File)
├── MDBrowse_backup.html       # ไฟล์สำรองต้นฉบับเดิม
├── README.md                  # สรุปภาพรวมและวิธีใช้งานเบื้องต้น
├── TECHNICAL_MANUAL.md        # คู่มือเชิงเทคนิคสำหรับ Developer และ AI Agent
├── build.js                   # สคริปต์คอมไพล์ src/ -> MDBrowse.html
└── src/                       # ซอร์สโค้ดแบบแยกโมดูล
    ├── css/                   # สไตล์ชีตแบ่งตามหน้าที่ (base, sidebar, reader, markdown, ruler, pdfview, imgview, themes)
    ├── js/                    # สคริปต์ JavaScript แบบแยกโมดูล
    │   ├── core/              # ระบบฐานข้อมูล IndexedDB, State, File System Access API
    │   ├── tree/              # Data structure ของโครงสร้างไฟล์ และ Tree UI
    │   ├── reader/            # Engine สำหรับ Markdown, PDF.js, รูปภาพ, สารบัญ และเชิงอรรถ
    │   ├── search/            # ระบบค้นหาชื่อไฟล์และค้นหาเต็มข้อความ (Full-Text Search)
    │   ├── ui/                # ตัวจัดการขนาดไซด์บาร์, ไม้บรรทัด, สลับธีม และสีตัวอักษร
    │   └── app.js             # ตัวประสานงานหลักและจุดเริ่มต้นระบบ (Bootstrap Coordinator)
    └── vendor/                # ไลบรารี Third-party ออฟไลน์ (Marked, Purify, HLJS, KaTeX, PDF.js + Worker)
```

---

## วิธีการพัฒนาและคอมไพล์ (Development & Build)

เมื่อมีการแก้ไขไฟล์ใดๆ ในโฟลเดอร์ `src/` ให้รันคำสั่ง:
```bash
node build.js
```
สคริปต์จะรวม CSS, ไลบรารี Vendor และ JS ทั้งหมดเข้าสู่ `MDBrowse.html` เป็นไฟล์เดี่ยวที่เปิดใช้งานผ่าน `file:///` บน Google Chrome ได้ทันที 100% ออฟไลน์

---

## คุณสมบัติเด่น (Key Features)
1. **Mozilla PDF.js Canvas Engine**: เรนเดอร์ PDF ด้วย HTML5 Canvas ปลอดภัย ไม่ถูกบล็อกโดย Chrome Sandbox
2. **ขยายโฟลเดอร์ `final` เป็นค่าเริ่มต้น**: กางเฉพาะโฟลเดอร์เป้าหมายและเส้นทางบรรพบุรุษอัตโนมัติ
3. **ปุ่มควบคุมไซด์บาร์**: แยกปุ่ม "เฉพาะ final" และ "พับทั้งหมด" ชัดเจน
4. **ฟอนต์ Noto Serif Thai**: ให้อารมณ์อ่านหนังสือ พร้อมปุ่ม `A-`, `A`, `A+` ปรับขนาดแบบเรียลไทม์
5. **เชิงอรรถสองทิศทาง (Bidirectional Footnotes)**: ลิงก์ `[xx]` / `[^xx]` ไปยังคำอธิบาย และกด `↩` กลับมาที่ข้อความเดิมพร้อมไฟกระพริบ
6. **ไม้บรรทัดและเส้นขอบเขตเนื้อหา (Interactive Ruler & Margin Guides)**: ลากขยาย-หดขอบกระดาษซ้ายขวาได้อิสระ ดับเบิลคลิกเพื่อรีเซ็ต พร้อมระบบจางลงอัตโนมัติ (Auto-Fading) เมื่อไม่ได้ใช้งาน
