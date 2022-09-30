---
title: atan
order: 4
category:
  - houdini
---
    
## 描述

Returns the inverse tangent of the argument.

```c
float  atan(float n)
```

Returns the inverse tangent of `n`, where `n` is in radians. The return value
is in the range -Ï/2 to Ï/2.

返回 n 的反正切值，单位是弧度。返回值的范围是-Ï/2 到 Ï/2。

```c
float  atan(float y, float x)
```

Alias for [atan2](atan2.html) "Returns the inverse tangent of y/x.").

datan2 的别名。

```c
<vector> atan(<vector>v)
```

Returns a new vector with `atan()` applied to each component.

返回一个新的向量，并将 atan()应用于每个分量。
