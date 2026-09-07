# Loop C02 Findings — Residual Buddhist-glossing gaps from Phase B (B02)

Date: 2026-08-26 | Workspace: output\2026-08-25_คำแปลแทรกสิบแปดบท\research-notes\loop_C02
Phase-C final-pass loop. All facts verified against fetched/indexed primary or peer-reviewed sources only; unverifiable items marked (ยังไม่พบข้อมูลยืนยัน). No Wikipedia/Wikidata/Baidu used. B02 local documents mined first as instructed ([1991]-Hubbard re-read; it contains no colophon transcriptions - confirmed gap, now closed by other sources).

## Queries executed

Websearch tool worked this loop (no 429). Eight searches:
1. 七寺一切経 書写奥書 校勘 点経 奥書 研究落合俊典 -> ICABS survey report + Sakagami 1993 + Ochiai 2023 + Daito shuppansha series pages.
2. "華厳経音義私記"/"新訳八十巻華厳経音義私記" 著者 研究 -> Jia Zhi 2021 (Kyushu U OA), Liang Xiaohong et al. 2014 metadata, Okada 1939 解説 text.
3. Chen Jinhua book-title checks (see Target 3 below).
4. Guanding recorded lectures / Donner-Stevenson / Swanson -> Penkower JIABS OA.
5. Penkower citation pin-down -> Peeters metadata + Pitt faculty page.

Fallback bash/API: Crossref works API (Chen query; Sakagami DOI record); OpenLibrary search API (title phrase; author=Jinhua Chen sweep, 46 records); Google Books API (429 blocked); NII repository API (icabs record 2000063 metadata incl. ISSN/pages); direct downloads: ICABS PDF (CID-garbled locally), Tsuchiya 2001 IBK PDF (re-extracted clean), Jia 2021 PDF (clean), Ochiai 2023 PDF (clean first page), Heidelberg JIABS PDF (bot-blocked).

## Table of sources

| Author | Title | Year | URL | Substance |
|---|---|---|---|---|
| SAKAGAMI Masao 坂上雅翁 | The Jingtu-lun in the Collection of the Nanatsudera, IBK 41-2: 583-588 | 1993 | https://doi.org/10.4259/ibk.41.583 | PUBLISHED TRANSCRIPTIONS of Nanatsudera okugaki: 「一校了　栄俊」(juan 1-2), 「一校了　永俊」(juan 3) - named proofreaders; one-hand copying of 3 scrolls; ~5,000 scrolls in 5 yrs with miscopyings; oldest complete Jingtu lun ms; harvested as document |
| 日本古写経研究所 survey team | 七寺一切経 書誌情報一覧（六）—仮十一函—, 日本古写経研究所研究紀要 9: 91-164, ISSN 2434-3951 | 2024 | https://icabs.repo.nii.ac.jp/records/2000063 | Continuing published TRANSCRIPTION series of every 外題/内題/尾題/奥書 per scroll; canon written 1175-1180 over ~5.5 yrs per its own okugaki; Owari monks; Kaibaocang 刊記 transcribed into okugaki; Kiyomizu-dera/Hosshoji golden-sutra copying recorded; harvested as document |
| OCHIAI Toshinori 落合俊典 | 日本古寫經『金剛場陀羅尼經』（國寶本・五月一日經本・七寺一切經本・興圣寺一切經本）について, 東洋の思想と宗教 40: 1-21 | 2023 | http://toutetsu.gakkaisv.org/tgt/T40/v001-021_T40_2023.pdf | Nanatsudera copy okugaki 「一校了」(院政期); stemmatic use of red-ink corrections on Nara 五月一日經; Kongoji issaikyo dependence lines; PDF downloaded, first page verified |
| Linda PENKOWER | In the Beginning … Guanding (561-632) and the Creation of Early Tiantai, JIABS 23-2: 245-296 | 2000 | https://doi.org/10.2143/JIABS.23.2.3275065 ; OA https://journals.ub.uni-heidelberg.de/index.php/jiabs/article/view/9177 | VERBATIM redaction statement: Mohe zhiguan = edited result of 594 Yuquansi summer-retreat lectures; from shortly before Zhiyi's death 597 Guanding edited the lecture notes twice more = THREE editions, only last survives; Cidi chanmen lectures 571 taken down by Fashen, later edited by Guanding; harvested as document |
| JIA Zhi 賈智 | 本文から見た『新訳華厳経音義私記』の撰述と背景, 語文研究 130/131: 454-441 | 2021 | https://doi.org/10.15017/4782113 ; PDF https://catalog.lib.kyushu-u.ac.jp/opac_download_md/4782113/130-131_p454.pdf | Full text extracted; compiler anonymous Japan monk; built on Huiyuan yinyi + Japan-made Daichi-bon; Kobayashi 1978 verbatim: composed Tenpyō-shōhō ± half century at Tōdaiji or its lineage; Tōdaiji scriptorium signatures 石作馬道/安宿廣成(寫經所經師) and collation colophon 「延曆二年…於東大寺與新羅正本自挍勘畢」(783); two-stage lecture-then-dictionary composition; harvested as document |
| Britannica int'l concise (kotobank) | 新訳華厳経音義私記 entry | n.d. (fetched 2026-08-26) | https://kotobank.jp/word/新訳華厳経音義私記 | Dictionary verification: 「著者未詳。2巻。奈良時代末の成立」; man'yo-gana wakun keep jōdai tokushu kanazukai; zetian graphs present |
| LIANG Xiaohong/MIAO Yu/CHEN Wuyun | 《新譯華嚴經音義私記》俗字研究 (花木蘭文化) TOC+abstract via NTU library | 2014 | https://buddhism.lib.ntu.edu.tw/search/search_detail.jsp?comefrom=authorinfo&seq=679209 | 「為日本奈良時代華嚴學僧所撰」; sole Ogawa copy National Treasure 1931; Luo Zhenyu 1940 reprint history |
| Crossref/OpenLibrary/IKGF CV/Routledge/RelBib | Chen Jinhua bibliographic footprint | various | https://api.crossref.org ; https://openlibrary.org/search.json?author=Jinhua+Chen ; https://www.ikgf.fau.de/people/index.shtml/jinhua-chen.shtml | NO monograph titled "Philologists, Scribes, Gentlemen and Laymen" anywhere in his verified record; verified monographs: Making and Remaking History (Tokyo 1999), Monks and Monarchs Kinship and Kingship (Kyoto 2002), Philosopher Practitioner Politician (Leiden 2007), Legend and Legitimation (Brussels 2009), Crossfire (Tokyo 2010); edited: Chinese Buddhist Canons in the Age of Printing (Routledge 2019), Disciplinary Rituals in Dunhuang Buddhism (Brill 2022), What Happened after Manjusri Migrated to China? (Routledge 2022/24), Esoteric Buddhism and Texts vol. I (Routledge 2024, ISBN 9781032563206) |
| TSUCHIYA Jikyō 土屋慈恭 | 天台大師の維摩経解釈に関する一考察, IBK 49-2: 222-229 | 2001 | https://www.jstage.jst.go.jp/article/ibk1952/49/2/49_2_728/_pdf/-char/en | Re-downloaded and re-extracted this loop; coverage CONFIRMED as sandaibu Vimalakirti quotation census (Wenju 17 / Xuanyi 50 / Zhiguan 105 = 172; per-pin counts, 弟子品33 問疾品33 top) + Biezhuan evidence of early Weimo lectures and Yangdi-requested Weimo shu - NOT a Mohe-zhiguan pipeline paper |

## Key findings

### Target 1. Issaikyo/Nanatsudera collator-role colophon transcriptions - CLOSED (to transcription level)

Loop B02's Hubbard review had no colophons. Now verified: (a) Sakagami 1993 publishes the actual okugaki of Nanatsudera Jodoron scrolls 1-3: 「一校了　栄俊」「一校了　栄俊」「一校了　永俊」 - the late-Heian proof formula 一校了 ("one collation pass completed") plus named individual proofreaders, two different hands across one work; (b) the ICABS research-kiyo series (vol. 9, 2024) is an ongoing open-access TRANSCRIPTION apparatus for entire boxes of the set, flagging 別筆の奥書 added through 校合; its summary confirms the set's own okugaki date the project to 1175-1180 (~5.5 yrs), name Owari-region monks as copyists, preserve transcribed Kaibaocang printing colophons, and record fallback copying of Hosshoji golden-letter sutras at Kiyomizu-dera; (c) Ochiai 2023 adds a further Nanatsudera 「一校了」 example (金剛場陀羅尼経) and shows red-ink collation marks being used stemmatically against Nara-period witnesses. Formal multi-role office rosters (校経者/点者 lists) inside single colophons remain unattested in fetched sources - the formula-level culture is now documented, office-roster level still needs the printed 七寺古逸經典研究叢書 facsimile volumes.

### Target 2. Huayan shiki 華厳私記 authorship - CLOSED (as far as sources allow)

No author's name survives: Britannica states 著者未詳 (anonymous), 2 kan, late Nara composition; scholarship consensus (Kobayashi Yoshinori 1978, quoted verbatim inside Jia 2021): compiled around the Tenpyō-shōhō era or within half a century thereof, at Tōdaiji or temples of its Kegon-studies lineage; supporting chain: 馬道手箱 erased colophon on the sole (Ogawa, National Treasure 1931) copy linked to 石作馬道 signature alongside 安宿廣成 東大寺寫經所經師 on a Tōdaiji-held Kegon work whose scroll ends with a self-collation colophon dated Enryaku 2 (783) 「於東大寺與新羅正本自挍勘畢」. Jia Zhi 2021 (full text harvested) demonstrates two-stage composition: glosses begun during live Huayan lecture courses, extended afterwards from Huiyuan's yinyi, Xuanying, Yu pian and graph-books. Any personal attribution would be fabrication - keep 匿名の奈良朝華厳学僧（東大寺系） formulation. Date anchor: extant copy itself written Enryaku 13 (794) per Okada 1939.

### Target 3. Chen Jinhua exact title verification - CLOSED NEGATIVE

"Philologists, Scribes, Gentlemen and Laymen" could not be verified and is almost certainly not a real Chen Jinhua title: absent from Crossref works search; absent from all 46 OpenLibrary records under his name; absent from institutional CV listing his five monographs; no publisher catalog hit. Verified alternatives for citation instead: monographs Making and Remaking History (IIBS Tokyo 1999), Monks and Monarchs, Kinship and Kingship (ISEAS Kyoto 2002), Philosopher, Practitioner, Politician (Brill 2007), Legend and Legitimation (Peeters 2009), Crossfire (IIBS Tokyo 2010); relevant edited volumes on canons/manuscript culture (Routledge 2019/2022/2024; Brill 2022). The prompt-string must be marked (ยังไม่พบข้อมูลยืนยัน) in any draft.

### Target 4. Tsuchiya 2001 coverage - CONFIRMED (no harvest needed beyond B02)

PDF re-fetched and fully extracted this loop. Content = Vimalakirti citation census across the sandaibu (Wenju 17 / Xuanyi 50 / Zhiguan 105, total 172; per-pin distribution led by 弟子品 33 and 問疾品 33; 嘱累品 0) plus Biezhuan-based evidence that Zhiyi lectured on Weimo jing during his Tiantai seclusion and composed Weimo jing shu at Sui Yangdi's request. It does NOT treat the Mohe zhiguan lecture pipeline; its value stays statistical/corpus support as already used in B02. Coverage verdict recorded here rather than as a new document file.

### Target 5. Sandaibu redaction history - CLOSED

Penkower 2000 supplies the requested scholarly statement, now harvested verbatim: Mohe zhiguan = edited result of Zhiyi's 594 Yuquansi summer-retreat lecture series; beginning shortly before Zhiyi's death (597) and twice thereafter Guanding edited the notes and reworked the introduction, producing THREE editions of which only the last survives; parallel case Cidi chanmen (571 lectures taken down by Fashen, later edited by Guanding). This upgrades B02's title-level items (Matsumori 2007 etc.) into a full citable redaction account consistent with the CBETA internal evidence (說/記 formulas, 594 dates, 私記 statement).

## Gaps closed vs remaining

Closed this loop: named-proofreader colophon transcriptions from the Nanatsudera set (一校了 formula + persons); existence of a continuing OA transcription series for the whole canon; Huayan Shiki authorship question settled at source level (anonymous Nara Kegon monk, Tōdaiji orbit, lecture-linked composition, 794 copy); Chen Jinhua title string disproven with verified replacement bibliography; Tsuchiya 2001 coverage confirmed; three-edition Guanding redaction history secured with English verbatim quote.

Remaining:
1. Multi-role office rosters (校経者/点者-style titles) within individual issaikyo colophons - requires print-only volumes (七寺古逸經典研究叢書; 正倉院紀要).
2. Provenance of Fayun's Song-shizhuan passage within Song gaoseng zhuan recensions (carried over from B02).
3. Zenrin kokuhoki 1409 letter primary text; Koryo re-carving dates (carried over).
4. If drafts need a Chen Jinhua authority for translation-bureau/commercial-copying context, cite his verified 2005 Journal Asiatique article (loop_08 doc) or Routledge 2019 canons volume - never the unverified title string.

## Blocked sources (honest record)

- journals.ub.uni-heidelberg.de (JIABS OA): Anubis JS proof-of-work bot-check; direct PDF fetch returned challenge HTML both attempts; content used from search-indexed full-text layer.
- Google Books API: HTTP 429 on first call; not retried after other sources resolved Target 3.
- ICABS survey-report PDF body: CID font mapping broken under pypdf (garbled glyphs); repository metadata API and indexed text layer used instead.
- WorldCat web interface: not attempted after Crossref+OpenLibrary sufficed.
