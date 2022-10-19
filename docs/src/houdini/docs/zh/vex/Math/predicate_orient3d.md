---
title: predicate_orient3d
order: 47
category:
  - vex
---

`float predicate\_orient3d(vector a, vector b, vector c, vector d)`

给出空间中的 3 个点`a`，`b`和`c`，如果`d`在由三角形`abc`定义的平面后面，则返回一个负值（用右手规则缠绕顺序），如果它在平面前面，则返回一个正值，如果点`a`，`b`，`c`和`d`是共面的，则返回 0。

更准确地说，这个函数是计算矩阵的行列式。

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
