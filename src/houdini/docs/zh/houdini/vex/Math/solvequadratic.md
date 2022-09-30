---
title: solvequadratic
order: 61
category:
  - houdini
---
    
## 描述

Solves a quadratic function returning the number of real roots.

```c
int  solvequadratic(float a, float b, float c, float &t1, float &t2)
```

```c
int  solvequadratic(float a, float b, float c, vector2 &t1, vector2 &t2)
```

Solves the given quadratic function where a , b, and c are the coefficients as
so:

```c
ax^2 + bx + c = 0
```

.

求解给定的二次函数，其中 a,b 和 care 是系数，所以：ax^2 + bx + c = 0。

Returns the number of real roots.

返回实数根的数量。

In the real case t1 and t2 are filled such that t1â¤ t2. If there is only one
root then t1 = t2. If there are no roots then t1 = t2 and is the projection of
the vertex of the quadratic function onto the x-axis.

在实数情况下，et1 和 t2 被填充，使得 t1â¤t2。如果只有一个根，则 nt1=t2。如果没有根，nt1=t2，是二次函数的顶点在 x 轴上的投影。

In the complex case t1 and t2 are the complex roots.

在复数情况下，et1 和 t2 是复数根。
