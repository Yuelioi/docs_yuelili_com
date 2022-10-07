---
title: rayimport
order: 60
category:
  - vex
---

[fog](../contexts/fog.html)
[light](../contexts/light.html)
[shadow](../contexts/shadow.html)
[surface](../contexts/surface.html)

`int rayimport(string name, <type>&value)`

`int rayimport(string name, <type>&value[])`

Context(s) 提取当表面被[gather](gather.html) ("向场景中发送射线并返回被射线击中的表面的着色器的信息")发射的射线击中时传递的任何信息。

## Arguments

`name`

变量名称，在[gather](gather.html) ("向场景中发送射线并返回被射线击中的表面的着色器信息")中使用`"send:name", value`参数对传递。(没有`send:`前缀)。

`value`

如果函数可以导入命名的变量，它将用该值覆盖这个变量。

## Returns

如果成功导入一个给定名称的值，则为 "1"，否则为 "0"。

## 内置的可查询名称

[¶](#built-in-queryable-names)

v3 你可以向`name`传递以下值，以查询内置射线信息（不是由`gather()`发送的）。

`ray:P` (`vector`)

射线的起源。

`ray:D` (`vector`)

射线的方向向量。

`ray:time` (`float`)

与射线相关的快门时间。

`ray:hitstack` (`int[]`)

部门间提供的命中率堆栈。

`ray:element` (`int`)

由部门间提供的元素。

`ray:hituv` (`vector`)

由区间提供的参数坐标。

`ray:Ng` (`vector`)

从区间的几何法线。

::: info Note

Mantra 3 部门间提供的数据是原始数据，可能没有意义，或者在不同的平台或版本中可能有所不同。

## See also

- [gather](gather.html)
- [simport](simport.html)

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
