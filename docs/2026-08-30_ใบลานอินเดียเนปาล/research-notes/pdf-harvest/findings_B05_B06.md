# Findings — Loop B-05 (ภาษาไทย) & Loop B-06 (ฮินดี) (S-470 … S-483)

วันที่: 2026-09-01 | ภารกิจ: ปิด gap TH (เป้า >= 3) และ HI fulltext (เป้า >= 1) | Sub-agent: The Explorer

**เครื่องมือที่ใช้จริง:** Crossref REST (webfetch ตรง), webfetch หน้าเว็บ, PowerShell + PyMuPDF (สกัด fulltext PDF ฮินดี)
**ข้อจำกัดที่พบ:** Google Scholar = 429 (บล็อก), Bing webfetch ผลค้นไม่ตรงเลย, DOAJ API = 403, Crossref ค้นด้วยคำไทย/ฮินดีแทบไร้ผล (ใบลาน/คัมภีร์ = 0 ผล, पाण्डुलिपि = 2 ผล) — สคริปต์ `scratch/crossref_search.py` ไม่มีอยู่ใน repo (บันทึก GAP)
**หมายเหตุไทป์:** sac.or.th = ศูนย์มานุษยวิทยาสิรินธร (ศมส.) ไม่ใช่กรมศิลปากร — แต่เป็นคลังคัมภีร์ใบลาน/จารึกที่ภารกิจระบุไว้ถูกต้อง (มีฐานข้อมูล "เอกสารตัวเขียนในประเทศไทย" และ "จารึกในประเทศไทย" โดยตรง); กรมศิลปากรจริงคือ finearts.go.th (ยังไม่ได้สแกน บันทึกไว้เป็นรอบถัดไป)

---

## Loop B-05 — ภาษาไทย (S-470 … S-478)

## S-470
- **Language:** TH
- **ประเภท:** primary/archival (ฐานข้อมูลดิจิทัลเอกสารตัวเขียน — สำเนาดิจิทัลคัมภีร์ + คำบรรยายไทย)
- **Bibliography:** ฐานข้อมูลเอกสารตัวเขียนในประเทศไทย (Manuscripts of Thailand). ศูนย์มานุษยวิทยาสิรินธร (องค์การมหาชน), กระทรวงวัฒนธรรม.
- **URL:** https://manuscripts.sac.or.th/ (portal รวม: https://db.sac.or.th/manuscriptsofthailand/)
- **status:** LIVE (2026-09-01, fetch สำเร็จ — เว็บฟื้นแล้ว)
- **Quotes verbatim (TH):**
  1. (manuscript-info.php?id=1265 — RBR002-0696 ตำราโหราศาสตร์) "ใบลาน , ลานดิบ , พิพิธภัณฑ์พื้นบ้านวัดคงคาราม … ใบลานก้อม , มอญ , บาลี … หอสมุดแห่งชาติให้ทะเบียนเลขที่ 1101/1ค"
  2. (id=1327 — PBI001-015 ตำราห่วง) "สมุดไทยขาวบันทึกด้วยอักษรไทย ภาษาไทย สภาพชำรุดขาดเป็นชิ้น ไม่ครบฉบับ เนื้อหากล่าวถึงตำราห่วง มีภาพวาดลงสีสันสวยงาม"
  3. (id=1 — NPT002-001 พระมาลัย) "เขียนด้วยอักษรขอมไทยบนสมุดไทยขาว หน้าต้นจ านวน 89 หน้า หน้าปลาย 90 หน้า รวมทั้งหมด 179 หน้า" (+ "แต่งด้วยฉันทลักษณ์ที่เรียกว่า "กลอนสวด" ซึ่งประกอบไปด้วยกาพย์ชนิดต่างๆ 3 แบบ ได้แก่ กาพย์ยานี 11 กาพย์ฉบัง 16 และกาพย์สุรางคนางค์ 28") — หมายเหตุ: "จ านวน" = คำวิ่ง "จำนวน" หาย space ใน source เดิม
  4. (source-info.php?id=31 — วัดศรีสะอาด อ.ด่านซ้าย จ.เลย) "เอกสารโบราณภายในวัดศรีสะอาดได้รับการสำรวจและอนุรักษ์จากโครงการอนุรักษ์ใบลานภาค ตะวันออกเฉียงเหนือ มหาวิทยาลัยมหาสารคามอยู่ก่อนแล้วจำนวน 2 หลังกระดาษ … พบว่ามีเอกสารโบราณประเภทหนังสือใบลานทั้งตัวเขียนและตัวพิมพ์ นอกจากนี้ยังมีพับสาอีกจำนวนหนึ่ง"
  5. (source-info.php?id=29 — วัดคงคาราม ราชบุรี) "คัมภีร์ใบลานและสมุดไทยที่จารเป็นภาษามอญจำนวนมาก หีบและตู้พระธรรม" (+ "กลุ่มงานหนังสือตัวเขียนและจารึก สำนักหอสมุดแห่งชาติ กรมศิลปากร ได้เข้ามาสำรวจ ชำระ แยกประเภทและจัดหมวดหมู่เอกสารโบราณของวัดคงคาราม")
  6. (id=1390 — BKK002-005 สมุดฝรั่งอิสลาม) "การอ่านเอกสารชุดนี้ ให้อ่านจากขวาไปซ้าย สภาพเอกสารที่พบมีกระดาษมีรอยน้ำซึม"
- **ประเด็นที่ map:**
  - **[รูปเล่ม]** ทำนบศัพท์ไทยจริง 4 ประเภท: ใบลาน/ลานดิบ/ลานก้อม (ตัวจาร), สมุดไทยขาว-ดำ, พับสา, สมุดฝรั่ง (quote 1, 2, 4)
  - **[ch3/ผังวัฒนธรรม]** ความหลากหลายอักษร-ภาษา: ขอมไทย, มอญ, ธรรมล้านนา, บาลี, อาหรับ (quote 1, 3, 5, 6) — ใช้เทียบ colophon ทวิภาษาของ Panarut/Techasiriwan
  - **[ch9/อนุรักษ์]** หลักฐานโครงการอนุรักษ์ใบลาน ม.มหาสารคาม (ภาคอีสาน) ทำงานสำรวจวัดจริง + หอสมุดแห่งชาติจัดหมวดหมู่ (quote 4, 5) — ใช้ประกอบ S-478
  - **[ch9/ภัยเสี่ยง]** กรณีหีบธรรมวัดศรีสะอาด: ขนย้ายไม่ได้มาตรฐาน → หีบชำรุด, ลานบางแผ่น "ไม่สามารถอนุรักษ์ให้สามารถคืนกลับมาเป็นลานแผ่นได้" (quote 4) = เคสเทียบ Mardzong (S-450)

## S-471
- **Language:** TH
- **ประเภท:** primary/archival (WEB PORTAL เอกสารโบราณ — บูรณาการ 2 คลัง)
- **Bibliography:** WEB PORTAL เอกสารโบราณ. ศมส. + สถาบันภาษา ศิลปะและวัฒนธรรม ม.ราชภัฏเชียงใหม่ (CMRU).
- **URL:** https://db.sac.or.th/manuscriptsofthailand/
- **status:** LIVE (2026-09-01)
- **Quotes verbatim (TH):**
  1. (หน้าแรก) "Total : 63 pages , Total amount : 2,005 Records , Total amount : 2 Resources."
  2. (source-info.php?id=27 จาก manuscripts.sac.or.th) "เว็บท่า (WEB PORTAL) เอกสารโบราณ ได้รวบรวมข้อมูลเอกสารตัวเขียน โดยปัจจุบันมีข้อมูลของ คลังข้อมูลดิจิทัล (Digital Repository) สำนักศิลปะและวัฒนธรรม มหาวิทยาลัยราชภัฏเชียงใหม่ และฐานข้อมูลเอกสารตัวเขียนในประเทศไทย (Database Manuscripts of Thailand) ศูนย์มานุษยวิทยาสิรินธร (องค์การมหาชน) เปิดให้ใช้บริการ ซึ่งมีข้อมูลเอกสารตัวเขียนรวมกันกว่า 1,800 รายการ"
  3. (ตัวกรองประเภทเอกสาร หน้าแรก) "ใบลาน พับสา พับหัว สมุดไทยขาว สมุดไทยดำ สมุดฝรั่ง หนังสือหายาก เอกสารโบราณ"
  4. (ตัวกรองตัวอักษร) "ขอมไทย ขอมหวัด จีน ไทขึน ไทย ไทยน้อย ไทลื้อ (ใหม่) ไทลื้อ ไทใหญ่ ธรรมล้านนา ธรรมอีสาน พม่า มอญ ล้านนา ลาว อาหรับ" (16 ระบบอักษร)
  5. (id=1465 — LEI001-014 กฎหมายโบราณ) "ใบลานขนาดสั้น ฉบับลานดิบ ปรากฎข้อมูลช่วงเวลาการสร้างคัมภีร์ใบลาน "จุลศักราช 1263 (พ.ศ.2444)"" (+ "กลุ่มงานอนุรักษ์เอกสารโบราณ มหาวิทยาลัยมหาสารคาม ขึ้นทะเบียนแล้ว วันที่ 15 ก.พ. 2561")
  6. (id=202 — SAC001-004 กัปปิยะการะกา) "ศักราช จ.ศ. 1241 (พ.ศ. 2422) … ฉบับลานดิบ มีการร้อยใบลานหลายใบติดกันให้หนาขึ้นเพื่อทำเป็นตัวแบ่งบท มีรอยปลวกกิน" (อักษรพม่า, คอลเลกชัน ดร.อนาโตล เป็ลติเยร์)
- **ประเด็นที่ map:**
  - **[สถิติ]** 2,005 records (2026) vs "กว่า 1,800" (ข้อความเก่าในหน้า source) = ตัวเลขเติบโต; ใบลาน = 1 ใน 8 ประเภทเอกสารในระบบตัวกรอง
  - **[ch3]** การเมืองเวลา: เลขทะเบียนเดิม "OPTHN-420510-xxx" + ทะเบียนม.มหาสารคาม → บอก chain-of-custody ระหว่างหน่วยงานไทยได้จาก metadata (quote 5)
  - **[pothi/บรรณานุกรม]** "ร้อยใบลานหลายใบติดกันให้หนาขึ้นเพื่อทำเป็นตัวแบ่งบท" = physical pothī divider ต่างจาก pothi ทิเบตแบบ dpe cha (เทียบ S-450 quote 10)
  - **[หลายภาษา]** 16 อักษร / 12 ภาษา (จีน ไท ไทย ไทลื้อ ไทใหญ่ บาลี พม่า มอญ ล้านนา อังกฤษ อาหรับ อุรดู) — เชื่อมข้ามไป Nepal/Tai (S-471 ↔ findings_nepal_catalogues)

## S-472
- **Language:** TH
- **ประเภท:** secondary (ชุดบทความ/ข้อเสนอเชิงนโยบายของทีมฐานข้อมูล)
- **Bibliography:** "บทความ" ฐานข้อมูลเอกสารตัวเขียนในประเทศไทย — เชยกลิ่น, นิสา; วงศ์คูณ, ศิวพงษ์; ศรีห้วยยอด, ยุวดี; พยัคศรี, ดอกรัก; et al. — 103 บทความ
- **URL:** https://manuscripts.sac.or.th/article.php (ตัวอย่าง: article-detail.php?id=183, id=87)
- **status:** LIVE
- **Quotes verbatim (TH):**
  1. (id=183) "ข้อเสนอเชิงนโยบายฉบับนี้จึงเสนอให้จัดทำ "มาตรฐานการสร้างไฟล์ดิจิทัลและการบริหารจัดการไฟล์สำเนาดิจิทัลเอกสารตัวเขียน" เพื่อเป็นแนวทางกลางสำหรับหน่วยงานภาครัฐ สถาบันการศึกษา วัด ชุมชน พิพิธภัณฑ์ท้องถิ่น" — ครอบคลุม "การถ่ายภาพอย่างปลอดภัย … การบันทึก metadata ขั้นต่ำ การตรวจคุณภาพ การสำรองข้อมูล"
  2. (id=87 — Learning Tool Kit) "ด้วยฐานข้อมูลเอกสารโบราณภูมิภาคตะวันตกในประเทศไทย เห็นอุปสรรคของเครือข่ายวัดและสถาบันทางวัฒนธรรม … แต่ยังไม่สามารถจัดการและนำไปใช้ประโยชน์ต่อได้ อันเนื่องมาจากขาดการอนุรักษ์เชิงกายภาพ การสำรวจและทำทะเบียน"
  3. (id=179 — ลิ้นทอง ฉบับวัดคงคาราม RBR002-1087) "สมุดไทยขาว … อักษรไทย ภาษาไทย มีอักษรขอมไทย และอักษรธรรมล้านนา ภาษาไทย แทรกเล็กน้อย เขียนด้วยหมึกดำ เอกสารไม่ครบฉบับ เนื้อหาไม่ต่อเนื่อง"
- **ประเด็นที่ map:**
  - **[ch9]** มาตรฐานดิจิทัลไทย (ถ่ายภาปลอดภัย → metadata ขั้นต่ำ → backup) อยู่ระหว่างผลักดันเป็นนโยบาย — เทียบกับมาตรฐานนานาชาติ (IIIF, preservation imaging) ได้
  - **[ch9]** อุปสรรคหลักไทย = survey/inventory ยังขาด (quote 2) — สอดคล้องบทเรียน Mardzong inventory (S-450)

## S-473 — (EN แต่เป็นงานต่อยอด Panarut โดยตรง — จับ metadata ไว้)
- **Language:** EN | **ประเภท:** secondary (book chapter)
- **Bibliography:** Panarut, Peera. "Poetry of the Scribes: Versified Colophons and Scribal Identity in Siamese Manuscript Culture." In *Scribal Practice and the Global Cultures of Colophons, 1400–1800*, Palgrave, 2022.
- **DOI:** 10.1007/978-3-030-90154-7_8 | **URL:** https://doi.org/10.1007/978-3-030-90154-7_8
- **status:** Crossref OK (paywall Springer) — fulltext ยังไม่ได้
- **ประเด็น:** colophon ฉบับฉันทลักษณ์ (versified) กับ "สคริบ" สยาม = หัวใจโปรเจกต์เรื่อง scribal identity

## S-474 — (EN, Panarut + Akepiyapornchai)
- **Language:** EN | **ประเภท:** secondary (book chapter)
- **Bibliography:** Panarut, Peera, and Manasicha Akepiyapornchai. "Sanskrit Prayers in a Theravada Kingdom: A Multilingual Siamese Grantha Manuscript from Munich." In *Exploring Multilingualism and Multiscriptism in Written Artefacts*, De Gruyter, 2024.
- **DOI:** 10.1515/9783111380544-009
- **status:** Crossref OK (De Gruyter — ตรวจ open access ได้ในรอบถัดไป)
- **ประเด็น:** สมุดไทย (grantha manuscript) พหุภาษา-พหุอักษร ในคลังมิวนิก — เชื่อมกับ S-470 quote 3 (พระมาลัยอักษรขอมไทย)

## S-475 — (EN, Techasiriwan กลุ่ม Tai Lü/Khün)
- **Language:** EN | **ประเภท:** secondary (journal article)
- **Bibliography:** Techasiriwan, Apiradee, and Volker Grabowsky. "Note on Tai Lue Wooden Buddha Image Inscriptions and Buddhist Manuscript Colophons from Northern Laos." *Aséanie* 33 (2014). และ Grabowsky & Techasiriwan, "Tai Lue Identities in the Upper Mekong Valley: Glimpses from Mulberry Paper Manuscripts," *Aséanie* 31 (2013), DOI 10.3406/asean.2013.2271
- **DOI:** 10.3406/asean.2014.2319
- **status:** Crossref OK (Persée/CEFAS — มัก open access)
- **ประเด็น:** colophon ใบลาน Tai Lue แถบลาวเหนือ + สมุดกระดาษสา (mulberry paper) = เทียบวัสดุใบลาน vs กระดาษสาแบบ Techasiriwan 2016 (S-476)

## S-476 — (EN, Techasiriwan ชิ้นเด่น)
- **Language:** EN | **ประเภท:** secondary (book chapter)
- **Bibliography:** Techasiriwan, Apiradee. "Locating Tai Lü and Tai Khün Manuscripts in Space and Time through Colophons." In *Tracing Manuscripts in Time and Space through Paratexts*, De Gruyter, 2016. (+ Techasiriwan & Grabowsky, "Multi-scriptural and Multilingual Inscriptions in Lan Na," DOI 10.1515/9783111380544-005, 2024)
- **DOI:** 10.1515/9783110479010-003
- **status:** Crossref OK — fulltext ยังไม่ได้
- **ประเด็น:** ใช้ colophon เป็นเครื่องมือ dating/geolocation ต้นฉบับไทลื้อ-ไทขึน = วิธีวิทยาตรงกับโปรเจกต์

## S-477 — (EN, ชุด samut khoi วารสาร Manuscript Studies 2017)
- **Language:** EN | **ประเภท:** secondary
- **Bibliography:** (a) Skilling, Peter, and Santi Pakdeekham. "Manuscripts in Central Thailand: Samut Khoi from Phetchaburi Province." *Manuscript Studies* 2.1 (2017). (b) Unebe, Toshiya. "Textual Contents of Pāli Samut Khois…" สำนักพิมพ์เดียวกัน, DOI 10.1353/mns.2017.0020. (c) McDaniel, Justin. "Illuminating Archives: Collectors and Collections in the History of Thai Manuscripts." DOI 10.1353/mns.2017.0002. (d) Igunma, Jana. "Henry D. Ginsburg and the Thai Manuscripts Collection at the British Library and Beyond." DOI 10.1353/mns.2017.0000
- **DOI:** 10.1353/mns.2017.0005 (ชิ้นหลัก)
- **status:** Crossref OK ทั้งชุด (Project MUSE — paywall; อาจมี OA เวอร์ชัน)
- **ประเด็น:** ชุด "samut khoi" = ศัพท์ไทยตรงกับสมุดข่อย; เพชรบุรี = แหล่งสมุดข่อยชั้นนำ; โยงกับ S-470 (ฐานข้อมูล ศมส. มีทั้ง samut khoi + ใบลานในระบบเดียว)

## S-478 — (EN, นักวิชาการไทย มส.)
- **Language:** EN (ผู้เขียนไทย/สถาบันไทย — มหาวิทยาลัยมหาสารคาม)
- **Bibliography:** Butdisuwan, Sujin, and B. Ramesh Babu. "Preservation and Conservation of Palm Leaf Manuscript Libraries in Mahasarakham Province, Thailand: A Survey." *Asian Journal of Information Science and Technology* 4.1 (2014).
- **DOI:** 10.51983/ajist-2014.4.1.88
- **status:** Crossref OK — วารสารเปิดเข้าถึง (AJIST) — fulltext ยังไม่ดึง
- **ประเด็น:** survey คลังใบลานอีสานของ มส. — หน่วยงานเดียวกับ "กลุ่มงานอนุรักษ์เอกสารโบราณ ม.มหาสารคาม" ที่ปรากฏใน metadata ของ S-470/S-471 (ใบลานวัดศรีสะอาด จ.เลย)

**ผลประเมิน TH:** ภาษาไทยโดยตรง (TH) = **3 cards** (S-470, S-471, S-472) — **ถึงเป้า >= 3** + มี EN เกี่ยวเนื่องอีก 6 cards (S-473–S-478) ที่ล้อมกรอบ Panarut/Techasiriwan/samut khoi ให้ครบ

---

## Loop B-06 — ฮินดी (S-480 … S-483)

## S-480
- **Language:** HI
- **ประเภท:** secondary (journal article — **fulltext ได้ครบ 3 หน้า**)
- **Bibliography:** देसाई, महेश बापूसो, और कमलकुमार जैन. "अप्रकाशित पाण्डुलिपि अष्टाह्निकाचरित्र का अवलोकन." *International Journal of Sanskrit Research* 12(2-C): 197–199 (2026). AkiNik Publications. ISSN 2394-7519. (ผู้เขียน: ภาควิชาสันสกฤตและปรากฤต มหาวิทยาลัย Shivaji (เดิม Shivaji University, โปสเตอร์ระบุ "डिश्वकमाट" จากฟอนต์ KrutiDev), ปุเน, มหาราษฏร)
- **DOI:** 10.22271/23947519.2026.v12.i2c.3055
- **URL:** https://doi.org/10.22271/23947519.2026.v12.i2c.3055 → https://www.anantaajournal.com/archives/?year=2026&vol=12&issue=2&part=C&ArticleId=3055
- **PDF fulltext:** https://www.anantaajournal.com/archives/2026/vol12issue2/PartC/12-3-41-902.pdf (723 KB, 3 pp)
- **Local Path:** extract: `pdf-harvest\extracts\desai_jain_3055.pdf` + `desai_jain_3055.txt`
- **PDF health:** PASS (3 pp, text layer อ่านได้; **คำเตือนสำคัญ:** PDF ฝังฟอนต์ KrutiDev010/Kokila non-Unicode → text layer มี mapping artifact เป็นระบบ เช่น "ड" แทน "क", สระ "ि" วางผิดตำแหน่ง ("चिश्लेषण" ที่จริง = "विश्लेषण") — quote จาก PDF ต้องกำกับสภาพนี้ไว้; quote จากหน้าเว็บวารสารเป็น Unicode จริง ใช้เป็นหลัก)
- **Quotes verbatim (HI → แปลไทยกำกับ):**
  1. (หน้าวารสาร, Unicode สะอาด) "प्रस्तुत शोधप्रबंध में प्राकृत भाषा में रचित जैन कथा-साहित्य की समृद्ध परम्परा का विश्लेषण करते हुए विशेष रूप से अष्टाह्निकाचरित्र नामक अप्रकाशित पाण्डुलिपि का अध्ययन किया गया है।" — แปล: "งานวิจัยนี้วิเคราะห์ประเพณีวรรณกรรมเรื่องเล่าชาวเจนที่แต่งด้วยภาษาปรากฤต โดยศึกษาโดยเฉพาะต้นฉบับหลังลาย (पाण्डुलिपि) ที่ยังไม่เคยตีพิมพ์ชื่อ อัษฏาห์นิกาจริตร"
  2. (หน้าวารสาร) "निष्कर्षतः यह प्रतिपादित होता है कि अष्टाह्निकाचरित्र न केवल जैन धार्मिक परम्पराओं का महत्वपूर्ण स्रोत है, अपितु प्राचीन समाज, संस्कृति एवं भाषिक विकास के अध्ययन के लिए भी अत्यन्त उपयोगी एवं प्रकाशनयोग्य ग्रन्थ है।" — แปล: "สรุปได้ว่า อัษฏาห์นิกาจริตร ไม่เพียงเป็นแหล่งสำคัญของประเพณีศาสนาเจน หากยังเป็นคัมภีร์ที่มีประโยชน์และควรได้รับการตีพิมพ์เพื่อศึกษาสังคม วัฒนธรรมโบราณ และวิวัฒนาการทางภาษา"
  3. (PDF p.198 "हस्तलिखितकी जानकारी", text layer มี KrutiDev artifact — ถอดให้อ่านได้โดยระบุ) ต้นฉบับ: "कैटलॉग - भंडारकर ओरिएंटल रिसर्च इन्स्टिट्यूट, पुणे" (Bhandarkar Oriental Research Institute, Pune); "काल - संवत् 1548" (สัมวัต 1548 ≈ ค.ศ. 1491); "फोलियो – 23, गाथा- 600"; "लिपि - प्राचीन देवनागरी"; "भाषा - महाराष्ट्रीय प्राकृत"; "सामग्री – कागज" (สื่อ = กระดาษ — ไม่ใช่ใบลาน); แคตตาล็อก Bhandarkar ภาค 5, เลข 1257-1258 (สองต้นฉบับ)
  4. (PDF p.199 "निष्कर्ष" ข้อ 1) "अप्रकाशित पाण्डुलिपियों को प्रकाश में लाना।" — แปล: "นำต้นฉบับที่ยังไม่ตีพิมพ์ออกสู่แสงสว่าง (ตีพิมพ์เผยแพร่)" — ผู้เขียนเสนอ critical edition
  5. (PDF p.198, อ้างจาก महापुराण) "प्रोक्ता पूजाहृताडम्या सा चतुर्था सदाचारे। चतुमूर्खमहः कल्परुमाश्चाषाढन्तकोऽपि च।।" — แปล: "บทกำหนดการบูชา 4 ประเภทจากมหาปุราณ: สทาจาร (วิตยมหา), จตุมูรฺข (ศตโตภร), กลฺปรุม, อนาธิกา ปูชา" — กาพย์สันสกฤตอ้างในบริบทการบูชาอนันตะ (นันทีศวร)
- **ประเด็นที่ map:**
  - **[ch9]** กรณี "ต้นฉบับไม่ตีพิมพ์ + ยังไม่มี critical edition" (ORI Pune, 23 folios/600 gāthās, กระดาษ, เทวนาครีโบราณ, ปรากฤตมหาราษฏรี) = โครงเรื่อง "manuscript as unpublished source" ฝั่งเจน คู่ขนานกับใบลานพุทธ/Sanskrit ฝั่งโปรเจกต์
  - **[วัสดุ]** ย้ำ: คัมภีร์เจนสมัยสัมวัต 1548 เป็น **กระดาษ** — ตรงข้ามภาพจำ "Jain palm leaf" — ใช้ระวังการ generalization วัสดุตามศาสนา
  - **[วิธีวิทยา]** ผู้เขียนระบุ 3 วิธี: पाण्डुलिपि परीक्षण (ตรวจต้นฉบับ), तुलनात्मक विश्लेषण (เทียบเคียง), आलोचनात्मक संस्करण (critical edition) = คล้ายข้อเสนอของ IJSR ไทยฝั่งเอกสารตัวเขียน (S-472)
  - **[สถิติเว็บ]** หน้าวารสารบอก "321 Views | 199 Downloads" = ดัชนีการเข้าถึง

## S-481
- **Language:** HI
- **ประเภท:** secondary (journal article — metadata + citation; fulltext ยังไม่ได้)
- **Bibliography:** साहू, प्रीति. "पांडुलिपि लेखन कला का इतिहास" [ประวัติศาสตร์ศิลปะการเขียนต้นฉบับ]. *International Journal of Science, Strategic Management and Technology* 02(06) (2026): 1–2.
- **DOI:** 10.55041/ijsmt.v2i6.205
- **URL:** https://doi.org/10.55041/ijsmt.v2i6.205
- **status:** **LIVE — ijsmt.in ฟื้นแล้ว** (เดิมรายงานว่าล่ม; วันนี้ DOI resolve และให้ citation อัตโนมัติในภาษาฮินดี "प्रीति साहू. (2026). पांडुलिपि लेखन कला का इतिहास…") — เหลือตามหา PDF จากหน้าวารสารโดยตรงในรอบถัดไป
- **ประเด็น:** บทความสั้น 1–2 หน้า ภาษาฮินดี ว่าด้วยประวัติ "ศิลปะการเขียนต้นฉบับ" — สอดคล้องหัวข้อ ch1/ch9 ของโปรเจกต์

## S-482
- **Language:** HI/EN (เว็บสองภาษา, เนื้อหาหลัก EN + มีเวอร์ชัน हिन्दी)
- **ประเภท:** institutional resource (คลังคัมภีร์ — แคตตาล็อกต้นฉบับ IGNCA)
- **Bibliography:** "Catalogue Of Manuscripts (available at the IGNCA)". Indira Gandhi National Centre for the Arts, New Delhi (Kalanidhi Division — Reference Library / Microfilm).
- **URL:** https://ignca.gov.in/resources/manuscripts/ → ตาม nav จริงคือ https://ignca.gov.in/divisionss/kalanidhi/reference-library/non-print-material/catalogue-of-manuscripts/ ; เวอร์ชันฮินดี: https://ignca.gov.in/hi/online-digital-resources/manuscripts/
- **status:** LIVE (2026-09-01) — หน้าที่ได้ = ข้อมูลสั่งซื้อพิมพ์เล่ม (หน่วยตีพิมพ์: Dr. K Rajasekaran, Janpath, New Delhi; Canara Bank A/c 0143101008365) + ลิงก์สำคัญ: "Subject-Wise Descriptive E-Catalogues of Microfilmed Manuscripts" (ตำแหน่ง: https://ignca.gov.in/divisionss/kalanidhi/reference-library/print-material/a-descriptive-catalogue-of-microfilmed-manuscripts/), "Kalanidhi Digital Repository (Vidya Nidhi)", "Gaudiya Grantha Mandira – Sanskrit text repository" (https://ignca.gov.in/online-digital-resources/gaudiya-grantha-mandira-sanskrit-text-repository/)
- **หมายเหตุ:** หน้าตัวมันเป็น catalogue-of-catalogues (ไมโครฟิล์มต้นฉบับ + ตำรา descriptive catalogues) — ตัวรายการต้นฉบับต้องลงลึกลิงก์ e-catalogues ต่อ (บันทึกไว้เป็นงานถัดไป)
- **ประเด็นที่ map:**
  - **[ch3]** IGNCA เป็นอีกคลังใหญ่ระดับชาติ (นอกจาก NAMAMI) จัดการต้นฉบับผ่าน microfilm + e-catalogue แยกตามศาสตร์ (subject-wise)
  - **[ch9]** โครงสร้างเผยแพร่: ซื้อพิมพ์เล่ม/ดีวีดี ผ่านหน่วยตีพิมพ์ = โมเดลการเข้าถึงต่างจาก ศมส. (เปิดฟรีออนไลน์)

## S-483
- **Language:** HI (เว็บสถาบัน)
- **ประเภท:** institutional resource (National Mission for Manuscripts — พร้อมเนมी)
- **Bibliography:** National Mission for Manuscripts (NAMAMI), Ministry of Culture, Government of India.
- **URL:** https://namami.gov.in
- **status:** **DOWN / unreachable** (Transport error, 2026-09-01) — เว็บหลักไม่ตอบสนอง; ยังไม่แน่ใจว่าโดนบล็อกฝั่งเราหรือเซิร์ฟเวอร์ล่ม — ทดลองซ้ำ (เช่น archive.org snapshot) ในรอบถัดไป
- **ประเด็น:** ถ้า NAMAMI ล่มนาน = ผู้ใช้คลังคัมภีร์อินเดียหลัก (ระบบชื่อ "Amritamukh" ที่เคยรวม > 350,000 ต้นฉบับ) เสี่ยงขาดช่องทางเข้าถึง — เป็นข้อสังเกตเรื่องความยั่งยืน digital infrastructure เชิงเปรียบเทียบ (ทางไทย ศมส. มี 2 คลัง mirror: manuscripts.sac.or.th + db.sac.or.th)

**ผลประเมิน HI:** fulltext ได้แล้ว **1** (S-480 — ดึง PDF + สกัดข้อความ + เก็บใน extracts แล้ว) — **ถึงเป้า fulltext >= 1**; บวก metadata ฟื้นของ S-481 (ijsmt.in ไม่ล่มแล้ว)

---

## Map ประเด็นรวม (เติมเข้าตารางหัวข้อโปรเจกต์)
| หัวข้อ | การ์ดที่ใช้ได้ |
|---|---|
| ch1 (นิยาม/ประวัติศาสตร์) | S-481, S-470 quote 3 |
| ch3 (คลัง/ค้นพบ/chain-of-custody) | S-470, S-471, S-472, S-477(d), S-482 |
| ch9 (อนุรักษ์/อนาคต/ภัยเสี่ยง) | S-470 quote 4-5, S-472 quote 1-2, S-478, S-480, S-483 |
| pothi/รูปเล่ม-วัสดุ | S-470 quote 1, S-471 quote 3,6, S-477(a), S-480 quote 3 |
| พหุภาษา-พหุอักษร/colophon | S-473, S-474, S-475, S-476, S-470 quote 3 |
| สถิติ/ทะเบียน | S-471 quote 1-2, S-472 quote 2, S-480 quote 3 |

## ข้อค้นพบหลัก
1. **Crossref ค้นด้วยคำท้องถิ่น (ไทย/ฮินดี) แทบไร้ผล** — ผลลัพธ์จากการค้น "Techasiriwan manuscript" / "samut khoi" กลับให้ชุดงานคุณภาพ; Google Scholar 429, DOAJ 403, Bing ไม่ตรง — ช่องทางที่ยืนยันว่าใช้ได้จริง = ค้นชื่อนักวิชาการใน Crossref + เดินเข้าเว็บสถาบันโดยตรง
2. **คลังเอกสารตัวเขียนไทย (ศมส.) ฟื้นและโตแล้ว** — portal รวมตอนนี้ 2,005 records / 2 คลัง (ศมส. + ม.ราชภัฏเชียงใหม่), ระบบตัวกรองประเภทเอกสาร 8 ชนิด อักษร 16 ระบบ ภาษา 12 ภาษา — เป็นแหล่ง quote ภาษาไทยโดยตรงที่หนาแน่นกว่าที่คาด
3. **ฮินดี fulltext ได้จากวารสารขนาดเล็กที่เปิดฟรี (anantaajournal.com)** — แต่ PDF ใช้ฟอนต์ KrutiDev non-Unicode → text layer Devanagari ผิดเพี้ยนเป็นระบบ; กฎคือใช้ abstract Unicode จากหน้าวารสารเป็น quote หลัก, ข้อมูลแคตตาล็อกจาก PDF ต้องกำกับ artifact ทุกครั้ง
4. **ijsmt.in ฟื้น** — DOI Sahu 2026 resolve และให้ citation ฮินดีแล้ว (เดิมรายงานว่าล่ม); เหลือตาม PDF
5. **NAMAMI เว็บหลัก unreachable วันนี้** — ขณะที่ IGNCA ยังใช้ได้; ควรเก็บ mirror/archive ของ NAMAMI ไว้เป็นแผนสำรอง

## GAP / งานรอบถัดไปที่เสนอ
- ดึง fulltext S-473 (Springer) / S-474, S-476 (De Gruyter — เช็ค OA) / S-477 (Project MUSE) และ S-478 (AJIST OA)
- กรมศิลปากรจริง (finearts.go.th — กลุ่มงานหนังสือตัวเขียนและจารึก หอสมุดแห่งชาติ) ยังไม่ได้สแกน + ฐาน "จารึกในประเทศไทย" (db.sac.or.th/inscriptions) ยังไม่ได้เปิด
- NAMAMI ผ่าน web.archive.org; IGNCA e-catalogues (subject-wise descriptive catalogues) ลงลึกต่อ
