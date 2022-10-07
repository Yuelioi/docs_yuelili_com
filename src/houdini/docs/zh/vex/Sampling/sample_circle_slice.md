---
title: sample_circle_slice
order: 12
category:
  - vex
---

`vector2 sample\_circle\_slice(vector2 center, float maxangle, vector2 u)`

## Arguments

`center`

Direction in the center of the slice. This does not need to be normalized.

`maxangle`

Maximum angle, in radians, away from `center` that any sample of the slice
will be, so long as all `u` values are between 0 and 1.

`u`

Pair of numbers between 0 and 1.

Returns a vector2 of length < 1, based on `u`.
Given uniform random `u` pairs of values in `[0,1)`, the returned vectors will be
uniform random and continuous with respect to `u` inside the unit circle,
in the slice within `maxangle` of the direction indicated by `center`.



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
- [sample_sphere_cone](sample_sphere_cone.html)
- [sample_hypersphere_cone](sample_hypersphere_cone.html)
