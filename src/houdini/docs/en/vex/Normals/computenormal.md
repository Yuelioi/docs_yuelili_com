---
title: computenormal
order: 2
category:
  - houdini
---

## Description

`vector computenormal(vector P, ...)`

In shading contexts, computes the normal for position P using the cross
product of the derivatives of P.

`vector computenormal(vector P, vector N, vector Ng, ...)`

In shading contexts, computes the normal for position P using the cross
product of the derivatives of P. N is the original surface normal and Ng is
the geometric normal. This version “adjusts” the computed normal so
interpolated normals will be relatively correct.

`void computenormal(int i)`

(Obsolete) In SOP context, sets the hint for whether normals should be
recomputed when `P` or `N` change (0=never, 1=automatic, 2=always).

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

### normals

[computenormal](computenormal.html)

[ntransform](ntransform.html)

[prim_normal](prim_normal.html)

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
