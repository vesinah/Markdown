---
file_id: 2024_xu_dataset_digital_restoration_dunhuang_murals
original_file: 2024_xu_dataset_digital_restoration_dunhuang_murals.pdf
title: "2024_xu_dataset_digital_restoration_dunhuang_murals"
author_creator: "Unknown"
publication_year: ND
document_format: PDF
page_count: 17
extraction_tier: Tier 1 (Clean Digital Layout-Aware)
extraction_tool: Document-to-Markdown Central Engine (PyMuPDF + Tesseract)
---

<!-- Page 1 -->
1
Scientific Data |          (2024) 11:955  | https://doi.org/10.1038/s41597-024-03785-0
www.nature.com/scientificdata
A comprehensive dataset for digital 
restoration of Dunhuang murals
Zishan Xu1, Yuqing Yang1, Qianzhen Fang1, Wei Chen1 ✉, Tingting Xu1, Jueting Liu1 & 
Zehua Wang1,2
The MuralDH dataset is an invaluable digital resource developed for the conservation and restoration 
of Dunhuang murals, which are critical components of global cultural heritage facing threats from 
degradation. This dataset comprises over 5000 high-resolution images tailored to 512 × 512 pixels, 
emphasizing the preservation of mural integrity and detail. It includes 1000 images with pixel-level 
damage annotations for segmentation research and 500 images specially processed for super-resolution 
studies, catering to a wide range of digital restoration needs. While the primary focus of this work 
is the dataset itself, we also introduce a supportive digital restoration framework. This framework, 
which encompasses damage segmentation, inpainting, and super-resolution techniques, serves as 
a secondary validation of MuralDH’s utility and versatility. Through MuralDH, technology revives 
ancient art, embodying the essence of interdisciplinary innovation. By facilitating advanced research 
in computer vision and artificial intelligence, MuralDH aims to revolutionize the digital preservation 
practices for murals and other cultural artifacts, demonstrating the critical role of interdisciplinary 
collaboration in safeguarding our cultural legacy.
Background & Summary
Throughout the long course of human civilization, artworks have not only served as a microcosm of history, 
bearing rich cultural connotations and historical information, but have also witnessed the evolution of human 
society and spiritual pursuits. The Dunhuang murals, masterpieces of ancient Chinese art, with their unique 
artistic style and profound cultural value, display religious stories, social life scenes, and historical changes from 
the Wei, Jin, Southern and Northern Dynasties to the Tang, Song, and Yuan dynasties. They have become inval-
uable materials for studying ancient cultural exchanges between the East and the West, especially along the Silk 
Road. However, facing the erosion of time and various unpredictable natural disasters and human destruction1, 
these priceless cultural heritages are now at great risk, facing the crisis of being permanently lost.
It is based on this sense of crisis and responsibility for cultural inheritance that the use of modern technol-
ogy for the digital protection and restoration of murals in Dunhuang and other places has become particularly 
important. Compared with traditional physical restoration methods, digital technology offers a non-destructive, 
efficient, and sustainable way of protection, allowing for the precise restoration of their structure and appearance 
without touching the original works2–6. If further augmented with the capabilities of artificial intelligence in 
image generation, it would also be possible to swiftly provide diverse restoration outcomes for damaged murals, 
as well as to offer guidance for the manual restoration of ancient murals in real-life scenarios. In addition to 
the digital restoration of Dunhuang murals, many other ancient murals also need digital restoration7–11. This 
means not only can we preserve these priceless cultural treasures for future generations, but we can also connect 
ancient art with modern life through the power of technology, exploring new paths for the integration of art 
and technology. Digitalization not only can restore the original elegance of artworks but also allows the public 
to experience and appreciate these historically significant works in new ways and interactive manners, thereby 
bringing the brilliance of art into every corner of modern society in a more vivid and lasting way. Using modern 
technology for the digital protection and restoration of these precious artworks not only preserves these valuable 
cultural heritages for posterity but also promotes the integration of art and technology in new ways, bringing 
art back to life.
The establishment of the MuralDH dataset is based on such needs and visions. By collecting images of 
Dunhuang murals from the internet, we adopted techniques such as data cropping to uniformly crop them into 
512 × 512 sizes, resulting in more than five thousand high-quality images. This process not only considered 
1China University of Mining and Technology, Xuzhou, 221116, China. 2University of British Columbia, Vancouver,  V6T 
1Z4, Canada. ✉e-mail: chenwdavior@163.com
Data Descriptor
OPEN

<!-- Page 2 -->
2
Scientific Data |          (2024) 11:955  | https://doi.org/10.1038/s41597-024-03785-0
www.nature.com/scientificdata
www.nature.com/scientificdata/
the standardization of image sizes but also ensured the integrity and representativeness of mural content in the 
images. On this basis, we manually selected one thousand images of murals with obvious damage and anno-
tated the damaged areas of these mural images pixel by pixel, creating a mural damage segmentation dataset. 
Additionally, we selected 500 high-quality mural images, performed cropping and downsampling, and created 
a mural super-resolution image dataset. The creation of these datasets not only provides valuable resources for 
the digital preservation and restoration of Dunhuang murals, but also offers researchers a new platform to study 
and test mural restoration algorithms.
Furthermore, this paper not only provides a detailed introduction to the MuralDH dataset but also proposes 
a framework for blind restoration of Dunhuang murals using this dataset. The blind restoration process in this 
study is divided into three main stages, each applying the latest image processing technologies, demonstrating 
how technology can assist in the preservation and restoration of art.
The first stage: Image damage segmentation. In this stage, we used 1, 000 clearly damaged Dunhuang mural 
images, employing advanced deep learning models for image segmentation. Recently, models such as those 
verified by Kirillov et al.12 through the ‘Segment Anything’ (SAM) have shown broad applicability in diverse 
tasks. Furthermore, Chen et al.13 enhanced model performance in specific tasks through SAM-Adapter. This 
stage’s innovation lies in the application of new architectures like MISSFormer14 and TransCeption15, which 
are particularly suited for medical image segmentation, providing a new methodology for our mural damage 
segmentation.
The second stage: Image inpainting. In the damaged areas’ inpainting, various efficient inpainting techniques 
are employed. For instance, DSI16 uses a hierarchical vector quantization variational autoencoder (VQ-VAE) to 
achieve diversified structural restoration effects. ICT17 combines transformers and convolutional neural net-
works (CNNs) to enhance image integrity and realism. Research by Lama18 and RePaint19 focuses on completing 
images in large missing areas, the former utilizing GANs with common mode modulation, the latter adopting 
methods based on denoising diffusion probabilistic models (DDPM), suitable for extreme occlusion scenarios.
The third stage: Image super-resolution processing. For the restored mural images, super-resolution technol-
ogy is used to enhance image quality and details. Significant advancements in this field, such as those by Wang 
et al.20 with Real-ESRGAN, Liang et al.21 with SwinIR, and the latest research by Chen et al.22, have significantly 
improved image resolution and visual effects by activating more pixel points and using purely synthetic data.
Overall blind restoration: In terms of overall blind restoration, Wan Z et al.23 focus on restoring old pho-
tographs, addressing various complex degradation issues. Additionally, ‘Inpaint Anything’ (IA)24 introduces a 
new user interaction paradigm that allows users to interactively remove, fill, or replace image content through 
clicking and filling methods. These advanced methods provide a new perspective and technical path for mural 
restoration.
In summary, by combining these advanced technologies, our framework not only provides technological 
support for the protection and restoration of Dunhuang murals but also explores new pathways for the integra-
tion of art and technology, presenting these precious cultural heritages in a new way to contemporary society. 
The specific processes and technical details of this overall methodology are shown in Fig. 1, which illustrates the 
complete workflow from image processing to image enhancement.
The creation and release of the MuralDH dataset aim to provide a valuable resource bank for the digital pro-
tection and restoration of Dunhuang murals, while also opening up a new field for the study of art restoration 
using artificial intelligence and computer vision technology. This dataset not only enables researchers and devel-
opers to explore and develop new image processing algorithms such as automatic damage detection, image seg-
mentation, content repair, and image enhancement, but also promotes cooperation between disciplines such as 
art history, cultural heritage protection, computer science, and artificial intelligence, working together to protect 
and inherit human cultural heritage. The introduction of the MuralDH dataset and its digital restoration method 
framework not only signifies an important advancement in the integration of technology and art but also opens 
up new opportunities for the “rebirth” of artworks and the shared understanding and appreciation of immortal 
cultural heritage by all humanity. We look forward to this dataset inspiring more innovative research and appli-
cations, helping people appreciate and understand these historically significant artworks from a new perspective.
Methods
This section delves into the detailed production process of the MuralDH dataset, from collection and cleaning to 
annotation, aimed at constructing a high-quality image library suitable for the digital restoration of Dunhuang 
murals. Following the dataset creation, this chapter also introduces an innovative framework for blind restora-
tion of murals, demonstrating how the MuralDH data can be effectively utilized for digital restoration research 
of Dunhuang mural images through the integration of damage segmentation, inpainting, and super-resolution 
technologies.
Data production process. 
This subsection provides a detailed description of the MuralDH dataset’s 
production process (as shown in Fig. 2), including the creation of the damage segmentation dataset and the 
super-resolution dataset. The process is divided into several stages, from data collection to organization, with each 
step meticulously designed to ensure the dataset’s high quality and utility. The following are detailed step-by-step 
instructions.
Data collection.  The data collection phase marks the starting point of the MuralDH dataset’s creation. Our 
goal was to build a comprehensive and diverse library of Dunhuang mural images. To this end, the team focused 
first on collecting existing open-source datasets, using search engines and specific seed images to search for 
and download original images to our data pool. The primary role of the data pool was as a temporary storage 
location for collected images. Once the number of collected images reached our predetermined goal or the data

<!-- Page 3 -->
3
Scientific Data |          (2024) 11:955  | https://doi.org/10.1038/s41597-024-03785-0
www.nature.com/scientificdata
www.nature.com/scientificdata/
pool’s capacity limit, we moved on to the next phase. This process ensured that we could accumulate a sufficient 
amount of image data from a wide range of sources, laying a solid foundation for subsequent processing and 
analysis.
Data cleaning.  After collecting enough Dunhuang mural image data, the next step was data cleaning. This cru-
cial step ensured that each image in the dataset had high resolution and rich detail, which is vital for subsequent 
image processing and analysis. Data cleaning mainly involved identifying and eliminating duplicate or highly 
similar images in the dataset, adjusting the image size to a standard resolution of 512 × 512, and cropping out 
unnecessary parts to better focus on the main content of the murals. Additionally, we manually selected the most 
representative images or those meeting specific standards to further enhance the dataset’s quality and utility.
Data annotation.  Data annotation was a key step in building the damage segmentation dataset. To ensure con-
sistency and accuracy in the annotations, we first clearly defined “damage” to include phenomena such as cracks, 
peeling, and fading. This definition was based on an in-depth analysis of damage characteristics on Dunhuang 
murals, taking into account the diversity and complexity of damage. Subsequently, our annotators needed to 
deeply understand the subtle differences between different types of damage on the murals, requiring their pro-
fessional knowledge and meticulous observation.
During the data annotation process, we used LabelMe, an open-source image annotation tool that supports 
precise pixel-by-pixel annotation. Annotators used this tool to manually outline the boundaries of all dam-
aged areas on the images, regardless of the size or visibility of the damage. This precise pixel-by-pixel selection 
method allowed us to capture the minutest details of damage, ensuring the dataset’s practicality and effectiveness 
in subsequent restoration research.
To ensure high-quality annotations, we established a strict annotation and review process. After initial anno-
tations were completed, multiple rounds of iterative reviews were conducted to check and correct any omissions 
or errors in the initial annotations. Each round of iterative review aimed to improve the accuracy and complete-
ness of the annotations. After these iterations, an internal review was carried out by experienced annotators or 
project leaders to check the annotation results, ensuring their accuracy and consistency. This internal review 
stage was crucial, ensuring the dataset’s quality met research requirements.
Based on review feedback, annotators might need to re-annotate specific images or make further improve-
ments, establishing a continuous improvement cycle. This feedback-based iterative process helped enhance the 
entire dataset’s quality and reliability. Finally, after meticulous annotation and strict quality control, the anno-
tated data were organized and exported in PNG format, forming the final mural damage segmentation dataset. 
SR results
Inpainting results
Segment results
Input
Fig. 1  Demonstration of blind mural restoration effects.

<!-- Page 4 -->
4
Scientific Data |          (2024) 11:955  | https://doi.org/10.1038/s41597-024-03785-0
www.nature.com/scientificdata
www.nature.com/scientificdata/
This dataset not only accurately reflected the condition of damage on Dunhuang murals but also provided a solid 
foundation for subsequent digital restoration.
Production of the mural super-resolution dataset.  The creation of the mural super-resolution dataset involved 
three main steps: obtaining high-quality mural images, processing, and dataset division. First, through col-
lection and manual selection, we obtained 240 high-resolution (2048 × 2048) Dunhuang mural images. These 
images were then downsampled to a resolution of 512 × 512. During the selection process, we paid special atten-
tion to ensuring that this subset of downsampled images was highly similar in data distribution to the over 5000 
Dunhuang mural images we had initially collected and produced, ensuring data consistency and representative-
ness. Finally, after strict selection and processing, we obtained 500 images for super-resolution research, forming 
the Dunhuang mural super-resolution dataset within MuralDH.
These steps showcase the entire process of MuralDH dataset creation, from data collection to organization. 
Through this series of carefully designed and executed steps, we successfully created a high-quality, multipur-
pose Dunhuang mural image dataset, providing valuable resources for digital protection and restoration, and 
offering researchers a platform for studying and testing new algorithms.
Comparison with other datasets. 
Table 1 provides a detailed introduction to datasets related to Dunhuang 
murals, such as those by Li et al.25 and Lv C26, comparing them with our MuralDH dataset in terms of image quan-
tity, resolution, differences in special annotations, as well as their respective strengths and weaknesses. Table 2 
involves comparisons with other digital art restoration datasets, such as those by Wang et al.11 and Cao J et al.27.
Blind restoration method framework. 
The creation of the MuralDH dataset marks a milestone in the 
field of digital restoration of Dunhuang murals. It not only provides a comprehensive and unique resource library 
specifically for the restoration of damaged and low-quality Dunhuang mural images but also opens new avenues 
Data Collection
Data Cleaning
Data Annotation
 Data Organization
Super-resolution Dataset
Choose
Annotation
Fig. 2  Data set creation process flowchart.

<!-- Page 5 -->
5
Scientific Data |          (2024) 11:955  | https://doi.org/10.1038/s41597-024-03785-0
www.nature.com/scientificdata
www.nature.com/scientificdata/
for the protection and study of this ancient art form. The blind restoration method framework introduced in this 
section (as shown in Fig. 3), supported by the powerful MuralDH dataset, was meticulously designed to achieve 
high-quality digital restoration of Dunhuang murals.
This framework integrates mural damage area segmentation, inpainting processing, and super-resolution 
technology, showcasing a systematic method to gradually restore and enhance the quality of Dunhuang mural 
images. From identifying and accurately segmenting the damaged areas of the murals, to using advanced inpaint-
ing technology to fill in these damages, and then applying super-resolution technology to improve the image’s 
detail and clarity, each step is aimed at ultimately obtaining high-quality digital images as close to their original 
state as possible. This process not only requires a deep understanding of the artistic characteristics and damage 
features of the murals but also relies on the rich data and image resources provided by the MuralDH dataset.
Mural damage area segmentation.  Utilizing the MuralDH dataset, researchers can test and improve the most 
advanced segmentation algorithms under actual damage conditions25,26,28,29. These algorithms can accurately 
identify damaged areas, providing a precise foundation for subsequent restoration work. The dataset covers 
damages ranging from minor to severe and the appearance of murals under different lighting and backgrounds, 
offering a diverse data environment for training segmentation models.
Mural damage area inpainting.  The high-quality image resources in the MuralDH dataset enable researchers to 
conduct effective inpainting studies on damaged areas, exploring the application of advanced image generative 
technologies based on GAN and Diffusion, uncovering these technologies’ outstanding ability to fill in mural 
damage areas and restore image integrity. This stage of research validates the dataset’s application value in sup-
porting complex image restoration tasks.
Mural image super-resolution processing.  The Dunhuang mural super-resolution dataset within the MuralDH 
dataset also holds unique value and extensive application potential in the field of mural super-resolution 
research. During the super-resolution processing stage, researchers can utilize the high-resolution and 
low-resolution image pairs found in the MuralDH dataset, providing a direct research basis for enhancing the 
Data Source
Image Count
Resolution
Data Augmentation
Special Notes
Advantages
Disadvantages
Source
Li et al.25
1, 714 (expanded 
to 75, 072)
Not specified
Rotation, random 
cropping, color 
transformation, and 
flipping
Includes line 
drawings, generated 
with DexiNed
High data diversity, 
includes line drawings
Limited original 
image count, relies 
on augmentation
Dunhuang
Lv et al.26
2, 175 (expanded 
to 17, 400)
256 × 256
Mirroring, horizontal and 
vertical segmentation
Uses masks to 
simulate mural 
damage
Highly specialized 
treatment, includes 
simulated damage
Low resolution, 
enhancement 
methods may 
affect quality, only 
simulates damage
Dunhuang
Xu Z, Zhang C, 
Wu Y.28
1, 236 (expanded 
to 10, 800)
1024 × 1024
Image cropping, 
removing areas with large 
whitespace
Uses Python image 
cropping algorithm 
to expand dataset
Obtains data from 
relatively complete 
Dunhuang mural 
images
Important image 
information may be 
lost during cropping
Dunhuang
Zhao Huirong 
Team29
100 (expanded to 
10, 000)
512 × 512
Random rotation, 
flipping, random position 
cropping, random 
Gaussian noise addition
Highly precise 
residual dual-
channel attention 
U-Net for mural 
disease detection
Uses advanced network 
models to improve 
detection accuracy and 
generalizability
Relies heavily on 
data augmentation, 
broad data collection 
scope
Dunhuang and 
ancient murals from 
minority regions in 
Yunnan
Our Dataset
6, 000
5, 500 images 
at 512 × 512; 
500 images at 
2048 × 2048
Only cropping
1, 000 images 
with pixel-perfect 
manual annotations 
of real mural 
damage
High-quality images, 
detailed annotations, 
real damage 
annotations
Larger sample size 
compared to other 
datasets
Dunhuang
Table 1.  Comparison of dunhuang mural digital restoration datasets.
Data Source
Image Count
Resolution
Data Augmentation
Special Notes
Advantages
Disadvantages
Source
Wang et al.11
2, 780
512 × 512
No specific data 
augmentation
None
Simple structure
Insufficient data 
augmentation, limited 
diversity
Thanka
Cao et al.27
800 (expanded to 
12, 000)
Not specified
Not detailed
None
Large number of 
enhanced images
Enhancement details 
unclear, quality may vary
Shanxi Wutai 
Mountain temples
Jiang et al.33
Not specified
368 pixels
Simulated damage
Experiments 
randomly select 
images from the 
dataset for simulation 
restoration testing
Adapts to diverse 
damage forms under 
restoration
Experimental setup 
may not fully reflect real 
damage conditions
Gallerix oil 
painting dataset
Lin et al.34
1, 762 (expanded 
to 2, 593)
512 × 512
Random rotation, flipping, 
random cropping, 
Gaussian noise
Stamp detection, 
classification, and 
repair
Specialized high 
precision detection and 
repair for stamps
Focused on stamps, does 
not involve other mural 
elements
Chinese 
traditional 
paintings
Table 2.  Comparison of digital art restoration datasets.

<!-- Page 6 -->
6
Scientific Data |          (2024) 11:955  | https://doi.org/10.1038/s41597-024-03785-0
www.nature.com/scientificdata
www.nature.com/scientificdata/
resolution and restoring details of Dunhuang mural images. By testing and researching improvements on vari-
ous super-resolution models using this dataset, the establishment and application of the MuralDH dataset pro-
vide a solid research platform for the digital restoration of Dunhuang murals.
The establishment and application of the MuralDH dataset have provided a robust research platform for 
the digital restoration of Dunhuang murals. By implementing the blind restoration method framework on this 
dataset, we not only showcase the dataset’s crucial role in supporting advanced restoration technology research 
but also offer new perspectives and methods for the protection and restoration of Dunhuang murals and other 
cultural heritages. The further application and development of the MuralDH dataset will continue to promote 
innovation and progress in digital protection technologies for cultural heritage.
Data Records
The MuralDH dataset contains over 5000 pre-processed images of Dunhuang murals, obtained through access 
to various digital resources, this dataset is hosted on Figshare30.
Damaged mural segmentation dataset. 
A specially selected set of 1000 images of murals with obvious 
damage, detailed with pixel-by-pixel annotations, forms the core of the damaged mural segmentation dataset. 
To demonstrate the specific content and annotation quality of this subset, Fig. 4: Examples from the MuralDH 
Segmentation Dataset provides some annotated examples, showcasing the annotation results of murals with vary-
ing degrees of damage and different styles. This visually reflects the dataset’s diversity and potential for application.
Super-resolution dataset.  The super-resolution subset consists of 500 high-quality images that have been 
cropped and downsampled, specifically for training and validating super-resolution technology. Figure 5: 
Examples from the MuralDH Super-Resolution Dataset presents to readers the comparison of images before 
and after super-resolution processing, intuitively demonstrating the effectiveness of super-resolution technology 
in improving image resolution and detail restoration.
Technical Validation
This section delves into the critical role of the MuralDH dataset in the digital restoration of Dunhuang murals, 
verifying its effectiveness and contributions through four sets of experiments. These experiments tested the 
dataset’s applications in damage segmentation, inpainting of damaged mural areas, super-resolution processing 
of murals, and overall blind restoration techniques.
(1) Mural breakage segmentation stage
 segmentation
 lmage Results
Unet
(2) Inpaint stage
LaMa 
Network 
...
(3) High Resolution stage
...
...
SAM
SAM-adapter
RePaint
Network 
Stable diffusion
Network 
+
+
+
Fig. 3  Blind restoration method framework diagram.

<!-- Page 7 -->
7
Scientific Data |          (2024) 11:955  | https://doi.org/10.1038/s41597-024-03785-0
www.nature.com/scientificdata
www.nature.com/scientificdata/
Introduction to metrics. 
To comprehensively assess the potential applications and practicality of our dataset 
in future research, this section introduces several key technical validation metrics. These metrics are crucial not 
only for evaluating the performance of our dataset in real-world applications but also provide a standardized set of 
evaluation tools for researchers who will use this dataset in the future. We will explore these metrics in detail next.
IoU metric.  The IoU (Intersection over Union) metric is a key indicator for assessing model performance 
in image segmentation tasks. In the application of segmenting damaged areas of Dunhuang murals, the IoU 
metric evaluates the precision of the model by calculating the ratio of the intersection to the union between the 
predicted damaged areas and the actual damaged areas. This metric is essential for verifying the effectiveness of 
segmentation models in accurately identifying and delineating the boundaries of mural damage, serving as an 
important tool for measuring the dataset’s effectiveness in practical applications.
The IoU (intersection over union) is a metric used to assess the accuracy of model segmentation by calcu-
lating the ratio of the intersection to the union between the predicted damaged area (predicted region) and the 
actual damaged area (real region), as shown in Formula 1:
∩
∪
=
= A
B
A
B
IoU
Area of Overlap
Area of Union
(1)
Fig. 4  Examples from the MuralDH segmentation dataset.

<!-- Page 8 -->
8
Scientific Data |          (2024) 11:955  | https://doi.org/10.1038/s41597-024-03785-0
www.nature.com/scientificdata
www.nature.com/scientificdata/
Where A represents the predicted damaged area, and B represents the real damaged area. This metric provides us 
with a quantitative tool to evaluate the model’s efficacy in precisely delineating the boundaries of mural damage.
Ancient mural inpainting metrics.  SSIM (Structural Similarity Index) and PSNR (Peak Signal-to-Noise Ratio) 
are two primary metrics for evaluating the quality of image restoration. SSIM assesses the similarity in bright-
ness, contrast, and structure between the restored image and the original image, focusing more on the visual 
effects of the image. PSNR measures the ratio of the maximum possible power of a signal to the power of cor-
rupting noise that affects its fidelity, commonly used to evaluate the impact of background noise in images. 
Together, these metrics help researchers quantify the degree of image quality restoration during the mural res-
toration process and compare the effectiveness of different restoration algorithms in preserving original artistic 
details and color accuracy.
SSIM (Structural Similarity Index) measures the visual similarity between two images, as shown in Formula 2:
x y
c
c
c
c
SSIM( ,
)
(2
)(2
)
(
)(
)
(2)
x y
xy
x
y
x
y
1
2
2
2
1
2
2
2
μ μ
σ
μ
μ
σ
σ
=
+
+
+
+
+
+
Where μx, μy are the mean values of images x, y, σx, σy are the variances, σxy is the covariance, and c1,c2 are the 
constants added to avoid division by zero.
PSNR (Peak Signal-to-Noise Ratio) evaluates the quality of image restoration by comparing the error 
between the original and restored images, as shown in Formula 3:
PSNR
10
log
MAX
MSE
(3)
I
10
2
=
⋅






Where MAXI is the maximum possible pixel value of the image (typically 255), and MSE is the mean squared 
error.
MSE (Mean Squared Error) also plays a crucial evaluative role in the field of ancient mural restoration. This 
metric assesses the quality of restoration by directly measuring the pixel-level differences between the restored 
mural and its original state. The formula is expressed as follows:
mn
I i j
K i j
MSE
1
( ( , )
( , ))
(4)
i
m
j
n
1
1
2
∑∑
=
−
=
=
In this formula, I(i, j) and K(i, j) represent the pixel values at position (i, j) in the original and restored murals, 
respectively, while m and n are the width and height of the image. The lower the value of MSE, the higher the 
similarity between the restored mural and its original state, indicating a more ideal restoration effect.
MSE is a fundamental and intuitive evaluation method that can effectively quantify the cumulative error of 
each pixel during the image restoration process, comparing the accuracy and efficiency of different restoration 
techniques in recovering mural details and overall visual effects. In the practical application of ancient mural res-
toration, combining MSE with other metrics such as SSIM and PSNR allows restoration experts and researchers 
to comprehensively evaluate and compare the performance of different restoration methods, ensuring that the 
chosen techniques maximally preserve and restore the original beauty and historical value of the murals.
Through these detailed metric introductions, we aim to provide future researchers with a clear and effective 
set of tools, enabling them to more accurately assess and utilize the practical application effects of our dataset in 
the digital restoration of Dunhuang murals.
Damage segmentation experimental verification. 
In this section, we will demonstrate how practical 
experiments are used to evaluate the performance of our dataset in segmenting damaged murals. These experi-
ments are crucial not only for showcasing the dataset’s utility but also for understanding its potential in automat-
ing the identification and analysis of mural damage. We will detail the experimental setup, the models used, and 
the key findings obtained from these experiments.
Fig. 5  Examples from the MuralDH super-resolution dataset.

<!-- Page 9 -->
9
Scientific Data |          (2024) 11:955  | https://doi.org/10.1038/s41597-024-03785-0
www.nature.com/scientificdata
www.nature.com/scientificdata/
For this experiment, we employed the SAM-Adapter13, an advanced segmentation technology that incor-
porates an adaptive module, using the MuralDH dataset for segmenting damaged areas of Dunhuang murals. 
Moreover, to comprehensively evaluate the performance of SAM-Adapter, other advanced image segmentation 
technologies were introduced for comparison, including the Transformer-based models MISSFormer14 and 
TransCeption15, and the semi-supervised learning method LViT31.
SAM-Adapter integrates the Segment Anything Model (SAM) with an adapter module. The core of SAM 
is a ViT-H/16 image encoder, equipped with a 14 × 14 attention window and four global attention blocks. 
Between each layer of the transformer, an adapter module comprising two multi-layer perceptrons (MLPs) 
and an activation function is added to enhance the model’s adaptability to complex images. Three adapters 
in the mask decoder handle cross-attention and output the final result through additional residual connec-
tions and layer normalization. MISSFormer and TransCeption, developed by Huang et al. and Azad et al., 
are Transformer-based models that have shown exceptional performance in medical image segmentation. 
TransCeption significantly enhances segmentation performance by integrating multi-scale features, suitable 
for processing images with complex textures and structures. LViT, proposed by Li et al., is a semi-supervised 
learning model that integrates textual information into medical image segmentation, offering new methods and 
insights for handling situations with limited annotated data.
In the experiments (Fig. 6), SAM-Adapter and the comparative models MISSFormer, TransCeption, and 
LViT were all trained for 100 iterations on our MuralDH dataset’s mural damage segmentation dataset under 
uniform parameter settings to ensure the fairness of evaluation. Notably, the training of SAM-Adapter utilized 
：
：
Fig. 6  Comparison of segmentation results between SAM-adapter and other models.

<!-- Page 10 -->
10
Scientific Data |          (2024) 11:955  | https://doi.org/10.1038/s41597-024-03785-0
www.nature.com/scientificdata
www.nature.com/scientificdata/
a semi-supervised learning strategy, which helps to improve the model’s generalization ability and accuracy in 
situations with limited annotated data. In this experiment, the mural damage segmentation dataset was divided 
into a training set and a test set in an 8:2 ratio.
The experimental results are presented through the IoU metric (Table 3), and our designed SAM-Adapter 
model significantly outperformed MISSFormer and TransCeption on the MuralDH dataset (see Figure). This 
outcome not only demonstrates the superior ability of our designed SAM-Adapter in precisely segmenting dam-
aged areas of Dunhuang murals but also highlights the high quality and diversity of the MuralDH dataset, whose 
wide range of image types and detailed damage annotations provided rich training and validation scenarios for 
the model. These detailed data characteristics make the MuralDH dataset a valuable resource for mural dam-
age segmentation research, greatly advancing the development and optimization of segmentation algorithms. 
Additionally, the advantages displayed by the LViT model in a semi-supervised learning environment offer 
valuable references for future research under conditions of limited ancient damaged mural annotation data.
Mural inpainting experimental verification. 
In this section, we will use our previously published 
research findings, “MuralDiff”32, to validate the effectiveness of the dataset proposed in this paper. MuralDiff is a 
restoration method for ancient murals that relies on diffusion models rather than the commonly used Generative 
Adversarial Networks (GANs). The following content demonstrates the experimental results of mural defect 
repair using MuralDiff, and the critical role of our dataset in this process.
The MuralDiff method was compared with advanced inpainting methods from recent years (see Fig. 7), using 
evaluation metrics including PSNR, SSIM, and MSE. To ensure model efficiency and accuracy, we used a model 
pre-trained on the Places256 dataset and fine-tuned it 300, 000 times, followed by an additional 100, 000 itera-
tions on our MuralDH dataset. By simulating damage on a portion of undamaged murals, i. e., adding 10–20% 
irregular masks during the testing repair process, we evaluated the inpainting effects of the model.
As the research indicates, MuralDiff outperforms other methods across all evaluation metrics, particularly in 
terms of PSNR, SSIM, and MSE performance (as shown in Table 4). These results not only validate the effective-
ness of the MuralDiff method but also highlight the high quality and diversity of our dataset.
To further prove the value of our dataset, we conducted detailed ablation experiments. First, using only the 
large-scale Places256 dataset for pre-training, we then compared the metrics after fine-tuning on the MuralDH 
dataset. Experimental results shown in Fig. 8 indicate that models fine-tuned with our MuralDH dataset per-
form better in detail and edge recovery. This confirms our dataset’s advantages in training on specific categories 
of ancient murals, especially in highly complex and damaged area restoration tasks.
Consolidating the metrics from Table 5, we can clearly see the comparative differences in whether or not the 
MuralDH dataset was used for fine-tuning. The results confirm that fine-tuning the model with data from Mural 
DH significantly enhances the model’s capability to restore Dunhuang murals.
Through the evaluation of the MuralDiff method and its comparison with other advanced inpainting meth-
ods, we have validated the critical role of the MuralDH dataset in mural restoration research, demonstrating the 
significant potential of this dataset in the field of mural repair.
Super-resolution processing experimental verification. 
In the super-resolution processing experi-
mental verification section, we evaluated the effectiveness of the super-resolution part of the MuralDH dataset in 
enhancing the resolution and restoring details of Dunhuang mural images. For this purpose, we employed several 
advanced super-resolution technologies, including Real-ESRGAN20, SwinIR21, and HAT22, to explore the research 
potential of our super-resolution mural data in the field of cultural heritage image restoration.
As shown in Fig. 9, all the selected super-resolution methods, after being trained on the MuralDH 
super-resolution dataset, achieved excellent results in super-resolving ancient mural images. Specifically, these 
methods significantly improved the resolution of Dunhuang mural images while demonstrating exceptional 
performance in detail restoration. This proves the researchability of the super-resolution data in our dataset 
across various types of super-resolution models, and highlights the critical role of the MuralDH dataset in 
advancing digital preservation and restoration technologies for cultural heritage.
Overall blind restoration method effects. 
The primary objective of this experiment is to assess and 
compare the efficiency of our proposed automated mural blind restoration methods with existing technologies 
in handling mural damage. This evaluation aims to validate the potential of our dataset in supporting complex 
cultural heritage preservation tasks. In this paper, we specifically examine three different restoration methods:
The IA method24 combines the SAM segmentation algorithm and Lama technique for detecting and filling 
damaged areas. This method performs well in general image processing tasks but has limitations in specific 
mural damage recognition, especially when dealing with subtle damage close to the background color.
Method
Semi
Our Semi
IOU
Misformer
0.0520
MSTransception
0.0560
SAM-adapter
0.1944
SAM-adapter
✓
0.1713
SAM-adapter
✓
0.2237
Table 3.  IoU performance comparison.

<!-- Page 11 -->
11
Scientific Data |          (2024) 11:955  | https://doi.org/10.1038/s41597-024-03785-0
www.nature.com/scientificdata
www.nature.com/scientificdata/
The Bring Old method23 uses Unet segmentation, suitable for general image processing tasks. Its U-net seg-
mentation performs well on obvious damage but decreases in accuracy when dealing with complex or irregular 
damage and sometimes results in stylistically inconsistent issues.
Our method combines mural damage segmentation technology based on SAM-adapter and image inpainting 
strategies based on the MuralDiff method, aiming to more accurately understand and repair damage on murals. 
This method shows high accuracy in the damage identification stage, especially in recognizing subtle damage, 
and maintains the original style and details of the mural during the repair process.
In implementation (see Fig. 10), each method first identifies and segments damaged areas of the mural images. 
Subsequently, their respective image filling techniques are used to repair these areas. The Bring Old method also 
Fig. 7  Comparison of MuralDiff with other inpainting methods.

<!-- Page 12 -->
12
Scientific Data |          (2024) 11:955  | https://doi.org/10.1038/s41597-024-03785-0
www.nature.com/scientificdata
www.nature.com/scientificdata/
includes an image coloring stage to repair mural colors, while our method additionally incorporates a super-resolution 
stage to enhance the resolution of the repaired mural images, with a special focus on whether the methods can pre-
serve the original style and details of the mural. Since the test images are inherently damaged with no reference avail-
able, metric calculations cannot be conducted; thus, the repaired images will be jointly evaluated by art restoration 
experts and image processing specialists. Evaluation criteria include consistency of the repaired areas with the original 
images, level of detail preservation, and overall aesthetic effect, where our method achieved the best results.
The high quality and diversity of the MuralDH dataset demonstrated its unique value in this experiment. The 
wide range of image types and detailed damage annotations provided by the dataset allowed for comprehensive 
testing and comparison of different restoration methods. Particularly, our method, utilizing these detailed data 
for training and validation, showed that traditional image processing methods might not meet the high stand-
ards required for complex and precious mural restoration tasks, whereas the advanced segmentation techniques 
and image filling strategies based on our dataset excellently address these challenges.
Method
Average PSNR ↑
Average SSIM ↑
Average MSE ↓
DSI16
12.9833
0.1813
0.0818
ICT17
12.7166
0.1538
0.0836
MISF35
12.4446
0.0734
0.0875
MAT36
13.8186
0.3378
0.0796
Lama18
14.8586
0.2964
0.0733
Edgeconnect37
13.0956
0.1940
0.0816
MuralDiff
14.5392
0.3206
0.0747
Table 4.  Performance comparison of mural damage area inpainting methods.
Input
Places256
fine-tuning on the  
Mural DH
Fig. 8  Performance comparison before and after fine-tuning with the MuralDH dataset.

<!-- Page 13 -->
13
Scientific Data |          (2024) 11:955  | https://doi.org/10.1038/s41597-024-03785-0
www.nature.com/scientificdata
www.nature.com/scientificdata/
Cross-dataset generalization test of the damage segmentation model. 
We further validated the 
applicability of our mural damage segmentation model, trained on the Dunhuang mural dataset, across other 
datasets featuring ancient murals from different cultural and historical backgrounds. This experiment selected 
ancient murals from Ancient Egypt, Pompeii, and the Altamira cave in Spain to test the model’s generalization 
capability. Since the test images inherently contain unreferenceable damage, this test primarily relied on visual 
effect assessments rather than quantitative metrics. We applied the trained model to the digitized images of these 
cultural heritages for automatic identification and segmentation of damaged areas.
Fine-tuning
Average SSIM ↑
Average PSNR ↑
Average MSE ↓
14.0525
0.2276
0.0835
✓
14.2372
0.2716
0.0782
Table 5.  Performance comparison before and after fine-tuning with the MuralDH dataset.
SwinIR
Real-ESRGAN
HAT
LR(×4)
Fig. 9  Demonstration of super-resolution processing effects.

<!-- Page 14 -->
14
Scientific Data |          (2024) 11:955  | https://doi.org/10.1038/s41597-024-03785-0
www.nature.com/scientificdata
www.nature.com/scientificdata/
The experimental results, as shown in Fig. 11, indicate that despite facing various types of damage and differ-
ent mural backgrounds, the segmentation model could still accurately identify and segment damaged areas in 
most cases. Besides common scratch damages, in Ancient Egyptian murals, the model was able to identify areas 
of color fading caused by environmental factors; in Pompeii murals, it accurately segmented areas damaged by 
volcanic ash; and in the murals of the Altamira cave, damages caused by water erosion and biological degrada-
tion were also effectively recognized.
These test results amply demonstrate the adaptability and generalization ability of our model across different 
cultural contexts. Moreover, this testing not only validated the practicality of the model but also proved the 
importance of the MuralDH dataset in training efficient mural damage segmentation models. Through these 
cross-cultural tests, we further confirmed the potential application value of our dataset and model in global 
cultural heritage preservation projects, showcasing the broad applicability of technology in the digitalization 
and protection of cultural heritage.
Usage Notes
The MuralDH dataset provides a unique and comprehensive resource for the digital preservation and restoration 
of Dunhuang murals. This dataset is suitable for researchers in various fields such as computer vision, image 
processing, art history, and cultural heritage preservation. To fully utilize the MuralDH dataset, researchers need 
to have basic knowledge of image processing and some computer programming skills, especially in Python pro-
gramming language. Additionally, efficiently processing and analyzing these image data often require substantial 
computational resources, such as computing systems equipped with high-performance GPUs.
The MuralDH dataset not only supports research on existing image processing and analysis methods but also 
serves as a platform for testing and validating new algorithms. Researchers can use this dataset to explore new 
technologies related to image segmentation, damage detection, content restoration, and image enhancement. 
Furthermore, by combining technology with art, this dataset also aids in exploring how to better use digital 
technology to protect and inherit human cultural heritage.
It is important to note that when using the MuralDH dataset, one must adhere to the relevant copyright and 
usage agreements. The use of the dataset should be focused on academic research and educational purposes, and 
any commercial use is prohibited.
Fig. 10  Comparison of blind restoration method results.

<!-- Page 15 -->
15
Scientific Data |          (2024) 11:955  | https://doi.org/10.1038/s41597-024-03785-0
www.nature.com/scientificdata
www.nature.com/scientificdata/
Code availability
The MuralDH dataset is hosted on GitHub to enable access and use by the research community. Dataset link: https://
github.com/tearsheaven/MuralDH. We encourage the research community not only to use this data but also to 
improve and expand upon it. Contributors should submit their contributions through pull requests and follow the 
data quality and contribution guidelines set by the project maintainers. Additionally, we look forward to the research 
community providing new algorithms and models to further enrich the application potential of the MuralDH dataset.
Received: 12 March 2024; Accepted: 13 August 2024;
Published: xx xx xxxx
References
	 1.	 Ma, W. et al. The biodeterioration outbreak in dunhuang mogao grottoes analyzed for the microbial communities and the 
occurrence time by c-14 dating. International Biodeterioration & Biodegradation 178, 105533 (2023).
	 2.	 Xu, Z. et al. Restoration of dunhuang murals on large-scale pretraining. In Proceedings of the 2023 6th International Conference on 
Signal Processing and Machine Learning, 106–111 (2023).
	 3.	 Chen, Y. et al. Dunhuang mural inpainting algorithm based on sequential similarity detection and cuckoo optimization. Laser & 
Optoelectronics Progress 57, 201020 (2020).
Ancient 
Egyptian 
mural
Altamira Cave 
Mural, Spain
Pompeii
mural
Fig. 11  Cross-Cultural mural damage segmentation model test results.

<!-- Page 16 -->
16
Scientific Data |          (2024) 11:955  | https://doi.org/10.1038/s41597-024-03785-0
www.nature.com/scientificdata
www.nature.com/scientificdata/
	 4.	 Chen, Y., Ai, Y. & Guo, H. Inpainting algorithm for dunhuang mural based on improved curvature-driven diffusion model. J 
Comput-Aided Design Comput Graph 32, 787–96 (2020).
	 5.	 Yang, X. & Wang, S. Dunhuang mural inpainting in intricate disrepaired region based on improvement of priority algorithm. J 
Comput Aided Des Comput Graph 23, 284–9 (2011).
	 6.	 Yunhe, P. & Dongming, L. Digital protection and restoration of dunhuang mural. Journal of System Simulation 15, 310–314 (2003).
	 7.	 Jingni, S., Huiqin, W., Meng, W. & Wenzong, Y. Tang dynasty tomb murals inpainting algorithm of mca decomposition. Journal of 
Frontiers of Computer Science & Technology 11, 1826 (2017).
	 8.	 Zhang, Z., Shui, W., Zhou, M., Xu, B. & Zhou, H. Research on disease extraction and inpainting algorithm of digital grotto murals. 
Appl Res Comput 38, 2495–24982504 (2021).
	 9.	 Jiao, L., Wang, W., Li, B. & Zhao, Q. Wutai mountain mural inpainting based on improved block matching algorithm. J Comput Aid 
Design Comput Graph 31, 119–25 (2019).
	10.	 Zhang, Z. & Zhou, H. Research on inpainting algorithm of digital murals based on enhanced structural information. Journal of 
System Simulation 34, 1524–1531 (2022).
	11.	 Wang, N., Wang, W., Hu, W., Fenster, A. & Li, S. Thanka mural inpainting based on multi-scale adaptive partial convolution and 
stroke-like mask. IEEE Transactions on Image Processing 30, 3720–3733 (2021).
	12.	 Kirillov, A. et al. Segment anything[C]//Proceedings of the IEEE/CVF International Conference on Computer Vision. 4015–4026 
(2023).
	13.	 Chen, T. et al. Sam fails to segment anything?–sam-adapter: Adapting sam in underperformed scenes: Camouflage, shadow, and 
more. arXiv preprint arXiv:2304.09148 (2023).
	14.	 Huang, X., Deng, Z., Li, D. & Yuan, X. Missformer: An effective medical image segmentation transformer. arXiv preprint 
arXiv:2109.07162 (2021).
	15.	 Azad, R., Jia, Y., Aghdam, E. K., Cohen-Adad, J. & Merhof, D. Enhancing medical image segmentation with transception: A multi-
scale feature fusion approach. arXiv preprint arXiv:2301.10847 (2023).
	16.	 Peng, J., Liu, D., Xu, S. & Li, H. Generating diverse structure for image inpainting with hierarchical vq-vae. In Proceedings of the 
IEEE/CVF Conference on Computer Vision and Pattern Recognition, 10775–10784 (2021).
	17.	 Wan, Z., Zhang, J., Chen, D. & Liao, J. High-fidelity pluralistic image completion with transformers. In Proceedings of the IEEE/CVF 
International Conference on Computer Vision, 4692–4701 (2021).
	18.	 Zhao, S. et al. Large scale image completion via co-modulated generative adversarial networks. arXiv preprint arXiv:2103.10428 
(2021).
	19.	 Lugmayr, A. et al. Repaint: Inpainting using denoising diffusion probabilistic models. In Proceedings of the IEEE/CVF Conference on 
Computer Vision and Pattern Recognition, 11461–11471 (2022).
	20.	 Wang, X., Xie, L., Dong, C. & Shan, Y. Real-esrgan: Training real-world blind super-resolution with pure synthetic data. In 
Proceedings of the IEEE/CVF international conference on computer vision, 1905–1914 (2021).
	21.	 Liang, J. et al. Swinir: Image restoration using swin transformer. In Proceedings of the IEEE/CVF international conference on computer 
vision, 1833–1844 (2021).
	22.	 Chen, X., Wang, X., Zhou, J., Qiao, Y. & Dong, C. Activating more pixels in image super-resolution transformer. In Proceedings of the 
IEEE/CVF Conference on Computer Vision and Pattern Recognition, 22367–22377 (2023).
	23.	 Wan, Z. et al. Bringing old photos back to life. In proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 
2747–2757 (2020).
	24.	 Yu, T. et al. Inpaint anything: Segment anything meets image inpainting. arXiv preprint arXiv:2304.06790 (2023).
	25.	 Li, L. et al. Line drawing guided progressive inpainting of mural damage. Preprint at https://arxiv.org/abs/2211.06649 (2024).
	26.	 Lv, C., Li, Z., Shen, Y., Li, J. & Zheng, J. Separafill: Two generators connected mural image restoration based on generative adversarial 
network with skip connect. Heritage Science 10, 135 (2022).
	27.	 Cao, J., Zhang, Z., Zhao, A., Cui, H. & Zhang, Q. Ancient mural restoration based on a modified generative adversarial network. 
Heritage Science 8, 1–14 (2020).
	28.	 Xu, Z., Zhang, C. & Wu, Y. Digital inpainting of mural images based on dc-cyclegan. Heritage Science 11, 169 (2023).
	29.	 Zhao, H., Yu, Y., Chen, A., Ni, X. & Wang, X. Ancient mural disease detection based on residual dual channel attention u-net. Journal 
of Computer-Aided Design & Computer Graphics (2024).
	30.	 Xu, Z. A comprehensive dataset for digital restoration of dunhuang murals, Dryad https://doi.org/10.5061/dryad.bnzs7h4jd (2024).
	31.	 Li, Z. et al. Lvit: language meets vision transformer in medical image segmentation. IEEE transactions on medical imaging (2023).
	32.	 Xu, Z. et al. Muraldiff: Diffusion for ancient murals restoration on large-scale pre-training. IEEE Transactions on Emerging Topics in 
Computational Intelligence (2024).
	33.	 Jiang, D., Li, P. & Xie, H. Research into digital oil painting restoration algorithm based on image acquisition technology. In 2022 
International Conference on 3D Immersion, Interaction and Multi-sensory Experiences (ICDIIME), 65–68 (IEEE, 2022).
	34.	 Lin, X., Wu, H., Yuan, Z., Zhang, H. & Chen, W. Computer-assisted analysis of ancient paintings and seals based on image extraction 
and restoration. J. Comput. Des. Comput. Graph. 30, 3720–3733 (2023).
	35.	 Li, X. et al. Misf: Multi-level interactive siamese filtering for high-fidelity image inpainting. In Proceedings of the IEEE/CVF 
conference on computer vision and pattern recognition, 1869–1878 (2022).
	36.	 Li, W. et al. Mat: Mask-aware transformer for large hole image inpainting. In Proceedings of the IEEE/CVF conference on computer 
vision and pattern recognition, 10758–10768 (2022).
	37.	 Nazeri, K., Ng, E., Joseph, T., Qureshi, F. & Ebrahimi, M. Edgeconnect: Structure guided image inpainting using edge prediction. In 
Proceedings of the IEEE/CVF international conference on computer vision workshops, 0–0 (2019).
Acknowledgements
Gratitude is extended to the National Natural Science Foundation of China for their generous support under 
Grants 52274160 and 51874300, which has been crucial in advancing this research. Additionally, the support 
from the 2023 Jiangsu Distinguished Professor Program has been invaluable, providing both motivation and 
resources essential for the development and success of the MuralDH dataset project. The contributions of these 
organizations are deeply appreciated.
Author contributions
Z.X. (Zishan Xu) conceived the study, designed the research framework, and was a major contributor in writing 
the manuscript. Y.Y. (Yuqing Yang) and Q.F. (Qianzhen Fang) conducted the dataset collection and preprocessing. 
T.X. (Tingting Xu) and J.L. (Jueting Liu) developed the blind restoration method framework and performed the 
experiments. W.C. (Wei Chen) analysed the results, provided critical feedback to shape the research and analysis, 
and contributed to the writing of the manuscript. Z.W. (Zehua Wang) assisted in data analysis and interpretation 
of the findings. W.C. is also the corresponding author, taking primary responsibility for communication with 
the journal during the manuscript submission, peer review, and publication process. All authors reviewed the 
manuscript and approved the final version to be published.

<!-- Page 17 -->
17
Scientific Data |          (2024) 11:955  | https://doi.org/10.1038/s41597-024-03785-0
www.nature.com/scientificdata
www.nature.com/scientificdata/
Competing interests
The authors declare no competing interests.
Additional information
Correspondence and requests for materials should be addressed to W.C.
Reprints and permissions information is available at www.nature.com/reprints.
Publisher’s note Springer Nature remains neutral with regard to jurisdictional claims in published maps and 
institutional affiliations.
Open Access This article is licensed under a Creative Commons Attribution-NonCommercial- 
NoDerivatives 4.0 International License, which permits any non-commercial use, sharing, distribu-
tion and reproduction in any medium or format, as long as you give appropriate credit to the original author(s) 
and the source, provide a link to the Creative Commons licence, and indicate if you modified the licensed mate-
rial. You do not have permission under this licence to share adapted material derived from this article or parts 
of it. The images or other third party material in this article are included in the article’s Creative Commons 
licence, unless indicated otherwise in a credit line to the material. If material is not included in the article’s Crea-
tive Commons licence and your intended use is not permitted by statutory regulation or exceeds the permitted 
use, you will need to obtain permission directly from the copyright holder. To view a copy of this licence, visit 
http://creativecommons.org/licenses/by-nc-nd/4.0/.
 
© The Author(s) 2024
