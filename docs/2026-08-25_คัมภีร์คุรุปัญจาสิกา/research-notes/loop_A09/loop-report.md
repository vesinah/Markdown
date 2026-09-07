# Loop A09 Report — Tibetan Version of the Gurupañcāśikā (བླ་མ་ལྔ་བཅུ་པ་, bla ma lnga bcu pa)

Date: 2026-08-25. Mission: confirm Tohoku number, obtain full Tibetan text, establish translation history/colophon facts, locate scans.

---

## 1. Tohoku/Derge number — CONFIRMED: D3721 (Derge Tanjur), P4544 (Peking)

Multiple independent authoritative sources agree on **Tohoku 3721**:

| Source | Evidence |
|---|---|
| Esukhia Digital Derge Tengyur (GitHub) | Text begins at marker `{D3721}` in volume file `079` (rgyud 'grel section, volume letter ཚུ); next text begins `{D3722}` |
| BDRC linked data | `bdr:MW23703_3721`, `skos:prefLabel "bla ma lnga bcu pa/"@bo-x-ewts`; content location: **volume 79**, of W23703 (Derge Tengyur instance, 213 volumes) |
| BDRC Work WA0RT2543 | Lists canonical witnesses: `MW1KG13126_4544` (**Peking = P4544**), `MW1PD95844_2419` (Derge Tanjur scan), `MW22704_3337`, `MW23702_2546`, `MW23703_3721` (Derge), `MW2KG5015_3337` |
| rywiki.tsadra.org | "Fifty Verses on Devotion to the Master, by Ashvagosha, (T 3721)" |
| 84000 | Published English translation titled "Toh 3721: Fifty Verses on Guru Devotion" (https://84000.co/translation/toh3721) |
| Rigpa Wiki | "The Tibetan translation is found in the tantra section of the Tengyur, Toh 3721." |

Physical placement (Derge): **volume 79 (ཚུ), folios 10a.2–12a.2** (Esukhia v1905 text; BDRC contentLocation: volume 79, pages 21–25). The text is immediately followed in the same volume by its auto-commentary **D3722** (Gurvārādhana-pañjikā; བླ་མའི་བསྙེན་བཀུར་གྱི་དཀའ་འགྲེལ།).

Title colophon (Derge, extracted verbatim):
> གུ་རུ་པཉྩ་བིཾ་ཤི་ཀ །བོད་སྐད་དུ། བླ་མ་ལྔ་བཅུ་པ། བཅོམ་ལྡན་འདས་རྡོ་རྗེ་སེམས་དཔའ་ལ་ཕྱག་འཚལ་ལོ།
> ("In Indian language guru-pañca-viṃśika; in Tibetan bla ma lnga bcu pa; homage to the Blessed One Vajrasattva.")

BDRC records the Sanskrit incipit title as `gu ru pany+tsa biM shi ka`.

## 2. FULL TIBETAN TEXT — OBTAINED

Primary deliverable achieved. Complete Derge Tanjur text (opening formula, all 50 stanzas, dedication verse, composition colophon, translation colophon) extracted from the Esukhia/Barom Theksum Choling digital Derge Tengyur (UTF-8, Unicode, NFD).

Files:
- `documents/D3721_derge_tengyur_bo_unicode_clean.txt` — clean continuous Unicode text (~17.7 KB)
- `documents/D3721_derge_tengyur_bo_unicode_folios.txt` — same with Derge folio/line markers ([10a.2] … [12a.2]) for citation
- `documents/D3721_derge_tengyur_raw_extraction_bo.txt` — raw line-based extraction (working copy)
- `documents/source_derge_tengyur_vol79_chu_esukhia_v1905_bo.txt` — complete source volume 79 as downloaded
- Bonus parallel: `documents/sanskrit_gurupancasika_GRETIL_bsa045.htm` — full Sanskrit Gurupañcāśikā (GRETIL/Digital Sanskrit Buddhist Canon), ending "// kṛtiriyaṃ mahācāryāśvaghoṣasya //"

Completeness check against the Sanskrit (GRETIL) shows verse-for-verse correspondence (e.g., Skt v.10 `gurupādābhinindakaḥ` ↔ Tib. སློབ་དཔོན་ལ་ནི་སྨོད་པ་དེ; Skt v.49 `mūlāpattīś caturdaśa` ↔ Tib. རྩ་བའི་ལྟུང་བ་བཅུ་བཞི་ནི; both end with a dedication verse and closing colophons). Text verified from `{D3721}` to just before `{D3722}`.

## 3. Translation history / colophon facts (exact quotes)

**Composition colophon** (Derge, fol. 12a.1, extracted verbatim):
> བླ་མ་ལྔ་བཅུ་པ་སློབ་དཔོན་ཆེན་པོ་རྟ་དབྱངས་ཀྱིས་མཛད་པ་རྫོགས་སོ།། །།
> ("The bla ma lnga bcu pa composed by the great ācārya Rta dbyangs [Aśvaghoṣa] is complete.")

**Translation colophon** (Derge, fols. 12a.1–12a.2, extracted verbatim):
> རྒྱ་གར་གྱི་མཁན་པོ་པདྨཱ་ཀ་ར་ཝརྨ་དང་། ཞུ་ཆེན་གྱི་ལོ་ཙཱ་བ་དགེ་སློང་རིན་ཆེན་བཟང་པོས་བསྒྱུར་ཅིང་ཞུས་ཏེ་གཏན་ལ་ཕབ་པའོ། །
> ("Translated, revised and settled by the Indian upādhyāya Padmākaravarman and the chief editor-translator [zhu chen gyi lo tsA ba], the monk Rin chen bzang po.")

BDRC's record of the **Peking edition (MW1KG13126_4544, vol. 74, p. 488)** carries the identical colophon in EWTS:
> "bla ma lnga bcu pa slob dpon chen po rta dbyangs kyis mdzad pa rdzogs so/_/rgya gar gyi mkhan po pad+ma kA ra warma dang /zhu chen gyi lo tsA ba dge slong rin chen bzang pos bsgyur cing zhus te gtan la phab pa'o"

Facts established:
- Translator: **Rin chen bzang po (Rinchen Zangpo, 958–1055)** — BDRC P753, prefLabel `lo chen rin chen bzang po/`, note "dates: 958-1055", sameAs Treasury of Lives TOLP10199, Wikidata Q967864. Role recorded by BDRC ATII as `lo tsA ba` (translator).
- Indian collaborator: Pandita **Padmākaravarman** (`pad+ma kA ra warma`).
- **No Atiśa connection in the colophons**: neither D3721 nor P4544 names Atiśa as translator or reviser. The Rin-chen-bzang-po attribution places the translation in the late 10th–early 11th c., i.e., available before/at Atiśa's arrival in Tibet (1042). No source found in this loop claiming Atiśa translated it.
- Authorship caveat: BDRC Work WA0RT2543 credits main author P7588, whose primary name is `rta dbyangs/` but whose catalog prefLabel is `slob dpon dpa' bo/` = "**Āryaśūra?**" (Sanskrit other-name recorded as "Aśvaghoṣa ?"), floruit 600–699, per the Authors and Translators Identification Initiative (ATII, Khyentse Center, Hamburg). Rigpa Wiki notes: "a newly found Sanskrit manuscript has the author as a certain Vapilladatta (Skt. Vāpilladatta). This closely echoes the name Tsongkhapa has given: Bhabilha." See Peter-Daniel Szanto, "Minor Vajrayāna text II. A new manuscript of the Gurupañcāśikā" (2013). The traditional Tibetan attribution remains rta dbyangs/Aśvaghoṣa.
- Reception context: Tsongkhapa's commentary exists in English as *The Fulfillment of All Hopes* (Wisdom, 1999); earliest English rendering from Tibetan: *Fifty verses of guru-devotion = Gurupañcāśikā = La-ma nga-chu-pa*, Library of Tibetan Works & Archives, Dharamsala, 1976, prepared by Geshe Ngawang Dhargyey et al. (HathiTrust Record 006119067).
- D3722 commentary fact: per the 17th Karmapa's 2025 Arya Kshema teaching (kagyuoffice.org), the *Gurvārādhana-pañjikā* was "translated from Sanskrit into Tibetan by Gö Lotsawa Shonnu Pal."

## 4. Scans

- Derge Tengyur (W23703, Delhi print reproducing Derge), **volume 79 = BDRC I1395** (`bdo:volumeNumber 79` confirmed via ldspdi); IIIF pattern: `https://iiif.bdrc.io/bdr:I1395::<seq>.tif`
- Original Derge Tanjur scan set: W1PD95844 (text record there: MW1PD95844_2419)
- Esukhia proofreading scan base: W2KG209989; Karmapa-edition fallback: W23703 (per repo README)
- archive.org/details/bdrc-W3CN6661 = MODERN commentary only: "Bla ma lnga bcu dang rtsa ltung bcu bzhi'i rnam bshad", 366 p., "with Chinese translation by Sonam Chozom", BDRC electronic reproduction — not the root text.

## 5. Sources checked with negative/unavailable results

- Buddhist Canons Research Database (aibs.columbia.edu): JS/Nuxt app; API probes returned SPA shell only. ยังไม่พบ machine-readable record via HTTP.
- Asian Legacy Library (library.asianlegacylibrary.org): search is client-rendered; API probe returned shell. ยังไม่พบ downloadable text for this title via HTTP.
- 84000: translation page exists (Toh 3721) but site is client-rendered; PDF endpoint patterns returned HTML/400. Translator credit not captured. (ยังไม่พบ translator name)
- rKTs: `http://purl.rkts.eu/resource/WTT2543` → 404. (rkts sameAs link recorded in BDRC TTL)
- Direct Tohoku University online catalog entry: not reachable online; the printed Tohoku catalogue is scanned on BDRC as W1PD95677 (single-volume scan record saved). Verification instead rests on Esukhia markers + BDRC numbering.

## 6. Files saved (D:\01_APP\Research\output\2026-08-25_คัมภีร์คุรุปัญจาสิกา\research-notes\loop_A09\documents\)

- D3721_derge_tengyur_bo_unicode_clean.txt ← **full Tibetan text**
- D3721_derge_tengyur_bo_unicode_folios.txt ← full Tibetan text with folio markers
- D3721_derge_tengyur_raw_extraction_bo.txt
- source_derge_tengyur_vol79_chu_esukhia_v1905_bo.txt (entire vol. ཚུ)
- sanskrit_gurupancasika_GRETIL_bsa045.htm (full Sanskrit)
- bdrc_MW23703_3721.ttl, bdrc_W23703.ttl, bdrc_I1395_vol79_W23703.ttl, bdrc_MW1KG13126_4544.ttl (Peking), bdrc_WA0RT2543.ttl (Work), bdrc_P7588.ttl (author), bdrc_P753.ttl (Rinchen Zangpo), bdrc_R0ER0019.ttl/R0ER0026.ttl (roles), bdrc_W1PD95677_tohokucatalog.ttl
- archive_W3CN6661_meta.json
- 84000_toh3721_page.html (page shell w/ metadata tags)

## 7. Live URLs

- https://github.com/Esukhia/derge-tengyur (text source; release deten_vol_txt_v1905)
- https://library.bdrc.io/show/bdr:MW23703_3721 ; https://ldspdi.bdrc.io/resource/MW23703_3721.ttl
- https://ldspdi.bdrc.io/resource/WA0RT2543.ttl ; .../P7588.ttl ; .../P753.ttl ; .../MW1KG13126_4544.ttl ; .../I1395.ttl ; .../W1PD95677.ttl
- https://84000.co/translation/toh3721
- https://rywiki.tsadra.org/index.php/bla_ma_lnga_bcu_pa
- https://www.rigpawiki.org/index.php?title=Fifty_Stanzas_on_Following_a_Teacher
- https://zenodo.org/records/6476319/files/bsa045_u.htm ; https://gretil.sub.uni-goettingen.de/gretil/1_sanskr/6_sastra/3_phil/buddh/bsa045_u.htm
- https://archive.org/details/bdrc-W3CN6661
- https://catalog.hathitrust.org/Record/006119067
- https://kagyuoffice.org/fifty-verses-on-the-guru-day-one/

## 8. Remaining gaps

- Wylie transliteration file not generated (Unicode obtained; conversion pending if needed)
- AIBS database record and ALL catalog entry not retrievable programmatically (JS apps)
- 84000 translator credit and official PDF for Toh 3721 not retrieved
- rKTs Vienna record unreachable (404 on purl.rkts.eu path)
- Identity of editions W22704_3337, W23702_2546, W2KG5015_3337 not yet expanded (listed in WA0RT2543)
