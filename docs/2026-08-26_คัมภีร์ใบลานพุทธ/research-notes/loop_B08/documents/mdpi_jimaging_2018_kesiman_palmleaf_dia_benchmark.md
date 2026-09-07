Title: Benchmarking of Document Image Analysis Tasks for Palm Leaf Manuscripts from Southeast Asia

URL Source: https://www.mdpi.com/2313-433X/4/2/43

Published Time: 2018-02-22

Markdown Content:
Logical Operator Operator

Search Text

Search Type

_add\_circle\_outline_

_remove\_circle\_outline_

[![Image 1: jimaging-logo](https://pub.mdpi-res.com/img/journals/jimaging-logo.png?3f88d1412236760e)](https://www.mdpi.com/journal/jimaging)

## Article Menu

Font Type:

_Arial_ _Georgia_ _Verdana_

Font Size:

Aa Aa Aa

Line Spacing:

__ __ __

Column Width:

__ __ __

Background:

Open Access Article

by 
Made Windu Antara Kesiman

 1,2,*[](mailto:made_windu_antara.kesiman@univ-lr.fr)[![Image 2: ORCID](https://pub.mdpi-res.com/img/design/orcid.png?0465bc3812adeb52?1787208668)](https://orcid.org/0000-0002-6652-3707), 
Dona Valy

 3,4, 
Jean-Christophe Burie

 1, 
Erick Paulus

 5, 
Mira Suryani

 5, 
Setiawan Hadi

 5, 
Michel Verleysen

 2, 
Sophea Chhun

 4 and 
Jean-Marc Ogier

 1[![Image 3: ORCID](https://pub.mdpi-res.com/img/design/orcid.png?0465bc3812adeb52?1787208668)](https://orcid.org/0000-0002-5666-475X)

1

Laboratoire Informatique Image Interaction (L3i), Université de La Rochelle, 17042 La Rochelle, France

2

Laboratory of Cultural Informatics (LCI), Universitas Pendidikan Ganesha, Singaraja, Bali 81116, Indonesia

3

Institute of Information and Communication Technologies, Electronic, and Applied Mathematics (ICTEAM), Université Catholique de Louvain, 1348 Louvain-la-Neuve, Belgium

4

Department of Information and Communication Engineering, Institute of Technology of Cambodia, Phnom Penh, Cambodia

5

Department of Computer Science, Universitas Padjadjaran, Bandung 45363, Indonesia

*

Author to whom correspondence should be addressed.

Submission received: 15 December 2017 / Revised: 10 February 2018 / Accepted: 18 February 2018 / Published: 22 February 2018

## Abstract

This paper presents a comprehensive test of the principal tasks in document image analysis (DIA), starting with binarization, text line segmentation, and isolated character/glyph recognition, and continuing on to word recognition and transliteration for a new and challenging collection of palm leaf manuscripts from Southeast Asia. This research presents and is performed on a complete dataset collection of Southeast Asian palm leaf manuscripts. It contains three different scripts: Khmer script from Cambodia, and Balinese script and Sundanese script from Indonesia. The binarization task is evaluated on many methods up to the latest in some binarization competitions. The seam carving method is evaluated for the text line segmentation task, compared to a recently new text line segmentation method for palm leaf manuscripts. For the isolated character/glyph recognition task, the evaluation is reported from the handcrafted feature extraction method, the neural network with unsupervised learning feature, and the Convolutional Neural Network (CNN) based method. Finally, the Recurrent Neural Network-Long Short-Term Memory (RNN-LSTM) based method is used to analyze the word recognition and transliteration task for the palm leaf manuscripts. The results from all experiments provide the latest findings and a quantitative benchmark for palm leaf manuscripts analysis for researchers in the DIA community.

## 1. Introduction

Since the world entered the digital age in the early 20th century, the need for a document image analysis (DIA) system is increasing. This is due to the dramatic increase in efforts to digitize the various types of document collections available, especially the ancient documents of historical relics found in various parts of the world. Some very interesting projects on a wide variety of heritage document collections can be mentioned here: for example, the tranScriptorium project ([http://transcriptorium.eu/](http://transcriptorium.eu/)) [[1](https://www.mdpi.com/2313-433X/4/2/43#B1-jimaging-04-00043)]; the READ (Recognition and Enrichment of Archival Documents) project ([https://read.transkribus.eu/](https://read.transkribus.eu/)) [[2](https://www.mdpi.com/2313-433X/4/2/43#B2-jimaging-04-00043)], which works on documents from the Middle Ages to today, and also focuses on different languages ranging from Ancient Greek to modern English; the IAM Historical Document Database (IAM-HistDB) ([http://www.fki.inf.unibe.ch/databases/iam-historical-document-database](http://www.fki.inf.unibe.ch/databases/iam-historical-document-database)) [[3](https://www.mdpi.com/2313-433X/4/2/43#B3-jimaging-04-00043)], which includes handwritten historical manuscript images from the Saint Gall Database from the 9th century in Latin; the Parzival Database from the 13th century in German; the Washington Database from the 18th century in English; the Ancient Lives Project ([https://www.ancientlives.org/](https://www.ancientlives.org/)) [[4](https://www.mdpi.com/2313-433X/4/2/43#B4-jimaging-04-00043)], which asks volunteers to transcribe Ancient Greek text fragments from the Oxyrhynchus Papyri collection; and many other projects.

To accelerate the process of accessing, preserving, and disseminating the contents of the heritage documents, a DIA system is needed. Besides aiming to preserve the existence of such ancient documents physically, the DIA system is expected to enable open access to the contents of the documents and provide opportunities for a wider audience to access all the important information stored in the document. DIA is the process of using various technologies to extract text, printed or handwritten, and graphics from digitized document files ([http://www.cvisiontech.com/library/pdf/pdf-document/document-image-analysis.html](http://www.cvisiontech.com/library/pdf/pdf-document/document-image-analysis.html)) [[5](https://www.mdpi.com/2313-433X/4/2/43#B5-jimaging-04-00043)]. DIA systems generally have a major role in identifying, analyzing, extracting, structuring, and transferring document contents more quickly, effectively, and efficiently. This system is able to work semi-automatically or even fully automatically without human intervention. The DIA system is expected to save time, cost, and effort at many points in the heritage document preservation process.

However, although the DIA research develops rapidly, it is undeniable that most of the document collections used in the initial step are from developed regions such as America and European countries. The document samples from these countries are mostly written in English or old English with Latin/Roman script. Several important document collections were finally used as standard benchmarks for the evaluation of the latest DIA research results. The next wave of DIA research finally began to deal with documents from non-English-speaking areas with non-Latin scripts, such as Arabic, Chinese, and Japanese documents. During the evolution of DIA research in the last two decades, DIA researchers have proposed and achieved satisfactory solutions for many complex problems of document analysis for these types of documents. However, the DIA research challenge is ongoing. The latest challenge is documents from Asia, with new languages and more complex scripts to explore, such as Devanagari script [[6](https://www.mdpi.com/2313-433X/4/2/43#B6-jimaging-04-00043)], Gurmukhi script [[7](https://www.mdpi.com/2313-433X/4/2/43#B7-jimaging-04-00043),[8](https://www.mdpi.com/2313-433X/4/2/43#B8-jimaging-04-00043),[9](https://www.mdpi.com/2313-433X/4/2/43#B9-jimaging-04-00043),[10](https://www.mdpi.com/2313-433X/4/2/43#B10-jimaging-04-00043)], Bangla script [[11](https://www.mdpi.com/2313-433X/4/2/43#B11-jimaging-04-00043)], and Malayalam script [[12](https://www.mdpi.com/2313-433X/4/2/43#B12-jimaging-04-00043)], and the case of multiple languages and scripts in documents from India. Optical character recognition (OCR) for Indian languages is considered more difficult in general than for European languages because of the large number of vowels, consonants, and conjuncts (combinations of vowels and consonants) [[13](https://www.mdpi.com/2313-433X/4/2/43#B13-jimaging-04-00043)].

This work was part of exploring DIA research for a palm leaf manuscripts collection from Southeast Asia. This collection offers a new challenge for DIA researchers because palm leaves are used as the writing medium and the language and script have never been analyzed before. In this paper, we did a comprehensive benchmark experimental test of some principal tasks in the DIA system, starting with binarization, text line segmentation, isolated character/glyph recognition, word recognition, and transliteration. To the best of our knowledge, this work is the first comprehensive study of the DIA researchers’ community and the first to perform a complete series of experimental benchmarking analyses of palm leaf manuscripts. The results of this research will be very useful in accelerating, evaluating, and improving the performance of existing DIA systems for a new type of document.

This paper is organized as follow. [Section 2](https://www.mdpi.com/2313-433X/4/2/43#sec2-jimaging-04-00043) gives a brief description of the palm leaf manuscripts collection from Southeast Asia, especially the Khmer palm leaf manuscript corpus from Cambodia and two palm leaf manuscript corpuses, the Balinese and Sundanese manuscripts from Indonesia. The challenges of DIA for this manuscript corpus are also presented in this section. [Section 3](https://www.mdpi.com/2313-433X/4/2/43#sec3-jimaging-04-00043) describes the DIA tasks that need to be developed for the palm leaf manuscript collections, followed by a description of the methods investigated for those tasks. The datasets and evaluation methods for each DIA task used in the experimental studies for this work are presented in [Section 4](https://www.mdpi.com/2313-433X/4/2/43#sec4-jimaging-04-00043). [Section 5](https://www.mdpi.com/2313-433X/4/2/43#sec5-jimaging-04-00043) reports and analyzes the detailed results of the experiments. Finally, conclusions are given in [Section 6](https://www.mdpi.com/2313-433X/4/2/43#sec6-jimaging-04-00043).

## 2. Palm Leaf Manuscripts from Southeast Asia

Regarding the use of writing materials and tools, history records the discovery of important documents written on stone plates, clay plates or tablets, bark, skin, animal bones, ivory, tortoiseshell, papyrus, parchment (form of leather made of processed sheepskin or calfskin) ([http://www.casepaper.com/company/paper-history](http://www.casepaper.com/company/paper-history)) [[14](https://www.mdpi.com/2313-433X/4/2/43#B14-jimaging-04-00043)], copper and bronze plates, bamboo, palm leaves, and other materials [[15](https://www.mdpi.com/2313-433X/4/2/43#B15-jimaging-04-00043)]. The choice of natural materials that can be used as a medium for document writing is strongly influenced by the geographical condition and location of a nation. For example, because bamboo and palm trees are easily found in Asia, both types of materials were the first choice of writing material in Asia. In Southeast Asia, most ancient manuscripts were written on palm leaves. For example, in Cambodia, palm leaves have been used as a writing material dating back to the first appearance of Buddhism in the country. In Thailand, dried palm leaves have also been used as one of the most popular written documents for over 500 years [[16](https://www.mdpi.com/2313-433X/4/2/43#B16-jimaging-04-00043)]. Palm leaves were also historically used as writing supports in manuscripts from the Indonesian archipelago. The leaves of sugar, or toddy, palm (Borassus flabellifer) are known as lontar. The existence of ancient palm leaf manuscripts in Southeast Asia is very important both in terms of the quantity and variety of historical contents.

### 2.1. Balinese Palm Leaf Manuscripts—Collection from Bali, Indonesia

#### 2.1.1. Corpus

Apart from the collection at the museum (Museum Gedong Kertya Singaraja and Museum Bali Denpasar), it is estimated that there are more than 50,000 lontar collections that are owned by private families ([Figure 1](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f001)). For this research, in order to obtain a large variety of manuscript images, sample images have been collected from 23 different collections, which come from five different locations (regions): two museums and three private families. They consist of 10 randomly selected collections from Museum Gedong Kertya, City of Singaraja, Regency of Buleleng, North Bali, Indonesia, four collections from manuscript collections of Museum Bali, City of Denpasar, South Bali, seven collections from a private family collection from the village of Jagaraga, Regency of Buleleng, and two other private family collections from the village of Susut, Regency of Bangli and the village of Rendang, Regency of Karangasem [[17](https://www.mdpi.com/2313-433X/4/2/43#B17-jimaging-04-00043)].

**Figure 1.** Balinese palm leaf manuscripts.

#### 2.1.2. Balinese Script and Language

Although the official language of Indonesia, Bahasa Indonesia, is written in the Latin script, Indonesia has many local, traditional scripts, most of which are ultimately derived from Brahmi [[18](https://www.mdpi.com/2313-433X/4/2/43#B18-jimaging-04-00043)]. In Bali, palm leaf manuscripts were written in the Balinese script in the Balinese language, in the ancient literary texts composed in the old Javanese language of Kawi and Sanskrit. Balinese language is a Malayo-Polynesian language spoken by more than 3 million people, mainly in Bali, Indonesia ([www.omniglot.com/writing/balinese.htm](http://www.omniglot.com/writing/balinese.htm)) [[19](https://www.mdpi.com/2313-433X/4/2/43#B19-jimaging-04-00043)]. Balinese is the native language of the people of Bali, known locally as Basa Bali [[18](https://www.mdpi.com/2313-433X/4/2/43#B18-jimaging-04-00043)]. The alphabet and numbers of Balinese script are composed of ±100 character classes including consonants, vowels, and some other special compound characters. According to the Unicode Standard 9.0, the Balinese script actually has the Unicode table from 1B00 to 1B7F.

### 2.2. Khmer Palm Leaf Manuscripts—Collection from Cambodia

#### 2.2.1. Corpus

In Cambodia, Khmer palm leaf manuscripts ([Figure 2](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f002)) are still seen in Buddhist establishments and are traditionally used by monks as reading scriptures. Various libraries and institutions have been collecting and digitizing these manuscripts and have even shared the digital images with the public. For instance, the École Française d’Extrême-Orient (EFEO) has launched an online database ([http://khmermanuscripts.efeo.fr](http://khmermanuscripts.efeo.fr/)) [[20](https://www.mdpi.com/2313-433X/4/2/43#B20-jimaging-04-00043)] of microfilm images of hundreds of Khmer palm leaf manuscript collections. Some digitized collections are also obtained from the Buddhist Institute, which is one of the biggest institutes in Cambodia responsible for research on Cambodian literature and language related to Buddhism, and also from the National Library (situated in the capital city, Phnom Penh), which is home to a large collection of palm leaf manuscripts. Moreover, a standard digitization campaign was conducted in order to collect palm leaf manuscript images found in Buddhist temples in different locations throughout Cambodia: Phnom Penh, Kandal, and Siem Reap [[21](https://www.mdpi.com/2313-433X/4/2/43#B21-jimaging-04-00043)].

**Figure 2.** Khmer palm leaf manuscript.

#### 2.2.2. Khmer Script and Language

According to the era during which the documents were created, slightly different versions of Khmer characters are used in the writing of Khmer palm leaf manuscripts. The Khmer alphabet is famous for its numerous symbols (~70), including consonants, different types of vowels, diacritics, and special characters. Certain symbols even have multiple shapes and forms depending on what other symbols are combined with them to create words. The languages written on palm leaf documents vary from Khmer, the official language of Cambodia, to Pali and Sanskrit, by which the modern Khmer language was considerably influenced. Only a minority of Cambodian people, such as philologists and Buddhist monks, are able to read and understand the latter languages.

### 2.3. Sundanese Palm Leaf Manuscripts—Collection from West Java, Indonesia

#### 2.3.1. Corpus

The collection of Sundanese palm leaf manuscripts ([Figure 3](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f003)) comes from Situs Kabuyutan Ciburuy, Garut, West Java, Indonesia. The Kabuyutan Ciburuy is a complex cultural heritage from Prabu Siliwangi and Prabu Kian Santang, the king and the son of the Padjadjaran kingdom. The cultural complex consists of six buildings. One of them is Bale Padaleuman, which is used to store the Sundanese palm leaf manuscripts. The oldest Sundanese palm leaf manuscript in Situs Kabuyutan Ciburuy came from the 15th century. In Bale Padaleuman, there are 27 collections of Sundanese manuscripts. Each collection contains 15 to 30 pages, with dimensions of 25–45 cm in length × 10–15 cm in width [[22](https://www.mdpi.com/2313-433X/4/2/43#B22-jimaging-04-00043)].

**Figure 3.** Sundanese palm leaf manuscript.

#### 2.3.2. Sundanese Script and Language

The Sundanese palm leaf manuscripts were written in the ancient Sundanese language and script. The characters consist of numbers, vowels (such as a, i, u, e, and o), basic characters (such as ha, na, ca, ra, etc.), punctuation, diacritics (such as panghulu, pangwisad, paneuleung, panyuku, etc.), and many special compound characters.

### 2.4. Challenges of Document Image Analysis for Palm Leaf Manuscripts

There are two main technical challenges to assessing palm leaf manuscripts in a DIA system. The first challenge is the physical condition of the palm leaf manuscript, which will strongly influence the quality of the document images captured. For the image capturing process for DIA research, data in a paper document are usually captured by optical scanning, but when the document is on a different medium such as microfilm, palm leaves, or fabric, photographic methods are often used to capture the images [[13](https://www.mdpi.com/2313-433X/4/2/43#B13-jimaging-04-00043)]. Nowadays, due to the specific characteristics of the physical support of the manuscripts, the development of DIA methods for palm leaf manuscripts in order to extract relevant information is considered a new research problem in handwritten document analysis. Ancient palm leaf manuscripts contain artifacts due to aging, foxing, yellowing, strain, local shading effects, low intensity variations or poor contrast, random noises, discolored parts, fading, and other types of degradation.

The second challenge is the complexity of the script. The Southeast Asian manuscripts with different scripts and languages provide real challenges for document analysis methods, not only because of the different forms of characters in the script, but also because the writing style of each script (e.g., how to join or separate a character in a text line) differs. It ranges widely from a binarization process [[23](https://www.mdpi.com/2313-433X/4/2/43#B23-jimaging-04-00043),[24](https://www.mdpi.com/2313-433X/4/2/43#B24-jimaging-04-00043),[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043)], text line segmentation [[26](https://www.mdpi.com/2313-433X/4/2/43#B26-jimaging-04-00043),[27](https://www.mdpi.com/2313-433X/4/2/43#B27-jimaging-04-00043)], and character and text recognition tasks [[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043),[28](https://www.mdpi.com/2313-433X/4/2/43#B28-jimaging-04-00043),[29](https://www.mdpi.com/2313-433X/4/2/43#B29-jimaging-04-00043)], to the word spotting methods [[30](https://www.mdpi.com/2313-433X/4/2/43#B30-jimaging-04-00043)].

In the domain of DIA, handwritten character and text recognition has been the subject of intensive research during the last three decades. Some methods have already reached a satisfactory performance, especially for Latin, Chinese, and Japanese scripts. However, the development of handwritten character and text recognition methods for other various Asian scripts presents many issues. In the OCR task and development for palm leaf manuscripts from Southeast Asia, several deformations in the character shapes are visible due to the merges and fractures of the use of nonstandard fonts. The similarities of distinct character shapes, overlaps, and interconnection of the neighboring characters further complicate the OCR system [[31](https://www.mdpi.com/2313-433X/4/2/43#B31-jimaging-04-00043)]. One of the main problems faced when dealing with segmented handwritten character recognition is the ambiguity and illegibility of the characters [[32](https://www.mdpi.com/2313-433X/4/2/43#B32-jimaging-04-00043)]. These characteristics provide suitable conditions to test and evaluate the robustness of feature extraction methods that were proposed for character recognition.

## 3. Document Image Analysis Tasks and Investigated Methods

Heritage document preservation is not just about converting physical documents into document images. With many physical documents being digitized and stored in large document databases, and then sent and received via digital machines, the interest and demand grew to require more functionalities than simply viewing and print the images [[33](https://www.mdpi.com/2313-433X/4/2/43#B33-jimaging-04-00043)]. Further treatment is required before the collection of document images can be explored more extensively. For example, a more specific research field needed to be developed to add machine capabilities for extracting information from these images, reading text on a document page, finding sentences, and locating paragraphs, lines, words, and symbols on a diagram [[33](https://www.mdpi.com/2313-433X/4/2/43#B33-jimaging-04-00043)].

In this work, the methods for each DIA task were investigated for palm leaf manuscripts. The binarization task is evaluated using the latest methods from binarization competitions. The seam carving method is evaluated for the text line segmentation task, compared to a recent text line segmentation method for palm leaf manuscripts [[27](https://www.mdpi.com/2313-433X/4/2/43#B27-jimaging-04-00043)]. For the isolated character/glyph recognition task, the evaluation is reported from the handcrafted feature extraction method, the neural network with unsupervised learning feature to the CNN based method. Finally, the RNN-LSTM based method is used to analyze the word recognition and transliteration task for palm leaf manuscripts.

### 3.1. Binarization

Binarization is widely applied as the first pre-processing step in image document analysis [[34](https://www.mdpi.com/2313-433X/4/2/43#B34-jimaging-04-00043)]. Binarization is a common starting point for document image analysis and converts gray image values ​​into binary representation for background and foreground, or, more specifically, text and non-text, which is then fed into further document processing tasks such as text line segmentation and optical character recognition. The performance of binarization techniques has a great impact and directly affects the performance of the recognition task [[35](https://www.mdpi.com/2313-433X/4/2/43#B35-jimaging-04-00043)]. Non-optimal binarization methods produce unrecognizable characters with noise [[16](https://www.mdpi.com/2313-433X/4/2/43#B16-jimaging-04-00043)]. Many binarization methods have been reported. These methods have been tested and evaluated on different types of document collections. Based on the choice of the thresholding value, binarization methods can generally be divided into two types, global binarization and local adaptive binarization [[16](https://www.mdpi.com/2313-433X/4/2/43#B16-jimaging-04-00043)]. Some surveys and comparative studies of the performance of several binarization methods have been reported [[35](https://www.mdpi.com/2313-433X/4/2/43#B35-jimaging-04-00043),[36](https://www.mdpi.com/2313-433X/4/2/43#B36-jimaging-04-00043)]. A binarization method that performs well for one document collection may not necessarily be applied to another document collection with the same performance [[34](https://www.mdpi.com/2313-433X/4/2/43#B34-jimaging-04-00043)]. For this reason, there is always a need to perform a comprehensive evaluation of the existing binarization methods for a new document collection that has different characteristics, for example the historical archive documents [[36](https://www.mdpi.com/2313-433X/4/2/43#B36-jimaging-04-00043)].

In this work, we compared several alternative binarization algorithms for palm leaf manuscripts. We tested and evaluated some well-known standard binarization methods, and some binarization methods that are experimentally promising for historical archive documents, though not specifically for images of palm leaf manuscripts. We also tested the binarization methods from the Document Image Binarization Competition (DIBCO) competition [[37](https://www.mdpi.com/2313-433X/4/2/43#B37-jimaging-04-00043),[38](https://www.mdpi.com/2313-433X/4/2/43#B38-jimaging-04-00043)], for example Howe’s method [[39](https://www.mdpi.com/2313-433X/4/2/43#B39-jimaging-04-00043)] and the ones from the International Conference on Frontiers in Handwriting Recognition (ICFHR) competition (amadi.univ-lr.fr/ICFHR2016_Contest) [[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043),[40](https://www.mdpi.com/2313-433X/4/2/43#B40-jimaging-04-00043)].

#### 3.1.1. Global Thresholding

Global thresholding is the simplest technique and the most conventional approach for binarization [[34](https://www.mdpi.com/2313-433X/4/2/43#B34-jimaging-04-00043),[41](https://www.mdpi.com/2313-433X/4/2/43#B41-jimaging-04-00043)]. A single threshold value was calculated from the global characteristics of the image. This value should be properly chosen based on a heuristic technique or a statistical measurement to be able to give promising optimal binarization results [[36](https://www.mdpi.com/2313-433X/4/2/43#B36-jimaging-04-00043)]. It is widely known that using a global threshold to process a batch of archive images with different illumination and noise variation is not a proper choice. The variation between images in the foreground and background colors on low-quality document images gives unsatisfactory results. It is difficult to choose one fixed threshold value that is adaptable for all images [[36](https://www.mdpi.com/2313-433X/4/2/43#B36-jimaging-04-00043),[42](https://www.mdpi.com/2313-433X/4/2/43#B42-jimaging-04-00043)].

Otsu’s method is a very popular global binarization technique [[34](https://www.mdpi.com/2313-433X/4/2/43#B34-jimaging-04-00043),[41](https://www.mdpi.com/2313-433X/4/2/43#B41-jimaging-04-00043)]. Conceptually, Otsu’s method tries to find an optimum global threshold on an image by minimizing the weighted sum of variances of the objects and background pixels [[34](https://www.mdpi.com/2313-433X/4/2/43#B34-jimaging-04-00043)]. Otsu’s method is implemented as a standard binarization technique in a built-in Matlab function called graythresh ([https://fr.mathworks.com/help/images/ref/graythresh.html](https://fr.mathworks.com/help/images/ref/graythresh.html)) [[43](https://www.mdpi.com/2313-433X/4/2/43#B43-jimaging-04-00043)].

#### 3.1.2. Local Adaptive Binarization

To overcome the weakness of the global binarization technique, many local adaptive binarization techniques were proposed, for example Niblack’s method [[34](https://www.mdpi.com/2313-433X/4/2/43#B34-jimaging-04-00043),[36](https://www.mdpi.com/2313-433X/4/2/43#B36-jimaging-04-00043),[41](https://www.mdpi.com/2313-433X/4/2/43#B41-jimaging-04-00043),[42](https://www.mdpi.com/2313-433X/4/2/43#B42-jimaging-04-00043),[44](https://www.mdpi.com/2313-433X/4/2/43#B44-jimaging-04-00043)], Sauvola’s method [[34](https://www.mdpi.com/2313-433X/4/2/43#B34-jimaging-04-00043),[36](https://www.mdpi.com/2313-433X/4/2/43#B36-jimaging-04-00043),[41](https://www.mdpi.com/2313-433X/4/2/43#B41-jimaging-04-00043),[42](https://www.mdpi.com/2313-433X/4/2/43#B42-jimaging-04-00043),[44](https://www.mdpi.com/2313-433X/4/2/43#B44-jimaging-04-00043),[45](https://www.mdpi.com/2313-433X/4/2/43#B45-jimaging-04-00043)], Wolf’s method [[42](https://www.mdpi.com/2313-433X/4/2/43#B42-jimaging-04-00043),[44](https://www.mdpi.com/2313-433X/4/2/43#B44-jimaging-04-00043),[46](https://www.mdpi.com/2313-433X/4/2/43#B46-jimaging-04-00043)], NICK method [[44](https://www.mdpi.com/2313-433X/4/2/43#B44-jimaging-04-00043)], and the Rais method [[34](https://www.mdpi.com/2313-433X/4/2/43#B34-jimaging-04-00043)]. The threshold value in local adaptive binarization technique is calculated in each smaller local image area, region, or window. Niblack’s method proposed a local thresholding computation based on the local mean and local standard deviation of a rectangular local window for each pixel on the image. The rectangular sliding local window will cover the neighborhood for each pixel. Using this concept, Niblack’s method was reported to outperform many thresholding techniques and gave optimal results for many document collections. However, there is still a drawback to this method. It was found that Niblack’s method works optimally only on the text region, but is not well suited for large non-text regions of an image. The absence of text in local areas forces Niblack’s method to detect noise as text. The suitable window size should be chosen based on the character and stroke size, which may vary for each image.

Many other local adaptive binarization techniques were proposed to improve the performance of the basic Niblack method. For example, Sauvola’s method is a modified version of Niblack’s method. Sauvola’s method proposes a local binarization technique to deal with light texture, large variations, and uneven illumination. The improvement over Niblack’s method is in the use of adaptive contribution of standard deviation in determining the local threshold on the gray values of text and non-text pixels. Sauvola’s method processes the image in N × N adjacent and non-overlapping blocks separately.

Wolf’s method tried to overcome the problem of Sauvola’s method when the gray values of text and non-text pixels are close to each other by normalizing the contrast and the mean gray value of the image to compute the local threshold. However, a sharp change in background gray values across the image decreases the performance of Wolf’s method. Two other improvements to Niblack’s method are NICK method and the Rais method. NICK method proposes a threshold computation derived from the basic Niblack’s method and the Rais method proposes an optimal size of window for the local binarization.

#### 3.1.3. Training-Based Binarization

The top two proposed methods in the Binarization Challenge for the ICFHR 2016 Competition on the Analysis of Handwritten Text in Images of Balinese Palm Leaf Manuscripts are training-based binarization methods [[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043)]. The best method in this competition employs a Fully Convolutional Network (FCN). It takes a color subimage as input and outputs the probability that each pixel in the sub-image is part of the foreground. The FCN is pre-trained on normal handwritten document images with automatically generated “ground truth” binarizations (using the method of Wolf et al. [[46](https://www.mdpi.com/2313-433X/4/2/43#B46-jimaging-04-00043)]). The FCN is then fine-tuned using DIBCO and HDIBCO competition images and their corresponding ground truth binarizations. Finally, the FCN is fine-tuned again on the provided Balinese palm leaf images. Consequently, the pixel probabilities of foreground are efficiently predicted for the whole image at once and thresholded at 0.5 to create a binarized output image.

The second-best method uses two neural network classifiers, C 1 and C 2, to classify each pixel as background or not. Two binarized images, B 1 and B 2, are generated in this step. C 1 is a rough classifier that tries to detect all the foreground pixels, while probably making mistakes for some background pixels. C 2 is an accurate classifier that should not classify a background pixel as a foreground pixel but probably misses some foreground pixels. Secondly, these two binary images are joined to get the final classification result.

### 3.2. Text Line Segmentation

Text line segmentation is a crucial pre-processing step in most DIA pipelines. The task aims at extracting and separating text regions into individual lines. Most line segmentation approaches in the literature require that the input image be binarized. However, due to the degradation and noise often found in historical documents such as palm leaf manuscripts, the binarization task is not able to produce good enough results (see [Section 5.1](https://www.mdpi.com/2313-433X/4/2/43#sec5dot1-jimaging-04-00043)). In this paper, we investigate two line segmentation methods that are independent of the binarization task. These approaches work directly on color/grayscale images.

#### 3.2.1. Seam Carving Method

Arvanitopoulos and Süsstrunk [[47](https://www.mdpi.com/2313-433X/4/2/43#B47-jimaging-04-00043)] proposed a binarization-free method based on a two-stage process: medial seam and separating seam computation. The approach computes medial seams by splitting the input page image into columns whose smoothed projection profiles are then calculated. The positions of the medial seams are obtained based on the local maxima locations of the profiles. The goal of the second stage of the approach is to compute separating seams with the application on the energy map within the area restricted by the medial seams of two neighboring lines found in the previous stage. The technique carves paths that traverse the image from left to right, accumulating energy. The path with the minimum cumulative energy is then chosen.

#### 3.2.2. Adaptive Path Finding Method

This approach was proposed by Valy et al. [[27](https://www.mdpi.com/2313-433X/4/2/43#B27-jimaging-04-00043)]. The method takes as input a grayscale image of a document page. Connected components are extracted from the input image using the stroke width information by applying the stroke width transform (SWT) on the Canny edge map. The set of extracted components (filtered to remove components that come from noise and artifacts) is used to create a stroke map. Using column-wise projection profiles on the output map, estimated number and medial positions of text line can be defined. To adapt better to skew and fluctuation, an unsupervised learning called competitive learning is applied on the set of connected components found previously. Finally, a path finding technique is applied in order to create seam borders between adjacent lines by using a combination of two cost functions: one penalizing the path that goes through the foreground text (intensity difference cost function $D$) and another one favoring the path that stays close to the estimated medial lines (vertical distance cost function $V$). [Figure 4](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f004) illustrates an example of an optimal path.

**Figure 4.** An example of an optimal path going from start state $S_{1}$ to goal state $S_{n}$.

### 3.3. Isolated Character/Glyph Recognition

In a DIA system, word or text recognition tasks are generally categorized into two different approaches: segmentation-based and segmentation-free methods. In segmentation-based methods, the isolated character recognition task is a very important process [[9](https://www.mdpi.com/2313-433X/4/2/43#B9-jimaging-04-00043)]. A proper feature extraction and a correct classifier selection can increase the recognition rate [[48](https://www.mdpi.com/2313-433X/4/2/43#B48-jimaging-04-00043)]. Although many methods for isolated character recognition have been developed and tested, especially for Latin-based scripts and alphabets, there is still a need for in-depth evaluation of those methods as applied to various other scripts. This includes the isolated character recognition task for many Southeast Asian scripts, and more specifically scripts that were written on ancient palm leaf manuscripts.

Previous studies on isolated character recognition in palm leaf manuscripts have already been reported, but only with the Balinese script as the benchmark dataset [[28](https://www.mdpi.com/2313-433X/4/2/43#B28-jimaging-04-00043),[29](https://www.mdpi.com/2313-433X/4/2/43#B29-jimaging-04-00043)]. In that first work, an experimental study on feature extraction methods for character recognition of Balinese script was performed [[28](https://www.mdpi.com/2313-433X/4/2/43#B28-jimaging-04-00043)]. For the second work, a training-based method with neural network and unsupervised feature learning was used to increase the recognition rate [[29](https://www.mdpi.com/2313-433X/4/2/43#B29-jimaging-04-00043)]. In this paper, we will conduct a broader evaluation of the robustness of the methods previously tested on Balinese script, using the other two palm leaf manuscripts with Khmer and Sundanese scripts. In the next sub-sections, we provide a brief description of the methods. For a detailed description of each method, interested readers can refer to our previous works.

#### 3.3.1. Handcrafted Feature Extraction Methods

Since the beginning of pattern recognition research, many feature extraction methods for character recognition have been presented in the literature. In our previous work [[28](https://www.mdpi.com/2313-433X/4/2/43#B28-jimaging-04-00043)], we investigated and evaluated the performance of 10 feature extraction methods with two classifiers, k-NN (k-Nearest Neighbor) and SVM (Support Vector Machine), in 29 different schemes for Balinese script on palm leaf manuscripts. After evaluating the performance of those individual feature extraction methods, we found that the Histogram of Gradient (HoG) features as directional gradient-based features [[9](https://www.mdpi.com/2313-433X/4/2/43#B9-jimaging-04-00043),[49](https://www.mdpi.com/2313-433X/4/2/43#B49-jimaging-04-00043)] ([Figure 5](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f005)), the Neighborhood Pixels Weights (NPW) [[50](https://www.mdpi.com/2313-433X/4/2/43#B50-jimaging-04-00043)] ([Figure 6](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f006)), the Kirsch Directional Edges [[50](https://www.mdpi.com/2313-433X/4/2/43#B50-jimaging-04-00043)], and Zoning [[12](https://www.mdpi.com/2313-433X/4/2/43#B12-jimaging-04-00043),[32](https://www.mdpi.com/2313-433X/4/2/43#B32-jimaging-04-00043),[50](https://www.mdpi.com/2313-433X/4/2/43#B50-jimaging-04-00043),[51](https://www.mdpi.com/2313-433X/4/2/43#B51-jimaging-04-00043)] ([Figure 7](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f007)) give very promising results. We then proposed a new feature extraction method applying NPW on Kirsch edge images ([Figure 8](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f008)) and concatenated the NPW–Kirsch with two other features, HoG and Zoning method, with k-NN as the classifier.

**Figure 5.** The representation of the array of cells in HoG [[28](https://www.mdpi.com/2313-433X/4/2/43#B28-jimaging-04-00043)].

**Figure 6.** Neighborhood pixels for NPW features [[28](https://www.mdpi.com/2313-433X/4/2/43#B28-jimaging-04-00043)].

**Figure 7.** Type of Zoning (from left to right: vertical, horizontal, block, diagonal, circular, and radial zoning) [[28](https://www.mdpi.com/2313-433X/4/2/43#B28-jimaging-04-00043)].

**Figure 8.** Scheme of NPW on Kirsch features [[28](https://www.mdpi.com/2313-433X/4/2/43#B28-jimaging-04-00043)].

#### 3.3.2. Unsupervised Learning Feature and Neural Network

With the aim of improving the performance of our proposed feature extraction method, we continued our research on isolated character recognition by implementing the neural network as classifier. In this second step [[29](https://www.mdpi.com/2313-433X/4/2/43#B29-jimaging-04-00043)], the same combination of feature extraction methods was used and sent as the input feature vector to a single-layer neural network character recognizer. In addition to using only the neural network, we also applied an additional sub-module for the initial unsupervised learning based on K-Means clustering ([Figure 9](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f009)). This schema was inspired by the study of Coates et al. [[52](https://www.mdpi.com/2313-433X/4/2/43#B52-jimaging-04-00043),[53](https://www.mdpi.com/2313-433X/4/2/43#B53-jimaging-04-00043)]. The unsupervised learning calculates the initial learning weight for the neural network training phase from the cluster centers of all feature vectors.

**Figure 9.** Schema of character recognizer with feature extraction method, unsupervised learning feature, and neural network [[29](https://www.mdpi.com/2313-433X/4/2/43#B29-jimaging-04-00043)].

#### 3.3.3. Convolutional Neural Network

The multilayer convolutional neural networks (CNN) have proven very effective in areas such as image recognition and classification. In this evaluation experiment, a vanilla CNN is used. The architecture of the CNN ([Figure 10](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f010)) is described as follows (this architecture has also been reported in Khmer isolated character recognition baseline in [[21](https://www.mdpi.com/2313-433X/4/2/43#B21-jimaging-04-00043)]). The grayscale input images of isolated characters are rescaled to 48 × 48 pixels in size and normalized by applying histogram stretching. The network consists of three sets of convolution and max pooling pairs. All convolutional layers use a stride of one and are zero padded so that the output is the same size as the input. The output of each convolutional layer is activated using the ReLu function and followed by a max pooling of 2 × 2 blocks. The numbers of feature maps (of size 5 × 5) used in the three consecutive convolutional layers are 8, 16, and 32, respectively. The output of the last layers is flattened, and a fully-connected layer with 1024 neurons (also activated with ReLu) is added, followed by the last output layer (softmax activation) consisting of $N_{c l a s s}$ neurons, where $N_{c l a s s}$ is the number of character classes. Dropout with probability p = 0.5 is applied before the output layer to prevent overfitting. We trained the network using an Adam optimizer with a batch size of 100 and a learning rate of 0.0001.

**Figure 10.** Architecture of the CNN.

### 3.4. Word Recognition and Transliteration

In order to make the palm leaf manuscripts more accessible, readable, and understandable to a wider audience, an optical character recognition (OCR) system should be developed. In many DIA systems, word or text recognition is the final task in the processing pipeline. However, normally in Southeast Asian script the speech sound of the syllable change is related to some certain phonological rules. In this case, an OCR system is not enough. Therefore, a transliteration system should also be developed to help transliterate the ancient scripts on these manuscripts. By definition, transliteration is defined as the process of obtaining the phonetic translation of names across languages [[54](https://www.mdpi.com/2313-433X/4/2/43#B54-jimaging-04-00043)]. Transliteration involves rendering a language from one writing system to another. In [[54](https://www.mdpi.com/2313-433X/4/2/43#B54-jimaging-04-00043)], the problem is stated formally as a sequence labeling problem from one language alphabet to another. It will help us to index and to quickly and efficiently access the content of the manuscripts. In our previous work [[29](https://www.mdpi.com/2313-433X/4/2/43#B29-jimaging-04-00043)], a complete scheme for segmentation-based glyph recognition and transliteration specific to Balinese palm leaf manuscripts was proposed. In this work, a segmentation-free method will be evaluated to recognize and transliterate the words from three different scripts of a palm leaf manuscript.

#### RNN/LSTM-Based Methods

From the last decade, sequence-analysis-based methods using a Recurrent Neural Network-Long Short-Term Memory (RNN-LSTM) type of learning network have been very popular among researchers in text recognition. RNN-LSTM-based method together with a Connectionist Temporal Classification (CTC) works as a segmentation-free learning-based method to recognize the sequence of characters in a word or text without any handcrafted feature extraction method. The raw image pixel can be sent directly as the input to the learning network and there is no requirement to segment the training data sequence. RNN is basically an extended version of the basic feedforward neural network. In a RNN, the neurons in the hidden layer are connected to each other. RNN offers very good context-aware processing to recognize patterns in a sequence or time series. One drawback of RNN is the vanishing gradient problem. To deal with this problem, the LSTM architecture was introduced. The LSTM network adds multiplicative gates and additive feedback. Bidirectional LSTM is an LSTM architecture with two-directional (forward and backward) context processing. LSTM architecture is widely evaluated as a generic and language-independent text recognizer [[55](https://www.mdpi.com/2313-433X/4/2/43#B55-jimaging-04-00043)]. In this work, the OCRopy ([https://github.com/tmbdev/ocropy](https://github.com/tmbdev/ocropy)) [[56](https://www.mdpi.com/2313-433X/4/2/43#B56-jimaging-04-00043)] framework is used to test and evaluate the word recognition and transliteration tasks for the palm leaf manuscript collection. OCRopy provides the functional library of the OCR system by using RNN-LSTM architecture ([http://graal.hypotheses.org/786](http://graal.hypotheses.org/786)) [[57](https://www.mdpi.com/2313-433X/4/2/43#B57-jimaging-04-00043),[58](https://www.mdpi.com/2313-433X/4/2/43#B58-jimaging-04-00043)]. We evaluated the dataset with unidirectional LSTM and the (Bidirectional LTSM) BLSTM architecture.

## 4. Experiments: Datasets and Evaluation Methods

From the three manuscript corpuses (Khmer, Balinese, and Sundanese), the datasets for each DIA task were extracted and used in the experimental work for this research.

### 4.1. Binarization

#### 4.1.1. Datasets

The palm leaf manuscript datasets for binarization task are presented in [Table 1](https://www.mdpi.com/2313-433X/4/2/43#table_body_display_jimaging-04-00043-t001). For Khmer manuscripts, one ground truth binarized image is provided for each image, but for Balinese and Sundanese manuscripts, each image has two different ground truth binarized images [[17](https://www.mdpi.com/2313-433X/4/2/43#B17-jimaging-04-00043),[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043)]. The study of ground truth variability and subjectivity was reported in the previous work [[24](https://www.mdpi.com/2313-433X/4/2/43#B24-jimaging-04-00043)]. In this research, we only used the first binarized ground truth image for evaluation. The binarized ground truth images for Khmer manuscripts were generated manually with the help of photo editing software ([Figure 11](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f011)). A pressure-sensitive tip stylus is used to trace each text stroke by keeping the original size of the stroke width [[59](https://www.mdpi.com/2313-433X/4/2/43#B59-jimaging-04-00043)]. For the manuscripts from Bali, the binarized ground truth images have been created with a semi-automatic scheme [[17](https://www.mdpi.com/2313-433X/4/2/43#B17-jimaging-04-00043),[23](https://www.mdpi.com/2313-433X/4/2/43#B23-jimaging-04-00043),[24](https://www.mdpi.com/2313-433X/4/2/43#B24-jimaging-04-00043),[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043)] ([Figure 12](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f012)). The binarized ground truth images for Sundanese manuscripts were manually [[22](https://www.mdpi.com/2313-433X/4/2/43#B22-jimaging-04-00043)] generated using PixLabeler [[60](https://www.mdpi.com/2313-433X/4/2/43#B60-jimaging-04-00043)] ([Figure 13](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f013)). The training set is provided only for the Balinese dataset. We used all images of the Khmer and Sundanese corpuses as a test set because the training-based binarization method (ICFHR G1 method, see [Section 5.1](https://www.mdpi.com/2313-433X/4/2/43#sec5dot1-jimaging-04-00043)) was evaluated for the Khmer and Sundanese datasets by using only the pre-trained Balinese training set weighted model.

**Figure 11.** Khmer manuscript with binarized ground truth image.

**Figure 12.** Balinese manuscript with binarized ground truth image.

**Figure 13.** Sundanese manuscript with binarized ground truth image.

**Table 1.** Palm leaf manuscript datasets for binarization task.

#### 4.1.2. Evaluation Method

Following our previous work [[24](https://www.mdpi.com/2313-433X/4/2/43#B24-jimaging-04-00043)] and the evaluation method from the ICFHR competition [[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043)], three metrics of binarization evaluation that were used in the DIBCO 2009 contest [[37](https://www.mdpi.com/2313-433X/4/2/43#B37-jimaging-04-00043)] are used in the binarization task evaluation for this work. Those three metrics are F-Measure (FM) (Equation (3)), Peak SNR (PSNR) (Equation (5)), and Negative Rate Metric (NRM) (Equation (8)).

F-Measure (FM): FM is defined from Recall and Precision.

$$
Re c a l l = \frac{T P}{F N + T P} \times 100
$$

(1)

$$
Pr e c i s i o n = \frac{T P}{F P + T P} \times 100
$$

(2)

TP, defined as true positive, occurs when the image pixel is labeled as foreground and the ground truth is also. FP, defined as false positive, occurs when the image pixel is labeled as foreground but the ground truth is labeled as background. FN, defined as false negative, occurs when the image pixel is labeled as background but the ground truth is labeled as foreground (Equations (1) and (2)).

$$
F M = \frac{2 \times Re c a l l \times Pr e c i s i o n}{Re c a l l + Pr e c i s i o n}
$$

(3)

A higher F-measure indicates a better match.

Peak SNR (PSNR): PSNR is calculated from Mean Square Error (MSE) (Equation (4)).

$$
M S E = \sum_{x = 1}^{M} \sum_{y = 1}^{N} \frac{\left(\left(\right. I_{1} \left(\right. x , y \left.\right) - I_{2} \left(\right. x , y \left.\right) \left.\right)\right)^{2}}{M * N}
$$

(4)

$$
P S N R = 10 \times log_{10} \left(\right. \frac{C^{2}}{M S E} \left.\right) ,
$$

(5)

where C is defined as 1, the difference between foreground and background colors in the case of a binary image. A higher PSNR indicates a better match.

Negative Rate Metric (NRM): NRM is defined from the negative rate of false negative (NR FN) (Equation (6)) and the negative rate of false positive (NR FP) (Equation (7)):

$$
N R_{F N} = \frac{F N}{F N + T P}
$$

(6)

$$
N R_{F P} = \frac{F P}{F P + T N}
$$

(7)

TN, defined as true negative, occurs when both the image pixel and ground truth are labeled as background. The definitions of TP, FN, and FP are the same as the ones given for the F-Measure.

$$
N R M = \frac{N R_{F N} + N R_{F P}}{2}
$$

(8)

A lower NRM indicates a better match.

### 4.2. Text Line Segmentation

#### 4.2.1. Datasets

The palm leaf manuscript datasets for text line segmentation task are presented in [Table 2](https://www.mdpi.com/2313-433X/4/2/43#table_body_display_jimaging-04-00043-t002). The text line segmentation ground truth data for Balinese and Sundanese manuscripts have been generated by hand based on the binarized ground truth images [[17](https://www.mdpi.com/2313-433X/4/2/43#B17-jimaging-04-00043)]. For Khmer 1, a semi-automatic scheme is used [[26](https://www.mdpi.com/2313-433X/4/2/43#B26-jimaging-04-00043),[59](https://www.mdpi.com/2313-433X/4/2/43#B59-jimaging-04-00043)]. A set of medial points for each text is generated automatically on the binarization ground truth of the page image. Then those points can be moved up or down with a tool to fit the skew and fluctuation of the real text lines. We also note touching components spreading over multiple lines and the locations where they can be separated. For Khmer 2 and 3, an ID of the line it belongs to is associated with each annotated character. The region of a text line is the union of the areas of the polygon boundaries of all annotated characters composing it [[21](https://www.mdpi.com/2313-433X/4/2/43#B21-jimaging-04-00043),[27](https://www.mdpi.com/2313-433X/4/2/43#B27-jimaging-04-00043)].

**Table 2.** Palm leaf manuscript datasets for text line segmentation task.

#### 4.2.2. Evaluation Method

Following our previous work [[26](https://www.mdpi.com/2313-433X/4/2/43#B26-jimaging-04-00043)], we use the evaluation criteria and tool provided by ICDAR2013 Handwriting Segmentation Contest [[61](https://www.mdpi.com/2313-433X/4/2/43#B61-jimaging-04-00043)]. First, the one-to-one (o2o) match score is computed for a region pair based on the evaluator’s acceptance threshold. In our experiments, we used 90% as the acceptance threshold. Let N be the count of ground truth elements, and M the count of result elements. With the o2o score, three metrics are calculated: detection rate (DR), recognition accuracy (RA), and performance metric (FM).

### 4.3. Isolated Character/Glyph Recognition

#### 4.3.1. Datasets

The palm leaf manuscript datasets for isolated character/glyph recognition task are presented in [Table 3](https://www.mdpi.com/2313-433X/4/2/43#table_body_display_jimaging-04-00043-t003). For the Balinese character dataset, Balinese philologists manually annotated the segment of connected components that represented a correct character in Balinese script from the word-level binarized images that were manually annotated [[11](https://www.mdpi.com/2313-433X/4/2/43#B11-jimaging-04-00043),[17](https://www.mdpi.com/2313-433X/4/2/43#B17-jimaging-04-00043),[20](https://www.mdpi.com/2313-433X/4/2/43#B20-jimaging-04-00043)] using Aletheia ([http://www.primaresearch.org/tools/Aletheia](http://www.primaresearch.org/tools/Aletheia)) [[62](https://www.mdpi.com/2313-433X/4/2/43#B62-jimaging-04-00043),[63](https://www.mdpi.com/2313-433X/4/2/43#B63-jimaging-04-00043)] ([Figure 14](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f014)). The Sundanese character dataset was annotated manually [[22](https://www.mdpi.com/2313-433X/4/2/43#B22-jimaging-04-00043)] ([Figure 15](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f015)). For the Khmer character dataset, a tool has been developed to annotate characters/glyphs on the document page. The polygon boundary of each character is traced manually by dotting out its vertex one by one. A label is given to each annotated character after its boundary has been constructed [[21](https://www.mdpi.com/2313-433X/4/2/43#B21-jimaging-04-00043)] ([Figure 16](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f016)).

**Figure 14.** Balinese character dataset.

**Figure 15.** Sundanese character dataset.

**Figure 16.** Khmer character dataset.

**Table 3.** Palm leaf manuscript datasets for isolated character/glyph recognition task.

#### 4.3.2. Evaluation Method

Following the evaluation method from the ICFHR competition [[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043)], the recognition rate, i.e., the percentage of correctly classified samples over the test samples (C/N) is calculated, where C is the number of correctly recognized samples and N is the total number of test samples.

### 4.4. Word Recognition and Transliteration

#### 4.4.1. Datasets

The palm leaf manuscript datasets for word recognition and transliteration task are presented in [Table 4](https://www.mdpi.com/2313-433X/4/2/43#table_body_display_jimaging-04-00043-t004). For the Khmer dataset, all characters on the page have been annotated and grouped together into words ([Figure 17](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f017)). More than one label may be given to the created word. The order of how each character in the word is selected is also kept [[21](https://www.mdpi.com/2313-433X/4/2/43#B21-jimaging-04-00043)]. Balinese ([Figure 18](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f018)) and the Sundanese ([Figure 19](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f019)) word dataset was manually annotated using Aletheia [[63](https://www.mdpi.com/2313-433X/4/2/43#B63-jimaging-04-00043)].

**Figure 17.** Khmer word dataset.

**Figure 18.** Balinese word dataset.

**Figure 19.** Sundanese word dataset.

**Table 4.** Palm leaf manuscript datasets for word recognition and transliteration tasks.

#### 4.4.2. Evaluation Method

## 5. Experimental Results and Discussion

In this section, the performance of each method for the DIA tasks on palm leaf manuscript collections is presented.

### 5.1. Binarization

The experimental results for the binarization task are presented in [Table 5](https://www.mdpi.com/2313-433X/4/2/43#table_body_display_jimaging-04-00043-t005). These results show that the performance of all methods on each dataset is still quite low. Most of the methods achieve less than a 50% FM score. This means that palm leaf manuscripts are still an open challenge for the binarization task. The different parameter values for the local adaptive binarization methods show significant improvement in performance, but still give unsatisfactory results. In these experiments, the ICFHR G1 method was evaluated for the Khmer and Sundanese datasets using the pre-trained Balinese training set weighted model. Based on these experiments, Niblack’s method gives the highest FM score for Sundanese manuscripts ([Figure 20](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f020)), ICFHR G1 method gives the highest FM score for Khmer manuscripts ([Figure 21](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f021)), and ICFHR G2 gives the highest FM score for Balinese manuscripts ([Figure 22](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f022)). However, visually, there are still many broken and unrecognizable characters/glyphs, and noise is detected in the images.

**Figure 20.** Binarization of Sundanese manuscript with Niblack’s method.

**Figure 21.** Binarization of Khmer manuscript with ICFHR G1 method.

**Figure 22.** Binarization of Balinese manuscript with ICFHR G2 method.

**Table 5.** Experimental results for binarization task in F-Measure (FM), Peak SNR (PSNR), and Negative Rate Metric (NRM). A higher F-measure and PSNR, and a lower NRM, indicate a better result.

### 5.2. Text Line Segmentation

The experimental results for text line segmentation task are presented in [Table 6](https://www.mdpi.com/2313-433X/4/2/43#table_body_display_jimaging-04-00043-t006). According to these results, both methods perform sufficiently well for most datasets, except Khmer 1 ([Figure 23](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f023), [Figure 24](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f024) and [Figure 25](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f025)). This is because all images in this set are of low quality due to the fact that they are digitized from microfilms. Nevertheless, the adaptive path finding method achieves better results than the seam carving method on all datasets of palm leaf manuscripts in our experiment. The main difference between these two approaches is that instead of finding an optimal separating path within an area constrained by medial seam locations of two adjacent lines (in the seam carving method), the adaptive path finding approach tries to find a path close to an estimated straight seam line section. These line sections already represent well the seam borders between two neighboring lines, so they can be considered a better guide for finding good paths, hence producing better results.

**Figure 23.** Text line segmentation of Balinese manuscript with the Seam Carving method (green) and Adaptive Path Finding (red).

**Figure 24.** Text line segmentation of Khmer manuscript with the Seam Carving method (green) and Adaptive Path Finding (red).

**Figure 25.** Text line segmentation of Sundanese manuscript with the Seam Carving method (green) and Adaptive Path Finding (red).

**Table 6.** Experimental results for text line segmentation task: the count of ground truth elements (N), and the count of result elements (M), the one-to-one (o2o) match score is computed for a region pair based on 90% acceptance threshold, detection rate (DR), recognition accuracy (RA), and performance metric (FM).

One common error that we encounter for both methods is in the medial position computation stage. Detecting correct medial positions of text lines is crucial for the path-finding stage of the methods. In our experiment, we noticed that some parameters play an important role. For instance, the number of columns/slices $r$ of the seam carving method and the high and low thresholding values of the edge detection algorithm in the adaptive path finding approach are important. In order to select these parameters, a validation set consisting of five random pages is used. The optimal values of the parameters are then empirically selected based on the results from this validation set.

### 5.3. Isolated Character/Glyph Recognition

The experimental results for isolated character/glyph recognition task are presented in [Table 7](https://www.mdpi.com/2313-433X/4/2/43#table_body_display_jimaging-04-00043-t007). For handcrafted feature with k-NN, the Khmer set with 113,206 train images and 90,669 test images will need a considerable amount of time for one-to-one k-NN comparison, so we do not think it is reasonable to use it. For CNN 1, previous work only reported results for the Balinese set. For all ICFHR competition methods, the competition was proposed only for the Balinese set, so we only have the reported results for the Balinese set. According to these results, the handcrafted feature extraction combination of HoG-NPW-Kirsch-Zoning is a proper choice resulting in a good recognition rate for Balinese and Khmer characters/glyphs. The CNN methods also show satisfactory results, but the differences in recognition rates are not too significant with the handcrafted feature combinations. The unbalanced number of image samples for each character class means the CNN method did not perform optimally. For the Sundanese dataset, the handcrafted feature with NN slightly outperformed the CNN method. The UFL method slightly increased the recognition rate of the pure NN method for the Khmer and Balinese datasets.

**Table 7.** Experimental results for isolated character/glyph recognition tasks (in % recognition rate).

### 5.4. Word Recognition and Transliteration

The experimental results for word recognition and transliteration task are presented in [Table 8](https://www.mdpi.com/2313-433X/4/2/43#table_body_display_jimaging-04-00043-t008). The error rates for word recognition and transliteration tests set on each training model iteration are shown in [Figure 26](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f026), [Figure 27](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f027) and [Figure 28](https://www.mdpi.com/2313-433X/4/2/43#fig_body_display_jimaging-04-00043-f028). The LSTM-based architecture of OCRopy seems very promising in terms of recognizing and directly transliterating Balinese words. For the Khmer and Sundanese datasets, the LSTM architecture seems to struggle to learn the training data. More synthetic data training with a more frequent word should be generated in order to support the training process. For the Balinese dataset, a sequence depth of 100 pixels with a neuron size of 200 gives a better result for both LSTM and BLTSM architecture. Most of the Southeast Asian scripts are syllabic scripts. One character/glyph in these scripts represents a syllable, with a sequence of letters in Latin script. In this case, word transliteration is not just word recognition with one-to-one glyph-to-letter association. This makes word transliteration more challenging than character/glyph recognition.

**Figure 26.** Error rate for Balinese word recognition and transliteration test set.

**Figure 27.** Error rate for Khmer word recognition and transliteration test set.

**Figure 28.** Error rate for Sundanese word recognition and transliteration test set.

**Table 8.** Experimental results for word recognition and transliteration tasks (in % error rate for test).

## 6. Conclusions and Future Work

A comprehensive experimental test of the principal tasks in a DIA system, starting with binarization, text line segmentation, and isolated character/glyph recognition, and continuing on to word recognition and transliteration for a new collection of palm leaf manuscripts from Southeast Asia, is presented. The results from all experiments provide the latest findings and a quantitative benchmark of palm leaf manuscripts analysis for researchers in the DIA community. Binarizing the palm leaf manuscript images seems very challenging. Still, with many broken and unrecognizable characters/glyphs and noises detected in the images, binarization should be reconsidered the first step in the DIA process for palm leaf manuscripts. On the other hand, although there are already training-based DIA methods that do not require this binarization process, they usually require adequate training data. The problem of inadequate training data also influences glyph recognition and word transliteration. The unbalanced number of image samples for each character class means the CNN methods did not perform optimally in glyph recognition. The differences in the recognition rates of the CNN methods are not too significant with the handcrafted feature combinations. For future work, more synthetic data training for palm leaf manuscript images should be generated in order to support the training process. Especially for the word transliteration task, more synthetic data training with a more frequent word should be generated in order to improve the training process. Many examples of glyph-to-syllable association should be synthetically generated to transliterate syllabic scripts from Southeast Asia. The special characteristics and challenges posed by the palm leaf manuscript collections will require a thorough adaptation of the DIA system. Some specific adjustments need to be applied to the DIA methods for other types of documents. The adaptation of a DIA for palm leaf manuscripts is not unique and is not universal for all types of problem from different collections. However, among the DIA system’s non-unique solutions, one specific solution can still be designed to deliver the most optimal DIA system performance while still taking into account the conditions of that collection.

## Acknowledgments

The authors would like to thank Museum Gedong Kertya, Museum Bali, Undang Ahmad Darsa, the philologists from Sundanese Centre Studies of Universitas Padjadjaran, the Situs Kabuyutan Ciburuy Garut, all families in Bali, Indonesia, the EFEO team, the Buddhist Institute, and the National Library in Cambodia for providing us with samples of palm leaf manuscripts. We also thank the students from the Department of Informatics Education and the Department of Balinese Literature, University of Pendidikan Ganesha, the Institute of Technology of Cambodia, and the National Institute of Post, Telecommunication and ICT for helping us with the ground truthing process for this research project. This work is supported by the DIKTI BPPLN Indonesian Scholarship Program, the STIC Asia Program implemented by the French Ministry of Foreign Affairs and International Development (MAEDI), and ARES-CCD (program AI 2014-2019) under the funding of Belgian university cooperation, and DRPMI Universitas Padjadjaran, DIKTI International Collaboration and Publication grant 2017.

## Author Contributions

The Balinese dataset was prepared by Made Windu Antara Kesiman. The Khmer dataset was prepared by Dona Valy and Sophea Chhun. The Sundanese dataset was prepared by Erick Paulus, Mira Suryani, and Setiawan Hadi. Jean-Christophe Burie, Michel Verleysen, and Jean-Marc Ogier contributed to designing a ground truth validation protocol. Made Windu Antara Kesiman and Dona Valy conceived, designed, and performed the experiments. Made Windu Antara Kesiman, Dona Valy, and Jean-Christophe Burie contributed to paper writing and editing.

## Conflicts of Interest

The authors declare no conflict of interest. The founding sponsors had no role in the design of the study; in the collection, analyses, or interpretation of data; in the writing of the manuscript, and in the decision to publish the results.

## References

1.   tranScriptorium. Available online: [http://transcriptorium.eu/](http://transcriptorium.eu/) (accessed on 20 February 2018).
2.   READ Project—Recognition and Enrichment of Archival Documents. Available online: [https://read.transkribus.eu/](https://read.transkribus.eu/) (accessed on 20 February 2018).
3.   IAM Historical Document Database (IAM-HistDB)—Computer Vision and Artificial Intelligence. Available online: [http://www.fki.inf.unibe.ch/databases/iam-historical-document-database](http://www.fki.inf.unibe.ch/databases/iam-historical-document-database) (accessed on 20 February 2018).
4.   Ancient Lives: Archive. Available online: [https://www.ancientlives.org/](https://www.ancientlives.org/) (accessed on 20 February 2018).
5.   Document Image Analysis—CVISION Technologies. Available online: [http://www.cvisiontech.com/library/pdf/pdf-document/document-image-analysis.html](http://www.cvisiontech.com/library/pdf/pdf-document/document-image-analysis.html) (accessed on 20 February 2018).
6.   Ramteke, R.J. Invariant Moments Based Feature Extraction for Handwritten Devanagari Vowels Recognition. Int. J. Comput. Appl.**2010**, 1, 1–5. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Invariant+Moments+Based+Feature+Extraction+for+Handwritten+Devanagari+Vowels+Recognition&author=Ramteke,+R.J.&publication_year=2010&journal=Int.+J.+Comput.+Appl.&volume=1&pages=1%E2%80%935&doi=10.5120/392-585)] [[CrossRef](https://doi.org/10.5120/392-585)] [[Scilit](https://www.scilit.com/publications/9472543f95fe92088ba0c782edd62ac2)]
7.   Siddharth, K.S.; Dhir, R.; Rani, R. Handwritten Gurmukhi Numeral Recognition using Different Feature Sets. Int. J. Comput. Appl.**2011**, 28, 20–24. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Handwritten+Gurmukhi+Numeral+Recognition+using+Different+Feature+Sets&author=Siddharth,+K.S.&author=Dhir,+R.&author=Rani,+R.&publication_year=2011&journal=Int.+J.+Comput.+Appl.&volume=28&pages=20%E2%80%9324&doi=10.5120/3361-4640)] [[CrossRef](https://doi.org/10.5120/3361-4640)] [[Scilit](https://www.scilit.com/publications/aaf446c31362e56c83092f2ac719f8ad)]
8.   Sharma, D.; Jhajj, P. Recognition of Isolated Handwritten Characters in Gurmukhi Script. Int. J. Comput. Appl.**2010**, 4, 9–17. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Recognition+of+Isolated+Handwritten+Characters+in+Gurmukhi+Script&author=Sharma,+D.&author=Jhajj,+P.&publication_year=2010&journal=Int.+J.+Comput.+Appl.&volume=4&pages=9%E2%80%9317&doi=10.5120/850-1188)] [[CrossRef](https://doi.org/10.5120/850-1188)] [[Scilit](https://www.scilit.com/publications/ed556ed2123a0fe8c6ced56ebb3b056c)]
9.   Aggarwal, A.; Singh, K.; Singh, K. Use of Gradient Technique for Extracting Features from Handwritten Gurmukhi Characters and Numerals. Procedia Comput. Sci.**2015**, 46, 1716–1723. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Use+of+Gradient+Technique+for+Extracting+Features+from+Handwritten+Gurmukhi+Characters+and+Numerals&author=Aggarwal,+A.&author=Singh,+K.&author=Singh,+K.&publication_year=2015&journal=Procedia+Comput.+Sci.&volume=46&pages=1716%E2%80%931723&doi=10.1016/j.procs.2015.02.116)] [[CrossRef](https://doi.org/10.1016/j.procs.2015.02.116)] [[Scilit](https://www.scilit.com/publications/c5940d6610a2861f6e132ceb1a64b59c)]
10.   Lehal, G.S.; Singh, C.A. Gurmukhi script recognition system. In Proceedings of the 15th International Conference on Pattern Recognition, Barcelona, Spain, 3–7 September 2000; pp. 557–560. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Gurmukhi+script+recognition+system&conference=Proceedings+of+the+15th+International+Conference+on+Pattern+Recognition&author=Lehal,+G.S.&author=Singh,+C.A.&publication_year=2000&pages=557%E2%80%93560)]
11.   Rothacker, L.; Fink, G.A.; Banerjee, P.; Bhattacharya, U.; Chaudhuri, B.B. Bag-of-features HMMs for segmentation-free Bangla word spotting. In Proceedings of the 4th International Workshop on Multilingual OCR, Washington, DC, USA, 24 August 2013; p. 5. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Bag-of-features+HMMs+for+segmentation-free+Bangla+word+spotting&conference=Proceedings+of+the+4th+International+Workshop+on+Multilingual+OCR&author=Rothacker,+L.&author=Fink,+G.A.&author=Banerjee,+P.&author=Bhattacharya,+U.&author=Chaudhuri,+B.B.&publication_year=2013&pages=5)]
12.   Ashlin Deepa, R.N.; Rao, R.R. Feature Extraction Techniques for Recognition of Malayalam Handwritten Characters: Review. Int. J. Adv. Trends Comput. Sci. Eng.**2014**, 3, 481–485. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Feature+Extraction+Techniques+for+Recognition+of+Malayalam+Handwritten+Characters:+Review&author=Ashlin+Deepa,+R.N.&author=Rao,+R.R.&publication_year=2014&journal=Int.+J.+Adv.+Trends+Comput.+Sci.+Eng.&volume=3&pages=481%E2%80%93485)]
13.   Kasturi, R.; O’Gorman, L.; Govindaraju, V. Document image analysis: A primer. Sadhana**2002**, 27, 3–22. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Document+image+analysis:+A+primer&author=Kasturi,+R.&author=O%E2%80%99Gorman,+L.&author=Govindaraju,+V.&publication_year=2002&journal=Sadhana&volume=27&pages=3%E2%80%9322&doi=10.1007/BF02703309)] [[CrossRef](https://doi.org/10.1007/BF02703309)] [[Scilit](https://www.scilit.com/publications/f00a185a53eef31b215b2ecfdd6cea5c)]
14.   Paper History, Case Pap. Available online: [http://www.casepaper.com/company/paper-history/](http://www.casepaper.com/company/paper-history/) (accessed on 20 February 2018).
15.   Doermann, D. Handbook of Document Image Processing and Recognition; Tombre, K., Ed.; Springer London: London, UK, 2014; p. 1055. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Handbook+of+Document+Image+Processing+and+Recognition&author=Doermann,+D.&publication_year=2014)]
16.   Chamchong, R.; Fung, C.C.; Wong, K.W. Comparing Binarisation Techniques for the Processing of Ancient Manuscripts; Nakatsu, R., Tosa, N., Naghdy, F., Wong, K.W., Codognet, P., Eds.; Springer Berlin: Berlin, Germany, 2010; pp. 55–64. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Comparing+Binarisation+Techniques+for+the+Processing+of+Ancient+Manuscripts&author=Chamchong,+R.&author=Fung,+C.C.&author=Wong,+K.W.&publication_year=2010)]
17.   Kesiman, M.W.A.; Burie, J.-C.; Ogier, J.-M.; Wibawantara, G.N.M.A.; Sunarya, I.M.G. AMADI_LontarSet: The First Handwritten Balinese Palm Leaf Manuscripts Dataset. In Proceedings of the 15th International Conference on Frontiers in Handwriting Recognition (ICFHR), Shenzhen, China, 23–26 October 2016; pp. 168–172. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=AMADI_LontarSet:+The+First+Handwritten+Balinese+Palm+Leaf+Manuscripts+Dataset&conference=Proceedings+of+the+15th+International+Conference+on+Frontiers+in+Handwriting+Recognition+(ICFHR)&author=Kesiman,+M.W.A.&author=Burie,+J.-C.&author=Ogier,+J.-M.&author=Wibawantara,+G.N.M.A.&author=Sunarya,+I.M.G.&publication_year=2016&pages=168%E2%80%93172)]
18.   The Unicode® Standard, version 9.0—Core Specification; The Unicode Consortium: Mountain View, CA, USA, 2016.
19.   Balinese Alphabet, Language and Pronunciation. Available online: [http://www.omniglot.com/writing/balinese.htm](http://www.omniglot.com/writing/balinese.htm) (accessed on 20 February 2018).
20.   Khmer Manuscript—Recherche. Available online: [http://khmermanuscripts.efeo.fr/](http://khmermanuscripts.efeo.fr/) (accessed on 20 February 2018).
21.   Valy, D.; Verleysen, M.; Chhun, S.; Burie, J.-C. A New Khmer Palm Leaf Manuscript Dataset for Document Analysis and Recognition—SleukRith Set. In Proceedings of the 4th International Workshop on Historical Document Imaging and Processing, Kyoto, Japan, 10–11 November 2017; pp. 1–6. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=A+New+Khmer+Palm+Leaf+Manuscript+Dataset+for+Document+Analysis+and+Recognition%E2%80%94SleukRith+Set&conference=Proceedings+of+the+4th+International+Workshop+on+Historical+Document+Imaging+and+Processing&author=Valy,+D.&author=Verleysen,+M.&author=Chhun,+S.&author=Burie,+J.-C.&publication_year=2017&pages=1%E2%80%936)]
22.   Suryani, M.; Paulus, E.; Hadi, S.; Darsa, U.A.; Burie, J.-C. The Handwritten Sundanese Palm Leaf Manuscript Dataset From 15th Century. In Proceedings of the 14th IAPR International Conference on Document Analysis and Recognition (ICDAR), Kyoto, Japan, 9–15 November 2017; pp. 796–800. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=The+Handwritten+Sundanese+Palm+Leaf+Manuscript+Dataset+From+15th+Century&conference=Proceedings+of+the+14th+IAPR+International+Conference+on+Document+Analysis+and+Recognition+(ICDAR)&author=Suryani,+M.&author=Paulus,+E.&author=Hadi,+S.&author=Darsa,+U.A.&author=Burie,+J.-C.&publication_year=2017&pages=796%E2%80%93800)]
23.   Kesiman, M.W.A.; Prum, S.; Burie, J.-C.; Ogier, J.-M. An Initial Study on the Construction of Ground Truth Binarized Images of Ancient Palm Leaf Manuscripts. In Proceedings of the 13th International Conference on Document Analysis and Recognition (ICDAR), Nancy, France, 23–26 August 2015; pp. 656–660. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=An+Initial+Study+on+the+Construction+of+Ground+Truth+Binarized+Images+of+Ancient+Palm+Leaf+Manuscripts&conference=Proceedings+of+the+13th+International+Conference+on+Document+Analysis+and+Recognition+(ICDAR)&author=Kesiman,+M.W.A.&author=Prum,+S.&author=Burie,+J.-C.&author=Ogier,+J.-M.&publication_year=2015&pages=656%E2%80%93660)]
24.   Kesiman, M.W.A.; Prum, S.; Sunarya, I.M.G.; Burie, J.-C.; Ogier, J.-M. An Analysis of Ground Truth Binarized Image Variability of Palm Leaf Manuscripts. In Proceedings of the 5th International Conference Image Processing Theory Tools Application (IPTA 2015), Orleans, France, 10–13 November 2015; pp. 229–233. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=An+Analysis+of+Ground+Truth+Binarized+Image+Variability+of+Palm+Leaf+Manuscripts&conference=Proceedings+of+the+5th+International+Conference+Image+Processing+Theory+Tools+Application+(IPTA+2015)&author=Kesiman,+M.W.A.&author=Prum,+S.&author=Sunarya,+I.M.G.&author=Burie,+J.-C.&author=Ogier,+J.-M.&publication_year=2015&pages=229%E2%80%93233)]
25.   Burie, J.-C.; Coustaty, M.; Hadi, S.; Kesiman, M.W.A.; Ogier, J.-M.; Paulus, E.; Sok, K.; Sunarya, I.M.G.; Valy, D. ICFHR 2016 Competition on the Analysis of Handwritten Text in Images of Balinese Palm Leaf Manuscripts. In Proceedings of the 15th International Conference on Frontiers in Handwriting Recognition (ICFHR), Shenzhen, China, 23–26 October 2016; pp. 596–601. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=ICFHR+2016+Competition+on+the+Analysis+of+Handwritten+Text+in+Images+of+Balinese+Palm+Leaf+Manuscripts&conference=Proceedings+of+the+15th+International+Conference+on+Frontiers+in+Handwriting+Recognition+(ICFHR)&author=Burie,+J.-C.&author=Coustaty,+M.&author=Hadi,+S.&author=Kesiman,+M.W.A.&author=Ogier,+J.-M.&author=Paulus,+E.&author=Sok,+K.&author=Sunarya,+I.M.G.&author=Valy,+D.&publication_year=2016&pages=596%E2%80%93601)]
26.   Kesiman, M.W.A.; Valy, D.; Burie, J.-C.; Paulus, E.; Sunarya, I.M.G.; Hadi, S.; Sok, K.H.; Ogier, J.-M. Southeast Asian palm leaf manuscript images: A review of handwritten text line segmentation methods and new challenges. J. Electron. Imaging.**2016**, 26, 011011. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Southeast+Asian+palm+leaf+manuscript+images:+A+review+of+handwritten+text+line+segmentation+methods+and+new+challenges&author=Kesiman,+M.W.A.&author=Valy,+D.&author=Burie,+J.-C.&author=Paulus,+E.&author=Sunarya,+I.M.G.&author=Hadi,+S.&author=Sok,+K.H.&author=Ogier,+J.-M.&publication_year=2016&journal=J.+Electron.+Imaging.&volume=26&pages=011011&doi=10.1117/1.JEI.26.1.011011)] [[CrossRef](https://doi.org/10.1117/1.JEI.26.1.011011)] [[Scilit](https://www.scilit.com/publications/b492e4350669cfb5613263230ce90fc8)]
27.   Valy, D.; Verleysen, M.; Sok, K. Line Segmentation for Grayscale Text Images of Khmer Palm Leaf Manuscripts. In Proceedings of the 7th International Conference Image Processing Theory Tools Application (IPTA 2017), Montreal, QC, Canada, 28 November–1 December 2017. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Line+Segmentation+for+Grayscale+Text+Images+of+Khmer+Palm+Leaf+Manuscripts&conference=Proceedings+of+the+7th+International+Conference+Image+Processing+Theory+Tools+Application+(IPTA+2017)&author=Valy,+D.&author=Verleysen,+M.&author=Sok,+K.&publication_year=2017)]
28.   Kesiman, M.W.A.; Prum, S.; Burie, J.-C.; Ogier, J.-M. Study on Feature Extraction Methods for Character Recognition of Balinese Script on Palm Leaf Manuscript Images. In Proceedings of the 23rd International Conference Pattern Recognition, Cancun, Mexico, 4–8 December 2016; pp. 4017–4022. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Study+on+Feature+Extraction+Methods+for+Character+Recognition+of+Balinese+Script+on+Palm+Leaf+Manuscript+Images&conference=Proceedings+of+the+23rd+International+Conference+Pattern+Recognition&author=Kesiman,+M.W.A.&author=Prum,+S.&author=Burie,+J.-C.&author=Ogier,+J.-M.&publication_year=2016&pages=4017%E2%80%934022)]
29.   Kesiman, M.W.A.; Burie, J.-C.; Ogier, J.-M. A Complete Scheme of Spatially Categorized Glyph Recognition for the Transliteration of Balinese Palm Leaf Manuscripts. In Proceedings of the 14th IAPR International Conference on Document Analysis and Recognition (ICDAR), Kyoto, Japan, 9–15 November 2017; pp. 125–130. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=A+Complete+Scheme+of+Spatially+Categorized+Glyph+Recognition+for+the+Transliteration+of+Balinese+Palm+Leaf+Manuscripts&conference=Proceedings+of+the+14th+IAPR+International+Conference+on+Document+Analysis+and+Recognition+(ICDAR)&author=Kesiman,+M.W.A.&author=Burie,+J.-C.&author=Ogier,+J.-M.&publication_year=2017&pages=125%E2%80%93130)]
30.   Bezerra, B.L.D. Handwriting: Recognition, Development and Analysis; Bezerra, B.L.D., Zanchettin, C., Toselli, A.H., Pirlo, G., Eds.; Nova Science Publishers, Inc.: Hauppauge, NY, USA, 2017; ISBN 978-1-53611-957-2. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Handwriting:+Recognition,+Development+and+Analysis&author=Bezerra,+B.L.D.&publication_year=2017)]
31.   Arica, N.; Yarman-Vural, F.T. Optical character recognition for cursive handwriting. IEEE Trans. Pattern Anal. Mach. Intell.**2002**, 24, 801–813. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Optical+character+recognition+for+cursive+handwriting&author=Arica,+N.&author=Yarman-Vural,+F.T.&publication_year=2002&journal=IEEE+Trans.+Pattern+Anal.+Mach.+Intell.&volume=24&pages=801%E2%80%93813&doi=10.1109/TPAMI.2002.1008386)] [[CrossRef](https://doi.org/10.1109/TPAMI.2002.1008386)] [[Scilit](https://www.scilit.com/publications/d362935b9e9edbc295ab5a118b04df27)]
32.   Blumenstein, M.; Verma, B.; Basli, H. A novel feature extraction technique for the recognition of segmented handwritten characters. In Proceedings of the Seventh International Conference on Document Analysis and Recognition, Edinburgh, UK, 3–6 August 2003; pp. 137–141. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=A+novel+feature+extraction+technique+for+the+recognition+of+segmented+handwritten+characters&conference=Proceedings+of+the+Seventh+International+Conference+on+Document+Analysis+and+Recognition&author=Blumenstein,+M.&author=Verma,+B.&author=Basli,+H.&publication_year=2003&pages=137%E2%80%93141)]
33.   O’Gorman, L.; Kasturi, R. Executive briefing: Document Image Analysis; IEEE Computer Society Press: Los Alamitos, CA, USA, 1997; p. 107. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Executive+briefing:+Document+Image+Analysis&author=O%E2%80%99Gorman,+L.&author=Kasturi,+R.&publication_year=1997)]
34.   Naveed Bin Rais, M.S.H. Adaptive thresholding technique for document image analysis. In Proceedings of the 8th International Multitopic Conference, Lahore, Pakistan, 24–26 December 2004; pp. 61–66. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Adaptive+thresholding+technique+for+document+image+analysis&conference=Proceedings+of+the+8th+International+Multitopic+Conference&author=Naveed+Bin+Rais,+M.S.H.&publication_year=2004&pages=61%E2%80%9366)]
35.   Ntirogiannis, K.; Gatos, B.; Pratikakis, I. An Objective Evaluation Methodology for Document Image Binarization Techniques. In Proceedings of the Eighth IAPR International Workshop Document Annual System 2008, Nara, Japan, 16–19 September 2008; pp. 217–224. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=An+Objective+Evaluation+Methodology+for+Document+Image+Binarization+Techniques&conference=Proceedings+of+the+Eighth+IAPR+International+Workshop+Document+Annual+System+2008&author=Ntirogiannis,+K.&author=Gatos,+B.&author=Pratikakis,+I.&publication_year=2008&pages=217%E2%80%93224)]
36.   He, J.; Do, Q.D.M.; Downton, A.C.; Kim, J.H. A comparison of binarization methods for historical archive documents. In Proceedings of the Eighth International Conference on Document Analysis and Recognition (ICDAR'05), Seoul, South Korea, 31 August–1 September 2005; pp. 538–542. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=A+comparison+of+binarization+methods+for+historical+archive+documents&conference=Proceedings+of+the+Eighth+International+Conference+on+Document+Analysis+and+Recognition+(ICDAR%2705)&author=He,+J.&author=Do,+Q.D.M.&author=Downton,+A.C.&author=Kim,+J.H.&publication_year=2005&pages=538%E2%80%93542)]
37.   Gatos, B.; Ntirogiannis, K.; Pratikakis, I. DIBCO 2009: Document image binarization contest. Int. J. Doc. Anal. Recognit.**2011**, 14, 35–44. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=DIBCO+2009:+Document+image+binarization+contest&author=Gatos,+B.&author=Ntirogiannis,+K.&author=Pratikakis,+I.&publication_year=2011&journal=Int.+J.+Doc.+Anal.+Recognit.&volume=14&pages=35%E2%80%9344&doi=10.1007/s10032-010-0115-7)] [[CrossRef](https://doi.org/10.1007/s10032-010-0115-7)] [[Scilit](https://www.scilit.com/publications/cae09036ae919a933344f7ea983d0a63)]
38.   Pratikakis, I.; Gatos, B.; Ntirogiannis, K. ICDAR 2013 Document Image Binarization Contest (DIBCO 2013). In Proceedings of the 12th International Conference on Document Analysis and Recognition, Washington, DC, USA, 25–28 August 2013; pp. 1471–1476. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=ICDAR+2013+Document+Image+Binarization+Contest+(DIBCO+2013)&conference=Proceedings+of+the+12th+International+Conference+on+Document+Analysis+and+Recognition&author=Pratikakis,+I.&author=Gatos,+B.&author=Ntirogiannis,+K.&publication_year=2013&pages=1471%E2%80%931476)]
39.   Howe, N.R. Document binarization with automatic parameter tuning. Int. J. Doc. Anal. Recognit.**2013**, 16, 247–258. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Document+binarization+with+automatic+parameter+tuning&author=Howe,+N.R.&publication_year=2013&journal=Int.+J.+Doc.+Anal.+Recognit.&volume=16&pages=247%E2%80%93258&doi=10.1007/s10032-012-0192-x)] [[CrossRef](https://doi.org/10.1007/s10032-012-0192-x)] [[Scilit](https://www.scilit.com/publications/4a56cd93392313fffea58e1ac10a21c9)]
40.   ICFHR2016 Competition on the Analysis of Handwritten Text in Images of Balinese Palm Leaf Manuscripts. Available online: [http://amadi.univ-lr.fr/ICFHR2016_Contest/](http://amadi.univ-lr.fr/ICFHR2016_Contest/) (accessed on 20 February 2018).
41.   Gupta, M.R.; Jacobson, N.P.; Garcia, E.K. OCR binarization and image pre-processing for searching historical documents. Pattern Recognit.**2007**, 40, 389–397. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=OCR+binarization+and+image+pre-processing+for+searching+historical+documents&author=Gupta,+M.R.&author=Jacobson,+N.P.&author=Garcia,+E.K.&publication_year=2007&journal=Pattern+Recognit.&volume=40&pages=389%E2%80%93397&doi=10.1016/j.patcog.2006.04.043)] [[CrossRef](https://doi.org/10.1016/j.patcog.2006.04.043)] [[Scilit](https://www.scilit.com/publications/1b4e14f9675eb19d7981c614fc573923)]
42.   Feng, M.-L.; Tan, Y.-P. Contrast adaptive binarization of low quality document images. IEICE Electron. Express**2004**, 1, 501–506. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Contrast+adaptive+binarization+of+low+quality+document+images&author=Feng,+M.-L.&author=Tan,+Y.-P.&publication_year=2004&journal=IEICE+Electron.+Express&volume=1&pages=501%E2%80%93506&doi=10.1587/elex.1.501)] [[CrossRef](https://doi.org/10.1587/elex.1.501)] [[Scilit](https://www.scilit.com/publications/3efa7a7070e2fbeb7f92305ca811f560)]
43.   Global image threshold using Otsu’s method—MATLAB graythresh—MathWorks France. Available online: [https://fr.mathworks.com/help/images/ref/graythresh.html?requestedDomain=true](https://fr.mathworks.com/help/images/ref/graythresh.html?requestedDomain=true) (accessed on 20 February 2018).
44.   Khurshid, K.; Siddiqi, I.; Faure, C.; Vincent, N. Comparison of Niblack Inspired Binarization Methods for Ancient Documents. In Proceedings of the Document Recognition and Retrieval XVI, 72470U, San Jose, CA, USA, 21 January 2009; p. 72470U. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Comparison+of+Niblack+Inspired+Binarization+Methods+for+Ancient+Documents&conference=Proceedings+of+the+Document+Recognition+and+Retrieval+XVI,+72470U&author=Khurshid,+K.&author=Siddiqi,+I.&author=Faure,+C.&author=Vincent,+N.&publication_year=2009&pages=72470U&doi=10.1117/12.805827)] [[CrossRef](https://doi.org/10.1117/12.805827)] [[Scilit](https://www.scilit.com/publications/50cef27472be2048e47a5745415e9f58)]
45.   Sauvola, J.; Pietikäinen, M. Adaptive document image binarization. Pattern Recognit.**2000**, 33, 225–236. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Adaptive+document+image+binarization&author=Sauvola,+J.&author=Pietik%C3%A4inen,+M.&publication_year=2000&journal=Pattern+Recognit.&volume=33&pages=225%E2%80%93236&doi=10.1016/S0031-3203(99)00055-2)] [[CrossRef](https://doi.org/10.1016/S0031-3203(99)00055-2)] [[Scilit](https://www.scilit.com/publications/288617e38fd2e781fafe89d8546de5b7)]
46.   Wolf, C.; Jolion, J.-M.; Chassaing, F. Text Localization, Enhancement and Binarization in Multimedia Documents. In Proceedings of the Object recognition supported by user interaction for service robots, Quebec City, QC, Canada, 11–15 August 2002; pp. 1037–1040. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Text+Localization,+Enhancement+and+Binarization+in+Multimedia+Documents&conference=Proceedings+of+the+Object+recognition+supported+by+user+interaction+for+service+robots&author=Wolf,+C.&author=Jolion,+J.-M.&author=Chassaing,+F.&publication_year=2002&pages=1037%E2%80%931040)]
47.   Arvanitopoulos, N.; Susstrunk, S. Seam Carving for Text Line Extraction on Color and Grayscale Historical Manuscripts. In Proceedings of the 14th International Conference on Frontiers in Handwriting Recognition, Heraklion, Greece, 1–4 September 2014; pp. 726–731. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Seam+Carving+for+Text+Line+Extraction+on+Color+and+Grayscale+Historical+Manuscripts&conference=Proceedings+of+the+14th+International+Conference+on+Frontiers+in+Handwriting+Recognition&author=Arvanitopoulos,+N.&author=Susstrunk,+S.&publication_year=2014&pages=726%E2%80%93731)]
48.   Hossain, M.Z.; Amin, M.A.; Yan, H. Rapid Feature Extraction for Optical Character Recognition. Available online: [http://arxiv.org/abs/1206.0238](http://arxiv.org/abs/1206.0238) (accessed on 20 February 2018).
49.   Fujisawa, Y.; Shi, M.; Wakabayashi, T.; Kimura, F. Handwritten numeral recognition using gradient and curvature of gray scale image. In Proceedings of the Fifth International Conference on Document Analysis and Recognition. ICDAR '99, Bangalore, India, 22 September 1999; pp. 277–280. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Handwritten+numeral+recognition+using+gradient+and+curvature+of+gray+scale+image&conference=Proceedings+of+the+Fifth+International+Conference+on+Document+Analysis+and+Recognition.+ICDAR+%2799&author=Fujisawa,+Y.&author=Shi,+M.&author=Wakabayashi,+T.&author=Kimura,+F.&publication_year=1999&pages=277%E2%80%93280)]
50.   Kumar, S. Neighborhood Pixels Weights-A New Feature Extractor. Int. J. Comput. Theory Eng.**2009**, 2, 69–77. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Neighborhood+Pixels+Weights-A+New+Feature+Extractor&author=Kumar,+S.&publication_year=2009&journal=Int.+J.+Comput.+Theory+Eng.&volume=2&pages=69%E2%80%9377&doi=10.7763/IJCTE.2010.V2.119)] [[CrossRef](https://doi.org/10.7763/IJCTE.2010.V2.119)] [[Scilit](https://www.scilit.com/publications/19c5a2d6dc5842473e5cf2235ba7d39c)]
51.   Bokser, M. Omnidocument technologies. Proc. IEEE.**1992**, 80, 1066–1078. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Omnidocument+technologies&author=Bokser,+M.&publication_year=1992&journal=Proc.+IEEE.&volume=80&pages=1066%E2%80%931078&doi=10.1109/5.156470)] [[CrossRef](https://doi.org/10.1109/5.156470)] [[Scilit](https://www.scilit.com/publications/3a871427472837cb917c1061d91fef00)]
52.   Coates, A.; Lee, H.; Ng, A.Y. An Analysis of Single-Layer Networks in Unsupervised Feature Learning. In Proceedings of the Fourteenth International Conference on Artificial Intelligence and Statistics, Fort Lauderdale, FL, USA, 11–13 April 2011; pp. 215–223. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=An+Analysis+of+Single-Layer+Networks+in+Unsupervised+Feature+Learning&conference=Proceedings+of+the+Fourteenth+International+Conference+on+Artificial+Intelligence+and+Statistics&author=Coates,+A.&author=Lee,+H.&author=Ng,+A.Y.&publication_year=2011&pages=215%E2%80%93223)]
53.   Coates, A.; Carpenter, B.; Case, C.; Satheesh, S.; Suresh, B.; Wang, T.; Wu, D.J.; Ng, A.Y. Text Detection and Character Recognition in Scene Images with Unsupervised Feature Learning. In Proceedings of the International Conference on Document Analysis and Recognition, Beijing, China, 18–21 September 2011; pp. 440–445. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Text+Detection+and+Character+Recognition+in+Scene+Images+with+Unsupervised+Feature+Learning&conference=Proceedings+of+the+International+Conference+on+Document+Analysis+and+Recognition&author=Coates,+A.&author=Carpenter,+B.&author=Case,+C.&author=Satheesh,+S.&author=Suresh,+B.&author=Wang,+T.&author=Wu,+D.J.&author=Ng,+A.Y.&publication_year=2011&pages=440%E2%80%93445)]
54.   Shishtla, P.; Ganesh, V.S.; Subramaniam, S.; Varma, V. A language-independent transliteration schema using character aligned models at NEWS 2009. In Proceedings of the Association for Computational Linguistics, Suntec, Singapore, 7 August 2009; p. 40. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=A+language-independent+transliteration+schema+using+character+aligned+models+at+NEWS+2009&conference=Proceedings+of+the+Association+for+Computational+Linguistics&author=Shishtla,+P.&author=Ganesh,+V.S.&author=Subramaniam,+S.&author=Varma,+V.&publication_year=2009&pages=40&doi=10.3115/1699705.1699715)] [[CrossRef](https://doi.org/10.3115/1699705.1699715)] [[Scilit](https://www.scilit.com/publications/5e032bc291766115848d3f26514509c4)]
55.   Ul-Hasan, A.; Breuel, T.M. Can we build language-independent OCR using LSTM networks? In Proceedings of the 4th International Workshop on Multilingual OCR, Washington, DC, USA, 24 August 2013. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Can+we+build+language-independent+OCR+using+LSTM+networks?&conference=Proceedings+of+the+4th+International+Workshop+on+Multilingual+OCR&author=Ul-Hasan,+A.&author=Breuel,+T.M.&publication_year=2013)]
56.   Ocropy: Python-Based Tools for Document Analysis and OCR, 2018. Available online: [https://github.com/tmbdev/ocropy](https://github.com/tmbdev/ocropy) (accessed on 20 February 2018).
57.   Homemade Manuscript OCR (1): OCRopy, Sacré Grl. Available online: [https://graal.hypotheses.org/786](https://graal.hypotheses.org/786) (accessed on 20 February 2018).
58.   Breuel, T.M.; Ul-Hasan, A.; Al-Azawi, M.A.; Shafait, F. High-Performance OCR for Printed English and Fraktur Using LSTM Networks. In Proceedings of the 12th International Conference on Document Analysis and Recognition, Washington, DC, USA, 25–28 August 2013; pp. 683–687. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=High-Performance+OCR+for+Printed+English+and+Fraktur+Using+LSTM+Networks&conference=Proceedings+of+the+12th+International+Conference+on+Document+Analysis+and+Recognition&author=Breuel,+T.M.&author=Ul-Hasan,+A.&author=Al-Azawi,+M.A.&author=Shafait,+F.&publication_year=2013&pages=683%E2%80%93687&doi=10.1109/ICDAR.2013.140)] [[CrossRef](https://doi.org/10.1109/ICDAR.2013.140)] [[Scilit](https://www.scilit.com/publications/dec1255a6417c5b9a6ac3c48db2615e7)]
59.   Valy, D.; Verleysen, M.; Sok, K. Line Segmentation Approach for Ancient Palm Leaf Manuscripts using Competitive Learning Algorithm. In Proceedings of the 15th International Conference on Frontiers in Handwriting Recognition (ICFHR), Shenzhen, China, 23–26 October 2016. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Line+Segmentation+Approach+for+Ancient+Palm+Leaf+Manuscripts+using+Competitive+Learning+Algorithm&conference=Proceedings+of+the+15th+International+Conference+on+Frontiers+in+Handwriting+Recognition+(ICFHR)&author=Valy,+D.&author=Verleysen,+M.&author=Sok,+K.&publication_year=2016)]
60.   Saund, E.; Lin, J.; Sarkar, P. PixLabeler: User Interface for Pixel-Level Labeling of Elements in Document Images. In Proceedings of the 10th International Conference on Document Analysis and Recognition, Barcelona, Spain, 26–29 July 2009; pp. 646–650. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=PixLabeler:+User+Interface+for+Pixel-Level+Labeling+of+Elements+in+Document+Images&conference=Proceedings+of+the+10th+International+Conference+on+Document+Analysis+and+Recognition&author=Saund,+E.&author=Lin,+J.&author=Sarkar,+P.&publication_year=2009&pages=646%E2%80%93650&doi=10.1109/ICDAR.2009.250)] [[CrossRef](https://doi.org/10.1109/ICDAR.2009.250)] [[Scilit](https://www.scilit.com/publications/41ef3f8303d6310ded1854fa83a94b91)]
61.   Stamatopoulos, N.; Gatos, B.; Louloudis, G.; Pal, U.; Alaei, A. ICDAR 2013 Handwriting Segmentation Contest. In Proceedings of the 12th International Conference on Document Analysis and Recognition, Washington, DC, USA, 25–28 August 2013; pp. 1402–1406. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=ICDAR+2013+Handwriting+Segmentation+Contest&conference=Proceedings+of+the+12th+International+Conference+on+Document+Analysis+and+Recognition&author=Stamatopoulos,+N.&author=Gatos,+B.&author=Louloudis,+G.&author=Pal,+U.&author=Alaei,+A.&publication_year=2013&pages=1402%E2%80%931406&doi=10.1109/ICDAR.2013.283)] [[CrossRef](https://doi.org/10.1109/ICDAR.2013.283)] [[Scilit](https://www.scilit.com/publications/857720b5482f182f5b5d491537418651)]
62.   PRImA. Available online: [http://www.primaresearch.org/tools/Aletheia](http://www.primaresearch.org/tools/Aletheia) (accessed on 20 February 2018).
63.   Clausner, C.; Pletschacher, S.; Antonacopoulos, A. Aletheia—An Advanced Document Layout and Text Ground-Truthing System for Production Environments. In Proceedings of the International Conference on Document Analysis and Recognition, Beijing, China, 18–21 September 2011; pp. 48–52. [[Google Scholar](https://scholar.google.com/scholar_lookup?title=Aletheia%E2%80%94An+Advanced+Document+Layout+and+Text+Ground-Truthing+System+for+Production+Environments&conference=Proceedings+of+the+International+Conference+on+Document+Analysis+and+Recognition&author=Clausner,+C.&author=Pletschacher,+S.&author=Antonacopoulos,+A.&publication_year=2011&pages=48%E2%80%9352&doi=10.1109/ICDAR.2011.19)] [[CrossRef](https://doi.org/10.1109/ICDAR.2011.19)] [[Scilit](https://www.scilit.com/publications/9080fd5079e5742096eeef128a0b3d2d)]

**Figure 1.** Balinese palm leaf manuscripts.

[![Image 4: Jimaging 04 00043 g001](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g001.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g001.png)

**Figure 2.** Khmer palm leaf manuscript.

[![Image 5: Jimaging 04 00043 g002](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g002.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g002.png)

**Figure 3.** Sundanese palm leaf manuscript.

[![Image 6: Jimaging 04 00043 g003](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g003.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g003.png)

**Figure 4.** An example of an optimal path going from start state $S_{1}$ to goal state $S_{n}$.

[![Image 7: Jimaging 04 00043 g004](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g004.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g004.png)

**Figure 5.** The representation of the array of cells in HoG [[28](https://www.mdpi.com/2313-433X/4/2/43#B28-jimaging-04-00043)].

[![Image 8: Jimaging 04 00043 g005](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g005.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g005.png)

**Figure 6.** Neighborhood pixels for NPW features [[28](https://www.mdpi.com/2313-433X/4/2/43#B28-jimaging-04-00043)].

[![Image 9: Jimaging 04 00043 g006](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g006.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g006.png)

**Figure 7.** Type of Zoning (from left to right: vertical, horizontal, block, diagonal, circular, and radial zoning) [[28](https://www.mdpi.com/2313-433X/4/2/43#B28-jimaging-04-00043)].

[![Image 10: Jimaging 04 00043 g007](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g007.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g007.png)

**Figure 8.** Scheme of NPW on Kirsch features [[28](https://www.mdpi.com/2313-433X/4/2/43#B28-jimaging-04-00043)].

[![Image 11: Jimaging 04 00043 g008](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g008.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g008.png)

**Figure 9.** Schema of character recognizer with feature extraction method, unsupervised learning feature, and neural network [[29](https://www.mdpi.com/2313-433X/4/2/43#B29-jimaging-04-00043)].

[![Image 12: Jimaging 04 00043 g009](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g009.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g009.png)

**Figure 10.** Architecture of the CNN.

[![Image 13: Jimaging 04 00043 g010](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g010.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g010.png)

**Figure 11.** Khmer manuscript with binarized ground truth image.

[![Image 14: Jimaging 04 00043 g011](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g011.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g011.png)

**Figure 12.** Balinese manuscript with binarized ground truth image.

[![Image 15: Jimaging 04 00043 g012](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g012.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g012.png)

**Figure 13.** Sundanese manuscript with binarized ground truth image.

[![Image 16: Jimaging 04 00043 g013](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g013.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g013.png)

**Figure 14.** Balinese character dataset.

[![Image 17: Jimaging 04 00043 g014](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g014.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g014.png)

**Figure 15.** Sundanese character dataset.

[![Image 18: Jimaging 04 00043 g015](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g015.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g015.png)

**Figure 16.** Khmer character dataset.

[![Image 19: Jimaging 04 00043 g016](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g016.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g016.png)

**Figure 17.** Khmer word dataset.

[![Image 20: Jimaging 04 00043 g017](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g017.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g017.png)

**Figure 18.** Balinese word dataset.

[![Image 21: Jimaging 04 00043 g018](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g018.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g018.png)

**Figure 19.** Sundanese word dataset.

[![Image 22: Jimaging 04 00043 g019](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g019.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g019.png)

**Figure 20.** Binarization of Sundanese manuscript with Niblack’s method.

[![Image 23: Jimaging 04 00043 g020](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g020.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g020.png)

**Figure 21.** Binarization of Khmer manuscript with ICFHR G1 method.

[![Image 24: Jimaging 04 00043 g021](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g021.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g021.png)

**Figure 22.** Binarization of Balinese manuscript with ICFHR G2 method.

[![Image 25: Jimaging 04 00043 g022](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g022.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g022.png)

**Figure 23.** Text line segmentation of Balinese manuscript with the Seam Carving method (green) and Adaptive Path Finding (red).

[![Image 26: Jimaging 04 00043 g023](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g023.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g023.png)

**Figure 24.** Text line segmentation of Khmer manuscript with the Seam Carving method (green) and Adaptive Path Finding (red).

[![Image 27: Jimaging 04 00043 g024](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g024.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g024.png)

**Figure 25.** Text line segmentation of Sundanese manuscript with the Seam Carving method (green) and Adaptive Path Finding (red).

[![Image 28: Jimaging 04 00043 g025](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g025.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g025.png)

**Figure 26.** Error rate for Balinese word recognition and transliteration test set.

[![Image 29: Jimaging 04 00043 g026](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g026.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g026.png)

**Figure 27.** Error rate for Khmer word recognition and transliteration test set.

[![Image 30: Jimaging 04 00043 g027](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g027.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g027.png)

**Figure 28.** Error rate for Sundanese word recognition and transliteration test set.

[![Image 31: Jimaging 04 00043 g028](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g028.png)](https://www.mdpi.com/jimaging/jimaging-04-00043/article_deploy/html/images/jimaging-04-00043-g028.png)

**Table 1.** Palm leaf manuscript datasets for binarization task.

| Manuscripts | Train | Test | Ground Truth | Dataset |
| --- | --- | --- | --- | --- |
| Balinese | 50 pages | 50 pages | 2 × 100 pages | Extracted from AMADI_LontarSet [[17](https://www.mdpi.com/2313-433X/4/2/43#B17-jimaging-04-00043),[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043),[40](https://www.mdpi.com/2313-433X/4/2/43#B40-jimaging-04-00043)] |
| Khmer | - | 46 pages | 1 × 46 pages | Extracted from EFEO [[20](https://www.mdpi.com/2313-433X/4/2/43#B20-jimaging-04-00043),[59](https://www.mdpi.com/2313-433X/4/2/43#B59-jimaging-04-00043)] |
| Sundanese | - | 61 pages | 2 × 61 pages | Extracted from Sunda Dataset ICDAR2017 [[22](https://www.mdpi.com/2313-433X/4/2/43#B22-jimaging-04-00043)] |

**Table 2.** Palm leaf manuscript datasets for text line segmentation task.

| Manuscripts | Pages | Text Lines | Dataset |
| --- | --- | --- | --- |
| Balinese 1 | 35 pages | 140 text lines | Extracted from AMADI_LontarSet [[17](https://www.mdpi.com/2313-433X/4/2/43#B17-jimaging-04-00043),[26](https://www.mdpi.com/2313-433X/4/2/43#B26-jimaging-04-00043),[40](https://www.mdpi.com/2313-433X/4/2/43#B40-jimaging-04-00043)] |
| Balinese 2 | Bali-2.1: 47 pages Bali-2.2: 49 pages | 181 text lines 182 text lines | Extracted from AMADI_LontarSet [[17](https://www.mdpi.com/2313-433X/4/2/43#B17-jimaging-04-00043)] |
| Khmer 1 | 43 pages | 191 text lines | Extracted from EFEO [[20](https://www.mdpi.com/2313-433X/4/2/43#B20-jimaging-04-00043),[26](https://www.mdpi.com/2313-433X/4/2/43#B26-jimaging-04-00043),[59](https://www.mdpi.com/2313-433X/4/2/43#B59-jimaging-04-00043)] |
| Khmer 2 | 100 pages | 476 text lines | Extracted from SleukRith Set [[21](https://www.mdpi.com/2313-433X/4/2/43#B21-jimaging-04-00043),[27](https://www.mdpi.com/2313-433X/4/2/43#B27-jimaging-04-00043)] |
| Khmer 3 | 200 pages | 971 text lines | Extracted from SleukRith Set [[21](https://www.mdpi.com/2313-433X/4/2/43#B21-jimaging-04-00043)] |
| Sundanese 1 | 12 pages | 46 text lines | Extracted from Sunda Dataset [[26](https://www.mdpi.com/2313-433X/4/2/43#B26-jimaging-04-00043)] |
| Sundanese 2 | 61 pages | 242 text lines | Extracted from Sunda Dataset [[22](https://www.mdpi.com/2313-433X/4/2/43#B22-jimaging-04-00043)] |

**Table 3.** Palm leaf manuscript datasets for isolated character/glyph recognition task.

| Manuscripts | Classes | Train | Test | Dataset |
| --- | --- | --- | --- | --- |
| Balinese | 133 classes | 11,710 images | 7673 images | AMADI_LontarSet [[17](https://www.mdpi.com/2313-433X/4/2/43#B17-jimaging-04-00043),[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043),[28](https://www.mdpi.com/2313-433X/4/2/43#B28-jimaging-04-00043)] |
| Khmer | 111 classes | 113,206 images | 90,669 images | SleukRith Set [[21](https://www.mdpi.com/2313-433X/4/2/43#B21-jimaging-04-00043)] |
| Sundanese | 60 classes | 4555 images | 2816 images | Sunda Dataset [[22](https://www.mdpi.com/2313-433X/4/2/43#B22-jimaging-04-00043)] |

**Table 4.** Palm leaf manuscript datasets for word recognition and transliteration tasks.

| Manuscripts | Train | Test | Text | Published |
| --- | --- | --- | --- | --- |
| Balinese | 15022 images from 130 pages | 10475 images from 100 pages | Latin | AMADI_LontarSet [[17](https://www.mdpi.com/2313-433X/4/2/43#B17-jimaging-04-00043),[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043)] |
| Khmer | 16333 images (part of 657 pages) | 7791 images (part of 657 pages) | Latin and Khmer | SleukRith Set [[21](https://www.mdpi.com/2313-433X/4/2/43#B21-jimaging-04-00043)] |
| Sundanese | 1427 images from 20 pages | 318 images from 10 pages | Latin | Sunda Dataset [[22](https://www.mdpi.com/2313-433X/4/2/43#B22-jimaging-04-00043)] |

**Table 5.** Experimental results for binarization task in F-Measure (FM), Peak SNR (PSNR), and Negative Rate Metric (NRM). A higher F-measure and PSNR, and a lower NRM, indicate a better result.

| Methods | Parameter | Manuscripts | FM (%) | NRM | PSNR (%) |
| --- | --- | --- | --- | --- | --- |
| OtsuGray [[34](https://www.mdpi.com/2313-433X/4/2/43#B34-jimaging-04-00043),[41](https://www.mdpi.com/2313-433X/4/2/43#B41-jimaging-04-00043)] | Otsu from gray image Using Matlab graythresh [[43](https://www.mdpi.com/2313-433X/4/2/43#B43-jimaging-04-00043)] | Balinese | 18.98178 | 0.398894 | 5.019868 |
| Khmer | 23.92159 | 0.313062 | 7.387765 |
| Sundanese | 23.70566 | 0.326681 | 9.998433 |
| OtsuRed [[34](https://www.mdpi.com/2313-433X/4/2/43#B34-jimaging-04-00043),[41](https://www.mdpi.com/2313-433X/4/2/43#B41-jimaging-04-00043)] | Otsu from red image channel Using Matlab graythresh | Balinese | 29.20352 | 0.300145 | 10.94973 |
| Khmer | 21.15379 | 0.337171 | 5.907433 |
| Sundanese | 21.25153 | 0.38641 | 12.60233 |
| Sauvola [[34](https://www.mdpi.com/2313-433X/4/2/43#B34-jimaging-04-00043),[36](https://www.mdpi.com/2313-433X/4/2/43#B36-jimaging-04-00043),[41](https://www.mdpi.com/2313-433X/4/2/43#B41-jimaging-04-00043),[42](https://www.mdpi.com/2313-433X/4/2/43#B42-jimaging-04-00043),[44](https://www.mdpi.com/2313-433X/4/2/43#B44-jimaging-04-00043),[45](https://www.mdpi.com/2313-433X/4/2/43#B45-jimaging-04-00043)] | window = 50, k = 0.5, R = 128 | Balinese | 13.20997 | 0.462312 | 27.69732 |
| Khmer | 44.73579 | 0.268527 | 26.06089 |
| Sundanese | 6.190919 | 0.479984 | 24.78595 |
| Sauvola2 [[34](https://www.mdpi.com/2313-433X/4/2/43#B34-jimaging-04-00043),[36](https://www.mdpi.com/2313-433X/4/2/43#B36-jimaging-04-00043),[41](https://www.mdpi.com/2313-433X/4/2/43#B41-jimaging-04-00043),[42](https://www.mdpi.com/2313-433X/4/2/43#B42-jimaging-04-00043),[44](https://www.mdpi.com/2313-433X/4/2/43#B44-jimaging-04-00043),[45](https://www.mdpi.com/2313-433X/4/2/43#B45-jimaging-04-00043)] | window = 50, k = 0.2, R = 128 | Balinese | 40.18596 | 0.274551 | 25.0988 |
| Khmer | 47.55924 | 0.155722 | 21.96846 |
| Sundanese | 43.04994 | 0.299694 | 23.65228 |
| Sauvola3 [[34](https://www.mdpi.com/2313-433X/4/2/43#B34-jimaging-04-00043),[36](https://www.mdpi.com/2313-433X/4/2/43#B36-jimaging-04-00043),[41](https://www.mdpi.com/2313-433X/4/2/43#B41-jimaging-04-00043),[42](https://www.mdpi.com/2313-433X/4/2/43#B42-jimaging-04-00043),[44](https://www.mdpi.com/2313-433X/4/2/43#B44-jimaging-04-00043),[45](https://www.mdpi.com/2313-433X/4/2/43#B45-jimaging-04-00043)] | window = 50, k = 0.0, R = 128 | Balinese | 35.38635 | 0.165839 | 17.05408 |
| Khmer | 30.5562 | 0.190081 | 12.78953 |
| Sundanese | 40.29642 | 0.181465 | 16.25056 |
| Niblack [[34](https://www.mdpi.com/2313-433X/4/2/43#B34-jimaging-04-00043),[36](https://www.mdpi.com/2313-433X/4/2/43#B36-jimaging-04-00043),[41](https://www.mdpi.com/2313-433X/4/2/43#B41-jimaging-04-00043),[42](https://www.mdpi.com/2313-433X/4/2/43#B42-jimaging-04-00043),[44](https://www.mdpi.com/2313-433X/4/2/43#B44-jimaging-04-00043)] | window = 50, k = −0.2 | Balinese | 41.55696 | 0.175795 | 21.24452 |
| Khmer | 38.01222 | 0.160807 | 16.84153 |
| Sundanese | 46.79678 | 0.195015 | 20.31759 |
| Niblack2 [[34](https://www.mdpi.com/2313-433X/4/2/43#B34-jimaging-04-00043),[36](https://www.mdpi.com/2313-433X/4/2/43#B36-jimaging-04-00043),[41](https://www.mdpi.com/2313-433X/4/2/43#B41-jimaging-04-00043),[42](https://www.mdpi.com/2313-433X/4/2/43#B42-jimaging-04-00043),[44](https://www.mdpi.com/2313-433X/4/2/43#B44-jimaging-04-00043)] | window = 50, k = 0.0 | Balinese | 35.38635 | 0.165839 | 17.05408 |
| Khmer | 30.5562 | 0.190081 | 12.78953 |
| Sundanese | 40.29642 | 0.181465 | 16.25056 |
| NICK [[44](https://www.mdpi.com/2313-433X/4/2/43#B44-jimaging-04-00043)] | window = 50, k= −0.2 | Balinese | 37.85919 | 0.328327 | 27.59038 |
| Khmer | 51.2578 | 0.176003 | 24.51998 |
| Sundanese | 29.5918 | 0.390431 | 24.26187 |
| Rais [[34](https://www.mdpi.com/2313-433X/4/2/43#B34-jimaging-04-00043)] | window = 50 | Balinese | 34.46977 | 0.171096 | 16.84049 |
| Khmer | 31.59138 | 0.187948 | 13.52816 |
| Sundanese | 40.65458 | 0.177016 | 16.35472 |
| Wolf [[42](https://www.mdpi.com/2313-433X/4/2/43#B42-jimaging-04-00043),[44](https://www.mdpi.com/2313-433X/4/2/43#B44-jimaging-04-00043)] | window = 50, k = 0.5 | Balinese | 27.94817 | 0.392937 | 27.1625 |
| Khmer | 46.78589 | 0.23739 | 25.1946 |
| Sundanese | 42.40799 | 0.299157 | 23.61075 |
| Howe1 [[39](https://www.mdpi.com/2313-433X/4/2/43#B39-jimaging-04-00043)] | Default values [[39](https://www.mdpi.com/2313-433X/4/2/43#B39-jimaging-04-00043)] | Balinese | 44.70123 | 0.267627 | 28.35427 |
| Khmer | 40.20485 | 0.280604 | 25.59887 |
| Sundanese | 45.90779 | 0.235175 | 21.90439 |
| Howe2 [[39](https://www.mdpi.com/2313-433X/4/2/43#B39-jimaging-04-00043)] | Default values | Balinese | 40.5555 | 0.273994 | 28.02874 |
| Khmer | 32.35603 | 0.294016 | 25.96965 |
| Sundanese | 35.35973 | 0.274865 | 22.36583 |
| Howe3 [[39](https://www.mdpi.com/2313-433X/4/2/43#B39-jimaging-04-00043)] | Default values | Balinese | 42.15377 | 0.304962 | 28.38466 |
| Khmer | 30.7186 | 0.382087 | 26.36983 |
| Sundanese | 25.77321 | 0.350349 | 23.66912 |
| Howe4 [[39](https://www.mdpi.com/2313-433X/4/2/43#B39-jimaging-04-00043)] | Default values | Balinese | 45.73681 | 0.273018 | 28.60561 |
| Khmer | 36.48396 | 0.280519 | 25.83969 |
| Sundanese | 38.98445 | 0.281118 | 22.83914 |
| ICFHR G1 | See ref. [[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043)] | Balinese | 63.32 | 0.15 | 31.37 |
| Khmer | 52.65608 | 0.250503 | 28.16886 |
| Sundanese | 38.95626 | 0.329042 | 24.15279 |
| ICFHR G2 | See ref. [[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043)] | Balinese | 68.76 | 0.13 | 33.39 |
| Khmer | - | - | - |
| Sundanese | - | - | - |
| ICFHR G3 | See ref. [[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043)] | Balinese | 52.20 | 0.18 | 26.92 |
| Khmer | - | - | - |
| Sundanese | - | - | - |
| ICFHR G4 | See ref. [[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043)] | Balinese | 58.57 | 0.17 | 29.98 |
| Khmer | - | - | - |
| Sundanese | - | - | - |

**Table 6.** Experimental results for text line segmentation task: the count of ground truth elements (N), and the count of result elements (M), the one-to-one (o2o) match score is computed for a region pair based on 90% acceptance threshold, detection rate (DR), recognition accuracy (RA), and performance metric (FM).

| Methods | Manuscripts | N | M | o2o | DR (%) | RA (%) | FM (%) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Seam carving [[47](https://www.mdpi.com/2313-433X/4/2/43#B47-jimaging-04-00043)] | Balinese 1 | 140 | 167 | 128 | 91.42 | 76.64 | 83.38 |
| Bali-2.1 | 181 | 210 | 163 | 90.05 | 77.61 | 83.37 |
| Bali-2.2 | 182 | 219 | 161 | 88.46 | 73.51 | 80.29 |
| Khmer 1 | 191 | 145 | 57 | 29.84 | 39.31 | 33.92 |
| Khmer 2 | 476 | 665 | 356 | 53.53 | 74.79 | 62.40 |
| Khmer 3 | 971 | 1046 | 845 | 87.02 | 80.78 | 83.78 |
| Sundanese 1 | 46 | 43 | 36 | 78.26 | 83.72 | 80.89 |
| Sundanese 2 | 242 | 257 | 218 | 90.08 | 84.82 | 87.37 |
| Adaptive Path Finding [[27](https://www.mdpi.com/2313-433X/4/2/43#B27-jimaging-04-00043)] | Balinese 1 | 140 | 143 | 132 | 94.28 | 92.30 | 93.28 |
| Bali-2.1 | 181 | 188 | 159 | 87.84 | 84.57 | 86.17 |
| Bali-2.2 | 182 | 191 | 164 | 90.10 | 85.86 | 87.93 |
| Khmer 1 | 191 | 169 | 118 | 61.78 | 69.82 | 65.55 |
| Khmer 2 | 476 | 484 | 446 | 92.15 | 93.70 | 92.92 |
| Khmer 3 | 971 | 990 | 910 | 93.71 | 91.91 | 92.80 |
| Sundanese 1 | 46 | 50 | 41 | 89.13 | 82.00 | 85.41 |
| Sundanese 2 | 242 | 253 | 222 | 91.73 | 87.74 | 89.69 |

**Table 7.** Experimental results for isolated character/glyph recognition tasks (in % recognition rate).

| Methods | Balinese | Khmer | Sundanese |
| --- | --- | --- | --- |
| Handcrafted Feature (HoG-NPW-Kirsch-Zoning) with k-NN [[28](https://www.mdpi.com/2313-433X/4/2/43#B28-jimaging-04-00043)] | 85.16 | - | 72.91 |
| Handcrafted Feature (HoG-NPW-Kirsch-Zoning) with NN [[29](https://www.mdpi.com/2313-433X/4/2/43#B29-jimaging-04-00043)] | 85.51 | 92.15 | 79.69 |
| Handcrafted Feature (HoG-NPW-Kirsch-Zoning) with UFL + NN [[29](https://www.mdpi.com/2313-433X/4/2/43#B29-jimaging-04-00043)] | 85.63 | 92.44 | 79.33 |
| CNN 1 [[28](https://www.mdpi.com/2313-433X/4/2/43#B28-jimaging-04-00043)] | 84.31 | - | - |
| CNN 2 | 85.39 | 93.96 | 79.05 |
| ICFHR G1: VCMF [[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043)] | 87.44 | - | - |
| ICFHR G1: VMQDF [[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043)] | 88.39 | - | - |
| ICFHR G3 [[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043)] | 77.83 | - | - |
| ICFHR G5 [[25](https://www.mdpi.com/2313-433X/4/2/43#B25-jimaging-04-00043)] | 77.70 | - | - |

**Table 8.** Experimental results for word recognition and transliteration tasks (in % error rate for test).

| Methods (with OCRopy [[56](https://www.mdpi.com/2313-433X/4/2/43#B56-jimaging-04-00043)] Framework) | Balinese | Khmer | Sundanese |
| --- | --- | --- | --- |
| BLSTM 1 (seq_depth 60, neuron size 100) | 43.13 | Latin text: 73.76 Khmer text: 77.88 | 75.52 |
| LSTM 1 (seq_depth 100, neuron size 100) | 42.88 | - | - |
| BLSTM 2 (seq_depth 100, neuron size 200) | 40.54 | - | - |
| LSTM 2 (seq_depth 100, neuron size 200) | 39.70 | - | - |

© 2018 by the authors. Licensee MDPI, Basel, Switzerland. This article is an open access article distributed under the terms and conditions of the Creative Commons Attribution (CC BY) license ([http://creativecommons.org/licenses/by/4.0/](http://creativecommons.org/licenses/by/4.0/)).

## [](https://www.mdpi.com/2313-433X/4/2/43)Share and Cite

**MDPI and ACS Style**

Kesiman, M.W.A.; Valy, D.; Burie, J.-C.; Paulus, E.; Suryani, M.; Hadi, S.; Verleysen, M.; Chhun, S.; Ogier, J.-M. Benchmarking of Document Image Analysis Tasks for Palm Leaf Manuscripts from Southeast Asia. _J. Imaging_**2018**, _4_, 43. https://doi.org/10.3390/jimaging4020043

**AMA Style**

Kesiman MWA, Valy D, Burie J-C, Paulus E, Suryani M, Hadi S, Verleysen M, Chhun S, Ogier J-M. Benchmarking of Document Image Analysis Tasks for Palm Leaf Manuscripts from Southeast Asia. _Journal of Imaging_. 2018; 4(2):43. https://doi.org/10.3390/jimaging4020043

**Chicago/Turabian Style**

Kesiman, Made Windu Antara, Dona Valy, Jean-Christophe Burie, Erick Paulus, Mira Suryani, Setiawan Hadi, Michel Verleysen, Sophea Chhun, and Jean-Marc Ogier. 2018. "Benchmarking of Document Image Analysis Tasks for Palm Leaf Manuscripts from Southeast Asia" _Journal of Imaging_ 4, no. 2: 43. https://doi.org/10.3390/jimaging4020043

**APA Style**

Kesiman, M. W. A., Valy, D., Burie, J.-C., Paulus, E., Suryani, M., Hadi, S., Verleysen, M., Chhun, S., & Ogier, J.-M. (2018). Benchmarking of Document Image Analysis Tasks for Palm Leaf Manuscripts from Southeast Asia. _Journal of Imaging_, _4_(2), 43. https://doi.org/10.3390/jimaging4020043

Note that from the first issue of 2016, this journal uses article numbers instead of page numbers. See further details [here](https://www.mdpi.com/about/announcements/784).

## [](https://www.mdpi.com/2313-433X/4/2/43)Article Metrics

### Citations

Scopus

Crossref

Web of Science

Google Scholar

### Article Access Statistics

For more information on the journal statistics, click [here](https://www.mdpi.com/journal/jimaging/stats).

Multiple requests from the same IP address are counted as one view.
