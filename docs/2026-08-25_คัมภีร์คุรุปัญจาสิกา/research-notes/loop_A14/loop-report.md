# Loop A14 Report: วรรณกรรมเกี่ยวเนื่องและคู่ขนานตัวบท (Related Literature & Textual Parallels)

วันที่ดำเนินงาน: 25 สิงหาคม 2026 | ขอบเขต: RESEARCH ONLY
หมายเหตุ: ไม่ใช้วิกิพีเดีย; ข้อความอ้างทั้งหมดถอดตรงจากไฟล์ที่บันทึกใน loop_A14/documents/ หรือลูปก่อนหน้า (ระบุที่มาท้ายแต่ละข้อ); กรณีค้นไม่พบใช้ "ยังไม่พบ"

---

## 1. คำค้นและช่องทางที่ใช้

- websearch (exa): เรียกซ้ำ 6 ครั้งช่วงต่าง ๆ — **ล้มเหลวทั้งหมดด้วย HTTP 429** (quota หมดตลอดเซสชัน)
- Bing HTML/RSS, DuckDuckGo html/lite, Mojeek, Google Books API: ถูกบล็อก/คืนผลแคชไม่ตรง → เปลี่ยนไปใช้ **direct fetch** กับแหล่งเป้าหมาย
- ช่องทางที่ใช้ได้จริง: archive.org advancedsearch/metadata API, BDRC linked-data (purl.bdrc.io/*.json), openphilology.eu (PDF ของ Szántó), api.84000.co asset CDN, lotsawahouse.org, lamayeshe.com, kagyuoffice.org, treasuryoflives (403), GRETIL/DSBC local copies จาก loop_A01-A05
- เครื่องมือภายใน: PyMuPDF สกัดข้อความ PDF; ถอดรหัสฟอนต์ฝังตัวของ OCR บทความ Szántó 2013 (substitution cipher) เพื่อกู้คำประกาศฉบับวิจารณ์

---

## 2. Genre context: prakaraṇa ว่าด้วย guru ในคลังสันสกฤตพุทธ (โจทย์ 1)

### 2.1 ผลสำรวจเต็มฉบับของ Szántó ครั้งแรกในโปรเจกต์นี้
พบและดาวน์โหลด **PDF เต็ม** ของรายการ "Tantric Prakaraṇas" (BEB vol. I, 2015, น. 755-761) จาก openphilology.eu — ลูปก่อนหน้า (A03) เข้าถึงได้เพียง snippet:

> "Prakaraṇas are usually short or mid-length treatises on a particular aspect of doctrine and/or practice … they are descriptive or argumentative, essay-style exegetical writings." (papers_2015h_prakaranas.txt)

> "The Gurupañcāśikā … is a short but very influential work already cited in the 10th century, **in actual fact for the most part an anthology of scriptural verses**, describing the qualities of a tantric master and how disciples should interact with him." (น. 758)

→ ข้อสรุปเชิงวิธีวิทยาสำคัญ: GP เองเป็น **"บทรวบรวมคาถาจากคัมภีร์" (anthology of scriptural verses)** ดังนั้น "parallel passages" ของ GP คือคาถาที่ยกมาจากตันตระต่าง ๆ — การชี้เฉพาะว่ามาจากตันตระใดรอฉบับวิจารณ์ (ดู §7)

### 2.2 รายการ prakaraṇa ที่เกี่ยวกับ guru ที่สำรวจครบในรายการ
| คัมภีร์ | ผู้แต่ง | จุดเกี่ยว guru | Toh/D |
|---|---|---|---|
| Guhyasiddhi | Padmavajra (~ศตวรรษ 8) | เริ่มด้วย "the service of a guru"; ch.8 v.12 คุ้นเคยลัทธิศิวะคู่แข่ง | D 2217/P 5016 |
| Jñānasiddhi | Indrabhūti (~9) | คู่มือปฏิบัติแบบ antinomian หลังรับ guru | D 2219/P 3063 |
| Prajñopāyaviniścayasiddhi | Anaṅgavajra | "importance and indispensability of a master and the initiations and instructions provided by him" | D 2218/P 3062 |
| *Nayatrayapradīpa | *Tripiṭakamalla | อภิปรายความเหนือกว่าของ Vajrayāna | D 3707/P 4530 |
| **Gurupañcāśikā** | Aśvaghoṣa/Vāpilladatta | ธรรม-neeyom guru-śiṣya โดยตรง | D 3721/P 4544 |
| Sekanirdeśa(+pañjikā) | Advayavajra/Rāmapāla | คำสอนเรื่อง abhiṣeka | D 2253/P 4098 |
| Abhiṣekanirukti | Jinasujayaśrīgupta | ทัศนะ 3+3 เรื่อง prajñājñānābhiṣeka | D 2476-77 |
| Advayasiddhisādhanopāyikā | Śrīlakṣmī | "focus on worshipping the guru" | D 2220/P 3064 |
| Subhāṣitasaṃgraha / Yuktipradīpa | นิรนาม | รวบรวมคาถา; โต้ subitists ที่อ้าง guru-teaching | — |

(ทั้งหมดจาก papers_2015h_prakaranas.txt; รายการเต็ม 19 หัวข้ออยู่ใน documents/related-literature-excerpts.md §1)

### 2.3 ชื่อที่ใบสั่งงานถาม — ตรวจแล้ว
- **Guru-tattva-vimśikā**: **ยังไม่พบ** ใน GRETIL (index ตรวจแล้ว มีเพียง GP + Hevajrasādhana ของ Ratnākaraśānti), DSBC, archive.org full-text search (0 results), และไม่ปรากฏในรายการสำรวจของ Szántó — สรุป: ไม่พบหลักฐานว่ามีคัมภีร์สันสกฤตพุทธชื่อนี้
- **Guruguhyasādhana**: **ยังไม่พบ** เป็นชื่อคัมภีร์เฉพาะ (archive.org 0 results; ไม่อยู่ใน Sādhanamālā items ที่ GRETIL/Szántó เอ่ยถึง); ใกล้เคียงสุดคือ sādhana ตระกูล Hevajra/Guhyasamāja ซึ่งไม่ใช่ตัวบท guru-devotion

---

## 3. Parallel passages ในตันตระ (โจทย์ 2)

### 3.1 ยืนยันได้จากตัวบทที่เข้าถึงได้
**(ก) Hevajratantra (84000, Toh 417/418, แปล 2025 — ดาวน์โหลด PDF เต็ม 193 หน้า):**
- [2.5.65]: "A good disciple should know that prior to that Is the prescribed praise and worship." (ก่อน abhiṣeka ต้อง praise & worship ครู)
- [2.3.18-20] คาถาสรรเสริญศิษย์ต่อครูขณะรับอภิเษก: "'I have sunk in the thick mud of saṃsāra. Protect me, who has no refuge!'" — ขนานกับบท prostration/refuge เปิดเรื่องของ GP
- Gray (ENBO COM-0060, snippet จาก loop_A03): "Many tantras prescribe a devotional attitude, and this is discussed at length in a late Indian Buddhist work, the Gurupañcāśikā"

**(ข) Saṃvarodaya-tantra และ Kṛṣṇayamāri-tantra**: ไม่มี e-text ที่เข้าถึงได้ (GRETIL ไม่มี; archive.org ไม่มีฉบับ searchable) — **ยังไม่พบ** คาถาคู่ขนานเฉพาะจากสองตันตระนี้ในลูปนี้ (ช่องว่าง — ต้องใช้ฉบับพิมพ์ Sāṅkṛityāyana/Shinor)

### 3.2 ข้อค้นพบเชิงลบสำคัญ: "14 root downfalls มาจาก Hevajra II.iv.49-51" ตรวจสอบไม่พบ
ตรวจ OCR เต็มของ Snellgrove, The Hevajra Tantra: A Critical Study Part I & II (1959; ฉบับ reprint Agamnigam CC-0 บน archive.org):
- II.iv.49-51 ในฉบับจริง = บท "bolasaukhyam mahāmudrā…" (concealed content) — ตรงกับ 84000 [2.4.49]
- ค้น fourteen / apatti (พบเฉพาะ samāpatti) / mūlāpatti / nindā / skur pa / ltung ทั่วทั้ง 2 เล่ม: **ไม่พบ stanza 14 root downfalls**
→ การอ้างว่า 14 rtsa ltung มาจาก Hevajratantra chapter-verse ใดเฉพาะ **ยังไม่พบหลักฐานปฐมภูมิที่เข้าถึงได้**; สิ่งที่ยืนยันได้แทนคือสาย Toh 2478 (§5)

---

## 4. การจับคู่ bla ma lnga bcu + rtsa ltung bcu bzhi (โจทย์ 3) — ตอบได้ครบ

### 4.1 bdrc-W3CN6661 (Lhasa 2012) — metadata ยืนยัน
- ชื่อ: *Bla ma lnga bcu dang rtsa ltung bcu bzhi'i rnam bshad* (บลามา ลงจู ดัง ร์ซา ลฺตุง จูบฺฌี นัม-เช)
- สำนักพิมพ์: Bod ljongs mi dmangs dpe skrun khang (Lhasa), **2012**, xii+366 หน้า
- ผู้แต่ง (associated-names): **Grags pa rgyal mtshan, Sa skya gong ma, 1147-1216** = Jetsun Drakpa Gyaltsen องค์ที่ 3 แห่งสกยา — บุคคลเดียวกับ "Jetsun Drakpa Gyaltsen" ที่ Karmapa 2025 (Day Three) ยกเป็นหนึ่งในผู้อธิบาย Fifty Verses (loop_A10)
- subjects: "bla ma lnga bcu pa/", "'grel pa", "Gurupañcāśikā"
- description: "Study on the discipline to be observed by the follower of the Vajrayana, **with Chinese translation by Sonam Chozom**" (มีคำแปลจีนร่วมเล่ม)
- BDRC WA22925 (work entity ของ GP) note: "toh 3721 in the translation of padmakaravarma and rin chen bzang po."

### 4.2 เจอเล่มที่สอง — bdrc-W3CN26522 (Lhasa 2017) — ยืนยันว่าเป็น "pattern" ไม่ใช่เหตุบังเอิญ
- ชื่อเต็ม: *Bla ma bsten tshul tshigs su bcad pa lnga bcu pa'i rnam bshad dang **rdo rje theg pa'i rtsa ltung bcu bzhi pa'i 'grel pa** dam pa'i chos dgongs pa gcig pa'i rtsa gzhung gi mchan 'grel bcas*
- Lhasa: Bod ljongs bod yig dpe rnying dpe skrun khang, 2017; 23+328 หน้า; สาย **Kagyu/Drikung** ('bangs Bka' brgyud; description อ้าง "commentary on Drikong Gongjik" = dgongs gcig)

### 4.3 ทำไมจึงจับคู่ — ห่วงโซ่หลักฐาน 4 ชั้น (ใหม่ทั้งหมดสำหรับโปรเจกต์)
1. **ผู้แต่งเดียวกัน**: Aśvaghoṣa (ชื่อ variants: Durdharṣakāla, Bhavideva/bha bi lha — Lotsawa House series page) แต่งทั้ง GP (Toh 3721) **และ** *Vajrayānamūlāpattisaṅgraha* (Toh 2478) = บทสรุป 14 root downfalls
   - Toh 2478 เปิด: "At the lotus-feet of all the buddhas / And the gurus I bow down. Here I shall explain the fourteen root downfalls / As they are taught in the tantras."
   - downfall ที่ 1: "The Vajradhara said that accomplishments / Come from following the teacher, / So to disparage him or her / Is explained as the first root downfall."
   - ปิดท้าย: "Make offerings to the guru in the Sage's presence."
   - Lotsawa House: "became an important source for later commentaries on the samaya commitments"
2. **การรวมเล่มในต้นฉบับอินเดีย**: ต้นฉบับที่ Lévi ศึกษา "also transmits two further small works, lists of the so-called fundamental (mūlāpatti) and gross trespasses (sthūlāpatti)" (Szántó 2015, 758; Davidson 2002, 322-327 ให้ภาพรวม)
3. **GP เชื่อม guru↔samaya ในตัวบท**: v.6 "samānasamayabhraṃśo doṣo hi guruśiṣyayoḥ" (การพร่าง samaya อันเสมอกันเป็นโทษทั้งครูและศิษย์); vv.12-14 นรก avīcyādyāḥ สำหรับผู้นินทาครู (GRETIL text)
4. **หลักสูตรทิเบต**: อรรถกถาสกยารวม (Drakpa Gyaltsen) และเล่ม Kagyu/Drikung 2017 ต่างจัด rnam bshad สองเรื่องไว้ด้วยกัน; เล่ม Gelug (bdrc-W8LS76588, 2004) จับ GP + Tsongkhapa's gsang sngags kyi tshul khrims (พรหมจรรย์คันตระ) ไว้ด้วยกันเช่นกัน

→ สรุป: การจับคู่ในหนังสือลาซาสมัยใหม่สะท้อน (ก)-(ค) ที่สืบมาจากอินเดีย + (ง) ธรรมเนียมหลักสูตรทิเบต ไม่ใช่การจัดเล่มแบบบังเอิญ

---

## 5. Guru-yoga literature ในทิเบต (โจทย์ 4)

- **กรอบเปรียบเทียบหลัก** (Gray ENBO COM-0060): "The practice of guru yoga appears to be a Tibetan innovation. South Asian tantric Buddhist traditions generally encouraged devotion to one's guru." → GP = ตัวแทน "Indian guru-devotion" ขณะที่ bla ma mchod pa/guru yoga = พัฒนาการทิเบตยุคหลัง
- **Bla ma mchod pa / Guru Puja**: ผู้แต่ง = First Panchen Lama Lo(sang) Chökyi Gyaltsen (1570–1662) — LYWA Sun of Devotion fn.39: "Composed by the First Panchen Lama, Lobsang Chökyi Gyaltsen (1570-1662)." (+ เนื้อความเรียกท่าน "fourth Panchen Lama" ตามการนับสาย tulku — เก็บ nuance ไว้) พร้อมคาถาสอนเลือกครูที่ Rinpoche อ้าง: "Examine well the lama who reveals the holy Dharma, then follow him with respect."
- **สาย Gelug/lamrim**: Dhargyey commentary (loop_A02) ยืนยันคำอธิบายยึด Tsongkhapa + Pabongka; Tsongkhapa's rnam bshad = "The Fulfillment of All Hopes: Guru Devotion in Tibetan Buddhism" (Sparham 1999; ฉบับ 2016 เปลี่ยนชื่ore "Fifty Verses of Guru Devotion") — คำอธิบายที่ lamrim ใช้เป็นฐาน
- **สาย Sakya/Lamdre**: มีร่องรอยว่า Lamdre ให้ความสำคัญ guru เป็นแกน (Hevajra-based) แต่ **ยังไม่พบ** แหล่งรองที่อธิบายความสัมพันธ์เชิงประวัติศาสตร์กับ GP โดยตรง (treasuryoflives 403; studybuddhism search JS-driven) — ช่องว่าง
- **สาย Kagyu**: Karmapa 2025 Day Three อ้าง Gampopa: "When following a qualified guru, this is the ultimate samaya of the path of the Secret Mantra." (kagyuoffice.org summary)

---

## 6. เปรียบเทียบฮินดู/ศิวะ (โจทย์ 5)

- จุดยึดที่อ้างได้จากตัวหนังสือที่ถือครอง: Szántó ว่าด้วย Guhyasiddhi ch.8 v.12: "betrays intimate familiarity with rival Śaiva cults (Tanemura, 2008, 55–58; **Sanderson, 2009, 144–145**)" — แสดงว่ารอยเชื่อม guru-cult พุทธ-ศิวะถูกวิจัยผ่าน Sanderson, "The Śaiva Age" (Genesis and Development of Tantrism, Tokyo 2009, 41-349)
- Muktabodha Digital Library (Śaiva e-texts >500 titles) ตรวจแล้วเป็น app-based ไม่สามารถดึง Tantrāloka gurupāda ฯลฯ มา quote ได้ในลูปนี้ — **ยังไม่พบ** งานเปรียบเทียมเฉพาะเรื่อง "Buddhist vs Śaiva guru-worship" ที่เข้าถึงได้; เสนอเป็น Phase B target (Sanderson 2009 pp.144-145; Hatley/Dezső ถ้าหาได้)

---

## 7. Szántó & Sferra "critical edition" status (โจทย์ 6) — ตอบชัดเจนครั้งแรก

1. **คำประกาศปี 2013 (พบจริง)**: ถอดรหัสฟอนต์จาก PDF Puṣpiká I ได้ข้อความ (reconstructed wording): "When I announced my discovery to Prof. Francesco Sferra, he most kindly expressed his interest and I am pleased to announce that **we are preparing a new critical edition of the work including the readings of this witness** … Here I shall limit myself to giving a diplomatic transcript of the text." (Szántó 2013, ~p.448; file 2013-szanto-gp-decoded-attempt.txt)
2. **"Minor Vajrayāna Texts" = ชุดบทความของ Szántó คนเดียว ไม่ใช่ชุดฉบับวิจารณ์ร่วม**: MVT I (2016, Śrīsamvarābhisamayopāyikā), II (2013, **Gurupañcāśikā**), III (2015, *Guhyasamājoddhṛtayāgavidhi), IV (2017, Rigyarallitantra), V (2019, Gaṇacakravidhi attributed to Ratnākaraśānti), VI (**2022**, Anāvilatantra fragment — "Evolution of Scriptures, Formation of Canons", ed. Almogi, ITS, 187-216)
3. **สถานะปัจจุบัน**: ฉบับวิจารณ์ GP ยังไม่ตีพิมพ์ (openphilology list ล่าสุดไม่มีรายการ; MVT VI ปี 2022 ยังเป็น fragment study) → ยืนยันข้อสรุป loop_A10 §7(4) และเพิ่มหลักฐาน MVT VI

---

## 8. ช่องว่างที่ยังไม่ได้ข้อสรุป (ยังไม่พบ)

1. Guru-tattva-vimśikā / Guruguhyasādhana เป็นคัมภีร์จริง: ไม่พบทั้ง 3 คลัง (GRETIL/DSBC/archive.org) และไม่อยู่ใน survey ของ Szántó
2. คาถา 14 rtsa ltung ในตันตระเฉพาะเจาะจง (Hevajra II.iv.49-51?): **หักล้างบางส่วน** — ไม่มีใน Snellgrove 2 เล่มและไม่มีใน 84000 Toh 417/418; ที่มาจริงที่พิสูจน์ได้ = Toh 2478 (สรุปจาก "tantras" พหูพจน์); ต้องเช็ก Saṃvarodaya/Kṛṣṇayamāri ฉบับพิมพ์
3. Saṃvarodaya & Kṛṣṇayamāri: ไม่มี e-text accessible — parallel verses ยังไม่พบ
4. Lamdre guru practice ↔ GP: ไม่มีแหล่งรอง accessible
5. Śaiva side quotes (Tantrāloka ch.13 gurupāda, Śivadharmottara): Muktabodha app-based เข้าไม่ถึง; Sanderson 2009 pp.144-145 ตัวเนื้อหายังไม่ได้อ่าน
6. คำประกาศฉบับวิจารณ์ 2013: ถอดจาก cipher-OCR — ตัวสะกด 2-3 อักษร approximate; ควรตรวจกับภาพ szanto-p*.png หรือ PDF จริงก่อนลงรายงานหลัก
7. W3CN6661 เนื้อใน (lending-only) — ไม่ได้เปิดอ่าน colophon ของเล่มลาซาเอง

---

## 9. เอกสารที่บันทึกไว้ (documents/)

| ไฟล์ | สาระ |
|---|---|
| papers_2015h_prakaranas.pdf/.txt | Szántó, Tantric Prakaraṇas เต็มฉบับ (BEB I, 755-761) |
| papers_2016a_minor.pdf/.txt | ETS Preliminary Studies 1 front matter (MVT I figures, ETS/IFP-EFEO context) |
| papers_2022c_mvt6-anavilatantra.pdf/.txt | MVT VI เต็มฉบับ (2022) |
| 2013-szanto-gp-decoded-attempt.txt | บทความ 2013 ถอดรหัสฟอนต์ (คำประกาศฉบับวิจารณ์, codicology) |
| ia-metadata-bdrc-W3CN6661.json / -W3CN26522.json / -W8LS76588.json | metadata archive.org 3 รายการ |
| bdrc-WA3CN6661.json / -WA22925.json / -P1614.json | linked-data BDRC (work/creator/ATII note) |
| lotsawahouse-asvaghosa-root-downfalls.html | Toh 2478 เต็มฉบับแปล + bibliography |
| lotsawahouse-asvaghosa-series.html | Aśvaghoṣa series (name variants) |
| 84000-toh417.pdf/.txt | Hevajra Tantra (Toh 417/418) แปลเต็ม 2025 |
| lywa-sun-of-devotion.pdf/.txt | Lama Chöpa authorship + guru quotes |
| karmapa2025-day-three.txt | Karmapa 2025 Day Three summary (samaya/guru) |
| related-literature-excerpts.md | สมุดรวม quote verbatim ทั้งหมดของลูปนี้ |

## 10. Live URLs สำคัญ

- https://openphilology.eu/publications-peter-daniel-szanto/papers_2015h_prakaranas.pdf
- https://openphilology.eu/publications-peter-daniel-szanto/papers_2022c_mvt6-anavilatantra.pdf
- https://archive.org/details/bdrc-W3CN6661 ; https://archive.org/metadata/bdrc-W3CN26522
- http://purl.bdrc.io/resource/WA22925.json ; .../WA3CN6661.json ; .../P1614.json
- https://www.lotsawahouse.org/indian-masters/ashvaghosha/root-downfalls
- https://api.84000.co/storage/v1/object/public/assets/pdf/toh417.pdf (read room: https://read.84000.co/translation/toh417.html ; toh3721 placeholder TEI: https://raw.githubusercontent.com/84000/data-tei/master/translations/tengyur/placeholders/079-002_toh3721-gurupancasika.xml)
- https://www.lamayeshe.com/sites/default/files/LYWA_SOD.pdf
- https://kagyuoffice.org/fifty-verses-on-the-guru-day-three/
