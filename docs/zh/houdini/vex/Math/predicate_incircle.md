---
title: predicate_incircle
order: 40
category:
  - houdini
---
    
## 描述

Determines if a point is inside or outside a triangle circumcircle.

```c
float  predicate_incircle(vector2 a, vector2 b, vector2 c, vector2 d)
```

Given 3 points `a`, `b`, and `c` on the plane, return a positive value if `d`
is insidethe circumcircle of the triangle `abc`, a negative value if `d` is
outside, and zeroif `d` is exactly on the circumcircle.

给定平面上的 3 个点 a,b,和 con，如果 d 在三角形 abc 的圆周内，则返回正值；如果 d 在圆周外，则返回负值；如果 d 在圆周内，则返回 0。

More precisely, this function computes the determinant of the matrix:

如果 d 在三角形 abc 的圆周内，则返回正值；如果 d 在圆周外，则返回负值；如果 d 正好在圆周上，则返回零。

    [a_x a_y a^2 1; b_x b_y b^2 1; c_x c_y c^2 1; d_x d_y d^2 1]

â¦with a guaranteedcorrect sign, where `a^2`, `b^2`, `c^2`, and `d^2` are the
squared lengths of therespective input vectors.

如果 d 正好在圆周上，则返回正值。
