---
title: sign
order: 55
category:
  - houdini
---
    
## 描述

Returns -1, 0, or 1 depending on the sign of the argument.

```c
int  sign(int n)
```

```c
float  sign(float n)
```

For a scalar value, returns `-1` for a negative number, `0` for the number
zero,and `+1` for a positive number.

对于一个标量值，如果是负数则返回 1，如果是零则返回 0。

```c
vector2  sign(vector2 v)
```

```c
vector  sign(vector v)
```

```c
vector4  sign(vector4 v)
```

For vector values the sign of the individual components is returned as a
vector.

和+1 代表正数。
