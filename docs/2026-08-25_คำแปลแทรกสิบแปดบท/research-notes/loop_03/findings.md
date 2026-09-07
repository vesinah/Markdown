# Loop 03 — Pre-14th c. East/South Asian scholarship (China, India, Japan, Korea)

**วันที่:** 2026-08-25
**ผู้ทำ:** Explorer research agent (foraging loop เดียว)
**ขอบเขต:** การศึกษาและอรรถาธิบายพระคลังส์คลาสสิกของตะวันออกไกล/เอเชียใต้ ก่อนศตวรรษที่ 14
**รองรับบท:** 1 (หลัก), 5, 7, 8, 12, 17 (รอง)

---

## 1. Queries executed

### Websearch tool
| # | Query | ผล |
|---|---|---|
| W1 | "Jingdian Shiwen" 經典釋文 Lu Deming sound and meaning glosses classics | BLOCKED (HTTP 429 ทุกครั้งตลอดลูป, ลองซ้ำ 4 รอบ) |
| W2 | Kong Yingda "Correct Meanings" 五經正義 zhu shu commentary subcommentary structure | BLOCKED (429) |

> websearch (Exa MCP) ล่มด้วย 429 ทั้งลูป — จึงเปลี่ยนไปใช้ API + direct fetch ทั้งหมด

### API fallbacks (bash Invoke-RestMethod)
| # | API/Query | ผล |
|---|---|---|
| A1 | OpenAlex: Jingdian shiwen / Kong Yingda / Nirukta Yaska / kunten kanbun / gugyeol / kunten glosses | BLOCKED (429 ทุก query, ลอง 3 ช่วงเวลา) |
| A2 | Crossref: "Jingdian shiwen Lu Deming", "Kong Yingda Maoshi zhengyi", "Nirukta Yaska", "kunten kanbun glosses Heian", "gugyeol Koryo sutra annotation", "Mimamsa hermeneutics", "Zheng Xuan annotations" | OK — ได้ DOI/landing pages จำนวนมาก |
| A3 | Crossref works/{doi} resolution: 10.5040/9781666995886.ch-4, 10.1163/9781684175765_006, 10.1163/15728536-06002002, 10.1163/15685322-10512p03, 10.17001/kugyol.2017..38.007, 10.15704/kjhe.40.3.201809.141, 10.24161/chr.124.81, 10.17001/kugyol.2024..53.001, 10.53106/2306036020190600330002, 10.24828/ahj.59.99.118 | OK — metadata+abstract+primary URL |
| A4 | Crossref query.title: hyangchal, kaeriten, guozijian academy, jingzhu | OK (kaeriten = ไม่มีผล; jingzhu = ผลไม่ตรง) |
| A5 | DOAJ API: gugyeol, hyangchal, kunten, Nirukta, Mimamsa, fanqie | OK — เจอ Alberizzi 2015, Tsutsumi 2023, IU Mimamsa 2017 |
| A6 | J-STAGE searchapi service=3: 訓点 / ヲコト点 / 墨引き / 漢文訓読 歴史 | OK — เจอ Kosukegawa 2008, Utsunomiya 2013, รีวิว角筆文献研究導論 |
| A7 | CiNii OpenSearch | FAILED (format ว่าง) |

### Direct fetch (webfetch)
| # | URL | ผล |
|---|---|---|
| F1 | GRETIL index + sa_yAska-nirukta.htm transformation | OK — primary text Nirukta เต็ม (Sarup ed.) |
| F2 | plato.stanford.edu search "mimamsa" → entries/kumaarila | OK — SEP Kumārila เต็ม |
| F3 | brill.com iij article page (Visigalli) | OK abstract; full text paywalled |
| F4 | bloomsburycollections.com Glossing Practice ch.4 | BLOCKED (subscription required) |
| F5 | J-STAGE chisangakuho 62 (Utsunomiya), nihongonokenkyu 4.1_15 (Kosukegawa) | OK — metadata + abstract + free PDF links |
| F6 | f1000research.com/articles/12-506/v1 | OK — full text wokototen |
| F7 | oaj.fupress.net QULSO 1865 (Alberizzi) | OK — abstract + CC BY PDF link |
| F8 | kiss.kstudy.com Detail/Ar key=3629684 (Seolchong), key=4113181 (hyangchal), key=3753826 (Guozijian) | OK — abstract สองภาษาฟรี |
| F9 | kci.go.kr landing ART002199591 (Lee Geon-sik sundok gugyeol) | OK — abstract KR/EN + bibliography |
| F10 | doi.org/10.1163/15685322-10512p03 (Bender T'oung Pao) | OK citation; Crossref abstract |
| F11 | ekoreajournal.net, koreascience.kr, kjdb.ninjal.ac.jp/kunten/, ninjal.ac.jp english database page, chinaknowledge wujing.html, gretil niruktau.htm legacy path | FAILED/BLOCKED (transport error/404) |
| F12 | lite.duckduckgo.com, mojeek.com search | BLOCKED (bot challenge) |

---

## 2. Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| Yāska (ed. Sarup; input Tokunaga) | Nirukta (GRETIL e-text) | text ancient / file 2020 | https://gretil.sub.uni-goettingen.de/gretil/corpustei/transformations/html/sa_yAska-nirukta.htm | Primary text การอรรถาธิบายคำพระเวท: Nighantu, pada 4 จำพวก, เหตุผล artha-pratyaya (1,15), sthāṇu-bhārahāra (1,18), ฤษีสืบมนต์ (1,20), วิธี nirvacana (2,1-3) |
| Daniel Arnold | Kumārila (SEP) | 2010/rev.2024 | https://plato.stanford.edu/entries/kumaarila/ | มีมางสา = hermeneutical inquiry; ห่วงโซ่ sūtra(Jaimini)-bhāṣya(Śabara c.400CE)-vārttika(Kumārila fl.c.660)-ṭīkā(Uṃveka/Pārthasārathimiśra/Sucaritamiśra); svataḥ prāmāṇya; autpattika |
| Valerio Alberizzi | The Role of kunten Materials in the Process of Sino-Japanese Hybridization (QULSO 1:233-258) | 2015 | https://oaj.fupress.net/index.php/bsfm-qulso/article/view/1865 | OA (CC BY); รีวิว scholarship kunten; แยก waka-kanbun vs wakan konkōbun; hybrid writing เกิดก่อนศตวรรษ 12 |
| Tsutsumi/Tajima/Kosukegawa/Takada | Measuring linguistics of the wokototen chart... (F1000Research 12:506) | 2023 | https://f1000research.com/articles/12-506/v1 | OA เต็ม; wokototen ระบบ kunten; 199 charts, 6411 marks; readings te/wo/ni มากสุด; dot มากสุด; ตำแหน่งขวา-ล่าง; NINJAL Wokototenzu DB; references Tsukishima/Nakata/Kobayashi/Kasuga + Korean kugyol coordinate studies |
| Teiji Kosukegawa | Position of Chunqiu-jingzhuan-jijie vol.2 of Yurinkan (日本語の研究 4.1:15-30) | 2008 | https://www.jstage.jst.go.jp/article/nihongonokenkyu/4/1/4_KJ00004948496/_article | OA; ต้นฉบับมือเขียน Zuozhuan-commentary ญี่ปุ่นมี wokototen กลุ่ม 1 ก่อนกลางเฮอิอัง; แยกสาย汉籍 vs พุทธ; เทียบ Dunhuang diacritical manuscripts |
| Keigo Utsunomiya | 院政期高野山のヲコト点伝播について (智山学報 62:199-220) | 2013 | https://www.jstage.jst.go.jp/article/chisangakuho/62/0/62_KJ00009011846/_article | OA PDF; การแพร่ wokototen ณ Kōyasan ยุค insei ผ่านเครือข่าย教学 (monastic school network) |
| L. R. Bender | The Corrected Interpretations of the Five Classics (Wujing zhengyi) and the Tang Legacy of Obscure Learning (T'oung Pao 105.1-2:76-127) | 2019 | https://brill.com/view/journals/tpao/105/1-2/article-p76_3.xml | 五經正義 (โครงการ孔穎達) มีตำแหน่งปัญญาเป็นเอกภาพ; Zhengyi subcommentary (=shu) สร้าง orthodoxy ถัง; paywalled |
| 林保全 (Lin Baoquan) | 陸德明《經典釋文.序錄》所反映的經學觀念 (中正漢學研究 33) | 2019 | http://140.123.13.91/journal/article/33_02.pdf | OA PDF; ยืนยัน Jingdian shiwen/Xulu เป็นเอกสารแกน jingxue ที่ศึกษาต่อถึงปัจจุบัน — **ข้อจำกัดการเข้าถึง (Unbiased Agent F3):** เซิร์ฟเวอร์ IP ตรง 140.123.13.91 ไม่ตอบสนองในการตรวจซ้ำ (timeout x2) ถือเป็นลิงก์ไม่เสถียร — ก่อนอ้างในร่างต้องหาทางเลือก: ค้นชื่อบทความ "陸德明經典釋文序錄所反映的經學觀念 中正漢學研究" ในฐาน Airiti/AAC หรือ Wayback Machine snapshot; metadata ยืนยันผ่านการ fetch สำเร็จครั้งแรกใน loop_03 แล้ว |
| Paolo Visigalli | The Vedic Background of Yaska's Nirukta (IIJ 60.2:101-131) | 2017 | https://brill.com/view/journals/iij/60/2/article-p101_1.xml | nir-vac ใน AV/Brahmana; วิธีจำแนก mantra; nirvacana มาจาก etymology pratyaksa/paroksa; paywalled (abstract OA) |
| Johannes Bronkhorst | Etymology and Magic: Yaska's Nirukta, Plato's Cratylus... (Numen 48.2:147+) | 2001 | https://brill.com/view/journals/nu/48/2/article-p147_2.xml | เทียบ semantic etymology ตะวันออก-ตะวันตก; metadata only |
| Park Jongbae (박종배) | Seolchong's Seokdok Gugyeol of Confucian Texts... (한국교육사학 40.3:141-165) | 2018 | https://kiss.kstudy.com/Detail/Ar?key=3629684 | 설총(655-?) seokdok gugyeol บนตำราขงจ์; to ระหว่างบรรทัด/รอบอักษร; gugyeol characters; อนุมานจากพุทธ kunten ญี่ปุ่น ศตวรรษ 8-9 สายชิลลา; มาตรฐานสอบ 강서/명경 จนปลายโครยอ |
| 이건식 (Lee Geon-sik) | Grammatical Characters of Adverbial Suffixes... Sundok-Gugyeol (구결연구 38:151-199) | 2017 | http://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART002199591 | sundok-gugyeol 順讀口訣 ปลายโครยอ-ต้นชอซอน; 'hamyeohi' สูญภาษากลาง กลางศตวรรษ15; อ้าง 口訣資料集 1-3 (AKS 韓國精神文化硏究院 1995-96: 楞嚴經 gugyeol โครยอ/ชอซอนต้น) |
| Kim Jioh and Lee Young | 향찰의 문자론적 이해 (구결연구 53:5-41) | 2024 | https://kiss.kstudy.com/Detail/Ar?key=4113181 | hyangchal = mixed logogram-phonogram; หลัก訓主音從; phonological complement; เทียบเส้นทาง kana |
| Byeong Jin Kim (金炳辰) | On the System of the Guozijian in the Early Northern Song Dynasty (중국사연구 124:81-120) | 2020 | https://kiss.kstudy.com/Detail/Ar?key=3753826 | 國子監 ระบบ三館; 太學ก่อตั้ง慶曆四年(1044) เปิดสามัญชน; dual-track 學制 |
| Brian Steininger | Glosses and Primers, in Chinese Literary Form in Heian Japan | 2017 | https://brill.com/view/book/9781684175765/BP000006.xml | metadata; บทว่าด้วย glosses/primers เฮอิอัง; paywalled |
| Anon./eds. | Issues in Dictionaries Recording Kunten Glosses, in Glossing Practice (Bloomsbury) | 2023 | https://www.bloomsburycollections.com/monograph-detail?docid=b-9781666995886&tocid=b-9781666995886-chapter4 | metadata; blocked (subscription) |
| Bae Young Il | Heungcheonsa Temple's Annotation of Avatamsaka Sutra (The Art History Journal 59:99-118) | 2022 | https://kiss.kstudy.com/Detail/Ar?key=3989033 | พิมพ์เฉก Avatamsaka พร้อม gugyeol ณ 桂印寺 (Gwijin-sa); metadata only |
| Arnold/Keating/Deshpande et al. (SEP cluster) | language-india; literal-nonliteral-india; epistemology-india | 2014-2024 | https://plato.stanford.edu/entries/language-india/ | Mīmāṃsā on meaning/testimony — แหล่งรองสำรอง |
| IU Journal of World Philosophy | Understanding Prescriptive Texts: Rules and Logic as Elaborated by the Mimamsa School | 2017 | https://scholarworks.iu.edu/iupjournals/index.php/jwp/article/view/922/100 | OA; deontic system ใน Vedic injunctions |
| Bhasha journal | Synchronic Etymologising and Its Role in the Acquisition of Language | 2022 | doi:10.30687/bhasha/2785-5953/2022/01/001 | OA; Yāska's Nirukta เป็น synchronic etymologising |
| RUDN journal | The denial of semantic relation in Indian classical culture | 2014 | http://journals.rudn.ru/philosophy/article/view/11741 | Kātyāyana's Varttika vs Nirukta ปฏิเสธความสัมพันธ์เชิงความหมายบางกรณี |
| Whitman/Alberizzi/Tsukimoto/Kosukegawa | Toward a standard terminology for kunten studies | 2010 | http://conf.ling.cornell.edu/whitman/WhitmanAlberizziTsukimotoKosukegawa2010Toward.pdf | ข้อเสนอศัพท์ EN: vernacular reading/gloss; PDF สาธารณะ (ยังไม่ได้ดึงเนื้อ) |

---

## 3. Key findings (with URLs)

### RQ1 จีน: อรรถาธิบายคลาสสิกก่อน ค.ศ. 14
1. **Wujing zhengyi 五經正義** (โครงการ孔穎達 Kong Yingda) เป็นชุด "subcommentaries" (疏 shu) ที่ทับบน注 (zhu) ของยุคก่อน — Bender (2019) ยืนยันว่ามีตำแหน่งปัญญาเอกภาพ (ไม่ใช่แค่ political performance): ใช้玄學 arguments ว่าด้วย dao คลุมเครือเพื่อสั่งให้ "เดินตาม Sage Kings"; เป้าหมายคือ orthodoxy ของถังและปิดข้อพิพาท南北朝 — https://brill.com/view/journals/tpao/105/1-2/article-p76_3.xml
2. **Jingdian shiwen 經典釋文 ของ陸德明** เป็นเอกสารแกนที่งาน jingxue ร่วมสมัยยังศึกษาผ่าน序錄 (Xulu) — ยืนยันด้วยงาน OA จีน ปี 2019 (PDF ฟรี): http://140.123.13.91/journal/article/33_02.pdf ; เส้นทาง音義 (yinyi) แผ่ถึงญี่ปุ่น/เกาหลี (Huilin Yiqiejing yinyi propagation to Korea: doi:10.1515/9783111322599-003)
3. **ศัพท์ "jingzhu 鏡注": (ยังไม่พบข้อมูลยืนยัน)** — ไม่พบในแหล่งที่สืบค้นได้ว่า鏡注เป็นศัพท์เทคนิคของอรรถาธิบายคลาสสิก รูปที่เป็นมาตรฐานและยืนยันได้จากลูปนี้: 注 zhu (annotation/commentary), 疏 shu (subcommentary — ผ่านคำว่า "Zhengyi subcommentaries"), 音義 yinyi (sound-and-meaning glosses) และรูป 經注 (jīngzhù) ที่พบทั่วไปในความหมาย "ตัวบท+คำอรรถาธิบาย" (เช่น水經注) คาดว่าผู้ตั้งหัวข้อหมายถึงรูปใดรูปหนึ่งเหล่านี้ — ให้ตรวจซ้ำ Phase B
4. **Mao Heng/Zheng Xuan รายละเอียดเฉพาะ**: ยังไม่ได้แหล่งอ้างอิงเต็มในลูปนี้ (loop 07 คือลูปเจาะจีนคลาสสิก) — ทิ้ง gap ไว้ตามจริง

### RQ2 อินเดีย: Nirukta-ไวยากรณ์-มีมางสา
5. **Nirukta ของยัสกะ** (primary text, GRETIL/Sarup): (a) ทำงานบน Nighantu = คลังคำพระเวท (samāmnāya); (b) จำแนก pada เป็น nāma/ākhyāta/upasarga/nipāta (1,1); (c) เหตุผลของ glossing: ไม่เข้าใจ artha แล้วการอ่านสวระไม่แน่นอน (1,15) และผู้ท่องโดยไม่เข้าใจคือ sthāṇur ayam bhāra-hāraḥ "ท่อนไม้แบกภาระ" (1,18); (d) ฤษีผู้เห็นธรรมโดยตรงสืบมนต์และ "รวบรวม grantha" เพื่อการสอน (1,20); (e) วิธี nirvacana มีจรรยาบรรณ เช่น ห้ามอรรถาธิบายให้ non-grammarian (2,3) — https://gretil.sub.uni-goettingen.de/gretil/corpustei/transformations/html/sa_yAska-nirukta.htm
6. **nirvacana มีรากพระเวทโดยตรง**: Visigalli — nir-√vac ปรากฏใน Atharvaveda/Brahmanas; etymology คู่ pratyaksa (ชัด)/paroksa (ซ่อน) เป็นฐานของ nirvacana model; วิธีจำแนก mantra เริ่มใน Brahmanas — https://brill.com/view/journals/iij/60/2/article-p101_1.xml ; Bronkhorst (Numen 2001) เทียบ Plato's Cratylus — https://brill.com/view/journals/nu/48/2/article-p147_2.xml
7. **ลำดับชั้น bhāṣya/vārttika/ṭīkā ยืนยันจาก SEP Kumārila**: Jaimini sūtra → Śabara bhāṣya (fl. c. 400 CE) → Kumārila vārttika (Śloka-/Tantravārttika/Tupṭīkā; Bṛhaṭṭīkā สูญ) → ṭīkā ของ Uṃveka (c.710)/Pārthasārathimiśra (c.1075)/Sucaritamiśra (c.1120); vārttika "often significantly revises or elaborates" — มีมางสา = Karma/Adhvara Mīmāṃsā ("hermeneutics of ritual action/sacrifice") — https://plato.stanford.edu/entries/kumaarila/
8. **Panini-Patanjali รายละเอียด**: ได้อ้อมจาก RUDN paper (Kātyāyana's Vārttika as keystone) — http://journals.rudn.ru/philosophy/article/view/11741 — แต่ยังต้องเจาะ loop 20 (padapatha/pratisakhya)

### RQ3 ญี่ปุ่น: kunten Nara-Heian
9. **wokototen ヲコト点**: ระบบ kunten ญี่ปุ่นแท้; จุด/เส้น/ขอ วางใน-รอบอักษรจีน; ความหมาย = ตำแหน่ง x รูปร่าง; พบมากใน Chinese classics + Buddhist scriptures + หนังสือเฮอิอัง-คามากุระ; มีหลายสำนัก (dot มุมบนขวาอ่าน wo หรือ koto ต่างสำนักกัน) — https://f1000research.com/articles/12-506/v1
10. **ต้นฉบับจริง**: Yurinkan 春秋経伝集解巻第二 มี wokototen "กลุ่มที่ 1" (第一群点) ที่เขียนเพิ่มก่อนกลางเฮอิอัง; ข้อเสนอว่า kunten บน汉籍ได้รับ "วิธีการวิชาการจีน" แยกจากสายพุทธ — https://www.jstage.jst.go.jp/article/nihongonokenkyu/4/1/4_KJ00004948496/_article
11. **สำนัก/การแพร่ผ่านสถาบันสงฆ์**: wokototen แพร่ที่高野山 (Kōyasan) ยุค insei ผ่านเครือข่าย教学 (การศึกษาสงฆ์) — https://www.jstage.jst.go.jp/article/chisangakuho/62/0/62_KJ00009011846/_article
12. **ฐานข้อมูลสถาบัน**: NINJAL Wokototenzu DB — https://cid.ninjal.ac.jp/wokototendb/ ; การวัดเชิงปริมาณ 199 charts: reading te/wo/ni/to/no มากสุด, dot เด่นสุด (2199/6411), ตำแหน่งขวา-ล่างเด่น
13. **hakase lines (ハカセ/墨引き)**: ยังไม่พบแหล่ง OA ที่อธิบายโดยตรงในลูปนี้ (F1000 กล่าวถึง shapes เส้นเดี่ยวแต่ไม่ใช้คำ hakase) — mark "(ยังไม่พบข้อมูลยืนยัน)" สำหรับศัพท์ hakase เฉพาะรูป; ตัวเลือกแหล่ง: Nakata 1954/Tsukishima 1986 (bibliography ใน F1000 doc), Kobayashi 角筆文献研究導論

### RQ4 เกาหลี: hyangchal-idu-gugyeol
14. **seokdok gugyeol 釋讀口訣 ของ설총 Seolchong (655-?)**: to (吐) เขียนระหว่างบรรทัด/รอบอักษรจีนบนตำราขงจ์ = การ "แปลอ่าน" เป็นเกาหลีโดยพฤตินัย; พัฒนาระบบ gugyeolja (口訣字); ต้นฉบับยุคนั้นไม่เหลือ อนุมานจากพุทธ kunten ญี่ปุ่น ศตวรรษ 8-9 ที่ฝังสายชิลลา + gugyeol พุทธโครยอ; เป็นมาตรฐานจน Neo-Confucianism ปลายโครยอ; ใช้สอบ강서/명경 — https://kiss.kstudy.com/Detail/Ar?key=3629684
15. **hyangchal**: mixed logogram-phonogram; หลัก훈주음종 (lexical=훈, grammatical=음); phonological complements; เส้นทางที่อาจพัฒนาเป็น kana-like — https://kiss.kstudy.com/Detail/Ar?key=4113181 ; sundok-gugyeol (順讀口訣) ปลายโครยอ-ต้นชอซอน: 'hamyeohi' สูญภาษากลาง กลางศตวรรษ 15 — https://doi.org/10.17001/kugyol.2017..38.007
16. **วัสดุ gugyeol สำคัญ**: 楞嚴經 (Śūraṅgama) gugyeol โครยอ/ต้นชอซอน รวบรวมใน 口訣資料集 1-3 (韓國精神文化硏究院/Academy of Korean Studies, 1995-96) — จาก bibliography ของ Lee Geon-sik

### RQ5 เชิงเปรียบเทียบ: สถาบัน+ต้นฉบับ
17. **国子監 Guozijian** (Imperial Academy/Directorate of Education): ระบบ三館 (國子學/太學館/四門學) เป็นชื่อเรียกสิทธิ์สอบมากกว่าสถานะจริง; 太学ก่อตั้ง 1044 (慶曆) เปิดสามัญชน → dual-track system — https://kiss.kstudy.com/Detail/Ar?key=3753826 (เชื่อมกับ五經正義เป็นเครื่องมือ orthodoxy ของรัฐ)
18. **สำนักสงฆ์เป็นเครือข่ายผลิต annotation**: Kōyasan/wokototen (ญี่ปุ่น), พระไตรปิฎก kunten ที่ฝัง seokdok gugyeol สายชิลลา (เกาหลี-ญี่ปุ่น), Nalanda hagiography ของ Kumārila (SEP — ใช้เป็นหลักฐานบรรยากาศการอภิปราย ไม่ใช่ประวัติศาสตร์จริง)
19. **ต้นฉบับมีภาคผนวกสำคัญที่ยืนยันแล้ว**: Yurinkan 春秋経伝集解巻二 (wokototen กลุ่ม 1, pre-mid-Heian); Dunhuang diacritical manuscripts (ถูกอ้างเป็นกลุ่มเทียบใน keywords ของ Kosukegawa); Heungcheonsa/Gwijin-sa Avatamsaka พร้อม gugyeol (พิมพ์) — https://kiss.kstudy.com/Detail/Ar?key=3989033

---

## 4. Remaining gaps (สำหรับ Phase B / loops 07-08, 12-14, 20-22)

1. **Mao Heng/Mao commentary บน Odes และ Zheng Xuan annotations** — ยังไม่มีแหล่ง OA ที่ดึงเนื้อได้; ต้องเจาะใน loop 07 (แหล่งเสนอ: Nylan, The Five "Confucian" Classics doi:10.12987/9780300130331; บทความ Monumenta Serica 2025 Morgan doi:10.1080/02549948.2025.2488663)
2. **ศัพท์ "jingzhu 鏡注"** — (ยังไม่พบข้อมูลยืนยัน); ตรวจรูปจริงที่ผู้เขียน outline ต้องการ (集注? 經注?)
3. **hakase lines / 墨引き และ kaeriten 返り點** ในฐานะศัพท์เฉพาะ — ยังไม่มีแหล่งอ้างอิงตรง (แหล่งเสนอ: Nakata 1954; Tsukishima 1986; Whitman et al. 2010 terminology PDF; ฐานข้อมูล NINJAL)
4. **Panini-Patanjali-Mahabhasya โดยตรง** — ยังไม่ได้แหล่งเต็ม; loop 20 คือลูปหลัก (แหล่งเสนอ: Bronkhorst Numen 2001 เต็ม; Visigalli thesis)
5. **tikā annotations บน manuscript จริง (Nepal/pothi)** — ยังไม่ได้แหล่ง; loop 21
6. **Korea Journal articles (OA) ว่าด้วย idu/hyangchal history** — เว็บ ekoreajournal.net/koreascience.kr ติด transport error ตลอดลูป; ต้องลอง mirror
7. **唐 Tang-era guozijian + 明經 exam กับ五經正義** — ได้แต่北宋; ต้องแหล่ง唐 (เช่น Cambridge History of China ch., paywall)
8. **Shosoin 正倉院 documents กับ annotation culture** — ยังไม่ได้เริ่ม

## 5. Blocked sources (บันทึกตามจริง)

- websearch tool (Exa): HTTP 429 ตลอดลูป
- OpenAlex API: HTTP 429 ตลอดลูป (ลอง 3 ช่วง)
- DuckDuckGo Lite / Mojeek: bot challenge/captcha
- Bloomsbury Collections "Glossing Practice" ch.4: subscription required
- Brill IIJ (Visigalli) + Numen (Bronkhorst) + T'oung Pao (Bender): full text paywalled (abstract/metadata ได้)
- KISS full-text PDFs: มีค่าใช้จ่าย (abstract ฟรี)
- NINJAL kjdb.ninjal.ac.jp/kunten/: transport error (TLS/block) — ใช้ทางเข้า cid.ninjal.ac.jp/wokototendb/ จากเอกสาร F1000 แทน
- ekoreajournal.net, koreascience.kr: transport error
- chinaknowledge.de/Literature/Classics/wujing.html: 404 (path ผิด — ไม่จำเป็นต่อไป)
- Steininger Brill chapter: paywalled
