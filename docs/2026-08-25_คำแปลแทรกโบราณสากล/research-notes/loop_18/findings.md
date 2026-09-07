# Loop 18 Findings — Early Chinese Buddhist sutra commentaries: Kanno Hiroshi and the zhu-yishu evolution

Date: 2026-08-25
Method: websearch provider returned 429 for the whole session; substituted with DuckDuckGo HTML (CAPTCHA-blocked), Bing (no usable hits for exact phrase), OpenAlex REST API, CiNii (page fetch blocked, OpenSearch intermittent 503), J-STAGE Search API (worked), Crossref REST API, ORCID Public API, direct PowerShell fetches of iriab.soka.ac.jp (worked) and degruyter.com (blocked). Full-text extraction: Baggio 2019 PhD thesis (pypdf, complete 267-page PDF); ARIRIAB vols 5-6 downloaded but are image-only scans without text layer and no OCR tool was available locally (tesseract/poppler absent), so Kanno's paper itself could not be text-mined; its content was instead recovered verbatim through Baggio's extensive quotations of it.

## Queries used

1. `Kanno Hiroshi "Chinese Buddhist Sutra Commentaries of the Early Period"` (websearch -> 429; DuckDuckGo -> CAPTCHA)
2. OpenAlex `search=Chinese Buddhist Sutra Commentaries Early Period` -> hit W360551613
3. OpenAlex `filter=author.id:A5035382039` -> 94 works by Kanno listed
4. OpenAlex `search=Sengzhao Weimojie jing commentary` -> Baggio 2019 dissertation (full PDF fetched)
5. Bing `"Keyworth ... Glosses ..."` / `"Glosses in Chinese and Japanese" "Yijing"` (moved to Loop 19; zero relevant hits)
6. PowerShell fetch `iriab.soka.ac.jp/publication/aririab.html` -> full ARIRIAB back-issue list; downloaded `Vol. 5 (2002)` and `Vol. VI (2003)` PDFs (both scanned, no text layer)
7. J-STAGE API `text=菅野博史` -> 146 records (Kanno's IBK articles confirmed with DOIs)
8. J-STAGE API `text=講經文` (jiangjingwen) -> 38 records
9. CiNii page/OpenSearch fetch attempts (empty responses / 503)

## Table of sources found

| Author | Title | Year | URL | Key points |
|---|---|---|---|---|
| Kanno Hiroshi 菅野博史 | Chinese Buddhist Sutra Commentaries of the Early Period | 2003 (ARIRIAB vol. VI, for academic year 2002; OpenAlex dates it 2002), pp. 301-320 | https://cir.nii.ac.jp/crid/1361137042595168384 (CiNii NAID 40005801969, page blocks bots); free scanned PDF https://iriab.soka.ac.jp/content/pdf/aririab/Vol.%20VI%20(2003)%20[rev.4Aug2010].pdf ; OpenAlex W360551613 | The target gap item. Verified full bibliographic record: Annual Report of the International Research Institute for Advanced Buddhology at Soka University, n. 6, pp. 301-320 (citation cross-checked in Baggio 2019 bibliography). No DOI exists. PDF is image-only scan (no text layer; OCR unavailable locally), so its abstract is not digitally extractable this session. |
| Giacomo Baggio | The Vimalakirtinirdesa Commentary [T1775] by Sengzhao et alii and the Chinese Conquest of Buddhism (PhD diss., Univ. of Groningen) | 2019 | https://doi.org/10.33612/diss.94589377 ; PDF https://pure.rug.nl/ws/files/94589379/Complete_thesis.pdf (full text extracted to documents/) | Core full-text source for the zhu-yishu evolution; defines T1775 Zhu Weimojie jing as an interlinear (zhu 注) collective commentary; quotes Kanno 2003 pp. 301-320 extensively; covers Daoan, Kumārajīva's translation-lectures, Sengrui, Sengzhao, Daosheng, Daoye. |
| Kanno Hiroshi | A general survey of research concerning Chinese commentaries on the Lotus Sutra | 2006 | http://ci.nii.ac.jp/naid/40015497539 | Companion survey of Lotus-sutra commentary scholarship by the same author (metadata only; CiNii blocks fetch). |
| Kanno Hiroshi | The Citations from the Nirvana Sutra in the Dasheng silun xuanyi ji 大乘四論玄義記 (IBK 68.1) | 2019 | https://doi.org/10.4259/ibk.68.1_289 | Shows Kanno's continuing work on Northern-Southern-Dynasties exegetical compendia (metadata via J-STAGE API). |
| Kanno Hiroshi | The Problem of Existence, Non-existence and the Middle Way in the Da banniepan jing jijie 大般涅槃經集解 (IBK 72.1) | 2023 | https://doi.org/10.4259/ibk.72.1_325 | Work on the great collected-commentary (jijie 集解) compilation of the Nirvana Sutra (metadata via J-STAGE API). |
| Li Silong | From Yishu to Zhangshu (JIBS 70.3) | 2022 | https://www.jstage.jst.go.jp/article/ibk/70/3/70_1220/_pdf (archived in loop_09/documents/) | Strict zhu/shu distinction; rule 'sub-commentary does not deny former commentaries'; Sengrui's Vimalakirti-yishu preface (late Eastern Jin) as earliest example; yishu absorbed Indian argumentation paralleling bhasya. |
| Pei Changchun | The Renwang Ritual in the Tang and Five Dynasties: Based on P. 3808 (Renwang jing jiangjingwen 仁王経講経文) (IBK 68.1) | 2019 | https://doi.org/10.4259/ibk.68.1_260 | Dunhuang manuscript P.3808 preserves a jiangjingwen (lecture-scripture text) used in Tang/Five-Dynasties Renwang assemblies - documentary evidence for the jiangjing lecture-commentary institution. |
| Kitamura Shigeki | Variant Narrative Texts of the Vimalakirti-nirdesa-sutra (Weimojie jing jiangjingwen 維摩詰経講経文) (IBK 24.2) | 1976 | https://doi.org/10.4259/ibk.24.664 | Earliest systematic study of the Dunhuang Vimalakirti lecture-commentary texts and their variants. |
| Arami Hiroshi | The Tun-huang Su-chiang chuang-yen hui-hsiang wen and Transformation Texts (Acta Asiatica 105) | 2013 | https://doi.org/10.69382/actaasiatica.105.0_81 | Links Dunhuang popular-lecture (sujiang 俗講) picture-lecture texts with bianwen transformation texts. |
| Saito Takanobu | Shandao's Xingfu 興福 (Buddhist Welfare): On the Relationship with Jiangjing 講経 (Lecture on Scriptures) (IBK 68.1) | 2019 | https://doi.org/10.4259/ibk.68.1_243 | Documents the institutional pairing of scripture lecturing (jiangjing) with merit-making in Tang Buddhism. |
| Yamaguchi Hiroe | The Circulation and Reception of Tiantai Commentaries on the Vimalakirti-sutra in East Asia (Hualin IJBS 4.1) | 2021 | https://doi.org/10.15239/hijbs.04.01.10 | East Asian circulation of Vimalakirti commentary traditions bridging early (Guanzhong) and Tiantai strata. |
| Mou Runsun 牟潤孫 | study on zhu and shu commentaries (cited via Baggio as Mou Runsun 1987) | 1987 | (cited in Baggio 2019 bibliography, full text saved) | Alternative theory: zhu = written explanations on the text; shu = transcriptions of orally delivered exegesis; shu 疏 originally 'to record' what had been heard. |
| Ochō Enichi 横超慧日 | foundational study on development of Chinese Buddhist exegesis (Ochō 1979, cited via Baggio/Kanno) | 1979 | (cited in Baggio 2019 bibliography) | Kanno's typology of commentarial formats relies on Ochō's earlier framework. |
| Kogachi Ryūichi 古勝隆一 | definition of Confucian interlinear commentaries (Kogachi 2001b, cited via Baggio) | 2001 | (cited in Baggio 2019 bibliography) | Source of the definition Kanno adopts for zhu: 'reproduces passages from the original scripture in their entirety', commentary does not stand independent of the scripture. |

## Key findings (with URLs)

1. **The Kanno paper is fully located**: "Chinese Buddhist Sutra Commentaries of the Early Period", ARIRIAB vol. VI (academic year 2002, published 2003), pp. 301-320; no DOI; open-access scanned PDF on the institute site https://iriab.soka.ac.jp/content/pdf/aririab/Vol.%20VI%20(2003)%20[rev.4Aug2010].pdf (listing page https://iriab.soka.ac.jp/publication/aririab.html). The scan has no text layer and no OCR engine was installable this session, so its wording was recovered through Baggio's direct quotations (below), which cite it as "Kanno Hiroshi 2003".

2. **Kanno's zhu vs shu/yishu definitions** (Baggio 2019, pp. 109-111, quoting Kanno 2003 pp. 302-303): zhu 注 = "a form that reproduces passages from the original scripture in their entirety. Explanations are then applied to the text, so that the original sutra text is accorded priority and the interlinear commentary itself does not stand independent of the subject scripture" (adopted from Kogachi Ryūichi's account of Confucian interlinear commentary). The shu-type "exposition of meaning" style "does not reproduce the entire text of the sutra. It includes only selected passages... to which comments are then added, making it something that must be regarded as the work of the compiler himself."

3. **Dating and causes of the shift** (Kanno via Baggio): the shift from zhu to shu took place at the beginning of the Northern-and-Southern Dynasties, driven by (a) increasing length of translated scriptures making full-text reproduction burdensome, and (b) a change of approach: interlinear commentaries attended to "relatively superficial matters, such as the meanings of the words themselves," while expository commentaries focused "on the underlying themes of the text."

4. **Mou Runsun's oral-transcription theory of shu** (Baggio p. 110): shu consisted of transcriptions of orally delivered exegesis; the etymology of shu 疏 as "to record" (ji 記) supports this; John Jorgensen connects Buddhist shu to debates held during translation sessions whose conclusions were recorded in drafts. This gives the lecture-hall origin of the shu genre.

5. **T1775 Zhu Weimojie jing as THE early interlinear artifact** (Baggio pp. 1-2, disambiguation section): a collection of explanatory annotations following the text "in the form of an inter-linear commentary (viz. they are 'inserted' (zhu 注) after the term, sentence or passage of the original text which is explained)", authored collectively by Kumārajīva, Sengzhao (384-414), Daosheng (ca. 355-434) and (in some strata) Daorong, commenting Kumārajīva's 406 CE translation; Kanno notes "there is some question as to whether the constituent commentaries of Zhu Weimo were interlinear commentaries or commentaries of the expository type prior to their combination into a single work." URL: https://doi.org/10.33612/diss.94589377

6. **Daosheng as transitional figure** (Baggio p. 177 note 655 quoting Kanno 2003 p. 308): "even in Chinese Buddhist circles, interlinear commentaries were compiled first, and only later did the exposition of meaning style of commentary become popular. It was Daosheng's era that marked this point of transformation. Daosheng's Miaofa lianhua jing shu 妙法蓮華經疏 being one of the earliest extant commentary in his 'exegesis of meaning' style". Baggio concludes Daosheng's Vimalakirti commentary is best described as a "proto-yishu" intermediate stage; kepan 科判 analytical parceling, typical of mature yishu, is absent from the Guanzhong commentaries (Zhiyi reports deriving his own kepan from Sengzhao's general structural remarks).

7. **Daoan and the lecture-translation continuum** (Baggio ch. 1): Daoan's Chang'an activity (379-385) marks the move "from geyi 格義 to textual study"; under Kumārajīva "the translation ground turned into a lecture hall attended by monks and laymen"; oral explanations and parts of the question-answer debate "were noted down by monks, and those written materials constituted the basis for the compositions of commentaries" (with reference to Zacchetti's analysis). This is the concrete mechanism connecting the jiangjing 講經 institution to written commentary production.

8. **jiangjing lecture-commentary evidence from Dunhuang**: P.3808 Renwang jing jiangjingwen (https://doi.org/10.4259/ibk.68.1_260), the Vimalakirti jiangjingwen variants (https://doi.org/10.4259/ibk.24.664), and sujiang/bianwen connections (https://doi.org/10.69382/actaasiatica.105.0_81) show the lecture-commentary genre circulating as manuscripts in Dunhuang into the Five Dynasties.

9. **Daoye's T2777 primer** (Baggio pp. 15, 178): Jingming jing jijie Guanzhong shu 净名經集解關中疏, composed 760 CE by the Tiantai-affiliated monk Daoye 道液 in Chang'an, repackages the old Guanzhong collective exegesis (Kumārajīva, Sengzhao, Daosheng, Daorong, plus Sengrui) as a clear primer, and likely served as the editorial model for the 10-fascicle edition of T1775 that entered the canon.

10. **Indian bhasya <-> yishu link remains only partially verified**: Li Silong 2022 (loop_09 archive) asserts yishu absorbed Indian argumentation parallel to bhasya, but Baggio explicitly declines to investigate Indian influences because "Indian sources on this subject... are indeed very limited" (citing Jonathan Silk on the scarcity of Vimalakirti reception in India). No dedicated comparative study surfaced in this loop.

## Gaps requiring further research

- Machine-readable text/abstract of Kanno 2003 itself: needs OCR of the scanned ARIRIAB vol. VI PDF (image-only) or library access to the print volume; content above rests on verbatim quotations in Baggio 2019.
- Kanno's larger Japanese monographs on Chinese sutra-commentary genres and the 2006 survey (CiNii 40015497539) remain unread (CiNii blocks automated fetch; Japanese-language print sources needed).
- Ochō Enichi 1979 and Kogachi Ryūichi 2001 (the scholarly infrastructure behind Kanno's typology) not directly consulted.
- A dedicated study of "Michihata" on early commentarial practice: no matching indexed record found this session - "ยังไม่พบข้อมูลยืนยัน".
- Direct comparison Indian bhasya <-> Chinese yishu: open; recommend Phase C targeting Felbur 2017 and Zacchetti's studies of early Chinese exegesis.
