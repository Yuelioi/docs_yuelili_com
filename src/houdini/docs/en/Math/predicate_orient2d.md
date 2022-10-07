---
title: predicate_orient2d
order: 46
category:
  - vex
---

`float predicate\_orient2d(vector2 a, vector2 b, vector2 c)`

Given 2 points `a` and `b` in the plane, return a positive value if `c` is on the left
of the segment `(a,b)`, a negative value if it is on the right of the segment, and
zero if `a`, `b` and `c` are colinear.

More precisely, this function computes the determinant of the matrix:

```c
[a_x a_y 1; b_x b_y 1; c_x c_y 1]
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
