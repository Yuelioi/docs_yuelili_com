---
title: acos
order: 2
category:
  - houdini
---
    
## 描述

Returns the inverse cosine of the argument.

```c
float  acos(float v)
```

Returns the inverse cosine of `n`, where `n` is in radians. The return value
is in the range 0 to Ï.

返回 n 的反余弦，单位是弧度。返回值的范围是 0 到 Ï。

```c
vector2  acos(vector2 v)
```

```c
vector4  acos(vector4 v)
```

```c
vector  acos(vector v)
```

Returns a new vector with `acos` applied to each component.

返回一个新的向量，并在每个分量上施加余弦。
