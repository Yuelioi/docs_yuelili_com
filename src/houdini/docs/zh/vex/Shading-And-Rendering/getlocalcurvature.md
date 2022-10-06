---
title: getlocalcurvature
order: 21
category:
  - houdini
---
    
## 描述

Evaluates local curvature of primitive grid, using the same curvature
evaluation method as Measure SOPs.

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

```c
vector  getlocalcurvature(float s, float t)
```

Returns 0 vector if the object does not have subdivision enabled, or has no
displacement shader assigned.Otherwise, the measured convexity and concavity
will be returned in `x` and `y` components respectively.

如果该对象没有启用细分功能，或者没有分配位移着色器，则返回 0 向量。

`s`

Parametric S shading value. This should be passed from the `s` global
variable.

否则，测量的凸度和凹度将分别以 xandycomponents 返回。

`t`

Parametric <type> shading value. This should be passed from the `t` global
variable.

参数 S 的阴影值。这应该由 sglobal 变量传递。
