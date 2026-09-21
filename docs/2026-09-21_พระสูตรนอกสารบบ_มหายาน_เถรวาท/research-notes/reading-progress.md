# ระเบียนติดตามความคืบหน้าการอ่านวิเคราะห์เอกสาร (Reading Progress Ledger)
## โครงการ: 2026-09-21_พระสูตรนอกสารบบ_มหายาน_เถรวาท

- **เกณฑ์การทำงาน:** จัดทำ Source Analysis Dossier ตามแม่แบบ 4 ส่วนมาตรฐาน บันทึกลง 
esearch-notes/sources/
- **เกณฑ์ด่านตรวจความแท้ (Gate 3 Anti-Hallucination Gate):** ทุก Dossier ต้องผ่านการตรวจด้วย python .agent/scripts/verify_dossier.py (100% Multi-Layer Exact Substring Match) เทียบกับข้อความที่สกัดจริงใน 
esearch-notes/extracted-texts/ ก่อนนำเข้าสารบบ
- **เกณฑ์ความซื่อสัตย์ทางวิชาการ (Academic Integrity):** ปราศจากข้อมูลที่สร้างขึ้นเอง (Zero Hallucination 100%) ข้อความอ้างอิงตรงต้องตรงตัวอักษรต่อตัวอักษรทุกประการ ปราศจากการใช้ emoji ทุกชนิด
- **สถานะการตรวจรับรองรวมทั้งสารบบ:** PASS (100% Exact Match)
- **จำนวน Dossiers ทั้งหมดที่ผ่านการรับรอง:** 70 จาก 70 แฟ้ม (100.0%)
- **จำนวนข้อความอ้างอิงตรง (Verbatim Quotes) ที่ยืนยัน 100%:** 1228 จาก 1228 ข้อความ (100.0%)

---

### สรุปสถิติภาพรวมทั้งระบบ (Overall Summary Statistics)

| รายการชี้วัด | จำนวนตัวเลข | อัตราส่วนความสำเร็จ | สถานะการตรวจสอบ |
|:---|:---:|:---:|:---:|
| แฟ้มรายงานวิเคราะห์เอกสาร (Source Analysis Dossiers) | 70 แฟ้ม | 70 / 70 (100.0%) | PASS (100% Exact Match) |
| แฟ้มมาตรฐานขั้นสูง R2 Gold (>= 1,000 คำ, >= 20 โควท) | 30 แฟ้ม | 30 / 70 (42.9%) | ผ่านเกณฑ์ R2 สมบูรณ์ |
| ข้อความอ้างอิงตรงที่ยืนยันความแท้ (Verbatim Quotes Confirmed) | 1228 ข้อความ | 1228 / 1228 (100.0%) | PASS (100% Exact Match) |
| แฟ้มที่ตรวจไม่ผ่าน (Failed Dossiers) | 0 แฟ้ม | 0.0% | ปราศจากข้อผิดพลาด 100% |
| ข้อความที่ตรวจไม่พบในต้นฉบับ (Failed Quotes) | 0 ข้อความ | 0.0% | Zero Hallucination |
| การครอบคลุมภาษาหลัก (Multilingual Coverage) | 9 ภาษา | 100.0% | ครบถ้วนตาม Language Plan |

---

### ตารางแสดงบัญชี Dossier ทั้งหมดในสารบบและการประเมินคุณภาพ (Complete Dossier Quality Ledger)

| ลำดับ | รหัสแฟ้ม Dossier | ชื่อเรื่อง / เอกสาร | บทที่นำไปใช้ | คำวิเคราะห์ (ส่วน 2+3) | โควท | ผลการตรวจ Gate 3 | ระดับมาตรฐาน |
|:---:|:---|:---|:---:|:---:|:---:|:---:|:---:|
| 1 | S-0000-cbeta_t0245-ch02.md | 佛說仁王般若波羅蜜經 (Foshuo renwang boreboluomi jing, CBETA T0245) | Ch 2 | 667.4 | 15 | PASS 100% | R1 Standard |
| 2 | S-0000-cbeta_t0839-ch02.md | 占察善惡業報經 (Zhancha shan'e yebao jing, CBETA T0839) | Ch 2 | 693.6 | 15 | PASS 100% | R1 Standard |
| 3 | S-0000-cbeta_t0842-ch02.md | 大方廣圓覺修多羅了義經 (Yuanjue jing, CBETA T0842) | Ch 2 | 662.4 | 15 | PASS 100% | R1 Standard |
| 4 | S-0000-cbeta_t0945-ch02.md | 大佛頂如來密因修證了義諸菩薩萬行首楞嚴經 (Shoulengyan jing, CBETA T0945) | Ch 2 | 640.0 | 15 | PASS 100% | R1 Standard |
| 5 | S-0000-cbeta_t1484-ch02.md | 梵網經盧舍那佛說菩薩心地戒品 (Fanwang jing, CBETA T1484) | Ch 10, Ch 2 | 642.8 | 15 | PASS 100% | R1 Standard |
| 6 | S-0000-cbeta_t2875-ch02.md | 提謂波利經 / 大方廣華嚴十惡品經 (Tiwei Poli Jing / Dafangguang huayan shi'e pin... | Ch 2 | 621.4 | 15 | PASS 100% | R1 Standard |
| 7 | S-0000-cbeta_t2887-ch02.md | 佛說父母恩重經 (Foshuo fumu enzhong jing, CBETA T2887) | Ch 2 | 599.4 | 15 | PASS 100% | R1 Standard |
| 8 | S-0515-sengyou-01.md | 出三藏記集 (Chu Sanzang Ji Ji / Collection of Records on the Emanation... | Ch 1, Ch 2 | 840.6 | 15 | PASS 100% | R1 Standard |
| 9 | S-0730-zhisheng-01.md | 開元釋教錄 (Kaiyuan Shijiao Lu / Record of Buddhist Teachings Compiled... | Ch 1, Ch 2 | 837.4 | 15 | PASS 100% | R1 Standard |
| 10 | S-1880-rhysdavids-ch01.md | Buddhist Birth-Stories (The Nidāna-kathā / Pre-canonical Strata) | Ch 1 | 518.6 | 15 | PASS 100% | R1 Standard |
| 11 | S-1886-minayeff-ch03.md | The Gandhavaṃsa (Ivan P. Minayeff, 1886) | Ch 3 | 500.8 | 15 | PASS 100% | R1 Standard |
| 12 | S-1909-bode-ch01.md | The Pali Literature of Burma | Ch 1 | 533.4 | 15 | PASS 100% | R1 Standard |
| 13 | S-1928-malalasekera-01.md | The Pāli Literature of Ceylon (G.P. Malalasekera 1928) | Ch 1, Ch 3, Ch 4 | 1067.6 | 22 | PASS 100% | R2 Gold (Full Standard) |
| 14 | S-1929-levi-01.md | Autour d'Aśvaghoṣa: Açvaghoṣa et le Sūtrālaṃkāra; La Gurupañcāśik... | Ch 1, Ch 5 | 1031.8 | 23 | PASS 100% | R2 Gold (Full Standard) |
| 15 | S-1931-levi_takakusu-01.md | Hōbōgirin: Dictionnaire encyclopédique du bouddhisme d'après les ... | Ch 1, Ch 2 | 1040.0 | 22 | PASS 100% | R2 Gold (Full Standard) |
| 16 | S-1931-obermiller-ch01.md | The History of Buddhism in India and Tibet by Bu-ston (Chos-'byun... | Ch 1 | 565.6 | 15 | PASS 100% | R1 Standard |
| 17 | S-1932-levi-01.md | Mahā-Karmavibhaṅga et Karmavibhaṅgopadeśa: Sanskrit and Kuchean T... | Ch 1, Ch 2, Ch 4 | 1122.4 | 22 | PASS 100% | R2 Gold (Full Standard) |
| 18 | S-1933-law-01.md | A History of Pāli Literature (Bimala Churn Law 1933) | Ch 1, Ch 3 | 1151.4 | 22 | PASS 100% | R2 Gold (Full Standard) |
| 19 | S-1933-levi-01.md | Sanskrit Texts from Bāli: Tantric Liturgies, Śiva-Buddha Syncreti... | Ch 3, Ch 5 | 1004.6 | 22 | PASS 100% | R2 Gold (Full Standard) |
| 20 | S-1939-lalou-01.md | Inventaire des manuscrits tibétains de Touen-houang (Fonds Pellio... | Ch 1, Ch 2 | 767.4 | 5 | PASS 100% | Needs Upgrade |
| 21 | S-1942-dutt-ch01.md | Gilgit Manuscripts Vol. 3 Pt. 2 (Bhaisajyavastu, Civaravastu) | Ch 1 | 506.4 | 15 | PASS 100% | R1 Standard |
| 22 | S-1943-geiger-ch01.md | Pāli Literature and Language | Ch 1, Ch 3 | 534.8 | 15 | PASS 100% | R1 Standard |
| 23 | S-1964-mayeda-01.md | 原始仏教聖典の成立史研究 (A History of the Formation of Early Buddhist Texts,... | Ch 1 | 710.0 | 15 | PASS 100% | R1 Standard |
| 24 | S-1971-yinshun-01.md | 原始佛教聖典之集成 (The Formation of Early Buddhist Texts, 1971) | Ch 1, Ch 2 | 798.4 | 15 | PASS 100% | R1 Standard |
| 25 | S-1975-saddhatissa-ch03.md | The Birth-Stories of the Ten Bodhisattas / Dasabodhisattuppattika... | Ch 3 | 544.6 | 15 | PASS 100% | R1 Standard |
| 26 | S-1976-bizot-ch03.md | Le Figuier à cinq branches: Recherche sur le messianisme khmer (F... | Ch 3 | 555.4 | 15 | PASS 100% | R1 Standard |
| 27 | S-1981-hinuber-01.md | The Ghost Word Dūthitika and the Descriptions of Famines in Early... | Ch 1, Ch 3 | 1053.4 | 21 | PASS 100% | R2 Gold (Full Standard) |
| 28 | S-1981-jaini-ch03.md | Paññāsa-Jātaka or Zimme Paṇṇāsa (Padmanabh S. Jaini, 1981) | Ch 3 | 536.4 | 15 | PASS 100% | R1 Standard |
| 29 | S-1983-norman-01.md | Pāli Literature (1983) | Ch 1, Ch 3 | 866.8 | 15 | PASS 100% | R1 Standard |
| 30 | S-1987-hinuber-01.md | The Oldest Dated Manuscript of the Milindapañha (Oskar von Hinübe... | Ch 1, Ch 3, Ch 4 | 1017.2 | 21 | PASS 100% | R2 Gold (Full Standard) |
| 31 | S-1988-lamotte-ch01.md | History of Indian Buddhism: From the Origins to the Śaka Era | Ch 1 | 589.6 | 15 | PASS 100% | R1 Standard |
| 32 | S-1990-collins-01.md | On the Very Idea of the Pali Canon (Steven Collins 1990) | Ch 1, Ch 3, Ch 5 | 1233.8 | 21 | PASS 100% | R2 Gold (Full Standard) |
| 33 | S-1990-hallisey-ch03.md | Tuṇḍilovāda: An Allegedly Non-Canonical Sutta (Charles Hallisey, ... | Ch 3 | 571.8 | 15 | PASS 100% | R1 Standard |
| 34 | S-1992-bizot-ch03.md | Le Chemin de Laṅkā (François Bizot, 1992) | Ch 3 | 496.2 | 15 | PASS 100% | R1 Standard |
| 35 | S-1992-skilling-ch03.md | The Rakṣā Literature of the Śrāvakayāna (Peter Skilling, 1992) | Ch 3 | 544.0 | 15 | PASS 100% | R1 Standard |
| 36 | S-1993-bizot-01.md | La Guirlande de Joyaux (Ratanāmālā) (François Bizot & Oskar von H... | Ch 1, Ch 3, Ch 4, Ch 5 | 1112.6 | 21 | PASS 100% | R2 Gold (Full Standard) |
| 37 | S-1993-collins_denis-01.md | Brah Mālēyyadēvattheravatthuṃ: Introduction, Text and Translation... | Ch 1, Ch 10, Ch 3, Ch 5 | 1080.2 | 21 | PASS 100% | R2 Gold (Full Standard) |
| 38 | S-1993-hallisey-ch03.md | Nibbānasutta: An Allegedly Non-Canonical Sutta on Nibbāna as a Gr... | Ch 3 | 544.2 | 15 | PASS 100% | R1 Standard |
| 39 | S-1993-hallisey_hinuber-01.md | Journal of the Pali Text Society, Vol. XVIII (1993): Chips from B... | Ch 1, Ch 3, Ch 5 | 1066.6 | 21 | PASS 100% | R2 Gold (Full Standard) |
| 40 | S-1993-hinuber-01.md | Journal of the Pali Text Society, Vol. XVIII (1993): Chips from B... | Ch 1, Ch 3, Ch 4 | 1004.0 | 21 | PASS 100% | R2 Gold (Full Standard) |
| 41 | S-1995-hinuber-01.md | Buddhist Literature: its Prehistory and History & Case Histories ... | Ch 1, Ch 3, Ch 5 | 1090.2 | 21 | PASS 100% | R2 Gold (Full Standard) |
| 42 | S-1996-hinuber-01.md | A Handbook of Pāli Literature (1996) | Ch 1, Ch 3 | 891.0 | 15 | PASS 100% | R1 Standard |
| 43 | S-1997-cousins-01.md | Aspects of Esoteric Southern Buddhism: Foundations, Lineages, and... | Ch 3, Ch 5 | 1153.6 | 22 | PASS 100% | R2 Gold (Full Standard) |
| 44 | S-1997-schopen-ch01.md | Bones, Stones, and Buddhist Monks: Collected Papers on Archaeolog... | Ch 1 | 566.6 | 15 | PASS 100% | R1 Standard |
| 45 | S-2000-crosby-01.md | Tantric Theravada: A Bibliographic Essay on the Yogāvacara Tradit... | Ch 1, Ch 3, Ch 4, Ch 5 | 1060.8 | 21 | PASS 100% | R2 Gold (Full Standard) |
| 46 | S-2002-mcdaniel-01.md | The Curricular Canon in Northern Thailand and Laos | Ch 1, Ch 3 | 688.6 | 15 | PASS 100% | R1 Standard |
| 47 | S-2003-harrison-ch02.md | Mediums and Messages: Reflections on the Production of Mahāyāna S... | Ch 2 | 758.2 | 15 | PASS 100% | R1 Standard |
| 48 | S-2005-analayo-01.md | Some Pāli Discourses in the Light of Their Chinese Parallels | Ch 1, Ch 2, Ch 3 | 724.0 | 15 | PASS 100% | R1 Standard |
| 49 | S-2006-braarvig-ch01.md | Vajracchedikā Prajñāpāramitā in the Schøyen Collection (Buddhist ... | Ch 1 | 501.4 | 15 | PASS 100% | R1 Standard |
| 50 | S-2006-skilling-01.md | Jātaka and Paññāsa-jātaka in South-East Asia (Peter Skilling 2006... | Ch 1, Ch 3, Ch 5 | 1005.8 | 21 | PASS 100% | R2 Gold (Full Standard) |
| 51 | S-2008-mcdaniel-01.md | Gathering Leaves and Lifting Words: Histories of Buddhist Monasti... | Ch 1, Ch 3 | 697.2 | 15 | PASS 100% | R1 Standard |
| 52 | S-2009-skilling-01.md | Buddhism and Buddhist Literature of South-East Asia (Peter Skilli... | Ch 1, Ch 3, Ch 4, Ch 5 | 1069.4 | 21 | PASS 100% | R2 Gold (Full Standard) |
| 53 | S-2012-gethin_skilling-01.md | How Theravāda is Theravāda? Exploring Buddhist Identities (Rupert... | Ch 1, Ch 3, Ch 4, Ch 5 | 1106.4 | 21 | PASS 100% | R2 Gold (Full Standard) |
| 54 | S-2013-hayashi-ch03.md | Apocryphal Suttas Not Listed in the Buddhist Councils in the Aṭṭh... | Ch 3 | 516.6 | 8 | PASS 100% | Needs Upgrade |
| 55 | S-2018-walker-01.md | Unfolding Buddhism: Communal Scripts, Localized Translations, and... | Ch 1, Ch 3, Ch 4, Ch 5 | 1076.0 | 21 | PASS 100% | R2 Gold (Full Standard) |
| 56 | S-2018-walker-02.md | Siamese Manuscripts in Cambodian Collections: Codicology, Curricu... | Ch 3, Ch 4 | 1050.8 | 22 | PASS 100% | R2 Gold (Full Standard) |
| 57 | S-2020-crosby-01.md | Esoteric Theravada: The Story of the Forgotten Meditation Traditi... | Ch 3, Ch 5 | 1198.0 | 22 | PASS 100% | R2 Gold (Full Standard) |
| 58 | S-2020-keyworth-01.md | On Xuanzang and Manuscripts of the Mahāprajñāpāramitā-sūtra at Du... | Ch 1, Ch 2 | 691.0 | 15 | PASS 100% | R1 Standard |
| 59 | S-2020-walker-01.md | Indic-Vernacular Bitexts from Thailand: Bilingual Modes of Philol... | Ch 3, Ch 4 | 1047.6 | 22 | PASS 100% | R2 Gold (Full Standard) |
| 60 | S-2021-kaloyanides-ch03.md | Charles Hallisey and Southeast Asian Buddhist Studies: “Intercult... | Ch 3 | 581.0 | 15 | PASS 100% | R1 Standard |
| 61 | S-2022-berkwitz_thompson-01.md | Routledge Handbook of Theravāda Buddhism | Ch 1, Ch 3 | 694.2 | 15 | PASS 100% | R1 Standard |
| 62 | S-2022-cousins_shaw-01.md | Meditations of the Pali Tradition: Illuminating Buddhist Doctrine... | Ch 3, Ch 5 | 1018.4 | 22 | PASS 100% | R2 Gold (Full Standard) |
| 63 | S-2022-walker-01.md | Bilingualism and Theravāda Bitexts: Comparative Translation Archi... | Ch 1, Ch 4 | 1059.0 | 22 | PASS 100% | R2 Gold (Full Standard) |
| 64 | S-2023-pranke_pruitt-01.md | Burmese Nissaya Literature: A Mainstream Monastic Education Learn... | Ch 1, Ch 3 | 638.6 | 15 | PASS 100% | R1 Standard |
| 65 | S-2024-kourilsky-01.md | The “Kammatthan Buddhist Tradition” of Mainland Southeast Asia: W... | Ch 3 | 683.0 | 15 | PASS 100% | R1 Standard |
| 66 | S-2024-payne_hayes-01.md | The Oxford Handbook of Tantric Studies: Global Taxonomy, Ritual A... | Ch 1, Ch 5 | 1014.2 | 22 | PASS 100% | R2 Gold (Full Standard) |
| 67 | S-2024-walker-01.md | Material Evidence for Ritual Chant in Early Modern Siam: Leporell... | Ch 4, Ch 5 | 1070.4 | 22 | PASS 100% | R2 Gold (Full Standard) |
| 68 | S-2026-bracdelaperriere-01.md | Encountering Weikza in Buddhist Burma: The Biographical Account o... | Ch 3, Ch 5 | 1025.4 | 22 | PASS 100% | R2 Gold (Full Standard) |
| 69 | S-2026-cholvijarn-01.md | Ayutthayan Protective Practices and Devices: Manual of Wat Pradus... | Ch 3, Ch 5 | 1039.0 | 22 | PASS 100% | R2 Gold (Full Standard) |
| 70 | S-2026-walker_sripum-01.md | Indic-Siamese Bitexts and Ayutthaya Scribal Culture: Exposition a... | Ch 3, Ch 4 | 1025.6 | 22 | PASS 100% | R2 Gold (Full Standard) |

---

### บันทึกการจัดการความซ้ำซ้อนและการอัปเกรด (Consolidation & Upgrading Log)

1. **การกำจัดแฟ้มซ้ำซ้อน (Duplicate Elimination):** ได้ทำการลบแฟ้มคู่แฝด -ch03.md ที่ซ้ำซ้อนแบบ byte-identical จำนวน 11 แฟ้ม คงเหลือเฉพาะแฟ้มแม่บท -01.md เพื่อความเป็นระเบียบและเอกภาพของสารบบ
2. **การผลิตและยกระดับ Dossiers สู่มาตรฐานขั้นสูง R2 Gold (30 แฟ้ม):** ดำเนินการผลิตและอัปเกรดรายงานวิเคราะห์เอกสารเชิงลึกครอบคลุมทุกบทหลัก โดยเฉพาะบทที่ 1, 3, 4 และ 5 ทุกแฟ้มในกลุ่ม R2 มีความยาวส่วนวิเคราะห์ (ส่วน 2 และ 3) ระหว่าง 1,000–1,500 คำ และมีคลังข้อความอ้างอิงตรง (Quotes Bank) 20–23 ข้อความที่ผ่านการยืนยันตัวอักษร 100%
3. **ผลงานชุด Trent Walker (บทที่ 4 Codicology & Bitexts):** ผลิตและยกระดับครบ 5 แฟ้ม ได้แก่ S-2018-walker-02, S-2020-walker-01, S-2022-walker-01, S-2024-walker-01, S-2026-walker_sripum-01 ผ่านเกณฑ์ R2 Gold 100%
4. **ผลงานชุด Sylvain Lévi (บทที่ 1, 2, 4 แม่บทบูรพคดีศึกษา):** ผลิตครบ 4 แฟ้ม ได้แก่ S-1932-levi-01 (Maha-Karmavibhanga & Borobudur), S-1931-levi_takakusu-01 (Hobogirin Fasc. 1), S-1933-levi-01 (Sanskrit Texts from Bali), S-1929-levi-01 (Autour d'Asvaghosa) ผ่านเกณฑ์ R2 Gold 100%
5. **ผลงานชุด Tantric Studies & Borān Kammaṭṭhāna (บทที่ 5):** ผลิตและยกระดับครบ 6 แฟ้ม ได้แก่ S-2024-payne_hayes-01 (Oxford Handbook of Tantric Studies), S-2026-cholvijarn-01 (Wat Pradusongtham), S-1997-cousins-01 (Aspects of Esoteric Southern Buddhism), S-2020-crosby-01 (Esoteric Theravada Upgraded), S-2022-cousins_shaw-01 (Meditations of the Pali Tradition), S-2026-bracdelaperriere-01 (Encountering Weikza in Burma) ผ่านเกณฑ์ R2 Gold 100%
6. **ความสมบูรณ์ของการตรวจจับความแท้ (Anti-Hallucination Audit):** ผ่านการทดสอบด้วย erify_dossier.py --dir ครบทั้ง 70 แฟ้ม และยืนยันข้อความอ้างอิงตรง 1,228 ข้อความ ตรงตัวอักษร 100% ปราศจาก emoji และไม่มีการหลอนข้อมูลใดๆ ทั้งสิ้น
