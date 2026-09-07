# Loop B05 (REDO) Report — Tsongkhapa, *Bla ma lnga bcu ba'i rnam bshad slob ma'i re ba kun skong*

Date: 2026-08-26. Nature of loop: REDO/verification. A previous B05 run had already bulk-downloaded artifacts into `documents/`; this run verified integrity, encoding, completeness, and located remaining evidence. ~15 tool calls used.

## 1. Primary goal status

### Tibetan text of the *rnam bshad* — PARTIALLY OBTAINED (OCR-grade only)
- Full-volume djvutxt dumps (archive.org derivatives) saved previously and verified this run:
  - `documents/bdrc-W22273-{1..17}_djvu.txt` (Labrang ed., 18 vols declared; vol 18 empty stub)
  - `documents/bdrc-W635-{1..17}_djvu.txt` (New Delhi Ngawang Gyaltsen/Shes rab dar gyas ling ed. 1978; vol 18 empty stub)
  - Both are real UTF-8 Tibetan Unicode (`tibchars` counts 130k–600k chars/vol), BUT the underlying OCR is low quality: e.g. `bdrc-W22273-7_djvu.txt` context reads "ཟླམ་ལྔ་བཅུ་བལས་ཀྱང་། བསམ་པདྲག་པའྱ་མབྲ…" — vowel signs and stacked letters corrupted; unusable as citable text without image collation.
- Title-string search across all 34 files for `བླ་མ་ལྔ`, `ལྔ་བཅུ`, `སློབ་མ`, `རྣམ་པར་བཤད`, `རྣམ་བཤད`, `རེ་བ`, `ཀུན་སྐོང` (results in `documents/volume-title-search-and-tails.txt`):
  - No clean occurrence of the full title `bla ma lnga bcu ba'i rnam bshad slob ma'i re ba kun skong` as a unit — ยังไม่พบ (blocked by OCR noise).
  - `ལྔ་བཅུ` hits in W22273 vol 6 and vol 7 are citations OF the root text inside other commentaries ("…བླ་མ་ལྔ་བཅུ་བལས་ཀྱང་…"), i.e. those volumes contain OTHER works quoting Gurupañcāśikā.
- Best structural evidence for locating the commentary: W30084 (Gansu Minzu 1999) MARC/DC on its archive.org item lists the volume's contents beginning `dkar chag--bla ma lnga bcu ba'i rnam bshad slob ma'i re ba kun skong--dge tshul gyi bslab bya gnam rtsed ldeng ma--…`, i.e. the commentary opens the first (ka) volume of that edition. IA item `bdrc-W30084` holds `bdrc-W30084_bdrc.zip` (454 MB, 567 images ≈ one volume) plus small metadata files already mirrored locally (`bdrc-W30084_{dc,marc,meta}.xml`, `ia-meta-bdrc-W30084.json`). The big zip was NOT downloaded (size rule).
- Conclusion: no machine-readable critical Tibetan text obtained; ยังไม่พบ clean etext. Images obtainable from the three IA items listed above.

### Chinese full text — OBTAINED (verified complete)
- `documents/sodargye-2002-shishi-wushisong-shi-fulltext-zh.txt` (71,786 B, 25,062 chars, valid UTF-8; earlier `?` display was console codepage only).
- Source: putixia.org wenku read_1888 pages 1–6 (fetched by prior run); raw HTML mirrors kept: `putixia-sodargye-shi1888-page{1..6}.html`.
- Verified END-to-END: translator's 译序 through 甲三、末义 colophon, ending exactly:
  > 公元二零零二年十一月一日 译毕于色达喇荣圣地 《事师五十颂释》全文阅读结束。
- Key colophon content (exact quote):
  > ……鉴于本论印度梵文无有注释，故比丘金刚持罗桑札巴(宗喀巴)主要依据《密集续》、《金刚鬘续》、《金刚藏庄严续》、《大幻化网》、《桑布札续》、《金刚帷幕续》、《金刚空行续》、《吉祥胜续》以及密宗之其它论典，于绕章寂静圣地如狮形之岩石处撰著成文，由通达内明三藏、尤为擅长因明辩才无碍、精进持戒之达玛仁钦记录。
  (= composed at Reting's lion-rock hermitage at the request of Kagyu patrons 敦哲嘉波瓦 and 札西仁钦, after repeated requests by 嘉秋华桑波; recorded/written down by Dharma Rinchen = Gyaltsab Darma Rinchen.)
- Translator's own statement of source edition (译序, exact quote): 「故而我今依据甘肃民族出版社出版的《宗喀巴大师文集》中的版本将此论翻译成汉文。」 — confirms Sodargye (completed 2002-11-01, Larung Gar) translated FROM the Gansu Minzu W30084-type edition.

### 湯薌銘 translation (task 4) — ALREADY COMPLETE in repo
- `..\loop_A05\documents\事師法五十頌釋_宗喀巴造釋_湯薌銘等譯.txt` (20,772 chars) re-read and tail-checked: runs from homage (「敬禮妙音菩薩」) and full outline (今釋此頌有三：一、釋起始所作，二、釋正安立處，三、釋最後所作) through final dedication verses and colophon ending 「……如是願云。」 It is NOT partial; treat as full text. Its colophon likewise places composition 「於藏地……淨隱巖獅子院」 (Reting).

## 2. BDRC metadata (JSON-LD)
- W22273.jsonld fetched fresh this run: `@type ImageInstance/DigitalInstance`, 18 volumes `bdr:I1KG2236 … bdr:I1KG2253`, `instanceReproductionOf bdr:MW22273`, `instanceOf bdr:WA20510`, scan note "Scanned at TBRC … Comments: 2009", thumbnail service `I1KG22360003.jpg`. Mirrors: `bdrc_W22273.json`, `bdrc_WA20510.json`; W635 mirror `bdrc_W635.json`; W30084 mirror `bdrc_W30084.json`.
- Per-volume mapping of the rnam bshad within W22273/W635: ยังไม่พบ (would require per-volume outline API or better OCR).

## 3. Archive.org scans (task 2)
Items confirmed present via `ia-meta-*.json`: `bdrc-W22273`, `bdrc-W635`, `bdrc-W30084` (all with `_djvu.txt` derivatives already pulled), plus `ia-meta-bdrc-I1KG1065.json`, `ia-meta-bdrc-I5798.json` (2-byte empties). Advancedsearch endpoint itself was superseded by direct metadata fetches; identifiers recorded above.

## 4. Jetsun Drakpa Gyaltsen W3CN6661 (task 6)
- `ia-meta-bdrc-W3CN6661.json` parsed: Lhasa 2012 book; PDF derivative exists but `"private":true` (lending-restricted); `_djvu.txt` request returned `401 Authorization Required` (saved as `test-w3cn6661-djvu.txt`). Text files downloadable: none public. ยังไม่พบ accessible text.

## 5. Sparham translation (task 5)
- wisdompubs.org product pages (`/book/fifty-verses-guru-devotion`, `-0`) returned HTTP 526 twice this session; websearch provider returned HTTP 429 twice. TOC/structure: ยังไม่พบ online this loop. Known offline: Wisdom 1999 (as "Illumination of the Intent"? no—1999 "Fifty Verses of Guru Devotion") and 2016 revised ed.; structure per prior loops: intro + verse-by-verse translation of root + Tsongkhapa's auto-commentary. Not independently verified here — flagged as residual gap.

## 6. Files in loop_B05/documents (this REDO added `volume-title-search-and-tails.txt`)
Verification-relevant: 34 × `bdrc-W*_djvu.txt`; `sodargye-2002-shishi-wushisong-shi-fulltext-zh.txt`; 6 × putixia HTML; `ia-meta-bdrc-{W22273,W635,W30084,W3CN6661}.json`; `bdrc_W{22273,635,30084}.json`, `bdrc_WA20510.json`; `bdrc-W30084_{dc,marc,meta}.xml`; OCR probes (`ocr-scan-{results,counts,contexts}.txt`, `probe-grepapp-re-ba-kun-skong.json`, `probe-table-Wother-W30084.json`, `test-w635-vol1-djvu.txt`, `test-w3cn6661-djvu.txt`).

## 7. Gaps / next actions
1. Clean Tibetan text of the rnam bshad: pull `bdrc-W30084_bdrc.zip` vol-ka images or BDRC IIIF images of I1KG2236–53 and collate against Sodargye/Tang/Sparham to find folio range; ACIP/OpenPecha etexts checked in B03 did not contain it.
2. Exact volume IDs holding the rnam bshad in W22273/W635: query BDRC outline (MW22273 → item → volume chain) or visual inspection of vol openings.
3. W3CN6661 (Jetsun Drakpa comm.) text: lending-restricted on IA; try WorldCat/library scan or BDRC scan node outside IA.
4. Sparham 2016 TOC: retry wisdompubs when reachable, or Google Books preview.
