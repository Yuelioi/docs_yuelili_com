---
title: resolvemissedray
order: 66
category:
  - houdini
---

## Description

Context(s) [shading](../contexts/shading.html)

`vector resolvemissedray(vector dir, float time, int mask, ...)`

Returns the color of the background environment for rays that exit the scene.
When no environment or background color is specified, any environment lights
in the scene using the mode “Ray Tracing Background” will be used to look up
the environment color. mask indicates the type of ray that is being resolved
as an integer mask.

To use the default background (environment light) for a reflection ray:

```c
resolvemissedray(I, 0.0, PBR_REFLECT_MASK);
```

To define your own background:

```c
resolvemissedray(I, 0.0, PBR_ALL_MASK, "environment", "Mandril.rat",
"envtint", {1,2,1}); resolvemissedray(I, 0.0, PBR_ALL_MASK, "background",
{1,1,1});
```

## See also

- [![](../../icons/OBJ/light_environment.svg) envlight](../../nodes/obj/envlight.html)

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
