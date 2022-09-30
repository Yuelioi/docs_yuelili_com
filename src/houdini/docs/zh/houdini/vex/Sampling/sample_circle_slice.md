---
title: sample_circle_slice
order: 12
category:
  - houdini
---
    
## 描述

Generates a uniform vector2 with length < 1, within maxangle of center, given
a vector2 of uniform numbers between 0 and 1.

```c
vector2  sample_circle_slice(vector2 center, float maxangle, vector2 u)
```

`center`

Direction in the center of the slice.This does not need to be normalized.

切片中心的方向。 这不需要被归一化。

`maxangle`

Maximum angle, in radians, away from `center` that any sample of the slicewill
be, so long as all `u` values are between 0 and 1.

只要所有的 u 值都在 0 到 1 之间，切片的任何样本离开中心的最大角度，单位是弧度。

`u`

Pair of numbers between 0 and 1.

的最大角度，只要所有 u 值都在 0 和 1 之间。

Returns a vector2 of length < 1, based on `u`.Given uniform random `u` pairs
of values in [0,1), the returned vectors will beuniform random and continuous
with respect to `u` inside the unit circle,in the slice within `maxangle` of
the direction indicated by `center`.

一对 0 到 1 之间的数字。
