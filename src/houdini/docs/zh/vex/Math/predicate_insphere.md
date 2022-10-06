---
title: predicate_insphere
order: 41
category:
  - houdini
---
    
## 描述

Determines if a point is inside or outside a tetrahedron circumsphere.

```c
float  predicate_insphere(vector a, vector b, vector c, vector d, vector e)
```

Given 4 points `a`, `b`, `c`, and `d` in 3D space, return a positive value if
`e` is insidethe circumsphere of the tetrahedron `abcd`, a negative value if
`e` is outside, and zeroif `e` lies exactly on the circumsphere.

给定 4 个点 a,b,c 和 d 在三维空间中，如果 e 在四面体 abcd 的圆周内，则返回一个正值，如果 e 在圆周外，则返回一个负值。

More precisely, this function computes the determinant of the matrix

如果 e 在四面体 abcd 的圆周上，则返回正值；如果 e 在圆周外，则返回负值；如果 e 正好在圆周上，则返回零。

    [a_x a_y a_z a^2 1; b_x b_y b_z b^2 1; c_x c_y c_z c^2 1; d_x d_y d_z d^2 1; e_xe_y e_z e^2 1]

â¦with a guaranteedcorrect sign, where `a^2`, `b^2`, `c^2`, `d^2` and `e^2`
are the squared lengths of thecorresponding input vectors.

如果 e 正好在圆周上，则为负值。
