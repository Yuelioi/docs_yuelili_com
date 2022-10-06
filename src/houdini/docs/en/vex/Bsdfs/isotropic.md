---
title: isotropic
order: 14
category:
  - houdini
---

## Description

`bsdf isotropic(...)`

The isotropic function scatters light equally in all directions and is
suitable for use in rendering dense volumetric materials such as smoke. Note
that no normal vector is required to construct an isotropic bsdf since it has
no directionality. The default albedo for an isotropic `bsdf` is 1, which
means the isotropic() function scatters 100% of the incoming light.

## See also

- [henyeygreenstein ](henyeygreenstein.html)
- [specular ](specular.html)
- [phong ](phong.html)
- [Writing a PBR shader ](../pbr.html)

### bsdf

[albedo ](albedo.html)

[ashikhmin ](ashikhmin.html)

[blinn ](blinn.html)

[bouncelabel ](bouncelabel.html)

[bouncemask ](bouncemask.html)

[chiang ](chiang.html)

[cone ](cone.html)

[create_cdf ](create_cdf.html)

[create_pdf ](create_pdf.html)

[cvex_bsdf ](cvex_bsdf.html)

[diffuse ](diffuse.html)

[eval_bsdf ](eval_bsdf.html)

[getbounces ](getbounces.html)

[getcomponents ](getcomponents.html)

[ggx ](ggx.html)

[hair ](hair.html)

[henyeygreenstein ](henyeygreenstein.html)

[isotropic ](isotropic.html)

[mask_bsdf ](mask_bsdf.html)

[nbouncetypes ](nbouncetypes.html)

[normal_bsdf ](normal_bsdf.html)

[phong ](phong.html)

[phonglobe ](phonglobe.html)

[sample_bsdf ](sample_bsdf.html)

[sample_cdf ](sample_cdf.html)

[solid_angle ](solid_angle.html)

[specular ](specular.html)

[split_bsdf ](split_bsdf.html)

[sssapprox ](sssapprox.html)

[translucent ](translucent.html)

### shading

[Du ](Du.html)

[Dv ](Dv.html)

[Dw ](Dw.html)

[area ](area.html)

[ashikhmin ](ashikhmin.html)

[atten ](atten.html)

[blinn ](blinn.html)

[blinnBRDF ](blinnBRDF.html)

[chiang ](chiang.html)

[computenormal ](computenormal.html)

[cone ](cone.html)

[cvex_bsdf ](cvex_bsdf.html)

[diffuse ](diffuse.html)

[diffuseBRDF ](diffuseBRDF.html)

[dsmpixel ](dsmpixel.html)

[environment ](environment.html)

[fastshadow ](fastshadow.html)

[filtershadow ](filtershadow.html)

[filterstep ](filterstep.html)

[fresnel ](fresnel.html)

[frontface ](frontface.html)

[getderiv ](getderiv.html)

[getfogname ](getfogname.html)

[getglobalraylevel ](getglobalraylevel.html)

[getgroupid ](getgroupid.html)

[getlocalcurvature ](getlocalcurvature.html)

[getmaterialid ](getmaterialid.html)

[getobjectid ](getobjectid.html)

[getobjectname ](getobjectname.html)

[getprimid ](getprimid.html)

[getptextureid ](getptextureid.html)

[getraylevel ](getraylevel.html)

[getrayweight ](getrayweight.html)

[getsamplestore ](getsamplestore.html)

[getsmoothP ](getsmoothP.html)

[getuvtangents ](getuvtangents.html)

[ggx ](ggx.html)

[gradient ](gradient.html)

[hair ](hair.html)

[henyeygreenstein ](henyeygreenstein.html)

[isotropic ](isotropic.html)

[israytracing ](israytracing.html)

[isshadingRHS ](isshadingRHS.html)

[lightstate ](lightstate.html)

[matchvex_blinn ](matchvex_blinn.html)

[matchvex_specular ](matchvex_specular.html)

[objectstate ](objectstate.html)

[phong ](phong.html)

[phongBRDF ](phongBRDF.html)

[phonglobe ](phonglobe.html)

[ptexture ](ptexture.html)

[rayhittest ](rayhittest.html)

[rayimport ](rayimport.html)

[reflect ](reflect.html)

[refract ](refract.html)

[renderstate ](renderstate.html)

[resolvemissedray ](resolvemissedray.html)

[sample_geometry ](sample_geometry.html)

[scatter ](scatter.html)

[setsamplestore ](setsamplestore.html)

[specular ](specular.html)

[specularBRDF ](specularBRDF.html)

[sssapprox ](sssapprox.html)

[teximport ](teximport.html)

[texture ](texture.html)

[trace ](trace.html)

[translucent ](translucent.html)

[uvunwrap ](uvunwrap.html)

[volume ](volume.html)

[wireblinn ](wireblinn.html)

[wirediffuse ](wirediffuse.html)
