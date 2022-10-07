---
title: predicate_orient3d
order: 47
category:
  - vex
---

`float predicate\_orient3d(vector a, vector b, vector c, vector d)`

Given 3 points `a`, `b` and `c` in space, return a negative value if `d` is behind the
plane defined by the triangle `abc` (with right hand rule winding order), a positive value if its in front of
the plane, and zero if points `a`, `b`, `c` and `d` are coplanar.

More precisely, this function computes the determinant of the matrix:

```c
[a_x a_y a_z 1; b_x b_y b_z 1; c_x c_y c_z 1; d_x d_y d_z 1]
```

…with a guaranteed correct sign.


measure

[curvearclen](curvearclen.html)

[distance](distance.html)

[distance2](distance2.html)

[getbbox](getbbox.html)

[getbbox_center](getbbox_center.html)

[getbbox_max](getbbox_max.html)

[getbbox_min](getbbox_min.html)

[getbbox_size](getbbox_size.html)

[getbounds](getbounds.html)

[getpointbbox](getpointbbox.html)

[getpointbbox_center](getpointbbox_center.html)

[getpointbbox_max](getpointbbox_max.html)

[getpointbbox_min](getpointbbox_min.html)

[getpointbbox_size](getpointbbox_size.html)

[length](length.html)

[length2](length2.html)

[mdensity](mdensity.html)

[pcfarthest](pcfarthest.html)

[planepointdistance](planepointdistance.html)

[predicate_orient2d](predicate_orient2d.html)

[predicate_orient3d](predicate_orient3d.html)

[primarclen](primarclen.html)

[qdistance](qdistance.html)

[relbbox](relbbox.html)

[relpointbbox](relpointbbox.html)

[surfacedist](surfacedist.html)

[uvdist](uvdist.html)

[xyzdist](xyzdist.html)
