# Search Log — Loop C02: Manuscript production economics + field reviews (final gap-fill)

Project: palm_leaf_buddhist_manuscripts | Loop C02 | Date 2026-08-26
Tools used: webfetch (direct + r.jina.ai proxy), api.crossref.org, PowerShell Invoke-WebRequest/RestMethod (downloads + archive), DuckDuckGo HTML via proxy.
Pre-read: loop_B10/findings.md, loop_A18/findings.md (both read before any fetch).

| # | Action / Query | Result |
|---|----------------|--------|
| 1 | Read loop_B10\findings.md and loop_A18\findings.md | Done; gaps carried into C02 targets a-d |
| 2 | Created research-notes\loop_C02\documents\ | OK |
| 3 | Crossref API works/10.1080/19455224.2022.2115093 | VERIFIED: Wiland et al., JIC 45(3):236-259, 10 authors, BL+NAT Archives; archived crossref_wiland_part1_2115093.json |
| 4 | DDG html direct q=Alahakoon division of labour pdf | CAPTCHA (duck challenge) — switched to r.jina.ai proxy for all subsequent searches |
| 5 | r.jina.ai T&F full/10.1080/19455224.2022.2115093 | FULL LANDING READ: abstract x5 languages, keywords, bios, complete 76 endnotes; body paywalled USD56; archived raw |
| 6 | Direct jstor.org/stable/43855214 | JS client-challenge block |
| 7 | r.jina.ai jstor.org/stable/43855214 | FULL LANDING READ (2nd independent verification of metadata); archived |
| 8 | Crossref API works/10.1080/19455224.2023.2167095 | VERIFIED Part 2: JIC 46(1):64-91, online 23 Feb 2023; archived json |
| 9 | r.jina.ai T&F full/10.1080/19455224.2023.2167095 | FULL LANDING READ: bios + 95 endnotes (incl. Alahakoon 2006 NMM Samraksika chapter at p.62); archived |
| 10 | Crossref query.bibliographic Nishanthi bibliometric palm leaf | Surfaced Nishanthi DRC2025 monks paper (DOI 10.64920/drc2025013) + VJHSS 2022 paper |
| 11 | Crossref query.title Division of Labour Palm Leaf | No Alahakoon record (JRASSL not Crossref-deposited) |
| 12 | DDG via jina: Nishanthi Wijayasundara bibliometric Scopus | FOUND exact target c): IJMS 10(2) 2023 pp.13-28 + RG PDF + SJP repo handle dr.lib.sjp.ac.lk/handle/123456789/12763 + ORCID 0000-0002-2703-0002 |
| 13 | Fetch SJP handle page ?show=full | Metadata verified incl. bitstream link; archived html |
| 14 | Download SJP bitstream PDF (987 KB) | OK -> nishanthi_2023_ijms_bibliometric_sjp.pdf |
| 15 | r.jina.ai parse of same PDF | FULL TEXT read (16 pp, all tables); archived parsed md |
| 16 | Kelaniya repository.kln.ac.lk handle 30998 direct | 403 |
| 17 | Crossref query.author=Nishanthi bibliometric | Confirmed IJMS 2023 not in Crossref; confirmed Hathurusinghe/Nishanthi ICFFS 2025 (DOI 10.33422/icfss.v2i1.1108, pp.37-51) |
| 18 | DDG via jina exact title "Division of Labour..." -researchgate | JSTOR OCR snippet p.218 boiling passage captured |
| 19 | scholar.archive.org search | Bot-protection block |
| 20 | r.jina.ai taylorfrancis.com books/edit/10.4324/9780203884812 | FULL TOC with chapter URLs/DOIs/pages; archived |
| 21 | DDG via jina "division of labour in the production" Alahakoon | FOUND author-uploaded full PDF on ResearchGate (pub 358349396) + opening-line snippet + palmleaf.org bibliography entry |
| 22 | Direct download RG PDF | 403 Forbidden |
| 23 | r.jina.ai taylorfrancis ch ...-10 (Berkwitz Materiality & Merit) | Abstract FULL READ; archived |
| 24 | r.jina.ai taylorfrancis ch ...-17 (McDaniel Two Buddhist Librarians) | Abstract FULL READ; archived |
| 25 | r.jina.ai on RG PDF link | Cloudflare CAPTCHA page; archived as evidence |
| 26 | Semantic Scholar API search | 429 rate-limited (retried 2x, still 429) |
| 27 | OpenAlex API search | 429 rate-limited |
| 28 | DDG via jina exact title (no exclusions) + saved raw | Same two snippets; archived ddg_alahakoon_exact_search.raw.md |
| 29 | RASSL royalasiaticsociety.lk/publications via jina | No digital archive; print purchase only; library hours/contact noted |
| 30 | Download dpublication.com ICFFS 1108/845/10248 PDF | OK (%PDF-1.5) -> nishanthi_2025_icfss_variety_palm_leaves.pdf |
| 31 | r.jina.ai parse ICFFS PDF | FULL TEXT read (15 pp); archived parsed md; yields dense Alahakoon-cited production chain + Alahakoon 2019/2023 refs |
| 32 | Bing via jina same phrase | Junk results (engine misparse) |
| 33 | r.jina.ai repository.kln.ac.lk/handle/123456789/27420 (Alahakoon DRC 2023) | Abstract FULL READ (craftsmen + four components); archived |
| 34 | r.jina.ai repo.busl.ac.lk/handle/1/2109 (Alahakoon 2019) | 422 transport error (http+https) — server unreachable |
| 35 | KLN DSpace discover API via jina | Item uuid bf03b4d6-edac-4915-841e-3b0c3f06625c found; archived |
| 36 | KLN bundles + bitstreams endpoints via jina | 4 bundles, no downloadable bitstream (abstract-only item); archived |
| 37 | r.jina.ai RG publication landing page | Cloudflare block again |
| 38 | Archived 4 BMC chapter pages + T&F eBook TOC via Invoke-WebRequest | OK (4 raw md files) |
| 39 | Saved Crossref JSONs for both Wiland DOIs | OK |

Net status: targets b/c/d substantially or fully read; target a remains SNIPPET-level (metadata + 2 indexed body fragments + rich citation-context from OA sources citing it).
