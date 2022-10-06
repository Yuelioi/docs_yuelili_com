---
title: pack_inttosafefloat
order: 10
category:
  - houdini
---
    
## 描述

Reversibly packs an integer into a finite, non-denormal float.

```c
float  pack_inttosafefloat(int i)
```

This is used to find the w component of a primitive uvw vectorreferring to a
polygon soup primitive, from the inner polygon number.

这用于从内部多边形编号中找到指的是一个原始的 uvw 向量的 w 分量。

- Integers in the range

```c
abs(i) <= (2^24) = 16,777,216
```

will be represented exactly by the floats of the same value.

指的是多边形汤基元，从内部的多边形数字中找到。

- Integers in the range

```c
16,777,216 < abs(i) < (2^24) + 104*(2^23) = 889,192,448
```

will be represented by larger, non-infinite floats.

在 abs(i) <= (2^24) = 16,777,216 范围内的整数将由相同值的浮点数精确表示。

- Integers in the range

```c
889,192,448 <= abs(i) < (2^24) + 230*(2^23) = 1,946,157,056
```

will be represented by small, non-denormal floats.

在 16,777,216 < abs(i) < (2^24) + 104\*(2^23) = 889,192,448 范围内的整数将由较大的、非无限的浮点数表示。

- Any other integers,

```c
abs(i) >= 1,946,157,056
```

, will not be represented correctly.

在 889,192,448 <= abs(i) < (2^24) + 230\*(2^23) =
1,946,157,056 范围内的整数将由小的、非正态的浮点数表示。
