---
title: swizzle
order: 20
category:
  - houdini
---
    
## 描述

Rearranges the components of a vector.

```c
vector2  swizzle(vector2 v, int i0, int i1)
```

```c
vector  swizzle(vector v, int i0, int i1, int i2)
```

```c
vector4  swizzle(vector4 v, int i0, int i1, int i2, int i3)
```

The integer arguments specify which component of the original vector to put in
each place in the returned vector. So, for example, if `i0` is `3`, the third
component of the original vector is copied to the zeroth component of the
returned vector.

整数参数指定将原向量的哪个分量放在返回向量的每个位置上。因此，例如，如果 i0 是 3，原向量的第三个分量将被复制到返回向量的第 2 个分量。

Integer arguments less than `0` or greater than the number of components are
clamped.

小于或大于分量数的整数参数被夹紧。

## Examples

    swizzle({10, 20, 30, 40}, 3, 2, 1, 0) == {40, 30, 20, 10}swizzle({10, 20, 30, 40}, 0, 0, 0, 0) == {10, 10, 10, 10}
