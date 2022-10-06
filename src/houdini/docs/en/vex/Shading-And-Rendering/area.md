---
title: area
order: 2
category:
  - houdini
---

## Description

On this page

- Derivatives options

- Examples

`float area(vector p, ...)`

This is a more accurate and convenient method to get the micropolygon area
than multiplying the length of `Du(P)` by the length of `Dv(P)`. This function
is typically used to get the shading area in pixels.

::: info Note

This function works because VEX “knows” that the variable `P` has derivatives
(`dPdu` and `dPdv`). Passing a literal vector instead of a special variables
such as `P` will return `0` since VEX will not be able to access the
derivatives.
:::

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

Return the area of the current micro-polygon in camera space:

```c
area(P)
```

Return the area of the current micro-polygon in NDC space:

```c
area(transform("ndc", P))
```

Returns `0`, since the argument is not a variable VEX knows the derivatives
for:

```c
area({0.1, 2.3, 4.5})
```

## See also

- [volume](volume.html)
- [Du](Du.html)
- [Dv](Dv.html)

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