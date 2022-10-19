---
title: gradient
order: 36
category:
  - vex
---

在这一页

- [衍生品选项](#衍生品-选项)
- [例子](#例子)

`vector gradient(float val, ...)`

`vector gradient(vector P, float val, ...)`

该方法使用相对于给定位置（`Du', `Dv', 和`Dw'）的部分导数来计算一个体积场的导数。如果没有提供位置，则在着色的情况下假定为 "P"。如果只定义了`Du'和`Dv'，导数将与被渲染的表面相切。

## 衍生品期权

[¶](#derivatives-options)

计算导数的函数需要额外的参数，以便对导数计算进行调整。

## Arguments

`int`
`=0`

"`extrapolate`", 导数是否 "平滑 "地跨越补丁边界。在大多数情况下，这是真的，如果外推法被打开，导数计算对 C2 表面来说应该是精确的。然而，当 VEX 变量以高频率变化时（例如，高频率的位移图导致 P 变量的高频率变化），导数计算的外推可能导致补丁边界之间不连续的夸张。

`int`
`=1`

"`smooth'"，在补丁上非均匀地调整差值的大小。这通常会减少位移/纹理明暗器中的补丁不连续。然而，在一些奇怪的情况下，你可能想把这个功能关掉。

```c
N = computenormal(P, "extrapolate", 1, "smooth", 0);

```

## Examples



Return the gradient of the density field:

```c
surface test\_grad(float density = 0)
{
Cf = gradient(density);
}

```

## See also

- [volume](volume.html)
- [Du](Du.html)
- [Dv](Dv.html)
- [Dw](Dw.html)

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

|
volume

[gradient](gradient.html)

[volume](volume.html)

[volumecubicsample](volumecubicsample.html)

[volumecubicsamplev](volumecubicsamplev.html)

[volumegradient](volumegradient.html)

[volumeindex](volumeindex.html)

[volumeindexactive](volumeindexactive.html)

[volumeindexorigin](volumeindexorigin.html)

[volumeindextopos](volumeindextopos.html)

[volumeindexv](volumeindexv.html)

[volumepostoindex](volumepostoindex.html)

[volumeres](volumeres.html)

[volumesample](volumesample.html)

[volumesamplev](volumesamplev.html)

[volumesmoothsample](volumesmoothsample.html)

[volumesmoothsamplev](volumesmoothsamplev.html)

[volumevoxeldiameter](volumevoxeldiameter.html)
