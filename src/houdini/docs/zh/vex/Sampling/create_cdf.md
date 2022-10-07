---
title: create_cdf
order: 2
category:
  - vex
---



On this page

- [Overview](#overview)
- [Usage](#usage)
- [Examples](#examples)

##

Overview

[¶](#overview)

CDFs are useful when sampling from distributions. For example, you could create a CDF of light source power. This would allow sampling of lights with a probability based on power. This is an example of a discrete CDF, where sampling selects among a fixed set of probabilities. (See the example below.)

Use the [sample_cdf](sample_cdf.html "Samples a cumulative distribution function (CDF).") function to sample values from the returned CDF array.

##

Usage

[¶](#usage)

`float [] create\_cdf(float pdf[])`

Returns a CDF for the input PDF as an array of floats.

## Arguments

`pdf`

Array of PDF values to create the CDF for.

## Examples

[¶](#examples)

```c
// Iterate over all lights, sampling their power
int[] li = getlights();
float values[];
resize(values, len(li));
int nsamples = 256;
int sid = israytrace ? SID : newsampler();
vector s, pos, clr;
float scale;
for (int i = 0; i < len(li); i++)
{
 for (int j = 0; j < nsamples; j++)
 {
 nextsample(sid, s.x, s.y, "mode", "nextpixel");
 sample\_light(li[i], P, s, Time, pos, clr, scale);
 values[i] += luminance(clr);
 }
 values[i] /= nsamples;
}

// Create a CDF of the power distribution
float cdf[] = create\_cdf(values);

// Randomly select a light based on power distribution
nextsample(sid, s.x, s.y, "mode", "nextpixel");
int index = 0;
sample\_cdf(cdf, s.x, index);

// Do something with the selected light
// li[index] ...

```



## See also

- [create_pdf](create_pdf.html)
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
