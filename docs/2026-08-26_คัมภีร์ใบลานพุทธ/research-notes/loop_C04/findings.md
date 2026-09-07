# Findings — Loop C04: final gap-fill targeting B04/B03 leftovers (Mon & Pyu)

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** C04 | **Date:** 2026-08-26
สถานะ: VERIFIED-PAGE = อ่านเต็มและเก็บดิบ; VERIFIED-PDF = PDF ดาวน์โหลด + สกัดข้อความจริง; CROSSREF-METADATA = Crossref API; SNIPPET = เห็นเฉพาะชิ้นส่วนผลค้น; BLOCKED = fetch ถูกปฏิเสธ

## A. Jenny 2005 at zora.uzh.ch — exact title IDENTIFIED (closes B04 S20)

### F1. Title and bibliographic identity
- The Jenny-2005 item behind the ZORA link is NOT a paper on Old Mon language history. It is the doctoral-scale monograph: **Mathias Jenny, "The Verb System of Mon"** (2005), Arbeiten des Seminars für Allgemeine Sprachwissenschaft der Universität Zürich (ASAS) 19.
- Corroborating sources read this session: DDG result set showing both the ZORA file URL (zora.uzh.ch/110202/1/the verb system of mon.pdf) and an identical-title UZH institute mirror (isle.uzh.ch ASAS_19_Jenny_2005_The_verb_system_of_Mon.pdf); Sudoc record www.sudoc.fr/122860500: "The verb system of Mon / Mathias Jenny, Date: 2005, Editeur: Zürich : Universität Zürich, ISBN 3-9522954-1-8 / 978-3-9522954-1-0, Collection: Arbeiten des Seminars für Allgemeine Sprachwissenschaft"; OpenLibrary edition page; DocsLib copy ("2005, University of Zurich, Faculty of Arts"). Crossref records by other authors cite it uniformly as "Jenny 2005, The Verb System of Mon". [VERIFIED-PDF + SNIPPET x3]
- ZORA itself was Anubis-blocked this session (search UI and file URL both return PoW challenge). Access secured instead via the UZH mirror: https://www.isle.uzh.ch/dam/jcr:00000000-17e0-420f-0000-000061967685/ASAS_19_Jenny_2005_The_verb_system_of_Mon.pdf — 2,400,466 bytes, 303 pages, text layer intact [VERIFIED-PDF archived + extracted]

### F2. Content facts read in the dissertation (pp. 1–22 fully read; whole text extracted)
- Earliest direct linguistic evidence of Mon: "a handful of short stone inscriptions found in central Thailand and dating to the 6th century. These inscriptions are among the earliest record of an indigenous language of Southeast Asia, predating the earliest Khmer inscriptions (but being about contemporary with inscriptions in the now extinct Pyu language of central Burma)." — direct peer-reviewed-adjacent scholarly statement placing OM and Pyu epigraphy as contemporary 6th-c. phenomena [VERIFIED-PDF p.2]
- "Mon is the only local language used during the Dvāravatī era"; Dvāravatī cultural area covered central Thailand AND southern Burma
- 11th c.: Burmese rulers of Pagán used Mon in inscriptions "in an elevated literary form"; remarkable spelling consistency from earliest Dvāravatī inscriptions to Pagán period (~500 years); longest OM inscription = 11th-c. Shweizigon
- "Although Mon was replaced by Burmese in the 12th century at Pagán, it continued to be used as spoken and written language in southern Burma"; 15th-c. Shwedagon inscription has parallel Mon+Burmese texts; classical Literary Mon crystallizes after fall of Haṁsāvatī 1757 around Acā Hwo'
- Sources apparatus: Shorto DMI (1971) cross-checked; main editions = Epigraphica Birmanica I–III (Duroiselle 1921 etc.), U Hkyit Thein's Collection of Mon inscriptions (1965; "in Mon-Burmese script"), Luce 1961 Kubyauk-Gyi; most OM examples from Shweizigon, Ananda plaques, Kubyauk-Gyi (all 11th-c. Pagán)
- Appendix D sample texts include "Myazedi Inscription (OM)" (p. 277) — i.e., the same inscription as PYU007 appears in Jenny's teaching apparatus
- Preface confirms Diffloth/Guillon/Nai Pan Hla personal communications and Nai Ok Pung fonts/manuscript editions (matches B04 F9)
- Razadarit epic RDR "edited by Nai Pan Hla in 1958" listed among classical LM sources (independent confirmation of B04 F10 dating)
- Abbreviation list: EB = Epigraphica Birmanica (Duroiselle 1921 etc.); J.B.R.S. = Journal of the Burma Research Society

## B. HISOMA Corpus of Pyu Inscriptions — PYU007 TEI record VERIFIED IN FULL (closes B04 F8 snippet status)

### F3. What the record contains (rendered TEI-Publisher view fetched via r.jina.ai; raw XML endpoint bot-refused)
- URL: http://hisoma.huma-num.fr/exist/apps/pyu/works/PYU007.xml?odd=teipublisher.odd — app title "Corpus of Pyu Inscriptions"
- Full edition text present for all four faces with line numbers:
  - Old Burmese face: lines 1–39 (39 lines) — opens "śrī || namo buddhāya || pu rhā skhaṅ· sāsanā °anhac·..."
  - Pali face: lines 1–41 (41 lines) — opens "buddhādikaṁ vatthuvaraṁ namitvā..."; includes aṭṭhavīsati+6 date formula "nibbānā lokanāthassa aṭṭhavīsādhike gate sahasse pana vassānaṁ chasate cāpare tathā"
  - Old Mon face: lines 1–33 (33 lines) — opens "śrī || namo buddhāya || śrī || sās kyek· buddha tirley..."; mentions ḍuṅ (°a)rimaddanapur, śrī tribhuvanādityadhammarāj
  - Pyu face: lines 1–26 (26 lines) — opens "siri || dathagaṃda ḅa doṃ ḅaṁḥ..." with date "tva 1000[600]20 hraṁ"
  - Line counts exactly match B04's earlier snippet (39/41/33/26)
- Critical apparatus on the Pyu face collates three reading traditions: wit="Blagden1911", wit="Blagden1919", wit="Krech" (e.g., pduṃ/pdūṃ/pdavṃ variants; rimadhanarbu/rimadhanabū/rimadhanaRbav). Apparatus notes reference Nagarjunakonda palaeography for vowel signs and cross-compare PYU016.
- Official translation block: "Quadrilingual text. Records building of a shrine by Prince Rājakumāra, son of Kyanzittha <kyan cac sāḥ>, and dedication of three villages and slaves thereto."
- TEI markup visible in render: <ab>, <lb n="…"/>, <w>, <pc>, <unclear>, <supplied reason="lost"/omitted">, <app><lem><rdg wit="…">
- Significance: this is now a FULLY READ primary digital edition (not snippet) of the Myazedi/Rajakumar quadrilingual pillar record — the key 12th-c. witness containing Old Mon AND Pyu side-by-side; usable as primary source for the Pyu–Mon–Burmese script/language contact question. Direct XML fetch failed (server rejects non-browser clients); rendered XML blocks archived instead. [VERIFIED-PAGE + raw archive]

### F4. Remaining Pyu-side gap
- The interpretive debate (Pyu script origin vs Campā system vs Mon mediation; "Five Contributions to Pyu Studies") remains unread full-text: HAL hal-04944573 still Anubis-blocked. ยังไม่พบข้อมูลยืนยันแบบ full-text นอกเหนือจากตัว edition ของ PYU007 เอง

## C. Myanmar Manuscript Digital Library (MMDL) — scope VERIFIED (closes B03 H-4 / A06 candidate #4)

### F5. Hosting, project, funding [VERIFIED-PAGE x3 archived]
- Homepage: "This archive, hosted by the University of Toronto and supported by Robarts Library, aims at bringing together and making manuscripts and rare print editions available online from individual libraries throughout Myanmar. It is the platform for an ongoing digitizing project, initiated and conducted by William Pruitt and an international team of Myanmar and Pali scholars, and supported, since 2012, by the Pali Text Society, as well as by Yumi Ousaka of the Sendai National College of Technology, the KDDI Foundation, the Mitsubishi Foundation, the CARI Foundation, and JSPS Kakenhi."
- Pruitt project page: digitization begun February 2013; aims = preserve Myanmar's (principally Buddhist) texts, free photos worldwide, raise local awareness, train locals. Funders enumerated: JSPS SRB 2011–2014 (Ousaka), JSPS CER 2013–2015 + KDDI 2013–2015 (Kasamatsu), Mitsubishi Foundation, JSPS SRB 2016–2019, CARI/Rissho Kosei-kai 2017 (PI Pruitt). "Photographs and scans will all be the property of the Pali Text Society." Site developed at University of Toronto.
- Content policy: entire collections photographed/scanned for critical editions; "In addition to texts in Pāli, we include Burmese nissaya (Pali texts with Burmese and Mon word-by-word translations and explanations), texts in Burmese and Mon, and illustrated manuscripts. Scans of early Pāli editions printed in Burma..." → explicit MON-language manuscript presence in scope (directly relevant to Mon nissaya thread B03/B04)
- Formats: photographs (Canon EOS 1100D raw+JPEG, green-screen background for auto-cropping), Fujitsu ScanSnap SV600 scans for printed books, output as PDFs "usable as E-books" generated by Dr Win Htay's cropping program and Ousaka/Fujiwara/Miyao e-book compiler that embeds leaf-level metadata (serial number, recto/verso)
- Conservation detail recorded on project page: lemongrass oil + powdered carbon treatment (single-direction rubbing), BL conservation department provenance; mineral oil + camphor substitute; teak covers/cloth wrappers; ~10-year re-oiling cycle

### F6. Collections and counts
- Two databases live: U Po Thi Library (UPT) and National Library of Myanmar, Bagaya Monastery (BGY); both organized A–Z across nine letter pages
- UPT (Thaton, Sadhammajotika Monastery): "about 775 palm-leaf manuscripts"; library founded 1923 by U Kyaw Tun + U Pho Thi; 1998 Universities' Central Library team list = 775 mss; illustrated parabaiks (Thirty-one Planes of Existence, medicinal plants, royal regalia); rare late Kammavācā (1951 Mandalay)
- Thar-Lay (Inle Lake) collection described but not yet in database: catalogue records "886 manuscripts ... containing 958 texts", ~45 Pali mss dated 1676–1800; target texts pre-1860 (pre-Fifth Council) prioritized
- BGY: 2016 transfer of Bagaya Monastery palm-leaf collection (just south of Mandalay) to National Library Nay Pyi Taw (theft/damage concern); 2018 agreement National Library + Pali Text Society UK; "Pali and Pali–Burmese manuscripts that were copied before 1850 have been photographed and prepared as PDF" (Ousaka program; Pruitt + U Aung Moe Oo; Daw Mya Oo director NL); PDFs shipped to Toronto database
- COUNT CHECK: current BGY listing shows **206 PDF entries** across the nine alphabet pages (hand-count per page: A–C 32, D–F 19, G–I 3, J–L 41, M–O 33, P–R 25, S–U 38, V–X 13, Y–Z 2; IDs run BGY0001–BGY0145 plus -A…-J volume suffixes; files served from digicoll.library.utoronto.ca/mmdl/BGY####.pdf). This exceeds the A01-era PTS-page claim of "100 PDFs" — site has grown or claim was conservative; use 206 as current ground truth [VERIFIED-PAGE enumeration]
- Nissaya density in BGY titles: dozens of "-nissaya" items incl. Khuddasikkhā-nissaya (two copies), Mūla-sikkhā-ṭīkā-nissaya, Kaṅkhāvitaranī-nissaya-sac, Visuddhimagga-aṭṭhakathā nissaya, Vinayālaṅkāra-ṭīkā-nissaya, Sut-pātheyyavā-nissaya (four volumes), Netti-nissaya(-sac), Cūlavā-pāḷi-tō-nissaya, Buddhavan-pāḷi-tō-nissaya etc. — rich corpus for future nissaya layout/format analysis
- UPT letter-page structure confirmed; entry count not enumerated this session

## D. Duroiselle 1913 "Talaing nissaya" — title verified; accessibility mapped (closes B03 G-1 partially, H-5)

### F7. Title verification (two independent fetched sources)
- Okell 1965 footnote (ScienceDirect article page, footnote 9): "This also appears to be true, mutatis mutandis, for tráai, the Mon equivalent of nissaya: see C.Duroiselle, 'Talaing nissaya', J[V]RS, 3, 1913, 113." [SNIPPET from ScienceDirect rendering; JBRS vs "JVRS" = OCR/typo variance in the rendering]
- Same snippet independently supplies the Mon nissaya-equivalent term **tráai** — matches Walker JAOS 2020 "trā-ai (Mon)" already recorded in A06/B03; Okell thus becomes a second, independent scholarly attestation of the Mon term (B03 G-1 upgraded from single-source)
- B03 had already matched the citation in Okell's Crossref reference list; now confirmed against the article page itself
- Note: Jenny 2005 references show Duroiselle's OTHER Talaing-related work: Epigraphica Birmanica Vol II "The Talaing Plaques..." (1962 ed.) and EB III (1921/1928) — distinct from the 1913 JBRS nissaya note [VERIFIED-PDF]

### F8. Accessibility
- archive.org advancedsearch (creator:Duroiselle): NO JBRS vol.3; open-access Duroiselle items = Practical Grammar of the Pali Language (1921, multiple copies), Jinacarita (1906), Notes on the ancient geography of Burma (1906), A List of Inscriptions found in Burma (1921). JBRS Vol.7 djvu exists on archive.org (wrong volume).
- HathiTrust: DDG-indexed item "The journal of the Burma Research Society v.1-3 — Full View", id=uc1.b3537055 (babel.hathitrust.org) — would contain vol.3 (1913) p.113; all fetch routes (r.jina.ai, direct, seq parameter) returned 403 Forbidden → existence recorded at SNIPPET level, content not machine-readable this session. Browser access likely possible for humans.
- Verdict: full text of 'Talaing nissaya' still NOT obtained; ยังไม่พบข้อมูลยืนยันระดับ full-text — Phase D candidate via physical library/HathiTrust web UI.

## E. Mon script origin from South Indian scripts — STOU claim corroborated at reference-work level; journal-grade statement still open (task e)

### F9. STOU exhibition claim re-read from loop_B04/documents (unchanged)
- "ตัวอักษรมอญรุ่นแรกสุด ปรากฏในราชอาณาจักรรามัญช่วงพุทธศตวรรษที่ ๙–๑๐ ที่มีอิทธิพลของตัวอักษรอินเดียใต้..." (earliest Mon script, Rāmañña realm, B.E. 9–10 ≈ 5th–6th c. CE, South Indian influence, continuous development) — flagged in B04 as exhibition-level needing corroboration

### F10. Corroboration obtained this session
- Britannica, "Mon language" (britannica.com/topic/Mon-language, Britannica Editors, fact-checked page) — DIRECT fetch, full read: "Old Mon is written in a script originating from South India. The Mon writing system evolved gradually into its modern form and **served as a basis for the Burmese writing system**." Same page: oldest inscriptions 6th c. central Thailand (Dvaravati sites); OM inscriptions of Thaton/Pegu; Pagan OM attest prestige of Mon in medieval Myanmar [VERIFIED-PAGE archived]
- Academia.edu handout "Burmese Script: System and Diachronic Background (handout)": search-result snippet states "Indic script ... was adopted by people in Southeast Asia such as Malay, Cham, Khmer, Mon, Pyu to write their own languages ... Burmese is assumed to have borrowed the script from Mon and accommodated it to Burmese language." Page fetch returned only related-papers shell; authorship not identified → weak evidence, SNIPPET only
- Jenny 2005 uses the compound term "Mon-Burmese script" (for Hkyit Thein 1965 collection) but contains no explicit derivation sentence — checked by full-text pattern search [VERIFIED-PDF negative]
- Wikipedia/Wikiwand/DBpedia/Grokipedia hits stating Pallava-Grantha derivation EXCLUDED by no-Wikipedia rule (noted only as leads whose cited literature should be chased in Phase D)
- Status: reference-work-level corroboration (Britannica) now stands beside STOU; a fully-read PEER-REVIEWED statement (e.g., Bauer 2018 EFEO chapter; de Casparis-type epigraphy literature; "Five Contributions to Pyu Studies") remains ยังไม่พบข้อมูลยืนยัน this session

## F. New Crossref metadata confirmations
- Jenny, Mathias & McCormick, Patrick. 2014. "3 Old Mon." The Handbook of Austroasiatic Languages (2 vols), pp. 517–552. doi:10.1163/9789004283572_009 — dedicated Old Mon chapter co-authored by McCormick (EAP1432 grantee) [CROSSREF-METADATA]
- McCormick, Patrick & Jenny, Mathias. 2013. "Contact and convergence: The Mon language in Burma and Thailand." Cahiers de Linguistique Asie Orientale 42.2: 77–117. doi:10.1163/19606028-00422p01 — abstract confirms "documented history of more than a thousand years" and divergent Burma/Thailand Mon varieties [CROSSREF-METADATA + abstract]
- Jenny 2020 "Verb-Initial Structures..." pp. 21–45 and 2019 "Mon" pp. 277–319 page ranges added to prior B04 records [CROSSREF-METADATA]

## G. Updated synthesis (Mon × Pyu × digital corpora)
| Item | Verified state | Source |
|:---|:---|:---|
| Jenny 2005 | Title = The Verb System of Mon (ASAS 19, ISBN 3-9522954-1-8); 303-pp PDF archived from isle.uzh.ch mirror; OM/Pyu contemporaneity statement inside | loop_C04/documents/02_* |
| PYU007 | Four-face TEI edition fully read; 39 OB / 41 Pali / 33 OM / 26 Pyu lines; Blagden1911/1919 + Krech apparatus; translation names Rajakumar son of Kyanzittha | loop_C04/documents/03_* |
| MMDL | U Toronto+Robarts; Pruitt init.; PTS since 2012; UPT ~775 mss; BGY pre-1850 Pali/Pali-Burmese PDFs; 206 BGY PDF rows counted; formats PDF/e-book, raw+JPEG, SV600 print scans; Mon explicitly in scope | loop_C04/documents/04–06_* |
| Duroiselle 1913 | Title + pagination ('Talaing nissaya', JBRS 3:113) double-confirmed; Mon term tráai attested via Okell fn.9; scan exists HathiTrust uc1.b3537055 v.1-3 Full View but bot-blocked; not on archive.org | search-log A14/A17/A26 |
| Mon script origin | Britannica: OM script from South India; basis for Burmese writing system. Peer-reviewed full-text still missing | loop_C04/documents/07_* |

## H. Remaining gaps (Phase D candidates)
1. Peer-reviewed full-text statement on Mon→Burmese script derivation: chase Bauer 2018 EFEO "The Mon inscriptions of Thailand, Laos and Burma" (print) and Griffiths et al. Five Contributions to Pyu Studies (HAL hal-04944573, Anubis-blocked twice).
2. Duroiselle 1913 'Talaing nissaya' text: HathiTrust uc1.b3537055 via human browser session; check JBRS vol.3 part index for exact article bounds (p.113 ff.).
3. PYU007 raw TEI XML download (browser needed); sibling records PYU001–PYU0xx unexplored.
4. MMDL UPT entry count + one sample BGY PDF (digicoll.library.utoronto.ca) to verify image quality/metadata embedding claims.
5. Academia.edu "Burmese Script: System and Diachronic Background" authorship (likely Japanese scholarship on Brahmi-descended scripts).
