---
title: predicate_incircle
order: 44
category:
  - vex
---

`float predicate_incircle(vector2 a, vector2 b, vector2 c, vector2 d)`

Given 3 points `a`, `b`, and `c` on the plane, return a positive value if `d` is inside
the circumcircle of the triangle `abc`, a negative value if `d` is outside, and zero
if `d` is exactly on the circumcircle.

More precisely, this function computes the determinant of the matrix:

```c
[a_x a_y a^2 1; b_x b_y b^2 1; c_x c_y c^2 1; d_x d_y d^2 1]
```

…with a guaranteed
correct sign, where `a^2`, `b^2`, `c^2`, and `d^2` are the squared lengths of the
respective input vectors.

intersect

[clip](clip.html)

[intersect](intersect.html)

[intersect_all](intersect_all.html)

[planesphereintersect](planesphereintersect.html)

[predicate_incircle](predicate_incircle.html)

[predicate_insphere](predicate_insphere.html)

[primfind](primfind.html)

[uvintersect](uvintersect.html)
