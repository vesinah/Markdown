# Nanjō catalogue entry #1080 — verification record (Loop B04, 2026-08-26)

## 1. What was to be verified

Task brief: "Nanjō catalog entry #1080: verify via taishozo-teihonkohon.toyobunko-lab.jp/item/T1687_01_001 (saved in A06?) — confirm title/byline there."

## 2. Prior verification found in loop_A06 (already on disk)

`loop_A06/loop-report.md`, §3 "TEXTUAL TRANSMISSION DATA FOUND (Japanese-hosted databases)", records verbatim:

> Taishō collation database (東洋文庫 lab): 『大正新脩大蔵経』底本・校本データベース entry for 事師法五十頌 records: 名称〔日〕Ji-shi-hō-go-jū-ju; 訳者 宋 日稱等譯; Nj 1080 (Nanjō 1080); base text 麗(高麗蔵), collation 宋元明縮成卍. URL: https://taishozo-teihonkohon.toyobunko-lab.jp/item/T1687_01_001

So Nanjō #1080 = 事師法五十頌 (Shih-shih-fa wu-shih sung), translator credit 宋 日稱等譯, and — critically for the stemma — the 勘同目録 designates the 高麗蔵 as BASE text with Song/Yuan/Ming (+縮刷, 卍續) as nominal collation targets. This dovetails exactly with the Taishō collation note 「此頌宋本元本宮本俱闕」 recorded in loop A05 §2: the Song/Yuan editions are LISTED as collation texts in the Kan'dō mokuroku but actually LACK the text.

## 3. Re-fetch attempt this loop

- GET https://taishozo-teihonkohon.toyobunko-lab.jp/item/T1687_01_001 → HTTP 404
- GET https://taishozo-teihonkohon.toyobunko-lab.jp/item/T1687 → HTTP 404
- Site root https://taishozo-teihonkohon.toyobunko-lab.jp/ → loads normally; news banner includes:
  - 「2026-08-21 Notice of Temporary Suspension Due to Server Maintenance」
  - 「2026-05-05 Renewal of the Taishō Tripiṭaka Base and Collation Texts Database」

Assessment: the deep-link route changed or is suspended after the May 2026 renewal / August maintenance window; the site itself is live. The A06-saved record therefore remains the citable verification of Nanjō #1080; a fresh capture requires either the renewed search UI ("Search by Work" → T1687) interactively, or a retry after maintenance ends.

## 4. Independent cross-checks of the byline/title already held locally

- CBETA XML TEI header (loop_A05/documents/CBETA_T32n1687.xml): `<title>Taishō Tripiṭaka, Electronic version, No. 1687 事師法五十頌</title>`; `<author>馬鳴菩薩集 宋 日稱等譯</author>`; full byline line of the text itself: 「西天譯經三藏朝散大夫試鴻臚少卿宣梵大師賜紫沙門臣日稱等奉　詔譯」.
- Koryŏ block incipit (K41n1493, via KABC): 「馬嗚菩薩集 西天譯經三藏朝散大夫試鴻臚少卿宣梵大師賜紫沙門臣日稱等奉 詔譯」.
- Kyoto DB and Kanripo entries recorded in A06 §3 agree (T32n1687, 論集部, 1巻).

VERDICT: Nanjō #1080 confirmed = T32n1687 事師法五十頌, 馬鳴菩薩集, 日稱等譯; base text 麗(高麗蔵).
