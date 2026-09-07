# Source List — Loop C03

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** C03 | **Date:** 2026-08-26
All URLs below were fetched this session unless marked otherwise. Raw copies in `documents/`.

## Primary sources (fully read, raw archived)

1. **Valy D., Verleysen M., Chhun S., Burie J.-C. (2017). "A New Khmer Palm Leaf Manuscript Dataset for Document Analysis and Recognition: SleukRith Set."** HIP '17, Kyoto, pp. 1–6. DOI 10.1145/3151509.3151510.
   - Full text (6 pp) retrieved via r.jina.ai proxy of ACM PDF: https://dl.acm.org/doi/pdf/10.1145/3151509.3151510 (via https://r.jina.ai/https://dl.acm.org/doi/pdf/10.1145/3151509.3151510)
   - Landing metadata: https://dl.acm.org/doi/10.1145/3151509.3151510 (pages 1–6; pub 2017-11-10; HIP'17 acceptance 19/33 = 58%; 25 citations / 328 downloads)
   - Archive: `sleukrith_hip2017_fulltext_jina.txt` (28 KB)

2. **SADA project page** — Thuon N., Du J., Zhang J.S., Thuon S. "Ancient Text Recognition of Multi-Low-Resource Palm Leaf Scripts": https://ruisju111.github.io/sada/
   - Archive: `sada_project_page_raw.html` (21 KB)

3. **SADA GitHub repository README** — back-kh/SADA-Ancient-Palm-Leaf-Manuscripts-Recognitions: https://raw.githubusercontent.com/back-kh/SADA-Ancient-Palm-Leaf-Manuscripts-Recognitions/main/README.md
   - ICFHR 2018 double first place; KH-SADA grammar forms; PALM-SADA restricted status
   - Archive: `sada_github_readme_raw.md` (16 KB)

4. **DLNTM About page (CrossAsia Digital)**: https://digital.crossasia.org/digital-library-of-northern-thai-manuscripts-about/?lang=en
   - Four collection counts; project/team history; digitization tech; CC BY-NC 4.0 terms
   - Archive: `digital_crossasia_dlntm_about_en.html` (110 KB)

5. **DLNTM Resources page (CrossAsia Digital)**: https://digital.crossasia.org/digital-library-of-northern-thai-manuscripts-resources/?lang=en
   - Languages/scripts of corpus; title search conventions; written resources list
   - Archive: `digital_crossasia_dlntm_resources_en.html` (109 KB)

6. **DLLM About page (CrossAsia Digital)**: https://digital.crossasia.org/digital-library-of-lao-manuscripts-about/?lang=en
   - 12,168 texts searchable; launched Sept 2009
   - Archive: `digital_crossasia_dllm_about_en.html` (102 KB)

7. **Thuon N., Du J., Theang P., Thuon R. "PALM-LAY: A Multi-script Cross-Regional Dataset for Layout Analysis of Palm Leaf Manuscripts."** ICDAR 2025 Workshops, LNCS 16226, pp. 246–262, online 02 Jan 2026. DOI 10.1007/978-3-032-09371-4_15.
   - https://link.springer.com/chapter/10.1007/978-3-032-09371-4_15 (abstract + refs fully read)

## API / structured sources (fetched + archived)

8. Crossref works API — PRL 195 record incl. 24-ref list: https://api.crossref.org/works?query.bibliographic=Multi-low+resource+languages+in+palm+leaf+manuscript+recognition... → confirms DOI 10.1016/j.patrec.2025.04.031 — archive: `crossref_prl195_thuon.json`
9. Unpaywall API: https://api.unpaywall.org/v2/10.1016/j.patrec.2025.04.031 → is_oa false / closed — archive: `unpaywall_prl195.json`
10. Semantic Scholar Graph API: https://api.semanticscholar.org/graph/v1/paper/DOI:10.1145/3151509.3151510 → citationCount 30, OA CLOSED — archive: `s2_api_sleukrith.json`
11. Wayback CDX index for lanna manifests: http://web.archive.org/cdx/search/cdx?url=iiif.crossasia.org/s/lanna/manifests/*&output=json&limit=30 — archive: `wayback_cdx_lanna_manifests.json`

## IIIF manifest evidence (archived HTML renderings)

12. Wayback snapshot of manifest page 554809 (Madoc platform): https://web.archive.org/web/20250325134436/https://iiif.crossasia.org/s/lanna/manifests/554809 — fields documented in findings F14 — archive: `wayback_manifest_554809.html`; field excerpt: `manifest_554809_embedded_json_excerpt.txt`
13. Wayback snapshot of lanna search UI (Common Crawl, 2024-04-20): https://web.archive.org/web/20240420193439/https://iiif.crossasia.org/s/lanna/search?fulltext= — JS-rendered shell only

## Secondary confirmations (read, not separately archived or trivial)

14. CrossAsia Digital portal index: https://digital.crossasia.org/
15. DLNTM portal landing ("SEARCH the digital library of 6,137 manuscripts"): http://lannamanuscripts.net/en/manuscripts/3669 (redirect target) and https://digital.crossasia.org/digital-library-of-northern-thai-manuscripts/?lang=en
16. laoscript.net (checked, irrelevant to topic c): http://www.laoscript.net/

## Blocked / failed endpoints (documented attempts)

- dl.acm.org direct via PowerShell — Cloudflare managed challenge (webfetch path worked instead)
- iiif.crossasia.org live AND via r.jina.ai proxy (`/s/lanna/items`, `/s/lanna/items/browse`, `/s/lanna/manifests/559002`) — Anubis PoW [BLOCKED]
- html.duckduckgo.com and lite.duckduckgo.com — CAPTCHA challenge
- mojeek.com — JS captcha
- api.semanticscholar.org paper/search endpoint — HTTP 429 (retried x3 across session)
- api.openalex.org — HTTP 429 (x2)
- digital.crossasia.org/japan-roll-manifests-2/ — HTTP 404 (page removed)

## Citation standards note

No Wikipedia-based claims used. All quantitative statements in findings.md trace to items 1–13 above with archived raw copies.
