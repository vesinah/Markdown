# Loop C07 Findings

Date: 2026-08-26
Phase: C (final-pass foraging). Topic: residual Thai/Lao glossing gaps from Phase-B loop B11.
Documents saved: 4 files in documents\.

## Phase-C note (closing the B11 residuals)

All four targets assigned to this loop were closed, two of them beyond target:

1. Poolrak thesis Thai title: VERIFIED. Official Thai-script title is นันโทปนันทสูตรคำหลวง : การวิเคราะห์ศิลปะการแปลและกลวิธีทางวรรณศิลป์ (parallel English: Nanthopananthasut Khamluang : an analysis of the art of translation and literary techniques), MA thesis, Chulalongkorn University, imprint 2555/2012, ก-ฐ, 318 แผ่น, Arts Library call number วพ. ภาษาไทย. Three independent confirmations agree verbatim: Chulalinet OPAC bib 2000246; CUIR handle 123456789/44834; Crossref DOI https://doi.org/10.58837/chula.the.2012.1725 (type dissertation, publisher Office of Academic Resources, Chula). Faculty page adds that the thesis won a Rachadapisek award in 2556. Full Thai and English abstracts harvested from the OPAC SUMMARY — source text identified as Pali Nandopanandavatthu by Buddhasiri (Ayutthaya period), and the fourth determinant of the translation strategy is named ขนบการแปลโดยพยัญชนะ (convention of literal Pali rendering) — direct terminological support for the kham-phi chapter.
2. The S2 lead Monks and the importance of holding Nissaya in Thailand today (2017): IDENTIFIED, with scope correction. It is the machine-translation of ภิกษุกับความสำคัญของการถือนิสสัยในสังคมไทยปัจจุบัน by พระมหาสัญญา ขนฺติธมฺโม (ตรีสวัสดิ์), พระมหาอดิเดช สติวโร (สุขวัฒนวดี), จริยาภรณ์ เจริญชีพ, วารสาร มจร พุทธศาสตร์ปริทรรศน์ 1(2): 24-37 (2017), ISSN 3027-7442 / 3027-7450, TCI-listed, https://so06.tci-thaijo.org/index.php/jmb/article/view/240124. Crucially it treats nissaya in the VINAYA sense (dependence of saddhiviharika on upajjhaya), NOT the translation genre — unusable for the kham-phi continuity claim (B11 Gap 1 remains closed negatively on that point), but citable for the terminology section documenting the contemporary Vinaya sense of นิสสัย.
3. Lao vohāra item level: CLOSED with 33 concrete records. DataCite API query titles.title:(vohan OR vohara) over prefix 10.57781 returned 33 DLLM/Lanna2 digitized items, each with DOI, collection id and PLMP microfilm code. Exemplars: Vohan boek pha net ໂວຫານເບີກພະເນຕ dllm_10454 code 06018510076_01 doi 10.57781/rmg5-9m79; Vohan pattimok dllm_10453 code 08060101001_03 doi 10.57781/ybse-bj89; Vohan singkhala sut lanna_887 doi 10.57781/9tfd-sr87 (Chiang Mai University Library co-holder). A dense run of vohans from one holding site (dllm_10434-10455 under codes 060185...) includes dllm_10455 = Phothipakkhinyatham / Vohan phothi — the same item whose legacy record B11 harvested from Wayback, closing that thread end-to-end.
4. One more Thai article on nissaya/kham-phi translation method: CLOSED. จุไรรัตน์ ลักษณะศิริ & ยรรยงค์ สิกขะฤทธิ์ (2020), สิลิษฐพจนคำสยาม ในนันโทปนันทสูตรคำหลวง : การศึกษากลวิธีการแปลแต่ง... วารสารรามคำแหง ฉบับมนุษยศาสตร์ 39(2): 35-56, TCI, CC BY-NC-ND, https://so05.tci-thaijo.org/index.php/huru/article/view/246923 — verbatim abstract harvested: four translation-adjustment strategies (การคงความ การเพิ่มความ การตัดความ การแปลงความ) and four compositional aims; its reference list adds a cluster of older Thai studies of the same manuscript plus the National Library witness (สมุดไทยขาว, BE 2275, no. 120).

## Queries executed

websearch (working all session):
1. Assanee Poolrak วิทยานิพนธ์ นนโทปนันทสูตร ขัมหลวง จุฬา — surfaced OPAC bib 2000246 + faculty page + thesis DOI page.
2. Exact-title search for the 2017 Nissaya paper — surfaced Exa mirror of the S2 record (authors only).
3. DLLM vohara/vohan catalogue shelfmark — surfaced Help/About/Glossary pages + Hundius-Wharton PDF + two ITR DOIs.
4. Author-name hunt Khantidhammo/Sativaro/Charoenship — affiliations via Exa person pages and legacy MCU OJS author index.
5. Final Thai-keyword probe (นิสสยะ ถือนิสสัย 2560) — surfaced the so06 jmb article PDF whose opening sentence matches the machine-translated abstract word-for-word; landing page fetch confirmed full record.

bash/API:
6. Crossref works?query.bibliographic=Monks and the importance... — no relevant hit (no DOI exists for it); confirms venue had to be found via ThaiJO directly.
7. Semantic Scholar API retry — 429 again (same wall as B11).
8. OpenAlex API works?search=exact title — zero results (record not indexed there).
9. Direct downloads: so05 huru PDF (returned OJS HTML shell — abstract-only harvest); laostudies.org Hundius-Wharton JLS PDF (670 KB, text-mined locally); so06 Jiabu McDaniel PDF (165 KB, 11 pp., fully mined); so06 jmb article PDF located via websearch (content matched, landing page fetched instead).
10. Crossref works/10.58837/chula.the.2012.1725 and /10.58837/chula.the.2019.1048 — both dissertation records verified (title string identical to OPAC).
11. DataCite API dois?query=titles.title:(vohan OR vohara)&page[size]=100 — 33 items parsed with ids/codes/manifests; single-record pull rmg5-9m79 gave Lao-script title and CC BY-NC 4.0 license.
12. webfetch car.chula.ac.th display7.php bib=2000246 — full OPAC record with dual-language abstracts; cuir handle page returns citation line + DOI to scripts.

## Table of sources

| Author | Title | Year | URL / locator | Substance |
|---|---|---|---|---|
| อัสนี พูลรักษ์ (Assanee Poolrak) | นันโทปนันทสูตรคำหลวง : การวิเคราะห์ศิลปะการแปลและกลวิธีทางวรรณศิลป์ = Nanthopananthasut Khamluang : an analysis of the art of translation and literary techniques (MA thesis, Chula) | 2555/2012 | http://www.car.chula.ac.th/display7.php?bib=2000246 ; handle http://cuir.car.chula.ac.th/handle/123456789/44834 ; DOI 10.58837/chula.the.2012.1725 | OFFICIAL THAI TITLE triple-confirmed; ก-ฐ, 318 แผ่น; dual abstracts; Katharina Reiss framework; source = Nandopanandavatthu of Buddhasiri; factor 4 = ขนบการแปลโดยพยัญชนะ |
| พระมหาสัญญา ขนฺติธมฺโม (ตรีสวัสดิ์), พระมหาอดิเดช สติวโร (สุขวัฒนวดี), จริยาภรณ์ เจริญชีพ | ภิกษุกับความสำคัญของการถือนิสสัยในสังคมไทยปัจจุบัน, วารสาร มจร พุทธศาสตร์ปริทรรศน์ 1(2): 24-37 | 2017 | https://so06.tci-thaijo.org/index.php/jmb/article/view/240124 | The real identity of the S2 lead; Vinaya-sense nissaya (upajjhaya/saddhiviharika dependence); TCI; ISSN 3027-7442/3027-7450; verbatim Thai abstract harvested; NOT usable for glossing-genre claims |
| จุไรรัตน์ ลักษณะศิริ, ยรรยงค์ สิกขะฤทธิ์ | สิลิษฐพจนคำสยาม ในนันโทปนันทสูตรคำหลวง..., วารสารรามคำแหง ฉบับมนุษยศาสตร์ 39(2): 35-56 | 2020 | https://so05.tci-thaijo.org/index.php/huru/article/view/246923 | Verbatim Thai abstract; 4 strategies (คง/เพิ่ม/ตัด/แปลงความ) x 4 aims; ref list yields National Library ms no. 120 BE 2275 + older Thai studies (Wimuktalop 2514; Keawkul 2546; Phatphadi 2521) |
| National Library of Laos; SBB zu Berlin \| CrossAsia (+ CMU Library) | 33 digitized vohāra items in DLLM/Lanna2 collections | digitized 2010; DOIs 2022 | DataCite API query titles.title:(vohan OR vohara), prefix 10.57781 | Item-level records: e.g., Vohan boek pha net dllm_10454 / PLMP 06018510076_01 / 10.57781/rmg5-9m79; Vohan pattimok dllm_10453 / 10.57781/ybse-bj89; Vohan singkhala sut lanna_887 / 10.57781/9tfd-sr87 |
| Harald Hundius, David Wharton | Not more than 12,000 words... (DLLM project report), Journal of Lao Studies 2(2) | 2011 | https://www.laostudies.org/system/files/subscription/JLS-v2-i2-Nov2011-hundius-wharton.pdf (PDF harvested) | Ancillary Terms option covers c. 35 title terms incl. śabda/sap, nissaya/nisai, vohara/vohan — catalogue-design documentation now at full-text level |
| Justin McDaniel | Manuscripts and Education in Northern Thailand and Laos (1569-1920), JIABU 1(1): 109-119 | issue label 2008, online 2019 | https://so06.tci-thaijo.org/index.php/Jiabu/article/view/201866 (full PDF harvested, 11 pp.) | Hundreds of nissaya/vohara/namasadda mss examined; voharas = sermon notes for lay sermon audiences vs nissaya/namasadda for monastic classes; whole-source-invoked/parts-taught principle |
| อัสนี พูลรักษ์ | PhD thesis สำนวนภาษาในวรรณคดีไทยที่สัมพันธ์กับสำนวนภาษาในวรรณคดีบาลีและสันสกฤต; + 2556 article จาก พระบาฬี สู่ สิลิษฐพจนคำสยาม... วารสารภาษาและวรรณคดีไทย 30(1): 1-29 | 2019; 2013 | DOI 10.58837/chula.the.2019.1048 ; CV page https://www.arts.chula.ac.th/thai/index.php/faculty/assanee/ | Author-lineage bonus; his own 2556 article on translating the same kham luang is a ready next-citation lead |

## Gaps closed vs remaining

Closed (all four loop targets):
- Poolrak Thai-script title: closed at official-record level (OPAC + CUIR + DOI + faculty award page).
- 2017 Monks/Nissaya lead: closed — authors, journal, pages, ISSN, URL fixed; scope correction recorded (Vinaya sense).
- Lao vohara item-level: closed — 33 DOI'd records with shelfmark-equivalent PLMP codes and IIIF manifests; B11 Wayback item re-identified as today's dllm_10455 sibling.
- Additional Thai article on translation method: closed — Laksanasiri & Sikkharit 2020 with verbatim abstract and reference-list mining.

Remaining (for future loops):
- Full texts behind walls: Jurairat/Yanyong 2020 body (OJS shell to scripts), McDaniel JIABU already complete though; MUSE/Brill bodies from B11 unchanged.
- MCU/Mahamakut curriculum-document proof that modern kham phi training derives from nissaya method (B11 Gap 1 core): still an open negative; the 2017 identification strengthens the case that Thai monastic academic writing uses nissaya mainly in the Vinaya sense, so the draft should keep Herngseng 2023 + McDaniel 2002 as the defensible citations and add Pathompong 2016 (cited in Herngseng) as a lead.
- Poolrak 2556 article (วารสารภาษาและวรรณคดีไทย 30(1)) contents: lead only.
- DLLM item images (human-download) not attempted.

Blocked sources (recorded honestly):
- iiif.crossasia.org / doi.org landing pages for 10.57781 items: Anubis JS challenge (all DataCite data obtained via api.datacite.org instead).
- Semantic Scholar API: HTTP 429 on retry (persistent across sessions).
- OpenAlex: exact-title search returns zero (record unindexed) — not a rate-limit issue this time.
- so05.tci-thaijo PDF endpoint: serves OJS HTML shell to scripted downloads (landing pages fine).
- cuir.car.chula.ac.th handle page: scripted fetch yields only a one-line citation (sufficient here since it carried the DOI).

## Files created this loop

- research-notes/loop_C07/findings.md (this file)
- research-notes/loop_C07/documents/[2012]-Poolrak-nanthopananthasut-thai-title-record.md
- research-notes/loop_C07/documents/[2017]-Khantidhammo-thuea-nissai-mcu-buddhist-studies.md
- research-notes/loop_C07/documents/[2020]-Laksanasiri-silithphot-kham-siam-huru.md
- research-notes/loop_C07/documents/n.d.-DLLM-vohan-datacite-item-inventory.md
