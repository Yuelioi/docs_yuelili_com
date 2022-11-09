---
title: predicate_insphere
order: 45
category:
  - vex
---

`float predicate_insphere(vector a, vector b, vector c, vector d, vector e)`

Given 4 points `a`, `b`, `c`, and `d` in 3D space, return a positive value if `e` is inside
the circumsphere of the tetrahedron `abcd`, a negative value if `e` is outside, and zero
if `e` lies exactly on the circumsphere.

More precisely, this function computes the determinant of the matrix

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
