---
title: predicate_incircle
order: 44
category:
  - vex
---

`float predicate_incircle(vector2 a, vector2 b, vector2 c, vector2 d)`

给定平面上的 3 个点`a`, `b`, 和`c`, 如果`d`在三角形`abc`的圆周内，返回正值；如果`d`在圆周外，返回负值；如果`d`正好在圆周上，返回 0。

更准确地说，这个函数是计算矩阵的行列式。

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
