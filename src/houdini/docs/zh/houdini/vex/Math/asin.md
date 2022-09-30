---
title: asin
order: 3
category:
  - houdini
---
    
## 描述

Returns the inverse sine of the argument.

```c
float  asin(float n)
```

The inverse sine of `n`, where `n` is in radians. The return value is in the
range -Ï/2 to Ï/2.

n 的反正弦，单位是弧度。返回值的范围是-Ï/2 到 Ï/2。

```c
vector2  asin(vector2 n)
```

```c
vector  asin(vector n)
```

```c
vector4  asin(vector4 n)
```

Returns a new vector with `asin()` applied to all components.

返回一个新的向量，并将 asin()应用于所有组件。
