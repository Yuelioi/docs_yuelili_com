---
title: eval_bsdf
order: 9
category:
  - vex
---

在这一页

- [变量参数](#variadic-arguments)
- [例子](#例子)

`vector eval_bsdf(bsdf b, vector viewer, vector light, ...)`

`vector eval_bsdf(bsdf b, vector viewer, vector light, int mask, ...)`

`vector eval_bsdf(bsdf b, vector viewer, vector light, float &pdf, int mask, ...)`

`vector eval_bsdf(bsdf b, vector viewer, vector light, vector normal, ...)`

`vector eval_bsdf(bsdf b, vector viewer, vector light, vector normal, int mask, ...)`

`vector eval_bsdf(bsdf b, vector viewer, vector light, vector normal, float &pdf, int mask, ...)`

## Arguments

`b`

BSDF 将进行评估。

`viewer`

朝向观看者的矢量。

`light`

向光的矢量。

`normal`

表面正常。

`mask`

一个比特掩码，表示要评估哪些类型的阴影组件弹跳。

参见[bouncemask](bouncemask.html)以了解关于组件标签位掩码的信息。

`&pdf`

该函数用给定方向的计算出的 PDF 覆盖这个变量，并以反照率为尺度。

## 变量论证

[¶](#variadic-arguments)

`eval_bsdf`函数将任何额外的`"name", value`参数对传递给正在评估的 BSDF。对于自定义的 BSDF，这些关键字参数被绑定到着色器参数上（例如，指示 BSDF 是被评估为直接照明还是间接照明）。BSDF 也可以将信息传回给`eval_bsdf`。为了表示关键字的参数值应该从 BSDF 中导入，在关键字前加上 "import:"

## Examples

```c
v = eval_bsdf(F, inI, dir,
 "direct", 0, // Specify indirect illumination
 "import:sssmfp", sssmfp, // Read the exported sssmfp parameter
 ...
);

```

## See also

- [albedo](albedo.html)
- [sample_bsdf](sample_bsdf.html)
- [emission_bsdf()](emission_bsdf.html)

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
