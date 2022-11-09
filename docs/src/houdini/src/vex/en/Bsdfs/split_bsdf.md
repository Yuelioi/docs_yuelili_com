---
title: split_bsdf
order: 21
category:
  - vex
---

`void split_bsdf(bsdf &lobes[], bsdf source, float &weights[])`

`void split_bsdf(bsdf &lobes[], bsdf source, float &weights[], int mask)`

`void split_bsdf(bsdf &lobes[], bsdf source, float &weights[], int mask, int type)`

`void split_bsdf(bsdf &lobes[], bsdf source, float &weights[], int mask, int type, float u)`

`void split_bsdf(bsdf &lobes[], bsdf source, float &weights[], int mask, int type, float u, float cdf[])`

## Arguments

`&lobes`

The function overwrites this array with the BSDFs for the component lobes.

`source`

The BSDF to split.

`weights`

The function fills this array with the weights for the split lobes (same length as the returned `bsdf` array). When you sample Illumination using the returned lobes you must scale it by these weights.

`mask`

A bitmask indicating which types of bounces to evaluate.

See [bouncemask](bouncemask.html) for information on component label bitmasks.

`type`

How to split the lobes. You can `#import "pbr.h"` to get constant values representing the different split types:

- `PBR_SPLIT_FULL = 0`
- `PBR_SPLIT_RANDOM = 1`
- `PBR_SPLIT_ALBEDO = 2`
- `PBR_SPLIT_COMPONENT = 3`
- `PBR_SPLIT_DEFAULT = PBR_SPLIT_ALBEDO`

`u`

Random value to sample the CDF at.

`cdf`

CDF used to control sampling among components of the BSDF.

## Returns

An array of `bsdf` objects representing the lobes.

##

Examples

[¶](#examples)

```c
// Split BSDF into component lobes
float weights[];
bsdf lobes[];
split_bsdf(lobes, hitF, weights);

// Get albedos of lobes
float albedos[];
resize(albedos, len(lobes));
for (int i = 0; i < len(lobes); i++)
{
 albedos[i] = luminance(albedo(lobes[i], -hitnI)) \* weights[i];
}

// Compute CDF
float cdf[] = compute_cdf(albedos);

// Randomly select a BSDF based on albedo distribution
int index = 0;
sample_cdf(cdf, s.x, index);

// Do something with the selected BSDF
// lobes[index] ...

```

## See also

- [sample_bsdf](sample_bsdf.html)
- [eval_bsdf](eval_bsdf.html)
- [albedo](albedo.html)
- [create_cdf](create_cdf.html)
- [sample_cdf](sample_cdf.html)

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
sampling

[create_cdf](create_cdf.html)

[create_pdf](create_pdf.html)

[newsampler](newsampler.html)

[nextsample](nextsample.html)

[sample_bsdf](sample_bsdf.html)

[sample_cdf](sample_cdf.html)

[sample_geometry](sample_geometry.html)

[sample_light](sample_light.html)

[sample_photon](sample_photon.html)

[solid_angle](solid_angle.html)

[spline_cdf](spline_cdf.html)

[split_bsdf](split_bsdf.html)
