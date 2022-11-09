---
title: sample_cdf
order: 8
category:
  - vex
---

在这一页

- [概览](#overview)
- [使用方法](#使用方法)

## 概述

[¶](#overview)

使用此函数从用 [create_cdf](create_cdf.html) () ("从概率密度函数（PDF）值阵列中创建累积分布函数（CDF）。") 函数创建的 CDF 阵列中取值。参见 [create_cdf](create_cdf.html) () ("从概率密度函数（PDF）值阵列中创建累积分布函数（CDF）。") 了解更多信息。

参见 [create_cdf](create_cdf.html) () ("从概率密度函数（PDF）值阵列中创建累积分布函数（CDF）。") 函数文档中的示例代码。

## 使用方法

[¶](#usage)

`int sample_cdf(float cdf[], float uniform_rand)`

返回采样的 CDF 的索引。

`void sample_cdf(float cdf[], float uniform_rand, int &index, float &x)`

将采样的 CDF 的索引和值写到输出参数中。

`void sample_cdf(float cdf[], float uniform_rand, int &index, float &x, float &pdf)`

将取样的 CDF 的索引、取样值和相应的 PDF 写到输出参数。

## Arguments

`cdf`

要取样的 CDF（使用[create_cdf](create_cdf.html)（"从概率密度函数（PDF）值阵列中创建累积分布函数（CDF）"）创建。）

`uniform_rand`

一个均匀的随机变量（必须在 0 到 1 的范围内）。

`&index`

输出采样的 CDF 元素的索引。

`&x`

输出采样的 CDF 元素的值。

`&pdf`

输出采样的 CDF 元素的 PDF。

## Returns

第一种形式返回采样值的索引。其他形式则是将索引写到一个输出参数中。

## See also

- [create_cdf](create_cdf.html)
- [create_pdf](create_pdf.html)

### bsdf

[albedo](albedo.html)

[ashikhmin](ashikhmin.html)

[blinn](blinn.html)

[bouncelabel](bouncelabel.html)

[bouncemask](bouncemask.html)

[chiang](chiang.html)

[cone](cone.html)

[create_cdf](create_cdf.html)

[create_pdf](create_pdf.html)

[cvex_bsdf](cvex_bsdf.html)

[diffuse](diffuse.html)

[eval_bsdf](eval_bsdf.html)

[getbounces](getbounces.html)

[getcomponents](getcomponents.html)

[ggx](ggx.html)

[hair](hair.html)

[henyeygreenstein](henyeygreenstein.html)

[isotropic](isotropic.html)

[mask_bsdf](mask_bsdf.html)

[nbouncetypes](nbouncetypes.html)

[normal_bsdf](normal_bsdf.html)

[phong](phong.html)

[phonglobe](phonglobe.html)

[sample_bsdf](sample_bsdf.html)

[sample_cdf](sample_cdf.html)

[solid_angle](solid_angle.html)

[specular](specular.html)

[split_bsdf](split_bsdf.html)

[sssapprox](sssapprox.html)

[translucent](translucent.html)

|
pbr

[albedo](albedo.html)

[ashikhmin](ashikhmin.html)

[blinn](blinn.html)

[bouncelabel](bouncelabel.html)

[bouncemask](bouncemask.html)

[chiang](chiang.html)

[cone](cone.html)

[create_cdf](create_cdf.html)

[create_pdf](create_pdf.html)

[diffuse](diffuse.html)

[eval_bsdf](eval_bsdf.html)

[getbounces](getbounces.html)

[getcomponents](getcomponents.html)

[getlight](getlight.html)

[getlights](getlights.html)

[getlightscope](getlightscope.html)

[getmaterial](getmaterial.html)

[getphotonlight](getphotonlight.html)

[getscope](getscope.html)

[ggx](ggx.html)

[hair](hair.html)

[haslight](haslight.html)

[interpolate](interpolate.html)

[intersect_lights](intersect_lights.html)

[mask_bsdf](mask_bsdf.html)

[matchvex_blinn](matchvex_blinn.html)

[matchvex_specular](matchvex_specular.html)

[nbouncetypes](nbouncetypes.html)

[newsampler](newsampler.html)

[nextsample](nextsample.html)

[normal_bsdf](normal_bsdf.html)

[phong](phong.html)

[phonglobe](phonglobe.html)

[sample_bsdf](sample_bsdf.html)

[sample_cdf](sample_cdf.html)

[sample_geometry](sample_geometry.html)

[sample_light](sample_light.html)

[sample_photon](sample_photon.html)

[shadow_light](shadow_light.html)

[solid_angle](solid_angle.html)

[specular](specular.html)

[split_bsdf](split_bsdf.html)

[sssapprox](sssapprox.html)

[storelightexport](storelightexport.html)

[translucent](translucent.html)

[wireblinn](wireblinn.html)

[wirediffuse](wirediffuse.html)

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
