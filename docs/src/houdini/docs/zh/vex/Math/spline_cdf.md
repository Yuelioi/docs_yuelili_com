---
title: spline_cdf
order: 70
category:
  - vex
---

在这一页

- [概览](#overview)
- [使用方法](#使用方法)

|

自 18.5 以来

## 概述

[¶](#overview)

[create_cdf](create_cdf.html) () ("从概率密度函数(PDF)值阵列中创建累积分布函数(CDF)。")函数从样本值中创建 CDF，而这个函数通过随机抽样创建 CDF，曲线由 "值 "和相应 "位置 "列表定义（类似于 Ramp 参数）。

参见 [create_cdf](create_cdf.html) () ("从概率密度函数（PDF）值的数组中创建累积分布函数（CDF）。") 函数文档中使用 CDF 的示例代码。

## 使用方法

[¶](#usage)

`float [] spline\_cdf(string bases[], float values[], float positions[], ...)`

接收一个基数数组，一个键值数组，一个相应的键位数组，以及一个 int，res（分辨率），对应于要建立 CDF 的样本数。该函数根据分辨率对花键进行采样，然后从所述采样创建并返回一个 CDF。注意，只支持单维花键。

## Arguments

`bases`

一个字符串数组，描述如何解释相应的 "值"：每个字符串可以是 "常数"、"线性"、"立方"（或 "catmullrom"、"cspline"）、"linearsolve"（或 "solvelinear"）、或 "monotonecubic"。参见[spline](spline.html) () ("沿多线或花键曲线采样。")函数文档以了解这些选项如何控制数值的解释。

"res"。

`=128`

在构建 CDF 时，一些样条可能需要更多的样本来准确表示样条。`res`（分辨率）控制函数在构建 CDF 时采取多少个样本（因此也控制了 CDF 的大小）。默认是 128。

## Returns

一个代表 CDF 的浮动数组（就像[create_cdf](create_cdf.html)（"从概率密度函数（PDF）值的数组中创建累积分布函数（CDF）"）所返回的数组）。

## See also

- [spline](spline.html)
- [create_cdf](create_cdf.html)

|
sampling

[create_cdf](create_cdf.html)

[create_pdf](create_pdf.html)

[newsampler](newsampler.html)

[nextsample](nextsample.html)

[sample_bsdf](sample_bsdf.html)

[sample_cdf](sample_cdf.html)

[sample_geometry](sample_geometry.html)

[sample_light](sample_light.html)

[sample_photon](sample_photon.html)

[solid_angle](solid_angle.html)

[spline_cdf](spline_cdf.html)

[split_bsdf](split_bsdf.html)

|
spline

[ckspline](ckspline.html)

[cspline](cspline.html)

[kspline](kspline.html)

[lkspline](lkspline.html)

[lspline](lspline.html)

[spline](spline.html)

[spline_cdf](spline_cdf.html)
