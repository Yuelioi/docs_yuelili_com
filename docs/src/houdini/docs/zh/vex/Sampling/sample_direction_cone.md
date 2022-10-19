---
title: sample_direction_cone
order: 14
category:
  - vex
---

`vector sample\_direction\_cone(vector center, float maxangle, vector2 u)`

## Arguments

`center`

在圆锥体中心的方向。这不需要被归一化。

`maxangle`

只要所有的 "u "值在 0 到 1 之间，圆锥体的任何样本离开 "中心 "的最大角度，单位是弧度。

`u`

0 和 1 之间的一对数字。

返回一个单位向量，即长度为 1 的向量，基于`u`。给出在`[0,1)`中的均匀随机的`u`对值，返回的单位向量将是均匀随机的，并且在单位球体表面上相对于`u`是连续的，在`中心'指示的方向的`maxangle`内的区域。

## See also

- [sample_circle_edge_uniform](sample_circle_edge_uniform.html)
- [sample_direction_uniform](sample_direction_uniform.html)
- [sample_orientation_uniform](sample_orientation_uniform.html)
- [sample_circle_uniform](sample_circle_uniform.html)
- [sample_sphere_uniform](sample_sphere_uniform.html)
- [sample_hypersphere_uniform](sample_hypersphere_uniform.html)
- [sample_circle_arc](sample_circle_arc.html)
- [sample_orientation_cone](sample_orientation_cone.html)
- [sample_circle_slice](sample_circle_slice.html)
- [sample_sphere_cone](sample_sphere_cone.html)
- [sample_hypersphere_cone](sample_hypersphere_cone.html)
