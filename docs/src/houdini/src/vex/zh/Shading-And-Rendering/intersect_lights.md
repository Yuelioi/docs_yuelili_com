---
title: intersect_lights
order: 40
category:
  - vex
---

[displace](../contexts/displace.html)
[fog](../contexts/fog.html)
[surface](../contexts/surface.html)

::: info Note

内涵(s) 这个功能只适用于区域灯。

`int intersect_lights(int lightids[], vector pos, vector dir, float time, int &idx, float &dist, vector &clr, float &scale, ...)`

## Arguments

`lightids`

灯光 ID 的数组，如[getlights](getlights.html) ()("返回当前阴影表面的灯光标识数组")所返回的。

`pos`

射线的原点（如全局变量`P`）。

`dir`

从原点出发的方向向量。这个向量的长度并不影响射线的移动距离。

`time`

是时候把射线送到。

该函数修改了以下参数的值。

## Arguments

`idx`

被射线击中的光线的索引，如果没有发现交叉点，则为-1。

`dist`

到最近的相交光的距离。

`clr`

灯光着色器设置的灯光颜色。

`scale`

光的平均半球形强度（用于区域灯）。

## Returns

一个[组件位掩码](bouncemask.html)，表示该光线影响了哪些类型的组件，如果该光线没有击中任何光线，则为`0`。

## See also

- [getlights](getlights.html)
- [getlightname](getlightname.html)
- [sample_light](sample_light.html)

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
raytracing

[getlocalcurvature](getlocalcurvature.html)

[getobjectid](getobjectid.html)

[getuvtangents](getuvtangents.html)

[intersect_lights](intersect_lights.html)

[scatter](scatter.html)

[shadow_light](shadow_light.html)

[uvunwrap](uvunwrap.html)
