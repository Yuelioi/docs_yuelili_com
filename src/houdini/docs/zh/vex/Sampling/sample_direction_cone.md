---
title: sample_direction_cone
order: 14
category:
  - houdini
---
    
## 描述

Generates a uniform unit vector, within maxangle of center, given a vector2 of
uniform numbers between 0 and 1.

```c
vector  sample_direction_cone(vector center, float maxangle, vector2 u)
```

`center`

Direction in the center of the cone.This does not need to be normalized.

在圆锥体中心的方向。 这不需要进行归一化处理。

`maxangle`

Maximum angle, in radians, away from `center` that any sample of the conewill
be, so long as all `u` values are between 0 and 1.

锥体的任何样本离开中心的最大角度，以弧度为单位。

`u`

Pair of numbers between 0 and 1.

的最大角度，只要所有 u 值都在 0 和 1 之间。

Returns a unit vector, i.e. a vector of length 1, based on `u`.Given uniform
random `u` pairs of values in [0,1), the returned unit vectors will beuniform
random and continuous with respect to `u` on the surface of the unit sphere,in
the area within `maxangle` of the direction indicated by `center`.

一对 0 到 1 之间的数字。
