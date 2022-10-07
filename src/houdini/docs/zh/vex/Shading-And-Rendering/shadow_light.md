---
title: shadow_light
order: 71
category:
  - vex
---



Context(s)
[displace](../contexts/displace.html)
[fog](../contexts/fog.html)
[surface](../contexts/surface.html)

`vector shadow\_light(int lightid, vector pos, vector dir, float time, ...)`

This operation is similar to the shadow() function but it allows execution
of the shadow shader outside an illuminance loop. The position and
direction toward the light source are provided directly, and the shadow
shader is executed - returning the shadow multiplier. To produce the final
shadowed color, multiply the shaded color by the value returned by
shadow_light.

Keyword variadic arguments can be passed to the shadow shader, for import
in the shadow shader with with simport().

## Arguments

`lightid`

A light identifier, as returned by [getlights](getlights.html "Returns an array of light identifiers for the currently shaded surface.").

`pos`

The origin of the ray (such as the global variable `P`).

`dir`

Direction vector from the origin. The length of this vector should be
the distance from _pos_ to the light source.

`time`

Time to send the ray at.



## See also

- [shadow](shadow.html)
- [sample_light](sample_light.html)
- [intersect_lights](intersect_lights.html)

|
light

[ambient](ambient.html)

[atten](atten.html)

[fastshadow](fastshadow.html)

[filtershadow](filtershadow.html)

[getlight](getlight.html)

[getlightid](getlightid.html)

[getlightname](getlightname.html)

[getlights](getlights.html)

[getlightscope](getlightscope.html)

[getmaterial](getmaterial.html)

[getphotonlight](getphotonlight.html)

[getscope](getscope.html)

[haslight](haslight.html)

[interpolate](interpolate.html)

[intersect_lights](intersect_lights.html)

[irradiance](irradiance.html)

[lightbounces](lightbounces.html)

[lightid](lightid.html)

[occlusion](occlusion.html)

[sample_geometry](sample_geometry.html)

[sample_light](sample_light.html)

[sample_photon](sample_photon.html)

[setcurrentlight](setcurrentlight.html)

[shadow_light](shadow_light.html)

[storelightexport](storelightexport.html)

|
pbr

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

|
raytracing

[getlocalcurvature](getlocalcurvature.html)

[getobjectid](getobjectid.html)

[getuvtangents](getuvtangents.html)

[intersect_lights](intersect_lights.html)

[scatter](scatter.html)

[shadow_light](shadow_light.html)

[uvunwrap](uvunwrap.html)
