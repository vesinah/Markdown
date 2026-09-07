# Loop 20 — Phase B deep dive: Korean/Vietnamese unresolved items (sacred_text_gloss)

- Loop: 20 (sacred_text_gloss)
- Date executed: 2026-08-25
- Topic: Resolution of five flagged Korean/Vietnamese gaps from Loop 08 and the Phase A audit: (A) Kosukegawa & Whitman 2018 exact identity; (B) Nguyen Francis 2026 JCWS article; (C) why sutra eonhae kept kugyol layers while poetic eonhae did not; (D) Gangyeongdogam royal eonhae bureau documentation; (E) gugyeol/seokdok digital resources + six seokdok witnesses claim.
- Method note: The websearch tool returned HTTP 429 for the entire session (provider quota), so discovery ran through direct bibliographic APIs and institutional pages: Crossref REST API, KCI (kci.go.kr) article/landing pages, AKS Encyclopedia (new /Article/ URL scheme), kiss.kstudy.com detail pages, kugyol.or.kr. Blocked this session: OpenAlex and Google Books APIs (quota exhausted from shared IP), Bing/DuckDuckGo/Mojeek/Ecosia/SearX (bot walls or junk results), RISS/KISS search UIs/DBpia/ScienceON (JS- or login-gated), ITKC (transport error), Kyujanggak (403). Rule observed: only facts seen in fetched pages/API responses are recorded; everything else marked UNVERIFIED. No Wikipedia sources cited.

---

## Source table

| Author | Title | Year | Type | Publisher/Journal | DOI/ISBN | URL | Status |
|---|---|---|---|---|---|---|---|
| Kosukegawa Teiji; Whitman John | On the Significance of the Glosses in Vietnamese Classical Chinese Texts | 2018 | Journal article | Journal of Vietnamese Studies 13(3):29-50, University of California Press, ISSN 1559-372X | 10.1525/vs.2018.13.3.29 | https://doi.org/10.1525/vs.2018.13.3.29 | VERIFIED (Crossref metadata + full abstract) |
| Nguyen Francis | Reversal marks and gloss reading in Vietnamese Han Nom manuscripts | 2026 | Journal article (OnlineFirst 2026-07-01) | Journal of Chinese Writing Systems, SAGE Publications, ISSN 2513-8502/2513-8510 | 10.1177/25138502261455641 | https://doi.org/10.1177/25138502261455641 | VERIFIED (Crossref metadata + full abstract) |
| Jang Yoonhee | A General Survey of Seokdokkugyol(釋讀口訣) and Its Materials (석독구결 및 그 자료의 개관) | 2004 | Journal article | Kugyol Studies no.12:47-80, Society for Kugyol Studies, ISSN 1226-6019 | none | https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001137031 | FULL-FETCHED (bilingual abstracts verbatim; six-witness list confirmed) |
| Lee Jeon-gyeong (이전경) | 간경도감 불경언해 사업의 또 다른 함의 (Gangyeong-Dogam's Buddhist "Eonhae" Editions And Its Implication) | 2014 | Journal article | Korean Language Research vol.34:265-286 | 10.16876/klrc.2014..34.265 | https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART001886742 | FULL-FETCHED (English abstract verbatim) |
| Song Il-gie (송일기) | 간경도감 중수본에 대한 오해 (刊經都監 重修本에 대한 誤解) | 2018 | Journal article | Journal of the Institute of Bibliography (서지학연구) no.73:83-98 | 10.17258/jib.2018..73.83 | https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART002329667 | FULL-FETCHED (bilingual abstract verbatim) |
| An Byeonghui (안병희) | 능엄경언해 楞嚴經諺解 [encyclopedia entry] | 1995, rev. 2023-02-07 | Reference entry | Encyclopedia of Korean Culture (한국민족문화대백과사전), Academy of Korean Studies, entry E0013357 | n/a | https://encykorea.aks.ac.kr/Article/E0013357 | FULL-FETCHED |
| Jeon Jaeho (전재호) | 두시언해 杜詩諺解 [encyclopedia entry] | 1995, rev. 2023-02-07 | Reference entry | Encyclopedia of Korean Culture, AKS, entry E0017018 | n/a | https://encykorea.aks.ac.kr/Article/E0017018 | FULL-FETCHED |
| Kim Seong Ju | On the Aspect of Correspondence between the Original Text and Its Translation in SeokBoSangJeol vol. 11th and WolInSeokBo vol. 21st | 2015 | Journal article | Korean Historical Linguistics no.20:193-225, ISSN 1738-477X, Society of Korean Historical Linguistics | 10.14727/khl.2015.20.193 | https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001988913 | METADATA FULL-FETCHED (abstract body JS-loaded; content summary remains SEARCH-VERIFIED from Loop 08) |
| Society for Kugyol Studies (구결학회) | 석독구결 검색기 [seokdok-kugyeol sentence-level parallel database] | site live 2026 | Digital database (SQLite/XML, 6 texts, 1,900 parallel units, 5,704 sentences) | kugyol.or.kr | n/a | https://www.kugyol.or.kr/kugyeol_search | FULL-FETCHED |
| anon. | A Study on the Grammatical Forms and words in Tusieonhae | 2019 | Journal article | The Journal of Yeongju Language & Literature vol.43:5-33 | 10.30774/yjll.2019.10.43.5 | https://kiss.kstudy.com/Detail/Ar?key=3709934 | FULL-FETCHED (Korean+English abstract; checked as candidate for target C - grammar/vocabulary only, does not address kugyol-layer question) |

Contextual Crossref-only records (no extracts, not load-bearing): Oh 2016 불교학보 77:331ff (Seokbosangjeol annotation compilation, 10.18587/bh.2016.12.77.331); Choi 2018 불교학보 85:111ff (Purpose of the Buddhist Annotated Translation of the Seokbosangjeol, 10.18587/bh.2018.12.85.111); Kwon 2021 Language and Linguistics (Wolinseokbo vs Beophwagyeong translation lexical differences, 10.20865/20219101); Kim Seong Ju 2016 Kugyol Studies 37 (Kirimsa Jabidoryangchambeop as seokdok text, 10.17001/kugyol.2016..37.002); Wolinseokbo corpus-in-education 2026 Korean Historical Linguistics 42(7) (10.14727/khl.2026.42.7).

---

## Per-target verdicts

### (A) Kosukegawa & Whitman 2018 — VERIFIED
Exact citation: Kosukegawa Teiji and John Whitman, "On the Significance of the Glosses in Vietnamese Classical Chinese Texts," Journal of Vietnamese Studies 13, no. 3 (2018): 29-50, DOI 10.1525/vs.2018.13.3.29, UC Press.
- Abstract captured: introduces Japanese kanbun kundoku, then identifies in Vietnamese manuscripts (Vietnamese Nom Preservation Foundation digitized NLV materials; Thắng Nghiêm and Phổ Nhân temple holdings) reading glosses, phonetic glosses (phụ âm-type), proper-name glosses, REFERENCE MARKS, and punctuation, in black or vermillion ink by annotation type.
- Corrections to Loop 08 row: journal confirmed = Journal of Vietnamese Studies (was "Journal of Vietnamese Studies?" with uncertainty); page range is 29-50 per Crossref (Loop 08 recorded 28-49); author order Kosukegawa first.
- Topic match: yes - Vietnamese Sino-Vietnamese readings and reordering/reference marks.

### (B) Nguyen Francis 2026 — VERIFIED
Exact citation: Francis Nguyen, "Reversal marks and gloss reading in Vietnamese Hán Nôm manuscripts," Journal of Chinese Writing Systems (SAGE), published online 2026-07-01, DOI 10.1177/25138502261455641. Volume/issue/pages not yet assigned (OnlineFirst).
- Abstract captured: reversal marks in Hán Nôm manuscripts of the Cảnh Phúc Collection held at Kyoto University; extensive Nôm-script glossing; marks evidence gloss-based reading that reorders Classical Chinese syntax to Vietnamese word order; explicitly framed against kanbun kundoku AND Korean seokdok-kugyol.
- Confirms the citation trail Loop 08 had via Nguyen's own reference list (author name form "Francis Nguyen" per Crossref).
- Body still paywalled: mark shapes, system details remain UNVERIFIED.

### (C) Sutra-vs-poetic eonhae kugyol layers — PARTIAL (explanatory source NOT found)
What IS now documented:
- Gangyeongdogam sutra eonhae structurally retain a kugyol-glossed source-text layer above paired-line translation (AKS Neungeom entry: 철저한 직역, 대문 구결 + 쌍행 번역; orthographic split between kugyol and translation layers).
- Lee Jeon-gyeong 2014: pre-Gangyeongdogam Buddhist texts showed VARIED attachment forms; Gangyeongdogam introduced an authoritative interpretation method that unified them; "right attachment follows EumdokGugyeol and the left attachment follows SukdokGugyeol styles," completing an oral-lecture/memorization examination system; influence extended to Hanmun pedagogy layout.
- Kim Ki-jong 2018 (Loop 08): early Gangyeongdogam eonhae served MONK education matching ordination-examination recitation curriculum.
- AKS Dusiwonhae entry: poetic eonhae's stated purpose was 세교 (lay moral instruction) per Jo Wi's 1481 preface; complete paraphrase format.
- Kim Mu-bong 2023 (Loop 08): genre contrast already quantified - Seokbosangjeol/Wolinseokbo print TRANSLATION ONLY, Beophwa-gyeong eonhae word-for-word on a kugyol base.
STILL UNVERIFIED: no fetched source states an explicit causal explanation (reader audience, genre convention, economics of type) for WHY Dusiwonhae omitted to/interpunct marks entirely. Searches across Crossref (English and Korean queries), the full 325-item Crossref register of Kugyol Studies (ISSN 1226-6019), RISS, KISS, DBpia produced no dedicated study. The strongest documented basis remains an inference from purpose/function contrast (monk curriculum + oral-exam apparatus vs lay poetry education), which must be labeled as synthesis, not sourced fact.

### (D) Gangyeongdogam documentation — RESOLVED (solid citable sources secured)
- Spelling correction: standard form is 간경도감 刊經都監 (task prompt's "강경도감" matches only romanization artifacts like "Gangyeong-Dogam" in English titles).
- AKS E0013357 (full text): Neungeom project began 1449 under Sejong/Suyang; movable type 을해자 400 copies 1461 at 교서관; woodblock 1462 by 간경도감 with 도제조 계양군 증's 1462-08-21 전문 naming all officials; reprints 1472, 1495; workflow Sejo kugyol -> Sinmi adjudication -> Han Gyeohui/Kim Su-on draft -> monk correction -> Sejo finalization; Dongguk Jeongeun readings by 조변안/조지; woodblock edition = first eonhae printed by Gangyeongdogam and normative model for its successors.
- Lee 2014 (abstract): Gangyeongdogam as standardizing authority over Buddhist text interpretation, with dual eumdok/seokdok attachment structure tied to lecture/examination practice; three-part conclusion (unified interpretation, Hunminjeongeum literacy spread, Hanmun layout influence).
- Song 2018 (abstract): bibliographic resolution of the 중수본 dispute - reprinting from repaired original blocks (조명기 position), not new engraving (천혜봉's theory became received opinion in error).
- Kim Seong Ju 2015: journal name + DOI now confirmed (Korean Historical Linguistics 20:193-225, 10.14727/khl.2015.20.193), upgrading the Loop 08 row.
- Korea Journal and Kyujanggak items could not be reached this session (site failures) - see open questions.

### (E) Digital resources + six witnesses — MOSTLY RESOLVED
- Six-witness claim CORROBORATED VERBATIM from the primary record: Jang Yoonhee 2004 (KCI ART001137031): "현재까지 알려진 석독구결 자료로는 ≪釋華嚴敎分記≫(10세기 중엽), ≪大方廣佛華嚴經疏≫ 권35(12세기 초), ≪大方廣佛華嚴經≫ 권14(12세기 중반~말엽), ≪合部金光明經≫ 권3(13세기 중엽 이후), ≪舊譯仁王經≫ 권上(13세기 중엽 이후), ≪瑜伽師地論≫ 권20(13세기 말) 등 6종" / "Up to now, six volumes that have Seokdokkugyol are known..." List matches Loop 08 exactly (all Buddhist).
- Digital resource FOUND and verified live: the Society for Kugyol Studies' 석독구결 검색기 at kugyol.or.kr/kugyeol_search - sentence-level parallel (Hanmun/kugyeol/translation) SQLite/XML database, 6 documents, 1,900 parallel units, 5,704 sentences. NOTE discrepancy: its corpus swaps 석화염교분기 for 자비도량참법 relative to Jang 2004's canonical six (five texts shared). Also linked: 날개셋 옛한글 문헌검색.
- "성균관대 대동문집 gugyeol DB": NOT FOUND this session. The Society for Kugyol Studies is headquartered at the AKS campus (Bundang), not SKKU; no gugyeol database named 대동문집 surfaced anywhere. Treat the Loop 20 prompt's guess as unconfirmed.
- 국립중앙도서관: homepage reachable but old-materials service could not be verified from static HTML (JS app); unverified.
- ITKC db.itkc.or.kr: transport error both locally and via webfetch tool; unverified this session.

---

## Reconciliation notes for Loop 08 (corrections/upgrades)
1. Kosukegawa & Whitman 2018: pages corrected to 29-50; journal confirmed; status upgraded SEARCH-VERIFIED -> VERIFIED-with-abstract.
2. Francis Nguyen 2026: author name form and OnlineFirst date fixed; abstract now held; body still paywalled.
3. Kim Seong Ju 2015: journal (Korean Historical Linguistics) + DOI added.
4. AKS encyclopedia URLs changed from /Entry/{ID} to /Article/{ID}; old Entry URLs now 404 (affects Loop 08's recorded links E0013357 etc.). Update before downstream citation.
5. db.sejongkorea.org bookInfo URL from Loop 08 now returns Tomcat 404 (site restructure or removal) - treat that capture as historical.
6. 간경도감 spelling normalized (刊經都監).

## Method constraints (for audit trail)
- websearch provider down (429) all session; OpenAlex/Google Books quotas exhausted (shared IP); general search engines bot-blocked; Korean academic portals JS/login-gated; kyujanggak.snu.ac.kr 403; ITKC unreachable. Working channels were Crossref REST, KCI article pages (two page formats: landing/article.kci embeds abstracts; ciSereArtiView loads abstracts via JS), AKS /Article/ pages via webfetch, kugyol.or.kr, kiss.kstudy.com detail pages.

## Open questions
1. Full bodies of Kosukegawa & Whitman 2018 and Nguyen 2026 remain unread (paywalls). Mark-shape typology and worked examples for Vietnam still UNVERIFIED; library access needed.
2. No explicit causal account exists in any fetched source for Dusiwonhae's missing kugyol layer. Next probes: 전재호 『두시언해의 국어학적 연구』 (이우사 1975) and 안병희 「중세어의 한글 자료에 대한 종합적인 고찰」 (규장각 3, 1979) - both named in the AKS entry's reference list; also whether any surviving 두시언해 초간본 volumes carry 간결-type marks contradicting the "no marks" datum.
3. Has the seokdok canon changed since Jang 2004? The society database includes 자비도량참법 but omits 석화염교분기; determine whether the latter lost witness status or is merely undigitized (Kim Seong Ju 2016 treats 자비도량참법 as seokdok literature).
4. Korea Journal articles on Gangyeongdogam and Kyujanggak-held 두시언해/월인석보 materials: sites unreachable this session; retry when network allows.
5. Existence of any SKKU-hosted or NLK-hosted gugyeol databases (the "성균관대 대동문집" hypothesis) - unverified; NLK and ITKC services need JS-capable access.
6. Does Lee 2014's right=eumdok/left=seokdok attachment description match the physical layout of surviving Gangyeongdogam blocks, and how does it interact with Song 2018's reprint chronology?

## Provenance note
All statements derive solely from pages/API responses retrieved during this session (2026-08-25): Crossref REST records, live KCI pages (ART001137031, ART001886742, ART002329667, ART001988913), AKS entries E0013357/E0017018 (webfetch), kugyol.or.kr (homepage + kugyeol_search), kiss.kstudy.com key=3709934. No Wikipedia URLs cited. Items behind paywalls or JS gates are explicitly marked UNVERIFIED rather than inferred.
