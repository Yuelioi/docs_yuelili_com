---
title: computenormal
order: 2
category:
  - vex
---

`vector computenormal(vector P, ...)`

在阴影背景下，使用 P 的导数的交叉积来计算位置 P 的法线。

`vector computenormal(vector P, vector N, vector Ng, ...)`

在着色的情况下，使用 P 的导数的交叉乘积来计算位置 P 的法线。这个版本 "调整 "了计算出来的法线，所以插值的法线会相对正确。

`void computenormal(int i)`

(过时）在 SOP 上下文中，设置当`P`或`N`改变时是否应该重新计算法线的提示（0=从不，1=自动，2=总是）。

## 衍生品期权

[¶](#derivatives-options)

计算导数的函数需要额外的参数，以便对导数计算进行调整。

## Arguments

`int`
`=0`

"`extrapolate`", 导数是否 "平滑 "地跨越补丁边界。在大多数情况下，这是真的，如果外推法被打开，导数计算对 C2 表面来说应该是精确的。然而，当 VEX 变量以高频率变化时（例如，高频率的位移图导致 P 变量的高频率变化），导数计算的外推可能导致补丁边界之间不连续的夸张。

`int`
`=1`

"`smooth'"，在斑块上非均匀地调整差值的大小。这通常会减少位移/纹理明暗器中的补丁不连续。然而，在一些奇怪的情况下，你可能想把这个功能关掉。

```c
N = computenormal(P, "extrapolate", 1, "smooth", 0);

```

normals

[computenormal](computenormal.html)

[ntransform](ntransform.html)

[prim_normal](prim_normal.html)

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
