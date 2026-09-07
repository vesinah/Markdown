# Loop A03 Report — German-Language Scholarship Survey
## Gurupañcāśikā (गुरुपञ्चाशिका, "Fifty Stanzas on the Guru") attributed to Aśvaghoṣa

Date of research: 2026-08-25
Scope: German-language scholarship and German institutional resources on the Gurupañcāśikā and the Vajrayāna guru-cult. RESEARCH ONLY; no Wikipedia citations.

---

## 1. Queries executed and their status

### 1.1 Websearch tool (Exa backend)
| Query | Status |
|---|---|
| `"Gurupañcāśikā" Aśvaghoṣa` | HTTP 429 (rate-limited), retried >10 times over ~40 min |
| `"Gurupancasika" Asvaghosa` | HTTP 429 |
| `Guru-Verehrung Tibet Buddhismus Vajrayana Lehrer-Verehrung Strophen` | HTTP 429 |
| `Indologie Tibetologie gurupancasika` | HTTP 429 |
| all further variants (`Gurupancasika`, `Szanto "Minor Vajrayana Texts"`, etc.) | HTTP 429 |

The websearch service returned HTTP 429 for every attempt during the entire session. Substitution strategy: direct fetches of German academic repositories (GRETIL, StaBiKat, DNB-SRU, K10plus-SRU, Menadoc), publisher search endpoints (Brill), and scholarly APIs (Crossref, Internet Archive).

### 1.2 Direct repository/API queries (successful)
| Target | Result |
|---|---|
| GRETIL html/xml/plaintext transformations | fetched, saved |
| brill.com/search?q=Gurupancasika | 5 hits |
| stabikat.de (Staatsbibliothek zu Berlin) CMD search `Gurupancasika` | 7 hits |
| services.dnb.de SRU (`tit=Gurupancasika`, `tit=Gurupanchaschika`, `tit=Gurupanchashika`) | 0 hits each (evidence saved) |
| sru.k10plus.de/gvk (`pica.all=Gurupancasika`) | 10 hits |
| sru.k10plus.de/gvk (`pica.all=Guru-Verehrung`; `pica.all=Fünfzig Strophen Guru`) | 0 hits each |
| api.crossref.org (`Gurupancasika Asvaghosa`; `Seyfort Ruegg guru devotion`; others) | partial results |
| archive.org advancedsearch (title searches) | BDRC Tibetan scans only |

### 1.3 Blocked/unreachable targets
- journals.ub.uni-heidelberg.de (WZKS/JIASS full-text search) — Anubis anti-bot proof-of-work wall
- portal.dnb.de web UI, swb.bsz-bw.de — Anubis wall (SRU APIs used instead where available)
- gso.gbv.de (legacy GBV OPAC) — connection refused
- menadoc.bibliothek.uni-halle.de/dmg (digitale Sammlungen der DMG incl. ZDMG) — search is JavaScript-only; no results extractable server-side
- JSTOR, academia.edu, oxford.academia.edu, puspika.com (dead), Wayback snapshot of puspika.com (none) 
- Google Books API, OpenAlex API, Semantic Scholar API — HTTP 429 throughout session
- Bing/DDG/Mojeek HTML scraping — bot detection (unrelated garbage results)

---

## 2. Sources (Chicago style, original language of source)

1. Aśvaghoṣa. *Gurupañcāśikā*. GRETIL e-text, transformed from `sa_azvaghoSa-gurupaJcAzikA.xml`. Göttingen Register of Electronic Texts in Indian Languages (GRETIL), Niedersächsische Staats- und Universitätsbibliothek Göttingen. Version of 2020-07-31. https://gretil.sub.uni-goettingen.de/gretil/corpustei/transformations/html/sa_azvaghoSa-gurupaJcAzikA.htm (plaintext: .../transformations/plaintext/sa_azvaghoSa-gurupaJcAzikA.txt).
2. Szántó, Péter-Dániel. "Tantric Prakaraṇas." In *Brill's Encyclopedia of Buddhism Online*, ed. Jonathan A. Silk, Richard Bowring, Vincent Eltschinger. Leiden: Brill, first online 01 Nov 2020. https://doi.org/10.1163/2467-9666_enbo_COM_0067.
3. Sferra, Francesco. "Kālacakra." In *Brill's Encyclopedia of Buddhism Online*, ed. Silk, Bowring, Eltschinger. Leiden: Brill. https://doi.org/10.1163/2467-9666_enbo_COM_0030.
4. Gray, David B. "Ritual Texts: Tibet: New Tantras (Gsar ma)." In *Brill's Encyclopedia of Buddhism Online*, ed. Silk, Bowring, Eltschinger. Leiden: Brill. https://doi.org/10.1163/2467-9666_enbo_COM_0060.
5. Williams-Oerberg, Elizabeth. "Buddhist Ritual as 'Connectionwork': Aesthetics and Technologies of Mediating Religious Belonging." *Numen* 68, no. 5–6 (2021): 488 ff. ISSN 0029-5973.
6. Bianchi, Ester. "The Combined Practice of Vinaya and Tantra in Nenghai's Path to Liberation." In *Sino-Tibetan Buddhism across the Ages*, ed. Ester Bianchi and Shen Weirong. Leiden: Brill, 2021. E-ISBN 9789004468375.
7. Mirnig, Nina, Péter-Dániel Szántó, and Michael Williams (eds.). *Puṣpikā: Contributions to Current Research in Indology, Volume I*. Oxford: Oxbow Books, 2013. [K10plus/GVK record (DE-627); contents per MARC 505]
8. Staatsbibliothek zu Berlin – Preußischer Kulturbesitz. StaBiKat catalogue, search "Gurupancasika" (Alle Wörter/XALL). https://stabikat.de/DB=1/SET=1/TTL=1/CMD?ACT=SRCHA&IKT=1016&SRT=YOP&TRM=Gurupancasika. Accessed 25 Aug 2026.
9. K10plus-Verbund (GVK), SRU endpoint `https://sru.k10plus.de/gvk`, query `pica.all=Gurupancasika`. Accessed 25 Aug 2026.
10. Deutsche Nationalbibliothek, SRU endpoint `https://services.dnb.de/sru/dnb`, query `tit=Gurupancasika` (and variants). Accessed 25 Aug 2026.
11. Yoritomi, Motohiro. "A Study on the Gurupañcasika attributed to Asvaghosa." *Journal of Indian and Buddhist Studies (Indogaku Bukkyōgaku Kenkyū)* 21 (1973). https://doi.org/10.4259/ibk.21.947.
12. Pāsādika, Bhikkhu. Review of David Seyfort Ruegg, *Ordre spirituel et ordre temporel dans la pensée bouddhique de l'Inde et du Tibet*. *Indo-Iranian Journal* 42 (1999). https://doi.org/10.1163/000000099124993347.

---

## 3. Findings with exact quotations

### 3.1 GRETIL (SUB Göttingen) — documentation and text (Source 1)

Header statements, quoted exactly:
> "This file is an html transformation of sa_azvaghoSa-gurupaJcAzikA.xml with a rudimentary header. For a more extensive header please refer to the source file."

> "Data entry: members of the Digital Sanskrit Buddhist Canon Input Project"

> "Date of this version: 2020-07-31"

> "Publisher: Göttingen Register of Electronic Texts in Indian Languages (GRETIL), SUB Göttingen"

Legacy header preserved in a `<note>` element, quoted exactly:
> "Asvaghosa: Gurupancasika / Input by members of the Sanskrit Buddhist Input Project. / With kind permission of the Digital Sanskrit Buddhist Canon Project of Nagarjuna Institute, Nepal and University of the West, Rosemead, California, USA (www.uwest.edu/sanskritcanon) / Sastra section, text no. 45 / The transliteration emulates the conventions of Nagari script. Therefore, many word boundaries are not marked by blanks."

Colophon of the e-text, quoted exactly:
> "// iti gurupañcāśikā samāptā // // kṛtiriyaṃ mahācāryāśvaghoṣasya //"

Opening verse (pūjā of the guru's feet as precondition of the teaching), quoted exactly:
> "śrīvajrasattvapadavīpratilambhahetornatvā yathāvidhi guroścaraṇāravindam / tatparyupāstiramalā bahutantragītā saṃkṣipya kathyata iyaṃ śṛṇutādareṇa // 1 //"

Assessment: GRETIL is the principal open-access digital Sanskrit witness of the text hosted at a German university library; it carries no German apparatus, commentary, or translation. The plain-text counterpart exists at `/gretil/corpustei/transformations/plaintext/sa_azvaghoSa-gurupaJcAzikA.txt`.

### 3.2 Brill's Encyclopedia of Buddhism Online (Sources 2–4) — current standard reference treatments

Szántó entry, search snippet quoted exactly (full text paywalled):
> "some now completely lost works), both must date from circa the 9th century ce . Aśvaghoṣa/Vāpilladatta's Gurupañcāśikā The Gurupañcāśikā (Fifty [Stanzas] on the Guru ; Bla ma lnga bcu pa ; D 3721/P 4544) is a short but very"

Significance: (a) section heading "Aśvaghoṣa/Vāpilladatta's Gurupañcāśikā" confirmed in the entry's Table of Contents; (b) dates the text "circa the 9th century ce"; (c) gives the canonical numbers D 3721/P 4544 and Tibetan title *Bla ma lnga bcu pa*; (d) signals a dual attribution "Aśvaghoṣa/Vāpilladatta".

Sferra (Kālacakra) entry, snippet quoted exactly:
> "importantly, in the light of a commentary composed by someone who is a bodhisattva (see e.g. LTṬ. 51–52). All three cite and comment on a few verses of the Gurupañcaśikā ( LTṬ. 106–107; HTPṬ. 1.19–33; VP. vol. II, 4–6), a text widespread at that time and considered authoritative, in order to explain"

Gray entry, snippet quoted exactly:
> "The practice of guru yoga appears to be a Tibetan innovation. South Asian tantric Buddhist traditions generally encouraged devotion to one's guru. Many tantras prescribe a devotional attitude, and this is discussed at length in a late Indian Buddhist work, the Gurupañcāśikā"

### 3.3 Dedicated manuscript study (Source 7)

From the K10plus/GVK MARC 505 contents note of *Puṣpikā I* (Mirnig/Szántó/Williams, 2013), chapter title quoted exactly:
> "Chapter 19: Minor Vajrayana texts II. A new manuscript of the Gurupancasika"

This is the most recent dedicated philological study of the text identified in this loop. Chapter-level authorship could not be confirmed online at access time (see gaps); the volume's editors are Nina Mirnig, Péter-Dániel Szántó and Michael Williams (MARC 700 fields: "Szanto, Peter-Daniel oth; Williams, Michael oth").

### 3.4 Staatsbibliothek zu Berlin — StaBiKat (Source 8), 7 records

Records as displayed (titles quoted exactly from the shortlist):

1. Nges-don-rgya-mtsho. *Bla-ma bnga-bcu-pavi sgrung-vgrel : rtogs-brjod nyis-brgya-pa*. Dharamshala, India: Bod-kyi dpe-mdzod-khang, 2025.
2. Blo-bzang-grags-pa (1357–1419). *bLa-ma lnga-bcu-pa rtsa-vgrel dang sang-sngags kyi tshul-khrims kyi rnam-bshad dngos-grub kyi snye-ma bcas*. Bylakuppe: Ser-smad dpe-mdzod-khang, 2021.
3. Chos-grags-rgya-mtsho. *Bla-ma lnga-bcu-pavi mchan-vgrel dang dam-tshig rgya-mtshovi rang-vgrel dang sdom-pa nyi-shu-pavi vgrel-pa dang rtsa-ltung gi rnam-bshad dang gdams-pa nyer-lnga-pa dang bshes-pavi spring-yig gi mchan-vgrel bcas*. Varanasi: Wva-nca ba-dzra bi-dyva dpe-mdzod-khang [Vajra Vidya Institute Library], 2011.
4. Asvaghosa. *Bla-ma lnga-bcu-pavi rtsa-vgrel rgya-bod mkhas-pavi gsung phyogs-gcig tu bsdebs-pa dngos-grub kun-vbyung*. Darjeeling: Rdor-gling Vbrug-sgar Dpe-mdzod-khang [Drukar Library], 2004.
5. Blo-bzang-grags-pa. *The fulfillment of all hopes : guru devotion in Tibetan Buddhism ; a commentary on Aʹsvaghoṣa's Gurupañcāśikā entitled Bla ma lnga bcu paʾi rnam bshad slob maʾi re ba kun skong shes bya ba*. Boston: Wisdom, 1999.
6. Ngag-dbang-dar-rgyas (*1925). *Fifty stanzas on the spiritual teacher : (Gurupanchashika ; bl-ma lnga-bcu-pa)*. 2., rev. ed. Dharamsala: Library of Tibetan Works and Archives, 1992.
7. Aśvaghoṣa (ca. 1./2. Jh.). *Gurupañcāśikā* [engl.]. Dharamsala, 1978.

Note: record 7 corresponds to the LTWA translation (English) cited by Williams-Oerberg as "Asvaghosa. 1975. Fifty Verses of Guru-Devotion ('Gurupancasika,' 'La-Ma Nga-Chu-Pa'). Geshe Ngawang Dhargyay (ed.). Dharamsala: Library of Tibetan Works and Archives" (Brill snippet, quoted above); the GVK additionally holds a 1976 printing ("Fifty verses of Guru-devotion (= Gurupañcāśikā, La-ma nga-chu-pa)") and a variant attributed to "Asaṅga" (1978, "With comm. given orally by Geshe Ngawang Dhargey"). Catalogue attribution variants observed: Aśvaghoṣa / Aryashura (GVK record 7: "Fifty stanzas on the spiritual teacher ... by Aryashura") / Asaṅga — evidence of unsettled authorship in trade/library data.

### 3.5 German national bibliography (DNB-SRU, Source 10)

`tit=Gurupancasika` → numberOfRecords: **0**; likewise 0 for `Gurupanchaschika`, `Gurupanchashika`. Evidence file saved (dnb_sru_tit_gurupancasika.xml, `<numberOfRecords>0</numberOfRecords>`).

Interpretation: no monograph, translation, or edition under any of these title strings is recorded in the Deutsche Nationalbibliothek (which covers German publishing output since 1913). This is strong negative evidence against a published standalone **German translation** of the Gurupañcāśikā.

### 3.6 German-language journal context (ZDMG, WZKS, IIJ)

- ZDMG (Menadoc/Digitale Sammlungen der DMG, Universitäts- und Landesbibliothek Halle): full-text search interface is JavaScript-only; no server-side result extraction possible → **ยังไม่พบ** (no German article on the Gurupañcāśikā verifiable in ZDMG within this loop).
- WZKS / Journal of Indian and Buddhist Studies Research at Heidelberg (journals.ub.uni-heidelberg.de): Anubis bot-wall prevented search → **ยังไม่พบ**.
- Indo-Iranian Journal (Brill): the Brill platform-wide search for "Gurupancasika" returned only the five items listed above; no direct IIJ research article on the text surfaced (only Pāsādika's review of Ruegg's French *Ordre spirituel et ordre temporel*, DOI 10.1163/000000099124993347, relevant to guru/teacher veneration in its political-religious dimension). Ruegg's own publication on spiritual order is French, not German → no German-language Ruegg treatment found (**ยังไม่พบ**).

### 3.7 Adjacent German-language item (general Aśvaghoṣa reception)

Crossref record, metadata quoted exactly:
> "(Ed.). (1973). 5. Dramatik (die ersten Dramen; Asvaghosa). Die Gesellschaftliche Entwicklung Im Alten Indien, Teil 5: Die Entwicklung Der Dichtung Im Alten Indien, 239–243. https://doi.org/10.1515/9783112544808-033"

This German contribution concerns Aśvaghoṣa's dramas, not the Gurupañcāśikā; included solely as evidence of the German Indological horizon on Aśvaghoṣa. It does not treat our text.

---

## 4. Synthesis: state of German-language scholarship

1. The scholarly literature on the Gurupañcāśikā itself is overwhelmingly English (Szántó; Gray; Sferra; Yoritomi) plus Tibetan and Japanese work. **No German-language monograph, article, or translation dedicated to the Gurupañcāśikā could be documented** in DNB, GVK/K10plus, StaBiKat, Brill, or Crossref during this session.
2. The strongest German-institutional footprint is infrastructural rather than interpretive: SUB Göttingen hosts the standardized GRETIL e-text (TEI-XML, HTML, plaintext) derived from the Digital Sanskrit Buddhist Canon Project (Nagarjuna Institute, Nepal / University of the West).
3. The guru-cult question in German-speaking scholarship is currently mediated through international collaborative reference works edited from German/Austrian institutions (Brill's Encyclopedia of Buddhism; Puṣpikā series with Vienna/Oxford editors Mirnig, Szántó, Williams; Eltschinger as ENBO source editor). Gray's formulation — guru yoga as "a Tibetan innovation," with the Gurupañcāśikā as the key late-Indian witness of guru devotion — frames the research problem in the terms the present project addresses.
4. Classical German Tibetology on lama worship (e.g., works of Helmut Hoffmann, Günter Grönbold) could not be verified against full-text indexes in this session because ZDMG/WZKS/OpenAlex were inaccessible; treat section 3.6 as an access gap, not necessarily a true absence.

## 5. Gaps / ยังไม่พบ (not found)

- German translation of the Gurupañcāśikā ("Übersetzung Gurupanchaschika"): **ยังไม่พบ** (DNB 0 hits across all transliterations; no evidence elsewhere).
- Any German-language research article devoted to the text (ZDMG, WZKS): **ยังไม่พบ** (sources inaccessible or empty).
- German publications by David Seyfort Ruegg on guru devotion: **ยังไม่พบ** (his relevant monograph is French; reviewed in IIJ 1999).
- Specific engagement by Helmut Eimer, Michael Hahn, Lambert Schmithausen, or Klaus-Josef Notzel with this text: **ยังไม่พบ** (could not be searched due to tool outages; requires follow-up with print indexes, e.g. ZDMG review organs).
- Chapter-level authorship of "Minor Vajrayana texts II. A new manuscript of the Gurupancasika" (Puṣpikā I, ch. 19): unverified online (JSTOR/OpenAlex blocked); check the printed volume before citation.
- Staatsbibliothek Berlin *Tibetica/Sanskrit manuscript catalogs* (Verzeichnis der orientalischen Handschriften in Deutschland etc.) mentioning the text: not searchable online in this session → **ยังไม่พบ**; recommend checking VOHD XVII (Tibetica) print volumes.

## 6. Files saved (documents/)

| File | Size | Content |
|---|---|---|
| gretil_sa_azvaghoSa-gurupaJcAzikA.htm | 18,585 B | GRETIL HTML transformation (full text, header, colophon) |
| gretil_sa_azvaghoSa-gurupaJcAzikA.xml | 17,410 B | GRETIL TEI-conformant XML |
| gretil_sa_azvaghoSa-gurupaJcAzikA_plaintext.txt | 8,399 B | GRETIL plaintext transformation |
| stabikat_gurupancasika.html | 35,812 B | SBB StaBiKat result list (7 records) |
| k10plus_gvk_sru_gurupancasika.xml | 69,765 B | K10plus GVK SRU response (10 MARC records) |
| dnb_sru_tit_gurupancasika.xml | 458 B | DNB SRU negative-result evidence (numberOfRecords=0) |
| crossref_gurupancasika.json | 10,876 B | Crossref API response (incl. Yoritomi 1973) |
| notes_brill_search_findings.md | — | Full extraction of the 5 Brill hits with exact snippets and DOIs |

## 7. Live URLs (verified accessible 2026-08-25)

- https://gretil.sub.uni-goettingen.de/gretil/corpustei/transformations/html/sa_azvaghoSa-gurupaJcAzikA.htm
- https://gretil.sub.uni-goettingen.de/gretil/corpustei/transformations/plaintext/sa_azvaghoSa-gurupaJcAzikA.txt
- https://gretil.sub.uni-goettingen.de/gretil/corpustei/sa_azvaghoSa-gurupaJcAzikA.xml
- https://brill.com/search?q=Gurupancasika
- https://referenceworks.brill.com/display/entries/ENBO/COM-0067.xml (paywalled full text)
- https://stabikat.de/DB=1/SET=1/TTL=1/CMD?ACT=SRCHA&IKT=1016&SRT=YOP&TRM=Gurupancasika
- https://sru.k10plus.de/gvk?version=1.1&operation=searchRetrieve&query=pica.all%3DGurupancasika&maximumRecords=30
- https://services.dnb.de/sru/dnb?version=1.1&operation=searchRetrieve&query=tit%3DGurupancasika&recordSchema=MARC21-xml
- https://doi.org/10.4259/ibk.21.947 (Yoritomi)
- https://doi.org/10.1163/2467-9666_enbo_COM_0067 / _COM_0030 / _COM_0060
