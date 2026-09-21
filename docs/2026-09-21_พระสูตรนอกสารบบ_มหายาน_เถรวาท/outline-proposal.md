# โครงร่างแม่บทฉบับสมบูรณ์ (Master Outline Proposal & Chapter Specifications)
## โครงการ: การจัดระบบพระสูตรและพระสูตรนอกสารบบในพุทธศาสนาฝ่ายมหายานและเถรวาท
### (Comparative Canonical Taxonomy & Apocryphal Sūtras in Mahāyāna and Theravāda Traditions)

- **รหัสโครงการ:** `2026-09-21_พระสูตรนอกสารบบ_มหายาน_เถรวาท`
- **สถานะ:** แผนงานระดับแม่บทสำหรับด่านตรวจ [Gate 1: Outline Gate]
- **เป้าหมายความยาวคำ:** 3 บทหลัก แบ่งเป็น 12 Micro-Sprints (Section ละ 2,500–3,000 คำ, บทละไม่น้อยกว่า 10,000 คำ, ยอดรวมทั้งโครงการไม่น้อยกว่า 30,000 คำ ตามสูตรอักขระตัดช่องว่าง ÷ 5.0)
- **ระบบอ้างอิง:** Chicago Manual of Style (17th ed., Notes & Bibliography) / Zero Hallucination 100%

---

## สารบัญโครงสร้างภาพรวมโครงการ (Architecture Overview)

```
[โครงการวิจัยแม่บท: 30,000–36,000 คำ]
 ├── บทที่ 1: ทบทวนวรรณกรรมการศึกษาการจัดระบบพระสูตรเปรียบเทียบ (10,000–12,000 คำ)
 │    ├── ch01_sec01: วิวัฒนาการการจำแนกพระธรรมวินัย (องคะ 9/12 สู่นิกายและอาคม 4) [2,500–3,000 คำ]
 │    ├── ch01_sec02: การสถาปนาพระไตรปิฎกบาลีสำนักมหาวิหารในศรีลังกาและสายอรรถกถา-ฎีกา [2,500–3,000 คำ]
 │    ├── ch01_sec03: สารบบภาษาสันสกฤตฝ่ายเหนือและเอกสารโบราณกิลกิต ตูร์ฟาน และเชอยัน [2,500–3,000 คำ]
 │    └── ch01_sec04: สารบัญพระสูตรจีน สารบบทิเบต การถ่ายทอดสู่ญี่ปุ่น และประวัติศาสตร์นิพนธ์ [2,500–3,000 คำ]
 ├── บทที่ 2: การจัดระบบพระสูตร และพระสูตรนอกสารบบของพุทธศาสนาฝ่ายมหายาน (10,000–12,000 คำ)
 │    ├── ch02_sec01: ญาณวิทยาแห่งพุทธพจน์และกลไกการรังสรรค์พระสูตรแปลกปลอมในจีน (อี๋เว่ยจิง) [2,500–3,000 คำ]
 │    ├── ch02_sec02: กรณีศึกษาพระสูตรนอกสารบบชิ้นเอก 6 คัมภีร์ และข้อถกเถียงเรื่องความแท้ [2,500–3,000 คำ]
 │    ├── ch02_sec03: ขบวนการสามขั้น (ซานเจี้ยเจี้ยว) และการปฏิวัติทางโบราณคดี: ตุนหวงและนานัตสึเดระ [2,500–3,000 คำ]
 │    └── ch02_sec04: คัมภีร์นอกสารบบและตัวบทวิวาทะในทิเบต (ตันตระญิงมาและแตร์มา), เอเชียกลาง และญี่ปุ่น [2,500–3,000 คำ]
 └── บทที่ 3: การจัดระบบพระสูตร และพระสูตรนอกสารบบของพุทธศาสนาฝ่ายเถรวาท (10,000–12,000 คำ)
      ├── ch03_sec01: ขอบเขตและความยืดหยุ่นของพระไตรปิฎกบาลี: วาทกรรมปิด-เปิด และพระสูตรสูญหาย [2,500–3,000 คำ]
      ├── ch03_sec02: วรรณกรรมชาดกนอกสารบบ: ปัญญาสชาดกในอุษาคเนย์ และทสโพธิสัตตุปปัตติกถา [2,500–3,000 คำ]
      ├── ch03_sec03: พระสูตรนอกสารบบในวัฒนธรรมตัวเขียนอุษาคเนย์: กลุ่มเอวมฺเม สุตํ และจักรวาลวิทยา [2,500–3,000 คำ]
      └── ch03_sec04: ตันตระเถรวาท กรรมฐานโบราณ บรรณานุกรมศาสตร์พื้นเมือง และการเปลี่ยนกระบวนทัศน์ PTS [2,500–3,000 คำ]
```

---

## ข้อกำหนดรายละเอียดรายบทและ Micro-Sprints (Detailed Chapter Specifications)

---

### บทที่ 1: ทบทวนวรรณกรรมการศึกษาการจัดระบบพระสูตรเถรวาทบาลี สันสกฤต จีน ทิเบต และญี่ปุ่น
**(Comparative Buddhist Canon Formation & Sūtra Taxonomy: Literature Review)**
- **รหัสเป้าหมาย:** `R1` | **ไฟล์รวมบท:** `drafts/assembled/ch01.md` $\rightarrow$ `final/01-บทที่หนึ่ง.md`
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
  3. โมเดลวิวัฒนาการตัวบทของ Mayeda Egaku (前田恵学, 1964): ข้อพิสูจน์ว่า 9 องคะเป็นประเภททางวรรณกรรมดั้งเดิมก่อนการเกิดพระไตรปิฎก
  4. ทฤษฎีรากฐานสังยุตตาคมของ พระอาจารย์อิ้นซุ่น (印順導師, 1971): การพิสูจน์ผ่านคัมภีร์ *โยคาจารภูมิศาสตร์* (Vastusaṃgrahaṇī 攝事分) ว่าส่วนผสมของ 3 องคะแรก (*Sūtra*, *Geya*, *Vyākaraṇa*) ก่อรูปเป็นแกนกลางดั้งเดิมของ *สังยุตตาคม/สังยุตตนิกาย* แล้วจึงแตกแขนงออกเป็น ทีฆะ มัชฌิมะ และอังคุตตระ (เชื่อมโยงงานของ Choong Mun-keat 2000 และ Bhikkhu Bodhi)
  5. การเปลี่ยนผ่านสู่ระบบพระไตรปิฎก (*tripiṭaka*) 3 ปิฎก และการจัดระเบียบ 4 นิกาย / 4 อาคม เปรียบเทียบระหว่างบาลีเถรวาทและสันสกฤตนิกายฝ่ายเหนือ
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Vinaya Piṭaka* (Suttavibhaṅga, Vin III 8)
  - *Aṅguttara Nikāya* (Catukkanipāta, AN II 102–107)
  - *Yogācārabhūmi-śāstra* (攝事分 Vastusaṃgrahaṇī, T. 1579, vol. 30)
  - *Abhidharmakośabhāṣya* ของวสุพันธุ (ed. Pradhan 1975)
  - *Mahāvyutpatti* (หมวด 12 องคะ)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Mayeda Egaku, *原始仏教聖典の成立史研究* [A History of the Formation of Early Buddhist Texts] (Tokyo: Sankibo Busshorin, 1964).
  - Yin Shun, *原始佛教聖典之集成* [The Formation of Early Buddhist Canons] (Taipei: Zhengwen Chubanshe, 1971).
  - Choong Mun-keat, *The Fundamental Teachings of Early Buddhism: A Comparative Study Based on the Sutranga Portion of the Pali Samyutta-Nikaya and the Chinese Samyuktagama* (Wiesbaden: Harrassowitz Verlag, 2000).
  - Étienne Lamotte, *Histoire du bouddhisme indien: Des origines à l'ère Śaka* (Louvain: Institut Orientaliste, 1958).
  - K.R. Norman, *Pāli Literature: Including the Canonical Literature in Prakrit and Sanskrit of All the Hīnayāna Schools of Buddhism* (Wiesbaden: Otto Harrassowitz, 1983).

#### Section 1.2 (Micro-Sprint 2)
- **รหัสไฟล์:** `drafts/sections/ch01_sec02.md`
- **ชื่อหัวข้อ:** การสถาปนาพระไตรปิฎกบาลีสำนักมหาวิหารในศรีลังกาและสายอรรถกถา-ฎีกา
  *(Mahāvihāra Canonization, Aluvihāra Inscription, and the Commentarial Matrix)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. การสังคายนา 3 ครั้งในชมพูทวีปและการถ่ายทอดสู่ลังกาทวีปโดยพระมหินทเถระ
  2. วิกฤตทุพภิกขภัย (กบฏพราหมณ์ติสสะ) ในรัชสมัยพระเจ้าวัฏฏคามณีอภัย (89–77 ปีก่อน ค.ศ.) และจุดเปลี่ยนแห่งประวัติศาสตร์: การจารึกพระไตรปิฎกและอรรถกถาลงใบลาน ณ อาลุวิหาร (*Aluvihāra*) ใกล้เมืองมาตาเล สถาบันพระภาณกะ (*bhāṇaka*) และการสร้างสารบบลายลักษณ์อักษรปิดสำนักแรก
  3. ความขัดแย้งเชิงคัมภีร์และการเมืองสงฆ์ 3 สำนัก: สำนักมหาวิหาร (*Mahāvihāra*), อภัยคิรีวิหาร (*Abhayagiri*), และเชตวันวิหาร (*Jetavana*) การเปิดรับคัมภีร์ภาษาสันสกฤตและเวตุลละ/มหายานของอภัยคิรี จนถึงการรวมสงฆ์เป็นเอกภาพโดยพระเจ้าปรักกรมพาหุที่ 1 ในศตวรรษที่ 12
  4. พระพุทธโฆสะ (*Buddhaghosa*) และการปฏิวัติอรรถกถาศาสตร์: การทดสอบภูมิธรรมด้วย *วิสุทธิมรรค* (*Visuddhimagga*), การแปลและชำระอรรถกถาสิงหลโบราณ (*Sīhaḷa-aṭṭhakathā*: Mahā-aṭṭhakathā, Kurundī, Mahāpaccarī) สู่ภาษามคธ/บาลี สถาปนาระบบอรรถกถามาตรฐาน
  5. พัฒนาการสายฎีกาในยุคโปลอนนารุวะ: พระสารีปุตตเถระ (*Sāriputta Thera*) และคัมภีร์ *สารัตถทีปนี* (*Sāratthadīpanī*), *วินัยสังคหะ* การจัดระเบียบไวยากรณ์บาลีตามแนวสันสกฤต และการถ่ายทอดสู่อุษาคเนย์
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Dīpavaṃsa* (ed. Hermann Oldenberg 1879)
  - *Mahāvaṃsa* (ed. Wilhelm Geiger 1908)
  - *Samantapāsādikā* (Bāhiranidāna, ed. Takakusu & Nagai, PTS 1924)
  - *Visuddhimagga* (ed. C.A.F. Rhys Davids, PTS 1920–1921)
  - *Sāratthadīpanī* (ed. Dehigaspe Paññāsāra 1914 / Chaṭṭha Saṅgāyana CD)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - E.W. Adikaram, *Early History of Buddhism in Ceylon* (Migoda: D.S. Puswella, 1946).
  - Walpola Rahula, *History of Buddhism in Ceylon: The Anuradhapura Period, 3rd Century BC–10th Century AC* (Colombo: M.D. Gunasena, 1956).
  - Oskar von Hinüber, *A Handbook of Pāli Literature* (Berlin: Walter de Gruyter, 1996).
  - Richard Gombrich, *Theravāda Buddhism: A Social History from Ancient Benares to Modern Colombo*, 2nd ed. (London: Routledge, 2006).
  - Steven Collins, "On the Very Idea of the Pali Canon," *Journal of the Pali Text Society* 15 (1990): 89–126.

#### Section 1.3 (Micro-Sprint 3)
- **รหัสไฟล์:** `drafts/sections/ch01_sec03.md`
- **ชื่อหัวข้อ:** สารบบภาษาสันสกฤตฝ่ายเหนือและเอกสารโบราณกิลกิต ตูร์ฟาน และเชอยัน
  *(Northern Sanskrit Canons and Archaeological Discoveries: Gilgit, Turfan, and Schøyen)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. สารบบคัมภีร์ภาษาสันสกฤตของนิกายนอกเถรวาทในอินเดียเหนือและเอเชียกลาง: นิกายสรวาสติวาท (*Sarvāstivāda*: 4 อาคม และ 7 คัมภีร์อภิธรรม), มูลสรวาสติวาท (*Mūlasarvāstivāda*: วินัยวัสดุ 17 หมวด), และมหาสังฆิกะ-โลโกตตรวาท (*Mahāsāṃghika-Lokottaravāda*: Mahāvastu)
  2. การค้นพบตัวเขียนกิลกิต (*Gilgit Manuscripts* ค.ศ. 1931): การค้นพบ *Vinayavastu* ร่วมกับพระสูตรมหายานชั้นต้น (*Saddharmapuṇḍarīka*, *Samādhirāja*) ในอารามเดียวกัน บทวิเคราะห์ของ Gregory Schopen และ Oskar von Hinüber ที่หักล้างทฤษฎีการแยกขาดทางสถาบันระหว่างมหายานและหินยาน
  3. คณะสำรวจปรัสเซียและตัวเขียนตูร์ฟาน (*Turfan Manuscripts*): การบูรณะพระสูตรสรวาสติวาทสันสกฤตเปรียบเทียบกับบาลีและจีนโดย Ernst Waldschmidt (*Mahāparinirvāṇa*, *Mahāvadāna*, *Catuṣpariṣad*) และพจนานุกรมประวัติศาสตร์ SWTF
  4. คอลเลกชันเชอยัน (*Schøyen Collection*) และเอกสารเปลือกไม้เบิร์ชอักษรขโรษฐีแห่งคันธาระ (*Gandhāran Scrolls*): การค้นพบของ Richard Salomon และ Jens-Uwe Hartmann ยืนยันความหลากหลายของพระสูตรภาษาพุทธปรากฤตและหลักฐานมหายานที่เก่าแก่ที่สุดในโลก
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Gilgit Manuscripts* (ed. Nalinaksha Dutt, 4 vols., Calcutta/Srinagar 1939–1959)
  - *Das Mahāparinirvāṇasūtra* (ed. Ernst Waldschmidt, Berlin 1950–1951)
  - *Das Catuṣpariṣatsūtra* (ed. Ernst Waldschmidt, Berlin 1952–1962)
  - *Manuscripts in the Schøyen Collection: Buddhist Manuscripts* (vols. I–IV, ed. Jens Braarvig et al., Oslo: Hermes Publishing, 2000–2016)
  - *Mahāvastu-avadāna* (ed. Émile Senart, 3 vols., Paris 1882–1897)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Gregory Schopen, *Bones, Stones, and Buddhist Monks: Collected Papers on the Archaeology, Epigraphy, and Texts of Monastic Buddhism in India* (Honolulu: University of Hawai'i Press, 1997).
  - Oskar von Hinüber, *Die Sprachgeschichte des Pāli im Spiegel der südostasiatischen Handschriftenüberlieferung* (Mainz: Akademie der Wissenschaften und der Literatur / Stuttgart: Franz Steiner Verlag, 1988).
  - Richard Salomon, *Ancient Buddhist Scrolls from Gandhāra: The British Library Kharoṣṭhī Fragments* (Seattle: University of Washington Press, 1999).
  - Jens-Uwe Hartmann, "From Words to Books: Indian Buddhist Manuscripts in the First Millennium CE," in *The History of the Book in South Asia* (Farnham: Ashgate, 2013).

#### Section 1.4 (Micro-Sprint 4)
- **รหัสไฟล์:** `drafts/sections/ch01_sec04.md`
- **ชื่อหัวข้อ:** ประวัติศาสตร์สารบัญพระสูตรจีน สารบบทิเบต การถ่ายทอดสู่ญี่ปุ่น และประวัติศาสตร์นิพนธ์สมัยใหม่
  *(East Asian Canonical Catalogs, Tibetan Redactions, and Global Historiographical Traditions)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. วิวัฒนาการศาสตร์แห่งสารบัญพระสูตรจีน (*จิงลู่* 經錄): จาก *จ้งจิงมู่ลู่* ของเต้าอัน (ค.ศ. 374), *ชูซานจ้างจี้จี๋* ของเสิงโย่ว (ค.ศ. 515), สู่สถาปัตยกรรมทางบรรณานุกรมสูงสุดใน *ไคหยวนซื่อเจี้ยวลู่* ของพระจื้อเซิง (ค.ศ. 730) และระบบรหัสพันคำ (*Qianziwen*) สำหรับพระไตรปิฎกฉบับพิมพ์ไม้แกะหลวง
  2. การจัดระบบพระไตรปิฎกทิเบต: สารบัญพระราชวังลฮันการ์ (*dKar chag lHan dkar ma* ค.ศ. 812), การจัดหมวดหมู่กังจูร์ (*bKa' 'gyur*) และเตนจูร์ (*bsTan 'gyur*) โดยปูตน รินเชน ดรุบ (*Bu-ston Rin-chen-grub* ค.ศ. 1322), และสายธารการถ่ายทอด Tshal pa vs. Them spangs ma
  3. การคัดลอกและการจัดระบบในญี่ปุ่น: วัฒนธรรม *อิสไซเกียว* (*Issaikyō*) ยุคนาระ-เฮอัน, คลังคัมภีร์โบราณวัดนานัตสึเดระ (*Nanatsu-dera*), สู่พระไตรปิฎกฉบับพิมพ์หลวงยุคเอโดะ และการสถาปนาพระไตรปิฎกวิชาการสมัยใหม่ *Taishō Shinshū Daizōkyō* (1924–1934) โดย ทะกะกุสุ จุนจิโร และ วะตะนะเบะ ไคงิโยกุ
  4. ประวัติศาสตร์นิพนธ์สมัยใหม่ 5 สำนัก:
     - สำนักยุโรป (Burnouf, Oldenberg, Lamotte, Bechert, von Hinüber)
     - สำนักรัสเซีย (Vasilyev, Minayev, Oldenburg, Stcherbatsky, Rosenberg)
     - สำนักญี่ปุ่น (Ui Hakuju, Nakamura Hajime, Hirakawa Akira, Sasaki Shizuka)
     - สำนักจีน-ไต้หวัน (Yin Shun, Lü Cheng, Tang Yongtong, Fang Guangchang)
     - สำนักวิพากษ์ร่วมสมัย (Robert Buswell, Jonathan Silk, Peter Skilling, Michael Radich)
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Chusanzang jiji* (出三藏記集, T. 2145)
  - *Kaiyuan shijiaolu* (開元釋教錄, T. 2154)
  - *dKar chag lHan dkar ma* (ed. Marcelle Lalou 1953; Herrmann-Pfandt 2008)
  - *Bu-ston Chos 'byung* (History of Buddhism, ed. E. Obermiller 1931–1932)
  - *Taishō Shinshū Daizōkyō* (大正新脩大藏經 100 vols., Tokyo 1924–1934)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Hayashiya Tomojirō, *異訳経類の研究* [A Study of Parallel Translations of Buddhist Scriptures] (Tokyo: Tōyō Bunko, 1945).
  - Fang Guangchang, *佛教大藏經史: 八至十世紀* [History of the Buddhist Canons: 8th to 10th Centuries] (Beijing: Zhongguo Shehui Kexue Chubanshe, 1991).
  - Antonino Forte, "The Relativity of the Concept of Orthodoxy in Chinese Buddhism: Chih-sheng's Indictment of Shih-li and the Proscription of the Dharma Mirror Sūtra," in *Chinese Buddhist Apocrypha*, ed. Robert E. Buswell Jr. (Honolulu: University of Hawai'i Press, 1990), 239–249.
  - Helmut Eimer, ed., *Transmission of the Tibetan Canon: Papers Presented at a Panel of the 7th Seminar of the International Association for Tibetan Studies, Graz 1995* (Vienna: Verlag der Österreichischen Akademie der Wissenschaften, 1997).
  - Fyodor I. Stcherbatsky, *The Central Conception of Buddhism and the Meaning of the Word "Dharma"* (London: Royal Asiatic Society, 1923).
  - Michael Radich, *The Mahāparinirvāṇa-mahāsūtra and the Emergence of Tathāgatagarbha Doctrine* (Hamburg: Hamburg University Press, 2015).

---

### บทที่ 2: การจัดระบบพระสูตร และพระสูตรนอกสารบบของพุทธศาสนาฝ่ายมหายาน
**(Mahāyāna Canon Organization & Apocryphal Sūtras / Yíwèijīng)**
- **รหัสเป้าหมาย:** `R2` | **ไฟล์รวมบท:** `drafts/assembled/ch02.md` $\rightarrow$ `final/02-บทที่สอง.md`
- **เป้าหมายความยาวคำทั้งบท:** **10,000–12,000 คำ** (ไม่น้อยกว่า 10,000 คำ)
- **บทนำและบทสรุปประจำบท:** รวม 600–1,000 คำ

#### Section 2.1 (Micro-Sprint 5)
- **รหัสไฟล์:** `drafts/sections/ch02_sec01.md`
- **ชื่อหัวข้อ:** ญาณวิทยาแห่งพุทธพจน์และกลไกการรังสรรค์พระสูตรแปลกปลอมในจีน (*อี๋เว่ยจิง*)
  *(Epistemology of Buddhavacana and the Cultural Mechanics of Sinitic Apocrypha)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. ญาณวิทยาแห่งพุทธพจน์ (*Buddhavacana*) ในอินเดีย: ความท้าทายจากฝ่ายดั้งเดิม และ 4 กลไกรับรองความชอบธรรมของมหายาน (ปฏิภาณ *pratibhāna*, สมาธิภาวนาและนิมิตพบพระพุทธเจ้า *Buddhadarśana*, นิมิตฝัน *svapna*, และการตีความมหาปเทส 4 เชิงอรรถธรรม)
  2. การสร้างมาตรฐานการตรวจสอบในจีน: การจำแนก "อี๋จิง" (疑經 - พระสูตรต้องสงสัยเรื่องผู้แปล) ออกจาก "เว่ยจิง" (偽經 - พระสูตรปลอมแปลงหลอกลวง) ในสารบัญโบราณของเต้าอัน เสิงโย่ว และจื้อเซิง
  3. ปัจจัยขับเคลื่อนการผลิตพระสูตรในจีน:
     - การกลืนกลายทางจริยธรรมกับลัทธิขงจื๊อ: การตอบโต้ข้อกล่าวหาเรื่อง "ลัทธิอกตัญญู" ด้วยการสถาปนาแนวคิด "ความกตัญญูกตเวทิตา" (孝道 *xiàodào*)
     - การผสานจักรวาลวิทยากับลัทธิเต๋า: ทฤษฎีเบญจธาตุ (五行 *wǔxíng*), หยินหยาง, และการรักษาโรค
     - ความตื่นตระหนกต่อยุคเสื่อมแห่งธรรม (*มั่วฝ่า* 末法 *Mòfǎ*): วิกฤตการกวาดล้างพุทธศาสนาโดยราชสำนัก และความต้องการธรรมะเฉพาะยุค
  4. การเปลี่ยนกระบวนทัศน์ทางวิชาการ: จากการมองเป็น "ของเก๊" (Forgeries) สู่การมองในฐานะ "พุทธธรรมประดิษฐกรรมท้องถิ่น" (Indigenous Sūtras / Cultural Acculturation)
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Pratyutpanna-buddha-saṃmukhāvasthita-samādhi-sūtra* (般舟三昧經, T. 418)
  - *Mahāyāna-sūtrālaṃkāra* (ed. Sylvain Lévi 1907)
  - *Chusanzang jiji* (T. 2145, vol. 55)
  - *Kaiyuan shijiaolu* (T. 2154, vol. 55, หมวด 偽妄亂真錄)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Graeme MacQueen, "Inspired Speech in Early Mahāyāna Buddhism," *Religion* 11, no. 4 (1981): 303–319; 12, no. 1 (1982): 49–65.
  - Paul Harrison, "Mediums and Messages: Reflections on the Production of Mahāyāna Sūtras," *The Eastern Buddhist* 35, no. 1/2 (2003): 115–151.
  - Makita Tairyō, *疑偽経研究* [Studies on Apocryphal Buddhist Scriptures] (Kyoto: Institute for Research in Humanities, Kyoto University, 1976).
  - Robert E. Buswell Jr., ed., *Chinese Buddhist Apocrypha* (Honolulu: University of Hawai'i Press, 1990).
  - Stephen F. Teiser, *The Ghost Festival in Medieval China* (Princeton: Princeton University Press, 1988).
  - Jan Nattier, *Once Upon a Future Time: Studies in a Buddhist Prophecy of Decline* (Berkeley: Asian Humanities Press, 1991).

#### Section 2.2 (Micro-Sprint 6)
- **รหัสไฟล์:** `drafts/sections/ch02_sec02.md`
- **ชื่อหัวข้อ:** กรณีศึกษาพระสูตรนอกสารบบชิ้นเอก 6 คัมภีร์ และข้อถกเถียงเรื่องความแท้
  *(Six Paradigm Case Studies of Chinese Apocryphal Sūtras and Authenticity Debates)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. *ฝัวซัวฟู่หมู่เอินจ้งจิง* (佛說父母恩重經 T. 2887): โครงสร้างพระคุณแม่ 10 ประการ การผสานพุทธศาสนากับขงจื๊อ อิทธิพลต่อวรรณกรรมเปี้ยนเหวินและผาสลักต้าจู๋
  2. *ถีเว่ยปัวลี่จิง* (提謂波利經): การจับคู่ศีล 5 กับเบญจธาตุ (五行) และอวัยวะภายใน พุทธศาสนาสำหรับคฤหัสถ์และสมาคมอี้อี้ (ศึกษาโดย 湯用彤, 牧田諦亮, Whalen Lai)
  3. *เหรินหวังปัวหลัวมี่จิง* (仁王般若波羅蜜經 T. 245/246): พระสูตรพิทักษ์รัฐ (護國) รัฐศาสตร์เชิงพุทธและพิธีระดับชาติในจีน เกาหลี และญี่ปุ่น (Charles D. Orzech)
  4. *ฟั่นหวั่งจิง* (梵網經 T. 1484): ศีลโพธิสัตว์ 10 ข้อหลัก 48 ข้อย่อย การประกาศเอกราชของศีลมหายานที่ไม่ขึ้นกับหินยาน (ไซโจ และนิกายเทนได ศึกษาโดย Paul Groner)
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
  - Whalen Lai, "The Earliest Folk Buddhist Religion in China: T'i-wei Po-li Ching and Its Historical Significance," in *Buddhist and Taoist Practice in Medieval Chinese Society* (Honolulu: University of Hawai'i Press, 1987).
  - Charles D. Orzech, *Politics and Transcendent Wisdom: The Scripture for Humane Kings in the Creation of Chinese Buddhist Culture* (University Park: Pennsylvania State University Press, 1998).
  - Paul Groner, *Saichō: The Establishment of the Japanese Tendai School* (Berkeley: Center for South and Southeast Asian Studies, 1984).
  - Lü Cheng, "楞嚴百偽" [One Hundred Proofs of the Spuriousness of the Śūraṅgama Sūtra], *Neixue* 內學 (1940).
  - Peter N. Gregory, *Tsung-mi and the Sinification of Buddhism* (Princeton: Princeton University Press, 1991).
  - Funayama Tōru, "The Acceptance of Buddhist Precepts by the Chinese in the Fifth Century," *Journal of Asian History* 38, no. 2 (2004): 97–120.

#### Section 2.3 (Micro-Sprint 7)
- **รหัสไฟล์:** `drafts/sections/ch02_sec03.md`
- **ชื่อหัวข้อ:** ขบวนการสามขั้น (*ซานเจี้ยเจี้ยว*) และการปฏิวัติทางโบราณคดี: ตุนหวงและนานัตสึเดระ
  *(The Three Stages Movement, Suppressed Corpora, and Manuscript Breakthroughs: Dunhuang and Nanatsu-dera)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. ขบวนการสามขั้น (*ซานเจี้ยเจี้ยว* 三階教) ของภิกษุซิ่นสิง (Xinxing ค.ศ. 540–594): ทฤษฎีมนุษย์ในยุคที่สามเป็นคนบาปหนา, การถือธรรมะสากล (*ผู่ฝ่า* 普法), และการกราบไหว้สรรพสัตว์เป็นพระพุทธเจ้า (*ผู่จิ้ง* 普敬)
  2. สถาบัน "คลังสมบัติไม่สิ้นสุด" (*อู๋จิ้นจ้าง* 無盡藏) ณ วัดฮว่าตู้ซื่อ อำนาจทางการเงินและการเมืองสงฆ์
  3. การปราบปรามและสั่งทำลายคัมภีร์ 4 ระลอกโดยราชสำนักสุย-ถัง (จักรพรรดิสุยวี่เหวินตี้, บูเช็กเทียน, ถังเสวียนจง) และการสั่งแบนใน *ไคหยวนลู่*
  4. การปฏิวัติทางโบราณคดีจากคลังคัมภีร์ถ้ำตุนหวง (ถ้ำ 17): แหล่งรอดพ้นจากการทำลายของคัมภีร์นอกสารบบ, พระสูตรคุ้มภัย, คัมภีร์พระยายมราช 10 องค์ (*สือหวังจิง* 十王經 ศึกษาโดย Stephen F. Teiser), และวรรณกรรมสารภาพบาป (Kuo Li-ying)
  5. การค้นพบคัมภีร์โบราณวัดนานัตสึเดระ (*Nanatsu-dera* 七寺 ค.ศ. 1990) ในนาโกย่า: 1,193 ม้วนตัวเขียนปลายเฮอันที่รักษาวรรณกรรมซานเจี้ยเจี้ยวและพระสูตรนอกสารบบที่สาบสูญจากจีน (ศึกษาโดย Ochiai Toshinori, Makita Tairyō, Antonino Forte)
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - ตัวเขียนซานเจี้ยเจี้ยวจากตุนหวง: S. 2048, S. 2498, P. 2418, P. 3732
  - *Disanjie fofa* (第三階佛法)
  - *Shiwang jing* (十王經, Dunhuang MSS S. 2498, P. 2003)
  - คลังคัมภีร์ตัวเขียนวัดนานัตสึเดระ (Nanatsu-dera manuscripts, Nagoya)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Yabuki Keiki, *三階教之研究* [Studies on the Three Stages Movement] (Tokyo: Iwanami Shoten, 1927).
  - Nishimoto Teruma, *三階教の研究* [A Study of the San-chieh-chiao] (Tokyo: Shunjūsha, 1998).
  - Jamie Hubbard, *Absolute Delusion, Perfect Buddhahood: The Rise and Fall of a Chinese Heresy* (Honolulu: University of Hawai'i Press, 2001).
  - Antonino Forte, *The Hostage An Shigao and His Offspring: An Iranian Family in China* (Kyoto: Istituto Italiano di Cultura, 1994).
  - Ochiai Toshinori, *The Manuscripts of Nanatsudera: A Recently Discovered Treasure-House in Japan* (Kyoto: Istituto Italiano di Cultura, 1991).
  - Stephen F. Teiser, *The Scripture on the Ten Kings and the Making of Purgatory in Medieval Chinese Buddhism* (Honolulu: University of Hawai'i Press, 1994).
  - Kuo Li-ying, *Confession et contrition dans le bouddhisme chinois du Ve au Xe siècle* (Paris: École française d'Extrême-Orient, 1994).

#### Section 2.4 (Micro-Sprint 8)
- **รหัสไฟล์:** `drafts/sections/ch02_sec04.md`
- **ชื่อหัวข้อ:** คัมภีร์นอกสารบบและตัวบทวิวาทะในทิเบต (ตันตระญิงมาและแตร์มา), เอเชียกลาง และญี่ปุ่น
  *(Himalayan Disputed Corpora, Revealed Treasures, and Peripheral Asian Apocrypha)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. กองตันตระญิงมา (*Rnying ma rgyud 'bum* / NGB): ข้อกังขาของนิกายแปลใหม่ (Sarma) ต่อความแท้จริงของตันตระโบราณ, การคัดออกจากกังจูร์โดยปูตน รินเชน ดรุบ, การรวบรวมสารบบอิสระโดยรัตนะ ลิงปา (Ratna Lingpa), และการพิสูจน์ความแท้จริงทางประวัติศาสตร์จากเอกสารตัวเขียนทิเบตโบราณในถ้ำตุนหวง (Cantwell & Mayer 2008, Dalton 2011)
  2. ปรากฏการณ์ "แตร์มา" (*gter ma* / Terma - Revealed Treasure Texts): ญาณวิทยาพุทธพจน์แบบเปิด, การซ่อนคำสอนของคุรุปัทมสัมภวะ, การขุดค้นโดยแตร์ตอน (*gter ston*), ซาแตร์ (สมบัติทางปฐพี) เทียบกับ กงแตร์ (สมบัติทางดวงจิต), และวรรณกรรม *มาณิกาบุม* (*Mani bka' 'bum*)
  3. พระสูตรนอกสารบบในเอเชียกลาง: วรรณกรรมภาษาโคตาน-สักกะ (*The Book of Zambasta*) และการสร้างตัวบทมหายานตามเส้นทางสายไหม (Vorobyova-Desyatovskaya, Emmerick)
  4. วรรณกรรมนอกสารบบในญี่ปุ่น: วรรณกรรม "โชเงียว" (聖教 *Shōgyō*) ของนิกายชินงอน-เทนได, และ *ชูเซ นิฮงกิ* (中世日本紀) การสังเคราะห์เทววิทยาพุทธ-ชินโต
  5. บทสังเคราะห์: การประเมินค่าใหม่ของมานุษยวิทยาศาสนาต่อพุทธศาสนามหายานนอกอินเดีย
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Rnying ma rgyud 'bum* (Tibetan Dunhuang MSS: IOL Tib J 321, P.t. 44, P.t. 840)
  - *Mani bka' 'bum* (ed. Punakha blockprint / Jacques Bacot 1912)
  - *The Book of Zambasta: A Khotanese Poem on Buddhism* (ed. R.E. Emmerick 1968)
  - ตัวเขียนโชเงียววัดชินโงจิ (Jingo-ji) และวัดไดโกจิ (Daigo-ji)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Cathy Cantwell and Robert Mayer, *Early Tibetan Documents on Phur pa from Dunhuang* (Vienna: Verlag der Österreichischen Akademie der Wissenschaften, 2008).
  - Jacob Dalton, *The Taming of the Demons: Violence and Liberation in Tibetan Buddhism* (New Haven: Yale University Press, 2011).
  - Janet Gyatso, *Apparitions of the Self: The Secret Autobiographies of a Tibetan Visionary* (Princeton: Princeton University Press, 1998).
  - Andreas Doctor, *Tibetan Treasure Literature: Revelation, Tradition, and Accomplishment in Visionary Buddhism* (Ithaca: Snow Lion Publications, 2005).
  - Matthew Kapstein, *The Tibetan Assimilation of Buddhism: Conversion, Contestation, and Memory* (Oxford: Oxford University Press, 2000).
  - Brian Ruppert, *Jewel in the Ashes: Buddha Relics and Power in Early Medieval Japan* (Cambridge: Harvard University Asia Center, 2000).
  - Fabio Rambelli, *Buddhist Materiality: A Cultural History of Objects in Japanese Buddhism* (Stanford: Stanford University Press, 2007).

---

### บทที่ 3: การจัดระบบพระสูตร และพระสูตรนอกสารบบของพุทธศาสนาฝ่ายเถรวาท
**(Theravāda Canon Organization & Paracanonical / Apocryphal Suttas)**
- **รหัสเป้าหมาย:** `R3` | **ไฟล์รวมบท:** `drafts/assembled/ch03.md` $\rightarrow$ `final/03-บทที่สาม.md`
- **เป้าหมายความยาวคำทั้งบท:** **10,000–12,000 คำ** (ไม่น้อยกว่า 10,000 คำ)
- **บทนำและบทสรุปประจำบท:** รวม 600–1,000 คำ

#### Section 3.1 (Micro-Sprint 9)
- **รหัสไฟล์:** `drafts/sections/ch03_sec01.md`
- **ชื่อหัวข้อ:** ขอบเขตและความยืดหยุ่นของพระไตรปิฎกบาลี: วาทกรรมปิด-เปิด, ความหลากหลายของขุททกนิกาย และร่องรอยพระสูตรสูญหาย
  *(Boundaries of the Pāli Tipiṭaka: Open vs. Closed Canon, Khuddakanikāya Variations, and Lost Suttas)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. การรื้อถอนวาทกรรม "สารบบปิด" (Closed Canon): ทฤษฎีของ Steven Collins (JPTS 1990) เรื่อง "กลยุทธ์การสร้างความชอบธรรม" (Strategy of Legitimation) ของสำนักมหาวิหาร เทียบกับสภาพความเป็นจริงของ "สารบบเปิด" (Open Canon) ในวัฒนธรรมตัวเขียนใบลานของศรีลังกาและอุษาคเนย์
  2. การปิดสารบบทางกายภาพในปลายศตวรรษที่ 19 ผ่านเทคโนโลยีการพิมพ์แท่นโลหะและการรวมศูนย์อำนาจสงฆ์ของรัฐชาติสมัยใหม่ (ฉบับพิมพ์ ร.ศ. 112 ในสยาม พ.ศ. 2436 และฉบับฉัฏฐสังคายนาในพม่า พ.ศ. 2499)
  3. ความไม่ลงรอยกันของสารบบขุททกนิกาย:
     - สายสยามและลังกา: ยืนกรานสารบบ 15 คัมภีร์มาตรฐาน
     - สายพม่า: บรรจุเป็น 18 คัมภีร์ โดยนับเอา *มิลินทปัญหา* (*Milindapañha*), *เนตติปกรณ์* (*Nettippakaraṇa*), และ *เปฏโกปเทส* (*Peṭakopadesa*) เข้าเป็นพระไตรปิฎกหลัก (สลักลงบนแผ่นหินอ่อนวัดกุโสดอ พ.ศ. 2414) และการปรากฏของคัมภีร์ที่ 19 *สุตตสังคหะ* (*Suttasaṅgaha*) ในสารบัญ *Piṭakat samuiṅḥ*
  4. ร่องรอยพระสูตรโบราณที่สาบสูญในมหาอรรถกถา (*Asaṅgahitasuttāni*): การที่พระพุทธโฆสะระบุถึง "พระสูตรที่มิได้รับการรวบรวมในการสังคายนา 3 ครั้ง" ใน *สมันตปาสาทิกา* (Sp I 231) และ *อัฏฐสาลินี* (As 24) เช่น *กุลุมพสูตร* (*Kulumbasutta*), *จตุปริวัฏฏสูตร* (*Catuparivatta*), *ราชโอวาทสูตร*, *ติกขินทริยสูตร*
  5. มโนทัศน์เรื่องอนุปิฎก (*Anupiṭaka*) และพาหิรคันถะ (*Bāhiragantha*) ในประวัติศาสตร์วรรณกรรมบาลี
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Samantapāsādikā* (Sp I 231, ed. Takakusu & Nagai, PTS)
  - *Aṭṭhasālinī* (As 24, ed. Edward Müller, PTS 1897)
  - *Milindapañha* (ed. V. Trenckner, PTS 1880)
  - *Nettippakaraṇa* และ *Peṭakopadesa* (ed. E. Hardy / Arabinda Barua, PTS)
  - *Piṭakat samuiṅḥ* (U Yan 1888; trans. and ed. Peter Nyunt as *Catalogue of the Pitaka and Other Texts in Pāli, Pāli-Burmese, and Burmese*, Bristol: PTS, 2012)
  - พระไตรปิฎกฉบับสยามรัฐ (พ.ศ. 2468–2470)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Steven Collins, "On the Very Idea of the Pali Canon," *Journal of the Pali Text Society* 15 (1990): 89–126.
  - K.R. Norman, *Pāli Literature* (Wiesbaden: Otto Harrassowitz, 1983).
  - Oskar von Hinüber, *A Handbook of Pāli Literature* (Berlin: Walter de Gruyter, 1996).
  - 林 隆嗣 (Takatsugu Hayashi), "仏典結集で収載されなかった経典―KuḷumbasuttaとCatuparivaṭṭasuttaを中心に―" [Apocryphal Suttas Not Listed in the Buddhist Councils: Kuḷumbasutta, Catuparivaṭṭasutta and Other Source-Materials in the Aṭṭhasālinī], *Journal of Pali and Buddhist Studies* (パーリ学仏教文化学) 27 (2013): 21–46.
  - Peter Skilling, "Redaction, Recitation, and Writing: Transmission of the Buddha's Teachings in India in the Early Period," in *Buddhist Manuscript Cultures* (London: Routledge, 2009).

#### Section 3.2 (Micro-Sprint 10)
- **รหัสไฟล์:** `drafts/sections/ch03_sec02.md`
- **ชื่อหัวข้อ:** วรรณกรรมชาดกนอกสารบบ: ปัญญาสชาดกในล้านนาและอุษาคเนย์ และทสโพธิสัตตุปปัตติกถา
  *(Southeast Asian Apocryphal Jātakas: Paññāsa Jātaka and Future Bodhisatta Cycles)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. *ปัญญาสชาดก* (*Paññāsa Jātaka* / *Zimme Paṇṇāsa* / *Ha-sip Chat*): กำเนิดในล้านนา (เชียงใหม่ ยุคทองพุทธศตวรรษที่ 20–21) และการแพร่กระจายข้ามพรมแดนสู่อาณาจักรพม่า ลาว กัมพูชา และอยุธยา-รัตนโกสินทร์
  2. การบุกเบิกชำระและแปลโดยสมาคมบาลีปกรณ์ (PTS): ผลงานระดับตำนานของ Padmanabh S. Jaini (*Paññāsa-Jātaka*, 2 vols., 1981–1983) และ I.B. Horner (*Apocryphal Birth-Stories*, 2 vols., 1985–1986)
  3. โครงสร้างวรรณกรรมและอุดมการณ์พระโพธิสัตว์: การทานบริจาคขั้นอุกฤษฏ์ (มหาบริจาค) ที่ทวีความรุนแรงและลึกซึ้งยิ่งกว่าชาดก 550 ชาติ, กรณีศึกษาตัวบทเอก: *สมุททโฆสชาดก* (สู่สมุทรโฆษคำฉันท์), *สุธนชาดก* (พระสุธน-มโนห์รา), *รถเสนชาดก* (นางสิบสอง), การสถาปนาพระโพธิสัตว์และฉากท้องถิ่นในอุษาคเนย์
  4. *ทสโพธิสัตตุปปัตติกถา* (*Dasabodhisattuppattikathā* ชำระโดย Hammalawa Saddhatissa, PTS 1975): คัมภีร์ว่าด้วยการอุบัติของพระพุทธเจ้า 10 พระองค์ในอนาคตต่อจากพระศรีอาริยเมตไตรย (พระราม, พระเจ้าปเสนทิโกศล, อภิภู, พญามาร ฯลฯ) พุทธวิทยาเชิงพัฒนาการและแนวคิดการให้อภัยสากล
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Paññāsa-Jātaka: Or Zimme Paṇṇāsa* (ed. Padmanabh S. Jaini, 2 vols., London: PTS, 1981–1983)
  - *Apocryphal Birth-Stories (Paññāsa-Jātaka)* (trans. I.B. Horner and P.S. Jaini, 2 vols., London: PTS, 1985–1986)
  - *The Birth-Stories of the Ten Bodhisattas and the Dasabodhisattuppattikathā* (ed. and trans. H. Saddhatissa, London: PTS, 1975)
  - ตัวเขียนใบลานล้านนา วัดไหล่หิน และหอสมุดแห่งชาติ (ปัญญาสชาดกสำนวนต่างๆ)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Padmanabh S. Jaini, *Collected Papers on Buddhist Studies* (Delhi: Motilal Banarsidass, 2001).
  - Peter Skilling, "Jātaka and Paññāsa Jātaka in South-East Asia," *Journal of the Pali Text Society* 28 (2006): 113–173.
  - Louis Finot, "Recherches sur la littérature laotienne," *Bulletin de l'École française d'Extrême-Orient* 17 (1917): 1–218.
  - George Cœdès, "The Traibhūmikathā: Buddhist Cosmology and Treaty on Ethics," *East and West* (1956).
  - Justin McDaniel, *Gathering Leaves and Lifting Words: Histories of Buddhist Monastic Education in Laos and Thailand* (Seattle: University of Washington Press, 2008).

#### Section 3.3 (Micro-Sprint 11)
- **รหัสไฟล์:** `drafts/sections/ch03_sec03.md`
- **ชื่อหัวข้อ:** พระสูตรนอกสารบบในวัฒนธรรมตัวเขียนอุษาคเนย์: พระสูตรกลุ่มเอวมฺเม สุตํ และวรรณกรรมเล่าเรื่องจักรวาล
  *(Regional Southeast Asian "Evam me sutam" Suttas and Cosmological Narratives)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. ปรากฏการณ์พระสูตรนอกสารบบที่ขึ้นต้นด้วยสูตรนำพุทธพจน์ดั้งเดิม *เอวมฺเม สุตํ* (*Evam me sutaṃ*) และจำลองฉากพุทธประวัติในอินเดียเพื่อสร้างความศักดิ์สิทธิ์:
     - *พระอาการวัตตาสูตร* (*Ākāravattārasutta*): พุทธคุณเพื่อปัดเป่าภัยพิบัติและมนต์หลวง
     - *พระอุณหิสสวิชัยสูตร* (*Uṇhissavijaya-sutta*): การปรับรับอุษณีษวิชัยธารณีของมหายานสู่สำนวนพระสูตรเถรวาท
     - *พระมหาทิพมนต์* (*Mahādibbamanta*): พระสูตรพิธีกรรมปราบเคราะห์
     - *ตุณฑิโลวาทสูตร* (*Tuṇḍilovāda-sutta*): บทวิเคราะห์ของ Charles Hallisey (JPTS 1990) ในฐานะพระสูตรคู่มือเทศนาของพระสงฆ์พื้นเมือง
     - *นิพพานสูตร* / *นิพพินทสูตร*: พระสูตรท้องถิ่นว่าด้วยการสนทนาสัจธรรมแห่งพระนิพพาน
     - *โกสลพิมพวัณณนา* (*Kosalabimbavaṇṇanā*): พุทธพจน์ว่าด้วยอานิสงส์การสร้างพระพุทธรูปไม้แก่นจันทน์และรากฐานพิธีพุทธาภิเษก (ศึกษาโดย Gombrich และ Swearer)
  2. วรรณกรรมจักรวาลวิทยาและชีวประวัติมหากาพย์:
     - *ไตรภูมิกถา* (*Traibhūmikathā* พญาลิไทย ค.ศ. 1345) สารานุกรมคัมภีร์วิทยาของสยามที่อ้างอิงคัมภีร์กว่า 30 รายการ
     - *จักรวาฬทีปนี* (*Cakkavāḷadīpanī* พระสิริมังคลาจารย์ แห่งเชียงใหม่ ค.ศ. 1520) การสังเคราะห์จักรวาลวิทยาภาษาบาลีบริสุทธิ์
     - *โลกปัญญัตติ* (*Lokapaññatti* ชำระโดย Eugène Denis 1977) และ *โลกเนยยปกรณ์* (*Lokaneyyappakaraṇa* ชำระโดย P.S. Jaini 1986)
     - *ปฐมสมโพธิกถา* (*Paṭhamasambodhikathā* ฉบับกรมพระปรมานุชิตชิโนรส พ.ศ. 2388): ฉากพระแม่ธรณีบีบมวยผมและพระอุปคุตปราบมารในฐานะต้นแบบพุทธประวัติอุษาคเนย์
     - *โสตัตถกีมหานิทาน* (*Sotattakīmahānidāna* รจนาโดยพระจุลพุทธโฆสะ): มหากาพย์พุทธประวัติและจักรวาลวิทยาว่าด้วยการบำเพ็ญบารมีของพระโพธิสัตว์ย้อนหลังข้ามอสงไขยกัป การสร้างวงศ์พระพุทธเจ้าในอดีตนับร้อยพระองค์ และการขยายพุทธวิทยาฝ่ายเถรวาทในอุษาคเนย์
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *Tuṇḍilovādasutta* (ตัวเขียนใบลานวัดไหล่หิน ลำปาง, ed. Charles Hallisey 1990)
  - ใบลานพระอาการวัตตาสูตร และพระอุณหิสสวิชัยสูตร (หอสมุดแห่งชาติ)
  - *Kosalabimbavaṇṇanā* (ed. and trans. Richard Gombrich 1978)
  - *Cakkavāḷadīpanī* (พระสิริมังคลาจารย์ ค.ศ. 1520, ฉบับตรวจชำระ มหาวิทยาลัยเชียงใหม่)
  - *La Lokapaññatti et les idées cosmologiques du bouddhisme ancien* (ed. and trans. Eugène Denis, 2 vols., Paris: EFEO, 1977)
  - *Lokaneyyappakaraṇa* (ed. Padmanabh S. Jaini, London: PTS, 1986)
  - *Sotatthakīmahānidāna* (ฉบับแปลและชำระโดย มูลนิธิมหามกุฏราชวิทยาลัย / ฉบับตัวเขียนใบลานล้านนาและหอสมุดแห่งชาติ)
  - *Paṭhamasambodhikathā* (สมเด็จพระมหาสมณเจ้า กรมพระปรมานุชิตชิโนรส พ.ศ. 2388)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - Charles Hallisey, "A Rare Sutta from Southeast Asia: The Tuṇḍilovādasutta," *Journal of the Pali Text Society* 14 (1990): 155–195.
  - Charles Hallisey, "Nibbānasutta: An Allegedly Non-Canonical Sutta on Nibbāna as a Great City," *JPTS* 18 (1993): 97–130.
  - Peter Skilling, "The Rakṣā Literature of the Śrāvakayāna," *Journal of the Pali Text Society* 16 (1992): 109–182.
  - Donald K. Swearer, *Becoming the Buddha: The Ritual of Image Consecration in Thailand* (Princeton: Princeton University Press, 2004).
  - Frank E. Reynolds and Mani B. Reynolds, trans., *Three Worlds According to King Ruang: A Thai Buddhist Cosmology* (Berkeley: Asian Humanities Press, 1982).
  - Oskar von Hinüber, *A Handbook of Pāli Literature* (Berlin: Walter de Gruyter, 1996), §367.
  - George Cœdès, "Une recension palie des Annales d'Ayuthia," *BEFEO* 14 (1914): 1–31.

#### Section 3.4 (Micro-Sprint 12)
- **รหัสไฟล์:** `drafts/sections/ch03_sec04.md`
- **ชื่อหัวข้อ:** พุทธศาสตร์ลัทธิตันตระ กรรมฐานโบราณ บรรณานุกรมศาสตร์พื้นเมือง และการเปลี่ยนกระบวนทัศน์ PTS
  *(Tantric Theravāda, Borān Kammaṭṭhāna, Indigenous Bibliographies, and the Decolonial Turn)*
- **เป้าหมายความยาวคำ:** **2,500–3,000 คำ**
- **ประเด็นวิเคราะห์หลักเชิงลึก:**
  1. พุทธศาสตร์ลัทธิตันตระ (Tantric Theravāda / Southern Esoteric Buddhism) และกรรมฐานโบราณ (*Borān Kammaṭṭhāna*):
     - คัมภีร์โยคาวจร (*The Yogāvacara's Manual*): ตัวเขียนใบลานบาลี-สิงหลวัดพัมพรกะละ (Bambaragala ค.ศ. 1758) การค้นพบของ Rhys Davids และงานวิจัยปฏิวัติของ Kate Crosby ชี้ให้เห็นเครือข่ายสยามวงศ์ที่ฟื้นฟูจิตตภาวนาในลังกา
     - กายวิภาคจิตวิญญาณ (*Kāya-vibhāga*): การกำเนิดธรรมกายในครรภ์ และคัมภีร์สัททวิมล (*Saddavimala* ชำระโดย François Bizot & François Lagirarde)
     - การกวาดล้างกรรมฐานโบราณโดยขบวนการปฏิรูปสงฆ์สยามสมัยรัชกาลที่ 4 และขบวนการวิปัสสนาสมัยใหม่
  2. วรรณกรรมพุทธรักษ์และธารณีบาลี: *พระคาถาชินบัญชร* (*Jinapañjara*), ปริตรหลวง, และเครือข่ายมนต์ข้ามภูมิภาค (ศึกษาโดย Peter Skilling)
  3. บรรณานุกรมศาสตร์และสารบัญคัมภีร์พื้นเมือง:
     - *คันถวงศ์* (*Gandhavaṃsa* โดยพระนันทปัญญา ชำระโดย Ivan P. Minayeff ใน JPTS 1886): การจำแนกคัมภีร์ชมพูทวีป ตัมพปัณณิ และรามัญ/โยนก
     - *สารสังคหะ* (*Sārasaṅgaha* โดยพระสิทธัตถะ ชำระโดย Genjun H. Sasaki, PTS 1992)
     - *ปิฏกัตตะสะมุ่ย* (*Piṭakat samuiṅḥ* ของ U Yan บรรณารักษ์หลวงมัณฑะเลย์ ค.ศ. 1888): ทะเบียนคัมภีร์พม่ากว่า 2,000 ชื่อ
     - สารบัญใบลานหลวงสยาม: พระไตรปิฎกฉบับทองใหญ่ (พ.ศ. 2331) สู่ฉบับพิมพ์ ร.ศ. 112 (พ.ศ. 2436) และฉบับสยามรัฐ (พ.ศ. 2468–2470)
  4. ประวัติศาสตร์นิพนธ์ของสมาคมบาลีปกรณ์ (PTS) และการเปลี่ยนกระบวนทัศน์ทางวิชาการร่วมสมัย:
     - จากสุทธินิยมวิกตอเรียน (T.W. Rhys Davids, Hermann Oldenberg) ที่สร้างภาพลักษณ์ "เถรวาทดั้งเดิมปราศจากไสยเวท"
     - สู่การรื้อถอนอคติอาณานิคม (Decolonial Turn) และการยอมรับ "Polycentric Theravāda" ที่มีคัมภีร์นอกสารบบอุษาคเนย์เป็นหัวใจ (Steven Collins, Charles Hallisey, Peter Skilling, Kate Crosby, Trent Walker, Anne M. Blackburn)
- **หลักฐานปฐมภูมิที่จะใช้อ้างอิง:**
  - *The Yogāvacara's Manual of Indian Mysticism as Practised by Buddhists* (ed. T.W. Rhys Davids, London: PTS, 1896)
  - *La pureté par les mots (Saddavimala)* (ed. François Bizot & François Lagirarde, Paris: EFEO, 1996)
  - *Gandhavaṃsa* (ed. Ivan P. Minayeff, *JPTS* 1886: 54–80)
  - *Sārasaṅgaha* (ed. Genjun H. Sasaki, London: PTS, 1992)
  - *Piṭakat samuiṅḥ* (U Yan 1888; trans. Peter Nyunt, Bristol: PTS, 2012)
  - *Jinapañjara* (ต้นฉบับล้านนา, พม่า, สยาม)
- **แหล่งข้อมูลทุติยภูมิที่จะใช้อ้างอิง:**
  - François Bizot, *Le Figuier à cinq branches: Recherche sur le bouddhisme khmer* (Paris: EFEO, 1976).
  - François Bizot, *Le Chemin de Laṅkā* (Paris: EFEO, 1992).
  - Kate Crosby, *Esoteric Theravada: The Story of the Forgotten Meditation Tradition of Southeast Asia* (Boulder: Shambhala, 2020).
  - Trent Walker, *Until Nirvana's Time: Buddhist Songs from Cambodia* (Boulder: Shambhala, 2022).
  - Peter Skilling, "The Rakṣā Literature of the Śrāvakayāna," *Journal of the Pali Text Society* 16 (1992): 109–182.
  - Anne M. Blackburn, *Buddhist Learning and Textual Practice in Eighteenth-Century Lankan Monastic Culture* (Princeton: Princeton University Press, 2001).
  - Charles Hallisey, "Roads Taken and Not Taken in the Study of Theravāda Buddhism," in *Curators of the Buddha: The Study of Buddhism under Colonialism* (Chicago: University of Chicago Press, 1995).

---

## สรุปเป้าหมายจำนวนคำรายบทและทั้งโครงการ (Word Sizing Ledger)

| ลำดับบท | รหัส Section | หัวข้อย่อย | เป้าหมายความยาวคำ (คำ) | สถานะการควบคุม |
|:---|:---|:---|:---:|:---|
| **บทที่ 1** | บทนำ-บทสรุป | บทนำและบทสรุปประจำบทที่ 1 | 600–800 | จัดทำในชั้นรวมบท |
| | `ch01_sec01` | วิวัฒนาการการจำแนกพระธรรมวินัย (องคะ 9/12 สู่นิกายและอาคม 4) | 2,500–3,000 | Micro-Sprint 1 |
| | `ch01_sec02` | การสถาปนาพระไตรปิฎกบาลีสำนักมหาวิหารในศรีลังกาและสายอรรถกถา-ฎีกา | 2,500–3,000 | Micro-Sprint 2 |
| | `ch01_sec03` | สารบบภาษาสันสกฤตฝ่ายเหนือและเอกสารโบราณกิลกิต ตูร์ฟาน และเชอยัน | 2,500–3,000 | Micro-Sprint 3 |
| | `ch01_sec04` | สารบัญพระสูตรจีน สารบบทิเบต การถ่ายทอดสู่ญี่ปุ่น และประวัติศาสตร์นิพนธ์ | 2,500–3,000 | Micro-Sprint 4 |
| **รวมบทที่ 1** | | **บทที่ 1 สมบูรณ์** | **$\ge$ 10,000 คำ** (กรอบ 10,600–12,800) | ตรวจสอบด้วย `count_words.py --file` |
| **บทที่ 2** | บทนำ-บทสรุป | บทนำและบทสรุปประจำบทที่ 2 | 600–800 | จัดทำในชั้นรวมบท |
| | `ch02_sec01` | ญาณวิทยาแห่งพุทธพจน์และกลไกการรังสรรค์พระสูตรแปลกปลอมในจีน | 2,500–3,000 | Micro-Sprint 5 |
| | `ch02_sec02` | กรณีศึกษาพระสูตรนอกสารบบชิ้นเอก 6 คัมภีร์ และข้อถกเถียงเรื่องความแท้ | 2,500–3,000 | Micro-Sprint 6 |
| | `ch02_sec03` | ขบวนการสามขั้น (ซานเจี้ยเจี้ยว) และการปฏิวัติทางโบราณคดี: ตุนหวงและนานัตสึเดระ | 2,500–3,000 | Micro-Sprint 7 |
| | `ch02_sec04` | คัมภีร์นอกสารบบและตัวบทวิวาทะในทิเบต (ตันตระญิงมาและแตร์มา), เอเชียกลาง และญี่ปุ่น | 2,500–3,000 | Micro-Sprint 8 |
| **รวมบทที่ 2** | | **บทที่ 2 สมบูรณ์** | **$\ge$ 10,000 คำ** (กรอบ 10,600–12,800) | ตรวจสอบด้วย `count_words.py --file` |
| **บทที่ 3** | บทนำ-บทสรุป | บทนำและบทสรุปประจำบทที่ 3 | 600–800 | จัดทำในชั้นรวมบท |
| | `ch03_sec01` | ขอบเขตและความยืดหยุ่นของพระไตรปิฎกบาลี: วาทกรรมปิด-เปิด และพระสูตรสูญหาย | 2,500–3,000 | Micro-Sprint 9 |
| | `ch03_sec02` | วรรณกรรมชาดกนอกสารบบ: ปัญญาสชาดกในอุษาคเนย์ และทสโพธิสัตตุปปัตติกถา | 2,500–3,000 | Micro-Sprint 10 |
| | `ch03_sec03` | พระสูตรนอกสารบบในวัฒนธรรมตัวเขียนอุษาคเนย์: กลุ่มเอวมฺเม สุตํ และจักรวาลวิทยา | 2,500–3,000 | Micro-Sprint 11 |
| | `ch03_sec04` | ตันตระเถรวาท กรรมฐานโบราณ บรรณานุกรมศาสตร์พื้นเมือง และการเปลี่ยนกระบวนทัศน์ PTS | 2,500–3,000 | Micro-Sprint 12 |
| **รวมบทที่ 3** | | **บทที่ 3 สมบูรณ์** | **$\ge$ 10,000 คำ** (กรอบ 10,600–12,800) | ตรวจสอบด้วย `count_words.py --file` |
| **รวมทั้งโครงการ** | | **รวม 12 Sections + บทนำ-สรุป + สารบัญ + บรรณานุกรม** | **$\ge$ 30,000 คำ** (กรอบ 32,000–38,000) | ตรวจสอบด้วย `count_words.py --project` |

---

## รายการตรวจสอบสำหรับด่านตรวจ [Gate 1: Outline Gate Checklist]

- [x] **1. ความสอดคล้องกับข้อกำหนดผู้ใช้ (Specification Alignment):** โครงสร้าง 3 บทครอบคลุมหัวข้อ R1, R2, R3 ตาม ORIGINAL_REQUEST.md ครบถ้วน 100%
- [x] **2. โครงสร้าง Micro-Sprints และการบริหารขนาดงาน (Task Sizing):** แต่ละบทแบ่งออกเป็น 4 sections รวม 12 sections กำหนดเพดานความยาวคำที่ 2,500–3,000 คำต่อ section เพื่อป้องกัน Context Bloat
- [x] **3. เป้าหมายความยาวคำขั้นต่ำ (Word Count Targets):** กำหนดเป้าหมายบทละไม่น้อยกว่า 10,000 คำ และยอดรวมทั้งโครงการไม่น้อยกว่า 30,000 คำ (สูตร: อักขระตัดช่องว่าง ÷ 5.0)
- [x] **4. การครอบคลุมภาษา (Multilingual Plan):** ระบุการใช้หลักฐานครอบคลุม Tier 0 (ไทย, อังกฤษ), Tier 1 (บาลี, สันสกฤต, จีน, ทิเบต), และ Tier 2 (ญี่ปุ่น, ฝรั่งเศส, เยอรมัน, รัสเซีย, พม่า) ชัดเจนทุกหัวข้อย่อย
- [x] **5. ความถูกต้องแท้จริงของแหล่งข้อมูล (Zero Hallucination Grounding):** ทุกหัวข้อย่อยระบุรายชื่อเอกสารปฐมภูมิ คัมภีร์ ตัวเขียน และงานวิชาการทุติยภูมิพร้อมชื่อนักวิชาการ ปีพิมพ์ และประเด็นวิวาทะที่มีอยู่จริงในโลกวิชาการ 100%
- [x] **6. การตัดขาดจากวิกิพีเดีย (No Wikipedia Rule):** ปราศจากการอ้างอิง Wikipedia หรือ Wikidata ในสารบบโครงร่างและบรรณานุกรม
- [x] **7. การห้ามใช้อิโมจิ (Zero Emoji Compliance):** ปราศจาก emoji ทุกชนิดในเอกสารโครงร่างและระบบงานทั้งหมด
