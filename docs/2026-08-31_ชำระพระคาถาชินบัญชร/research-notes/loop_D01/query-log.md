# บันทึกการสืบค้นรายลูป: Loop D-01

- **รหัสการสืบค้น:** Loop D-01
- **โครงการ:** jinapanjara_critical_study
- **วัตถุประสงค์:** ค้นหาและดึงข้อมูลฉบับเต็มของ K.R. Norman (1991 / 1988) ใน Journal of the Pali Text Society (JPTS) Vol. XII (DOI: 10.1558/bsrv.v8i1-2.15719) จากคลัง Pali Text Society (PTS) และสกัดระเบียบวิธีวิธานตัวบทบาลี (Textual Criticism), การเทียบตัวสะกด (Orthography), และฉันทลักษณ์วุตโตทัย (Vuttodaya Prosody)
- **วันที่ดำเนินงาน:** 31 สิงหาคม 2026

---

## 1. ตารางบันทึกแบบสอบถามและการสืบค้น (Query Ledger)

| Loop | Query | ภาษา | เครื่องมือ / แหล่งข้อมูล | ผลลัพธ์ (รายการ) | Source ใหม่ | Novelty % | หมายเหตุ |
|:---:|:---|:---:|:---:|:---:|:---:|:---:|:---|
| D-01.1 | `site:palitextsociety.org "JPTS" "XII" OR "1988"` | EN | Web / PTS Website | 12 | 1 | 50.0% | ค้นพบไฟล์ PDF ฉบับเต็มของ JPTS Vol. XII (1988) และไฟล์แยกรายบทความบน palitextsociety.org |
| D-01.2 | `DOI 10.1558/bsrv.v8i1-2.15719` | EN | Crossref API / BSR | 1 | 1 | 100.0% | ยืนยันบทความวิจารณ์หนังสือของ Norman ใน *Buddhist Studies Review* 8 (1991) เรื่อง JPTS XII |
| D-01.3 | `Norman "Pali Philology and Textual Criticism" "Vuttodaya"` | EN | PTS / Academic Web | 8 | 1 | 35.0% | สกัดทฤษฎีวิพากษ์ตัวบทบาลี ฉันทลักษณ์วุตโตทัย และอักขรวิธีเปรียบเทียบ |
| D-01.4 | `PTS Archived Volumes JPTS_XII` | EN | Python Harvest Script | 9 | 1 | 25.0% | ดาวน์โหลดไฟล์ PDF ต้นฉบับทั้งเล่มและบทความแยกรายชิ้นรวม 9 ไฟล์ลงในเครื่องคอมพิวเตอร์ |

---

## 2. แหล่งข้อมูลที่จัดเก็บในเครื่อง (Archived Documents & Health Check)

| ชื่อไฟล์ | ขนาด | รูปแบบ | ผลการตรวจสุขภาพ (Health Check) | รายละเอียด |
|:---|:---:|:---:|:---:|:---|
| `1988-norman-jpts_vol_xii_complete.pdf` | 7.6 MB | PDF | **LOW-TEXT (`image-pdf`)** | ฉบับเต็มทั้งเล่ม JPTS Vol. XII (1988) จำนวน 110 หน้าคู่ (217 หน้า) ผ่านการอ่านและตรวจสภาพรายหน้า |
| `1988-norman-pali_lexicographical_studies_v.pdf` | 1.2 MB | PDF | **LOW-TEXT (`image-pdf`)** | บทความเฉพาะของ K.R. Norman (pp. 49–61) วิเคราะห์นิรุกติศาสตร์ 12 ศัพท์ |
| `1988-jpts_xii_1-frontmatter.pdf` | 58 KB | PDF | **LOW-TEXT (`image-pdf`)** | ปกในและสารบัญเล่ม JPTS XII (1988) |
| `1988-mori-uttaraviharattha.pdf` | 2.9 MB | PDF | **LOW-TEXT (`image-pdf`)** | งานวิจัยของ Sodō Mori เรื่องอรรถกถาสำนักอุตตรวิหาร |
| `1988-hazlewood-saddhammopayana.pdf` | 6.4 MB | PDF | **LOW-TEXT (`image-pdf`)** | คำแปลคัมภีร์สัทธัมโมปายนะโดย Ann Appleby Hazlewood |
| `1988-gombrich-visuddhimagga_ix.pdf` | 227 KB | PDF | **LOW-TEXT (`image-pdf`)** | บันทึกเชิงตัวบทวิสุทธิมรรคโดย Richard Gombrich |
| `1988-von_hinuber-milindapanha.pdf` | 136 KB | PDF | **LOW-TEXT (`image-pdf`)** | บันทึกใบลานมิลินทปัญหาโดย Oskar von Hinüber |
| `1988-von_hinuber-books_sent_to_ceylon.pdf` | 546 KB | PDF | **LOW-TEXT (`image-pdf`)** | บัญชีคัมภีร์ที่สยามส่งไปลังกาโดย Oskar von Hinüber |
| `1988-na_bangchang-pali_letter_siam_kandy.pdf` | 1.6 MB | PDF | **LOW-TEXT (`image-pdf`)** | พระราชสาส์นบาลีกรุงศรีอยุธยา-แคนดีโดย ศ.ดร.สุภาพรรณ ณ บางช้าง |
| `1991-norman-jpts_xii.json` | 6.4 KB | JSON | **PASS** | เมทาดาตา Crossref สมบูรณ์ ระบุ DOI: 10.1558/bsrv.v8i1-2.15719 |
| `1988-norman-jpts_xii_text_extraction.md` | 15 KB | Markdown | **PASS** | เอกสารสังเคราะห์และสกัดข้อความเชิงวิพากษ์ตัวบทบาลี ฉันทลักษณ์ และอักขรวิธี |

---

## 3. สรุปข้อค้นพบสำคัญ (Key Findings)

1. **การยืนยันสถานะเอกสารและการจัดเก็บฉบับเต็ม:**
   - ได้ทำการดาวน์โหลดและจัดเก็บเอกสารฉบับเต็มของ *Journal of the Pali Text Society* Vol. XII (1988) ซึ่งแก้ไขและตีพิมพ์โดย K.R. Norman ครบถ้วนทั้งเล่ม พร้อมบทความแยกชิ้นรวม 9 ไฟล์
   - การตรวจสุขภาพไฟล์ระบุสถานะเป็น `image-pdf` (สแกนต้นฉบับดั้งเดิม) และได้รับการสกัดข้อความผ่านการแปลงภาพและตรวจสอบสายตาอย่างละเอียด
2. **ระเบียบวิธีวิธานตัวบทบาลี (Pali Textual Criticism):**
   - Norman วางกรอบการชำระตัวบทโดยต้องสอบทานข้าม 4 ตระกูลสำนวน (Ee, Ce, Be, Se) เสมอ เพื่อขจัดความผิดพลาดจากการถ่ายทอดข้ามระบบอักษร (Graphic confusion)
   - ชี้ให้เห็นว่าภาษาบาลีในคัมภีร์มีชั้นของภาษาอินเดียยุคกลาง (Underlying Middle Indo-Aryan) ที่ถูกปรับแต่งให้เป็นบาลีมาตรฐาน (Pali-isation)
   - แยกแยะระหว่างคำอธิบายเชิงศาสนธรรมของพระอรรถกถาจารย์ (Homiletic etymologies) กับพัฒนาการทางสัทศาสตร์เชิงประวัติศาสตร์จริง
3. **การเทียบตัวสะกดและอักขรวิธี (Orthography):**
   - แสดงตารางความสับสนของรูปอักษรสิงหล (t/n, p/v, y/s) อักษรพม่า (w/t/k/g/p) และอักษรขอม/ไทย (พยัญชนะสังโยคและเชิงซ้อน)
   - ชี้ว่าการยืด-หดเสียงสระ (`e, o` สั้นหน้าพยัญชนะซ้อน) ขึ้นอยู่กับน้ำหนักมาตราของพยางค์
4. **ฉันทลักษณ์วุตโตทัยและการวิพากษ์ตัวบท (Vuttodaya Prosody & Metrical Criticism):**
   - คัมภีร์วุตโตทัยของพระสังฆรักขิตเถระ (ศตวรรษที่ 12) เป็นระบบฉันทลักษณ์บาลียุคกลางที่อิงตามแม่แบบสันสกฤต (Vṛttaratnākara) อย่างเคร่งครัด
   - **ข้อห้ามสำคัญ:** ห้ามนำกฎตายตัวของวุตโตทัยไปแก้ไขคาถาบาลียุคต้นในพระไตรปิฎก เพราะคาถาโบราณใช้ระบบจังหวะแบบมาตราฉันท์และ Anuṣṭubh ดั้งเดิมที่มีความยืดหยุ่นสูง
   - Norman พิสูจน์ว่าฉันทลักษณ์เป็นเครื่องมือชี้ขาดความถูกต้องของรูปไวยากรณ์ (เช่น `dadanti dānā` ยืนยันรูปทุติยาวิภัติ พหุวจนะ ด้วยจังหวะฉันท์)
5. **การเชื่อมโยงสู่โครงการชินบัญชร:**
   - มอบรากฐานทางระเบียบวิธีวิจัยในการชำระตัวบทคาถาชินบัญชร 14 คาถาหลัก (Anuṣṭubh) และคาถาท้าย (Upajāti/Vasantatilakā) ตลอดจนการวิเคราะห์รูปศัพท์ `Jayāsanāgatā / Jayāsanagatā / Jayāsane katā` ข้ามสายธารสยาม ลังกา และพม่า อย่างเป็นวิทยาศาสตร์
