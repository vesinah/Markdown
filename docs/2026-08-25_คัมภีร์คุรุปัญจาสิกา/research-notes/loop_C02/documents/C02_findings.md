# Loop C02 — Evidence File: Gurupañcāśikā Printed Editions (remaining gaps)

Date: 2026-08-26. RESEARCH ONLY. No Wikipedia cited. All quotations below are exact, copied from the saved sources listed.

---

## Task 1 — BLGS 1997 archive.org scan: file inventory, small OCR file, Tibetan section end

Item: `EfEc_bauddha-laghu-granth-sangraha-edited-by-janardan-pandey-durlabh-bouddh-granth-ma`
Metadata re-fetched live this loop and saved: `ia-metadata-blgs-1997.json`.

File inventory (from `/metadata` JSON): one original `Text PDF` ("Bauddha Laghu Granth Sangraha Edited By Janardan Pandey, Durlabh Bouddh Granth Mala 14 - Kendriya Uccha Tibbati Shiksha Samstha, Varanasi.pdf", size 115030747 bytes, md5 a5d3a81e3f461afeb1d2d515196a9af4) plus standard derivatives: `_chocr.html.gz`, `_djvu.txt`, `_djvu.xml`, `_hocr.html.gz`, `_abbyy.gz`, JP2 ZIP, `_meta.xml`, `_meta.sqlite`, `_files.xml`, `_archive.torrent`, `__ia_thumb.jpg`. OCR engine: "tesseract 5.3.0-3-g9920", parameters include `lang-kir;lang-mon` etc., detected script Devanagari conf 0.9197.

Small text/OCR file: YES — the `_djvu.txt` (326,554 bytes) was downloaded fresh to `blgs-1997-archiveorg-djvu.txt`. There is no other small text file (the hOCR/chOCR are large gzips; leaf-level full-text search is unavailable on this item — server returns: `"error":"No hOCR or Abbyy file present"`).

### Does the Tibetan section end at p. 53?

- Confirmed from front matter (this OCR): "RARE BUDDHIST TEXTS SERIES -14"; "Chief Editor: Prof. Samdhong Rinpoche"; "First Edition: 550 copies, 1997"; "Hardback: Rs. 110.00"; "Paperback: Rs. 80.00".
- Sanskrit Gurupañcāśikā: title p. 33, colophon pp. ~39–40 with running headers "३६ / बौद्धलघुग्रन्थसंग्रहे" … "३९ / बौद्धलघुग्रन्थसंग्रहे" (loop_A08 §2.4).
- NEW structural confirmation from the same OCR: the Tibetan Gurupañcāśikā section is immediately followed by the title page of the NEXT text in the collection. Exact OCR lines 1363–1369:
  > "आचार्य नागार्जुनकृता"
  > "क्रियासंग्रहकारिका"
  > "KRIYASAMGRAHAKARIKA"
  The pages between the Tibetan run and this title page (lines ~1344–1362) are near-empty garbled leaves (end of Tibetan colophon / blank), e.g. line 1308: "l. मषः] al ac".
- The printed page number on any Tibetan-script page could NOT be read: tesseract produced no Devanagari digits and no readable "बौद्धलघुग्रन्थसंग्रहे" headers in lines 700–1370 (pattern probe `pagenum-probe-gp-section.txt`: 0 hits; Tibetan script renders as Cyrillic/Latin noise, e.g. lines 1297–1305).

Verdict: Szántó fn. 7 "pp. 33–40" (Sanskrit) stands confirmed; DILA's "pp. 33–53" remains *consistent* with the structure (Sanskrit 33–40 + Tibetan following, ending before the Kriyāsaṃgrahakārikā title page), but the numeral ५३ itself is unreadable in OCR — **ยังไม่พบ** clean page-number confirmation of the Tibetan end page.

## Task 2 — Dhīḥ 13 (1992) digitized copy / article-level details

Searches performed this loop:
1. archive.org advancedsearch `q=dhih+sarnath`, rows=30 → `"numFound":0,"start":0,"docs":[]`.
2. DuckDuckGo HTML endpoint → bot-captcha interstitial (blocked).
3. Local Biblia Impex record (loop_A08, `bibliaimpex-dhih-vol13-1992.html`) re-extracted: it is VOLUME-level only. Meta description verbatim:
   > "30677,DHIH: Journal Of Rare Buddhist Texts Research Project, Vol. 13, Ed. By S. Rinpoche Et Al,,,,1992,Central University Of Tibetan Studies,,,,2.15-Buddhism: Manuscript,,"
   Page body: "DHIH: Journal of Rare Buddhist Texts Research Project, Vol. 13, ed. by S. Rinpoche et al", "Publisher: Central University of Tibetan Studies", USD 31.50, Paperback. No table of contents, no article titles/authors.

Consequence: the exact bibliographic details of a Gurupañcāśikā item inside Dhīḥ 13 (title form, author/editor, whether published there with Tibetan translation, page range) remain **ยังไม่พบ** — no digitized Dhīḥ 13 located; the CIHTS online minor-texts list omits it (A08 §2.3 discrepancy stands); the Scribd "Dhih Journal Contents" compilation stays paywalled (A08 §4).

## Task 3 — "KCDS" witness (Norbulingka 19-folio palm-leaf ms)

Baseline (loop_A01 loop-report.md line 170, quoting DILA): DILA cites "KCDS, p. 20":
> "A 19-folio Sanskrit palmleaf manuscript now belonging to the Nor bu gling ka."

Attempts this loop (all negative):
1. DILA Glossaries site search `https://glossaries.dila.edu.tw/search?q=KCDS` → returns only the empty application shell (JS-driven; no expansion served).
2. Bing web search `"KCDS" Norbulingka palm-leaf manuscript Sanskrit` → only irrelevant localized results (Baidu/Zhihu snippets); zero scholarly hits.
3. Full-text grep of the entire local research corpus (`research-notes/**`) for "KCDS" / "Nor bu gling" / "Norbulingka" / "19-folio" → only the A01 quote above and B10 VERIFY-list echoes; the abbreviation does not occur in the archived Szántó 2013 texts or DILA Aśvaghoṣa/LOTD-A000194 pages.

Conclusion: expansion of "KCDS" **ยังไม่พบ**. It functions as an unpublished catalogue/siglum citing p. 20 for the Norbulingka 19-folio palm-leaf witness; identity unresolved.

## Task 4 — Zenodo record 6476319 (bsa045)

JSON archived at loop_A01 (`zenodo-api-6476319.json`) and parsed this loop:
- Title: "GRETIL - Göttingen Register of Electronic Texts in Indian Languages. BUDDHIST PHILOSOPHY"; DOI 10.5281/zenodo.6476319 (concept 10.5281/zenodo.6476318); publication_date 2022-04-21; access_right "open"; resource_type Dataset; EC grant 609823 "Beyond Boundaries…" (ERC FP7-IDEAS).
- License: `"license": {"id": "cc-by-4.0"}` → **CC BY 4.0**.
- Files include `bsa045_u.htm | 11961 bytes` — the Gurupañcāśikā file (GRETIL code bsa045).
- Series/numbering clarified from the file header itself (`sanskrit_gurupancasika_bsa045.htm`, loop_A05): "Input by members of the Sanskrit Buddhist Input Project.", "With kind permission of the Digital Sanskrit Buddhist Canon Project of Nagarjuna Institute, Nepal and University of the West, Rosemead, California, USA (www.uwest.edu/sanskritcanon)", "**Sastra section, text no. 45**". Hence "bsa045" = Buddhist Śāstra section, text no. 45 of the DSBC/GRETIL Sanskrit Buddhist input — NOT the Sarnath "Rare Buddhist Texts Series 14" number of BLGS, and not a series literally titled "Buddhist Sanskrit Texts". Usage notice in file: "THIS GRETIL TEXT FILE IS FOR REFERENCE PURPOSES ONLY! COPYRIGHT AND TERMS OF USAGE AS FOR SOURCE FILE."

## Task 5 — DSBC Devanagari vs romanized spot-check (v1, v25, v50)

Sources: romanized `content/221/914` fetched live this loop (`dsbc-content-221-914-romanized.html`); Devanagari `content/485/2313` (loop_A08 copy). Extracts in `spotcheck-and-toc-extract.txt`.

| Verse | Romanized (221/914) | Devanagari (485/2313) | Verdict |
|---|---|---|---|
| Opening | "om namo buddhāya\|" | "ॐ नमो बुद्धाय।" | match |
| 1 | "saṃkṣipya kathyata iyaṃ śṛṇutādareṇa\|\|1\|\|" | "संक्षिप्य कथ्यत इयं शृणुतादरेण॥१॥" | match |
| 25 | "tasmāt sarvaprayatnena gurorājñāṃ na laṅghayet\|\|25\|\|" | "तस्मात् सर्वप्रयत्नेन गुरोराज्ञां न लङ्घयेत्॥२५॥" | match |
| 50 | "vijitasugatabhāvā drāk susiddhiṃ labheyuḥ\|\|50\|\|]" | "विजितसुगतभावा द्राक् सुसिद्धिं लभेयुः॥५०॥]" | match |

Discrepancies found: NONE at the three sampled verses (pure transliteration equivalence; word boundaries differ only per GRETIL convention "many word boundaries are not marked by blanks"). Both versions close verse 50 with the bracket `]` marking the end of the Tibetan-restored block (vv. 34–50); both end "॥इति गुरुपञ्चाशिका समाप्ता॥" then "॥कृतिरियं महाचार्याश्वघोषस्य॥" (Devanagari lines 608, 612).

---

## Files saved in loop_C02/documents/

| File | Content |
|---|---|
| C02_findings.md | this evidence file |
| ia-metadata-blgs-1997.json | fresh full IA metadata/file list of the BLGS scan |
| blgs-1997-archiveorg-djvu.txt | the small OCR/text derivative (326,554 bytes), downloaded |
| spotcheck-and-toc-extract.txt | DSBC v1/v25/v50 extracts (both scripts) + BLGS front-matter OCR lines |
| tibetan-end-probe.txt | pattern probe locating the Kriyāsaṃgrahakārikā title page after the Tibetan section |
| pagenum-probe-gp-section.txt | negative probe: no readable Devanagari page numbers in the Tibetan section |
| dsbc-content-221-914-romanized.html | DSBC romanized full text (live fetch) |

## Remaining gaps

1. Printed page number ending the Tibetan Gurupañcāśikā in BLGS 1997 (DILA "p. 53"): ยังไม่พบ (needs page-image inspection of the PDF, e.g. leaves around the Kriyāsaṃgraha title page).
2. Dhīḥ 13 (1992) article-level record for the Gurupañcāśikā (title/author/pages; whether Tibetan included): ยังไม่พบ (no digitized copy; Biblia Impex volume-level only; Scribd contents paywalled).
3. Expansion of "KCDS" (Norbulingka 19-folio palm-leaf witness): ยังไม่พบ.
