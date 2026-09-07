# Loop C03 (Phase C) — Monograph Full-Text Sweep: Gurupañcāśikā

Date: 2026-08-26
Scope: archive.org search-inside + Google Books snippet sweep for mentions of *Gurupañcāśikā* / *Gurupancasika* ("Fifty Stanzas of Guru Devotion", Bla ma lnga bcu pa) in major scholarly monographs.

---

## 1. Summary table

| Monograph | archive.org item ID | Search-inside status | Hits for Gurupañcāśikā |
|---|---|---|---|
| Ronald Davidson, *Indian Esoteric Buddhism* (2002) | `indianesotericbu0000davi` (ia800600.us.archive.org, dir=/35/items/) | Blocked: lending-restricted; endpoint returns HTML page titled "Item not available" | ยังไม่พบ (inaccessible anonymously) |
| Christian Wedemeyer, *Making Sense of Tantric Buddhism* (2013) | `makingsenseoftan0000wede`; duplicate copy `makingsenseoftan0000wede_o1b2` (ia801802.us.archive.org, dir=/27/items/) | Blocked: same lending restriction, "Item not available" | ยังไม่พบ (inaccessible anonymously) |
| Jacob Dalton, *The Taming of the Demons* (2011) — official scan | `tamingofdemonsvi0000dalt_j1w9` (ia601806.us.archive.org, dir=/27/items/) | Blocked: lending restriction, "Item not available" | ยังไม่พบ (inaccessible anonymously) |
| Jacob Dalton, *The Taming of the Demons* — community upload | `the-taming-of-the-demons-violence-and-liberation-in-tibetan-buddhism-z-lib.io` (ia801006.us.archive.org, dir=/14/items/) | Endpoint reachable but no OCR index | ยังไม่พบ (no searchable text layer) |
| Van Schaik & Dalton, *Tibetan Tantric Manuscripts from Dunhuang* (Brill) — upload A | `tibetantantricmanuscriptsdunhuangdescriptivecatofsteincollecatbritlibsamvanschai` (ia902901.us.archive.org, dir=/33/items/) | Endpoint reachable but no OCR index | ยังไม่พบ (no searchable text layer) |
| Van Schaik & Dalton, *Tibetan Tantric Manuscripts from Dunhuang* — upload B | `tibetantantricmanuscriptsfromdunhuangadescriptivecatofsteincollecatbritlibsamvan_115_k` (ia802901.us.archive.org, dir=/24/items/) | Endpoint reachable but no OCR index | ยังไม่พบ (no searchable text layer) |
| Matthew Kapstein, *The Tibetans* (2006) | Not found on archive.org (`creator:(kapstein) AND title:(tibetans)` → numFound: 0; broad query `tibetans AND kapstein` returned only unrelated items) | N/A | ยังไม่พบ |
| David Seyfort Ruegg, Buddhology monographs (e.g., *The Buddha Mind*, *Three Studies*) | None of Ruegg's Buddhology works found among archive.org text items (`creator:(ruegg) AND mediatype:(texts)` → only namesakes: Rosalie T. Ruegg (economics), Andreas Röegg (physics), Alfred Henry Ruegg (law), etc.) | N/A | ยังไม่พบ |

## 2. Method log

### 2.1 Item discovery (archive.org advancedsearch API)

Confirmed items, verbatim API output excerpts:

```
{"creator":"Davidson, Ronald M., 1950-","identifier":"indianesotericbu0000davi",
 "title":"Indian esoteric Buddhism : a social history of the Tantric movement"}

{"creator":"Wedemeyer, Christian K","identifier":"makingsenseoftan0000wede",
 "title":"Making sense of Tantric Buddhism : history, semiology, and transgression in the Indian traditions"}
{"creator":"Wedemeyer, Christian K","identifier":"makingsenseoftan0000wede_o1b2", ...}

{"creator":"Dalton, Jacob Paul","identifier":"tamingofdemonsvi0000dalt_j1w9",
 "title":"The Taming of the Demons : Violence and Liberation in Tibetan Buddhism"}

Kapstein query: {"numFound":0,"start":0,"docs":[]}
Ruegg query:   {"numFound":0,"start":0,"docs":[]}   [for buddha mind / three studies / ordinary mind]
```

### 2.2 Search-inside protocol

Pattern used per item (server resolved via `https://archive.org/metadata/{id}`):

```
https://{server}/fulltext/inside.php?item_id={id}&doc={id}&path={dir}&q=gurupancasika
```

Queries tried per item: `gurupancasika`, `pancasika`, `gurupanchasika`, plus control query `fifty`.

### 2.3 Verbatim endpoint responses

Lending-protected official scans (Davidson, Wedemeyer, Dalton official) — HTTP response is an HTML block page regardless of query, including control term:

```html
<title>Item not available</title>
```

(Example shown for `indianesotericbu0000davi`; identical result for `makingsenseoftan0000wede`, `makingsenseoftan0000wede_o1b2`, `tamingofdemonsvi0000dalt_j1w9`. Anonymous requests also received `(403) Forbidden` without Referer header.)

Community uploads (Dalton z-lib copy, both Dunhuang catalogue copies) — endpoint responds 200 with JSON but no OCR data, even for the control query:

```json
{"ia":null,"q":null,"indexed":true,"matches":[],"error":"No hOCR or Abbyy file present"}
```

Fallback wrapper `https://api.archivelab.org/books/{id}/searchinside` was unreachable ("Unable to connect to the remote server").

### 2.4 Google Books sweep

- Google Books API (`googleapis.com/books/v1/volumes`) hard-blocked for this environment:
  ```json
  "reason": "rateLimitExceeded", "quota_limit_value": "0"
  ```
- DuckDuckGo HTML search, restricted to Google Books:
  - Query: `"Gurupancasika" OR "Gurupañcāśikā" site:books.google.com`
  - Result (verbatim): `No results found for "Gurupancasika" OR "Gurupñcāśikā" site:books.google.com`
- Co-occurrence probe against target authors:
  - Query: `"Gurupancasika" Davidson OR Wedemeyer OR Kapstein OR Dalton OR Ruegg`
  - Result (verbatim): `No results found for ...`

## 3. Incidental verified context (web sources, not target monographs)

These establish the work's identity/reception, quoted exactly from search snippets:

1. buddhism.name: "Fifty Stanzas of Guru Devotion ("Gurupancasika", "Bla-ma Inga-bcu-pa") By Aryasura written in the first century B.C. With an oral commentary by Geshe Ngawang Dhargey"
2. LTWA catalog entry (appliedbuddhism.org.uk): "Fifty verses of guru-devotion = Gurupancasika = La-ma nga-chu-pa — Publisher: Dharamsala: Library of Tibetan Works & Archives Year: 1975"
3. GRETIL: "Asvaghosa: Gurupancasika Input by members of the Sanskrit Buddhist Input Project... Sastra section, text no. 45" (file bsa045_u.htm / bsa045_c.txt)
4. CiNii record: "A Study on the Gurupañcasika attributed to Asvaghosa" (Japanese monograph study, 伝馬鳴作「事師法五十頌」をめぐって)
5. wisdomlib.org cross-lingual equivalents listed: "bla ma lnga bcu pa", "Shi shi fa wu shi song" (事師法五十頌), "Su su phap ngu thap tung", "Mi ji li shi da quan shen wang jing ji song"

Note: attribution wavers between Aśvaghoṣa and Āryaśūra across these sources — relevant for Phase C framing.

## 4. Conclusion

**ยังไม่พบ** — none of the five target monographs could be confirmed to mention *Gurupañcāśikā* through this sweep. This is a negative-access result, not a proven absence:

- The three officially scanned monographs exist on archive.org but their full-text search requires an authenticated loan session.
- All freely uploaded copies lack OCR layers, so search-inside is impossible.
- Kapstein (2006) and all Seyfort Ruegg monographs are absent from archive.org entirely.
- Google Books exposes no indexed snippet containing the title string for any of these authors' books.

## 5. Gaps and next steps

1. Re-run inside.php searches from a session holding an active archive.org loan (loan token unlocks datanode full-text search).
2. HathiTrust full-text search (catalog.hathitrust.org) covers Davidson 2002, Kapstein 2006, and several Ruegg volumes that archive.org lacks.
3. Direct physical/PDF inspection of Davidson 2002 index s.v. "guru devotion"; Dalton 2011 discusses bla ma lnga bcu pa tradition in Ch. 1–2 (to verify page-level).
4. Google Books sweep should be retried from a different IP/quota context or via the volume-oriented `&jscmd=click` interface.
