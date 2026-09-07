# Loop 17 — Old Irish glosses: dating debates and Thesaurus Palaeohibernicus structure

Phase B explorer notes. Date: 2026-08-25. Workspace: D:\01_APP\Research
Constraint context: websearch 429; DuckDuckGo/Mojeek/Marginalia/JSTOR/Google Scholar blocked; OpenAlex daily budget exhausted mid-loop; Google Books API quota-exhausted. Channels used: Crossref REST, archive.org (metadata + full OCR texts), wuerzburg.ie direct, MURAL ePrints (landing + PDF + JSON search), CORDIS, Zenodo API, DNB SRU.

## 1. Queries used

Planned websearch queries (blocked by 429):
1. "Würzburg glosses dating eighth century Stifter Thurneysen"
2. "Milan glosses number glosses Ambrosianus C301"
3. "McCone Eriu 36 Wurzburg Milan Middle Irish"
4. "Thesaurus Palaeohibernicus volume contents Stokes Strachan"
5. "Chronologicon Hibernicum Stifter Maynooth"

Executed equivalents via fallbacks:
- OpenAlex searches: Würzburg glosses dating eighth century Thurneysen (14); Milan glosses Ambrosianus C301 (11); McCone Würzburg Milan Eriu (0); Thesaurus Palaeohibernicus Stokes Strachan (102); Chronologicon Hibernicum (13)
- Crossref: McCone Wurzburg Milan Glosses earliest sources Middle Irish Eriu; Prolegomena Code-Switching Bisagni Peritia
- archive.org advancedsearch/metadata: thesaurus palaeohibernicus; grammar of old irish thurneysen; steinmeyer kleineren althochdeutschen Sprachdenkmäler
- Full-text OCR grep: Thurneysen Grammar of Old Irish (thurneysen-a-grammar-of-old-irish_djvu.txt)
- Direct fetch: https://www.wuerzburg.ie/about.html (Faisnéis page); https://mural.maynoothuniversity.ie/id/eprint/19107/ ; https://cordis.europa.eu/project/id/647351
- Zenodo API: "Würzburg glosses Old Irish"
- DNB SRU: tit="Milan Glosses"

## 2. Source table

| ผู้แต่ง | ชื่อ | ปี | URL | สาระ |
|---|---|---|---|---|
| Rudolf Thurneysen | A Grammar of Old Irish (trans. Binchy & Bergin), sections 5, 6, 10 | 1946 | https://archive.org/details/thurneysen-a-grammar-of-old-irish | กำหนด hands ของ Wb.: Wb. I = prima manus (scribe of Latin text, few single-word glosses); main glossator fol.1-32; Wb. II fol.33-34a "somewhat later"; main hand "about the middle of the eighth century"; Ml. = largest collection, on Latin commentary on Psalms, from Bobbio, written in Ireland |
| David Stifter | The dawn and twilight of Old Irish scholarship, Language & History | 2024 | https://doi.org/10.1080/17597536.2024.2354085 ; PDF: https://mural.maynoothuniversity.ie/id/eprint/19107/1/The%20dawn%20and%20twilight%20of%20Old%20Irish%20scholarship.pdf | จำนวน glosses: Wb.=3,501; Ml.=8,442; Sg.(Priscian)=3,561; total >16,000; Old Irish = 8th-9th c.; ChronHib/DiAgnostic funding note; von Eckhart 1729 printed ~half of Wb. glosses (186) down to Thes. 4a23 |
| Adrian Doyle | Gluaiseanna Gaeilge Würzburg / Würzburg Irish Glosses (digital edition site) | 2018 (site rev. 2024) | https://www.wuerzburg.ie/about.html | Codex Paulinus Wirziburgensis; marginal + interlinear glosses by three hands; glosses "ón t-ochtú haois" (from the 8th century); editors of Thes. presented 3,501 Irish glosses; bibliography incl. Ó Néill 2002 (prima manus), Bisagni 2013 Peritia 24-25 pp.1-58, Kavanagh & Wodtko 2001, de Paor 2016 (Herder) |
| Adrian Doyle | Würzburg Old Irish Glosses (dataset) | 2021 | https://zenodo.org/records/5508250 (DOI 10.5281/zenodo.5508250) | digital text of Wb. per Thes. vol.1; "dated to about the 8th century" |
| Whitley Stokes & John Strachan | Thesaurus Palaeohibernicus 2 vols. + Supplement | 1901-1903; Suppl. 1910 | https://archive.org/details/thesauruspalaeoh01stokuoft ; https://archive.org/details/thesauruspalaeoh02stokuoft | v.1 = Biblical glosses and scholia; v.2 = Non-biblical glosses and scholia, Old-Irish prose, names of persons and places, inscriptions, verse, indexes; Latin texts with English intro/notes; Supplement (1910) corrigenda; 1975 DIAS reprint embeds Supplement at v.2 pp.423-506 |
| European Commission (CORDIS) | Chronologicon Hibernicum (ChronHib), ERC Consolidator Grant 647351 | 2015-2021 | https://cordis.europa.eu/project/id/647351 | PI Maynooth (Stifter); objective: probabilistic chronological framework for Early Irish via linguistic profiling of externally dated texts, seriation + Bayesian inference; output database = authoritative reference for linguistic dating; €1,804,229.61 |
| Jacopo Bisagni | Prolegomena to the Study of Code-Switching in the Old Irish Glosses, Peritia 24-25 | 2013/2014 | https://doi.org/10.1484/j.perit.5.102737 | ยืนยันบรรณานุกรมผ่าน Crossref + wuerzburg.ie (pp.1-58); full text paywalled — abstract ไม่มีใน Crossref |
| Pádraig Ó Néill | The Old-Irish Glosses of the Prima Manus in Würzburg, m.p.th.f.12: Text and Context Reconsidered, in Ogma (Four Courts) | 2002 | (บรรณานุกรมใน wuerzburg.ie/about.html) | study เฉพาะ prima manus ของ Wb. (ยังไม่ได้ fetch) |

## 3. Key findings (with URLs)

1. โครงสร้าง hands และคำพูด dating ของ Thurneysen ยืนยันเป็นข้อความตรงจาก OCR: main Wb. glossator = fol. 1-32, copied from another manuscript, very accurate, "may be assigned to about the middle of the eighth century"; Wb. II (fol. 33-34a) linguistically somewhat later; Wb. I = prima manus (scribe of the Latin base text) ถูกจัดเป็น archaic source "some even as early as the sixth century". — https://archive.org/details/thurneysen-a-grammar-of-old-irish (extract saved to documents/)
2. จำนวน glosses ยืนยันจาก Stifter 2024 (fetched full text): Würzburg UB M.p.th.f.12 = 3,501; Milan Ambrosiana C301 inf. = 8,442 (Theodore of Mopsuestia's psalm-commentary ผ่าน Julian of Eclanum's Latin translation); St. Gallen 904 Priscian = 3,561; รวม glosses OH period >16,000. หมายเหตุ: เอกสาร phase ก่อนใน workspace (2024-Moran-Gloss-Corpus.md) ระบุ Wb.=3,642 glosses ตามการนับของ Doyle edition — ตัวเลขต่างกันตามเกณฑ์การนับ ต้องอธิบายไว้ใน corpus design. — PDF ที่ mural link ข้างบน
3. Ml. ยืนยันลักษณะ: Milan glosses on a Latin commentary on the Psalms, largest collection, written in Ireland, came to Milan from Bobbio, careless script (Thurneysen section 6). Manuscript shelfmark Biblioteca Ambrosiana C301 inf. ยืนยันผ่าน Stifter 2024.
4. Thesaurus Palaeohibernicus structure ยืนยันจาก archive.org metadata: v.1 Biblical glosses and scholia; v.2 Non-biblical glosses and scholia + Old-Irish prose + names of persons and places + inscriptions + verse + indexes; Supplement 1910; both volumes downloadable (djvu.txt/pdf). — URLs ในตาราง
5. Chronologicon Hibernicum ยืนยันจาก CORDIS: ERC-CoG 647351, 1 Sep 2015 - 30 Apr 2021, Maynooth, Bayesian/seriation approach, ผลลัพธ์ = database สำหรับ linguistic dating ของ Early Irish texts; successor project DiAgnostic (IRCLA/2023/2124, 2023-2027) กำลัง revise CorPH database (Stifter et al. 2021) — Stifter 2024 p.5 + CORDIS.
6. Wb. glosses เป็นทั้ง interlinear และ marginal โดยมือเขียนสามมือ (wuerzburg.ie Faisnéis page) — เทียบ layout กับ tradition ทวีปยุโรปได้; digital edition CC BY 4.0 พร้อม facsimile ผ่าน TITUS.
7. Dating ecosystem: Zenodo record (Doyle dataset) ใช้ wording "dated to about the 8th century"; Vienna Bede fragment (Old Irish+Latin glosses) dated late 8th/early 9th c. (Zenodo 2024-03-06 record) — เป็น anchor เทียบเคียงสำหรับ chronological layering.
8. ประวัติการพิมพ์: von Eckhart 1729 ตีพิมพ์ Wb. glosses ~ครึ่งหนึ่ง (186 glosses, fol. 1a - Thes. 4a23) ใน Commentarii de rebus Franciae orientalis (Stifter 2024, citing von Eckhart 1729 i 847-853) — ช่วยยืนยัน continuity จาก pre-Zeuss scholarship.

## 4. Remaining gaps

- McCone 1985 Ériu 36 "The Würzburg and Milan Glosses: Our Earliest Sources of 'Middle Irish'": ยังไม่พบข้อมูลยืนยัน bibliographic record ที่ fetch ได้ในรอบนี้ (Crossref ไม่มี DOI ย้อนหลังของ Ériu vol.36; JSTOR bot-wall; OpenAlex หมดโควตาก่อน query ตัวนี้; DNB/MURAL ไม่มี). Core argument จึงยังไม่ถูก summarize จากต้นฉบับ — ต้องรอ JSTOR stable URL หรือ scan จาก RIA/DIAS. ห้ามเขียน argument แทน.
- ตำแหน่ง dating เฉพาะของ Stifter ("ca. 700-750?") สำหรับ Wb. composition date: ยังไม่พบ statement ชัดเจนจากแหล่ง OA ที่ fetch ได้ (Stifter 2024 fetched article เป็นเรื่อง historiography ไม่ได้ให้ date range นี้; ChronHib outputs บน Zenodo ไม่ปรากฏ). Next candidates: CorPH site documentation, Stifter 2009, Griffith & Stifter forthcoming.
- Ó Néill 2002 (prima manus reconsidered) และ Bisagni 2013 full text: paywalled — ยังไม่ได้เนื้อหา.
- การ reconcile จำนวน glosses 3,501 (Thes./Doyle-site/Stifter) vs 3,642 (Moran doc ใน workspace): ต้องอ่านเกณฑ์นับใน Doyle edition หรือ Moran 2024 โดยตรง.
