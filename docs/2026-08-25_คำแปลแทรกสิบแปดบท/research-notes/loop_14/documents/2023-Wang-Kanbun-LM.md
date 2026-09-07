# Document record

- Authors: Hao Wang, Hirofumi Shimizu, Daisuke Kawahara (Waseda University)
- Title: Kanbun-LM: Reading and Translating Classical Chinese in Japanese Methods by Language Models
- Year: 2023 (arXiv posted 2023-05-22; accepted Findings of ACL 2023)
- URLs: https://arxiv.org/abs/2305.12759 ; HTML: https://arxiv.org/html/2305.12759v2 ; code/dataset: https://github.com/nlp-waseda/Kanbun-LM ; demo on Hugging Face Spaces (nlp-waseda/Kanbun-LM)
- Accessed: 2026-08-25 (full HTML text fetched)
- Relevance: Loop 14 RQ5 - computational treatment of kunten/kundoku marks and modern digital transcription of glossed texts

## Verified content

1. Framing of the reading apparatus: to convert SVO Classical Chinese into Japanese SOV/agglutinative readings, Japanese tradition developed three main marker types - kaeriten (reordering marks placed left of characters), okototen/readings dots, plus katakana yomigana on the right and okurigana (example analyzed: chunmyo... kakigo oboezu, spring sleep, unaware of dawn). The paper states the Kanbun system is highly sophisticated.
2. Resource gap quantified: over 48,900 Tang poems are accessible in Quan Tangshi online, but only around 500 Tang poems adapted into Kanbun form are accessible; much kundoku data sits in old books where OCR is not yet practical ("beyond our ability to apply OCR to them"), so machine translation is proposed as the efficient path.
3. Contributions: first Classical-Chinese-to-Kanbun dataset in the world; two tasks defined (character reordering into Japanese reading order; machine translation into kundoku text); fine-tuned language models beat the earlier rule-based approach (Yasuoka); pipeline experiments show correct pre-reordering improves translation.
4. Evaluation: model outputs compared with human scores; discussion of best evaluation method for Classical-Chinese-to-Kanbun translation.
5. Historical claims used in the paper's introduction (citing Okimori 2017 and Kin 2010): Classical Chinese reached Japan roughly 2,000 years ago; adaptation into Japanese reading methods began in the 8th century CE. Kanbun occupies 50 of 200 points in current Japanese university entrance examinations.

## Notes for drafting

- Use as evidence that kunten-type reading aids are now a live NLP target, complementing the NINJAL database and IPSJ point-recognition work.
- The 500-vs-48,900 contrast is a citable quantitative statement about the scarcity of digitized glossed/kundoku texts.
