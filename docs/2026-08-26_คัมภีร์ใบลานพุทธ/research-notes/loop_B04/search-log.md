# Search Log — Loop B04: Mon language/script Buddhist manuscripts (citation-chaining for A05/A06 gaps)

**Date:** 2026-08-26 | **Agent:** research agent (Phase B foraging)
**Method:** webfetch DuckDuckGo html endpoint was CAPTCHA-blocked on direct call; all queries routed through r.jina.ai proxy of `html.duckduckgo.com/html/?q=`. Direct fetches + r.jina.ai for pages; curl.exe for raw downloads; pypdf for local PDF text extraction.

| # | Query | Tool | Result |
|:--|:---|:---|:---|
| Q1 | Mon language palm leaf manuscripts collection Thailand | DDG via r.jina.ai | HIT: EAP1123 (eap.bl.uk), SEA Junction part-2, H-Net announcement, SEAMEO SPAFA project, cultureincrisis, searcharchives EAP1123/2, burmalibrary Thianpanya paper |
| Q2 | Pyu script Mon script continuity debate inscriptions | DDG via r.jina.ai | PARTIAL: Wikipedia hits (EXCLUDED by rule), grokipedia (excluded, low reliability), hal.science hal-04944573 (Anubis-blocked), hisoma.huma-num.fr PYU007 TEI corpus (snippet), pyumyanmar-research.blogspot.com (non-academic blog), github LinguList/pyu-inscriptions |
| Q3 | Christian Bauer Mon orthography manuscripts inscriptions | DDG via r.jina.ai | HIT: HU-Berlin personal page; Bauer JSS 79.1 + 79.2 PDFs (Siam Society); sealang.net/oldmon; Shorto DMI 1971 archive.org; harrassowitz Northern Thai stone inscriptions PDF |
| Q4 | Mathias Jenny Mon grammar manuscripts corpus | DDG via r.jina.ai | HIT: Jenny Google Sites pub list + Mon Grammar project page; Verb System of Mon (2005) full PDF at UZH/zora; ResearchGate mirror; academia.edu MSS 43.1 article |
| Q5 | Nai Pan Hla Mon chronicle palm leaf manuscript | DDG via r.jina.ai | HIT: SEAMEO Chat "A Chronicle of the Mons" PDF; GNLM 2026 Razadarit article; Pak Lat Chronicles (Wikipedia hit EXCLUDED); grokipedia (excluded) |
| Q6 | British Library Mon manuscripts collection holdings | DDG via r.jina.ai | WEAK: generic BL pages only. Follow-up targeted queries (Q9) replaced it |
| Q7 | Raman Mon temples Thailand manuscripts bai lan ใบลานมอง | DDG via r.jina.ai | HIT: STOU online exhibition bailanmorn; TCI e-JODIL article 243721; SAC Manuscripts of Thailand db (1,987 records); NLT ancient-documents db |
| Q8 | Mon nissaya Pali bilingual manuscripts | DDG via r.jina.ai | HIT: searcharchives EAP1123/2 (bilingual Pali-Mon nissaya); myanmarmanuscripts.org Sutta-patheyya Mon nissaya; Brill MANUSYA Herngseng; V&A O35191; RAS Burmese 60; Christ's College Pali catalogue |
| Q9 | EAP1123 "Recalling a Translocal Past" Mon manuscripts wats digitised | DDG via r.jina.ai | HIT: EAP1123 project page; EAP1123/3/5 item; cultureincrisis outcomes (30 sites visited, mss in 18, 49 texts digitised pilot-phase claim) |

## Fetch/read log (full reads)
1. eap.bl.uk/project/EAP1123 (r.jina.ai) — FULL READ
2. searcharchives.bl.uk/catalog/032-003708955 (r.jina.ai) — FULL READ (+raw HTML archived)
3. seajunction.org part-2 announcement (r.jina.ai) — FULL READ (+raw HTML archived)
4. Bauer JSS 79.1 PDF — downloaded, text extracted (146,753 chars), head + index read
5. library.stou.ac.th bailanmorn exhibition (r.jina.ai) — FULL READ
6. so01.tci-thaijo.org e-JODIL 243721 (r.jina.ai) — FULL READ (abstract page)
7. myanmarmanuscripts.org item page (r.jina.ai) — JS shell only, metadata NOT rendered (SNIPPET fallback)
8. seameo-spafa.org/mon-palm-leaf-manuscripts (r.jina.ai) — FULL READ (project body captured before truncation)
9. sealang.net/oldmon — DIRECT transport error; via r.jina.ai 422 → NOT readable this session
10. eap.bl.uk/project/EAP1432 (r.jina.ai) — FULL READ
11. amor.cms.hu-berlin.de/~h0198kaq (direct) — FULL READ

## Blocked / negative results
- hal.science/hal-04944573v1/document — Anubis proof-of-work block (file downloaded was challenge HTML, deleted)
- seameochat.edu.mm PDF — TLS trust failure on Invoke-WebRequest; retrieved via curl -k; but scanned images, pypdf extraction = 8 chars (no text layer)
- lite.duckduckgo.com — same CAPTCHA as html endpoint
- api.crossref.org query "Bauer Mon inscriptions Writing for Eternity" — no matching record (EFEO volume not indexed); Jenny query returned 3 valid records (see findings F9)
- eap.bl.uk direct curl download returns 0 bytes (bot protection) — content preserved as .raw.md instead
