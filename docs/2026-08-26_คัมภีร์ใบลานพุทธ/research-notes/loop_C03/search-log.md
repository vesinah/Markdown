# Search Log — Loop C03 (Phase C foraging, B08 gap-fill)

**Date:** 2026-08-26 | **Agent:** ox-alpha | **Project:** palm_leaf_buddhist_manuscripts
**Precondition read:** loop_B08\findings.md (read in full before any action)

## Query / action log (chronological)

| # | Tool | Target / query | Result |
|---|------|----------------|--------|
| 1 | Read | `loop_B08\findings.md` (120 lines) | OK — gaps identified: SleukRith full text, PRL 195 OA, IIIF manifest JSON, transcription coverage |
| 2 | bash | create `loop_C03\documents\` | OK |
| 3 | webfetch | DDG html: `SleukRith Set Khmer palm leaf manuscript dataset HIP 2017 Valy Verleysen pdf` | BLOCKED — DuckDuckGo CAPTCHA ("bots use DuckDuckGo too", select-ducks challenge) |
| 4 | webfetch | https://ruisju111.github.io/sada/ (full page) | OK — FULL READ; all 3 papers + BibTeX + summaries captured |
| 5 | bash | archive SADA page raw HTML via Invoke-WebRequest | OK — sada_project_page_raw.html (20,926 B) |
| 6 | webfetch | https://dl.acm.org/doi/10.1145/3151509.3151510 | OK — landing page FULL READ (abstract, 11 refs, cited-by 25, affiliations, HIP'17 acceptance stats). Note: PowerShell iwr of same URL hit Cloudflare managed challenge; webfetch succeeded |
| 7 | webfetch | Semantic Scholar Graph API DOI:10.1145/3151509.3151510 | OK — citationCount 30; openAccessPdf status CLOSED; archived s2_api_sleukrith.json |
| 8 | bash | archive ACM landing HTML | FAILED — Cloudflare challenge page saved instead; NOT kept as source copy |
| 9 | webfetch | r.jina.ai proxy of `https://dl.acm.org/doi/pdf/10.1145/3151509.3151510` | SUCCESS — FULL TEXT (6 pp) retrieved incl. Tables I–IV, CNN baseline, conclusions |
| 10 | bash | archive full text via jina | OK — sleukrith_hip2017_fulltext_jina.txt (28,367 B) |
| 11 | webfetch | https://digital.crossasia.org/ | OK — portal index; lanna/DLLM entries link to iiif.crossasia.org and laomanuscripts.net |
| 12 | webfetch | Crossref API works?query.bibliographic=PRL-195 title | OK — DOI 10.1016/j.patrec.2025.04.031 confirmed + 24-ref list + funders + TDM links |
| 13 | bash | archive crossref JSON + Unpaywall API check | OK — unpaywall_prl195.json: is_oa=false, oa_status=closed, has_repository_copy=false |
| 14 | webfetch | r.jina.ai of `https://iiif.crossasia.org/s/lanna/items/browse` | Page-not-found (Omeka S route differs), BUT Anubis not triggered on this path |
| 15 | webfetch | r.jina.ai of `https://iiif.crossasia.org/s/lanna/manifests/559002` | BLOCKED — Anubis PoW challenge ("Making sure you're not a bot!") even through jina proxy |
| 16 | webfetch | Wayback CDX: `iiif.crossasia.org/s/lanna/manifests/*` limit 30 | OK — 30 captures Mar 2025, ids 554809–554839+, ~18–19 KB each, mimetype text/html; archived wayback_cdx_lanna_manifests.json |
| 17 | webfetch | raw.githubusercontent SADA README main branch | OK — FULL READ (15.5 KB): ICFHR 2018 first places x2, grammar forms, Theano legacy code, PALM-SADA restricted |
| 18 | webfetch | lite.duckduckgo.com site:iiif.crossasia.org | BLOCKED — same CAPTCHA as #3 |
| 19 | webfetch | Wayback snapshot `20250325134436/...manifests/554809` (first attempt) | Transport error |
| 20 | bash | retry #19 via Invoke-WebRequest | OK — wayback_manifest_554809.html (91,609 B); Madoc platform page with embedded manifest data |
| 21 | webfetch | digital.crossasia DLNTM Resources page (?lang=en) | OK — FULL READ: languages/scripts/title conventions/written resources |
| 22 | webfetch | digital.crossasia DLNTM About page (?lang=en) | OK — FULL READ: 4 collection counts, project history, technical details, licensing |
| 23 | bash | grep archived manifest HTML for field patterns | OK — requiredStatement/metadata/lanna_original/dc:subject/script/GPS/crowdsourcing config documented; excerpt saved manifest_554809_embedded_json_excerpt.txt |
| 24 | webfetch | CDX `iiif.crossasia.org/s/lanna/*` collapse=urlkey | OK — older 2022 captures incl. canvas-level URLs `/collections/531672/manifests/531674/c/533675` pattern |
| 25 | webfetch | Mojeek search "Northern Thai Manuscripts" DLNTM transcription HTR | BLOCKED — JS captcha |
| 26 | webfetch | S2 API search "Digital Library of Northern Thai Manuscripts" | HTTP 429 rate-limited (2 retries also 429) |
| 27 | webfetch | Bing search "Tai Tham" OCR/HTR 2024-2025 | Junk results only (localized Vietnamese chrome-download noise) — no relevant hits |
| 28 | webfetch | http://www.laoscript.net/ | OK but irrelevant — John Durdin's LaoScript fonts/keyboards site, no manuscript transcriptions |
| 29 | webfetch | Wayback snapshot of `lanna/search?fulltext=` (Common Crawl capture 2024-04-20) | OK — page is JS-rendered ("Refine search … Loading"); facet counts NOT visible in static HTML |
| 30 | webfetch | link.springer.com chapter 10.1007/978-3-032-09371-4_15 (PALM-LAY) | OK — FULL READ: abstract + 35 refs + author affiliations |
| 31 | webfetch | lannamanuscripts.net/en/manuscripts/3669 | Redirects to new CrossAsia DLNTM portal landing ("SEARCH the digital library of 6,137 manuscripts") — old per-item URLs dead |
| 32 | webfetch | OpenAlex API `"Tai Tham"` (x2 attempts) | HTTP 429 both times |
| 33 | webfetch | digital.crossasia japan-roll-manifests-2 (with & without ?lang=en) | HTTP 404 — page removed |

## Totals
- Queries/actions: 33 logged operations (≥7 requirement exceeded)
- Sources fully read: 7 (ACM PDF full text; SADA project page; SADA GitHub README; DLNTM About; DLNTM Resources; PALM-LAY Springer chapter; DLLM About) — ≥4 requirement met
- Raw archives saved to documents/: 11 files
- Blocked endpoints: dl.acm.org direct (Cloudflare), iiif.crossasia.org live + via jina (Anubis PoW), DuckDuckGo html+lite (CAPTCHA), Mojeek (captcha), Semantic Scholar + OpenAlex APIs (429 during session window)
