# LOOP A19 Search Log — Digitization / Digital Humanities of Buddhist Palm-Leaf Manuscripts

- Session date: 2026-08-26
- Agent: foraging loop A19, project palm_leaf_buddhist_manuscripts
- Rules: zero internal knowledge; no Wikipedia citations; no invented references; no emoji.
- Tooling notes: `websearch` returned HTTP 429 on first call (exa MCP). DuckDuckGo HTML direct fetch hit bot CAPTCHA. Workaround per protocol: fetch via `https://r.jina.ai/` proxy over DDG HTML — worked for all subsequent queries. Direct institutional fetches worked without proxy except iiif.crossasia.org (Anubis proof-of-work wall) which was read via r.jina.ai proxy.

## Query log (chronological)

| # | Query / URL | Channel | Result |
|---|---|---|---|
| 1 | `handwritten text recognition Tai Tham script palm leaf deep learning` | websearch | 429 error |
| 1r | same query | DDG via r.jina.ai | 10 hits; dominated by Tamil palm-leaf OCR literature (Nature s40494-026-02559-8; THPLMD dataset ScienceDirect S2352340924000738; DenseNet 97.8% GitHub repo). No dedicated Tai Tham HTR paper found. |
| 2 | `OCR Burmese palm leaf manuscript neural network recognition` | DDG via r.jina.ai | Hits: Sriatmaja & Nwe Nwe Myanmar palm-leaf OCR paper (Scribd mirror); MDPI J.Imaging 4(2):43 benchmark RNN-LSTM; KhmerFormer/SADA GitHub + UCLouvain boreal:211068 PDF; ScienceDirect S0167865525001734 multi-low-resource Balinese/Khmer/Sundanese; Isan Dhamma character segmentation (Index Copernicus 660356). |
| 3 | `DLNTM Northern Thai Manuscripts metadata TEI encoding CrossAsia` | DDG via r.jina.ai | Key hits: iiif.crossasia.org/s/lanna ("over 5,800 manuscripts"); digital.crossasia.org DLNTM page (CC BY-NC 4.0); DLNTM Resources page (oldest Tham ms CS 833 = CE 1471); ANU LibGuide collection breakdown; repository.crossasia.org DOI record crossasia_mods_00000347. No TEI-specific page surfaced (gap). |
| D1 | https://digital.crossasia.org/ (root) | direct fetch | OK — collections index shows "Northern Thai Manuscripts" and "Lao Manuscripts" among 16 collections. |
| 4 | `IIIF palm leaf manuscripts crossasia implementation presentation` | DDG via r.jina.ai | Confirms iiif.crossasia.org/s/lanna as IIIF Presentation implementation; also found IFLA PLM 2017 scoping workshop report PDF (metadata/digitisation standards); Prezi DH roadmap Khmer corpus (Mekong delta); IEEE 11350246 Vision Transformer palm-leaf char detection. |
| D2 | https://digital.crossasia.org/digital-library-of-northern-thai-manuscripts/?lang=en | direct fetch | FULL READ. "6,137 manuscripts from Northern Thailand"; funders/partners list; CC BY-NC 4.0. |
| D3 | https://iiif.crossasia.org/s/lanna | direct fetch | Blocked by Anubis anti-bot. |
| 5 | `BDRC Buddhist Digital Resource Center Pali expansion collection scope pages` | DDG via r.jina.ai | Hits: bdrc.io home/BUDA pages; Khyentse Foundation BDRC project page (Fragile Palm Leaves Digitization Project); Encyclopedia of Buddhism entry (2017 expansion note). |
| D4 | https://bdrc.io/about-us/ | direct fetch | FULL READ. Timeline 1997-2025; "over 27 million pages"; banner "over 28 million pages"; HTR listed in current work. |
| D5 | https://khyentsefoundation.org/kf-projects/buddhist-digital-resource-center-bdrc/ | direct fetch | FULL READ. 1999-2014: >9.5M pages / 18,000 volumes scanned under TBRC; 2016 rename + FPL digitization project. (Note: guessed URL .../fragile-palm-leaves-digitization-project/ returned 404.) |
| D6 | https://meap.library.ucla.edu/projects/myanmar | direct fetch | FULL READ. Inya-Burma Institute planning grant; survey of 74 monasteries; counts per monastery; Arcadia-funded. |
| 6 | `NGMPP microfilm Nepal German Manuscript Preservation Project Staatsbibliothek digitization portal` | DDG via r.jina.ai | Hits: uni-hamburg NGMCP history (founded 1970, DFG-financed); National Archives Nepal microfilm stats (5.3M folios / 181,500 mss, 1970-2001); SBB Orientabteilung (>180,000 films); NGMCP catalogue portal catalogue.ngmcp.uni-hamburg.de; CSMC Hamburg 2024 handover news. |
| D7 | https://digital.crossasia.org/digital-library-of-northern-thai-manuscripts-about?lang=en | direct fetch | FULL READ (longest source). Full collection breakdown, funding, technical details (Zeutschel/Nikon), naming scheme, archival redundancy. |
| D8 | https://digital.crossasia.org/digital-library-of-lao-manuscripts?lang=en | direct fetch | FULL READ. "12,168 texts are searchable"; launched Sept 2009; funded by DFG and BMZ. |
| 7 | `AI transcription Lao Tham manuscripts project handwritten recognition` | DDG via r.jina.ai | No Lao-Tham-specific project found. Generic HTR results: Transkribus (300+ AI models), arxiv 2411.03340 (LLMs SOTA on archival HTR), Thai handwriting VLM on HuggingFace (Aekanun/thai-handwriting-llm), Nature d44151-026-00020-0 (Tamil handwriting 99.8%). Gap recorded. |
| D9 | https://arcadiafund.org.uk/grants/endangered-archives-programme-2/ (first attempt `/endangered-archives-programme/` → 404) | direct fetch | FULL READ after correcting URL. EAP: $28,930,000 total, years 2004-2033, 562 grants, hosted at British Library, UCLA parallel programme. |
| 8 | `crowdsourcing transcription palm leaf manuscripts citizen science project` | DDG via r.jina.ai | Only generic crowdsourcing/transcription literature (Transcribe Bentham, Croatian Glagolitic FirstScripts, Transkribus TUC 2026 roundtable). No palm-leaf-specific citizen-science transcription platform found. Gap recorded. |
| 9a | arXiv export API: `all:"palm leaf manuscript"` max 15 | http://export.arxiv.org/api/query | totalResults=3: Tensmeyer & Martinez FCN binarization (1708.03276, applied to palm leaf); Palmira deformable network (2108.09436, Indiscapes2); Indiscapes layout parsing (1912.07025). All Indic domain. |
| 9b | `Arcadia Endangered Archives Programme grants digitisation libraries` | DDG via r.jina.ai | Located canonical Arcadia EAP page + BL iro collection page (EAP >450 projects / 90+ countries figure on BL side) + flexigrant application portal. |
| 10 | `"Tai Tham" OR "Lanna script" OCR recognition deep learning manuscript arxiv` | DDG via r.jina.ai | No academic HTR paper for Tai Tham found; only ScriptSource language profile, font repos, commercial tool claim (lekhak.app blog). Gap confirmed. |
| D10 | https://r.jina.ai/https://iiif.crossasia.org/s/lanna | jina proxy | FULL READ. IIIF portal text incl. four-collection counts, 1,600+ photo gallery, bilingual faceted search. |
| D11 | https://repository.crossasia.org/receive/crossasia_mods_00000347 | direct fetch | FULL READ. Research-data publication of DLNTM (Lanna), DOI 10.48796/20240306-000, CC BY 4.0, Berlin State Library, author Andrey Buchmann, GND keywords incl. Palmblatthandschrift. |
| D12 | IFLA PLM 2017 scoping workshop report PDF (via jina) | proxy fetch | FULL READ. 15 participants, 22 Nov 2017; survey of 16 PLM projects / 52 metadata elements; draft core set of 39 elements in 3 groups; recommendations to IFLA. |

## Fully read sources (>= requirement of 5)
1. digital.crossasia.org — DLNTM home
2. digital.crossasia.org — DLNTM About (largest single evidence base)
3. digital.crossasia.org — DLLM
4. bdrc.io/about-us
5. khyentsefoundation.org — BDRC/FPL page
6. meap.library.ucla.edu/projects/myanmar
7. arcadiafund.org.uk — EAP grant page
8. repository.crossasia.org DOI record (DLNTM research data)
9. iiif.crossasia.org/s/lanna (via jina)
10. IFLA Palm Leaf Manuscripts scoping workshop report 2017 (via jina)
11. arXiv export API result feed (3 records)

Raw copies archived under documents\ (14 files, 01_... through 14_...).
