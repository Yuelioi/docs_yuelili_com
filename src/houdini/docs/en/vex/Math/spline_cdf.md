---
title: spline_cdf
order: 70
category:
  - houdini
---

## Description

On this page

- Overview

- Usage

Since 18.5

### Overview ¶

Whereas the [create_cdf](create_cdf.html "Creates a cumulative distribution
function (CDF) from an array of probability density function (PDF)
values.") function creates a CDF from sample values, this functions creates a
CDF by randomly sampling a curve defined by a list of `values` and
corresponding `positions` (similar to a Ramp parameter).

See the [create_cdf](create_cdf.html "Creates a cumulative distribution
function (CDF) from an array of probability density function (PDF)
values.") function docs for example code using a CDF.

### Usage ¶

`float [] spline_cdf(string bases[], float values[], float positions[], ...)`

Takes an array of bases, an array of key values, a corresponding array of key
positions, and an optionally an int, res (resolution), corresponding to the
number of samples to build the CDF with. Function samples the spline according
to the resolution, then creates and returns a CDF from said samples. Note that
there is only support for single dimension splines.

## Arguments

`bases`

An array of strings describing how to interpret the corresponding `values`:
each string can be `"constant"`, `"linear"`, `"cubic"` (or `"catmullrom"`,
`"cspline"`), `"linearsolve"` (or `"solvelinear"`), or `"monotonecubic"`. See
the [spline](spline.html "Samples a value along a polyline or spline curve.")
function docs for information on how these options control the interpretation
of the values.

"res", `=128`

When building a CDF, some splines may require more samples to accurately
represent the spline. The `res` (resolution) controls how many samples the
function takes when constructing the CDF (and consequently the size of the
CDF). The default is 128.

## Returns

A float array representing a CDF (like the array returned by
[create_cdf](create_cdf.html "Creates a cumulative distribution function
(CDF) from an array of probability density function (PDF) values.")).

## See also

- [spline](spline.html)
- [create_cdf](create_cdf.html)

### sampling

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

### spline

[ckspline](ckspline.html)

[cspline](cspline.html)

[kspline](kspline.html)

[lkspline](lkspline.html)

[lspline](lspline.html)

[spline](spline.html)

[spline_cdf](spline_cdf.html)
