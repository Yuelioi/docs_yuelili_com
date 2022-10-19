---
title: shadow_light
order: 71
category:
  - vex
---

[displace](../contexts/displace.html)
[fog](../contexts/fog.html)
[surface](../contexts/surface.html)

`vector shadow\_light(int lightid, vector pos, vector dir, float time, ...)`

该操作类似于 shadow()函数，但它允许在照度循环之外执行阴影着色器。直接提供光源的位置和方向，并执行阴影着色器--返回阴影乘数。为了产生最终的阴影颜色，将阴影颜色乘以 shadow_light 返回的值。

关键字变量参数可以被传递给阴影着色器，以便在阴影着色器中用 simport()导入。

## Arguments

`lightid`

灯光标识符，如[getlights](getlights.html) ()("返回当前阴影表面的灯光标识符数组")所返回。

`pos`

射线的原点（如全局变量`P`）。

`dir`

从原点出发的方向向量。这个向量的长度应该是*pos*到光源的距离。

`time`

是时候把射线送到。

## See also

- [shadow](shadow.html)
- [sample_light](sample_light.html)
- [intersect_lights](intersect_lights.html)

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
