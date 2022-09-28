---
title: cbrt
order: 6
category:
  - houdini
---
    
## 描述

Returns the cube root of the argument.

```c
float  cbrt(float n)
```

Returns the cube-root of `n`.

返回 n 的立方根。

```c
vector2  cbrt(vector2 v)
```

```c
vector  cbrt(vector v)
```

```c
vector4  cbrt(vector4 v)
```

Returns a new vector where each component is the cube-root of the
corresponding component in `v`.

返回一个新的向量，其中每个分量是相应分量 inv 的立方根。
