# Loop 18 Findings — Lanna nissaya and tham-script manuscript traditions: Pali-Lanna glossed palm leaves

Date: 2026-08-25
Loop: 18 of project interlinear_gloss_18ch
Method note: Discovery via websearch (English + Thai) plus bash probes of legacy DLNTM domains and a pypdf extraction of the Iijima PDF. Full texts fetched for Brill/Manusya 26.1, CrossAsia DLNTM About page, Minpaku SES74_002.pdf; abstract-level harvests for McDaniel 2002 and ThaiJO Dhammadhara article.

## Queries executed

1. websearch: McDaniel "Gathering Leaves and Lifting Words" Lanna manuscripts nissaya glosses
2. websearch: tua tham script Lanna palm leaf manuscripts nissaya Pali vernacular glosses
3. websearch: dlntm.org Digital Library of Northern Thai Manuscripts dlntm status
4. websearch: Iijima Akiko "cultural region of Tham script" Minpaku 2009 preliminary notes
5. websearch: Harald Hundius Lanna manuscript catalogue microfilm Chiang Mai Social Research Institute
6. websearch: McDaniel nissaya namasadda vohara gloss Pali vernacular typology manuscripts Laos Thailand
7. websearch: "Khur-Yearn" OR "Khun Yurn" Shan Buddhaghosa Dhammapada commentary Oxford thesis
8. websearch: นิสสยะ ล้านนา ใบลาน คัมภีร์ อักษรธรรมล้านนา วิจัย
9. websearch: Peter Skilling Lanna northern Thailand Pali literature tham script Fragile Palm Leaves
10. bash Invoke-WebRequest status probes: http://dlntm.org (DNS fail), https://dlntm.org (DNS fail), http(s)://www.lannamanuscripts.net/en (200 -> redirect to digital.crossasia.org)
11. webfetch: brill.com Manusya 26.1 article XML (full text OK); digital.crossasia.org DLNTM About (full text OK); minpaku PDF (406 -> bypassed by downloading via PowerShell + pypdf extraction, 19 pp.); manusya.journals.chula.ac.th McDaniel PDF (response >5MB, failed)

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| Akiko Iijima | Preliminary Notes on "the Cultural Region of Tham Script Manuscripts" (Senri Ethnological Studies 74: 15-32) | 2009 | https://minpaku.repo.nii.ac.jp/record/2582/files/SES74_002.pdf | FULL TEXT harvested. Tham script from Mon ancestor, vernacular use by 1465 at latest; spread to Laos, Isan, Shan State, Sipsongpanna; defines "cultural region of Tham script manuscripts" against polity-boundary mapping; Hsenwi (N. Shan State) Yuan Buddhism + tham until early 20th c.; diffusion via Tilokarat-era Wat Pa Daeng itinerant monks |
| Ven. Pannabhoga Herngseng | Burmese Nissaya Literature: A Mainstream Monastic Education Learning Method... (Manusya 26.1, DOI 10.1163/26659077-25010027) | 2023 | https://brill.com/view/journals/mnya/26/1/article-p1_004.xml | FULL TEXT harvested (OA). Quotes McDaniel 2008:131 verbatim on gloss densities: vohara cites 12-25-word passages; nissaya cites 4-10 words before glossing; namasadda word-for-word; genres overlap in Thailand/Laos unlike Burma; von Hinüber: difference vohara/nissaya unclear; Thai nissaya = gambhi-nisai; seven Burmese interpretive methods (Karunika 2008) |
| Justin McDaniel | The Curricular Canon in Northern Thailand and Laos (Manusya special issue) | 2002 | https://digital.car.chula.ac.th/manusya/vol5/iss4/3/ | Abstract verified: nissaya = idiosyncratic vernacular notes used 16th-early 20th c.; PDF exists but not captured (>5 MB) |
| Justin McDaniel | Invoking the Source: Nissaya Manuscripts, Pedagogy, and Sermon-Making in Northern Thailand and Laos (Harvard PhD diss.) | 2003 | https://buddhism.lib.ntu.edu.tw/en/search/search_detail.jsp?seq=127314 | Abstract: nissaya are among oldest bilingual Buddhist texts in Burma/N-Thailand/Laos; "instead of merely translations ... idiosyncratic vernacular lecture notes" |
| Justin McDaniel | Gathering Leaves and Lifting Words: Histories of Buddhist Monastic Education in Laos and Thailand (UW Press) | 2008 | https://uwapress.uw.edu/book/9780295988498/gathering-leaves-and-lifting-words/ | Core book; Harry Benda Prize; "languaging", yok sap (lifting words), curricula built from palm-leaf gathering; review by Craig Reynolds at https://www.newmandala.org/book-review/review-of-mcdaniel defines namasadda (word-book/glossary w/ marginalia), nissaya (supports), vohara (lift words for sermons) |
| DLNTM project (Hundius/Wharton/McDaniel), CrossAsia-SBB | Digital Library of Northern Thai Manuscripts — About page | 2013- | https://digital.crossasia.org/digital-library-of-northern-thai-manuscripts-about?lang=en | FULL PAGE harvested. Four collections totalling ~6,137 mss / ~233,752 images: PNTMP 3,914 mss; DLNTM direct colour digitisation 1,051 mss in 39 temples; DELMN (Hundius survey 1971-74) 991 mss; Hundius Handwritten Collection 181 mss; history incl. oldest dated tham ms CE 1471 Wat Lai Hin |
| CrossAsia DLLM/DLNTM resources pages | Languages and Scripts notes | 2022-2026 | https://digital.crossasia.org/digital-library-of-lao-manuscripts-resources-script/?lang=en ; https://digital.crossasia.org/digital-library-of-northern-thai-manuscripts-resources?lang=en | Tham script domain definition (Laos, Upper North + NE Thailand, NE Myanmar, SW Yunnan); oldest tham document = gold-folio bilingual inscription Sukhothai CE 1376; 33-consonant inventory matched to Pali; independent vowels; ligatures; Lan Na/Lao/Lue/Khuen variants mutually readable |
| EFEO Chiang Mai | Lanna Manuscripts database (Manuscrits du Lanna) + bibliography | 2005- | https://lanna-manuscripts.efeo.fr/ | 18,000+ pages digitised, tamnan genre focus; sample record shows metadata schema (scribe สามเณรปั้น, CS dates, landip covers, foliation); bibliography lists von Hinüber colophon/scribal-workshop series and Hundius 1990 |
| Harald Hundius | The Colophons of Thirty Pali Manuscripts from Northern Thailand (JPTS 14: 1-173) | 1990 | listed at https://lanna-manuscripts.efeo.fr/node/58 | Standard reference for Lanna colophon culture (not full-text accessible this loop) |
| Oskar von Hinüber | On Some Colophons of Old Lanna Pali Manuscripts (Proc. IVth ICTS, Kunming IV: 56-77); Chips from Buddhist Workshops (JPTS 22: 35-57); Die Pali-Handschriften des Klosters Lai Hin bei Lampang | 1990-2013 | listed at EFEO node/58 and CrossAsia resources | Scribal workshops, colophons, Khmer traces in N-Thai Pali mss; Wat Lai Hin monastery catalogue |
| Peter Skilling & Santi Pakdeekham | Pali Literature Transmitted in Central Siam (vol 1, 2002); Pali and Vernacular Literature Transmitted in Central and Northern Siam (vol 2, 2004) — Fragile Palm Leaves Foundation | 2002/2004 | https://echo.mpiwg-berlin.mpg.de/content/buddhism/fplf ; https://www.bdrc.io/member/1177 ; https://khyentsefoundation.org/kf-projects/fragile-palm-leaves-foundation-fpl | FPL founded 1994 (Skilling + Gene Smith); ~16,000 bundles Pali/Burmese/Mon/Shan/Khun/Lue/Thai; BDRC digitisation since 2016-17; catalogs cover N-Siam transmissions |
| Jotika Khur-Yearn | Poetic Dhamma (Satipatthana) thesis, SOAS repository file 400499 | n.d. (thesis) | https://soas-repository.worktribe.com/OutputFile/400499 | Shan lik long manuscript tradition analysed against Mahasatipatthana Sutta, Buddhaghosa's commentary, Cakkinda's 19th-c. Burmese commentary — Shan bitext/gloss tradition evidence |
| B.J. Terwiel (w/ Chaichuen Khamdaengyodtai) | Shan Manuscripts Part I (VOHD 39,1, Steiner) | 2003 | cited in CrossAsia resources + EFEO bibliography | Catalogue of Shan manuscripts incl. DLNTM-related Shan holdings |
| Phra Amarin Santidhammo, Walailaporn Sucharitthammakul, Pongsiri Yotsa | Kawila-era palm leaves: colophon case study, Wat Duang Di (Dhammadhara 9(2): 2-37) | 2023 | https://so01.tci-thaijo.org/index.php/dhammadhara/article/view/266388 | ThaiJO article; 4 colophon patterns (time/place/participants/aspiration); team incision projects led by ranked monks; merit-making mass copying; dhammaraja image-building under Kawila |
| Silpakorn University research repository | อักษรธรรมลานนา (letterforms and orthography from inscriptions and palm leaves B.E. 1919-2425) | n.d. | https://sure.su.ac.th/xmlui/handle/123456789/1861 | Thai-language study of tham letterforms/orthography CE 1376-1882 range |
| Sirui Dao | Typing the Minority Tai Languages in the Internet World: Tai Tham Keyboard (JSS 110.1) | 2022 | https://so06.tci-thaijo.org/index.php/pub_jss/article/view/255846 | Unicode Tai Tham (2009) + monk-released keyboard (2013, Chiang Tung); transborder Tai use Myanmar/Thailand/China; references Grabowsky 2011 "Dhamma Script Cultural Domain as a Contested Space" JRIT 3:98-112 |
| Daniel Veidlinger | Spreading the Dhamma: Writing, Orality, and Textual Transmission in Buddhist Northern Thailand (U Hawai'i Press) | 2006 | cited in CrossAsia resources / EFEO bibliography | Manuscript find-spots delineate Lan Na's borders; writing-vs-orality framework |
| Silpsupa Jaengsawang | Manuscripts at Funerals chapter (Ca' Foscari repository) | 2022- | https://iris.unive.it/bitstream/10278/5102311/1/Manuscripts%20at%20Funerals.pdf | Samut khoi (mulberry-paper folding books) produced in pothi shape when palm leaf grew scarce; anisong funeral manuscripts in Tham Lan Na script; inventory of 8 manuscript collections |

## Key findings (with URLs)

1. DLNTM has moved hosts; old domain dead. dlntm.org no longer resolves (DNS failure verified 2026-08-25 via PowerShell probe). lannamanuscripts.net still returns HTTP 200 but redirects to Staatsbibliothek zu Berlin's CrossAsia platform: https://digital.crossasia.org/digital-library-of-northern-thai-manuscripts/?lang=en with search at https://iiif.crossasia.org/s/lanna (Anubis bot-challenge blocks automated clients; browsers fine).
2. Scale of the digital corpus: DLNTM aggregates four collections — PNTMP microfilm (3,914 mss / 159,564 images), direct temple digitisation (1,051 mss / 39,547 colour images across 39 temples, 2013-2017), DELMN (991 mss / 13,419 images), Hundius Handwritten Collection (181 mss / 21,222 images) — all CC BY-NC 4.0: https://digital.crossasia.org/digital-library-of-northern-thai-manuscripts-about?lang=en
3. McDaniel typology with citable gloss densities (via Herngseng 2023 quoting McDaniel 2008:131): namasadda and nissaya = close word-for-word glosses; vohara cites 12-25-word Pali passages with extensive creative vernacular commentary; nissaya typically cites 4-10 words before glossing. Genres overlap in style/use in Thailand-Laos (unlike Burma), and von Hinüber already found the vohara/nissaya boundary unclear: https://brill.com/view/journals/mnya/26/1/article-p1_004.xml
4. Nissaya function, not translation: McDaniel's dissertation/book line — nissaya are "idiosyncratic vernacular lecture notes" serving sermon preparation ("lifting words", yok sap) within Becker-style "languaging"; Penn Museum holds digitised exemplars: a late-18th-c. Lanna nissaya (Penn Museum 51-9-4, palm leaf, red lacquered edges) and a 1740s Nan-province vohara (51-9-2): https://find.library.upenn.edu/catalog/9963327623503681 ; https://find.library.upenn.edu/catalog/9963326403503681
5. Script family and dating anchors: tham evolved from Mon script of Haripunjaya (13th c.); oldest dated document in tham = gold-folio bilingual inscription from Sukhothai, CE 1376; adapted to vernaculars by the 15th c. (probably Chiang Mai); oldest dated tham manuscript = monolingual Pali Timsati nipata (Jataka-atthakatha-vannana), CS 833/CE 1471, Wat Lai Hin, Lampang, images online at http://lannamanuscripts.net/en/manuscripts/3669 (redirects into CrossAsia): https://digital.crossasia.org/digital-library-of-lao-manuscripts-resources-script/?lang=en
6. Materials beyond palm leaf: khoi/mulberry-paper folding books (samut khoi) were produced in pothi format imitating palm leaf once palm became scarce; funeral anisong mss survive in both supports, Tham Lan Na script: https://iris.unive.it/bitstream/10278/5102311/1/Manuscripts%20at%20Funerals.pdf ; Lanna scripture chests (ho tham / heep tham) documented in Arts Asiatiques 69 (2014) per EFEO bibliography.
7. Colophon culture triangulated from three directions: Hundius JPTS 14 (1990) thirty N-Thai Pali colophons; von Hinüber's colophon/workshop series (1990-2013); and Thai-language Wat Duang Di study finding four stable colophon patterns (time, place incl. Wat Suan Dok, participants, aspiration + humility formulae) in Kawila-era (CE 1800-1815) tham-script palm leaves: https://so01.tci-thaijo.org/index.php/dhammadhara/article/view/266388
8. Shan/Tai-Yunnan connection: Iijima 2009 (open access, full text harvested) frames a transnational "cultural region of Tham script manuscripts" spanning N-Thailand, Laos, Shan State and Sipsongpanna, with Yuan Buddhism + tham attested in Hsenwi into the early 20th c.; DLNTM credits Chaichuen Khamhaengyodtai for cataloguing Shan manuscripts, Terwiel 2003 catalogues Shan holdings, and Khur-Yearn's SOAS thesis analyses Shan lik long Satipatthana bitexts: https://minpaku.repo.nii.ac.jp/record/2582/files/SES74_002.pdf ; https://soas-repository.worktribe.com/OutputFile/400499 ; cf. Grabowsky 2011 "The Dhamma Script Cultural Domain as a Contested Space in the Tai-Lao World" (JRIT 3:98-112, referenced in Dao 2022 JSS: https://so06.tci-thaijo.org/index.php/pub_jss/article/view/255846)
9. Scholarly infrastructure: Hundius lineage = DELMN survey 1971-74 (DFG) -> SRI CMU microfilm project (4,000+ mss, secular genres; Sommai Premchit 1986 catalogue; online catalogue linked from EFEO: http://www.sri.cmu.ac.th/~elanna/Microfilm/index/index.html) -> PNTMP 1987-91 (400+ rolls incl. entire Wat Sung Men library >1,700 mss) -> DLNTM 2013-; Skilling's Fragile Palm Leaves Foundation (est. 1994) holds ~16,000 bundles with BDRC digitisation ongoing: https://khyentsefoundation.org/kf-projects/fragile-palm-leaves-foundation-fpl
10. Thai-language scholarship is active and accessible on ThaiJO/SU repositories: Dhammadhara colophon study (above); Silpakorn repository study of tham letterforms B.E. 1919-2425 from inscriptions + palm leaves (https://sure.su.ac.th/xmlui/handle/123456789/1861); CMRU Arts and Culture Institute publishes multi-volume inventories of tham-script palm leaves and folding books incl. Direk Injan's "Palm-leaf manuscripts in the digital world" (https://www.culture.cmru.ac.th/web/books/รายชื่อคัมภีร์ใบลานและ-2).

## Remaining gaps

1. No quantified count of surviving nissaya/vohara/namasadda manuscripts inside DLNTM or SRI collections (catalogues index titles, not genre density); would require targeted searches in the IIIF interface or PNTMP datasheets.
2. McDaniel 2002 full PDF not yet harvested (>5 MB fetch failure); retry with ranged download or alternate mirror for direct quotations.
3. Khur-Yearn bibliographic details incomplete this loop (thesis title/date on the SOAS worktribe file unverified beyond filename and excerpt; his Oxford DPhil year not confirmed).
4. Hundius 1990 JPTS colophon article and von Hinüber 2013 Wat Lai Hin monograph not accessible online (print/library only).
5. SRI elanna online catalogue (sri.cmu.ac.th/~elanna) liveness not probed this session.
6. Thai term ตำรับธรรม (tamrap tham) as a genre label did not surface in academic hits this loop — only generic uses; needs dedicated Thai-source loop.
7. EFEO attribution of the 2014 Arts Asiatiques ho tham article was truncated in harvest (author name cut off in listing); verify before citing author.

## Blocked / dead sources recorded

- dlntm.org: DNS does not resolve (dead domain).
- iiif.crossasia.org/s/lanna: Anubis anti-bot challenge returns challenge page to automated fetchers.
- manusya.journals.chula.ac.th McDaniel 2002 PDF: HTTP response exceeded fetch limit (not blocked, just oversized).
- minpaku.repo.nii.ac.jp PDF endpoint: returned HTTP 406 to webfetch but was downloadable via PowerShell user-agent; extracted with pypdf.
- Wikipedia/Wikidata appeared in results (Tai Tham script articles) and were used for keyword discovery only, never as cited sources.

## Files created this loop

- research-notes/loop_18/findings.md (this file)
- research-notes/loop_18/documents/2009-Iijima-tham-script-cultural-region.md
- research-notes/loop_18/documents/2023-Herngseng-burmese-nissaya-typology.md
- research-notes/loop_18/documents/2016-Wharton-dlntm-crossasia-about.md
- research-notes/loop_18/documents/2002-McDaniel-curricular-canon.md
- research-notes/loop_18/documents/2023-Santidhammo-wat-duang-di-colophons.md
