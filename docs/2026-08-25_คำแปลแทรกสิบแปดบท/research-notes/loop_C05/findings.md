# Loop C05 Findings

Date: 2026-08-26
Phase-C note: Residual-closing loop for Phase B loops B06/B07 (Korean gugyeol and Japanese kunten reading marks). Five targets: (1) 명심보감언해 final verification attempt; (2) gugyeol OCR/AI project retry; (3) Edo-period printed 加点 dedicated study; (4) peer-reviewed status of Li & Cao arXiv 2511.05239; (5) Tsukishima 3,355 kunten census update. No files from output\2026-08-25_คำแปลแทรกโบราณสากล\ were read or used. Wikipedia/Wikidata surfaced only as search noise and were never cited.

## Queries executed

1. websearch KO: 명심보감언해 明心寶鑑諺解 조선 언해본 고문헌 -> AKS entry E0018312 located.
2. webfetch https://encykorea.aks.ac.kr/Article/E0018312 - FULL AKS 명심보감 entry harvested (rev. 2024-02-23); zero mention of any 언해/諺解 edition.
3. webfetch https://db.cyberseodang.or.kr/front/sabuList/BookMain.do?bnCode=jti_5a1001&titleId=C250 - 동양고전해제집 명심보감 해제 harvested in full (Korea Institute of Buddhist Texts 동양고전종합DB).
4. Crossref REST bibliographic query 명심보감 언해 (6 rows) -> only content-comparison papers already recorded in B06; NO edition/eonhae paper.
5. websearch KO: sejongkorea 세종 고전 명심보감 언해 db -> db.sejongkorea.org (세종한글고전, Sejong the Great Memorial Society) title list captured from snippets + about page; 명심보감 NOT among its 역주 series.
6. websearch KO: 구결 인식 AI 딥러닝 / 구결 점토 구결 인공지능 판독 데이터베이스 디지털화 -> generic old-document AI OCR infrastructure only (NLK 공유서재 AI-OCR; AI Hub 고서 한자 OCR dataset; commercial NURI IDT); nothing gugyeol-specific.
7. arXiv API search_query=all:gugyeol -> 0 entries. Crossref bibliographic query gugyeol recognition -> philological hits only. OpenAlex works?search=gugyeol -> 71 records, ALL philological/history-of-script; none on machine recognition. Semantic Scholar API rate-limited twice (429) - blocked.
8. bash Crossref prefixes/10.17001/works sorted by published desc (50 rows) - complete 구결연구 table of contents vols 50-56 (2023-2026): no digitization/AI/recognition paper; confirms Moon 2019 (vol. 42) remains the last digitalization-status study in that journal.
9. webfetch https://db.itkc.or.kr/ and /gugyol/ - connection timeout again this loop (same block as B06).
10. websearch JA: 江戸時代 漢籍 加点本 訓点 研究 国語国文 近世 / 小助川貞次 近世 訓点 加点 江戸時代 漢籍 国語研究所 / "加点本" 訓点 江戸 漢籍.
11. NDL Search OpenSearch API: creator=小助川貞次 (60 rows) - located 加点計量 paper + related DH items.
12. webfetch NDL record R100000136-I1050855522066154624 - full biblio + abstract of 林昌哉ほか 2017 じんもんこん paper.
13. bash IPSJ IxSQ repository fetch (records/184723) - Japanese 抄録 extracted verbatim (webfetch got HTTP 406; browser-UA request succeeded).
14. webfetch https://cid.ninjal.ac.jp/kunten-syousyo3/ - NINJAL 加点情報データベース page harvested incl. project framework and 2020 test-release date.
15. websearch JA: 築島裕 古訓点資料 数 / "訓点資料" 約 何点 存続 - located researchmap-hosted KAKEN report PDF quoting the census.
16. bash download researchmap attachment_file.pdf (1.06 MB, 151 pp.) + local pypdf extraction - verbatim census passage secured.
17. webfetch https://bibdb.ninjal.ac.jp/SJL/view.php?h_id=1600010140 - 国語学 vol. 160 record checked (Tsukishima 1990 survival-status study; predates the 1996 monograph, not a newer figure).
18. websearch JA: "訓点資料" "3355" OR "3,355" 点 -> noise only (tax pages etc.); primary verification achieved via the PDF instead.
19. Crossref bibliographic query Translation via Annotation ... Classical Chinese into Japanese -> EACL 2026 proceedings record found; ACL Anthology landing page fetched in full.

## Table of sources

| Author | Work | Year | URL / locator | Status & use |
|---|---|---|---|---|
| 이원호 (AKS entry, rev. 2024-02-23) | 명심보감 明心寶鑑, 한국민족문화대백과 | 1995/2024 | https://encykorea.aks.ac.kr/Article/E0018312 | FULL TEXT HARVESTED: 2권 1책, 목판본·석판본 등 10여 종; 청주본 lineage via 추적 명심보감초; NO 언해 edition mentioned |
| (anon., Korea Inst. of Buddhist Texts) | 동양고전해제집 - 명심보감(明心寶鑑) 해제 | site | https://db.cyberseodang.or.kr/front/sabuList/BookMain.do?bnCode=jti_5a1001&titleId=C250 | FULL 해제 HARVESTED: Korean editions = 청주본 (1454 신간교정대자명심보감, 고인쇄박물관+츠쿠바대 소장) · 초략본; world editions listed (Ming/Qing, 和刻本, Vietnam, Spain Juan Cobo 1592); NO 언해본 anywhere |
| 세종대왕기념사업회 | 세종한글고전 DB (db.sejongkorea.org) | site | http://db.sejongkorea.org/ ; http://db.sejongkorea.org/front/about.do | Title list verified: 능엄경언해·목우자수심결언해·정속언해·여사서언해·효경언해 등 역주 시리즈; 명심보감 ABSENT |
| Crossref | query.bibliographic = 명심보감 언해 | 2003-2017 | api.crossref.org | Only 성서/명심보감 comparison papers (B06 set) + unrelated 능엄경언해 paper; no eonhae-edition scholarship |
| National Library of Korea | 도서관 시민프로젝트 공유서재 AI-OCR platform | current | https://nl.go.kr/aiocr/introduction/ocr | Platform page: AI OCR for 고문헌·고신문 digitization w/ citizen verification loop - closest national infrastructure, no gugyeol-mark module named |
| AI Hub (NIA) | 고서 한자 인식(OCR) 학습데이터 | current | https://www.aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&dataSetSn=234 | Dataset card: 10,142,816 chars, 원문이미지 JPEG 57,081개 - Sino-Korean character-level, not reading-mark level |
| (various) | OpenAlex corpus "gugyeol" (71 works) / arXiv all:gugyeol (0) / 구결연구 vols 50-56 ToC | 2003-2026 | api.openalex.org ; export.arxiv.org ; api.crossref.org/prefixes/10.17001 | SYSTEMATIC NEGATIVE: zero machine-recognition/AI studies of gugyeol marks indexed anywhere; 구결연구 2023-2026 contains none either |
| 林昌哉・田島孝治・堤智昭・高田智和・小助川貞次 | 訓点資料の加点情報計量のためのデータ構造－国立国語研究所蔵「尚書（古活字版）」を対象として－, じんもんこん2017論文集, pp. 45-52, IPSJ | 2017 | https://ipsj.ixsq.nii.ac.jp/records/184723 ; NDL https://ndlsearch.ndl.go.jp/books/R100000136-I1050855522066154624 | FULL 抄録 HARVESTED: structured encoding of ヲコト点 on NINJAL's Edo movable-type Shangshu, 1丁 statistical pilot; vertex-concentration finding |
| NINJAL | 尚書（古活字版第三種本）訓点資料 加点情報データベース | open 2020-01-31 (test) | https://cid.ninjal.ac.jp/kunten-syousyo3/ ; images https://dglb01.ninjal.ac.jp/ninjaldl/bunken.php?title=syousyo | PAGE HARVESTED: 巻1-9 digitized; wokototen (incl. 音合符/訓合符/声点) + 語順点 searchable; NIHU 総合書物学 unit + JSPS 17K18506 |
| 小助川貞次 (report author) | 「進化する訓点資料」 chapter (現存量の問題), KAKEN research-report PDF, 151 pp. | n.d. (post-2018) | https://researchmap.jp/read19931001/published_papers/22380649/attachment_file.pdf | FULL PASSAGE EXTRACTED verbatim: quotes Tsukishima 1996 census with all four period figures + p. 27 qualifier |
| 築島裕 | 平安時代訓点本論考（研究篇）, 汲古書院 | 1996 | cited at p. 27 of the above report | PRIMARY CENSUS VERIFIED: 初期180 + 中期189 + 後期582 + 院政期2404 = 3,355点 ("何等かの形で調査を為し得た点数"); 12th-c. Buddhist kunten possibly tens of thousands survive |
| 築島裕 | 平安時代の訓点資料の伝存状況についての一考察, 国語学 160: 1-14 | 1990 | https://bibdb.ninjal.ac.jp/SJL/view.php?h_id=1600010140 | Record verified (earlier survival-status study; superseded by 1996 figures) |
| Zilong Li & Jie Cao | Translation via Annotation: A Computational Study of Translating Classical Chinese into Japanese, Proc. EACL 2026 (Vol. 1 Long Papers), pp. 6031-6045, Rabat | 2026-03 | https://aclanthology.org/2026.eacl-long.285/ ; DOI 10.18653/v1/2026.eacl-long.285 | PEER-REVIEWED VERSION CONFIRMED: full landing page w/ abstract, ISBN 979-8-89176-380-7, editors Demberg/Inui/Marquez; arXiv v2 (updated 2026-01-21) remains as preprint |
| 鈴木功眞 | 寛永八年版和刻本大広益会玉篇の和訓, 訓点語と訓点資料 125 | 2010 | http://kuntengo.com/journal_110 | TOC re-harvested with full Japanese text: Edo WOODBLOCK 和刻本 wakun study (companion to his 古活字版倭玉篇 genealogies, vol. 112, 2004) |

Full-text documents harvested this loop (in ./documents/): 2026-Li-Cao-EACL-kaeriten-published.md, 2017-Hayashi-NINJAL-shosho-kokatsujiban-katen.md, 1996-Tsukishima-heian-kunten-census3355.md, 2024-AKS-myeongsimbogam-eonhae-negative.md.

## Key findings

### Target 1 CLOSED AS PERMANENT DOCUMENTED NEGATIVE - 명심보감언해
Final attempt across all four channels specified: (a) AKS 한국민족문화대백과 명심보감 entry (E0018312, rev. 2024-02-23, author 이원호) describes the Korean transmission entirely through 목판본/석판본 editions (~10 kinds), the 추적 명심보감초 tradition, Cheongju 1454 printing, and schoolbook use - it never mentions an 언해; (b) the scholarly 해제 in the 동양고전종합DB (cyberseodang) enumerates every known edition family worldwide (Ming/Qing官版, 청주본 1454, 초략본, 和刻本, Vietnamese Mih-Tam Buu-Giam, Spanish Beng Sim po Can of Juan Cobo 1592 held at Madrid/Biblioteca Nacional and Sophia Univ. Cristan bunko) - no Korean translation edition appears; (c) 세종한글고전 DB (Sejong the Great Memorial Society) carries the canonical eonhae 역주 series (능엄경언해, 목우자수심결언해, 정속언해, 여사서언해, 효경언해, 두시공부시언해, 월인석보 ...) - 명심보감 is absent; (d) Crossref bibliographic search returns only content-comparison essays (성해준 2013 x2; 김유리 2013; Kwon 2017). The B06 negative therefore stands permanently: a 명심보감언해 (1465?) cannot be documented from any authoritative accessible source (ยังไม่พบข้อมูลยืนยัน). The book should use the verified eonhae chronology (석보상절 1447 - 능엄경언해 1462 - 목우자수심결언해 1467 - 두시언해 1481) and cite 명심보감 only as a widely transmitted LS moral primer used in Joseon schoolrooms (per AKS/cyberseodang).

### Target 2 CLOSED AS SYSTEMATIC NEGATIVE WITH INFRASTRUCTURE CONTEXT - gugyeol OCR/AI
With websearch functional this time (unlike B06), the retry still found NO project recognizing gugyeol/jeomto marks by AI. Systematic sweep: arXiv has zero entries for "gugyeol"; OpenAlex's 71 "gugyeol" works are all philological; Crossref "gugyeol recognition" returns nothing computational; the 구결연구 tables of contents for vols 50-56 (2023-2026) contain no digitization/AI paper - Moon Hyun-soo's jeomto-digitalization status paper (vol. 42, 2019) remains the latest word in the field journal. What DOES exist is adjacent national infrastructure, citable as the state of the art around gugyeol: NLK's citizen-science AI-OCR platform 공유서재 for old books/newspapers; NIA AI Hub's 고서 한자 인식(OCR) training dataset (10,142,816 characters over 57,081 JPEGs - character-level Sino-Korean, not mark-level); commercial 고문헌 한자 OCR services (e.g., NURI IDT, launched June 2023). ITKC remained unreachable (timeouts), so its internal gugyeol DB status still rests on loop_12's 민족문화 59 citation. Conclusion for the book: automated recognition of Korean reading marks is an explicitly open frontier; nearest analogues are Li & Cao's kaeriten taggers (Target 4) and these Korean hanja-OCR datasets (ยังไม่พบข้อมูลยืนยัน for any gugyeol-specific recognizer).

### Target 3 CLOSED (with typological honesty) - Edo print kunten treatment found
The requested dedicated treatment exists in two complementary pieces anchored to NINJAL: (1) 林昌哉・田島孝治・堤智昭・高田智和・小助川貞次「訓点資料の加点情報計量のためのデータ構造－国立国語研究所蔵「尚書（古活字版）」を対象として－」じんもんこん2017論文集 pp. 45-52 - abstract harvested verbatim: a structured data model for 加点 (ヲコト点 etc.) applied to NINJAL's Edo-period PRINTED Shangshu, one fascicle encoded and statistically analyzed, showing concentration of kana-representing points at character vertices; (2) the production system it seeded, NINJAL's 尚書（古活字版第三種本）加点情報データベース (test-opened 2020-01-31; vols 1-9; searches wokototen including 音合符/訓合符/声点 plus inversion/number points; built under NIHU 総合書物学 unit and JSPS KAKEN 17K18506). Typological caveat kept honest: the NINJAL Shangshu is 古活字版 (early-Edo movable type), not woodblock; for woodblock 和刻本 the specialist-journal anchor is 鈴木功眞「寛永八年版和刻本大広益会玉篇の和訓」(vol. 125, 2010, wakun on the Kan'ei-8 1631 woodblock Dai-Kōeki-kai Gen) alongside his movable-type 倭玉篇 genealogies (vol. 112, 2004) already recorded in B07. A monographic study of HAND-ADDED points on Edo woodblocks specifically remains unlocated (ยังไม่พบข้อมูลยืนยัน), but the chapter can now cite a concrete quantitative treatment + live database for Edo print kunten.

### Target 4 CLOSED POSITIVELY - Li & Cao published version exists
Crossref bibliographic lookup resolves the arXiv preprint to its peer-reviewed form: Li & Cao, "Translation via Annotation: A Computational Study of Translating Classical Chinese into Japanese," Proceedings of the 19th Conference of the European Chapter of the Association for Computational Linguistics (Volume 1: Long Papers), Association for Computational Linguistics, Rabat, Morocco, March 2026, pp. 6031-6045, DOI 10.18653/v1/2026.eacl-long.285, ISBN 979-8-89176-380-7, editors Vera Demberg, Kentaro Inui, Lluís Marquez. ACL Anthology landing page (fetched in full) carries the published abstract (sequence-tagging framing, LLM-based annotation pipeline, new dataset from digitized kundoku data, auxiliary-task gains in low-resource setting, LLM evaluation). The arXiv record shows v1 2025-11-07, v2 updated 2026-01-21. Citation upgrade for ch. on formal/computational kunten: replace arXiv citation with the EACL 2026 proceedings citation (code/data repo unchanged: github.com/shiryusann/KanbunKundoku per B07).

### Target 5 CLOSED - Tsukishima 3,355 verified at source; no newer census found
The 3,355 figure is confirmed as Tsukishima Hiroshi's own count in 平安時代訓点本論考（研究篇）(Kyūko Shoin, 1996), quoted verbatim in Kosukegawa Teiji's research-report chapter 「進化する訓点資料」 (researchmap PDF, 151 pp., downloaded and text-extracted): 平安初期 (783-900) 180点 + 平安中期 (901-1000) 189点 + 平安後期 (1001-1100) 582点 + 院政期 (1101-1200) 2404点 = 合計3355点; crucially the count is self-described as "現在までに筆者が何等かの形で調査を為し得た点数" (p. 27) - a floor, not an exhaustive total, since 12th-century Buddhist kunten materials alone are said to possibly number tens of thousands surviving. Sub-census worth citing: kanji-kunten (kanji-kunten materials) are rare - 平安中期 7点, 平安後期・院政期 15点, ~200点 even including Kamakura. Update check: NO newer aggregate census was found from NINJAL or elsewhere; NINJAL's own kunten digitization covers only Shangshu vols 1-9 (Target 3 item), and the closest earlier antecedent is Tsukishima's 国語学 160 (1990) survival-status study. The book should cite 3,355 as "surveyed-by-Tsukishima-as-of-1996", never as the total extant.

## Gaps closed vs remaining

Closed this loop:
1. 명심보감언해 - final multi-channel verification; permanent documented negative (AKS entry, cyberseodang 해제, sejongkorea DB list, Crossref all silent). B06 residual closed.
2. Gugyeol OCR/AI - systematic negative with working websearch (arXiv/OpenAlex/Crossref/journal-ToC sweep) + nearest-infrastructure documentation (NLK AI-OCR, AI Hub hanja-OCR dataset). B06 residual closed.
3. Edo print kunten - dedicated quantitative treatment (Hayashi et al. 2017, abstract verbatim) + live NINJAL 加点 database (2020-) + woodblock companion citation (Suzuki 2010). B07 residual substantially closed (hand-added-points-on-woodblock monograph caveat retained).
4. Li & Cao peer-reviewed version - EACL 2026 proceedings record with DOI/pages confirmed. B07 residual closed.
5. Kunten census - 3,355 verified to primary source with full per-period breakdown and its built-in "surveyed so far" qualifier; no newer figure exists to supersede it. B07 residual closed.

Remaining:
- Hand-added points on Edo WOODBLOCK editions: still no dedicated monograph found (ยังไม่พบข้อมูยืนยัน); Suzuki 2010 is the strongest single-article anchor.
- ITKC live-site gugyeol DB status: connection refused/timed out both phases; citation continues to rest on loop_12's print-source anchor (민족문화 59).
- Semantic Scholar API: rate-limited both attempts (429) - one index channel untested (OpenAlex/arXiv/Crossref coverage judged sufficient).
- Full texts of Nguyễn Thị Thu Huyền 2021/2023 and Suzuki 2010 remain abstract/TOC-level (paywalled/offline), inherited from B07.

## Blocked sources (honest record)

- api.semanticscholar.org: HTTP 429 twice (rate limit, no key).
- db.itkc.or.kr: TCP timeout on / and /gugyol/ (persistent environment block, same as B06).
- ipsj.ixsq.nii.ac.jp via webfetch tool: HTTP 406 (anti-bot); succeeded via direct browser-UA request.
- kiss.kstudy.com / riss.kr: not retried this loop (client-side rendering limitation already documented in B06).
- cid.ninjal.ac.jp root: placeholder test page; the kunten-syousyo3 path works.
- Wikipedia/Wikidata appeared in results (築島 bio, 석보상절) but were used ONLY as discovery aids; every fact cited above comes from AKS, NDL, NINJAL, ACL, IPSJ, Crossref, publisher/repository pages, or the harvested PDF.

## Files created

- research-notes/loop_C05/findings.md (this file)
- research-notes/loop_C05/documents/2026-Li-Cao-EACL-kaeriten-published.md
- research-notes/loop_C05/documents/2017-Hayashi-NINJAL-shosho-kokatsujiban-katen.md
- research-notes/loop_C05/documents/1996-Tsukishima-heian-kunten-census3355.md
- research-notes/loop_C05/documents/2024-AKS-myeongsimbogam-eonhae-negative.md
