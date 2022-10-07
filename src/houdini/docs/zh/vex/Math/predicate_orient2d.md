---
title: predicate_orient2d
order: 46
category:
  - vex
---

`float predicate\_orient2d(vector2 a, vector2 b, vector2 c)`

给出平面内的 2 个点`a`和`b`，如果`c`在线段`(a,b)`的左边，则返回正值；如果在线段的右边，则返回负值；如果`a`、`b`和`c`是同轴心，则返回 0。

更准确地说，这个函数是计算矩阵的行列式。

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
