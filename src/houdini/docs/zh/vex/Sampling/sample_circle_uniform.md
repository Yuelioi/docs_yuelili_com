---
title: sample_circle_uniform
order: 13
category:
  - vex
---

`vector2 sample\_circle\_uniform(vector2 u)`

## Arguments

`u`

Pair of numbers between 0 and 1.

Returns a vector2 of length < 1, based on `u`.
Given uniform random `u` pairs of values in `[0,1)`, the returned vectors will be
uniform random and continuous with respect to `u` inside the unit circle.
Specifically, it returns `scale*(cos(angle),sin(angle))`, where `angle` is `2*pi*u.x`
and `scale` is `sqrt(u.y)`.



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
