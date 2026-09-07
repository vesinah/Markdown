# Lao vohāra manuscripts — item-level records via the CrossAsia ITR DataCite inventory

Collected: 2026-08-26 (Loop C07, Phase C). Closes loop_B11 Gap 4 residual: B11 documented the DLLM catalogue design but had zero concrete vohara item records.

## Method

The DLLM (Digital Library of Lao Manuscripts; National Library of Laos + University of Passau + Staatsbibliothek zu Berlin, hosted on CrossAsia) mints DataCite DOIs under prefix 10.57781 for digitized items. The CrossAsia item pages and IIIF endpoints sit behind an Anubis bot wall, but the DataCite API is open. Query used: https://api.datacite.org/dois?query=titles.title:(vohan OR vohara) — returned exactly 33 items (metadata pulled 2026-08-26). Each record carries: DOI, transliterated title, original-script title for some items, collection identifier (dllm_NNNNN or lanna_NNNN), PLMP microfilm code number, IIIF manifest URL, publisher (Staatsbibliothek zu Berlin | CrossAsia), license CC BY-NC 4.0, publicationYear 2010 (= digitization/microfilm year) while DOIs were minted 2022.

This confirms at item level that vohāra/vohan is a live genre term in the Lao collections — the Help page states the Ancillary Terms search option includes translatory renderings such as śabda/sap, nissaya/nisai, vohara/vohan among approximately 35 supplementary title terms (Hundius & Wharton 2011, Journal of Lao Studies 2(2), https://www.laostudies.org/system/files/subscription/JLS-v2-i2-Nov2011-hundius-wharton.pdf, p. of the section on inventory design; full PDF harvested this loop).

## Exemplar item records (full metadata)

1. Vohan boek pha net ໂວຫານເບີກພະເນຕ
   - DOI: https://doi.org/10.57781/rmg5-9m79 ; DLLM id dllm_10454 ; PLMP code 06018510076_01 ; manifest https://iiif.crossasia.org/s/dllm/manifests/21943 ; CC BY-NC 4.0
2. Vohan pattimok
   - DOI: https://doi.org/10.57781/ybse-bj89 ; dllm_10453 ; PLMP code 08060101001_03 ; manifest https://iiif.crossasia.org/s/dllm/manifests/30953 — a vohara on the Patimokkha (Vinaya)
3. Vohan singkhala sut
   - DOI: https://doi.org/10.57781/9tfd-sr87 ; lanna_887 ; code 070102018_00 ; manifest https://iiif.crossasia.org/s/lanna/manifests/555693 — held with Chiang Mai University Library as co-holder (DataCite creator list: National Library of Laos; Staatsbibliothek zu Berlin | CrossAsia; Chiang Mai University Library)
   - Second witness: https://doi.org/10.57781/j4ze-8r58 ; lanna_879 ; code 070102010_00 ; manifest https://iiif.crossasia.org/s/lanna/manifests/555685
4. Pali vohan
   - DOI: https://doi.org/10.57781/mztb-6x74 ; dllm_10434 ; PLMP code 06018504343_00 ; manifest https://iiif.crossasia.org/s/dllm/manifests/21140
5. Vohan phutthakhun
   - DOI: https://doi.org/10.57781/ya9j-0m33 ; dllm_10443 ; PLMP code 16101610005_00 ; manifest https://iiif.crossasia.org/s/dllm/manifests/25923

Other titles in the 33-item set: Vohan thammathetsana (four witnesses: dllm_10441/10447/10448/10449 plus dllm_06411 Vohan thammathetsana thevata sangnyutta banha); Vohan itipiso / Vohan itipiso thetsana (dllm_10858); Vohan phimpha theli phikkhuni x2 (dllm_07706/07707); Vohan avatham ha; Vohan vinai hom; Vohan palivan; Vohan sakka nibat; Vohan thukka nibat mat ton; Vohan mulatantai (lanna_1980); Vohan pannyaphala sataka (lanna_2120); Vohan lokathip (lanna_2140); Vohan katha phuk song (lanna_36); Sutthisom vohan (dllm_02804); Mahamunlaniphan composite containing vohan itipiso (dllm_03858); three Untitled items whose records still carry vohara terms in their description chain (dllm_10439/10440/10442); Vohan (dllm_10450); Vohan sukho (dllm_10451); Vohan phahinya then nipphan (dllm_07480).

## Observations citable with care

1. Continuity with loop_B11: the legacy laomanuscripts.net item en/texts/10455 harvested from Wayback in B11 corresponds to today's dllm_10454 cluster sibling dllm_10455 = Phothipakkhinyatham / Vohan phothi (DOI https://doi.org/10.57781/7agj-ep87, PLMP code 06018510077_02). Same monastery bundle group codes 0601851xx recur across many vohans (dllm_10434 through dllm_10455 mostly under codes 060185...), i.e., one surveyed holding site contributed a dense run of vohara manuscripts — consistent with McDaniel's claim that whole monastic libraries carried them.
2. Genre spread: vohans exist on Vinaya (pattimok, vinai hom), Abhidhamma-flavoured didactic texts (phutthakhun, itipiso), sermons/homiletic topics (thammathetsana = dhamma-desana), narrative/jataka material (avatham ha = five jatakas?; singkhala sut) — matching the overlap-with-nissaya picture in Herngseng 2023 (quoting McDaniel 2008:131): voharas cite longer passages of twelve to twenty-five words and offer extensive vernacular commentary.
3. Full-text genre-function support (harvested this loop): Justin McDaniel, Manuscripts and Education in Northern Thailand and Laos (1569-1920), JIABU 1(1): 109-119, https://so06.tci-thaijo.org/index.php/Jiabu/article/view/201866 (PDF downloaded, 11 pp.). Verbatim: Over the past six years, I have examined hundreds of nissaya, vohara, and namasadda manuscripts in detail. And: However, voharas were, and are, used as sermon notes on more general topics to both lay and monastic audiences. Audiences for voharas would have been (and are today) mostly serious lay audiences sitting at public sermons. Nissaya and namasadda audience were more likely to be monks and novices in private classes. Also: Often, the source text is reduced to a title, like Sattaparitta, Mulakaccayana, Mahavagga, etc., and a few passages or terms [...] The idea of the whole source text is invoked, but only a few of its parts are translated and taught. Issue metadata on ThaiJO prints both 2008 (issue label) and 2019 (online publication date); cite with both dates flagged.

## Access limits recorded

- iiif.crossasia.org item pages: Anubis JS challenge (bot wall) — DOI landing pages not scriptable; all data above came from the DataCite API.
- digital.crossasia.org/api/*: connection closed to scripted clients (carried over from B11).
- Item-level images themselves: downloadable by humans from the DLLM UI; not attempted this loop.
