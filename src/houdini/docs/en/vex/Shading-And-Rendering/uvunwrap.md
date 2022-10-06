---
title: uvunwrap
order: 79
category:
  - houdini
---

## Description

`int uvunwrap(string object_path, float u, float v, float time, vector &P, vector &I)`

`int uvunwrap(string object_path, float u, float v, float time, vector &P, vector &I, vector &mikkelsenUtan, vector &mikkelsenVtan)`

This function **only makes sense in a Mantra context** , for use in **texture
baking** or in a **lens shader**. The function unfortunately must be “context-
less” so it’s available to the CVEX lens shader, but in any other context it
will fail and return `0`.

For any other kind of texture sampling, use the superior
[uvsample](uvsample.html "Interpolates the value of an attribute at certain UV
coordinates using a UV attribute.") or [uvintersect](uvintersect.html "This
function computes the intersection of the specified ray with the geometry in
uv space.") functions instead of this.

## Arguments

`object_path`

The object being unwrapped.

`u`, `v`

The UV coordinates specifying where on the surface to get the position and
normal.

`time`

The time along the timeline at which to measure the geometry, in seconds.

`&P`

If it succeeds, the function overwrites this variable with the world space
position of the given point.

`&I`

If it succeeds, the function overwrites this variable with the normal at the
given point.

`&mikkelsenUtan`, `&mikkelsenVtan`

The function overwrites these variables with the Mikkelsen tangent vectors.

## Returns

`1` if the UV coordinates specified a valid point on the surface, or `0`
otherwise.

## See also

- [uvsample](uvsample.html)
- [uvintersect](uvintersect.html)

### raytracing

[getlocalcurvature](getlocalcurvature.html)

[getobjectid](getobjectid.html)

[getuvtangents](getuvtangents.html)

[intersect_lights](intersect_lights.html)

[scatter](scatter.html)

[shadow_light](shadow_light.html)

[uvunwrap](uvunwrap.html)

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
