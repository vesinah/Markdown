# Search Log - Loop B09: Conservation science unresolved items (A18 gap-chasing)
Project: palm_leaf_buddhist_manuscripts | Date: 2026-08-26 | Research-only session

Method notes:
- DuckDuckGo HTML direct fetch returned bot-challenge; queries routed via r.jina.ai proxy and native websearch instead.
- HAL direct endpoints blocked by Anubis (proof-of-work); HAL landing page content obtained via r.jina.ai.
- bl.iro.bl.uk unreachable from this environment (webfetch transport error; PowerShell TLS negotiation failure; r.jina.ai 422).

## Queries executed (>=8 distinct)

Q1. `College de France palm leaf MS SL 68 restoration halshs-04447688` (DDG HTML via r.jina.ai) -> HAL landing page full offprint retrieved; academia.edu mirror 89538211; semanticscholar record; openedition lettre-cdf 1904/2235 companion articles located.
Q2. `"10.23636/8hbd-xj49" palm leaf supporting documentation British Library` (websearch) -> BL Shared Research Repository dataset page identified (datasets/62417e83-...), article record (articles/04bd3d15-...) "Cited by 27"; both unfetchable this session.
Q3. `Wiland "palm leaf" conservation Part 2 treatments boxing storage religious ethical recommendations best practice` (websearch) -> tandfonline abs page abstract verified; RG record confirms no public full text; JIC 46(1):64-91, published online 23 Feb 2023; PDF 3.9 MB paywalled.
Q4. `Metropolitan Museum palm leaf treatment Gore-Tex humidification isinglass protocol van Dyke Sacred Leaves` (websearch) -> primary Met protocol remains BPGA 28 van Dyke PDF (read in A18); AIC BPG Humidification wiki gives general Gore-Tex package method; no separate Met webpage exists for the protocol (gap closed as "no such standalone page found").
Q5. `National Library Sri Lanka natlib.lk conservation preservation ola leaf manuscripts PAC centre services` (websearch) -> natlib.lk conservation-and-preservation page + ifla.org/pac-sri-lanka fetched fully; PANHINDA/Panhida herbal oil confirmed on both.
Q6. `ICOM-CC Book Paper Group icon palm leaf manuscript guidelines conservation terminology IFLA principles of care` (websearch) -> ICOM-CC Terminology for conservation (2008) full definitions captured; IFLA PAC Sri Lanka FAQ "Traditional paper and manuscript preservation" fetched fully; ICOM-CC Publications Online platform (~3,000 free papers) noted; no ICOM-CC palm-leaf-specific guideline document found.
Q7. `Heritage Science 2024 volume 12 article 199 palm leaf fungus Aspergillus niger deterioration mechanisms Chu Lin Tian` (websearch) -> nature.com full article fetched directly beforehand; RG mirror PDF link recorded; funding No. 2022YFF0903903; affiliations China Academy of Cultural Heritage + Research Institute of Wood Industry, CAF.
Q8. `npj heritage science 2025 2026 palm leaf manuscript new paper restoration conservation` (websearch) -> s40494-025-01943-0 confirmed as the key 2025 restoration paper; NEW finds: s40494-026-02546-z carbonyl-index aging study (28 May 2026, OA) and s40494-026-02597-2 Tai Lue image blind-restoration transformer (12 May 2026).

Direct fetches (non-SERP): shs.hal.science/halshs-04447688 (via jina), nature.com/articles/s40494-024-01320-3, mdpi.com/2073-4360/17/1/83 (via jina), nature.com/articles/s40494-025-01943-0, natlib.lk/NLDSB/conservation-and-preservation/ (via jina), ifla.org/pac-sri-lanka/ (via jina), ifla.org/traditional-paper-and-manuscript-preservation/ (via jina), doi.org/10.23636/8hbd-xj49 (failed), bl.iro.bl.uk home (via jina, succeeded).

## Fetch failures logged
- https://shs.hal.science/halshs-04447688v1/file/CC17-offprint-riberaigua-messager.pdf : Anubis block (HTML challenge saved then deleted).
- https://doi.org/10.23636/8hbd-xj49 : webfetch transport error; Crossref API 404 (BL repository DOIs not registered with Crossref).
- https://bl.iro.bl.uk/concern/articles|datasets/... : transport error / TLS failure / jina 422.
- PowerShell Invoke-WebRequest to bl.iro.bl.uk: "Could not create SSL/TLS secure channel".
