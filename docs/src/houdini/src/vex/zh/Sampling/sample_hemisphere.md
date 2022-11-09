---
title: sample_hemisphere
order: 19
category:
  - vex
---

`vector sample_hemisphere(vector2 u)`

`vector sample_hemisphere(vector center, vector2 u)`

`vector sample_hemisphere(float bias, vector2 u)`

`vector sample_hemisphere(vector center, float bias, vector2 u)`

## Arguments

`center`

半球中心的方向。这不需要被归一化。如果不指定，中心方向是（1,0,0），沿 X 轴。

`bias`

`sample_sphere_cone`, and related functions, apply the same change to `u.x`
对中心方向的偏置，在-1 和无穷大之间，0 是无偏置的，-1 强迫所有的点到地平线，无穷大强迫所有的点到中心。当提供时，`u.y`被简单地替换为`1-pow(1-u.y, 1.0/(bias+1.0))`。在使用更通用的`sample_direction_cone'时，为了得到与此类似的偏置，在调用这些函数之前。

`u`

0 和 1 之间的一对数字。

返回一个单位向量，即长度为 1 的向量，基于`u`。给出在`[0,1)`中的均匀随机的`u`对值，如果`bias`为 0，返回的单位向量将是均匀随机的，并且相对于`u`在以`中心`为中心的单位半球的表面上是连续的。如果 bias 大于 0，单位向量将平滑地偏向`中心'。如果偏差在-1和0之间，单位向量将偏离`中心`，偏向地平线。

## See also

- [sample_direction_uniform](sample_direction_uniform.html)
- [sample_direction_cone](sample_direction_cone.html)
- [sample_sphere_uniform](sample_sphere_uniform.html)
- [sample_sphere_cone](sample_sphere_cone.html)
- [rand](rand.html)
