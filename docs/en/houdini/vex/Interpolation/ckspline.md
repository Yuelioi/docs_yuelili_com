---
title: ckspline
order: 2
category:
  - houdini
---

## Description

To specify the curve using uniformly spaced value keys, use
[cspline](cspline.html "Samples a Catmull-Rom (Cardinal) spline defined by
uniformly spaced keys.").

`float ckspline(float t, float value, float pos, ...)`

`vector ckspline(float t, vector value, float pos, ...)`

`vector4 ckspline(float t, vector4 value, float pos, ...)`

## Arguments

`t`

The position along the spline to sample.

`value`, `pos`, `...`

A series of pairs of key values and positions that defines the curve to
sample.

## Returns

The interpolated value at position `t` along the curve.

Computes a Catmull-Rom (Cardinal) spline between the key points specified. The
values are spaced according to the keys given. The domain of the interpolant
(t) should be between the second and second last key value specified. The keys
should be specified in ascending order or results will be unpredictable.

Because of the nature of the Cardinal spline, the value associated with the
first and last keys will never be returned. However, these keys are used to
determine the shape of the curve on entry and exit. For example:

## Examples ¶

Find the value at position `t` along a curve

```c
Cf = ckspline(t,  {1,1,1}, -0.25, // First key {.5,.5,.5}, 0.0, //
Second key {.5, 0,.5}, 0.25, // Third key {0,0,.8}, 1.0, // Fourth key
{0,0,0}, 1.25 // Fifth key );
```

The Catmull-Rom spline defined by the above keys would be valid for
interpolants in the range 0 to 1. The first and last keys are used solely to
determine the slope of the curve at the second and second last keys.

## See also

- [cspline](cspline.html)

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
