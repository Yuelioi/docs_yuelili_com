---
title: sample_light
order: 22
category:
  - vex
---

[displace](../contexts/displace.html)
[fog](../contexts/fog.html)
[surface](../contexts/surface.html)

`int sample\_light(int lightid, vector pos, vector sam, float time, vector &pos, vector &clr, float &scale, ...)`

## Arguments

`lightid`

内涵(s) 一个识别灯光的整数。你可以用[getlights](getlights.html) ()("返回当前阴影表面的灯光标识符数组。")获得影响当前阴影表面的灯光标识符列表。

`pos`

光线应该被取样的表面点。区域光源将试图按与位置的实体角度分配样本--也就是说，离位置更近的光的几何形状将得到更多的样本。

`sam`

一个随机值的向量，例如由[nextsample](nextsample.html)生成的随机值。目前只使用 "sam "的前两个分量。不同的 "sam "值在光源的几何形状上转化为不同的随机位置。

`time`

阴凉处的时间。

该函数修改了以下参数的值。

## Arguments

`pos`

光源上的采样位置。

`clr`

灯光着色器设置的灯光颜色。

`scale`

光的平均半球形强度（用于区域灯）。

## Returns

一个[组件位掩码](bouncemask.html)表明光线影响哪些类型的组件的反弹。

:::tip

如果你使用[sample_light](sample_light.html) () ("对光源的 3D 位置进行采样，并在该点运行光照器。")来生成光的颜色，例如复制由[illuminance](illuminance.html) () ("循环浏览场景中的所有光源，为每个光源调用光照器以设置 Cl 和 L 全局变量。")产生的`Cl`值，你将需要把`clr`归一到`scale`。

```c
clr \*= scale / luminance(clr);

```

## See also

- [getlights](getlights.html)
- [intersect_lights](intersect_lights.html)
- [nextsample](nextsample.html)

|
light

[ambient](ambient.html)

[atten](atten.html)

[fastshadow](fastshadow.html)

[filtershadow](filtershadow.html)

[getlight](getlight.html)

[getlightid](getlightid.html)

[getlightname](getlightname.html)

[getlights](getlights.html)

[getlightscope](getlightscope.html)

[getmaterial](getmaterial.html)

[getphotonlight](getphotonlight.html)

[getscope](getscope.html)

[haslight](haslight.html)

[interpolate](interpolate.html)

[intersect_lights](intersect_lights.html)

[irradiance](irradiance.html)

[lightbounces](lightbounces.html)

[lightid](lightid.html)

[occlusion](occlusion.html)

[sample_geometry](sample_geometry.html)

[sample_light](sample_light.html)

[sample_photon](sample_photon.html)

[setcurrentlight](setcurrentlight.html)

[shadow_light](shadow_light.html)

[storelightexport](storelightexport.html)

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
