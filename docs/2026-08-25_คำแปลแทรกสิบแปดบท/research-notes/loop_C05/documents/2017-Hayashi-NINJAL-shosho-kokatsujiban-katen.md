# Document: Hayashi et al. 2017 - quantitative treatment of added points on NINJAL's Edo printed Shangshu, and the NINJAL kunten database it seeded

- Harvested: 2026-08-26 (Loop C05)
- Landing (paper): https://ipsj.ixsq.nii.ac.jp/records/184723 ; NDL mirror: https://ndlsearch.ndl.go.jp/books/R100000136-I1050855522066154624
- Landing (database): https://cid.ninjal.ac.jp/kunten-syousyo3/
- Status: Japanese abstract (shoroku) harvested verbatim from IPSJ IxSQ repository; NDL bibliographic record harvested in full; database top page harvested in full. Paper body not downloaded (symposium proceedings; abstract level sufficient for the book's citation).

## Bibliographic record

- Authors: 林昌哉 (Hayashi Masaya), 田島孝治 (Tajima Koji), 堤智昭 (Tsutsumi Tomoaki), 高田智和 (Takada Kazukazu/Takada Tomokazu), 小助川貞次 (Kosukegawa Teiji)
- Title: 訓点資料の加点情報計量のためのデータ構造－国立国語研究所蔵「尚書（古活字版）」を対象として－
- Venue: じんもんこん2017論文集 (IPSJ Symposium Series "Jinmonkon" 2017 - annual symposium on humanities and informatics), Information Processing Society of Japan
- Date/pages: 2017-12-02, pp. 45-52
- Language: Japanese
- Subject keywords as indexed: 訓点資料 kunten materials; 加点資料 katen materials; 尚書 Shousho; ヲコト点 wokototen; データ構造 data structure
- Related URI listed by NDL: https://ipsj.ixsq.nii.ac.jp/records/184723
- ORCID link shown in record: Tsutsumi Tomoaki (0000-0003-4964-802X)

## Abstract (Japanese, verbatim from IPSJ IxSQ)

本稿では，訓点資料の加点情報の計量と書き下し文の機械的な生成を目的として，資料に付与されたヲコト点などの加点情報を電子化する手法を検討した結果について述べる．具体的には「尚書(古活字版)」の1丁を提案した構造化方式で電子データとして記述し，統計処理を行った．1丁分の結果ではあるが，文字の頂点部に「ニ」や「テ」を表すヲコト点が集中していることが分かった．それ以外にも，加点の総数や位置の分布など基礎的な計量が行えることが確認でき，提案したデータ構造の有用性と課題が明らかになった．

## Database derived from this line of work

NINJAL 尚書（古活字版第三種本）訓点資料 加点情報データベース / Kunten database:
- URL: https://cid.ninjal.ac.jp/kunten-syousyo3/ (test page opened 2020-01-31 per its update history; public announcement recorded March 2020)
- Scope: National Institute for Japanese Language and Linguistics copy of the Shangshu, OLD MOVABLE-TYPE THIRD EDITION (古活字版第三種本), volumes 1 through 9.
- Function: electronic search of 加点 information - wokototen (including 音合符/訓合符 phonetic-and-gloss agreement marks and 声点 tone marks) and word-order marks (レ点 inversion point, 一二点 numbers); simple search by form/color; advanced AND-search by position + appearance + shape.
- Companion image source: 日本語史研究資料[国立国語研究所蔵] 尚書（古活字版第三種本）at https://dglb01.ninjal.ac.jp/ninjaldl/bunken.php?title=syousyo
- Project framework stated on the page: NIHU broad-collaboration project 「総合書物学」の構築 unit 「表記情報と書誌形態情報を加えた日本語歴史コーパスの精緻化」 (2016-present) and JSPS KAKENHI 17K18506 「漢文訓点資料の国際文書構造記述による共有化と書き下し文自動生成のための基礎研究」.

## Key points for the manuscript

1. This is the dedicated scholarly TREATMENT of an Edo-period PRINTED kanbun book carrying kunten that loop B07 lacked: a full symposium paper whose object is exactly 加点 on the Edo print, with a statistical method and a finding (points encoding kana "ni"/"te" cluster at character vertices).
2. Typological caveat to keep honest: 古活字版 = early-Edo MOVABLE TYPE, not woodblock. For woodblock 和刻本 with added reading aids, the specialist-journal anchor remains 鈴木功眞「寛永八年版和刻本大広益会玉篇の和訓」(訓点語と訓点資料 125, 2010; Kan'ei 8 = 1631 woodblock Dai-Kōeki-kai Gen), alongside his movable-type 倭玉篇 genealogy article (vol. 112, 2004). A monograph on hand-added points on Edo woodblocks was still not located (ยังไม่พบข้อมูลยืนยัน).
3. Continuity value: same team lineage (Tajima & Takada's 2013 wokototen digitization and point-transfer tool prototype, reported at JAET 16th congress) -> 2017 structured model -> 2020 public database. The Edo-print kunten record thus has a documented digital-humanities pipeline, useful when the book contrasts Korean jeomto digitization (Moon 2019 status paper; no AI recognizer) with Japanese practice.
4. The database's own framing sentence confirms scope honestly: "現在、電子化されている資料は...尚書（古活字版第三種本）の巻１～巻９です" - i.e., one title, nine volumes; do NOT overstate NINJAL coverage of kunten materials generally.
