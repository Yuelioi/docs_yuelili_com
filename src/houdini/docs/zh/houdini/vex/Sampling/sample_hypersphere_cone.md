---
title: sample_hypersphere_cone
order: 20
category:
  - houdini
---
    
## 描述

Generates a uniform vector4 with length < 1, within maxangle of center, given
a vector4 of uniform numbers between 0 and 1.

```c
vector4  sample_hypersphere_cone(vector4 center, float maxangle, vector4 u)
```

`center`

Direction in the center of the cone.This does not need to be normalized.

在圆锥体中心的方向。 这不需要进行归一化处理。

`maxangle`

Maximum angle, in radians, away from `center` that any sample of the conewill
be, so long as all `u` values are between 0 and 1.

锥体的任何样本离开中心的最大角度，以弧度为单位。

`u`

Four numbers between 0 and 1.

的最大角度，只要所有 u 值都在 0 和 1 之间。

Returns a vector4 of length < 1, based on `u`.Given uniform random `u` vectors
of four values in [0,1), the returned vectors will beuniform random and
continuous with respect to `u` inside the unit hypersphere,in the hypervolume
within `maxangle` of the direction indicated by `center`.

四个数字在 0 到 1 之间。
