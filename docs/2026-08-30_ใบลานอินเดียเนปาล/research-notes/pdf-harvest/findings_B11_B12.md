# Findings — Loop B-11 (Wujastyk / Montelle / Plofker) & Loop B-12 (De Simini / Zotter / NGMCP crew) (S-520 … S-526)

วันที่: 2026-09-01 | Sub-agent: The Explorer
**เครื่องมือที่ใช้จริง:** Crossref REST ตรง (api.crossref.org), Unpaywall API (email: vesin.research@gmail.com), PowerShell Invoke-WebRequest (harvest), PyMuPDF (health check + extract)
**ข้อจำกัดที่พบ:** `scratch/crossref_search.py` ไม่มีอยู่ใน repo (GAP เดิมยืนยันซ้ำ) — ใช้ Crossref REST ตรงแทน; Crossref rate-limit 429 เมื่อยิงเร็ว (ใส่ Start-Sleep 3-5s ทุก query); ชื่อ "Simini" ใน Crossref ดึงงาน Francisco Simini (นักฟิสิกส์อาร์เจนตินา) ปนมามาก — ต้องกรองด้วย query.bibliographic คู่กับ query.author เสมอ

**Dedupe check (ตามกฎ):** ตรวจ source-index.md ทั้งไฟล์ก่อนลงทะเบียนทุก ID — S-522/S-523/S-524 พบ PDF ซ่อนอยู่ใน `pdf-harvest\loop_B03_B04\` (harvest ค้างจาก loop เก่าที่ยังไม่เคยลง findings/index) → ไม่นับเป็นงานใหม่ที่ต้องหา แต่ยกสถานะเป็น fulltext และลงทะเบียนใหม่; S-525 (Colas CIS 2022) มี PDF เดิมชื่อ `colas_text_paintings_2022.pdf` ใน loop_B03_B04 อยู่แล้ว → ดึงฉบับสำนักพิมพ์จริง (journals.akademicka.pl) มาเก็บซ้ำเพื่อยืนยัน provenance; ไม่มีรายการใดทับซ้ำกับ ID เดิม S-2017-wujastyk-18/S-295/S-336 (Bakhshali) ตามที่ภารกิจกำหนด

---

## Loop B-11 — Wujastyk / Montelle / Plofker (นอกเหนือ Bakhshali HSSA)

## S-520
- **Language:** EN (ศัพท์ Sanskrit/vernacular แทรกใน tables)
- **ประเภท:** secondary (journal article — critical edition, fulltext)
- **Bibliography:** Misra, Anuj, Clemency Montelle & Kim Plofker. "Eclipse Computation Tables in Sanskrit Astronomy: A Critical Edition of the Tables of the Karaṇakesarī of Bhāskara (fl. c. 1681)." *History of Science in South Asia* 4: 1–79 (2016).
- **DOI:** 10.18732/h26p4v
- **URL:** https://journals.library.ualberta.ca/hssa/index.php/hssa/article/view/10
- **Local Path:** loop_B11/documents/montelle_misra_plofker_karakeshari_hssa.pdf (+.txt)
- **PDF health:** PASS (82 pp, avg 1,623.3 chars/page, 0 empty) — harvest ผ่าน Unpaywall OA link จริง
- **Unpaywall:** is_oa=true (HSSA เป็น OA journal เดียวกับ Bakhshali response)
- **Quotes verbatim:**
  1. (p. 1) "The Karaṇakesarī (epoch 1681 ce) comprises a set of astronomical tables (sāraṇī or koṣṭhaka in Sanskrit) and accompanying versified text on the subject of eclipse computations, written by Bhāskara, son of Rāma, who flourished in the late seventeenth century."
  2. (p. 3) "All three manuscripts are written in Nāgarī script on hand-made paper, with table heading and row header text in Sanskrit and some paratext in an unidentified vernacular, which we have not been able to transliterate or translate with confidence in a consistent manner."
  3. (p. 9) "MS R2 includes a colophonic statement (on f. 8v) that reads: इति श्रीदैवरामाजभार्गवरचिते करणकेशरीमौलौ च सूर्यपर्वाधिकारकोकासंपूर्णमिति — Thus, the tables [concerning] the chapters on lunar and solar eclipses, in the book [called] Karaṇakesarī, composed by Bhāskara, son of Rāma the astrologer, [are] complete." (Devanagari ใน text-layer มี OCR artifact เพี้ยน — ข้อความอังกฤษ translation ของผู้แต่งอ่านได้ปกติ)
  4. (pp. 32–33) "our edition of the numerical tables of the Karaṇakesarī considers an individual table rather than a page to be its fundamental unit element or object. ... We have attempted to reproduce as far as possible in the edition the tables' original layout features such as vertical stacking of sexagesimal digits, placement of row headers, row breaks, and (for tables that extend over multiple pages in the manuscripts) page breaks."
  5. (p. 67) "What choices are scribes and/or their patrons making about the selection of tables that constitute a particular text? Are scribes sometimes responsible for adding new content to existing tables ...? We might speculate that the selection and inclusion of such specialized tables may have been part of a process of 'customizing' a table-text for individual users."
- **Map:** ch9/codicology (MS R2: 26.2×11.8 cm, 19th c., "Double margin lines and table grids in red ink"); colophon dating (f.8v); scribal "customization" ของ table-text = ขยายแนวคิด paratext ของ Plofker จาก S-442/S-177; palaeography ยังตรวจ scribe ไม่ได้ = ข้อจำกัดวิธีวิทยา

## S-521
- **Language:** EN (quotes Sanskrit Devanagari; label vernacular "bhāṣā")
- **ประเภท:** secondary (journal article — fulltext; Wellcome Collection วัตถุศึกษา)
- **Bibliography:** Wujastyk, Dominik. "A Body of Knowledge: The Wellcome Ayurvedic Anatomical Man and His Sanskrit Context." *Asian Medicine* 4(1): 201–248 (2008).
- **DOI:** 10.1163/157342109x423793
- **Local Path:** loop_B11/documents/wujastyk_2010_anatomical_man_asianmedicine.pdf (+.txt)
- **PDF health:** PASS (48 pp, avg 1,260.9 chars/page, 0 empty)
- **Unpaywall:** is_oa=true (Brill downloadpdf direct)
- **Quotes verbatim:**
  1. (p. 201, Abstract) "A widely-known painting currently in the Wellcome Library (Iconographic 574912i) depicts an anatomical view of the male human body according to the tenets of classical Indian medicine, or ayurveda. The painting is surrounded by text passages in the Sanskrit language on medical and anatomical topics. In this paper, the Sanskrit texts are identified, edited, translated and assessed. I establish a terminus a quo for the painting, and explore the relationship of text and image."
  2. (p. 204) "It is not only a painting, it is a diagram. It is labelled, inscribed, annotated and commented upon, exactly like a Sanskrit manuscript text. ... The Ayurvedic Man is willingly imprisoned in text, passively permitting the texts to speak for him."
  3. (p. 204) "this painting is a Nepalese production, directly influenced by Tibetan traditions of illustrating bloodletting points. The connection with Tibetan medical painting is clear to inspection."
  4. (p. 208, อ้างบันทึกของ Śāstrī) "At the library, we spent our time in examining the ancient palm-leaf manuscripts mainly, some of which were written in transitional Gupta, ancient Newari, ancient Bengali and other ancient characters." (บริบท: Nepal Durbar Library 1907 — แหล่งเดียวกับแคตตาล็อก Durbar S-240/S-273-274)
  5. (p. 209) "To conclude, the Ayurvedic Man is an image painted no earlier than about 1700, on which have been written extracts from the classic ayurvedic work called Bhāvaprakāśa by Bhāvamiśra (fl. ca. 1650–1690). ... In each short passage there are 20 or more errors."
- **Map:** ch3 (Wellcome Collection + Nepal Durbar chain-of-custody — เชื่อม Śāstrī 1907 กับ S-431/S-240 โดยตรง); วัตถุหลายสื่อ (painting+text = "manuscript-like object"); คุณภาพการคัดลอก (20+ errors/ย่อหน้า) = เคส "copyist without comprehension" สำหรับหัวข้อ scribal errors ที่ De Simini (S-522) กล่าวถึงในบริบท Śivadharma

---

## Loop B-12 — De Simini (ต่อ) + Zotter + NGMCP crew

## S-522
- **Language:** EN (quotes Sanskrit)
- **ประเภท:** secondary (book chapter — fulltext; NGMCP crew ชัดเจน: คำขอบคุณ Isaacson & Harimoto)
- **Bibliography:** De Simini, Florinda. "Śivadharma Manuscripts from Nepal and the Making of a Śaiva Corpus." ใน *One-Volume Libraries: Composite and Multiple-Text Manuscripts* (eds. Cacciatori/Freeman?), De Gruyter, 2016, pp. 233–286.
- **DOI:** 10.1515/9783110496956-009
- **Local Path:** loop_B12/documents/desimini_2016_shivadharma_mtm_onelvolume.pdf (+.txt) — copy จาก pdf-harvest/loop_B03_B04/desimini_shivadharma.pdf
- **PDF health:** PASS (54 pp, avg 3,021.2 chars/page, 0 empty) — CC BY-NC-ND 3.0
- **Unpaywall:** is_oa=true (PDF ในเครื่องเป็นฉบับ OA เต็ม)
- **Quotes verbatim:**
  1. (p. 233) "This collection, commonly known to specialists as the 'Śivadharma corpus', grew around two more ancient works, the Śivadharmaśāstra and the Śivadharmottara, until forming a fixed set of eight or nine texts that is widely attested in Nepalese multiple-text manuscripts (MTMs), both ancient palm-leaf and more recent paper copies. While the two earliest works have an independent and well documented transmission history in India, the formation of a 'corpus' as we know it seems to be an invention of Nepal."
  2. (p. 240) "The only possible exception in the Nepalese tradition among the earliest materials seems to be a fragmentary palm-leaf manuscript of forty-two folios attesting the Śivadharmottara (NAK 5-892, NGMPP A 12/3). This is a very significant piece of evidence, since it is the earliest extant manuscript of a text belonging to the Śivadharma collection, dateable on palaeographical grounds from the late 9th to early 10th century."
  3. (p. 242) "This is a palm leaf manuscript consisting of 247 folios and dated in the final colophon to NS 259 (1139–40 CE), a circumstance that makes it one of the earliest dated manuscripts of the Śivadharma collection." (ว่าด้วย ULC Add. 1645)
  4. (fn. 23, p. 242) "The most attested format for palm-leaf manuscripts, which was later adopted also for a variety of writing supports, among which paper, is the one that is usually designated with the Hindī word pothī (from Sanskrit pustaka/pustikā, 'book', via the Prakrit potthiā): this format does not require the use of quires, nor of a fixed binding, since loose leaves, which are thus the sole minimal units, are piled on each other and kept together just by the use of removable strings, as well as by upper and lower covers."
- **Map:** pothi/รูปเล่ม (pothī etymology + no-quires = ยืนยันโครงสร้างใบลานที่เทียบ S-74 Ciotti binding); MTM ฝั่งเนปาล = คู่ขนาน MTM เจนของ Balbir (S-193); NAK 5-892 (ปลาย ศ.9) = เก่าสุด corpus; NS dating ใช้ตรวจ NS 633 ของ Klebanov (S-460)

## S-523
- **Language:** EN (quotes Sanskrit colophon)
- **ประเภท:** secondary (book chapter — fulltext)
- **Bibliography:** De Simini, Florinda & Nina Mirnig. "Umā and Śiva's Playful Talks in Detail (Lalitavistara): On the Production of Śaiva Works and their Manuscripts in Medieval Nepal." ใน *Indic Manuscript Cultures through the Ages*, De Gruyter, 2017, pp. 587–654.
- **DOI:** 10.1515/9783110543100-019
- **Local Path:** loop_B12/documents/desimini_mirnig_2017_lalitavistara_nepal.pdf (+.txt) — copy จาก pdf-harvest/loop_B03_B04/desimini_uma_shiva_nepal.pdf
- **PDF health:** PASS (68 pp, avg 2,497.4 chars/page, 1 empty page [divider]) — CC BY-NC-ND 3.0
- **Unpaywall:** is_oa=true
- **Quotes verbatim:**
  1. (p. 587, Abstract) "Our focus is on the earliest extant manuscript containing a version of the entire corpus, namely manuscript G 4077 of the Asiatic Society of Calcutta, dated to 1036 CE. What is exceptional about this manuscript is that it contains a unique work called Lalitavistara as the final member of the corpus, while missing the Dharmaputrikā."
  2. (p. 590) "beginning in the second half of the 12th century, manuscripts of the Śivadharma corpus started to take on the homogeneous shape that they would preserve throughout the centuries; in comparison, the three manuscripts that we can place before that period all contain some peculiar features that are absent from subsequent manuscripts."
  3. (p. 600, colophon G 4077) "The manuscript had thus been 'copied in the year [NS] 156, on the twelfth [lunar day] of the bright [fortnight] of the [month] Śrāvaṇa, during the victorious reign of the supreme lord, paramount king, highest sovereign, the glorious Lakṣmīkāmadeva, by Ratnasiṃha, son of a respectable family, a resident of the glorious Taittirīya school. The book of the Śivadharma has been commissioned by the prince Gadādharasiṃha …'. The date is verified by Petech as July 6, 1036 CE."
  4. (p. 601) "The importance attributed to the manuscript as a salvific tool for the donor and all living beings is probably what justified the production of the two richly decorated wooden covers which, following a trend that is typical of the covers of the Śivadharma manuscripts, display several scenes of liṅga worship."
  5. (fn. 47, p. 641) "the text is not only preserved in the south but also exists in an as-yet single palm-leaf manuscript dated NS 169 (= 1049 CE), thus almost contemporary with manuscript G 4077 of the Śivadharma corpus." (Skandapurāṇa — อ้าง Grünendahl)
- **Map:** colophon/donor prosopography (Ratnasiṃha scribe + prince Gadādharasiṃha commissioner + royal title = ระบบ patronage เดียวกับ Formigatti S-113/S-195); ไม้ปิดหน้า (wooden covers สลัก liṅga worship) ใช้เทียบ S-116 decorated wooden covers ฝั่ง Jain; NS 156 = 1036 CE anchor สำหรับสาย NS dating ทั้งโปรเจกต์

## S-524
- **Language:** EN
- **ประเภท:** secondary (journal article — fulltext)
- **Bibliography:** De Simini, Florinda. "Navigating the Ocean of Dharma: The Composition of Sanskrit Scriptural Digests in the Dharmaśāstra and Śaiva Siddhānta Traditions." *Journal of Abbasid Studies* 7(2): 264–287 (2020).
- **DOI:** 10.1163/22142371-12340058
- **Local Path:** loop_B12/documents/desimini_2020_ocean_of_dharma_brill.pdf (+.txt; copy จาก pdf-harvest/loop_B03_B04/desimini_ocean_dharma_2020.pdf และยืนยันฉบับ Brill downloadpdf ตรง)
- **PDF health:** PASS (24 pp, avg 2,898.4 chars/page, 0 empty) — CC BY-NC-ND 4.0
- **Unpaywall:** is_oa=true
- **Quotes verbatim:**
  1. (p. 264, Abstract) "Scholars of Sanskrit literature in the second millennium CE had to deal with sizeable collections of sources claiming authority on different branches of knowledge and human experience. The need for ordering such sources went hand in hand with the establishment of 'canons' of authoritative texts."
  2. (p. 274) "the composition of such works required an institution that would collect, produce and preserve the primary sources, often very extensive in size, upon which they depend. In other words, monarchic patronage was an indispensable prerequisite of the work of the Nibandha-authors, as it provided the level of cultural 'institutionalization' that such an enterprise required."
  3. (p. 276) "in the final colophon, the copyist states that the manuscript was copied 'during the year 1209, in the dark half of the month Āṣāḍha, on a Saturday, in the glorious Varanasi, during the auspicious reign of the glorious king Govindacandra.' This date has been calculated by Kouda as corresponding to June 20, 1153." (Kṛtyakāmadhenu — สังเกต: "1209" คือ era ท้องถิ่น/การอ้างของผู้เขียน, ตรงกับ 1153 CE)
  4. (fn. 47, p. 277) "Sanderson established that Hṛdayaśiva must have been active between 863 and 1158, which is the date of the Nepalese palm-leaf manuscript transmitting the Prāyaścittasamuccaya."
- **Map:** dharmanibandha/digest = ปลายทางของ "gift of manuscript" codification ที่ De Simini 2016 (S-210/S-445) เปิด; patronage→institution (Varanasi/Gāhaḍavāla) = เทียบ Sarasvatī Library ของ Colas (S-115); Nepalese palm-leaf MS ปี 1158 = ตัว anchor ตรวจช่วงเวลา corpus transmission

## S-525
- **Language:** EN (quotes FR commentary ของต้นฉบับ + Tamil/Telugu)
- **ประเภท:** secondary (journal article — fulltext; งานวารสาร 1-2 ใหม่ของ "Zotter/NGMCP-adjacent crew" ไม่มีตรง → ใช้ Colas บน BnF Indien 745 ซึ่งเชื่อมสาย FR + การสะสมคัมภีร์อินเดียใต้ของคณะเยซูอิตที่ B-03 เปิดไว้)
- **Bibliography:** Colas, Gérard, Usha Colas-Chauhan & Francis Richard. "Text and Paintings: A Preliminary Study of Indien 745, a Manuscript of the Bibliothèque nationale de France." *Cracow Indological Studies* 24(2): 25–58 (2022).
- **DOI:** 10.12797/cis.24.2022.02.02
- **Local Path:** loop_B12/documents/colas_text_paintings_2022_cis.pdf (+.txt; provenance = journals.akademicka.pl ฉบับสำนักพิมพ์จริง)
- **PDF health:** PASS (34 pp, avg 1,797.6 chars/page, 0 empty)
- **Unpaywall:** is_oa=true (journals.akademicka.pl)
- **Quotes verbatim:**
  1. (p. 25, Abstract) "The manuscript now preserved as Indien 745 in the Manuscript Department of the Bibliothèque nationale de France (BnF) contains 137 paintings by an Indian artist, each accompanied by an explanation in French. These paintings depict deities and sages in static posture or narrative mode, as well as icons associated with temples."
  2. (p. 26) "The binding of Indien 745 is à la française. Covered with a worn leather that appears to be sheepskin (basane), it may have been made in India. ... The paper is French with undated watermark. ... The total number of folios is 283."
  3. (p. 27) "That the manuscript was prepared in South India is evident for several reasons: it contains paintings of deities honoured particularly in Tamil and Telugu countries; most of the temples depicted are located in South India, with rare exceptions (for example, Badarikāśrama, painting 112)."
  4. (p. 28) "The date of preparation of this work is unknown. Indien 745 is ascribed to 18th century by Blochet and Cabaton ... According to Becherini, following Jakimowicz-Shah, Indien 745 seems to have been acquired by a Frenchman in Andhra Pradesh in the early 18th century. None of these scholars present a precise argument for the period and the origin they propose."
- **Map:** ch3/chain-of-custody (French acquisition in Andhra → BnF 1739 catalogue → Dupuis 1794-95) — เพิ่มความละเอียดให้เส้นทาง Carnatic Mission ของ Colas (S-2018-colas-jesuit-50); text-image relation บนกระดาษฝรั่งเศส = คู่ขนานทวีปกับ in-text labels บนใบลาน/painting ของ S-521

## S-526
- **Language:** EN (มี abstract FR แทรก)
- **ประเภท:** secondary (book chapter — fulltext)
- **Bibliography:** Colas, Gérard. "'Variant', variation and pāṭha in Sanskrit." ใน *Variants and Variance in Classical Textual Cultures* (ed. K. H. ?, De Gruyter), 2024, pp. 37–84.
- **DOI:** 10.1515/9783111054360-002
- **Local Path:** loop_B12/documents/colas_2024_variants_patha.pdf (+.txt)
- **PDF health:** PASS (48 pp, avg 2,986.2 chars/page, 0 empty) — De Gruyter OA license
- **Unpaywall:** ยังไม่ตรวจ (PDF ในเครื่องเป็น fulltext เต็มจาก De Gruyter อยู่แล้ว)
- **Quotes verbatim:**
  1. (p. 37, Abstract) "The role of writing and manuscripts was secondary in the transmission of Sanskrit texts, with some exceptions. The examination of three important semantic nuances of the term pāṭha relates this term to the utterance of texts. The fixation of the Ṛksaṃhitā hymnic corpus through eleven modes of recitation, probably between 1200 and 800 BCE, was done orally."
  2. (p. 40) "The relative importance of orality raises an apparent paradox: today, an immense quantity of manuscripts in Sanskrit (and other Indian languages) still exists, most of which are posterior to the 16th century."
  3. (p. 41) "Sanskrit texts which were not 'practiced' or referred to in ancient India disappeared with their manuscripts (if any). Sometimes large libraries were short-lived, primarily when manuscripts made of palm leaf formed their chief holding."
  4. (p. 41) "Apart from practices regarding manuscripts (like maintenance, libraries, gifting or writing for text study, copying to gain merits or for the welfare of the world, worship of manuscripts), the central question again is that of the function of manuscripts vis-à-vis text."
- **Map:** วิธีวิทยา variant/pāṭha = พื้นฐานสำหรับ "textual variation vs manuscript variation" ของ colophons (ต่อยอด S-115 Colas Sarasvatī); survival bias ของคลังใบลาน (quote 3) ยืนยันข้อสังเกตของ Houben & Rath (S-440); รายการ manuscript practices (maintenance/libraries/gifting/merit/worship) = สรุปกรอบ vidyādāna ของ De Simini (S-210) ในบทเดียว

## หมายเหตุ Zotter (ตามภารกิจ B-12)
ค้น Crossref ผ่าน `query.author=Christof Zotter` ครบแล้ว: งาน manuscript-oriented ของ Zotter นอกจาก ACL 2026 (S-2026-sarawgi-15 มีอยู่แล้ว) มีเฉพาะบทในเล่ม *Nine Nights of Power* / *The Ambivalence of Denial* (ritual studies — นอก scope คัมภีร์/ต้นฉบับ ไม่มี OA ทุกชิ้น: Unpaywall 10.1515/9781438484082-011 = is_oa=false) จึงไม่บังคับลง card — บันทึก GAP ไว้แทน (งาน Zotter ฝั่ง pothi/NGMCP catalogue ยังไม่มี DOI ใน Crossref)

---

## Map รวม → ตารางหัวข้อโปรเจกต์
| หัวข้อ | การ์ด |
|---|---|
| colophon/patronage/dating | S-522 (NS 259), S-523 (NS 156 = 1036), S-524 (1153 CE), S-520 (f.8v colophon) |
| pothi/รูปเล่ม/วัสดุ | S-522 (pothī, no quires), S-520 (Nāgarī/hand-made paper/koṣṭhaka), S-525 (French paper binding) |
| คลัง/chain-of-custody/การสะสม | S-521 (Wellcome + Durbar 1907), S-525 (BnF Andhra→Paris), S-524 (Varanasi royal support) |
| scribal practice/variant/errors | S-521 (20+ errors), S-520 (scribes customizing), S-526 (pāṭha/orality) |
| MTM/สายเล่ม | S-522/S-523 (Śivadharma corpus) |

## ข้อค้นพบหลัก (3–5)
1. **สาย "NGMCP crew" ต่อกันด้วย Śivadharma corpus:** De Simini → Mirnig → Isaacson/Harimoto (ที่มา: คำขอบคุณใน S-522 + S-523) — จากนี้ citation-chain ของโปรเจกต์จะไล่ corpus เนปาลได้ในชุดเดียว (S-522/S-523 มี fulltext อยู่ในเครื่องแล้วจาก loop เก่าที่ไม่เคยลง index)
2. **NS dating anchors ครบสายแล้ว:** NS 156 (1036, S-523) → NS 169 (1049, S-523 fn.47) → NS 259 (1139-40, S-522) → NS 633 (878 CE คู่ขนานสาย Suśruta, S-460) — ใช้สร้างตารางเทียบ Nepal Samvat ↔ CE แบบมีหลักฐานจาก 4 แหล่ง
3. **Crossref ค้น "author + คำสำคัญ" เท่านั้นจึงเวิร์ก:** คำ Simini/Wujastyk ลอยตัวให้ noise เป็นพัน (The Lancet/BMJ/ฟิสิกส์); Unpaywall ยืนยัน 5/5 DOI ที่เป้าหมายเป็น OA และดึง PDF จริงได้ 3 ไฟล์ใหม่ (S-520, S-521, S-525) — HSSA และ Brill Asian Medicine/JAS ให้ PDF ตรงไม่มี paywall
4. **Colas 2 บท 2022+2024 = ฝั่ง "หน้าที่ของต้นฉบับ" ที่โปรเจกต์ขาด:** pāṭha/orality (S-526) + text-image BnF (S-525) ปิดช่องว่างระหว่าง philology (variant) กับ codicology (วัตถุ) — และเป็นงาน FR-line แฝง (คณะเยซูอิต/คลังฝรั่งเศส) ที่ต่อจาก S-2018-colas-jesuit-50
5. **Zotter นอก ACL 2026 ยังไม่มีงาน manuscript-DOI ที่เข้า scope** — หยุดตามที่ระบบ Crossref มี; แนะนำลูปถัดไปเช็ค NGMCP catalogue และ Heidelberg person page แทน (นอกเหนือ Crossref)
