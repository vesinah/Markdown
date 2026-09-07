# Query Log — Loop 20 (Phase D: Thai Paleography & Blocked Document Resolution)

**วันที่:** 2026-09-03  
**วัตถุประสงค์:** สืบค้นและกักเก็บเอกสารวิชาการภาษาไทยฉบับเต็มเรื่อง "ตัวเกษียน" และ "อักษรขอมหวัด" พร้อมทั้งปลดล็อกและสืบค้นเชิงลึกกรณีงานวิจัยนิสยะพม่าและสันนยะสิงหลที่ค้างใน `blocked-documents.md`

---

## 1. รายการสืบค้น (Query Execution Table)

| Query ID | หัวข้อ | Query String / แหล่ง | ภาษา | เครื่องมือ | ผลลัพธ์ (รายการ) | Source ใหม่ | สถานะเอกสาร |
|:---:|:---|:---|:---:|:---:|:---:|:---:|:---|
| Q20-01 | ตัวเกษียนในงาน ก่องแก้ว | `"ก่องแก้ว วีระประจักษ์" "ตัวเกษียณ" OR "ตัวเกษียน" OR "ขาม คาง ได"` | TH | `search_web` | 6 | 1 | พบการอ้างอิงถึงนิยามตัวเกษียนในคัมภีร์ใบลาน |
| Q20-02 | คัมภีร์ใบลานใน ThaiJO | `site:tci-thaijo.org "ตัวเกษียน" OR "ตัวเกษียณ"` | TH | `search_web` | 1 | 1 | พบบทความวิชาการ peer-reviewed (2023) จุฬาฯ ใน *วารสารธรรมธารา* |
| Q20-03 | บทความเต็ม วารสารธรรมธารา | `https://so01.tci-thaijo.org/index.php/dhammadhara/article/view/260009` | TH | `read_url_content` | 1 | 1 | ดาวน์โหลด PDF 34 หน้าฉบับเต็ม (2.28 MB) สำเร็จ |
| Q20-04 | Ruiz-Falqués Nissaya | `"The Nissaya Tradition and the Poetics of Pāli Grammar" filetype:pdf OR "Ruiz-Falqués" "Nissaya"` | EN | `search_web` | 8 | 1 | ระบุผลงานแท้จริง: *Journal of Burma Studies* (2017) และ PhD Cambridge (2015) |
| Q20-05 | Cambridge Dissertation | `"A Firefly in the Bamboo Reed" "Ruiz-Falqués" filetype:pdf` | EN | `search_web` | 6 | 0 | วิทยานิพนธ์ฉบับสมบูรณ์ (unpublished thesis) |
| Q20-06 | Blackburn Sannaya Monograph | `"Anne M. Blackburn" "Buddhist Learning and Textual Practice" filetype:pdf` | EN | `search_web` | 6 | 1 | ระบุข้อมูลหนังสือ Princeton 2001 ยืนยันบทบาทสันนยะ |
| Q20-07 | ตัวเกษียนใน มจร / มหาวิทยาลัย | `site:mcu.ac.th "ตัวเกษียน" OR "ตัวเกษียณ"` | TH | `search_web` | 3 | 1 | ยืนยันนิยาม: ตัวเกษียน = อักษรขอมหวัด เขียนเอนเฉียงทแยงขวา |
| Q20-08 | อักษรขอม 3 แบบ (ศานติ) | `"อักษรขอมตัวเกษียน" site:silpa-mag.com` | TH | `search_web` | 3 | 1 | บทความ ศานติ ภักดีคำ ใน *ศิลปวัฒนธรรม* |

---

## 2. เอกสารที่กักเก็บได้จริงใน Loop 20 (`loop_20/documents/`)

1. **`2023-kawisak-samantakuta-tuakasian.pdf`** (2,283,091 bytes, 34 หน้า)
   - ผู้แต่ง: พระมหากวีศักดิ์ วาปีกุลเศรษฐ์ และ ณัชพล ศิริสวัสดิ์ (จุฬาลงกรณ์มหาวิทยาลัย)
   - ชื่อบทความ: "ใบลานเรื่อง 'สมันตกูฏวัณณนา' ฉบับรดน้ำแดง รัชกาลที่ 2: การศึกษาต้นฉบับ และทบทวนกับฉบับพิมพ์ของสมาคมบาลีปกรณ์ (Pāli Text Society)"
   - วารสาร: *ธรรมธารา* ปีที่ 9 ฉบับที่ 1 (2566): 114–147 (Peer-reviewed, TCI Tier 1)
   - สกัดข้อความ: `2023-kawisak-samantakuta-tuakasian.txt` (51,905 อักขระ)
   - **PDF Health Check: PASS (1,508.9 chars/page)**

---

## 3. การประเมิน Novelty & Saturation

- **Sources ใหม่ในลูป:** 2 รายการวิชาการหลัก (พระมหากวีศักดิ์ & ณัชพล 2023, ศานติ ภักดีคำ 2559)
- **สถานะ Novelty:** มีคุณค่าสูงมากในการปลดล็อกช่องว่างทางบรรพชีวินวิทยาอักษรไทย (Thai Paleography) ซึ่งเดิมโปรเจกต์พึ่งพาเฉพาะ Walker 2020 และ Panarut 2021
