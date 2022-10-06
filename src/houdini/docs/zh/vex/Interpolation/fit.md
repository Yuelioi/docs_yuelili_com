---
title: fit
order: 5
category:
  - houdini
---
    
## 描述

Takes the value in one range and shifts it to the corresponding value in a new
range.

```c
float  fit(float value, float omin, float omax, float nmin, float nmax)
```

`<vector> fit(<vector>value, <vector>omin, <vector>omax, <vector>nmin, <vector>nmax)`

Takes the value in the range (omin, omax) and shifts it to the corresponding
value in the new range (nmin, nmax).

获取范围(opmin,max)中的值，并将其移至新范围(nmin,nmax)中的相应值。

The function clamps the given value the range (omin, omax) before fitting, so
the resulting value will be guaranteed to be in the range (nmin, nmax). To
avoid clamping use [efit](efit.html "Takes the value in one range and shifts
it to the corresponding value in a new range.") instead.

该函数在拟合前将给定值夹在(opmin,max)范围内，所以结果值将被保证在(nmin,nmax)范围内。要避免夹紧，请使用 efitinstead。

## Examples

    fit(.3, 0, 1, 10, 20) == 13
