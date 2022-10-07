---
title: rayimport
order: 60
category:
  - vex
---



Context(s)
[fog](../contexts/fog.html)
[light](../contexts/light.html)
[shadow](../contexts/shadow.html)
[surface](../contexts/surface.html)

`int rayimport(string name, <type>&value)`

`int rayimport(string name, <type>&value[])`

Extracts information any passed when the surface is hit by a ray fired by the [gather](gather.html "Sends rays into the scene and returns information from the shaders of
surfaces hit by the rays.").

## Arguments

`name`

The variable name, as passed using a `"send:name", value` argument pair in [gather](gather.html "Sends rays into the scene and returns information from the shaders of
surfaces hit by the rays.") (without the `send:` prefix).

`value`

If the function can import the named variable, it overwrites this variable with the value.

## Returns

`1` if a value by the given name was successfully imported, or `0` otherwise.

##

Built-in queryable names

v3
[¶](#built-in-queryable-names)

You can pass the following values to `name` to query built-in ray information (not sent from `gather()`).

`ray:P` (`vector`)

The origin of the ray.

`ray:D` (`vector`)

The direction vector of the ray.

`ray:time` (`float`)

The shutter time associated with the ray.

`ray:hitstack` (`int[]`)

The hit-stack provided by the intersector.

`ray:element` (`int`)

The element provided by the intersector.

`ray:hituv` (`vector`)

The parametric coordinates provided by the intersector.

`ray:Ng` (`vector`)

The geometric normal from the intersector.

::: info Note

Data provided by the Mantra 3 intersector is raw data and may not be meaningful, or may be different across platforms or versions.



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
