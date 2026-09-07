# Search Log — Loop B03: Nissaya / Interlinear Bitext Scholarship (A06 gaps)

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** B03 | **Date:** 2026-08-26
**Method:** Citation-chaining from loop_A06 Phase B candidates. Tools: Crossref API, DuckDuckGo HTML via r.jina.ai proxy (direct DDG hit CAPTCHA), direct site fetches, PowerShell downloads (TLS 1.2 forced). No Wikipedia used.

| # | Query / action | Route | Result |
|---|---|---|---|
| 1 | Read loop_A06/findings.md candidate list | local | 8 candidates identified |
| 2 | Crossref works/10.1163/26659077-25010027 | api.crossref.org | VERIFIED: Herngseng 2023 MANUSYA 26(1):1-23, CC-BY; ref list confirms Okell 1965 title, Pruitt 1992, Walker 2020 |
| 3 | Direct fetch Brill article page | brill.com | FULL TEXT HTML obtained (CC-BY open access), all sections 1-7 read; PDF downloaded (10.3 MB) |
| 4 | Crossref works/10.1016/0024-3841(65)90013-6 | api.crossref.org | VERIFIED: Okell "Nissaya Burmese", Lingua 15:186-227 (1965); refs incl. Duroiselle 1913 "Talaing nissaya" JBRS 3:113 |
| 5 | "Hundius 'The Colophons of Thirty Pali Manuscripts' Journal of the Pali Text Society" | r.jina.ai/DDG | Found archive.org item jpts-xiv-1990 with full OCR text |
| 6 | Download Hundius djvu.txt | archive.org (TLS12) | Full text 322 KB saved; TOC + Background + colophon sections read |
| 7 | "Okell 1965 'Nissaya Burmese' Lingua 'systematic adaptation'" | r.jina.ai/DDG | ScienceDirect snippet (opening sentence); Glottolog entry adds JBRS 50(1):95-126 (1967) reprint; SEAlang SALA entry; SOAS Worktribe repository entry |
| 8 | "nissaya interlinear gloss palm leaf manuscript layout tiny script between lines" | r.jina.ai/DDG | V&A O39994 + O35191; Penn Colenda 81431-p31n7xx2r; RAS rasburmese15/60; PALM-LAY dataset (2026 Springer chapter) |
| 9 | Fetch Penn Colenda nissaya record | colenda.library.upenn.edu | VERIFIED-PAGE: Thai/Pali nissaya mss 1775-1799, 5 lines per leaf, 5.2 x 55 cm |
| 10 | "von Hinuber 'Kolophonen' Palmblatthandschriften Nord-Thailand" | r.jina.ai/DDG | Exact 1993 title + pages 223-236 confirmed on CrossAsia DLLM pages + JSS article citation; discovered von Hinüber 2013 Lai Hin monograph |
| 11 | Fetch CrossAsia DLNTM Resources EN page | digital.crossasia.org | VERIFIED-PAGE: full von Hinüber bibliography (7 items), Hundius, Filliozat, Skilling & Pakdeekham; bilingual Pali-Northern Thai statement |
| 12 | "'Khmer pre lot OR prayog' ..." (x2 variants) | r.jina.ai/DDG | No results (accented rare terms fail on DDG) |
| 13 | websearch fallback | exa MCP | HTTP 429 rate-limited - unavailable |
| 14 | "'Pali-Khmer bitexts' OR 'Khmer bitexts'" | r.jina.ai/DDG | Found Walker Udaya 15 (2020/21) open PDF at yosothor.org + JSTOR "Liquid Language" |
| 15 | Download Walker Udaya PDF | yosothor.org | 779 KB PDF saved |
| 16 | Fetch JSTOR 48808306 via r.jina.ai | jstor.org | VERIFIED metadata + abstract: Walker 2022 JIP 50(4):705-723 |
| 17 | Extract Udaya PDF text via r.jina.ai | r.jina.ai | Full text extracted (~37 pp.); IMA 32 = 1688 CE earliest datable Pali-Khmer bitext; K.484 particle-marking precedent; Cambodian ms counts |
| 18 | "Mon language nissaya manuscripts Burma Pali Talaing interlinear" | r.jina.ai/DDG | Myanmar Manuscript Digital Library (Toronto/Pruitt) found; RAS records; no independent Mon trā-ai source beyond Walker 2020 |
| 19 | Local grep of A06 archived Walker JAOS markdown | local | Confirms footnote 1 term list: nissaya (Burmese), naṃ/trā-ai (Mon), nisrai/nissăy, nāmaśăbd/săpº, cuṇṇiyapad, ṕlè yak śăbd, prè lot prayog (Khmer); khaam hvăt/t́vă kṣien annotation script |

## Queries against required list
- "Herngseng nissaya 2023 article full text" -> covered by #2/#3 (+DDG mirrors in #18 results)
- "Okell 1965 Lingua nissaya Burmese translation style" -> covered by #4/#7
- "Hundius colophons Journal Pali Text Society 1990" -> covered by #5/#6
- "nissaya layout interlinear gloss palm leaf tiny script" -> covered by #8/#9
- "Mon tra-ai interlinear Pali manuscripts" -> attempted (#18 + earlier literal query, 0 hits); verified only via A06 JAOS archive (#19)
- "Khmer pre lot prayog annotation manuscripts" -> attempted x3 (literal + variants); verified via Walker Udaya full text (#14/#16/#17)
- "Pali vernacular bitexts Southeast Asia survey Walker" -> covered by #14/#16
- "von Hinuber Lan Na Pali manuscripts study" -> covered by #10/#11

## Tool notes for next loops
- html.duckduckgo.com and lite.duckduckgo.com both serve CAPTCHA to direct fetch; wrap through https://r.jina.ai/
- PowerShell 5.1 needs `[Net.ServicePointManager]::SecurityProtocol = Tls12` before archive.org/downloads
- archive.org file names may contain combining diacritics (Pa%CC%84li) - get exact names from /metadata/<id> JSON first
- This model cannot read PDFs directly; use r.jina.ai to extract PDF text
- Accented characters are lost in some r.jina.ai extractions ("?" substitution) - keep the original PDF too
