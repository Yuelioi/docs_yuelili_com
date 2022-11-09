---
title: sample_sphere_cone
order: 29
category:
  - vex
---

`vector sample_sphere_cone(vector center, float maxangle, vector u)`

## Arguments

`center`

在圆锥体中心的方向。这不需要被归一化。

`maxangle`

只要所有的 "u "值在 0 到 1 之间，圆锥体的任何样本离开 "中心 "的最大角度，单位是弧度。

`u`

0 和 1 之间的三个数字。

返回一个长度<1 的向量，基于`u`。给出在`[0,1)`中的三个均匀随机的`u`向量，返回的向量将是均匀随机的，并且相对于`u`在单位球体内，在`中心'指示的方向的`最大角度'内的体积是连续的。

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
- [sample_circle_slice](sample_circle_slice.html)
- [sample_hypersphere_cone](sample_hypersphere_cone.html)
