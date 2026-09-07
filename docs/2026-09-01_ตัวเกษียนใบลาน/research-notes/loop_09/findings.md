# Loop 09 Findings — Explorer B-01 (Sri Lanka / Myanmar direct-language sources)

วันที่: 2026-09-01 | เป้าหมาย: ปิดช่องว่าง SI (สิงหล) / MY (พม่า) แหล่งภาษาตรง = 0

## สรุปผล

- **SI ได้แหล่งตรง 1 แหล่งที่อ่านตัวบทได้จริง** (S-1880-Batuwantudawe-01) — หนังสือพิมพ์สิงหล 1880 พร้อม sannaya + OCR อ่านได้
- **MY ได้ specimen ใบลาน nissaya พม่า 1 ชิ้น** (S-c1820-RASBur-01) — metadata ครบจาก RAS แต่ OCR ล้มเหลว (สแกนลายมือพม่า) → ตัวบท metadata-only
- **งานวิชาการภาษาพม่าที่ยืนยันตัวตน** (Tin Lwin 2014, Myanmar Studies Journal) — พบเฉพาะรายการอ้างอิงจาก 2 เอกสารท้องถิ่น ยังไม่ได้ตัวเล่ม → ไม่ออก Source Card เนื้อหา ออกเป็น "lead รอตาม" เท่านั้น

---

## Source Cards

### S-1880-Batuwantudawe-01 — [SI] ตัวบทสิงหลที่อ่านได้ (สแกนหนังสือพิมพ์ 1880)

- **Bibliography**: Batuwantudawe, Charles de Silva (ed.). *Nāmaliṅgānuśāsanam* (Amarakośa) **with Sinhalese Sannaya**. Colombo, 1880.
- **Language**: SI (Sinhala) — ตัวบท Sanskrit พร้อมศัพท์นิยามสิงหล (sannaya) จัดรูปแบบ gloss เป็นลำดับเลข
- **URL**: https://archive.org/details/amarakosa-batuvantudave
- **Local Path**: `research-notes/loop_09/documents/amarakosa-batuvantudave-djvu.txt` (946 KB OCR text, อ่านได้)

**Verbatim quotes** (จาก OCR text):

1. คำอธิบายเชิงอรรถประเภทของตัวบท — แสดงว่า sannaya เป็นประเภทหนึ่งคู่กับ ṭīkā (สิงหล, SI):
   > "බාරානසී ටිකා හා සන්නය."
   (p. คัลแนนบริเวณ gloss-part, ปรากฏ 2 ครั้งในเล่ม; "Benares ṭīkā กับ sannaya" — ระบุว่าตัวบทมีสองชั้นคือ ṭīkาและ sannaya)
   หมายเหตุ: OCR มี noise — "ටිකා" = ටීකා (ṭīkā), "සන්නය" ชัดเจน 2 ตำแหน่ง (offset 144649, 148020)

2. **โครงสร้าง layout ของ sannaya** — หลักฐานโครงสร้าง (SI):
   - ก่อนถึง gloss block: บท Sanskrit แบบมีเลขกำกับศัพท์ 1, 2, 3... (เช่น "1 චෘහනනෘාඉලා බහුලප්ලො...") จากนั้นมี **block ศัพท์นิยามสิงหลแยกต่างหากเป็นลำดับเลขตรงกับศัพท์** เช่น:
     > "8 බොඞ හමු ආ දිය. පි මුූථුල අට. । 99 කල 00. \n 9 ඌරු චි. 19 අ රක්කෘෑමි."
     และ
     > "5. .අණු න්‌අයනත්‌ තැනැත්නේ. 18 නුන්බන්කෘ චැඞභෙන්නේ" (รูปแบบ "N. [ศัพท์] [นิยามสิงหล]" เป็นชุด ๆ)
   - **การตีความ**: ในสิงหล sannaya ฉบับพิมพ์ ศัพท์-นิยามจัดเป็น **"ลำดับศัพท์–นิยามแบบมีเลขกำกับ"** ไม่ใช่ interlinear gloss ต่อเนื่องใต้ทุกคำ (แต่ต้นฉบับใบลานอาจต่าง — ต้องใช้ specimen ใบลานจริงมาเทียบ)

3. บทนำสันสกฤต-สิงหลที่เล่าที่มา (SI):
   > "ලකිදිචිහි “අමරසිංහ” සයිදූ ඉගෟඞාදියෙහි “අමරණකොෂ” සයි මෙබ ආචාරන්‌ චිසින්‌ “නාමලිගානුශාසනා” යඝිදූ ව්‍යවහභාරකරණලද්‍යච්‍ර"
   (แปลคร่าว: ในลังกาที่เรียก "අමරසිංහ"... "නාමලිංගානුශාසනා" โดยครูบาอาจารย์)

**สถานะ**: อ่านได้จริง (OCR) — เป็นแหล่ง SI ตรงชิ้นแรกของโปรเจกต์

---

### S-c1820-RASBur-01 — [PA-MY] ใบลาน nissaya พม่า (specimen, metadata จาก RAS)

- **Bibliography**: *Abhidhammatthasaṅgahanissya, Pāli-Burmese nissaya*. Royal Asiatic Society Burmese 2. 126 olas (ka–ñī), 515 × 65 mm, 2 cord holes, 8 lines, ~85 chars, Burmese medium script, 430 mm. Copied by Bakarā, BS 1182 = **1820 AD**.
- **Language**: PA (Pali) + MY (Burmese) — ใบลานจริง
- **URL**: https://archive.org/details/rasburmese2
- **Local Path**: `research-notes/loop_09/documents/rasburmese2-djvu.txt` (OCR ล้มเหลว — 3.8 KB noise; อ้าง metadata จาก IA metadata JSON เท่านั้น)
- **Catalogue ref.** (จาก description): Jacqueline Filliozat, "Survey of the Pāli Manuscript Collection in the Royal Asiatic Society", *JRAS* 1999, Vol. 9, Pt. 1, pp. 35–76

**Verbatim quote** (จาก IA metadata description, EN):
> "126 olas (ka-ñī); 515 x 65 mm; 2 cord holes, 8 lines, 85 char., Burmese medium script, 430 mm; numb. Burm. letters... Date: BS. 1182 (copied by Bakarā) = 1820 A.D."

**สถานะ**: metadata-only ด้านตัวบท (OCR ไม่รองรับอักษรพม่าบนใบลาน) — **ใช้ยืนยัน "8 บรรทัด/ใบ" ของใบลาน nissaya พม่า** ซึ่งสำคัญต่อ layout analysis (โอลาใหญ่ 515 mm แบ่ง 8 บรรทัด → ระยะเว้นบรรทัดกว้างพอสำหรับ gloss ได้ แต่ยังไม่มีหลักฐานภาพยืนยัน interlinear)

---

## Leads รอตาม (ยังไม่ออก Source Card เนื้อหา)

1. **Tin Lwin 2014** — "Pāli Myanmar Nissaya-kyan myar: Ei Mūla aza, the Beginning of Pali-Myanmar Nissaya." *Myanmar Studies Journal* 3 (Dec 2014): 147–161 — **ภาษาพม่า (MY)** — อ้างใน Pannabhoga 2023 References (line 809) — หาเล่มออนไลน์ไม่เจอ
2. **Tin Lwin 1961** — "A Study of Pali-Burmese Nissaya with Special References to Mahāparinibbāna Sutta." M.A. Thesis, SOAS — ยืนยันโดย Scott 2023 fn (line 2708): "For on overview of research on the nissaya in Burma, see Tin Lwin (1961), John Okell (1965), William Pruitt (1994)..."
3. **Ashin Janakābhivaṃsa, *Silakkhan Bhāsāṭīkā* (Nissaya of Silakkhandhavagga), Amarapura: New Burma Offset, 2000** — หนังสือ nissaya พม่าพิมพ์ (ไทม์ไลน์ปัจจุบัน ไม่ใช่ใบลาน)
4. IA มีรายการ BDRC เกือบทั้งเล่ม (bdrc-W1FPL* 200+ ชื่อ nissaya) — ทั้งหมดเป็นสแกนใบลานพม่า แต่ OCR ใช้ไม่ได้ (ปัญหาเดียวกับ S-c1820)

## คำตอบคำถาม Phase-A gap

- **sannaya ใช้ interlinear หรือ continuous prose?** จาก S-1880: ฉบับพิมพ์จัด sannaya เป็น **gloss block มีเลขกำกับศัพท์–นิยาม** (ไม่ใช่ interlinear ทีละคำใต้บรรทัดเดียวกัน) — แต่ยังต้องเทียบ specimen ใบลาน (rassinhalese6 OCR fail จึงยังสรุปใบลานไม่ได้)
- **nissaya พม่า**: ใบลาน RAS ยืนยัน 8 บรรทัด/ใบ; Pannabhoga 2023 (L02, อ่านแล้วในลูปนี้ยืนยันซ้ำ) ระบุ "student-monks interlineating nissaya's interpretation in their printed textbook" (line 376) — นิสสัยปัจจุบันเขียนแทรก (interlineate) ในหนังสือพิมพ์
