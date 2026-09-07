# Loop B07 Findings — Japanese kunten in depth: closing loop_13 Phase-A gaps

Date: 2026-08-26
Phase-B note: This loop closes the five gaps flagged in loop_13 (Phase A, 2026-08-25): (1) shōten 声点 tone-glosses; (2) kakuhitsu 角筆 stylus corpus; (3) Edo-period print kunten beyond the NINJAL Shangshu DB; (4) Vietnam analogues; (5) school-schemata-vs-practice follow-ups incl. the "kaeriten automaton" successor paper. Terminology note: loop_13 wrote "書筆"; verified form is 角筆 kakuhitsu ("horn/stick stylus").

## Queries executed

1. websearch EN: "shōten 声点 tone marks kunten four tones Middle Chinese dot position Sino-Japanese" (mostly Mandarin-pedagogy noise; 1 usable dictionary hit)
2. websearch EN/romaji: "kakuhitsu 角筆 stylus writing dry point kunten manuscripts corpus Kobayashi Yoshinori" (hit: De Gruyter Medieval Multilingual Manuscripts note "Kobayashi is the leading specialist on Japanese kakuhitsu drypoint or scratch glossing")
3. webfetch: conf.ling.cornell.edu/japanese_historical_linguistics/ (OK; Sato-bon Kegon mongiyoketsu caption cites Kobayashi 2004 Kakuhitsu bunken kenkyū dōron jō: Higashi Ajia hen)
4. websearch JA: 角筆 データベース 国文学研究資料館 角筆文献 小林芳規 訓点資料 (rich hits)
5. bash download + pypdf extract: Whitman et al. 2010 Scripta PDF from Cornell (1.26 MB -> 49k chars OK); Hiroshima StylusSympo2006_1.pdf (image-only text layer, unusable - recorded honestly)
6. websearch JA: 声点 四声 平上去入 四隅 訓点 漢字音 (Wikipedia noise excluded; kambun.jp hit)
7. webfetch: kotobank.jp/word/声点 (full aggregate entry incl. Nipponica by Ishizuka Harumichi)
8. websearch JA: 江戸時代 漢籍 版本 加点 訓点 無点本 頭書 慶安版 古活字版 訓点本 (weak); second phrasing 漢文 無点本 加点... (junk results discarded)
9. webfetch: arxiv.org/html/2511.05239v2 (full paper captured)
10. websearch JA: 小助川貞次 近世 訓点... (0 hits); retry via 訓点語と訓点資料 近世漢学 (hit: kuntengo.com journal TOC)
11. websearch VI/EN mixed: Sino-Vietnamese Hán texts interlinear glosses reading marks âm Hán Việt manuscripts chữ nôm (infrastructure hits only)
12. websearch VI: kinh "diễn âm" Hán Nôm Phật giáo Việt Nam phiên âm chú giải chữ Nôm (noise + one format evidence)
13. webfetch: kuntengo.com/journal_110 (full TOC vols 110-156) — decisive for gaps 3-5
14. websearch: "論語約解" OR "Luận ngữ ước giải" 漢喃研究院 論語 ベトナム 訓読 約解 (decisive for gap 4)

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| Ishizuka Harumichi (Nipponica entry), Daijisen, Nihon kokugo daijiten seisenban, Britannica Intl, MyPedia | 声点 shōten entries (Kotobank aggregate) | dict. | https://kotobank.jp/word/%E5%A3%B0%E7%82%B9 | Corner-tone mapping; poyin origin; Tang currency in China; dakuten origin as doubled voice dots; six-tone variant; earliest Japanese examples late 9th c.; kana-accent extension early 11th c.; Heian/Kamakura tonal values |
| Matsumoto Jun | 古文（漢文）の声調２（日本漢字音でのあつかい） | 2004 | https://kambun.jp/izanai/02-09seicho2.htm | Same four-corner vermilion-dot convention preserved in kanwa-dictionary tone/rhyme boxes; Edo 平仄 circle/dot memorization workarounds |
| Whitman, Oh Miyoung, Park Jinho, Alberizzi V.L., Tsukimoto M., Kosukegawa T., Takada T. | Toward an International Vocabulary for Research on Vernacular Readings of Chinese Texts (Scripta 2) | 2010 | http://conf.ling.cornell.edu/whitman/WhitmanAlberizziTsukimotoKosukegawa2010Toward.pdf | Full text extracted locally: shōten = "tone gloss"; kakuhitsu = "stylus / chopstick-shaped instrument", "stylus gloss"; 27 core terms incl. saidoku, shuten, hakuten; term-frequency survey; Korean stylus-gloss discoveries from 2000 (11th-12th c.); Ishizuka shōten-origins bibliography (Acta Asiatica 65:30-50, 1993) |
| Kobayashi Yoshinori (interview by Yamauchi Masaya) | 「角筆」の世界 文化功労者の小林芳規名誉教授に聞く | 2019 | https://www.hiroshima-u.ac.jp/koho_press/press/2019/bunkakourousha | Kakuhitsu discovery 1961; 100 items by 1987 monograph; all-47-prefecture survey; total 3,250+ items Nara-Edo; ke/hare register finding; Kakuhitsu Scope light; China (Wuwei Han slips, Dunhuang, Song prints, Ming/Qing), Korea (Goryeo canon jeomto/jato in stylus since 11th c.), Europe/Middle East (Bibles, Qurans); Tōdaiji Silla sutra decipherment 757/1141 lines |
| researchmap Kobayashi Yoshinori page + KAKEN grant pages | Publication/grant records | 1962-2012 | https://researchmap.jp/read0036111 ; https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-09410111/ | Private catalogues 角筆文献目録 1997/1999; Dunhuang stylus study (訓点語と訓点資料 100, 1997); IDP News 13 (1999); Daigoji Song-print issaikyō stylus marks (2008/09); katakana-origins claim (2008); grants 09410111/19320066/22320084 |
| Li Zilong & Cao Jie | Translation via Annotation: A Computational Study of Translating Classical Chinese into Japanese (arXiv:2511.05239v2) | 2025-26 | https://arxiv.org/html/2511.05239v2 ; code https://github.com/shiryusann/KanbunKundoku | Kaeriten = stack-sorting; Catalan-number expressiveness bound; stack-of-queues extension; PDA+transducer formalism; Shimano 2009/2012/2018 combinatorics lineage (CFL equivalence); new 9,292-sentence dataset; LLM comparison |
| Nguyen Thi Thu Huyen | On the Identification and Reading of Proper Nouns in Vietnamese Commentaries on the Analects (Sungkyun JEAS 25(2):183-212) | 2025 | https://read.dukeupress.edu/sungkyun-journal-of-east-asian-studies/article/25/2/183/405439/On-the-Identification-and-Reading-of-Proper-Nouns | Luận ngữ ước giải 論語約解 (printed 1839, AB.270/3): LS/Nôm bilingual giải âm genre; intralinear gezhu commentary; three name-mark types calibrated to Nôm classifiers; major Japan-Vietnam glossing differences |
| Kunten Language Society | 「訓点語と訓点資料」目次（第110輯～最新輯） | site 2004-2026 | http://kuntengo.com/journal_110 | Vietnam series (Kosukegawa 133:82-72[as printed], 2014; Nguyen 145:2020, 151:65-86, 2023); Hara Takushi 112 (early-modern temple stylus use); Suzuki Kōshin movable-type Wakuhen studies; Nakano Naoki Ryukyu-print Rongo shusho (149, 2022); shōten follow-ups (Numoto 124; Sasaki 115/129; Hara Yutaka 114; Katō 151) |
| Project MUSE editors' preface + Duke UP companion article | Special issue Vietnam in the Sinographic Cosmopolis (Sungkyun JEAS 25(2)) | 2025 | https://muse.jhu.edu/article/976571/summary ; https://read.dukeupress.edu/sungkyun-journal-of-east-asian-studies/article/25/2/129/405438/Vernacularization-of-Literary-Sinitic-in-Early | Confirms author profile (Tohoku PhD mobilizing kundoku expertise) and companion vernacularization study |
| Fulbright Vietnam Studies Center | Digitizing Vietnam project launch | 2025 | https://fulbright.edu.vn/vietnam-studies-center-officially-launches-digitizing-viet-nam-projects-website | Digital infrastructure (Kiều Tool annotations; Nguyễn Quang Hồng Nôm dictionary ~10,000 entries; Trần Văn Kiệm reading aid) — no historical reading-mark studies surfaced there |

Full-text documents harvested this loop (in ./documents/): [2026]-Li-Cao-kaeriten-automaton.md, [2019]-Kobayashi-kakuhitsu-world-interview.md, [2025]-Nguyen-Vietnam-Analects-glosses.md, [dict]-Kotobank-shoten-entry.md, [2026]-Kuntengo-journal-TOC-harvest.md.

## Key findings

### Gap 1 CLOSED — Shōten 声点 tone-glosses
- Writing convention: dots at the character's FOUR CORNERS (or corner-midpoints) encode Middle Chinese tones — lower-left 平声 level, upper-left 上声 rising, upper-right 去声 departing, lower-right 入声 entering. Forms include white-circle 圏点 and black star-dot 星点 (circles preferred on kanji; star points on siddham characters with interlinear kanji notes and on wakun). https://kotobank.jp/word/%E5%A3%B0%E7%82%B9
- Chinese linguistic significance: derived from the 破音 poyin practice marking DERIVED readings (derivation often tone-changing); vermilion 点発 moved from center/side to corners using the four-tone frame; by late Tang detached into pure tone marks; described as common practice in Tang China (Ishizuka Harumichi's Nipponica article + Nikkoku). The same four-corner logic survives today inside kanwa dictionaries' tone/rhyme notation boxes (Matsumoto 2004).
- Earliest Japanese examples: around the very end of the 9th century; extended to KANA from the early 11th century to mark JAPANESE pitch accent — making shōten-bearing kuna the key accent-history data source; doubled dots on voiced syllables became the origin of the DAKUTEN 濁点. Six-tone system adds 平声軽 (left-side midpoint low; falling contour) and 入声軽 (right-side midpoint low; high-level contour); Heian values 平=low-level, 上=high-level, 去=final-rising, 平軽=final-falling; Kamakura onward only 平/上 contrast remains.
- Scholarship anchors: Ishizuka 1995 「声点の起源」/ English version "The Origins of the Ssŭ-shêng Marks", Acta Asiatica 65: 30-50 (1993) — bibliographically verified inside the Whitman et al. 2010 PDF, where shōten is standardized as "tone gloss". Follow-up studies located: Numoto 2010 (dhāraṇī-kunten four-tone display by kana position), Sasaki Isamu 2012 (Shinran's own Bando-bon Kyōgyōshinshō shōten placement), Sasaki 2005 (shōten on fanqie notes in old dictionaries), Hara Yutaka 2004 (erased vermilion shōten, Mahāmayūrī ms.), Katō 2023 (departing-tone behavior in Kamakura annotated Wakan rōeishū copies).

### Gap 2 CLOSED (scale/value verified; database question answered negatively-with-detail) — Kakuhitsu 角筆
- Scale: first find 1961 (Kōyasan exhibition); 100 items by the 1987 monograph 角筆文献の国語学的研究 (Kyūko; Imperial/Japan Academy Prize 1991); decade-long post-retirement survey found items in ALL 47 prefectures, total exceeding 3,250 items spanning Nara to Edo; majority are kunten-type glosses (kana + symbols guiding kanbun reading), plus letters, documents, even mokkan. https://www.hiroshima-u.ac.jp/koho_press/press/2019/bunkakourousha
- Research value: invisible inkless writing = private/informal register ("hare" vs "ke"), recording colloquial speech and LOCAL DIALECTS nationwide — a linguistic archive absent from formal manuscript culture; read via the purpose-built Kakuhitsu Scope light (Kobayashi & Yoshizawa 1991).
- Trans-Eurasian scope: China — Wuwei Han-dynasty wooden slips, Dunhuang manuscripts (Kobayashi 1997; IDP News 13, 1999), Song woodblock Tripitaka copies (Daigoji set, studied 2008-09), Ming/Qing books; Korea — stylus-written jeomto 点吐 and jato 字吐 on the first-carved 11th-c. Goryeo Tripitaka found in 2000 Seoul surveys, continuing after the 13th c.; joint annual decipherment since 2009 of a Silla-language-glossed sutra at Tōdaiji (757/1141 lines by Jan 2020); Europe/Middle East — stylus-type insertions in 11th-12th-c. hand-copied Bibles and Qurans (British Museum survey).
- Database/catalogue status: NO comprehensive open online kakuhitsu database exists (ยังไม่พบข้อมูลยืนยัน); access runs through Kobayashi's privately printed catalogues (角筆文献目録 1997, 102 pp.; 1999, 267 pp. + essays), regional lists (Daigoji 1999; Kagawa 2001; Hiroshima Univ. Stylus-Materials Research Office), and KAKEN project records (09410111; 19320066; 22320084). Whitman et al. 2010 fix English terms: kakuhitsu = "stylus (chopstick-shaped instrument)", stylus gloss = "gloss written with a stylus".
- Early-modern continuity: Hara Takushi 2004 documents monk training and stylus use at provincial temples (vol. 112).

### Gap 3 PARTIALLY CLOSED (honest limits stated) — Edo print kunten
- Verified additions beyond the NINJAL Shangshu DB: early-Edo movable type carried WAKUN/kana glosses rather than full point apparatuses — genealogies of old movable-type Wakuhen (Suzuki Kōshin 2003, vol. 112), wakun in the Kan'ei 8 (1631) printed Dai-Kōeki-kai Gohen (Suzuki 2010, vol. 125), Rakuyoshū and movable type (Shirai Jun 2003, vol. 110); peripheral Ryukyu printing shows kundoku practice via the Ryukyu-printed Rongo shusho (Nakano Naoki 2022, vol. 149). http://kuntengo.com/journal_110
- Consistent picture with prior loops: medieval sectarian prints (gozan/Kasuga/Kōya) were kanbun-only per Blum 2019; wokototen-style apparatus nearly extinct after Muromachi (loop_13 Kotobank); mass pedagogy ran through furigana/kana-majiri oraimono textbooks (loop_14). The specific term "keihanbon 京版" did NOT surface as a kunten category in any fetched source (ยังไม่พบข้อมูลยืนยัน).
- Remaining honest negative: no dedicated monographic study of hand-added points on Edo woodblock kanbun editions was located this loop beyond these threads.

### Gap 4 CLOSED (positive result, not negative) — Vietnam analogues
- A real Vietnamese glossing tradition now verifiable: the giải âm 解音 genre of Literary-Sinitic/Nôm BILINGUAL texts — LS original passage-by-passage in large characters, followed by Nôm vernacular translation, with LS commentary inserted INTRA-LINEARLY in gezhu 割注 double-column format; exemplar Luận ngữ ước giải 論語約解, printed 1839 (Institute of Sino-Nôm Studies AB.270/3); parent work Tứ thư ước giải 四書約解 with Lê Quý Đôn's preface explaining that Vietnamese pronunciation differs from China's, hence rendering of local sounds. https://read.dukeupress.edu/sungkyun-journal-of-east-asian-studies/article/25/2/183/405439/
- Reading-mark findings: three types of proper-noun NAME MARKS in the LS portion, their treatment correlated with classifier use in the Nôm translation; commonalities across Vietnamese commentaries (Luận ngữ tiết yếu 1850; Emperor Tự Đức's verse Analects excluded); MAJOR cross-cultural differences vs Japanese glossed texts. Author lineage: Kosukegawa 2014 「ベトナムの加点資料について」(vol. 133) opened the field; Kosukegawa & Whitman 2018 (Journal of Vietnamese Studies 13: 28-49); Nguyễn Thị Thu Huyền 2021 (Kanji bunka kenkyū 11: 33-50, punctuation-based possibility of Vietnamese kundoku) and 2023 (Kuntengo to kunten shiryō 151: 65-86).
- Unverified lead recorded honestly: a reversal-mark (レ-like check-mark) usage reported for the manuscript Sơ học vấn tân 初學問津 appears ONLY in a Wikipedia image caption (excluded as citation); chase in Nguyễn 2021/2023 full texts before using (ยังไม่พบข้อมูลยืนยัน).

### Gap 5 EXTENDED/CLOSED — schemata vs practice follow-ups; kaeriten automaton
- The quantitative line continues past Tsutsumi et al. 2023 into formal language theory: Li & Cao (arXiv:2511.05239v2, 2025-26) prove kaeriten reading = stack-sortable permutations (Knuth; Catalan numbers; with the hyphen mark, stack-of-queues generating function, OEIS A078482), implement a pushdown automaton + transducer that accepts exactly valid annotated strings and emits reordered output, and build a validated 9,292-sentence dataset (95,066 chars) from kanbun.info; fine-tuned classical-Chinese RoBERTa taggers beat the Wang et al. pipeline on perfect-match ordering (PMR 90.00 vs 78.30) and PDA pass rate 95.41; LLMs translate well but annotate marks poorly — applying the tagger to LLM translations raised Kendall τ to 96.18. https://arxiv.org/html/2511.05239v2 ; code/data https://github.com/shiryusann/KanbunKundoku
- Combinatorics lineage surfaced: Shimano 2009 tree/matrix models → 2012 generating-function solution → 2018 equivalence of kundoku ordering to a context-free language (Chomsky hierarchy). Together with Tsutsumi et al.'s schema-vs-practice measurements this gives the chapter a two-level claim: idealized school charts are classifiable automata-wise, real manuscripts deviate measurably, yet the protocol as such is formally decodable.
- School-history scholarship keeps growing inside Japan (Utsunomiya Keigo's series on Nishihaka/Eizan/Hōdōin/Kita'in points and Ninnaji wokototen history, vols 123-154, 2009-2025), confirming that the eight-group map remains under active refinement rather than closure.

## Gaps closed vs remaining

Closed this loop:
1. Shōten mechanics, Chinese poyin origin, dakuten link, earliest dates, accent-history role, follow-up literature — CLOSED.
2. Kakuhitsu scale (3,250+ items, 47 prefectures, Nara-Edo), register value, trans-Eurasian spread, catalogue situation — CLOSED (with explicit negative on an open digital DB).
4. Vietnam analogues — CLOSED POSITIVELY (giải âm bilingual genre; name marks vs Japanese practice; full citation trail).
5. Successor quantitative/formal work — CLOSED (Li & Cao PDA paper harvested in full; Shimano lineage documented).

Remaining (honest):
- Edo woodblock 加点 editions: only indirect evidence (wakun-carrying prints, Ryukyu printings); a dedicated specialist study still missing — keep as flagged gap if ch. 9 argues print-transition claims.
- Reversal-mark claim for Sơ học vấn tân: unverified Wikipedia-caption lead only.
- Kakuhitsu: no open digital DB; primary catalogues are print-only; image-heavy symposium PDF (StylusSympo2006_1.pdf) downloaded but text-unextractable.
- Full texts of Nguyễn 2021/2023 (Japanese journals) not fetched — abstract/bibliography level only.
- Whitman et al. 2010 pagination discrepancy: Cornell label says Scripta 2, 1-36 but PDF running heads run pp. 62-82; cite cautiously.

## Blocked / inaccessible sources

- hiroshima.repo.nii.ac.jp StylusSympo2006_1.pdf: HTTP 406 via fetcher; direct download succeeded but PDF has no usable text layer (image scan) — content used instead from the 2019 Hiroshima interview and search-snippet corroboration.
- Cornell WhitmanAlberizziTsukimotoKosukegawa2010Toward.pdf: served raw compressed bytes to webfetch; downloaded and extracted locally with Python/pypdf (success).
- De Gruyter Medieval Multilingual Manuscripts (dokumen.pub / uplopen.com mirror): used only for the one-line attribution of Kobayashi as leading kakuhitsu specialist; book body not harvested (out of scope).
- Sungkyun JEAS 25(2): abstract + bibliography accessible; full articles paywalled at fetch time.
- Search-noise discipline: Mandarin tone-marketing pages, YouTube/Reddit junk, and Wikipedia/Wikidata mirrors were discarded and never cited; Kotobank used solely as licensed dictionary reference per project rules (its Nipponica entry carries authored scholarship by Ishizuka Harumichi).
