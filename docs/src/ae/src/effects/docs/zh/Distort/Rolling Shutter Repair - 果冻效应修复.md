---
title: Rolling Shutter Repair - 果冻效应修复
order: 30
category:
  - AE
---

## 简述

修复主体或相机高速移动时发生的失真

单镜头反光相机等机械快门，汽车等快速移动的物体可能会出现对角失真。该现象被称为卷帘快门现象（果冻效应）。

## 效果展示

## 教程

## 中英日对照

![](https://mir.yuelili.com/wp-content/uploads/user/AE/effects/AE-Effects-Distort-Rolling_Shutter_Repair.png)![](https://mir.yuelili.com/wp-content/uploads/user/AE/effects/AE-Effects-Distort-Rolling_Shutter_Repair_cn.png)

| Rolling Shutter Repair | 果冻效应修复 | ローリングシャッターの修復 |                    |              |                          |              |          |                    |
| ---------------------- | ------------ | -------------------------- | ------------------ | ------------ | ------------------------ | ------------ | -------- | ------------------ |
| Rolling Shutter Rate   | 果冻效应率   | ローリングシャッターレート |                    |              |                          |              |          |
| Scan direction         | 扫描方向     | スキャン方向               | Top-> Bottom       | 顶层->底部   |                          |              |          |                    |
|                        |              |                            | Bottom-> Iop       | 底部> 顶层-  |                          |              |          |                    |
|                        |              |                            | Left-> Right       | 左边->右边   |                          |              |          |                    |
|                        |              |                            | Riaht -> Left      | 右边->左边   |                          |              |          |                    |
| Advanced               | 高级         | 高度                       |                    |              |                          |              |          |                    |
|                        |              |                            |                    |              |                          |              |          |                    |
|                        |              |                            | Method             | 方法         | 補間方法                 | Warp         | 变形     |                    |
|                        |              |                            |                    |              |                          | Pixel motion | 像素运动 | ピクセルモーション |
|                        |              |                            | Detailed Analysis  | 详细分析     | 詳細分析                 |              |          |                    |
|                        |              |                            | Pixel Mobon Detail | 像素运动细节 | ピクセルモーションの詳細 |              |          |

## 参数详解

### 果冻效应率

调整此值，直到扭曲的线变为垂直线。指定作为扫描时间的帧速率的百分比。DSLR 似乎介于 50% 至 70% 之间，iPhone 则接近 100%。

![](https://cdn.yuelili.com/20211225193432.png)

### **扫描方向**

指定执行果冻效应扫描的方向。大多数摄像机沿传感器从上到下扫描，当然，您可以上下颠倒后再架置摄像机，对于智能手机，还可以完全旋转摄像机。

### **高级部分**

**方法** ：是否将使用光流分析和像素运动再定时来生成无变形的帧（像素运动），或者是否应当使用某种稀疏点跟踪和变形方法（变形）。

**详细分析** ：在变形中执行详细的点分析。使用“变形”方法时可用。

**像素运动细节** ：指定光流矢量场计算的详细程度。使用“像素运动”方法时可用。

## 案例
