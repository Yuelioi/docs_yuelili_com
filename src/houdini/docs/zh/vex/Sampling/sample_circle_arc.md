---
title: sample_circle_arc
order: 9
category:
  - houdini
---
    
## 描述

Generates a uniform unit vector2, within maxangle of center, given a uniform
number between 0 and 1.

```c
vector2  sample_circle_arc(vector2 center, float maxangle, float u)
```

`center`

Direction in the center of the arc.This does not need to be normalized.

弧线中心的方向。 这不需要进行归一化处理。

`maxangle`

Maximum angle, in radians, away from `center` that any sample of the arcwill
be, so long as `u` is between 0 and 1.

弧线的任何样本离开中心的最大角度，单位是弧度，只要在 0 和 1 之间。

`u`

Number between 0 and 1.

将是，只要是在 0 和 1 之间。

Returns a unit vector2, i.e. a vector2 of length 1, based on `u`.Given uniform
random `u` values in [0,1), the returned unit vectors will beuniform random
and continuous with respect to `u` on the edge of the unit circle,in the arc
within `maxangle` of the direction indicated by `center`.

0 和 1 之间的数字。
