# [2022] [Schufreider-Wauke-Smith] [Iliadic-scholia-Homer-Multitext]
URL: https://classics-at.chs.harvard.edu/recovering-the-history-of-iliadic-scholia-architecture-and-initial-results-from-the-homer-multitext-project/
Fetched: 2026-08-25
Authors: Charles Schufreider, Melody Wauke, Neel Smith
Title: Recovering the history of Iliadic scholia: Architecture and initial results from the Homer Multitext project (Classics@ Journal vol. 20)

## Key points
- Venetus A (Marciana 454 = 822), 10th-c. manuscript of the Iliad; scholia cite Alexandrian editors (Zenodotus, Aristophanes of Byzantium, Aristarchus).
- HMT analyzed 18 books, ~8,000 scholia; Erbse's edition omits ~20% of the content.
- Five distinct zones: main, intermarginal, interior, exterior, interlinear scholia.
- Topic modeling (LDA, ToPan): Aristarchus topic disproportionately concentrated in intermarginal zone (47% of strongly associated scholia vs 15% share of total).
- Machine-learning classifier (decision tree) identified verbatim Aristarchan language via features: critical signs, initial "hoti", "Zenodotus graphei", topic scores; up to 90% classification accuracy.
- Conclusion: scribe planned layout to accommodate material from multiple no-longer-extant sources; Aristarchus' work (2nd c. BCE) partially recoverable from a 10th c. CE manuscript.

---

## FULL TEXT (fetched via webfetch)

The Venetus A manuscript of the Iliad (Marciana 454 = 822) is uniquely important for Homerists. The scholarly notes (or scholia) that often fill the margins of the manuscripts pages cite scholars as early as the first Alexandrian editors of the Iliad, and in some cases quote them for readings of the Iliad not known elsewhere in the manuscript tradition. Between 2010 and 2018, the main focus of the Homer Multitext project (HMT) was to prepare digital editions of the texts in the Venetus A manuscript.

[Section 1] The work completed in 2017 analyzes eighteen books from the Homer Multitext edition of the Venetus A, comprising roughly 8,000 scholia. Because each scholion is indexed to visual evidence and its location on a page, analysis combines textual content with layout information and editorial signs associated with more than 10% of Iliad lines. Erbses edition omits 20% of the content in the Venetus A, including only those scholia he classifies as "vetera". An initial edition of all the scholia in the Venetus A manuscript, numbering nearly 10,000, was completed in 2018.

[Section 2 - Layout zones] Figure: folio twelve recto shows text of the Iliad in middle, five zones: main scholia (yellow), intermarginal (red), interior (blue), exterior (green), interlinear (not highlighted). Karl Dindorf (1875): interlinear zone presents glosses on words below them; T.W. Allen (1899): exterior scholia result of an editorial pass by a second scribe checking against sources. Dindorf observed intermarginal and interior scholia often present same content as main scholia.

Topic modeling used R implementation of Latent Dirichlet Allocation (LDA) in Thomas Kontges ToPan; fifteen topics chosen. Table 1: Distribution of "Aristarchus" topic by zone: Main scholia 3597 (45.3% of corpus; 32.37% of Aristarchus-topic scholia); Intermarginal 1219 (15.4%; 46.76%); Interior 819 (10.3%; 20.14%). The Aristarchus topic is disproportionately concentrated within the intermarginal scholia. Simplest explanation: scribe intended the five zones for material from five distinct sources.

[Section 3 - Aristarchus classifier] Venetus A uniquely preserves roughly 2800 critical signs marking noteworthy lines; system invented by Aristarchus whose edition and commentary were two separate documents (critical signs helped readers coordinate two papyrus scrolls). Scholia on marked lines often introduced by hoti ("because"). Formula "ZENODOTOS GRAPHEI" ("Zenodotus writes") appears only with Zenodotus as subject of grapho in 18 books examined - indicator of directly Aristarchan language. Post-Aristarchan indicators: "para Zenodotoi", presence of Aristarchus name, post-Aristarchan names.

Random sample of 100 scholia classified into four classes: indeterminate (38), Aristarchan (36), paraphrase, post-Aristarchan. Decision-tree classifier trained on 70%, evaluated on 30%: correct classification up to 90%. Applied to all 8,000 scholia: Aristarchan and post-Aristarchan most frequent in main zone; "Aristarchan paraphrase" most often in intermarginal zone. Adding zone as feature worsened classifier performance because each zone includes material from all classes.

Conclusion: strong evidence scribe planned layout to incorporate material from variety of no longer extant sources; still possible in 21st century to recover some of Aristarchus' work (2nd c. BCE) from a 10th c. CE manuscript.
