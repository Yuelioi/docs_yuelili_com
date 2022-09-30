---
title: fit
order: 6
category:
  - houdini
---

## Description

`float fit(float value, float omin, float omax, float nmin, float nmax)`

`<vector> fit(<vector>value, <vector>omin, <vector>omax, <vector>nmin, <vector>nmax)`

Takes the value in the range (omin, omax) and shifts it to the corresponding
value in the new range (nmin, nmax).

The function clamps the given value the range (omin, omax) before fitting, so
the resulting value will be guaranteed to be in the range (nmin, nmax). To
avoid clamping use [efit](efit.html "Takes the value in one range and shifts
it to the corresponding value in a new range.") instead.

## Examples ¶

```c
fit(.3, 0, 1, 10, 20) == 13
```

## See also

- [clamp](clamp.html)
- [fit01](fit01.html)
- [fit10](fit10.html)
- [fit11](fit11.html)
- [efit](efit.html)

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
