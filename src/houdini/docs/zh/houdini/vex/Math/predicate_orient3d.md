---
title: predicate_orient3d
order: 75
category:
  - houdini
---
    
## 描述

Determines the orientation of a point with respect to a plane.

```c
float  predicate_orient3d(vector a, vector b, vector c, vector d)
```

Given 3 points `a`, `b` and `c` in space, return a negative value if `d` is
behind theplane defined by the triangle `abc` (with right hand rule winding
order), a positive value if its in front ofthe plane, and zero if points `a`,
`b`, `c` and `d` are coplanar.

给出空间中的 3 个点 a,band，如果 d 在三角形 abc 定义的平面后面，则返回一个负值。

More precisely, this function computes the determinant of the matrix:

如果 d 在三角形 abc 所定义的平面后面，则返回一个负值（用右手规则绕行顺序），如果它在平面前面，则返回一个正值。

    [a_x a_y a_z 1; b_x b_y b_z 1; c_x c_y c_z 1; d_x d_y d_z 1]

â¦with a guaranteed correct sign.

如果 a,b,cdd 点共面，则返回负值。
