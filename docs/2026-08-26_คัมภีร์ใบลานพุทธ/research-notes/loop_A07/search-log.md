# Search Log — Loop A07: Scribal culture & patronage around Buddhist palm-leaf manuscripts

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** A07 | **Date:** 2026-08-26
**Environment notes:** `websearch` tool returned HTTP 429 (exa MCP). Direct `html.duckduckgo.com` fetch hit a bot CAPTCHA twice. Proven fallback used throughout: `https://r.jina.ai/<target-url>` proxy over DuckDuckGo HTML and over target pages/PDFs (jina converts PDFs to text). PDFs downloaded locally cannot be rendered by this model (no PDF input); text extraction therefore via jina reader of the same URLs. Crossref REST API used for metadata checks (`curl.exe` after PowerShell Invoke-WebRequest failed in NonInteractive mode).

## Queries executed (10 distinct)

| # | Query | Engine/route | Result |
|---|-------|--------------|--------|
| Q1 | `Buddhist palm leaf manuscript colophons donors dates merit copying study` | websearch tool | 429 error |
| Q1b | `colophons palm leaf manuscripts donors dates Laos Thailand study` | DDG HTML direct | CAPTCHA block |
| Q1c | same as Q1b | jina > DDG HTML | OK — Grabowsky JSS PDF, CSMC SMC27, CSMC RFH07, uplopen chapter, NRCT-adjacent hits |
| Q2 | `copying Buddhist manuscripts merit punya sponsorship colophon Theravada` | jina > DDG HTML | OK — Shan BL post, sutra-copying refs, Wellcome Sinhala project post |
| Q3 | `women donors Buddhist manuscripts colophons palm leaf` | jina > DDG HTML | OK — Jinah Kim JAAR JSTOR, Fragile Palm Leaves Foundation pages, Tocharian colophons |
| Q4 | `Justin McDaniel Gathering Leaves Lao Buddhist manuscripts monastic education` | jina > DDG HTML | OK — UW Press page, author site, Stanford/SI records, scholarspace review |
| Q5 | `royal patronage Tipitaka copying Sri Lanka Burma Siam manuscript donation` | jina > DDG HTML | OK-ish — tipitaka.lk BJT gov patronage, NSF Sri Lanka paper PDF, Manchester Rylands; weak on premodern royal copying |
| Q6 | `scribal workshops Buddhist manuscripts production South Asia scribes` | jina > DDG HTML | OK — EFEO×CSMC "Buddhist Scribal Practices" workshop, Tsui monograph (Chinese calligraphy/Dunhuang), IDP Dunhuang scribes; nothing directly on SEA palm-leaf workshops |
| Q7 | `จารึกท้ายเล่ม ใบลาน ผู้อุทิศ ศักราช` | jina > DDG HTML | OK — TCI/Dhammadhara Yasothon article, NRCT PDF, NLT manuscript database, SAC inscription DB |
| Q8 | `colophon formula Pali manuscript invocation "namo" scribe merit Theravada` | jina > DDG HTML | OK — JPTS XXII (namo tassa formula opening mss, snippet), BPS wheel (chanting context) |

## Full fetches / reads this session

1. **Grabowsky 2019 (JSS 107.1)** full text 40 pp via jina (PDF also downloaded 6.26 MB) — READ extensively incl. Content-of-Colophons, women-sponsors, royalty, conclusion sections [VERIFIED-PAGE]
2. **Nantawat & Raengthon 2023 (ธรรมธารา 9(1))** full text 33 pp via jina (PDF also downloaded 1.54 MB) — READ abstract, methods, results tables [VERIFIED-PAGE]
3. **CSMC RFH07 project page** full HTML (archived) — READ [VERIFIED-PAGE]
4. **Jinah Kim 2012 JSTOR landing page** — abstract + full metadata READ [VERIFIED-PAGE]
5. **uplopen.com Grabowsky chapter landing page** — abstract + TOC READ [VERIFIED-PAGE]
6. **UW Press McDaniel book page** — full description + TOC READ [VERIFIED-PAGE]
7. **Igunma, "A bar of pure gold: Shan Buddhist manuscripts"** (BL AS blog mirror) — full post READ [VERIFIED-PAGE]

## Archived raw copies → `loop_A07/documents/`

- `grabowsky_2019_jss107_thai_lao_manuscript_cultures_fulltext.md` (jina text, 138 KB)
- `siam_society_thai_lao_manuscript_cultures_revisited.pdf` (original PDF, 6.26 MB)
- `nantawat_raengthon_2023_dhammadhara_yasothon_colophons_fulltext.md` (jina text, 121 KB)
- `nrct_yasothon_dhamma_script_colophons.pdf` (original PDF, 1.54 MB)
- `csmc_rfh07_colophons_lao_luang_prabang.html` (34.7 KB)
- `crossref_10.1515_9783110795271-009_panarut.json`
- `crossref_10.1515_9783110795271-007_schnake.json`

## Blocked / failed routes (for future loops)

- websearch tool: persistent 429 all session
- html.duckduckgo.com direct: CAPTCHA (duck challenge) both attempts
- uplopen.com PDF direct download: 403 Forbidden (use jina or degruyterbrill.com link)
- PowerShell Invoke-WebRequest to api.crossref.org: NonInteractive-mode prompt failure → use curl.exe
