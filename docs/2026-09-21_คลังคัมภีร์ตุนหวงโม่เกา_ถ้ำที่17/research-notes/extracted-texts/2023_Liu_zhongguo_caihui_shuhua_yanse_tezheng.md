# 中国彩绘书画的颜色特征分析及虚拟修复

**Author:** Hanspub Research Group
**Year:** 2005
**Source:** https://pdf.hanspub.org/JISP20230100000_41923070.pdf

---


<!-- Page 1 -->

Journal of Image and Signal Processing 图像与信号处理, 2023, 12(1), 9-20 
Published Online January 2023 in Hans. https://www.hanspub.org/journal/jisp 
https://doi.org/10.12677/jisp.2023.121002  
文章引用: 刘思鲁, 刘振, 刘莉, 樊硕, 赵安然. 中国彩绘书画的颜色特征分析及虚拟修复[J]. 图像与信号处理, 2023, 
12(1): 9-20. DOI: 10.12677/jisp.2023.121002 
 
 
中国彩绘书画的颜色特征分析及虚拟修复 
刘思鲁，刘  振*，刘  莉，樊  硕，赵安然 
曲阜师范大学，山东 日照 
 
收稿日期：2022年12月6日；录用日期：2022年12月26日；发布日期：2023年1月10日 
 
 
 
摘  要 
敦煌壁画是我国灿烂辉煌的绘画史中最为浓墨重彩的一笔，经过千年的风雨洗礼，大部分壁画正在面临
褪色、变色等问题。敦煌壁画的保护性研究主要针对褪色和变色区域修复，提出一种基于L*a*b*颜色空
间实现颜色分割的虚拟修复方法。该方法首先分析不同时期壁画常用颜料及其主要特征，归纳总结不同
颜料褪色、变色的规律，得到壁画常用颜料的褪色、变色机理；其次，利用L*a*b*颜色空间实现褪变色
壁画的颜色分割，同时利用Photoshop软件在Lab模式下对壁画进行虚拟修复，通过改变L曲线、a曲线
和b曲线调整壁画色貌。本文的复原结果得到专家的认可，对壁画虚拟修复提供了一定的参考。 
 
关键词 
敦煌壁画，褪色，变色，图像分割，颜色复原 
 
 
Color Characteristics Analysis and  
Restoration for Chinese Painting  
and Calligraphy 
Silu Liu, Zhen Liu*, Li Liu, Shuo Fan, Anran Zhao 
Qufu Normal University, Rizhao Shandong 
 
Received: Dec. 6th, 2022; accepted: Dec. 26th, 2022; published: Jan. 10th, 2023 
 
 
 
Abstract 
The Dunhuang murals are the most colorful part of China’s brilliant painting history, after a thou-
sand years of exposure to the elements, most of them are facing problems such as fading and dis-
coloration. The conservation study of Dunhuang murals focuses on the restoration of faded and 
discolored areas, and proposes a virtual restoration method based on L*a*b* color space to achieve 
 
*通讯作者。 



<!-- Page 2 -->

刘思鲁 等 
 
 
DOI: 10.12677/jisp.2023.121002 
10 
图像与信号处理
 
color segmentation. The method first analyzes the common pigments used in murals of different 
periods and their main characteristics, summarizes the laws of fading and discoloration of differ-
ent pigments, and obtains the mechanism of fading and discoloration of common pigments used in 
murals; second, uses L*a*b* color space to realize the color segmentation of faded and discolored 
murals, and at the same time uses Photoshop software in Lab mode to virtually restore the murals 
by changing the L curve, a curve, and b curve to adjust the color appearance of the mural. The res-
toration results of this paper are recognized by experts and provide a certain reference for the 
virtual restoration of murals. 
 
Keywords 
Dunhuang Murals, Fading, Discoloration, Image Segmentation, Color Restoration 
 
 
Copyright © 2023 by author(s) and Hans Publishers Inc. 
This work is licensed under the Creative Commons Attribution International License (CC BY 4.0). 
http://creativecommons.org/licenses/by/4.0/ 
 
 
 
1. 引言 
传统彩绘文物的保护方法主要为物理修复与显现加固[1] [2]。物理修复通过调配近似颜料对彩绘文物
进行修补，但由于经验探索模式的局限性以及修复工作操作的不可逆性，此类保护及修复始终存在着一
定的风险，尤其对色彩的控制程度很难把握；显现加固通过对文物病害机理研究，采用保护性材料对某
类属性进行修复，但是需要考虑所用材料性能对病害治理的全面性要求，避免给修复文物引入其他潜在
危害。针对传统修复方式存在的问题，本文采用计算机的虚拟修复，以克服传统修复方法的不可逆性、
难以长久保存和图像复制信息失真等问题。 
在数字化保护与虚拟修复方面，欧美等发达国家相关研究学者从光谱数据获取、跨媒介复现、颜料
成份分析、色彩复原等领域、展开了大量先驱性研究，积累了丰富的研究成果，同时也形成了若干效果
良好的、成功实践案例。瑞士Gschwind [3]通过对胶片等成像材料加速老化实验，建立基于密度值的颜
色褪变模型，实现对老照片颜色的仿真复原；韩国庆北大学Kyung 等人[4]提出了基于Lcybcrg 色空间分
类的褪色图像颜色校正方法，在LcybCrg 对立色空间中对褪变色图像进行分解，并在RGB 色空间中对褪
变颜色进行校正；美国孟塞尔颜色科学实验室的Berns 等[5] [6]人，针对乔治修拉名作《大碗岛的星期天
下午》中锌黄颜料变色导致的整体光泽度变暗问题，在LAB 颜色空间中进行了数字修复，再现了该艺术
品的原始风貌；瑞典Ström M [7]通过油画与挂毡的颜色类比，利用计算机技术对挂毡褪变的颜色进行了
虚拟复原。与国外相比，我国文化遗产的数字化保护研究起步较晚，目前只有浙江大学、武汉大学、云
南师范大学以及杭州电子科技大学等几家研究机构从事相关研究。Soo-chang Pei [8]主要通过增强饱和度
实现褪色颜料的调整，适合针对全局颜色较为单一均匀的画像，对色彩丰富的图像效果较差；浙江大学
华忠、鲁东明、潘云鹤[9]利用色彩学相关知识、图像处理与人工智能等技术模拟了敦煌壁画初始到现状
的变色、褪色、脱落的渐变过程，为敦煌壁画的数字化修复提供了一个思路；Dongming Lu [10]通过分析
和建模壁画中的颜料成分，利用计算机对壁画色彩的褪变过程进行了仿真。 
在彩色图像分割方面，国内外学者开展大量的研究。乔建等[11]针对传统的彩色图像的分割方法，通
过变换阈值将目标信息准确的从图像中分离，但由于采用各分量高度线性相关的RGB 色彩空间，分割的
色彩效果并不理想。Zheng 等[12]利用K 均值算法在LAB 颜色空间中实现彩色图像的分割，消除了不理
想的分割色彩效果，但需要用户依据经验指定初始聚类数目，不具有普遍性。李翠等[13]在HLS 颜色空
Open Access



<!-- Page 3 -->

刘思鲁 等 
 
 
DOI: 10.12677/jisp.2023.121002 
11 
图像与信号处理
 
间中改进欧氏距离实现彩色图像分割，区别于传统的K 均值分割算法，得到较好的分割结果。庞晓敏等
[14]提出两个颜色空间相结合的分割方法，得到准确的分割结果，克服了单个算法的局限性，但该算法不
适用于噪声大和颜色不均匀的彩色图像。 
为了得到较为真实的数字化敦煌壁画，本文利用Photoshop 图像编辑软件和Matlab 仿真模拟软件相
结合的方式对褪变色的敦煌壁画进行虚拟复原。L*a*b*颜色空间是基于色彩进行图像分割的最优空间，
在Matlab 软件中采用L*a*b*颜色空间实现基于颜色的分割，提取多个具有相似颜色的区域，在Photoshop
软件中实现敦煌壁画的数字化虚拟复原。复原结果具有明显的敦煌特征，保持了壁画的颜色和纹理信息。
为敦煌壁画的复原提供一定的参考。 
2. 敦煌壁画颜料分析 
2.1. 不同时期的颜料分析 
敦煌莫高窟壁画已有上千年的历史，通过学者对不同时期洞窟壁画的颜料进行分析研究，总结得出
不同时期的敦煌壁画所使用的颜料具有类似的规律。依据壁画和颜料相似程度，本文将敦煌壁画分为早
期(十六国、北魏、西魏和北周)、中期(隋、初唐、盛唐、中唐、晚唐和五代)和晚期(西夏、宋代、元代和
清代) [15]。如表1 所示： 
 
Table 1. Analysis of pigment composition in different periods 
表1. 不同时期的颜料成分分析 
朝代 
颜色 
含量 
魏晋南北朝 
红色 
主要为红土和朱砂 
绿色 
大量为氯铜矿，少量是石绿 
蓝色 
大量为青金石，少量是石青 
白色 
主要为高岭土，其次是非颜料滑石，少量是方解石、云母和石膏 
棕黑色 
主要为PbO2，其次是PbO2 + Pb3O4 
隋朝 
红色 
主要为朱砂，其次是铅丹 
绿色 
主要为石绿，其次是氯铜矿 
蓝色 
主要为青金石和石青 
白色 
主要为方解石，其次是滑石、高岭土、云母、石膏，极少量是氯铅矿和硫酸铅矿 
棕黑色 
大量为PbO2，极少量是PbO2 + Pb3O4 
初唐 
盛唐 
中唐 
晚唐 
红色 
(初唐–晚唐)主要为：朱砂、少量铅丹和红土；朱砂、少量朱砂 + 铅丹；红土和
朱砂；红土 
绿色 
(初唐–晚唐)主要为：石绿，其次石绿 + 石青、石绿 + 氯铜矿；氯铜矿，其次
石绿 + 氯铜矿；氯铜矿，少量石绿 + 氯铜矿；石绿，其次为石绿 + 氯铜矿 
蓝色 
(初唐–晚唐)主要为：石青，其次石青 + 石绿、石青 + 氯铜矿；石青；石青，
少量青金石；青金石，其次为石青 + 氯铜矿 
白色 
(初唐–晚唐)主要为：方解石，其次是滑石、石英、云母；方解石，其次滑石、
云母；方解石 + 滑石，少量云母；滑石，其次为方解石、石膏、云母 
棕黑色 
(初唐–晚唐)主要为：PbO2，少量是PbO2 + 铅丹；PbO2；PbO2；PbO2，少量PbO2 
+ 铅丹 



<!-- Page 4 -->

刘思鲁 等 
 
 
DOI: 10.12677/jisp.2023.121002 
12 
图像与信号处理
 
Continued 
五代 
红色 
主要为红土 
绿色 
主要为石绿 
元朝 
红色 
主要为红土 
绿色 
主要为石绿和铜绿 
2.2. 褪变色颜料及其原因分析 
颜料的褪色与变色并不相同。褪色指构成颜料的细小微粒受时间、风雨等不可抗力的因素脱落或
吸附灰尘杂物，降低壁画的鲜艳程度，即颜料的饱和度降低。土红的彩度和明度的变化程度与土红颜
料中包含的水和胶结材料的多少有关。杂质含量越多的土红，明度和彩度降低严重，褪色结果越明显
[16]。 
朱砂有两种晶体结构，颜色分别为红色和黑色，稳定性处于土红和铅丹中间。对比受光照程度不
同的壁画可知，朱砂变色受湿度的影响较小，主要与光照有关。在长时间的光照后，部分朱砂结晶发
生变化生成黑色黑辰砂的结晶，明度发生改变。敦煌壁画中绿色和蓝色颜料与土红颜料褪色原因类似，
经历千百年的风吹日晒，蓝色和绿色颜料中掺杂的胶结材料老化变色，影响蓝色和绿色颜料自身的颜
色。 
变色指在某些因素的影响下(光照、湿度、碱性环境等)，壁画的颜料的色相发生改变。敦煌壁画中主
要是含铅颜料(铅白和铅丹)发生变色。铅丹是敦煌壁画红色系列中最易变色且变色最严重的一种颜料，大
部分含有铅丹的壁画都已经变成了棕褐色。仅有少量干燥区域的壁画中观察到未变色的铅丹。经学者实
验发现，铅丹颜料单独使用时更容易出现变色问题；但通过和土红、朱砂和雄黄等颜料的混合，其稳定
性较好，不易出现变色问题[16]。 
在光照、高湿和碱性环境下，铅丹经化学反应首先生成铅白，再由铅白生成棕褐色的二氧化铅。除
此之外，二氧化碳和过氧化氢对铅丹变色进程也有一定程度的影响。铅丹变色主要发生在洞窟建成初期，
窟内湿度较高，加上碱性地仗环境，大部分铅丹在较短时间内发生严重变色，渐渐地洞窟处于相对干燥
的状态，变色的铅丹趋于稳定。 
3. 基于L*a*b*颜色空间实现颜色分割 
基于L*a*b*颜色空间实现颜色分割步骤如下： 
1) 选择复原对象 
载入图像“盛唐217 窟准提观音胸相.jpg”，该图像的空间像素颜色分配及颜色分析如图1 所示： 
 
 



<!-- Page 5 -->

刘思鲁 等 
 
 
DOI: 10.12677/jisp.2023.121002 
13 
图像与信号处理
 
 
Figure 1. Quasi-mention Guanyin bust in Cave 217 of the Prosperous Tang Dynasty 
图1. 盛唐217 窟准提观音胸相 
 
2) 基于L*a*b*颜色空间计算每个区域的样本颜色 
观察图像可知共有五种主要颜色：棕黑色、桔红色、绿色、蓝色和白色。L*a*b*颜色空间可以量化
这些视觉差异。盛唐217 窟准提观音胸相的颜料信息与初始和现状的颜色信息如表2 所示： 
 
Table 2. Pigment analysis of the chest of quasi-mention Guanyin bust in Cave 217 of the Prosperous Tang Dynasty 
表2. 盛唐217 窟准提观音胸相的颜料分析 
颜料 
目前颜色 
初始颜色 
铅丹 + 白色颜料 
棕黑色 
肉色 
雄黄 
浅桔红色 
深桔红色 
氯铜矿 
浅绿色 
翠绿色 
石青 
浅蓝色 
深蓝色 
 
选择实验对象后，为每种颜色选择一个小样本区域，显示小样本区域查看是否合适。将RGB 图像转
换为L*a*b*图像。计算每个样本区域的基于a*b*空间的平均颜色，将平均颜色视为颜色标记，使用这些
颜色标记对每个像素进行分类。 
3) 基于颜色最近邻规则的图像分割 
已知每个颜色的小样本区域的一个a*值和一个b*值，即五个颜色的小样本区域的平均颜色。通过计
算图像中每个像素与每个颜色标记之间的欧几里德距离(也称欧氏距离)对该像素进行分类。最小距离表示
像素与颜色标记相似匹配。例如，如果某像素和棕黑色标记之间的距离最小，则该像素将被标记为棕黑
色像素。创建一个包含颜色标签的数组。 
4) 显示最近邻分类的结果 
标签矩阵包含褪变色的敦煌壁画图像中每个像素的颜色标签。使用标签矩阵按颜色分离原始褪变色
的敦煌壁画图像中的对象。分别显示五种分割颜色图像，分割结果如图2 所示。 
通过绘制分类为不同颜色的像素的a*和b*值，观察可知最近邻分类对不同颜色总体的区分情况。出
于显示目的，用颜色标签标注每个点。如图3 所示。 
4. 敦煌壁画褪变色区域的虚拟修复 
4.1. 褪变色图像的参考色 
通过制作色卡，得到铅丹加白、石青、雄黄和氯铜矿的参考色，利用X-rite 积分球式分光光度计(美
国X-rite 公司生产)测得参考色的Lab 值和XYZ 值，得到光谱反射率的数据，在Matlab 中绘制四种参考
色的光谱反射率曲线。 
四种参考色如下图4。 



<!-- Page 6 -->

刘思鲁 等 
 
 
DOI: 10.12677/jisp.2023.121002 
14 
图像与信号处理
 
 
铅丹 + 白              石青               氯铜矿               雄黄              白色选区 
Figure 2. Segmentation results 
图2. 分割结果 
 
 
Figure 3. Scatter plot of split pixels in “a*b*” space 
图3. 分割像素在“a*b*”空间中的散点图 
 
  
  
  
 
铅丹 + 白                石青                 氯铜矿                  雄黄 
Figure 4. Restoration of the reference color of the quasi-mention Guanyin bust in the 217 caves of the Prosperous Tang Dy-
nasty 
图4. 复原盛唐217 窟准提观音胸相的参考色 



<!-- Page 7 -->

刘思鲁 等 
 
 
DOI: 10.12677/jisp.2023.121002 
15 
图像与信号处理
 
四种参考色的Lab 值和XYZ 值见表3： 
 
Table 3. Lab and XYZ value of reference color 
表3. 参考色的Lab 和XYZ 值 
颜色 
L 
a 
b 
X 
Y 
Z 
铅丹 + 白 
90.6 
11.9 
4.3 
80.8 
77.6 
4.3 
石青 
34.9 
1.1 
−37.0 
8.3 
8.5 
20.1 
氯铜矿 
51.0 
−23.0 
3.0 
14.5 
19.2 
14.4 
雄黄 
67.3 
41.9 
60.3 
49.8 
37.1 
5.9 
 
四种参考色的光谱反射率曲线见图5： 
 
 
Figure 5. Spectral reflectance curves for reference colors 
图5. 参考色的光谱反射率曲线 
4.2. 褪变色图像的复原 
本文选择盛唐时期二一七窟准提观音胸相为实验对象。古时人们常用铅白和铅丹为白色和红色颜料，
大量用于人物面部、皮肤等处。由于铅白和铅丹不稳定，容易发生化学反应生成黑色物质二氧化铅。因



<!-- Page 8 -->

刘思鲁 等 
 
 
DOI: 10.12677/jisp.2023.121002 
16 
图像与信号处理
 
此壁画作品大多呈现黑色，失去往日色彩。观察图像可知，主要有五种颜色，红棕色、桔红色、绿色、
蓝色和白色。其中只有棕黑色的人物肤色处出现变色问题，其余颜色区域为不同程度的褪色。隋唐时期，
人物脸部、肤色部分为加入白色颜料的铅丹调制而成的肉色，现多变为棕黑色。盛唐时期，常用氯铜矿
为绿色颜料，石青为蓝色颜料。桔红色的雄黄常绘制于人物服饰。总结得出，人物面部、肤色区域所用
颜料为加入白色颜料的铅丹，服饰部分所用颜料为雄黄，绿色区域为氯铜矿绘制，蓝色区域为石青绘制。 
棕黑色区域的复原。通过颜色分割得到棕黑色的单一颜色选区，将该选区导入Photoshop，执行“图
像–模式–Lab 颜色”，将图像转换为Lab 颜色模式。在Lab 模式中，可以单独调整图像的颜色信息和
亮度信息。调整图像的亮度信息，只需要调整L 通道，不会破坏图像的颜色；调整颜色信息，分别对a、
b 通道进行调整，不会破坏图像的亮度。首先调整部分选区范围，执行“选择–色彩范围”，适当调整
参数，得到更为精细的选区图层，最后合并图层，提高棕黑色选区的准确性。选择合适的参考色作为对
照，要想实现棕黑色到肉色的变化，需要首先调整棕黑色的色相和饱和度，执行“图像–调整–色相/饱
和度命令”，分别调整红色、绿色、青色、蓝色和洋红色的色相、饱和度和明度滑块至合适位置，消除
斑驳的效果，得到较为均匀的肉色的人物脸部、肤色图像。调整过后，图像整体依旧呈现暗调，执行“图
像–调整–曲线”命令，调整棕黑色图像的L 值曲线，暗调加灰，亮调压低，减小整体的明暗差距。调
整前后对比见图6。 
 
 
Figure 6. The L curves of red lead + white and the comparison of red lead + white before and after adjustment 
图6. 铅丹 + 白的L 曲线图及调整前后对比 
 
石青、氯铜矿、雄黄区域的复原。通过图像分割得到蓝色、绿色和桔红区域的选区。执行“选择–
色彩范围”，得到更为精细的选区图层，合成图层以增加图片的准确性。由于准提观音胸相的蓝色、绿
色和桔红色处并未发生变色，色相保持不变，但是受光照、温度等外界影响，仍会出现一定程度的褪色。
以雄黄、石青的参考色卡和同窟中其他的绿色区域为依据，调整三个颜色的a、b 值，使得颜色变得鲜亮，
最后合并图层。 



<!-- Page 9 -->

刘思鲁 等 
 
 
DOI: 10.12677/jisp.2023.121002 
17 
图像与信号处理
 
蓝色区域的复原。以石青色卡为参考色，分别对L、a、b 曲线进行调整。针对a 曲线，拉高暗调，
压低亮调，中间调减少；针对b 曲线，暗调拉低，亮调拉高，使得中间调增加；针对明度曲线，拉高暗
调，降低亮调，中间调减少。图像的对比度增加，颜色由较暗的蓝色变为深蓝色。石青的L、a、b 曲线
调整和前后效果对比见图7。 
 
 
Figure 7. The L, a, b curves of the azurite and the comparison of azurite before and after adjustment 
图7. 石青的L、a、b 曲线图及调整前后对比 
 
绿色区域的复原。以氯铜矿为参考色，分别对L、a、b 曲线进行调整。针对a 曲线，压低暗调，调
高亮调，中间调增加；针对b 曲线，暗调拉高，亮调拉低，压缩中间调；针对明度曲线，拉高暗调，降
低亮调，中间调减少。图像的对比度增加，颜色由浅绿色变为翠绿色。针对调整过曲线的图像中混有的
杂色(红色)，执行颜色替换命令，得到色彩饱和、没有杂色的翠绿色图像。氯铜矿调整前后对比见图8。 
黄色区域的复原。以雄黄为参考色，分别对a、b 曲线进行调整。略微拉高a 曲线和b 曲线，得到较
为鲜亮的雄黄色。执行颜色替换命令，应用于调整过曲线的图像，得到近似于参考色的雄黄图像。雄黄
调整前后对比图9。 
 
 



<!-- Page 10 -->

刘思鲁 等 
 
 
DOI: 10.12677/jisp.2023.121002 
18 
图像与信号处理
 
 
Figure 8. The L, a, b curves of the atacamite and the comparison of atacamite before and after adjustment 
图8. 氯铜矿的L、a、b 曲线图及调整前后对比 
 
 
Figure 9. The a and b curves of realgar and the comparison of realgar before and after adjustment 
图9. 雄黄的a、b 曲线图及调整前后对比 
4.3. 褪变色图像的合成 
将变色、褪色的图像修复完成之后，部分细节信息有所丢失，参考盛唐时期同窟的其他壁画作品，应
用Photoshop 软件中的其他工具对合并之后的图像进行操作。关于图像斑驳地区，灵活运用Photoshop 软件
的仿制图章工具和修复画笔工具进行适当调整。调整过后的肤色图像颜色单一，没有立体感，缺少阴影、
高光、腮红等自然的效果加持，通过观察褪变色图片和同窟保存较好的壁画作品，在适当的地方添加腮红、
阴影和高光效果。采用钢笔工具绘制细节轮廓，适当调整画笔的大小、硬度和颜色参数，针对细节轮廓执
行描边路径命令，参考原图像，填充合适的颜色。复原前后的盛唐217 窟准提观音胸相如下图10。 
4.4. 敦煌壁画原貌调整 
敦煌壁画历经千年，不可避免地出现褪色和变色等问题，颜料由初始状态的鲜亮渐渐变得灰暗，由
一种色相转变为另一种色相。不同时期，画家使用的颜料和绘画技法也不尽相同。因此，想要复原受损



<!-- Page 11 -->

刘思鲁 等 
 
 
DOI: 10.12677/jisp.2023.121002 
19 
图像与信号处理
 
的壁画，需要建立在对颜料褪变色规律、不同时代衣冠制度、佛教文化和民俗风情分析了解的基础上，
以受损程度较轻的作品为参考，利用当代的研究成果、理论经验，综合实现敦煌壁画虚拟复原的结果。
在Photoshop 软件中基本完成壁画的虚拟复原之后，不能实现颜色从局部到整体的协调性和统一性，需
要对数字化壁画作品做颜色调整，获得整体自然协调的壁画图像。通过查阅文献资料以及翻看画家绘制
的临摹图，调整壁画的色相、明度、饱和度数值，使得壁画作品具有绘制之初的鲜亮色彩。色调调整前
后对比见图11。 
 
    
 
原图                      复原图 
Figure 10. Comparison before and after restoration of the quasi-mention Guanyin bust in Cave 217 of the Prosperous Tang 
Dynasty 
图10. 盛唐217 窟准提观音胸相复原前后对比 
 
    
 
复原图调整后                复原图 
Figure 11. Comparison before and after adjusting hues of the quasi-mention Guanyin bust in Cave 217 of the Prosperous 
Tang Dynasty 
图11. 盛唐217 窟准提观音胸相色调调整前后对比 
 
目前针对文化遗产复原的评判依据尚没有统一的评价标准，对复原结果好坏的判断，主要依靠经验
丰富的专家进行主观评价。针对本文的壁画复原图，邀请专家进行专业角度的评判。评价结果表明，本
文复原后的数字化壁画图像具有非常明显的敦煌壁画特征，保留了原始壁画的构图、色彩与纹理规律。
为今后敦煌壁画的复原研究提供参考。 



<!-- Page 12 -->

刘思鲁 等 
 
 
DOI: 10.12677/jisp.2023.121002 
20 
图像与信号处理
 
5. 总结 
本文通过分析不同历史时期不同颜料的褪变色规律，总结得出壁画常用矿物颜料的褪色和变色原因。
针对具有褪变色问题的壁画，首先，通过参考色卡或查看同时代其他保存较为完好的壁画作品，得到壁
画的参考色；其次，针对选择的褪变色图像，在Matlab 软件中实现基于颜色的图像分割，得到不同颜色
的选区图层，在Photoshop 软件中分别调整不同颜色的色相/饱和度和Lab 曲线，消除斑驳的颜色效果，
添加腮红、高光、阴影至选区，得到自然的人物图像；最后合成图层，综合运用Photoshop 软件中的修
复工具，对图像的细节丢失处进行修补，找到合适的像素点近似替代破损区域。采用计算机软件实现敦
煌壁画的虚拟复原，解决了人工修复带来的难度大、不易保存和不可逆性等问题。 
基金项目 
国家自然科学基金(61405104)，山东省自然科学基金(ZR2020MF125)。 
参考文献 
[1] 
白天佑. 莫高窟壁画数字化重要性刍议[J]. 美术教育研究, 2011(12): 18-19. 
[2] 
潘云鹤, 鲁东明. 古代敦煌壁画的数字化保护与修复[J]. 系统仿真学报, 2003(3): 310-314. 
[3] 
Rudolf, G. and Lukas, R. (1995) Electronic Imaging: A Tool for the Reconstruction of Faded Color Photographs and 
Color Movies. Univ. of Basel, Basel, Rochester Institute of Technology, Rochester, 2421. 
[4] 
Kyung, W.J., Kim, D.C., Ha, H.G., et al. (2012) Color Enhancement for Faded Images Based on Multi-Scale Gray 
World Algorithm. 2012 IEEE 16th International Symposium on Consumer Electronics, Harrisburg, 4-6 June 2012, 1-4.  
https://doi.org/10.1109/ISCE.2012.6241722 
[5] 
Berns, R.S., Byrns, S., Casadio, F., et al. (2006) Rejuvenating the Color Palette of Georges Seurat’s a Sunday on La 
Grande Jatte-1884: A Simulation. Color Research and Application, 31, 278-293. https://doi.org/10.1002/col.20223 
[6] 
Tominaga, S. and Tanaka, N. (2008) Spectral Image Acquisition, Analysis, and Rendering for Art Paintings. Journal of 
Electronic Imaging, 17, Article ID: 043022. https://doi.org/10.1117/1.3036180 
[7] 
Marie, S. and Eija, J. (2012) Mapping Colors from Paintings to Tapestries: Rejuvenating the Faded Colors in Tape-
stries Based on Colors in Reference Paintings. Proceedings of the SPIE, 8291, 82911F. 
[8] 
Soo-Chang, P. and Yi-Mei C. (2006) Background Adjustment and Saturation Enhancement in Ancient Chinese Paint-
ings. IEEE Transactions on Image Processing, 15, 3230-3234. https://doi.org/10.1109/TIP.2006.877478 
[9] 
华忠, 鲁东明, 潘云鹤. 敦煌壁画虚拟复原及演变模拟模型研究[J]. 中国图象图形学报, 2002(2): 79-84+108. 
[10] 
Shi, X.F. and Lu, D.M. (2005) Colorimetric and Chemical Modeling Based Aging Simulation of Dunhuang Murals. 
The Fifth International Conference on Computer and Information Technology (CIT’05), Shanghai, 21-23 September 
2005, 570-574. https://doi.org/10.1109/CIT.2005.85 
[11] 
乔建, 赵洁, 乔宝民, 等. 基于彩色阈值变换的香蕉彩色图像分割[J]. 电脑与信息技术, 2011, 19(1): 3-5. 
[12] 
Zheng, X., Lei, Q., Yao, R., et al. (2018) Image Segmentation Based on Adaptive K-Means Algorithm. EURASIP 
Journal on Image and Video Processing, 2018, Article No. 68. https://doi.org/10.1186/s13640-018-0309-3 
[13] 
李翠, 冯冬青. 基于改进K-均值聚类的图像分割算法研究[J]. 郑州大学学报(理学版), 2011, 43(1): 109-113. 
[14] 
庞晓敏, 闵子建, 阚江明. 基于HSI 和LAB 颜色空间的彩色图像分割[J]. 广西大学学报(自然科学版), 2011, 
36(6): 976-980. 
[15] 
李最雄. 敦煌莫高窟唐代绘画颜料分析研究[J]. 敦煌研究, 2002(4): 11-18+110. 
[16] 
李最雄. 莫高窟壁画中的红色颜料及其变色机理探讨[J]. 敦煌研究, 1992(3): 41-54+128-129+135-137. 

