## 8.11 เกร็ดหลักฐานเสริม: ความแม่นยำของตัวเลขและข้อผิดพลาดที่พบ

ก่อนปิดบท รวบรวมรายละเอียดเชิงวิธีวิทยาที่ตรวจพบจากการทำงานกับตัวหลักฐานจริง — ข้อมูลที่มีค่าต่อผู้ใช้บัญชีคัมภีร์ในอนาคต

### 8.11.1 ข้อผิดพลาดของสำเนาดิจิทัล: เคส DLI และ archive.org

การตรวจตัวหลักฐานจริงเจอข้อผิดพลาดที่ metadata ไม่บอก: ไฟล์ที่ archive.org ระบุว่าเป็น *Catalogue of Sanskrit Manuscripts in Mysore and Coorg* ของ Rice (1884) เมื่อเปิดตรวจจริงพบว่าเนื้อหาเป็น *Proceedings of the California Academy of Sciences* (1951-53) — คลัง DLI (Digital Library of India) อัปโหลดไฟล์ผิด [33] — กรณีนี้ยืนยันกฎที่โปรเจกต์ใช้: **ห้ามเชื่อ metadata ของคลังสำเนาต้องตรวจเนื้อหาจริงทุกครั้ง** — และมีกรณีคู่: สำเนา Śāstrī Vol II สอง identifier บน archive.org เสีย (1 หน้า 30 อักขระ) ขณะที่สำเนาที่ใช้งานได้ (348 หน้า) มี text layer เป็น OCR ขยะทั้งเล่ม (สคริปต์ตรวจสุขภาพรายงาน PASS เป็น false positive) จนต้องถอดข้อความจากภาพหน้าต่อหน้า [11] — บทเรียน: "ความพร้อมใช้" ของหลักฐานดิจิทัลมีสถานะซับซ้อนกว่ามี/ไม่มีไฟล์

### 8.11.2 OCR เป็นวงจรแคตตาล็อกใหม่ที่ซ้ำโจทย์เก่า

ข้อสังเกตเชิงเทคนิคที่ยังไม่มีใครเขียนเป็นระบบ: แคตตาล็อกเก่าบน archive.org มีสถานะ text layer สามแบบจริง — (1) text layer ดี (Aufrecht 1891: เฉลี่ย 2,290 อักขระ/หน้า [7]; Bendall 1883: 1,059 [9]) (2) text layer อ่อน (Śāstrī Vol I สองสำเนา: 806-1,001 อักขระ/หน้า โดยหน้ารายการ Devanagari เพี้ยนหนัก [10]) (3) ไม่มีเลย (Bühler 1871: 2.9 อักขระ/หน้า = image-only [8]; Śāstrī Vol II สำเนาที่ใช้ได้: OCR ขยะ [11]) — การสร้าง text layer ให้แคตตาล็อกเก่าคือ**โจทย์ concordance รุ่นใหม่**ที่ซ้ำโจทย์เดิมของ Grünendahl: ทำให้ระบบอ้างอิงเก่าสื่อสารกับระบบค้นใหม่ได้ — ตัวเลข avg chars/page ข้างบนจึงเป็น "แผนที่ความพร้อม" ชิ้นแรกที่โปรเจกต์นี้วัดได้จริง

### 8.11.3 วินัยการอ่านแคตตาล็อกต่างภาษา: เคสเทียบเคียงจากวงการทมิฬ

งานประวัติศาสตร์ไวยากรณ์ทมิฬของ Chevillard ให้บทเรียนวิธีวิทยาที่ใช้กับบัญชีคัมภีร์ได้ตรง: คำ "appellative verbs" ที่วงการอ้างกันมากเมื่อตรวจตัวบทละตินของ Beschi จริงพบว่า **ไม่มีคำนี้ในตัวบท** — Caldwell อ้างผ่านคำแปลอังกฤษ ไม่ใช่ต้นฉบับ [34] — กฎ "ตรวจภาษาต้นฉบับเสมอ" ที่วงการไวยากรณ์เรียนรู้อย่างเจ็บตัว ใช้กับบัญชีคัมภีร์ตรง: คำกำกับในแคตตาล็อก (ชื่องาน ผู้แต่ง หมวด) ที่ถูกแปล-อ้างต่อหลายชั้น ต้องย้อนไปตัวแคตตาล็อกภาษาเดิม (อังกฤษ/เยอรมัน/สันสกฤต Devanagari) ทุกครั้ง — ซึ่งเป็นเหตุผลที่โปรเจกต์นี้ถอด quote จากตัว scan จริง ไม่ใช่จากงานรอง

### 8.11.4 หน่วยวัดของบัญชี: สรุปตารางหน่วยที่ต้องแยก

รวบหน่วยที่พบในหลักฐานบทนี้เป็นตารางอ้างอิง:

| หน่วย | นิยามจากหลักฐาน | ตัวอย่าง |
|:---|:---|:---|
| มัด (bundle) | กองคัมภีร์ห่อผ้า/ปกไม้ | Durbar: 101 มัด [10] |
| เล่ม (MS/volume) | คัมภีร์หนึ่งรายการ (อาจหลายใบหลายผูก) | Durbar 448 ใบลาน/~5,000 รวม [10] |
| ใบ (leaf/folio) | แผ่นเดี่ยว | Potala "เกือบ 30,000 ใบ" [22] |
| รายการ (item/entry) | หน่วยของระบบถ่าย | NGMPP 27,302 รายการ (A/B) [6] |
| reel | ม้วนฟิล์ม | Reel A 393/18 [29] |
| ระเบียน | หน่วยฐานข้อมูล | NGMCP 155,013 [5] |

การอ้างตัวเลขโดยไม่ระบุหน่วยทำให้ "465 เล่ม" กับ "30,000 ใบ" กลายเป็นความขัดแย้งปลอม [22] — และตารางนี้คือเครื่องมือกันข้อผิดพลาดนั้น

### 8.11.5 ช่องว่างหลักฐานของบท (ต้องระบุตรง ๆ)

สองช่องว่างที่โปรเจกต์ยืนยันแล้วและต้องเขียนไว้: (1) **ตัวเลข NAMAMI เชิงระบบยังยืนยันไม่ได้** — เว็บหลักล่มตลอดวงวิจัย งานวิชาการประเมินยังไม่เข้าถึง fulltext [13][14] — รายงานจึงไม่ยึดตัวเลขที่หมุนเวียนในสาธารณะ (2) **concordance ตัวจริงของ Grünendahl (1989) ยังไม่มีในเครื่อง** — ที่มีคือรีวิว 2 หน้าของ Gellner [12] — ข้อสรุปเรื่องโครงสร้างสี่ทางของ concordance จึงพิสูจน์ผ่านรีวิว (พิมพ์ JRAS ตรวจทานแล้ว) ไม่ใช่ตัวเล่ม — ระบุเป็นช่องว่างเพื่องานต่อ (REQUEST_LIST)

---

## สรุปบทที่ 8

บทนี้ตอบสามคำถามนำด้วยหลักฐานจากแหล่งปฐมภูมิ (แคตตาล็อกจริง 4 เล่มที่สแกนในเครื่อง) และทุติยภูมิร่วมสมัย: (1) **แคตตาล็อกคัมภีร์เอเชียใต้ทำงานแบบสะสมชั้นต่อชั้น** — จาก Catalogus Catalogorum ของ Aufrecht (1891) ที่รวมและตัดสินแคตตาล็อกทั้งหมด [7], Bendall (1883) ที่ผูก palaeography เข้ากับบัญชีครั้งแรก [9], ถึง Śāstrī (1905/1915) ที่ให้ schema ฟิลด์เต็มรูปแม้เลขทะเบียนจะไม่เรียงหน้า [10][11] (2) **โครงการมหาภาคเปลี่ยนสถานะวัตถุ แต่ไม่เปลี่ยนสถานะความรู้โดยอัตโนมัติ** — NGMPP ถ่าย 190,000 เล่ม [4] แต่บัตรไม่ตรงฟิล์ม [6]; concordance ของ Grünendahl เชื่อม 4 ระบบอ้างอิงแต่ครอบคลุม 850 จาก 100,000+ [12]; NAMAMI เป็นข้อจำกัดการเข้าถึงในตัวเอง ณ เวลาวิจัย [14] (3) **HTR/AI ขยายการเข้าถึงจริง (CER 4.9% Old Nepali [1], ถ่ายโอนข้ามอักษรลด ground truth 6-10 เท่า [23]) แต่ไม่แก้โจทย์บัญชี** — ช่องว่าง "ถ่ายแล้วกับอ่านได้" คือโจทย์หลักที่ทุกชั้นเทคโนโลยีต้องเผชิญซ้ำ

ข้อเสนอเชิงวิเคราะห์ของบท: สถาปัตยกรรมบัญชีคัมภีร์เป็นระบบห้าชั้น (แคตตาล็อกพิมพ์ → concordance → ภาพ/ฟิล์ม → e-text → การถอดอัตโนมัติ) ที่**แต่ละชั้นใหม่สร้างงานเชื่อมใหม่เสมอ** — และวินัยเชื่อมที่ใช้จริงตลอด 135 ปี คือ "การกำหนดอ้างอิงที่ตรวจย้อนได้" จากเลขทะเบียน Śāstrī ถึงเลข reel NGMPP ถึงเลขระเบียน NGMCP [5] — ข้อเสนอนี้ต่อยอดตรงเข้าบทที่ 9 ซึ่งเข้าสู่โจทย์ท้ายสุดของห่วงโซ่หลักฐาน: การกำหนดอายุคัมภีร์เก่าแก่ที่สุด — จากคัมภีร์คันธาระถึงใบลานเนปาล 828 ค.ศ. — ที่ต้องอาศัยทั้งวินัยบัญชีของบทนี้ ธรรมเนียม colophon ของบทที่ 7 และหลักฐานวิทยาศาสตร์ที่บทที่ 2 วางไว้

---

## เชิงอรรถ บทที่ 8

[1] Aman Sarawgi, Erla Garces Arias & Cristian Zotter, "Digitizing Nepal's Written Heritage: A Comprehensive HTR Pipeline for Old Nepali Manuscripts," *Proceedings of the 64th Annual Meeting of the ACL (Vol. 1: Long Papers)* (2026): 14720-14746 [S-2026-sarawgi-15 = S-250, fulltext 27pp] — abstract: CER 4.9%; p.14721: NGMPP + royal edicts; pp.14721-14722: 155 mss/3,100 lines/105,000 synthetic; p.14727: binarization -1% + long lines + data-centric conclusion + github.com/anjalisarawgi/nepOCR

[2] David N. Gellner (rev.), รีวิว Grünendahl, *A Concordance of H. P. Śāstrī's Catalogue...*, JRAS (1991): 444-445 [S-431 = S-1991-grunendahl-14, fulltext 2pp] — ภาพรวมระบบเชื่อมโยงแคตตาล็อก-ฟิล์ม

[3] R. Sivan & P.B. Pati, "A benchmark dataset for text line segmentation in palm leaf documents" [LeafOCR-Line], *Scientific Data* (2026) [S-251, HTML fulltext] — abstract: millions of manuscripts + 1,710 mss + deterioration levels; Introduction: Kerala tens of thousands

[4] Vincenzo Vergiani, "A Tentative History of the Sanskrit Grammatical Traditions in Nepal through the Manuscript Collections," ใน *Indic Manuscript Cultures through the Ages* (De Gruyter, 2017) [S-171 = S-213, fulltext 54pp] — p.80: NGMPP "around 190,000" (1970-2001)

[5] NGMCP Catalogue, Universitàt Hamburg — catalogue.ngmcp.uni-hamburg.de [สถาบัน — ตรวจสถานะ 2026-08-30] — Solr endpoint: 155,013 ระเบียน (Indic 117,406 + Tibetan 37,607)

[6] 田中公明 (Tanaka Kimiaki), "ネパールのサンスクリット語仏教文献研究(1) — 写本保存プロジェクトと研究の現状" [การศึกษาวรรณกรรมพุทธสันสกฤตในเนปาล (1)], *JIBS* 39(1) (1990) [S-432 = S-1990-tanaka-13, fulltext JA 5pp] — p.385: โครงสร้าง NGMPP + เนกาทิฟ/โพซิทิฟสองชุด; p.384: 27,302 (1970-75) + 38,438 (Bagmati 1975-79) + 2,265 (1980-87) + Reel letter A/B/C/T/E; p.383: Asha Saphu Kuthi ~6,000/~1,000 ใบลาน; p.381: ปัญหาบัตรแคตตาล็อก + Mañjuvajramukhākhyāna

[7] Theodor Aufrecht, *Catalogus Catalogorum: An Alphabetical Register of Sanskrit Works and Authors*, Part I (Leipzig: Brockhaus, 1891) [S-271, scan PASS 820pp] — Preface p.i: คำนำ 30 ปี; p.v-vii: รายการ B./Report/Oppert/Rice/W. พร้อมคำประเมิน

[8] รายการ Descriptive Catalogue บน Internet Archive (Rangacarya 1910, S.P.P. Sastri 1930, Kuppuswami Sastri 1924, Kaviraj 1923, Hrishikesa Sastri & Gui 1906, Bhandarkar series) [S-241, query numFound 700] + Bühler, *A Catalogue of Sanskrit Manuscripts contained in the Private Libraries of Gujarat...* Fascicle I (Bombay, 1871) [S-270, image-only 847pp]

[9] Cecil Bendall, *Catalogue of the Buddhist Sanskrit Manuscripts in the University Library, Cambridge* (Cambridge: University Press, 1883) [S-272, scan PASS 316pp] — Preface p.vii: Wright + Hodgson; p.x: vernacular colophons; p.ix: "first which attempts systematically to discuss the age" + plates N.S. 128 = 1008

[10] Hara Prasad Śāstrī, *A Catalogue of Palm-Leaf & Selected Paper MSS. Belonging to the Durbar Library, Nepal*, Vol. I (Calcutta: Baptist Mission Press, 1905) [S-273 = S-274 = S-240, scan PASS 445pp] — Preface: 101 bundles/448 palm-leaf/~5,000; p.xi: Dāsakarma 1176 + Vivāhakarmasamuccaya N.S. 233 = 1118; p.xiv: Vajrācārya scribes; p.xiii: 91 ใบ/ใบแรกข้างเดียว

[11] Hara Prasad Śāstrī, *A Catalogue of Palm-Leaf & Selected Paper MSS. Belonging to the Durbar Library, Nepal*, Vol. II (Calcutta: Baptist Mission Press, 1915) [S-430 = S-275, image-only 348pp ถอดจากภาพ 150dpi] — p.14/i: Rāja-bhāṇḍārī + 16,000; pp.44-45: ปี 366 ยุคเนวาร์ = 1246 + Saṃvat 1283 = 1176 "not in Nepāla Saṃvat"; p.61/22: entry III. 359 J/360 A + N.S. 132 = 1012; p.101: N.S. 508 = 1388 + La.Saṃ 208; p.201: Śaka 1488 = 1566

[12] Gellner 1991 [S-431] — p.444-445: "not always systematic... without cross-references"; concordance 4 ทาง (NA/Bṛhatsūcīpatra/reel/การอ้าง Śāstrī) ~850 รายการ; "over 100,000 items"; "not every single manuscript in the National Archives has been microfilmed"

[13] Ashok Uraon & M.K. Sinha, "Unveiling Bihar's Manuscript Legacy: Assessing the Role of the National Mission for Manuscripts," *IJIDT* 14(1) (2024) [S-229, metadata] — DOI 10.5958/2249-5576.2024.00004.9

[14] สถานะเว็บภาครัฐระหว่างวงวิจัย (2026-08-30 ถึง 09-01): namami.gov.in timeout, indiaculture.gov.in transport error, sarasvatimahallibrary.tn.gov.in transport error [A-19 findings]; IGNCA Kalanidhi (catalogue-of-catalogues + Vidya Nidhi + Gaudiya Grantha Mandira, EN/HI) [S-482, web ทำงานปกติ 2026-09-01]

[15] *Wisdom Frozen in Time: In Search of Treasure in Tanjavur and Bhubaneswar (Volume 3)*, IGNCA (2008), Internet Archive dli.Wisdom.Frozen.In.Time [S-235, คำบรรยายเท่านั้น] — Tamil University 8,000; Sarasvati Mahal 30,433 + 6,426 + catalogue Sarfojī 1801 บนใบลาน; Bhubaneswar ~37,000; Kedarnath ~3,000

[16] Jonathan Sweet, "Colonial museology and the Buddhist chronicles of Sri Lanka: agency and negotiation in the development of the palm-leaf manuscript collection at the Colombo Museum," *Museum & Society* (2014) [S-236, abstract จาก DOAJ — เว็บต้นทาง 404]

[17] Muktabodha Indological Research Institute, "Digital Library" [S-256, web เก็บ 2026-08-30] — 3,000+ texts / 570+ e-texts / 380+ Dyczkowski / 2,000+ IFP UNESCO MoW + 1,100 PDF + เริ่ม-จบถอด

[18] Muktabodha/IFP project page [S-256b, web] — 1955: IFP+EFEO ~10,000 ใบลาน (8,000+ IFP) + 1,144 Devanagari paper transcripts; โครงการ 75 คัมภีร์ศีวะ 3 ปี

[19] GRETIL — Göttingen Register of Electronic Texts in Indian Languages [S-257, web เก็บ 2026-08-30] — machine-readable + ค้นเต็มภาษาได้ + TEI migration (CSX/REE CP437 deprecated)

[20] 百度百科 "贝叶经数字化保护项目梵文识别系统研发" (อ้าง中国政府采购网: ประกาศ 2026-06-10, ผล 2026-07-02) [S-258, web เก็บ] — งบ 2.1552 ล้านหยวน / รับ 2.08 ล้าน / ปักกิ่ง-ลาซา / พื้นฐานโครงการโปตาลา ระยะ 1-3 — ยังไม่มีการเผยแพร่วิชาการของระบบ

[21] Palden Nyima, "Potala Palace moving to preserve ancient texts," *China Daily* (2024-12-17) [S-260, web เก็บ] — 68 ล้านหยวนตั้งแต่ 2018 + MOST national R&D plan; Xinhua/China Daily 2026-06 snippet ผ่าน Baidu SERP: รวมกว่า 110 ล้านหยวน — ที่มา secondary SERP ระบุเป็นข้อความรอยต่อ

[22] Palden Nyima & Daqiong, "Palm-leaf scripture experts seek to master restoration," *China Daily* (2025-04-22) [S-259, web เก็บ] — 465 เล่ม/เกือบ 30,000 ใบ/ครึ่งหนึ่งของทิเบต/ศตวรรษ 7-13; "largest existing collection... in the world" = ข้ออ้างทางการ; ทีมบูรณะทดลอง 2019

[23] Robert M. Griffiths, "Handwritten Text Recognition (HTR) for Tibetan Manuscripts in Cursive Script," *Revue d'Etudes Tibétaines* 72 (2024): 43-51 [S-252, fulltext 10pp] — p.44-45: 5,000-15,000 คำ + CER เป้า; p.48-49: 269 ใบ/2,310 บรรทัด → 1.15/2.33% → PyLaia 10.20/8.80% → dewarping 2.2/1.40%; p.50: ถ่ายโอน 30-50 ใบ vs 300

[24] Chao Zhang, Wei Wang & Guozhong Zhang, "Construction of a Character Dataset for Historical Uchen Tibetan Documents under Low-Resource Conditions," *Electronics* 11(23):3919 (2022) [S-253, HTML fulltext] — 610 หมวดอักขระ + pipeline annotation/extraction/augmentation

[25] Marianne Meelen & Robert M. Griffiths, "Collaborative Workflows for Handwritten Text Recognition in Under-Resourced Manuscript Collections," *Journal of Open Humanities Data* 11 (2025) [S-255, metadata — host ล่มทุก mirror ระหว่างวงวิจัย]

[26] "Automatic damage identification of Sanskrit palm leaf manuscripts with SegFormer," *Heritage Science* (2024) [S-546, fulltext PASS] — DOI 10.1186/s40494-023-01125-w

[27] David Pingree, *Descriptive Catalogue of the Sanskrit Astronomical Manuscripts Preserved at the Maharaja Man Singh II Museum in Jaipur* (2003) [S-237, metadata — DOI 10.70249/9780871692801] — โครงหมวด A-J; และ *Catalogue of Jyotiṣa Manuscripts in the Wellcome Library* (2004) [S-239, metadata — DOI 10.1163/9789047412694] — หมวด Sūcīpattras/Composite Manuscripts; สาย Census 1970-1994 จาก Tokutake [28]

[28] Taro Tokutake, "Extant Manuscripts of Śrīdhara's Works: Supplementing David Pingree's *Census of the Exact Sciences in Sanskrit*," *HSSA* 14 (2026): 80-142 [S-243, abstract/landing — DOI 10.18732/hssa129] — supplement จากสำรวจสนาม 2024: distribution/dates/scripts/commentaries/marginal notes

[29] ระเบียน NGMCP ปฐมภูมิที่เก็บในโปรเจกต์: aaingmcp_ngmcpdocument_00025146 (*Lekhamālikā*, A 393/18, NAK Acc. 5/3498) และ 00024049 (*Janmapattralekhanavidhi*, A 413/27, NAK Acc. 2/252, thyāsaphu) [S-198/S-199, raw records] — ฟิลด์ MyCoRe/film/NAK/subject/size/folio/script/last-update; ข้อจำกัด Solr: ค้นเฉพาะฟิลด์ ไม่มี full-text search

[30] Michael Hahn, "Indische und nepalesische Handschriften im Indologischen Seminar der Universität Bonn," ใน H. Eimer (ed.), *Indology and Indo-Tibetology* (Bonn: Indica et Tibetica, 1988), 81-96 [S-276, scan OA — DE] — p.81: คลังไมโครฟิล์ม 20 ปี + คัมภีร์หายาก; p.82: Śiśyalekhā Cambridge/Leningrad/Tokyo

[31] M. Nishanthi & N.D. Wijayasundara, "Preservation and Conservation of Palm Leaf Manuscripts at the Library of University of Sri Jayewardenepura," *Vidyodaya Journal* 7(2) (2022) [S-164, abstract] — โครงการรวบรวม-อนุรักษ์ทั้งประเทศจากหน่วยห้องสมุดมหาวิทยาลัย

[32] ฐานข้อมูลเอกสารตัวเขียนในประเทศไทย + WEB PORTAL เอกสารโบราณ, ศูนย์มานุษยวิทยาสิรินธร + ม.ราชภัฏเชียงใหม่ [S-470/S-471/S-472, web เก็บ 2026-09-01] — 2,005 รายการ/2 คลัง/16 อักษร/12 ภาษา; ข้อเสนอมาตรฐานดิจิทัล (ถ่ายภาพปลอดภัย/metadata ขั้นต่ำ/ตรวจคุณภาพ/สำรอง)

[33] Rice, *Catalogue of Sanskrit Manuscripts in Mysore and Coorg* (1884) — สำเนา archive.org in.ernet.dli.2015.240140 เป็นไฟล์ผิด (เนื้อหาจริง = Proceedings of the California Academy of Sciences Vol. XXVII) [S-277, CORRUPT content-mismatch ยืนยันจากการเปิดตรวจ]

[34] Jean-Luc Chevillard, "Beschi, grammairien du tamoul, et l'origine de la notion de verbe appellatif," *BEFEO* 79(1) (1992): 77-88 [S-434, fulltext 13pp] — p.80: คำ "appellative verbs" ไม่มีในตัวบท Beschi — Caldwell อ้างผ่านคำแปล; BnF fonds indien 192-193

[35] I. Jailingeswari & S. Gopinathan, "Tamil handwritten palm leaf manuscript dataset (THPLMD)," *Data in Brief* (2024) [S-254, metadata — DOI 10.1016/j.dib.2024.110100; preprint SSRN 10.2139/ssrn.4504342 (2023)]; HMPLMD (มะลยาฬัม) DOI 10.1016/j.dib.2023.108960; Balaji & Lalitha, Real-ESRGAN + Deformable ViT, ICISS 2026 (จาก findings_A21)
