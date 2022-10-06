---
title: lspline
order: 13
category:
  - houdini
---

## Description

`float lspline(float sample_pos, float value1, ...)`

Samples a polyline defined by a series of (linearly spaced) values. This is
useful for specifying a 1D data ramp.

`vector lspline(float sample_pos, vector value1, ...)`

`vector4 lspline(float sample_pos, vector4 value1, ...)`

Samples a polyline defined by a series of (linearly spaced) vector values.
This is useful for specifying a color ramp.

If you need variably-spaced keys, use [lkspline](lkspline.html "Samples a
polyline between the key points.") instead.

## Arguments

`sample_pos`

The position along the curve at which to sample the value.

`valuen`

To define the shape of the curve, you pass a number of values specifying the
key points through which the curve passes. The function automatically spaces
the keys evenly.

:::tip

The [spline](spline.html "Samples a value along a polyline or spline curve.")
function is a more flexible superset of this function.
:::

## See also

- [spline](spline.html)

### interp

[ckspline](ckspline.html)

[clamp](clamp.html)

[cspline](cspline.html)

[efit](efit.html)

[fit](fit.html)

[fit01](fit01.html)

[fit10](fit10.html)

[fit11](fit11.html)

[invlerp](invlerp.html)

[lerp](lerp.html)

[lkspline](lkspline.html)

[lspline](lspline.html)

[slerp](slerp.html)

[smooth](smooth.html)

### spline

[ckspline](ckspline.html)

[cspline](cspline.html)

[kspline](kspline.html)

[lkspline](lkspline.html)

[lspline](lspline.html)

[spline](spline.html)

[spline_cdf](spline_cdf.html)
