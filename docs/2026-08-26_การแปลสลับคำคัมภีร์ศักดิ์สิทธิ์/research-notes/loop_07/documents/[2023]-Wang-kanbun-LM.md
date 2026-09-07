# Source Extract: Wang, Shimizu & Kawahara 2023 - Kanbun-LM

- Author: Hao Wang, Hirofumi Shimizu, Daisuke Kawahara (Waseda University)
- Title: "Kanbun-LM: Reading and Translating Classical Chinese in Japanese Methods by Language Models"
- Year: 2023
- Type: Peer-reviewed conference paper (Findings of ACL)
- Publisher/Journal: Findings of the Association for Computational Linguistics: ACL 2023, Toronto, pp. 8589-8601
- DOI/ISBN: 10.18653/v1/2023.findings-acl.545
- URL: https://aclanthology.org/2023.findings-acl.545/
- Status: SEARCH-VERIFIED (ACL Anthology citation block captured in full via search extraction)

## Key extracts seen this session

- States Classical Chinese first came to Japan approximately 2,000 years ago and was gradually adapted into Kanbun-Kundoku, methods that "have significantly impacted Japanese literature."
- Constructs what authors call the first Classical-Chinese-to-Kanbun parallel dataset (Tang poetry), and introduces two tasks central to kanbun comprehension: character reordering and machine translation; code and dataset released at github.com/nlp-waseda/Kanbun-LM.
- Companion EACL 2026 paper seen this session ("Translation via Annotation: A Computational Study of Translating Classical Chinese into Japanese", aclanthology.org/2026.eacl-long.285.pdf) SEARCH-VERIFIED: formalizes kundoku annotation as sequence tagging; identifies three mark types Kutoten (punctuation), Kaeriten (reading order), Okurigana (grammatical/inflectional information).
- Same paper models kaeriten resolution as stack-sorting: re-mark pushes a character onto a stack popped when its successor appears; ordinal marks (一二, 上下, 甲乙) enforce nested LIFO hierarchy so characters marked 二 must nest within 一 per Knuth's stack-sortable permutation theorem; a hyphen-like mark binds characters into single units moved together.
- Reports low-resource challenge: prior open dataset (Wang et al. 2023b) limited to Tang-Song classical poems without annotations; new dataset built from web source pairs with automatically generated kaeriten/okurigana marks validated via pushdown automaton; evaluation finds LLMs produce high-quality translations but still err annotating kaeriten marks.
- Related Japanese-language database prototype seen via J-GLOBAL (SEARCH-VERIFIED): Tsuji/Tajima/Takada, "A prototyping database of Chinese text that enables kunten information search by transcription of Chinese classics into Japanese" - searching the NINJAL Shosho movable-type copy by kakikudashi-bun string, displaying IIIF Curation Viewer cutout images.
