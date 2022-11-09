---
title: create_cdf
order: 2
category:
  - vex
---

在这一页

- [概览](#overview)
- [使用方法](#使用方法)
- [例子](#例子)

## 概述

[¶](#overview)

当从分布中取样时，CDF 很有用。例如，你可以创建一个光源功率的 CDF。这将允许以基于功率的概率对灯光进行采样。这是一个离散 CDF 的例子，在这里取样是在一组固定的概率中选择。(见下面的例子）。

使用 [sample_cdf](sample_cdf.html) () ("对累积分布函数（CDF）进行采样。") 函数从返回的 CDF 数组中采样。

## 使用方法

[¶](#usage)

`float [] create_cdf(float pdf[])`

返回输入 PDF 的 CDF，作为一个浮点数数组。

## Arguments

`pdf`

用于创建 CDF 的 PDF 值数组。

## Examples



```c
// Iterate over all lights, sampling their power
int[] li = getlights();
float values[];
resize(values, len(li));
int nsamples = 256;
int sid = israytrace ? SID : newsampler();
vector s, pos, clr;
float scale;
for (int i = 0; i < len(li); i++)
{
 for (int j = 0; j < nsamples; j++)
 {
 nextsample(sid, s.x, s.y, "mode", "nextpixel");
 sample_light(li[i], P, s, Time, pos, clr, scale);
 values[i] += luminance(clr);
 }
 values[i] /= nsamples;
}

// Create a CDF of the power distribution
float cdf[] = create_cdf(values);

// Randomly select a light based on power distribution
nextsample(sid, s.x, s.y, "mode", "nextpixel");
int index = 0;
sample_cdf(cdf, s.x, index);

// Do something with the selected light
// li[index] ...

```

## See also

- [create_pdf](create_pdf.html)
- [sample_cdf](sample_cdf.html)

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
