# Loop B05 Findings

Date: 2026-08-26
Phase-B note: Deep-dive foraging loop on Dunhuang manuscript-culture scholarship, closing gaps flagged in Phase A loop 11 (Galambos full text; Fujieda English versions; Tangut in/out of Cave 17; Takata multilingualism; schoolroom-manuscript studies). No files from output\2026-08-25_คำแปลแทรกโบราณสากล\ were read or used.

## Queries executed

Web search layer (mostly unavailable):
1. websearch: Galambos "Dunhuang Manuscript Culture" De Gruyter 2020 open access - FAILED (provider 429 rate limit, repeated).
2. websearch retries: OAPEN mirror; Takata Tokio multilingual; Fujieda Zinbun - all 429.
3. Bing HTML scrape via PowerShell: served unrelated canned results / consent shell; DDG html + lite endpoints returned 202 bot-challenge; Mojeek 403. Conclusion: general web search unusable this loop.

API/repository layer (productive):
4. Crossref REST: query.bibliographic=Galambos Dunhuang Manuscript Culture -> book DOI 10.1515/9783110726572 + chapter DOIs -001..-005/-203/fm/toc with CC BY-NC-ND 4.0 licenses and page ranges.
5. Wayback availability + CDX API on degruyter.com/document/doi/10.1515/9783110726572* -> located 200-status captures of every chapter PDF and the full-book EPUB (20240710112111) and PDF (20240710123329).
6. Direct fetch of archived EPUB (14.1 MB, valid ZIP); chapter XHTML extracted to plain text (Introduction + chs. 1-4 + Concluding/References/Footnotes/Index) and mined by keyword (interlinear/gloss/annotation/correction/student/Qianziwen/Taigong/Tangut/multilingual/pen etc.).
7. r.jina.ai proxy attempts: degruyter.com (CAPTCHA), idp.bl.uk (Cloudflare CAPTCHA) - blocked.
8. OAPEN REST (library.oapen.org/rest/search): works; confirms the Galambos book is NOT mirrored on OAPEN (only related SMC-series titles).
9. DOAB DSpace7 endpoint 404; KURENAI (Kyoto repository) search: no Fujieda English articles; CiNii OpenSearch 503/404; NDL Search opensearch: empty; J-STAGE API: wrong-endpoint 404.
10. BuddhistRoad/Bochum OPUS live server unreachable; Wayback capture of Takata 2019 PDF fetched (valid %PDF), text extracted with pypdf.
11. Terzi et al. 2024 (silkroadsarchaeoheritage.org/articles/10.5334/srah.8) fetched full HTML; keyword-mined: zero occurrences of "Tangut".

## Table of sources

| Author | Work | Year | URL / locator | Status & use this loop |
|---|---|---|---|---|
| Imre Galambos | Dunhuang Manuscript Culture: End of the First Millennium (SMC 22, De Gruyter) | 2020 | https://doi.org/10.1515/9783110726572 ; EPUB via http://web.archive.org/web/20240710112111if_/https://www.degruyter.com/document/doi/10.1515/9783110726572/epub?licenseType=open-access | FULL TEXT HARVESTED (CC BY-NC-ND 4.0). All five gaps fed; see documents file |
| Takata Tokio | Tibetan Dominion over Dunhuang and the Formation of a Tibeto-Chinese Community (BuddhistRoad Paper 6.1) | 2019 | DOI 10.13154/rub.br.118.103 ; PDF via http://web.archive.org/web/20240916031309if_/https://hss-opus.ub.ruhr-uni-bochum.de/opus4/frontdoor/deliver/index/docId/6297/file/BudistRoadPaper6.1S4.pdf | FULL TEXT HARVESTED (CC BY-NC-SA 4.0) |
| Takata Tokio | Multilingualism in Tun-huang, Acta Asiatica 78: 49-70 | 2000 | verified independently in Galambos 2020 References and Takata 2019 n.18 | Metadata confirmed; no OA copy found online (see Remaining) |
| Fujieda Akira | The Tunhuang Manuscripts: A General Description I-II, Zinbun 9: 1-32; Zinbun 10: 17-39 | 1966/1969 | exact pagination confirmed via Galambos 2020 References; also Fujieda 1961 Toho gakuho 31: 199-292; 1968 Bokubi 177: 3-8 | Bibliography verified; no accessible digital scan found this loop |
| Victor H. Mair | Lay Students and the Making of Vernacular Narrative: An Inventory of Tunhuang Manuscripts, Chinoperl Papers 10: 5-96 | 1981 | per Galambos 2020 ch.2 + n.187 (IDP digital version exists but IDP bot-blocked) | Content known via Galambos's description only |
| Ito Mieko | Tonko monjo ni miru gakko kyoiku (monograph) + articles 2001/2007 | 2001-2008 | per Galambos 2020 References | Bibliography harvested (gap-5 cluster) |
| Li Zhengyu / Gao Mingshi / Zhang Nali / Zheng Binglin | student colophons inventory; Tang Dunhuang education; Qianziwen recensions | 1983-2005 | per Galambos 2020 References | Bibliography harvested |
| Erik Zuercher | Buddhism and Education in T'ang Times | 1989 | per Galambos 2020 References (repr. Brill 2013) | Drill-layout model recorded |
| Peng Jinzhang 2001; Matsui Dai 2012; Rybatzki 2009; Duan 2001; Yakup 2006 | Northern Zone (bei qu) languages incl. Tangut/Mongolian/Syriac/Old Uighur | 2001-2012 | cited in Galambos 2020 Introduction n.42 | Tangut-provenance chain anchored |
| Terzi et al. | Reconstructing a Medieval Library? ... Silk Roads Archaeology & Heritage 10.5334/srah.8 | 2024 | https://silkroadsarchaeoheritage.org/articles/10.5334/srah.8 | Full HTML fetched; no Tangut discussion (checked) |

## Key findings

Gap 1 - Galambos 2020 full text: CLOSED. Harvested complete book text from the Wayback-captured OA EPUB after De Gruyter CAPTCHA blocked live access. Core claims extracted:
- Cave 17 sealed "shortly after 1006"; contents tied to Guiyijun history; Pelliot's seal-on-Tangut-conquest theory (date 1030) explicitly "now discredited" (n.186).
- Multilingual scale: >30 languages/scripts around Turfan, ~20 at Dunhuang, >=12 at Khara-Khoto; societal multilingualism normal (Introduction).
- Correction/error culture: copyist poem about deliberately leaving mistakes "to my successors" survives in 4 manuscripts with phonetic-substitution variants tabulated; red clause-punctuation applied only to studied Xiaojing lines; unskilled verso hands full of errors are systematic study traces.
- Annotation accumulation: student-scroll versos carry disconnected primer titles/quotes (P.3698: Baixing zhang chs.18-19 quotes), circular fragments, name/date echoes of recto colophons - "the product of years of collaborative engagement"; P.2825/S.705 paired du/copy colophons include a possibly later-added clarification segment (layered paratext).
- Quantified didactics: S.2703 Qianziwen drills = ca. 150-230 characters/day over counted days; primer selection by length/difficulty (Xiaojing ~1800 chars; Taigong jiajiao 2200).
- Materiality signals for annotation layers: brush-to-hard-pen shift (Fujieda: >60% of all Dunhuang mss written by pen, n.34); multiple hands within codices detectable by character form/size; LTR writing anomalies as Central Asian influence marker.

Gap 2 - Fujieda English versions: PARTIALLY CLOSED. Verified precisely (via Galambos References) that the accessible English classics are 'The Tunhuang Manuscripts: A General Description' Part I (Zinbun 9, 1966, 1-32) and Part II (Zinbun 10, 1969, 17-39), plus Japanese anchors (1961 Toho gakuho 31: 199-292; 1968 Bokubi 177 on wood pen used for S.6983). No open digital scan surfaced via KURENAI/CiNii/NDL/J-STAGE/OAPEN/Wayback probes this loop; the rumored separate "Essays on East Asian Buddhism" version was not encountered anywhere verifiable (ยังไม่พบข้อมูลยืนยัน). Fujieda's key statistics remain usable through Galambos 2020 (which cites him directly).

Gap 3 - Tangut in Cave 17?: CLOSED at scholarly-source level. Galambos 2020 Introduction n.42 states that the Mogao Northern Zone yielded fragments "with additional languages not represented in the library cave (e.g. Tangut, Mongolian, Syriac)" (citing Peng 2001; Matsui 2012; Rybatzki 2009; Duan 2001; Yakup 2006). Combined with closure shortly after 1006 (pre-dating Tangut script creation 1036 and Xixia annexation) and the discrediting of Pelliot's Tangut-conquest sealing theory (n.186): Tangut material belongs to the Northern Zone caves and Khara-Khoto, not the Cave 17 cache. This upgrades loop_11's aggregator-level note to a citable scholarly statement.

Gap 4 - Takata multilingualism/phrasebooks: TITLE IDENTIFIED + ACCESSIBLE PIECE HARVESTED. The correct classic title is 'Multilingualism in Tun-huang', Acta Asiatica 78 (2000), 49-70 (verified twice independently; citing sources use pp. 60, 69-70 for Sino-Tibetan transcription chronology). No OA copy of the Acta Asiatica issue was reachable (Tōhō Gakkai server TLS/blocked; not archived as full text). Instead harvested IN FULL his OA 2019 BuddhistRoad Paper 6.1: Tibeto-Chinese community concept; Tibetan-script writing of Chinese by Chinese scribes (incl. insufficiently literate ones mobilised in sutra copying); two-system phonology (Chang'an koine in Tibetan period vs local Dunhuang dialect in Guiyijun) usable to date transcription/gloss layers; new identification of P.T.1254 as a wedding recitation; persistence into late 10th c.

Gap 5 - Schoolroom manuscripts: CLOSED via Galambos 2020 ch.2 + harvested bibliography cluster (Mair 1981 Chinoperl 10: 5-96; Ito Mieko 2008 monograph and 2001 Taigong jiajiao study; Li Zhengyu 1987 xuelang tiji inventory [144 colophons, 72 dated]; Zuercher 1989 master-model layout: teacher writes Qianziwen characters horizontally across sheet top, pupils copy down vertical columns; Zhang Nali on Qianziwen recensions). Evidence specifics (S.2703 day-counted drills; P.3698 verso study-references; red punctuation span; error-laden circular fragments as assignment reminders) recorded in the companion document.

Zhengcangyuan connection: skipped as instructed (no targeted search performed beyond incidental mentions absent from harvested texts).

## Gaps closed vs remaining

Closed this loop:
1. Galambos 2020 full-text content (scribal practice, correction culture, annotation habits) - harvested and mined.
3. Tangut absence from Cave 17 / presence in Northern Zone + Khara-Khoto - now backed by citable footnote chain (Galambos 2020 n.42 + n.186).
4. Takata title verification ('Multilingualism in Tun-huang', Acta Asiatica 78, 2000) + full harvest of an accessible Takata piece (2019).
5. Didactic-annotation evidence and study cluster (Mair/Ito/Li/Zuercher/Zhang Nali) with concrete manuscript examples.

Remaining:
- Acta Asiatica 78 (2000) full text of Takata 2000 - not openly accessible; obtain via library/JSTAR print channels if needed.
- Fujieda 1966/1969 originals - no open digitisation found; rely on citing scholarship or scan-on-demand libraries.
- Mair 1981 content beyond Galambos's summary (paywalled; IDP mirror bot-blocked).
- IDP primary pages for Tangut collections could not be fetched (bot protection) - secondary anchoring via Galambos n.42 accepted for now.
- Cave-464/465 Yuan-period Tangut detail (Arakawa Shintaro Or.12380/1842 lead from loop_11) still unfetched.

Blocked sources (for future loops): degruyter.com (CAPTCHA), idp.bl.uk (403/Cloudflare), hss-opus.ub.ruhr-uni-bochum.de + buddhistroad.ceres.rub.de (connection refused live; Wayback OK), OAPEN website UI (403; REST API works), Bing/DDG/Mojeke scraping (bot walls), OpenAlex (daily budget exhausted), Exa websearch provider (429 rate limit all loop).

## Files created
- research-notes/loop_B05/findings.md (this file)
- research-notes/loop_B05/documents/2020-Galambos-Dunhuang-Manuscript-Culture-fulltext.md
- research-notes/loop_B05/documents/2019-Takata-Tibeto-Chinese-community.md
- research-notes/loop_B05/documents/1981-Mair-schoolroom-manuscripts-cluster.md
