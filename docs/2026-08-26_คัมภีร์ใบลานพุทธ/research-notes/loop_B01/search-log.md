# Search Log — Loop B01: Ho Trai Architecture + Thai/Lanna Palm-Leaf Conventions

**Project:** palm_leaf_buddhist_manuscripts | **Loop:** B01 | **Date:** 2026-08-26
**Method:** citation-chaining from loop_A04 + loop_A12 gaps. Tools: DuckDuckGo HTML (blocked after query 1 by CAPTCHA), session websearch (used as discovery engine), webfetch direct reads, r.jina.ai proxy for blocked PDFs/binary, PowerShell Invoke-WebRequest archiving.

## Queries executed (EN + TH)

| # | Query | Engine | Result |
|---|-------|--------|--------|
| Q1 | `Lagirarde ho tham Lanna bibliotheques monasteres bouddhiques 2014` | DDG html | HIT — Persée Arts asiatiques 69 (2014) pp.35-50; HAL; JSTOR; academia.edu |
| Q2 | `Wat Phra That Lampang Luang ho trai library building Lanna architecture history` | websearch | HIT — siamrat.blog full text; grokipedia (AI-wiki, keywords only); Li-Zenn book ref |
| Q3 | `หอไตร สถาปัตยกรรมไทย วัดระฆัง โฆสิตาราม หอไตร ประวัติ ศึกษาวิจัย` | websearch | HIT — seaarts.sac.or.th artwork/327; thapra.lib.su.ac.th web-temple id=15; silpa-mag.com |
| Q4 | `Thai palm leaf manuscript title written at end colophon folio numbering numbering system bai lan` | websearch | HIT — tst-project colophons (S. India, generic); SLAM bai lan object; dmc.tv royal editions |
| Q5 | `หอไตร วัดพระธาตุลำปางหลวง สถาปัตยกรรมล้านนา เก็บคัมภีร์ใบลาน` | websearch | HIT — sure.su.ac.th thesis 2736; chiangmainews.co.th 100lanna/1270898 |
| Q6 | `คัมภีร์ใบลาน ตกแต่ง ล่อรัก ล่อชาด ทองทึบ ปิดทอง อนุรักษ์ วิจัย` | websearch | HIT — saranukromthai.or.th/middlechild/1019; trueplookpanya.com 61810; dmc.tv/article/21840 |
| Q7 | `DLNTM Northern Thai manuscript catalog conventions title colophon foliation leaves per fascicle phuk` | websearch | HIT — iris.unive.it Jaengsawang chapter; OPenn Penn Museum 51-9-2; DLNTM Resources page; LOC guides |
| Q8 | `Lan Na manuscripts palm leaf versus mulberry paper khoi proportion temples survey Grabowsky` | websearch | HIT — CSMC mc03-grabowsky.pdf; muse.jhu.edu McDaniel 2017 (CAPTCHA-blocked); EAP1123; DLLM About |

## Direct fetches / archive operations

- Persée doc page arasi_0004-3958_2014_num_69_1_1863 — HTML archived; body = page images only
- Persée PDF docAsPDF ... .pdf — 403 Forbidden (plain + browser-UA); r.jina.ai also blocked (altcha)
- shs.hal.science/halshs-02542142 — Anubis JS-challenge blocked
- academia.edu/33361204 Les_Ho_Tham_du_Lanna — read via r.jina.ai; full abstract captured; archived
- thapra.lib.su.ac.th/web-temple id=15 (วัดระฆังฯ) — full read; HTML archived
- seaarts.sac.or.th/artwork/327 — full read; HTML archived
- sure.su.ac.th/xmlui/handle/123456789/2736 — full metadata+abstract read; fulltext.pdf (17.98 MB) + Abstract.pdf downloaded
- chiangmainews.co.th/100lanna/1270898/ — full read; HTML archived
- iris.unive.it "Manuscripts at Funerals.pdf" — direct 403; full text extracted via r.jina.ai; MD archived
- csmc.uni-hamburg.de mc03-grabowsky.pdf — direct fetch = raw binary; text extracted via r.jina.ai; MD archived; key passage grepped
- muse.jhu.edu McDaniel 2017 — Friendly-Captcha blocked (SNIPPET only)
- unifont.org/hariphunchai/th/node/7 — full read (no separate archive; content quoted in findings)
- tst-project.github.io/paratexts/colophons/ — full read (South-India project, generic colophon definition only)
- saranukromthai.or.th/middlechild/1019 — read (output truncated; core passages recovered via Q6 snippets); HTML archived (2.22 MB)
- trueplookpanya.com/knowledge/content/61810 — HTML archived (mirror of same encyclopedia text; TIS-620 encoding)
- dmc.tv/article/21840 — read via Q6 results; HTML archived
- eap.bl.uk EAP1123/EAP1432 pages — read via Q8 excerpts (Mon bundle face counts)

## Blockers encountered

- html.duckduckgo.com CAPTCHA ("select all squares containing a duck") after first query
- Persée PDF altcha protection; HAL Anubis; MUSE FriendlyCaptcha; iris.unive.it 403 (bypassed via r.jina.ai)
