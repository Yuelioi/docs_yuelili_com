---
title: Audio Waveform - 音频波形
order: 5
category:
  - AE
---

## 简述

![](https://cdn.yuelili.com/20211227145640.png)

将音频波形效果应用到视频图层，以显示包含音频（和可选视频）的图层的音频 **波形** 。您可以多种不同方式显示音频波形，包括沿开放或闭合的蒙版路径。

音频波形使用不带时间重新映射、效果、伸展或色阶的音频源素材。要显示具有此类效果的频谱，请在应用音频波形效果之前预合成音频层。

此效果适用于 8-bpc、16-bpc 和 32-bpc 颜色。

## 效果展示

![](https://cdn.yuelili.com/20211227144517.png)

## 教程

<iframe src="https://player.bilibili.com/player.html?bvid=BV1e34y1X7Vj&page=99&high_quality=1" width="100%" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## 中英日对照

![](https://mir.yuelili.com/wp-content/uploads/user/AE/effects/AE-Effects-Generate-Audio_Waveform.png)![](https://mir.yuelili.com/wp-content/uploads/user/AE/effects/AE-Effects-Generate-Audio_Waveform_cn.png)

## 参数详解

### 音频层

要读取的音频图层。

### 起始点、结束点

“路径”设置为“无”时，波形开始和结束的位置。

### 路径

也可以设置一个蒙版作为音频路径。。比如画个方形蒙版

![](https://cdn.yuelili.com/20211227144504.png)

### 显示的范例

显示在波形中的样本的数量。

| 50                                              | 200 | 600 |
| ----------------------------------------------- | --- | --- |
| ![](https://cdn.yuelili.com/20211227144620.png) |
| ![](https://cdn.yuelili.com/20211227144641.png) |

![](https://cdn.yuelili.com/20211227144650.png)

### 最大高度

显示的频率的最大高度，以像素为单位。

### 音频持续时间

用于计算波形的音频的持续时间，以毫秒为单位。

### 音频偏移

用于检索音频的时间偏移量，以毫秒为单位。

### 粗细

波形的粗细。

### 柔和度

波形的羽化或模糊程度。

### 内部颜色、外部颜色

波形的内部和外部颜色。

### 波形选项

“单声道”用于合并音频图层的左右声道。非立体音频图层以“单声道”形式播放。

### 显示选项

数字将每个样本显示为连接最小和最大源样本的单个垂直线。此选项用于模拟数字设备上使用的显示。

模拟谱线将每个样本显示为连接最小或最大音频源样本中的上一个和下一个样本的谱线。此选项用于模拟在模拟示波器的显示中看到的回描。

模拟频点将每个样本显示为表示最小或最大音频源样本的频点。

| 数字                                            | 谱线 | 频点 |
| ----------------------------------------------- | ---- | ---- |
| ![](https://cdn.yuelili.com/20211227145056.png) |
| ![](https://cdn.yuelili.com/20211227145048.png) |

![](https://cdn.yuelili.com/20211227145029.png)

### 在原始图像上合成

使用“添加”混合模式合成音频波形和原始图层。取消选择此选项时，仅音频波形可见。

## 案例：线点结合

用两个一样参数的音频波形，然后第二个改成点（视频 6:40~）

![](https://cdn.yuelili.com/20211227144257.png)
