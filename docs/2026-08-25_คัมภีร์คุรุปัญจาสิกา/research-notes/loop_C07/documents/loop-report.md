# Loop C07 Report — Mongolian Translation of the Gurupañcāśikā

- **Loop:** C07 (Phase C — translations/witnesses beyond the Tibetan Derge Tanjur base)
- **Date:** 2026-08-26
- **Agent:** ox-alpha (academic research agent)
- **Status:** NEGATIVE / LIMITED-FINDINGS certified (search infrastructure degraded; all accessible avenues checked)

---

## 1. Known baseline (from rKTs, project input)

| Field | Value |
|---|---|
| Witness siglum | Mmt3604 |
| Corpus | Mongolian Canon — Mongolian Tanjur (bstan 'gyur, Mongol blockprint, completed 1748/49) |
| Volume / foliation | vol. 74, fols. 329a1–332a1 |
| Title (Mongolian script) | ᠪᠯᠠᠮ᠎ᠠ ᠎ᠶᠢᠨ ᠰᠢᠯᠦᠭ ᠎ᠲᠦ |
| Romanization | blam-a-yin tabin silüg-tü |
| Gloss | "Having fifty verses of/on the lama" (blam-a < Tib. bla ma; -yin genitive; tabin "fifty"; silüg "verse"; -tü possessive) |

The title morphology is fully consistent with the Tibetan *Bla ma lnga bcu pa* (= Gurupañcāśikā), i.e. the rKTs entry is internally coherent.

## 2. Task-by-task findings

### Task 1 — Direct string searches
- DuckDuckGo (HTML) query `"blam-a-yin tabin" OR "blama-yin tabin" Mongolian Tanjur` returned verbatim:
  > "No results found for "blam-a-yin tabin" OR "blama-yin tabin" Mongolian Tanjur"
- Primary web-search backend persistently returned HTTP 429 (rate limit) on every attempt (6+ tries across the session), so Google/Bing-indexed coverage could not be independently confirmed.
- German-language angle ("Mongolische Übersetzung Guru fünfzig Strophen"): ยังไม่พบ (not found — no reachable search results).
- Conclusion: the romanized colophon title has no public web footprint. Expected: witness-level catalog data of this kind lives in closed/offline catalogs (rKTs itself; library catalogs of the Ulaanbaatar blockprint set), not on the open web.

### Task 2 — Scholarly literature on the Mongolian Kanjur/Tanjur
Verified bibliographic anchor located via PhilPapers/ProQuest snippets (exact quotes as served):

> "G. Kara & Igor de Rachewiltz, The Mongolian Tanjur Version of the ..."

(PhilPapers, philpapers.org/rec/KARTMT-2)

and:

> "The Mongolian TanJur Version of the Bodhicaryavatara. Edited and Transcribed, with a Word-Index and a Photo-Reproduction of the Original Text (1748). By IGOR DE RACHEWILTL. Asiatische Forschungen, vol. 129. Wiesbaden: HARRASSOwiTz, 1996. Pp. xx + 231. 52 pl."

(ProQuest record, sic — OCR variants "RACHEWILTL", "HARRASSOwiTz"; actual author Igor de Rachewiltz, publisher Harrassowitz; Kara György co-editor per PhilPapers.)

Significance for Loop C07:
- Confirms the Mongolian Tanjur blockprint is dated **1748** and that single-text diplomatic editions of individual MT works exist (precedent model for a future Mmt3604 edition).
- Kara György, *Books of the Mongolian Nomads: More than Eight Centuries of Documental History* (Bloomington: Indiana University, Research Institute for Inner Asian Studies, 2005; Russian original 1972) remains the standard survey covering the MT; **no passage specifically mentioning the Gurupañcāśikā/blam-a-yin tabin silüg could be retrieved online this session** — ยังไม่พบ (would require physical/library access to pp. on the 1742–1749 Tanjur project).
- Johan Elverskog (Qing-Mongol Buddhism studies): no online mention of this specific text found — ยังไม่พบ.
- "Valentin Veselovsky": attribution unverifiable online this session; treat as unconfirmed lead only (the relevant Russian-era catalog tradition would be Shastina/Vladimirtsov-line scholarship; do not cite Veselovsky without verification).

### Task 3 — BDRC checks
- `https://ldspdi.bdrc.io/resource/Mmt3604.jsonld` → **HTTP 404** (Mmt3604 is an rKTs-style witness designation, not a BDRC resource ID; expected).
- Control fetch (`P1583.jsonld`) proved ldspdi JSON-LD delivery works; the miss is data-side, not access-side.
- SPARQL probe of `ldspdi.bdrc.io/query/sparql` for any entity whose `skos:prefLabel` contains "tanjur": **zero bindings returned**. Caveat: endpoint behavior was erratic (empty-shaped response rather than explicit error), so absence of bindings here is weak evidence. BDRC almost certainly does not host scans of the 226-volume 1749 Mongolian Tanjur blockprint (held at Inst. of Language and Literature, Mongolian Academy of Sciences, Ulaanbaatar, and other sets); ยังไม่พบ any BDRC scan of MT vol. 74.

### Task 4 — Digital Mongolian canon / GitHub / Asian Legacy Library
- GitHub repository search API, query `"mongolian tanjur"`: **0 repositories** returned.
- GitHub code search: requires authentication (HTTP 401) — not testable anonymously.
- Asian Legacy Library (asianlegacylibrary.org) holds digitized Kangyur/Tengyur collections but **no Mongolian Tanjur corpus was locatable** through available endpoints this session — ยังไม่พบ. No machine-readable text of Mmt3604 exists publicly as far as these probes reach.

## 3. Negative certification summary

| Item sought | Result |
|---|---|
| Open-web occurrence of title "blam-a-yin tabin (silüg-tü)" | ยังไม่พบ |
| Scholarly catalog entry naming Gurupañcāśikā in the MT (Kara, Elverskog, et al.) online | ยังไม่พบ (offline libraries needed) |
| BDRC scan/work record for MT vol. 74 / Mmt3604 | ยังไม่พบ (404 + empty SPARQL) |
| Digital text / transcription (GitHub, ALL) | ยังไม่พบ |
| Independent corroboration that the MT contains the Gurupañcāśikā | Indirect only (title semantics + rKTs placement; cf. Tibetan Toh. parallel) |

## 4. Assessment and next steps for the project

1. **Confidence:** rKTs witness data (siglum, title, volume/foliation) stands uncontradicted and morphologically sound; the Mongolian translation very likely exists as catalogued, completed within the 1742–1749 MT project anchored by Kara/Rachewiltz 1996.
2. **No digital surrogate exists** in any public source checked. Any future transcription must proceed from microfilm/blockprint images (Ulaanbaatar MAS set or Library-of-Congress-acquired copies) — flag as offline acquisition task, not a web-research task.
3. Recommended offline follow-ups (out of scope for web loops):
   - Kara, *Books of the Mongolian Nomads* (2005), chapter on the 1742–1749 Tanjur — check whether the gsung 'bum/sna tshogs section contents of vol. 74 are itemized.
   - Ligti/Lubsangvandan-type Mongolian Academy inventories of the Tanjur holdings, Ulaanbaatar.
   - de Rachewiltz/Kara 1996 introduction (Asiatische Forschungen 129) for the standard description of the blockprint set used for MT text citation.
4. Web-search backend degradation (persistent 429) limited Google/Bing-depth coverage; a re-run when rate limits reset may add marginal value but is unlikely to overturn the negative findings, since the target strings are catalog-internal.

---
*Sources touched:* rKTs project input; html.duckduckgo.com result pages (quotes above); ldspdi.bdrc.io (404 + SPARQL); api.github.com (repo search). No Wikipedia consulted.
