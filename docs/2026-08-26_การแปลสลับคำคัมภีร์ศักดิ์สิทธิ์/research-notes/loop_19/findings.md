# Loop 19 (Phase B) — Findings: Japanese kunten/kundoku research gaps

Date executed: 2026-08-25
Method: multi-source web verification. Primary websearch provider returned HTTP 429 for
the whole session; workarounds used: direct institutional fetches (HI SHIPS portal,
KAKEN, Firenze UP/OJS), NDL Search SRU/OpenSearch API, Crossref REST API, F1000Research
site, and local PDF text extraction (pypdf). No Wikipedia used. All items below were
confirmed against at least one authoritative source fetched this session.

## Source table

| Author | Title | Year | Type | Publisher/Journal | DOI/ISBN | URL | Status |
|---|---|---|---|---|---|---|---|
| 東京大学史料編纂所 | データベース検索（SHIPS）portal — full DB list captured | 2022 (site) | Database portal | Historiographical Institute, Univ. of Tokyo | n/a | https://wwwap.hi.u-tokyo.ac.jp/ships/ | VERIFIED (fetched) |
| 東京大学史料編纂所 | 奈良時代古文書フルテキストデータベース | current | Database | HI UTokyo | n/a | https://wwwap.hi.u-tokyo.ac.jp/ships/w08/search | VERIFIED (fetched) |
| 蛭沼芽衣 (PI) | 訓点資料本文データベースの作成 (KAKENHI 20K13050, 若手研究) | 2020-2023 | Grant project record + 成果報告書 | KAKEN/NII, Kyushu University | n/a | https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-20K13050/ | VERIFIED (page + report PDF extracted) |
| 蛭沼芽衣 | 音訳真言の訓点について： 悉曇学と比較して | 2023 | Journal article | 『語文研究』135 (九州大学国語国文学会), pp.49-62 | no DOI | CRID 1390584088487365376 (via https://ndlsearch.ndl.go.jp/api/opensearch?title=音訳真言の訓点) | VERIFIED (NDL article index + CiNii) |
| 蛭沼芽衣 | 音訳真言の訓点からみる音韻 | 2022 | Conference paper | 九州大学国語国文学会 2022年度 | n/a | via KAKEN products list | VERIFIED |
| (author not exposed in dc) | 書き下し文での訓点情報検索を可能とする訓点資料データベースの試作 | 2022 | Conference proceedings paper | 人文科学とコンピュータシンポジウム2022論文集, 情報処理学会 | n/a | NDL SRU title query (R100000136 CiNii copy exists) | PARTIALLY VERIFIED (title/venue/keywords confirmed; author field absent in metadata) |
| Tomoaki Tsutsumi; Koji Tajima; Teiji Kosukegawa; Tomokazu Takada | Measuring linguistics of the wokototen chart made inductively by deciphering kunten materials | 2023 | Journal article (OA) | F1000Research 12:506 | 10.12688/f1000research.131244.1 | https://doi.org/10.12688/f1000research.131244.1 | VERIFIED (Crossref + abstract fetched) |
| Valerio Luigi Alberizzi (Waseda University) | The Role of kunten Materials in the Process of Sino-Japanese Hybridization | 2015 | Journal article (open access) | Quaderni di Linguistica e Studi Orientali 1, pp.233-258; Firenze University Press; ISSN 2421-7220 | 10.13128/QULSO-2421-7220-16524 | https://oaj.fupress.net/index.php/bsfm-qulso/article/view/1865 | VERIFIED (full PDF downloaded + extracted; saved to documents/) |
| Valerio Luigi Alberizzi | The influence of kanbun-kundoku vocabulary on the Japanese language (Handbook ch.27) | 2024 | Book chapter | Handbook of Historical Japanese Linguistics, De Gruyter Mouton, pp.539-564; ISBN set 9781614512851 | 10.1515/9781614512851-028 | via Crossref | VERIFIED |
| Masayuki Tsukimoto | Kunten texts of Buddhist provenance (butten 仏典): Their characteristics and actuality (ch.23) | 2024 | Book chapter | Handbook of Historical Japanese Linguistics, De Gruyter Mouton | 10.1515/9781614512851-024 | via Crossref | VERIFIED |
| Teiji Kosukegawa | Kunten texts of secular Chinese origin (kanseki 漢籍) (ch.24) | 2024 | Book chapter | Handbook of Historical Japanese Linguistics, De Gruyter Mouton | 10.1515/9781614512851-025 | via Crossref | VERIFIED |
| Paul S. Atkins | Kanbun kundoku as (mis)translation | 2026 | Book chapter | Multilingualism, Literature and Translation in East Asia, Routledge, pp.11-28; ISBN 9781003671947 | 10.4324/9781003671947-2 | via Crossref | VERIFIED |
| Brendan Arkell Morley | Kanbun, Kundoku, and the Language of Literary Sinitic: Terminological Issues in the Study of Sinography in Japan | 2022 | Journal article (OA journal) | Japanese Language and Literature 56(2), pp.329-354; Univ. of Pittsburgh | 10.5195/jll.2022.237 | via Crossref | VERIFIED |
| Kin Bunkyō; Ross King; Marjorie Burge; et al. | Reading Literary Sinitic—kundoku "Vernacular Reading" in Japan (ch.) | 2021 | Book chapter (translation volume) | Literary Sinitic and East Asia, Brill | 10.1163/9789004437302_003 | via Crossref | VERIFIED (co-author Ross King confirmed; full author list partially garbled in API output) |
| Mareshi Saitō (with Ross King, Christina Laffin, Sean Bussel as translators) | Kanbunmyaku (ch.4: Why Did the Reading and Writing of Kanbun Spread?) | 2020 | Book (English translation) | Brill | 10.1163/9789004436947_004 (chapter DOI) | via Crossref | VERIFIED |
| Dariusz Głuch | Kanbun-kundoku – Translation Procedure of Classical Chinese Text in Contemporary Japanese | 2019 | Book chapter | Japanese Civilization Tokens and Manifestations (Jagiellonian University Press) | 10.12797/978838138072.02 | via Crossref | VERIFIED |
| Judy Wakabayashi | Secular Kundoku | 2025 | Book chapter | Translational Engagements with Asian Languages in... (Brill) | 10.1163/9789004749023_004 | via Crossref | VERIFIED |
| Gordian Schreiber | Structure of "hentai kanbun" (ch.4); monograph DOI 10.1163/9789004504936 | 2022 | Book chapter / monograph | Brill | 10.1163/9789004504936_004 | via Crossref | VERIFIED |
| R.H. van Gulik | Siddham: An Essay on the History of Sanskrit Studies in China and Japan | 1956 (reprints later) | Monograph | International Academy of Indian Culture, Nagpur; reprints Aditya Prakashan / Sharada Rani | n/a | NDL Search records (title="Siddham", creator=van Gulik) | VERIFIED |
| Wilhelm Schiffer; R.H. van Gulik | [Review/article] Siddham. An Essay on the History of Sanskrit Studies in China and Japan | 1957 | Journal item | Monumenta Nipponica 13(1/2), p.180 | 10.2307/2383972 | via Crossref | VERIFIED |
| Seiichi Tomabechi | On the Bonji-shittan narabi-ni Shakugi | 1986 | Journal article | 印度學佛教學研究 (Journal of Indian and Buddhist Studies) 35 | 10.4259/ibk.35.177 | via Crossref | VERIFIED |
| Michimasa Kojima | Ama-tokumon and Japanese Siddham Studies in Recent Times | 1979 | Journal article | 印度學佛教學研究 28 | 10.4259/ibk.28.286 | via Crossref | VERIFIED |
| Hikomatsu Saito | A Study of Metten in the Siddham Script; The Gate of the Ryobu Funi Jodo in Siddham Script in Japan; Research on Siddham-Kasayam-Mandala | 1992; 1995; 1962 | Journal articles | 印度學佛教學研究 | 10.4259/ibk.41.319; 10.4259/ibk.43.680; 10.4259/ibk.10.524 | via Crossref | VERIFIED |
| 橋本貴子 | 悉曇文字の字形から見た『悉曇字記』の問題点——語頭の長ī, cha, ḍha を表す文字の字形を中心に | n.d. | Article/reprint | 東洋文庫 | n/a | NDL Search hit | VERIFIED (existence) |
| 宇都宮啓吾 | 京都国立博物館松本文三郎文庫所蔵の悉曇資料について; 園城寺(法明院)蔵行弁手沢聖教について： 訓点資料を中心として; 院政期訓点資料研究の一問題——真言宗における教学的交流を巡って | various | Articles | (NDL 雑誌記事索引) | n/a | NDL SRU hits | VERIFIED (existence; bridges kunten studies and Shingon/Siddham materials) |
| John Timothy Wixted | Japanese scholars of China: a bibliographical handbook = 日本の中国学専門家ハンドブック | n.d. | Reference book | Edwin Mellen Press | n/a | NDL SRU creator=Wixted | PERSON VERIFIED; specific kanbun work NOT FOUND |

## Target-by-target verdicts and notes

### (A) Nara-period kunten database at Tokyo Historiographical Institute — NOT FOUND (negative finding)

- The complete SHIPS portal list was captured (see hi_ships_database_portal_snapshot.md).
  It contains NO database named 訓点資料データベース or any kunten-gloss database.
- The only Nara-period full-text resource is 奈良時代古文書フルテキストデータベース
  (/ships/w08): full text of 大日本古文書（編年文書）all 25 vols, covering 702-780 CE,
  mostly 正倉院文書, with concordance display. It indexes transcribed document texts;
  it does not encode gloss marks (wokototen positions/shapes/readings).
- Verdict for the loop question "does a Nara-period kunten DB exist at HI?":
  STILL-UNVERIFIED AS AN EXISTENCE CLAIM / evidence points to NON-EXISTENCE on the
  official public portal as of 2026-08-25.

### (B) "Christoph Alberizzi, An Introduction to Kunten Glossed Texts and Their Study in Japan (2014?)" — ITEM NOT FOUND AS CITED; CLOSEST MATCH VERIFIED AND FULL TEXT FETCHED

- Crossref author search shows the kunten specialist is Valerio LUIGI Alberizzi
  (Waseda University); "Christoph" is unverified.
- Verified open-access article: "The Role of kunten Materials in the Process of
  Sino-Japanese Hybridization", QULSO 1 (2015), pp.233-258, Firenze UP,
  DOI 10.13128/QULSO-2421-7220-16524. PDF downloaded (26 pp.) and saved to documents/
  (alberizzi2015.pdf/.txt). It explicitly reviews existing scholarship on kunten
  materials' role in the formation of Sino-Japanese hybrid writing — i.e., it functions
  as an introduction to kunten glossed texts and their study.
- Exact-title searches ("An Introduction to Kunten...", "kunten glossed") in Crossref
  and NDL found no such publication. Likely a garbled citation of the QULSO 2015 piece
  (or of his 2024 handbook chapter).
- Verdict: EXACT TARGET STILL-UNVERIFIED; SUBSTITUTE SOURCE VERIFIED AND RETRIEVED.

### (C) Kundoku as translation vs non-translation debates — WELL COVERED, MULTIPLE VERIFIED SOURCES

- Directly on the translation question:
  - Atkins 2026 "Kanbun kundoku as (mis)translation" (Routledge chapter) — newest
    explicit treatment. VERIFIED.
  - Morley 2022 (Japanese Language and Literature 56:2) on terminological issues in
    kanbun/kundoku/Sinographic language studies. VERIFIED (OA venue).
  - Głuch 2019 treating kundoku as a "translation procedure". VERIFIED.
  - Wakabayashi 2025 "Secular Kundoku" (translation-studies framing). VERIFIED.
- Ross King link verified: co-author of the English chapter "Reading Literary Sinitic—
  kundoku 'Vernacular Reading' in Japan" (Brill 2021) and translator-team member of
  Saitō Mareshi's Kanbunmyaku (Brill 2020). VERIFIED.
- 山口謠司: person prolifically indexed in NDL (266 records), incl. academic piece
  冨山房の『漢文大系』(大東文化大学漢学会); no kundoku-theory monograph surfaced under
  his name in NDL. STILL-UNVERIFIED (specific book).
- Wiebke Denecke: many works verified via Crossref but none titled/matching
  "Classical Japanese" or a kundoku-translation study. STILL-UNVERIFIED.
- John Timothy Wixted: person verified (bibliographical handbook, Mellen); no kanbun-
  specific item located in NDL/Crossref this session. STILL-UNVERIFIED (specific work).

### (D) Wokototen on phonetically transcribed mantras (KAKENHI 20K13050) — FULLY VERIFIED WITH SUBSTANTIVE FINDINGS

- Project, PI, budget, period, method, outputs all confirmed (KAKEN page + report PDF,
  both saved). See kaken_20K13050_snapshot.md.
- Key scholarly finding for sacred-text glossing: on 9 Kyushu University giki manuscripts
  (19,125 mantra characters; 8,960 glossed), tone marks do NOT track Middle Chinese tones
  (~30% agreement) but are fixed per Sanskrit word; kana readings (e.g., sarva → サラバ)
  show Sanskrit-awareness. I.e., monks marked transliterated mantras as Sanskrit, not as
  Chinese — strong evidence that mantra kunten constitutes a distinct glossing regime.
- Companion output: 蛭沼芽衣「音訳真言の訓点について： 悉曇学と比較して」語文研究 135
  (2023), pp.49-62 (NDL/CiNii verified; peer-review status discrepant between KAKEN
  summary page [査読あり] and report form [なし]).
- Additional verified wokototen quantitative work: Tsutsumi/Tajima/Kosukegawa/Takada,
  F1000Research 12:506 (2023) — measurement study of the Tsukishima-based wokototen
  chart; abstract confirms particles te/ni/wo dominate observed charts.
- Continuation prototype: じんもんこん2022 paper on searching kunten info via kakiage
  text (IPSJ proceedings) — existence verified; author not exposed in dc metadata
  (presumed same project team; UNCONFIRMED).

### (E) Shittanzō/Siddham (bonji) studies in Japan — SOLID SOURCES VERIFIED

- Anchor source: R.H. van Gulik, Siddham: An Essay on the History of Sanskrit Studies in
  China and Japan (International Academy of Indian Culture, Nagpur, 1956; later reprints
  by Aditya Prakashan etc.), verified through multiple NDL holdings records plus the
  Monumenta Nipponica notice (13:1/2, 1957, DOI 10.2307/2383972).
- Japanese journal base: 印度學佛教學研究 (JIBS) articles with DOIs — Tomabechi 1986
  (Bonji-shittan narabi-ni Shakugi), Kojima 1979 (Ama-tokumon and recent Japanese
  Siddham studies), Saitō Hikomatsu series (1962 mandala; 1992 Metten; 1995 Ryōbu funi
  jōdo in siddhaṃ script). All Crossref-verified.
- Bridge between targets D and E: 宇都宮啓吾's articles linking 院政期 kunten materials
  with 真言宗 doctrinal networks, plus his cataloguing of Matsubara Bonji-related
  collections (京都国立博物館松本文三郎文庫悉曇資料). Existence verified via NDL index.
- Note: a "Maeda" Siddham scholar could not be confirmed; NDL only yielded 前田實心
  (editor of 悉曇連聲傳授切韻口決, Edo-period text edition) — likely unrelated to the
  modern scholarship intended. STILL-UNVERIFIED.

## Open questions

1. Does any kunten-specific database exist under HI's umbrella outside the SHIPS portal
   (e.g., project-level releases, MIDOH, or Hi-CAT-linked images of glossed Nara
   documents)? Portal-level answer today: no.
2. Is Hirunuma's Excel-macro kunten input system / prototype database publicly released
   anywhere (Kyushu University pages, じんもんこん paper appendix)?
3. Confirm authorship of the じんもんこん2022 prototype paper (dc metadata lacks creator).
4. Resolve the exact identity of the cited "Christoph Alberizzi, An Introduction to
   Kunten Glossed Texts..." (2014?) — probable mis-citation of QULSO 1 (2015).
5. Peer-review status of 語文研究 135 article (KAKEN page says 査読あり; report form says
   none) — check the journal issue directly.
6. Identify the intended Yamaguchi Yoji kundoku book, Denecke "Classical Japanese" item,
   and Wixted kanbun work — none located this session.
7. Public accessibility of the NINJAL 点図データベース referenced in the KAKEN report.
8. Whether the Handbook of Historical Japanese Linguistics chapters (Tsukimoto ch.23,
   Kosukegawa ch.24) contain survey bibliographies useful for Phase C synthesis.

## Files saved in documents/

- alberizzi2015.pdf, alberizzi2015.txt — Alberizzi 2015 full text (target B substitute)
- qulso_page.html — OJS landing page snapshot
- 20K13050seika.pdf, 20K13050seika.txt — KAKENHI final report (target D)
- hi_ships_database_portal_snapshot.md — target A evidence
- hi_nara_komonjo_fulltext_db_scope.md — target A evidence
- kaken_20K13050_snapshot.md — target D structured notes
- alberizzi_2015_qulso_snapshot.md — target B structured notes
