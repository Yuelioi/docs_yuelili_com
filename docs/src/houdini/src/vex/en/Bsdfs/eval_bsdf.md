---
title: eval_bsdf
order: 9
category:
  - vex
---

On this page

- [Variadic arguments](#variadic-arguments)
- [Examples](#examples)

`vector eval_bsdf(bsdf b, vector viewer, vector light, ...)`

`vector eval_bsdf(bsdf b, vector viewer, vector light, int mask, ...)`

`vector eval_bsdf(bsdf b, vector viewer, vector light, float &pdf, int mask, ...)`

`vector eval_bsdf(bsdf b, vector viewer, vector light, vector normal, ...)`

`vector eval_bsdf(bsdf b, vector viewer, vector light, vector normal, int mask, ...)`

`vector eval_bsdf(bsdf b, vector viewer, vector light, vector normal, float &pdf, int mask, ...)`

## Arguments

`b`

BSDF to evaluate.

`viewer`

Vector toward viewer.

`light`

Vector toward light.

`normal`

Surface normal.

`mask`

A bitmask indicating which types of shading component bounces to evaluate.

See [bouncemask](bouncemask.html) for information on component label bitmasks.

`&pdf`

The function overwrites this variable with the computed PDF for the given directions, scaled by the albedo.

##

Variadic arguments

[¶](#variadic-arguments)

The `eval_bsdf` function passes any extra `"name", value` argument pairs to the BSDF being
evaluated. For custom BSDFs these keyword arguments are bound to shader
arguments (e.g. indicating whether the BSDF is being evaluated for direct or
indirect illumination). It’s also possible for a BSDF to pass information back
to `eval_bsdf`. To indicate that a keyword argument value should be imported
from the BSDF prefix the keyword with “import:”

##

Examples

[¶](#examples)

```c
v = eval_bsdf(F, inI, dir,
 "direct", 0, // Specify indirect illumination
 "import:sssmfp", sssmfp, // Read the exported sssmfp parameter
 ...
);

```

## See also

- [albedo](albedo.html)
- [sample_bsdf](sample_bsdf.html)
- [emission_bsdf()](emission_bsdf.html)

|
bsdf

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

|
labels

[bouncemask](bouncemask.html)

[eval_bsdf](eval_bsdf.html)

[getbounces](getbounces.html)

[getcomponents](getcomponents.html)

[nbouncetypes](nbouncetypes.html)

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
