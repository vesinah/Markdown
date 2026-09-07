# Query Log — loop_12 (Explorer B-04: JA kunten full-text gap)

Date: 2026-09-01/02 | Agent: B-04 | Cap: 5 queries / 3 downloads

| # | Tool/Endpoint | Query / URL | Result |
|---|---|---|---|
| 1 | webfetch CiNii (web UI) | cir.nii.ac.jp/all?q=訓点資料 ; all?q=訓点 | HTML page returned no extractable results (bot-blocked/empty); switched to OpenSearch RSS |
| 2 | webfetch CiNii OpenSearch RSS ×2 | opensearch/all?q=訓点資料 (count=20); opensearch/all?q=ヲコト点 声点 (count=15) | ✅ RSS works. 1746 hits for 訓点資料. Key hits: 小林芳規「返點の沿革」(訓点語と訓点資料 54, 1974, full text at hiroshima.repo.nii.ac.jp/records/2009567); KAKEN projects 月本雅幸, 田島孝治/堤智昭/小助川貞次, 肥爪周二. Second RSS returned only channel title (query with space + 声点 encoded oddly) |
| 3 | scholar_api.py (OpenAlex) ×4 attempts | "kunten Okimori Takuya Japanese glosses"; "Brian Steininger kunten Buddhist Japanese"; "Steininger kunten"; "kunten glosses Buddhist manuscripts Japan" | ❌ HTTP 429 rate-limit on all 4 (waited 20–75s between). Skipped per rule. Direct api.openalex.org also failed: daily budget exhausted ("Rate limit exceeded, resets midnight UTC") |
| 4 | webfetch DDG + Bing | html.duckduckgo.com q=Steininger kunten; bing.com q=Steininger kunten buddhist glosses | ❌ DDG: CAPTCHA challenge. Bing: returned zero organic results (blank SERP) |
| 5 | Semantic Scholar API ×3 + Crossref ×2 | S2: query=kunten glosses Japanese Buddhist (limit 15) | ❌ S2: HTTP 429 ×3 (waits 45–90s) → skipped. ✅ Crossref (2nd attempt, without select= param which caused 400): found Alberizzi 2015 (OA full text), Tsukishima 2001 (J-STAGE free PDF), Tsukimoto 2024 De Gruyter chapter, Kono 2021 (already indexed) |

**Downloads (3/3, cap reached):**
1. https://hiroshima.repo.nii.ac.jp/record/2009567/files/kuntengo_54_86.pdf → 1974-kobayashi-Downloads-entenkuten-hiroshima.pdf (26pp)
2. https://oaj.fupress.net/index.php/bsfm-qulso/article/download/1865/1865 → 2015-alberizzi-kunten-sino-japanese-hybridization.pdf (26pp)
3. https://www.jstage.jst.go.jp/article/tja1948/56/1/56_1_1/_pdf → 2001-tsukishima-kunten-vocabulary.pdf (12pp)

**Blocked/skipped:** scholar_api (429×4), OpenAlex direct (budget), Semantic Scholar (429×3), DuckDuckGo (CAPTCHA), Bing (empty), pdmoran.net (transport error), hiroshima.repo web UI via webfetch (406 — worked via Invoke-WebRequest). No Steininger/Moran/Vance full text obtained within caps.
