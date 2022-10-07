---
title: lkspline
order: 12
category:
  - vex
---

`float lkspline(float sample\_pos, float value1, float key\_pos1, ...)`

Samples a polyline defined by a series of value/position pairs.
This is useful for specifying a 1D data ramp.

`vector lkspline(float sample\_pos, vector value1, float key\_pos1, ...)`

`vector4 lkspline(float sample\_pos, vector4 value1, float key\_pos1, ...)`

Samples a polyline defined by a series of vector value/position pairs.
This is useful for specifying a color ramp.

If you just want linearly spaced keys, use [lspline](lspline.html) ("Samples a polyline defined by linearly spaced values.") instead.

## Arguments

`sample_pos`

The position along the curve at which to sample.

`valuen`, `key_posn`

To define the shape of the curve, you pass a number of value/position pairs specifying the key points through which the curve passes.

You must specify key positions in ascending order or the results will be unpredictable.

## Returns

The value of the curve at the sampled position.

:::tip

The [spline](spline.html) ("Samples a value along a polyline or spline curve.") function is a more flexible superset of this function.

## See also

- [spline](spline.html)
- [kspline](kspline.html)

|
interp

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

|
spline

[ckspline](ckspline.html)

[cspline](cspline.html)

[kspline](kspline.html)

[lkspline](lkspline.html)

[lspline](lspline.html)

[spline](spline.html)

[spline_cdf](spline_cdf.html)
