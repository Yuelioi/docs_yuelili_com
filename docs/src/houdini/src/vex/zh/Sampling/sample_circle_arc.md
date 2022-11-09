---
title: sample_circle_arc
order: 9
category:
  - vex
---

`vector2 sample_circle_arc(vector2 center, float maxangle, float u)`

## Arguments

`center`

弧线中心的方向。这不需要被规范化。

`maxangle`

只要 "u "在 0 和 1 之间，弧线的任何样本离开 "中心 "的最大角度，单位是弧度。

`u`

0 和 1 之间的数字。

返回一个单位向量 2，即长度为 1 的向量 2，基于`u`。给定在`[0,1)`中的均匀随机的`u'值，返回的单位向量将是均匀随机的，并且相对于`u'在单位圆的边缘，在`中心'指示的方向的`maxangle'内的圆弧上是连续的。

## See also

- [sample_circle_edge_uniform](sample_circle_edge_uniform.html)
- [sample_direction_uniform](sample_direction_uniform.html)
- [sample_orientation_uniform](sample_orientation_uniform.html)
- [sample_circle_uniform](sample_circle_uniform.html)
- [sample_sphere_uniform](sample_sphere_uniform.html)
- [sample_hypersphere_uniform](sample_hypersphere_uniform.html)
- [sample_direction_cone](sample_direction_cone.html)
- [sample_orientation_cone](sample_orientation_cone.html)
- [sample_circle_slice](sample_circle_slice.html)
- [sample_sphere_cone](sample_sphere_cone.html)
- [sample_hypersphere_cone](sample_hypersphere_cone.html)
