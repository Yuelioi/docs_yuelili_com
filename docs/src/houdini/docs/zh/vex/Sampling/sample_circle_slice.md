---
title: sample_circle_slice
order: 12
category:
  - vex
---

`vector2 sample\_circle\_slice(vector2 center, float maxangle, vector2 u)`

## Arguments

`center`

切片中心的方向。这不需要被规范化。

`maxangle`

只要所有的 "u "值都在 0 到 1 之间，切片的任何样本都会偏离 "中心 "的最大角度，单位是弧度。

`u`

0 和 1 之间的一对数字。

返回一个长度<1 的向量 2，基于`u`。给出`[0,1)`中的均匀随机的`u`对值，返回的向量将是均匀随机的，并且相对于单位圆内的`u`是连续的，在`中心'指示的方向的`最大角度'内的切片。

## See also

- [sample_circle_edge_uniform](sample_circle_edge_uniform.html)
- [sample_direction_uniform](sample_direction_uniform.html)
- [sample_orientation_uniform](sample_orientation_uniform.html)
- [sample_circle_uniform](sample_circle_uniform.html)
- [sample_sphere_uniform](sample_sphere_uniform.html)
- [sample_hypersphere_uniform](sample_hypersphere_uniform.html)
- [sample_circle_arc](sample_circle_arc.html)
- [sample_direction_cone](sample_direction_cone.html)
- [sample_orientation_cone](sample_orientation_cone.html)
- [sample_sphere_cone](sample_sphere_cone.html)
- [sample_hypersphere_cone](sample_hypersphere_cone.html)
