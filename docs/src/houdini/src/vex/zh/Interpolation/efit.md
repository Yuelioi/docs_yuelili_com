---
title: efit
order: 5
category:
  - vex
---

`float efit(float value, float omin, float omax, float nmin, float nmax)`

获取范围内的值（opmin, omax）并将其移至新范围内的相应值（nmin, nmax）。与 [fit](fit.html) () ("取一个范围内的值并将其移至新范围内的相应值。") 不同的是，这个函数并不将值限定在给定的范围内。

`<vector> efit(<vector>value, <vector>omin, <vector>omax, <vector>nmin, <vector>nmax)`

`<vector> efit(<vector>value, <vector>omin, <vector>omax, float nmin, float nmax)`

矢量版本适合每一个组件。你可以用矢量指定每个组件的最小/最大值，或用浮点指定共同的最小/最大值。

## Examples



```c
efit(.3, 0, 1, 10, 20) == 13

```

## See also

- [clamp](clamp.html)
- [fit](fit.html)
- [fit01](fit01.html)
- [fit10](fit10.html)
- [fit11](fit11.html)

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
