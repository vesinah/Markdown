# [2025] Popović et al. — Dating Ancient Manuscripts Using Radiocarbon and AI-Based Writing Style Analysis

**Source URL:** https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0323185
**Accessed:** 2026-08-25 (live fetch verified)
**Citation:** Popović M, Dhali MA, Schomaker L, van der Plicht J, Lund Rasmussen K, La Nasa J, Degano I, Colombini MP, Tigchelaar E (2025) "Dating ancient manuscripts using radiocarbon and AI-based writing style analysis." *PLoS One* 20(6): e0323185. https://doi.org/10.1371/journal.pone.0323185
**Relevance to unique-witness methodology:** model for combining radiocarbon dating of writing support, AI palaeography, and expert judgement where no dated external anchors exist.

---

## Abstract
Determining by means of palaeography the chronology of ancient handwritten manuscripts such as the Dead Sea Scrolls is essential for reconstructing the evolution of ideas, but there is an almost complete lack of date-bearing manuscripts. To overcome this problem, we present Enoch, an AI-based date-prediction model, trained on the basis of 24 14C-dated scroll samples. By applying Bayesian ridge regression on angular and allographic writing style feature vectors, Enoch could predict 14C-based dates with varied mean absolute errors (MAEs) of 27.9 to 30.7 years. The trained Enoch model then computed date predictions for 135 non-dated scrolls, aligning with 79% in palaeographic post-hoc evaluation. The 14C ranges and Enoch's style-based predictions are often older than traditionally assumed palaeographic estimates, leading to a new chronology of the scrolls.

## Key methodological points (from full text)
1. **Palaeography's subjectivity problem:** script-based dating lacks reliably grounded anchor points; date-bearing manuscripts are almost absent among the scrolls; most scrolls have no stratigraphy.
2. **Radiocarbon protocol:** 30 manuscripts sampled from 4 sites; first application to the scrolls of a solvent-extraction pre-treatment specifically designed to remove fatty materials before 14C dating; specialized analytical chemistry applied before/after pretreatment to verify that lipids do not skew dates; two AMS machines used; 27 valid 14C dates obtained.
3. **Calibration caution:** calibrated results are often bimodal because the calibration curve is not monotonic; handled via Bayesian methods (OxCal v4.4.2 raw distributions as training labels).
4. **Style features:** binarization of multispectral band images with BiNet (encoder-decoder U-net); feature vectors combine allographic character-shape codebooks (Kohonen self-organized map; 93% accuracy classifying Hasmonaean vs Herodian scripts) and textural "hinge" curvature statistics — i.e., shape evidence deliberately uncoupled from textual content.
5. **Model:** Bayesian ridge regression chosen over deep learning due to very small labeled dataset (24 samples); outputs probability distributions with error margins rather than single dates; validated by held-out images (85.14% overlap with original 14C probability distributions) and leave-one-out tests.
6. **Expert-in-the-loop:** predictions for 135 undated scrolls judged realistic in 107 cases (79%) by expert palaeographers; binomial test p = 4.44e–12 against chance.
7. **Findings:** 14C + AI dates tend to be older than traditional palaeographic estimates; 'Herodian' script emerged earlier than previously thought; relative script typology "can only be maintained with restrictions."
8. **General lesson for unica:** integrate multiple independent evidence classes — material (radiocarbon), geometric (shape analysis), and expert palaeography — while keeping each source's uncertainty quantified and visible ("we did not take any model that is already available, but developed a robust model that can predict dates using only a very small amount of data, deal with uncertainty, and provide explainability").

Data/code openly available: Zenodo DOIs 10.5281/zenodo.10998958 (data), 10.5281/zenodo.13319794 (code), 10.5281/zenodo.8167946 (film). Funded by ERC Horizon 2020 grant 640497 (HandsandBible).
