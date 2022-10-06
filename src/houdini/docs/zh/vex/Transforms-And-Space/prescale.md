---
title: prescale
order: 18
category:
  - houdini
---
    
## 描述

Prescales the given matrix in three directions simultaneously (X, Y, Z -  
given by the components of the scale_vector).

| Since | 17.5 |
| ----- | ---- |

```c
void  prescale(matrix &m, vector scale_vector)
```

```c
void  prescale(matrix3 &m, vector scale_vector)
```

Prescales the matrix in three directions simultaneously by the factors in the
vector.This modifies the matrix in-place, rather than returning a new matrix.

通过向量中的因子同时在三个方向上对矩阵进行预标度。
