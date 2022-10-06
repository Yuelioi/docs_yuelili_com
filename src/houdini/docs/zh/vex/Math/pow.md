---
title: pow
order: 39
category:
  - houdini
---
    
## 描述

Raises the first argument to the power of the second argument.

```c
float  pow(float n, float exponent)
```

```c
<vector> pow(<vector>v, float exponent)
```

Raises `n` to the power of `exponent`. For vectors, this is done per-
component.

提高到指数的幂。对于向量，这是按分量进行的。

When `n` is less than zero, the exponent will be rounded to the closest
integer.

如果小于 0，指数将被四舍五入为最接近的整数。
