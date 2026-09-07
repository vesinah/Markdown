# Loop B16 Findings

Date: 2026-08-26

Phase-B note: Deep-dive precision pass closing the six European-vernacular-gloss-corpora gaps left open by Phase A loop 24 (Reichenauer Glossen identity/BStK; McCone 1985 content; Ó Néill 2002 identification; Krotz Monsee edition year; Lindisfarne scholarly depth; St Gall Priscian official count). Six harvest documents saved in research-notes/loop_B16/documents/.

## Queries executed

1. websearch: "Reichenauer Glossen" BStK Clm althochdeutsch Glossenhandschrift
2. websearch: "Gloses de Reichenau" Clm 3029 manuscrit gloses vieux français interlinéaires
3. webfetch: de.wikipedia Reichenauer Glossen - ORIENTATION ONLY for leads (never cited); led to BLB URN and Klein edition
4. webfetch: wurzburg.ie/about_Eng.html (bibliography re-harvest for Ó Néill 2002)
5. webfetch: stgallpriscian.ie home, /resource, /glosses
6. websearch: Elke Krotz Monsee/Monseer Fragmente Edition De Gruyter Neuedition
7. websearch: Krotz "Auf den Spuren des althochdeutschen Isidor" Winter Jahr
8. websearch: McCone Würzburg Milan "Middle Irish" Ériu 1985 argument dating
9. websearch: review Fernández Cuesta Pons-Sanz Lindisfarne volume
10. websearch: Ó Néill prima manus Ogma Ní Chatháin
11. webfetch: codecs.vanhamel.nl Ó Néill entry (robot-blocked; title string via search snippet)
12. bash Invoke-WebRequest + local pypdf: ChronHib methods PDF (Maynooth) and Waite review PDF (grupo.us.es) downloaded and text-extracted
13. bash Crossref API: works lookups for Monseer Fragmente (old items only; 2026 book not yet indexed), DOI probe 10.1515/9783110220162 (404)
14. bash BStK Online search probe: /manuscripts?query=Aug.+perg.+248 -> found BStK-Nr. 317; then full fetch of /bstk/317 both tabs
15. websearch: "Aug. perg. 248" Karlsruhe Reichenau glosses Vulgate Corbie (weak results; BStK route succeeded instead)
16. websearch: Lapidge "glossa normalis"; Hans-Wilhelm Klein Hueber 1968; ARLIMA Gloses de Reichenau bibliography page surfaced in results
17. websearch (rate-limited HTTP 429 on final call): O Néill argument summary probe - abandoned

## Table of sources

| Author/Source | Title | Year | URL | Substance |
|---|---|---|---|---|
| Klein (ed.), mit Labhardt | Die Reichenauer Glossen, Teil I: Einleitung, Text, vollständiger Index und Konkordanzen (Beitr. zur roman. Philologie des MA 1,I) | 1968 | via https://glossen.germ-ling.uni-bamberg.de/bstk/317 ; ARLIMA arlima.net/eh/gloses_de_reichenau.html | Standard edition of the Gallo-Romance corpus; facsimiles f. 1r, 20r at S. 406f.; discovery history since Holtzmann 1863 |
| Raupach | Die Reichenauer Glossen, Teil II: Entstehung und Aufbau (same series 1,II) | 1972 | via BStK 317 literature | Origin and structure study |
| BStK Online (Bamberg) | BStK.-Nr. 317 = Karlsruhe BLB Aug. perg. 248 (= Codex Augiensis CCXLVIII = StSG 70) | entry last change 2020 | https://glossen.germ-ling.uni-bamberg.de/bstk/317 (+ /manuscripts/12418, /glossed_contents/12418) | 10th-c. several hands, perhaps Soissons; Reichenau provenance; Karlsruhe since 1805; f.1ra-39vb "Reichenauer Glossen"; OHG residue = 10 Alemannic glosses (Exodus 5, Leviticus 3, Deut 1, 2 Sam 1) plus Old English and Old French glosses in the second Bibelglossar; classification "Alem." nach Weinhold; digitised URN nbn:de:bsz:31-14276 |
| Holtzmann | Die alten Glossaren, Germania 8 | 1863 | via BStK 317 literature | Discovery publication |
| Engels | Les "Gloses de Reichenau" rééditées. Leur datation et localisation, Neophilologus 52 | 1968 | doi.org/10.1007/bf01515488 | Dating/localisation discussion post-Klein |
| Bischoff | À propos des Gloses de Reichenau: entre latin et français, Mittelalterliche Studien III | 1981 | via ARLIMA | Between Latin and French |
| Sanders | Der germanische Anteil an den Reichenauer Glossen, RhVB 33 | 1969 | via BStK 317 Glossen tab | Germanic share analysis |
| McCone | The Würzburg and Milan Glosses: Our earliest sources of 'Middle Irish', Ériu 36, 85-106 | 1985 | jstor.org/stable/30007797 (paywall); verbatim pp. 89-90 quoted in Maynooth ChronHib PDF | Deviant-form distribution as dating evidence; na-for-inna passage |
| ChronHib deck (Maynooth, ERC #647351) | Statistical methods in the Old Irish language | n.d. (~2018-21) | maynoothuniversity.ie/sites/default/files/assets/document//ChronHib.pdf | McCone pp. 89-90 verbatim; Carney inna-graph counterpoint; Stifter's inna/na token tables (Wb 13.5%, Ml 19.5%, Sg 14.1%) |
| Doyle, McCrae, Downey | LSTM tokenization of Würzburg Glosses | 2019 | aclanthology.org/W19-6910.pdf | Summary of McCone's claim; prima manus more archaic than hands 2-3 |
| Ó Néill | The Old-Irish glosses of the prima manus in Würzburg, m.p.th.f.12: text and context reconsidered, in Richter/Picard (eds), Ogma (Four Courts Press) | 2002 | wurzburg.ie/about_Eng.html bibliography; Muse 893024 refs; O'Brien ORA PDF n.52 | Exact identification, pp. 230-242 |
| Ó Néill | The Latin and Old-Irish glosses in Würzburg m.p.th.f.12: unity in diversity, in Bergmann/Glaser/Moulin-Fankhänel (eds) | 2001 | cited in O'Brien ORA PDF n.52 | Latin+Irish as one exegetical unit; relied on at pp. 44-45 for Wb. 6a Rom 13 moralisation |
| Müller & Krotz (eds.) | Die Monseer Fragmente (De Gruyter; Bd. 1 Edition und Übersetzung; Bd. 2 Wörterbuch und ...) | 2026 (pub. 13 Feb 2026) | conte-verlag.de/shop/item/9783110220162/... ; amazon.de ISBN 3110220164; umbreit.de | New critical edition, c. 700 pp., ISBN 978-3-11-022016-4 |
| Krotz | Auf den Spuren des althochdeutschen Isidor... Mit einer Neuedition des Glossars Jc (Winter, Beitr. z. älteren Literaturgeschichte) | 2002 | BStK citations (/bstk/946 etc.); ZVAB record | Monsee codex reconstruction studies |
| Krotz | Ein neues Monseer Fragment, ZfdA 145 | 2016 | doi.org/10.3813/zfda-2016-0005 ; jstor 26578061 | New fragment announcement |
| Waite | Review of Fernández Cuesta & Pons-Sanz (eds), Parergon 34.2, 196-198 | 2017 | grupo.us.es/northernenglish/wp-content/uploads/2018/09/review-de-LG.pdf | Full chapter-by-chapter content (harvested in documents/) |
| Ramirez Perez | Two Leiden Medievalists Blog posts | 2022, 2024 | leidenmedievalistsblog.nl/articles/a-conditioned-scribe-... ; .../multilingualism-in-anglo-saxon-england-... | Author's own morphological programme behind the blog indexed in loop_24 |
| Hofman, Moran, Bauer | St Gall Priscian Glosses v2.1 | 2023 (v2.1 rel. 28 June 2023) | stgallpriscian.ie , /glosses , /resource | Official counts and version history |

## Key findings (with URLs)

1. GAP 1 CLOSED (correction). "Reichenauer Glossen"/Gloses de Reichenau are a Gallo-Romance (early Old French) biblical glossary-gloss corpus of the late 8th century from NW France - NOT Bavarian, NOT an OHG collection. Transmitted in Karlsruhe, Badische Landesbibliothek, Aug. perg. 248 (Codex Augiensis CCXLVIII; StSG 70; BStK-Nr. 317): no Clm number exists - the codex is not in Munich. BStK describes the 10th-century copy (several hands, perhaps Soissons; later Reichenau; Karlsruhe 1805) and classifies its tiny OHG residue (exactly 10 glosses to Exodus/Leviticus/Deuteronomy/2 Samuel inside the f.102ff Bible glossary, alongside Old English and Old French glosses) as ALEMANNIC (nach Weinhold). Standard editions Klein/Labhardt I (München: Hueber 1968) and Raupach II (1972); discovery Holtzmann 1863; dating/localisation Engels 1968; Bischoff 1981 "entre latin et français". Any draft line "bayerische Reichenauer Glossen" must be deleted; use Mondsee/Freising for Bavarian biblical vernacular. https://glossen.germ-ling.uni-bamberg.de/bstk/317
2. GAP 2 CLOSED SUBSTANTIALLY. McCone 1985 (Ériu 36, 85-106) is now documented with a verbatim pp. 89-90 passage (na-for-inna reduction already operative "by then", inna as learned register variant under pressure from na, orthographic conservatism explaining its preponderance in the Glosses) harvested from the open Maynooth ChronHib PDF, plus a JSTOR preview fragment showing his method ("status and distribution of deviant forms ... accords very well with the notion that..." [sic - attacks it]), plus fetched secondary characterisations (Doyle/McCrae/Downey 2019; Roczniki Humanistyczne 2021) and the Carney/Stifter quantitative counterpoint (inna/na: Wb 13.5%, Ml 19.5%, Sg 14.1%). Full continuous article remains paywalled.
3. GAP 3 CLOSED (identification) / PARTIAL (content). Ó Néill 2002 = "The Old-Irish glosses of the prima manus in Würzburg, m.p.th.f.12: text and context reconsidered", in Richter/Picard (eds), Ogma (Dublin: Four Courts Press, 2002), 230-242 - verified in four independent sources; the Phase-A guess "The Irish version ..." corresponds to no real publication. Bonus sibling identified: Ó Néill 2001, "...unity in diversity", in Bergmann/Glaser/Moulin-Fankhänel (eds), Mittelalterliche volkssprachige Glossen (Heidelberg 2001), 33-46, whose reading of Wb. 6a (Romans 13) is used by O'Brien 2022 at pp. 44-45. Chapter-internal conclusions of the 2002 piece remain unread (print-only Festschrift).
4. GAP 4 CLOSED. The new Monsee critical edition is published: Stephan Müller and Elke Krotz (eds.), Die Monseer Fragmente, De Gruyter, released 13 February 2026, c. 700 pp., ISBN 978-3-11-022016-4 (Bd. 1: Edition und Übersetzung; Bd. 2: Wörterbuch und ...). Krotz's preparatory monograph is Winter 2002 ("Auf den Spuren des althochdeutschen Isidor...", incl. codex reconstruction of the MF); new fragment announced in ZfdA 145 (2016). loop_24's "forthcoming, year unknown" is superseded.
5. GAP 5 CLOSED SUBSTANTIALLY. Waite's Parergon review (2017, pp. 196-198; full PDF harvested) gives chapter-level content of the De Gruyter volume: Brown (Anglo-Scandinavian political agenda), Roberts (colophon, vernacular-poem hypothesis, Durham Collectar comparison), Rusche (KEY: Aldred drew mainly on older ninth-century Psalter-glossing traditions, not reform-era innovations - answering the Southumbrian-training question), Cavill (reform-minded maxims), Brookes (letter-form variation as creative response), Cole (non-uniform idiolect; earlier source materials), Walkden (null subjects usable syntactically), Bolze/Pons-Sanz (multiple-gloss systematics), Lendinara (unglossed words are principled), Jolly (oral+written pedagogy at Chester-le-Street), Kotake (Li and Ru2 may stem from a lost common source). Ramirez Perez's own research trajectory documented from her two Leiden Medievalists posts (weak-class-2 -i-formant loss first recorded here; conditioning hypothesis; Norse loans nativised in Aldred's idiolect). Term "glossa normalis": not verifiable in fetched sources - (ยังไม่พบข้อมูลยืนยัน).
6. GAP 6 CLOSED (reconciliation pinned). Official v2.1 figures: "over 9,400 interlinear and marginal glosses" PLUS symbol/construe marks given as c. 3,000 (home page) vs c. 4,000 (/glosses page - site-internal variation to report honestly); about/more than one third in Old Irish; TPH ii 49-224 prints the Old Irish ones; Hofman 1996 Part 1 = first half of ALL glosses; v2.1 (28 June 2023) was front-end only. Gloss Corpus v1.0's 13,395 items = word glosses + symbols, consistent with ~12,400-13,400 total. Print formulation recommended: "over 9,400 interlinear+marginal glosses and roughly 3,000-4,000 symbol/construe marks, about one-third Old Irish", citing Hofman/Moran/Bauer v2.1 (2023).

## Gaps closed

1. Reichenauer Glossen identity/dialect/census number: CLOSED (Gallo-Romance corpus; Karlsruhe Aug. perg. 248 = StSG 70 = BStK 317; OHG residue Alemannic; no Clm).
2. McCone 1985 content: CLOSED SUBSTANTIALLY (verbatim pp. 89-90 + method fragments + secondary characterisations + counterpoint data).
3. Ó Néill 2002 exact publication: CLOSED; detailed chapter findings PARTIAL (marked).
4. Krotz Monsee edition year: CLOSED (Müller/Krotz, De Gruyter, 13 Feb 2026).
5. Lindisfarne scholarly depth: CLOSED SUBSTANTIALLY (full review content + author's own research programme); "glossa normalis" term itself unverified.
6. St Gall Priscian count reconciliation: CLOSED (official units disentangled; site-internal 3,000-vs-4,000 symbol variation documented).

## Remaining

- Full text of McCone 1985 beyond pp. 85 preview fragments (JSTOR paywall) - if ever needed, request via library; current depth sufficient for the book.
- Ó Néill 2002 chapter-internal arguments (Ogma Festschrift print-restricted); cite conservatively.
- Exact Band 2 subtitle of the 2026 Monsee volume truncated in trade data ("Wörterbuch und ..."); confirm when De Gruyter/Crossref index it.
- Composition place/archetype of the Reichenauer Glossen archetype (Corbie vs other NW-French centres) remains debated; BStK only says the 10th-c. copy is "vielleicht" Soissons.
- British Library digitised viewer for Aldred's colophon wording still unfetched (carried over from loop_24).

## Blocked sources

- digital.blb-karlsruhe.de (via URN nbn:de:bsz:31-14276): Anubis bot-protection wall - Aug. perg. 248 images/description not fetchable; BStK entry used instead.
- JSTOR 30007797 (McCone 1985): paywall; only preview snippets.
- CODECS (codecs.vanhamel.nl): robot check wall; title string obtained via search result.
- conte-verlag.de product page: transport error; retailer metadata cross-checked across four other shops instead.
- Final Ó Néill-summary websearch: provider rate limit HTTP 429; abandoned (sufficient data already gathered).
