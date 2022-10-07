---
title: intersect_lights
order: 40
category:
  - vex
---



Context(s)
[displace](../contexts/displace.html)
[fog](../contexts/fog.html)
[surface](../contexts/surface.html)

::: info Note

This function only works with area lights.

`int intersect\_lights(int lightids[], vector pos, vector dir, float time, int &idx, float &dist, vector &clr, float &scale, ...)`

## Arguments

`lightids`

An array of light IDs, as returned by [getlights](getlights.html "Returns an array of light identifiers for the currently shaded surface.").

`pos`

The origin of the ray (such as the global variable `P`).

`dir`

Direction vector from the origin. The length of this vector does not affect
the distance the ray will travel.

`time`

Time to send the ray at.

The function modifies the values of the following arguments:

## Arguments

`idx`

The light index for the light that was hit by the ray, or -1 if no intersection was found.

`dist`

The distance to the nearest intersected light.

`clr`

The light color set by the light shader.

`scale`

The light average hemispherical intensity (for area lights).

## Returns

A [component bitmask](bouncemask.html) indicating what types of component bounces the light affects,
or `0` if the ray did not hit a light.



## See also

- [getlights](getlights.html)
- [getlightname](getlightname.html)
- [sample_light](sample_light.html)

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
