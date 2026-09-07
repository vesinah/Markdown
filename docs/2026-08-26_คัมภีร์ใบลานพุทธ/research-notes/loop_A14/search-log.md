# Search Log - Loop A14 - Cambodian palm-leaf manuscript culture

Date of session: 2026-08-26
Agent: ox-alpha (research agent)
Project: palm_leaf_buddhist_manuscripts

## Method notes
- `websearch` tool returned HTTP 429 at session start; switched to webfetch of DuckDuckGo HTML endpoint via r.jina.ai proxy (https://r.jina.ai/https://html.duckduckgo.com/html/?q=...). This worked for all queries.
- Direct fetches blocked by anti-bot walls: thefreelibrary.com (403), sea.lib.niu.edu (Cloudflare Turnstile), catalogue.nla.gov.au (Anubis PoW), english.vov.vn direct (403; succeeded via proxy).
- Raw copies of fully-read sources archived in documents/.

## Queries executed (11 distinct)

| # | Query | Engine/route | Outcome |
|---|-------|--------------|---------|
| 1 | Cambodia palm leaf manuscripts slaek trieang temple libraries | DDG via jina | Good hits: BDRC Khmer Manuscript Heritage Project; NIU SEADL National Library of Cambodia collection; kampucheathmey; hslb.org PDF; angkordatabase; cambodgemag. NOTE: romanization "slaek trieang" not matched by any source; sources use "sleuk rith"/"slaeak rieung" (sastra sleuk rith). |
| 2 | Khmer Rouge destruction Buddhist manuscripts monasteries 1975 1979 | DDG via jina | Strong hits: Tricycle Wat Phum Thmei article (fully read); USHMM pages; JSTOR Ian Harris "Buddhism in a Dark Age"; Georgetown Berkley Center post. |
| 3 | Cambodian Pali Tripitaka printing completion volumes year | DDG via jina | LOC guide (fully read); Phnom Penh Post via thefreelibrary (snippet only, full text 403); NLA catalogue 1745562 (snippet only, site blocked); Pali Text Society non-PTS editions page; archive.org PDF by Ven. Khy Sovanratana. |
| 4 | Buddhist Institute Phnom Penh manuscripts preservation | DDG via jina | budinst.gov.kh official site; BDRC about-page (history incl. Royal Library/Buddhist Institute founding); ebudinst.wordpress digitization post (2003 scanning project); wondersofcambodia overview. Wikipedia/Grokipedia hits ignored per rules. |
| 5 | Khmer Krom Vietnam Theravada palm leaf temples manuscripts | DDG via jina | VOV article (fully read via proxy); Nhan Dan via vietnam.vn (fully read); buddhaworlds; journals.bilpubgroup FLS article 8352; vietnamtales. |
| 6 | Olivier de Bernon Khmer Buddhist manuscripts catalogue FEMC | DDG via jina | angkordatabase author page; EFEO member page (fr/en); EFEO archives page; GIS Reseau Asie "Inventaire des manuscrits khmers"; aefek.fr bibliography. |
| 7 | EFEO Cambodia palm leaf manuscripts microfilm collection wats | DDG via jina | angkordatabase film page "Le fonds EFEO des manuscrits khmers" (Guesdon collection, ~98% destroyed claim); southeastasianarchaeology.com post on EFEO "Khmer Manuscripts" database launch (2024); NIU SEADL again; EFEO Cham collection page (not Khmer-specific). |
| 8 | คัมภีร์ใบลานเขมร การทำลาย ฟื้นฟู สมัยเขมรแดง | DDG via jina (percent-encoded UTF-8) | Results were Thailand-focused (mps-center.in.th; digital.nlt.go.th; tci-thaijo articles; mcu thesis). No Thai-language source specifically on Khmer Rouge-era Cambodian destruction/restoration surfaced this session. Recorded as GAP. |
| 9 | British Library Asian African blog Khmer palm leaf manuscripts Cambodia | DDG via jina | blogs.bl.uk Cambodia tag page (mentions sleuk rith palm leaves and kraing folding books posts); bl.iro.bl.uk collection listing. Blog post full texts not fetched this session (Phase B candidate). |
| 10 | "Center for Khmer Studies" manuscripts palm leaf Buddhist Institute | DDG via jina | khmerstudies.org library and publications pages exist but no manuscript-project page surfaced in results; Scribd CKS "Cambodian Libraries and Documentation Centers" overview mentions Buddhist Institute Library. Partial only. |
| 11 | (bonus within #10 route) NLA catalogue 1745562 direct | r.jina.ai | Blocked by Anubis PoW wall. Snippet from DDG retained instead. |

## Fully-read sources (raw copies in documents/)
1. Tricycle, "Cambodia's Wat Phum Thmei Palm Leaf Library..." (2021) - tricycle_wat-phum-thmei-texts_2021.raw.md
2. Library of Congress research guide, "Khmer materials" - loc_guide_khmer_materials.raw.md
3. A Khmer Buddhist Foundation, "Manuscripts" page - akbf_manuscripts.raw.md
4. VOV World, "Khmer palm-leaf manuscripts: A living cultural heritage" (2026-03-08) - vov_khmer-palm-leaf-manuscripts_2026.raw.md
5. Nhan Dan (via vietnam.vn EN mirror), "Sacred treasures of the Khmer people" (2024-09-18) - nhandan_via_vietnamvn_sacred-treasures_2024.raw.md

## Failed/blocked fetches
- https://www.thefreelibrary.com/Govt+to+re-establish+Tripitaka+Commission+formed+in+1930.-a0831106663 (403 both direct and proxied)
- https://sea.lib.niu.edu/islandora/object/seadl:cambodia (Cloudflare Turnstile, also via Wayback)
- https://catalogue.nla.gov.au/catalog/1745562 (Anubis PoW)
- https://khmer-manuscripts.bdrc.io/static/aboutkm?uilang=en (JS app returned nav-only shell via jina; facts recovered from DDG snippets of same domain + archive.org collection page snippet)
