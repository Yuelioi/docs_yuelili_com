---
title: cspline
order: 4
category:
  - houdini
---

## Description

To specify the curve using unevenly spaced keys, use [ckspline](ckspline.html "Samples a Catmull-Rom (Cardinal) spline defined by position/value keys.").

`float cspline(float t, float val1, ...)`

`vector cspline(float t, vector val1, ...)`

`vector4 cspline(float t, vector4 val1, ...)`

## Arguments

`t`

The position along the spline to sample.

`val1`, `val2`, `...`

A series of of key values. The keys are assumed to be uniformly spaced along a
range from 0 to 1.

## Returns

The interpolated value at position `t` along the curve.

Computes a Catmull-Rom (Cardinal) spline between the key points specified.

Because of the nature of the Cardinal spline, the value associated with the
first and last keys will never be returned. However, these keys are used to
determine the shape of the curve on entry and exit.

## See also

- [ckspline](ckspline.html)

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
