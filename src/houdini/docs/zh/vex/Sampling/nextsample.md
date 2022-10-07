---
title: nextsample
order: 6
category:
  - vex
---

[displace](../contexts/displace.html)
[fog](../contexts/fog.html)
[light](../contexts/light.html)
[shadow](../contexts/shadow.html)
[surface](../contexts/surface.html)

`void nextsample(int &sid, float &sx, float &sy, ...)`

`void nextsample(int &sid, vector &svec, ...)`

Context(s) [newsampler](newsampler.html) () ("Initializes a sampling sequence for the nextsample function.") 和这个函数暴露了 mantra 用于像素抗锯齿的高质量确定性采样模式。当在光线追踪模式下渲染时，通过用`SID`全局变量初始化采样序列，可以用`nextsample`例程生成确定性的 2D 采样。

这个方法可以生成 2D 或 3D 采样模式。要生成二维样本，请使用带有 2 个浮点数只写参数的签名。要生成三维样本，请使用带有一个矢量只写参数的签名。

你可以添加一个额外的参数，`"mode"`，后面是以下的一个。

## Arguments

`“qstrat”`

推进到模式中的下一个样本。你应该在使用[newsampler](newsampler.html)（"为 nextsample 函数初始化一个采样序列"）时使用这种模式。

`“nextpixel”`

推进到一个新的像素采样模式。在使用 SID 和光线追踪时，你应该使用这种模式，以便在一个像素内产生高质量的采样模式。这种模式考虑到了当前像素内的其他样本，并会适当地进行分层。如果使用微多边形渲染，"nextpixel "的行为与 "qstrat "相同。

`“decorrelate”`

推进到一个新的装饰相关采样。你应该使用这种模式来确定地生成一个与现有序列无关的新采样序列。与 "nextpixel "类似，当与 SID 和光线追踪一起使用时，这种模式可以保留高质量的像素采样。

```c
int nsamples = 10;
int sid = israytrace ? SID : newsampler();

for (i = 0; i < nsamples; i++)
{
if (israytrace)
nextsample(sid, sx, sy, "mode", "nextpixel");
else
nextsample(sid, sx, sy, "mode", "qstrat");
// Sample something using sx/sy...
}

```

## See also

- [newsampler](newsampler.html)

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
