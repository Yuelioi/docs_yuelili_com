---
title: sample_direction_uniform
order: 15
category:
  - houdini
---

## Description

`vector sample_direction_uniform(vector2 u)`

## Arguments

`u`

Pair of numbers between 0 and 1.

Returns a unit vector, i.e. a vector of length 1, based on `u`. Given uniform
random `u` pairs of values in `[0,1)`, the returned unit vectors will be
uniform random and continuous with respect to `u` on the surface of the unit
sphere.

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
