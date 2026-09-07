# Measuring Linguistics of the Wokototen Chart Made Inductively by Deciphering Kunten Materials

## Metadata

| Field | Value |
|---|---|
| Authors | Tomoaki Tsutsumi (Univ. Tsukuba), Koji Tajima (NIT Gifu College), Teiji Kosukegawa (Univ. Toyama), Tomokazu Takada (NINJAL) |
| Title | Measuring linguistics of the wokototen chart made inductively by deciphering kunten materials |
| Venue | F1000Research 2023, 12:506 (version 1; 16 May 2023); doi:10.12688/f1000research.131244.1; PMCID: PMC10521107 |
| URL | https://pmc.ncbi.nlm.nih.gov/articles/PMC10521107/ |
| Access date | 2026-08-25 (full HTML captured) |
| Language | English (open access, CC-BY) |
| Relevance | Loop 13: quantitative/NINJAL study of wokototen schools (RQ3), kunten as linguistic data (RQ4), digital infrastructure (RQ5) |

## Content notes (verified from full text)

- Kunten defined: "a Japanese system of text markings used to clarify the syntax and meaning of Chinese texts for Japanese readers"; used from Heian to Edo periods in East Asia; kunten materials treated as historical sources for linguistic and historical research.
- Wokototen definition: marks placed inside or around Chinese characters indicating grammatical particles, auxiliary verbs, and kanji readings; shape + position determine the indicated reading; different flavors per school and annotator.
- Two kinds of wokototen charts (wokototen-zu): comprehensive charts (collection of marks used by each school) vs inductive charts (marks collected from a particular body of kunten material). A chart's square frame is called a tsubo 壺; a collection of charts = tenzushū 点図集.
- Prior scholarship canon: Yoshizawa Yoshinori (1927-31), Nakata Norio (compiled 26 major school charts; Kotenbon no kokugogakuteki kenkyū 1954), Ōtsubo Heiji (Kuntengo no kenkyū 1961), Tsukishima Hiroshi (Heianjidai kuntenbon ronkō 1986; Heian-period kundoku-go study 1963), Kobayashi Yoshinori (1967; Kakuhitsu bunken no kokugogakuteki kenkyū 1987), Kasuga Masaji (Kokunten no kenkyū 1956).
- Data basis: NINJAL Wokototen charts Database (https://cid.ninjal.ac.jp/wokototendb/), registered as of June 2022; measurements on 199 inductive point charts summarized by Tsukishima (1986); total of 6411 individual wokototen entries digitized; position encoded on a 7x7 grid centered on the character (center 5x5 = area overlapping the glyph); shapes encoded via 124 Unicode substitute characters.
- Results — readings: 303 reading types found; top ten: te(テ) 203, wo(ヲ) 199, ni(ニ) 199, to(ト) 191, no(ノ) 190, ha(ハ) 181, su(ス) 166, koto(コト) 159, ru(ル) 155, nari(ナリ) 149. Particles te/wo/ni appear in almost all charts (often in multiple pigment layers shuten/bokuten/hakuten).
- Results — shapes: 124 distinct shapes; overwhelmingly dots (・ 2199 occurrences) and single-stroke forms (｜ 770, ― 525, ＼ 520, └ 397, / 377, ┐ 264). The three most frequent readings te/ni/wo are represented by just seven shapes (・, ＼, /, ｜, ―, ◡, :) with the dot dominant (e.g., te by dot in 195 charts).
- Results — positions: most common at four corners and center of character; lower-right corner (2,2) most frequent (709 marks); outside-the-character marks concentrate on the right side (middle-right (3,0): 169; upper-right external (3,-3): 129 vs upper-left external only 1) — same right-side tendency as furigana.
- Contrast with the 26 comprehensive school charts: there the most frequent readings are su/naru/nari/tari (auxiliary verbs) rather than te/wo/ni, and marks rarely sit outside characters — i.e., actual manuscript practice differs from idealized school schemata.
- Korean comparison: a 5x5 coordinate system around each character has also been used in Korean gugyeol studies (refs 14-18 incl. Oh Miyoung 2014 "韓国の口訣資料および口訣研究の現況について" in 日韓漢文訓読研究, Bensei 2014), same concept but data-incompatible.
- Reviewer note (Hmeljak Sangawa, peer review report attached): majority of kunten research published only in Japanese; this English article opens the field; notes Whitman et al. 2010 terminology proposal ("vernacular reading" for kundoku, "gloss" for kunten) at http://conf.ling.cornell.edu/whitman/WhitmanAlberizziTsukimotoKosukegawa2010Toward.pdf
- Funding/projects: JSPS KAKEN JP20K00654; NIHU project 異分野融合による「総合書物学」の構築; NINJAL 表記情報と書誌形態情報を加えた日本語歴史コーパスの精緻化 (leader Tomokazu Takada).
- Analysis code: https://github.com/TTMTMAK/CountProg_for_Wokoto ; archived Zenodo doi:10.5281/zenodo.7801472.

## Related works cited within (for follow-up)

- Tsutsumi/Tajima/Kosukegawa et al., "Computerized Method of KUNTEN and Quantitative Analysis of KUNTEN Using Computer", J. Inf. Process. 59(2), 2018.
- Tajima/Tsutsumi/Takada, "Quantitative Analysis of Kunten Materials for Interpreted Text Generation", J. Inf. Process. 61(2), 2020.
- Tsutsumi et al., "Automatic Recognition of Wokototen Table using Kunten Database", J. Inf. Process. 63(2):283-292, 2022 (95%+ accuracy classifying Tsukishima group 1-8 charts from dot positions alone).
