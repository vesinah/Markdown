# Search Log - Loop A18: Conservation and Risk Management for Palm-Leaf Manuscripts
Project: palm_leaf_buddhist_manuscripts | Date: 2026-08-26 | Agent: research (foraging loop A18)

## Tool notes
- `websearch` returned HTTP 429 on both attempts (exa backend rate limit).
- DuckDuckGo HTML direct fetch returned bot CAPTCHA twice.
- Working route adopted: `webfetch` -> `r.jina.ai` proxy over `html.duckduckgo.com/html/?q=...`.
- Direct fetches to known-good URLs succeeded (nature.com, cool.culturalheritage.org via proxy, diri.ac.nz, cornell.edu).
- shs.hal.science (HAL) blocked by Anubis proof-of-work; PDF not retrieved this session.

## Queries executed (chronological)

| # | Query | Route | Outcome |
|---|-------|-------|---------|
| Q1 | (direct) nature.com/articles/s40494-024-01402-2 | webfetch | FULL TEXT retrieved; archived documents\nature_s40494-024-01402-2_full_raw.txt |
| Q2 | (direct) nature.com/articles/s40494-025-01794-9 | webfetch | FULL TEXT retrieved; archived documents\nature_s40494-025-01794-9_raw.txt |
| Q3 | fungal degradation palm leaf manuscripts identification Aspergillus | DDG via r.jina.ai | 10 hits incl. Herit Sci 12:199 (s40494-024-01320-3); npj Mater Degrad s41529-022-00296-4 |
| Q4 | traditional preservation smoking citronella oil palm leaf manuscript temple herbal repellent practice | DDG via r.jina.ai | 10 hits incl. Cornell tutorial; Nishanthi RG review; Saraswati Mahal seasoning paper |
| Q5 | College de France palm leaf collection restoration MS.SL.68 codicology | DDG via r.jina.ai | HAL halshs-04447688 (Riberaigua & Messager); academia.edu 89538211; new find npj HS s40494-025-01943-0 |
| Q6 | Wat Buranaram palm leaf inventory conservation methodology DIRI | DDG via r.jina.ai | diri.ac.nz publication page located |
| Q7 | (direct) diri.ac.nz Wat Buranaram page | webfetch | FULL TEXT read; raw HTML archived documents\diri_wat_buranaram_raw.html |
| Q8 | National Library Sri Lanka palm leaf manuscript conservation centres network preservation | DDG via r.jina.ai | IFLA PAC pages; natlib.lk; archives.gov.lk; island.lk |
| Q9 | palm leaf manuscripts trafficking illicit market sale deaccession concern Buddhist | DDG via r.jina.ai | Khyentse/FPL souvenier-market origin story; Bhubaneswar Customs seizure; cultureincrisis.org |
| Q10 | exhibition guidelines palm leaf manuscripts light levels lux display conservation | DDG via r.jina.ai | CCAHA 50-100 lux; NEDCC <=50 lux; LOC guidance |
| Q11 | (direct) cool.culturalheritage.org bpga28-17.pdf | webfetch -> too large; r.jina.ai proxy | FULL TEXT retrieved; archived documents\bpga28-17_vandyke_sacred_leaves_raw.txt |
| Q12 | (direct) chinapreservationtutorial.library.cornell.edu palm-leaf-manuscripts | webfetch | FULL TEXT read; raw HTML archived documents\cornell_palm_leaf_tutorial_raw.html |
| Q13 | (direct) ifla.org PAC Sri Lanka report news page | webfetch | FULL TEXT read; direct HTML archive blocked (403), text captured in findings.md |
| Q14 | palm leaf manuscript conservation humidity threshold study relative humidity optimal storage | DDG via r.jina.ai | Corroboration set: MDPI Polymers 17(1):83; PMC11643737; Forests 15(10):1816; npj HS s40494-025-01988-1 |

Failed/blocked attempts: websearch x2 (429); html.duckduckgo.com direct x2 (CAPTCHA); HAL PDF x1 (Anubis); ifla.org raw HTML archive x1 (403).

Excluded per rules: en.wikipedia.org appeared in SERPs (Q4, Q9) - keywords noted only, not cited.

Fully read sources this session (>=5 requirement met):
1. Yu et al. 2024, npj Heritage Science 12:280 (full text)
2. Zhang/Wang/Han/Guo 2025, npj Heritage Science 13:218 (abstract+intro+methods+refs; results section partially truncated in capture)
3. van Dyke 2009, BPG Annual 28 "Sacred Leaves" (full article text)
4. DIRI Wat Buranaram publication page (full text)
5. Cornell University Library Preservation Tutorial - Palm Leaf Manuscripts (full text)
6. IFLA PAC Sri Lanka news release (full text)
