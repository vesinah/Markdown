# Findings — Books & Misc Harvest (S-450 … S-457)

วันที่: 2026-09-01 | ภารกิจ: สกัด quote จากไฟล์ PDF 8 ชิ้น (palmleaf_india_nepal) | Sub-agent: The Worker

**ไฟล์ต้นทาง + extract (ทั้งหมดใน `pdf-harvest\extracts\`):**
1. `PDF\The Mardzong Manuscripts Preservation, Interpretation and Dating of an Archaeological Find in Mustang, Nepal (2020)….pdf` (332 หน้า) → `mardzong.txt`
2. `PDF\357513034-Franco-The-Spitzer-Manuscript-II-pdf.pdf` (161 หน้า) → `spitzer.txt`
3. `PDF\project_muse_856949.pdf` (27 หน้า) → `milinda_colophons.txt`
4. `PDF\radiocarbon-dating-of-manuscripts-kept-in-the-central-library-of-the-university-of-tehran.pdf` (15 หน้า) → `tehran_radiocarbon.txt`
5. `PDF\Manuscript Cultures Mapping the Field (2014)….pdf` (384 หน้า) → `manuscript_cultures.txt`
6. `PDF\Save palm leaf manuscript heritage (2001)….pdf` (20 หน้า) → `save_palmleaf.txt`
7. `PDF\Southeast Asian palm leaf manuscript images a review of handwritten text line segmentation….pdf` (16 หน้า) → `sea_htr.txt`
8. `PDF\10.1515_9783110741124.pdf` = *Education Materialised* (508 หน้า) → `education_materialised.txt`

**ระเบียบการ quote (แจ้งล่วงหน้าเพื่อความโปร่งใส):**
- เลขหน้าที่อ้าง = เลขจาก marker `--- Page N of M ---` ของไฟล์ extract; เลขหน้าพิมพ์ของเล่ม (อ่านจาก header/footer ของหน้านั้น) ใส่กำกับหลังเครื่องหมาย /
- ข้อความ verbatim จาก text layer ยกเว้น: (a) de-hyphenation เชื่อมคำที่ถูกตัดข้ามบรรทัด; (b) ตัดเลขเชิงอรรถตัวยกที่ text layer แทรกกลางประโยค; (c) คืนอักขระที่ text layer เรนเดอร์ผิด เช่น "alqaras" → "akṣaras" — ไม่แต่ง/ไม่เติมคำ
- S-455 (Save Palm Leaf) เป็น booklet ภาพประกอบ ที่ text layer แตกเป็นท่อนสั้น ๆ ตาม layout → ถอดเรียบเรียงจากท่อนต่อเนื่อง verbatim (ลบช่องว่าง/การขึ้นบรรทัดที่ layout ทำให้แตก ไม่เติม/แก้คำ); booklet ไม่มีเลขหน้าพิมพ์ครบ (เห็นเฉพาะ "3" และ "16") → อ้างด้วยเลข marker หน้า

**ข้ามตามคำสั่ง:** `PDF\Miniaturen_mittelalterlicher_Kalpasutra.pdf` = image-PDF → **บันทึกไว้ว่าต้องอ่านภาพภายหลัง** (Kalpasūtra ภาพประกอบ; เสนอทำ card ภาพในรอบถัดไป เช่น render 150 dpi + ถอดคำจากภาพแบบที่ทำกับ S-430)

---

## S-450
- **Language:** EN
- **ประเภท:** secondary (edited monograph, 2nd edition)
- **Bibliography:** Helman-Ważny, Agnieszka, and Charles Ramble. *The Mardzong Manuscripts: Preservation, Interpretation and Dating of an Archaeological Find in Mustang, Nepal*. Leiden: Brill, 2020 (2nd amended/updated/expanded edition; 1st ed. Eikon Publishing, Poland, 2018). — หมายเหตุ: บท "Preservation of the Mardzong Manuscripts Collection" โดย **Sarah Skumanov**; ไม่พบ "Böhmer" ในเล่ม (ผู้เกี่ยวข้องที่ปรากฏ: Helman-Ważny, Ramble, Skumanov, Tomasz Goslar ผู้ทำ C-14)
- **DOI/ISBN:** 978-90-04-44372-3 (จาก watermark ของ Brill ใน text layer)
- **Local Path:** ข้อ 1 ด้านบน | extract: `mardzong.txt`
- **PDF health:** PASS (332 pp, text ปกติทั้งเล่ม)
- **Quotes verbatim:**
  1. (p.9 / Preface ix) "This book is about the Mardzong manuscripts, a collection found in the Caves of Upper Mustang near Lo Monthang in Nepal. These manuscripts are an extraordinary archaeological find, like the more archaic caches of Silk Road manuscripts from Central Asia, but they are still unknown. They are an information-dense repository of artefacts, history, and ideas spanning half a millennium. The collection was discovered in 2008 by a group of climbers led by writer and Himalaya expert Broughton Coburn and mountaineer Peter Athans in a cave complex called Mardzong, southeast of Lo Monthang, in Nepal's Mustang District"
  2. (p.9 เชิงอรรถ 1 / ix) "The expedition is documented in the National Geographic film 'Secrets of Shangri-La' and information about the discovery is published in the Britannica Book of the Year 2010."
  3. (p.10 / x) "Our collection of manuscripts was found in one of the most beautiful so-called 'cathedral' caves next to one decorated with paintings, where loose folios were scattered all around the open space of the cave."
  4. (p.12 / xii) "The custom of abandoning old and damaged texts in stupas, shrines and possibly caves is known all across Tibet. […] It is therefore possible that the kings or nobility of Mustang abandoned the Bon and Buddhist sacred texts in the Mardzong caves out of respect, as an alternative to destroying them. This is one of our main hypotheses for the reason why this collection was deposited in the cave"
  5. (p.14 / xiv) "It is indeed a lesson in impermanence to think about the cache of loose paper folios stored for centuries in the crumbling cave, slowly but inevitably disintegrating in spite of Mustang's dry climate."
  6. (p.14–15 / xiv–xv) "Very little was done in terms of scholarly identification of these books after their discovery. Unfortunately, no professional preservation measures were undertaken to protect them. […] At that time, he estimated the collection at 25 000 manuscript folios originating from around 100 texts. Angela M. H. Schuster in the Britannica Book of the Year 2010, while reporting the archaeological discovery of the manuscript cache, more cautiously estimated their number at 'more than 8 000 folios belonging to some 30 religious tracts.' In reality, the result of our project count shows that there are 5 095 folios preserved in Choede monastery."
  7. (p.15 / xv) "As we see in the National Geographic film 'Secrets of Shangri-La,' the texts were gathered into bundles by the climbers and lowered to the ground by rope. At the foot of the Mardzong hill a couple of monks gave them a preliminary dusting by the simple expedient of beating stacks of folios against rocks"
  8. (p.43 / 9) "the monsoon rains barely reach the area, on the outskirts of the Tibetan plateau. This extremely arid region has to rely almost exclusively upon glacier streams for its water supply."
  9. (p.23 / 23, ch.2 "A Note on Interdisciplinary Methods") "Radiocarbon dating is suitable for manuscripts composed of organic materials, using milligram-size samples. It is an independent, objective, and the only truly quantitative method for dating organic materials. As many scholars have pointed out, however, this technique alone is rarely able to resolve issues of authenticity or provide precise dating. Depending on the time period, the degree of accuracy can vary between as much as 50 and 300 years."
  10. (p.25 / 25, ch.2) "the most familiar form of Tibetan book, the dpe cha, which consists of rectangular unbound leaves. Sometimes it is referred to as the pothi format, named after the Indian term for the model on which it was based. The Indian prototype is made out of palm leaves, and it is this form that the Tibetan longbook reproduces in paper."
  11. (p.169–170 / 169–170, ch.7) "on the basis of the above information we could date this copy of the Khams chen to the middle of the fifteenth century. […] Radiocarbon analysis indicated that the dedication (colophon) folio, as well as volumes cha (6), ta (9) and tha (10) belonged to the time window between the beginning of the fourteenth and the beginning of the fifteenth century."
  12. (p.171 / 171) "the number of manuscripts written on paper was increasing, and the use of palm leaves decreased. (They continued to be used until the fifteenth century)." (+ เชิงอรรถ 5 หน้า 170: "C-14 dating was conducted by the Poznań Radiocarbon Laboratory, Poland in 2017 (Report No. 12773/17 from 01.12.2017)")
  13. (p.197 / 197, ch.9 โดย Skumanov) "The Himalayan climate, its cold, dry, bacteria-free air help to keep the Mardzong collection in good condition." (+ ย่อหน้าเดียวกัน: "there is no one trained in the conservation of paper in the village and without that knowledge and money this situation will not change.")
  14. (p.198 / 198) "NGOs should limit their actions to education and support, and refrain from imposing western standards."
- **ประเด็นที่ map:**
  - **[ch3]** การค้นพบ 2008 โดยทีม Coburn/Athans (National Geographic "Secrets of Shangri-La") ใน "cathedral cave" แห่ง Mardzong; ชุดสะสมอายุครึ่งสหัสวรรษ (quote 1, 3)
  - **[ch9]** สมมติฐานการฝังคัมภีร์ = ธรรมเนียมทิ้ง/เก็บหนังสือชำรุดใน stupa/ถ้ำ "out of respect" ตามคติ Tibet/Bon (quote 4) — เทียบข้ามวัฒนธรรมกับการซ่อนใบลานในหอคัมภีร์เนปาล
  - **[ch9]** สภาพแวดล้อมหนาว-แห้ง-ปลอดเชื้อของ Himalaya = อนุรักษ์โดยธรรมชาติ (quote 13) + ภัยจากมนุษย์: ไม่มีผู้เชี่ยวชาญ, ทุบก้อนหินปัดฝุ่น, miniatures ถูกตัด (quote 6–7)
  - **[ch9]** กำหนดอายุ: colophon/dedication (Agön Zangpo กลาง ค.ศ. 15) + C-14 Poznań → หน้าต่าง ค.ศ. 14–15; ความคลาดเคลื่อน C-14 50–300 ปี (quote 9, 11, 12)
  - **[pothi]** ยืนยันสายพันธุ์รูปเล่ม: dpe cha/pothi จำลอง "Indian prototype made out of palm leaves" (quote 10) + ใบลานภูมิภาคใช้ต่อถึง ค.ศ. 15 (quote 12)
  - **สถิติ:** จำนวน folio รายงานไม่ตรงกัน 3 ชุด (25,000 → 8,000+ → นับจริง 5,095 ที่ Choede monastery) = บทเรียนเรื่อง inventory ตอนขุดพบ (quote 6)

---

## S-451
- **Language:** EN
- **ประเภท:** secondary (monograph เล่ม II ของชุด 2 เล่ม)
- **Bibliography:** Franco, Eli. *The Spitzer Manuscript: The Oldest Philosophical Manuscript in Sanskrit. Volume II*. Wien: Verlag der Österreichischen Akademie der Wissenschaften (Denkschriften phil.-hist. Klasse, 323. Band / Beiträge zur Kultur- und Geistesgeschichte Asiens, Nr. 43), 2004.
- **DOI/ISBN:** — (ชุด Denkschriften 323 / BZKGA 43 จากหน้าปก)
- **Local Path:** ข้อ 2 ด้านบน | extract: `spitzer.txt`
- **PDF health:** PASS (161 pp; เล่ม II = Concordances + edition/reconstruction — physical description และ palaeography อยู่ Vol. I ซึ่ง**ไม่มีในโฟลเดอร์ PDF** → บันทึก GAP ไว้)
- **Quotes verbatim:**
  1. (p.1 หน้าปก) "ELI FRANCO / THE SPITZER MANUSCRIPT / THE EARLIEST PHILOSOPHICAL MANUSCRIPT IN SANSKRIT / VOL. II" — หน้าปกภายใน (p.3) รูปยาว: "The Spitzer Manuscript / The Oldest Philosophical Manuscript in Sanskrit / Volume II / VERLAG DER OSTERREICHISCHEN AKADEMIE DER WISSENSCHAFTEN / WIEN 2004"
  2. (p.4 / 353, "Concordances") "The following three concordances correlate the three currently available arrangements of the fragments: (1) Numbers (1-854), not preceded by letters, refer to the numbering of the glass frames in the State Library in Berlin where the original fragments are preserved."
  3. (p.4 / 353) "the photos reflect the state of the fragments after World War II, but before their framing. […] in a few cases a fragment was broken before it was framed and the photo represents it still unbroken […] in very few cases the script has deteriorated only recently and the photo preserves a clearer picture of the akṣaras."
  4. (p.86 / 435, "Towards a Reconstruction of the Spitzer Manuscript") "The purpose of this essay is to present a partial reconstruction and interpretation of the last portion of the manuscript, from fol. 369 until the manuscript's presumed end ca. fol. 414."
  5. (p.108 / 457) "practically all the Sanskrit manuscripts in the Turfan collection are assumed to belong to the Sarvāstivāda school, and as I have tried to show in the introduction the author of the manuscript seems to admit the existence of past and future objects."
  6. (p.111 เชิงอรรถ 6) "One of the most conspicuous phraseological characteristics of the Spitzer Manuscript is the frequent use of khalv api, cf. the introduction to vol. I, p. 33."
  7. (Bibliography ปลายเล่ม) รายการอ้างอิงที่ชี้ตัววัสดุ/บริบท: "Schlingloff, D. (1956) Die Birkenrindenhandschriften der Berliner Turfansammlung" / "Sander, L. (1992) The Earliest Manuscripts from Central Asia and the Sarvāstivāda" / "Glass, A. (2000) A Preliminary Study of Kharoṣṭhī Manuscript Palaeography."
- **ประเด็นที่ map:**
  - **[ch9]** ตราสินค้าวิชาการ "oldest/earliest philosophical manuscript in Sanskrit" เป็นคำโปรยบนปกทั้งสองรูป (quote 1) — ใช้อ้างได้แต่ต้องระบุว่าเป็น claim ของผู้เขียน (รายละเอียด palaeography/อายุอยู่ Vol. I)
  - **[ch3]** ต้นฉบับอยู่ Berlin State Library ในกรอบแก้วเลข 1–854; เป็นส่วนของ Turfan collection; ภาพถ่ายก่อนเฟรม (หลัง WWII) มีคุณค่าเพราะอักษรเริ่มเสื่อมสภาพเมื่อเร็ว ๆ นี้ (quote 2–3)
  - **[ch9]** reconstruction ครอบคลุม fol. 369–414 คือปลายต้นฉบับ (quote 4); นิกาย Sarvāstivāda = ค่าปริยายของ Turfan mss (quote 5)
  - **หมายเหตุวัสดุ:** Spitzer = ตระกูล birch-bark ของ Turfan (งานอ้าง Schlingloff เรื่อง Birkenrindenhandschriften) — **ไม่ใช่ใบลาน**; สำคัญเวลา map ให้ตัดออกจากชุด palm-leaf
  - **GAP:** เป้าหมายเดิม (physical description ใบลาน + palaeography dating) ไม่อยู่ใน Vol. II → ต้องหา Vol. I (2000) มาสกัดเพิ่ม

---

## S-452
- **Language:** EN
- **ประเภท:** secondary (journal article, Project MUSE)
- **Bibliography:** Ooi, Eng Jin. "Aspiring to Be a Buddha and Life Before Liberation: The Colophons of the Siamese Questions of King Milinda." *Manuscript Studies: A Journal of the Schoenberg Institute for Manuscript Studies* 7.1 (Spring 2022): 104–129.
- **DOI/ISBN:** DOI 10.1353/mns.2022.0002 (จากหน้าแรก MUSE)
- **Local Path:** ข้อ 3 ด้านบน | extract: `milinda_colophons.txt`
- **PDF health:** PASS (27 pp; article pp. 104–129)
- **Quotes verbatim:**
  1. (p.3 / 105) "Thomas W. Rhys Davids, considered this piece of work as 'undoubtedly the master-piece of Indian prose, and indeed is the best book of its class, from a literary point of view, that had then been produced in any country.'" (quote ซ้อนของ Rhys Davids ภายในเครื่องหมายคำพูดของผู้เขียน)
  2. (p.4 / 106) "Traditionally, the Questions of King Milinda texts, just like other Pāli literature, were preserved in palm-leaf manuscripts, as were their Thai adaptations; occasionally they were preserved in samut khoi, or accordion-style paper folding books."
  3. (p.12 / 114) "The colophon also records that early in the Bangkok period, a group of five lay devotees (ประสก) came together in the Year of the Rabbit (1783 CE), era Benchasok or the fifth year of the decade, to make the Questions of King Milinda manuscript (หนังสือ), possibly in the context of sustaining the Dispensation (สร้างไว้ในศาสนา)."
  4. (p.12 / 114) "Despite the names appearing separately on different palm-leaf fascicles, each mention shares the same stock colophon at its conclusion—'In the future, may I fulfill the Perfections and become a Buddha.'"
  5. (p.13 / 115, คำแปล colophon NL5008) "I, a layman by the name of Dhammajota, devoted myself to the Dispensation of the Buddha at Wat Kluai, sponsored this manuscript of the Questions of King Milinda, complete in sixteen fascicles, to be established in the Dispensation of the Buddha for the full five thousand years. […] I humbly aspire for the conditions for Nirvana in the future. May I, the person who copied this manuscript, be a foremost disciple of a Buddha in the future."
  6. (p.13 / 115, คำบรรยายภาพ Fig. 3) "Colophon of NL5008 dated 1686 CE (in box) written in the Thai language in Khom Thai script. The colophon is written on an independent palm-leaf folio, placed at the end of the fascicle. Courtesy of the National Library of Thailand, manuscript code 5008, fascicle 1."
  7. (p.14 / 116) "The desire to be born in the time of a future Buddha, especially the next fully awakened Buddha (sammāsambuddha), Maitreya, is displayed in another colophon, NL4594"
  8. (p.17–18 / 119–120, คำแปล colophon ร่วม 4 เล่ม NL4600/NL5500/NL11815/NL5435) "With this merit of writing down [the text], may I be accomplished in sharp wisdom, may I memorize and teach the Tripiṭaka for a hundred thousand lives. I will also be one who receives the Tripiṭaka for a hundred thousand lives. As long as I am yet to attain Nirvana, I will get to be one who possesses great wealth, pure hair, pure teeth, pure nose, pure mouth, pure ears, pure forehead, pure eyes and pure tongue; one who is pure in speech and who is dear to the elders; […] [and] to awaken as a Phra [Buddha]."
  9. (p.18 / 120) "It is interesting to see the aspirants in these manuscripts going into such detail about a perfect physical embodiment of a human form. They leave no parts of the body to chance." (+ ท้ายย่อหน้า: "while the other part of the colophon may seem to be formulaic, aspiring to be a fully enlightened being is a personal choice.")
  10. (p.19 / 121) "This two-volume samut khoi currently belongs to Wat Champa in Thonburi District. It was copied during the (late) Ayutthaya era by an unknown scribe. […] The text's original sponsors were the noble royal ladies (pavaranārī), Pān and Pom, who are depicted as donors in the manuscript itself (fig. 5), which is a rather rare feature in the Buddhist art of Thailand."
  11. (p.15 / 117) "This selection of colophons demonstrates that a particular path to attaining final bliss by way of becoming a Buddha seems to have been a favored choice among donors and scribes."
  12. (p.16 / 118) "This was taught by the monk Indapaññā, who aspires to be an omniscient Buddha. A female lay devotee Ngai sponsored [this manuscript]." (colophon NL4596, พ.ศ. 2230/1687)
- **ประเด็นที่ map:**
  - **[ch8]** ใบลานสยาม: Milindapañha รักษาใน palm-leaf และ samut khoi; colophon เขียนบน "independent palm-leaf folio" ปิดท้ายม้วน อักษรขอม (Khom Thai) (quote 2, 6)
  - **[ch9]** กำหนดอายุด้วย colophon: NL5008 พ.ศ. 2229/1686 = เก่าสุดในชุด; ระบบปีนักษัตร + ศักราชย่อ (Atthasok/Benchasok/Nopphasok) (quote 3, 5, 12)
  - **[merit]** แรงจูงใจการสร้างคัมภีร์ = "established in the Dispensation for the full five thousand years" + ปณิธานเป็นพระพุทธเจ้า/พบพระศรีอาริยเมตไตร (quote 4, 5, 7, 8, 11) — สายธรรมเนียมเดียวกับจารึกสุโขทัย
  - **[patronage]** ผู้อุปถัมภ์ครบวงจร: พระ (Mahāseung ลงมือเขียน), ฆราวาสชาย-หญิง (ประสก 5 คน 1783, อุบาสิกา Ngai 1687, ธิดาชาววัง Pān/Pom ยุคอยุธยา ซึ่งวาดภาพผู้อุทิศในตัวเล่ม = หาได้ยาก) (quote 3, 10, 12)
  - **[colophon taxonomy]** พบชั้นข้อมูล: stock phrase ร่วม 4 เล่ม (กลุ่ม iminā lekkhapuññena) แต่สมาชิกบางเล่มแทรกปณิธานส่วนตัว → colophon มีทั้งชั้นสูตรสำเร็จและชั้นเฉพาะบุคคล (quote 4, 8, 9)

---

## S-453
- **Language:** EN
- **ประเภท:** secondary (journal article, open access)
- **Bibliography:** Aghaei, Ali, Faranak Bahrololoumi, Irka Hajdas, Rasul Jafarian, Lili Kordavani, and Michael Marx. "Radiocarbon Dating of Manuscripts Kept in the Central Library of the University of Tehran." *Radiocarbon* 65.2 (2023): 307–321.
- **DOI/ISBN:** DOI 10.1017/RDC.2023.2
- **Local Path:** ข้อ 4 ด้านบน | extract: `tehran_radiocarbon.txt`
- **PDF health:** PASS (15 pp; journal pp. 307–321)
- **Quotes verbatim:**
  1. (p.1 / 307, Abstract) "radiocarbon dating supports the dates of the colophons; even in cases where they were suspected of being tampered with, they most likely present the accurate original dates of the corresponding manuscripts. Only in the case of Ādāb al-Falāsifah (no. 2165), radiocarbon dating of the parchment has identified the manuscript as non-authentic. Inconsistent carbon dating results of two samples taken from Ḏaḫīrah-ye Khwārazmšāhī (no. 5156) and Panǧ Ganǧ (no. 5179) provide evidence of later replaced/added leaves."
  2. (p.1 / 307, Introduction) "Absolute dating is only possible if the manuscript has a colophon […] Without colophons, or when there are doubts about their authenticity, all date estimates depend on philological methods […] Because paleographic and philological date estimates depend on comparison, they produce 'relative chronology,' reflecting the experience and evaluation of the scholar who pronounces them. Scientific analysis (radiocarbon dating) offers firm grounds for the dating of the writing surface to overcome the divide between dating by colophons and relative chronology by paleography and philology."
  3. (p.2 / 308) "The downscaling of sample size from grams to milligrams revolutionized application of RD to studies of precious artifacts and historic objects of cultural heritage, including manuscripts and books."
  4. (p.2 / 308) "early Qurʾān manuscripts cannot be sufficiently dated by paleography, philology or the study of colophons, obscuring their age."
  5. (p.3 / 309, Descriptive Background) "In January 2019 […] samples from six manuscripts were taken and sent to the Ion Beam Physics laboratory at the ETH Zurich for radiocarbon dating. […] It was of primary concern not to damage parts of the manuscripts that contain text. All samples were taken from the margin in a way that the damage of sample taking would not strike the reader of the manuscript."
  6. (p.8 / 314, Radiocarbon Dating) "The starting mass of samples was on the order of ca. 10–20 mg. Samples of paper and parchment were treated using solvents to remove contamination with oils and waxes and with acid and base (ABA) to remove carbonates and humic acids […] Radiocarbon ages were calibrated using the OxCal v 4.3.2 calibration program (Ramsey 2017) and the IntCal20 calibration curve (Reimer et al. 2020)."
  7. (p.9 / 315, Discussion) "The radiocarbon calibration curve shows numerous plateaus (Hajdas 2014; Hajdas et al. 2021), which often are responsible for lower precision of calibrated ages."
  8. (p.12 / 318) "Samples ETH 97583 and ETH 97585 are to be dated between 1302 and 1400 CE, and between 1289 and 1394 CE, respectively. These results correspond to the date mentioned in the colophon, i.e., the year 718 AH/1318 CE (see Figure 4). However, the calibrated age of ETH-97584 ranges between 1458 and 1631 CE is not consistent with those of the other two samples […] This could imply that this folio was a later addition to the original manuscript"
  9. (p.12 / 318) "this dating precludes the possibility that this manuscript was produced before 1500 CE. In the light of radiocarbon analysis, the claims that the manuscript had been written by the famous scholar Ḥunayn b. Isḥāq cannot be taken as face value"
  10. (p.13 / 319, Conclusions) "In the case of seven folios the agreement with philological dating (including paleography) is impressive."
  11. (p.13 / 319, Conclusions) "Carbon dating results prove that all these concerns were justified, because the manuscript's writing surface was produced more than 700 years after Ḥunayn ibn Isḥāq's death (873 CE)."
  12. (p.13 / 319, Conclusions) "What is crucial is the introduction of a scientific method independent from philology and paleography for determining a manuscript's age."
- **ประเด็นที่ map:**
  - **[ch9]** แม่แบบวิธี C-14 กับคัมภีร์ครบวงจร: เลือกตำแหน่งสุ่มขอบ (ไม่กระทบตัวอักษร) → 10–20 mg → ABA + solvent → MICADAS/ETH → OxCal + IntCal20, รายงานช่วง 95.4% (quote 5, 6)
  - **[ch9]** ผลเชิงตำรวจ: (ก) colophon ถูกสงสัยว่าปลอมแต่ C-14 ยืนยัน → ยกฟ้อง; (ข) colophon ถูกสงสัยและ C-14 พิสูจน์ว่าปลอมจริง (Ādāb al-Falāsifah ต่างกัน >700 ปี); (ค) C-14 ขัดกันเองระหว่างใบ → ตรวจจับ "ใบเปลี่ยน/ใบแทรกภายหลัง" ได้ (quote 1, 8, 10, 11)
  - **[ch9]** ข้อจำกัดที่ต้องจำเวลาใช้เทียบ Bakhshali debate: calibration plateau ลดความละเอียด, ผลเป็น "หน้าต่าง" ไม่ใช่ปีเดียว, วัสดุ (writing surface) อาจเก่ากว่าการเขียน (quote 2, 7)
  - **[ch9]** จุดยืนระหว่างวิธี: C-14 เป็น "วิธีอิสระ" ที่เสริมไม่ใช่แทนที่ philology/paleography — ตรงข้ามกับแนวโน้ม "final say should remain with the historian" ที่บทความถก (quote 2, 12 + บริบท p.2/308)
  - เชื่อมกับ S-450 (Mardzong: C-14 Poznań) และ S-454 (Baums: radiocarbon กับ Gandhāra scrolls) = สามระดับการใช้ C-14 ในชุดงานนี้

---

## S-454
- **Language:** EN
- **ประเภท:** secondary (edited volume, handbook)
- **Bibliography:** Quenzer, Jörg B., Dmitry Bondarev, and Jan-Ulrich Sobisch (eds.). *Manuscript Cultures: Mapping the Field*. Berlin/Munich/Boston: Walter de Gruyter (Studies in Manuscript Cultures 1), 2014. — บทที่เกี่ยว Indic โดยตรง: Wujastyk "Indian Manuscripts" (159–182), Baums "Gandhāran Scrolls" (183–226), Melzer "A Palaeographic Study of a Buddhist Manuscript from the Gilgit Region" (227–274)
- **DOI/ISBN:** ISBN 978-3-11-022562-4 / e-ISBN (PDF) 978-3-11-022563-1
- **Local Path:** ข้อ 5 ด้านบน | extract: `manuscript_cultures.txt`
- **PDF health:** PASS (384 pp)
- **Quotes verbatim — บทนำ (Quenzer) คำนิยาม manuscript culture:**
  1. (p.7 / 1) "In manuscript studies, the manuscript is considered as object in its own right and taken as a starting point for reconstruction of its cultural context."
  2. (p.7 / 1) "the manuscript is not to be read only as a vehicle for information conveyed mainly through text or images, but studied as a physical object or artefact. The text may be regarded as a constituent part of the object, but it is only one of many such parts, and at times perhaps not even the most important one."
  3. (p.8 / 1–2) "We refer to this context as the particular manuscript culture to which a given manuscript belongs: the milieu in which it was and is produced, used and transmitted. It is, in turn, influenced by the artefacts it produces, and thus constitutes a highly complex whole changing in time. Furthermore, manuscript cultures are not necessarily identical with regional (e.g. India) or religious (e.g. Islamic) cultures. In one place and at one time, more than one manuscript culture can exist – for example, a manuscript culture of religious specialists working parallel to that of a scholarly elite."
  4. (p.8 / 2) "It is estimated that there are presently far more than ten million extant manuscripts from Asian and African cultures; this vast body of evidence stands, however, in stark contrast to the state of research. In fact, the only pre-modern book culture that has been extensively studied is that of Western Europe."
- **Quotes verbatim — บท Wujastyk "Indian Manuscripts" (South Asia):**
  5. (p.165 / 159) "For most specialists, this expression conjures up the idea of a hand-written document inscribed on paper or palm leaf, in Devanāgarī or one of the other alphabets of South or Central Asia, and typically in the Sanskrit, Tamil or Persian language."
  6. (p.165–166 / 159–160) "The National Mission for Manuscripts in New Delhi works with a conservative figure of seven million manuscripts, and its database is approaching two million records. The late Prof. David Pingree, basing his count on a lifetime of academic engagement with Indian manuscripts, estimated that there were thirty million manuscripts, if one counted both those in public and government libraries, and those in private collections."
  7. (p.166 / 160) "These millions of Indian manuscripts are mostly full literary works, typically consisting of scores or hundreds of closely-written folios, most often in Sanskrit, and containing works of classical learning on logic, theology, philosophy, medicine, grammar, law, mathematics, yoga, tantra, alchemy, religion, poetry, drama, epic, and a host of other themes."
  8. (p.167 / 161) "the smaller numbers before the 19th century can be explained by the environmental conditions in most of South Asia, that are hostile to birch bark, paper and palm leaf. The monsoon climate, and the work of insects, mould, and rodents, have destroyed millions of early manuscripts. This is why some of the very oldest manuscripts in Sanskrit have been discovered not in India, but in the dry, desert conditions of Central Asia, in caves, stūpas or buried libraries on the Silk Route."
  9. (p.167 / 161) "An Indian manuscript written on hand-made Indian paper has a typical physical lifetime of two to three centuries, after which it becomes increasingly fragile and illegible, and a new copy must be created. […] Paper manuscripts in South Asia are rare from before 1500. Palm leaf manuscripts are more robust, and can last a millennium or more if treated well. For example, the Wellcome Aṣṭasāhasrikāprajñāpāramitā ('The Perfection of Wisdom in 8000 verses') is datable to about 1075 CE, and is still in almost pristine condition."
  10. (p.167–168 / 161–162) "Palm leaf manuscripts tend to wear around the edges. Scribes knew this and often left large margins, so even after hundreds of years, the text area of the manuscript remained intact. But when material costs obliged them to write close to the edges of the palm leaf, then splitting and erosion of the leaf could lead to loss of text. Thus, the Wellcome copy of the Niśvāsatattvasaṃhitā ('The Tantra of Sighs'), written on paper in Nepal in 1912, preserves letters from the edges of the 9th-century palm leaf exemplar in Kathmandu that have been broken and lost since 1912, thus giving the London apograph independent text-historical value."
  11. (p.168 / 162) "A back-of-an-envelope calculation based on estimated figures and attrition rates suggest that several hundred Sanskrit manuscripts are being destroyed or becoming illegible every week."
  12. (p.172 / 166, Material support) "While wood, cloth, copper and other writing supports were sometimes used, the principle writing supports in India have been birch bark, palm leaf and paper. Papyrus and parchment were unknown, the latter due to the widely-shared Brahman religious concepts of vegetarianism and harmlessness to living creatures (Skt. ahiṃsā)." (หมายเหตุ: "principle" [sic] ในต้นฉบับพิมพ์ — ควรเป็น "principal")
  13. (p.172 / 166) "The leaves of two species of palm were used as writing supports in India, Corypha umbraculifera, the Talipot Palm native to southern India and Sri Lanka, and Borassus flabellifer, the Toddy Palm, native to South and South East Asia. Leaves were selected for size and quality, and then boiled in water and dried, sometimes in warm sand. The surfaces of the leaves were then polished with pumice, and cut to regular, long, narrow sizes. A hole was sometimes punched in the centre of the leaf so that a stack could be strung together to keep them in order. Some older, wider palm leaf manuscripts from Bengal and Nepal were written using ink and a calligraphic stylus, as with birch bark. But the most common scribal practice, especially on the east of India from Bengal to Tamil Nadu in the south, was to inscribe the text on the leaf using a pointed stylus. […] In order to read the text, it would have to be wiped with a cloth soaked in oil and lampblack, that would fill the incised letters with dark colour and render the manuscript legible."
  14. (p.172–173 / 166–167) "Paper began to supplant palm leaf as the most abundant writing support from about the 12th century, with some of the earliest paper manuscripts being found in Jaina libraries in Gujarat and Rajasthan."
- **Quotes verbatim — บท Baums "Gandhāran Scrolls" (โดยย่อ):**
  15. (p.190 / 184) "On the basis of paleographic and linguistic features as well as radiocarbon analysis, the scrolls can be dated to the 1st and 2nd centuries CE, and there are indications that at least some of them are as old as the 1st century BCE" + "discoveries at Bamiyan in central Afghanistan have produced around 275 fragments of palm-leaf manuscripts in Kharoṣṭhī script, written by ca. 50 scribes and containing an undetermined number of texts"
- **ประเด็นที่ map:**
  - **[ch3]** คำนิยามสาขา (quote 1–3): manuscript = artefact; manuscript culture = milieu ของ production/use/transmission; หนึ่งพื้นที่มีได้หลาย manuscript culture — เป็นกรอบแม่บทของทั้งโปรเจกต์
  - **[ch9]** วัสดุเขียนอินเดีย: birch bark / palm leaf / paper (parchment หายไปเพราะ ahiṃsā) + สูตรเตรียมใบลาน (ต้ม-ตากทราย-ขัดหินพิมอส) + สองเทคนิคเขียน (stylus แกะสลัก + คราบเขม่าน้ำมัน, หรือ ink + calligraphic stylus แบบเก่าใน Bengal/Nepal) (quote 12–13)
  - **[ch9]** สมดุลอายุวัสดุ: กระดาษอินเดียอายุ 2–3 ศตวรรษ/รอบการคัดลอก; ใบลานถึง 1,000 ปี (Wellcome Aṣṭa 1075 CE) (quote 9)
  - **[ch9]** กลไกการสูญเสีย: มรสุม+แมลง+หนู ทำลายหลักล้าน; ของเก่าสุดจึงรอดอยู่เอเชียกลางแท้; "several hundred Sanskrit mss สูญทุกสัปดาห์" (quote 8, 11)
  - **[palimpsest-effect]** รูปแบบหลักฐานใหม่: apograph 1912 อนุรักษ์ตัวอักษรขอบใบลาน ค.ศ. 9 ที่ขาดหายแล้ว (Niśvāsatattvasaṃhitā) = สำเนาเป็นหลักฐาน text-historical (quote 10)
  - **[เปลี่ยนผ่าน]** paper supplants palm leaf ~ ค.ศ. 12 (Jaina libraries Gujarat/Rajasthan) — สอดคล้องกับ Mardzong (S-450: ใบลานหายไป ค.ศ. 15) (quote 14)
  - **[ch9]** Bamiyan palm-leaf Kharoṣṭhī ~275 fragments / ~50 scribes (quote 15) — ขยายขอบเขต palm-leaf ขึ้นเหนือนอกอินเดีย

---

## S-455
- **Language:** EN
- **ประเภท:** secondary (conservation booklet/แนวปฏิบัติ)
- **Bibliography:** Sah, Anupam. *Save Palm Leaf Manuscript Heritage* (Mission Save Art Heritage 3). Lucknow: INTACH Indian Council of Conservation Institutes, 2001 (First Edition: 4000 copies).
- **DOI/ISBN:** — (booklet INTACH)
- **URL:** https://archive.org/details/savepalmleafmanuOOsaha (จากหน้า 2 ของไฟล์: "Digitized by the Internet Archive in 2014")
- **Local Path:** ข้อ 6 ด้านบน | extract: `save_palmleaf.txt`
- **PDF health:** PASS (20 pp; booklet ภาพประกอบ, text layer แตกเป็นท่อน — ดูระเบียบการ quote หัวไฟล์)
- **Quotes verbatim:**
  1. (p.5, Foreword โดย O.P. Agrawal) "Before the advent of paper in India palm-leaves were the main material on which writing was done particularly in coastal areas. Palm-leaves as writing material was also in use in several other countries like Sri Lanka, Thailand, Burma, Lao, Indonesia and so on. As a result hundreds of thousands of palm-leaf documents have come down to us in the form of ancient heritage."
  2. (p.6, Introduction) "Our ancestors have been writing on palm leaves for thousands of years and palm leaf writing skill is still alive today, though essentially for ritualistic and artistic purposes." + "These nations together have millions of palm leaf manuscripts in their museums, homes, monasteries and universities."
  3. (p.8, How are palm leaf manuscripts made?) "the leaves of only a few have been used for writing. The most widely used were Borassus flabellifer Linn (the palmyra palm), Corypha umbraculifera Linn (taiipot palm, fan palm) and Corypha taliera Roxb. In India, palm leaves are known as Tal, Sritala; in Thailand as Lam: in Srilanka as Ola." (เก็บ [sic] "taiipot" ตาม text layer — ควรเป็น "talipot")
  4. (p.8) "Tender green leaves of different varieties of palm trees are selected and cut. These cut leaves are then dried in a controlled manner and seasoned. The leaves may be smoked, boiled in paddy husk, buried under silt, fumigated in kilns, rubbed smooth over wooden rollers, etc in order to prepare them to be written on."
  5. (p.8) "The writing and illustrations are incised or scratched on the surface of the palm leaves using a sharp pointed metal stylus. These incisions are then made visible by usually rubbing into them carbon black ink." + (p.9) "The text and illustrations are also sometimes painted on the palm leaf with a brush." + "Sometimes the leaves are stitched together to get a bigger surface."
  6. (p.9) "The various leaves are then sandwiched between wooden boards which are tied in place with the help of a cord in order to maintain the shape of the palm leaves when in storage."
  7. (p.10, Deterioration) "Warping of leaves takes place because leaves were not kept tightly between wooden boards and due to uncontrolled drying in the sunlight." + "Brittle leaves break when the atmosphere becomes very dry and the leaves lose their moisture." + "Light inside showcases dry up the leaves and make them brittle."
  8. (p.11) "Leaves get damaged at string holes because of constant uncontrolled movement of the leaves" + "Damage due to AC. If air conditioning in the area where manuscripts are stored is switched on and off, then the fluctuating temperature and relative humidity causes expansion and contraction of the manuscripts causing them to weaken and break." + "Fungus grows in high humidity." + "Damage due to humans. Theft, vandalism, careless staff, irresponsible users, all lead to a loss of this cultural heritage."
  9. (p.12, Protection) "When you receive or acquire a manuscript, do not keep it immediately with your other manuscripts, because if it is infected by fungus and insects, it will pass on the infection to the healthy manuscripts." + "Wrap the manuscript in a thick cotton cloth" + "People incharge of collections must document and publish the contents of the manuscripts. Instead of the original manuscript, copies or microfilms should be made available to scholars for reference. Condition reports should be prepared."
  10. (p.13, Dust & pollution) "Manuscripts should be kept in closed showcases or boxes." + "Do not clean the manuscripts with a vacuum cleaner."
  11. (p.14, Light) "Manuscripts should be displayed at a light intensity of not more than 40 lux. Use a lux meter to measure this light intensity." + "Sunlight and tubelight weakens the manuscript because the ultraviolet rays damage the leaves."
  12. (p.15, Insects) "Natural insect repellents like neem (margosa) leaves can be placed alongwith the manuscripts." + "The cloth used to wrap the manuscripts should be made starch free by thorough washing otherwise the starch may attract insects." + "fumigation will only free the manuscripts from the present insect attack. If precautions are not taken, the manuscripts will get infected again."
  13. (p.16, Temperature/RH) "Keep temperature and relative humidity constant as much as possible by keeping the manuscripts wrapped in destarched thick cotton cloth in an inner room and keep moisture absorbent materials such as cotton curtains and wooden furniture around collections. These materials (buffers) absorb and release moisture slowly thus decreasing the harmful effects of fluctuations." + "Air-conditioners if used should be functional 24 hours a day, 365 days a year." + "If the relative humidity falls to levels lower than 45%. then there is danger of the manuscripts becoming brittle due to loss of their moisture." + "If the manuscripts get wet, do not dry them in the sun. Dry inside a shaded room with a fan gently blowing and press unpainted manuscripts between blotters."
  14. (p.17, Storage) "The lowest storage shelf should be atleast 8 inches above the floor." + "The manuscripts should be aired regularly and inspected at the same time."
  15. (p.18, Conclusion) "Manuscripts in private possession are often in a better condition because they are cared for with a personal touch. Institutions which start collecting thousands of manuscripts now also have a serious responsibility of ensuring their upkeep."
- **ประเด็นที่ map:**
  - **[ch8]** หลักฐานธรรมเนียมเตรียมใบลานที่หายาก (งานนี้เป็นคู่มือถือปฏิบัติโดย conservator): รมควัน/ต้มแกลบ/ฝังโคลน/อบควันเตา/ถูไม้ = ชุดวิธีการเสริมแกร่งใบ (quote 4) — ตรงข้าม/เติมเต็มสูตรเชิงวิชาการของ Wujastyk (S-454: ต้ม-ตากทราย-หินพิมอส)
  - **[ch8]** ปริญญานามท้องถิ่น: Tal/Sritala (อินเดีย), **Lam (ไทย)**, Ola (ศรีลังกา) + 3 สปีชีส์ (quote 3)
  - **[ch9]** ภัย 12 ทางต่อใบลาน + มาตรการ: quarantine ของใหม่, ห่อผ้า cotton, 40 lux, neem, RH < 45% = เปราะ, AC เปิด-ปิดเป็นพิษ (สำคัญสำหรับเอเชียเขตร้อน) (quote 7–13)
  - **[ch9]** หลักคิดอนุรักษ์: สำเนา/microfilm ให้นักวิชาการแทนของจริง + condition report + ผู้รับผิดชอบชัดเจน (quote 9)
  - **[สังเกต]** หลักการเดียวกันนี้อธิบายได้ว่าทำไม private collections (เช่นบ้านพราหมณ์ใน S-454, วัดใน S-452) มักรอดดีกว่าสถาบัน (quote 15)

---

## S-456
- **Language:** EN
- **ประเภท:** secondary (journal review article, SPIE)
- **Bibliography:** Kesiman, Made Windu Antara, Dona Valy, Jean-Christophe Burie, Erick Paulus, I. Made Gede Sunarya, Setiawan Hadi, Kim Heng Sok, and Jean-Marc Ogier. "Southeast Asian palm leaf manuscript images: a review of handwritten text line segmentation methods and new challenges." *Journal of Electronic Imaging* 26(1), 011011 (2016/2017).
- **DOI/ISBN:** DOI 10.1117/1.JEI.26.1.011011
- **Local Path:** ข้อ 7 ด้านบน | extract: `sea_htr.txt`
- **PDF health:** PASS (16 pp; article pages 011011-1 ถึง 011011-14) — หมายเหตุ: ไฟล์นี้เป็น review article ทั้งชิ้น (หัวข้อ 1–5) ไม่ใช่ "บทที่ 8" ของหนังสือ; สกัดครบตามเป้าหมาย (สถานะ segmentation/HTR ใบลาน SEA)
- **Quotes verbatim:**
  1. (p.2 / 011011-1, Abstract) "Due to their specific characteristics, palm leaf manuscripts provide new challenges for text line segmentation tasks in document analysis. We investigated the performance of six text line segmentation methods by conducting comparative experimental studies for the collection of palm leaf manuscript images. The image corpus used in this study comes from the sample images of palm leaf manuscripts of three different Southeast Asian scripts: Balinese script from Bali and Sundanese script from West Java, both from Indonesia, and Khmer script from Cambodia."
  2. (p.2 / 011011-1) "Consequently, the performance of the OCR system is greatly influenced by the result of the segmentation process."
  3. (p.2 / 011011-1) "This collection includes the primary characteristics of degraded historical documents, such as the low intensity and low contrast of the document, the varying space between letters, and the varying space between lines, the merges, fractures, and other deformations of character shapes."
  4. (p.3 / 011011-2) "We showed that those binarization methods do not give a good binary image for palm leaf manuscript images. All methods extract unrecognizable characters on palm leaf manuscripts with noise. Consequently, the text line and character segmentation methods that are based on the binary image will not provide good results for this kind of document image."
  5. (p.3 / 011011-2, Table 1) "Collection from Bali, Indonesia — 35 pages — 140 text lines; Collection from Sunda, West Java, Indonesia — 12 pages — 46 text lines; Collection from Cambodia — 43 pages — 191 text lines; Total — 90 pages — 377 text lines"
  6. (p.3–4 / 011011-2–3) "Due to its specific characteristics, palm leaf manuscripts provide new challenges in document analysis. Usually, palm leaf manuscripts are of poor quality since the documents have degraded over time due to bad storage conditions." + "Natural materials from palm leaves certainly cannot fight against time; therefore, the process of digitizing and indexing palm leaf manuscripts is very important."
  7. (p.4 / 011011-3) "The palm leaf manuscripts contain some obstacles for line segmentation, e.g., skewed and fluctuating text lines and irregularity in geometrical properties of the line, such as line width, height, and distance between lines."
  8. (p.15 / 011011-14, Conclusions and Future Works) "The results show that each method performed optimal on some specific characteristic of the manuscript collection. The behavior of some methods is greatly influenced by some challenges that are clearly present on each collection of the Southeast Asian manuscripts. For future works, a scheme to adopt and take into account all advantages from each method should be proposed."
- **ประเด็นที่ map:**
  - **[ch8]** สถานะปี 2016: ไม่มีวิธีใดชนะขาด — 6 วิธี (APP, A*, shredding, energy-function shredding, ALCM, seam carving) แต่ละวิธีดีเฉพาะลักษณะของชุดข้อมูลนั้น (quote 1, 8)
  - **[ch8]** ปัญหาโครงสร้าง: binarization ล้มเหลวกับใบลาน → วิธีที่ต้องการ binary image ใช้ไม่ได้ผล → ทางออกคือวิธีบน grayscale โดยตรง (quote 4)
  - **[ch8]** corpus มาตรฐานตั้งต้น: 90 หน้า / 377 เส้น (Bali 35, Sunda 12, Khmer 43) + ICDAR2013 evaluation protocol (quote 1, 5)
  - **[ch8]** ลักษณะเฉพาะใบลาน SEA: skewed/fluctuating baselines, ระยะเส้นไม่สม่ำเสมอ, merge/fracture, low contrast (quote 3, 7) — เทียบกับประเด็น [pothi] ของเล่มอื่น: ลักษณะการเขียนขอบใบลานกำหนดปัญหา CV โดยตรง
  - **[ch9]** ประโยค "Natural materials … cannot fight against time; therefore digitizing and indexing is very important" = สะพานเชื่อมแทร็กอนุรักษ์ (S-454/S-455) เข้ากับแทร็ก digital (quote 6)

---

## S-457
- **Language:** EN
- **ประเภท:** secondary (edited volume, Studies in Manuscript Cultures 23)
- **Bibliography:** Brinkmann, Stefanie, Giovanni Ciotti, Stefano Valente, and Eva Wilden (eds.). *Education Materialised: Reconstructing Teaching and Learning Contexts through Manuscripts*. Berlin/Boston: Walter de Gruyter (Studies in Manuscript Cultures 23), 2021. — บทที่เกี่ยวข้อง (เลือกจากสารบัญ): Peera Panarut "Scholarship between the Lines: Interlinear Glossing in Siamese Literary Manuscripts" (215–240); Giovanni Ciotti "Tamil Ilakkaṇam ('Grammar') and the Interplay between Syllabi, Corpora and Manuscripts" (315–352); Martin Delhey "The 'Vanaratna Codex': A Rare Document of Buddhist Text Transmission (London, Royal Asiatic Society, Hodgson MS 35)" (379–398)
- **DOI/ISBN:** DOI บท 10.1515/9783110741124-018 (Vanaratna); e-ISBN 9783110741124
- **Local Path:** ข้อ 8 ด้านบน | extract: `education_materialised.txt`
- **PDF health:** PASS (508 pp)
- **Quotes verbatim — บท Panarut (สยาม):**
  1. (p.228 / 216 เชิงอรรถ 2) "The earliest Siamese palm-leaf manuscript has been dated to 1615, while the oldest extant khòi-paper manuscript is dated to 1680 (Kongkaew Weeraprachak 2010, 24, 38)."
  2. (p.229 / 217) "Roughly speaking, palm-leaf manuscripts are most frequently used for writing Buddhist texts in both canonical Pali and vernacular Thai, while khòi-paper leporello manuscripts are more often used for recording secular texts such as historical records, non-religious treatises and poetry."
  3. (p.230 / 218) "the manuscripts not only served as carriers of texts, but as carriers of knowledge within the texts, which can rightly be perceived as part of traditional textual scholarship in pre-modern Siam. As traditional textual scholarship was mainly transmitted through an oral tradition, glosses between the lines provide significant evidence revealing how the text was read and interpreted."
  4. (p.231 / 219) "Most cases of interlinear writing found in Siamese manuscripts were intended as corrections of the main text, however, since the latter had been miscopied or certain words omitted. When making interlinear corrections, the scribe or reader would either cross out the mistake in the main text or mark it with a cross (+) and write the correct word above or below it."
  5. (p.232 / 220) "there was no tradition of writing separate commentaries to any complete vernacular Siamese text until the late nineteenth century, unlike the canonical texts in Pali whose commentaries have been transmitted separately, a tradition that can be traced back to India and Lanka many centuries ago."
- **Quotes verbatim — บท Ciotti (ทมิฬ):**
  6. (p.348 / 336) "In this section we will explore what could be labelled as the material realisation of the ilakkaṇam syllabi and corpora in multiple-text and composite manuscripts. In particular, we will investigate twenty such palm-leaf manuscripts that were selected on the basis of both direct inspection (either personal or through digital reproductions) and the information gathered from library catalogues."
  7. (p.348 / 336) "What is in fact evident is the educational purpose of these manuscripts, which showcase the synergy between grammar (ilakkaṇam) and literature (ilakkiyam), in particular the texts of the Patiṉeṇkīḻkkaṇakku corpus and the Cīvakacintāmaṇi."
  8. (p.349 / 337) "So far, I could find just one manuscript that matches the threefold syllabus constituted by eḻuttu, col and poruḷ. – MS no. 438 of the U.V. Swaminatha Iyer Library of Chennai (UVSL): Naṉṉūl (438, fols 1r–21v) and Akapporuḷviḷakkam (438a, fols 22r–44r)."
- **Quotes verbatim — บท Delhey (Vanaratna Codex — อินเดีย/เนปาล ใบลาน):**
  9. (p.391 / 379, Abstract) "The present article deals with a palm-leaf manuscript that contains multiple texts in Sanskrit language (and one text in Apabhraṃśa) and is written in Old Bengali script. It is an autograph of – or at least closely associated with – the Indian Buddhist Tantric master Vanaratna (1384–1468 CE). The manuscript contains not only texts copied from other manuscripts but also Vanaratna's Sanskrit translations of seemingly orally transmitted texts in Tibetan language […] Because hardly any cases are known of translation of Tibetan texts into Sanskrit, the present manuscript is a document of unique historical value."
  10. (p.391 / 379) "Vanaratna hailed from the Chittagong district in Eastern India (present-day Bangladesh). After extensive journeys and sojourns in Sri Lanka and various parts of India […] he settled down in the Kathmandu Valley in Nepal, where he spent roughly the last four decades of his life. […] In Tibet, he was often designated as the 'last pandit' of Indian Buddhism."
  11. (p.393 / 381) "Our multiple-text manuscript was found in Nepal and is kept since the nineteenth century at the Royal Asiatic Society in London (shelf mark Hodgson MS 35)."
  12. (p.393 / 381) "the nineteenth-century Sanskritists Cowell and Eggeling classified this codex erroneously as paper manuscript and as having been written in the end of the eighteenth century. It was Harunaga Isaacson who has drawn attention to this manuscript and its importance. He labels it as 'a unique treasure', points out that the writing support is palm leaf rather than paper and that there are reasons to assume that it is the autograph of the Tantric Buddhist master Vanaratna" + "the manuscript most probably has been written between 1426 (the date of Vanaratna's first visit to Tibet) and 1468 CE (the year of Vanaratna's death) rather than in the late eighteenth century"
  13. (p.394 / 382, physical description) "The palm leaves measure 12 × 2 inch, which results in the typical oblong format of this writing support. The texts are written with black carbon-based ink. Except for the last two folios, each page contains 10 lines of text. They are written in scriptio continua from left to right and parallel to the oblong sides of the leaves. […] In lines 4 to 7 of each page a square is cleared for the binding holes. The latter enabled the users to string the palm leaves together."
  14. (p.394 / 382) "New texts begin without the insertion of a line break or page break, as it was usual in North-East Indian and Nepalese palm-leaf manuscripts. The texts are only separated from each other by text colophons, which are highlighted by various kinds of section markers and empty spaces amounting to the breadth of some letters. The manuscript is not preserved completely. The number of extant folios amounts to 62."
  15. (p.387–388 / 375–376, บทนำ section โดย Wilden) "Two are from the Indian subcontinent, one from the North, in fourteenth-century Sanskrit, the other, in late eighteenth-century Tamil, from the South." + "In short, processes of adaptation may reflect general developments in social, political, legal and cultural history. Needless to say at the other end of the spectrum of reasons for change there are simply differences in material culture (e.g., different writing supports etc.), which affect not only the transmission of texts in general but the practices of teaching and learning in particular."
- **ประเด็นที่ map:**
  - **[ch8]** ใบลานสยามเก่าสุดที่พบ = 1615; แบ่งงานวัสดุ: ใบลาน = พุทธ (บาลี/ไทย), สมุดข่อย = ฆราวาส/โลกิยะ (quote 1, 2) — เสริม S-452 ได้พอดี
  - **[ch8]** ระบบการศึกษาของใบลาน: interlinear gloss = ร่องรอยการสอน-อ่าน (corrections + glosses), ไม่มีธรรมเนียมแต่งแยกความเรียงอธิบายภาษาไทยจน 19 ต้น (quote 3–5)
  - **[ch8]** ทมิฬ: 20 ใบลาน multiple-text เป็น "material realisation ของ syllabus" (Naṉṉūl + Akapporuḷviḷakkam + …); UVSL 438 = ชุดเดียวที่ครบ 3 ส่วน (quote 6–8) — รูปธรรมของ "manuscript culture แบบการศึกษา" ตามนิยาม S-454
  - **[ch9]** กรณีเตือนใจการอ่านวัสดุ: Hodgson MS 35 ถูก Cowell–Eggeling (1876) จัดผิดเป็น "กระดาษ, ปลาย 18" จน Isaacson พิสูจน์ว่าเป็น**ใบลาน** + autograph ของ Vanaratna + อายุ 1426–1468 (quote 11–12)
  - **[pothi]** รายละเอียดรูปเล่มใบลานครบชุด: 12 × 2 inch, หมึกคาร์บอน, 10 บรรทัด, scriptio continua, "ลบสี่เหลี่ยมให้รูเชือกในบรรทัด 4–7" (แบบที่เห็นในแคตตาล็อก Śāstrī S-430 เช่นกัน) (quote 13–14)
  - **[เนปาล]** Vanaratna ("last pandit") ย้ายจาก Chittagong → หุบเขากาฐมาณฑุ 40 ปีสุดท้าย = สะพานคัมภีร์อินเดียตอนปลาย → เนปาล ตรงธีม India-Nepal ของโปรเจกต์ (quote 10)

---

# สรุปข้อค้นพบข้ามชิ้น (5 ประเด็น)

1. **C-14 กับคัมภีร์มีสามระดับการใช้ที่เก็บได้ครบในชุดนี้:** (ก) ยืนยัน/แก้ colophon (Tehran: 7/9 ใบตรง philology, 1 พิสูจน์ปลอม, 2 จับใบแทรก) — S-453; (ข) กำหนดหน้าต่างเมื่อไม่มี colophon (Mardzong 13–15 ศตวรรษ, Gandhāra scrolls 1 ศตวรรษ BCE–2 CE) — S-450, S-454; (ค) ข้อจำกัดที่ต้องเขียนไว้เวลาถก Bakhshali: ความคลาดเคลื่อน 50–300 ปี, plateau ของเส้นโค้ง calibration, และ C-14 วัดวัสดุเขียน (writing surface) ไม่ใช่เวลาการเขียน — S-450/23 + S-453/307, 319
2. **เส้นเวลาใบลานมีสองปลายที่คัมภีร์ยืนยันตรงกัน:** paper เริ่มแทนใบลานในอินเดีย ~ ค.ศ. 12 (Jaina libraries, Wujastyk S-454/167) — ใบลานภูมิภาค Himalaya/Tibet หมดบทบาท ~ ค.ศ. 15 (Mardzong S-450/171) — สยามเริ่มเห็นใบลานที่จับอายุได้ตั้งแต่ 1615 (Panarut S-457/216) = ใบลาน "ขยับลงใต้" ตามทิศทางประวัติศาสตร์กระดาษ
3. **คำนิยาม manuscript culture (Quenzer) ใช้เรียงการ์ดทั้งหมดได้:** ทุกชิ้นคือ milieu การ produce–use–transmit แบบเฉพาะ: ถ้ำ Mustang (ฝังเพราะศรัทธา), colophon สยาม (สร้างบุญ 5,000 ปี), ทมิฬ multiple-text (syllabus เป็นรูปธรรม), คู่มือ INTACH (การถ่ายทอด skill เตรียมใบลานที่ยังมีชีวิต) — S-454/1–2 เป็นกรอบแม่บท
4. **รูปเล่ม pothī ข้ามวัสดุ:** จุดหัวป่าทั้งชุด — Mardzong: dpe cha จำลอง "Indian prototype made out of palm leaves" (S-450/25); Vanaratna Codex: ใบลาน 12 × 2 นิ้ว รูเชือกสี่เหลี่ยมในบรรทัด 4–7 (S-457/382); Śāstrī (S-430, Phase A): "22×2 inches … divided into three parts by two holes" — สามแหล่งบอกเรื่องเดียวกัน: มาตรฐานเชือกร้อยใบจากอินเดียถึงเนปาล/ทิเบต/สยาม
5. **การสูญเสียเป็นตัวแปรอธิบาย corpus:** "several hundred Sanskrit mss สูญทุกสัปดาห์" (Wujastyk S-454/162), มรสุม = เหตุให้เก่าสุดรอดอยู่เอเชียกลางแห้ง (S-454/161) กับ Himalaya เย็น-แห้ง-ปลอดเชื้อช่วยรอด (Skumanov S-450/197) — ประเด็นอนุรักษ์จึงไม่ใช่ภาคผนวกแต่เป็นเงื่อนไขของฐานข้อมูลทั้งเล่ม; ปิดท้ายด้วยการวางแผนอนุรักษ์แบบชุมชน (S-450/198 "refrain from imposing western standards") และคู่มือ INTACH (S-455) เป็นเครื่องมือที่ส่งต่อได้

# สิ่งใหม่ที่ Phase A ไม่มี

- **ข้อมูลเนปาล/ฮิมาลัยฝั่งใหม่:** Mardzong (Mustang, Bon) = ครั้งแรกที่ชุดงานมีหลักฐานฝังคัมภีร์ในถ้ำนอกหอคัมภีร์กลางเมือง + ตัวเลข folio นับจริง 5,095 ที่ Choede monastery; Vanaratna Codex = ใบลาน Old Bengali ที่พบในเนปาล (Hodgson MS 35) เสริมมุม "India→Nepal" ที่ Phase A (Śāstrī/NGMPP) ยังไม่มี
- **มิติสยาม/ไทยโดยตรง:** colophon Milindapañha (NL5008 1686 ฯลฯ, Khom Thai, ใบลาน National Library of Thailand) + กฎใบลาน-สมุดข่อย (พุทธ/ฆราวาส) + ใบลานสยามเก่าสุด 1615 — Phase A ไม่มีการ์ดไทยเลย
- **แม่แบบวิธีวิทยา C-14 แบบละเอียด** (ABA, MICADAS, OxCal/IntCal20, ช่วง 95.4%, การจับใบแทรก) พร้อมชุดทดสอบเทียบ colophon 9 ใบ — ใช้เป็น template ถก Bakhshali
- **แทร็ก digital/CV ของใบลาน SEA** (corpus 90 หน้า/377 เส้น; binarization ล้มเหลว; 6 วิธี segmentation) — มุมที่ Phase A (มุม philology-codicology) ยังว่าง
- **คู่มืออนุรักษ์ใบลานเชิงปฏิบัติ (INTACH 2001)**: สูตรเตรียมใบลาน (รมควัน/ต้มแกลบ/ฝังโคลน) + มาตรฐานสิ่งแวดล้อม (40 lux, RH 45–55 โดยปริยาย, AC 24/365) + ธรรมเนียม neem/ผ้า cotton — หาได้ยาก, เป็น voice ของ conservator ที่เล่มวิชาการไม่มี
- **ตัวเลขสถิติ corpus ระดับภูมิภาค:** NMM 7 ล้าน / Pingree 30 ล้าน / สำรวจ 650,000 ใน 35,000 แหล่ง (Orissa-Bihar-UP) — Phase A มีเฉพาะตัวเลขรายคลัง (Durbar 16,000)

# สิ่งที่ต้องตามต่อ (GAP สำหรับรอบถัดไป)

1. **Franco, Spitzer Vol. I (2000)** — physical description, palaeography, การกำหนดอายุ (เป้าหมายเดิมของ S-451 ยังไม่สำเร็จ; Vol. II ในมือมีแต่ concordance + edition)
2. **Miniaturen_mittelalterlicher_Kalpasutra.pdf** — image-PDF ข้ามตามคำสั่ง; ต้องอ่านภาพภายหลัง (แนวทางเดียวกับ S-430)
3. **Melzer (Gilgit palaeography, S-454 หน้า 227–274)** และ Helman-Ważny (Tibetan mss, หน้า 275–298) ในเล่ม Manuscript Cultures — ยังไม่ได้สกัดละเอียด (รอบนี้เอา Wujastyk + Baums + บทนำพอตามขอบเขต)
4. หมายเหตุ [sic] ที่เก็บไว้: S-455 "taiipot", "Srilanka", "incharge", "alongwith", "atleast"; S-454 "principle writing supports" — ทั้งหมดตามต้นฉบับพิมพ์/text layer ห้ามแก้เวลา quote
