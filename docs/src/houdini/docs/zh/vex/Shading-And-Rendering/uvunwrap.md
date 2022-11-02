---
title: uvunwrap
order: 79
category:
  - vex
---

`int uvunwrap(string object\_path, float u, float v, float time, vector &P, vector &I)`

`int uvunwrap(string object\_path, float u, float v, float time, vector &P, vector &I, vector &mikkelsenUtan, vector &mikkelsenVtan)`

这个函数**只在 Mantra 上下文中才有意义，用于**纹理烘烤**或**镜头着色器。不幸的是，这个函数必须是 "无上下文 "的，所以它对 CVEX 镜头着色器可用，但在任何其他上下文中，它都会失败并返回`0'。

对于任何其他种类的纹理取样，请使用高级的 [uvsample](uvsample.html) () ("使用 UV 属性在某些 UV 坐标上插值。") 或 [uvintersect](uvintersect.html) () ("此函数计算指定射线与 uv 空间中的几何体的交点。") 函数来代替这个。

## Arguments

`object_path`

被解开的对象。

`u`, `v`

UV 坐标，指定在表面的哪个位置获得位置和法线。

`time`

沿着时间轴测量几何图形的时间，单位是秒。

`&P`

如果成功，该函数将用给定点的世界空间位置覆盖该变量。

`&I`

如果成功，该函数将用给定点的正常值覆盖该变量。

`&mikkelsenUtan`, `&mikkelsenVtan`

该函数用米克尔森切向量覆盖了这些变量。

## Returns

如果 UV 坐标指定了曲面上的一个有效点，则为 "1"，否则为 "0"。

## See also

- [uvsample](uvsample.html)
- [uvintersect](uvintersect.html)

|
raytracing

[getlocalcurvature](getlocalcurvature.html)

[getobjectid](getobjectid.html)

[getuvtangents](getuvtangents.html)

[intersect_lights](intersect_lights.html)

[scatter](scatter.html)

[shadow_light](shadow_light.html)

[uvunwrap](uvunwrap.html)

|
shading

[Du](Du.html)

[Dv](Dv.html)

[Dw](Dw.html)

[area](area.html)

[ashikhmin](ashikhmin.html)

[atten](atten.html)

[blinn](blinn.html)

[blinnBRDF](blinnBRDF.html)

[chiang](chiang.html)

[computenormal](computenormal.html)

[cone](cone.html)

[cvex_bsdf](cvex_bsdf.html)

[diffuse](diffuse.html)

[diffuseBRDF](diffuseBRDF.html)

[dsmpixel](dsmpixel.html)

[environment](environment.html)

[fastshadow](fastshadow.html)

[filtershadow](filtershadow.html)

[filterstep](filterstep.html)

[fresnel](fresnel.html)

[frontface](frontface.html)

[getderiv](getderiv.html)

[getfogname](getfogname.html)

[getglobalraylevel](getglobalraylevel.html)

[getgroupid](getgroupid.html)

[getlocalcurvature](getlocalcurvature.html)

[getmaterialid](getmaterialid.html)

[getobjectid](getobjectid.html)

[getobjectname](getobjectname.html)

[getprimid](getprimid.html)

[getptextureid](getptextureid.html)

[getraylevel](getraylevel.html)

[getrayweight](getrayweight.html)

[getsamplestore](getsamplestore.html)

[getsmoothP](getsmoothP.html)

[getuvtangents](getuvtangents.html)

[ggx](ggx.html)

[gradient](gradient.html)

[hair](hair.html)

[henyeygreenstein](henyeygreenstein.html)

[isotropic](isotropic.html)

[israytracing](israytracing.html)

[isshadingRHS](isshadingRHS.html)

[lightstate](lightstate.html)

[matchvex_blinn](matchvex_blinn.html)

[matchvex_specular](matchvex_specular.html)

[objectstate](objectstate.html)

[phong](phong.html)

[phongBRDF](phongBRDF.html)

[phonglobe](phonglobe.html)

[ptexture](ptexture.html)

[rayhittest](rayhittest.html)

[rayimport](rayimport.html)

[reflect](reflect.html)

[refract](refract.html)

[renderstate](renderstate.html)

[resolvemissedray](resolvemissedray.html)

[sample_geometry](sample_geometry.html)

[scatter](scatter.html)

[setsamplestore](setsamplestore.html)

[specular](specular.html)

[specularBRDF](specularBRDF.html)

[sssapprox](sssapprox.html)

[teximport](teximport.html)

[texture](texture.html)

[trace](trace.html)

[translucent](translucent.html)

[uvunwrap](uvunwrap.html)

[volume](volume.html)

[wireblinn](wireblinn.html)

[wirediffuse](wirediffuse.html)
