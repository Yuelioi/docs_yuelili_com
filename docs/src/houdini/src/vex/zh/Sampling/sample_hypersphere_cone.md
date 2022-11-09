---
title: sample_hypersphere_cone
order: 20
category:
  - vex
---

`vector4 sample_hypersphere_cone(vector4 center, float maxangle, vector4 u)`

## Arguments

`center`

在圆锥体中心的方向。这不需要被归一化。

`maxangle`

只要所有的 "u "值在 0 到 1 之间，圆锥体的任何样本离开 "中心 "的最大角度，单位是弧度。

`u`

0 和 1 之间的四个数字。

返回一个长度<1 的向量 4，基于`u`。给出在`[0,1)`中的四个均匀随机的`u`向量，返回的向量将是均匀随机的，并且相对于`u`在单位超球内是连续的，在`中心'指示的方向的`最大角度'的超体积内。

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
- [sample_sphere_cone](sample_sphere_cone.html)
