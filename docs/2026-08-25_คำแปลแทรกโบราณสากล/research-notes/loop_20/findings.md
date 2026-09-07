# Loop 20 Findings - Tibetan manuscript annotation typology (Dalton / van Schaik / Galambos)

Date: 2026-08-25 | Agent: Explorer (Phase B) | Workspace: D:\01_APP\Research

## 1. Queries executed
| # | Query | Channel | Result |
|---|-------|---------|--------|
| 1 | "Dalton van Schaik Tibetan Tantric Manuscripts Dunhuang Brill 2006 catalogue" | websearch tool | 429 blocked |
| 2 | same intent | OpenAlex API works?search=Tibetan Tantric Manuscripts from Dunhuang | HIT (DOI + authors) |
| 3 | Brill landing page fetch brill.com/view/title/13248 | direct fetch | FULL metadata + TOC |
| 4 | "Manuscripts and Travellers Sino-Tibetan Documents Tenth-Century Buddhist Pilgrim" | OpenAlex API | HIT (De Gruyter DOI, 2 reviews) |
| 5 | DuckDuckGo html / lite; Mojeek; Ecosia; Bing HTML for catalogue + Mahavyutpatti | fallback engines | all bot-blocked/junk - documented |
| 6 | earlytibet.com site search: interlinear | WordPress search | 3 relevant posts |
| 7 | earlytibet.com site search: microscope / Mahavyutpatti | WordPress search | microscope post hit; Mahavyutpatti zero |
| 8 | archive.org advancedsearch: Mahavyutpatti | API | 12 items incl. Ishihama & Fukuda 1989 scan |
| 9 | Ishihama 1989 _djvu.txt OCR grep (entries/chapters/S.xxxx) | local analysis | numbering evidence |
| 10 | Crossref query.title "typology old Tibetan manuscripts multidisciplinary"; bibliographic "Old Tibetan manuscripts Dunhuang scribes colophons" | Crossref API | related records (Syntax of Colophons 2022; Bible as Notepad 2018; Helman-Wazny 2014) |
| 11 | Semantic Scholar DOI lookups (Willock JAS; Barrett BSOAS reviews) | S2 API | records, no abstracts |
| 12 | idp.bl.uk HEAD/GET; blogs.bl.uk/asian-and-african | direct | 403 / 404 |

## 2. Source table
| ผู้แต่ง | ชื่อ | ปี | URL | สาระ |
|---------|------|-----|-----|------|
| Dalton J.P., van Schaik S. | Tibetan Tantric Manuscripts from Dunhuang: A Descriptive Catalogue of the Stein Collection at the British Library (Brill) | 2006 | https://doi.org/10.1163/9789047411147 ; https://brill.com/view/title/13248 | แคตตาล็อกอธิบายสโตน collection; Intro xi-xxxiv, Catalogue 1-353, Index of Pelliot tibetain mss 385-390; ISBN hb 978-90-04-15422-3; จัดระเบียบใบฉบับยุ่ง เชื่อมฉบับพี่น้องต่างคลัง จับคู่กับ Bka' 'gyur |
| van Schaik S., Galambos I. | Manuscripts and Travellers: The Sino-Tibetan Documents of a Tenth-Century Buddhist Pilgrim (De Gruyter, Studies in Manuscript Cultures 2) | 2011/2012 | https://doi.org/10.1515/9783110225655 | บทที่ 2 The Dunhuang Manuscripts (10.1515/9783110225655.13); รีวิว Willock (JAS 2012) และ Barrett (BSOAS 2013); ISBN 978-3-11-022564-8, viii+247 pp. |
| van Schaik S. | The Original Bodhicaryavatara (earlytibet.com) | 2014 | https://earlytibet.com/2014/02/04/the-original-bodhicaryavatara/ | ประโยคหลัก: commentary ใน interlinear notes ถูกยกเข้าองค์คัมภีร์ในการคัดลอกรุ่นหลัง; IOL Tib J 628/629/630 + Pt 794; colophon IOL Tib J 629 ชื่อ Akshayamati; Ldan dkar ma 600 verses |
| van Schaik S. | Teachers, students and notes (earlytibet.com) | 2008 | https://earlytibet.com/2008/07/03/teachers-students-and-notes/ | typology 3 ระดับ (scriptorium sutras / personal copies / student notes); Pt 849 บันทึกของศิษย์; IOL Tib J 754; อ้าง van Schaik 2007 Brill pp.183-208 |
| Helman-Wazny A., van Schaik S. | Witnesses for Tibetan Craftsmanship... (Archaeometry 55.4: 707-741) | 2013 | DOI 10.1111/j.1475-4754.2012.00687.x (จาก post "Manuscripts under the microscope" https://earlytibet.com/2013/04/11/manuscripts-under-the-microscope/) | paper fibre + palaeography + codicology; fingerprint แหล่งผลิต; IOL Tib J 1560 Paper Mulberry |
| Pagel U. | The Dharanis of Mahavyutpatti #748: Origin and Formation (Buddhist Studies Review 24[2]) | 2007 | https://doi.org/10.1558/bsrv.v24i2.151 | Rubric 748 = รายชื่อ dharani 12 บท; พิสูจน์โครงสร้าง rubric ตัวเลข >= 748; แหล่งใกล้สุด Ratnamegha |
| Kagawa T. | On the Compilation Date of the Mahavyutpatti (IBK 7) | 1958 | https://doi.org/10.4259/ibk.7.160 | งานวันที่ compile Mahavyutpatti (title-record) |
| Ishihama Y., Fukuda Y. | A New Critical Edition of the Mahavyutpatti (Studia Tibetica 16, Toyo Bunko) | 1989 | https://archive.org/details/ishihama-yumiko-fukuda-yoichi-1989.-a-new-critical-edition-of-the-mahavyutpatti- | scan + OCR; concordance L/N/P/MT/DC; เลข entry ของ edition ถึง ~9985; cross-ref Das ถึง S.9565 |
| Helman-Wazny A. | Tibetan manuscripts: Between History and Science (in Manuscript Cultures: Mapping the Field, De Gruyter) | 2014 | DOI 10.1515/9783110225631.275 | บริบท science-based ms studies (Crossref record) |
| Wangchuk T. | The Syntax of Tibetan Colophons: An Overview (in The Syntax of Colophons, De Gruyter) | 2022 | DOI 10.1515/9783110795271-011 | colophon studies ทิเบต (record) |
| Bremer-McCollum? (ed. volume) | Bible as Notepad: annotating manuscripts (De Gruyter) | 2018 | DOI 10.1515/9783110603477-008 (chapter) | เปรียบเทียบ annotation ใน codex ศาสนาอื่น (record) |

## 3. Key findings (with URLs)
1. Dalton & van Schaik 2006 confirmed as Brill hardback/ebook, published 01 Oct 2006, hb ISBN 978-90-04-15422-3, ebook ISBN 978-90-47-41114-7, DOI 10.1163/9789047411147; structure Introduction xi-xxxiv + Catalogue 1-353 + Bibliography 355-360 + indexes incl. an Index of Pelliot tibetain manuscripts at 385-390. Source: https://brill.com/view/title/13248
2. Publisher description states the catalogue reorders scrambled folios, links counterparts across collections, matches texts to the Tibetan canon - i.e. it is the reference apparatus on which any IOL Tib J annotation typology must be built. Source: same Brill page.
3. van Schaik & Galambos 2011/2012 is De Gruyter Studies in Manuscript Cultures vol.2, DOI 10.1515/9783110225655, with chapter-level DOI 10.1515/9783110225655.13 ("The Dunhuang Manuscripts"); two peer reviews located (JAS 2012 10.1017/S0021911812001490; BSOAS 2013 10.1017/S0041977X1300030X). Direct quotes about interlinear/marginal content inside the book remain unverified online this session.
4. Explicit interlinearity mechanism documented by van Schaik (2014): "Commentary added in interlinear notes might be inserted into the main text in a later copy." Plus concrete IOL Tib J / Pt shelfmarks of the Bodhicaryavatara dossier. Source: https://earlytibet.com/2014/02/04/the-original-bodhicaryavatara/
5. A three-tier production/annotation typology for Tibetan Dunhuang mss (scriptorium-corrected sutras vs personal copies vs scruffy student notes), with Pelliot tibetain 849 carrying "written notes perhaps taken by a Tibetan student", and the underlying study van Schaik 2007 "Oral Teachings and Written Texts..." (Brill, pp.183-208). Source: https://earlytibet.com/2008/07/03/teachers-students-and-notes/
6. Material-science strand: Helman-Wazny & van Schaik 2013 (Archaeometry 55.4:707-741, DOI 10.1111/j.1475-4754.2012.00687.x) fingerprint origin via paper fibres/moulds; sample included IOL Tib J 1560. Source post: https://earlytibet.com/2013/04/11/manuscripts-under-the-microscope/
7. Mahavyutpati statistics: numbered rubric system reaches at least Rubric 748 (Pagel 2007, DOI 10.1558/bsrv.v24i2.151); in Ishihama & Fukuda 1989 scan the own-numbering reaches ~9985 entries and Das-edition cross-references reach S.9565 -> order of magnitude 9,500-9,900 entries observed from primary artifact; exact chapter count still unverified. Sources: https://journal.equinoxpub.com/BSR/article/view/8863 ; https://archive.org/details/ishihama-yumiko-fukuda-yoichi-1989.-a-new-critical-edition-of-the-mahavyutpatti-
8. Compilation-date scholarship exists since at least Kagawa 1958 (IBK 7, DOI 10.4259/ibk.7.160).

## 4. Remaining gaps
- IDP/IOL Tib J item-level catalogue wording on interlinear notes/marginalia: idp.bl.uk returned HTTP 403 this session; BL blogs retired (404). Need IDP access or printed Dalton/vanSchaik catalogue.
- Exact Mahavyutpatti chapter (le'u) count and canonical total-entry figure with page citation (candidates to try later: Sakaki 1916 preface; Sarat Chandra Das 1910 intro in readable scan; Sárközi 1995).
- Scherrer-Schaub & Bonani typology chapter: no accessible record found this session - ยังไม่พบข้อมูลยืนยัน.
- Full text of Manuscripts and Travellers ch.2 for its annotation observations (Cloudflare-blocked).
- Pelliot tibetain-specific scribal-correction monograph beyond van Schaik 2007 chapter: not yet pinned to a DOI.
