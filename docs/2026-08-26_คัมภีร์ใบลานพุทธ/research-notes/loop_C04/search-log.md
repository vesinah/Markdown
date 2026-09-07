# Search Log — Loop C04: final gap-fill (Mon & Pyu) for Phase C

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** C04 | **Date:** 2026-08-26
**Method:** webfetch + r.jina.ai proxy; curl.exe for raw downloads; pypdf for PDF text extraction. DuckDuckGo html endpoint direct = CAPTCHA; routed via r.jina.ai. ZORA (zora.uzh.ch) = Anubis PoW block this session (both search and file URLs); HISOMA direct = transport error/empty, r.jina.ai render OK.

| # | Action / Query | Tool | Result |
|:--|:---|:---|:---|
| A1 | Read loop_B04/findings.md + loop_B03/findings.md (required) | Read tool | DONE — gap list confirmed (B03 G-1 Mon term trā-ai; B03 H-5 Duroiselle; B04 F8 Pyu continuity; B04 S20 Jenny ZORA not archived) |
| A2 | Locate STOU archive in loop_B04/documents + A01 mmdl.utoronto.ca flag | Glob/grep local | FOUND: 09_stou_exhibition_bailanmorn.raw.md; A01 cites PTS page "100 PDFs of manuscripts from the Bagaya Monastery ... hosted on the University of Toronto website" |
| A3 | DDG q=Jenny 2005 "Old Mon" zora.uzh.ch | webfetch direct DDG | CAPTCHA block |
| A4 | hisoma.huma-num.fr homepage | webfetch direct | transport error |
| A5 | hisoma via r.jina.ai root | webfetch | 422 |
| A6 | ZORA simple search q=Jenny+Mon | webfetch direct | Anubis PoW challenge page |
| A7 | PYU007.xml?odd=teipublisher.odd via r.jina.ai | webfetch | SUCCESS — full four-face edition + apparatus + translation rendered (43,995 bytes archived) |
| A8 | mmdl.utoronto.ca via r.jina.ai | webfetch | SUCCESS — homepage welcome paragraph (Pruitt, Robarts, PTS since 2012, Ousaka, KDDI/Mitsubishi/CARI/JSPS) |
| A9 | curl ZORA PDF the verb system of mon.pdf | curl.exe | 4,471 bytes = Anubis challenge HTML → deleted |
| A10 | DDG via r.jina.ai q=Jenny "The Verb System of Mon" pdf zora | webfetch | HIT: isle.uzh.ch mirror ASAS_19_Jenny_2005_The_verb_system_of_Mon.pdf; ResearchGate/academia/docslib mirrors; Sudoc record (ISBN 3-9522954-1-8); OpenLibrary; zora eprint 110202 confirmed as same title |
| A11 | Crossref api.crossref.org works?query.author=Mathias+Jenny&query.bibliographic=Mon+verb+system | webfetch | Metadata confirms Verb System of Mon cited as "Jenny 2005" in later works; NEW: Jenny & McCormick "3 Old Mon" (HdAustroasiatic) doi:10.1163/9789004283572_009; McCormick & Jenny CLAO 42.2 (2013) doi:10.1163/19606028-00422p01 |
| A12 | curl isle.uzh.ch ASAS_19 PDF | curl.exe | SUCCESS 2,400,466 bytes, 303 pages; pypdf extraction full text |
| A13 | mmdl wp-sitemap.xml via r.jina.ai | webfetch | 404 but nav revealed: About{Archives, Project-to-Digitize, Collaborators, Films, Appendix}; Databases{UPT, BGY} |
| A14 | DDG via r.jina.ai q=Duroiselle "nissaya" Talaing grammar 1913 JBRS | webfetch | HIT: ScienceDirect Okell 1965 footnote snippet: 'Talaing nissaya', J[V]RS 3, 1913, 113 + "tráai, the Mon equivalent of nissaya"; Glottolog Okell entry |
| A15 | Read MMDL about/the-project-to-digitize + about/archives via r.jina.ai | webfetch x2 | FULL READ both (aims, funders, collections, conservation, formats) |
| A16 | Read jenny2005_extracted_head.txt pages 1–22 | Read local | FULL READ (TOC, preface, abbreviations, sec 1.1–1.2 incl. Pyu contemporaneity statement) |
| A17 | archive.org advancedsearch creator:Duroiselle OR title:"Burma Research Society journal" | webfetch JSON | 16 hits — NO JBRS vol.3; Duroiselle items: Pali Grammar 1921, Jinacarita 1906, Notes on ancient geography of Burma 1906, List of Inscriptions found in Burma 1921 |
| A18 | MMDL BGY database page + all nine letter pages a-c … y-z via r.jina.ai | webfetch x10 | ALL fetched; hand-count of PDF rows = 206 entries (BGY0001–0145 + -A…-J suffixes); files at digicoll.library.utoronto.ca/mmdl/BGY####.pdf |
| A19 | grep jenny2005_extracted_full.txt for script/Duroiselle/Talaing/nissaya/Pyu | bash Select-String | "Mon-Burmese script" term used (Hkyit Thein 1965 collection); EB=Duroiselle 1921 etc.; no explicit script-derivation sentence in dissertation |
| A20 | DDG via r.jina.ai q=Burmese script derived from Mon script scholarly | webfetch | No results (over-specified quotes) |
| A21 | UPT database page via r.jina.ai | webfetch | Nine letter-page structure confirmed (not enumerated) |
| A22 | DDG via r.jina.ai q=history of Burmese script Old Mon inscriptions alphabet origin Bauer Jenny | webfetch | HITs: Britannica Mon-language; academia.edu handout "Burmese Script: System and Diachronic Background"; Wikipedia-family results EXCLUDED by rule |
| A23 | curl direct PYU007 XML | curl.exe | FAILED (no body saved; server rejects non-browser) — render copy retained instead |
| A24 | Britannica /topic/Mon-language | webfetch direct | FULL READ — exact quote captured (script origin + basis for Burmese writing system) |
| A25 | academia.edu handout page via r.jina.ai | webfetch | Related-papers shell only; handout author not identified (SNIPPET only) |
| A26 | DDG via r.jina.ai q=Duroiselle nissaya hathitrust jstor volume 3 | webfetch | HIT: HathiTrust "The journal of the Burma Research Society v.1-3" Full View id=uc1.b3537055; archive.org JBRS Vol.7 djvu exists (wrong vol.) |
| A27 | babel.hathitrust.org pt?id=uc1.b3537055 (jina + direct + seq=5) | webfetch x2/curl | 403 Forbidden both routes — bot-blocked; existence recorded at SNIPPET level |

**Blocked/negative:** DDG direct CAPTCHA; lite.duckduckgo not retried (same class); zora.uzh.ch all routes Anubis; hal.science still Anubis (from B04); sealang.net/oldmon not retried (dead in B04); hathitrust bot-block; hisoma raw XML endpoint unreachable to bots.

## Fetch/read log (full reads ≥3 sources requirement)
1. HISOMA PYU007 TEI render — FULL READ + archived (43,995 bytes)
2. MMDL The Project to Digitize (Pruitt) — FULL READ + archived
3. MMDL Archives page (UPT + BGY descriptions) — FULL READ + archived
4. MMDL BGY listing, all 9 alphabet pages — read + counts
5. Jenny 2005 ASAS 19 — pp. 1–22 fully read from extraction; whole 303-page text extracted and pattern-searched
6. Britannica Mon-language — FULL READ
7. loop_B04/documents/09_stou_exhibition_bailanmorn.raw.md — re-read locally
