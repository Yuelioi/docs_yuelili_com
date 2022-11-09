---
title: bouncemask
order: 5
category:
  - vex
---

`int bouncemask(string labels)`

## Arguments

`labels`

一个标签或以空格分隔的标签列表。

## Returns

一个与任何一个标签相匹配的位掩码。

Mantra 使用着色组件_标签来标记不同类型的射线，例如 "diffuse"、"reflect"、"refract"、"volume "和 "ss"。自定义 BSDF 也可以在现有标签的基础上指定自己的标签（更多信息见[cvex_bsdf](cvex_bsdf.html)（"从两个 CVEX 着色器字符串创建一个 bsdf 对象。"）。

一些 VEX 函数接受或返回一个*组件位掩码*，它使用一个整数的位来指定一个或多个这些标签的组合。

要获得与一个标签相关的位值，使用[bouncemask](bouncemask.html) () ()，例如`bouncemask("diffuse")`。要得到一个匹配多个标签的掩码，使用空格分隔的列表。

```c
reflect_or_refract = bouncemask("reflect refract")

```

To construct a bitmask that matches all labels, use `bouncemask("all")`. To match no labels, use `0`.

When you get a bitmask as a return value, you can check if it matches a certain label using `&`. For example:

```c
mask = getbounces(mybsdf)
if (mask & bouncemask("reflect")) {
 ...
}

```

(As an alternative to basic uses of `bouncemask()`, you can `#import "pbr.h"` and work with the constants `PBR_DIFFUSE_MASK`, `PBR_REFLECT_MASK`, `PBR_REFRACT_MASK`, `PBR_VOLUME_MASK`, `PBR_SSS_MASK`, as well as `PBR_ALL_MASK` and `PBR_NO_MASK`. You can combine the constants using `|`, for example `reflect_or_refract = PBR_REFLECT_MASK PBR_REFRACT_MASK`.)

## See also

- [getbounces](getbounces.html)
- [nbouncetypes](nbouncetypes.html)

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
labels

[bouncemask](bouncemask.html)

[eval_bsdf](eval_bsdf.html)

[getbounces](getbounces.html)

[getcomponents](getcomponents.html)

[nbouncetypes](nbouncetypes.html)

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
