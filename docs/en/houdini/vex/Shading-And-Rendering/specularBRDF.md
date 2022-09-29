---
title: specularBRDF
order: 74
category:
  - houdini
---

## Description

`float specularBRDF(vector L, vector N, vector V, float rough)`

`specularBRDF`, [phongBRDF](phongBRDF.html), [blinnBRDF](blinnBRDF.html), and
[diffuseBRDF](diffuseBRDF.html) return the computed BRDF for the different
lighting models used in VEX shading. You can use them in custom
[illuminance](illuminance.html "Loops through all light sources in the scene,
calling the light shader for each light source to set the Cl and L global
variables.") loops to replicate the lighting models of the corresponding VEX
lighting functions.

```c
vector nn = normalize(frontface(N, I)); vector ii = normalize(-I); Cf =
0; illuminance(P, nn) { vector ll = normalize(L);  Cf += Cl *
(specularBRDF(ll, nn, ii, rough) + diffuseBRDF(ll, nn)); }
```

## See also

- [phongBRDF](phongBRDF.html)
- [blinnBRDF](blinnBRDF.html)
- [diffuseBRDF](diffuseBRDF.html)
- [illuminance](illuminance.html)

### brdf

[blinnBRDF](blinnBRDF.html)

[diffuseBRDF](diffuseBRDF.html)

[phongBRDF](phongBRDF.html)

[specularBRDF](specularBRDF.html)

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
