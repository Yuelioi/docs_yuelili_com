---
title: matchvex_specular
order: 53
category:
  - houdini
---

## Description

`bsdf matchvex_specular(float exponent, ...)`

`bsdf matchvex_specular(vector nml, float exponent, ...)`

![](../../images/rendering/matchvex_specular.png)

The BSDF produced by [specular](specular.html) "Returns a specular BSDF or
computes specular shading.") is not the same as the traditional VEX
`specular()` output. Use this function to produce a closer approximate match
to the traditional VEX `specular()`.

## See also

- [specular](specular.html)
- [Writing a PBR shader](../pbr.html)

### pbr

[albedo](albedo.html)

[ashikhmin](ashikhmin.html)

[blinn](blinn.html)

[bouncelabel](bouncelabel.html)

[bouncemask](bouncemask.html)

[chiang](chiang.html)

[cone](cone.html)

[create_cdf](create_cdf.html)

[create_pdf](create_pdf.html)

[diffuse](diffuse.html)

[eval_bsdf](eval_bsdf.html)

[getbounces](getbounces.html)

[getcomponents](getcomponents.html)

[getlight](getlight.html)

[getlights](getlights.html)

[getlightscope](getlightscope.html)

[getmaterial](getmaterial.html)

[getphotonlight](getphotonlight.html)

[getscope](getscope.html)

[ggx](ggx.html)

[hair](hair.html)

[haslight](haslight.html)

[interpolate](interpolate.html)

[intersect_lights](intersect_lights.html)

[mask_bsdf](mask_bsdf.html)

[matchvex_blinn](matchvex_blinn.html)

[matchvex_specular](matchvex_specular.html)

[nbouncetypes](nbouncetypes.html)

[newsampler](newsampler.html)

[nextsample](nextsample.html)

[normal_bsdf](normal_bsdf.html)

[phong](phong.html)

[phonglobe](phonglobe.html)

[sample_bsdf](sample_bsdf.html)

[sample_cdf](sample_cdf.html)

[sample_geometry](sample_geometry.html)

[sample_light](sample_light.html)

[sample_photon](sample_photon.html)

[shadow_light](shadow_light.html)

[solid_angle](solid_angle.html)

[specular](specular.html)

[split_bsdf](split_bsdf.html)

[sssapprox](sssapprox.html)

[storelightexport](storelightexport.html)

[translucent](translucent.html)

[wireblinn](wireblinn.html)

[wirediffuse](wirediffuse.html)

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
