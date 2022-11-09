---
title: predicate_insphere
order: 45
category:
  - vex
---

`float predicate_insphere(vector a, vector b, vector c, vector d, vector e)`

给出三维空间中的 4 个点`a`, `b`, `c`, 和`d`, 如果`e`在四面体`abcd`的圆周内，则返回正值；如果`e`在圆周外，则返回负值；如果`e`正好位于圆周上，则返回 0。

更准确地说，这个函数计算了矩阵的行列式

```c
[a_x a_y a_z a^2 1; b_x b_y b_z b^2 1; c_x c_y c_z c^2 1; d_x d_y d_z d^2 1; e_x
e_y e_z e^2 1]
```

…with a guaranteed
correct sign, where `a^2`, `b^2`, `c^2`, `d^2` and `e^2` are the squared lengths of the
corresponding input vectors.

intersect

[clip](clip.html)

[intersect](intersect.html)

[intersect_all](intersect_all.html)

[planesphereintersect](planesphereintersect.html)

[predicate_incircle](predicate_incircle.html)

[predicate_insphere](predicate_insphere.html)

[primfind](primfind.html)

[uvintersect](uvintersect.html)
