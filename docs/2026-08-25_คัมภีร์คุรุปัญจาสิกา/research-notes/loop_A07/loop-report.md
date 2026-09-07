# Loop A07 Report — Korean-Language Scholarship and the Koryŏ Canon Witness of 事師法五十頌 (Gurupañcāśikā)

Date: 2026-08-25
Scope: RESEARCH ONLY. Korean-language sources + Koryŏ canon (高麗大藏經) witness verification.
Working directory for saved documents: `output/2026-08-25_คัมภีร์คุรุปัญจาสิกา/research-notes/loop_A07/documents/`

---

## 1. Koryŏ Canon Witness — VERIFIED

### 1.1 Primary confirmation: Dongguk University Buddhist Studies Archive (동국대학교 불교학술원 아카이브, KABC)

Source: https://kabc.dongguk.edu/content/pop_seoji?dataId=ABC_IT_K1493 (saved: `kabc_dongguk_K1493_seoji.html`)

Exact fields extracted from the bibliographic record (서지):

- Title: 사사법오십송(事師法五十頌); Romanization field: "SHISHIFAWUSHISONG"
- Subject categorization (분류정보): 「신행(信行)-기본신행(基本信行)-사사(事師) 예법(禮法)」
- Canon placement (By Classification System): 「正藏-再雕藏經部-再雕入藏部-惟淨∙法護等譯本」 — i.e., the text sits in the 再雕 (re-carved) canon within the block of Northern Song translations headed by 惟淨/法護.
- Author (저자정보): 「마명(馬鳴, Aśvaghoṣa)」
- Goryeo_location: 「41-0612」 = 제41함, 경판 제612호. The viewer's line IDs confirm one single woodblock, both sides: `041_0612_b_01L` … `041_0612_c_09L` (saved: `kabc_dongguk_K1493_view.html`, full bilingual extraction in `K1493_fulltext_hanmun_translation.txt`, 277 lines).
- Goryeo_annotation: 「KBC는 번역시대를 北宋으로, 공동역자를 法護로 표기.」 — the Koryŏ canon's own annotation records translation period as Northern Song and co-translator as 法護.
- Shinshū_NR (신수대장경 대조): 「T.1687」; Shinshū_location: 「32-0775」 (= Taishō vol. 32, p. 775) — explicit cross-reference from the Korean DB to T32n1687.
- Sanskrit title field (산스_NAME): 「[범] Gurupañcāśikā」 — the Korean database itself identifies the work by this Sanskrit title.
- Qisha_VOL/PAGE: 36 / 382; Zhonghua_NR/VOL/PAGE: 1642 / 069 / 0765 — i.e., the Khitan (契丹藏, Qisha) and Zhonghua canons are recorded as parallel witnesses; Song (송장) and Bulkwang (불광) fields are EMPTY, consistent with absence from Song-tradition editions.
- 송장_VOL / 불광_VOL: blank (consistent with Taishō note 「此頌宋本元本宮本俱闕」 given in Loop known facts).

### 1.2 Independent catalog confirmation: 高麗藏目錄 (sutrapearls.org mirror of CBETA K-numbering)

Source: http://www.sutrapearls.org/toc-C/toc-K.htm (saved Big5→UTF8: `sutrapearls_goryeo_toc_K_utf8.txt`; excerpt: `sutrapearls_case41_excerpt_big5.txt`)

Exact entry:

> 「K41n1493：事師法五十頌(一卷)馬鳴菩薩集：宋‧日稱等譯 (<http://cbetaonline.dila.edu.tw/zh/T1687>)」

Immediate context (K41 = 再雕藏經部 vol./case 41), showing the dense run of Northern Song 日稱-circle translations of 馬鳴 texts:

> K41n1490：六趣輪迴經(一卷)馬鳴菩薩集：宋‧日稱等譯 (T17n0726)
> K41n1491：十不善業道經(一卷)馬鳴菩薩集：宋‧日稱等譯 (T17n0727)
> K41n1492：尼乾子問無我義經(一卷)馬鳴菩薩集：宋‧日稱等譯 (T32n1643)
> K41n1493：事師法五十頌(一卷)馬鳴菩薩集：宋‧日稱等譯 (T32n1687)
> K41n1494：諸法集要經(十卷)觀無畏尊者集：宋‧日稱等譯 (T17n0728)
> K41n1495：福蓋正行所集經(十二卷)龍樹菩薩集：宋‧日稱等譯 (T32n1671)
> K41n1496：父子合集經(二十卷)：宋‧日稱等譯 (T11n0320)

Interpretation: the witness is confirmed as 재조고려대장경 n1493 (K1493), 1권, case 41, block 0612, embedded in a contiguous cluster of Northern Song translations (惟淨·法護·日稱 circle) that likewise have no Song/Yuan/Palace edition witnesses — exactly the situation described by the Taishō collation note.

### 1.3 Incipit as carved in the Koryŏ canon (via KABC viewer, exact quote)

> 「事師法五十頌 馬嗚菩薩集 西天譯經三藏朝散大夫試鴻臚少卿宣梵大師賜紫沙門臣日稱等奉 詔譯 依諸經律袐密教 略出承事師儀軌 聞已愛樂發淨心 當獲如來金剛智 若於灌頂師 三時伸禮奉 則爲已供養 十方諸如來 …」

(Note: the KABC transcription preserves the orthographic variant 「馬嗚菩薩集」 on the block.)

### 1.4 kbiz.or.kr (고려대장경 지식정보서비스) — ATTEMPTED, PARTIALLY INACCESSIBLE

- http://www.kbiz.or.kr/ resolves (HTTP 200) to an SPA (`/index.do`) with menu items including 고려대장경DB (mnSeq=1641); direct GET of `/ko/contents/contents.do?mnSeq=1641` failed with connection reset on repeated attempts.
- Subsite http://info.kbiz.or.kr/ (고려대장경 정보서비스, saved: `info_kbiz_or_kr.html`) exposes a search form (`action="/Search/SearchRedirect"`, hidden input `q_text`). A query for 사사법오십송 returned a shell page with no server-side results (results load via JS/login-gated area; login form `/Account/Logon` present).
- Conclusion: kbiz deep search requires an interactive session; not completed. Negative result documented honestly. No kbiz-sourced data is claimed below.

---

## 2. Korean Translations of the Text

### 2.1 Official modern Korean translation — 동국대 한글대장경 / 통합대장경, 김진철 역 (VERIFIED)

Source: https://kabc.dongguk.edu/content/view?itemId=ABC_IT&depth=3&dataId=ABC_IT_K1493_T_001 (saved: `kabc_dongguk_K1493_view.html`)

The 통합뷰어 presents 경판 원문 + 번역문 side by side; translator credit line, exact quote:

> 「사사법오십송(事師法五十頌) 마명(馬鳴)보살 모음 일칭(日稱) 등 한역 김진철 번역」

Sample of the Korean rendering (exact quotes):

- 「모든 경과 율의 비밀한 가르침에 의하여 간략히 스승의 의궤를 받들어 내오니 듣고 나면 좋아하며 맑은 마음 내어서 마땅히 여래의 금강 지혜 얻으리.」
- 「만일 관정하시는 스승께 세 때에 받들어 예를 올리면 곧 이미 시방의 모든 여래께 공양하는 것이 되리라.」
- 「그 스승과 제자는 서로 그 근기를 살필 것이며 만약 먼저 관찰하지 아니하면 같이 월법죄(越法罪)를 얻게 되리라.」
- 「아사리[阿闍黎] 조금이라도 번거롭게 괴롭혀서는 안되느니라.」

Project context (Bulkwang Media article by 이재수, 동국대 불교학술원, 2022-09-28; saved: `bulkwang_hangeul_daejanggyeong_article.html`):
- 한글대장경 project: 동국역경원 founded 1964-07-21; first volume 1965 (장아함경); completed 2001 at 총 318책, covering 1,618 works (고려대장경의 1,514부 + 한국 찬술 불전).
- 「동국대 불교학술원은 2012년부터 2021년까지 수행한 불교기록문화유산 아카이브(kabc.dongguk.edu) 구축 사업으로 '통합대장경'을 구축했다. 고려대장경연구소의 '고려대장경 지식베이스'와 동국대의 '한글대장경 개역 전산화 사업'을 발전적으로 계승하고, 그 성과를 확산했다.」
- 「통합대장경은 이미지-텍스트-번역문을 의미·형태 단위로 제공하는 구조다.」

So the 김진철 translation available online is the product of the 동국역경원 한글대장경 개역 program — effectively THE standard 국역 (national-language rendering) of this text in Korea.

### 2.2 Independent lay/blog translation — 建成의불교공부 (w3devlabs.net)

Source: http://w3devlabs.net/hb/archives/5205 (published 2015-02-06; saved: `blog_w3devlabs_5205_translation.html`; category page also saved)

Full-text Korean prose translation of all fifty verses, same attribution formula 「마명(馬鳴)보살 모음 일칭(日稱) 등 한역」. Non-academic but complete; useful only as evidence of devotional reception, not citable scholarship.

---

## 3. Korean Academic Database Survey (RISS / DBpia / KISS / KCI)

Method note per mission rules: Korean DB search endpoints are session/AJAX-bound. Attempts made directly with PowerShell (TLS12, browser UA):

| Attempt | Endpoint | Result |
|---|---|---|
| RISS GET | `https://www.riss.kr/search/Search.do?queryText=사사법오십송` | HTTP 200 shell page, zero inline results (AJAX-rendered); saved `riss_search_sasabeop.html` |
| RISS POST | `Search.do` with full form body | HTTP 200 shell again, no result list markers (only nav elements); saved `riss_search_sasabeop_post.html` |
| m.riss.kr | mobile Search.do | HTTP 500 |
| DBpia | `https://www.dbpia.co.kr/search/topSearch?keyword=사사법오십송` | HTTP 200, client-rendered React shell; no server-side hit list extractable; saved `www_dbpia_co_kr_search_topSear.html.html` |
| KISS | `kiss.kstudy.com/Search?keyword=...` | HTTP 404 (wrong route; correct route needs JS session) |
| KCI keyword endpoint | `kciportal/main/searchKeyword.kci` | HTTP 404 |

Google-style fallback queries (via websearch): `"사사법오십송"` alone; `"상사오십송" OR "구루판차시카"`; site-restricted `site:riss.kr OR site:dbpia.co.kr OR site:kiss.kstudy.com 사사법오십송`; `site:kci.go.kr ... "사사법오십송" OR "상사오십송"`; plus 마명 밀교 오십송 variants.

FINDING (negative, reported honestly): ยังไม่พบ — No Korean-language journal article, thesis, or monograph dedicated to 事師法五十頌 surfaced in any accessible index or web-search surface. The term 사사법오십송 appears online essentially only in (a) the Dongguk KABC record/translation, (b) the w3devlabs blog translation, and (c) generic canon catalogs. The variant reading 상사오십송 produced zero hits in Korean academic surfaces. Background Korean literature exists on adjacent topics only (밀교 정의/금강승 용법 논쟁 — e.g., 장익, 松長有慶, 平川彰 reception essays such as 법경's 금강승 column; 한국 밀교사 명랑·혜초 연구; 티베트 구루 요가 devotional translations like 사좌 구루 요가 수지 의궤 at dharmaebooks.org) — none treats Gurupañcāśikā itself.

Caveat: because RISS/KISS/DBpia full result sets could not be machine-read, absolute zero cannot be certified; the honest statement is that no positive hit was found across all attempted channels.

---

## 4. Dongguk University Buddhist Studies Resources (동국대 불교학술원)

- kabc.dongguk.edu hosts the text under 통합대장경 (itemId ABC_IT), ID ABC_IT_K1493_T_001; navigation tree shows 사사법오십송 - K1493 alongside sibling collections 한국불교전서 · 신집성문헌 · 고려교장 · 조선사찰본서목 (confirmed in view-page HTML).
- 한국불교전서 itself (the collected Korean-authored Buddhist works series) does NOT contain 事師法五十頌 — it is a Chinese-translation-canon text carried in the 고려대장경 layer, not a Korean composition. No 한국불교전서 volume listing it was found (searches returned only KABC navigation artifacts).
- 고려대장경연구소 (tki.re.kr, Yongin): identified as the body that digitized 해인사 판 81,258매 (1996-) and built the 지식베이스 later absorbed into 통합대장경 per 이재수 article; direct plate-level lookup of block 041_0612 on tki.re.kr was not performed (time-boxed); the KABC Goryeo_location field already supplies plate-level identification.

---

## 5. Synthesis for the Gurupañcāśikā stemma question

1. The re-carved Koryŏ canon (13th c.) carries T1687 as K41n1493 (1권), plate 41-0612 — verified at two independent Korean layers (Dongguk KABC metadata + CBETA-derived K catalog).
2. KABC cross-wiring shows the parallel witnesses are 契丹藏 (Qisha vol. 36 p. 382 → likely source channel for texts missing from Song editions) and 中華藏 n1642; Song/Bulkwang fields are empty — independently corroborating the Taishō note 「此頌宋本元本宮本俱闕」 and making 高麗藏 the effective base tradition, as assumed.
3. The text belongs to a coherent cluster of Northern Song translations (惟淨·法護·日稱 circle, incl. three other 馬鳴 collections) transmitted via Liao/Koryŏ channels rather than the Southern Song/Si lineage.
4. Korean-language scholarship on the text per se: none found (ยังไม่พบ). The sole substantive Korean-language engagement is the official 동국역경원-lineage translation (김진철 역) inside 통합대장경.

## Files saved (loop_A07/documents/)

| File | Content |
|---|---|
| kabc_dongguk_K1493_seoji.html | Dongguk KABC full bibliographic record (분류/제목/저자/대조 위치) |
| kabc_dongguk_K1493_view.html | Dongguk KABC integrated viewer (경판 한문 + 김진철 번역) |
| K1493_fulltext_hanmun_translation.txt | Clean extraction: full bilingual text, line IDs 041_0612_b/c |
| kabc_dongguk_K1493_list.html | (failed fetch, empty/partial attempt artifact) |
| sutrapearls_goryeo_toc_K.html / _utf8.txt | 高麗藏目錄 TOC (Big5 original + UTF8 conversion) |
| sutrapearls_case41_excerpt_big5.txt | Exact K41n1489–K42 entries excerpt |
| cbeta_T1687_page.html | CBETA Online T1687 page (JS shell; note not statically retrievable) |
| riss_search_sasabeop.html / _post.html | RISS attempts (GET + POST), no results extractable |
| www_dbpia_co_kr_search_topSear.html.html | DBpia attempt (client-rendered shell) |
| info_kbiz_or_kr.html | kbiz 정보서비스 homepage (search form structure) |
| kbiz_search_redirect.html | kbiz search redirect response (no server-side results) |
| blog_w3devlabs_5205_translation.html | Full independent Korean translation post |
| bulkwang_hangeul_daejanggyeong_article.html | 이재수, 「미래의 한글대장경」 (project context) |

## Live URLs cited

- https://kabc.dongguk.edu/content/pop_seoji?dataId=ABC_IT_K1493
- https://kabc.dongguk.edu/content/view?itemId=ABC_IT&depth=3&dataId=ABC_IT_K1493_T_001
- https://kabc.dongguk.edu/viewer/view?dataId=ABC_IT_K1493_T_001 (원문이미지)
- http://www.sutrapearls.org/toc-C/toc-K.htm
- https://cbetaonline.dila.edu.tw/zh/T1687
- http://w3devlabs.net/hb/archives/5205
- https://www.bulkwang.co.kr/news/articleView.html?idxno=37882
- http://tki.re.kr/ (고려대장경연구소)
- http://info.kbiz.or.kr/, http://www.kbiz.or.kr/ (login-gated deep search)

## Gaps / follow-ups for next loops

1. kbiz.or.kr interactive session needed to pull the official 경판 image/metadata for plate 041_0612 (would add 해인사 판본-level detail).
2. RISS/KISS/DBpia authenticated searches (institutional access) to certify zero-hit status beyond doubt.
3. tki.re.kr plate DB lookup for block 0612 (교정별록 references, if indexed).
4. Korean-language Tibetan-Buddhist publishing houses (까르마빠 재단/dharmaebooks, 진언종 계열) may hold unindexed devotional translations modeled on the Tibetan Gurupañcāśikā — worth manual bookstore checks.
