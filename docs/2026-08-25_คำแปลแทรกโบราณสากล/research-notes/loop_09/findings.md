# Loop 09 Findings — Chinese jiazhu interlinear commentary and Buddhist translation glosses

Date: 2026-08-25
Method: websearch (limited by provider rate-limit 429 after Loop 07/08 usage; supplemented via DuckDuckGo HTML search pages fetched successfully for 2 queries, OpenAlex API queries, and direct fetches) + full-text extraction of 2 open-access PDFs (pypdf). Queries executed: 6 distinct angles.

## Queries used

1. `jiazhu 夹注 interlinear annotation Chinese classics commentary form` (DuckDuckGo HTML fetch)
2. `zhu 注 shu 疏 subcommentary evolution Chinese exegesis forms distinction` (websearch before rate limit)
3. `Kanno Lotus Sutra Chinese commentaries yishu` (OpenAlex API + attempted websearch)
4. `Keyworth Suvarnabhasottama Dunhuang glosses` (Bing fetch + OpenAlex author works query)
5. `fanqie spelling Dunhuang` (OpenAlex API)
6. `yiqiejing yinyi Huilin` (OpenAlex API)

## Table of sources found

| Author | Title | Year | URL | Key points |
|---|---|---|---|---|
| Chang Pao-san | Commentaries and Subcommentaries: The Relationship Between Zhu and Shu in the Confucian Hermeneutic Tradition | 2017 (chapter in Interpretation and Intellectual Change in China) | https://www.taylorfrancis.com/chapters/edit/10.4324/9780203788288-13/commentaries-subcommentaries-relationship-zhu-shu-confucian-hermeneutic-tradition-chang-pao-san ; also https://scholars.lib.ntu.edu.tw/entities/publication/f9552e6f-5a8a-4c09-bc2c-b17707c5147c | Zhu and shu are the two principal Confucian formats for interpreting classics; their close relationship produced the composite term zhushu as a general term for classical interpretation; chapter analyzes tension between the two formats. |
| Li Silong | From Yishu to Zhangshu (Buddhist scripture-interpreted literature: Yi, Lun, Shu genres), JIBS 70.3 | 2022 | https://www.jstage.jst.go.jp/article/ibk/70/3/70_1220/_pdf (full text downloaded and extracted to documents/) | Northern-and-Southern-Dynasties Buddhist annotation literature titled Xuanyi/Xuanlun/Yizhang/Yiji/Yishu/Wenju summarized into three basic genres Yi, Lun, Shu; strict distinction between zhu (note/commentary) and shu (sub-commentary); exegetical rule 'Sub-commentary does not deny former commentaries'; shu literally 'to dredge/combing' and 'record in orderly manner'; Zhanran (711-782) in Fahua wenju ji: 'Shu means to link up directly, and to note down'; Yishu absorbed Indian argumentation tradition (parallel to Sanskrit bhasya); earliest example Sengrui's preface to Yishu of Vimalakirtinirdesa (late Eastern Jin). |
| George A. Keyworth | On Xuanzang and Manuscripts of the *Mahaprajnaparamita-sutra at Dunhuang and in Early Japanese Buddhism, Hualin IJBS 3.1 | 2020 | https://doi.org/10.15239/hijbs.03.01.08 ; PDF https://glorisunglobalnetwork.org/wp-content/uploads/2021/02/hualin3.1_keyworth.pdf (full text downloaded and extracted to documents/) | Xuanzang's 600-roll Mahaprajnaparamita-sutra central to Dunhuang manuscript canons (9th cent.) and Japanese manuscript canons (8th-12th cent.); introduces Dunhuang colophons; Nanatsudera canon of 4,954 rolls with 378 dated/marginalia colophons copied 1175-1180; notes that glosses to odd terms are provided in Huilin's (737-820) Yiqiejing yinyi 'Glossary to all the scriptures' (T no. 2128, comp. 807); Suvarnabhasottama (Jin'guangming jing) appears among Xuanzang-connected scriptures discussed. |
| Sin Wonch'ol | The Propagation to Korea and Reintroduction to China of Huilin's Yiqiejing yinyi (chapter in Korea and the "Others", De Gruyter) | 2024 | https://doi.org/10.1515/9783111322599-003 | Open-access chapter on transmission history of Huilin's Yiqiejing yinyi between China and Korea (metadata from OpenAlex; PDF download blocked at fetch time — content not yet verified beyond metadata). |
| Jiyoung Lee | A Study on the Evolution of Sanskrit-Chinese Phonetic Transcription in Middle Chinese through Buddhist Yinyi (音義) Texts | 2026 | https://doi.org/10.38068/kjcl.124.1 | Studies the yinyi genre as evidence for Middle Chinese phonology and Sanskrit-Chinese transcription practice (metadata only; not open access). |
| Hirayama Hisa | On the accordance principle of kai-he (开合) distinctions in the fanqie (反切) spellings of the Dunhuang Maoshiyin (毛诗音) fragments... Zhongguo Yuwen | 2009 | http://en.cnki.com.cn/Article_en/CJFDTOTAL-YWZG200906002.htm | Dunhuang fragments of Maoshi yin (sound-glosses to the Mao Odes) preserve fanqie spellings analyzable for Ancient Chinese finals — direct evidence that sound-gloss (yin) annotation circulated in Dunhuang manuscripts. |
| Chinese Text Project dictionary | 夹注 entry | n.d. | https://ctext.org/dictionary.pl?if=gb&char=%E5%A4%B9%E6%B3%A8 | 夹 = 'be wedged or inserted between'; 注 = 'concentrate, focus, direct'; confirms literal sense of jiazhu as annotations inserted into/beneath main text. |
| omgchinese dictionary | jiazhu definition | n.d. | https://www.omgchinese.com/dictionary/chinese/%E5%A4%B9%E6%B3%A8 | jia zhu = 'interlinear notes'; synonyms fuzhu/pingzhu/jianzhu; antonym meipi (head-note/top-margin comment). |
| Baidu Baike (keyword use only, not cited as authority) | 夹注 / 夹批 entries | n.d. | https://baike.baidu.com/item/%E5%A4%B9%E6%B3%A8/3188593 ; https://baike.baidu.com/item/%E5%A4%B9%E6%89%B9/5643272 | jiazhu = annotations beneath main text in smaller characters; vertical printing renders them as double-line columns inside the parent column ('double-line interlinear notation'); jiapi = comments written between lines, one element of the pingdian system with meipi/pangpi/zongpi. |
| open-guji luatex-cn project (+ DeepWiki glossary) | Interlinear Notes (jiazhu) typesetting specification | 2022-2026 | https://github.com/open-guji/luatex-cn/blob/main/README-EN.md ; https://deepwiki.com/open-guji/luatex-cn/10-glossary ; CTAN mirror: https://ctan.math.washington.edu/tex-archive/languages/chinese/luatex-cn/README-EN.md | Jiazhu defined typographically: 'interlinear annotations where notes are typeset in two columns of smaller text within the space of a single standard column', requiring automatic balancing/breaking rules; Japanese equivalent warichu (割注); documents the layout convention inherited from woodblock editions of classics. |
| Erya zhushu record (ctext wiki) | Annotations and Subcommentary on the Erya | n.d. | https://ctext.org/wiki.pl?if=en&res=780476 | Composite zhushu format: Guo Pu's (Jin) annotations combined with Xing Bing's (Song) subcommentary in eleven volumes — the standard fused commentary-subcommentary edition type. |
| Mochizuki Kaie, Kim Byung-kon, Katayama Yumi (eds.) | Bibliography of the Lotus Sutra Studies 1844-2020 (Lotus Sutra Studies series) | n.d. | http://id.nii.ac.jp/1367/00002676/ ; PDF https://minobu.repo.nii.ac.jp/record/2787/files/lss%20i%2031.pdf | Comprehensive bibliography of Lotus Sutra scholarship including Chinese commentarial studies; entry point for locating Kanno Hiroshi's studies on Lotus Sutra commentaries. |

## Key academic findings

1. **zhu vs shu distinction**: In the Confucian tradition, zhu (annotation/commentary) and shu (subcommentary) were historically distinct interpretive formats so closely related that they merged terminologically into zhushu, the general term for classical exegesis (Chang Pao-san; T&F chapter URL above). Li Silong confirms the strict distinction and the rule that a sub-commentary may not contradict earlier commentaries.

2. **Etymology and function of shu**: Shu 疏 originally means 'dredging/combing' and 'recording in an orderly manner'; Zhanran (711-782) defines it as 'to link up directly, and to note down' (Li Silong 2022, full text saved). This captures the shift from compact note (often placed interlinearly) toward flowing expository commentary.

3. **Yishu as Buddhist innovation**: The Buddhist scripture-interpreting genres (Yishu 义疏, Xuanyi, Yiji, Wenju, Yizhang) arose from late Eastern Jin onward (Sengrui's Vimalakirti Yishu preface is the early example) and deliberately absorbed Indian argumentation traditions paralleling bhasya, breaking the Confucian rule that sub-commentary must not overturn earlier readings (Li Silong 2022).

4. **jiazhu as physical/typographic format**: Jiazhu denotes annotations inserted within the running text in smaller characters; in vertical woodblock/print layout these became double-line small-text columns set inside the parent text column (Baidu Baike keyword source + ctext literal glosses + luatex-cn specification URLs above). The Japanese cognate warichu persists in modern typography, evidencing the continuity of this gloss placement convention.

5. **Sound-gloss (yinyi) apparatus**: Huilin's Yiqiejing yinyi (compiled 807, T no. 2128) supplied glosses to difficult terms across the entire canon and is invoked by Keyworth as where 'glosses to odd terms are provided'; the yinyi genre used fanqie spelling to fix pronunciations of translated Indic terms (Keyworth 2020 full text; Lee 2026 DOI; Hirayama 2009).

6. **fanqie in Dunhuang sound-glosses**: Dunhuang fragments of the Maoshi yin preserve fanqie spellings whose kai-he (open/close) distinctions are analyzed to reconstruct Ancient Chinese finals (Hirayama 2009, Zhongguo Yuwen) — showing that pronunciation-gloss annotation was actively used and transmitted in Dunhuang manuscripts.

7. **Dunhuang-Japan manuscript canon network**: Xuanzang's Mahaprajnaparamita-sutra dominated Dunhuang manuscript canons (9th cent.) and Japanese manuscript canons such as Nanatsudera (4,954 rolls; 378 colophons with dates or marginalia, copied 1175-1180), demonstrating how translation projects generated annotated/copied scripture sets across East Asia (Keyworth 2020, full text saved).

8. **Composite zhushu editions**: Standard editions like the Erya zhushu physically fuse Guo Pu's zhu with Xing Bing's shu, institutionalizing the layered commentary format that descends from manuscript-era annotation practice (ctext wiki record).

## Gaps requiring further research

- Kanno Hiroshi's specific studies of Lotus Sutra zhu/yishu commentarial literature could not be directly retrieved during this loop (provider rate limits); the Lotus Sutra Studies bibliography (Mochizuki et al.) is the located entry point.
- Specific Keyworth publication dedicated to Suvarnabhāsottama-sūtra Dunhuang glosses: not confirmed as a separate title in OpenAlex author list (79 works checked); closest verified sources are his 2020 Hualin article (downloaded) and 2022 Brill chapter. Marked: no separate confirmation found yet.
- Full content of Sin Wonch'ol 2024 chapter (De Gruyter blocked automated download).
- Yijing's (義淨 635-713) own translation-gloss practices: mentioned in passing in Keyworth (Yijing's translation of the Suvarṇabhāsottama-sūtra appears in the paper) but no dedicated source fetched — needs Phase B.
- Direct study of jiazhu placement in excavated medieval manuscripts (vs printed conventions) remains open.
