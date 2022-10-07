---
title: fit
order: 6
category:
  - vex
---

`float fit(float value, float omin, float omax, float nmin, float nmax)`

`<vector> fit(<vector>value, <vector>omin, <vector>omax, <vector>nmin, <vector>nmax)`

获取范围内的值（opmin, omax），并将其移到新范围内的相应值（nmin, nmax）。

该函数在拟合前将给定的值夹在(opmin, omax)范围内，所以结果值将被保证在(nmin, nmax)范围内。要避免夹紧，请使用 [efit](efit.html) () ("获取一个范围内的值并将其转移到一个新范围内的相应值。") 来代替。

## Examples



```c
fit(.3, 0, 1, 10, 20) == 13

```

## See also

- [clamp](clamp.html)
- [fit01](fit01.html)
- [fit10](fit10.html)
- [fit11](fit11.html)
- [efit](efit.html)

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
