# Findings — Phase B Loop B-01 + B-02 (Wiland & conservation literature)

> วันที่: 2026-09-01 | เครื่องมือ: crossref_search.py, document_harvester.py, pdf_extractor.py, dg_inpage_fetch.js, stealth_puppeteer.js
> กติกา: ทุก PDF ผ่าน `pdf_extractor.py --check` ก่อนบันทึก; quote ทุกอันคัดจากไฟล์ที่ harvest จริงในเครื่อง

---

## สรุป source ที่ได้เพิ่ม/ปลดล็อก

| Source ID (รอบนี้) | ผูกกับ row เดิม | ภาษา | Bibliography ย่อ | Local Path | Health |
|:---|:---|:---:|:---|:---|:---|
| S-460 | S-2021-klebanov-11 | EN | Klebanov, A. "On the Textual History of the Suśrutasaṃhitā (1): A Study of Three Nepalese Manuscripts." *eJournal of Indian Medicine* 12 (2021). DOI 10.21827/ejim.12.1.37385 | `loop_B01/documents/klebanov2021_susrutasamhita_ejim12.pdf` (+.txt) | **PASS** 64 pp, avg 2,015.4 chars/page, 0 empty |
| S-461 | S-2025-gaurav-25 | EN | Gaurav, Jaiswal R.T., Ram M. "Manuscriptology in Ayurveda: A Scientific Approach to Preserving Ancient Medical Knowledge." *J Ayu Int Med Sci* 10(6): 333-337 (2025). DOI 10.21760/jaims.10.6.46 | `loop_B01/documents/gaurav2025_manuscriptology_jaims.pdf` (+.txt) | **PASS** 5 pp, avg 2,502.8 chars/page, 0 empty |
| **S-462** (ใหม่) | — (ต้องเพิ่ม row) | EN/JA | Shākyā, Sudan. "The Sanskrit-Newari Bilingual Buddhist Manuscript of Nepal: Its Role in the Buddhist Studies." *JIBS* 64(3): (233)-(240) [= 1275-1282] (2016). DOI 10.4259/ibk.64.3_1275 | `loop_B01/documents/jibs643_bilingual_sanskrit_newari.pdf` (+.txt) | **PASS** 8 pp, avg 2,253.2 chars/page, 0 empty |
| — (อัปเดต) | S-1990-tanaka-13 | EN/JA | Tanaka, K. "On the Buddhist Sanskrit Manuscripts in Nepal and the NGMPP." *JIBS* 39(1): 385 (1990). DOI 10.4259/ibk.39.385 | `loop_B01/documents/tanaka1998_tantric_nepal_jibs.pdf` (+.txt) | **PASS** 5 pp, avg 565.8 chars/page, 0 empty |
| — (อัปเดต PDF) | S-2025-chen-55 | EN | Yu, C., Zhang, M., Li, B., Lian, X. "Unraveling the ink composition of ancient palm leaf manuscript from Tibet: A multi-analytical study." *npj Heritage Science* 13: 73 (2025). DOI 10.1038/s40494-025-01543-y | `loop_B02/documents/yu2025_ink_palmleaf_tibet_nature.pdf` (+.txt) — เดิมเป็น HTML fulltext จาก loop_A04, ตอนนี้ได้ PDF จริง | **PASS** 10 pp, avg 3,432.7 chars/page, 0 empty |
| **S-463** (ใหม่) | — (ต้องเพิ่ม row) | EN/DE | Li, B., Yu, C., Zhang, M., Cao, D. "Dimensional Stability of Sanskrit Manuscript Supports Exposed to Environmental Humidity: Tibetan Paper, Palm Leaf, and Birch Bark." *Restaurator* (2026). DOI 10.1515/res-2025-0020 (CC-BY 4.0) | `loop_B02/documents/li2026_dimensional_stability_restaurator.pdf` (+.txt) | **PASS** 30 pp, avg 1,851.0 chars/page, 0 empty |
| — (quote เพิ่ม) | S-2022-wiland-28 | EN | Wiland, J. et al. "A literature review of palm leaf manuscript conservation—Part 1..." *Journal of the Institute of Conservation* 46(3): 236-259 (2022). DOI 10.1080/19455224.2022.2115093 | `research-notes/PDF/A literature review ... Part 1 ....txt` (T&F landing page — full text paywall) | n/a (landing-page text; abstract 5 ภาษา + Notes/refs ครบ) |
| — (quote เพิ่ม) | S-2022-wiland-35 | EN | Wiland, J. et al. "A literature review ...—Part 2..." *JIC* 47(1) (2023). DOI 10.1080/19455224.2023.2167095 | `research-notes/PDF/A literature review ... Part 2 ....txt` (T&F landing page) | n/a (landing-page text) |

**รวม quotes ที่เก็บรอบนี้: 33 อัน** (Klebanov 5, Gaurav 4, Shākyā 6, Yu 5, Li 2026 6, Wiland P1 4, Wiland P2 3)

---

## S-460 — Klebanov 2021 (eJIM 12) — ปลดล็อก "รอ harvest — OA" สำเร็จ

- **Bibliography:** Klebanov, A. "On the Textual History of the Suśrutasaṃhitā (1): A Study of Three Nepalese Manuscripts." *eJournal of Indian Medicine* 12 (2021), 64 หน้า. DOI: 10.21827/ejim.12.1.37385
- **Local Path:** `output/2026-08-30_ใบลานอินเดียเนปาล/research-notes/loop_B01/documents/klebanov2021_susrutasamhita_ejim12.pdf` + `.txt`
- **Health:** PASS (64 pp, avg 2,015.4 chars/page, min 723, max 2,722, empty 0, JS challenge: false)
- **Quotes (5):**
  1. (PDF p. 11) "This is an incomplete and partly damaged palm-leaf manuscript written in the so-called transitional Gupta script, comprising 152 folios. The size of the folios is 53.5 x 4.4 cm, and each folio has two string holes. The text on each folio extends over six to eight lines."
  2. (PDF p. 11) "KL 699 (see Figures 1 to 4) comprises no less than four different codicological units. All of these can be distinguished from each other on the basis of text-external features, such as the shape and size of the letters (akṣaras), number and arrangement of lines on a folio, and the style of foliation."
  3. (PDF p. 15) "The date mentioned in the first sragdharā verse is verified for Sunday, April 13, AD 878 and, in the words of Harimoto (2011, p. 88), '[t]here are controversies regarding the origin of the era, but there is an agreement as to which date this points to, thanks to the mention of Sunday in this colophon.'"
  4. (PDF p. 19) "This is a well-preserved and almost complete palm-leaf manuscript from which only several folios of the Ut are missing. It is written in a variety of the Newari script. It contains 435 folios that are 34 x 5 cm in size, with one string hole in the middle of each folio."
  5. (PDF p. 59) "Suśrutasaṃhitā — Transitional Gupta, palm-leaf, 152 folios, incomplete, partly damaged, date of copy: April 13, 878. ... Kaiser Shamsher Library, Kathmandu: KL 699 (NGMCP C 80/7). Siglum: K. — Newari, palm-leaf, 435 folios, complete, date of copy: *1573. ... National Archives Kathmandu: NAK 5/333 (NGMCP B 29/19). Siglum: H."
- **Map:** codicology/palm-leaf-physiology ของ MSS เก่าสุด (AD 878) ใน Nepal collection; ข้อมูล folio size/string holes/สภาพ damage ใช้ตรวจ cross-วัตถุใน draft ได้โดยตรง; ยืนยันว่า Suśrutasaṃhitā Nepalese MSS (KL 699 + NAK 5/333) ติด UNESCO Memory of the World

## S-461 — Gaurav et al. 2025 (JAIMS 10(6)) — ปลดล็อก "รอ harvest — OA"

- **Bibliography:** Gaurav, Jaiswal R.T., Ram M. "Manuscriptology in Ayurveda: A Scientific Approach to Preserving Ancient Medical Knowledge." *Journal of Ayurveda and Integrated Medical Sciences (JAIMS)* 10(6): 333-337 (2025). DOI: 10.21760/jaims.10.6.46. CC-BY 4.0 (Maharshi Charaka Ayurveda Organization)
- **Local Path:** `output/2026-08-30_ใบลานอินเดียเนปาล/research-notes/loop_B01/documents/gaurav2025_manuscriptology_jaims.pdf` + `.txt`
- **หมายเหตุการ harvest:** ไฟล์ .pdf เดิมใน loop_B01 คือ **HTML ปลอมเป็น PDF** (article-view page) — ลบแล้วดึงใหม่จาก galley จริง `https://jaims.in/jaims/article/download/4624/7650/13885` (ผ่านลิงก์ "Download PDF" ในหน้า article view) → %PDF-1.4 346,967 bytes
- **Health:** PASS (5 pp, avg 2,502.8 chars/page, empty 0)
- **Quotes (4):**
  1. (p. 333) "Ayurveda, one of the world's oldest systems of medicine, has been preserved through a rich corpus of manuscripts written on palm leaves, birch bark, and handmade paper in various scripts."
  2. (p. 334) "Key treatises such as Charaka Samhita, Sushruta Samhita, and Ashtanga Hridaya were originally transmitted orally before being written down in manuscript form. These manuscripts, written on palm leaves, birch bark, or handmade paper, are invaluable for understanding the evolution and regional adaptations of ayurveda."
  3. (p. 334) "However, time, environmental factors, neglect, and lack of awareness have placed many of these manuscripts at risk of being lost forever. Manuscriptology - a discipline encompassing paleography, codicology, philology, and textual criticism - emerges as an essential tool to preserve and reconstruct the vast repository of Ayurvedic wisdom."
  4. (p. 335) "Physical details: Script, material (palm leaf, paper), size, foliation, binding." (เกณฑ์สำรวจ MSS ในสาย Ayurveda manuscriptology)
- **Map:** ใช้ตอบหัวข้อ "manuscriptology ในสายแพทย์แผนไทย/อายุรเวท" ใน draft — ยืนยัน material taxonomy (palm leaf/birch bark/handmade paper) แบบเดียวกับ corpus อินเดียเหนือ

## S-462 — Shākyā 2016 (JIBS 64(3)) — source ใหม่ (bilingual Sanskrit-Newari)

- **Bibliography:** Shākyā, Sudan. "The Sanskrit-Newari Bilingual Buddhist Manuscript of Nepal: Its Role in the Buddhist Studies." *Journal of Indian and Buddhist Studies (JIBS)* 64(3): (233)-(240) (March 2016). DOI: 10.4259/ibk.64.3_1275 — ดึงตรงจาก J-Stage PDF สำเร็จ
- **Local Path:** `output/2026-08-30_ใบลานอินเดียเนปาล/research-notes/loop_B01/documents/jibs643_bilingual_sanskrit_newari.pdf` + `.txt`
- **Health:** PASS (8 pp, avg 2,253.2 chars/page, empty 0)
- **Quotes (6):**
  1. (printed p. 1275 / PDF p. 1) "Nepal preserves the abundant quantity of Sanskrit manuscripts. The diplomat-turned scholar Brain Houghton Hodgson (1800-1894) introduced their existence to the world for the first time."
  2. (printed p. 1275) "as many Sanskrit Buddhist scriptures had been discovered from the Nepalese collection, which were only survived in the Tibetan and Chinese Buddhist canon."
  3. (printed p. 1277 / PDF p. 3) "The Bilingual MSS are copied in the yellowish paper with black or vermilion ink. In the case of violet paper the letters are inscribed in gold or silver paste. To differentiate the Sanskrit reading with Newari portion both vermilion and black ink are used together in the yellowish paper ... The Bilingual MSS copied in the palm leaf is too rare."
  4. (printed p. 1277) "These are the scripts used mostly in the Bilingual MSS: Pracalita, Rañjanā, Bhujimola, Kutila, and Devanagari. Among them, the Devanagari is regarded as a new script that has been employed in the latter period replacing the other."
  5. (printed p. 1277) "The contents of Newari portions added in the Bilingual MSS can be compiled into following four points: (1) the translation of Sanskrit original scriptures, (2) the original annotated explanation of Sanskrit scriptures, (3) the guidance to perform the ritual such as consecration of maṇḍala, and (4) the iconographic illustrations of mudras or deities."
  6. (printed p. 1278 / PDF p. 4) "On surveying the colophons, it is revealed that the vajracarya priests of local monasteries scribed these manuscripts at Kathmandu Valley."
- **Map:** bilingualism/bitext — ให้ typology 4 ประเภทเนื้อหา Newari + วัตถุ (yellowish paper, 2 หมึก; palm-leaf bilingual "too rare") ตรงกับหัวข้อ bilingual manuscripts ของโปรเจกต์; หมายเหตุ: scan ของ J-Stage มี OCR ฝังตัวพลาดบ้าง (เช่น "fbr" แทน "for") — อ่านผ่านได้แต่ quote ยาว ๆ ควรตรวจกับ PDF

## อัปเดต S-1990-tanaka-13 (Tanaka, JIBS 39(1) 1990)

- Harvest อยู่ใน `loop_B01/documents/tanaka1998_tantric_nepal_jibs.pdf` (+.txt) — PASS 5 pp (avg 565.8 chars/page; บางหน้า text น้อยเพราะตาราง/ตัวอักษรญี่ปุ่น) — ปิดสถานะ "รอ harvest" ของ row เดิม

---

# Loop B-02 — Wiland + conservation literature

## ตรวจสถานะ PDF งาน conservation ที่รออยู่

- `Get-ChildItem "...PDF" -Filter "*literature*"` → พบเฉพาะ **.txt** (ไม่มี .pdf ใหม่) ของ Wiland Part 1 (21,671 B) และ Part 2 (25,492 B)
- เปิดตรวจ: ทั้งสองไฟล์เป็น **T&F landing-page text** (abstract 5 ภาษา + keywords + Notes/footnotes ยาว) — **ไม่ใช่ full article** (T&F paywall) สอดคล้องกับ S-400/S-401 ที่บันทึกไว้แล้ว → เก็บ quotes จาก abstract/Notes ได้ตามด้านล่าง

## Quotes จาก Wiland Part 1 (S-2022-wiland-28) — 4 อัน (landing page, ไม่มีเลขหน้า)

1. (Abstract) "The closure of the British Library during the 2020–2021 Covid-19 pandemic allowed the conservation department to undertake a treatment review of the conservation of palm leaf manuscripts in order to make better-informed decisions about the treatment of these complex objects."
2. (Abstract) "Part 1 includes an historic overview of palm leaf manuscripts and their production, leaf preparation methods, manuscript materials and media, palm leaf manuscripts at the British Library and the common types of damage found in such manuscripts."
3. (Keywords) "palm leaf / boxing / long-term storage / conservation treatment / ethical conservation / traditional preservation methods"
4. (Note 2) "Anupam Sah, 'Palm Leaf Manuscripts of The World: Material, Technology and Conservation', *Studies in Conservation* 47, Supp. 1: Reviews in Conservation 3 (2002): 15–24." — anchor reference หลักของสาย conservation (ควรเพิ่มเป็น source ตาม)

## Quotes จาก Wiland Part 2 (S-2022-wiland-35) — 3 อัน (landing page)

1. (Abstract) "Part 2 details historic treatments and current conservation techniques as informed by our review and survey, as well as storage, religious and ethical issues. It concludes with two decision-making flowcharts, and our practical recommendations for conservators."
2. (Abstract) "The authors wish to share the collated information as widely as possible and help create greater continuity and consistency in palm leaf manuscript conservation by presenting recommendations for best practice for conservators who treat these amazing objects."
3. (Abstract) หัวข้อ boxing/จริยธรรม: "...historic and current conservation treatments, boxing and storage, religious and ethical issues, recommendations for best practice" (จากชื่อเรื่องเต็มของ Part 2)

## Yu et al. 2025 (S-2025-chen-55) — อัปเดตเป็น PDF จริง — 5 quotes

- **Local Path ใหม่:** `loop_B02/documents/yu2025_ink_palmleaf_tibet_nature.pdf` (2,143,221 B, %PDF-1.4) — ดึงด้วย in-page fetch ผ่าน session ของ nature.com (Invoke-WebRequest โดนบล็อกเป็น HTML)
- **Health:** PASS 10 pp, avg 3,432.7 chars/page
- **Quotes:**
  1. (p. 1) "The analysis revealed that the ink used in the palm-leaf manuscript derived from oil combustion, providing direct evidence of lamp soot and adhered to the surface of the palm leaves using adhesives without penetrating into their interior as determined by Raman spectroscopy, SEM–EDS, and TEM."
  2. (p. 1) "Currently, nearly 30,000 pieces of ancient palm-leaf manuscripts are still preserved in Tibetan monasteries. These palm-leaf manuscripts originated from ancient India, encompassing nearly ten different ancient scripts from the South Asian subcontinent."
  3. (p. 1) "This study represents the first systematic confirmation of the ink type used in palm-leaf manuscripts and the corroboration of adhesive components through various scientific methods."
  4. (p. 8) "These Sanskrit palm-leaf manuscripts in Tibet primarily originated from regions such as Nepal, India, and Kashmir, where Buddhism flourished from the 7th to the 13th century."
  5. (p. 8) "Given the dry climate of the Tibetan region and the lack of targeted preservation measures, the manuscript exhibits significant embrittlement and is highly prone to fracturing."

## S-463 — Li, Yu, Zhang & Cao 2026 (Restaurator, CC-BY) — source ใหม่

- **Bibliography:** Li, B., Yu, C., Zhang, M., Cao, D. "Dimensional Stability of Sanskrit Manuscript Supports Exposed to Environmental Humidity: Tibetan Paper, Palm Leaf, and Birch Bark." *Restaurator. International Journal for the Preservation of Library and Archival Material* (2026). DOI: 10.1515/res-2025-0020. Received 2025-06-18; accepted 2026-03-12; published online 2026-04-24. CC-BY 4.0 (De Gruyter) — เทียบเคียงกับกลุ่มวิจัยเดียวกับ S-2025-chen-55 (Renmin University / Wuhan University)
- **Local Path:** `loop_B02/documents/li2026_dimensional_stability_restaurator.pdf` (+.txt) — ดึงผ่าน De Gruyter สำเร็จด้วย dg_inpage_fetch (session-context fetch)
- **Health:** PASS 30 pp, avg 1,851.0 chars/page, empty 0
- **Quotes (6):** (เลขหน้าพิมพ์ = PDF page + 28)
  1. (p. 21 / PDF 1, Abstract) "Palm leaves showed the largest expansion–contraction, followed by birch bark, while Tibetan paper exhibited the best dimensional and planar stability. Palm-leaf deformation is attributed to highly hygroscopic constituents, a loose microstructure and oriented vascular bundles."
  2. (p. 21, Abstract) "Based on the results, ca. 55 % RH is identified as an optimal general storage humidity for all three supports, where projection and expansion ratios fall within relatively stable ranges."
  3. (p. 23 / PDF 3) "Survey data indicate that approximately 30 % of palm leaf manuscripts in China have suffered significant deformation due to inadequate humidity control (Song 2023)."
  4. (p. 54 / PDF 26) "Palm leaf exhibits the greatest hygroscopicity and desorption capacity of the three supports, with moisture content ranging from 4.5 % to 14.2 % across the humidity conditions tested, and the largest expansion and contraction amplitude, making it particularly sensitive to low humidity."
  5. (pp. 54-55 / PDF 26-27) "The recommended storage humidity is 50–70 % RH, with an optimal range of 50–55 % RH. Directional deformation in palm leaf is governed by the combined effects of structural heterogeneity and chemical hydrophilicity: the epidermis–mesophyll–epidermis sandwich structure produces uneven expansion and contraction across layers during humidity change; the directional arrangement of vascular bundles along the long axis generates a continuous bending moment; and high hemicellulose and pectin content increases hygroscopicity, amplifying deformation."
  6. (p. 55 / PDF 27) "an RH of approximately 55 % is considered compatible with all three supports and is proposed as a unified humidity benchmark for mixed-support manuscript collections. Combined with a constant temperature of 18–20 °C and humidity fluctuation control within ±5 %, deformation risk across all three supports can be minimised. ... palm leaf benefits from a lightweight fibre mat providing support along the long edges; and birch bark should be housed in a U-shaped frame to limit short-edge bending."
- **Map:** วัสดุ/หมึก/damage/boxing — ให้ตัวเลขสมรรถนะการขยาย-หดตัวของ palm leaf (MC 4.5-14.2 %) + ข้อกำหนด storage RH/อุณหภูมิ + มาตรการ boxing เฉพาะวัสดุ ตอบหัวข้อ conservation ของ draft โดยตรง และเชื่อมกับ "effect of traditional processing craft on hygroscopicity" (S-2024-yu-40)

---

## ผลตรวจ Unpaywall (2 DOI JSTOR) — API ปฏิเสธ

- `https://api.unpaywall.org/v2/10.2307/603846?email=research@example.com` → **HTTP 422**: "Please use your own email address in API calls" (Unpaywall ปิดการใช้ email แบบ example.com)
- `https://api.unpaywall.org/v2/10.2307/3217845?email=research@example.com` → **HTTP 422** เช่นกัน
- **สรุป:** ยังไม่สามารถยืนยัน OA status จาก Unpaywall ได้ด้วย email ที่กำหนด — Grünendahl (10.2307/603846) และ Salomon Senior MSS (10.2307/3217845) คงสถานะ "รอ harvest — JSTOR"; ข้อสังเกตจาก Crossref รอบก่อน (loop_A25) ระบุ "ไม่มี OA link, ไม่มี abstract" สำหรับ Salomon 2003 → โอกาส OA ต่ำ ควรขอรอบถัดไปผ่านทางเลือก (reprint/อาจารย์หน้าเว็บส่วนตัว) หรือ Unpaywall ด้วย email จริง
- ช่องว่างเชิงเทคนิค: JIBS 64(3) ตรง J-Stage URL `https://www.jstage.jst.go.jp/article/ibk/64/3/64_3_1275/_pdf` **ตอบ 404** ตาม URL ในโจทย์ แต่ harvest สำเร็จผ่านไฟล์ที่ดึงไว้ก่อนหน้าใน loop_B01/documents (รูปแบบ URL จริงของ J-Stage คือ `ibk1952/64/3/64_3_1275/_pdf` ตามที่ J-Stage ใช้กับ vol เก่า)

## งานที่ยังล้มเหลว (บันทึกไว้สำหรับ loop ถัดไป)

- **Wu & Li 2025 Coatings 15(10):1178** (S-138, 10.3390/coatings15101178 — MDPI OA): Invoke-WebRequest → 403; document_harvester (stealth + puppeteer) → ได้ shell/หน้าว่าง; stealth_puppeteer mode pdf → PDF 3 หน้าเปล่า (LOW-TEXT, ลบแล้ว); in-page fetch → "Failed to fetch" (Cloudflare). MDPI ยังไม่ผ่านด้วยเครื่องมือชุดปัจจุบัน → **คงสถานะ รอ harvest**
- ล้างไฟล์ขยะ: `gaurav2025_*.pdf` (HTML เดิม), `www_mdpi_com_..._1178_pdf.txt` (105 B shell), `wu2025_coatings_cpam_cqas.pdf` (3 หน้าเปล่า)

---

# ข้อค้นพบรวม (3-5 ประเด็น)

1. **Palm-leaf bilingual "too rare" (S-462)** — Shākyā 2016 ยืนยันเชิงประจักษ์ว่า bilingual Sanskrit-Newari MSS ทำบนกระดาษ (yellowish/violet) เกือบทั้งหมด ใบลาน "too rare" — เป็นข้อจำกัดสำคัญต่อการอ้างว่า bilingualism ของ Nepal ผูกกับสื่อใบลานโดยตรง; น่ายกเป็น nuance ใน draft บท bilingualism
2. **หมึกใบลาน = lamp soot + adhesive ไม่ซึมเนื้อไม้ (Yu 2025 + S-463)** — ยืนยันทางวิทยาศาสตร์แล้วว่าหมึกเกาะผิว (surface attachment) ผ่าน animal glue/plant gum อธิบายกลไก "ink flaking/fading" ที่เป็น damage หลักของใบลาน และสอดคล้องกับคำอธิบาย traditional preparation (ไข/ทาน้ำมัน) ที่มีในหลาย source เดิม
3. **เกณฑ์ storage มีตัวเลขใช้ได้แล้ว (Li 2026)** — RH 50-55 % (ช่วง 50-70) + 18-20 °C + fibre mat รองขอบยาว — แทนที่คำแนะนำเชิงคุณภาพเดิม; ข้อมูล 30 % ของใบลานจีนเสียหายจาก humidity control ไม่ดี (Song 2023 อ้างใน Li) เป็นสถิติที่ draft อ้างได้
4. **Klebanov 2021 ให้ codicology ระดับ folio ของ palm-leaf MSS อินเดียใต้-เนปาล** (53.5 × 4.4 cm, 2 string holes, transitional Gupta; 34 × 5 cm, 1 string hole, Newari script, *1573) — ตัวเลขวัตถุจริงที่ draft ด้าน material/geometry อ้างได้โดยตรง และเป็น MSS แพทย์ (Suśrutasaṃhitā) เชื่อมกับสาย Ayurveda manuscriptology (S-461)
5. **อุปสรรค anti-bot คือคอขวดหลักของ loop B** — MDPI (Coatings) และ T&F (Wiland full text) บล็อกครบทุกวิธี ส่วน De Gruyter/Nature/J-Stage/JAIMS ผ่านด้วย in-page fetch หรือ galley link → loop ถัดไปควรจัดลำดับ: ใช้เวลากับ De Gruyter/OA สายยูโรก่อน แล้วค่อยลอง MDPI ด้วยวิธีใหม่ (เช่น เครื่อง/เครือข่ายอื่น)

# Gap คงเหลือ

- **JSTOR 2 รายการ:** Grünendahl 1991 (S-1991-grunendahl-14), Salomon 2003 (S-2003-salomon-17/S-293) — Unpaywall ตรวจไม่ได้ (422), ยังไม่มี OA
- **MDPI Coatings** (S-138) — Cloudflare ยังไม่ผ่าน
- **Wiland Part 1/2 full text** — มีเฉพาะ landing page; full text T&F paywall (มี flowcharts + best-practice recommendations ที่ยังไม่ได้อ่าน)
- **Hartmann 1996 IIJ (S-1996-hartmann-19), Franco Spitzer (S-2004-franco-20), Salomon 1999 หนังสือ (S-1999-salomon-16), Straube BSOAS (S-2014-straube-24), Orsini OAPEN (S-2015-orsini-26), Acharya AMAR (S-2024-acharya-27)** — ยัง "รอ harvest" ตาม source-index (นอกขอบเขตลูปนี้)
- งานที่ crossref เห็นแล้วน่าจับลูปหน้า: Poliakova et al. 2026 *Botany Letters* "Plants used for palm-leaf manuscript production and conservation in South and Southeast Asia" (10.1080/23818107.2026.2634848, CC-BY-NC-ND) — ยังไม่ harvest
