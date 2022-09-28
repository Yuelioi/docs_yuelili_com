---
title: solvecubic
order: 59
category:
  - houdini
---
    
## 描述

Solves a cubic function returning the number of real roots.

`int solvecubic(float a, float b, float c, float d, float &t1, float &t2, float &t3)`

`int solvecubic(float a, float b, float c, float d, vector2 &t1, vector2 &t2, vector2 &t3)`

Solves the given cubic function where a , b, c, and d are the coefficients as
so:

```c
ax^3 + bx^2 + cx + d = 0
```

求解给定的三次函数，其中 a,b,c 和 da 是系数，因此：ax^3 + bx^2 + cx + d = 0

Returns the number of real roots.

返回实数根的数量。

In the real case the returned roots will be in ascending order. In case of
only one root that root is filled into t1, t2, and t3.

在实数情况下，返回的根数将以升序排列。在只有一个根的情况下，该根被填入 ot1,t2 和 t3。

In the complex case t1, t2, and t3 are the complex roots.

在复数情况下，et1, t2, 和 t3 是复数根。
