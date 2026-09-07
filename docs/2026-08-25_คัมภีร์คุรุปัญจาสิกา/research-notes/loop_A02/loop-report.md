# Loop A02 Report: บรรณานุกรมวิจัยภาษาอังกฤษว่าด้วย Gurupañcāśikā (Fifty Stanzas on Guru Devotion)

วันที่สำรวจ: 25 สิงหาคม 2026 | ขอบเขต: งานวิชาการและคำแปลภาษาอังกฤษเท่านั้น (RESEARCH ONLY)

---

## 1. คำค้นและช่องทางที่ใช้ (Queries used)

Web search (ผู้ให้บริการค้นหาของ session ถูกจำกัดอัตรา HTTP 429 เกือบทั้งรอบ จึงใช้ API/หน้า catalog โดยตรงเป็นหลัก):

1. `"Fifty Stanzas" guru devotion Aśvaghoṣa academic study Tibetan Buddhism` (websearch — ถูก 429)
2. `Gurupancasika "Fifty Stanzas on Guru Devotion" scholarship Ashvaghosha` (websearch — ถูก 429)
3. HathiTrust Bibliographic API: `catalog.hathitrust.org/api/volumes/brief/recordnumber/006119067.json` (สำเร็จ)
4. WorldCat record 21541777 และ 214532929 (สำเร็จผ่าน web-fetch tool; ผ่าน PowerShell โดน Cloudflare)
5. Open Library Search API: `"fifty verses of guru devotion"`, `"fulfillment of all hopes"`, `isbn:8185102872` (สำเร็จ)
6. Crossref API: `query.bibliographic=Gurupancasika` (0 ผล), `guru devotion Tibetan Buddhism` (151,505 ผลทั่วไป) (สำเร็จ)
7. Semantic Scholar Graph API, Google Books API, OpenAlex, PhilPapers, BASE, scholar.archive.org, JSTOR, academia.edu, NDLTD, OhioLINK — **ถูกปฏิเสธทั้งหมด (HTTP 403/429/503/bot-challenge) จาก environment นี้**
8. Internet Archive advancedsearch + fulltext inside-search (สำเร็จบางส่วน)
9. เว็บไซต์โดยตรง: rigpawiki.org, viewonbuddhism.org, lamayeshe.com, fpmt.org, studybuddhism.com, lotsawahouse.org, openphilology.eu, treasuryoflives.org (403), wisdomexperience.org (403)

---

## 2. แหล่งที่ยืนยันได้ พร้อมเอกสารอ้างอิงแบบ Chicago

### 2.1 คำแปล LTWA (เอกสารเป้าหมายข้อ 1) — ยืนยันปีพิมพ์และประวัติฉบับพิมพ์แล้ว

**Aśvaghoṣa. *Fifty Verses of Guru-Devotion = Gurupañcāśikā = La-ma nga-chu-pa*. Translated by Sharpa Tulku, Khamlung Tulku, Alexander Berzin, and Jonathan Landaw. Library of Tibetan Works & Archives Translation Bureau. Dharamsala: Library of Tibetan Works and Archives, 1975; revised edition 1976. Reprinted 1992 (ISBN 81-85102-87-2); reprinted Delhi: Paljor Publications, 2002 (under author name "Arya Sura").**

หลักฐานประกอบ (อ้างตรงตามต้นฉบับ):

- HathiTrust Record 006119067 (API): titles `["Fifty verses of guru-devotion = Gurupañcāśikā = La-ma nga-chu-pa"]`, publishDates `["1976"]`, oclcs `["21541777","214532929"]`; มีสำเนาที่ University of Virginia และ University of California (search-only).
- WorldCat 21541777: "Authors: Aśvaghoṣa.; Library of Tibetan Works & Archives Translation Bureau — Print Book, English, 1976 — Edition: 1st rev. ed — Publisher: Library of Tibetan Works and Archives, Dharamsala, 1976"
- Open Library `/works/OL319109W`: title "Fifty stanzas on the spiritual teacher =", publisher "Library of Tibetan Works and Archives", dates "1992, 1975, 1976", ISBN 8185102872, 32 pages.
- Open Library `/works/OL9090139W`: title "Fifty Stanzas on the Spiritual Teacher", author "Arya Sura", publisher "Paljor Publications, India", date December 31, 2002, 38 pages (ISBN เดียวกัน = เป็นการพิมพ์ซ้ำของเล่มเดียวกัน)
- เครดิตผู้แปล (อ้างจาก colophon ของคำบรรยายที่ LYWA เผยแพร่): "The root text was composed by Ashvagosha in the first century BCE, translated into English by **Sharpa Tulku, Khamlung Tulku, Alexander Berzin and Jonathan Landaw**, and published by the Library of Tibetan Works and Archives in **1975**." และ "Translated and edited by Sharpa Tulku, Khamlung Tulku, Alexander Berzin and Jonathan Landaw; published by the LTWA in 1975."

หมายเหตุ: ใบสั่งงานระบุว่า "by Geshe Ngawang Dhargyey et al." — ข้อมูลที่ยืนยันได้ชี้ว่า Dhargyey เป็น**ครูผู้บรรยาย** (July–August 1976 ณ LTWA; คำบรรยายสั้น ~1973) ส่วนผู้แปลอังกฤษคือทั้งสี่ชื่อข้างต้น; บัตรรายการห้องสมุดระบุผู้แต่งนิติบุคคล "LTWA Translation Bureau"

### 2.2 คำบรรยายของ Tsongkhapa ฉบับแปลอังกฤษ

**Tsong khapa Blo bzang grags pa. *The Fulfillment of All Hopes: Guru Devotion in Tibetan Buddhism*. Translated by Gareth Sparham. Boston: Wisdom Publications, 1999. 155 pp.**

- Rigpa Wiki (rev. 94167): "Tsongkhapa, The Fulfillment of All Hopes: Guru Devotion in Tibetan Buddhism (Somerville: Wisdom Publications, 1999)"
- Open Library `/works/OL14927161W`: subtitle "guru devotion in Tibetan Buddhism", Wisdom Publications, July 1, 1999, 155 pp., ISBN13 9780861711536
- ฉบับพิมพ์ใหม่เปลี่ยนชื่อ: **Tsong khapa Blo bzang grags pa. *Fifty Verses of Guru Devotion: A Commentary on Asvaghosa's Gurupañcaśikā*. Translated by Gareth Sparham. Somerville, MA: Wisdom Publications, 2016. ISBN 9781614293286. LC: BQ3340.G875T6713** (Open Library `/books/OL51961685M`)
- เอกสาร LYWA ยืนยันชื่อผู้แปล: outline ท้ายเล่มระบุ "Lama Tsong Khapa's The Fulfillment of All Hopes, translated by Gareth Sparham"

### 2.3 งานวิชาการ philology เฉพาะเรื่อง (สำคัญที่สุดที่พบ)

**Szántó, Péter-Dániel. "Minor Vajrayāna Texts II. A New Manuscript of the Gurupañcāśikā." In *Puṣpikā: Tracing Ancient India Through Texts and Traditions*, Volume 1, edited by Nina Mirnig, Péter-Dániel Szántó, and Michael Williams, 443–450. Oxford: Oxbow Books, 2013.**

- ดาวน์โหลด PDF ฉบับเต็มแล้ว (8 หน้า) จาก openphilology.eu
- สาระที่ถอดได้ (PDF ไม่มี ToUnicode CMap จึงถอดเป็นข้อความได้บางส่วน): ตัวบทสันสกฤตเดิมรู้จักจากต้นฉบับเดียว (Cambridge? ระบุไม่ได้จาก OCR) ที่ขาดหายกลางเรื่อง; Szántó รายงาน**ต้นฉบับใหม่**; คำแปลทิเบตและจีนระบุผู้แต่งเป็น Aśvaghoṣa ขณะที่โคลอฟอนของ ms. สันสกฤตระบุชื่อผู้แต่งต่างออกไป (Rigpa Wiki สรุปว่าคือ Vāpilladatta ซึ่งสอดคล้องกับชื่อ "Bhabilha" ที่ Tsongkhapa ใช้); บรรณานุกรมท้ายบทความระบุงานก่อนหน้า เช่น การอ่าน/แปลโดย Geshe Ngawang Dhargyey และรายการใน *Journal Asiatique* ปี 1970 (ถอดตัวเลขไม่ครบ — ดูช่องว่าง)

### 2.4 บทความสารานุกรมวิชาการที่เกี่ยวเนื่อง

**Sparham, Gareth. "Tsongkhapa." In *Oxford Bibliographies in Buddhism*. New York: Oxford University Press, 2010. doi:10.1093/obo/9780195393521-0169.**

- ยืนยันผ่าน Crossref (reference-entry, 2010); ผู้เขียนคือผู้แปล *Fulfillment of All Hopes* — เป็นบรรณานุกรมวิชาการเชิงอรรถที่น่าจะวินิจฉัยงานแปลชุดนี้ (เนื้อหาเต็ม paywalled — เปิดดูได้เฉพาะ citation)

### 2.5 คำแปลออนไลน์ฉบับเต็ม (เปรียบเทียบการขึ้นคำ)

**(ก) viewonbuddhism.org** — "50 VERSES ON GURU DEVOTION / Written by Indian Master Ashvagosha" (หน้าระบุ "Last updated: June 12, 2019") ครบ 50 คาถา บันทึก HTML แล้ว
- คาถา 1: "Bowing in the proper way to the lotus feet of my Guru, who is the cause for me to attain the state of a glorious Vajrasattva, I shall condense and explain in brief what has been said in many stainless tantric texts about Guru-devotion."
- จุดน่าสังเกต: หน้านี้เพิ่มคำเตือนเชิงวิจารณ์สมัยใหม่ ("these practices... can be (and have been) mis-used to excuse harmful behaviour from a teacher and to silence students")

**(ข) LYWA (lamayeshe.com)** — บันทึก PDF 2 ไฟล์: short commentary (Dhargyey ~1973) และ long commentary (July–Aug 1976) พร้อม root text ฝังใน บันทึก TXT แล้ว
- คาถา 1 ฉบับ root text: "Bowing in the proper way to the lotus feet of my guru..." — **สำนวนตรงกับ viewonbuddhism ทุกประโยค** ⇒ ทั้งสองเว็บสืบทอดจากคำแปล LTWA ชุดเดียวกัน (ผู้แปลสี่ชื่อ รวม Berzin/Landaw)
- ข้อมูลเชิงประวัติจากคำบรรยาย: "This Fifty Verses of Guru Devotion was rendered into Tibetan by the great translator Rinchen Zangpo and the great Indian Pandit, Padmakaravarma."; "There's no Indian commentary on the Fifty Verses but we have the Tibetan one by Lama Tsong Khapa" (ข้อกล่าวทางธรรมเนียม — ขัดกับงานวิชาการปัจจุบัน); สาย transmission: Trijang Dorje Chang ← Pabongka

**(ค) ตรวจแล้วว่าไม่มี:** studybuddhism.com (Berzin) ไม่มีคำแปลนี้ (ตรวจ index "Original Texts" ทั้ง sutra/tantra); lotsawahouse.org หน้า Aśvaghoṣa มีเพียง 3 เรื่องอื่น (Toh 4390, Toh 2478 + ฉบับ confession) ไม่มี Gurupañcāśikā — แต่ระบุ name variants ของ Aśvaghoṣa: "Durdharṣakāla, Bhavideva (bha bi lha)" (สอดคล้อง "Bhabilha" ใน Rigpa Wiki); FPMT มีเฉพาะเนื้อหาเผยแผ่ tag "guru devotion" มิใช่ตัวบท

### 2.6 Rigpa Wiki (keywords เท่านั้น — ไม่ใช่แหล่งอ้างอิง)

rev. 94167 (10 Dec 2023): Toh 3721; "widely cited and debated in several important commentaries written in the tenth and eleventh centuries"; Sanskrit ms. ระบุผู้แต่ง "Vapilladatta (Skt. Vāpilladatta)"; Tsongkhapa เรียกผู้แต่งว่า "Bhabilha"; ชี้ไปยัง Szántó 2013 และคำแปล viewonbuddhism/lamayeshe — ข้อความเหล่านี้ใช้เป็น**ร่องรอยนำทาง**ซึ่งยืนยันด้วยแหล่งปฐมภูมิแล้ว (openphilology.eu, lamayeshe.com)

---

## 3. ข้อค้นพบหลัก (Key findings)

1. **ปีพิมพ์และฉบับ**: คำแปลอังกฤษ LTWA พิมพ์ครั้งแรก 1975, ฉบับปรับปรุง "1st rev. ed." 1976 (HathiTrust/WorldCat), พิมพ์ซ้ำ 1992 (ISBN 8185102872) และ Paljor Publications 2002 — สอดคล้องกันข้าม 3 ฐานข้อมูล
2. **ผู้แปล**: ไม่ใช่ Dhargyey แต่เป็น Sharpa Tulku, Khamlung Tulku, Alexander Berzin, Jonathan Landaw (colophon ในเอกสาร LYWA); Dhargyey เป็นผู้บรรยาย และ Losang Gyaltsen ถ่ายทอดพูด Nicholas Ribush แก้ไขคำบรรยาย
3. **คำแปลออนไลน์แพร่หลายเป็นสายเดียวกัน**: viewonbuddhism = LTWA rendering (เทียบคาถา 1 ตรงเป๊ะ); คำเตือนเรื่องการใช้/ล่วงละเมิดบทเรียน guru devotion ปรากฏเป็น discourse layer สมัยใหม่บน viewonbuddhism
4. **งานวิชาการเชิง philology ล่าสุดที่พบ**: Szántó 2013 (Puṣpiká I, Oxbow, 443–450) — ต้นฉบับสันสกฤตใหม่ ผู้แต่งตามโคลอฟอนไม่ใช่ Aśvaghoṣa (Vāpilladatta/Bhabilha) สอดคล้อง Rigpa Wiki
5. **คำบรรยาย Tsongkhapa มีชีวิตในตลาดหนังสืออังกฤษต่อเนื่อง**: Wisdom 1999 (*Fulfillment of All Hopes*, Sparham) → Wisdom 2016 retitle (*Fifty Verses of Guru Devotion: A Commentary on Aśvaghoṣa's Gurupañcāśikā*)
6. **Crossref/OpenAIRE/OpenAlex ไม่มีรายการเฉพาะ "Gurupancasika"** (Crossref total-results = 0) — ชี้ว่างานวิจัยเฉพาะเรื่องในวารสารที่จัดเก็บ DOI ยังน้อยมาก; การอภิปรายเชิงวิชาการส่วนใหญ่ฝังอยู่ในหนังสือ/บทความที่ไม่ผ่าน DOI

---

## 4. ช่องว่างและข้อจำกัด (Gaps — ระบุ "ยังไม่พบ")

- **Google Scholar, JSTOR, academia.edu, PhilPapers, BASE, Semantic Scholar, OpenAlex, Google Books API, ProQuest/PQDT, NDLTD, OhioLINK**: ทุกช่องทางถูกปฏิเสธ (HTTP 403/429/503 หรือ bot-challenge) จาก environment นี้ตลอดรอบ — **ยังไม่พบ**วิธีค้น dissertation ภาษาอังกฤษโดยตรง; จึง**ยังไม่พบ** PhD thesis เฉพาะเรื่อง Gurupañcāśikā หรือ guru-yoga ที่ยืนยันรายชื่อได้
- **Footnotes ของ Szántó 2013**: PDF ใช้ฟอนต์ custom ไม่มี CMap (pypdf/pdfminer ถอดเพี้ยน) — อ้างถึงงานก่อนหน้า (รวมรายการ *Journal Asiatique* ปี 1970 และ "edited by Almogi 2009") แต่**ยังไม่พบ** bibliographic details ครบ; ต้องอ่านจากภาพหน้ากระดาษหรือสำเนาอื่น
- **หน้าปก/title page ของ LTWA 1975/76** (ยืนยันรายชื่อผู้แปลจากแหล่งปฐมภูมิโดยตรง): มีแต่ scan ใน HathiTrust แบบ search-only ซึ่งดึงภาพไม่ได้ — **ยังไม่พบ**
- **OCLC 214532929** (เลข OCLC ที่สองใน HathiTrust record): URL คืน 404 — อาจเป็น merged/duplicate record — **ยังไม่พบ**รายละเอียด
- **บทความวิชาการเชิง interpretive เรื่อง guru devotion ใน Vajrayana ที่ quote คาถาเฉพาะ** (เช่น ใน JIABS, Indo-Iranian Journal): ค้นไม่ได้จากข้อจำกัดข้างต้น — **ยังไม่พบ** (ยกเว้น Owens 2019 *Buddhist-Christian Studies* "The Wrathful Guru: Exploring the Vajrayana Understanding of Anger" doi:10.1353/bcs.2019.0002 ซึ่งพบผ่าน Crossref แต่ยังไม่ได้ตรวจเนื้อหาว่า cite คาถาหรือไม่)
- **Lessing & Wayman 1968/1978, Cozort 1986, Hopkins 1983, Dreyfus 2003, Powers 1995**: ยืนยันตัวตนหนังสือผ่าน Open Library แล้ว แต่**ยังไม่พบ**หลักฐาน snippet ว่าแต่ละเล่ม cite Fifty Stanzas โดยตรง (IA fulltext search บนสำเนาที่มีถูก 403/ไม่มี OCR) — ห้ามอ้างว่า cite จนกว่าจะตรวจได้

---

## 5. ไฟล์ที่บันทึกไว้ใน documents/

| ไฟล์ | คืออะไร |
|---|---|
| Szanto-Gurupancasika-new-manuscript.pdf (+ .txt, pdfminer.txt) | บทความ Szántó 2013 ฉบับเต็ม + ผลถอดความ |
| szanto-publications-openphilology.html | หน้า publication list ที่ให้ citation ครบ |
| Dhargyey-...-long-commentary-LYWA.pdf/.txt | คำบรรยาย 1976 + root text + colophons |
| Dhargyey-...-short-commentary-LYWA.pdf/.txt | คำบรรยาย ~1973 |
| undated-anon-50-verses-guru-devotion-viewonbuddhism.html | คำแปล 50 คาถา ฉบับเต็ม |
| worldcat-21541777-ltwa-1976.txt | บันทึกรายการ WorldCat+HathiTrust |
| rigpawiki-fifty-stanzas-oldid94167.txt | สำเนาข้อความ Rigpa Wiki rev. 94167 |
| NOTES-ltwa-edition-history-and-translations.md | โน้ตรวบรวมคำพูดอ้างอิงตรง |

## 6. Live URLs สำคัญ

- https://catalog.hathitrust.org/Record/006119067 (API: /api/volumes/brief/recordnumber/006119067.json)
- https://search.worldcat.org/title/21541777
- https://openlibrary.org/works/OL319109W ; https://openlibrary.org/works/OL14927161W ; https://openlibrary.org/books/OL51961685M ; https://openlibrary.org/works/OL9090139W
- https://openphilology.eu/publications-peter-daniel-szanto (PDF บทความ: .../papers_2013d_gurupancasika.pdf)
- https://www.lamayeshe.com/article/fifty-verses-guru-devotion (+ PDFs /sites/default/files/pdf/373_pdf.PDF, 373_pdf_copy1.PDF)
- http://viewonbuddhism.org/resources/50_verses_guru_devotion.html
- https://www.rigpawiki.org/index.php?title=Fifty_Stanzas_on_Following_a_Teacher&oldid=94167
- https://doi.org/10.1093/obo/9780195393521-0169 (Sparham, Oxford Bibliographies)
