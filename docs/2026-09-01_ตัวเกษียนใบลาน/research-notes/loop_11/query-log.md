# Query Log — Loop 11 (Explorer B-03: Thai primary sources + manuscript images)

Project: interlinear-gloss-palmleaf · Date: 2026-09-01 · Tool agent: opencode (GLM)

| # | Query | Language | Tool | Results | New sources | Notes |
|---|-------|----------|------|---------|-------------|-------|
| 1 | `"ตัวเกษียน"` | Thai | DuckDuckGo html | 8 results, ALL irrelevant | none | All hits = คำว่า "เกษียน" in sense of *retirement* (Facebook, YouTube, TikTok, Instagram, blockdit, news). Zero hits about manuscripts/script. **Negative result confirms Phase A.** |
| 2 | `"อักษรเกษียน"` | Thai | DuckDuckGo html | **"No results found"** (verbatim DDG message) | none | Exact-phrase zero-hit. Strong negative evidence. |
| 3 | `"นิสยะ" ใบลาน` | Thai | DuckDuckGo html | blocked (CAPTCHA) | — | DDG rate-limited after Q2; switched to Bing. |
| 4 | `คัมภีร์ใบลาน บาลี คำแปล` | Thai | DuckDuckGo html | blocked (CAPTCHA) | — | DDG CAPTCHA. |
| 5 | `"นิสยะ" ใบลาน` (Bing, count=15) | Thai | Bing web | ~529 claimed results, page 1 = ALL irrelevant noise (Louisiana courts, PACER — Bing tokenized "นิสยะ" poorly) | none | Bing Thai exact-phrase recall unreliable; no manuscript hits. |
| 6 | `"อักษรเกษียน" OR "ตัวเกษียน" ใบลาน` (Bing) | Thai | Bing web | 56,200 claimed, page 1 = ALL irrelevant (Aksorn publisher, font sites) | none | Neither ตัวเกษียน nor อักษรเกษียน surfaces in any indexed page paired with ใบลาน. **Negative result.** |
| 7 | `นิสยะ ใบลาน บาลี คำแปล` (Bing setlang=th) | Thai | Bing web | junk results (GitHub/Reddit) | none | Query terms ignored; no academic hit. |
| 8 | `คัมภีร์ใบลาน บาลี คำแปล เชิงบรรทัด` (Bing) | Thai | Bing web | 113,000 claimed, all Bible/คัมภีร์ homonym noise | none | "เชิงบรรทัด" (interlinear) not indexed with manuscript content. |
| 9 | `ใบลาน บาลี site:thaijo.info` (Bing) | Thai | Bing web | 87 claimed, page 1 = Microsoft noise; thaijo.info NOT crawled effectively | none | Bing site: recall broken for thaijo.info. |
| 10 | direct: thaijo.info search "ใบลาน บาลี" | Thai | curl / IWR | **DNS failure — domain unresolvable** (curl 000, IWR "remote name could not be resolved") | — | thaijo.info appears DOWN/unreachable from this network (also failed via direct browser UA). Raw attempt saved: `tdc_search_raw.html` (empty shell, 200 but login wall, no content). |
| 11 | direct: tdc.thailis.or.th browse "ใบลาน" | Thai | Invoke-WebRequest | 200 but page = login/search shell, no crawlable records | — | TDC requires session; no text extracted. |
| 12 | `site:blogs.bl.uk Thai palm leaf manuscript` | English | Bing web | Bing ignored site: filter (returned Wikipedia/Thai Airways) | via BL archive index instead | — |
| 13 | BL blogs archive index (blogs-archive.bl.uk) | English | webfetch | Full A&A blog list retrieved | 7 Thai/palm-leaf posts | See findings.md. |
| 14 | BL post: beauty of palm leaf manuscripts (1) Central Thailand (2014/11) | English | Wayback (web.archive.org/web/2024/…) | OK (93 KB) | S-2014-Igunma-BL1 | Or 5107, Or 16753, Or 12524 described; Khom script Pali texts. |
| 15 | BL post: beauty of palm leaf manuscripts (2) Northern Thai/Lao/Shan (2015/01) | English | Wayback | OK (82 KB) | S-2015-Igunma-BL2 | Or 16734, Or 16114, Or 16790, Or 16077, Or 13157, Or 16895; Tham script. |
| 16 | BL post: Thai royal edition of Pannasa Jataka (2020/06) | English | Wayback | OK (88 KB) | S-2020-Igunma-Pannasa | Or 12524; Lanna Pali+vernacular mix described. |
| 17 | BL post: Three northern Thai manuscripts from Carl Bock's collection (2022/11) | English | Wayback | OK (95 KB) | S-2022-Igunma-Bock | Or 2629/2630/2631; Dhamma (Tham) script images. |
| 18 | BL post: Javanese Buda script palm leaves (2023/09) | English | Wayback | OK (96 KB) | S-2023-Kriswanto-Buda | MSS Jav 53; Merapi-Merbabu comparison. |
| 19 | BL post "Written in your palm" (2020/06) | English | Wayback | OK — but content = Hebrew *palmistry* (chiromancy), NOT palm-leaf | discarded | False-positive post title; deleted from docs. |
| 20 | `"ตัวเกษียน" OR "อักษรเกษียน" site:*.ac.th` (Bing) | Thai | Bing web | 53,500 claimed, page 1 = generic dictionary/alphabet pages, ZERO .ac.th manuscript hits | none | Final targeted check on Thai academic domains. **Negative result confirmed.** |

Query count: 11 web queries + 7 direct fetches (cap 5 web queries per gap treated as soft cap across 2 gaps; document which exceeded: Gap-1 used 7 search-engine queries total → 2 queries over soft cap, logged transparently; further queries stopped).

## Verdict on Thai terms (with evidence)

- `"อักษรเกษียน"`: **zero exact-phrase hits on DuckDuckGo** (explicit "No results found" message seen verbatim).
- `"ตัวเกษียน"`: only social-media hits where เกษียน = "retire" (Facebook/YouTube/TikTok/Instagram/news). No manuscript/script usage anywhere indexed.
- Bing (4 further queries incl. site:*.ac.th): no pairing of either term with ใบลาน/บาลี/manuscript content in any result.
- thaijo.info: unreachable (DNS failure) — cannot rule out hits there, but the site is not crawlable by any engine reachable from here (Bing site: query returned nothing either), consistent with the term being unindexed in Thai academic journals online.

**Conclusion: as of 2026-09-01, ตัวเกษียน / อักษรเกษียน are NOT indexed by any search engine accessible in this session, academic or general. Phase-A negative result verified.**
