---
title: sample_circle_edge_uniform
order: 10
category:
  - houdini
---

## Description

`vector2 sample_circle_edge_uniform(float u)`

## Arguments

`u`

Number between 0 and 1.

Returns a unit vector2, i.e. a vector2 of length 1, based on `u`. Given
uniform random `u` values in `[0,1)`, the returned unit vectors will be
uniform random and continuous with respect to `u` on the edge of the unit
circle. Specifically, it returns `(cos(angle),sin(angle))`, where `angle` is
`2*pi*u`.

## See also

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
- [sample_hypersphere_cone](sample_hypersphere_cone.html)
