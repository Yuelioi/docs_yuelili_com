---
title: efit
order: 5
category:
  - houdini
---

## Description

`float efit(float value, float omin, float omax, float nmin, float nmax)`

Takes the value in the range (omin, omax) and shifts it to the corresponding
value in the new range (nmin, nmax). Unlike [fit](fit.html "Takes the value in
one range and shifts it to the corresponding value in a new range."), this
function does not clamp values to the given range.

`<vector> efit(<vector>value, <vector>omin, <vector>omax, <vector>nmin, <vector>nmax)`

`<vector> efit(<vector>value, <vector>omin, <vector>omax, float nmin, float nmax)`

The vector versions fit per-component. You can specify per-component min/max
values using vectors, or common min/max values using floats.

## Examples ¶

```c
efit(.3, 0, 1, 10, 20) == 13
```

## See also

- [clamp](clamp.html)
- [fit](fit.html)
- [fit01](fit01.html)
- [fit10](fit10.html)
- [fit11](fit11.html)

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
