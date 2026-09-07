# Loop 03 — Old Irish Glosses (Würzburg, Milan, St. Gall)

วันที่สืบค้น: 2026-08-25
ผู้ดำเนินการ: Explorer Agent
หมายเหตุสำคัญ: เครื่องมือ websearch (ผู้ให้บริการ exa) ขัดข้อง/ติด rate limit 429 ต่อเนื่องช่วงลูปนี้
จึงเปลี่ยนกลยุทธ์เป็น webfetch + API (archive.org advancedsearch/metadata API, Crossref REST API) +
citation-mining — query ที่ "ใช้ได้" จึงหมายถึง query-string ที่ยิงต่อ API/เครื่องมือที่พร้อมใช้

## 1. Queries / API calls ที่ใช้ (7 รายการ)

1. websearch: "Würzburg glosses Pauline Epistles dating Old Irish earliest vernacular corpus Europe" (429 — ไม่สำเร็จ)
2. websearch: "Milan Codex Ambrosianus C301 inf Old Irish glosses dating" (429 — ไม่สำเร็จ)
3. websearch (ซ้ำหลายครั้งหลังรอ): "McCone Würzburg Milan glosses Middle Irish", "Würzburg glosses dating seventh century" (429 ทั้งหมด — ไม่สำเร็จ)
4. webfetch: https://www.stgallpriscian.ie/glosses (สำเร็จ)
5. webfetch: https://e-codices.unifr.ch/en/description/csg/0904/ (สำเร็จ — Hofman description เต็ม)
6. archive.org APIs:
   - https://archive.org/advancedsearch.php?q=title%3A%28thesaurus+palaeohibernicus%29...output=json (สำเร็จ, numFound 5)
   - https://archive.org/metadata/thesauruspalaeo02stok (สำเร็จ)
7. Crossref API:
   - https://api.crossref.org/works?query.bibliographic=W%C3%BCrzburg%20Milan%20glosses%20Middle%20Irish... (สำเร็จ)
   - https://api.crossref.org/works?query.bibliographic=McCone%20W%C3%BCrzburg%20Milan%20glosses... (สำเร็จ)
   - https://api.crossref.org/works?query.bibliographic=Milan%20glosses%20Psalter%20commentary%20Irish... (สำเร็จ)
8. webfetch citation-mining: Wikipedia "Old Irish" (ใช้หา keyword เท่านั้น ไม่ใช้เป็นแหล่งอ้างอิง); DOI landings 10.1553/0x0001fb6e และ 10.1093/oso/9780198747307.003.0008 (สำเร็จ)

## 2. ตารางแหล่งที่พบ

| ผู้แต่ง | ชื่อเรื่อง | ปี | URL | สาระสำคัญ |
|---|---|---|---|---|
| R. Hofman, P. Moran, B. Bauer | St Gall Priscian Glosses digital edition v2.1 | 2023 | https://www.stgallpriscian.ie/glosses | Cod. Sang. 904 = Priscian Ars grammatica; MS written AD 850–1 probably in Ireland; >9,400 interlinear+marginal glosses + ~4,000 construe marks; >1/3 Old Irish; Thes. Pal. vol. 2 pp. 49–224; Hofman 1996 ed. first half; digital edition = first complete transcription of all glosses |
| R. Hofman (via e-codices) | The Sankt Gall Priscian Commentary Part 1 vol. 1 (description of Cod. Sang. 904) | 1996 (page current) | https://e-codices.unifr.ch/en/description/csg/0904/ | 9,412 glosses, ~3,478 Old Irish (36.95%); scribes Máil Patricc ("hucusque calvus patricii depinxit"), second scribe (+Finguine, Donngus, amicus Donnguso); glossators A & B + later hands C–L; dating argument → year 845; localization Ireland, likely Nendrum/Bangor (Co. Down); Milan+Würzburg glosses "(earlier)... certainly written in Ireland" per Thurneysen Gramm. §33; McCone (1985:96–7) northern locale for written OI standard |
| W. Stokes, J. Strachan | Thesaurus Palaeohibernicus: a collection of old-Irish glosses, scholia, prose and verse, 2 vols (Cambridge UP) | 1901–1910 | Vol.1: https://archive.org/details/thesauruspalaeo01stok ; Vol.2: https://archive.org/details/thesauruspalaeo02stok | v.1 Biblical glosses and scholia; v.2 Non-biblical glosses and scholia: Old Irish prose, names, inscriptions, verse, indexes; full PDF + OCR text downloadable free on archive.org (metadata ยืนยันผ่าน API) |
| J. Strachan | Some Notes on the Irish Glosses of Würzburg and St. Gall (ZcP 3) | 1901 | https://doi.org/10.1515/zcph.1901.3.1.55 | การศึกษาเปรียบเทียบ Würzburg/St Gall glosses ยุคแรก (Crossref record) |
| S. Kavanagh (ed. D.S. Wodtko) | A Lexicon of the Old Irish Glosses in the Würzburg Manuscript of the Epistles of St. Paul (ÖAW) | 2001 | https://doi.org/10.1553/0x0001fb6e | ยืนยันชื่อเรื่องว่า Würzburg manuscript = glosses on the Epistles of St Paul; lexicon มาตรฐานของ corpus |
| C.M. DiGirolamo | Word order and information structure in the Würzburg Glosses (OUP/Oxford Scholarship Online chapter) | 2018 | https://doi.org/10.1093/oso/9780198747307.003.0008 | งานวิจัยภาษาศาสตร์ปัจจุบันบน Würzburg corpus |
| O. Bergin | Notes on the Würzburg Glosses (ZcP 17) | 1928 | https://doi.org/10.1515/zcph.1928.17.1.223 | งานคลาสสิกบน Würzburg glosses |
| M. McKenna | On pecthad 'sinner' in the Würzburg Glosses (ZcP 44) | 1991 | https://doi.org/10.1515/zcph.1991.44.1.79 | lexical studies |
| P.-Y. Lambert | The expression of "sense, meaning, signification" in the Old Irish glosses, particularly in the Milan and Saint Gall glosses (SIHOLS 125) | 2016 | https://doi.org/10.1075/sihols.125.04lam | ศึกษา Milan+St Gall corpora ร่วมกันเชิง metalanguage |
| P. Moran (Univ. of Galway project page) | St Gall Priscian Glosses (project) | n.d. (IRCHSS 2009–2011) | https://www.universityofgalway.ie/classics/research/projects/priscian/ | 4 codices by Irishmen s. ix (Paris, Karlsruhe, Leiden, St Gall) with interlinear glosses (>9,400 in St Gall); >1/3 Old Irish = one of earliest and most important sources for Irish; study of glossators' methods, Greek knowledge, language interaction |
| P. Moran | Language Interaction in the St Gall Priscian Glosses (Peritia 21, Brepols) | 2015 (online) | https://www.brepolsonline.net/content/journals/10.1484/J.PERIT.5.108317 (abstract; fetch 403) | c. 3,200 symbol glosses; >9,400 verbal glosses of which >3,400 contain Old Irish; code-switching Irish/Latin/Greek analysis |
| P. Moran | Latin Grammar Crossing Multilingual Zones: St Gall, Stiftsbibliothek, 904 (De Gruyter chapter) | 2022 | https://doi.org/10.1515/9783110776492-003 | Paris lat. 10290 Breton scribe copied 73 OIr glosses he did not understand; Sedulius Scottus circle poem to Bishop Gunther (850–863); after arrival in OHG-speaking region the book fell out of use — no glosses after s. ix |
| DIAS | Irish Script on Screen (ISOS) | est. 1999 | https://www.isos.dias.ie/ | largest digital repository of Irish manuscripts, >500 digitized (collection list fetched — ไม่พบ Würzburg collection ในหน้า categories ณ วันที่ค้น) |
| (De Gruyter monograph page) | Glossing the Psalms... | 2017 | https://www.degruyterbrill.com/document/doi/10.1515/9783110501865/html?lang=en | ระบุ "the Old Irish Milan Glosses" ในบรรดา 13 glossed psalter manuscripts ที่ศึกษา — ยืนยันความสัมพันธ์ Milan Glosses–Psalm commentary (ชื่อผู้แต่งยังต้อง verify) |

## 3. ข้อค้นพบเชิงวิชาการสำคัญ (พร้อมแหล่ง)

1. **St Gall Priscian (Cod. Sang. 904)**: เขียน AD 850–1 (arguably 845) ใน Ireland; 9,412 glosses (~36.95% Old Irish ≈ 3,478) + ~3,000–4,000 construe marks; เป็นหนึ่งใน corpus สำคัญที่สุดของภาษาไอริชโบราณ (https://e-codices.unifr.ch/en/description/csg/0904/ ; https://www.stgallpriscian.ie/glosses)
2. **Scribes/hands**: main text โดย 2 scribes — คนแรกระบุชื่อผ่านคำสรรเสริญ "hucusque calvus patricii depinxit" (Máil Patricc), คนที่สองเดาว่า Coirbbre(?); ผู้ช่วย Finguine, Donngus; glossators A และ B เป็นหลัก + มือหลัง (C–L, Z) ทั้งหมด s. ix; glossator A และเพื่อนนักบวชมาจาก Inis Maddoc ตาม margin note (URL e-codices)
3. **Dating evidence**: marginal entries เทศกาล Diarmait ua hÁedo Róin (21 June), Mochaoi (23 June), "satharnn samchasc" (Summer Easter 28 June) — Summer Easter ตรง 28 June ใน ค.ศ. 845 และ 856 เท่านั้นในศตวรรษที่ 9 → ข้อเสนอ 845 (Güterbock 1895 ยืนยันซ้ำโดย Hofman) (URL e-codices)
4. **Localization**: palaeographers (Traube, Bischoff, Brown) ระบุ Ireland; Nendrum/Bangor (Co. Down) เป็นตัวเลือกหลัก; Maíl Gaimrid (M.G.) ผู้ถูก quote ทั้งใน Sg. และ Ml. น่าเป็น abbot แห่ง Bangor ที่ถึงแก่กรรม 839 ตาม Annals of Ulster; McCone (1985: 96–7) เสนอ "northern locale for development of a written Old Irish standard" (URL e-codices)
5. **Würzburg glosses**: gloss บน Pauline Epistles (ยืนยันผ่านชื่อเรื่อง Lexicon ของ Kavanagh/Wodtko, ÖAW 2001: https://doi.org/10.1553/0x0001fb6e); Thurneysen (Gramm. §33 ตามที่ Hofman อ้าง) ระบุว่า Würzburg+Milan glosses "certainly written in Ireland" และเก่ากว่า St Gall; มีงานศึกษาตั้งแต่ Strachan 1901 (https://doi.org/10.1515/zcph.1901.3.1.55), Bergin 1928, McKenna 1991 ถึง DiGirolamo 2018
   - วันที่แน่ชัดของ Würzburg glosses (เช่น ca. 700–750) — ยังไม่พบข้อมูลยืนยันจากแหล่งที่ fetch ได้ในลูปนี้ ต้อง Phase B
6. **Milan glosses**: บน commentary ของ Psalms (Latin commentary); ยืนยันโดย monograph "Glossing the Psalms" ที่ระบุ "the Old Irish Milan Glosses" ใน psalter manuscripts 13 เล่ม (https://www.degruyterbrill.com/document/doi/10.1515/9783110501865/html?lang=en) + Hofman อ้าง column numbers แบบ Ml. 46b12, 85b11 และ Brown 1993 เสนอ "written early in the 9th century in Ireland, perhaps in Bangor"; Lambert 2016 ศึกษา Milan+St Gall ร่วมกัน (https://doi.org/10.1075/sihols.125.04lam)
   - จำนวน glosses รวมของ Milan corpus — ยังไม่พบข้อมูลยืนยันในลูปนี้ (Phase B)
7. **คุณค่าในฐานะ earliest substantial vernacular corpus**: Galway project page เรียก Old Irish glosses ใน 4 codices ว่า "one of our earliest and most important sources for the early history of the Irish language"; stgallpriscian.ie เรียก St Gall glosses "one of our most important corpora for that phase of the Irish language"; การเรียกว่า "earliest substantial corpus of any European vernacular" แบบเป๊ะ ๆ — ยังไม่พบข้อความที่ตรงตัวจากแหล่งที่ fetch ได้ (Phase B ควรหาจาก Thurneysen/McCone print sources)
8. **โครงการดิจิทัล**: St Gall Priscian Glosses digital edition (stgallpriscian.ie, complete transcription ทุก gloss + links images); ISOS/DIAS (>500 MSS digitized); Thesaurus Palaeohibernicus เต็มสองเล่ม scan/PDF/OCR ฟรีบน archive.org (identifiers ยืนยันผ่าน API); CODECS (robot-block ณ วันค้น); BStK Online ฝั่ง OHG เทียบเคียงได้จาก Loop 02
9. **Transmission**: St Gall codex ไปถึง Continent ในวง Sedulius Scottus 855–863 (poem to Archbishop Gunther of Cologne), ถึง St Gall หลัง 888; เมื่ออยู่ในแถบ OHG-speaking นักอ่านไม่เข้าใจ OIr glosses → หยุดใช้ ไม่มี gloss หลัง s. ix (URLs: e-codices; De Gruyter chapter 10.1515/9783110776492-003)

## 4. ช่องว่างที่ยังต้องค้นต่อ (Phase B)

- วันที่แน่ชัดของ Würzburg glosses (Thurneysen's dating ca. 700–750) และ Milan glosses — ต้องอ้างจาก print/scan ของ Thurneysen Grammar หรืองาน review ล่าสุด
- จำนวน glosses รวมของ Milan (Ambrosianus C 301 inf.) และ Würzburg (M.p.th.f68) — ยังไม่พบข้อมูลยืนยัน
- McCone Ériu 36 (1985) bibliographic record เต็ม — Crossref ไม่มี DOI; ต้องเข้าถึง JSTOR/DIAS print
- ISOS ไม่แสดง Würzburg collection ณ วันค้น — ต้องตรวจ Ambrosiana/Würzburg UB digitization โดยตรง
- ชื่อผู้แต่ง monograph "Glossing the Psalms" (De Gruyter 2017) — verify ก่อน cite
