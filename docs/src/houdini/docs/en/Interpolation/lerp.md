---
title: lerp
order: 11
category:
  - vex
---

`float lerp(float value1, float value2, float amount)`

Performs linear interpolation between the values.

`<vector> lerp(<vector>value1, <vector>value2, float amount)`

Performs linear interpolation between corresponding components.

`<vector> lerp(<vector>value1, <vector>value2, <vector>amount)`

Performs linear interpolation between corresponding components by specific amounts for each component pair.

`bsdf lerp(bsdf bsdf1, bsdf bsdf2, float amount)`

Returns a BSDF that linearly interpolates between the output of the two given BSDFS.

## Arguments

`amount`

If the amount is outside the range 0 to 1, the values will be extrapolated linearly.

If amount is 0, the first value is returned. If it is 1, the second value is returned.

## See also

- [slerp](slerp.html)
- [invlerp](invlerp.html)

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
