# Loop 07 — Chinese classical commentary: zhu 注 / shu 疏 system and glossing genres on Confucian classics

**วันที่:** 2026-08-25
**ผู้ทำ:** Explorer research agent (foraging loop เดียว)
**ขอบเขต:** ระบบอรรถาธิบายจีนคลาสสิก — ศัพท์注/疏/笺/传/集解/夹注, lineage 毛傳→鄭箋→五經正義→十三經注疏, 經典釋文+反切, layout การพิมพ์, 考證 evidential scholarship, งานร่วมสมัย (Makeham/Kern/Honey/Elman)
**รองรับบท:** 1, 5, 7, 8, 12, 17 (เชื่อมจาก loop 03)

---

## 1. Queries executed

### Websearch tool
| # | Query | ผล |
|---|---|---|
| W1 | "Jingdian shiwen" 經典釋文 Lu Deming fanqie 反切 | BLOCKED (HTTP 429 — Exa MCP ล่มทุก attempt ตลอดลูป, ลองซ้ำ 4 ช่วงเวลา) |
| W2 | Zheng Xuan 鄭玄 jian 笺 Mao Odes | BLOCKED (429) |
| W3 | Kong Yingda 五經正義 subcommentary | BLOCKED (429) |
| W4 | 夹注 interlinear commentary printing Song | BLOCKED (429) |
| W5 | Cherniack "Book Culture and Textual Transmission in Sung China" | BLOCKED (429) |

> websearch (Exa MCP) ใช้ไม่ได้ทั้งลูป — fallback เป็น Crossref API + DOAJ API + J-STAGE searchapi + direct webfetch ทั้งหมด

### API fallbacks (bash Invoke-RestMethod)
| # | API/Query | ผล |
|---|---|---|
| A1 | OpenAlex works?search=... | BLOCKED (429 ตลอดลูป) |
| A2 | Google Books API (Honey book; 十三經注疏 附釋音) | BLOCKED (429) |
| A3 | Crossref query.title/bibliographic: "Wujing zhengyi", "Jingdian shiwen", "kaozheng", "Duan Yucai", "Wang Niansun", Makeham, Kern manuscript, Honey Incense Altar, Elman philology, "Zheng Xuan", "Thirteen Classics", interlinear commentary layout | OK — ได้ DOI/metadata สำคัญหลายรายการ (Crossref เริ่ม 429 เฉพาะช่วงท้าย) |
| A4 | Crossref works/{doi}: 10.1163/9781684172443, 10.1163/156852302322454521, 10.1017/eac.2019.2, 10.12677/cnc.2026.142051, 10.14378/kacs.2022.79.79.5, 10.14378/kacs.2021.77.77.17, 10.2307/2719389, 10.1080/00094633.2017.1382110 | OK |
| A5 | DOAJ api/search/articles: fanqie / kaozheng / Dai Zhen / Zheng Xuan classics / woodblock printing China | OK — เจอ Lee 2012 (Ljubljana), Fujita 2019, JLIS 2023 |
| A6 | J-STAGE searchapi keyword=反切 / 注疏 / 夾注 / 附釈音 | OK(反切 → Fujita 2019); 注疏=ว่าง; 夾注+附釈音=ERR_001 |

### Direct fetch (webfetch)
| # | URL | ผล |
|---|---|---|
| F1 | ctext.org/book-of-poetry/guan-ju | OK — แสดง底本《武英殿十三經注疏》本《毛詩正義》+《阮元校刻十三經注疏》scans |
| F2 | ctext.org/lunyu-zhushu/xue-er (論語注疏·學而) | OK — e-text 三層เต็ม: 經文 + 何晏集解注 (馬曰/王曰/包曰/孔曰) + 【疏】正義曰 (邢昺) — primary evidence ชิ้นเด็ดของลูป |
| F3 | ctext.org/searchbooks.pl?searchu=附釋音 | OK — "No results found" (ctext ไม่มี附釋音本) |
| F4 | journals.uni-lj.si/as/article/view/2298 (+PDF download) | OK — Lee 2012 OA เต็ม; extract text ด้วย pypdf สำเร็จ |
| F5 | cambridge.org/core ... S0362502819000026 (Krijgsman) | OK abstract+bibliography; full text paywalled |
| F6 | brill.com/display/book/9781684173907/BP000016.xml (Makeham) | OK ToC เต็ม + metadata |
| F7 | hanspub.org paperinformation?paperid=137589 (Sha 2026) | OK — abstract EN/ZH + bibliography เต็ม |
| F8 | okdb.co.kr/journal/article.php?code=84112 (Jo 2022) | OK — title EN + 초록 KR พร้อม hanzi |
| F9 | jstage chuugokugogaku 2019_98 (Fujita) | OK — abstract + keywords + free PDF link |
| F10 | mdpi.com 2077-1444/16/7/838 (fanqie article) | FAILED (empty output 3 ครั้ง) |
| F11 | doi.org/10.37134/erudite.vol4.2.1.2023 (Duan Yucai, UPSI Malaysia) | BLOCKED (aaPanel WAF "Human verification") |
| F12 | ojs.unito.it kervan 2267 | OK แต่เป็นเรื่อง Burma printing — ไม่เกี่ยว ตัดทิ้ง |
| F13 | chinaknowledge.de Literature.html | FAILED (transport error) |
| F14 | hanspub.org journal/articles?searchcode=夹注 | BLOCKED (Alibaba WAF JS challenge) |

---

## 2. Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| 何晏 et al. (集解), 邢昺 (疏) — ctext e-text | 論語注疏·學而 (base: 武英殿十三經注疏本) | text Song-Yuan / scan Qing | https://ctext.org/lunyu-zhushu/xue-er | Primary: โครง三層 (經文→集解小注ระบุชื่อนัก注: 馬融馬曰/王肅王曰/包咸包曰/孔安國孔曰/鄭玄鄭曰→【疏】正義曰ขยายทั้ง經และ注 โดย○注「…」至「…」標記 scope) — โครงสร้าง interlinear-type apparatus ที่ print ยึดมา |
| ctext digital library | scans: 武英殿十三經注疏本《毛詩正義》《論語注疏》, 阮元校刻十三經注疏本《毛詩正義》 | Qing editions | https://ctext.org/book-of-poetry/guan-ju ; library.pl?file=80140&page=39 ; ?file=98090&page=22 | Digital-library evidence ว่าชุด十三經注疏มี 2 สายพิมพ์สำคัญ: 武英殿本 (palace edition) และ阮元校刻本 (Ruan Yuan collated edition, 19th c.) |
| Jer-shiarn Lee 李哲賢 | 論戴震之考證哲學及其反思 (Asian Studies 16.1:27–39) | 2012 | https://journals.uni-lj.si/as/article/view/2298 | OA FULL TEXT; kaozheng 乾嘉 (1736–1820); 孔穎達(574–648)《五經正義》เป็นมาตรฐาน科舉; 考證ศัพท์เก่าถึง王應麟(1223–96); 實事求是/無徵不信; 惠棟吳派「凡古必真；凡漢皆好」; 戴震訓詁 method, 《孟子字義疏證》(1777), จดหมายถึง段玉裁 + quote《十三經注疏》; ข้อวิจารณ์ etymological method (勞思光) |
| Hae-Jin Jo | A Study on the Zheng-bian(正變) of 『Jian』(箋) by Zheng Xuan(鄭玄) (Chinese Studies 79:77–96) | 2022 | http://www.okdb.co.kr/journal/article.php?code=84112 | 箋 jian = layer ตีความของ鄭玄บน毛詩; เทียบ毛詩解釋體系 vs 箋; 風雅正變論จาก毛詩序; DOI 10.14378/kacs.2022.79.79.5; บทเก่า (2021) ว่าด้วย美刺ใน箋: code=82463 |
| 沙顺顺 Sha Shunshun | 郑玄注经对汉代礼法的理论建构 (国学 14.2:350–355, Hans OA) | 2026 | https://www.hanspub.org/journal/paperinformation?paperid=137589 | 郑玄遍注群经/三礼注; 今古文 crisis; ref[3] ยืนยัน bibliographic lineage: [汉]郑玄笺 → [唐]孔颖达正义 → 十三经注疏 (上海古籍出版社 2007) |
| John Makeham | Transmitters and Creators: Chinese Commentators and Commentaries on the Analects (Harvard UP Asia Center, HEAM) | 2003 | https://brill.com/display/book/9781684173907/BP000016.xml | ToC ยืนยันศัพท์ genre: Lunyu jijie 集解 (He Yan), Huang Kan's yishu 義疏 + "the Shu Genre" 疏, Zhu Xi's jizhu 集注, Liu Baonan zhengyi 正義; appendix "Format and Early History of Elucidation of the Meaning" |
| Rens Krijgsman | A Self-Reflexive Praxis... Manuscript and Text in Early China (Early China 42:75–110) | 2019 | https://doi.org/10.1017/eac.2019.2 | Abstract+biblio; field-map manuscript culture (Meyer/Richter/Nylan/Galambos/張涌泉敦煌寫本文獻學/Tsien Written on Bamboo and Silk); keywords 寫本/文本/物質性/口頭傳授 |
| Takumi Fujita 藤田泰和 | On the Inclusion of Additional Youyin Fanqie in Segment S2071 of the Qieyun (中國語學 266:98–116) | 2019 | https://www.jstage.jst.go.jp/article/chuugokugogaku/2019/266/2019_98/_article/-char/en | FREE ACCESS; fanqie 反切 spelling units; youyin 又音 vs 本cut; Lu Fayan 陸法言 Qieyun 切韻; cross-check ระหว่าง fanqie units — บริบท phonological ของ Jingdian shiwen |
| Benjamin A. Elman | From Philosophy to Philology: Intellectual and Social Aspects of Change in Late Imperial China | 1984 | https://doi.org/10.1163/9781684172443 (Harvard University Asia Center) | Anchor work kaozheng (ยืนยัน metadata ผ่าน Crossref; ถูกอ้างซ้ำใน Lee 2012 pp.19,43-44,215-216) |
| Martin Kern | Methodological Reflections on the Analysis of Textual Variants and the Modes of Manuscript Production in Early China (J. of East Asian Archaeology 5) | 2002 | https://doi.org/10.1163/156852302322454521 | Kern ยืนยันผ่าน Crossref (author/title/container/year) — textual variants + manuscript production modes |
| Susan Cherniack | Book Culture and Textual Transmission in Sung China (Harvard J. of Asiatic Studies 54.1:5–125) | 1994 | https://doi.org/10.2307/2719389 | Canonical source Song book culture/textual transmission (metadata via Crossref; paywalled — Phase B target) |
| David B. Honey | Incense at the Altar: Pioneering Sinologists and the Development of Classical Chinese Philology | 2001 | https://doi.org/10.2307/495506 ; https://doi.org/10.2307/3087543 | ยืนยัน existence+title+year ผ่าน JSTOR review records (Crossref); publisher American Oriental Society (ยังไม่พบข้อมูลยืนยันจากหน้า publisher โดยตรง) |
| Guolong Lai 來國龍 | Textual fluidity and fixity in early Chinese manuscript culture (Chinese Studies in History 50) | 2017 | https://doi.org/10.1080/00094633.2017.1382110 | Manuscript culture field (Kern-adjacent) |
| Kim H.S. 김희선 | A New Understanding of Textual Criticism Theory for Classical Texts in Qing Dynasty: Wang Niansun & Wang Yinzhi (Korea J. of Chinese Language and Literature 90:91–120) | 2022 | https://doi.org/10.46612/kjcll.2022.12.90.91 | 校勘學 theory ของ父子王氏 (王念孫/王引之) — RQ5 (metadata only) |
| Sheng-Xiang Yang | Woodblock Printing by the Mu Chieftains of Lijiang (J. of Library and Information Studies 21.2:153–179) | 2023 | https://jlis.lis.ntu.edu.tw/files/journal/j57-6.pdf | Publishing history background (Tusi private printing, Ming) — marginal สำหรับ layout question |
| Cambridge volume chapter | Calling out Zheng Xuan (127–200 CE) at the Crossroads of Ritual, Mathematics, Sport, and Classical Commentary | 2022 | https://doi.org/10.1017/9781108884488.004 | ยืนยัน Zheng Xuan dates 127–200 CE ใน title |

---

## 3. Key findings (with URLs)

### RQ1 ศัพท์เทคนิค (ยืนยันจาก fetched sources ทั้งหมด)
1. **zhu 注 (annotation/commentary)**: ยืนยันจาก (a) ชื่อเรื่อง郑玄**注**经 (Sha 2026, Hans OA) — 鄭玄"遍注群经"; (b) 論語注疏 e-text ที่注ของ何晏集解ฝังในบรรทัดโดยระบุชื่อผู้注 (馬曰、王曰、包曰、孔曰、鄭曰) — https://ctext.org/lunyu-zhushu/xue-er
2. **shu 疏 (subcommentary)**: ยืนยัน 3 ชั้น — (a) ctext 論語注疏 มี【疏】正義曰 blocks ขยายทั้ง經และ注 พร้อม marker ○注「…」至「…」กำหนดขอบเขต; (b) Makeham มีบท "Huang Kan and the **Shu Genre**" (皇侃論語義疏) — https://brill.com/display/book/9781684173907/BP000016.xml ; (c) Bender (loop 03) ใช้คำ "Zhengyi subcommentaries"
3. **jian 笺 (Zheng Xuan's "tablets")**: ยืนยันจากชื่อบทความ『**箋**』by **鄭玄** (Jo 2022, Chinese Studies 79) + bibliographic string "[汉]郑玄，**笺**. 十三经注疏·毛诗正义. [唐]孔颖达，**正义**." (ref [3] ใน Sha 2026) — 箋เป็น layer ที่ตีความทับ毛 interpretation โดยผูก诗旨กับ历史事实 (風雅正變論) — http://www.okdb.co.kr/journal/article.php?code=84112
4. **zhuan 传 (transmitted commentary)**: ยืนยันรูป三傳 (Zuo/Gongyang/Guliang บน春秋) จากเต็ม Lee 2012 ("孫復直接研讀春秋經而非三傳"); และ毛 interpretation system (毛詩解釋體系) ใน Jo 2022 abstract — 毛傳เป็น layer ก่อน箋
5. **jijie 集解 (collected annotations)**: ยืนยันจาก Makeham ch.2 "He Yan et al., **Lunyu jijie (Collected Explanations of the Analects)**" + e-text จริงของ集解บน ctext (attributions รายนัก注)
6. **jiajia zhu 夹注 (interleaved/interlinear print format): (ยังไม่พบข้อมูลยืนยัน)** — DOAJ/J-STAGE/Crossref/websearch-down ไม่ให้แหล่งที่ใช้ยืนยันศัพท์+วันสร้างมาตรฐานได้ในลูปนี้; Hans site search ติด WAF — ทิ้ง gap สำหรับ Phase B (แหล่งเสนอ: Cherniack 1994; Brokaw & Chia; Tsien, Science and Civilisation V.5.1)
7. **集注 jizhu**: ยืนยันผ่าน Makeham ch. "Zhu Xi's **Lunyu jizhu (Collected Annotations on the Analects)**"

### RQ2 canonical commentarial lineage
8. **Mao → Zheng Xuan → Kong Yingda → Shisanjing zhushu ยืนยันครบโซ่**: (a) 毛詩解釋體系 vs 箋 (Jo 2022); (b) 鄭玄 127–200 CE (Cambridge chapter title, 10.1017/9781108884488.004); (c) 孔穎達 (574–648) รวบรวม《五經正義》→ มาตรฐาน科舉 (Lee 2012 เต็ม) + Bender 2019 (loop 03: T'oung Pao 105, orthodoxy project); (d)《十三經注疏》เป็น corpus รู้จักทั่วไป: 戴震 quote "從友人假《**十三經注疏**》讀之，則知一字之義，當貫群經，本六書，然後為定" (Lee 2012) + ctext scans 武英殿本/阮元校刻本 — https://ctext.org/lunyu-zhushu/xue-er , https://ctext.org/book-of-poetry/guan-ju
9. **โครงสร้างสามชั้นใน e-text สะท้อน print structure**: 經文大段 → 小注 (集解) → 【疏】 — ลำดับชั้น (ordering) ยืนยันได้จาก e-text; typography (double-small-character columns) ยังต้องภาพ scan จริงใน Phase B (ctext library.pl?file=80267&page=26 ฯลฯ)

### RQ3 Lu Deming Jingdian shiwen
10. **fanqie 反切 ระบบ sound-gloss**: ยืนยันผ่านงานฟรี J-STAGE (Fujita 2019) ว่า fanqie เป็น spelling units ที่มี internal consistency checking (youyin vs xiaoyun cross-reference) ในสาย切韻 Qieyun ของ陸法言 — ระบบเดียวกับที่經典釋文 (c.583) ใช้ — https://www.jstage.jst.go.jp/article/chuugokugogaku/2019/266/2019_98/_article/-char/en
11. **Jingdian shiwen เป็นเอกสารแกน jingxue**: loop 03 ยืนยันแล้วผ่าน Lin Baoquan (2019) 序錄 PDF OA: http://140.123.13.91/journal/article/33_02.pdf — **ข้อจำกัดการเข้าถึง (Unbiased Agent F3): ลิงก์นี้ไม่เสถียร (timeout x2 ในการตรวจซ้ำ) ห้ามอ้างตรงในร่างโดยไม่หา mirror ก่อน** ; **ตำแหน่ง釋文 between lines ใน印刷本 (附釋音 editions): (ยังไม่พบข้อมูลยืนยัน)** — ctext ไม่มี附釋音本; ต้องหา facsimile (Phase B)

### RQ4 physical/printing
12. **Printed zhushu editions มีหลักฐาน digital-library แน่น**: 武英殿十三經注疏本 (Qing palace) และ阮元校刻十三經注疏本 (Ruan Yuan) ถูก scan ไว้บน ctext สำหรับ毛詩正義/論語注疏 — แต่**การ dated claim ว่า interleaved layout กลายเป็น standard เมื่อไร ยังไม่มีแหล่ง OA ยืนยันในลูปนี้ (ยังไม่พบข้อมูลยืนยัน)**; candidate หลัก: Cherniack 1994 (HJAS 54, 10.2307/2719389 — paywalled), Brill ch. "Manuscript Formats and Textual Structure in Early China" (10.1163/9789004382947_009)
13. **Publishing-history background**: Yang (2023, JLIS NTU OA) — private woodblock publishing (Mu chieftains) ยืนยัน infrastructure การพิมพ์私版; ไม่ตอบ layout โดยตรง

### RQ5 kaozheng as mature textual criticism
14. **Methodology core (จากเต็ม Lee 2012)**: kaozheng = "empirical mode of knowledge" ใช้方法精確评估修正古代经典; motto 實事求是 + 無徵不信; ครอบ语言学/音韻学/校勘学/輯佚学/金石学/天文学/数学/地理学; outputs รวม在《皇清經解》正續編 — https://journals.uni-lj.si/as/article/view/2298
15. **Dai Zhen (1723–1777)**: 訓詁 xungu glossing = วิธีหลัก ("由字以通其詞，由詞以通其道"); 《孟子字義疏證》ทำ term-by-term glossing (理15條/性13條...) อ้าง說文解字+群經例句เป็น evidence; มอง kaozheng เป็น means ไม่ใช่ end (ต่างจาก惠棟吳派)
16. **Duan Yucai (1735–1815)**: ผู้รับจดหมายวิธีวิทยาของ戴震; งาน ERUDITE 2023 (UPSI, 10.37134/erudite.vol4.2.1.2023) ยืนยัน existence ผ่าน Crossref แต่เว็บติด WAF — metadata only
17. **Wang Niansun (1744–1832)/Wang Yinzhi**: KJCLL 2022 (10.46612/kjcll.2022.12.90.91) ยืนยันมีงานศึกษา校勘 theory ของทั้งคู่ — metadata only
18. **Comparable to Western philology**: Lee 2012 ปิดท้ายด้วยข้อจำกัด (etymology ≠ technical meaning) — เทียบ debates ใน World Philology (Pollock/Elman/Chang eds., HUP 2015, ch.12 "The Crisis of Classical Philology in Eighteenth-Century China", 10.4159/harvard.9780674736122.c12) — metadata

### RQ6 modern scholarship verification
19. **Makeham**: ยืนยัน Transmitters and Creators (HUAC 2003) เต็ม ToC — https://brill.com/display/book/9781684173907/BP000016.xml
20. **Kern**: ยืนยัน JEAA 2002 variants/manuscript modes (10.1163/156852302322454521) + field-map ผ่าน Krijgsman bibliography
21. **Elman**: From Philosophy to Philology (1984/rev., HUAC) ยืนยัน (10.1163/9781684172443)
22. **Honey**: Incense at the Altar (2001) ยืนยัน title/year ผ่าน JSTOR review records (10.2307/495506); publisher detail (ยังไม่พบข้อมูลยืนยันจาก direct page)
23. **Bender** (loop 03): T'oung Pao 105 (2019) Wujing zhengyi — ใช้ต่อได้

---

## 4. Remaining gaps (สำหรับ Phase B)

1. **夹注 jiajia/interleaved print format — ศัพท์+วัน standardization**: (ยังไม่พบข้อมูลยืนยัน) — แหล่งเสนอ: Cherniack 1994 (HJAS); Cynthia Brokaw & Kai-wing Chow, Publishing, Culture, and Power in Early Modern China; Tsien Tsuen-hsuin, Science and Civilisation in China V.5 part 1 (Paper and Printing); Lucille Chia, Printing for Profit (Jianyang 建陽)
2. **附釋音 editions (釋文 inserted between lines)**: ต้อง facsimile/描述 — ลอง National Palace Museum open data, IDC/Harvard-Yenching library catalogs, 或 J-STAGE 「宋刊」「経注本」
3. **Typography จริง (double-small-character columns)**: ใช้ ctext scan images (library.pl?file=80267&page=26 ฯลฯ) ตรวจด้วยตาใน Phase B + หา catalog descriptions (e.g., 上海古籍出版社影印本阮元本校勘記)
4. **Cherniack 1994 เต็ม**: paywalled (JSTOR) — หา author-deposit/Illinois UIUC repository
5. **Mao commentary เนื้อใน (毛傳 specifics)**: Jo 2022 ให้ framework แต่ไม่ใช่ study ของ毛傳เอง; เสนอ Nylan, The Five "Confucian" Classics (Yale, doi:10.12987/9780300130331) — จาก loop 03 gap list
6. **Honey publisher/series details** + **Makeham ch.1 full text** (Commentary as Authority) — paywalled €35/chapter
7. **Korean KJCLL 2022 (Wang/Wang) full text** — หา landing จริงนอก dbpia
8. **websearch tool** ล่มทั้งลูป — queries ค้างไว้ (W1-W5) ควร rerun เมื่อ Exa กลับมา

## 5. Blocked sources (บันทึกตามจริง)

- websearch (Exa MCP): HTTP 429 ตลอดลูป (5 queries × หลายช่วงเวลา)
- OpenAlex API: HTTP 429
- Google Books API: HTTP 429
- Crossref: ใช้ได้ส่วนใหญ่ แต่ 429 ช่วงท้าย (rate limit จาก IP)
- UPSI ejournal (ERUDITE Duan Yucai): aaPanel WAF human verification
- Hans site search endpoint: Alibaba WAF JS challenge (หน้า article ตรงเข้าได้)
- MDPI (Religions 16.7:838): fetch คืน empty output 3 ครั้ง
- chinaknowledge.de: transport error
- Cambridge Core Krijgsman full text: purchase-only; Ars Orientalis (umich): Anubis bot challenge
- Brill Makeham chapters: €35.00 each (ToC/metadata ฟรี)
- okdb.co.kr PDF: ต้อง JS downloadPDF() — abstract เท่านั้น
