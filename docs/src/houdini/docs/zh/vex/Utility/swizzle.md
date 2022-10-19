---
title: swizzle
order: 21
category:
  - vex
---

`vector2 swizzle(vector2 v, int i0, int i1)`

`vector swizzle(vector v, int i0, int i1, int i2)`

`vector4 swizzle(vector4 v, int i0, int i1, int i2, int i3)`

The integer arguments specify which component of the original vector to put in each place in the returned vector. So, for example, if `i0` is `3`, the third component of the original vector is copied to the zeroth component of the returned vector.

Integer arguments less than `0` or greater than the number of components are clamped.

## Examples



```c
swizzle({10, 20, 30, 40}, 3, 2, 1, 0) == {40, 30, 20, 10}
swizzle({10, 20, 30, 40}, 0, 0, 0, 0) == {10, 10, 10, 10}
```

vector

[Du](Du.html)

[Dw](Dw.html)

[avg](avg.html)

[cross](cross.html)

[distance2](distance2.html)

[dot](dot.html)

[length](length.html)

[length2](length2.html)

[normalize](normalize.html)

[outerproduct](outerproduct.html)

[pretranslate](pretranslate.html)

[rotate_x_to](rotate_x_to.html)

[smoothrotation](smoothrotation.html)

[swizzle](swizzle.html)

[translate](translate.html)
