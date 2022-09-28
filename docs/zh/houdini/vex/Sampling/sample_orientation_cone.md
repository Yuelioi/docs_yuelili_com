---
title: sample_orientation_cone
order: 26
category:
  - houdini
---
    
## 描述

Generates a uniform unit vector4, within maxangle of center, given a vector of
uniform numbers between 0 and 1.

```c
vector4  sample_orientation_cone(vector4 center, float maxangle, vector u)
```

`center`

Orientation in the center of the cone.This does not need to be normalized.

在圆锥体中心的方向。 这不需要被归一化。

`maxangle`

Maximum angle, in radians, away from `center` that any sample of the conewill
be, so long as all `u` values are between 0 and 1.

圆锥体的任何样本离开中心的最大角度，单位是弧度。

Note

This angle is the maximum quaternion rotation angle between the orientation
quaternion that the output represents and `center`, which is twice the
Euclidean cone angle of the unit 4D hypersphere being sampled. A `maxangle` of
Ï would sample all orientations, but only half of all 4D unit vectors; a
`maxangle` of 2Ï would sample all 4D unit vectors.

的最大角度，只要所有 u 值都在 0 到 1 之间。

`u`

Three numbers between 0 and 1.

这个角度是输出所代表的方向四元数与中心之间的最大四元数旋转角度，它是被采样的单位 4D 超球的欧几里得锥角的两倍。最大角度为 Ï 将对所有方向进行采样，但只对所有 4D 单位向量的一半进行采样；最大角度为 2Ï 将对所有 4D 单位向量进行采样。

Returns a unit vector4, i.e. a vector4 of length 1, based on `u`.Given uniform
random `u` vectors of three values in [0,1), the returned
quaternionorientations will be uniform random and continuous with respect to
`u`,in the region of orientations within `maxangle` of `center`.

三个数字在 0 和 1 之间。
