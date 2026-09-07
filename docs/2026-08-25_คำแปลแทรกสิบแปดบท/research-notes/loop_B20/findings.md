# Loop B20 Findings

Date: 2026-08-26
Workspace: output\2026-08-25_คำแปลแทรกสิบแปดบท\research-notes\loop_B20
Phase-B note: Deep-dive foraging loop closing the six flagged gaps from Phase A loops 29/30/02 (Islamic interlinear traditions + global-comparative anchoring). No files from output\2026-08-25_คำแปลแทรกโบราณสากล\ were read or used.

## Queries executed

### websearch tool (worked all session; no 429)
1. Chagatai Turkic interlinear Quran translation manuscript catalog Kazan
2. Judaeo-Arabic manuscript Hebrew interlinear glosses between Arabic lines Geniza
3. Origen Hexapla six columns Hebrew transliteration Aquila Symmachus Theodotion Septuagint arrangement scholarly
4. First printed Quran Turkish translation interlinear Ottoman Istanbul lithograph 1874 1875 mealli mushaf history
5. "Judaeo-Arabic" manuscript "Hebrew translation" "between the lines" interlinear gloss Bible
6. "Ibn Tibbon" Hebrew translation "between the lines" Guide of the Perplexed Arabic manuscript interlinear
7. First printed Quran 1787 Saint Petersburg Kazan 1802 Arabic press history of mushaf printing
8. Geniza manuscripts Hebrew glosses added Judaeo-Arabic texts Olszowy-Schlanger Vidro translation interlinear margins
9. Gentry Salvesen "Hexapla Project" Origen fragments critical edition volume
10. Ottoman Istanbul first printed Quran 1837 lithograph mushaf history before 1874
11. "Hebrew translation" copied "between the lines" Arabic original manuscript Maimonides OR Judaeo-Arabic codex

### Direct fetches (webfetch / curl / Invoke-WebRequest)
- OK: brill.com BP000014.xml (Kin ch.2 landing, full page incl. complete volume ToC); rylandscollections.com blog post (trilingual Qur'an digitisation, full text); journals.uio.no JAIS article PDF (Peacock 2025, 2.7 MB, text-extracted with pypdf); belleten.gov.tr abstract pages; dukespace.lib.duke.edu item page; library.ircica.org rare-books page; melikiancollection.com item page; igelek.tatar two pages; tulayhah.wordpress.com essay.
- Failed: guessed JAIS PDF path .../view/12693/15183 returned 404 before the correct landing page was used.

### Crossref REST API (worked all session)
- Journal sweep: Die Welt des Islams v58-v59 (2018-2019), ISSN 0043-2539, ~100 rows - NO Shah Wali Allah article found in those volumes (see Gap 5).
- Bibliographic queries: Shah Wali Allah Dihlawi Quran Persian translation; Welt des Islams + Quran Persian interlinear; Middle Turkic Glosses Rylands Flemming Eckmann (3 records incl. DOI 10.2307/1569678).
- Author query Spannaus (2 attempts): only his 2019 book Preserving Islamic Tradition surfaces - nothing on Shah Wali Allah in Die Welt des Islams.

### Other APIs
- OpenLibrary search API: Eckmann monograph record verified (Akademiai Kiado, 1976, ISBN 9630509849).
- OpenAlex API: HTTP 429 on the single attempt this session (same environment block as Phase A).

### Local processing
- Peacock 2025 OA PDF downloaded and converted to text via python pypdf; sections "Other Interlinear Translations", census passages and footnotes mined for Chagatai/Khwarazmian evidence.

## Table of sources

| Author | Work | Year | URL | Substance |
|---|---|---|---|---|
| Janos Eckmann | Middle Turkic Glosses of the Rylands Interlinear Koran Translation, Akademiai Kiado, Budapest | 1976 | https://openlibrary.org/search.json?q=Middle+Turkic+Glosses+Rylands+Eckmann | Foundational monograph on the Turkic gloss layer of the Rylands trilingual Qur'an; review notices in Die Welt des Islams 18 (1977) DOI 10.2307/1569678, JAOS 98 (1978) DOI 10.2307/600951, JNES 40.1 (1981) DOI 10.1086/372858 |
| Zsofia Buda (John Rylands) | New online collection of Arabic manuscripts I: the Glorious Qur'an (blog) | 2026 | https://rylandscollections.com/2026/02/03/new-online-collection-of-arabic-manuscripts-i-the-glorious-qur%ca%bfan | Trilingual Qur'an Arabic MSS 760-773 digitised Feb 2026 on Manchester Digital Collections; date debate "13th or 14th century?"; language debate "Khorezmian Turkic? Chagatai? Qarakhanid Turkic?"; Mingana catalogue 1934 anchor |
| A.C.S. Peacock | Medieval Eastern Turkish Interlinear Translation (JAIS 25.3), section "Other Interlinear Translations" | 2025 | https://journals.uio.no/JAIS/article/view/12693 | FULL PDF harvested: Khwarazmian interlinear Tusi minerals text = al-Azhar Library Cairo MS 1252, late 14th c., red-ink translation; "Interlinear Chaghatay Qur'ans are known, but have scarcely been studied"; Navai Chihil Hadith 1481-82 luxury copies Suleymaniye Nuruosmaniye 4968, Ayasofya 3981/1, Fatih 4056/2, Topkapi Revan 328 |
| A.C.S. Peacock | same PDF, census sections | 2025 | same URL | TIEM 73 copyist Muhammad ibn al-Hajj Dawlatshah = Sufi/Mevlevi-linked, Golden Horde Crimea court; Rylands + Tashkent trilingual; Mashhad Astan-i Quds mss partially Persianized; Istanbul Hekimoglu Cami 2 colophon Rabi' II 764/Feb 1363 |
| Mehmed b. Saruhan (copyist); Schmidt cat. | Leiden Or. 504, Koran with interlinear Turkish translation, Gallipoli, 1 July 1520 | 1520 | https://digitalcollections.universiteitleiden.nl/view/item/1575228 | Word-by-word Old Anatolian Turkish interlinear translation of entire Qur'an with occasional commentary; bold Arabic vs smaller Turkish script; refs Schmidt 2000 pp.131-134, Inan 1961, Topaloglu ed. 1976 (Muhammed bin Hamza satir-arasi) |
| Bunkyo Kin (transl. King/Burge/Park/Lushchenko/Hattori) | Chapter 2 Vernacular Reading in East Asia, in Literary Sinitic and East Asia (Brill, Sinographic Cosmopolis 3), pp. 85-163, DOI 10.1163/9789004437302_004 | 2021 | https://brill.com/display/book/9789004437302/BP000014.xml | FULL LANDING PAGE HARVESTED: complete volume ToC (ch.1 kundoku Japan pp.8-84; ch.2 East Asia pp.85-163; ch.3 writing LS; ch.4 sphere conclusions; epilogue), print date 31 Mar 2021, eISBN 9789004437302; body paywalled; no abstract exists on page |
| Johann Karl Schnoor press / Usman Ismail (calligrapher) | St Petersburg Arabic Qur'an ordered by Catherine II, Asiatic Printing House | 1787 (page 2025) | https://igelek.tatar/en/publications/st-petersburg-editions-of-the-quran/ | First complete printed Qur'an in Russia, edition 1200 copies; Tatar calligrapher Usman Ismail prepared text AND marginal reading-explanations; six reprints within a decade; fonts later moved to Kazan; Brill EQ entry EQCOM_056211 exists (paywalled); Basel scan via https://archive.org/details/quran-st-petersburg-1787 |
| Asian Printing House Kazan | Kazan Basmasy Qur'an | 1803 (news 2023) | https://igelek.tatar/en/news/220-years-later-the-most-famous-kazan-edition-in-the-world-quran-kazan-basmasy-was-printed-for-the-first-time-in-modern-mushaf-format/ | Two-volume 1803 Kazan edition; later remembered as first printed Qur'an to win theological recognition in the Muslim world under the Uthmanic rasm; NOTE date discrepancy with Tulayhah's Kazan 1801 claim |
| Z.S. Zengin (reconfirmed) + IRCICA | Sekerzade Mushaf-i Serif, Istanbul 1291/1874 - "The first Mushaf officially printed in the Ottomans" | 1874 | https://library.ircica.org/rare-books-and-manuscripts-collection/ ; https://belleten.gov.tr/ozet/3734/eng | IRCICA names the specific edition behind Belleten's 1874 state-supervised print; IRCICA also holds Chagatai manuscripts; Vankulu Lugati 1729 listed as first Ottoman-Turkish printed book |
| Melikian Collection (dealer note, flagged) | Ottoman Lithographic Qur'an item description | n.d. (item c.1880s) | https://melikiancollection.com/artwork/ottoman-lithographic-quran-5727/ | Henri Cayol founded first Istanbul litho press 1831; first lithographed Ottoman Qur'an claimed at 1304 Rumi = 1887/88, based on Hafiz Osman's calligraphy, imperial-palace supervision; Matbaa-i Osmaniye 1866 + claimed 50-year Qur'an monopoly 1880 - dealer narrative pending corroboration |
| Hexapla Institute / IOSCS | Edition + project pages | current | https://hexapla.org/edition/ ; https://www.ocla.ox.ac.uk/hexapla-project ; https://textandcanon.org/research/hexapla/ | New critical edition replacing Field 1875; board Gentry/Salvesen/ter Haar Romeny; caveat verbatim "we do not know how the whole Hexapla, word by word, was arranged"; print via Peeters |
| John D. Meade | A Critical Edition of the Hexaplaric Fragments of Job 22-42 (Origen's Hexapla: Critical Edition of Extant Fragments 1, Peeters) | 2020 | cited at hexapla.org/edition | First volume of new series |
| Alison Salvesen | "'A New Field' for the Twenty-First Century? Rationale for the Hexapla Project", in The Text of the Hebrew Bible and Its Editions: Studies in Celebration of the Fifth Centennial of the Complutensian Polyglot, Brill, pp. 286-309 | 2017 | cited at hexapla.org/edition | Direct scholarly bridge Hexapla <-> Complutensian lineage (extends loop_30 Cisneros doc) |
| A. Salvesen (ed.) | Origen's Hexapla and Fragments, TSAJ 58, Mohr Siebeck, DOI 10.1628/978-3-16-158786-3 | 1998 | https://www.mohrsiebeck.com/en/book/origens-hexapla-and-fragments-9783161587863/ | ToC captured from publisher preview: Schaper on fifth column origin/purpose; Jenkins on first-column evidence of Milan codex Rahlfs 1098 and Cairo Genizah fragment Rahlfs 2005; Norton on first two columns |
| Meade et al. (eds.) | The Forerunners and Heirs of Origen's Hexapla, De Septuaginta Investigationes 19, Vandenhoeck & Ruprecht, OPEN ACCESS vr-elibrary.de | 2024 | https://www.degruyterbrill.com/document/isbn/9783666500725/html | Current state of scholarship; Hexapla probably destroyed in 7th c.; fragments only |
| Britannica | Hexapla; Biblical literature - Origen's Hexapla | current | https://www.britannica.com/topic/Hexapla | Six parallel columns before AD 245: Hebrew; Hebrew in Greek characters; Aquila; Symmachus; Septuagint; Theodotion; extra columns for Psalms; fifth column as Origen's main interest |
| H.B. Swete | An Introduction to the OT in Greek, ch. III The Hexapla | classic (public domain) | https://mail.biblehub.com/library/swete/an_introduction_to_the_old_testament_in_greek_additional_notes/chapter_iii_the_hexapla_and.htm | Column-order rationale (Aquila most literal next to Hebrew); Ps 45(46):1-3 specimen aligned word-by-word (Milan palimpsest); obelus/asterisk system context |
| Catholic Encyclopedia | Hexapla | 1913 | https://www.ecatholic2000.com/cathopedia/vol7/volseven353.shtml | Fragments show one-two Hebrew words per line with transliteration and renditions level-by-level; metobelus closing signs |
| Nadia Vidro | A Judeo-Arabic Bible Commentary in the Bamiyan Papers (NLI Ms.Heb.8333.6, Saadia commentary on Isaiah 34-35) | 2025 | https://discovery.ucl.ac.uk/10222999/1/Vidro_2025_A_Judeo-Arabic_Bible.pdf | Adjacent phenomenon: Hebrew incipits + Judeo-Arabic translation/commentary units; Hebrew-to-Arabic script-switching as margin-keeping device; punctuation from sof pasuq tradition |
| N. de Lange & N. Tchernetska | Glosses in Greek script and language in medieval Hebrew manuscripts, Scriptorium 68.2, pp. 253-264 | 2014 | https://www.persee.fr/doc/scrip_0036-9772_2014_num_68_2_4309 | Reverse-direction glossing attested elsewhere in Jewish book culture: Greek-language glosses on Hebrew base texts |
| Aaron L. Forman | Unifying Culture Through Language... Saadia Gaon's Work (JCSR 4.1) | 2023 | https://jcsr.journal.unida.gontor.ac.id/index.php/jcsr/article/view/54 | OA study comparing Geniza fragments of Saadia's Tafsir/Siddur re visual interplay of Hebrew and Judeo-Arabic (colour, hand, marginal notes) |
| Cambridge T-S Genizah Unit | Fragment of the Month June 2026 (T-S 13J3.6) | 2026 | https://www.lib.cam.ac.uk/collections/departments/taylor-schechter-genizah-research-unit/fragment-month/fotm-2026/fragment-2 | Judaeo-Arabic Saadia Leviticus-commentary leaf whose transcription marks "Interlinear additions in the original... by forward slashes" - interlinear addition practice inside Judaeo-Arabic base texts |

## Key findings

Gap 1 - Chagatai/Turkic interlinear catalogs: CLOSED. Four citable chains now exist. (a) Holding + catalogue + facsimile: John Rylands trilingual Qur'an Arabic MSS 760-773 (Crawford collection; Mingana catalogue 1934) fully digitised February 2026, with the curator explicitly recording the open classification question (Khorezmian/Chagatai/Qarakhanid; date 13th-14th c.). https://rylandscollections.com/2026/02/03/new-online-collection-of-arabic-manuscripts-i-the-glorious-qur%ca%bfan . (b) Classic study: Eckmann 1976 monograph (Akademiai Kiado, ISBN 9630509849, verified via OpenLibrary) with three Crossref-indexed review records incl. Die Welt des Islams 18 (1977) DOI 10.2307/1569678. (c) Survey statement + named holdings: Peacock 2025 full PDF - "Interlinear Chaghatay Qur'ans are known, but have scarcely been studied"; TIEM 73 copyist identified as a Sufi-linked figure active at the Golden Horde Crimea court; Navai's interlinear Chihil Hadith survives in four catalogued luxury copies (Suleymaniye Nuruosmaniye 4968, Ayasofya 3981/1, Fatih 4056/2, Topkapi Revan 328). (d) Non-Qur'anic extension: unique Khwarazmian interlinear Tusi manuscript al-Azhar Cairo MS 1252 (late 14th c., red-ink translation). Anatolian comparison witness: Leiden Or. 504 (1520 Gallipoli).

Gap 2 - Judaeo-Arabic manuscripts with HEBREW interlinear glosses between Arabic lines: NEGATIVE RESULT DOCUMENTED (ยังไม่พบข้อมูลยืนยัน for the exact phenomenon after three targeted searches). What IS verified around it: (a) interlinear ADDITIONS inside Judaeo-Arabic base texts are real and marked by editors (Cambridge FoM June 2026 on T-S 13J3.6); (b) reverse-direction glossing exists in Jewish book culture generally - de Lange & Tchernetska 2014 document Greek-script Greek-language glosses in medieval Hebrew manuscripts; (c) Ibn Tibbon gloss culture on Maimonides is already documented in loop_29 (Fraenkel ~100 glosses/145 mss), but as marginal/glossary apparatus per SEP, not interlinear; (d) Vidro 2025 shows Hebrew incipits embedded in Judeo-Arabic commentary layout (Bamiyan Papers). Recommendation for the book: state honestly that the Saadia direction (Arabic gloss serving Hebrew base) dominates and the mirror-image format is not attested in sources accessible this session.

Gap 3 - Hexapla anchoring: CLOSED. Six-column order verified against Britannica ("Hebrew text..., the Hebrew text in Greek characters, and the Greek versions of Aquila, Symmachus, the Septuagint, and Theodotian in six parallel columns", before AD 245), Swete's chapter (with word-aligned specimen and column-order rationale), and Catholic Encyclopedia's fragment-based line description; anchored academically to the Hexapla Project/Institute (board Gentry-Salvesen-ter Haar Romeny; Field 1875 superseded), Salvesen ed. 1998 TSAJ 58 (incl. Jenkins's first-column evidence from Milan codex Rahlfs 1098 and the CAIRO GENIZAH Hexapla psalter fragment Rahlfs 2005), Meade 2020 (Peeters vol. 1), and the OA 2024 Forerunners-and-Heirs volume. Bonus bridge to loop_30: Salvesen 2017's rationale chapter appeared in the Complutensian fifth-centennial volume (Brill) - modern scholarship itself links the two polyglots. Mandatory drafting caveat from hexapla.org: the original word-by-word columnar layout cannot be reconstructed with certainty.

Gap 4 - Kin Bunkyo ch.2 access: CLOSED AT LANDING-PAGE LEVEL. Full Brill page fetched: Chapter 2 "Vernacular Reading in East Asia", pp. 85-163, DOI 10.1163/9789004437302_004, five translators named, complete seven-part volume ToC captured (kundoku Japan deep case -> East Asia extension -> Literary Sinitic writing -> sphere conclusions -> epilogue), plus back-matter structure. No abstract paragraph exists on the page (recorded); body remains paywalled (EUR 35), consistent with loop_B06's OAPEN negative.

Gap 5 - "Shah Wali Allah 2019 Die Welt des Islams article": NOT FOUND - recorded as unresolvable trail (ยังไม่พบข้อมูลยืนยัน). Two Crossref sweeps over Die Welt des Islams v58-v59 (2018-2019) list no such article; bibliographic and author queries surface only Baljon/Troll-related reviews (e.g., Troll review of Baljon, DiW 1989, DOI 10.2307/1570991) and Spannaus's unrelated 2019 book. Working hypothesis: the loop brief conflated Khan 2024 Muslim World (muwo.12481, abstract-only in loop_29) with Die Welt des Islams. The substantive gap stands as before: Khan's body text beyond abstract.

Gap 6 - Ottoman tefsirli/mealli print milestones: EXTENDED WITH THREE VERIFIED ITEMS. (a) IRCICA (official OIC research centre library page) names the first officially printed Ottoman mushaf concretely: "Sekerzade Mushaf-i Serif, Istanbul, 1291/1874" - the specific edition behind Zengin 2023's 1874 Ministry-of-Education print. (b) Dealer-documented (flagged) lithography branch: Henri Cayol opened Istanbul's first litho press 1831; first lithographed Ottoman Qur'an claimed at 1304 Rumi (1887/88), modelled on Hafiz Osman's calligraphy under palace supervision. (c) Russian comparative line fully documented: St Petersburg 1787 (Schnoor Asiatic press, Catherine II order, 1200 copies, Tatar calligrapher Usman Ismail adding MARGINAL reading explanations - an early print-era paratext parallel), then Kazan Asian Printing House 1803 two-volume edition that became the theologically recognised Kazan Basmasy (date discrepancy noted: some sources say 1801). Muteferrika-era connection clarified: IRCICA lists the 1729 Vankulu dictionary as the first Ottoman-Turkish printed book; no Qur'an was printed under Muteferrika himself.

Cross-cutting: websearch provider recovered this session (no 429), enabling closure of gaps that Phase A loops had to leave snippet-only.

## Gaps closed

1. Chagatai/Turkic interlinear Qur'an catalogs - closed (holding + monograph + survey statement + four named luxury copies + non-Qur'anic witnesses).
2. Judaeo-Arabic Hebrew-glossed lines - closed as honest negative with adjacent phenomena documented.
3. Hexapla six-column anchoring - closed (scholarly infrastructure + standard descriptions + drafting caveat).
4. Kin ch.2 ToC/abstract - closed at landing-page level (complete ToC; abstract does not exist on page).
6. One more Ottoman print milestone - closed (three items: Sekerzade 1874 name; Cayol 1831 / first litho mushaf 1887-88; St Petersburg 1787 + Kazan 1803 line).

## Remaining

- Gap 5 unresolved: no 2019 Die Welt des Islams Shah Wali Allah article traceable via Crossref (ยังไม่พบข้อมูลยืนยัน); Khan 2024 body still abstract-only.
- Kin ch.2 BODY TEXT beyond ToC (paywalled; purchase or institutional access needed).
- Detailed published CATALOGUE of interlinear Chaghatay Qur'ans specifically (Peacock confirms category exists but "scarcely been studied"); Central Asian (Tashkent Al-Beruni Institute) collections remain offline-inaccessible per digitalorientalist.com guide.
- First Ottoman lithographed Qur'an date (1887/88) rests on a dealer description - needs scholarly corroboration (Kuran Burcoglu 2007 or Taylor 2006 candidates).
- JOTSA 5.1 (2018) open PDF on Qur'an printing in Istanbul: article identity unresolved (ISSN guess failed; fetch of jstor.org/stable/pdf not attempted beyond capture).
- Exact wording/extent of Eckmann 1976 monograph contents (metadata verified; body not accessed).

## Blocked sources (honest record)

- OpenAlex API: HTTP 429 (single attempt; consistent with Phase A sessions).
- brill.com chapter bodies: paywalled (landing pages fine).
- referenceworks.brillonline.com EQ entry EQCOM_056211: snippet only.
- jstor.org PDF: not fetched (identity unresolved first).
- Crossref journal-ID probe for JOTSA ISSN 2151-6460: 404 (wrong ID; not pursued further).
- Guessed JAIS PDF direct path: 404 once; resolved via article landing page instead.

## Files created this loop

- research-notes/loop_B20/findings.md (this file)
- documents/[1976]-Eckmann-middle-turkic-glosses-rylands.md
- documents/[2025]-Peacock-chagatai-nonquranic-interlinear.md
- documents/[2021]-Kin-brill-ch2-vernacular-reading-east-asia.md
- documents/[1787]-StPetersburg-Kazan-Ottoman-printed-Quran-line.md
- documents/[2020]-Meade-Hexapla-six-columns-scholarly-sources.md
