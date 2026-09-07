# Search Log — Loop A17
Project: palm_leaf_buddhist_manuscripts | Loop: A17 (northern/eastern edge of palm-leaf world)
Date: 2026-08-26 | Agent: research agent | Rules: zero internal knowledge; no Wikipedia citations; no emoji

## Query attempts (chronological)

| # | Query / URL | Tool | Outcome |
|---|---|---|---|
| 0 | `Turfan Sanskrit Buddhist manuscripts birch bark palm leaf Waldschmidt` | webfetch DuckDuckGo html | BLOCKED — DDG bot captcha ("select all squares containing a duck") |
| 1 | `Turfan Sanskrit Buddhist manuscripts birch bark palm leaf Waldschmidt Sanskrithandschriften` | websearch | OK — 8 results; Staatsbibliothek Berlin Turfan page; adw-goe KOHD catalogue list; archive.org SHT vol.1 |
| 2 | `Lore Sander palaeography Central Asian Brahmi Turfan Sanskrit manuscripts dating` | websearch | OK — archive.org record Sander 1968 Paläographisches; austriaca.at survey PDF; orientalstudies.ru palaeography-dating caveat |
| 3 | `Dunhuang Library Cave Sanskrit palm leaf fragments Buddhist manuscripts` | websearch | OK — silkroadsarchaeoheritage.org srah.8; idp.bl.uk blog IOL San 1492 (palm-leaf Prajñāpāramitā); IDP Cave 17 page |
| 4 | `Shosoin repository palm leaf sutras India Nara Horyuji manuscripts` | websearch | OK — TNM exhibition PDF (Hōryūji palm-leaf Heart Sutra); prajnaparamitahrdaya.wordpress.com; shosoin.princeton.edu; shosoin.kunaicho.go.jp |
| 5 | `Japanese pilgrim monks brought Sanskrit manuscripts Tang China Ennin Kukai Indic texts` | websearch | OK — plato.stanford.edu Kūkai entry; worldhistory.org Ennin (584 texts); MDPI Religions jiaoxiecheng article |
| 6 | `Xuanzang brought back 657 Buddhist texts Sanskrit manuscripts China translation` | websearch | OK — britannica.com (657 items, 520 cases); iep.utm.edu/xuanzang |
| 7 | `beiye jing 貝葉經 Chinese term palm leaf scriptures India Buddhism` | websearch | OK — wisdomlib.org (DILA Ding Fubao, NTI Reader, CC-CEDICT, Soothill); chinadailyhk Potala beiyejing article |
| 8 | `Tibetan pecha long book format Indian pothi origin paper Mongolia poti manuscripts` | websearch | OK — rubinmuseum.org pecha glossary; gla.ac.uk Weston PDF; dpul.princeton.edu pothī tradition; csmc.uni-hamburg.de pothi guide |

Distinct queries executed: 9 (incl. blocked DDG attempt) / required >=8: MET.

## Full reads (>=4 required: MET)

1. Staatsbibliothek zu Berlin — "The Berlin Turfan-Collection" (Raschmann). Full text fetched. Archived: documents/stabi-berlin_turfan-collection_raschmann.html
2. Göttingen Academy (adw-goe.de) — KOHD Catalogues 1-10 (SHT vols 10,1–10,11 with years/ISBNs). Full fetch (tail truncated by tool; SHT section fully visible in both fetch and search capture). Archived: documents/adw-goe_kohd_catalogues_1-10_SHT.html
3. Terzi & Whitfield 2024, "Reconstructing a Medieval Library? The Contents of the Manuscript Bundles in the Dunhuang Library Cave", Silk Roads Archaeology and Heritage 1(1):56-76, DOI 10.5334/srah.8. Main body read. Archived: documents/srah_10.5334-srah.8_terzi-whitfield_dunhuang-library-cave.pdf (PDF 3.4 MB)
4. Princeton "Guide to Shōsōin Research" — Shōgōzō page. Full read. Archived: documents/shosoin-princeton_shogozo.html
5. prajnaparamitahrdaya.wordpress.com — Hōryūji Palm-leaf MS page (Müller 1881 basis). Full read. Archived: documents/prajnaparamitahrdaya_horyuji-palmleaf-muller1881.html
6. chinadailyhk article 610047 — Potala Palace beiyejing restoration (full article text in search capture; archived HTML). Archived: documents/chinadailyhk_potala-beiyejing-restoration.html

## Fetch failures / blocks noted

- idp.bl.uk blog post (IOL San 1492) — HTTP 403 direct; r.jina.ai proxy returned CAPTCHA wall. Key passage captured verbatim in websearch result instead.
- shosoin.kunaicho.go.jp/en-US/about/repository/ — returned JS shell only ("Loading..."); content taken from websearch excerpt of same URL.
- wisdomlib.org direct — HTTP 522; recovered via r.jina.ai proxy (archived .md).
- smarthistory.org Shōsōin page — HTTP 403; dropped, not needed.
