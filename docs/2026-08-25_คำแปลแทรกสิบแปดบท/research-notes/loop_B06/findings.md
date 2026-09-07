# Loop B06 Findings

Date: 2026-08-26
Phase-B note: Deep-dive foraging loop on Korean gugyeol, closing the six gaps flagged in Phase A loop_12 (Cambridge chapter identity; hyeonmun seokdokgugyeol term; Myeongsim bogam eonhae; jeomto manuscript details since 2000; ITKC/digital + OCR-AI projects; Vietnam reading-mark analogue). No files from output\2026-08-25_คำแปลแทรกโบราณสากล\ were read or used.

## Queries executed

Web search layer:
1. websearch x3 (Cambridge kugyol chapter author; seokdokgugyeol subtypes; myeongsimbogam eonhae) - ALL FAILED, provider 429 rate limit for the whole loop (same condition as B05).
2. Bing HTML scrape - served canned Microsoft results (bot wall, same as B05).

API/repository layer (productive):
3. Direct fetch https://www.cambridge.org/core/books/cambridge-handbook-of-korean-linguistics/korean-kugyol/F03AB88088D86CCDB4796764B874CB0C - full chapter landing incl. authors, abstract, keywords, complete reference list.
4. Direct fetch https://encykorea.aks.ac.kr/Article/E0071893 (seokdokgugyeol entry, rev. 2022) - full text re-harvested for subtype terminology and jeomto census.
5. Direct fetch https://encykorea.aks.ac.kr/Article/E0078764 (eumdokgugyeol entry, by Yi Byong-gi, rev. 2023) - full text harvested.
6. AKS OpenAPI probe: /Guide/OpenApiUse read; API at devin.aks.ac.kr:8080 requires X-API-Key (application-based) - unusable without key.
7. AKS keyword probe: https://encykorea.aks.ac.kr/Article/Hashtag?tag=현문석독구결 -> 검색결과 총 0건 (direct negative evidence for the term in the encyclopedia index).
8. Crossref REST bibliographic queries: 점토석독구결; 명심보감 언해; 현문석독구결; 각필 구결 인공지능 판독; gugyeol recognition neural network; 구결 딥러닝 판독; 고문헌 OCR 구결 인식; 석독구결 전산 입력 데이터베이스; Sino-Vietnamese vernacular reading; chữ nôm annotation; Vietnam kanbun comparative.
9. Crossref works/{doi} metadata pulls: 10.15811/jkl.2022..101.004; 10.15811/jkl.2025..115.015; 10.22557/hg.2003.03.259.37; 10.18075/jcs..45.201301.229; 10.46270/ssw.49.2; 10.17001/kugyol.2014..33.002; 10.17001/kugyol.2016..36.004; 10.17001/kugyol.2019..42.004.
10. DOI resolution to landing pages: KISS Detail/Ar?key=3937094 (Moon 2022), key=4036728 (Nam 2023), key=4195245 (Lee 2025) - full KR+EN abstracts harvested; KCI article.kci?arti_id=ART002080816 (Ahn 2016) - full KR+JP abstracts harvested.
11. DOI resolve 10.1163/9789004437302_003 -> brill.com BP000013.xml fetched (paywalled body; ToC of whole volume captured).
12. DOI resolve 10.4324/9781315759876-11 -> taylorfrancis.com chapter landing (Keith Taylor chapter identified; body JS-blocked).
13. OAPEN REST search: Kin Bunkyo Brill volume NOT mirrored on OAPEN.
14. db.itkc.or.kr live fetch - connection refused; Wayback homepage capture attempt - 503 transient; CDX domain crawl listed but no usable gugyeol-path captures found in first pass.
15. RISS integrated search GET - JS-rendered shell, no results extractable; KISS search POST (with antiforgery token) executes but result list is client-side rendered - abandoned.
16. Google Books API volumes?q=명심보감언해 - HTTP 429 on all retries (environment-level block).

## Table of sources

| Author | Work | Year | URL / locator | Status & use |
|---|---|---|---|---|
| Jae-Young Chung (정재영), John Whitman | Korean Kugyŏl, Chapter 6 in The Cambridge Handbook of Korean Linguistics, ed. Sungdai Cho & John Whitman, CUP, pp. 133-174, DOI 10.1017/9781108292351.007 (online 30 Sept 2022) | 2022 | https://www.cambridge.org/core/books/cambridge-handbook-of-korean-linguistics/korean-kugyol/F03AB88088D86CCDB4796764B874CB0C | FULL LANDING PAGE HARVESTED: abstract, keywords, complete bibliography (body paywalled). Closes loop_12 gap 1 |
| Moon Hyun-soo (문현수) | ≪화엄경≫ 점토석독구결 점도의 발달 과정에 대하여, 국어학 101: 151-179, DOI 10.15811/jkl.2022..101.004 | 2022 | https://kiss.kstudy.com/Detail/Ar?key=3937094 | FULL ABSTRACT (KR+EN) HARVESTED: three-stage development of jeomto diagrams; jinben/zhouben Huayanjing stratigraphy; Sato-copy position statement |
| Lee Kanghyuk (이강혁) | 호림박물관 소장 ≪유가사지론≫ 권3 점토석독구결 補論, 국어학 115: 531-575, DOI 10.15811/jkl.2025..115.015 | 2025 | https://kiss.kstudy.com/Detail/Ar?key=4195245 | FULL ABSTRACT (KR+EN) HARVESTED: Horim v.3 re-reading; different-glossator hypothesis vs Sungam v.5-8; new symbols; 166 "?" cases resolved to 139 read / 27 unreadable |
| Ahn Dae-hyun (안대현) | 가천박물관 소장 각필 점토구결 자료 초조본 『유가사지론』 권53에 대하여, 구결연구 36: 95-120, DOI 10.17001/kugyol.2016..36.004 | 2016 | https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART002080816 | FULL ABSTRACT (KR+JP) + reference list HARVESTED: Gachon Museum First-Tripitaka print with stylus jeomto; bibliographic dating criteria; cites Nam Pung-hyun 2000 announcement |
| Nam Kyeong-nan (남경란) | 고려시대 구결 자료의 각필 '체크' 부호 일고찰 (A Study of the Gakphil 'Check' Marks...), 인문과학연구 49: 33-58, DOI 10.46270/ssw.49.2 | 2023 | https://kiss.kstudy.com/Detail/Ar?key=4036728 | FULL ABSTRACT (EN) HARVESTED: functions of angle/seal-engraving check marks across 사분율장 권40, 금광명최승왕경 권2, 법화경 권7 |
| 장경준 | 석독구결 (AKS 한국민족문화대백과, rev. 2022-11-08) | 1995/2022 | https://encykorea.aks.ac.kr/Article/E0071893 | Full text re-fetched: two subtypes 자토석독구결/점토석독구결; aliases 각필구결·부호구결·부점구결; jeomto census 14 sources; jato five-text computerization |
| 이병기 | 음독구결 (AKS, rev. 2023-05-24) | 2016/2023 | https://encykorea.aks.ac.kr/Article/E0078764 | Full text harvested: eumdok = 순독구결·음독입겿·순독입겿; late-Goryeo origin; 능엄경 20+ reported copies, 4종 published in 구결자료집 1-3; printed-gugyeol book list (서전대문·지장보살본원경·동몽선습 1587·주자증손여씨향약언해·정속언해); 약체자 usage |
| Moon Hyun-soo (문현수) | Current Situations and Further Tasks on Digitalization of Point-attached Kugyol(點吐口訣), 구결연구 42, DOI 10.17001/kugyol.2019..42.004 | 2019 | Crossref record; DBpia NODE07626284 | METADATA VERIFIED ONLY (landing pages unreachable): title evidences a dedicated study of jeomto digitalization status/tasks |
| Kim Mun-ung (김문웅) | 구결 '호-'의 교체 현상에 대하여-[능엄경 언해](1462)를 중심으로, 한글 259: 37-, DOI 10.22557/hg.2003.03.259.37 | 2003 | Crossref record | Metadata verified: dated eonhae-with-gugyeol anchor text (능엄경언해 1462) |
| Bunkyō Kin (transl. Ross King, Marjorie Burge, Si Nae Park, Alexey Lushchenko, Mina Hattori) | Literary Sinitic and East Asia: A Cultural Sphere of Vernacular Reading (Sinographic Cosmopolis 3), Brill | 2021 | https://brill.com/display/book/9789004437302/BP000013.xml ; ch.1 DOI 10.1163/9789004437302_003 | ToC + front matter captured; ch.1 "Reading Literary Sinitic - kundoku 'Vernacular Reading' in Japan" pp. 8-84; ch.2 "Vernacular Reading in East Asia" BP000014.xml; body PAYWALLED; not on OAPEN |
| Keith Taylor | Sino-Vietnamese Translation from Classical to Vernacular, in Asian Translation Traditions (Routledge), DOI 10.4324/9781315759876-11 | 2014 (chapter DOI) | https://www.taylorfrancis.com/chapters/edit/10.4324/9781315759876-11/sino%E2%80%93vietnamese-translation-classical-vernacular-keith-taylor | Metadata verified (author/title/container); body JS-blocked |

## Key findings

Gap 1 - Cambridge Handbook chapter IDENTIFIED AND DOCUMENTED (closed). The book is The Cambridge Handbook of Korean Linguistics, edited by Sungdai Cho (Binghamton SUNY) and John Whitman (Cornell), CUP, print 2022. Chapter 6 "Korean Kugyŏl" is authored by Jae-Young Chung (정재영) and John Whitman, pp. 133-174, published online 30 September 2022, DOI 10.1017/9781108292351.007. Note: loop_12's trail string "Chung & Whitman volume?" conflated editors and authors - Whitman is both co-editor and co-author; Cho is the other editor. Official summary (fetched verbatim): loan-character transcription began with proper names; next came interpreting/reading sinographs in the vernacular ("vernacular reading"); finally methods for writing vernacular sentences; initial Korean stage transposed Chinese word order into Korean order, then inserted particles/endings ("t'o"); kugyŏl facilitates vernacular reading and appears to date from the Shilla period. Publisher keywords: Kugyŏl; symbol-Kugyŏl; seokdok-Kugyŏl; eumdok-Kugyŏl; Kugyŏl character; eumgaja; hungaja; loan character transcription systems; Knna. The chapter's full bibliography (captured) confirms the primary-study canon: Ahn Pyŏng-hŭi 1977 중세국어구결의 연구; Chung Jaeyoung 1996 해제 to 구결자료집 2 (AKS) and 1998 합부금강명경 권3 표기법과 한글 전사 (구결연구 3: 113-93); Kim Tu-ch'an 1987 직지심체요절/1989 사십이장경/1997 구역인왕경 해독시고 (구결연구 2: 161-241); Ko Yŏng-gŭn 1998 석독구결의 국어사적 가치 (구결연구 3: 1-28); Ko Jŏng-ŭi 2004 research-status review (구결연구 12: 5-46); Kobayashi 2002 kakuhitsu-kokunten relation (구결연구 8: 50-76) and 2004 角筆文献研究導論 上巻東アジア篇 (Kyūko shoin); Kobayashi & Nishimura 2001 Korea kakuhitsu survey (訓点語と訓点資料 107: 36-68); Nam P'unghyŏn & Yun Haengsun 1997 review (訓点語と訓点資料 100: 1-23/24-44); Nam P'unghyŏn 1998a 유가사지론 권20 표기법과 한글 전사 (구결연구 3: 253-336); Park Jinho 1996 규장각 능엄경 2종 (구결연구 1: 73-93); Lee Sŭng-Jae 1990 고려본 범망경 구결 etc.; Fujimoto 1977/1980 Chōsen-ban Senjimon lineage studies. Body remains paywalled (EUR/pound purchase only; no OA mirror found).

Gap 2 - hyeonmun seokdokgugyeol TERM NOT FOUND; CORRECT TAXONOMY DOCUMENTED (closed as negative result). Direct probes: (a) AKS keyword page for 현문석독구결 returns 총 0건; (b) full texts of AKS E0071893 (석독구결), E0071893-linked E0005629 (구결), and E0078764 (음독구결) contain no such term. Verified subtype system: by reading method - 석독구결 (=훈독구결, interpretative re-ordering, pre-late-13th-c.) vs 음독구결 (=순독구결, 순독입겿, 음독입겿; sequential phonetic reading, from late Goryeo, standard thereafter); within seokdok - 자토석독구결 (字吐釋讀口訣, simplified gugyeolja letters) vs 점토석독구결 (點吐釋讀口訣, dot/line marks, mostly incised; also called 각필구결 角筆口訣, 부호구결 符號口訣, 부점구결 符點口訣). Within jeomto Huayanjing material a further internal stratigraphy exists: 진본 화엄경 (pre-10th-c. printing) vs 주본 화엄경 (post-10th-c.), plus the Sato copy of 華嚴文義要決問答 as presumed earliest form (Moon 2022). Conclusion for the book: use 자토/점토 (+진본/주본 where relevant); do not use "hyeonmun seokdokgugyeol"; plausible source of the garbled term is confusion with 현결/현토 (the AKS 구결 entry's alias line reads 토 · 입겿 · 현결 · 현토) - flagged as hypothesis, not attested.

Gap 3 - Myeongsim bogam eonhae UNVERIFIED (remains open, honestly tagged). No AKS entry, Crossref article, or accessible library/catalog record confirming an 언해 edition of 明心寶鑑 or a 1465 date could be fetched this loop; Google Books API was environment-blocked (429), AKS OpenAPI needs a key, RISS/KISS search results are client-side rendered, and websearch was down. What IS verified about Myeongsim bogam scholarship via Crossref: 성해준, 「『성서』와 『명심보감』 권선사상의 공통점」 (일본문화연구 45: 229-247, 2013, DOI 10.18075/jcs..45.201301.229) and companion piece in vol. 47 (DOI 10.18075/jcs..47.201307.239) - content-comparison studies, not editions; 김유리 2013 (한국학 23, DOI 10.36093/ks.2013..23.020); Kwon 2017 moral-education piece (DOI 10.15186/ikc.2017.8.66.187). None mentions an eonhae. Closest verified mid-15th-c. eonhae-with-gugyeol anchors: 능엄경언해 (1462) whose gugyeol particle '호-' alternation is studied in 김문웅 2003 (한글 259, DOI 10.22557/hg.2003.03.259.37); 목우자수심결언해 1467 and 두시언해 1481 already verified in loop_12. Recommendation for the book: treat "Myeongsim bogam eonhae (1465?)" as unconfirmed (ยังไม่พบข้อมูลยืนยัน) and rely on the verified eonhae chronology instead.

Gap 4 - Jeomto manuscripts DETAIL CLOSED (census, holdings, announcement, impact). Census per AKS E0071893: jeomto seokdokgugyeol first discovered July 2000 in 유가사지론 권8; now 14 sources total = 화엄경 7종, 유가사지론 5종, 합부금광명경 1종, 법화경 1종; of these, 화엄경 7종 + 유가사지론 2종 have been published through joint research with facsimile (영인본), transcription (판독), and decipherment proposals (해독안). Named holding institutions verified this loop: 호림박물관 (유가사지론 권3 - Lee Kanghyuk 2025), 성암박물관 (유가사지론 권5·권8 - named in Lee 2025 abstract as comparison set), 가천박물관 (초조본 유가사지론 권53 - Ahn 2016; First Tripitaka Koreana print, previously unstudied, no ink annotations/corrections, 장차만 in the 판수제, no taboo-avoidance abbreviated strokes 避諱欠画字, some gugyeolja incised by stylus, few auxiliary symbols). Early announcement/studies chain (from Ahn 2016 reference list): 남풍현 「高麗時代의 點吐 口訣에 대하여」 書誌學報 24: 5- (2000); 김영욱 「『유가사지론』 점토(點吐)의 해독 방법 연구」 구결연구 7: 57- (2001); monographs 장경준 『유가사지론 점토석독구결의 해독 방법 연구』 (태학사 2007) and 이승재 외 『각필구결의 해독과 번역 1-5』 (태학사 2005-2009) already verified in loop_12. What changed scholarly views, now citable: (a) Moon 2022 establishes a developmental sequence of jeomto point-diagrams - Sato-copy 화엄문의요결문답 points show only the simplest case markers/endings; 진본 화엄경 increases positions/shapes to encode more complex morphology; 주본 화엄경 shows systematic symmetry between point position/shape and grammatical morpheme, interpreted as a memorization aid; (b) Moon 2022 states explicitly that Korean-vs-Japanese attribution of the Sato copy is still unsettled (합의 미이루어), while affirming its close connection to Goryeo 화엄경 jeomto material; (c) Lee 2025 proposes Horim 권3 and Sungam 권5·8 glossators were different individuals (based on point-over-strokes placement habits), documents thick/deep vs thin/shallow dual point types with supplementary function, coexistence of 묵점 (ink dots) and 각필점, an 不-shape fine-brush symbol marking erroneously written points, new boundary lines (경계선), pull-out lines (빼침선), hook points (고릿점), and resolves 139 of 166 previously unreadable "?" cases using fresh 2022/2023 photography; (d) Nam Kyeong-nan 2023 shows the same ∠/∨ check marks carry different functions in different works (interpretive glossing in 사분율장 권40; technical-Buddhist-term interpretation in 금광명최승왕경 권2; simple sentence division in 법화경 권7) - i.e., mark inventories are not one-to-one codes across texts.

Gap 5 - Digital corpora PARTIALLY CLOSED; OCR/AI still thin. Verified digital-infrastructure facts: all five surviving jato seokdokgugyeol texts are fully machine-input with collated data and dictionaries attached (AKS E0071893); the DKC/ITKC portal db.itkc.or.kr context (started 1997, service 2001, 3,275 works, MT services; 민족문화 59, 2021) was already documented in loop_12 and remains the citation anchor because the live site refuses connections from this environment (recorded below). NEW: a dedicated research strand on jeomto digitization exists - 문현수 「Current Situations and Further Tasks on Digitalization of Point-attached Kugyol(點吐口訣)」 구결연구 42 (2019), DOI 10.17001/kugyol.2019..42.004, DBpia NODE07626284 (metadata verified; abstract unfetchable this loop). Dedicated OCR/deep-learning recognition studies specifically targeting gugyeol did NOT surface in Crossref queries (구결 딥러닝 판독; 고문헌 OCR 구결 인식; gugyeol recognition neural network returned only unrelated engineering papers); with websearch down, absence here is weak evidence - treat AI-on-gugyeol as remaining gap (ยังไม่พบข้อมูลยืนยัน for any specific project).

Gap 6 - Vietnam analogue: one more targeted attempt made; concrete titles secured, direct gugyeol-chư nho comparison still not found. Secured: (a) Kin Bunkyō (transl. King/Burge/Park/Lushchenko/Hattori), Literary Sinitic and East Asia: A Cultural Sphere of Vernacular Reading, Brill 2021 (series Language, Writing and Literary Culture in the Sinographic Cosmopolis 3) - ToC captured: ch.1 kundoku in Japan pp. 8-84 (DOI 10.1163/9789004437302_003), ch.2 "Vernacular Reading in East Asia" (BP000014.xml), ch.4 concluding on the East Asian Literary Sinitic sphere; bodies paywalled, not on OAPEN; (b) Keith Taylor, "Sino-Vietnamese Translation from Classical to Vernacular," in Asian Translation Traditions (Routledge, DOI 10.4324/9781315759876-11) - metadata verified, body JS-blocked. Neither fetched source documents Vietnamese interlinear reading marks comparable to gugyeol/kunten; no dedicated comparative study surfaced in Crossref (queries on Sino-Vietnamese vernacular reading, chữ nôm annotation). For the book: keep Vietnam as a contrast case anchored to these two titles, with the explicit caveat that the Vietnamese scholarly literature centers on chữ nôm script creation rather than interlinear gloss systems (consistent with loop_12 finding).

## Gaps closed vs remaining

Closed this loop:
1. Cambridge Handbook chapter identity (Cho & Whitman eds.; Chung & Whitman ch. 6, pp. 133-174, DOI, abstract, keywords, full bibliography) - loop_12 gap 1 closed at everything except paywalled body text.
2. Seokdokgugyeol subtype terminology - verified taxonomy documented; hyeonmun term shown absent from AKS index (0 hits) and from all core entries; correct terms recorded - loop_12 gap 2 closed (as negative result with positive replacement).
3. Jeomto corpus detail - census (14 sources by work type), holdings (Horim, Sungam, Gacheon museums named), discovery timeline (July 2000 유가사지론 권8), announcement/study chain (Nam 2000; Kim 2001; joint-research facsimile/transcription/decipherment publications), and concrete statements of what changed scholarly views (Moon 2022 development model; Lee 2025 scribal-hands and symbol findings; Nam 2023 mark-function variability) - loop_12 gap 4 closed.
4. Eumdokgugyeol side fully documented from AKS E0078764 (aliases, origin window late Goryeo, 능엄경 20+ copies, printed-gugyeol list) - strengthens the typology chapter.

Partially closed:
5. Digital corpora - jeomto digitalization study located (Moon 2019) + jato-five-text computerization confirmed; ITKC live-site detail still relies on loop_12's 민족문화 59 citation.
6. Vietnam analogue - two citable comparative titles secured; content behind paywalls.

Remaining:
- 명심보감언해 existence/date/gugyeol type: unconfirmed (ยังไม่พบข้อมูลยืนยัน) after exhaustive available channels.
- Any OCR/AI project specifically recognizing gugyeol marks: none found (ยังไม่พบข้อมูลยืนยัน); needs Korean-language web search when provider recovers.
- Cambridge ch. 6 body text beyond publisher summary/bibliography (purchase-only).
- Kin Bunkyō Brill volume chapters (incl. ch.2 Vernacular Reading in East Asia) body text.
- Full abstract of Moon 2019 digitalization paper (KCI/DBpia connections dropped).

## Blocked sources (honest record)

- websearch provider (exa): HTTP 429 for entire loop; Bing scrape serves canned Microsoft results; DDG/Mojeek not retried after B05 bot-wall record.
- db.itkc.or.kr: TCP connection refused live; Wayback homepage snapshot returned 503 on this attempt; no useful archived gugyeol-path captures found in CDX first pass.
- www.kci.go.kr: worked once (ART002080816) then repeatedly dropped the connection ("request aborted") for subsequent landings incl. ART for kugyol.2019..42.004 - intermittent block.
- www.dbpia.co.kr: connection closed on article page NODE07626284 (curl chain reached it; final hop 410/closed).
- kiss.kstudy.com search endpoint: functional POST but results render client-side - not harvestable; individual Detail/Ar pages work fine.
- AKS OpenAPI (devin.aks.ac.kr:8080): requires X-API-Key issued via application - unusable anonymously.
- brill.com: chapter bodies paywalled; OAPEN REST confirms no OA mirror.
- taylorfrancis.com: chapter body JS-blocked.
- Google Books API: persistent 429 (environment-level).
- RISS: JS-rendered shell, no static results.
- Wikipedia/Wikidata/namu.wiki surfaced nowhere in cited chain; not used.

## Files created

- research-notes/loop_B06/findings.md (this file)
- research-notes/loop_B06/documents/2022-Chung-Whitman-Cambridge-Kugyol-chapter.md
- research-notes/loop_B06/documents/2022-Moon-Huayanjing-jeomto-diagram-development.md
- research-notes/loop_B06/documents/2025-Lee-Horim-Yuqieshidilun-v3-jeomto.md
- research-notes/loop_B06/documents/2016-Ahn-Gacheon-Yuqieshidilun-v53-jeomto.md
- research-notes/loop_B06/documents/2023-Nam-Gakphil-check-marks.md
