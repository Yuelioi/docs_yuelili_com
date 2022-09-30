---
title: tan
order: 68
category:
  - houdini
---
    
## 描述

Returns the trigonometric tangent of the argument

```c
float  tan(float n)
```

Returns the trigonometric tangent of `n`, where `n` is in radians.

返回 n 的三角正切值，单位是弧度。

```c
vector2  tan(vector2 v)
```

```c
vector  tan(vector v)
```

```c
vector4  tan(vector4 v)
```

Returns a new vector with `tan()` applied to each component.

返回一个新的向量，并将 htan()应用于每个分量。
