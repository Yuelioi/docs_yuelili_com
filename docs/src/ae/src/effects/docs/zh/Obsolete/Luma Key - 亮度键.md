---
title: Luma Key - 亮度键
order: 7
category:
  - AE
---

## 简述

亮度键效果可抠出图层中具有指定 **明亮度或亮度** 的所有区域。图层的品质设置不会影响亮度键效果。

如果要在其中创建遮罩的对象的明亮度值与其背景显著不同，则使用此效果。例如，如果要在白色背景上为音符创建遮罩，则可抠出较亮的值；黑暗的音符将变为唯一不透明的区域。

此效果适用于 8-bpc 和 16-bpc 颜色。

## 效果展示

## 教程

## 中英日对照

![](https://mir.yuelili.com/wp-content/uploads/user/AE/effects/AE-Effects-Obsolete-Luma_Key.png)![](https://mir.yuelili.com/wp-content/uploads/user/AE/effects/AE-Effects-Obsolete-Luma_Key_cn.png)

| Luma Key     | 亮度键   | ルミナンスキー |                    |                    |     |
| ------------ | -------- | -------------- | ------------------ | ------------------ | --- |
| Key Type     | 键控类型 | キーの種類     | Key Out Brighter   | 抠出较亮区城       |     |
|              |          |                | Key Out Darker     | 抠出较暗区域       |     |
|              |          |                | Key Out Similar    | 抠出亮度相似的区域 |     |
|              |          |                | Key Out Dissimilar | 抠出亮度不同的区域 |     |
| Threshold    | 阈值     | しきい値       |                    |                    |     |
| Tolerance    | 容差     | 許容量         |                    |                    |     |
| Edoe Thin    | 薄化边缘 | エッジを細く   |                    |                    |     |
| Edge Feather | 羽化边缘 | エッジのぼかし |                    |                    |     |

## 参数详解

键控类型：指定要抠出的范围。

阈值：设置希望遮罩基于的明亮度值。

容差：指定要抠出的值的范围。值越低，要抠出的阈值附近的值范围越小。值越高，要抠出的值范围越大。

薄化边缘：调整抠像区域边界的宽度。正值用于使蒙版增大，从而增大透明区域。负值用于缩小蒙版。

羽化边缘：指定边缘的柔和度。值越高，边缘越柔和，但渲染时间越长。

## 案例
