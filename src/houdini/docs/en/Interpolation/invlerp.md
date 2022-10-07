---
title: invlerp
order: 10
category:
  - vex
---

Since

18.5

`float invlerp(float a, float min, float max)`

`<vector> invlerp(<vector>a, <vector>min, <vector>max)`

Returns the amount to mix `min` and `max` to generate the
input value `a`. This is the inverse of the `lerp` function.

The vector version operates component-wise, so the resulting
vector will be the independent mixing amount for each dimension.

If `a` is outside the range `min` to `max`, values greater than
`1` or less than `0` will be produced.

If `min` and `max` are equal, the mixing value is `0.5`.

## See also

- [lerp](lerp.html)

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
