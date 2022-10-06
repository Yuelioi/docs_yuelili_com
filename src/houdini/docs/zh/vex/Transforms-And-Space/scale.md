---
title: scale
order: 23
category:
  - houdini
---
    
## 描述

Scales the given matrix in three directions simultaneously (X, Y, Z -  
given by the components of the scale_vector).

```c
void  scale(matrix2 &m, vector2 scale_vector)
```

```c
void  scale(matrix &m, vector scale_vector)
```

```c
void  scale(matrix3 &m, vector scale_vector)
```

Scales the matrix in three directions simultaneously by the factors in the
vector.This modifies the matrix in-place, rather than returning a new matrix.

通过向量中的因子在三个方向上同时缩放矩阵。
