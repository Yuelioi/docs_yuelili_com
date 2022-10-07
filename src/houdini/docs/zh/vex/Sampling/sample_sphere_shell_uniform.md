---
title: sample_sphere_shell_uniform
order: 30
category:
  - vex
---

自 17.0 以来

`vector sample\_sphere\_shell\_uniform(vector u, float alpha)`

## Arguments

`u`

0 和 1 之间的三个数字。

`alpha`

要约束的内半径。一个介于 0 和 1 之间的数字。

返回一个长度<1 的向量，基于`u`。给出在`[0,1)`中的三个均匀随机的`u`向量，以及在`[0,1]`中的一个数字，返回的向量将是均匀随机的，并且相对于`u`在单位球壳内是连续的，内部的雷达为 α。

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
- [sample_sphere_uniform](sample_sphere_uniform.html)
- [sample_hypersphere_cone](sample_hypersphere_cone.html)
