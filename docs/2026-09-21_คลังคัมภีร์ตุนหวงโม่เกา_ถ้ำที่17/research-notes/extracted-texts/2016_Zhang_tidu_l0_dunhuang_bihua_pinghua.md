# 基于梯度L0范数的敦煌壁画图像平滑

**Author:** Hanspub Research Group
**Year:** 2005
**Source:** https://pdf.hanspub.org/CSA20160700000_96622735.pdf

---


<!-- Page 1 -->

Computer Science and Application 计算机科学与应用, 2016, 6(7), 393-398 
Published Online July 2016 in Hans. http://www.hanspub.org/journal/csa 
http://dx.doi.org/10.12677/csa.2016.67048   
文章引用: 张弘强, 王春喜, 皮炳坤, 马聪, 王书文. 基于梯度L0 范数的敦煌壁画图像平滑[J]. 计算机科学与应用, 
2016, 6(7): 393-398. http://dx.doi.org/10.12677/csa.2016.67048  
 
 
Dunhuang Murals’ Image Smoothing 
Processing Research Based on  
Gradient L0 Norm 
Hongqiang Zhang1, Chunxi Wang2, Bingkun Pi1, Cong Ma1, Shuwen Wang1* 
1Northwest University for Nationalities, Lanzhou Gansu 
2Zhengzhou Meteorological Bureau, Zhengzhou Henan 
  
 
Received: Jul. 16th, 2016; accepted: Jul. 24th, 2016; published: Jul. 27th, 2016 
 
Copyright © 2016 by authors and Hans Publishers Inc. 
This work is licensed under the Creative Commons Attribution International License (CC BY). 
http://creativecommons.org/licenses/by/4.0/ 
 
 
 
 
 
Abstract 
This paper aims to achieve a new way to display Dunhuang murals, and by using gradient L0 norm 
smooth Dunhuang murals, researches the best iteration times for Dunhuang murals to obtain the 
best smoothing results. By this way in the new show works, we can ignore the damaged part and 
clear its characters and scene at the same time. And we will fully demonstrate its significance for 
others. 
 
Keywords 
Dunhuang Murals, Image Smoothing, Gradient L0 Norm 
 
 
基于梯度L0范数的敦煌壁画图像平滑 
张弘强1，王春喜2，皮炳坤1，马  聪1，王书文1* 
1西北民族大学，甘肃 兰州 
2郑州市气象局，河南 郑州 
  
 
收稿日期：2016年7月16日；录用日期：2016年7月24日；发布日期：2016年7月27日 
 
 
*通讯作者。 



<!-- Page 2 -->

张弘强 等 
 
 
394 
 
 
摘  要 
本论文旨在实现一种新的敦煌壁画展示方式，通过使用梯度L0范数平滑敦煌壁画，研究最适合敦煌壁画
的平滑迭代次数，获得平滑后的更加美观的敦煌壁画展示作品。通过此种方式在新的展示作品中在忽略
损坏的部分的同时又能够明确其人物和情景，将壁画所诠释的意义充分展现出来。 
 
关键词 
敦煌壁画，图像平滑，梯度L0范数 
 
 
1. 引言 
敦煌壁画由于受所处环境诸因素的影响，以及壁画的制作材料及结构，壁画所依附岩体的矿物组成
等因素的影响，使壁画产生了各种类型的病害。最典型的病害如壁画的颜料的变色、褪色；壁画颜料层
的龟裂、起甲；壁画地仗层酥碱、粉化；地仗层空鼓、脱落；颜料层霉变、污染以及过去的香火和洞窟
人居住造成的对壁画的烟熏等。其中对壁画损坏最严重、最难治理的损害包括壁画颜料的变色、褪色和
壁画地仗酥碱、起甲剥离等[1]。 
大多数人在欣赏敦煌壁画时只是停留在看的阶段，并不理解其中的情节也不理解其意义。碰到破损
严重，变色或者褪色严重等损坏的作品更会失去兴趣。本论文旨在实现一种新的敦煌壁画展示方式，使
用梯度L0 范数[2]平滑敦煌壁画，获得平滑后的更加美观的敦煌壁画展示作品。通过此种方式既可以忽
略损坏的部分又能够明确其人物和情景，将壁画所诠释的意义充分展现出来。 
图像平滑是计算摄影学基础的重要的工具，它的主要作用是拂去不重要的细节，保留较大的图像边
缘，主要应用于边缘检测，JPEG 压缩图像人工伪迹去除，非真实绘制等领域。 
图像平滑大体上可以分为两类[3]：基于局部和基于全局方法，基于局部的方法像有名双边滤波，各
向异性扩散，此方法是将图像分成一些局部块进行处理；全局方法比如全变分(Total Variation)和最小二
乘滤波(Weighted Least Square)，此方法可以同时处理整幅图像，达到全局最优的目的。 
以往的方法，拂去图像中不需要的图像细节部分也会对图像中大的边缘进行惩罚，这样也会导致图
像中大的边缘减弱或丢失，因此徐立等人提出使用图像L0 范数平滑，该滤波器是一种基于稀疏策略的全
局平滑滤波器。使用图像梯度L0 范数平滑图像，具有以下优点： 
(1) 通过去除小的非零梯度，抚平不重要的细节信息； 
(2) 增强图像显著性边缘。 
为了将敦煌壁画所诠释的意义充分展现出来。本文决定通过使用梯度L0 范数平滑敦煌壁画，研究最
适合敦煌壁画的平滑迭代次数，获得平滑后的更加美观的敦煌壁画展示作品。实验证明通过此种方式可
以获得新的敦煌壁画的展示作品，在忽略损坏的部分的同时又能够明确其人物和情景。本文提出的方法
在获得具有平滑效果的敦煌壁画的展示作品的同时仍然能够保留敦煌壁画的完整性和艺术性[4]。 
2. L0 平滑 
L0 平滑是香港中文大学徐立等人提出的一种保留边界的图像平滑方法[5] [6]，是一种基于图像梯度
零范数的全局平滑方法。其主要思想是：通过是的图像梯度的零范数更小来实现图像的平滑处理，目标
函数如公式(1)： 
(
)
( )
{
}
mins
S
I
C S
λ
−
+
⋅
∑
                                   (1) 



<!-- Page 3 -->

张弘强 等 
 
 
395 
其中，第一项是保真项，第二项是正则项，λ 控制平滑程度，I 是输入图像，S 是平滑后的图像，C(S)是
平滑后图像的零范数。 
( )
{
}
#
0
x
y
C S
S
S
=
∂
+ ∂
≠
                                    (2) 
L0 范数[7] [8]可以理解为向量中非零元素的个数。图像梯度L0 范数可以如公式(3)表示： 
( )
{
}
1
: #
0
p
p
C f
p f
f −
=
−
≠
                                    (3) 
这里p 和p + 1 是图像中相邻元素，
1
p
p
f
f
−
−
就是图像梯度，也即图像的前向差分，#{}表示计数，
输出图像中满足
1
0
p
p
f
f
−
−
≠
的个数，即
( )
C f
是图像梯度的L0 范数。这样表示有一个优点，就是c(f)
是非零梯度个数的函数，与图像的梯度本身无关，也就是： 
{
}
(
)
{
}
1
1
#
0
#
0
p
p
p
p
p f
f
p
f
f
α
−
−
−
≠
=
−
≠
                              (4) 
3. 敦煌壁画的平滑处理及结果分析 
从图1(a)~(d)的对比可以发现随着L0 平滑处理的迭代次数的增多，图像的颗粒感、粗糙感明显下降；
图像更加饱满，欣赏时的视觉体验也越来越好；图像细节保留较为完整。但是在20 次迭代处理时存在明
显的失真现象，如图1(d)中的河流失去了渐变色变成了一片蓝色。 
 
 
(a)                                       (b) 
 
(c)                                       (d) 
Figure 1. The Dunhuang murals’ image smoothing results 1. (a) is the original, (b) is the smooth results 
when the number of iterations is 5 times, (c) is the smooth results when the number of iterations is10 times, 
(d) is the smooth results when the number of iterations is 20 times 
图1. 敦煌壁画平滑结果1。(a)是原图，(b)是迭代次数为5 的平滑结果，(c)是迭代次数为10 的平滑结
果，(d)是迭代次数为20 的平滑结果 



<!-- Page 4 -->

张弘强 等 
 
 
396 
从图2(a)~(d)的对比可以发现随着L0 平滑处理的迭代次数的增多，图像中的飞天越来越突出，其中
在迭代次数为10 时图像的视觉效果最佳。但是在20 次迭代处理时存在明显的失真现象，如图2(d)中的
云彩的一部分被平滑处理掉了。 
从图3(a)~(d)的对比可以发现随着L0 平滑处理的迭代次数的增多，图像中的人物剧情得到了凸显，
其中图像的剧情成了欣赏关注的重点，这使得笔画的教育意义得到了充分体现。但是在20 次迭代处理时
存在明显的失真现象，如图3(d)中的彩带、山岳等。 
当然也存在现有L0 平滑不能进行平滑处理的敦煌壁画，如图4 原图中黑色飞天使用线条勾勒出人物 
 
 
(a)                                       (b) 
 
(c)                                       (d) 
Figure 2. The Dunhuang murals’ image smoothing results 2. (a) is the original, (b) is the smooth results 
when the number of iterations is 5 times, (c) is the smooth results when the number of iterations is 10 times, 
(d) is the smooth results when the number of iterations is 20 times 
图2. 敦煌壁画平滑结果2。(a)是原图，(b)是迭代次数为5 的平滑结果，(c)是迭代次数为10 的平滑结
果，(d)是迭代次数为20 的平滑结果 
 
 
(a)                                       (b) 



<!-- Page 5 -->

张弘强 等 
 
 
397 
 
(c)                                       (d) 
Figure 3. The Dunhuang murals’ image smoothing results 3. (a) is the original, (b) is the smooth results 
when the number of iterations is 5 times, (c) is the smooth results when the number of iterations is 10 times, 
(d) is the smooth results when the number of iterations is 20 times 
图3. 敦煌壁画平滑结果3。(a)是原图，(b)是迭代次数为5 的平滑结果，(c)是迭代次数为10 的平滑结
果，(d)是迭代次数为20 的平滑结果 
 
 
(a)                                       (b) 
Figure 4. The Dunhuang murals’ image smoothing results 4. (a) is the original, (b) is the smooth results 
when the number of iterations is 5 times 
图4. 敦煌壁画平滑结果4。(a)是原图，(b)是迭代次数为5 的平滑结果 
 
 
(a)                                   (b)                                    (c) 
Figure 5. The smoothing results of the traditional algorithm 
图5. 传统算法的平滑结果 
 
的脸和手臂等形象，但是经过简单的平滑处理如图4(b)所示，勾勒人物的线条已经被平滑处理掉了。虽
然画面效果得到了改善但是丧失了更加重要的细节信息。 
图5(a)~(c)分别是高斯平滑，中值滤波法和邻域平均法的平滑结果。其中高斯平滑的处理结果图5(a)
非常模糊，失真明显。中值滤波法的平滑结果图5(b)在色彩方面得到了增强，但是平滑效果并不理想，
图像还是纹理鲜明，十分粗糙。邻域平均法的平滑结果图5(c)平滑效果明显，画面粗糙感明显降低，但
是于L0 的平滑相比较图像仍显模糊，如图6 所示于图6(b)相比图6(a)中飞天的脸非常模糊。 



<!-- Page 6 -->

张弘强 等 
 
 
398 
 
(a)                                       (b) 
Figure 6. Comparison of two methods for smoothing results. (a) is the smoothing result of the neighborhood 
averaging method. (b) is the smoothing result of the L0 smoothing 
图6. 两种方法平滑结果的比较。(a)是邻域平均法的平滑结果，(b)L0 的平滑结果 
 
实验证明，L0 平滑是一种非常适合敦煌壁画的平滑方法，L0 平滑可以在平滑图像的同时保留图像
边界，可以在忽略壁画损坏的部分的同时够明确其人物和情景，将壁画所诠释的意义充分展现出来。 
4. 结语 
经过本文对基于梯度L0 范数的敦煌壁画平滑处理的研究，本文发现并没有能够普遍适用的敦煌壁画
平滑处理技术。不同壁画破损程度的不同，绘制方式的不同造成了壁画平滑方式的不同。实验证明L0
平滑技术是一种非常适合敦煌壁画的图像平滑技术可以在忽略壁画上的一些不必要的细节的同时保留壁
画的轮廓，获得更好的视觉效果。但是这种技术存在两个缺点。缺点一，高迭代次数下的失真问题。缺
点二，并不能处理特殊的壁画，如图4。如何改进L0 平滑处理技术使其更加适用于壁画平滑处理将是我
们研究的方向。 
基金项目 
本课题得到国家自然科学基金资助，项目号：61261042；本课题得到西北民族大学物联网关键技术
研究科研创新团队项目资助。 
参考文献 (References) 
[1] 
王书文, 骆岩红, 黄伟, 杨筱平, 贾建芳. 敦煌壁画数字图像修复中遇到的挑战[J]. 西北民族大学学报(自然科
学版), 2009, 30(2): 44. 
[2] 
Xu, L., Lu, C.W., Xu, Y., et al. (2011) Image Smoothing via L0 Gradient Minimization. ACM Transactions on Graph-
ics (TOG), 30, 174. http://dx.doi.org/10.1145/2070781.2024208  
[3] 
Lu, C.W., Xu, L. and Jia, J.Y. (2012) Combine Sketch and Tone for Pencil Drawing Production. Proceedings of the 
Symposium on Non-Photorealistic Animation and Rending, Annecy, 65-73. 
[4] 
Kang, H., Lee, S. and Chui, C.K. (2007) Coherent Line Drawing. Proceedings of the 5th International Symposium on 
Non-Photorealistic Animation and Rendering, San Diego, 43-50. http://dx.doi.org/10.1145/1274871.1274878  
[5] 
李效珍, 钱卫东, 叶建亚, 李婷, 赵振兵. 基于Lo 平滑和随机游走的变电设备红外图像分割[J]. 激光与红外, 
2014, 44(7): 810-814. 
[6] 
刘磊, 陈越, 盛蕴, 张桂戌. 基于自适应噪声模型和线积分卷积的铅笔画模拟[J]. 图学学报, 2015, 36(1): 78. 
[7] 
曾军英, 甘俊英, 翟懿奎. Gabor 字典及L0 范数快速稀疏表示的人脸识别算法[J]. 信号处理, 2013, 29(2): 256- 
161. 
[8] 
王峰, 向新, 易克初, 熊磊. L0 范数平滑逼近的稳健求解算法[J]. 电子与信息学报, 2015, 37(10): 2377-2382. 



<!-- Page 7 -->

 
 
 
期刊投稿者将享受如下服务： 
1.  投稿前咨询服务 (QQ、微信、邮箱皆可) 
2.  为您匹配最合适的期刊 
3.  24 小时以内解答您的所有疑问 
4.  友好的在线投稿界面 
5.  专业的同行评审 
6.  知网检索 
7.  全网络覆盖式推广您的研究 
投稿请点击：http://www.hanspub.org/Submission.aspx 

