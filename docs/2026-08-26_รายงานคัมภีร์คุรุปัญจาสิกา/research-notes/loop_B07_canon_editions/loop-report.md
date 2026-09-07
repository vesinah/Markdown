# Loop Report B07: Canonical Edition Survey — bla ma lnga bcu pa (Gurupañcāśikā)

> Loop type: Canon/Edition Verification | Date: 2026-08-26 | Status: COMPLETE
> Working area: `research-notes/loop_B07_canon_editions/documents/`
> Target text: rKTs **T2543** / Derge **D3721** (Toh 3721) / Narthang **N3337** / Peking **Q4544** / Golden **GT2546** / Chinese T1687

---

## 1. rKTs catalog entry (T2543) — full edition survey [VERIFIED]

Source: `http://rkts.org/rkts1/data/catalogs/T/T2543.xml` (archived as `rkts_T2543_bla_ma_lnga_bcu_pa.xml`; located via search page `rkts_search_bla_ma_lnga_bcu_pa.html`). Note: the old-style URL `http://rkts.org/cat.php?id=2543` returns an empty shell page — the correct internal id is the composite string `T2543` on the new site (`rkts1/pages/detail.html?id=...`, data at `rkts1/data/catalogs/{letter}/{id}.xml`).

rKTs records SIX edition entries under one work:

| rKTs ref | Edition (BDRC setid, identified via ldspdi jsonld) | Location | Sanskrit title (rKTs) |
|:---|:---|:---|:---|
| **A4663** | dpe bsdur ma Tanjur (中華大藏經·丹珠爾·對勘本), MW1PD95844, Beijing: krung go'i bod rig pa'i dpe skrun khang | vol 1PD95886, pp. 593.1–599.1 | gu ru pany+tsa biM shi ka |
| **C3687** | Cone Tanjur, MW1GS66030 | sec rgyud, ff. 9b7–11b7 | — |
| **D3721** | Derge Tanjur MW23703 (+ blockprint scans MW2KG209989, MW2KG5013) | sec rgyud, ff. 10a2–12a2 | gu ru pany+tsa biM shi ka |
| **G2546** | Golden Tanjur (gser bris ma), MW23702 | sec rgyud 'grel, ff. 297a3–299b1 | gu ru pany+tsa bi shi ka |
| **N3337** | Narthang Tanjur, MW22704 | sec rgyud 'grel, ff. 244a2–246a4 | gu ru pany+tsa bi shi ka |
| **Q4544** | **Peking Tanjur (pe cing pho brang)**, MW1KG13126 | sec rgyud 'grel, ff. 242b7–245a3 | gu ru pany+tsa bi shi ka |

Colophons recorded by rKTs (verbatim):

- **D3721**: `bla ma lnga bcu pa slob dpon chen po rta dbyangs kyis mdzad pa rdzogs so`
- **N3337 / Q4544**: `bla ma lnga bcu pa slob dpon chen po rta dbyangs kyis mdzad pa rdzogs so/ /rgya gar gyi mkhan po pad+ma kA ra warma dang /zhu chen gyi lo tsA ba dge slong rin chen bzang pos bsgyur cing zhus te gtan la phab pa'o`
- **G2546**: same as N/Q with closing `//`
- **A4663**: same long form (with `pad+ma kA ra war ma` spelling)

Translators (rKTs person links, D-entry): `rgya gar gyi mkhan po pad+mA ka ra warma` (bdr:P8194), `zhu chen gyi lo tsA ba dge slong rin chen bzang po` (bdr:P753); author `slob dpon chen po rta dbyangs` (bdr:P7588). The Q-entry repeats author `rta dbyangs/(aśvaghoṣa)`.

Section placement note: rKTs locates the text in the **rgyud / rgyud 'grel** section of these editions (not sna tshogs).

## 2. Peking number RESOLVED

Three candidate citations found in literature were tested against rKTs + BDRC:

1. **"Peking Tanjur no. 5131?"** — NOT SUPPORTED. rKTs's sole Peking reference for this work is **Q4544**; no rKTs record connects 5131 to bla ma lnga bcu pa. Treat "P5131" as a garbled or foreign citation (could not be matched to any rKTs entry for this text; identity of Q5131 left unresolved — websearch was rate-limited throughout this loop).
2. **"T2543"** — this is the **rKTs database work number** (rKTs's own Tanjur sequence), NOT an edition number. Correct usage: "rKTs T2543".
3. **"P4544"/"Q4544"** — CORRECT and standard. rKTs uses siglum **Q4544** for the Peking Tanjur entry (Suzuki-standardized numbering; "P" vs "Q" is only a prefix convention). Cross-checked physically: Q4544 → BDRC MW1KG13126 (*bstan 'gyur (pe cing)*, pe cing pho brang print, 224 vols), folios 242b7–245a3, rgyud 'grel section.

**Recommendation for the report:** cite as "Peking (Suzuki) no. 4544 (rKTs Q4544; D3721)".

## 3. BDRC check — MW27883_AD89CC [VERIFIED + new finding]

`https://ldspdi.bdrc.io/resource/MW27883_AD89CC.jsonld` (archived):

- Text: `bla ma lnga bcu pa/` (skos:prefLabel, bo-x-ewts), PartTypeText, partTreeIndex `23.3.1.1.1`
- ContentLocation: instance **bdr:W27883**, volume **23**, pages **666–671**, statement `ff. 1v-4r` → **the "rgyud sde kun btus glog klad par ma vol.23 pp.666–671" datum is CONFIRMED**
- ⚠️ AuthorshipStatement: **`"written by slob dpon b+ha wi lha"`** (= Bhavila/Bhavīla) — i.e., the rgyud sde kun btus recension carries a DIFFERENT author attribution from the six Tengyur colophons (rta dbyangs/Aśvaghoṣa). This likely feeds the modern Tibetan-derived Chinese attribution 巴布拉尊者 (cf. loop A07 §3: 馬鳴 vs 巴布拉 vs 拔毗天). 拔毗天 ≈ Bhāviveka is a separate name again; b+ha wi lha = Bha-vi-la supports reading 巴布拉 < Tibetan "Bha bu la / Bha wi la".

Instance W27883 identified: `rgyud sde kun btus/（glog klad par ma/）`, 32 vols, Kathmandu: Sachen International (guru lama), published **2004**, script dbu can, scanned from computer-set output (India); reproduction of MW27883.

BDRC Work WA0XLEE57C8CA491F ("bla ma lnga bcu pa", the kun-btus recension lineage) has FIVE instances:

| Instance | Collection | Location |
|:---|:---|:---|
| MW1KG1011_EE57C8 | W1KG1011 | ff. 28v–31r (pp. 54–59), partTreeIndex 1.1.10 |
| MW1NLM1320_C4B2D8 | W1NLM1320 | — |
| MW1NLM2578_708138 | W1NLM2578 | — |
| MW27883_AD89CC | W27883 (glog klad par ma) | vol. 23, pp. 666–671 |
| MW1KG13617_18DD1F | W1KG13617 | — |

Open question flagged: whether WA0XLEE57C8CA491F (kun-btus recension, Bhavila attribution) is textually identical to D3721 or a distinct redaction — needs collation of W27883 vol.23 pp.666–671 against Derge ff.10a2–12a2 before the main report asserts equivalence.

## 4. Other editions / collections notes

- **Phugbrag**: Kangyur-only edition (no Tanjur) — cannot contain this Tengyur text; no rKTs entry expected. Not applicable.
- **Drepung (dga' ldan phun tshogs gling) Tanjur**: not included in rKTs's T2543 entry; remains unchecked for this text.
- Old rKTs shell page (`cat.php?id=2543`) listed "**Mongolian Canon**" under additional miscellaneous collections — suggests a Mongolian Tanjur witness exists in rKTs scope but without location data in that legacy view.
- rKTs collection key (from `rkts1/data/general/collections.json`, archived excerpt): "A" = Pedurma/dpe bsDur ma comparative edition (base Derge, collated vs Yongle/Lithang/Peking/Narthang/Cone/Urga/Lhasa).

## 5. Modern collections

- **rgyud sde kun btus glog klad par ma** (Sachen International, Kathmandu 2004, 32 vols): vol. 23, pp. 666–671 (ff. 1v–4r) — VERIFIED via BDRC JSON-LD (see §3).
- dpe bsdur ma Tanjur (Zhonghua dazangjing Danzhu'er duikan ben, Beijing): entry A4663, pp. 593–599 — modern scholarly collation base for critical text.

## TL;DR

- Six canonical witnesses recorded (A4663, C3687, D3721, G2546, N3337, **Q4544**) — all colophon-attributed to Aśvaghoṣa (rta dbyangs), trans. Padmākaravarma + Rinchen bzang po.
- Standard Peking citation = **Q4544 / P4544 (Suzuki no. 4544)**; "T2543" is only the rKTs id; "Peking 5131" finds no support.
- glog klad par ma vol.23 pp.666–671 confirmed; its recension is attributed by BDRC to **slob dpon Bhavila** (source of the 巴布拉 tradition?) — new lead for the authorship problem.
