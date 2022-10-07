---
title: ggx
order: 11
category:
  - houdini
---

## Description

Since 18.0

`bsdf ggx(vector ng, vector nn, vector xg, vector yg, vector F0, vector F90, float alphax, float alphay, int masking, int fresblend, float eta, float reflect, float refract, int reflectmask, int refractmask, float dispersion, ...)`

Creates a BSDF for computation of the GGX microfacet model, used for rough
specular reflection and refraction.

See [writing a PBR shader](../pbr.html) for information on BSDFs.

## Arguments

`ng`

Normalized geometry normal

`nn`

Normalized bumped/shading normal

`xg`

Normalized x tangent vector

`yg`

Normalized y tangent vector

`F0`

Color tint at oblique angles

`F90`

Color tint at grazing angles

`alphax`

Roughness along the x tangent vector

`alphay`

Roughness along the y tangent vector (use the same value as alphax for
isotropic)

`masking`

Enable/Disable microfacet masking

`fresblend`

Enable/Disable fresnel

`eta`

Index of refraction

`reflect`

Explicit scalar on reflection (0->1). Or -1 to let the function decide itself
on the appriate value based on geometric information.

`refract`

Explicit scalar on refraction (0->1). Or -1 to let the function decide itself
on the appriate value based on geometric information.

`reflectmask`

Bitmask representing the desired reflection behaviour. Simply passing in
`bouncemask(reflectlabel)` will suffice

`refractmask`

Bitmask representing the desired refraction behaviour. Simply passing in
`bouncemask(refractlabel)` will suffice

`dispersion`

Amount of dispersion

### Light inclusion/exclusion options ¶

## Arguments

"`categories`", `string` `="*"`

Specifies lights to include/exclude by their “category” tags. This is the
preferred include/exclude lights rather than pattern matching light names with
the `"lightmask"` keyword argument.

For example:

```c
diff = diffuse(nml, "lightmask", "hero fill");
```

See [light categories](../../render/lights.html#categories) for more
information.

"`lightmask`", `string` `="*"`

When evaluating light and shadow shaders, objects have pre-defined light
masks. This mask is usually specified in the geometry object and specifies a
list of lights which are used to illuminate a surface or fog shader. It is
possible to override the default light mask by specifying a “lightmask”
argument.

For example:

```c
diff = diffuse(nml, "lightmask", "light*,^light2");
```

…will cause all lights whose names begin with “light” except for a light named
“light2” to be considered for diffuse illumination.

All Houdini scoping patterns, excepting group expansion, are supported:

- `*` \- wild-card match

- `?` \- single character match

- `^` \- exclusion operator

- `[list]` \- character list match

## See also

- [Writing a PBR shader](../pbr.html)

### bsdf

[albedo](albedo.html)

[ashikhmin](ashikhmin.html)

[blinn](blinn.html)

[bouncelabel](bouncelabel.html)

[bouncemask](bouncemask.html)

[chiang](chiang.html)

[cone](cone.html)

[create_cdf](create_cdf.html)

[create_pdf](create_pdf.html)

[cvex_bsdf](cvex_bsdf.html)

[diffuse](diffuse.html)

[eval_bsdf](eval_bsdf.html)

[getbounces](getbounces.html)

[getcomponents](getcomponents.html)

[ggx](ggx.html)

[hair](hair.html)

[henyeygreenstein](henyeygreenstein.html)

[isotropic](isotropic.html)

[mask_bsdf](mask_bsdf.html)

[nbouncetypes](nbouncetypes.html)

[normal_bsdf](normal_bsdf.html)

[phong](phong.html)

[phonglobe](phonglobe.html)

[sample_bsdf](sample_bsdf.html)

[sample_cdf](sample_cdf.html)

[solid_angle](solid_angle.html)

[specular](specular.html)

[split_bsdf](split_bsdf.html)

[sssapprox](sssapprox.html)

[translucent](translucent.html)

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
