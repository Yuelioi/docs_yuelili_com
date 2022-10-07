---
title: sample_sphere_uniform
order: 31
category:
  - vex
---

`vector sample\_sphere\_uniform(vector u)`

## Arguments

`u`

Three numbers between 0 and 1.

Returns a vector of length < 1, based on `u`.
Given uniform random `u` vectors of three values in `[0,1)`, the returned vectors will be
uniform random and continuous with respect to `u` inside the unit sphere.



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
