# [2026] TEI Consortium - Critical Apparatus (TEI P5, chapter 13)

## Metadata

| Field | Value |
|---|---|
| Author/corporate | TEI Consortium |
| Title | TEI: Guidelines for Electronic Text Encoding and Interchange, P5 Version 4.12.0 - Chapter 13 "Critical Apparatus" |
| Year | 2026 (current release; guidelines first published 1987/1994 onward) |
| URL | https://www.tei-c.org/release/doc/tei-p5-doc/en/html/TC.html |
| Related module | Chapter 12 "Representation of Primary Sources": https://www.tei-c.org/release/doc/tei-p5-doc/en/html/PH.html |
| Access | Open access |
| Fetched | 2026-08-25 |

## Fetched content (key passages)

### Scope of the chapter

"Scholarly editions of texts, especially texts of great antiquity or importance, often record some or all of the known variations among different witnesses to the text. Witnesses to a text may include authorial or other manuscripts, printed editions of the work, early translations, or quotations of a work in other texts. Information concerning variant readings of a text may be accumulated in highly structured form in a critical apparatus of variants."

"In printed critical editions, the apparatus takes the form of highly-compressed notes at the bottom of each page. TEI's critical apparatus module allows variation to be encoded so that such notes may be generated, but it also models the variation so that, for example, interactive editions in which readers can choose which witness readings to display are possible."

### Editorial decisions the Guidelines leave open

The TEI explicitly does not prescribe an editorial methodology; it lists the questions each editor must answer:
- single 'base' text vs separately transcribed witnesses;
- positive vs negative apparatus;
- level of variation distinguished between witnesses;
- treatment of conjectures differently from witness readings;
- typology of variation (orthographic vs morphological vs lexical).

### Core elements for variants

- `app` (apparatus entry): "contains one entry in a critical apparatus, with an optional lemma and usually one or more readings or notes on the relevant passage." Attributes loc, from, to link the entry to a base text.
- `lem` (lemma): "contains the lemma, or base text, of a textual variation."
- `rdg` (reading): "contains a single reading within a textual variation."
- `rdgGrp` (reading group): groups readings "perceived to have a genetic relationship or other affinity"; supports nested classification of subvariants.
- `wit` attribute on lem/rdg: space-delimited list of sigla of witnesses supporting a reading.
- `witDetail` element: "gives further information about a particular witness, or witnesses, to a particular reading" (e.g., ornamental capital in one manuscript, correction by second hand).
- `att.textCritical` attributes on readings: type (substantive/orthographic), cause (homeoteleuton, haplography, dittography, falseEmendation...), varSeq (sequence of variants), hand.
- Witness lists: `listWit` / `witness` elements in front matter; full manuscript descriptions via `msDesc` (msdescription module) may appear within a listBibl.

### Distinction wit / hand / source

"Broadly, wit identifies the physical entity in which the reading is found (manuscript, clay tablet, papyrus, printed edition); hand refers to the agent responsible for inscribing that reading in that physical entity (scribe, author, inscriber, hand 1, hand 2); source indicates the scholar responsible for asserting the existence of that reading in that physical entity."

### Linking methods named

- location-referenced method
- double end-point attachment
- parallel segmentation method

Example apparatus (Chaucer, Wife of Bath's Prologue):

```
<app>
 <lem wit="#El #Hg">Experience</lem>
 <rdg wit="#La" type="substantive">Experiment</rdg>
 <rdg wit="#Ra2" type="substantive">Eryment</rdg>
</app>
```

## Notes for the book chapter

- The TEI critical-apparatus module is the de facto standard data model behind digital stemmatics and digital editions of glosses/scholia; its vocabulary (witness, lemma, reading, subvariation) is a direct digital formalization of Lachmannian terminology, while remaining methodologically neutral between best-text and synthetic-reconstruction editing.
- For gloss/scholion encoding, chapters 12 (PH) and 13 (TC) are used together: PH handles transcriptional detail (hands, damage, additions), TC handles variant apparatus across witnesses.
