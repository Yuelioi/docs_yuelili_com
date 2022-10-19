---
title: sample_direction_uniform
order: 15
category:
  - vex
---

`vector sample\_direction\_uniform(vector2 u)`

## Arguments

`u`

0 和 1 之间的一对数字。

返回一个单位向量，即长度为 1 的向量，基于`u`。给予`[0,1)`中的均匀随机的`u`对值，返回的单位向量将是均匀随机的，并且在单位球面上相对于`u`是连续的。

## See also

- [sample_circle_edge_uniform](sample_circle_edge_uniform.html)
- [sample_orientation_uniform](sample_orientation_uniform.html)
- [sample_circle_uniform](sample_circle_uniform.html)
- [sample_sphere_uniform](sample_sphere_uniform.html)
- [sample_hypersphere_uniform](sample_hypersphere_uniform.html)
- [sample_circle_arc](sample_circle_arc.html)
- [sample_direction_cone](sample_direction_cone.html)
- [sample_orientation_cone](sample_orientation_cone.html)
- [sample_circle_slice](sample_circle_slice.html)
- [sample_sphere_cone](sample_sphere_cone.html)
- [sample_hypersphere_cone](sample_hypersphere_cone.html)
