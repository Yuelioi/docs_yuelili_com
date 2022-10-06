---
title: invlerp
order: 6
category:
  - houdini
---
    
## 描述

Inverses a linear interpolation between the values.

| Since | 18.5 |
| ----- | ---- |

```c
float  invlerp(float a, float min, float max)
```

```c
<vector> invlerp(<vector>a, <vector>min, <vector>max)
```

Returns the amount to mix `min` and `max` to generate theinput value `a`.This
is the inverse of the `lerp` function.

返回混合 min 和 max 的数量以产生

The vector version operates component-wise, so the resultingvector will be the
independent mixing amount for each dimension.

输入值 a。 这是对 lerpfunction 的逆运算。

If `a` is outside the range `min` to `max`, values greater than`1` or less
than `0` will be produced.

矢量版本的操作是分量式的，因此得到的

If `min` and `max` are equal, the mixing value is `0.5`.

向量将是每个维度的独立混合量。
