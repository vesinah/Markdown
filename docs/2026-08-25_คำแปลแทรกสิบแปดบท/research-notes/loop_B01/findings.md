# Loop B01 Findings — Chinese interleaved-commentary print layouts: 夾注/夹注 and 附釋音 editions

**วันที่:** 2026-08-26
**ผู้ทำ:** Explorer research agent (foraging loop เดียว, Phase B)
**ขอบเขต:** ปิดช่องว่างจาก loop_07 (Phase A) เรื่อง layout การพิมพ์จีน: (1) กาลเวลาที่ layout interleaved commentary (夾注/附音) กลายเป็นมาตรฐาน + ตัวอย่างพิมพ์ยุคแรกที่ datable ได้; (2) เนื้อหา Cherniack 1994 (HJAS); (3) ตำแหน่ง釋文ในสิ่งพิมพ์宋刊附釋音; (4) typology คอลัมน์小字雙行; (5) ตรวจผลงานภาษาอังกฤษ/เยอรมัน/ญี่ปุ่น (Cherniack, Brokaw & Chow, Chia, Edgren)
**รองรับบท:** 1, 7, 8 (เชื่อมจาก loop_07)

---

## Queries executed

### Websearch tool / search engines
| # | Query | ผล |
|---|---|---|
| W1 | Cherniack "Book Culture and Textual Transmission in Sung China" HJAS 1994 | BLOCKED (Exa MCP HTTP 429 ทั้งลูป) |
| W2 | 夹注 Song dynasty printing interlinear commentary layout 小字双行 | BLOCKED (429) |
| W3 | Bing HTML (query เดียวกับ W2, UA browser) | 200 แต่ให้ผลไม่เกี่ยวข้อง (generic results) — ใช้ไม่ได้ |
| W4 | DuckDuckGo html.duckduckgo.com | bot challenge (202, ไม่มี results) |
| W5 | Mojeek | captcha challenge |

### API fallbacks (bash)
| # | API/Query | ผล |
|---|---|---|
| A1 | Crossref query.bibliographic: Cherniack; Brokaw Chow Printing Book Culture; Chia Printing for Profit; Shiji three commentaries Song Jianyang; Jianyang printers; Huang Shanfu; Mun printing press copyright | OK หมด — metadata ยืนยันได้ครบ (ดูตารางแหล่ง) |
| A2 | Crossref works/{doi}: 10.2307/2719389, 10.1163/9781684170395(_004,_005,_009), 10.1525/california/9780520231269.*, 10.1353/late.1996.0005, 10.1017/s0021911804001172, 10.1080/17544750.2013.753497, 10.1163/9781684173815_010 | OK |
| A3 | Semantic Scholar paper record + **citations?fields=contexts** ของ 10.2307/2719389 (105 citations) | OK — ได้ citation contexts 24 ชุด อ้างหน้าแบบ page-specific (แหล่งเนื้อหา Cherniack หลักของลูปนี้) |
| A4 | Unpaywall: 10.2307/2719389 ; 10.1080/17544750.2013.753497 | OK — ทั้งคู่ closed |
| A5 | archive.org advancedsearch + metadata: Tsien V.5.1; 十三經注疏; poon sung printing; edgren chinese rare books | OK — เจอ scan Tsien (มี djvu.txt OCR) + catalog Edgren 1987; ค้น十三經注疏 ให้หนังสือพิมพ์จีนไม่เกี่ยว |
| A6 | J-STAGE searchapi keyword=黄善夫 / 夾注 / 宋刊 / 注疏 | total=0 ทั้งหมด (คลัง J-STAGE ไม่คลุม) |
| A7 | Google Books API (附釋音十三經; "jia zhu" interlinear) | BLOCKED (HTTP 429 ซ้ำทุก attempt) |
| A8 | GitHub API user:kanripo q=注疏 / 沿革例 / 夾注 / 周易 | OK — KR1g0008 九經三傳沿革例-宋-, KR6m0043 夾科肇論序注, ฯลฯ |
| A9 | raw.githubusercontent.com fetch Kanripo texts (KR1g0008_000/_001, Readme) | OK — full text UTF-8 สะอาด |
| A10 | DOAJ api (woodblock printing China song) | FAILED 502/504 (flaky ทั้งลูป) |

### Direct fetch (webfetch / Invoke-WebRequest)
| # | URL | ผล |
|---|---|---|
| F1 | jstor.org/stable/2719389 | BLOCKED (client challenge) |
| F2 | publishing.cdlib.org ucpressebooks ft567nb3bn (Brokaw & Chow e-book) | BLOCKED 403 (ทั้ง webfetch และ Invoke-WebRequest+UA) |
| F3 | brill.com/display/book/9781684170395/BP000008.xml | OK fetch แต่ได้ nav chrome เท่านั้น — full text paywalled |
| F4 | brill.com .../9781684173815/BP000010.xml (Mashaben) | 404 (path guess ผิด pattern) |
| F5 | ctext.org/shiji/zhs | OK — ยืนยัน底本武英殿二十四史本 + scan《史記三家注》(司馬遷、裴駰、司馬貞、張守節) ใน library res=3395333 |
| F6 | ctext.org dictionary 夾注 | หน้าเรนเดอร์ไม่มีข้อมูล definition (JS-based) — ไม่ใช้ |
| F7 | chinaknowledge.de literature_printing.html | 404 (guessed path) |
| F8 | rbook.ncl.edu.tw (NCL Taiwan rare books) | 404 |
| F9 | dpul.princeton.edu/catalog.json?q=周易注疏 / 附釋音 | OK JSON แต่ items ที่ได้เป็นชุดพิมพ์ใหม่สมัยใหม่/modern reprints — ไม่มี description ของ宋刊附釋音本ที่ใช้ได้ |
| F10 | archive.org djvu.txt ของ Tsien V.5.1 (download + grep local) | OK — แหล่งเนื้อหาหลักชิ้นที่ 1 ของลูป |

---

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| 無名氏 (Song, 世彩堂 project; repo ไม่ระบุผู้เขียน) | 九經三傳沿革例 (Kanripo KR1g0008, 底本四庫全書文淵閣) | Song (label "-宋-") | https://github.com/kanripo/KR1g0008 | PRIMARY SOURCE เต็ม: ส่วน音釋ระบุว่า監本/蜀本等 print 古註 only, 音釋แยกเป็นเล่ม; 建本蜀中本則**附音於註文之下甚便繙閲**; สำนักพิมพ์เลียนแบบ建蜀 practice โดย vetting + 隨音圈發 (tone circles); 書本 section ระบุ 23 base texts รวม**中字有句讀附音本**, **建本有音釋註疏**, 越中舊本註疏, 蜀註疏, 建安余仁仲本, 興國于氏本 (criticized ว่า音義ไม่อยู่ใต้本文 率隔數頁始一聚見) |
| Tsien Tsuen-hsuin 錢存訓 | Science and Civilisation in China V.5 Pt.1 Paper and Printing (Cambridge UP; section Format and Binding of Chinese Books pp.222 ff.) | 1985 | https://archive.org/details/science-and-civilisation-in-china-volume-5-chemistry-and-chemical-technology-par_202109 | FULL TEXT ผ่าน scan: p.222 **"The characters of the text are usually arranged in one vertical line within a column, and notes or commentaries in smaller characters in two lines"** + ศัพท์版面 pan mien/pan hsin/yu wei fish tail/hang ko/pien lan/shu erh book ear; calligraphic dating (Northern Sung=Yen style, Southern Sung Fukien=Yen/Liu); Feng Dao project 932→953 (130 ch., first printed classics); 經典釋文 printed 955/959, reprint 972+999; Guozijian new commentaries twelve classics 988–96, re-engraving 1005, 孟子 added 1011; Hsing Pin 1005 = 100,000 blocks; 余仁仲萬卷堂 fl.1130–93 Nine Classics & Three Commentaries end of 12th c.; 廖瑩中世彩堂 de luxe ed. ca.1270 + ca.1300 facsimile + 沿革例 manual |
| Susan Cherniack | Book Culture and Textual Transmission in Sung China, HJAS 54.1:5–125 | 1994 | https://doi.org/10.2307/2719389 | Metadata ยืนยัน Crossref+S2; closed access (Unpaywall false; JSTOR client-challenge). เนื้อหาผ่าน citation contexts (page-mapped): p.20 decree ให้ copy จาก government printings; p.21 merit transmission; p.27 credibility ของ imperial canonical versions ถูกโจมตีใน Sung; p.40 note 986 (paper/ink costs, Nine Classics); pp.45–46 1093 三 classics with commentaries เป็นฐาน科舉; pp.48–49 葉夢得(1077–1148) บ่นว่า publishing industry แพร่ faulty editions จาก woodblocks error-ridden + decline ของ memorization/collation; pp.89–90 vermilion ink สำหรับ corrections/校勘 notes/punctuation/tone marks; pp.15–17 background manuscript formats |
| Lucille Chia | Printing for Profit: The Commercial Publishers of Jianyang, Fujian (11th–17th Centuries), HUAC | 2002 (Brill digital; JSTOR ed. 2003) | https://doi.org/10.1163/9781684170395 | ยืนยัน volume + chapters: "The Development of the Jianyang Book Trade, Song-Yuan" (_004; journal version Late Imperial China 1996, 10.1353/late.1996.0005), "**Jianyang Imprints of the Song and Yuan**" (_005), "Selected List of Song and Yuan Jianyang Imprints" (_009); full text paywalled |
| Lucille Chia | Mashaben: Commercial Publishing in Jianyang from the Song to the Ming, in The Song-Yuan-Ming Transition in Chinese History (Brill) | 2003 | https://doi.org/10.1163/9781684173815_010 | chapter ยืนยัน metadata; content paywalled |
| Cynthia Brokaw & Kai-wing Chow (eds.) | Printing and Book Culture in Late Imperial China (UC Press) + intro ch. "On the History of the Book in China" | 2005 | https://doi.org/10.1525/california/9780520231269.001.0001 ; intro: ...003.0001 | Volume + intro chapter + Sibao best-sellers chapter (…003.0005) ยืนยันผ่าน Crossref; e-book cdlib 403-blocked |
| Soren Edgren | Chinese Rare Books in American Collections (China House Gallery) | 1987 | https://archive.org/details/chineserarebooks0000unse | metadata: creator=Soren Edgren, 1987, China House Gallery; PDF lending-restricted — เนื้อในไม่ได้อ่าน |
| Seung-Hwan Mun | Printing press without copyright: a historical analysis of printing and publishing in Song, China, Chinese Journal of Communication 6(1):1–23 | 2013 | https://doi.org/10.1080/17544750.2013.753497 | closed access; contexts ของงานนี้ให้ quotes Cherniack p.20/p.40/p.998-edict |
| 無名氏 (CBETA text) | 夾科肇論序注 (Kanripo KR6m0043, CBETA 電子佛典集成) | — | https://github.com/kanripo/KR6m0043 | title-datum: ชื่อเรื่องธรรมเนียมพุทธที่มี**夾科** (interleaved-section commentary label) — หลักฐาน terminological ของตระกูลคำ夾; ไม่ได้ extract เนื้อใน |
| ctext digital library | 史記 landing + 《史記三家注》scan | scans Qing/modern | https://ctext.org/shiji/zhs | ยืนยันว่า combined 三家注 edition (裴駰集解/司馬貞索隱/張守節正義) มี scan ใน ctext library (res=3395333) — ยังไม่ได้ inspect ภาพ |

---

## Key findings (with URLs)

### RQ1 — เมื่อไร layout interleaved (夾注/附音) กลายเป็น standard; ตัวอย่างแรกที่ datable
1. **หลักฐาน primary จากฝั่งผู้พิมพ์เอง (ยุค Song):** 九經三傳沿革例 (ca. 1270 ตามบริบท Tsien; repo label เพียง "宋") ส่วน音釋: "唐石本晉銅版本舊新監本蜀諸本與他善本並刋古註 若音釋則自為一書難檢尋而易差誤 **建本蜀中本則附音於註文之下甚便繙閲** … 今欲求其便之尤便則亦附音釋如建蜀本然亦粗有審訂 音有平上去入之殊則隨音圈發" — แสดงว่า (a) สาย authoritative 監本/蜀大字 ยังพิมพ์เฉพาะ古註 โดย音釋แยกเล่ม; (b) สายพาณิชย์建陽/蜀 ย้าย音ลงมาใต้註文ในหน้าเดียวกัน; (c) ถึงเวลานั้น interleaved placement เป็น convention ที่แม้ luxury collated edition ต้อง follow — https://github.com/kanripo/KR1g0008
2. **การวิจารณ์于氏本ยืนยันทิศทางการเปลี่ยน:** "又于本音義不列於本文下率隔數頁始一聚見不便尋索" — 興國于氏本 (ที่前輩ชมว่าดีสุด) โดนตำหนิเพราะ音義ไม่อยู่ใต้本文 → placement-in-text เป็นเกณฑ์ตัดสินคุณภาพ edition แล้วในยุคนั้น — แหล่งเดียวกัน
3. **Chronology ฝั่ง official:** Feng Dao 932–953 (130 volumes, classics only); Guozijian พิมพ์ classics+commentaries late 980s ("new commentaries on the twelve classics printed in +988–96", re-engraving 1005, 孟子 1011) — Tsien 1985 scan: https://archive.org/details/science-and-civilisation-in-china-volume-5-chemistry-and-chemical-technology-par_202109
4. **ตัวอย่าง datable แบบเจาะจง (黃善夫史記 ca.1190s, 十七史詳節): (ยังไม่พบข้อมูลยืนยัน)** — J-STAGE/Crossref/websearch ไม่ให้แหล่งยืนยันในลูปนี้; มีแค่ indirect anchors: 余仁仲 fl.1130–93 Nine Classics & Three Commentaries (Tsien) และ世彩堂 ca.1270 (Tsien) — ส่วน史記三家注 combined edition มี scan บน ctext แต่ไม่มี date ใน metadata
5. **คำว่า 夾注 เป็นศัพท์:** พบ title-datum 夾科肇論序注 (CBETA/Kanripo KR6m0043) — ยืนยันการใช้ตระกูลคำ夾ในชื่อเรื่อง commentarial; definition/dating ของศัพท์ 夾注 ใน bibliography scholarship: (ยังไม่พบข้อมูลยืนยัน)

### RQ2 — Cherniack 1994
6. Bibliographic identity ยืนยันเต็ม (HJAS 54.1:5–125, DOI 10.2307/2719389, 105 citations บน S2); full text closed ทุกทาง (JSTOR challenge, Unpaywall negative)
7. Content profile ผ่าน citation contexts แบบ page-specific (p.15–17, 20, 21, 27, 40, 45–46, 48–49, 89–90) — ครอบ: state control ของ classic printings, merit copying, การโจมตี imperial versions, 葉夢得 critique ของ commercial woodblock quality, vermilion correction marks/tone dots — รายละเอียดใน documents/1994-Cherniack-book-culture-contexts.md
8. ข้อความของ Cherniack เองเรื่อง layout conventions (interleaved small-character setting): (ยังไม่พบข้อมูลยืนยัน) — ต้อง full text

### RQ3 — 附釋音 editions: ตำแหน่ง釋文
9. **คำตอบจาก primary source:** ใน附音/音釋 editions ของ建陽-สาย蜀, sound glosses ถูกวาง **在註文之下** (ใต้บรรทัด註, ไม่ใช่แยกเล่ม) พร้อม圈發 tone marks; สำหรับ Four Books ผนวก朱音ท้าย章 — 九經三傳沿革例 (KR1g0008)
10. **Edition vocabulary ที่ verified verbatim:** 中字有句讀附音本 / 建本有音釋註疏 / 附音於註文之下 / 隨音圈發 — ชื่อสาย edition ที่ระบบ十三經注疏附釋音 (阮元本 base) สืบมาจาก; 23 base texts list เป็น cross-check ของ ecosystem 宋刊
11. ระบบ fanqie/又音 selection rules ใน音釋 section (ตัด redundant cuts, เก็บ正文之音ทั้งหมด, ยกตัวอย่าง堯典光被四表被皮寄反/徐又音扶義反 พร้อม remark 吳音) — แสดง mechanics ของ shiwen-derived glosses เมื่อถูก embed ลง blockprint — KR1g0008

### RQ4 — Double-small-character column typology
12. **Typology statement (Western-language, from the standard history):** Tsien 1985 p.222: text one character per vertical column; "notes or commentaries in smaller characters in two lines"; 5–10 columns/page, 10–30 chars/column — พร้อม full bibliographic terminology ของ leaf format (pan hsin, yu wei, hang ko, shu erh ฯลฯ) และ calligraphy-based dating ของ Sung editions — https://archive.org/details/science-and-civilisation-in-china-volume-5-chemistry-and-chemical-technology-par_202109
13. คำ雙行小字เป็น hanzi term: ไม่ปรากฏใน沿革例 fetched; ยังไม่มีแหล่ง fetched ยืนยัน hanzi compound นี้โดยตรง (romanization-level evidence ครบแล้วผ่าน Tsien) — (ยังไม่พบข้อมูลยืนยันสำหรับ hanzi compound จาก fetched source)

### RQ5 — Modern scholarship verification
14. ยืนยันครบชุดที่ task ระบุ: Cherniack 1994 ✓; Brokaw & Chow 2005 UC Press (+intro DOI) ✓; Chia 2002/2003 Printing for Profit + Jianyang chapters + Mashaben ✓; Edgren 1987 China House Gallery ✓ (archive.org metadata); เพิ่ม: Tsien 1985 full text accessible; Mun 2013 (closed); Poon Ming-Sun cited by Tsien footnote เป็น authority สำหรับ dating criteria ของ Sung editions (ยังไม่ได้ fetch ผลงานโดยตรง)

---

## Gaps closed / Remaining

### Closed (จาก loop_07 gap list)
1. **夹注/interleaved print format — หลักฐาน primary + chronology บางส่วน:** ได้ Song printer's programmatic statement (附音於註文之下) + official chronology 932/953/988–96/1005/1011 + named Jianyang exemplars (余仁仲, 世彩堂) — ปิดระดับ "มีหลักฐาน dated ยุค Song แล้ว" แม้ยังไม่มี secondary statement แบบ "standard ตั้งแต่ X"
2. **Cherniack 1994:** identity + content profile page-mapped ผ่าน citation contexts (abstract-level closure)
3. **附釋音 positioning ของ釋文:** ปิดด้วย primary source — ใต้บรรทัด註 + 圈發 tone circles + 朱音ท้าย章 สำหรับ Four Books
4. **Double-small-character typology:** ปิดระดับ typology (Tsien p.222 quote) + terminology
5. **Scholarship verification (EN):** ปิดครบตามรายชื่อใน task

### Remaining (ต่อยอด Phase B ถัดไป)
1. Secondary scholarly claim ว่า interleaved layout กลายเป็น standard เมื่อใด (decade-scale) — ต้องงานเชิง目錄學: 張秀民《中國印刷史》/ 尾崎康正史宋元版研究 / 阿部隆一 (print-only, ยังไม่มี OA path)
2. 黃善夫本史記 + 十七史詳節 dating จากแหล่งที่ fetch ได้จริง
3. Cherniack full text (layout passages ของเธอเอง)
4. Chia Jianyang chapters เนื้อใน (jiajia เป็น format สำหรับ examination market?)
5. Visual inspection ของ ctext scans (論語注疏 武英殿本, 史記三家注 res=3395333, 阮元本) เพื่อยืนยัน double-column rendering ด้วยตา
6. Brokaw & Chow intro chapter full text (cdlib blocked)

## Blocked sources (บันทึกตามจริง)

- Exa websearch (MCP): HTTP 429 ทุก attempt ทั้งลูป
- Google Books API: HTTP 429 ทุก attempt
- JSTOR stable/2719389: client challenge (bot wall)
- publishing.cdlib.org (UC Press e-books): 403 ทั้ง webfetch tool และ Invoke-WebRequest+browser UA
- Brill chapter pages (Printing for Profit _005; Mashaben _010): full text paywalled / 404 บน guessed path
- DuckDuckGo html endpoint: bot challenge (202 empty); Mojeek: captcha; Bing: 200 แต่ results ไม่ตรง query (ใช้ไม่ได้)
- DOAJ API: 502/504 intermittent ทั้งลูป
- chinaknowledge.de: 404 (path ที่เดา); rbook.ncl.edu.tw: 404
- archive.org Edgren item: PDF lending-restricted (encrypted/lcpdf) — metadata เท่านั้น
- J-STAGE searchapi: reachable แต่ keyword sets ที่เกี่ยว (黄善夫/夾注/宋刊/注疏) คืน 0 results
