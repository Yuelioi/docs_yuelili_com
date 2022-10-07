---
title: sample_cdf
order: 8
category:
  - vex
---



On this page

- [Overview](#overview)
- [Usage](#usage)

##

Overview

[¶](#overview)

Use this function to sample values from a CDF array created with the [create_cdf](create_cdf.html "Creates a cumulative distribution function (CDF) from an array of probability density function (PDF) values.") function. See [create_cdf](create_cdf.html "Creates a cumulative distribution function (CDF) from an array of probability density function (PDF) values.") for more information.

See the [create_cdf](create_cdf.html "Creates a cumulative distribution function (CDF) from an array of probability density function (PDF) values.") function docs for example code.

##

Usage

[¶](#usage)

`int sample\_cdf(float cdf[], float uniform\_rand)`

Returns the index of the sampled CDF.

`void sample\_cdf(float cdf[], float uniform\_rand, int &index, float &x)`

Writes the index of the sampled CDF and value to output arguments.

`void sample\_cdf(float cdf[], float uniform\_rand, int &index, float &x, float &pdf)`

Writes the index of the sampled CDF, the sampled value, and the corresponding PDF to output arguments.

## Arguments

`cdf`

The CDF to sample from (create this using [create_cdf](create_cdf.html "Creates a cumulative distribution function (CDF) from an array of probability density function (PDF) values.")).

`uniform_rand`

A uniform random variable (must be in range 0 to 1).

`&index`

Outputs the index of the sampled CDF element.

`&x`

Outputs the value of the sampled CDF element.

`&pdf`

Outputs the PDF of the sampled CDF element.

## Returns

The first form returns the index of the sampled value. The other forms write the index to an output argument instead.



## See also

- [create_cdf](create_cdf.html)
- [create_pdf](create_pdf.html)

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
