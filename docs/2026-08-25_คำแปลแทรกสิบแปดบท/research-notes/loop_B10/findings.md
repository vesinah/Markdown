# Loop B10 Findings — Burmese Nissaya Scholarship in Depth (closing Loop 17 gaps)

Date: 2026-08-26
Project: output\2026-08-25_คำแปลแทรกสิบแปดบท (Thai-language academic book on interlinear additions, interlinear glosses, and scholia)
Status: loop complete; Phase-B follow-up to Phase-A loop_17. 5 documents harvested into documents/.

## Queries executed

Web/API:
1. Semantic Scholar citations API on Okell 1965 DOI (10.1016/0024-3841(65)90013-6) — 16 citing works + citation contexts (SUCCESS; OpenAlex was budget-blocked again)
2. Crossref API: Kirichenko+Burma, Handlin+Burma, "Etude linguistique nissaya birmans", "Kingdom of Metta" (SUCCESS x4)
3. Semantic Scholar author search "Alexey Kirichenko"; paper search "From Thathanadaw..."; sweep "nissaya Burmese literature" (SUCCESS, with rate-limit pauses)
4. BnF catalogue SRU API: bib.anywhere all "nissaya" (SUCCESS — the Pruitt record)
5. archive.org advancedsearch + metadata + direct djvu.txt downloads: Epigraphia Birmanica 1919-1934 OCR complete (FULL TEXT); Bode, Pali Literature of Burma 1909 (FULL TEXT); JBRS holdings check; BDRC nissaya manuscript records
6. Direct PDF re-fetch: lockwoodonlinejournals.com JAOS Walker 2020 download/679/532 → PyMuPDF text extraction (SUCCESS, 26 pp.)
7. MDPI OA fetch of Handlin 2020 (Religions 11(5):230) full PDF (SUCCESS, 59 pp.) — grep for nissaya = ZERO
8. exa websearch tool: HTTP 429 for the entire session (all keyword web searches failed over to API/OCR strategies)

## Table of sources

| Author | Title | Year | URL / locator | Substance |
|---|---|---|---|---|
| Mabel H. Bode | The Pali Literature of Burma (Prize Publication Fund II), RAS London | 1909 | https://archive.org/details/paliliteratureof00bode | FULL TEXT HARVESTED: **Appendix to Chapter III** = the A.D. 1442 (b.e. 804) inscription of the GOVERNOR OF TAUNG DWIN and his wife; donated library list numbered 1-295+ (รายการเกิน 295 ชิ้น — ไม่ใช่ ~230 ตามที่ระบุครั้งแรก) incl. Sanskrit works and exactly 15 explicit nissaya items; plus 17th-c. Sagaing nissayas, 23 Abhidhammatthasangaha nissayas per Pitakatthamain, Ledi Sayadaw's Niruttidipani-nissaya |
| C. O. Blagden (ed.) | Epigraphia Birmanica ... vol. 1 pt. 2 (repr. ed. Duroiselle), p. 93; compiled EB 1919-1934 OCR | 1919-34/1960 | https://archive.org/details/epigraphia-birmanica-1919-1934-ocr-complete | FULL TEXT HARVESTED: Great Shwezigon Inscription (Kyanzittha era) contains "a nissaya of Pali words paraphrased in Mon" — primary epigraphic bitext evidence cited by Walker fn 13 |
| Trent Walker | Indic-Vernacular Bitexts from Thailand, JAOS 140.3: 675-700 | 2020 | https://lockwoodonlinejournals.com/index.php/jaos/article/download/679/532 | PDF re-fetched and mined: verbatim late-13th-c. claim; "an inscription from 1442" WITHOUT Thaungdwin/governor wording; fn 13 = Blagden EB I/2:93; Table 1 (steps 1a-b, 2a-e, modes 3a-d); fn 1 terminology inventory |
| William Pruitt | Etude linguistique de nissaya birmans: traduction commentee de textes bouddhiques, EFEO Monographies no. 174 | 1994 | BnF ark:/12148/cb370631953 | Bibliography CLOSED via BnF SRU: series no. 174, ISBN 2-85539-774-X, 287 pp., Paris 1994 (impr. 1995); contains Bhikkhupatimokkha extract + multiple Burmese versions with French translation; biblio pp. 271-276 |
| John Okell | Nissaya Burmese, Lingua 15: 186-227 (= JBRS 50.1 [1967]: 95-126) | 1965 | dossier doc | Body still paywalled; secondhand characterization assembled from Herngseng 2023, Jenny 2009 context (Okell 1965:203 causative se as standard translation of Pali causatives), Candier (Okell 1967 on Monywe hsara-taw's near-nissaya style), Walker fn 2 |
| Alexey Kirichenko | From Ava to Mandalay (JBS 2009, DOI 10.1353/jbs.2009.0001); The Making of the Culprit (JBS 15.2 [2011], DOI 10.1353/jbs.2011.0013); From Thathanadaw to Theravada Buddhism (ch. in DuBois ed., Casting Faiths, Palgrave 2009, DOI 10.1057/9780230235458_2); Dynamics of Monastic Mobility (Lammerts ed., ISEAS 2015); Itineraries of Sihala Monk Saralankara (Buddhist and Islamic Orders in Southern Asia, 2019) | 2009-2019 | Crossref/S2 verified | Publication profile established; NO nissaya-specific study located |
| Lilian Handlin | The Uses of Human Malleability: Images of Hellish and Heavenly Sojourns in Pre-Modern Burma, Religions 11(5):230 | 2020 | https://doi.org/10.3390/rel11050230 | Full OA PDF fetched (59 pp.): ZERO occurrences of "nissaya", zero "palm(-leaf)" — negative verification |
| Ven. P. Herngseng | Burmese Nissaya Literature, Manusya 26.1 | 2023 | https://brill.com/view/journals/mnya/26/1/article-p1_004.xml | Source of the Okell characterization and of the Thaungdwing-governor gloss attributed there to Walker |
| BDRC via archive.org | Saddaniti nissaya (bdrc-W1FPL2687); Bhikkhupatimokkha/Mulasikkha/Khuddasikkha nissaya mss (bdrc-W1FPL6014); ~28 more nissaya ms records | undated mss | https://archive.org/search?q=nissaya | Primary-corpus witnesses of palm-leaf/folded-book nissaya manuscripts digitized by BDRC |

## Key findings (with URLs)

1. GAP 2 CLOSED — WALKER BODY VERIFIED FIRSTHAND, WITH AN ATTRIBUTION FIX. Re-fetched the OA PDF and extracted the exact sentence (JAOS 140.3 [2020], 678): "Pali-Burmese examples are extant from the late thirteenth century, and several Sanskrit-Burmese bitexts are listed in an inscription from 1442." IMPORTANT: Walker does NOT name Thaungdwin(g) or a governor anywhere in the article; that sentence carries no footnote at all. The Thaungdwin-governor identification comes from Bode 1909 (see finding 2). Herngseng 2023 merges the two sources while citing only Walker. For print: cite Walker 678 for the bare claim; cite Bode for Taungdwin/governor/work-list. Also extracted: Table 1 (bitext composition: selection 1a-b; analysis 2a parsing, 2b amplification, 2c rearrangement, 2d annotation, 2e gloss; presentation modes 3a philological, 3b exegetical, 3c homiletic, 3d poetic); fn 13 = Blagden EB vol. 1 pt. 2: 93; fn 10 (Sinhala omits 2d because morphology covers what Burmese/Mon/Khmer/Tai do with particles). https://lockwoodonlinejournals.com/index.php/jaos/article/download/679/532

2. GAP 5 CLOSED — THE 1442 INSCRIPTION VERIFIED INDEPENDENTLY IN BODE 1909. Bode's Appendix to Chapter III ("An Inscription of A.D. 1442"): found among Forchhammer's collection AT PAGAN; dated b.e. 804 = a.d. 1442; commemorates gifts "by the Governor of TAUNG DWIN and his wife"; includes monastery, garden, paddy-lands, slaves AND "a collection of texts" whose copied list Bode prints (~230+ items). She highlights "a number of titles of Sanskrit works, sometimes greatly disguised in the Burmese transcription". Explicit nissaya items in the list: Atthasalini-nissaya (182), Kaccayana-nissaya (183), Rupasiddhi-nissaya (184), Jataka-nissaya (185), Dhammapadaganthi-nissaya (187), Amarakosanissaya (250), Pindo nissaya (251), Kalapanissaya (252), Sarasangaha-nissaya (287), Rogayatra-/Roganidana-nissaya (288-289), Saddatthabhedacintanissaya (290), Paranissaya (291), Shyaramitikabya nissaya? (292), Brihajjataka-nissaya (293). Identifiable Sanskrit works include Katantra-circle Kalapapancika, Kasikapruttipalini (Kasikavrtti commentary!), Tarkabhasa (logic), Kamandaki's Nitisara, Dandin (?Kavyadarsha), Rattamala (?Halayudha), Roganidana (?Madhavanidana), Dravyagunasamgraha. Source chain: Tun Nyein trans., Inscriptions of Pagan, Pinya and Ava (Rangoon: Government Printing, 1899; impressions printed 1902 from Forchhammer's ink impressions); Pelliot, BEFEO 5 (1905): 183 mentions it; MSS reportedly in Bernard Free Library, Rangoon. Spelling note: Bode writes "Taungdwin"; Herngseng writes "Thaungdwing". https://archive.org/details/paliliteratureof00bode

3. PRIMARY EPIGRAPHIC BITEXT — SHWEZIGON GREAT INSCRIPTION CONTAINS A MON NISSAYA (new find). In Epigraphia Birmanica (compiled 1919-1934 OCR, full text downloaded): the Great Shwezigon Pagoda inscription (Pagan, Kyanzittha-era titulature Sri Tribhuwanadityadhammaraja) is edited with an explicit note: "What follows, as far as the middle of A 3, is in Pali... Then comes a nissaya of Pali words paraphrased in Mon," and "'The blessed Sakya[muni]'... These words begin the nissaya." This is the very evidence behind Walker's "earliest surviving mainland Southeast Asian example is a Pali-Mon inscription from the late eleventh or early twelfth century" (fn 13 → Blagden, EB I pt. 2: 93). Negative check recorded: EB 1919-34 has zero hits for Thaungdwin/Taungdwin(g) (Ava-period material published elsewhere) and exactly 2 occurrences of "nissaya" (both Shwezigon). https://archive.org/details/epigraphia-birmanica-1919-1934-ocr-complete

4. GAP 6 CLOSED — PRUITT 1994 EXACT RECORD VIA BN F. BnF SRU record ark:/12148/cb370631953: Etude linguistique de "nissaya" birmans: traduction commentee de textes bouddhiques, Paris: Presses de l'EFEO, 1994 (printed 1995); SERIES Monographies de l'EFEO no. 174 (ISSN 1269-8326); ISBN 2-85539-774-X; 287 p., 28 cm; contents = Bhikkhupatimokkha extract (Pali + French) followed by DIFFERENT BURMESE VERSIONS with French translation; bibliography pp. 271-276; index. Okell's review: Buddhist Studies Review 14.2, DOI 10.1558/bsrv.v14i2.14875. No digital scan located (ยังไม่พบข้อมูลยืนยัน).

5. GAP 1 PARTIALLY CLOSED — OKELL SECONDHAND CHARACTERIZATION ASSEMBLED (body still paywalled). Verified pieces: (a) Herngseng 2023: "According to John Okell (1965, 186-227) nissaya is a linguistic analysis with special emphasis on Pali grammar features in the Burmese language; since its early development in the late Pagan period Burmese has been heavily influenced by Pali grammatical syntax." (b) Semantic Scholar citation context from Jenny 2009 quoting "Okell 1965:203": postverbal auxiliary se 'let, make...' is "a standard translation for Pali causatives". (c) Candier cites "Okell 1967" for Monywe hsara-taw's chronicle style being "close to nissaya... translates Pali phrases into Burmese and then interprets them" (validates the JBRS reprint as citable). (d) Walker fn 2 frames Pruitt 1994 as building on Tin Lwin and Okell for particle/abbreviation systems. JBRS vol. 50 not digitized on archive.org (holdings end c. vol. 22, 1932).

6. GAP 3 PARTIALLY CLOSED — KIRICHENKO PROFILE FIXED; NO NISSAYA STUDY EXISTS UNDER HIS NAME (so far). Crossref/S2-verified works: "From Ava to Mandalay: Toward Charting the Development of Burmese Yazawin Traditions," JBS 13(2) (2009), DOI 10.1353/jbs.2009.0001; "The Making of the Culprit: Atula Hsayadaw Shin Yasa and the Politics of Monastic Reform in Eighteenth-Century Burma," JBS 15.2 (2011): 189-229, DOI 10.1353/jbs.2011.0013; "From Thathanadaw to Theravada Buddhism..." chapter in T. DuBois ed., Casting Faiths (Palgrave 2009), DOI 10.1057/9780230235458_2; "Dynamics of Monastic Mobility..." in Lammerts ed., Buddhist Dynamics (ISEAS 2015); "The Itineraries of 'Sihala Monk' Saralankara: Buddhist Interactions in Eighteenth-Century Southern Asia" in Ricci/Green eds., Buddhist and Islamic Orders in Southern Asia (2019). None is nissaya-specific. The brief's guess "The Kingdom of Metta": NO such title found in Crossref title search (78k fuzzy hits scanned; nothing matching) — treat as unverified (ยังไม่พบข้อมูลยืนยัน). MUSE full texts paywalled; no OA copies surfaced.

7. GAP 4 CLOSED AS NEGATIVE — HANDLIN ON NISSAYA NOT VERIFIABLE. Her longest recent premodern-Burma piece (Religions 11[5]:230 [2020], 59 pp., full OA PDF fetched) contains ZERO instances of "nissaya" (and none of "palm"), i.e. her documented work treats donation culture, hell/heaven imagery, Buddhavacana decor programs - not the gloss genre. Crossref shows her other items are JBS editorials/editor notes. No dedicated Handlin-on-nissaya publication exists in indexed literature (ยังไม่พบข้อมูลยืนยัน for any such claim).

8. BONUS GENRE-HISTORY DATA FROM BODE (usable in the book's Burmese chapter). (a) "The Sagaing monasteries also produced a number of Burmese nissayas (interpretations or paraphrases) on Abhidhamma texts during the seventeenth century." (b) "Probably no Pali work on the Abhidhamma has been more often translated and paraphrased than the Abhidhammattha-sangaha, of which the Pitakatthamain alone mentions twenty-three different Burmese nissayas." (c) Ariyavamsa (15th c.) wrote a Burmese-language atthayojana of the Anutika — earliest vernacular metaphysics named by the Sasanavamsa; Bode conjectures "Mahanissara" should read "Mahanissaya (chief commentary or gloss in Burmese)". (d) Continuity into print: Alankaranissaya of Yaw-mya-sa Atwin-wun (1880); Chandovinanjari "followed by a nissaya in Burmese" (1897); Ledi Hsayadaw's Niruttidipani plus its own Burmese nissaya (1905-06). (e) A copy of Kaccayanasara presented to a Pagan monastery in 1442 — the grammar's Upper-Burma currency fixed by the same inscription. https://archive.org/details/paliliteratureof00bode

9. PRIMARY CORPUS WITNESSES (BDRC scans on archive.org, metadata verified): Saddaniti nissaya (teak covers, gilded leaves, vermilion band, 540 cm woven silk ribbon; bdrc-W1FPL2687); Bhikkhupatimokkha/Mulasikkha/Khuddasikkha nissaya compendium (bdrc-W1FPL6014); plus c. 28 further BDRC nissaya manuscripts searchable under q=nissaya (Visuddhimagga nissaya, Saddaniti nissaya, Abhidhana nissaya, Parivara nissaya, etc.). Usable as physical-evidence paragraph for palm-leaf/folded-book nissaya production. https://archive.org/search?q=nissaya

## Gaps closed vs remaining

Closed this loop:
- Gap 2 (Walker body): fully closed, incl. attribution fix (Thaungdwin/governor belongs to Bode 1909, not Walker).
- Gap 5 (1442 inscription): closed beyond target — full work list recovered with Sanskrit titles and explicit nissaya entries.
- Gap 6 (Pruitt EFEO series number): closed — EFEO Monographies no. 174.
- Gap 4 (Handlin): closed as a documented negative.
- Bonus: epigraphic Mon nissaya (Shwezigon) tied to Walker fn 13.

Partially closed:
- Gap 1 (Okell body): four independent secondhand characterizations + one page-specific citation context (1965:203) secured; body text itself still inaccessible.

Remaining:
- Okell 1965/1967 body text (paywalled everywhere checked; JBRS reprint not digitized).
- Kirichenko full texts (MUSE/Palgrave paywalled; no OA copies found).
- Pruitt 1994 scan (no digital copy located).
- Tin Lwin 1961 thesis microfilm (still unresolved attribution conflict inside Herngseng re Mahakassapa vs Minister Thanbyin for the Khuddakasikkha nissaya).
- "Kingdom of Metta" attribution from the original brief: unverifiable (ยังไม่พบข้อมูลยืนยัน).

## Blocked sources (recorded honestly)

- exa websearch tool: HTTP 429 for entire session.
- OpenAlex API: "Insufficient budget" error again (same as loop 17).
- Google Books API: HTTP 429 on every attempt.
- SOAS repository (worktribe): HTTP 403 (both loops).
- UZH repository (Jenny 2015 PDF): blocked by Anubis anti-bot proof-of-work wall.
- Benjamins (Zakaria 2024, alal.00020.zak): HTTP 403.
- MDPI HTML landing page: HTTP 403 (but mdpi-res.com direct PDF succeeded).
- Bing/DDG HTML scraping: returned irrelevant results / NonInteractive-mode failure; abandoned in favor of APIs.
