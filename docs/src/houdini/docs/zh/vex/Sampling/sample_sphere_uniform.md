---
title: sample_sphere_uniform
order: 31
category:
  - vex
---

`vector sample\_sphere\_uniform(vector u)`

## Arguments

`u`

0 和 1 之间的三个数字。

返回一个长度<1 的向量，基于`u`。给出在`[0,1)`中三个值的均匀随机`u`向量，返回的向量将是均匀随机的，并且相对于`u`在单位球体中是连续的。

## See also

- [sample_circle_edge_uniform](sample_circle_edge_uniform.html)
- [sample_direction_uniform](sample_direction_uniform.html)
- [sample_orientation_uniform](sample_orientation_uniform.html)
- [sample_circle_uniform](sample_circle_uniform.html)
- [sample_hypersphere_uniform](sample_hypersphere_uniform.html)
- [sample_circle_arc](sample_circle_arc.html)
- [sample_direction_cone](sample_direction_cone.html)
- [sample_orientation_cone](sample_orientation_cone.html)
- [sample_circle_slice](sample_circle_slice.html)
- [sample_sphere_cone](sample_sphere_cone.html)
- [sample_hypersphere_cone](sample_hypersphere_cone.html)
