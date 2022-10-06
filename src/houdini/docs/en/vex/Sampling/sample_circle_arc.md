---
title: sample_circle_arc
order: 9
category:
  - houdini
---

## Description

`vector2 sample_circle_arc(vector2 center, float maxangle, float u)`

## Arguments

`center`

Direction in the center of the arc. This does not need to be normalized.

`maxangle`

Maximum angle, in radians, away from `center` that any sample of the arc will
be, so long as `u` is between 0 and 1.

`u`

Number between 0 and 1.

Returns a unit vector2, i.e. a vector2 of length 1, based on `u`. Given
uniform random `u` values in `[0,1)`, the returned unit vectors will be
uniform random and continuous with respect to `u` on the edge of the unit
circle, in the arc within `maxangle` of the direction indicated by `center`.

## See also

- [sample_circle_edge_uniform](sample_circle_edge_uniform.html)
- [sample_direction_uniform](sample_direction_uniform.html)
- [sample_orientation_uniform](sample_orientation_uniform.html)
- [sample_circle_uniform](sample_circle_uniform.html)
- [sample_sphere_uniform](sample_sphere_uniform.html)
- [sample_hypersphere_uniform](sample_hypersphere_uniform.html)
- [sample_direction_cone](sample_direction_cone.html)
- [sample_orientation_cone](sample_orientation_cone.html)
- [sample_circle_slice](sample_circle_slice.html)
- [sample_sphere_cone](sample_sphere_cone.html)
- [sample_hypersphere_cone](sample_hypersphere_cone.html)
