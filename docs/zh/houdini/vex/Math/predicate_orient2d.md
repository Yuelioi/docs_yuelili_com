---
title: predicate_orient2d
order: 74
category:
  - houdini
---
    
## 描述

Determines the orientation of a point with respect to a line.

```c
float  predicate_orient2d(vector2 a, vector2 b, vector2 c)
```

Given 2 points `a` and `b` in the plane, return a positive value if `c` is on
the leftof the segment `(a,b)`, a negative value if it is on the right of the
segment, andzero if `a`, `b` and `c` are colinear.

给出平面上的 2 个点 a 和 b，如果 c 在线段(a,b)的左边，则返回正值，如果在线段的右边，则返回负值。

More precisely, this function computes the determinant of the matrix:

的左边，则返回一个正值；如果在该段的右边，则返回一个负值；如果 a，b 是同位数，则返回零。

    [a_x a_y 1; b_x b_y 1; c_x c_y 1]

â¦with a guaranteed correct sign.

如果 a,b 在同一条线上，则返回正值。
