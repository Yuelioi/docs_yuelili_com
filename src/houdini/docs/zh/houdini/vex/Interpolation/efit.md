---
title: efit
order: 4
category:
  - houdini
---
    
## 描述

Takes the value in one range and shifts it to the corresponding value in a new
range.

```c
float  efit(float value, float omin, float omax, float nmin, float nmax)
```

Takes the value in the range (omin, omax) and shifts it to the corresponding
value in the new range (nmin, nmax).Unlike [fit](fit.html "Takes the value in
one range and shifts it to the corresponding value in a new range."), this
function does not clamp values to the given range.

取范围内的值(opmin,max)并将其移至新范围内的相应值(nmin,nmax)。

`<vector> efit(<vector>value, <vector>omin, <vector>omax, <vector>nmin, <vector>nmax)`

`<vector> efit(<vector>value, <vector>omin, <vector>omax, float nmin, float nmax)`

The vector versions fit per-component. You can specify per-component min/max
values using vectors, or common min/max values using floats.

与 efit 不同的是，这个函数并不将数值锁定在给定的范围内。

## Examples

    efit(.3, 0, 1, 10, 20) == 13
