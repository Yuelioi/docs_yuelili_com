---
title: trunc
order: 71
category:
  - houdini
---
    
## 描述

Removes the fractional part of a floating point number.

```c
float  trunc(float x)
```

If the argument is negative, this returns [ceil(x)](ceil.html) "Returns the
smallest integer greater than or equal to the argument."), otherwise it
returns[floor(x)](floor.html) "Returns the largest integer less than or equal
to the argument.").

如果参数为负数，则返回 ceil(x)，否则返回 floor(x)。

```c
vector2  trunc(vector2 x)
```

```c
vector  trunc(vector x)
```

```c
vector4  trunc(vector4 x)
```

Returns a new vector with the `trunc()` of each component.

返回一个新的向量，包括每个分量的 trunc()。
