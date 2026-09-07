# Loop C06 Findings

Date: 2026-08-26
Phase: C (final-pass foraging). Topic: residual Balinese maarti gaps from loop B08.
Documents saved: 3 files in documents\ (Citrawati-Putra 2024 full-text record; van der Meij 2017 Maarti Texts record; Pusdok Sutasoma/parwa card records).

## Phase-C note (closing the B08 residuals; Wikimedia institutional verification obligation)

Loop 15 imposed and B08 carried forward an obligation: independently verify, outside Wikimedia finding aids, the three Wikisource data points on Kekawin Bharatayuda Maarti (colophon saka 1814 = 1892; scribe Nengah Serangan; 327+96 leaves at Balai Bahasa Provinsi Bali). This loop DISCHARGES that obligation for two of the three claims and re-scopes the third:

1. DATE and INSTITUTION and SIZE now independently verified from peer-reviewed codicology: Dick van der Meij, "Indonesian Manuscripts from the Islands of Java, Madura, Bali and Lombok" (Brill, Handbook of Oriental Studies Section 3 Southeast Asia vol. 24, 2017 - the "Handbuch der Orientalistik 3-24"), ill. 193 (p. 204): "Kakawin Bharatayuddha maarti ... dated Saka 1814 = AD 1892. Collection Balai Bahasa Provinsi Bali, Denpasar 018/BPB/Vb/91, 3.3 x 52 cm., 326 inscribed leaves." The book's own photographs were taken in the Balai Bahasa collection via I Nyoman Argawa. The draft may now state date, holding institution and approx. 326-327 inscribed leaves with scholarly citation, adding "(catalogued also on Balinese Wikisource/WikiLontar)" only as a finding-aid pointer.
2. SCRIBE NAME remains single-source: "Nengah Serangan" appears neither in the Citrawati & Putra article (full text checked) nor anywhere in van der Meij 2017 (all "Nengah" hits = I Nengah Tinggen). Keep it attributed explicitly to the Balinese Wikisource catalogue page as a finding aid, or drop it. (ยังไม่พบข้อมูลยืนยัน)
3. The "+96" component of 327+96 is unexplained in both sources; van der Meij counts 326 INSCRIBED leaves - recommend quoting "c. 326 inscribed leaves (+96 blank/reinforcement leaves per the WikiLontar catalogue)".
4. Bonus closure: the same book illustrates and shelfmarks a SUTASOMA MAARTI at Gedong Kirtya Singaraja 1118/974/28 (68 leaves, undated; ills. 170-171), erasing B08's last open item of the Creese-canon maarti list.

## Queries executed

1. websearch: Citrawati & Putra PDF routes (found publisher full text now free-access); van der Meij HdO volume identification; Sutasoma maarti/Gedong Kirtya; (search-inside style follow-ups done via APIs).
2. Crossref API re-pull of DOI 10.1080/13614568.2024.2345182 (bibliographic lock confirmed: NRHM 30(3-4):223-237; TDM pdf link listed).
3. Direct fetch of tandfonline /doi/full/ HTML - succeeded (free access), full body + notes harvested; r.jina.ai proxy NOT needed this time.
4. archive.org advancedsearch: q=maarti (10 items), q=(kaarti OR "maarti") (exhaustive corpus check), q=sutasoma (11 hits incl. 2 Bali scans + OAPEN Hooykaas), q=collection:(Bali) full listing (2,890 items scanned for candidates).
5. archive.org metadata API: bharata-yuddha-maarti (collection ids), indonesian-manuscripts-dick-van-der-meij, kakawin-sutasoma, kakawin-sutasoma-kak72, wirata-parwa, udyoga-parwa-a, bharata-yuddha.
6. djvu.txt OCR downloads mined by regex: van der Meij 2017 full text (Maarti Texts section pp. 188-203 reconstructed across three extractions; contexts for maarti/Sutasoma/Bharatayuddha/Nengah/327/Balai Bahasa/Jlantik/Argawa); Sutasoma x2 heads + maarti counts (0 and 0); Wirata/Udyoga/Bharata Yuddha plain-copy cards.
7. Negative checks inside fetched texts: "Serangan", "Nengah", "1814", "327", "Balai Bahasa" against the Citrawati & Putra full text.

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| D.A.C. Citrawati, I.G.G.P.A. Putra | Rescuing balinese manuscripts (Lontar) with balinese Wikisource | 2024 | https://www.tandfonline.com/doi/full/10.1080/13614568.2024.2345182 | FULL TEXT NOW FREE ACCESS; harvested: 25,106 lontars recorded 2016-2018; 10 owners/4 refusals; community Bharatayudha copies at Sawan (image file named Maarti), Tojan, Sukawati; does NOT contain saka 1814/Nengah Serangan/leaf counts |
| D. van der Meij | Indonesian Manuscripts from the Islands of Java, Madura, Bali and Lombok (HdO 3-24) | 2017 | https://brill.com/abstract/title/34999 ; DOI 10.1163/9789004348110 ; full text https://archive.org/details/indonesian-manuscripts-dick-van-der-meij | Maarti Texts section pp.188-203; Sutasoma maarti GK 1118/974/28 (68 leaves); Bharatayuddha maarti BBPB 018/BPB/Vb/91, Saka 1814=1892, 326 inscr. leaves; Ramayana maarti x2; Parthayajna maarti 1942; Hinzler 2009 antecedent; research-gap statement |
| Pusdok cards (plain copies) | Wirata Parwa; Udyoga Parwa A; Bharata Yuddha (scans) | ms; scans 2011 | https://archive.org/details/wirata-parwa , /udyoga-parwa-a , /bharata-yuddha | New card records: Griya Gede Klungkung provenance; Djelantik provenance x2; plain/unglossed status recorded as controls |
| Pusdok scans | Kakawin Sutasoma; Kakawin Sutasoma Kak72 | scans 2011 | https://archive.org/details/kakawin-sutasoma , /kakawin-sutasoma-kak72 | Both PLAIN copies (155-leaf copy transcribed by NKR Srawati; call no. 23/2/Ka/Dokbud); zero maarti occurrences - negative control |
| Museum Sonobudoyo | Naskah Lontar Sutasoma (blog post) | 2024 | https://sonobudoyo.jogjaprov.go.id/id/tulisan/read/naskah-lontar-sutasoma | Balinese-script, Old Javanese, 154 pages, late 19th c.; not described as glossed - context only |
| C. Hooykaas | On the Old-Javanese Cantakaparwa and Its Tale of Sutasoma | 1958 | OAPEN oapen-20.500.12657-32269 | Open-access background on Sutasoma textual tradition (not consulted in depth this loop) |

## Key findings

1. TARGET 1 CLOSED BY REDIRECTION. The Citrawati & Putra article is now free-access and was read in full; it does NOT contain any of the three contested data points (its only 1892 is the Kirtya foundation year per Hooykaas 1979:348; its only saka is Trunyan A II 971). Independent verification came instead from van der Meij 2017, which confirms date, institution, shelfmark 018/BPB/Vb/91 and c.326 inscribed leaves of the Balai Bahasa Bharatayuddha maarti. The scribe name Nengah Serangan stays finding-aid-only.
2. TARGET 2 CLOSED POSITIVELY. A Sutasoma maarti exists: Gedong Kirtya, Singaraja 1118/974/28, 3.7 x 51 cm, 68 leaves, undated, Old Javanese center with Balinese glosses (van der Meij ill. 170-171); Sutasoma also appears in his list of kakawin "mostly available" in maarti copies. Both public Pusdok Sutasoma scans were checked and are plain copies - useful negative controls showing glossing was selective.
3. TARGET 3 CLOSED. The "van der Meij 2017 with a Maarti Texts section" = Indonesian Manuscripts... HdO Section 3 Southeast Asia vol. 24 (Brill 2017); section spans pp. 188-203 within ch. 3; harvested in full including definition (dotted-line linkage), four-line-per-side exception for maarti, partial-glossing/mabasan explanation crediting Hinzler 2009:238-239, extended shelfmark inventory (Kalpasan Cod.Or. 23.058; Bhargawasiksa/Kalisangara UBL 16.256/21.687/21.711 + GK 1118/1374/39; Kanga Cod.Or. 23.907; Dharmasrama embat-embatan UI LT 209; Middle Javanese Kidung Tantri, Kidung Malat maarti, Sri Tanjung), and the quotable research-gap sentence on unstudied OJ-Balinese gloss relationships.
4. TARGET 4 CLOSED AS EXHAUSTIVE NEGATIVE + NEW CARDS. Only ten maarti scans exist in the public Pusdok corpus (all previously documented). Added three new card records (Wirata Parwa 106 leaves ex Griya Gede Klungkung; Udyoga Parwa A 124 leaves ex Djelantik; Bharata Yuddha 78 leaves ex Djelantik) whose non-maarti status pairs cleanly with their maarti counterparts (e.g., 78-leaf plain vs 172-leaf maarti Bharatayuddha in the SAME owner library).
5. Methodological bonus: van der Meij's footnotes cite the very archive.org Pusdok URLs we mined in B08 (accessed Nov 2016), and he attributes several stitched manuscripts to the I Gusti Putu Jlantik (Djelantik) collection of Singaraja - convergent validation of the B08 corpus map and of Djelantik as feeder of both Pusdok and Balai Bahasa holdings.
6. New citable datum for the interlinear-layout argument: maarti copies are among the explicit exceptions to the four-written-lines lontar norm, and glosses are linked to lemmas by lines of small dots (sometimes throughout, sometimes partially) - physical evidence of above/below glossing rather than true interlinear insertion.
7. Community dimension enriched: WikiLontar found a third Bharatayudha family of copies outside institutions - Gria Kelodan Sawan, Buleleng (Wikisource image file literally named Bharata_Yudha_Maarti), Jro Mangku Tojan (Klungkung), Jro Mangku Sukawati (Gianyar) - supporting the claim that glossed copies circulated in priestly/village libraries, not just state collections.

## Gaps closed

- Gap 1 (Citrawati & Putra 2024 full text): CLOSED - free access, full text harvested; article exonerated as source of the three data points; ResearchGate/repository routes unnecessary.
- Gap 2 (Sutasoma maarti): CLOSED - located at Gedong Kirtya 1118/974/28 via van der Meij 2017.
- Gap 3 (van der Meij 2017 identity and content): CLOSED - work identified, Maarti Texts section harvested, paywall circumvented lawfully via the archive.org copy.
- Gap 4 (two additional archive.org maarti records): CLOSED as exhaustive negative; replaced with three new non-maarti card records strengthening the selectivity argument.
- Wikimedia verification obligation (from Loop 15 via B08): SUBSTANTIALLY DISCHARGED - date/institution/size now scholar-verified; scribe name reclassified as finding-aid-only.

## Remaining

- Scribe name "Nengah Serangan": still attested only on the Balinese Wikisource catalogue page (finding aid). Cite with attribution or omit.
- "+96" leaves: unexplained in all sources; phrase carefully if used.
- Hinzler 2009: 238-239 (the prior discussion of glossed texts cited by van der Meij fn. 30-31): identified but unread - next acquisition target.
- Rubinstein 1993 chapter still unread (no digital distribution); cite from secondary attestation.
- Eyeball ill. 170-171 and ill. 193 in the PDF before quoting dimensions/counts numerically in print.
- Quantitative glossed-vs-unglossed share in any single collection: still unstudied in accessible literature (van der Meij's gap statement can carry this point).

## Blocked sources (recorded honestly)

- ResearchGate publication/386535929 (403 historically; not needed after free-access find).
- tandfonline epdf/epub binaries not downloaded (HTML sufficed; links live).
- No other blocks encountered this loop; ejournal.unud/garuda issues from B08 were not on this loop's critical path.
