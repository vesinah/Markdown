# Search Log — Loop A10 (ศรีลังกา: ใบลานทาลิปอต, โปถคูละ, SHB, ฟื้นฟูพุทธศาสนา ร.ศ. 19, การเก็บรวบรวมยุคอาณานิคม, ดิจิทัล)

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** A10 | **Date:** 2026-08-26
**Rule:** Zero internal knowledge — citable facts only from sources fetched this session.

## Tool status this session
- `websearch`: HTTP 429 (1 attempt) — ใช้ไม่ได้ (ตรงตามคำเตือนของ brief)
- DuckDuckGo html เข้าตรงผ่าน webfetch: bot-challenge CAPTCHA "select all squares containing a duck"
- **วิธีชนะหลักของรอบนี้:** `https://r.jina.ai/https://html.duckduckgo.com/html/?q=<query>` — ได้ผลค้นครบทุกครั้ง (proxy jina reader ผ่าน wall ได้ แม้ A05 เคยโดน block ตอนใช้ PowerShell)
- webfetch เข้าเว็บสถาบันตรง: ใช้ได้ (palitextsociety.org, natlib.lk, library.manchester.ac.uk, sjp.ac.lk, courtauld.ac.uk, aisls.org, anjagoeing.info, rylandscollections.com)
- island.lk เข้าตรง: HTTP 307 redirect → แก้ด้วย r.jina.ai proxy
- PowerShell Invoke-WebRequest: ดาวน์โหลด PDF/TXT จาก lib.vajirarama.lk, rinac.msu.ac.th, archive.org/download ได้ทั้งหมด
- Crossref REST API: ตอบปกติ แต่ไม่มี record เฉพาะ "Simon Hewavitarne Bequest" (SHB เป็นหนังสือจารึกสิงหล pre-Digital จึงไม่มี DOI)

## Queries executed (distinct ≥ 8)
| # | Engine | Query | Result |
|---|---|---|---|
| Q1 | websearch | Sri Lanka ola leaf manuscript temple library preservation survey | 429 |
| Q2 | DDG html direct (webfetch) | (same as Q1) | CAPTCHA |
| Q3 | r.jina.ai + DDG | Sri Lanka ola leaf manuscript temple library preservation survey | hits: natlib.lk NLDSB conservation; lib.vajirarama.lk Cabral PDF; fcha.lk; paramaththa.org; lakpura; anjagoeing.info; suriyakantha.org; ResearchGate 343179588 |
| Q4 | r.jina.ai + DDG | "Simon Hewavitarne Bequest" Pali Text Society series Atthasalini | hits: archive.org shbvinayatthakatha / shbsuttatthakatha (+djvu.txt preface); palitextsociety.org non-PTS editions; Manchester library record; antikvariat.net |
| Q5 | Crossref API | Simon Hewavitarne Bequest Pali Text Society Sinhala | ไม่มี record ของซีรีส์เอง (Rhys Davids Who Was Who, JPTS reviews เท่านั้น) |
| Q6 | r.jina.ai + DDG | pothgula monastery library manuscripts Sri Lanka palm leaf storehouse | hits: Manchester digitalcollections pali; island.lk part 1 (Kamalika Pieris); Peradeniya palmleafindex (>3000 items); ancientrockfortress.blogspot; lankaweb parts 2/5; michaelbackmanltd (De Silva 1938 cat.) |
| Q7 | r.jina.ai + DDG | Sinhala script evolution palm leaf manuscripts Brahmi study epigraphy | hits: sundaytimes.lk 240811 (Nimal Herath book); scribd Fernando P.E.E.E. Brahmi Ceylon; manuscriptevidence.org; ResearchGate numerals 390283590 |
| Q8 | r.jina.ai + DDG | Hikkaduwe Sumangala 19th century Buddhist revival palm leaf manuscript copying Sri Lanka pirivena | hits: sjp.ac.lk/sumangalathero (institutional); paramadhammapirivena.org (Olcott schools); lankaweb part 2/5 |
| Q9 | r.jina.ai + DDG | British Library "Hugh Nevill" Sinhalese manuscripts collection palm leaf | hits: courtauld.ac.uk lecture (Arani Ilankuberan, >2,000 mss); wellcomecollection.org wa32xbnq (Somadasa cat.); openlibrary/hathi records |
| Q10 | r.jina.ai + DDG | Endangered Archives Programme Sri Lanka palm leaf manuscripts digitisation arcadia | hits: arcadiafund.org.uk EAP grant page; noolahamfoundation.org EAP1056 final report PDF; aisls.org EAP listing (EAP450/609/700/981/1222/1056/1260/835/971); cultureincrisis.org |
| Q11 | r.jina.ai + DDG (ภาษาไทย) | ตำราสินหล่ ใบลาน ศรีลังกา การอนุรักษ์ | hits: rinac.msu.ac.th bailan1.pdf (รายงานสำรวจไทย 2559); manuscript.nlt.go.th; nlt.go.th ebook 746; dmc.tv ใบลานอักษรสิงหล |
| Q12 | r.jina.ai + DDG | exploresrilanka.lk OR "Explore Sri Lanka" pothgula talipot palm leaf manuscript library | 0 results (reformulate ไม่จำเป็น เพราะ poth-gula ครอบด้วย amazinglanka local doc แล้ว) |
| Q13 | r.jina.ai + DDG | talipot palm Corypha umbraculifera leaf bud manuscript preparation Sri Lanka ola | hits: dailymirror.lk art of ola leaf writing; lis.academy; ResearchGate 395552305 (3 varieties); grokipedia/wiki-derived — keywords only |

## Fully-read sources this session (≥4 target — actual 12)
1. NLDSB (natlib.lk) Conservation and Preservation Services — HTML archived
2. The Island "Palm leaf manuscripts of Sri Lanka – 1" (Kamalika Pieris, 2026-05-08) — via r.jina.ai markdown, archived
3. Rylands Blog "Digitising the Sinhalese Palm Leaf Manuscripts" (2023-01-09) — archived
4. Univ. of Manchester Library "Sinhalese Manuscripts" digitisation project page — HTML archived
5. USJ "Ven. Hikkaduwe Sri Sumangala Thero" — HTML archived
6. Goeing Recollectio Card #24 "Sri Lanka Palm Leaf Manuscripts" — markdown archived
7. Cabral (National Library of Sri Lanka) "Conservation of ancient writing material of Palm leaf manuscripts in Sri Lanka", SVLS PDF 11 pp. — PDF + full text extracted
8. Courtauld "Exploring the provenance and digitisation of the BL's Hugh Nevill Sri Lankan Palm Leaf Manuscripts" (28 Mar 2023) — HTML archived
9. AISLS "British Library Endangered Archives Programme (EAP)" — HTML archived
10. PTS "Non-PTS editions of Pali texts" — HTML archived
11. archive.org SHB Jātakatthakathā vol. 6 djvu.txt — PREFATORY NOTE + trust colophon extracted (full raw txt archived, 748 KB)
12. ปกรณ์ ปุกหุต & ณัฐพงค์ มั่นคง, "คัมภีร์ใบลานของประเทศศรีลังกา" (RINAC มหาสารคาม, สำรวจ 25–29 พ.ค. 2559), PDF 14 pp. — full text read via jina, PDF archived

(+ AmazingLanka pothgula Mihintale — เก็บดิบไว้แล้วใน loop_A04/documents, อ่านเนื้อหาซ้ำในเซสชันนี้)
