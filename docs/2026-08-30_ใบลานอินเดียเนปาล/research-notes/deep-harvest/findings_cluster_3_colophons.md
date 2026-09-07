# รายงานการวิจัยเชิงลึกและการสกัดหลักฐานทางวิชาการ: Cluster 3 — ธรรมเนียมการคัดลอก จารึกท้ายคัมภีร์ (Colophons) และสังคมวิทยาของนักคัดลอก

**ผู้จัดทำ:** ผู้เชี่ยวชาญด้านจารึกวิทยา อักขรวิทยาโบราณ และธรรมเนียมการคัดลอก (Epigraphy & Colophon Philologist)
**แหล่งข้อมูลปฐมภูมิและคลังเอกสาร:** คลังข้อความแคช `text_cache/cluster_3_colophons/` และสารบบเอกสารสกัดฉบับเต็มของโครงการวิจัยใบลานอินเดีย-เนปาล (`colophons_2022.txt`, `desimini_2016.txt`, `formigatti_add1698.txt`, `yoshizaki_family_history_2023.txt`, `Kinra_HinduSecretary_intro.txt`, `colas_sarasvati_library.txt`, `davis_hegemony_ch2.txt`)
**เป้าหมายการบันทึก:** `findings_cluster_3_colophons.md`

---

## 1. ทฤษฎีและโครงสร้าง Colophon: วาทกรรมเชิงนิรุกติศาสตร์และพัฒนาการทางประวัติศาสตร์

### 1.1 การจำแนกระหว่าง granthapraśasti และ pustakapraśasti

ในแวดวงภารตวิทยาและบรรณคดีวิทยาเอเชียใต้ หนังสือรวมบทความวิชาการ *The Syntax of Colophons: A Comparative Study across Pothi Manuscripts* (บรรณาธิการโดย Nalini Balbir และ Giovanni Ciotti, 2022) ได้วางรากฐานระเบียบวิธีวิจัยและกรอบศัพท์เชิงโครงสร้างที่รัดกุม โดยจำแนกความแตกต่างเชิงหน้าที่ระหว่าง "ข้อความปิดท้ายของตัวบท" กับ "ข้อความปิดท้ายของเล่มคัมภีร์" ไว้อย่างเด็ดขาด

Nalini Balbir และ Giovanni Ciotti ได้อ้างถึงรากศัพท์และการประดิษฐ์ศัพท์เฉพาะทางของนักวิชาการไชนะ Muni Jinavijaya (1943) ใน *Jainapustakapraśastisaṅgraha* ซึ่งจำแนกศัพท์ *praśasti* (บทสรรเสริญ) ออกเป็นสองระดับโครงสร้าง:

> "Colophons are usually defined – and here understood – as scribal notes attached to a manuscript copy of a text (pustakapraśasti in the terms of Jinavijayamuni), as opposed to explicits: information about a text that forms a more integral part of the text itself (Jinavijayamuni’s granthapraśasti – in Sanskrit often signalled by the word samāpta-), such as information about the author or a chapter listing. Colophons are thus more loosely attached to a text than explicits (though it is still possible for them to be copied along with a text from one manuscript to another)." [Baums 2022, p. 22]

Camillo A. Formigatti ขยายความคำอธิบายนี้ในบริบทของคัมภีร์เนปาล:

> "...Jinavijayamuni coins two new terms by splitting the generic term praśasti into granthapraśasti 'colophon of the text' in which the author mentions his ancestors, his patrons or his sectarian affiliation within Jainism and communicates the title of his work and pustakapraśasti 'colophon of the book', which is composed by the scribe. The granthapraśasti (explicit) thus is an integral part of a literary work, while the pustakapraśasti (colophon) varies from manuscript to manuscript. Another Sanskrit term analogous to granthapraśasti is granthālaṅkāra, already attested in sixteenth century manuscripts." [Formigatti 2022, p. 51]

การจำแนกนี้มีความสำคัญยิ่งต่อการวิพากษ์ตัวบท (Textual Criticism): *granthapraśasti* ถือเป็นองค์ประกอบเนื้อหาแท้จริง (integral text) ที่ผู้ประพันธ์ผูกขึ้นเพื่อระบุวงศ์ตระกูล นิกาย ผู้อุปถัมภ์ และชื่อคัมภีร์ ซึ่งจะถูกถ่ายทอดสืบต่อไปในทุกสำเนา ในขณะที่ *pustakapraśasti* คือข้อความของนักคัดลอก (scribal colophon/paratext) ที่ผันแปรไปตามแต่ละเล่มกายภาพ ระบุชื่ออาลักษณ์ วันเวลา สถานที่ และผู้ออกทุนคัดลอกเฉพาะรอบนั้นๆ

### 1.2 การวิพากษ์ศัพท์ puṣpikā และนิยามตามมาตรฐาน TEI

Formigatti ได้ดำเนินการตรวจสอบทางนิรุกติศาสตร์อย่างละเอียดเกี่ยวกับความเข้าใจผิดที่แพร่หลายในหมู่นักภารตวิทยาที่นิยมใช้คำว่า *puṣpikā* (ปุษปิกา) ในความหมายว่า "colophon":

> "Despite the existence of such analytic terminology, Indologists usually employ the Sanskrit term puṣpikā in the sense of colophon, albeit without giving any particular thought to its origin and purport. On the other hand, a closer look at its origin and meaning as provided by dictionaries reveals such equivalence to be groundless. In his 1832 dictionary, Horace Hayman Wilson provides only two meanings for the term puṣpikā: '(1) The tartar of the teeth. (2) The mucus of the glans penis, or urethra' (Wilson, s.v.)." [Formigatti 2022, p. 52]

ความหมายที่สามของ *puṣpikā* ปรากฏขึ้นครั้งแรกในพจนานุกรมภาษาสันสกฤต *Vācaspatyabr̥hatsaṃskr̥tābhidhāna* (1873) ของ Tārānātha Tarkavācaspati Bhaṭṭācārya:

> "Puṣpikā [...] 1 dantamale hārā° | 2 liṅgamale hema° | granthādhyāyasamāptau tatpratipādyakathane granthāṃśabhede yathā 'iti mahābhārate śatasāhasryāṃ saṃhitāyām ityādi' (Puṣpikā [...] 1. In the meaning of impurity of the teeth. 2. In the meaning of impurity of the penis. [3.] In the meaning of the conclusion of a work or chapter, in order to explain its content, in order to tell apart the sections of the work...)" [Formigatti 2022, p. 52]

Formigatti ชี้ว่า นิยามที่สามนี้มิได้มีมาแต่โบราณ หากแต่เกิดจากการที่ผู้แต่งพจนานุกรมเปรียบเทียบลวดลายประดับรูปดอกไม้ (stylized floral decorations) ที่มักวาดไว้ท้ายบทคัมภีร์ว่าเป็น "ดอกไม้น้อย" (*puṣpikā*) จนเกิดการเลื่อนความหมายเชิงความคุ้นเคย (semantic shift) เข้าสู่พจนานุกรมของ Monier-Williams (ฉบับพิมพ์ครั้งที่ 2 ค.ศ. 1899) เพื่อหลีกเลี่ยงความสับสนนี้ โครงการจัดทำรายการคัมภีร์สันสกฤตแห่งหอสมุดมหาวิทยาลัยเคมบริดจ์ (Cambridge Sanskrit Manuscript Project) จึงเลือกใช้เกณฑ์ของ *Text Encoding Initiative* (TEI):
1. **Final rubric** (หรือ ascription/heading): ข้อความระบุชื่อบทหรือชื่อเรื่องท้ายตอน เช่น `iti ... samāptam`
2. **Colophon**: ข้อความทางการที่ให้ข้อมูลเกี่ยวกับ วันที่ สถานที่ ตัวแทนผู้กระทำ (agency) หรือเหตุผลในการผลิตคัมภีร์เล่มนั้น [Formigatti 2022, p. 55]

### 1.3 ต้นกำเนิด Colophon ในเอเชียใต้: จากจารึกอโศกสู่สูตรพุทธคานธาราและสันสกฤต

Stefan Baums ในบทความวิชาการสำคัญ "The Earliest Colophons in the Buddhist Northwest" ได้สืบค้นกำเนิดของแบบแผน colophon ในเอเชียใต้ โดยชี้ให้เห็นว่ารูปแบบบันทึกปิดท้ายที่เก่าแก่ที่สุดมิได้เริ่มจากพิธีกรรมทางศาสนา หากแต่มีรากฐานมาจากธรรมเนียมการบริหารราชการของจักรวรรดิอะคีเมนิด (Achaemenid Empire) ที่ส่งผ่านระบบเอกสารราชการภาษาอราเมอิก (Aramaic administrative model):

> "The earliest colophons known from South Asia are preserved in three Minor Rock Edicts of Aśoka (at Brahmagiri, Jatinga-Ramesvara and Siddapura in southern India) and read:  
> capaḍena likhite lipikareṇa (Brahmagiri, CKI 29)  
> + + ḍena [likhita]ṃ + [pika]reṇa (Jatinga-Ramesvara, CKI 30)  
> capa + + + + + + + + + ṇa (Siddapura, CKI 31)  
> 'Written by Capaḍa the scribe.'  
> It is remarkable that in all three of these inscriptions, the name of the scribe (not necessarily the same person as the engraver) and the verb of action are written in Brāhmī script while the title lipikara (as well as its derivation lipi 'script') was at this time in the mid-third century BCE still firmly associated with the northwest. It may also indicate that the particular scribe Capaḍa hailed from those parts, and was evidently proficient therefore both in the Kharoṣṭhī script of his homeland and the Brāhmī script used by Aśoka in India." [Baums 2022, p. 23]

ต่อมาในม้วนคัมภีร์เปลือกเบิร์ชภาษาคานธารี (Gāndhārī) อักษรขโรษฐี (Kharoṣṭhī) Baums ได้เสนอการอ่านชำระใหม่ (re-reading) สำหรับจารึกท้ายคัมภีร์ *Khotan Dharmapada* (ปลายศตวรรษที่ 1 ถึงต้นศตวรรษที่ 2 ค.ศ.) ซึ่งแก้ปัญหาข้อผิดพลาดเดิมของ John Brough (1962) และ Richard Salomon:

> "Budhavarmasa ṣamaṇasa Budhaṇadisa[r]dhavayarisa ida Dharmapadasa postaka Dharmaśraveṇa likhida arañi  
> 'This book of the Dharmapada of (= belonging to) the monk Buddhavarma, student of Buddhanandin, has been written by Dharmaśrava in the monastery.'" [Baums 2022, p. 32]

การอ่านใหม่นี้พิสูจน์ให้เห็นว่าสูตร colophon ยุคแรกประกอบด้วย 3 มิติหลัก:
1. ผู้ครอบครองหรือผู้ว่าจ้างในรูปสัมพันธการก (genitive case): `Budhavarmasa ṣamaṇasa...`
2. ผู้คัดลอกตัวจริงในรูปตติยาวิภัตติ (instrumental case): `Dharmaśraveṇa likhida`
3. สถานที่ผลิต: `arañi` (ภาษาสันสกฤต: *araṇye* ซึ่งมีความหมายทางประวัติศาสตร์ภาษาเปลี่ยนจาก "ป่าเปลี่ยว" สู่ "วัดป่า" และกลายมาเป็น "อาราม/วัดทั่วไป" ในภาษาคานธารี) [Baums 2022, p. 33]

เมื่อธรรมเนียมนี้ขยายตัวเข้าสู่คัมภีร์พุทธสันสกฤตยุคคลาสสิก ดังปรากฏในคัมภีร์ใบลานและเปลือกเบิร์ชจากกิลกิต (Gilgit manuscripts ราวศตวรรษที่ 6 ค.ศ.) เช่น ในคัมภีร์ *Ajitasenavyākaraṇa* สูตร colophon ได้ดูดซับเอาแบบแผนจารึกการถวายทานทางศาสนา (donative inscriptions) เข้ามาอย่างเต็มรูป:

> "devadharmoyaṃ Bālosiṃhena sārdhaṃ bhāryā Jījaḍiena sārdhaṃ mātāpitrau paramaduṣka<rakar>trau sārdhaṃ Kṣiṇiena Akhaloṭiena Diśoṭa Jīja Maṃgali + + + + Utrapharna Gavidoṭi Vaṭūri Khuśoṭi Khuśogoṭena sārdhaṃ sarvasatve sarva[prāṇi]bhir. yad atra puṇya tad bha[va]tu [sarv]vasatvānāṃm [anut]t[arajñānavāpnuyā. tathā] sārdhaṃ paramakalyāṇamitra Sthirabandhuena. likhidam idaṃ pustakaṃ dharmabhāṇaka Narendradattena  
> 'This is the donation of Bālasiṃha, together with (his) wife Jījaḍia, together with (his) parents who do a highly difficult thing, together with Kṣiṇia, Akhaloṭia, Diśoṭa, Jīja, Maṃgali + + + + Utrapharna, Gavidoṭi, Vaṭūri, Khuśoṭi (and) Khuśogoṭa, together with all beings, all who live. The merit that is here shall be for the acquisition of highest knowledge by all beings. Also together with the highest spiritual friend Sthirabandhu. This book has been written by the reciter of the dharma Narendradatta.'" [Baums 2022, p. 43]

Baums สรุปพัฒนาการทางโครงสร้างและทฤษฎีการกระทำทางภาษา (speech act theory) ไว้อย่างลึกซึ้ง:

> "In the literary examples, a gradual expansion of the formula of colophons is seen, from a simple indication of scribe, commissioner and witnesses to much more elaborate colophons that also include text titles and long lists of intended beneficiaries. This last element is incorporated from contemporary Buddhist donative inscriptions, with their notion of the transference of the merit accrued by a donation to other parties, and occupies the ready-made slot in the formula originally occupied by the witnesses of secular documents. In the terminology of Schiegg 2016 (based on Searle 1979), this addition introduced an expressive/assertive function to the text type of colophon that previously had been entirely declarative..." [Baums 2022, p. 44]

---

## 2. สังคมวิทยาของนักคัดลอก: วรรณะ ช่างฝีมือหลวง และเครือข่ายตระกูลอาลักษณ์

### 2.1 ชนชั้นและวรรณะของนักคัดลอก: kāyastha, karaṇa, lekhaka, lipikara

ในสังคมอินเดียโบราณและยุคกลาง การคัดลอกคัมภีร์มิได้จำกัดอยู่เฉพาะพระภิกษุหรือพราหมณ์ หากแต่ก่อตัวขึ้นเป็นชนชั้นวิชาชีพเฉพาะทาง คำเรียกผู้ปฏิบัติหน้าที่บันทึกและคัดลอกมีวิวัฒนาการทางประวัติศาสตร์อย่างเด่นชัด:
- `lipikara` หรือ `dipikara`: ปรากฏตั้งแต่จารึกพระเจ้าอโศก (เช่น Capaḍa) รับมาจากศัพท์เปอร์เซียโบราณ *dipi* (จารึก/ตัวอักษร) [Baums 2022, p. 23]
- `divira` (หรือ `tivira`): คำยืมภาษาอิหร่าน/เปอร์เซียที่ปรากฏในเอกสารคานธารีบนแผ่นไม้ ณ เมืองนิยา (Niya) บนเส้นทางสายไหมใต้ ศตวรรษที่ 3 ค.ศ. ระบุตำแหน่งเสมียนราชสำนักผู้มีเกียรติในสังคมราชสำนักโครรัยนะ (Krorayina kingdom) [Baums 2022, p. 42]
- `lekhaka`: ศัพท์ภาษาสันสกฤตมาตรฐานที่ใช้เรียกผู้คัดลอกหรืออาลักษณ์ทั่วไป ปรากฏในโศลกขออภัยความผิดพลาด เช่น `lekhako nāsti doṣakaḥ` [Formigatti 2022, p. 63]
- `karaṇa`: คำโบราณที่ใช้เรียกทั้งเสมียนบันทึกราชการ ชนชั้นเสมียน และต่อมาพัฒนาเป็นชื่อวรรณะย่อยวรรณะหนึ่งที่ทำหน้าที่ด้านเอกสาร
- `kāyastha`: วรรณะเสมียนและนักคัดลอกอาชีพที่มีบทบาทโดดเด่นสูงสุดในอินเดียเหนือและตะวันตก

Nalini Balbir ได้ศึกษาภาพประชากรศาสตร์ของนักคัดลอก (prosopography of actors) จากจารึกท้ายคัมภีร์ไชนะในอินเดียตะวันตก พบว่าชุมชนไชนะได้ว่าจ้างนักคัดลอกอาชีพที่ไม่ใช่ชาวไชนะอย่างกว้างขวาง โดยเฉพาะกลุ่มวรรณะกายัสถะ:

> "Copyists are very often mendicants or laypeople (see here passim) but there are also numerous examples of persons who are non-Jain professional scribes indicated by their names or caste-identification: leṣaka Kanhā, kāyastha Māthura Sudarśanena, Josī Jagannātha, Jośī Pītāmbara, Joṣī Ṣopā, Josī Poyā, Paṇḍayā Śaṃkar. All the works these persons copied are central works of the Jain tradition." [Balbir 2022, p. 138]

การที่วรรณะย่อย Māthura Kāyastha ได้รับการว่าจ้างให้คัดลอกคัมภีร์หลักของศาสนาไชนะ ยืนยันว่าความเป็นช่างคัดลอกอาชีพมีความเป็นกลางทางเทคนิคและสถานะทางเศรษฐกิจที่อยู่เหนือเส้นแบ่งทางนิกายศาสนา

### 2.2 วงศ์ตระกูลนักคัดลอกเนวารี: สายตระกูล Vajrācārya แห่ง Lalitpur และหลักฐานสัญญาที่ดิน (tamsuk)

หลักฐานอันโดดเด่นและละเอียดอ่อนที่สุดเกี่ยวกับสถาบันครอบครัวนักคัดลอกในหุบเขากาฐมาณฑุได้รับการค้นคว้าโดย Kazumi Yoshizaki (2023) ในการศึกษาคัมภีร์สันสกฤตหมายเลข 19 แห่งมหาวิทยาลัยโทไก (*Sugatāvadāna* คัดลอกในปี Nepāla Saṃvat 978 ตรงกับ ค.ศ. 1858 โดย Jñāna-vajra บุตรของ Pūrṇānanda Vajrācārya แห่ง Hyeraṃṅe-varṇṇa-mahāvihāra เมืองปาฏัน)

Yoshizaki ได้สร้างระเบียบวิธีวิจัยแบบบุกเบิก โดยนำข้อความจากจารึกท้ายคัมภีร์ (colophons) มาสอบทานร่วมกับเอกสารสัญญาซื้อขายและแบ่งมรดกอสังหาริมทรัพย์โบราณ (*tamsuk* - 不動産関連証文) ซึ่งทำให้สามารถสืบสายตระกูลนักคัดลอกวัชราจารย์ (Vajrācārya scribal lineage) ข้ามรุ่นได้ยาวนานถึง 8 ชั่วอายุคน (ครอบคลุมตั้งแต่ปลายศตวรรษที่ 17 ถึงต้นศตวรรษที่ 20):

> "土地家屋等の売買に関わった者たちが，しばしば写本の書写者や書写依頼者になる．「インド本国やインド文化に影響された地域には，（ネパール以外に）この種の文書は存在しない」（Lienhard 1988, XIV）．" [Yoshizaki 2023, p. 785]

การบูรณาสายตระกูลของตระกูล Vajrācārya แห่งอารามทองคำ (Hiraṇya-varṇa-mahāvihāra หรือ Kvā-bāhāla) แสดงให้เห็นบทบาทหน้าที่อันหลากหลายของนักคัดลอก:
1. **รุ่นบรรพบุรุษ:** Rakṣamana (คัดลอกคัมภีร์ *Mañjuśrī-pārājikā* ในปี NS 798 / ค.ศ. 1678) [p. 784]
2. **บทบาทการบริหารและพิธีกรรม:** Śrīmanta-deva Vajrācārya ปรากฏในสัญญาแบ่งมรดกที่ดินปี NS 837 (ค.ศ. 1717) และสัญญาซื้อที่ดินปี NS 887 (ค.ศ. 1767) โดยดำรงตำแหน่งเป็น *Cakreśvara* (ผู้อาวุโสสูงสุดฝ่ายวัชราจารย์ผู้ควบคุมพิธีกรรมตันตระทั้งหมดในมหาวิหาร) [p. 783]
3. **การเดินทางข้ามแดนสู่นานาชาติ:** สองพี่น้อง Vidyānanda และ Guṇānanda เดินทางไปคัดลอกคัมภีร์ถึงกรุงลาซา ประเทศทิเบต ในฐานะ "พระอาจารย์ผู้เป็นอวตารแห่งวัชรprotocol" (*Vajrasattva*) และสร้างคัมภีร์ *Dhāraṇīsaṃgraha* (NS 902) และ *Guṇakāraṇḍavyūha* (NS 907 ใน Rhāsa-desa / Lhasa) [pp. 784-785]
4. **การผลิตระดับมหึมา:** Pūrṇānanda Vajrācārya และบุตรชาย Jñāna-vajra ได้ผลิตชุดคัมภีร์นวธรรม (Navagrantha / 九大宝典) พร้อมกันถึง 5 คัมภีร์ในปี NS 958 (ค.ศ. 1838) ได้แก่ *Aṣṭasāhasrikā Prajñāpāramitā*, *Laṅkāvatāra*, *Saddharmapuṇḍarīka*, *Gaṇḍavyūha*, และ *Samādhirāja* [p. 785]

งานวิจัยของ Yoshizaki ชี้ชัดว่า นักคัดลอกวัชราจารย์แห่งเนปาลมิได้เป็นเพียงผู้รับจ้างแรงงาน แต่เป็นสถาบันทางสังคมที่บูรณาการระหว่างความเป็นปุโรหิตผู้ประกอบพิธีกรรม ผู้บริหารศาสนสถาน ปราชญ์ผู้เชี่ยวชาญภาษา และเจ้าของกรรมสิทธิ์ในระบบเศรษฐกิจที่ดิน

### 2.3 อาลักษณ์ในบริบทราชสำนักและรัฐ: จากปัญญาชนเนปาลถึง Mughal Munshī

ในบริบทราชสำนักเนปาลสมัยราชวงศ์มัลละ Formigatti (2022) ได้วิเคราะห์คัมภีร์ใบลาน Cambridge MS Add. 1698 ซึ่งเป็นคัมภีร์อรรถกถาพจนานุกรม *Amarakośa* ภาษาเนวารี (*Amarakośavivṛti* หรือ *Bālabodhinīvivṛti*) รจนาและคัดลอกโดยปราชญ์ราชสำนักชื่อ Māṇikya (Maṇika) ในปี NS 506 (ค.ศ. 1386) ตรงกับรัชกาลของกษัตริย์ Jayasthitimalla:

> "[161v4] svasti śrīmannepālikasamvatsare 506 caitrakṛṣṇatrayodaśyāṃ, budhavāsare rājādhirājaparameśvaraparamabhaṭṭārakaśrīśrīpaśupaticaraṇāravindasvita-śrīmāneśvarīvaralabdhapratāpaśrīśrījayasthitirājamalladevasya vijayarājye māṇikyena grathitvā likhiteyaṃ ||  
> 'Prosperity! Māṇikya composed and wrote this [Short Commentary of the Amarakośa in Newari language] in the venerated Nepalese year 506, in the thirteenth lunar day of the dark half of the month Caitra, on a Wednesday, during the victorious reign of the venerable Malla king Jayasthiti...'" [Formigatti 2022, p. 195]

คัมภีร์เล่มนี้แสดงให้เห็นว่า Māṇikya เป็นทั้งผู้แต่ง (author) และนักคัดลอก (scribe/autograph) โดยได้รับทุนสนับสนุนจากมหาอำมาตย์ Jayadbrahmā (amātya Jayata) เพื่อการศึกษาของบุตรชายตนเอง และเพื่อเปิดประตูให้เยาวชนข้ามมหาสมุทรแห่งภาษาทั้งหก (*ṣaḍbhāṣā*) [Formigatti 2022, p. 188]

เมื่อข้ามมาสู่บริบทของจักรวรรดิโมกุลในคริสต์ศตวรรษที่ 17 ราชสำนักอินเดียเหนือได้พัฒนาระบบอาลักษณ์และเสมียนราชการระดับสูงที่เรียกว่า *munshī* (มุนชี) อย่างเป็นระบบสูงสุด Rajeev Kinra (2015) ในงานวิจัยชิ้นเอก *A Hindu Secretary in King Shah Jahan's Court: Writing Imperial India with Chandar Bhan Brahman* ได้ศึกษาประวัติของ Chandar Bhan Brahman (เสียชีวิตราว ค.ศ. 1666–1670) อาลักษณ์พราหมณ์ผู้ดำรงตำแหน่งเลขาธิการแห่งสำนักการคลังจักรวรรดิ (*dīwānī*):

> "...bureaucratic and administrative policies in northern India were streamlined and rationalized to levels unprecedented in the history of the subcontinent and unsurpassed in all but a handful of states elsewhere in the world for some time to come. As a state secretary who spent most of his career working primarily out of the fiscal office (dīwānī) of the various prime ministers who served Shah Jahān, Chandar Bhan had an insider’s view of this administrative culture, and his observations thus provide us with unique insights into how certain classes of Mughal government officials thought about their professional duties and their obligations to the public at large." [Kinra 2015, p. 3]

Kinra ได้วิพากษ์แนวคิดอาณานิคมดั้งเดิมที่เคยมองว่ากลุ่มเสมียนฮินดู (วรรณะ Kāyastha, Khatri, Brahman) มีลักษณะแบบกิ้งก่าเปลี่ยนสี (chameleon-like attributes) ที่ต้องละทิ้งอัตลักษณ์เดิมเพื่อรับใช้จักรวรรดิมุสลิม โดยแสดงให้เห็นว่า Chandar Bhan มีความภาคภูมิใจในสายเลือดพราหมณ์ของตนอย่างเต็มเปี่ยม (ใช้ฉายานามทางวรรณกรรมว่า "Brahman") ในขณะเดียวกันก็เชี่ยวชาญการประพันธ์ร้อยแก้วภาษาเปอร์เซียขั้นสูง (*inshā'*) ในตำรา *Chahār Chaman* และ *Munsha'āt-i Brahman* จนกลายเป็นตำราต้นแบบของสำนักเสมียนตลอดสองศตวรรษถัดมา [Kinra 2015, pp. 5-6] วัฒนธรรมอาลักษณ์โมกุลจึงวางอยู่บนอุดมการณ์ความสงบสากล (*ṣulḥ-i kull*) และจริยธรรมของข้าราชการผู้มีขันติธรรมทางปัญญา

---

## 3. พิธีกรรม อุดมการณ์บุญ และเศรษฐกิจการคัดลอก

### 3.1 vidyādāna และ śāstradāna ในคัมภีร์ปุราณะ ธรรมศาสตร์ และศิวธรรม

แรงผลักดันมหาศาลที่ทำให้สังคมเอเชียใต้ยอมทุ่มเททรัพยากรทางเศรษฐกิจเพื่อการคัดลอกคัมภีร์ซ้ำแล้วซ้ำเล่าตลอดนับพันปี มิใช่เพียงเหตุผลด้านการศึกษาเชิงวิชาการ หากแต่อยู่ในมิติของ "เศรษฐกิจบุญ" (Merit Economy) ที่ผูกติดกับพิธีกรรม

Florinda De Simini (2016) ในงานวิจัยหลัก *Of Gods and Books: Ritual and Knowledge Transmission in the Śivadharma Texts and Religious Literature of Early Medieval India* ได้สกัดหลักฐานทางวรรณคดีและจารึกศาสตร์ที่แสดงให้เห็นการสถาปนาหมวดทานทางศาสนาที่เรียกว่า *vidyādāna* (การถวายความรู้) หรือ *śāstradāna* (การถวายคัมภีร์):

> "Literary and inscriptional sources call it the 'gift of knowledge' (vidyādāna) and, as the name itself suggests, its core ritual activity consists of the donation of knowledge, which in the case of the accounts of the Purāṇas or Purāṇic-like works can be embodied in a manuscript." [De Simini 2016, p. 37]

ในคัมภีร์ *Śivadharmottara* บทที่ 2 ได้ประกาศไว้อย่างเด็ดขาดว่าการถวายคัมภีร์เป็นทานอันประเสริฐสูงสุด:

> "vidyādānaṃ ca dānānāṃ sarveṣām uttamaṃ kila |  
> tac ca śrutau dvijendrāṇāṃ nānyeṣāṃ samudāhṛtam || 7" [De Simini 2016, p. 59]  
> "แท้จริงแล้ว วิทยาทาน (การให้ความรู้) ย่อมเป็นทานอันประเสริฐที่สุดในบรรดาทานทั้งปวง..."

ความสัมพันธ์ระหว่างการจ้างคัดลอกคัมภีร์ใบลานกับผลบุญทางเทววิทยาปรากฏอย่างเป็นรูปธรรมที่สุดในบทเดียวกัน:

> "śivaśāstraṃ likhitvā yaḥ pustakaṃ pratipādayet |  
> vidyādānasya sa phalaṃ labhate nātra saṃśayaḥ || 38  
> yāvad akṣarasaṅkhyānaṃ śivajñānasya pustake |  
> tāvad varṣasahasrāṇi dātā śivapure vaset || 39" [De Simini 2016, p. 82]  
> "'ผู้ใดคัดลอกคัมภีร์พระศิวะ (śivaśāstra) แล้วถวายคัมภีร์นั้น ผู้นั้นย่อมได้รับผลแห่งวิทยาทานอย่างไม่ต้องสงสัย จำนวนตัวอักษรในคัมภีร์แห่งศิวญาณมีเท่าใด ผู้ให้ย่อมได้สถิตอยู่ในศิวปุระเป็นเวลาหลายพันปีเท่านั้น!'"

ตรรกะการคำนวณบุญตาม "จำนวนตัวอักษร" (*akṣarasaṅkhyāna*) กลายเป็นแรงจูงใจทางเศรษฐกิจที่ทรงพลังอย่างยิ่งในการสนับสนุนสคริปทอเรียม (scriptorium) ของอินเดียโบราณ นอกจากนี้ ในวรรณคดีรวบรวมธรรมนิติสมัยกลาง (*dharmanibandha*) เช่น *Kṛtyakalpataru* ของ Lakṣmīdhara, *Dānasāgara* ของกษัตริย์ Ballālasena, และ *Caturvargacintāmaṇi* ของ Hemādri ได้จัดวางพิธี *vidyādāna* ไว้อย่างเป็นแบบแผน โดยสูตรสาบาน (*saṃkalpa*) ของผู้ถวายระบุชัดเจนว่า การให้คัมภีร์มีจุดประสงค์หลักเพื่อการสวดท่องและการศึกษาเล่าเรียน (*adhyayana*) ของผู้รับ มิใช่การเก็บใส่คลังพิพิธภัณฑ์ [De Simini 2016, pp. 228, 254-255]

### 3.2 สมการบุญ (Merit Equation) และการอุทิศผลบุญ: "yad atra puṇyaṃ..."

แนวคิดเรื่องความเท่าเทียมกันของผลบุญระหว่าง "ผู้สร้างดั้งเดิม" กับ "ผู้บูรณะซ่อมแซม" ได้รับการวิเคราะห์โดย Richard H. Davis (2018) ในบทศึกษา *The Hegemony of Heritage* โดยสำรวจจารึกอักษร Kuṭila ปี ค.ศ. 955 ณ เทวาลัย Ambikā Devī เมือง Jagat รัฐราชสถาน:

> "In 955 CE at the Ambikā Devī temple, Valluk, the son of Sambapura, constructed a bridge. He came here every day to worship the goddess Ambikā. The renovator of the Baori, the well, the pond, the garden and the Ambikā temple itself deserved equal religious merit to the one who originally built it. ... According to the clear Kuṭila script that remains in situ, the one who renovated the site of the Ambikā temple in the mid-tenth century deserved equal religious merit to the one originally responsible for the temple’s creation. This merit equation suggests those who renovate this same tenth-century temple in the twenty-first century deserve equal religious merit to those who originally constructed these archaeological sites." [Davis 2018, p. 53]

"สมการบุญ" (Merit Equation) นี้ถูกถ่ายทอดลงสู่ธรรมเนียมคัมภีร์พุทธมหายานอย่างสมบูรณ์ผ่านสูตรการอุทิศผลบุญ (*pariṇāmanā*) ซึ่ง Camillo Formigatti (2022) ได้ประมวลโครงสร้างมาตรฐานจากคัมภีร์เนปาลนับร้อยฉบับ:

> "yad atra puṇyaṃ tad bhavatv ācāryopādhyāyamātāpitṛpūrvaṅgamaṃ kṛtvā sakalasattvarāśer / °parirāśer anuttarajñānaphalaṃ prāptam iti  
> 'What[ever] religious merit is [contained] here, this should arise [from this donation]; keeping in the foreground the ācāryas, the upādhyāyas, and the parents, the reward of supreme insight is attained for the sake of all categories of beings.'" [Formigatti 2022, p. 66]

สูตรนี้สะท้อนโครงสร้างทางเทววิทยาของมหายาน: บุญมิได้ถูกกักเก็บไว้เฉพาะปัจเจกบุคคลผู้จ่ายเงินคัดลอก หากแต่ถูกแปลงสภาพเป็นพลังขับเคลื่อนจักรวาล โดยอุทิศให้แก่บิดามารดา ครูอาจารย์ และสรรพสัตว์ทั้งหลายในสังสารวัฏ เพื่อเป้าหมายสูงสุดคือพระโพธิญาณ

### 3.3 คตินิยม jīrṇoddhāra: การบูรณะปฏิสังขรณ์คัมภีร์เก่าชำรุดด้วยการคัดลอกทดแทน

ในภูมิอากาศเขตร้อนชื้นของอินเดีย คัมภีร์ใบลานมีอายุขัยจำกัด การสืบทอดจึงขึ้นอยู่กับวงจรการคัดลอกใหม่เพื่อทดแทนของเดิม คตินิยมนี้เรียกว่า *jīrṇoddhāra* (การยกหรือทำสิ่งที่เก่าชำรุดให้กลับมาใหม่) 

ในคัมภีร์ *Śivadharmottara* ปรากฏข้อความสั่งการโดยตรงให้คัดลอกคัมภีร์ที่เก่าชำรุด:

> "...śuddhaśaivasamāyukto likhed vā pāṭhadhāraṇam | dīrghakālena jīrṇatvāc chivajñānasya pustakam ||. Here, the text seems to exhort the copying and recitation of a manuscript in order to counter the damages caused by time." [De Simini 2016, p. 383]

หลักฐานเชิงประวัติศาสตร์และสถาบันที่ชัดเจนที่สุดของการนำคตินิยม *jīrṇoddhāra* มาแปลงเป็นระบบบริหารงานห้องสมุด ปรากฏในจารึกภาษาทมิฬศตวรรษที่ 13 แห่งหอสมุดสรัสวตี (Sarasvatī Library) ในเทวาลัยจิทัมพรัม (Chidambaram) ซึ่ง Gérard Colas (2023) ได้ถอดความและวิเคราะห์ไว้:

> "...to rebind and rewiring the loose leaves and to rewrite the damaged leaves (jīrṇṇittavai ... eḻutavum)..." [Colas 2023, pp. 147-148]

จารึกจิทัมพรัมหลักที่ 1 และ 2 ระบุว่า ผู้อุปถัมภ์ (Uṭaiyār Svāmitēvar) ได้จัดสรรเงินบริจาคและที่ดินเพื่อจ้างงานถาวร 10–12 ตำแหน่ง:
1. ช่างปลดและร้อยมัดคัมภีร์ใหม่ และเขียนใบลานใบที่ชำรุดใหม่ (*jīrṇṇittavai ... eḻutavum*) จำนวน 8–9 คน
2. ช่างทำไม้ประกับและร้อยใบลาน 2–3 คน
3. ผู้รับผิดชอบอ่านออกเสียงคัมภีร์และคัดลอกสำเนาใหม่แยกตามแผนกวิชา (ดาราศาสตร์แยกจากปุราณะ)
4. การจ่ายค่าจ้างเป็นเงินเหรียญ (*kācu*) พร้อมข้าวเปลือกและผ้านุ่งเป็นรายวัน [Colas 2023, p. 148]

คำว่า `jīrṇṇittavai` ในจารึกทมิฬเป็นรูปกริยาที่แปลงมาจากรากศัพท์สันสกฤต `jīrṇa` (เก่า/ชำรุด) โดยตรง ซึ่งยืนยันว่า *jīrṇoddhāra* ในวัฒนธรรมใบลานมิใช่เพียงเรื่องนามธรรม แต่เป็นระบบปฏิบัติการทางบรรณารักษศาสตร์และการจัดการทรัพยากรมนุษย์ที่ขับเคลื่อนด้วยกองทุนทางศาสนา

---

## 4. ภาษา สูตร และคำสาปใน Colophon

### 4.1 ศัพท์เฉพาะทางและสูตรปิดท้าย (Concluding Formulas)

จากการศึกษาวิจัยเชิงปริมาณ (quantitative codicology) บนฐานคัมภีร์เนปาล 121 เล่มในช่วง ค.ศ. 1320–1395 ของ Camillo Formigatti (2022) พบว่าสูตรภาษาใน colophon มีระเบียบแบบแผนที่เคร่งครัด:

1. **สูตรกริยาการเขียน (likhita formulas):**
   - `likhitam` / `likhitam iti` (เขียนแล้ว)
   - `likhitam idaṃ pustakam` (คัมภีร์เล่มนี้ถูกเขียนแล้ว)
   - `likhiteyaṃ` (สิ่งนี้ถูกเขียนแล้ว)
   - `likhyāpitaṃ` (ให้เขียนขึ้น / ว่าจ้างให้เขียนขึ้น — กริยาการิต) [Formigatti 2022, p. 61]
2. **สูตรความสมบูรณ์ของตัวบท (samāpta / saṃpūrṇa formulas):**
   - `samāptam iti` / `samāptam idaṃ` (จบแล้ว)
   - `pustakam idaṃ samāptam iti` (คัมภีร์เล่มนี้จบสมบูรณ์แล้ว)
   - `saṃpūrṇṇam idaṃ hi śāstraṃ` (ศาสตร์นี้บริบูรณ์แล้วแล)
   - `likhitam idam pustakam samāptam` (คัมภีร์เล่มนี้เขียนเสร็จบริบูรณ์แล้ว) [Formigatti 2022, p. 61]
3. **คำอวยพรและมงคลพจน์ (āśīrvāda):**
   - `śubham astu` (ขอความดีงามจงมี) — มักอยู่ท้ายสุดของ colophon
   - `śreyo 'stu` (ขอความเจริญจงมี) — พบบ่อยอย่างยิ่งในคัมภีร์เนปาลและมักใช้คั่นระหว่างส่วนข้อความกับวันที่
   - `svasti` (ขอความสวัสดีจงมี) [Formigatti 2022, pp. 66-67]

### 4.2 ระบบการระบุวันเวลา: ศกและปัญจางคะ (Pañcāṅga)

การระบุวันเวลาใน colophon มีความสลับซับซ้อนและละเอียดแม่นยำสูงมาก โดย Marco Franceschini (2022) ในบทศึกษาการวิเคราะห์ 518 วันที่ในคัมภีร์ใบลานอินเดียตะวันตก ("Dates in Colophons of Palm-Leaf Manuscripts from Western India") ได้จำแนกโมดูลย่อยของปฏิทินดาราศาสตร์:

1. **ระบบศักราช (Era / Saṃvat):**
   - `Vikrama Saṃvat` (V.S. นิยมในอินเดียเหนือและตะวันตก เริ่ม 57/58 ก่อน ค.ศ.)
   - `Śaka Saṃvat` (นิยมในอินเดียใต้และเอเชียอาคเนย์ เริ่ม ค.ศ. 78)
   - `Nepāla Saṃvat` (N.S. ศักราชเนปาล เริ่ม 20 ตุลาคม ค.ศ. 879) นิยมเขียนสูตร: `svasti śrīmannepālikasaṃvatsare [เลข]...` [Formigatti 2022, p. 195]
2. **ระบบปัญจางคะ 5 ประการ (Five Limbs of Calendar):**
   - **Tithi (ดิถี):** วันทางจันทรคติ แบ่งเป็นข้างขึ้น (*śuklapakṣa*) และข้างแรม (*kṛṣṇapakṣa / vadipakṣa*) ตั้งแต่ 1 ถึง 15 (pratipadā ถึง pūrṇimā / amāvasyā)
   - **Vāra (วาร):** วันในสัปดาห์ เช่น `ādityavāra / ravī` (อาทิตย์), `somavāra` (จันทร์), `bhaumavāra / maṅgala` (อังคาร), `budhavāra` (พุธ), `bṛhaspativāra / guru` (พฤหัสบดี), `śukravāra` (ศุกร์), `śanivāra` (เสาร์)
   - **Nakṣatra (นักษัตร):** ฤกษ์ดาว 27 ตำแหน่งที่ดวงจันทร์โคจรผ่าน (เช่น aśvinī, bharaṇī, kṛttikā, rohiṇī, hasta, citrā...)
   - **Yoga (โยคะ):** ผลรวมเชิงมุมของพระอาทิตย์และพระจันทร์ 27 โยคะ (เช่น viṣkambha, prīti, āyuṣmat, saubhāgya...)
   - **Karaṇa (กรณะ):** กึ่งหนึ่งของดิถี มี 11 กรณะ (bava, bālava, kaulava, taitila, garaja, vaṇija, viṣṭi/bhadra, śakuni, catuṣpāda, nāga, kiṃstughna) [Franceschini 2022, pp. 180, 201-206]

นอกจากนี้ การระบุตัวเลขยังนิยมใช้ระบบรหัสคำแทนตัวเลขแบบภูตสังขยา (*bhūtasaṃkhyā*) เช่น `vasuvyomabāne` = vasu (8) + vyoma (0) + bāṇa (5) อ่านย้อนกลับตามหลัก *aṅkānāṃ vāmato gatiḥ* ได้ปี 508 [Formigatti 2022, p. 109]

### 4.3 โศลกขออภัยความผิดพลาด (Scribal Apology) และโศลกรำพันความทุกข์ทรมาน

นักคัดลอกในวัฒนธรรมสันสกฤตได้พัฒนาชุดโศลกประจำ (formulaic scribal stanzas) เพื่อแสดงความซื่อตรงต่อต้นฉบับเดิม (antigraph / *ādarśa*) และปลดเปลื้องตนเองจากความผิดพลาด Formigatti (2022) ได้รวบรวมสำนวนสำคัญไว้ดังนี้:

> "yādṛśaṃ pustake dṛṣṭaṃ tādṛśaṃ likhitaṃ mayā |  
> abaddhaṃ vā subaddhaṃ vā mama doṣo na vidyate ||" [Formigatti 2022, p. 63]  
> "เห็นในคัมภีร์เดิมเช่นไร ข้าพเจ้าก็เขียนไปเช่นนั้น จะร้อยกรองไม่ถูกหรือร้อยกรองดี ข้าพเจ้าหามีความผิดไม่"

> "na cāhaṃ śāstrakarttā ca na ca śabdārthacintakaḥ |  
> yādṛśaṃ sthitam ādarśe tādṛśaṃ likhitaṃ mayā ||" [Formigatti 2022, p. 63]  
> "ข้าพเจ้ามิได้เป็นผู้รจนาศาสตร์ และมิใช่ผู้ขบคิดอรรถของศัพท์ สิ่งใดปรากฏในต้นฉบับ (ādarśa) ข้าพเจ้าก็เขียนไปตามนั้น"

> "yathā dṛṣṭaṃ tathā likhitaṃ lekhako nāsti doṣaṃ ||" [Formigatti 2022, p. 63]  
> "เห็นอย่างไรเขียนอย่างนั้น อาลักษณ์หามีโทษไม่"

นอกจากนี้ ยังมีโศลกบรรยายความทุกข์ทรมานทางกายภาพของนักคัดลอก (somatic suffering of scribes) ที่ต้องนั่งคัดลอกด้วยความยากลำบาก:

> "bhagnapṛṣṭikaṭīgrīvaḥ stabdhadṛṣṭir adhomukhaḥ |  
> duḥkhena likhitaṃ śāstram putravat pratipālayet ||" [Formigatti 2022, p. 64]  
> "สีข้าง สะโพก และต้นคอของข้าพเจ้าหักปวดร้าว สายตาพร่ามัว ก้มหน้าลงต่ำ ข้าพเจ้าเขียนศาสตร์นี้มาด้วยความทุกข์ยากแสนเข็ญ ขอท่านทั้งหลายจงทะนุถนอมรักษาประดุจบุตรในอุทรเถิด!"

### 4.4 คำเตือนและคำสาปแช่งผู้ขโมยหรือทำลายคัมภีร์ (Curses & Imprecations)

เพื่อปกป้องคัมภีร์จากภยันตราย นักคัดลอกได้จารึกโศลกเตือนภัยธรรมชาติ ศัตรู และคำสาปแช่งผู้ที่ทำลายคัมภีร์:

> "tailād rakṣed jalād rakṣet śithilabandhanāt |  
> mūrkhahaste na dātavyam evaṃ vadati pustakam ||" [Formigatti 2022, p. 64]  
> "'จงรักษาข้าพเจ้าให้พ้นจากน้ำมัน พ้นจากน้ำ พ้นจากการผูกมัดที่หลวม และอย่ามอบข้าพเจ้าไว้ในมือคนโง่เขลา!' — คัมภีร์กล่าวไว้เช่นนี้"

> "udakānalacaurebhyo mūṣakebhyas tathaiva ca |  
> rakṣitavyaṃ prayatnena mayā kaṣṭhena likhitaṃ ||" [Formigatti 2022, p. 65]  
> "ข้าพเจ้าเขียนมันมาด้วยความยากลำบากยิ่ง! พึงระวังรักษาด้วยความเพียรให้พ้นจากน้ำ (udaka) ไฟ (anala) โจรขโมย (caura) และหนู (mūṣaka)"

> "bālamūrkhavideśasthavāritailāgnitaskarāt |  
> rakṣitavyā yathāśakti pustikā svastikāriṇī ||" [Formigatti 2022, p. 64]  
> "คัมภีร์เล่มน้อยอันสร้างสวัสดิมงคลนี้ พึงได้รับการปกป้องอย่างสุดกำลังให้พ้นจากเด็ก คนโง่ คนต่างถิ่น น้ำ น้ำมัน ไฟ และโจรผู้ลักขโมย (taskara)"

ในวัฒนธรรมคัมภีร์ใบลานเอเชียใต้และอุษาคเนย์ คำสาปแช่งยังครอบคลุมถึงการขโมยคัมภีร์ โดยมักเปรียบเทียบว่าผู้ใดลักขโมยคัมภีร์หรือตัดฉีกใบลาน ย่อมมีโทษมหันต์เทียบเท่าการฆ่าพราหมณ์ (*brahmahatyā*) การฆ่าวัว (*gohatyā*) หรือต้องตกนรกมหาอเวจีชั่วกัปชั่วกัลป์

---

## 5. ข้อถกเถียงเชิงวิธีวิทยา: ความน่าเชื่อถือของ Colophon และการตรวจสอบข้ามสาย

### 5.1 ปัญหาการคัดลอกสูตรซ้ำติดมากับตัวบท (Formulaic Copying / Mechanically Copied Colophons)

แม้ว่าจารึกท้ายคัมภีร์ (colophon) จะเป็นขุมทรัพย์ทางประวัติศาสตร์ที่ให้ข้อมูลวันเวลา กษัตริย์ และอาลักษณ์ที่แม่นยำ แต่นักวิชาการอาวุโสด้านบรรณคดีวิทยาได้ส่งสัญญาณเตือนอย่างเคร่งครัดถึงอันตรายของการเชื่อถือข้อมูลใน colophon โดยปราศจากการวิพากษ์หลักฐาน

ปัญหาพื้นฐานที่สุดคือ **การคัดลอก colophon ของต้นฉบับเดิม (antigraph / exemplar) ติดมาลงในสำเนาใหม่ (apograph) โดยกลไกอัตโนมัติ (mechanically copied colophons)** โดยที่นักคัดลอกสำเนาใหม่อาจไม่ได้ตั้งใจปลอมแปลง แต่เพียงแค่คัดลอกทุกตัวอักษรที่ปรากฏในต้นแบบตามคติ "เห็นอย่างไรเขียนอย่างนั้น" (*yathā dṛṣṭaṃ tathā likhitam*) ผลลัพธ์คือ:
- คัมภีร์ที่คัดลอกขึ้นในคริสต์ศตวรรษที่ 17 หรือ 18 อาจระบุศักราชเนปาลหรือศักราชวิกรมของศตวรรษที่ 11 หรือ 12 ซึ่งเป็นปีที่ต้นฉบับบรรพบุรุษถูกคัดลอกขึ้น!
- ดังที่ Andrey Klebanov (2021) ได้สาธิตในการศึกษาประวัติการถ่ายทอดตัวบท *Suśrutasaṃhitā* ในเนปาล ว่าคัมภีร์ใบลานบางฉบับที่ระบุศักราช NS 633 เป็นเพียงการคัดลอกสะท้อนยุคสมัยของตัวบทต้นแบบ (hyparchetype) มิใช่วันที่ของวัตถุกายภาพชิ้นนั้น

### 5.2 ความจำเป็นในการตรวจสอบข้ามสายสามมิติ (Cross-checking Triad)

เพื่อแก้ปัญหานี้ Giovanni Ciotti (2022) ได้เน้นย้ำถึงความจำเป็นของการผสานการตรวจสอบร่วมกันระหว่าง 3 มิติเชิงประจักษ์:

> "...the combination of philological, palaeographical and codicological observations can lead to a convincing disambiguation, but that at the same time methodological limitations..." [Ciotti 2022, p. 14]

ระเบียบวิธีวิจัยที่ถูกต้องจะต้องไม่พึ่งพาตัวเลขใน colophon อย่างโดดเดี่ยว แต่ต้องนำข้อมูลมา cross-check ผ่าน 3 เสาหลัก:
1. **อักขรวิทยา (Palaeography):** ตรวจสอบพัฒนาการของสัณฐานอักษร (ductus, ligature, รูปสระและพยัญชนะ) ว่าสอดคล้องกับยุคสมัยที่ระบุใน colophon หรือไม่ หากตัวเลขระบุศตวรรษที่ 12 แต่อักขรวิทยาเป็นรูปแบบ Nevārī ยุคปลายศตวรรษที่ 17 ย่อมชี้ชัดว่าเป็น mechanically copied colophon ดังเช่นกรณีที่ Kengo Harimoto (2017) แสดงในการประเมินอายุคัมภีร์ *Bodhisattvabhūmi* (MS Add. 1702 แห่งเคมบริดจ์)
2. **บรรณคดีวิทยาทางกายภาพ (Codicology):** ตรวจสอบลักษณะทางกายภาพของวัตถุ เช่น ชนิดของใบลาน (Corypha taliera vs Corypha umbraculifera), รูร้อยเชือก (string holes), การจัดหน้า (layout), ชนิดของหมึก, สภาพการผุกร่อน, และรอยมือเขียน (scribal hands) ว่ามีหลายมือหรือรอยเติมย้อนหลัง (marginalia/later additions) หรือไม่ [Ciotti 2022, pp. 164, 170]
3. **การวิพากษ์ตัวบท (Philology & Stemma Codicum):** ตรวจสอบลำดับเครือญาติของตัวบท ข้อผิดพลาดร่วม (conjunctive errors) และตัวสะกด เพื่อประเมินตำแหน่งของคัมภีร์เล่มนั้นในสายการส่งทอด (transmission history)

### 5.3 สรุปบทเรียนเชิงวิธีวิทยา

Colophon คือ "สิ่งประดิษฐ์ทางประวัติศาสตร์" ที่สะท้อนทั้งข้อเท็จจริง ความเชื่อ และพิธีกรรมทางสังคม นักวิจัยจึงต้องใช้ colophon ในฐานะสมมติฐานที่ต้องรอการพิสูจน์ยืนยัน (hypothesis to be corroborated) ผ่านการตรวจสอบข้ามสายกับหลักฐานทางวัตถุและอักขรวิทยาเสมอ การหลอมรวมศาสตร์ระหว่างจารึกวิทยา อักขรวิทยาโบราณ และบรรณคดีวิเคราะห์เท่านั้น จึงจะสามารถปลดล็อกความจริงทางประวัติศาสตร์ที่ซ่อนอยู่หลังจารึกท้ายคัมภีร์ได้อย่างเที่ยงตรงและปราศจากมายาคติ

---
**เอกสารอ้างอิงหลักในรายงาน:**
- Balbir, Nalini & Giovanni Ciotti (eds.). (2022). *The Syntax of Colophons: A Comparative Study across Pothi Manuscripts*. Studies in Manuscript Cultures, Vol. 27. Berlin/Boston: De Gruyter.
- Baums, Stefan. (2022). "The Earliest Colophons in the Buddhist Northwest." In *The Syntax of Colophons*, pp. 15–46.
- Colas, Gérard. (2023). "Palm-leaf Manuscript Libraries in Southern India Around the Thirteenth Century: The Sarasvatī Library in Chidambaram." In *Libraries in the Manuscript Age*, pp. 135–158. Berlin/Boston: De Gruyter.
- Davis, Richard H. (2018). "Temple as Catalyst: Renovation and Religious Merit in the Field." In *The Hegemony of Heritage: Ritual and the Record in Stone*, pp. 52–71. Oakland: University of California Press.
- De Simini, Florinda. (2016). *Of Gods and Books: Ritual and Knowledge Transmission in the Śivadharma Texts and Religious Literature of Early Medieval India*. Studies in Manuscript Cultures, Vol. 8. Berlin/Boston: De Gruyter.
- Formigatti, Camillo A. (2022). "Colophons in Fourteenth-Century Nepalese Manuscripts: Materials for the Study of the Nepalese Renaissance (I)." In *The Syntax of Colophons*, pp. 47–124.
- Formigatti, Camillo A. (2022). "A Gateway to the Six Languages: Cambridge, University Library, MS Add.1698." In *Indic Manuscript Cultures through the Ages*, pp. 183–204. Berlin/Boston: De Gruyter.
- Franceschini, Marco. (2022). "Dates in Colophons of Palm-Leaf Manuscripts from Western India." In *The Syntax of Colophons*, pp. 165–212.
- Kinra, Rajeev. (2015). *A Hindu Secretary in King Shah Jahan's Court: Writing Imperial India with Chandar Bhan Brahman*. New York: Columbia University Press.
- Yoshizaki, Kazumi. (2023). "The Family History of the Scribe Who Copied Newar Buddhist Manuscript No. 19 of the Tōkai University Library." *Journal of Indian and Buddhist Studies* (印度學佛敎學硏究), 71(2): 781–785.
