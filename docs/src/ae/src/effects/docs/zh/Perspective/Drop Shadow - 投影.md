---
title: Drop Shadow - 投影
order: 10
category:
  - AE
---

## 简述

可在图层后面添加阴影。Alpha 信息确定阴影的形状。

**提示**

与径向阴影不同，它不可能调整产生光线的位置

可在图层边界外部创建阴影。图层的品质设置会影响阴影的子像素定位，以及阴影柔和边缘的平滑度。

对于某些用途，“投影”图层样式比投影效果更好。

此效果在 32 位颜色下有效，支持 GPU 加速。

::: danger
要将投影应用到旋转的图层，请使用 **变换效果**

旋转图层，然后应用投影效果。也可以使用嵌套、预合成或调整图层实现此效果。如果不使用这些方法之一，则阴影会与图层一起旋转。
:::

## 效果展示

## 教程

<iframe src="https://player.bilibili.com/player.html?bvid=BV1e34y1X7Vj&page=47&high_quality=1" width="100%" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## 中英日对照

## 参数详解

### 方向

决定阴影的方向。默认是 135°。

### 距离

设置阴影和物体之间的距离

![](https://cdn.yuelili.com/20211227113921.png)

### 柔和度

值越高，越柔和，阴影越模糊。

![](https://cdn.yuelili.com/20211227114004.png)

### 小技巧：增强投影真实感

通过多次使用投影效果，逐层递进。视频 0:58~
