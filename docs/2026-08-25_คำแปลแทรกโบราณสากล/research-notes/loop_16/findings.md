# Loop 16 — Glossa ordinaria and medieval glossed Psalter traditions

Phase B explorer notes. Date: 2026-08-25. Workspace: D:\01_APP\Research
Constraint context: websearch API rate-limited (429); DuckDuckGo/Mojeek/Marginalia/scholar.archive.org bot-walled; Google Books API quota-exhausted. Primary channels used: OpenAlex (until daily budget exhausted), Crossref REST, direct fetches (TSpace, MURAL, wuerzburg.ie, archive.org incl. full OCR texts), DNB SRU, Zenodo API.

## 1. Queries used

Planned websearch queries (all blocked by upstream 429):
1. "Glossa ordinaria origins Walafrid Strabo Anselm Laon"
2. "Reichenau Psalter glosses Old High German interlinear Clm 14689"
3. "medieval glossed Psalter layout marginalia"
4. "Smaragdus Remigius Psalms commentary Carolingian"
5. "glossed Bible manuscripts twelfth century layout"

Executed equivalents via fallbacks:
- OpenAlex search: "Glossa ordinaria Walafrid Strabo Anselm Laon origins" (12 hits)
- OpenAlex search: "Reichenau Psalter glosses Old High German" (32 hits)
- OpenAlex search: "glossed Bible manuscripts twelfth century layout Glossa ordinaria" (48 hits)
- OpenAlex search: "Smaragdus Remigius of Auxerre Psalms commentary Carolingian" (4 hits)
- OpenAlex title.search: "Anselm of Laon Glossa Ordinaria Psalms"; "In Principio Origins Glossa ordinaria Genesis"
- Crossref query.bibliographic: McCone/Wurzburg-Milan; Remigius Psalms; Smaragdus Expositio Psalmos; Gibson Carolingian glossed psalters; Reichenau Psalter interlinear Old High German; "Walafrid Strabo and the Glossa Ordinaria myth Froehlich"
- Crossref works/{doi}: 10.4324/9781003554240-2 ; 10.3138/9781487576042-030
- DNB SRU (oai_dc): tit="Reichenauer Glossen" (14); tit="Interlinearversion der Psalmen" (2); tit="Psalmenübersetzung" (27)
- Zenodo API: "Würzburg glosses Old Irish"
- Full-text fetches: Ekman 2019 dissertation PDF (278 pp.); Steinmeyer 1916 djvu.txt; Graff Diutiska Bd.1/Bd.2 djvu.txt; Halm Catalogus codicum latinorum Monacensis parts.

## 2. Source table

| ผู้แต่ง | ชื่อ | ปี | URL | สาระ |
|---|---|---|---|---|
| Annika M. Ekman | Anselm of Laon, the Glossa Ordinaria, and the Tangled Web of Twelfth-century Psalms-Exegesis (PhD diss., U Toronto) | 2019 | https://utoronto.scholaris.ca/bitstreams/4393c977-3898-40a0-be9e-91b8f648ed78/download | ประวัติ attribution debate ครบสาย: Trithemius→1590 Paris ed.→1617 Douay split→Migne; Berger 1893; de Blic 1949; Glunz 1933; Smalley; สาย commentary ใน Psalms (Remi A, Remi M/PL131, Pseudo-Haimo PL116, Bruno, Gilbert Universalis) |
| Karlfried Froehlich | Walafrid Strabo and the Glossa Ordinaria: The Making of a Myth, in Biblical Interpretation from the Church Fathers to the Reformation (Routledge) | 2024 | https://doi.org/10.4324/9781003554240-2 | บันทึกบรรณานุกรมยืนยันชื่อเรื่องคลาสสิกเรื่อง attribution เป็น myth (full text ไม่เปิด) |
| Alice Hutton Sharp | In Principio: The Origins of the Glossa ordinaria on Genesis 1-3 (PhD diss., U Toronto) | 2015 | https://tspace.library.utoronto.ca/handle/1807/77715 | GO = product of twelfth-century School of Laon; textual development ขึ้นกับ mid-12th-c. innovations in formatting/layout; Glossa primitiva vs GO = classroom notes → encyclopedic reference |
| Margaret T. Gibson | "The Place of the Glossa ordinaria in Medieval Exegesis" / "Carolingian Glossed Psalters" (อ้างใน Ekman ch.1 n.) | 1992 | (ผ่าน Ekman p.144 footnote) | ไม่พบ Carolingian glossed Bibles ก่อน 1050; แหล่งอ้างอิงหลักเรื่อง Carolingian glossed psalters (ยังไม่ได้ fetch ต้นฉบับ) |
| Jean de Blic | L'oeuvre exégétique de Walafrid Strabon et la Glossa ordinaria, RTAM 16 | 1949 | (ผ่าน Ekman) pp.5-28 | ปิดข้อถี่เหลื่อมของ Berger; ความเหมือน Strabo-Gloss อธิบายด้วย patristic sources ร่วม; St. Gallen Cod. Sang. 41 มี marginal+interlinear gloss on Prophets 9th/10th c. |
| Hans H. Glunz / Beryl Smalley | History of the Vulgate in England (1933) / "Gilbertus Universalis" articles | 1933/1930s | (ผ่าน Ekman p.176) | ไม่มี MS 12th c. ใดมี "Glossa interlinearis" โดยไม่มี "ordinaria"; gloss เดียวกันเป็น marginal ในเล่มหนึ่ง interlinear ในอีกเล่มหนึ่ง |
| Elias von Steinmeyer | Die kleineren althochdeutschen Sprachdenkmäler | 1916 | https://archive.org/details/diekleinerenalth00stei | กำหนด genre "Interlinearversionen" 5 ชิ้นของ OHG (Benediktinerregel ฯลฯ); ตีพิมพ์แบบ between-lines layout; อ้าง Graff Diutiska |
| E. G. Graff | Diutiska. Denkmäler deutscher Sprache und Literatur, Bde. 1-3 | 1826-1829 | https://archive.org/details/diutiskadenkmle00grafgoog , https://archive.org/details/10801185bsb | Bd.2 มี cross-reference "Reichenauer Gl. im Bd. 1 Hft. 1 der Diutiska" (OCR fraktur ใช้การค้นได้จำกัด) |
| Hans-W. Klein (T.1), Manfred Raupach (T.2) | Die Reichenauer Glossen | 1968-1978 | DNB SRU records (tit="Reichenauer Glossen") | คำว่า "Reichenauer Glossen" ในสายวรรณกรรมนี้ = glosses ภาษา Gallo-Romance/proto-French ("vorliterarisches Französisch") ไม่ใช่ OHG psalter |
| DNB catalog titles (Hopfenbeck-Schlier; anon.) | Wolfenbüttel Cod. 146,2 Extrav.; Windberg Interlinearversion; Fragment "sagitta volante - philere vligend" | various | https://services.dnb.de/sru/dnb (query tit="Interlinearversion der Psalmen") | ยืนยัน tradition ของ interlinear Latin-German psalter versions หลาย witnesses |

## 3. Key findings (with URLs)

1. Attribution debate ยืนยันจาก full text: การยกให้ Walafrid Strabo (d. 849) เป็นผู้แต่ง Glossa ordinaria มาจาก Johannes Trithemius (ศตวรรษ 16); ปรากฏในตัว Gloss พิมพ์ครั้งแรกใน Paris edition 1590 (ระบุ Anselm เป็น co-author ภายหลัง); 1617 Douay/Antwerp edition แยก authorship marginal (=Strabo) vs interlinear (=Anselm); Migne พิมพ์ marginal glosses ในฐานะผลงาน Strabo (PL). — Ekman 2019, saved copy line ~170.
2. Samuel Berger (1893) โต้แย้งเป็นคนแรกว่าไม่มี manuscript ของ Gloss ก่อนศตวรรษที่ 12 (จริง ๆ ไม่มีเลย); de Blic (1949) ปิดประเด็น; Smalley พิสูจน์ว่าบางส่วน predate Peter Lombard; มุมมองที่ยอมรับปัจจุบัน: GO เป็น unified project เริ่มโดย Anselm ที่ cathedral school Laon ปลายศตวรรษ 11. — Ekman 2019 lines ~170-176.
3. Layout: 'glossa' ตาม Isidore-Hugh of St Victor = single explanatory word; ความหมายใหม่ (collection/commentary-like) เกิดต้นศตวรรษ 12 (Lobrichon, citing William of Conches); glossing = explanatory comments in margins or in-between lines, มีรากจาก antiquity; ตำแหน่ง marginal vs interlinear ไม่ fix ระหว่าง manuscripts. — Ekman lines 137, 144, 176; Sharp 2015 abstract: textual development ผูกกับ mid-12th-c. innovations in formatting/layout (https://tspace.library.utoronto.ca/handle/1807/77715).
4. Carolingian layer: Gibson ระบุว่าไม่พบ Carolingian glossed Bibles ก่อน 1050; สาย commentary ที่ Gloss ดึงมาใน Psalms/Paulines รวม Remigius-based material ("Remi A", "Remi M" - commentary spurious ใน PL 131) และ Pseudo-Haimo (PL 116). — Ekman lines 112-118, 144.
5. Reichenau Psalter / Clm 14689: ยังไม่พบข้อมูลยืนยันจากแหล่งที่ fetch ได้ในรอบนี้ ว่า Clm 14689 เป็น interlinear Latin-OHG Psalter corpus ตามข้ออ้างใน Phase A. สิ่งที่ยืนยันได้: (a) genre OHG "Interlinearversionen" มีจริงและถูก treat เป็นหมวดหมู่โดย Steinmeyer 1916 (https://archive.org/details/diekleinerenalth00stei); (b) มี interlinear Latin-German Psalter versions หลาย witnesses (Millstatt, Wolfenbüttel 146,2, Windberg, fragment "philere vligend") ตาม DNB SRU; (c) ชื่อ "Reichenauer Glossen" ในวรรณกรรมส่วนใหญ่ (Klein/Raupach) หมายถึง glosses ภาษา Romance ไม่ใช่ OHG — ต้องระวังการสับสนคำ.
6. ช่องทางยืนยัน Clm 14689 ถัดไป: Halm, Catalogus codicum latinorum Monacensis Tomi I pars ครอบคลุม Clm 10931-15120 (IA มี pars I=8101-10930, II=2501-5250, III=5251-8100 และ 15121-21313, IV=21406-27268 — ขาดช่วง 10931-15120); BSB Digitale Sammlungen viewer; Bergmann & Moulin-Fankhänel Bibliographie der ahd./asächs. Glossen Bd. 4 (München).
7. Smaragdus of Saint-Mihiel: ยืนยันได้เฉพาะว่าเป็น Carolingian commentator ใน volume OA "Carolingian Commentaries on the Apocalypse by Theodulf and Smaragdus" (2019, DOI 10.2307/j.ctvrs9116.7); ส่วน Expositio in Psalmos (edition CCCM) ยังไม่พบ record ยืนยันจากแหล่งที่ fetch ได้ — ยังไม่พบข้อมูลยืนยัน.
8. Remigius of Auxerre: ยืนยันผ่าน Ekman (fetched) ว่า material ที่สืบทอดในนาม Remigius เป็น source layer สำคัญของ Psalms-exegesis 12th c.; commentary ที่พิมพ์ใน PL 131 เป็น spurious attribution — เอกสารต้นสาย Carolingian จริงยังต้องตรวจ critical editions.

## 4. Remaining gaps

- Clm 14689: shelfmark + character (interlinear Latin-OHG? whole Psalter?) + dating ยังไม่ยืนยัน. Next: BSB Digitale Sammlungen; Halm Catalogus pars missing range; Bergmann bibliography; Grifoni 2017 (Wissembourg glossing practices, DOI 10.1484/m.usml-eb.5.115039) อาจมีบริบท Alemannic gloss networks.
- Carolingian glossed Psalter page-layout description จากต้นฉบับ (Gibson "Carolingian Glossed Psalters as Products of Classroom Revolutions") ยังไม่ fetch ได้ (paywalled).
- Smaragdus Expositio in Psalmos: edition/bibliographic anchor.
- Eadwine Psaster (Trinity Cambridge R.17.1) เป็น case study trilingual interlinear+marginal layout — Trinity catalogue endpoint 404/500 ทั้งสอง format, ยังไม่ได้ข้อมูล.
