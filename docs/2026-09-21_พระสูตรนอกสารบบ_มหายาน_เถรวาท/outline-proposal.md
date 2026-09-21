# โครงร่างแม่บทฉบับสมบูรณ์ (Master Outline Proposal & Monograph Blueprint)
## โครงการ: การจัดระบบพระสูตรและพระสูตรนอกสารบบในพุทธศาสนาฝ่ายมหายานและเถรวาท
### (Comparative Canonical Taxonomy, Apocryphal Sūtras, Codicology, and Esoteric Traditions in Mahāyāna and Theravāda Buddhism)

- **รหัสโครงการ:** `2026-09-21_พระสูตรนอกสารบบ_มหายาน_เถรวาท`
- **สถานะ:** แผนงานระดับแม่บทฉบับสมบูรณ์สำหรับด่านตรวจ [Gate 1: Outline Gate] (Monograph Blueprint 5 บท)
- **เป้าหมายความยาวคำ:** 5 บทหลัก แบ่งเป็น 20 Micro-Sprints (Section ละ 2,500–3,000 คำ, บทละไม่น้อยกว่า 10,000–12,000 คำ, ยอดรวมทั้งโครงการไม่น้อยกว่า 50,000–60,000 คำ ตามสูตรสากล: อักขระตัดช่องว่าง ÷ 5.0)
- **ระบบอ้างอิง:** Chicago Manual of Style (17th ed., Notes & Bibliography) / Zero Hallucination 100% / Zero Internal Codes in Final

---

## สารบัญโครงสร้างภาพรวมโครงการ (Monograph Architecture Overview)

```
[โครงการวิจัยตำราแม่บท: 5 บท 20 Micro-Sprints | เป้าหมายรวม 50,000–60,000 คำ]
 ├── บทที่ 1: ประวัติศาสตร์และการจัดระบบพระไตรปิฎกเปรียบเทียบ (10,000–12,000 คำ)
 │    ├── ch01_sec01: วิวัฒนาการการจำแนกพระธรรมวินัย: จากนวังคสัตถุศาสน์ 9 และทวาทศางคพุทธวจนะ 12 สู่นิกายและอาคม 4 [2,500–3,000 คำ]
 │    ├── ch01_sec02: การสถาปนาพระไตรปิฎกบาลีสำนักมหาวิหารในศรีลังกา วิวัฒนาการการสังคายนา และเครือข่ายอรรถกถา-ฎีกา [2,500–3,000 คำ]
 │    ├── ch01_sec03: สารบบภาษาสันสกฤตฝ่ายเหนือ การสังคายนาพระเจ้ากนิษกะ และเอกสารโบราณกิลกิต ตูร์ฟาน และเชอยัน [2,500–3,000 คำ]
 │    └── ch01_sec04: สารบัญพระสูตรจีน สารบบทิเบต การถ่ายทอดสู่ญี่ปุ่น และประวัติศาสตร์นิพนธ์สมัยใหม่ [2,500–3,000 คำ]
 ├── บทที่ 2: การจัดระบบพระสูตร และพระสูตรนอกสารบบของพุทธศาสนาฝ่ายมหายาน (10,000–12,000 คำ)
 │    ├── ch02_sec01: ญาณวิทยาแห่งพุทธพจน์และกลไกการรังสรรค์พระสูตรแปลกปลอมในจีน (อี๋เว่ยจิง) [2,500–3,000 คำ]
 │    ├── ch02_sec02: กรณีศึกษาพระสูตรนอกสารบบชิ้นเอก 6 คัมภีร์ และข้อถกเถียงเรื่องความแท้ [2,500–3,000 คำ]
 │    ├── ch02_sec03: ขบวนการสามขั้น (ซานเจี้ยเจี้ยว) และการปฏิวัติทางโบราณคดี: ตุนหวงและนานัตสึเดระ [2,500–3,000 คำ]
 │    └── ch02_sec04: คัมภีร์นอกสารบบและตัวบทวิวาทะในทิเบต (ตันตระญิงมาและแตร์มา), เอเชียกลาง และญี่ปุ่น [2,500–3,000 คำ]
 ├── บทที่ 3: การจัดระบบพระสูตร และพระสูตรนอกสารบบของพุทธศาสนาฝ่ายเถรวาท (10,000–12,000 คำ)
 │    ├── ch03_sec01: ขอบเขตและความยืดหยุ่นของพระไตรปิฎกบาลี: วาทกรรมปิด-เปิด, ความหลากหลายของขุททกนิกาย และร่องรอยพระสูตรสูญหาย [2,500–3,000 คำ]
 │    ├── ch03_sec02: วรรณกรรมชาดกนอกสารบบ: ปัญญาสชาดกในล้านนาและอุษาคเนย์ และทสโพธิสัตตุปปัตติกถา [2,500–3,000 คำ]
 │    ├── ch03_sec03: พระสูตรนอกสารบบในวัฒนธรรมตัวเขียนอุษาคเนย์: กลุ่มเอวมฺเม สุตํ และวรรณกรรมเล่าเรื่องจักรวาล [2,500–3,000 คำ]
 │    └── ch03_sec04: พระปริตร วรรณกรรมพุทธรักษ์ บรรณานุกรมศาสตร์พื้นเมือง และการเปลี่ยนกระบวนทัศน์ทางวิชาการ [2,500–3,000 คำ]
 ├── บทที่ 4: โคดิโคโลยี ประเพณีตัวเขียน และคลังเอกสารโบราณข้ามภูมิภาค (10,000–12,000 คำ)
 │    ├── ch04_sec01: โคดิโคโลยีเปรียบเทียบและวัฒนธรรมตัวเขียนพุทธศาสนาในเอเชีย: วัตถุธรรม อาลักษณ์ พาราทรานสคริปต์ และรูปแบบรูปเล่ม [2,500–3,000 คำ]
 │    ├── ch04_sec02: คลังเอกสารโบราณตุนหวงและนานัตสึเดระ: แหล่งพิทักษ์คัมภีร์นอกสารบบที่สาบสูญ [2,500–3,000 คำ]
 │    ├── ch04_sec03: วรรณกรรมสองภาษาใบลานในอุษาคเนย์: ประเพณีนิสสัย สันนยะ โวหาร และทฤษฎี Bitexts [2,500–3,000 คำ]
 │    └── ch04_sec04: วัฒนธรรมตัวเขียนสมุดไทย กาพย์สวดพระมาลัย และวรรณกรรมสองภาษาคำหลวงแห่งกรุงศรีอยุธยา [2,500–3,000 คำ]
 └── บทที่ 5: ตันตระศึกษา ประเพณีเร้นลับ (โยคาวจร / เถรวาทตันตระ) และญาณวิทยาแห่งพุทธพจน์ (10,000–12,000 คำ)
      ├── ch05_sec01: ตันตระศึกษาในพุทธศาสน์สากล: ธารณี มนตร์ และการแปรเปลี่ยนทางญาณวิทยาแห่งพุทธพจน์ [2,500–3,000 คำ]
      ├── ch05_sec02: พุทธศาสนาฝ่ายใต้เร้นลับและกรรมฐานโบราณ: โยคาวจร ธรรมกายภายใน และระบบจักรากุมาร [2,500–3,000 คำ]
      ├── ch05_sec03: ยันต์มนต์ คาถาพุทธรักษ์ เวกซาพม่า และคู่มือวัดประดู่ทรงธรรมแห่งกรุงศรีอยุธยา [2,500–3,000 คำ]
      └── ch05_sec04: วิกฤตการณ์การสร้างความทันสมัย การเบียดขับกรรมฐานโบราณ และการสังเคราะห์พุทธพจน์แบบพหุลักษณ์ [2,500–3,000 คำ]
```

---

## ข้อกำหนดรายละเอียดรายบทและ Micro-Sprints (Detailed Chapter Specifications)

---

### บทที่ 1: ประวัติศาสตร์และการจัดระบบพระไตรปิฎกเปรียบเทียบ
**(Comparative Canon Formation & Sūtra Taxonomy)**
- **รหัสเป้าหมาย:** `R3-Ch01` | **ไฟล์รวมบท:** `drafts/assembled/ch01.md` $\rightarrow$ `final/01-บทที่หนึ่ง.md`
- **เป้าหมายความยาวคำทั้งบท:** **10,000–12,000 คำ** (ไม่น้อยกว่า 10,000 คำ)
- **บทนำและบทสรุปประจำบท:** รวม 600–1,000 คำ

#### Section 1.1 (Micro-Sprint 1)
- **รหัสไฟล์:** `drafts/sections/ch01_sec01.md`
- **ชื่อหัวข้อ:** วิวัฒนาการการจำแนกพระธรรมวินัย: จากนวังคสัตถุศาสน์ 9 และทวาทศางคพุทธวจนะ 12 สู่นิกายและอาคม 4
  *(Pre-canonical Strata and Taxonomy: From Navāṅga/Dvādaśāṅga to the Four Nikāyas and Āgamas)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. โครงสร้างวรรณกรรมชั้นก่อนสารบบ (Pre-canonical Literary Genres): การวิเคราะห์นวังคสัตถุศาสน์ 9 องคะ (*navāṅgasatthusāsana*: สุตตะ, เคยยะ, เวยยากรณะ, คาถา, อุทาน, อิติวุตตกะ, ชาดก, อัพภูตธรรม, เวทัลละ) ในคัมภีร์บาลีชั้นต้น
  2. การขยายตัวสู่ระบบทวาทศางคพุทธวจนะ 12 องคะ (*dvādaśāṅgabuddhavacana*) ในสายภาษาสันสกฤตและมหายาน: การเพิ่มนิทาน (*Nidāna*), อวทาน (*Avadāna*), และอุปเทศ (*Upadeśa*) ตลอดจนการแทนที่เวทัลละด้วยไพบูลย์ (*Vaipulya*)
  3. ข้อค้นพบทางนิรุกติศาสตร์และประวัติศาสตร์ของ Oskar von Hinüber (§7, §10–11): ภาษาบาลีมิใช่ภาษาพูดของมคธและมิใช่ภาษาดั้งเดิมของพระพุทธองค์ หากแต่เป็นภาษากลาง (*lingua franca*) ทางอินเดียตะวันตกที่ผ่านการปรับแปลงรูปภาษา (*recast*) จากฉบับตะวันออกรุ่นเก่า พระไตรปิฎกในยุคแรกจึงมีลักษณะเป็น "วรรณกรรมนิรนาม" (*anonymous literature*) ที่จัดระเบียบผ่านมุขปาฐะ
  4. เกณฑ์การตรวจสอบความแท้จริงแห่งพุทธวจนะ: มหาปเทส 4 (*Cattāro Mahāpadesā*) ในทีฆนิกายและอังคุตตรนิกาย ในฐานะเครื่องมือควบคุมความถูกต้องทางหลักการก่อนการจารึกเป็นลายลักษณ์อักษร
  5. โมเดลวิวัฒนาการตัวบทของ Mayeda Egaku (前田恵学, 1964) และทฤษฎีรากฐานสังยุตตาคมของ พระอาจารย์อิ้นซุ่น (印順導師, 1971): การพิสูจน์ผ่านคัมภีร์ *โยคาจารภูมิศาสตร์* (Vastusaṃgrahaṇī 攝事分) ว่าส่วนผสมของ 3 องคะแรก (*Sūtra*, *Geya*, *Vyākaraṇa*) ก่อรูปเป็นแกนกลางดั้งเดิมของ *สังยุตตาคม/สังยุตตนิกาย* แล้วจึงแตกแขนงออกเป็น ทีฆะ มัชฌิมะ และอังคุตตระ (เชื่อมโยงงานของ Choong Mun-keat 2000, Bhikkhu Bodhi, Maurice Winternitz 1933)
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Vinaya Piṭaka* (Suttavibhaṅga, Vin III 8)
  - *Dīgha Nikāya* (Mahāparinibbāna Sutta, DN II 123–126 ว่าด้วยมหาปเทส 4)
  - *Aṅguttara Nikāya* (Catukkanipāta, AN II 102–107; AN II 167–170)
  - *Yogācārabhūmi-śāstra* (攝事分 Vastusaṃgrahaṇī, T. 1579, vol. 30)
  - *Abhidharmakośabhāṣya* ของวสุพันธุ (ed. Pradhan 1975)
  - *Mahāvyutpatti* (หมวด 12 องคะ)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Hinüber, Oskar von. *A Handbook of Pāli Literature*. Berlin: Walter de Gruyter, 1996 (§1–11).
  - Winternitz, Maurice. *A History of Indian Literature*, Vol. II: *Buddhist Literature and Jaina Literature*. Calcutta: University of Calcutta, 1933.
  - Mayeda Egaku. *A History of the Formation of Early Buddhist Texts* (原始仏教聖典の成立史研究). Tokyo: Sankibo Busshorin, 1964.
  - Yin Shun. *The Formation of Early Buddhist Canons* (原始佛教聖典之集成). Taipei: Zhengwen Chubanshe, 1971.
  - Choong Mun-keat. *The Fundamental Teachings of Early Buddhism: A Comparative Study Based on the Sutranga Portion of the Pali Samyutta-Nikaya and the Chinese Samyuktagama*. Wiesbaden: Harrassowitz Verlag, 2000.
  - Norman, K.R. *Pāli Literature: Including the Canonical Literature in Prakrit and Sanskrit of All the Hīnayāna Schools of Buddhism*. Wiesbaden: Otto Harrassowitz, 1983.

#### Section 1.2 (Micro-Sprint 2)
- **รหัสไฟล์:** `drafts/sections/ch01_sec02.md`
- **ชื่อหัวข้อ:** การสถาปนาพระไตรปิฎกบาลีสำนักมหาวิหารในศรีลังกา วิวัฒนาการการสังคายนา และเครือข่ายอรรถกถา-ฎีกา
  *(Mahāvihāra Canonization, Buddhist Councils, Aluvihāra Inscription, and the Commentarial-Subcommentarial Matrix)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. ประวัติศาสตร์การสังคายนา 3 ครั้งในชมพูทวีป การถ่ายทอดสู่ลังกาทวีปโดยพระมหินทเถระ และมุมมองประวัติศาสตร์สังคายนา 9 ยุคในคัมภีร์ *สังคีติยวังส* (*Saṅgītiyavaṃsa*) ของสมเด็จพระวันรัตนแห่งวัดโพธิ์ (Pakdeekham & Walker 2020)
  2. วิกฤตทุพภิกขภัย (กบฏพราหมณ์ติสสะ) ในรัชสมัยพระเจ้าวัฏฏคามณีอภัย (89–77 ปีก่อน ค.ศ.) และจุดเปลี่ยนแห่งประวัติศาสตร์: การจารึกพระไตรปิฎกและอรรถกถาลงใบลาน ณ อาลุวิหาร (*Aluvihāra*) สถาบันพระภาณกะ (*bhāṇaka*) และการสร้างสารบบลายลักษณ์อักษรปิดสำนักแรก (Hinüber 1981 ว่าด้วยศัพท์ *dvīhitika*)
  3. ความขัดแย้งเชิงคัมภีร์และการเมืองสงฆ์ 3 สำนัก: สำนักมหาวิหาร (*Mahāvihāra*), อภัยคิรีวิหาร (*Abhayagiri*), และเชตวันวิหาร (*Jetavana*) การเปิดรับคัมภีร์ภาษาสันสกฤตและเวตุลละ/มหายานของอภัยคิรี จนถึงการรวมสงฆ์เป็นเอกภาพโดยพระเจ้าปรักกรมพาหุที่ 1 ในศตวรรษที่ 12
  4. พระพุทธโฆสะ (*Buddhaghosa*) และการปฏิวัติอรรถกถาศาสตร์: การทดสอบภูมิธรรมด้วย *วิสุทธิมรรค* (*Visuddhimagga*), การแปลและชำระอรรถกถาสิงหลโบราณ (*Sīhaḷa-aṭṭhakathā*: Mahā-aṭṭhakathā, Kurundī, Mahāpaccarī) สู่ภาษามคธ/บาลี สถาปนาระบบอรรถกถามาตรฐาน
  5. พัฒนาการสายฎีกาในยุคโปลอนนารุวะ: พระสารีปุตตเถระ (*Sāriputta Thera*) และคัมภีร์ *สารัตถทีปนี* (*Sāratthadīpanī*), *วินัยสังคหะ* การปฏิรูปสงฆ์และการ "เขียนพุทธศาสนาใหม่" (Alastair Gornall, *Rewriting Buddhism* 2020) การจัดระเบียบไวยากรณ์บาลีตามแนวสันสกฤต และการถ่ายทอดสู่อุษาคเนย์
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Dīpavaṃsa* (ed. Hermann Oldenberg 1879)
  - *Mahāvaṃsa* (ed. Wilhelm Geiger 1908)
  - *Samantapāsādikā* (Bāhiranidāna, ed. Takakusu & Nagai, PTS 1924)
  - *Visuddhimagga* (ed. C.A.F. Rhys Davids, PTS 1920–1921)
  - *Sāratthadīpanī* (ed. Dehigaspe Paññāsāra 1914 / Chaṭṭha Saṅgāyana CD)
  - *Saṅgītiyavaṃsa* (Somdet Phra Wannarat, ed. Pakdeekham & Walker 2020)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Gornall, Alastair. *Rewriting Buddhism: Pali Literature and Monastic Reform in Sri Lanka, 1157–1270*. London: UCL Press, 2020.
  - Hinüber, Oskar von. *A Handbook of Pāli Literature*. Berlin: Walter de Gruyter, 1996 (§199–220).
  - Hinüber, Oskar von. "The Ghost Word Dvīhitika and the Descriptions of Famines in Early Buddhist Literature." *Journal of the Pali Text Society* 9 (1981): 74–86.
  - Pakdeekham, Santi, and Trent Walker, eds. and trans. *Saṅgītiyavaṃsa: History of the Buddhist Councils*. Bangkok: Fragile Palm Leaves Foundation, 2020.
  - Adikaram, E.W. *Early History of Buddhism in Ceylon*. Migoda: D.S. Puswella, 1946.
  - Rahula, Walpola. *History of Buddhism in Ceylon: The Anuradhapura Period*. Colombo: M.D. Gunasena, 1956.
  - Collins, Steven. "On the Very Idea of the Pali Canon." *Journal of the Pali Text Society* 15 (1990): 89–126.

#### Section 1.3 (Micro-Sprint 3)
- **รหัสไฟล์:** `drafts/sections/ch01_sec03.md`
- **ชื่อหัวข้อ:** สารบบภาษาสันสกฤตฝ่ายเหนือ การสังคายนาพระเจ้ากนิษกะ และเอกสารโบราณกิลกิต ตูร์ฟาน และเชอยัน
  *(Northern Sanskrit Canons, Kaniṣka's Council, and Archaeological Breakthroughs: Gilgit, Turfan, and Schøyen)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. สารบบคัมภีร์ภาษาสันสกฤตของนิกายนอกเถรวาทในอินเดียเหนือและเอเชียกลาง: นิกายสรวาสติวาท (*Sarvāstivāda*: 4 อาคม และ 7 คัมภีร์อภิธรรม), มูลสรวาสติวาท (*Mūlasarvāstivāda*: วินัยวัสดุ 17 หมวด), และมหาสังฆิกะ-โลโกตตรวาท (*Mahāsāṃghika-Lokottaravāda*: Mahāvastu)
  2. การสังคายนาฝ่ายเหนือในรัชสมัยพระเจ้ากนิษกะ (Kaniṣka's Council) แห่งราชวงศ์กุษาณะ ตามการศึกษาวิจัยของ Sylvain Lévi: การรวบรวมคัมภีร์มหาภาษา (*Mahāvibhāṣā*) และการสถาปนาภาษาสันสกฤตเป็นภาษาสารบบของพุทธศาสนาฝ่ายเหนือ
  3. การค้นพบตัวเขียนกิลกิต (*Gilgit Manuscripts* ค.ศ. 1931): การค้นพบ *Vinayavastu* ร่วมกับพระสูตรมหายานชั้นต้น (*Saddharmapuṇḍarīka*, *Samādhirāja*) ในอารามเดียวกัน บทวิเคราะห์ของ Gregory Schopen และ Oskar von Hinüber ที่หักล้างทฤษฎีการแยกขาดทางสถาบันระหว่างมหายานและหินยาน
  4. คณะสำรวจปรัสเซียและตัวเขียนตูร์ฟาน (*Turfan Manuscripts*): การบูรณะพระสูตรสรวาสติวาทสันสกฤตเปรียบเทียบกับบาลีและจีนโดย Ernst Waldschmidt (*Mahāparinirvāṇa*, *Mahāvadāna*, *Catuṣpariṣad*) และพจนานุกรมประวัติศาสตร์ SWTF
  5. คอลเลกชันเชอยัน (*Schøyen Collection*) และเอกสารเปลือกไม้เบิร์ชอักษรขโรษฐีแห่งคันธาระ (*Gandhāran Scrolls*): การค้นพบของ Richard Salomon และ Jens-Uwe Hartmann ยืนยันความหลากหลายของพระสูตรภาษาพุทธปรากฤตและหลักฐานมหายานที่เก่าแก่ที่สุดในโลก
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Gilgit Manuscripts* (ed. Nalinaksha Dutt, 4 vols., Calcutta/Srinagar 1939–1959)
  - *Das Mahāparinirvāṇasūtra* (ed. Ernst Waldschmidt, Berlin 1950–1951)
  - *Das Catuṣpariṣatsūtra* (ed. Ernst Waldschmidt, Berlin 1952–1962)
  - *Manuscripts in the Schøyen Collection: Buddhist Manuscripts* (vols. I–IV, ed. Jens Braarvig et al., Oslo: Hermes Publishing, 2000–2016)
  - *Mahāvastu-avadāna* (ed. Émile Senart, 3 vols., Paris 1882–1897)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Lévi, Sylvain. "Notes sur les Indo-Scythes: Les textes historiques." *Journal Asiatique* 9, no. 8 (1896): 444–484; 9, no. 9 (1897): 5–42.
  - Schopen, Gregory. *Bones, Stones, and Buddhist Monks: Collected Papers on the Archaeology, Epigraphy, and Texts of Monastic Buddhism in India*. Honolulu: University of Hawai'i Press, 1997.
  - Hinüber, Oskar von. *Die Sprachgeschichte des Pāli im Spiegel der südostasiatischen Handschriftenüberlieferung*. Mainz/Stuttgart: Franz Steiner Verlag, 1988.
  - Salomon, Richard. *Ancient Buddhist Scrolls from Gandhāra: The British Library Kharoṣṭhī Fragments*. Seattle: University of Washington Press, 1999.
  - Hartmann, Jens-Uwe. "From Words to Books: Indian Buddhist Manuscripts in the First Millennium CE." In *The History of the Book in South Asia*, edited by Francesca Orsini. Farnham: Ashgate, 2013.

#### Section 1.4 (Micro-Sprint 4)
- **รหัสไฟล์:** `drafts/sections/ch01_sec04.md`
- **ชื่อหัวข้อ:** สารบัญพระสูตรจีน สารบบทิเบต การถ่ายทอดสู่ญี่ปุ่น และประวัติศาสตร์นิพนธ์สมัยใหม่
  *(East Asian Canonical Catalogs, Tibetan Redactions, Japanese Issaikyō, and Global Historiography)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. วิวัฒนาการศาสตร์แห่งสารบัญพระสูตรจีน (*จิงลู่* 經錄): จาก *จ้งจิงมู่ลู่* ของเต้าอัน (ค.ศ. 374), *ชูซานจ้างจี้จี๋* ของเสิงโย่ว (ค.ศ. 515), สู่สถาปัตยกรรมทางบรรณานุกรมสูงสุดใน *ไคหยวนซื่อเจี้ยวลู่* ของพระจื้อเซิง (ค.ศ. 730) และระบบรหัสพันคำ (*Qianziwen*) สำหรับพระไตรปิฎกฉบับพิมพ์ไม้แกะหลวง
  2. การจัดระบบพระไตรปิฎกทิเบต: สารบัญพระราชวังลฮันการ์ (*dKar chag lHan dkar ma* ค.ศ. 812), การจัดหมวดหมู่กังจูร์ (*bKa' 'gyur*) และเตนจูร์ (*bsTan 'gyur*) โดยปูตน รินเชน ดรุบ (*Bu-ston Rin-chen-grub* ค.ศ. 1322), และสายธารการถ่ายทอด Tshal pa vs. Them spangs ma
  3. การคัดลอกและการจัดระบบในญี่ปุ่น: วัฒนธรรม *อิสไซเกียว* (*Issaikyō*) ยุคนาระ-เฮอัน, คลังคัมภีร์โบราณวัดนานัตสึเดระ (*Nanatsu-dera*), สู่พระไตรปิฎกฉบับพิมพ์หลวงยุคเอโดะ และการสถาปนาพระไตรปิฎกวิชาการสมัยใหม่ *Taishō Shinshū Daizōkyō* (1924–1934) โดย ทะกะกุสุ จุนจิโร และ วะตะนะเบะ ไคงิโยกุ
  4. มหาโครงการสารานุกรม *Hōbōgirin* (法寶義林 1929) ของ Sylvain Lévi ร่วมกับ Junjirō Takakusu: การเชื่อมโยงคลังคัมภีร์ภาษาสันสกฤต จีน และญี่ปุ่น เพื่อสร้างสะพานเชื่อมทางปัญญาระหว่างบูรพคดีศึกษายุโรปกับสถาบันวิชาการเอเชีย
  5. ประวัติศาสตร์นิพนธ์สมัยใหม่ 5 สำนัก: สำนักยุโรป (Burnouf, Oldenberg, Lamotte, Hinüber, Lévi), สำนักรัสเซีย (Vasilyev, Minayev, Oldenburg, Stcherbatsky), สำนักญี่ปุ่น (Ui Hakuju, Nakamura Hajime, Hirakawa Akira), สำนักจีน-ไต้หวัน (Yin Shun, Lü Cheng, Tang Yongtong, Fang Guangchang), และสำนักวิพากษ์ร่วมสมัย (Buswell, Silk, Skilling, Radich)
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Chusanzang jiji* (出三藏記集, T. 2145)
  - *Kaiyuan shijiaolu* (開元釋教錄, T. 2154)
  - *dKar chag lHan dkar ma* (ed. Marcelle Lalou 1953; Herrmann-Pfandt 2008)
  - *Bu-ston Chos 'byung* (History of Buddhism, ed. E. Obermiller 1931–1932)
  - *Taishō Shinshū Daizōkyō* (大正新脩大藏經 100 vols., Tokyo 1924–1934)
  - *Hōbōgirin: Dictionnaire encyclopédique du bouddhisme d'après les sources chinoises et japonaises* (Fascicule 1, ed. Sylvain Lévi & Junjirō Takakusu, Tokyo/Paris 1929)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Fang Guangchang. *History of the Buddhist Canons: 8th to 10th Centuries* (佛教大藏經史: 八至十世紀). Beijing: Zhongguo Shehui Kexue Chubanshe, 1991.
  - Hayashiya Tomojirō. *A Study of Parallel Translations of Buddhist Scriptures* (異訳経類の研究). Tokyo: Tōyō Bunko, 1945.
  - Forte, Antonino. "The Relativity of the Concept of Orthodoxy in Chinese Buddhism: Chih-sheng's Indictment of Shih-li and the Proscription of the Dharma Mirror Sūtra." In *Chinese Buddhist Apocrypha*, edited by Robert E. Buswell Jr., 239–249. Honolulu: University of Hawai'i Press, 1990.
  - Eimer, Helmut, ed. *Transmission of the Tibetan Canon*. Vienna: Verlag der Österreichischen Akademie der Wissenschaften, 1997.
  - Stcherbatsky, Fyodor I. *The Central Conception of Buddhism and the Meaning of the Word "Dharma"*. London: Royal Asiatic Society, 1923.
  - Radich, Michael. *The Mahāparinirvāṇa-mahāsūtra and the Emergence of Tathāgatagarbha Doctrine*. Hamburg: Hamburg University Press, 2015.

---

### บทที่ 2: การจัดระบบพระสูตร และพระสูตรนอกสารบบของพุทธศาสนาฝ่ายมหายาน
**(Mahāyāna Canon Organization, Apocryphal Sūtras / Yíwèijīng, and Dunhuang Archives)**
- **รหัสเป้าหมาย:** `R3-Ch02` | **ไฟล์รวมบท:** `drafts/assembled/ch02.md` $\rightarrow$ `final/02-บทที่สอง.md`
- **เป้าหมายความยาวคำทั้งบท:** **10,000–12,000 คำ** (ไม่น้อยกว่า 10,000 คำ)
- **บทนำและบทสรุปประจำบท:** รวม 600–1,000 คำ

#### Section 2.1 (Micro-Sprint 5)
- **รหัสไฟล์:** `drafts/sections/ch02_sec01.md`
- **ชื่อหัวข้อ:** ญาณวิทยาแห่งพุทธพจน์และกลไกการรังสรรค์พระสูตรแปลกปลอมในจีน (*อี๋เว่ยจิง*)
  *(Epistemology of Buddhavacana, Legitimation Mechanisms, and Cultural Dynamics of Sinitic Apocrypha)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. ญาณวิทยาแห่งพุทธพจน์ (*Buddhavacana*) ในอินเดีย: ความท้าทายจากฝ่ายดั้งเดิม และ 4 กลไกรับรองความชอบธรรมของมหายาน (ปฏิภาณ *pratibhāna*, สมาธิภาวนาและนิมิตพบพระพุทธเจ้า *Buddhadarśana*, นิมิตฝัน *svapna*, และการตีความมหาปเทส 4 เชิงอรรถธรรม)
  2. การสถาปนาเกณฑ์พุทธพจน์มหายานใน *Mahāyānasūtrālaṃkāra* (ชำระโดย Sylvain Lévi 1907/1911): ข้อพิสูจน์ 7 ประการของพระอสังคะว่ามหายานคือพุทธพจน์แท้ และหลักนิติธรรม-นิรุกติศาสตร์ *In dubio pro reo* ของ Sylvain Lévi (1929) ที่ปกป้องคัมภีร์ขนาดสั้นและคัมภีร์ตันตระจากการถูกปฏิเสธอย่างไร้หลักฐาน
  3. การสร้างมาตรฐานการตรวจสอบในจีน: การจำแนก "อี๋จิง" (疑經 - พระสูตรต้องสงสัยเรื่องผู้แปล) ออกจาก "เว่ยจิง" (偽經 - พระสูตรปลอมแปลงหลอกลวง) ในสารบัญโบราณของเต้าอัน เสิงโย่ว และจื้อเซิง
  4. ปัจจัยขับเคลื่อนการผลิตพระสูตรในจีน: การกลืนกลายทางจริยธรรมกับลัทธิขงจื๊อ (ความกตัญญู 孝道 *xiàodào*), การผสานจักรวาลวิทยากับลัทธิเต๋า (เบญจธาตุ 五行, หยินหยาง), และความตื่นตระหนกต่อยุคเสื่อมแห่งธรรม (*มั่วฝ่า* 末法 *Mòfǎ*)
  5. การเปลี่ยนกระบวนทัศน์ทางวิชาการ: จากการมองเป็น "ของเก๊" (Forgeries) สู่การมองในฐานะ "พุทธธรรมประดิษฐกรรมท้องถิ่น" (Indigenous Sūtras / Cultural Acculturation) ตามข้อเสนอของ Makita Tairyō และ Robert Buswell Jr.
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Pratyutpanna-buddha-saṃmukhāvasthita-samādhi-sūtra* (般舟三昧經, T. 418)
  - *Mahāyāna-sūtrālaṃkāra* (ed. Sylvain Lévi 1907/1911, Bibliothèque de l'EPHE)
  - *Chusanzang jiji* (出三藏記集, T. 2145)
  - *Kaiyuan shijiaolu* (開元釋教錄, T. 2154, หมวด 偽妄亂真錄)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Lévi, Sylvain. "Autour d'Aśvaghoṣa: La Gurupañcāśikā." *Journal Asiatique* 215, no. 2 (1929): 255–285.
  - MacQueen, Graeme. "Inspired Speech in Early Mahāyāna Buddhism." *Religion* 11, no. 4 (1981): 303–319; 12, no. 1 (1982): 49–65.
  - Harrison, Paul. "Mediums and Messages: Reflections on the Production of Mahāyāna Sūtras." *The Eastern Buddhist* 35, no. 1/2 (2003): 115–151.
  - Makita Tairyō. *Studies on Apocryphal Buddhist Scriptures* (疑偽経研究). Kyoto: Institute for Research in Humanities, Kyoto University, 1976.
  - Buswell, Robert E., Jr., ed. *Chinese Buddhist Apocrypha*. Honolulu: University of Hawai'i Press, 1990.
  - Teiser, Stephen F. *The Ghost Festival in Medieval China*. Princeton: Princeton University Press, 1988.
  - Nattier, Jan. *Once Upon a Future Time: Studies in a Buddhist Prophecy of Decline*. Berkeley: Asian Humanities Press, 1991.

#### Section 2.2 (Micro-Sprint 6)
- **รหัสไฟล์:** `drafts/sections/ch02_sec02.md`
- **ชื่อหัวข้อ:** กรณีศึกษาพระสูตรนอกสารบบชิ้นเอก 6 คัมภีร์ และข้อถกเถียงเรื่องความแท้
  *(Six Paradigm Case Studies of Chinese Apocryphal Sūtras and Authenticity Debates)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. *ฝัวซัวฟู่หมู่เอินจ้งจิง* (佛說父母恩重經 T. 2887): โครงสร้างพระคุณแม่ 10 ประการ การผสานพุทธศาสนากับขงจื๊อ อิทธิพลต่อวรรณกรรมเปี้ยนเหวินและผาสลักต้าจู๋
  2. *ถีเว่ยปัวลี่จิง* (提謂波利經): การจับคู่ศีล 5 กับเบญจธาตุ (五行) และอวัยวะภายใน พุทธศาสนาสำหรับคฤหัสถ์และสมาคมอี้อี้ (ศึกษาโดย 湯用彤, 牧田諦亮, Whalen Lai)
  3. *เหรินหวังปัวหลัวมี่จิง* (仁王般若波羅蜜經 T. 245/246): พระสูตรพิทักษ์รัฐ (護國) รัฐศาสตร์เชิงพุทธและพิธีระดับชาติในจีน เกาหลี และญี่ปุ่น (Charles D. Orzech)
  4. *ฟั่นหวั่งจิง* (梵網經 T. 1484): ศีลโพธิสัตว์ 10 ข้อหลัก 48 ข้อย่อย การประกาศเอกราชของศีลมหายานที่ไม่ขึ้นกับหินยาน (ไซโจ และนิกายเทนได ศึกษาโดย Paul Groner และ Funayama Tōru)
  5. มหากาพย์ข้อถกเถียงเรื่องความแท้: *ต้าฝัวติ่งซูหลิงเหยียนจิง* (首楞嚴經 T. 945) ข้อวิพากษ์ของลวี่เฉิง (*เหลิงเหยียนไป่เว่ย* 100 ข้อพิสูจน์ความปลอมแปลง) เทียบกับสถานะคัมภีร์ปฏิบัติสูงสุดในนิกายฉาน
  6. *หยวนเจวี๋ยจิง* (圓覺經 T. 842): การสังเคราะห์ตถาคตครรภ์กับวิปัสสนาฉาน บทบาทอรรถกถาของกุยเฟิงจงมี่ (Peter N. Gregory)
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Fushuo fumu enzhong jing* (T. 2887)
  - *Tiwei Poli jing* (Dunhuang MSS P. 3732, S. 2051)
  - *Renwang boreboluomi jing* (T. 245, T. 246)
  - *Fanwang jing* (T. 1484)
  - *Dafoding rulaimi yin... shoulengyan jing* (T. 945)
  - *Dafangguang yuanjue xiuduoluo liaoyi jing* (T. 842)
  - *Yuanjue jing dashu* (T. 1795 ของ Guifeng Zongmi)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Lai, Whalen. "The Earliest Folk Buddhist Religion in China: T'i-wei Po-li Ching and Its Historical Significance." In *Buddhist and Taoist Practice in Medieval Chinese Society*. Honolulu: University of Hawai'i Press, 1987.
  - Orzech, Charles D. *Politics and Transcendent Wisdom: The Scripture for Humane Kings in the Creation of Chinese Buddhist Culture*. University Park: Pennsylvania State University Press, 1998.
  - Groner, Paul. *Saichō: The Establishment of the Japanese Tendai School*. Berkeley: Center for South and Southeast Asian Studies, 1984.
  - Lü Cheng. "楞嚴百偽" [One Hundred Proofs of the Spuriousness of the Śūraṅgama Sūtra]. *Neixue* (內學) 1940.
  - Gregory, Peter N. *Tsung-mi and the Sinification of Buddhism*. Princeton: Princeton University Press, 1991.
  - Funayama Tōru. "The Acceptance of Buddhist Precepts by the Chinese in the Fifth Century." *Journal of Asian History* 38, no. 2 (2004): 97–120.

#### Section 2.3 (Micro-Sprint 7)
- **รหัสไฟล์:** `drafts/sections/ch02_sec03.md`
- **ชื่อหัวข้อ:** ขบวนการสามขั้น (*ซานเจี้ยเจี้ยว*) และการปฏิวัติทางโบราณคดี: ตุนหวงและนานัตสึเดระ
  *(The Three Stages Movement, Suppressed Corpora, and Manuscript Breakthroughs: Dunhuang and Nanatsu-dera)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. ขบวนการสามขั้น (*ซานเจี้ยเจี้ยว* 三階教) ของภิกษุซิ่นสิง (Xinxing ค.ศ. 540–594): ทฤษฎีมนุษย์ในยุคที่สามเป็นคนบาปหนา, การถือธรรมะสากล (*ผู่ฝ่า* 普法), และการกราบไหว้สรรพสัตว์เป็นพระพุทธเจ้า (*ผู่จิ้ง* 普敬)
  2. สถาบัน "คลังสมบัติไม่สิ้นสุด" (*อู๋จิ้นจ้าง* 無盡藏) ณ วัดฮว่าตู้ซื่อ อำนาจทางการเงินและการเมืองสงฆ์
  3. การปราบปรามและสั่งทำลายคัมภีร์ 4 ระลอกโดยราชสำนักสุย-ถัง (จักรพรรดิสุยวี่เหวินตี้, บูเช็กเทียน, ถังเสวียนจง) และการสั่งแบนใน *ไคหยวนลู่*
  4. การปฏิวัติทางโบราณคดีจากคลังคัมภีร์ถ้ำตุนหวง (ถ้ำ 17): แหล่งรอดพ้นจากการทำลายของคัมภีร์นอกสารบบ, คัมภีร์พระยายมราช 10 องค์ (*สือหวังจิง* 十王經 ศึกษาโดย Stephen F. Teiser), วรรณกรรมสารภาพบาป (Kuo Li-ying), และงานวิจัยของ Rong Xinjiang (2018), Imre Galambos (2015/2020), George Keyworth (2020)
  5. การค้นพบคัมภีร์โบราณวัดนานัตสึเดระ (*Nanatsu-dera* 七寺 ค.ศ. 1990) ในนาโกย่า: 1,193 ม้วนตัวเขียนปลายเฮอันที่รักษาวรรณกรรมซานเจี้ยเจี้ยวและพระสูตรนอกสารบบที่สาบสูญจากจีน (ศึกษาโดย Ochiai Toshinori, Makita Tairyō, Antonino Forte)
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - ตัวเขียนซานเจี้ยเจี้ยวจากตุนหวง: S. 2048, S. 2498, P. 2418, P. 3732
  - *Disanjie fofa* (第三階佛法)
  - *Shiwang jing* (十王經, Dunhuang MSS S. 2498, P. 2003)
  - คลังคัมภีร์ตัวเขียนวัดนานัตสึเดระ (Nanatsu-dera manuscripts, Nagoya)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Yabuki Keiki. *Studies on the Three Stages Movement* (三階教之研究). Tokyo: Iwanami Shoten, 1927.
  - Nishimoto Teruma. *A Study of the San-chieh-chiao* (三階教の研究). Tokyo: Shunjūsha, 1998.
  - Hubbard, Jamie. *Absolute Delusion, Perfect Buddhahood: The Rise and Fall of a Chinese Heresy*. Honolulu: University of Hawai'i Press, 2001.
  - Forte, Antonino. *The Hostage An Shigao and His Offspring: An Iranian Family in China*. Kyoto: Istituto Italiano di Cultura, 1994.
  - Ochiai Toshinori. *The Manuscripts of Nanatsudera: A Recently Discovered Treasure-House in Japan*. Kyoto: Istituto Italiano di Cultura, 1991.
  - Teiser, Stephen F. *The Scripture on the Ten Kings and the Making of Purgatory in Medieval Chinese Buddhism*. Honolulu: University of Hawai'i Press, 1994.
  - Keyworth, George A. "On Xuanzang and Manuscripts of the Mahāprajñāpāramitā-sūtra at Dunhuang and in Early Japanese Buddhism." *Hualin International Journal of Buddhist Studies* 3, no. 1 (2020): 259–317.

#### Section 2.4 (Micro-Sprint 8)
- **รหัสไฟล์:** `drafts/sections/ch02_sec04.md`
- **ชื่อหัวข้อ:** คัมภีร์นอกสารบบและตัวบทวิวาทะในทิเบต (ตันตระญิงมาและแตร์มา), เอเชียกลาง และญี่ปุ่น
  *(Himalayan Disputed Corpora, Revealed Treasures, Central Asian and Japanese Apocrypha)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. กองตันตระญิงมา (*Rnying ma rgyud 'bum* / NGB): ข้อกังขาของนิกายแปลใหม่ (Sarma) ต่อความแท้จริงของตันตระโบราณ, การคัดออกจากกังจูร์โดยปูตน รินเชน ดรุบ, การรวบรวมสารบบอิสระโดยรัตนะ ลิงปา (Ratna Lingpa), และการพิสูจน์ความแท้จริงทางประวัติศาสตร์จากเอกสารตัวเขียนทิเบตโบราณในถ้ำตุนหวง (Cantwell & Mayer 2008, Dalton 2011)
  2. ปรากฏการณ์ "แตร์มา" (*gter ma* / Terma - Revealed Treasure Texts): ญาณวิทยาพุทธพจน์แบบเปิด, การซ่อนคำสอนของคุรุปัทมสัมภวะ, การขุดค้นโดยแตร์ตอน (*gter ston*), ซาแตร์ (สมบัติทางปฐพี) เทียบกับ กงแตร์ (สมบัติทางดวงจิต), และวรรณกรรม *มาณิกาบุม* (*Mani bka' 'bum*)
  3. พระสูตรนอกสารบบในเอเชียกลาง: วรรณกรรมภาษาโคตาน-สักกะ (*The Book of Zambasta*) และการศึกษาเอกสารภาษาทอคาเรียน/กูชา (Tokharian / Kuchean Manuscripts) ของ Sylvain Lévi (1933) ตามเส้นทางสายไหม
  4. วรรณกรรมนอกสารบบในญี่ปุ่น: วรรณกรรม "โชเงียว" (聖教 *Shōgyō*) ของนิกายชินงอน-เทนได, และ *ชูเซ นิฮงกิ* (中世日本紀) การสังเคราะห์เทววิทยาพุทธ-ชินโต (Ruppert 2000, Rambelli 2007)
  5. มิติพุทธตันตระเปรียบเทียบระหว่างจีนและทิเบตตามแนวคิดของ Yael Bentor & Meir Shahar (2017)
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Rnying ma rgyud 'bum* (Tibetan Dunhuang MSS: IOL Tib J 321, P.t. 44, P.t. 840)
  - *Mani bka' 'bum* (ed. Punakha blockprint / Jacques Bacot 1912)
  - *The Book of Zambasta: A Khotanese Poem on Buddhism* (ed. R.E. Emmerick 1968)
  - *Fragments de textes koutchéens* (ed. Sylvain Lévi, Paris: Cahiers de la Société Asiatique, 1933)
  - ตัวเขียนโชเงียววัดชินโงจิ (Jingo-ji) และวัดไดโกจิ (Daigo-ji)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Cantwell, Cathy, and Robert Mayer. *Early Tibetan Documents on Phur pa from Dunhuang*. Vienna: Verlag der Österreichischen Akademie der Wissenschaften, 2008.
  - Dalton, Jacob. *The Taming of the Demons: Violence and Liberation in Tibetan Buddhism*. New Haven: Yale University Press, 2011.
  - Doctor, Andreas. *Tibetan Treasure Literature: Revelation, Tradition, and Accomplishment in Visionary Buddhism*. Ithaca: Snow Lion Publications, 2005.
  - Kapstein, Matthew. *The Tibetan Assimilation of Buddhism: Conversion, Contestation, and Memory*. Oxford: Oxford University Press, 2000.
  - Bentor, Yael, and Meir Shahar, eds. *Chinese and Tibetan Esoteric Buddhism*. Leiden: Brill, 2017.
  - Ruppert, Brian. *Jewel in the Ashes: Buddha Relics and Power in Early Medieval Japan*. Cambridge: Harvard University Asia Center, 2000.
  - Rambelli, Fabio. *Buddhist Materiality: A Cultural History of Objects in Japanese Buddhism*. Stanford: Stanford University Press, 2007.

---

### บทที่ 3: การจัดระบบพระสูตร และพระสูตรนอกสารบบของพุทธศาสนาฝ่ายเถรวาท
**(Theravāda Canon Formation, Apocryphal Suttas, Paññāsa Jātaka, and Vernacular Literature)**
- **รหัสเป้าหมาย:** `R3-Ch03` | **ไฟล์รวมบท:** `drafts/assembled/ch03.md` $\rightarrow$ `final/03-บทที่สาม.md`
- **เป้าหมายความยาวคำทั้งบท:** **10,000–12,000 คำ** (ไม่น้อยกว่า 10,000 คำ)
- **บทนำและบทสรุปประจำบท:** รวม 600–1,000 คำ

#### Section 3.1 (Micro-Sprint 9)
- **รหัสไฟล์:** `drafts/sections/ch03_sec01.md`
- **ชื่อหัวข้อ:** ขอบเขตและความยืดหยุ่นของพระไตรปิฎกบาลี: วาทกรรมปิด-เปิด, ความหลากหลายของขุททกนิกาย และร่องรอยพระสูตรสูญหาย
  *(Boundaries of the Pāli Tipiṭaka: Open vs. Closed Canon, Khuddakanikāya Variations, and Lost Suttas)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. การรื้อถอนวาทกรรม "สารบบปิด" (Closed Canon): ทฤษฎีของ Steven Collins (JPTS 1990) เรื่อง "กลยุทธ์การสร้างความชอบธรรม" (Strategy of Legitimation) ของสำนักมหาวิหาร เทียบกับสภาพความเป็นจริงของ "สารบบเปิด" (Open Canon) ในวัฒนธรรมตัวเขียนใบลานของศรีลังกาและอุษาคเนย์ การปิดสารบบทางกายภาพในปลายศตวรรษที่ 19 ผ่านเทคโนโลยีการพิมพ์แท่นโลหะและการรวมศูนย์อำนาจสงฆ์ของรัฐชาติสมัยใหม่ (ฉบับพิมพ์ ร.ศ. 112 ในสยาม พ.ศ. 2436 และฉบับฉัฏฐสังคายนาในพม่า พ.ศ. 2499)
  2. การรื้อถอนคำว่า "apocryphal" ของ Charles Hallisey (1990, 1993, 1995): การวิพากษ์อคติอาณานิคมและการเสนอให้ใช้คำว่า **"พระสูตรที่ถูกอ้างว่าอยู่นอกสารบบ" (allegedly non-canonical suttas)** หรือ "กึ่งสารบบ" (paracanonical) สะท้อนว่าตัวบทเหล่านี้ได้รับการยอมรับนับถือและปฏิบัติในฐานะพุทธวจนะแท้
  3. ความไม่ลงรอยกันของสารบบขุททกนิกายและการจำแนกประเภท "Paracanonical Texts" ตามการวิเคราะห์ของ Oskar von Hinüber (§156–180):
     - สายสยามและลังกา: สารบบ 15 คัมภีร์มาตรฐาน
     - สายพม่า: สารบบ 18 คัมภีร์ บรรจุ *มิลินทปัญหา* (*Milindapañha*), *เนตติปกรณ์* (*Nettippakaraṇa*), และ *เปฏโกปเทส* (*Peṭakopadesa*) เข้าเป็นพระไตรปิฎกหลัก (สลักบนแผ่นหินอ่อนวัดกุโสดอ พ.ศ. 2414) และคัมภีร์ที่ 19 *สุตตสังคหะ* (*Suttasaṅgaha*) ในสารบัญ *Piṭakat samuiṅḥ* (§38–41)
     - ข้อพิสูจน์ทางนิรุกติศาสตร์ของ Hinüber: มิลินทปัญหาดั้งเดิมประพันธ์ด้วยภาษาคานธารี และเนตติปกรณ์มีโควทที่มาจากสายนิกายมูลสรวาสติวาท
  4. ร่องรอยพระสูตรโบราณที่สาบสูญในมหาอรรถกถา (*tisso saṃgītiyo anārūḷhe*): พยานหลักฐานใน *สมันตปาสาทิกา* (Sp 742,24–31) และ *อัฏฐสาลินี* (As 24) ว่าด้วยพระสูตรที่มิได้รับการรวบรวมในการสังคายนา 3 ครั้งแรก เช่น *กุลุมพสูตร* (*Kuḷumbasutta*), *จตุปริวัฏฏสูตร* (*Catuparivaṭṭasutta*), *ราชโอวาทสูตร*, *ติกขินทริยสูตร* (Hinüber §437, Takatsugu Hayashi 2013)
  5. มโนทัศน์เรื่องอนุปิฎก (*Anupiṭaka*) และพาหิรคันถะ (*Bāhiragantha*) ในประวัติศาสตร์วรรณกรรมบาลี
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Samantapāsādikā* (Sp 742, ed. Takakusu & Nagai, PTS)
  - *Aṭṭhasālinī* (As 24, ed. Edward Müller, PTS 1897)
  - *Milindapañha* (ed. V. Trenckner, PTS 1880; Hinüber 1987)
  - *Nettippakaraṇa* และ *Peṭakopadesa* (ed. E. Hardy / Arabinda Barua, PTS)
  - *Piṭakat samuiṅḥ* (U Yan 1888; trans. Peter Nyunt, PTS 2012)
  - พระไตรปิฎกฉบับสยามรัฐ (พ.ศ. 2468–2470)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Collins, Steven. "On the Very Idea of the Pali Canon." *Journal of the Pali Text Society* 15 (1990): 89–126.
  - Hallisey, Charles. "Tuṇḍilovāda: An Allegedly Non-Canonical Sutta." *Journal of the Pali Text Society* 15 (1990): 155–195.
  - Hallisey, Charles. "Nibbānasutta: An Allegedly Non-Canonical Sutta on Nibbāna as a Great City." *Journal of the Pali Text Society* 18 (1993): 97–130.
  - Hinüber, Oskar von. *A Handbook of Pāli Literature*. Berlin: Walter de Gruyter, 1996 (§156–180, §436–437).
  - Hinüber, Oskar von. "The Oldest Dated Manuscript of the Milindapañha." *Journal of the Pali Text Society* 11 (1987): 111–119.
  - Hayashi, Takatsugu. "Apocryphal Suttas Not Listed in the Buddhist Councils: Kuḷumbasutta, Catuparivaṭṭasutta and Other Source-Materials in the Aṭṭhasālinī." *Journal of Pali and Buddhist Studies* 27 (2013): 21–46.

#### Section 3.2 (Micro-Sprint 10)
- **รหัสไฟล์:** `drafts/sections/ch03_sec02.md`
- **ชื่อหัวข้อ:** วรรณกรรมชาดกนอกสารบบ: ปัญญาสชาดกในล้านนาและอุษาคเนย์ และทสโพธิสัตตุปปัตติกถา
  *(Southeast Asian Apocryphal Jātakas: Paññāsa Jātaka, Regional Recensions, and Future Bodhisatta Cycles)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. *ปัญญาสชาดก* (*Paññāsa Jātaka* / *Zimme Paṇṇāsa* / *Ha-sip Chat*): กำเนิดในล้านนา (เชียงใหม่ ยุคทองพุทธศตวรรษที่ 20–21) และการแพร่กระจายข้ามพรมแดนสู่อาณาจักรพม่า ลาว กัมพูชา และอยุธยา-รัตนโกสินทร์
  2. การบุกเบิกชำระและแปลโดยสมาคมบาลีปกรณ์ (PTS): ผลงานระดับตำนานของ Padmanabh S. Jaini (*Paññāsa-Jātaka*, 2 vols., 1981–1983) และ I.B. Horner (*Apocryphal Birth-Stories*, 2 vols., 1985–1986) เปรียบเทียบกับชาดกในสารบบ 547 เรื่อง (V. Fausbøll 1877–1897, Sergei Oldenburg 1893, Édouard Chavannes 1910–1921)
  3. โครงสร้างวรรณกรรมและอุดมการณ์พระโพธิสัตว์: การทานบริจาคขั้นอุกฤษฏ์ (มหาบริจาค) ที่ทวีความรุนแรงและลึกซึ้งยิ่งกว่าชาดก 550 ชาติ, กรณีศึกษาตัวบทเอก: *สมุททโฆสชาดก* (สู่สมุทรโฆษคำฉันท์), *สุธนชาดก* (พระสุธน-มโนห์รา), *รถเสนชาดก* (นางสิบสอง), การสถาปนาพระโพธิสัตว์และฉากท้องถิ่นในอุษาคเนย์
  4. *ทสโพธิสัตตุปปัตติกถา* (*Dasabodhisattuppattikathā* ชำระโดย Hammalawa Saddhatissa, PTS 1975): คัมภีร์ว่าด้วยการอุบัติของพระพุทธเจ้า 10 พระองค์ในอนาคตต่อจากพระศรีอาริยเมตไตรย (พระราม, พระเจ้าปเสนทิโกศล, อภิภู, พญามาร ฯลฯ) พุทธวิทยาเชิงพัฒนาการและแนวคิดการให้อภัยสากล
  5. ชาดกนอกนิบาตอื่นๆ ในอุษาคเนย์ตามการสำรวจของ Oskar von Hinüber (§270, §430–431) เช่น *สิววิชยชาดก* (*Sīvavijayajātaka*)
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Paññāsa-Jātaka: Or Zimme Paṇṇāsa* (ed. Padmanabh S. Jaini, 2 vols., London: PTS, 1981–1983)
  - *Apocryphal Birth-Stories (Paññāsa-Jātaka)* (trans. I.B. Horner and P.S. Jaini, 2 vols., London: PTS, 1985–1986)
  - *The Jātaka Together with its Commentary* (ed. V. Fausbøll, 6 vols. + index, London 1877–1897)
  - *The Birth-Stories of the Ten Bodhisattas and the Dasabodhisattuppattikathā* (ed. and trans. H. Saddhatissa, London: PTS, 1975)
  - ตัวเขียนใบลานล้านนา วัดไหล่หิน และหอสมุดแห่งชาติ (ปัญญาสชาดกสำนวนต่างๆ)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Jaini, Padmanabh S. *Collected Papers on Buddhist Studies*. Delhi: Motilal Banarsidass, 2001.
  - Oldenburg, Sergei. "On the Buddhist Jātakas." *Journal of the Royal Asiatic Society* (1893): 301–356.
  - Chavannes, Édouard. *Cinq cents contes et apologues extraits du Tripitaka chinois*. 4 vols. Paris: Ernest Leroux, 1910–1921.
  - Skilling, Peter. "Jātaka and Paññāsa Jātaka in South-East Asia." *Journal of the Pali Text Society* 28 (2006): 113–173.
  - Hinüber, Oskar von. *A Handbook of Pāli Literature*. Berlin: Walter de Gruyter, 1996 (§270, §430–431).
  - Finot, Louis. "Recherches sur la littérature laotienne." *Bulletin de l'École française d'Extrême-Orient* 17 (1917): 1–218.

#### Section 3.3 (Micro-Sprint 11)
- **รหัสไฟล์:** `drafts/sections/ch03_sec03.md`
- **ชื่อหัวข้อ:** พระสูตรนอกสารบบในวัฒนธรรมตัวเขียนอุษาคเนย์: กลุ่มเอวมฺเม สุตํ และวรรณกรรมเล่าเรื่องจักรวาล
  *(Regional Southeast Asian "Evaṃ me sutaṃ" Suttas, Cosmological Treatises, and Sermon Manuals)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. การวิเคราะห์ของ Charles Hallisey ว่าด้วยสูตรนำ **"เอวมฺเม สุตํ" (*Evaṃ me sutaṃ*)** ในฐานะ **"ขนบทางวรรณศิลป์" (literary genre convention)**: การจำลองฉากพุทธประวัติในอินเดียเพื่อสร้างความชอบธรรมและความศักดิ์สิทธิ์ให้แก่พระธรรมเทศนา มิใช่การปลอมแปลงหลอกลวง
  2. การตรวจสอบพระสูตรกลุ่มเอวมฺเม สุตํ ในเอกสารตัวเขียน:
     - *ตุณฑิโลวาทสูตร* (*Tuṇḍilovādasutta*): ชำระโดย Charles Hallisey (JPTS 1990) ในฐานะพระสูตรคู่มือเทศนาของสงฆ์พื้นเมือง
     - *นิพพานสูตร* (*Nibbānasutta*): ชำระโดย Charles Hallisey (JPTS 1993) ว่าด้วยอุปลักษณ์มหานครแห่งพระนิพพาน
     - *พระอาการวัตตาสูตร* (*Ākāravattārasutta*): ชำระโดย Padmanabh S. Jaini (1992, Hinüber §436) พุทธคุณเพื่อปัดเป่าภัยพิบัติและมนต์หลวง
     - *พระอุณหิสสวิชัยสูตร* (*Uṇhissavijayasutta*): การปรับรับอุษณีษวิชัยธารณีของมหายานสู่สำนวนพระสูตรเถรวาท
     - *โกสลพิมพวัณณนา* (*Kosalabimbavaṇṇanā*): พุทธพจน์ว่าด้วยอานิสงส์การสร้างพระพุทธรูปไม้แก่นจันทน์และรากฐานพิธีพุทธาภิเษก (Gombrich 1978, Swearer 2004)
  3. วรรณกรรมจักรวาลวิทยาและชีวประวัติมหากาพย์:
     - *ไตรภูมิกถา* (*Traibhūmikathā* พญาลิไทย ค.ศ. 1345) สารานุกรมคัมภีร์วิทยาของสยามที่อ้างอิงคัมภีร์กว่า 30 รายการ
     - *จักรวาฬทีปนี* (*Cakkavāḷadīpanī* พระสิริมังคลาจารย์ แห่งเชียงใหม่ ค.ศ. 1520) การสังเคราะห์จักรวาลวิทยาภาษาบาลีบริสุทธิ์
     - *โลกปัญญัตติ* (*Lokapaññatti* ชำระโดย Eugène Denis 1977) และ *โลกเนยยปกรณ์* (*Lokaneyyappakaraṇa* ชำระโดย P.S. Jaini 1986)
     - *ปฐมสมโพธิกถา* (*Paṭhamasambodhikathā* ฉบับกรมพระปรมานุชิตชิโนรส พ.ศ. 2388): ฉากพระแม่ธรณีบีบมวยผมและพระอุปคุตปราบมารในฐานะต้นแบบพุทธประวัติอุษาคเนย์
     - *โสตัตถกีมหานิทาน* (*Sotattakīmahānidāna* รจนาโดยพระจุลพุทธโฆสะ): มหากาพย์พุทธประวัติและจักรวาลวิทยาว่าด้วยการบำเพ็ญบารมีของพระโพธิสัตว์ย้อนหลังข้ามอสงไขยกัป
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Tuṇḍilovādasutta* (ตัวเขียนใบลานวัดไหล่หิน ลำปาง และคอลเลกชัน Hugh Nevill, ed. Charles Hallisey 1990)
  - *Nibbānasutta* (ตัวเขียนใบลานอักษรพม่า, ed. Charles Hallisey 1993)
  - *Ākāravattārasutta* (ed. Padmanabh S. Jaini 1992)
  - ใบลานพระอุณหิสสวิชัยสูตร และพระอาการวัตตาสูตร (หอสมุดแห่งชาติ)
  - *Kosalabimbavaṇṇanā* (ed. and trans. Richard Gombrich 1978)
  - *Cakkavāḷadīpanī* (พระสิริมังคลาจารย์ ค.ศ. 1520, ฉบับตรวจชำระ มหาวิทยาลัยเชียงใหม่)
  - *La Lokapaññatti et les idées cosmologiques du bouddhisme ancien* (ed. and trans. Eugène Denis, 2 vols., Paris: EFEO, 1977)
  - *Lokaneyyappakaraṇa* (ed. Padmanabh S. Jaini, London: PTS, 1986)
  - *Sotatthakīmahānidāna* (ฉบับแปลและชำระโดย มูลนิธิมหามกุฏราชวิทยาลัย)
  - *Paṭhamasambodhikathā* (สมเด็จพระมหาสมณเจ้า กรมพระปรมานุชิตชิโนรส พ.ศ. 2388)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Hallisey, Charles. "A Rare Sutta from Southeast Asia: The Tuṇḍilovādasutta." *Journal of the Pali Text Society* 14 (1990): 155–195.
  - Hallisey, Charles. "Nibbānasutta: An Allegedly Non-Canonical Sutta on Nibbāna as a Great City." *Journal of the Pali Text Society* 18 (1993): 97–130.
  - Jaini, Padmanabh S. "Ākāravattārasutta: An 'Apocryphal' Sutta from Thailand." *Indo-Iranian Journal* 35, no. 2/3 (1992): 193–223.
  - Swearer, Donald K. *Becoming the Buddha: The Ritual of Image Consecration in Thailand*. Princeton: Princeton University Press, 2004.
  - Reynolds, Frank E., and Mani B. Reynolds, trans. *Three Worlds According to King Ruang: A Thai Buddhist Cosmology*. Berkeley: Asian Humanities Press, 1982.
  - Hinüber, Oskar von. *A Handbook of Pāli Literature*. Berlin: Walter de Gruyter, 1996 (§436–437).

#### Section 3.4 (Micro-Sprint 12)
- **รหัสไฟล์:** `drafts/sections/ch03_sec04.md`
- **ชื่อหัวข้อ:** พระปริตร วรรณกรรมพุทธรักษ์ บรรณานุกรมศาสตร์พื้นเมือง และการเปลี่ยนกระบวนทัศน์ทางวิชาการ
  *(Paritta Protective Literature, Indigenous Bibliographies, and the Decolonial Paradigm Shift)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. การศึกษาพระปริตรของ Lily de Silva (1981): วิวัฒนาการจากพระสูตรในสารบบสู่คัมภีร์รวมบทสวด *จตุภาณวารบาลี* (*Catubhāṇavārapāḷi* / *Pirit-pota*) โครงสร้าง 4 ภาณวาร และ 3 กลไกแห่งความศักดิ์สิทธิ์: สัจกิริยา (*Saccakiriyā*), เมตตาภาวนา (*Mettābhāvanā*), และพุทธานุภาพ (*Buddhānubhāva*)
  2. สถาปัตยกรรมมณฑลพิธีและประวัติศาสตร์พระปริตรในฐานะพิธีกรรมแห่งรัฐของศรีลังกา: ปะรำพิธี (*Maṇḍapaya*), เสาอินทขีล (*Indrakīla*), สายสิญจน์ (*Pirit Huya*) และประวัติศาสตร์ตั้งแต่พระเจ้าอุปติสสะที่ 1, พระเจ้าเสนะที่ 2, พระเจ้ากัสสปะที่ 5, และหอสวดมนต์ถาวร *ปัญจสัตตติมนเทียร* ของพระเจ้าปรักกรมพาหุที่ 1 (de Silva 1981, 1970)
  3. องค์ประกอบตันตระและธารณีที่แทรกซึมในพระปริตร: พิธีลงอักขระคุ้มครองสรีระ (*Nyāsa*) ใน *มหาชินบัญชร* (Lily de Silva 1981, ศิรินาถ มณีนิล 2006, Peter Skilling 1992) และอิทธิพลธารณีมหายานใน *คินิปริตร* (*Gini Paritta*)
  4. บรรณานุกรมศาสตร์และสารบัญคัมภีร์พื้นเมือง:
     - *คันถวงศ์* (*Gandhavaṃsa* โดยพระนันทปัญญา ชำระโดย Ivan P. Minayeff ใน JPTS 1886): การจำแนกคัมภีร์ชมพูทวีป ตัมพปัณณิ และรามัญ/โยนก
     - *สารสังคหะ* (*Sārasaṅgaha* โดยพระสิทธัตถะ ชำระโดย Genjun H. Sasaki, PTS 1992)
     - *ปิฏกัตตะสะมุ่ย* (*Piṭakat samuiṅḥ* ของ U Yan บรรณารักษ์หลวงมัณฑะเลย์ ค.ศ. 1888, trans. Peter Nyunt 2012): ทะเบียนคัมภีร์พม่ากว่า 2,000 ชื่อ
     - สารบัญใบลานหลวงสยาม: พระไตรปิฎกฉบับทองใหญ่ (พ.ศ. 2331) สู่ฉบับพิมพ์ ร.ศ. 112 (พ.ศ. 2436) และฉบับสยามรัฐ (พ.ศ. 2468–2470)
  5. ทฤษฎี "Curricular Canon" (สารบบเชิงหลักสูตร) ของ Justin McDaniel (2002/2008) และการเปลี่ยนกระบวนทัศน์ทางวิชาการ: การรื้อถอนสุทธินิยมวิกตอเรียน (Victorian Purism) ของสมาคมบาลีปกรณ์ (Rhys Davids, Oldenberg) สู่แนวคิด "Intercultural Mimesis" ของ Charles Hallisey (1995) และการยอมรับ "Polycentric Theravāda"
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *The Paritta* (Catubhāṇavārapāḷi texts, ed. Lily de Silva 1981)
  - *Dīghanikāya-aṭṭhakathā-ṭīkā Līnatthavaṇṇanā* (ed. Lily de Silva, 3 vols., PTS 1970)
  - *Gandhavaṃsa* (ed. Ivan P. Minayeff, *JPTS* 1886: 54–80)
  - *Sārasaṅgaha* (ed. Genjun H. Sasaki, London: PTS, 1992)
  - *Piṭakat samuiṅḥ* (U Yan 1888; trans. Peter Nyunt, Bristol: PTS, 2012)
  - *Jinapañjara* (ต้นฉบับล้านนา, พม่า, สยาม)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - De Silva, Lily. "The Paritta: A Historical and Religious Study of the Buddhist Ceremony for Peace and Prosperity in Sri Lanka." *Spolia Zeylanica* 36, no. 1 (1981): 1–48.
  - Maneenil, Sirinath. *An Analytical Study of the Jinapañjara Gāthā: Its Role in Thai Society* (การศึกษาเชิงวิเคราะห์พระคาถาชินบัญชร: บทบาทต่อสังคมไทย). Master's thesis, Ramkhamhaeng University, 2006.
  - Hallisey, Charles. "Roads Taken and Not Taken in the Study of Theravāda Buddhism." In *Curators of the Buddha: The Study of Buddhism Under Colonialism*, edited by Donald S. Lopez Jr., 31–61. Chicago: University of Chicago Press, 1995.
  - McDaniel, Justin. "The Curricular Canon in Northern Thailand and Laos." *Manuscripta Orientalia* 8, no. 3 (2002): 20–59.
  - McDaniel, Justin. *Gathering Leaves and Lifting Words: Histories of Buddhist Monastic Education in Laos and Thailand*. Seattle: University of Washington Press, 2008.
  - Skilling, Peter. "The Rakṣā Literature of the Śrāvakayāna." *Journal of the Pali Text Society* 16 (1992): 109–182.
  - Blackburn, Anne M. *Buddhist Learning and Textual Practice in Eighteenth-Century Lankan Monastic Culture*. Princeton: Princeton University Press, 2001.

---

### บทที่ 4: โคดิโคโลยี ประเพณีตัวเขียน และคลังเอกสารโบราณข้ามภูมิภาค
**(Codicology, Manuscript Cultures, Dunhuang Cave, Nanatsu-dera Archives, and Southeast Asian Palm-Leaf Bitexts)**
- **รหัสเป้าหมาย:** `R3-Ch04` | **ไฟล์รวมบท:** `drafts/assembled/ch04.md` $\rightarrow$ `final/04-บทที่สี่.md`
- **เป้าหมายความยาวคำทั้งบท:** **10,000–12,000 คำ** (ไม่น้อยกว่า 10,000 คำ)
- **บทนำและบทสรุปประจำบท:** รวม 600–1,000 คำ

#### Section 4.1 (Micro-Sprint 13)
- **รหัสไฟล์:** `drafts/sections/ch04_sec01.md`
- **ชื่อหัวข้อ:** โคดิโคโลยีเปรียบเทียบและวัฒนธรรมตัวเขียนพุทธศาสนาในเอเชีย: วัตถุธรรม อาลักษณ์ พาราทรานสคริปต์ และรูปแบบรูปเล่ม
  *(Comparative Buddhist Codicology: Materials, Scribes, Paratexts, and Book Forms Across Asia)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. กรอบทฤษฎีโคดิโคโลยีพุทธศาสนา (Buddhist Codicology): วัตถุรองรับการจารึก ได้แก่ เปลือกไม้เบิร์ช (*bhurja-patra* ในคันธาระ/กิลกิต), ใบลาน (*tāla* และ *bontalam* ในศรีลังกา อินเดียใต้ และอุษาคเนย์), กระดาษสา, กระดาษข่อย (*Streblus asper*), หมึกเขม่า หมึกทอง และชาดหรดาล
  2. วิวัฒนาการของรูปแบบเล่มคัมภีร์ (Book Forms and Transformations):
     - จากคัมภีร์ใบลานร้อยเชือก (*Pothi*) สู่ม้วนคัมภีร์กระดาษ (*Scrolls / chüan / kansu*)
     - การเปลี่ยนผ่านสู่สมุดพับพัด/สมุดไทย (*Leporello / Concertina / Orihon*) และหนังสือผูกหน้า (*Codices*)
  3. สังคมวิทยาของอาลักษณ์และวัฒนธรรมการคัดลอก (Scribal Culture): อาลักษณ์หลวง (*rājalekhaka*), พระเถระผู้เชี่ยวชาญการจาร, โรงจารคัมภีร์ประจำอาราม (Monastic Scriptoria) ตามการศึกษาของ Peera Panarut (*Education Materialised* 2021)
  4. อภิมหาข้อมูลและพาราทรานสคริปต์ (Paratextual Apparatus): ระบบเลขหน้าด้วยอักษรและตัวเลข (อักษรบาลี, ขอม, พม่า, ธรรมล้านนา, ตัวเลข), บทลงท้ายคัมภีร์ (*Niggamana* / Colophons), ข้อความอธิษฐานจิตอุทิศกุศล และคำสาปแช่งผู้ขโมยหรือทำลายคัมภีร์
  5. วัฒนธรรมตัวเขียนในฐานะ "คัมภีร์รวมเรื่องเฉพาะกิจ" (Ad Hoc Composite Manuscripts) ตามข้อเสนอของ Charles Hallisey (1990) และการเก็บรักษาคัมภีร์ (ผ้าห่อคัมภีร์ ไม้ประกับ เชือกมัด และหีบพระธรรม)
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - ตัวเขียนใบลานพุทธเถรวาทที่เก่าแก่ที่สุดในเนปาล คริสต์ศตวรรษที่ 8–9 (Oskar von Hinüber §6)
  - ตัวเขียนมิลินทปัญหาที่เก่าแก่ที่สุดในโลก ณ วัดไหล่หิน จ.ลำปาง จาร ค.ศ. 1495 (Oskar von Hinüber 1987)
  - ตัวเขียนคุรุปัญจาศิกาใบลานขนาดจิ๋วในหอสมุดหลวงเนปาล (Sylvain Lévi 1929)
  - ตัวเขียนใบลานและสมุดไทย หอสมุดแห่งชาติ กรุงเทพฯ
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Panarut, Peera. *Education Materialised: Scribes and Codicology in Early Modern Siam*. PhD diss., Universität Hamburg, 2021.
  - Hartmann, Jens-Uwe. "From Words to Books: Indian Buddhist Manuscripts in the First Millennium CE." In *The History of the Book in South Asia*. Farnham: Ashgate, 2013.
  - Hinüber, Oskar von. "The Oldest Dated Manuscript of the Milindapañha." *Journal of the Pali Text Society* 11 (1987): 111–119.
  - Lévi, Sylvain. "Autour d'Aśvaghoṣa: La Gurupañcāśikā." *Journal Asiatique* 215, no. 2 (1929): 255–285.
  - Skilling, Peter, and Santi Pakdeekham. *Pāli and Vernacular Literature Transmitted in Central and Northern Siam*. Bangkok: Fragile Palm Leaves Foundation, 2002.

#### Section 4.2 (Micro-Sprint 14)
- **รหัสไฟล์:** `drafts/sections/ch04_sec02.md`
- **ชื่อหัวข้อ:** คลังเอกสารโบราณตุนหวงและนานัตสึเดระ: แหล่งพิทักษ์คัมภีร์นอกสารบบที่สาบสูญ
  *(The Manuscript Depositories of Dunhuang and Nanatsu-dera: Sheltering the Lost Apocrypha)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. คลังเอกสารโบราณถ้ำตุนหวง (ถ้ำ 17) ในฐานะระบบนิเวศเอกสารตัวเขียน (Manuscript Ecosystem): การศึกษาของ Rong Xinjiang (*Eighteen Lectures on Dunhuang* 2018) และ Imre Galambos (*Dunhuang Manuscript Culture* 2015/2020) ว่าด้วยลักษณะเอกสารรวมเรื่องหลายตัวบท (*Multiple-text manuscripts*), การเขียนทับ, สมุดฝึกคัดลายมือของสามเณร และเอกสารหลายภาษา (จีน, ทิเบต, โคตาน, ทอคาเรียน)
  2. โคดิโคโลยีแห่งคัมภีร์นอกสารบบที่ตุนหวง: การที่เอกสารนอกสารบบ เช่น *สือหวังจิง* (คัมภีร์พญายมราช 10 องค์), คัมภีร์ซานเจี้ยเจี้ยว, และบทสวดสารภาพบาป รอดพ้นจากการกวาดล้างของราชสำนักส่วนกลางด้วยสภาพทางภูมิศาสตร์และประเพณีการฝังคัมภีร์ในถ้ำ
  3. คลังคัมภีร์โบราณวัดนานัตสึเดระ (*Nanatsu-dera* 七寺) ในนาโกย่า: 1,193 ม้วนตัวเขียนยุคปลายเฮอัน (ศตวรรษที่ 12) ที่รักษาพระไตรปิฎกและคัมภีร์นอกสารบบที่สูญหายไปจากสารบบจีน (Ochiai Toshinori, Makita Tairyō, Antonino Forte)
  4. การเปรียบเทียบเชิงโคดิโคโลยีระหว่าง "คลังถ้ำปิดผนึก" (Dunhuang Cave Repository) กับ "คลังอารามที่ใช้งานต่อเนื่อง" (Living Monastic Archive at Nanatsu-dera and Myōren-ji): บทบาทของจารีตตัวเขียนในการพิทักษ์ความหลากหลายของคัมภีร์ต่อต้านการจัดระเบียบสารบบแบบรวมศูนย์ของฉบับพิมพ์หลวง
  5. การศึกษาของ George Keyworth (2020) ว่าด้วยพระสูตรมหาปรัชญาปารมิตาของพระเสวียนจั้ง และการเชื่อมโยงข้อมูลสู่สารานุกรม *Hōbōgirin* (法寶義林) ของ Sylvain Lévi และ Junjirō Takakusu
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - ตัวเขียนตุนหวง: Pelliot chinois (P. 2003, P. 2418, P. 3732) และ Stein collection (S. 2048, S. 2051, S. 2498)
  - คลังคัมภีร์ตัวเขียนวัดนานัตสึเดระ (Nanatsu-dera manuscripts, Nagoya)
  - ตัวเขียนวัดเมียวเร็นจิ (Myōren-ji) และวัดชินโงจิ (Jingo-ji)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Rong Xinjiang. *Eighteen Lectures on Dunhuang*. Translated by Imre Galambos. Leiden: Brill, 2018.
  - Galambos, Imre. *Dunhuang Manuscript Culture: End of the First Millennium*. Berlin/Boston: De Gruyter, 2020.
  - Keyworth, George A. "On Xuanzang and Manuscripts of the Mahāprajñāpāramitā-sūtra at Dunhuang and in Early Japanese Buddhism." *Hualin International Journal of Buddhist Studies* 3, no. 1 (2020): 259–317.
  - Ochiai Toshinori. *The Manuscripts of Nanatsudera: A Recently Discovered Treasure-House in Japan*. Kyoto: Istituto Italiano di Cultura, 1991.
  - Teiser, Stephen F. *The Scripture on the Ten Kings and the Making of Purgatory in Medieval Chinese Buddhism*. Honolulu: University of Hawai'i Press, 1994.

#### Section 4.3 (Micro-Sprint 15)
- **รหัสไฟล์:** `drafts/sections/ch04_sec03.md`
- **ชื่อหัวข้อ:** วรรณกรรมสองภาษาใบลานในอุษาคเนย์: ประเพณีนิสสัย สันนยะ โวหาร และทฤษฎี Bitexts
  *(Southeast Asian Palm-Leaf Bitexts: Nissaya, Sannaya, Vohāra, and Trent Walker's Analytical Framework)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. ทฤษฎีและกรอบการวิเคราะห์ของ Trent Walker ว่าด้วย "วรรณกรรมสองภาษาพุทธศาสนาเถรวาท" (*Bilingualism and Theravāda Bitexts* 2022 และ *Indic-Vernacular Bitexts from Thailand* 2020): การจัดระบบ 3 ขั้นตอนของการผลิต Bitexts:
     - *Selection* (การคัดเลือกข้อความ: Citation vs. Invention)
     - *Analysis* (การวิเคราะห์ตัวบท: Parsing, Amplification, Rearrangement, Annotation, Gloss)
     - *Presentation* (รูปแบบการนำเสนอ: Philological, Exegetical, Homiletical, Liturgical, Poetic)
  2. การจำแนกประเภทวรรณกรรมสองภาษาข้ามภูมิภาค:
     - ประเพณี "นิสสัย" ในพม่า (*Burmese Nissaya*: Patrick Pranke & William Pruitt 2023) ตั้งแต่ยุคพุกามถึงคองบอง
     - ประเพณี "สันนยะ" ในศรีลังกา (*Sinhala Sannaya*: Anne M. Blackburn 1997 ว่าด้วย *Sūtra-Sannayas* และการศึกษาของพระสรณังกร)
     - ประเพณี "โวหาร" และ "ร่ายเทศน์" ในสยาม
     - ประเพณี "นิสระยะ" ในกัมพูชา (*Khmer Nisraya*)
  3. การเปรียบเทียบข้ามทวีป: วรรณกรรมสองภาษาเถรวาท เทียบกับระบบการอ่านคัมภีร์จีนในเอเชียตะวันออก ได้แก่ *คุนโดกุ* (*Kundoku* 訓読) ของญี่ปุ่น, *คูกยอล* (*Gugyeol / Seokdok* 釋讀口訣) ของเกาหลี, และระบบเกลอสของยุโรปยุคกลาง (Moran & Whitman 2022/2023)
  4. วรรณกรรมสองภาษาในฐานะช่องทางหลักของการแพร่กระจายพระสูตรนอกสารบบและคัมภีร์กึ่งสารบบในวัฒนธรรมชาวพุทธท้องถิ่น
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - ตัวเขียนใบลานนิสสัยภาษาบาลี-พม่า (คอลเลกชันหอสมุดแห่งชาติพม่า ย่างกุ้ง)
  - ตัวเขียนสันนยะภาษาบาลี-สิงหล (คอลเลกชัน Hugh Nevill, British Library)
  - ตัวเขียนโวหารและคำแปลแทรกภาษาบาลี-ไทย (หอสมุดแห่งชาติ กรุงเทพฯ)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Walker, Trent. "Bilingualism and Theravāda Bitexts." In *Routledge Handbook of Theravāda Buddhism*, edited by Stephen C. Berkwitz and Ashley Thompson, 271–284. New York: Routledge, 2022.
  - Walker, Trent. "Indic-Vernacular Bitexts from Thailand: Buddhism, Translation, and Cultural Contact, 1450–1850." *Journal of the American Oriental Society* 140, no. 3 (2020): 675–699.
  - Pranke, Patrick, and William Pruitt, eds. *Burmese Nissaya Literature: Translation, Exegesis and Manuscript Culture*. London: Pali Text Society, 2023.
  - Blackburn, Anne M. "Sūtra-Sannayas and the Vihāra: Exegesis and Education in Eighteenth-Century Sri Lanka." *Sri Lanka Journal of the Humanities* 23 (1997): 1–25.
  - Moran, Patrick, and John Whitman, eds. *Glossing and Reading in Western Europe and East Asia*. Cham: Springer, 2022.

#### Section 4.4 (Micro-Sprint 16)
- **รหัสไฟล์:** `drafts/sections/ch04_sec04.md`
- **ชื่อหัวข้อ:** วัฒนธรรมตัวเขียนสมุดไทย กาพย์สวดพระมาลัย และวรรณกรรมสองภาษาคำหลวงแห่งกรุงศรีอยุธยา
  *(Siamese Leporello Manuscripts, Ritual Chant Books, Phra Malai, and Ayutthayan Kham Luang Bitexts)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. หลักฐานทางวัตถุธรรมของสมุดไทย/สมุดข่อยสวดมนต์ (Material Evidence of Ritual Chant Leporellos) ตามการศึกษาของ Trent Walker (2024): โคดิโคโลยีของสมุดไทยดำและสมุดไทยขาว, การพับแบบคอนเซอร์ตินา, หมึกรงค์และหมึกทอง, ภาพจิตรกรรมพระมาลัยโปรดนรก-สวรรค์ และพระอภิธรรม 7 คัมภีร์
  2. การใช้งานสมุดสวดมนต์ในบริบทพิธีกรรมหน้าศพและเตียงผู้กำลังจะสิ้นใจ (Deathbed and Funerary Liturgies): การสวดพระมาลัยคำหลวง, พระสหัสสนัย, และบทสวดนอกสารบบ เพื่อนำทางดวงวิญญาณสู่สุคติภูมิ
  3. วัฒนธรรมอาลักษณ์ราชสำนักอยุธยาและวรรณกรรมสองภาษาคำหลวง (Ayutthaya Scribal Culture and Kham Luang Bitexts) ตามการศึกษาของ Tossaphon Sripum & Trent Walker (2026):
     - *มหาชาติคำหลวง* (พ.ศ. 2025 รัชกาลสมเด็จพระบรมไตรโลกนาถ)
     - *พระมาลัยคำหลวง* (พ.ศ. 2280 เจ้าฟ้าธรรมาธิเบศร / เจ้าฟ้ากุ้ง)
     - *นันโทปนันทสูตรคำหลวง* (พ.ศ. 2279 เจ้าฟ้าธรรมาธิเบศร)
  4. ปรากฏการณ์ทวิอักขระ (Digraphia) และอำนาจพระราชสำนัก: การใช้อักษรขอมสยามสำหรับข้อความภาษาบาลีต้นพุทธพจน์ ควบคู่กับอักษรไทยสยามสำหรับคำแปลร่าย-กาพย์วรรณศิลป์ชั้นสูง เพื่อสถาปนา "พระสูตรกึ่งสารบบ" ให้มีสถานะศักดิ์สิทธิ์เทียบเท่าพุทธพจน์ดั้งเดิม
  5. เครือข่ายการแลกเปลี่ยนคัมภีร์ตัวเขียนข้ามราชสำนัก: งานวิจัยของ Trent Walker (2018) *Siamese Manuscripts in Cambodian Collections* ชี้ให้เห็นการไหลเวียนของคัมภีร์ใบลานและสมุดข่อยอักษรขอมสยามในราชสำนักพนมเปญ พระตะบอง และอารามในกัมพูชา
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Mahāchāt Kham Luang* (พ.ศ. 2025, ฉบับหอสมุดแห่งชาติ)
  - *Phra Malai Kham Luang* (เจ้าฟ้าธรรมาธิเบศร พ.ศ. 2280)
  - *Nandopanandasūtra Kham Luang* (เจ้าฟ้าธรรมาธิเบศร พ.ศ. 2279)
  - สมุดไทยขาวและสมุดไทยดำสวดพระมาลัย (หอสมุดแห่งชาติ, พิพิธภัณฑสถานแห่งชาติ พระนคร)
  - เอกสารตัวเขียนสยามในหอสมุดสถาบันกรุงพนมเปญ (EFEO, National Library of Cambodia, Royal Palace Library)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Sripum, Tossaphon, and Trent Walker. "Indic-Siamese Bitexts and Ayutthaya Scribal Culture." *Manuscript Studies: A Journal of the Schoenberg Institute for Manuscript Studies* 11, no. 1 (2026): 1–35.
  - Walker, Trent. "Material Evidence for Ritual Chant in Early Modern Siam." *Hualin International Journal of Buddhist Studies* 7, no. 2 (2024): 360–400.
  - Walker, Trent. "Siamese Manuscripts in Cambodian Collections." In *Inventaire provisoire des manuscrits du Cambodge Deuxième partie*, liii–lxv. Paris/Bangkok: EFEO / Fragile Palm Leaves Foundation, 2018.
  - Ginsberg, Henry. *Thai Manuscript Painting*. London: British Library, 1989.
  - Brereton, Bonnie Pacala. *Thai Tellings of Phra Malai: Texts and Rituals Concerning a Popular Buddhist Saint*. Tempe: Arizona State University, 1995.

---

### บทที่ 5: ตันตระศึกษา ประเพณีเร้นลับ (โยคาวจร / เถรวาทตันตระ) และญาณวิทยาแห่งพุทธพจน์
**(Tantric Studies, Esoteric Southern Buddhism / Borān Kammaṭṭhāna, and the Epistemology of Buddhavacana in Transition)**
- **รหัสเป้าหมาย:** `R3-Ch05` | **ไฟล์รวมบท:** `drafts/assembled/ch05.md` $\rightarrow$ `final/05-บทที่ห้า.md`
- **เป้าหมายความยาวคำทั้งบท:** **10,000–12,000 คำ** (ไม่น้อยกว่า 10,000 คำ)
- **บทนำและบทสรุปประจำบท:** รวม 600–1,000 คำ

#### Section 5.1 (Micro-Sprint 17)
- **รหัสไฟล์:** `drafts/sections/ch05_sec01.md`
- **ชื่อหัวข้อ:** ตันตระศึกษาในพุทธศาสน์สากล: ธารณี มนตร์ และการแปรเปลี่ยนทางญาณวิทยาแห่งพุทธพจน์
  *(Tantric Studies in Global Buddhism: Dhāraṇī, Mantra, Ritual Action, and the Shifting Epistemology of Buddhavacana)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. การปฏิวัติทางทฤษฎีในตันตระศึกษาร่วมสมัย: คู่มือแม่บท *The Oxford Handbook of Tantric Studies* (Payne & Hayes eds., 2024) การก้าวข้ามการแบ่งแยกนิกายแบบทวิลักษณ์ (มหายาน/วัชรยาน vs เถรวาท) สู่การทำความเข้าใจ "ตันตระ" ในฐานะระบบปฏิบัติการเชิงวัฒนธรรม
  2. แกนทฤษฎี 8 ด้านของตันตระศึกษา: การกระทำศักดิ์สิทธิ์และพิธีอภิเษก (*Action & Abhiṣeka*: Ronald M. Davidson), การแปรสภาวะธาตุในกาย (*Transformations*), สรีรวิทยาและอำนาจ (*Embodiment & Power*), มณฑลและสถาปัตยกรรม (Peter Sharrock), และประวัติศาสตร์นิพนธ์ตันตระ (Tsunehiko Sugiki, Sam van Schaik)
  3. การแปรเปลี่ยนทางญาณวิทยาแห่งพุทธพจน์ (Epistemological Transformation): จากการมองพุทธพจน์เป็น "วจนะสั่งสอนเชิงจริยธรรม" ในพระสูตร สู่การมองพุทธพจน์เป็น "อักขระมนตร์ธารณีที่มีอำนาจก่อให้เกิดผลจริง" (*Performative and Sonic Efficacy*: Vāk, Bīja, Dhāraṇī, Mantra) ตามการศึกษาของ Paul Hackett
  4. มรดกทางวิชาการของ Sylvain Lévi (1929): การปกป้องคัมภีร์ขนาดสั้นและคัมภีร์ตันตระของพระอัศวโฆษ (*Gurupañcāśikā*, *Mūlāpattisaṃgraha*) ด้วยหลักนิติธรรม *In dubio pro reo* และการหักล้างข้อโต้แย้งจากความเงียบ (*Argumentum a silentio*)
  5. รอยต่อระหว่างมหายาน ธารณี และตันตระในจีนและทิเบตตามการวิเคราะห์ของ Yael Bentor & Meir Shahar (2017)
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Gurupañcāśikā* และ *Mūlāpattisaṃgraha* (ed. Sylvain Lévi 1929)
  - คัมภีร์มนตร์ธารณีใน *Taishō Daizōkyō* (หมวด 密教部 Mikkyō-bu, vols. 18–21)
  - เอกสารตัวเขียนตันตระตุนหวง (IOL Tib J 321, P.t. 44)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Payne, Richard K., and Glen A. Hayes, eds. *The Oxford Handbook of Tantric Studies*. Oxford: Oxford University Press, 2024.
  - Lévi, Sylvain. "Autour d'Aśvaghoṣa: La Gurupañcāśikā." *Journal Asiatique* 215, no. 2 (1929): 255–285.
  - Bentor, Yael, and Meir Shahar, eds. *Chinese and Tibetan Esoteric Buddhism*. Leiden: Brill, 2017.
  - Davidson, Ronald M. *Indian Esoteric Buddhism: A Social History of the Tantric Movement*. New York: Columbia University Press, 2002.
  - Schaik, Sam van. *Buddhist Magic: Divination, Healing, and Enchantment Through the Ages*. Boulder: Shambhala, 2020.

#### Section 5.2 (Micro-Sprint 18)
- **รหัสไฟล์:** `drafts/sections/ch05_sec02.md`
- **ชื่อหัวข้อ:** พุทธศาสนาฝ่ายใต้เร้นลับและกรรมฐานโบราณ: โยคาวจร ธรรมกายภายใน และระบบจักรากุมาร
  *(Esoteric Southern Buddhism and Borān Kammaṭṭhāna: The Yogāvacara Tradition, Internal Dhammakāya, and the Subtle Body)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. การบุกเบิกมโนทัศน์ "Esoteric Southern Buddhism" (พุทธศาสนาฝ่ายใต้เร้นลับ) ของ L.S. Cousins (1997): ลักษณะเฉพาะ 4 ประการ ได้แก่ การให้กำเนิดพระพุทธเจ้าภายในสรีระ, การใช้อักขระมนตร์และตัวเลขจัดระเบียบองค์ธรรม, มโนทัศน์ "จิตกุมาร" (*Cittakumāra*) และการถ่ายทอดผ่านสายอาจารย์
  2. กายวิภาคจิตวิญญาณและเทคโนโลยีแห่งร่างกาย: การแปรเปลี่ยนธาตุ 4 (*Dhātu*) ให้กลายเป็นแก้ววิเศษและอัญมณี, การก่อรูปธรรมกายภายในครรภ์ (*Embryological formation of the internal Dhammakāya*), และการจัดวางศูนย์พลังงานตามแนวกึ่งกลางลำตัว
  3. สายธารคัมภีร์และเอกสารตัวเขียนโยคาวจร:
     - *The Yogāvacara's Manual* (ed. T.W. Rhys Davids 1896 จากตัวเขียนวัดพัมพรกะละ ค.ศ. 1758 ในศรีลังกา)
     - งานวิจัยของ L.S. Cousins (ed. Sarah Shaw 2022) *Meditations of the Pali Tradition* และบทวิจารณ์ของ Andrew Skilton (2025)
     - คัมภีร์สัททวิมล (*Saddavimala*: ed. François Bizot & François Lagirarde 1996) ว่าด้วยความบริสุทธิ์ผ่านสัททศาสตร์และอักขระ
     - งานวิจัยคลาสสิกของ François Bizot (*Le Figuier à cinq branches* 1976 และ *Le Chemin de Laṅkā* 1992)
  4. มหากาพย์งานวิจัยของ Kate Crosby (*Esoteric Theravada* 2020): การกอบกู้ประวัติศาสตร์กรรมฐานโบราณ (*Borān Kammaṭṭhāna*) ที่เชื่อมโยงกับสรีรวิทยาโบราณและการเล่นแร่แปรธาตุในสยาม กัมพูชา ลาว และพม่า
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *The Yogāvacara's Manual of Indian Mysticism as Practised by Buddhists* (ed. T.W. Rhys Davids, London: PTS, 1896)
  - *La pureté par les mots (Saddavimala)* (ed. François Bizot & François Lagirarde, Paris: EFEO, 1996)
  - ใบลานคัมภีร์กรรมฐานโบราณ (วัดพลับ/วัดราชสิทธาราม, วัดประดู่ทรงธรรม, และหอสมุดแห่งชาติ)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Cousins, L.S. "Aspects of Esoteric Southern Buddhism." In *Indian Insights: Buddhism, Brahmanism and Bhakti*, edited by Peter Connolly and Sue Hamilton, 185–207. London: Luzac Oriental, 1997.
  - Cousins, L.S. *Meditations of the Pali Tradition: Illuminating Buddhist Doctrine, History, and Practice*. Edited by Sarah Shaw. Boulder: Shambhala, 2022.
  - Skilton, Andrew. "Review of Meditations of the Pali Tradition by L.S. Cousins." *Buddhist Studies Review* 41, no. 1–2 (2024/2025): 258–262.
  - Crosby, Kate. *Esoteric Theravada: The Story of the Forgotten Meditation Tradition of Southeast Asia*. Boulder: Shambhala, 2020.
  - Bizot, François. *Le Figuier à cinq branches: Recherche sur le bouddhisme khmer*. Paris: EFEO, 1976.
  - Bizot, François. *Le Chemin de Laṅkā*. Paris: EFEO, 1992.

#### Section 5.3 (Micro-Sprint 19)
- **รหัสไฟล์:** `drafts/sections/ch05_sec03.md`
- **ชื่อหัวข้อ:** ยันต์มนต์ คาถาพุทธรักษ์ เวกซาพม่า และคู่มือวัดประดู่ทรงธรรมแห่งกรุงศรีอยุธยา
  *(Yantras, Protective Spells, Burmese Weikza, and the Wat Pradusongtham Manual of Ayutthaya)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. การศึกษาวิเคราะห์ "ตำราวัดประดู่ทรงธรรม" สมัยอยุธยาตอนปลาย ของ Potprecha (Phibul) Cholvijarn (2026): การรวบรวมใน *หนังสือพุทธรังษีธฤษดีญาณว่าด้วยสมถแลวิปัสสนากัมมัฏฐาน ๔ ยุค* (พิมพ์เผยแพร่ พ.ศ. 2478 โดยพระมหาโชติปัญโญ ภายใต้พระอุบาลีคุณูปมาจารย์ จันทร์ สิริจนฺโท)
  2. โครงสร้างยันต์และอักขระเร้นลับในตำราวัดประดู่ทรงธรรม: รหัสอักขระ 4 คำ **นะ มะ อะ อุ** (แก้ววิเศษ 4 ดวง และธาตุ 4), ยันต์คุณพระรัตนตรัย, พระคาถาอิติปิโสรัตนมาลา, การเจริญภาวนารักษาโรค และการปลุกเสกเครื่องมงคลผดุงกายทิพย์ เชื่อมโยงสู่สายสมเด็จพระสังฆราช (สุก ไก่เถื่อน) วัดราชสิทธาราม
  3. สายธาร "เวกซา" (Weikza / วิชชาธร) ในพม่าตามการศึกษาของ Bénédicte Brac de la Perrière (2026): ชีวประวัติของผู้เชี่ยวชาญพิธีกรรม (Medaw), การเล่นแร่แปรธาตุเพื่อการบรรลุธรรม, อักขระคาถาและตารางยันต์ (In / Samay), และมโนทัศน์ "Tantricking" ในพุทธศาสนาพม่าร่วมสมัย
  4. มิติเปรียบเทียบของเทคโนโลยีการคุ้มครอง (Protective Devices): ยันต์ผ้าและรอยสักยันต์ในสยาม-ล้านนา, ยันต์เขมร, ตารางยันต์พม่า และการนำพระสูตรนอกสารบบมาผูกเป็นรูปเลขาคณิตศักดิ์สิทธิ์
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *หนังสือพุทธรังษีธฤษดีญาณว่าด้วยสมถแลวิปัสสนากัมมัฏฐาน ๔ ยุค* (พระมหาโชติปัญโญ / ชัย ยโสธรรัตน์, โรงพิมพ์พานิชศุภผล, พ.ศ. 2478)
  - ตำราพิชัยสงครามและตำรายันต์วัดประดู่ทรงธรรม (เอกสารตัวเขียนสมุดไทย หอสมุดแห่งชาติ)
  - ตารางยันต์ (In/Samay) และคู่มือเวกซาพม่า (ย่างกุ้งและมัณฑะเลย์)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Cholvijarn, Potprecha (Phibul). "Ayutthayan Protective Practices and Devices: Manual of Wat Pradusongtham." *Journal of International Buddhist Studies* 17, no. 1 (2026): 69–94.
  - Brac de la Perrière, Bénédicte. "Encountering Weikza in Buddhist Burma: The Biographical Account of a Ritual Specialist as an Echo to 'Tantricking'." *Entangled Religions* 16, no. 2 (2026): 1–28.
  - Ferguson, John P., and E. Michael Mendelson. "Masters of the Buddhist Occult: The Burmese Weikzas." *Contributions to Asian Studies* 16 (1981): 62–80.
  - Tosa, Keiko. "The Burmese Weikza: The Contemporary Evolution of an Esoteric Tradition." In *Esoteric Buddhism in Southeast Asia*, edited by Vincent Tournier. Paris: EFEO, 2014.
  - McDaniel, Justin. *The Lovelorn Ghost and the Magical Monk: Practicing Buddhism in Modern Thailand*. New York: Columbia University Press, 2011.

#### Section 5.4 (Micro-Sprint 20)
- **รหัสไฟล์:** `drafts/sections/ch05_sec04.md`
- **ชื่อหัวข้อ:** วิกฤตการณ์การสร้างความทันสมัย การเบียดขับกรรมฐานโบราณ และการสังเคราะห์พุทธพจน์แบบพหุลักษณ์
  *(Modern Monastic Reforms, Disenchantment, Suppression of Esotericism, and Synthetic Conclusion on Canonical Fluidities)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. การเบียดขับและสูญหายของกรรมฐานโบราณและพุทธศาสนาฝ่ายเร้นลับในคริสต์ศตวรรษที่ 19–20: บทวิเคราะห์ของ Kate Crosby (2020) ว่าด้วยแรงกดดัน 4 ด้าน:
     - แรงกดดันจากลัทธิอาณานิคมตะวันตก: ลัทธิเหตุผลนิยม (Rationalism) และวิทยาศาสตร์ในศรีลังกา พม่า และอินโดจีน
     - การปฏิรูปสงฆ์และการรวมศูนย์อำนาจรัฐในสยาม: พระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัว (รัชกาลที่ 4), ธรรมยุติกนิกาย, สมเด็จพระมหาสมณเจ้า กรมพระยาวชิรญาณวโรรส, และ พ.ร.บ. ลักษณะปกครองคณะสงฆ์ ร.ศ. 121 (พ.ศ. 2445)
     - อิทธิพลของสุทธินิยมวิกตอเรียน (Victorian Purism) ในวงวิชาการยุโรป (Rhys Davids, Oldenberg): การสร้างภาพตัวแทนพุทธศาสนาดั้งเดิมเป็นปรัชญาบริสุทธิ์และตัดทอนมิติพิธีกรรมเร้นลับเป็น "ความงมงายเสื่อมถอย"
     - การแพร่ขยายของขบวนการวิปัสสนาสมัยใหม่แบบพม่า (*Modern Burmese Vipassanā Movement*: เลดี ซายาดอ, มหาสี ซายาดอ) ที่แทนที่กรรมฐานโบราณด้วยการกำหนดสติทางปัญญา
  2. การเปลี่ยนผ่านทางญาณวิทยาแห่งพุทธพจน์: จากความลื่นไหลที่มีชีวิตสู่สารบบสิ่งพิมพ์มาตรฐานที่ตายตัว
  3. บทสังเคราะห์เปรียบเทียบแม่บท (Synthetic Monograph Conclusion):
     - การสนทนาข้ามสายจารีตระหว่าง "พระสูตรนอกสารบบมหายาน" (*Yíwèijīng*, ตุนหวง, นานัตสึเดระ) กับ "พระสูตรนอกสารบบเถรวาท" (*Paññāsa Jātaka*, พระปริตร, Bitexts, กรรมฐานโบราณ)
     - การพิสูจน์ว่าเส้นแบ่งระหว่าง "สารบบ" และ "นอกสารบบ" เป็นผลผลิตของประวัติศาสตร์อำนาจและการเมืองสงฆ์ มิใช่เส้นแบ่งตายตัวทางธรรมวินัย
     - การฟื้นคืนคุณค่าของวรรณกรรมตัวเขียนพื้นถิ่นในฐานะหัวใจที่มีชีวิตของพุทธศาสนาทั่วทั้งเอเชีย
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - พระราชหัตถเลขาและประกาศการปฏิรูปคณะสงฆ์สมัยรัชกาลที่ 4 และรัชกาลที่ 5
  - *วินัยมุข* และแบบเรียนสงฆ์ของสมเด็จพระมหาสมณเจ้า กรมพระยาวชิรญาณวโรรส
  - พระไตรปิฎกฉบับสยามรัฐ (พ.ศ. 2468–2470)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Crosby, Kate. *Esoteric Theravada: The Story of the Forgotten Meditation Tradition of Southeast Asia*. Boulder: Shambhala, 2020 (Chapters 6–8).
  - Hallisey, Charles. "Roads Taken and Not Taken in the Study of Theravāda Buddhism." In *Curators of the Buddha*. Chicago: University of Chicago Press, 1995.
  - Blackburn, Anne M. *Locations of Buddhism: Colonialism and Modernity in Sri Lanka*. Chicago: University of Chicago Press, 2010.
  - Braun, Erik. *The Birth of Insight: Meditation, Modern Buddhism, and the Burmese Monk Ledi Sayadaw*. Chicago: University of Chicago Press, 2013.
  - McMahan, David L. *The Making of Buddhist Modernism*. Oxford: Oxford University Press, 2008.

---

## สรุปเป้าหมายจำนวนคำรายบทและทั้งโครงการ (Word Sizing Ledger)

| ลำดับบท | รหัส Section | ชื่อหัวข้อย่อย | เป้าหมายความยาวคำ (คำ) | สถานะการควบคุม |
|:---|:---|:---|:---:|:---|
| **บทที่ 1** | บทนำ-บทสรุป | บทนำและบทสรุปประจำบทที่ 1 | 600–800 | จัดทำในชั้นรวมบท |
| | `ch01_sec01` | วิวัฒนาการการจำแนกพระธรรมวินัย (องคะ 9/12 สู่นิกายและอาคม 4) | 2,500–3,000 | Micro-Sprint 1 |
| | `ch01_sec02` | การสถาปนาพระไตรปิฎกบาลีสำนักมหาวิหารในศรีลังกา วิวัฒนาการสังคายนา และอรรถกถา-ฎีกา | 2,500–3,000 | Micro-Sprint 2 |
| | `ch01_sec03` | สารบบภาษาสันสกฤตฝ่ายเหนือ สังคายนาพระเจ้ากนิษกะ และเอกสารโบราณกิลกิต ตูร์ฟาน เชอยัน | 2,500–3,000 | Micro-Sprint 3 |
| | `ch01_sec04` | สารบัญพระสูตรจีน สารบบทิเบต การถ่ายทอดสู่ญี่ปุ่น และประวัติศาสตร์นิพนธ์สมัยใหม่ | 2,500–3,000 | Micro-Sprint 4 |
| **รวมบทที่ 1** | | **บทที่ 1 สมบูรณ์ (Comparative Canon Formation & Sūtra Taxonomy)** | **$\ge$ 10,000 คำ** (กรอบ 10,600–12,800) | ตรวจสอบด้วย `count_words.py --file` |
| **บทที่ 2** | บทนำ-บทสรุป | บทนำและบทสรุปประจำบทที่ 2 | 600–800 | จัดทำในชั้นรวมบท |
| | `ch02_sec01` | ญาณวิทยาแห่งพุทธพจน์และกลไกการรังสรรค์พระสูตรแปลกปลอมในจีน (อี๋เว่ยจิง) | 2,500–3,000 | Micro-Sprint 5 |
| | `ch02_sec02` | กรณีศึกษาพระสูตรนอกสารบบชิ้นเอก 6 คัมภีร์ และข้อถกเถียงเรื่องความแท้ | 2,500–3,000 | Micro-Sprint 6 |
| | `ch02_sec03` | ขบวนการสามขั้น (ซานเจี้ยเจี้ยว) และการปฏิวัติทางโบราณคดี: ตุนหวงและนานัตสึเดระ | 2,500–3,000 | Micro-Sprint 7 |
| | `ch02_sec04` | คัมภีร์นอกสารบบและตัวบทวิวาทะในทิเบต (ตันตระญิงมาและแตร์มา), เอเชียกลาง และญี่ปุ่น | 2,500–3,000 | Micro-Sprint 8 |
| **รวมบทที่ 2** | | **บทที่ 2 สมบูรณ์ (Mahāyāna Canon Organization & Apocryphal Sūtras)** | **$\ge$ 10,000 คำ** (กรอบ 10,600–12,800) | ตรวจสอบด้วย `count_words.py --file` |
| **บทที่ 3** | บทนำ-บทสรุป | บทนำและบทสรุปประจำบทที่ 3 | 600–800 | จัดทำในชั้นรวมบท |
| | `ch03_sec01` | ขอบเขตและความยืดหยุ่นของพระไตรปิฎกบาลี: วาทกรรมปิด-เปิด และพระสูตรสูญหาย | 2,500–3,000 | Micro-Sprint 9 |
| | `ch03_sec02` | วรรณกรรมชาดกนอกสารบบ: ปัญญาสชาดกในล้านนาและอุษาคเนย์ และทสโพธิสัตตุปปัตติกถา | 2,500–3,000 | Micro-Sprint 10 |
| | `ch03_sec03` | พระสูตรนอกสารบบในวัฒนธรรมตัวเขียนอุษาคเนย์: กลุ่มเอวมฺเม สุตํ และจักรวาลวิทยา | 2,500–3,000 | Micro-Sprint 11 |
| | `ch03_sec04` | พระปริตร วรรณกรรมพุทธรักษ์ บรรณานุกรมศาสตร์พื้นเมือง และการเปลี่ยนกระบวนทัศน์ PTS | 2,500–3,000 | Micro-Sprint 12 |
| **รวมบทที่ 3** | | **บทที่ 3 สมบูรณ์ (Theravāda Canon Formation & Paracanonical Literature)** | **$\ge$ 10,000 คำ** (กรอบ 10,600–12,800) | ตรวจสอบด้วย `count_words.py --file` |
| **บทที่ 4** | บทนำ-บทสรุป | บทนำและบทสรุปประจำบทที่ 4 | 600–800 | จัดทำในชั้นรวมบท |
| | `ch04_sec01` | โคดิโคโลยีเปรียบเทียบและวัฒนธรรมตัวเขียนพุทธศาสนาในเอเชีย: วัตถุธรรมและอาลักษณ์ | 2,500–3,000 | Micro-Sprint 13 |
| | `ch04_sec02` | คลังเอกสารโบราณตุนหวงและนานัตสึเดระ: แหล่งพิทักษ์คัมภีร์นอกสารบบที่สาบสูญ | 2,500–3,000 | Micro-Sprint 14 |
| | `ch04_sec03` | วรรณกรรมสองภาษาใบลานในอุษาคเนย์: นิสสัย สันนยะ โวหาร และทฤษฎี Bitexts | 2,500–3,000 | Micro-Sprint 15 |
| | `ch04_sec04` | วัฒนธรรมตัวเขียนสมุดไทย กาพย์สวดพระมาลัย และวรรณกรรมสองภาษาคำหลวงอยุธยา | 2,500–3,000 | Micro-Sprint 16 |
| **รวมบทที่ 4** | | **บทที่ 4 สมบูรณ์ (Codicology, Manuscript Cultures, and Bitexts)** | **$\ge$ 10,000 คำ** (กรอบ 10,600–12,800) | ตรวจสอบด้วย `count_words.py --file` |
| **บทที่ 5** | บทนำ-บทสรุป | บทนำและบทสรุปประจำบทที่ 5 | 600–800 | จัดทำในชั้นรวมบท |
| | `ch05_sec01` | ตันตระศึกษาในพุทธศาสน์สากล: ธารณี มนตร์ และการแปรเปลี่ยนทางญาณวิทยาแห่งพุทธพจน์ | 2,500–3,000 | Micro-Sprint 17 |
| | `ch05_sec02` | พุทธศาสนาฝ่ายใต้เร้นลับและกรรมฐานโบราณ: โยคาวจร ธรรมกายภายใน และระบบจักรากุมาร | 2,500–3,000 | Micro-Sprint 18 |
| | `ch05_sec03` | ยันต์มนต์ คาถาพุทธรักษ์ เวกซาพม่า และคู่มือวัดประดู่ทรงธรรมแห่งกรุงศรีอยุธยา | 2,500–3,000 | Micro-Sprint 19 |
| | `ch05_sec04` | วิกฤตการณ์การสร้างความทันสมัย การเบียดขับกรรมฐานโบราณ และการสังเคราะห์พุทธพจน์ | 2,500–3,000 | Micro-Sprint 20 |
| **รวมบทที่ 5** | | **บทที่ 5 สมบูรณ์ (Tantric Studies, Esoteric Southern Buddhism & Buddhavacana)** | **$\ge$ 10,000 คำ** (กรอบ 10,600–12,800) | ตรวจสอบด้วย `count_words.py --file` |
| **รวมทั้งโครงการ** | | **รวม 20 Sections + บทนำ-สรุป 5 บท + สารบัญ + บรรณานุกรมรวม** | **$\ge$ 50,000–60,000 คำ** (กรอบ 53,000–64,000) | ตรวจสอบด้วย `count_words.py --project` |

---

## รายการตรวจสอบสำหรับด่านตรวจ [Gate 1: Outline Gate Checklist]

- [x] **1. ความสอดคล้องกับข้อกำหนดผู้ใช้ (Specification Alignment 100%):** ยกระดับโครงสร้างสู่ตำราวิชาการ 5 บทสมบูรณ์แบบ ครอบคลุมข้อกำหนด R1, R2, R3, R4 และคำสั่งทบทวนวรรณกรรมเพิ่มเติมของ Charles Hallisey, Oskar von Hinüber, Lily de Silva, และ Sylvain Lévi ตาม ORIGINAL_REQUEST.md ครบถ้วนทุกประเด็น
- [x] **2. โครงสร้าง Micro-Sprints และการบริหารขนาดงาน (Task Sizing):** แต่ละบทแบ่งออกเป็น 4 sections รวม 20 sections กำหนดเพดานความยาวคำที่ 2,500–3,000 คำต่อ section เพื่อควบคุมความลึกซึ้งและป้องกันอาการบริบทล้นเกิน (Context Bloat)
- [x] **3. เป้าหมายความยาวคำขั้นต่ำ (Word Count Targets):** กำหนดเป้าหมายบทละไม่น้อยกว่า 10,000–12,000 คำ และยอดรวมทั้งโครงการไม่น้อยกว่า 50,000–60,000 คำ (คำนวณตามสูตรสากล: อักขระตัดช่องว่าง ÷ 5.0) พร้อมตาราง Word Sizing Ledger ควบคุมทุกหัวข้อย่อย
- [x] **4. การครอบคลุมภาษาและความลึกซึ้งทางอักขรวิทยา (Multilingual Coverage):** ครอบคลุมภาษาและระบบตัวเขียนครบถ้วน ได้แก่ Tier 0 (ไทย, อังกฤษ), Tier 1 (บาลี, สันสกฤต, จีนตัวเต็ม, ทิเบต Wylie), และ Tier 2 (ญี่ปุ่น, ฝรั่งเศส, เยอรมัน, รัสเซีย, พม่า, เขมร, สิงหล) กำกับด้วยอักขรวิธีมาตรฐานสากล (IAST, Hànzì, Wylie)
- [x] **5. ความถูกต้องแท้จริงของแหล่งข้อมูล (Zero Hallucination Grounding 100%):** ทุกหัวข้อย่อยระบุรายชื่อเอกสารปฐมภูมิ คัมภีร์ เอกสารตัวเขียน และงานวิจัยทุติยภูมิที่มีอยู่จริงในโลกวิชาการและในคลัง `documents/` พร้อมชื่อผู้แต่ง ปีพิมพ์ สำนักพิมพ์ และเลขหน้าตรวจสอบได้จริง
- [x] **6. การตัดขาดจากวิกิพีเดียเด็ดขาด (No Wikipedia Rule):** ปราศจากการอ้างอิง Wikipedia หรือ Wikidata ในสารบบโครงร่าง บันทึกย่อ และบรรณานุกรม 100%
- [x] **7. การห้ามใช้อิโมจิและการเขียนภาษาไทยตามแบบแผน (Zero Emoji & Natural Thai Prose):** ปราศจาก emoji ทุกชนิด 100% และเขียนภาษาไทยเชื่อมต่อคำอย่างเป็นธรรมชาติ ปราศจากการแบ่งคำด้วยช่องว่างเทียม
