# Loop B10 Report — Master Bibliography Compilation (final Phase B loop)

Date: 2026-08-26 | Scope: RESEARCH ONLY (bibliographic compilation + identifier verification)
Deliverable: `master-bibliography.md` (same folder), containing the three-section bibliography and the verification log.

## 1. Method

1. Concatenated and read all 24 loop reports (`loop_00_init`, `loop_A01`–`loop_A15`, `loop_B01`–`loop_B09`) from `research-notes\loop_*\loop-report.md` into a single working file; extracted every cited source with its verifying loop.
2. Verified 6 DOIs via Crossref REST API (`api.crossref.org/works/{DOI}`) exactly as tasked: 10.4259/ibk.21.947; 10.1163/2467-9666_enbo_COM_0067; 10.1017/S1356186300010282; 10.1093/jaarel/lfy025; 10.1080/14639947.2017.1373436; 10.1086/382328.
3. Verified 3 ISBNs via Open Library Books API (`openlibrary.org/api/books?bibkeys=ISBN:…&jscmd=data`): 8185102872, 9780861711536, 9781614293286.
4. Compiled `master-bibliography.md`: Section 1 Primary Sources (manuscripts; Sanskrit editions/e-texts; Tibetan root + commentaries; Indian testimonia; Chinese witnesses; modern translations incl. documented absences); Section 2 Secondary Sources by language; Section 3 Online Sources with access dates 2026-08-25/26. Every entry tagged [loop_XX]; unresolved identifiers tagged [VERIFY]. Chicago/Turabian notes-bibliography style, original-language titles, no Wikipedia.

## 2. Verification results (full table in master-bibliography.md)

| Identifier | Result |
|---|---|
| DOI 10.4259/ibk.21.947 | VERIFIED — Yoritomi, JIBS 21/2 (1973) 945–947 [Crossref "947–945" reverse pagination] |
| DOI 10.1163/2467-9666_enbo_COM_0067 | VERIFIED — "Tantric Prakaraṇas", Brill's Encyclopedia of Buddhism Online; Crossref metadata sparse (type dataset; publisher now Walter de Gruyter GmbH; no author/date/pages) — completed from loops A03/A14 (BEB I 2015: 755–761; online first 01 Nov 2020) |
| DOI 10.1017/S1356186300010282 | VERIFIED — Lo Bue review of Ruegg 1995, JRAS 8/2 (Jul 1998): 293–296 |
| DOI 10.1093/jaarel/lfy025 | VERIFIED — Lucia, JAAR 86/4 (2018): 953–988 |
| DOI 10.1080/14639947.2017.1373436 | VERIFIED — Maria Sharapan & Mitra Härkönen, Contemporary Buddhism 18/2 (2017): 437–454 |
| DOI 10.1086/382328 | VERIFIED — Dan Arnold's review OF Davidson 2002, Journal of Religion 84/1 (2004): 147–150 (not a review by Davidson) |
| ISBN 8185102872 | VERIFIED — Fifty Stanzas on the Spiritual Teacher, LTWA 1992, 38 pp., OL1251539M |
| ISBN 9780861711536 | VERIFIED — The Fulfillment of All Hopes, Wisdom 1999, OL 149 pp. (publisher page 160 pp.; variance logged) |
| ISBN 9781614293286 | VERIFIED — Fifty Verses of Guru Devotion, tr. Sparham, Wisdom 2016, OL51961685M |

## 3. Corrections surfaced during compilation

1. Sharapan/Härkönen forenames corrected per Crossref: Maria Sharapan, Mitra Härkönen (loop B06 had "Heta"/"Inka").
2. 10.1086/382328 clarified: review by Dan Arnold of Davidson's *Indian Esoteric Buddhism*.
3. Lucia 2018 issue/pages completed: 86/4, 953–988.
4. ENBO COM_0067 publisher field now De Gruyter (post-merger); Crossref carries no author/date — flagged so the report cites Brill/BEB I data instead of Crossref alone.
5. Page-count variance for Sparham 1999 recorded (149 vs 155 vs 160 across Open Library/work record/publisher page).

## 4. Files produced this loop

- `master-bibliography.md` — the deliverable (Sections 1–3 + verification log + [VERIFY] list + corrections register)
- `loop-report.md` — this file
(No documents/ downloads needed; all verification via APIs.)

## 5. Gaps handed to Phase C

See the [VERIFY] list in master-bibliography.md (12 items): Dhīḥ 13 internal pages; BLGS Tibetan end-page; Sakai 1972/Takakusu 1927 content; Owens/Fitzgerald relevance; Li 1994 thesis record; Kapstein Kashmir chapter; Russian/Spanish translator attributions; Davidson 2002 full-text mention check; Szántó–Sferra edition status; KCDS witness identity.
