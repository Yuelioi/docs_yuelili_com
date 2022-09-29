---
title: sample_sphere_shell_uniform
order: 30
category:
  - houdini
---

## Description

Since 17.0

`vector sample_sphere_shell_uniform(vector u, float alpha)`

## Arguments

`u`

Three numbers between 0 and 1.

`alpha`

The inner radius to be bounded by. A number between 0 and 1.

Returns a vector of length < 1, based on `u`. Given uniform random `u` vectors
of three values in `[0,1)`, and a number in `[0,1]`, the returned vectors will
be uniform random and continuous with respect to `u` inside the unit sphere
shell with the inner raidus alpha.

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
