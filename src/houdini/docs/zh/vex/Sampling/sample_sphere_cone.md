---
title: sample_sphere_cone
order: 29
category:
  - vex
---

`vector sample\_sphere\_cone(vector center, float maxangle, vector u)`

## Arguments

`center`

Direction in the center of the cone. This does not need to be normalized.

`maxangle`

Maximum angle, in radians, away from `center` that any sample of the cone
will be, so long as all `u` values are between 0 and 1.

`u`

Three numbers between 0 and 1.

Returns a vector of length < 1, based on `u`.
Given uniform random `u` vectors of three values in `[0,1)`, the returned vectors will be
uniform random and continuous with respect to `u` inside the unit sphere,
in the volume within `maxangle` of the direction indicated by `center`.



## See also

- [sample_circle_edge_uniform](sample_circle_edge_uniform.html)
- [sample_direction_uniform](sample_direction_uniform.html)
- [sample_orientation_uniform](sample_orientation_uniform.html)
- [sample_circle_uniform](sample_circle_uniform.html)
- [sample_sphere_uniform](sample_sphere_uniform.html)
- [sample_hypersphere_uniform](sample_hypersphere_uniform.html)
- [sample_circle_arc](sample_circle_arc.html)
- [sample_direction_cone](sample_direction_cone.html)
- [sample_orientation_cone](sample_orientation_cone.html)
- [sample_circle_slice](sample_circle_slice.html)
- [sample_hypersphere_cone](sample_hypersphere_cone.html)
