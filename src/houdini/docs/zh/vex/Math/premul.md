---
title: premul
order: 42
category:
  - houdini
---
    
## 描述

Pre multiply matrices.

| Since | 18.0 |
| ----- | ---- |

```c
void  premul(matrix2 &a, matrix2 b)
```

```c
void  premul(matrix &a, matrix b)
```

```c
void  premul(matrix3 &a, matrix3 b)
```

```c
void  premul(matrix2 &m, matrix2 a, matrix2 b)
```

```c
void  premul(matrix &m, matrix a, matrix b)
```

```c
void  premul(matrix3 &m, matrix3 a, matrix3 b)
```

Multiplies two matrices and returns modify the first matrix.

将两个矩阵相乘，并返回修改后的第一个矩阵。
