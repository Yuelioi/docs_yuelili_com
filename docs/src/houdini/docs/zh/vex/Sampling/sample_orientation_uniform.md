---
title: sample_orientation_uniform
order: 27
category:
  - vex
---

`vector4 sample\_orientation\_uniform(vector u)`

## Arguments

`u`

0 和 1 之间的三个数字。

返回一个单位向量 4，即长度为 1 的向量 4，基于`u`。给出在`[0,1)`中三个值的均匀随机`u`向量，返回的单位向量将是均匀随机的，并且相对于`u`在单位超球的表面上是连续的。换句话说，它们将是均匀随机的定向四元数。

## See also

- [sample_circle_edge_uniform](sample_circle_edge_uniform.html)
- [sample_direction_uniform](sample_direction_uniform.html)
- [sample_circle_uniform](sample_circle_uniform.html)
- [sample_sphere_uniform](sample_sphere_uniform.html)
- [sample_hypersphere_uniform](sample_hypersphere_uniform.html)
- [sample_circle_arc](sample_circle_arc.html)
- [sample_direction_cone](sample_direction_cone.html)
- [sample_orientation_cone](sample_orientation_cone.html)
- [sample_circle_slice](sample_circle_slice.html)
- [sample_sphere_cone](sample_sphere_cone.html)
- [sample_hypersphere_cone](sample_hypersphere_cone.html)
