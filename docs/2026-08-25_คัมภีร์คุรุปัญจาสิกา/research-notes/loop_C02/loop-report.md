# Loop C02 Report — Gurupañcāśikā printed editions: remaining edition gaps

Date: 2026-08-26. RESEARCH ONLY (~10 planned tool calls; extra calls consumed by search-engine rate limits and encoding retries). No Wikipedia cited. Full evidence with exact quotes: `documents/C02_findings.md`.

## Findings

1. **BLGS 1997 (IA scan)** — Metadata re-fetched and saved. The item's small text derivative (`_djvu.txt`, 326,554 bytes) exists and was downloaded; no other small text file (leaf-level inside-search unavailable: `"error":"No hOCR or Abbyy file present"`). NEW: the OCR proves the Tibetan Gurupañcāśikā section is immediately followed by the next text's title page — exact lines "आचार्य नागार्जुनकृता / क्रियासंग्रहकारिका / KRIYASAMGRAHAKARIKA". Sanskrit pp. 33–40 confirmed (A08); DILA's "pp. 33–53" remains structurally consistent, but no Devanagari page numeral is readable on any Tibetan-script page (probe: 0 hits) → Tibetan end page ยังไม่พบ clean confirmation.
2. **Dhīḥ 13 (1992)** — archive.org advancedsearch `dhih sarnath`: numFound 0; DDG captcha-blocked. Biblia Impex record 30677 is volume-level only ("DHIH … Vol. 13, ed. by S. Rinpoche Et Al,,,,1992,Central University Of Tibetan Studies"); it carries NO article-level data (no title/author/pages for a Gurupañcāśikā item, nothing on whether Tibetan accompanied it). Digitized Dhīḥ 13: ยังไม่พบ.
3. **KCDS witness** — DILA glossary search q=KCDS returns an empty app shell; Bing yields nothing scholarly; corpus-wide grep shows the siglum only in A01/B10 echoes of DILA's "A 19-folio Sanskrit palmleaf manuscript now belonging to the Nor bu gling ka." Expansion of "KCDS": ยังไม่พบ.
4. **Zenodo 6476319** = GRETIL "BUDDHIST PHILOSOPHY" dataset (2022-04-21), license `cc-by-4.0`, open access; contains `bsa045_u.htm` (11,961 bytes). Numbering clarified: bsa045 = DSBC/GRETIL Buddhist Śāstra section "Sastra section, text no. 45" (Nagarjuna Institute / University of the West input) — distinct from Sarnath RBTS 14. GRETIL file disclaimer: "FOR REFERENCE PURPOSES ONLY! COPYRIGHT AND TERMS OF USAGE AS FOR SOURCE FILE."
5. **DSBC Devanagari vs romanized** — v1, v25, v50 spot-checked verse-for-verse: exact matches (e.g. v25 "tasmāt sarvaprayatnena gurorājñāṃ na laṅghayet||25||" ↔ "तस्मात् सर्वप्रयत्नेन गुरोराज्ञां न लङ्घयेत्॥२५॥"). Both close v50 with the `]` of the Tibetan-restored block (vv. 34–50) and share the double colophon. No discrepancies at sampled verses.

## Files saved
`loop_C02/documents/`: C02_findings.md; ia-metadata-blgs-1997.json; blgs-1997-archiveorg-djvu.txt; dsbc-content-221-914-romanized.html; spotcheck-and-toc-extract.txt; tibetan-end-probe.txt; pagenum-probe-gp-section.txt.

## Gaps carried forward
- BLGS Tibetan end-page numeral (needs PDF page-image check near the Kriyāsaṃgraha title leaf).
- Dhīḥ 13 internal contents/article record (physical volume or full contents list required).
- "KCDS" siglum expansion (likely requires DILA TSK glossary bibliography or Szántó's private correspondence).
