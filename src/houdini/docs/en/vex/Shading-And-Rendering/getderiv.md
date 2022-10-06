---
title: getderiv
order: 13
category:
  - houdini
---

## Description

On this page

- Derivatives options

- Examples

Context(s) [displace](../contexts/displace.html) [
fog](../contexts/fog.html) [light](../contexts/light.html) [
shadow](../contexts/shadow.html) [surface](../contexts/surface.html)

`void getderiv(float attr, string attrName, int isVertexAttr, float s, float t, float &du, float &dv, ...)`

`void getderiv(<vector>attr, string attrName, int isVertexAttr, float s, float t, <vector>&du, <vector>&dv, ...)`

::: info Note
If derivatives are queried for a polygonal mesh it is interally sampled as a
Subdivision Surface.
:::

## Arguments

`attr`

Attribute value.

`attrName`

Name of attribute to evaluate.

`isVertexAttr`

Set to `1` to indicate the attribute is a vertex type.

`s`

Parametric S shading value. This should be passed from the `s` global
variable.

`t`

Parametric <type> shading value. This should be passed from the `t` global
variable.

`du`

Derivative of attribute in U direction.

`dv`

Derivative of attribute in V direction.

### Derivatives options ¶

Functions which compute derivatives take additional arguments to allow tuning
of the derivative computation.

## Arguments

"`extrapolate`", `int` `=0`

Whether derivatives are “smooth” across patch boundaries. In most cases this
is true and if extrapolation is turned on, derivative computation should be
exact for C2 surfaces. However, when the VEX variables are changing with a
high frequency (for example, a high frequency displacement map causing high
frequency changes to the P variable), extrapolation of derivative computation
may cause exaggeration of discontinuities between patch boundaries.

"`smooth`", `int` `=1`

Adjust the magnitude of the differentials non-uniformly over patches. This
will usually reduce patch discontinuities in displacement/textured shaders.
However, in some odd cases you may want to turn this feature off.

```c
N = computenormal(P, "extrapolate", 1, "smooth", 0);
```

## Examples ¶

```c
// Get derivatives of point attribute 'N' vector dNdu, dNdv;
getderiv(N, "N", 0, s, t, dNdu, dNdv);
```

## See also

- [Du](Du.html)
- [Dv](Dv.html)

### math

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

### shading

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
