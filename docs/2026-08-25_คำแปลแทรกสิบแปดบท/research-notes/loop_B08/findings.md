# Loop B08 Findings

Date: 2026-08-26
Phase: B (deep-dive foraging). Topic: Balinese maarti scholarship in depth - closing gaps from Phase A Loop 15.
Documents saved: 7 files in documents\ (Rubinstein citation/monograph; Creese 2004 verification; Pusdok maarti corpus cards; Ganchrow pepaosan post; Kamiishi Wacana record; Ricci state-of-field; Sudirga pasantian metadata record).

## Phase-B note (closing Loop 15 gaps; Wikimedia disclaimer obligations)

Per the Unbiased Agent note carried from Loop 15: all Wikisource/Wikidata-derived data points on Kekawin Bharatayuda Maarti (colophon saka 1814 = 1892; scribe Nengah Serangan; 327+96 leaves at Balai Bahasa Provinsi Bali) remain FINDING AIDS ONLY. This loop attempted the mandated independent re-verification and could NOT complete it: the Citrawati & Putra 2024 full text is paywalled/blocked (abstract only), no OA repository copy exists (OpenAIRE/Semantic Scholar checked), no online Balai Bahasa or Gedong Kirtya catalogue could be reached. Those three specific claims must therefore still be written as "catalogued by WikiLontar 2021" with explicit attribution to the Wikisource catalogue page - or better, held back until the article full text can be obtained. What this loop DID verify institutionally: a second, distinct Bharatayuddha maarti manuscript at Pusdok Dinas Kebudayaan Provinsi Bali (172 leaves per its own catalog card, imaged in the public scan), plus seven more maarti copies card-documented in the same collection.

## Queries executed

Web/API operations (search API rate-limited all session; work done via APIs and direct fetches):
1. Crossref author+bibliographic queries: Helen Creese (20 hits), Raechelle Rubinstein (20), Kamiishi (none relevant), Citrawati (none relevant), pasantian kakawin (12).
2. Crossref DOI lookups: 10.4324/9781315698083 (Women of the Kakawin World); 10.1080/13614568.2024.2345182 (Citrawati-Putra); 10.24843/jkb.2024.v14.i02.p03 (Sudirga et al.); 10.1163/22134379-90003596 (van der Meij 2011); 10.1163/9789004658523 (Parthayana).
3. Brill: Creese 1999 OA PDF re-downloaded + pypdf extraction (16 Rubinstein hits -> exact 1993 citation); Rubinstein monograph landing page fetched (title/23352); van der Meij 2011 PDF blocked.
4. OpenLibrary search API: Women of the Kakawin World (first_publish_year 2004); Helen Creese works list (no "In Search of Language").
5. Semantic Scholar Graph API: Citrawati & Putra 2024 abstract obtained.
6. OpenAIRE API: no repository copy of Citrawati & Putra 2024.
7. archive.org advancedsearch (q=maarti): 9 Balinese Digital Library items identified; metadata API + djvu.txt OCR downloaded for all 10 incl. loop_15's Ariwangsa item; catalog cards transcribed.
8. scholarhub.ui.ac.id: Wacana Vol 26 No 3 TOC + Kamiishi article landing page fetched in full (abstract + references).
9. Medium (Textual Microcosms profile + two posts) fetched in full: Ganchrow June 2025 pepaosan post; Ricci October 2025 state-of-field post.
10. DOI redirects resolved for Rubinstein monograph, Sudirga et al., van der Meij 2011.
11. DuckDuckGo HTML endpoint (fallback after websearch 429s): 2 usable queries before throttling; Bing unusable (junk results).

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| R. Rubinstein | Pepeosan; Challenges and change (in Schaareman ed., Balinese music in context, Forum Ethnomusicologicum 4) | 1993 | citation via Creese 1999 bibliography p.95 | THE mabasan study Creese footnotes; venue now pinned exactly |
| R. Rubinstein | Beyond the Realm of the Senses; The Balinese Ritual of Kekawin Composition (KITLV Verhandelingen 181) | 2000 | https://brill.com/view/title/23352 ; DOI 10.1163/9789004487321 | Monograph verified vs publisher page: 240pp, ToC, ISBNs, e-book 2022; kekawin as religious literacy/literary yoga |
| H. Creese | Women of the Kakawin World (M.E. Sharpe 2004; Routledge reissue 2015) | 2004 | DOI 10.4324/9781315698083 ; https://openlibrary.org/search.json?q=Women+of+the+Kakawin+World | The "2004 book" confirmed twice independently; content not accessible |
| Pusdok Dinas Kebudayaan Bali (cards) | 9 maarti scans, Balinese Digital Library (archive.org collection Bali) | ms; scans 2011 | e.g. https://archive.org/details/bharata-yuddha-maarti , /arjuna-wiwaha-maarti , /ramayana-maarti , /nitisara-maarti , /kakawin-smara-dahana-maarti | Institutional catalog-card data: dims, leaf counts, provenance (Gst.Pt. Djelantik Singaraja; Tapem Klungkung; one ex-Gedong Kirtya) |
| O. Ganchrow | Commenting Identity: YouTube Comments on a Bhagavad Gita Pepaosan Performance | 2025 | https://medium.com/@Textual.Microcosms/commenting-identity-youtube-comments-on-a-bhagavad-gita-pepaosan-performance-f20a00f6aefe | Current definition of pepaosan as oral interlinear translation; temple->YouTube migration; official vs hobby spheres |
| K. Kamiishi | Literature across generations; The OJ Bharatayuddha translated into Modern Javanese (Wacana 26(3), art. 9) | 2025 | https://scholarhub.ui.ac.id/wacana/vol26/iss3/9 ; DOI 10.17510/wacana.v26i3.1867 | Full abstract + references harvested; affiliation HUJI; reference list confirms Creese 2004 imprint and van der Meij 2017 series |
| R. Ricci | The Study of Islamic Interlinear Texts from Indonesia | 2025 | https://medium.com/@Textual.Microcosms/the-study-of-islamic-interlinear-texts-from-indonesia-ae561d9db84c | Historiography (Van der Tuuk 1866, Juynboll 1881, Van Ronkel 1896/1899); forthcoming JAIS survey |
| I.K. Sudirga, M.M. Hood, N.K.D. Yulianti | Strengthening Ideological Values through Pasantian Singing (Jurnal Kajian Bali 14(2)) | 2024 | DOI 10.24843/jkb.2024.v14.i02.p03 | Pasantian singing as current peer-reviewed research topic; metadata verified, text blocked |
| D.A.C. Citrawati, I.G.G.P.A. Putra | Rescuing balinese manuscripts (Lontar) with balinese Wikisource (NRHM 30(3-4):223-237) | 2024 | https://doi.org/10.1080/13614568.2024.2345182 | Abstract obtained (Semantic Scholar): WikiLontar pipeline, Wikidata/Commons/WikiPustaka; does NOT itself name saka 1814/Nengah Serangan/leaf counts |

## Key findings

1. Creese's monograph identified and double-verified: Women of the Kakawin World; Marriage and Sexuality in the Indic Courts of Java and Bali, first published 2004 by M.E. Sharpe (OpenLibrary bibliographic record + Kamiishi 2025 Wacana bibliography), Routledge e-book reissue 2015 (DOI 10.4324/9781315698083). Her other major works mapped: Parthayana (Brill 1998 - which contains a book-chapter precursor titled "The Balinese kakawin tradition"), From Lanka Eastwards (ed., 2011, incl. her "Ramayana Traditions in Bali"), a Salya/Bharatayuddha reception chapter (ISEAS volume), and Bali in the Early Nineteenth Century (Brill 2016). The title "In Search of Language..." attributed in the brief DOES NOT EXIST under her name in any accessible bibliographic source (ยังไม่พบข้อมูลยืนยัน).

2. Rubinstein gap fully closed. Exact 1993 reference recovered from Creese 1999's bibliography: 'Pepeosan; Challenges and change', in D. Schaareman (ed.), Balinese music in context; A sixty-fifth birthday tribute to Hans Oesch, Winterthur: Amadeus [Forum Ethnomusicologicum 4] - an ethnomusicology Festschrift, which is why it never surfaced in philology databases. Her thesis (Univ. of Sydney 1988) grew into Beyond the Realm of the Senses, KITLV Verhandelingen 181 (not 187), 240 pp., KITLV Press 2000, e-book 2022, DOI 10.1163/9789004487321, with full ToC captured (Chapters on social distribution of literacy, alphabet magic, poet lineages, Nirartha, Canda/Bhasaprana/Swarawyanjana).

3. NEW INSTITUTIONAL EVIDENCE - the Pusdok maarti corpus: archive.org's Balinese Digital Library contains nine maarti scans whose opening frames carry Pusdok catalog cards and stamps. Harvested: Bharata Yuddha Maarti (172 leaves, ex-Gst.Pt. Djelantik Singaraja) - a SECOND Bharatayuddha maarti distinct from the Wikisource-recorded Balai Bahasa copy (327+96 leaves); Arjuna Wiwaha Maarti (134 leaves, call no. 3 1/1/Ka/P/Dokbud) - distinct from Kamiishi's Balai Bahasa 007/BPB/Vb/91 (174 folios); Ramayana Maarti (154 leaves); Nitisara Maarti (card states source: Gedong Kirtya Singaraja) plus a second Nitisara (A); Wirabadra Maarti (154); Smara Dahana Maarti (+/-311 leaves, Asal Tapem Klungkung); Arjuna Wijaya Maarti (303); Kidung Tantri Maarti (maarti format extends to kidung/Tantri). Leaf widths uniformly ~3.5 cm - reinforcing the physical constraint argument for above/below glossing.

4. Terminology triangulated (pasantian/pamurtian question): current scholarship uses three complementary labels - mabasan (Creese's English label for reading groups), pepaosan (Rubinstein's own term; defined by Ganchrow 2025 as bilingual performance in which performers chant Sanskrit verses and render them line by line into Indonesian/Balinese - "oral interlinear translation", traditionally in temple ceremonies, now also YouTube, with an official PHDI-linked sphere), and pasantian (village school/sekaa frame; Widiantana 2024 derives it from santi; Sudirga-Hood-Yulianti 2024 in Jurnal Kajian Bali study "pasantian singing"). "Pamurtian" remains unverified anywhere (ยังไม่พบข้อมูลยืนยัน) - recommend avoiding it in the draft or flagging it explicitly as unattested.

5. Kamiishi cross-checked: beyond the Textual Microcosms Medium post (her only signed Balinese-maarti piece, Aug 2025) and the Wacana 26(3) article on BL Add MS 12279 (full abstract + references now harvested; special issue "Kawi culture beyond the language of poets"), NO other publications by Keiko Kamiishi were found in Crossref, the UI repository, or project channels (ยังไม่พบข้อมูลยืนยัน for any additional Balinese translation-manuscript publication). Her Wacana reference list usefully confirms both the Creese 2004 imprint and the van der Meij 2017 series (Handbuch der Orientalistik 3-24).

6. Citrawati & Putra 2024: full bibliographic record locked (NRHM 30(3-4): 223-237) and abstract obtained via Semantic Scholar; abstract covers the WikiLontar pipeline and its challenges but does not contain the specific Bharatayuda Maarti data points, so those remain dependent on the Wikisource finding aid (see Phase-B note above).

## Gaps closed

- Gap 1 (Creese beyond 1999): CLOSED bibliographically - 2004 monograph verified with correct imprint; works list mapped; "In Search of Language..." declared nonexistent/unverifiable.
- Gap 2 (Rubinstein): CLOSED - exact 1993 citation + full monograph verification (series, ToC, DOIs, ISBNs).
- Gap 3 (institutional verification): PARTIALLY CLOSED - distinct second Bharatayuddha maarti institutionally documented via Pusdok scan/cards; Ramayana maarti individually located (closes Loop-15 sub-gap); but the Wikisource-specific claims (saka 1814, Nengah Serangan, 327+96 leaves) still await the Citrawati & Putra full text or a Balai Bahasa/Gedong Kirtya catalogue.
- Gap 4 (Kamiishi): CLOSED as far as possible - publication list established (2 items), shelfmark context enriched by two further Arjunawiwaha-family maarti witnesses.
- Gap 5 (pasantian): CLOSED terminologically - pasantian standard for village schools (two scholarly anchors), pepaosan/mabasan division of labor clarified with a fresh citable definition; pamurtian formally marked unverified.

## Remaining

- Obtain Citrawati & Putra 2024 full text (print/ILL or author contact) to settle the Balai Bahasa Bharatayuda Maarti data points; alternatively query Balai Bahasa Provinsi Bali directly (no online catalogue found).
- Sutasoma maarti still not individually identified anywhere (all other Creese-canon classics now have located maarti witnesses).
- van der Meij 2017 "Maarti Texts" section (Handbuch der Orientalistik 3-24) remains paywalled - definitive codicological treatment still unread.
- Rubinstein 1993 chapter itself unread (Forum Ethnomusicologicum 4 has no digital distribution located); cite from secondary attestation until a library copy is secured.
- Card figures from OCR should be eyeballed against scan images if leaf counts are quoted numerically in the draft.
- Quantitative glossed-vs-unglossed share in any single collection: still unstudied in accessible literature.

## Blocked sources (recorded honestly)

- tandfonline PDF/HTML (Cloudflare 403) - Citrawati & Putra 2024 full text.
- ResearchGate (403) and academia.edu (403).
- ejournal1.unud.ac.id HTTP 503 all session; ojs.unud.ac.id database-connection failure (Sudirga et al. 2024 full text).
- garuda.kemdikbud.go.id DNS failure; Bing returned junk; DuckDuckGo throttled after 2 queries; built-in websearch 429 all session; OpenAlex daily budget exhausted.
- CiNii 503; textualmicrocosms.huji.ac.il server error (team/profile pages unreachable).
- Brill: van der Meij 2011 BKI 167:322-332 PDF 403 (non-OA); taylorfrancis.com JS-rendered shell only.
