---
title: split_bsdf
order: 21
category:
  - vex
---

`void split_bsdf(bsdf &lobes[], bsdf source, float &weights[])`

`void split_bsdf(bsdf &lobes[], bsdf source, float &weights[], int mask)`

`void split_bsdf(bsdf &lobes[], bsdf source, float &weights[], int mask, int type)`

`void split_bsdf(bsdf &lobes[], bsdf source, float &weights[], int mask, int type, float u)`

`void split_bsdf(bsdf &lobes[], bsdf source, float &weights[], int mask, int type, float u, float cdf[])`

## Arguments

`&lobes`

该函数用各裂片的 BSDFs 覆盖这个数组。

`source`

BSDF 将分裂。

`weights`

该函数用分裂的裂片的权重填充这个数组（与返回的`bsdf`数组长度相同）。当你使用返回的裂片进行照明采样时，你必须用这些权重进行缩放。

`mask`

一个比特掩码，表示要评估哪些类型的弹跳。

参见[bouncemask](bouncemask.html)以了解关于组件标签位掩码的信息。

`type`

如何分割裂片。你可以`#import "pbr.h"`来获得代表不同分裂类型的常量值。

- `pbr_split_full = 0`。
- `pbr_split_random = 1`。
- `pbr_split_albedo = 2`。
- `pbr_split_component = 3`.
- `pbr_split_default = pbr_split_albedo`。

`u`

对 CDF 进行采样的随机值。

`cdf`

用来控制 BSDF 各组成部分之间的抽样的 CDF。

## Returns

一个代表裂片的`bsdf`对象数组。

## Examples



```c
// Split BSDF into component lobes
float weights[];
bsdf lobes[];
split_bsdf(lobes, hitF, weights);

// Get albedos of lobes
float albedos[];
resize(albedos, len(lobes));
for (int i = 0; i < len(lobes); i++)
{
 albedos[i] = luminance(albedo(lobes[i], -hitnI)) \* weights[i];
}

// Compute CDF
float cdf[] = compute_cdf(albedos);

// Randomly select a BSDF based on albedo distribution
int index = 0;
sample_cdf(cdf, s.x, index);

// Do something with the selected BSDF
// lobes[index] ...

```

## See also

- [sample_bsdf](sample_bsdf.html)
- [eval_bsdf](eval_bsdf.html)
- [albedo](albedo.html)
- [create_cdf](create_cdf.html)
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
