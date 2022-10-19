---
title: Du
order: 17
category:
  - vex
---

`float Du(float n, ...)`

`vector Du(vector n, ...)`

`vector4 Du(vector4 n, ...)`

## Arguments

## Returns

`n`相对于 U 的导数。

在阴影背景下，这是变量在被遮蔽区域的变化。

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

## See also

- [Dv](Dv.html)
- [Dw](Dw.html)

|
deriv

[Du](Du.html)

[Dw](Dw.html)

[primduv](primduv.html)

|
math

[Du](Du.html)

[Dv](Dv.html)

[Dw](Dw.html)

[abs](abs.html)

[acos](acos.html)

[asin](asin.html)

[atan](atan.html)

[atten](atten.html)

[avg](avg.html)

[cbrt](cbrt.html)

[ceil](ceil.html)

[cos](cos.html)

[cosh](cosh.html)

[cracktransform](cracktransform.html)

[cross](cross.html)

[degrees](degrees.html)

[dot](dot.html)

[erf](erf.html)

[erf_inv](erf_inv.html)

[erfc](erfc.html)

[exp](exp.html)

[floor](floor.html)

[frac](frac.html)

[fuzzify](fuzzify.html)

[getderiv](getderiv.html)

[isfinite](isfinite.html)

[isnan](isnan.html)

[log](log.html)

[log10](log10.html)

[max](max.html)

[min](min.html)

[pow](pow.html)

[product](product.html)

[radians](radians.html)

[resample_linear](resample_linear.html)

[rint](rint.html)

[shl](shl.html)

[shr](shr.html)

[shrz](shrz.html)

[sign](sign.html)

[sin](sin.html)

[sinh](sinh.html)

[solvecubic](solvecubic.html)

[solvepoly](solvepoly.html)

[solvequadratic](solvequadratic.html)

[solvetriangleSSS](solvetriangleSSS.html)

[sqrt](sqrt.html)

[sum](sum.html)

[tan](tan.html)

[tanh](tanh.html)

[trunc](trunc.html)

[variance](variance.html)

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
vector

[Du](Du.html)

[Dw](Dw.html)

[avg](avg.html)

[cross](cross.html)

[distance2](distance2.html)

[dot](dot.html)

[length](length.html)

[length2](length2.html)

[normalize](normalize.html)

[outerproduct](outerproduct.html)

[pretranslate](pretranslate.html)

[rotate_x_to](rotate_x_to.html)

[smoothrotation](smoothrotation.html)

[swizzle](swizzle.html)

[translate](translate.html)
