---
title: sample_circle_uniform
order: 13
category:
  - vex
---

`vector2 sample_circle_uniform(vector2 u)`

## Arguments

`u`

0 和 1 之间的一对数字。

返回一个长度<1 的向量 2，基于`u`。给出在`[0,1)`中的均匀随机的`u`对值，返回的向量将是均匀随机的，并且相对于`u`在单位圆内是连续的。具体来说，它返回`scale*(cos(angle),sin(angle))`，其中`angle`是`2*pi*u.x`，`scale`是`sqrt（u.y）`。

## See also

- [sample_circle_edge_uniform](sample_circle_edge_uniform.html)
- [sample_direction_uniform](sample_direction_uniform.html)
- [sample_orientation_uniform](sample_orientation_uniform.html)
- [sample_sphere_uniform](sample_sphere_uniform.html)
- [sample_hypersphere_uniform](sample_hypersphere_uniform.html)
- [sample_circle_arc](sample_circle_arc.html)
- [sample_direction_cone](sample_direction_cone.html)
- [sample_orientation_cone](sample_orientation_cone.html)
- [sample_circle_slice](sample_circle_slice.html)
- [sample_sphere_cone](sample_sphere_cone.html)
- [sample_hypersphere_cone](sample_hypersphere_cone.html)
