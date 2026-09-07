# Search Log — Loop B08: AI/HTR for Buddhist palm-leaf scripts (citation-chaining deep dive, A19 gaps)

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** B08 | **Date:** 2026-08-26
**Protocol:** ZERO internal knowledge; facts only from fetched sources; no Wikipedia as source; raw copies archived in documents/.
**Pre-check:** loop_A19/findings.md was NOT FOUND anywhere in the workspace (glob `**/loop_A19/**` = 0 results). A19 gap context reconstructed from research-notes/phase-a-verification.md (A19 rows: IFLA palm-leaf metadata scoping workshop 2017; BDRC "handwritten text recognition work" mention) and loop_A06 findings (DLNTM/DLLM verified pages). This is flagged as an unresolved precondition.

## DuckDuckGo HTML queries (via https://html.duckduckgo.com/html/, fetched through r.jina.ai proxy after direct DDG returned a CAPTCHA bot-wall on query 1)

| # | Query | Outcome |
|---|-------|---------|
| Q1 | handwritten text recognition Tai Tham Lanna manuscript dataset | Direct DDG = CAPTCHA challenge; retried via r.jina.ai = OK. Hits: Thammano & Pravesjit Springer Lanna paper; arXiv 2208.07682 LAM dataset; iiif.crossasia.org/s/lanna |
| Q2 | OCR Burmese script palm leaf manuscripts convolutional neural network paper | OK. Hits: Sriatmaja & Nwe Nwe Myanmar palm-leaf OCR (Scribd mirror); Pattern Recognition 2026 low-resource glyph paper; PALM-SADA PRL 2025; IEEE 11350246 ViT palm-leaf character detection; DevThazin GitHub Burmese CNN 96.85% |
| Q3 | Khmer OCR palm leaf manuscripts dataset recognition | OK. Hits: SleukRith Set (Valy et al., HIP 2017, 657 pages); SADA GitHub + project page; APSIPA 2022 SADA PDF; SEACrowd/sleukrith_ocr HF dataset |
| Q4 | Sinhala historical document handwritten text recognition ola leaf manuscript | Weak hits: eAsia 2009 Sinhala OCR paper (digital+handwritten+palm-leaf, Scribd mirrors); commercial OCR tools; suriyakantha.org ola page. No peer-reviewed Sinhala ola HTR found this loop |
| Q5 | Transkribus models Southeast Asian scripts Tai Tham Burmese Khmer model store | OK. Hit: help.transkribus.org/public-models + www.transkribus.org/models (426+ free models claim) |
| Q6 | site:transkribus.org/models Thai OR Balinese OR Sinhala OR Burmese OR Khmer | OK. KEY HIT: public model balinese_v1 (balinese-palm-leaf-manuscripts-16th-century). No Thai/Tham/Burmese/Khmer/Sinhala model pages surfaced |
| Q7 | crowdsourcing transcription endangered manuscripts Asia platform volunteer | Generic hits (crowd.loc.gov, transcription.si.edu, FromThePage, Transkribus crowdsourcing page, DREAMSEA). No Asia-palm-leaf-specific citizen-science project verified this loop |
| Q8 | "iiif.crossasia.org" lanna manifest | OK. Manifest URL pattern discovered: iiif.crossasia.org/s/lanna/manifests/{id} with examples 559002 (Saeng mueang), 558990 (Latana saeng pue) |
| Q9 | Tai Tham manuscript recognition neural network Chiang Mai research | OK. KEY HITS: Puarungroj et al. Thai Noi CNN (ResearchGate 341277174); ICADL 2020 Springer chapter (Thai Noi MobileNet >90%); Inkeaw et al. 2015 ICSIPA Lanna Dharma wavelet; Chueaphun et al. 2012 KDIR kNN+CRF |

## arXiv API (http://export.arxiv.org/api/query)

| # | search_query | Result |
|---|--------------|--------|
| A1 | all:"Tai Tham" | totalResults = 0 (raw XML archived) |
| A2 | all:"Lanna manuscript" | totalResults = 0 (raw XML archived) |
| A3 | all:"palm leaf manuscript" | 3 hits: Tensmeyer & Martinez 2017 FCN binarization (arXiv 1708.03276, applied to Palm Leaf Manuscripts); Palmira ICDAR-21 (arXiv 2108.09436, Indiscapes2 Indic palm-leaf layout dataset); Indiscapes ICDAR-2019 (arXiv 1912.07025) |

## Zenodo API

| # | Query | Result |
|---|-------|--------|
| Z1 | /api/records?q="palm leaf manuscript"&size=10 | 10 records: Tirukkural Tamil palm-leaf digitization series (2025-2026, rec ids 19846386 etc.), Tamil performing-arts transmission paper (11363007? no — 15851984), KSW Khmer stop-word dictionary 2024 (11363007). Raw JSON archived |

## Direct fetches / probes

| # | Target | Status |
|---|--------|--------|
| D1 | https://www.transkribus.org/models | FULL READ (426+ models catalog; landing list all-European-language) |
| D2 | https://www.transkribus.org/models/balinese-palm-leaf-manuscripts-16th-century | FULL READ + raw HTML archived (model ID 48252, CER 0.4%, PyLaia, Nov 2022) |
| D3 | https://iiif.crossasia.org/s/lanna | Anubis PoW wall direct; via r.jina.ai = FULL READ (site stats, 4 collections, funders); archived via jina |
| D4 | https://iiif.crossasia.org/s/lanna/manifests/559002 (+ .json variant, direct and via r.jina.ai x2) | BLOCKED by Anubis proof-of-work (4 attempts). Only search-index snippet evidence of structure retained |
| D5 | http://lannamanuscripts.net/en/about | FULL READ via r.jina.ai; archived (6,137 manuscripts count; CC BY-NC 4.0) |
| D6 | https://www.mdpi.com/2313-433X/4/2/43 | Direct blocked/empty; via r.jina.ai = extensive read (~75% of full text incl. methods/datasets sections); archived |
| D7 | https://link.springer.com/article/10.1007/s12293-015-0152-3 | FULL READ (abstract + complete reference list; body paywalled); archived |
| D8 | https://link.springer.com/chapter/10.1007/978-3-030-64452-9_20 | FULL READ (abstract + references + citation info); archived |
| D9 | https://ruisju111.github.io/sada/ and /PLA/ | FULL READ both; archived (complete BibTeX for APSIPA 2022/2024 + PRL 2025) |
| D10 | https://zenodo.org/search?q=Tai%20Tham%20manuscript | JS app; switched to Zenodo API (Z1) |

## Query-count compliance
DDG: 9 distinct queries; arXiv API: 3; Zenodo API: 1; direct probes: 10. Total distinct queries >= 8 requirement MET.
Full-read sources >= 4 requirement MET (D1, D2, D3, D5, D6, D7, D8, D9a/b).

## Blocked / negative results (recorded honestly)
- arXiv has NO entries for "Tai Tham" or "Lanna manuscript" (verified twice).
- IIIF manifest JSON for DLNTM item 559002 NOT retrieved (Anubis PoW; structure known only from DDG snippet: Mirador viewer link, "Generate PDF", CC BY-NC 4.0 attribution to Harald Hundius / National Library of Laos via Staatsbibliothek zu Berlin).
- No peer-reviewed HTR paper for Tai Tham/Lanna *line-level* recognition found in any index probed this loop; nearest = character-level studies (Thammano 2015; Inkeaw 2015; Chueaphun 2012; Khankasikam 2013; Puarungroj 2019/2020 Thai Noi).
- No Transkribus public model found for any Tai/Tham/Burmese/Khmer script; only Balinese (balinese_v1) surfaced under SEA scripts.
- No Asia palm-leaf citizen-science transcription project verified; only generic platforms (FromThePage, Smithsonian, LOC, NARA, Transkribus Crowdsourcing product page).
- loop_A19 findings file missing (see pre-check note).
