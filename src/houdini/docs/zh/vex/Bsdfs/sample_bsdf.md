---
title: sample_bsdf
order: 19
category:
  - vex
---

`void sample\_bsdf(bsdf F, vector viewer\_u, vector &dir, vector &eval, int &type, float sx, float sy, ...)`

`void sample\_bsdf(bsdf F, vector viewer\_u, vector &dir, vector &eval, int &type, float sx, float sy, int mask, ...)`

`void sample\_bsdf(bsdf F, vector viewer\_u, vector &dir, vector &eval, float &pdf, int &type, float sx, float sy, ...)`

`void sample\_bsdf(bsdf F, vector viewer\_u, vector &dir, vector &eval, float &pdf, int &type, float sx, float sy, int mask, ...)`

`void sample\_bsdf(bsdf b, vector viewer\_u, vector normal\_v, int &flags, vector &dir, vector &eval, float &pdf, int &type, float sx, float sy, int mask, ...)`

## Arguments

`F`

要取样的 BSDF。

`viewer_u`

U 向量（输入查看器方向）。

`normal_v`

V 向量（输入表面法线）。

`&flags`

在`pbr.h`中定义的 BSDF 的标志位域。该函数可以设置`PBR_BSDF_REVERSE`或`PBR_BSDF_O_EVENT_EXIT`等标志。

`&dir`

该函数用出射光线方向覆盖该变量。

`&eval`

该函数用出射光线的颜色覆盖这个变量，并以反照率为尺度。

这与`eval_bsdf`操作返回的被评估的向量不同。在这里，`&eval`不会随着出样方向的不同而变化。

`&pdf`

该函数用计算出的 BSDF 的 PDF 覆盖这个变量。

`&type`

在复合 BSDF 中，这将返回被采样的弹跳类型。

参见[bouncemask](bouncemask.html)以了解关于组件标签位掩码的信息。

`sx` and `sy`

随机值，例如由[nextsample](nextsample.html)生成的。`sx`和`sy`的不同值代表不同的随机取样方向。

`&eval`

用取样成分的颜色覆盖，按反照率缩放。

`&pdf`

采样组件的采样 pdf。

`bounces`

一个比特掩码，代表允许的弹跳类型。

`sample_bsdf`函数向正在评估的 BSDF 传递关键字参数。对于自定义的 BSDF，这些关键字参数与着色器参数绑定（例如，指示 BSDF 是为直接照明还是间接照明进行评估）。BSDF 也可以将信息传回给`sample_bsdf`。为了表示一个关键词的参数值应该从 BSDF 中导入，在关键词前加上 "import:"。例如。

## Examples



```c
sample\_bsdf(F, inI, outI, eval, type, sx, sy,
 "direct", 0, // Specify indirect illumination
 "import:sssmfp", sssmfp, // Read the exported sssmfp parameter
 ...
);

```

## See also

- [albedo](albedo.html)
- [eval_bsdf](eval_bsdf.html)
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
