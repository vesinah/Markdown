# Findings — Nepal Catalogues & Related Harvest (S-430 … S-434)

วันที่: 2026-09-01 | ภารกิจ: สกัด quote จากไฟล์ PDF 5 ชิ้น (palmleaf_india_nepal) | Sub-agent: The Worker

**ไฟล์ต้นทาง + extract:**
1. `PDF\HaraprasadShastri_nepalDurbarV-2_1915_text.pdf` (348 หน้า) → `pdf-harvest\extracts\shastri_v2.txt` + ภาพหน้าที่อ่านเอง → `pdf-harvest\pages_shastri\pNNN.png`
2. `PDF\A Concordance of H. P. Śāstrīs Catalogue of The Durbar Library and the Microfilms of the Nepal-German Manuscript Preservation… (1991)….pdf` (2 หน้า) → `pdf-harvest\extracts\grunendahl_concordance.txt`
3. `PDF\39_385.pdf` (5 หน้า) → `pdf-harvest\extracts\tanaka_ngmpp.txt`
4. `PDF\crai_0065-0536_1931_num_75_3_76087.pdf` (3 หน้า = ปก Persée + ตัวบท 2 หน้า) → `pdf-harvest\extracts\hackin_gilgit.txt`
5. `PDF\befeo_0336-1519_1992_num_79_1_1813.pdf` (13 หน้า) → `pdf-harvest\extracts\chevillard_befeo.txt`

**ระเบียบการ quote:**
- เลขหน้าอ้าง = เลขจาก marker `--- Page N of M ---` ของไฟล์ extract; เลขหน้าพิมพ์ (จาก header/footer ของหน้านั้น) ใส่กำกับหลัง "/"
- S-430 **เป็นกรณีพิเศษ**: text layer ทั้งเล่มเป็น OCR ขยะ (สคริปต์รายงาน "PASS" เป็น false positive — ไม่มีคำอังกฤษจริงแม้แต่คำเดียว ทุกหน้าเป็นอักษรเทวนาคารี/ตัวเลขปนกัน) → quote ทั้งหมดเป็น **การถอดคำจากภาพหน้า (150 dpi, เก็บที่ `pages_shastri\`)** ถอดตามที่เห็น ห้ามเติมคำ
- แก้ไขจาก text layer เฉพาะ: (a) de-hyphenation, (b) คืนอักขระ OCR เพี้ยนที่ชัดเจน เช่น "Griinendahl"→"Grünendahl", "Brhatsucipattra"→"Bṛhatsūcīpatra", "Ye dharmS"→"Ye dharmā", "daus"→"dans"; ส่วน "Ces document ont" (Hackin) เก็บ [sic] ตามต้นฉบับพิมพ์
- Chevillard (FR): ยกภาษาฝรั่งเศสเดิม verbatim + คำแปลไทยกำกับ

**Cross-ref กับระเบียนเดิมใน source-index (ไม่แก้ไฟล์กลาง):** S-430 = S-275 (เดิมระงับ: CORRUPT 1 หน้า — ตอนนี้มีสำเนา 348 หน้า), S-431 = S-1991-grunendahl-14, S-432 = S-1990-tanaka-13, S-433 = S-133 = S-1931-hackin-101, S-434 = S-156

---

## S-430 | EN (รายการเป็นสันสกฤต + คำ Newari) | primary (scanned printed catalogue)
- **Bibliography:** Śāstrī, Hara Prasad (Mahāmahopādhyāya). *A Catalogue of Palm-Leaf & Selected Paper MSS. Belonging to the Durbar Library, Nepal. Vol. II.* Calcutta: Baptist Mission Press, 1915. (พิมพ์รวมใหม่ใน: Grünendahl (ed.), *A Catalogue of Palm-Leaf and Selected Paper MSS…, Vol. I and II*, VOHD Supplementband 31, Stuttgart 1989 — ดู S-431)
- **DOI/ISBN:** — (สแกนหนังสือปี 1915)
- **URL:** https://archive.org/details/haraprasad-shastri-nepal-durbar-v-2-1915
- **Local Path:** `PDF\HaraprasadShastri_nepalDurbarV-2_1915_text.pdf` | extract: `pdf-harvest\extracts\shastri_v2.txt` | ภาพ: `pdf-harvest\pages_shastri\`
- **PDF health:** สคริปต์รายงาน PASS (348 pp, avg 1,129.8 chars/page, empty 18/348) **แต่เป็น false positive** — text layer เป็น OCR ขยะทั้งเล่ม → ควรปรับสถานะเป็น "image-only, ต้องอ่านภาพ/OCR ทางเลือก" ตาม PDF Health Check Protocol (quote ทั้งหมดด้านล่างถอดจากภาพ 150 dpi)
- **Quotes verbatim (ถอดจากภาพหน้า; N = marker page):**
  1. (p.14 / Preface หน้า i) "The librarian, Subbā Visṇu-prasāda Rāja-bhāṇḍāri took a warm interest in our work and not only placed all the manuscripts in the Darbar Library, sixteen thousand in number, at our disposal, but often brought ancient palm-leaf manuscripts from private collections for our examination."
  2. (p.14 / Preface i) "At the library, we spent our time in examining the ancient palm-leaf manuscripts mainly, some of which were written in transitional Gupta, ancient Newari, ancient Bengali and other ancient characters."
  3. (p.15 / Preface ii) "Our readers will find in this catalogue some manuscripts with English notes in the body of the catalogue, but in other cases the English notes are given in the preface."
  4. (p.44 / Preface xxxi) "The oldest Smṛti work in this catalogue is entitled Yogīśvarasaṁgraha-Padmanābhasaṁgraha, pp. 19 and 90. The manuscript in p. 19 is dated 366th year of the Newar era, i.e. A.D. 1246."
  5. (p.45 / Preface xxxii) "The manuscript is written in Nāgarī and dated in the Saṁvat era and not in Nepāla Saṁvat. The date is Saṁvat 1283, i.e. A.D. 1176. This is the oldest manuscript of Lakṣmīdhara's work as yet known."
  6. (p.61 / หน้าพิมพ์ 22 — ตัวอย่างรูปแบบรายการ 2 รายการติดกัน) "III. 359 J. [दशमस्कन्धः]. 22×2 inches. Folia, 41, divided into three parts by two holes. Lines, 6 on a page. Extent in ślokas, 1100. Character, old Newārī. Date? Appearance, old. Prose. Correct." + "III. 360 A. [चतुःपीठालोक]. 11×2 inches. Folia 45, with two holes. Lines, 7 on a page. Extent in ślokas, 900. Character, old Newārī. Date N.S. 132=1012 A.D. Appearance, old. Prose. Incorrect. Complete." + "The leaves are marked with letter numerals. It begins on the 45th leaf and ends on Leaf 1. It seems to be a commentary on Catuḥpīṭha Tantra which perhaps exists in Cambridge. See Bendall Catalogue, page 197."
  7. (p.101 / หน้าพิมพ์ ~62) "III. 365 F. [सप्तकुमारिकावदाना] … 12 × 2 inches. Folia, 62 (1st six leaves and 38th 42nd are missing) pierced by a hole towards the left. Lines, 5 on a page. Extent in ślokas, 900. Date N.S. 508 = 1388 A.D. Character, Newārī. Appearance, old. Prose. Incorrect." (รายการเดียวกันยืนยันบรรทัด "It is a commentary on Saptakumārikāvadāna, for which see Dr. Rajendra Lal's Catalogue, p. 221"; รายการคู่ III. 365 E บนหน้าเดียวกันระบุ "Dated La.Saṁ 208. Character, Maithilī" = ใช้ศก Laukika ไม่ใช่ N.S.)
  8. (p.201 / หน้าพิมพ์ ~162) "III. 271. [कुलचूडामणि]. 11×5 inches. Folia, 160. Lines, 10 on a page. Ślokas, 3500. Date, Śaka 1488 = 1566 A.D. Character, Nāgarī. Appearance, old. Verse. Correct." + "The work has 56 paṭalās. It has been noticed in the preface to my Nepal Catalogue, LXXXI."
- **ประเด็นที่ map:**
  - **[ch8]** สถิติบัญชีใหม่: รอบสำรวจ 1907 Durbar Library มี MSS **16,000 เล่ม** (quote 1) — เทียบ Vol I (1905) ~5,000 / 101 bundles / 448 palm-leaf (S-273) → ตัวเลขขยาย 3 เท่าใน 2 ปี สะท้อนการกว้านเพิ่มจาก private collections (librarian นำใบลานโบราณมาให้ดูเพิ่มเรื่อย ๆ)
  - **[ch9]** อักษรโบราณที่พบ: transitional Gupta, ancient Newari, ancient Bengali (quote 2) = ชุดหลักฐาน "in situ survival" ใบลานเนปาลกว่า 700 ปี
  - **[ch8]** โครงสร้างแคตตาล็อก: Preface (i–xxxv+ ใช้ survey แยกหมวด: BUDDHIST TANTRAS / BRAHMANIC POETRY / SMṚTI / MISCELLANEOUS) + ตัวรายการใช้เลขทะเบียน "III. 359 J / 360 A / 365 F / 271" (โรมัน + เลข + ตัวอักษรย่อย) ซึ่ง**ไม่เรียงตามลำดับหน้า** (= เลขทะเบียน National Archives ไม่ใช่ลำดับการจัดเรียง — สอดคล้องกับคำชี้ของรีวิว S-431 ว่า "not always systematic … often referred to in two places, but without cross-references")
  - **[ch8]** ฟิลด์มาตรฐานต่อรายการ (quote 6–8): ขนาด (นิ้ว) / Folia (+ รูเจาะ/หาย) / บรรทัดต่อหน้า / จำนวน śloka / Character (old Newārī, Newārī, Maithilī, Nāgarī) / Date / Appearance (old/fresh) / Prose–Verse / Correct–Incorrect / Complete–Defective = เกือบ schema ฐานข้อมูล สมัย 1915
  - **[ch9]** ตัวอย่าง in-leaf dating: **N.S. 132 = 1012 A.D.** (Catuḥpīṭhāloka; ใบเรียง "letter numerals", เริ่มใบที่ 45 จบใบที่ 1 = ลำดับ pothī กลับหลัง), **N.S. 508 = 1388 A.D.** (Saptakumārikāvadānā), Smṛti เก่าสุด **น.ส. 366 = ค.ศ. 1246**; วินัยแยกศัพท์ปฏิทิน: **Saṁvat 1283 = 1176 A.D. ชัดว่า "not in Nepāla Saṁvat"** + มี Śaka 1488 = 1566 A.D. และ La.Saṁ 208 ปนอยู่ = ต้องระวัง era disambiguation ทุกรายการ

---

## S-431 | EN | secondary (book review — ไม่ใช่ตัว concordance)
- **Bibliography (ของไฟล์จริง):** Gellner, David N. (rev.), รีวิวของ: Grünendahl, Reinhold (ed.). *A Concordance of H. P. Śāstrī's Catalogue of the Durbar Library and the Microfilms of the Nepal-German Manuscript Preservation Project / A Catalogue of Palm-Leaf and Selected Paper MSS Belonging to the Durbar Library, Nepal, Vol. I and II, by Hara Prasad Śāstrī.* VOHD Supplementband 31, Publications of the NGMPP 1. Stuttgart: Franz Steiner Verlag Wiesbaden GmbH, 1989. pp. cxxxiii, 771. — รีวิวพิมพ์ในหมวด "Reviews of Books", Journal of the Royal Asiatic Society, 1991, pp. 444–445
- **DOI/ISBN:** DOI รีวิว: 10.1017/S1356186300001553
- **URL:** https://doi.org/10.1017/S1356186300001553
- **Local Path:** `PDF\A Concordance of H. P. Śāstrīs Catalogue of The Durbar Library and the Microfilms of the Nepal-German Manuscript Preservation… (1991)….pdf` | extract: `pdf-harvest\extracts\grunendahl_concordance.txt`
- **PDF health:** PASS (2 pp, avg 3,729.5 chars/page) — **คำเตือนสำคัญ: ไฟล์นี้ไม่ใช่เล่ม concordance ของ Grünendahl แต่เป็น book review 2 หน้าโดย Gellner เท่านั้น** — ตัวเล่มเต็ม (VOHD Suppl.bd 31, 1989, pp. cxxxiii + 771) ยังไม่มีในโปรเจกต์ → ต้องหาต่อ Phase B ถ้าต้องใช้ตัว concordance จริง
- **Quotes verbatim:**
  1. (p.1 / 444) "Not every single manuscript in the National Archives has been microfilmed by the NGMPP, and the National Archives' manuscripts are only a small part of the enormous number of manuscripts microfilmed by the NGMPP."
  2. (p.2 / 445) "Sastri's catalogue offers detailed descriptions of many of these manuscripts but it is not always systematic. Manuscripts are often referred to in two places, but without cross-references. Reinhold Grünendahl's concordance remedies all that by listing all the manuscripts described by Sastri and giving cross-references to the numbers by the National Archives, page references in the National Archives' own multi-volumed catalogue, the Bṛhatsūcīpatra, reel numbers used on the NGMPP's microfilms, as well as other citations by Sastri himself." (text layer: "Griinendahl", "Brhatsucipattra" — คืนรูปตามระเบียบ)
  3. (p.2 / 445) "An appendix lists all the manuscripts mentioned in Sastri's article 'New Manuscripts in Nepal' and where to find them in the catalogue. An index lists the Archives' own running numbers in order with cross-references."
  4. (p.2 / 445) "It will be a long time before there is a descriptive catalogue of the entire microfilm collection of the NGMPP (over 100,000 items). In the meantime this volume covering around 850 important manuscripts will be an indispensable guide."
- **ประเด็นที่ map:**
  - **[ch8]** การจับคู่ Śāstrī ↔ NGMPP: concordance ทำ 4 ทาง = เลข NA / หน้าใน Bṛhatsūcīpatra / **reel number NGMPP** / การอ้างอื่นของ Śāstrī + appendix "New Manuscripts in Nepal" + index เลขรัน NA — ครอบคลุม **~850 รายการ** เทียบคลังฟิล์มทั้งหมด **>100,000 items** (quote 4)
  - **[ch8]** สถานะคอลเลกชัน NA: "biggest and most important such collection so microfilmed" (p.2 / 445 — ประโยคต่อเนื่องจาก quote 1) และยังมี MSS ใน NA ที่ NGMPP ไม่ได้ถ่าย (quote 1)
  - **[ch9]** เล่มรวมยังพิมพ์บทความ Bendall "The history of Nepal and surrounding kingdoms (1000-1600 A.D.)" (JASB 1903) เป็น "Historical Introduction" — ผู้รีวิวย้ำว่า Bendall เป็นผู้ประกาศการค้น **Gopālarājavaṃśāvalī** — โยงกับ S-274 (Historical Introduction ฉบับ Vol I) ที่ harvest ไว้แล้ว

---

## S-432 | JA (ศัพท์ EN แทรก) | secondary (article, JIBS)
- **Bibliography:** 田中公明 (Tanaka, Kimiaki). "ネパールのサンスクリット語仏教文献研究(1) — 写本保存プロジェクトと研究の現状" [การศึกษาวรรณกรรมพุทธสันสกฤตในเนปาล (1): โครงการอนุรักษ์ต้นฉบับและสถานการณ์การวิจัยปัจจุบัน]. *印度學佛教學研究* (Journal of Indian and Buddhist Studies) 39(1): (385)–(381), 平成2年12月 [ธ.ค. 1990]
- **DOI/ISBN:** DOI 10.4259/ibk.39.385 (ตามระเบียน S-1990-tanaka-13)
- **URL:** https://www.jstage.jst.go.jp/article/ibk1952/39/1/39_1_385/_pdf
- **Local Path:** `PDF\39_385.pdf` | extract: `pdf-harvest\extracts\tanaka_ngmpp.txt`
- **PDF health:** PASS (5 pp, avg 1,150.6 chars/page) — เต็มบทความ; หมายเหตุ: JIBS เรียงหน้าถอยหลัง footer "-385-" (PDF p.1) → "-381-" (PDF p.5)
- **Quotes verbatim (JA):**
  1. (p.1 / 385) "NGMPPはネパール政府考古局とドイツ東方学会 German Oriental Society の共同事業で, ネパールの貴重な古写本を, マイクロフィルムの形で保存することを目的としている。撮影されたフィルムはネガ・ポジ各1揃いが National Archives に保管され, ポジ1揃いはベルリンの国立プロイセン文化財団図書館に送られている。" (แปล: NGMPP เป็นงานร่วมระหว่างกรมโบราณคดีเนปาลกับ German Oriental Society เพื่ออนุรักษ์ต้นฉบับโบราณล้ำค่าของเนปาลในรูปไมโครฟิล์ม; ฟิล์มเนกาทิฟ+โพซิทิฟอย่างละชุดเก็บที่ National Archives โพซิทิฟอีกชุดส่งห้องสมุดมูลนิธิวัฒนธรรมปรัสเซียแห่งชาติ กรุงเบอร์ลิน)
  2. (p.2 / 384) "計画は1970年に開始され, 第1次5ケ年計画(1970-75)で National Archives 所蔵の写本, 都合27302文献を撮影した。これが現在Reel No. A, Bとして保存されるフィルムである。" (แปล: แผนเริ่ม 1970; แผน 5 ปีที่ 1 (1970–75) ถ่าย MSS ของ National Archives รวม **27,302 รายการ** — คือฟิล์ม Reel No. A, B ปัจจุบัน)
  3. (p.2 / 384) "続いて第2次5ケ年計画 (1975-79) では, 範囲がバグマティ Bagmati 県内の総ての公共図書館と個人コレクションに拡大され, 総計38438文献が撮影された。" (แปล: แผนที่ 2 (1975–79) ขยายถึงห้องสมุดสาธารณะ+คอลเลกชันเอกชนทั่วแขวง Bagmati รวม **38,438 รายการ**; หน้าเดียวกัน: แผนที่ 3 (1980–85) ถ่ายสันสกฤตเพิ่มอีก 2,265 รายการ จาก Kaskikot (1982) / Gorkha (1983) / Janakpur (1984/85) / Rajbiraj (1986/87))
  4. (p.3 / 383) "この図書館は Kansakar 氏のコレクションに, 数名のコレクターの蔵書を加え, 現在約6000冊 (うち Palm leaf は約1000冊) の写本を保有している。" (แปล: ห้องสมุดเอกชน Asha Saphu Kuthi มี MSS ~6,000 เล่ม **ในนั้นเป็นใบลาน ~1,000 เล่ม**)
  5. (p.5 / 381) "やはり最大の問題点は, カタログ・カードの不備である。National Archives の写本に関しては, Shastri 以来, 多くのカタログが編集されたが, これらに記載される写本が, NGMPPのどの Reel の何番目に収められているのか分からない場合が多い。" (แปล: ปัญหาใหญ่สุดคือบัตรแคตตาล็อกไม่สมบูรณ์ — MSS ที่ปรากฏในแคตตาล็อกตั้งแต่ยุค Shastri มักระบุไม่ได้ว่าอยู่ Reel ไหน ลำดับที่เท่าไรใน NGMPP) + ท้ายบท "一例を挙げるとIASWRが撮影したManjuvajramukhakhyanaは, NGMPPの撮影網にはついにかからなかった" (แปล: เช่น Mañjuvajramukhākhyāna ที่ IASWR ถ่ายเอง ไม่เคยเข้าเครือข่ายการถ่ายของ NGMPP เลย)
- **ประเด็นที่ map:**
  - **[ch8]** สถิติถ่ายภาพรายช่วง (A/B = 27,302; Bagmati = 38,438; ภูมิภาค = 2,265) + ผัง Reel letter: A/B = NA, **C = Kaisar Library**, T = Tribhuvan Univ., E = คอลเลกชันเอกชนกาฐมาณฑุ — กุญแจ decode เพื่อ cross-ref S-430 ↔ NGMPP
  - **[ch8]** คลังใบลานเอกชนที่ยังมีชีวิต: Asha Saphu Kuthi ~6,000 / ใบลาน ~1,000 (quote 4) + ระบบ IASWR microfiche ที่ถ่ายใบลานบางเล่มที่ NGMPP ข้ามไป (p.4 / 382)
  - **[ch9]** ข้อจำกัดคุณภาพ NGMPP รายงานสดปี 1990: บัตรไม่ตรงฟิล์ม, title ผิดจำนวนมาก (ฝ่ายพุทธไม่มี pandit เฟ้น title), Thyasaphu (สมุดพับ) คุณภาพต่ำถูกถ่ายล้นเพราะจ่ายเหมา per folio, MSS สำคัญหลุดจากเครือข่าย (quote 5) = ข้อควรระวังเวลาใช้ตัวเลข NGMPP เป็น "บัญชีสมบูรณ์"

---

## S-433 | FR | primary (compte rendu รายงานสดการค้น Gilgit)
- **Bibliography:** Hackin, Joseph. "Les manuscrits découverts près de Gilgit." *Comptes rendus des séances de l'Académie des Inscriptions et Belles-Lettres* 75ᵉ année, N° 3: 276–277 (1931) — โน้ตของ Hackin (ภัณฑารักษ์ Musée Guimet) อ่านโดย Alfred Foucher ในประชุม 18 ก.ย. 1931
- **DOI/ISBN:** DOI: 10.3406/crai.1931.76087
- **URL:** https://www.persee.fr/doc/crai_0065-0536_1931_num_75_3_76087
- **Local Path:** `PDF\crai_0065-0536_1931_num_75_3_76087.pdf` | extract: `pdf-harvest\extracts\hackin_gilgit.txt`
- **PDF health:** PASS (3 pp รวมปก Persée; ตัวบทจริง 2 หน้า 276–277 — ครบตามต้นพิมพ์ บทความสั้นนี้ไม่มีส่วนหาย)
- **Quotes verbatim (FR):**
  1. (p.2 / 276) "Le lieu de la découverte se situe à trois milles au Nord de Gilgit, dans la zone montueuse qui se trouve à proximité de la rive droite de la rivière. […] L'effondrement du dôme du plus grand des Stupa (C) a rendu possible la découverte purement fortuite, par un jeune berger, des nombreux manuscrits déposés dans la chambre ménagée à l'intérieur de ce dôme." (แปล: จุดค้นพบอยู่เหนือกิลกิต 3 ไมล์ บนเนินใกล้ฝั่งขวาของแม่น้ำ; โดมสถูปใหญ่สุด (C) พังลง ทำให้เด็กเลี้ยงแกะพบโดยบังเอิญซึ่งต้นฉบับจำนวนมากที่วางไว้ในห้องภายในโดม)
  2. (p.2 / 276) "Le double soubassement carré du Stupa principal (C) mesure 6 m. 60 de côté à sa base; la seconde terrasse est en retrait de 0 m. 60 par rapport à la première. La hauteur totale de ce stupa pouvait atteindre de 12 à 15 m. La paroi de la chambre intérieure a 1 m. 80 d'épaisseur. Le diamètre de la chambre est de 2 m. 40." (แปล: ฐานสี่เหลี่ยมซ้อนของสถูป C ด้านละ 6.60 ม.; สูงเดิม 12–15 ม.; ผนังห้องในหนา 1.80 ม.; ห้องกว้าง 2.40 ม.; กลางห้องมีเสาไม้ 5 ต้นวางขัดสลับ เสากลางทะลุถึง harmikā เป็นที่รองรับฉัตร)
  3. (p.3 / 277) "Il nous a été donné d'examiner plusieurs liasses absolument intactes de manuscrits sur écorce de bouleau (de beaucoup les plus nombreux) et, fait important à noter, sur papier, comprenant de cinquante à cent trente feuillets de dimensions variables" (แปล: ได้ตรวจมัดต้นฉบับสมบูรณ์ไม่เสียหายหลายมัด เขียนบนเปลือกเบิร์ช (มากที่สุดอย่างชัดเจน) และของสำคัญ — บนกระดาษ ประกอบด้วย 50 ถึง 130 ใบ หลากมิติ เช่น 0.20×0.065 ม. ถึง 0.66×0.12 ม.)
  4. (p.3 / 277) "Nous avons eu l'occasion de relever au cours d'un examen superficiel de ces manuscrits (22 juillet 1931) cinq types différents d'écritures. La langue de ces manuscrits nous paraît être, dans certains cas, différente du sanskrit." + "Ces document ont été examinés par Sir Aurel Stein en juin 1930. [sic]" (แปล: จากการสำรวจเบื้องต้น 22 ก.ค. 1931 พบอักษรต่างกัน 5 แบบ; บางกรณีภาษาดูไม่ใช่สันสกฤต; เอกสารถูก Stein ตรวจแล้ว มิ.ย. 1930 — ปีขัดกับการค้นพบ 1931 เป็นความผิดพลาดของต้นฉบับพิมพ์เอง)
- **ประเด็นที่ map:**
  - **[ch5]** โครงสร้าง "ห้องเก็บ" ในสถูป: ห้องกลม 2.40 ม. / ผนัง 1.80 ม. / เสาไม้ 5 ต้นรองรับฉัตร (quote 2) = คู่ขนาน Gilgit "library tower" ของ von Hinüber (S-410) ต่างจาก jar-burial แบบคันธาระ
  - **[ch5]** วัสดุผสมในคลังเดียว: เบิร์ชเป็นหลัก + **กระดาษ** 50–130 ใบ/เล่ม (quote 3) + แผ่นดินเหนียวปั๊มจาร Ye dharmā (p.2 / 276) — Gilgit 1931 จึงไม่ใช่ชุดใบลาน
  - **[ch5]** จุดตั้งต้นงาน codicology: อักษร 5 แบบ / บางเล่มภาษาไม่ใช่สันสกฤต (quote 4) + สถูป A และ B ยังไม่ถูกขุด (p.3 / 277 "les chambres des stûpa A et B sont encore intactes") + MSS ทั้งหมดยังอยู่กับ Vazir Wazarat ที่กิลกิต (p.2 / 276) = สถานะเริ่มต้นของวัตถุก่อนกระจายสู่ Delhi/Srinagar

---

## S-434 | FR | secondary (article, BEFEO)
- **Bibliography:** Chevillard, Jean-Luc. "Beschi, grammairien du tamoul, et l'origine de la notion de verbe appellatif." *Bulletin de l'École française d'Extrême-Orient* 79(1): 77–88 (1992)
- **DOI/ISBN:** DOI: 10.3406/befeo.1992.1813
- **URL:** https://www.persee.fr/doc/befeo_0336-1519_1992_num_79_1_1813
- **Local Path:** `PDF\befeo_0336-1519_1992_num_79_1_1813.pdf` | extract: `pdf-harvest\extracts\chevillard_befeo.txt`
- **PDF health:** PASS (13 pp, avg 2,650.7 chars/page; หน้า 1 = หน้า Persée ตัวบท pp. 77–88 ครบ)
- **Quotes verbatim (FR + คำแปลไทย):**
  1. (p.2 / 77) "Au cours des presque trente-six années qu'il a passées dans le Sud de l'Inde, C.J. Beschi (1680-1747) a joué un rôle de trait d'union entre les traditions grammaticales européennes et tamoules." (แปล: ตลอดเกือบ 36 ปีที่เบสกี (1680–1747) อยู่ในอินเดียใต้ เขาเป็นสะพานเชื่อมระหว่างประเพณีไวยากรณ์ยุโรปกับทมิฬ)
  2. (p.10 / 85) "les grammaires tamoules lui fournissaient une liste canonique de quatre parties du discours : peyarc col « noms », vinaic col « verbes », itaic col « particules », uric col « mots propres »." (แปล: ไวยากรณ์ทมิฬให้รายการอภิไธยมาตรฐาน 4 หมวด: peyarc col นาม / vinaic col กริยา / itaic col อนุกรรมศบท / uric col วจนะพิเศษ; เชิงอรรถ 24 หน้าเดียวกันรวมคำแปล vinaik kurippu: "Verbs by implication" (Balasubramanian) / "verbes signaux", "verbes de notion" (Bloch) / "verbal signs" (Caldwell) / "signum verbi" (Beschi) / "verbe idéel" ของ Chevillard เอง)
  3. (p.5 / 80) "Cependant, nous cherchons vainement dans les textes de Beschi (ou plutôt dans leurs traductions en anglais) l'expression «appellative verbs» qui lui est attribuée par Caldwell (et à sa suite par K. Meenakshisundaram). On ne rencontre que des «appellatives» et des «appellative nouns»." (แปล: หาคำ "appellative verbs" ที่ Caldwell อ้างว่าเป็นของเบสกีในตัวบทของเบสกีไม่พบ — มีแต่ "appellatives" กับ "appellative nouns" เท่านั้น)
- **ประเด็นที่ map:**
  - **[ch8]** หมายเหตุ mapping: บทความเป็นประวัติศาสตร์ไวยากรณ์ทมิฬ (ไม่พูดถึงใบลาน/เนปาลตรง ๆ) — ใช้ได้กับ (a) สายบรรณานุกรมทมิฬ-ละตินของมิชชันนารี (Beschi 1728/1730/ca.1735 → Burnell 1876 → Caldwell 1856/1875) ซึ่งเป็นชั้น "ตำราอ้างอิง/แคตตาล็อก" ต้นทางของ corpus ทมิฬใต้; (b) ศัพท์ taxonomy (uriccol ฯลฯ) ที่แคตตาล็อกใบลานทมิฬสาย Sarasvati Mahal (S-155) ใช้อ้าง
  - **[ch8]** บทเรียนวิธีวิทยาข้ามโดเมน: quote-chain ของ Caldwell อ้าง Beschi **ผ่านคำแปลอังกฤษ ไม่ใช่ต้นฉบับละติน** → กฎ "เช็คภาษาต้นฉบับเสมอ" ใช้กับการ map ศัพท์แคตตาล็อกได้ทันที
  - ข้อมูล ms ที่จับต้องได้: ms. 1728/1730 ของ Beschi เก็บ BnF fonds indien 192–193 (p.3 / 78 n.4) + chronology ครบ 1716–1974 (p.3 / 78) = anchor ตำแหน่งวัตถุที่ Phase A ไม่มี

---

## สรุปข้อค้นพบหลัก 5 ประเด็น (cross-source)

1. **ตัวเลขบัญชี Durbar Library กระโดด ~5,000 → 16,000 ใน 2 ปี (S-430 vs S-273):** Vol I (1905) รายงาน ~5,000 MSS (101 bundles ใบลาน / 448 เล่มใบลาน) แต่ Preface Vol II (1915, สำรวจ 1907) ระบุ **16,000** — ส่วนต่างมาจากการกว้าน private collections (librarian นำใบลานโบราณจากเอกชนมาให้ตรวจตลอด) = คลังก่อตัวเป็น "process" ไม่ใช่ "stock"
2. **Śāstrī 1915 = schema มาตรฐานก่อนยุคฐานข้อมูล แต่เลขรายการไม่เรียงหน้า (S-430 + S-431):** ฟิลด์คงที่ทุกรายการ (ขนาด/folia/บรรทัด/śloka/อักษร/วันที่/สภาพ/ร้อยแก้ว-ร้อยกรอง/ความสมบูรณ์) พร้อม survey หมวดใน Preface; เลข "III. 359 J" ฯลฯ = ทะเบียน NA ที่ไม่เรียงตามลำดับหน้า → Grünendahl 1989 จึงต้องทำ concordance ~850 รายการ เชื่อม Śāstrī ↔ Bṛhatsūcīpatra ↔ NGMPP reel (vs คลังฟิล์ม >100,000)
3. **NGMPP มีตัวเลขชั้นในจากพยานปี 1990 (S-432):** A/B = 27,302 (NA, 1970–75) + Bagmati = 38,438 (1975–79) + ภูมิภาค = 2,265 (1980–87); ผัง Reel letter (A/B = NA, C = Kaisar, T = TU, E = เอกชน) + ข้อจำกัด 4 ข้อ (บัตรพร่อง / title ผิด / ขยะ Thyasaphu เพราะจ่าย per folio / หลุดของสำคัญ เช่น Mañjuvajramukhākhyāna ที่ IASWR ต้องถ่ายเอง) — คลังใบลานเอกชน Asha Saphu Kuthi มีใบลาน ~1,000 จาก ~6,000 เล่ม
4. **Gilgit 1931 = คลังเบิร์ช+กระดาษใน "ห้อง" สถูป ไม่ใช่ใบลาน (S-433):** ห้องกลม 2.40 ม. ผนัง 1.80 ม. เสาไม้ 5 ต้น; อักษร 5 แบบ; บางเล่มภาษาไม่ใช่สันสกฤต; สถูป A/B ยังไม่ขุด — ใช้เป็นตัวตั้งเปรียบเทียบวัสดุ/โครงสร้างคลังต่างเอเชียในบทที่ 5
5. **วินัยศัพท์ปฏิทินคือหัวใจ in-leaf dating (S-430):** ในคลังเดียวปนกัน N.S. (132=1012 CE, 508=1388 CE, 366=1246 CE) / Saṁvat (1283=1176 CE — Śāstrī ระบุชัด "not in Nepāla Saṁvat") / Śaka (1488=1566 CE) / La.Saṁ (208) + ลำดับใบกลับหัว (เริ่มใบ 45 จบใบ 1) → กฎ "ตรวจ era ทุกรายการ" จำเป็นในระบบบัญชีของโปรเจกต์

## สิ่งใหม่ที่ Phase A ไม่มี
1. **Śāstrī Vol II (1915) มีสำเนาใช้งานได้แล้ว** — S-275 เดิมระงับเพราะไฟล์ CORRUPT (1 หน้า 30 chars); ไฟล์นี้ 348 หน้าครบ แต่ **text layer เป็น OCR ขยะทั้งเล่ม** (health "PASS" เป็น false positive) → quote ชุดแรกถอดจากภาพ 8 หน้า (`pages_shastri\`); เหลือ preface iii–xxx และ catalog ~300 หน้าที่ต้องอ่านภาพ/OCR ทางเลือกต่อ
2. **ตัวเลขใหม่ 16,000 MSS** (Vol II Preface) ที่ Vol I (S-273/274) ไม่มี — พร้อมชื่อ librarian Rājabhāṇḍārī ผู้เป็นเจ้าของคลังตัวจริง
3. **รายการใบลานที่ลงวันที่ N.S. อ่านได้จากตัวเล่ม** (N.S. 132=1012, N.S. 508=1388, พร้อมรูปแบบฟิลด์) — Phase A มีแต่รายงานภายนอก
4. **Tanaka 1990 เต็มบทความ** (Phase A ค้าง "รอ harvest") — ได้สถิติ NGMPP รายแผน 5 ปี + ผัง Reel letter + ข้อจำกัด 4 ข้อ
5. **Chevillard 1992 BEFEO เต็ม PDF 13 หน้า** (Phase A ได้แค่ abstract เพราะ Persée บล็อก altcha) — quote FR เต็ม + BnF fonds indien 192–193
6. **ประเด็น mapping แก้ไข:** ไฟล์ "A Concordance of H. P. Śāstrī…" **ไม่ใช่ตัว concordance** — เป็นรีวิวของ Gellner (JRS 1991, 2 หน้า) รีวิวเล่ม VOHD Suppl.bd 31 (Stuttgart 1989, pp. cxxxiii+771) → ตัว concordance จริงยังเป็น gap ต้องหาต่อ Phase B
7. **S-431 ได้สถิติเชื่อมโยง:** concordance ~850 รายการ vs NGMPP >100,000 items + NA = "biggest and most important such collection so microfilmed" + โครงสร้าง 4 ทางของตารางจับคู่

## ตรวจสอบย้อนกลับ
- Extracts ทั้ง 5 ไฟล์: `pdf-harvest\extracts\` (สกัดใหม่ 2026-09-01, health ทั้งหมด PASS ตามสคริปต์)
- ภาพหน้า Śāstrī ที่ใช้ถอด quote: `pdf-harvest\pages_shastri\p014.png, p015.png, p044.png, p045.png, p046.png, p047.png, p048.png, p061.png, p101.png, p151.png, p201.png, p348.png`
- ยังไม่ได้แตะไฟล์กลาง (source-index / query-log) ตามคำสั่ง
