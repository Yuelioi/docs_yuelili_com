---
title: svddecomp
order: 67
category:
  - houdini
---
    
## 描述

Computes the singular value decomposition of a 3Ã3 matrix.

| Since | 18.0 |
| ----- | ---- |

`void svddecomp(matrix3 input_M, matrix3 &output_U, vector &output_S, matrix3 &output_V)`

```c
vector  svddecomp(matrix3 input_M)
```

Computes the [singular value decomposition
\_\_](http://en.wikipedia.org/wiki/Singular_value_decomposition)of a3Ã3 matrix.
More precisely, computes`U`, `S`, `V` such that

```c
M = U*T*transpose(V)
```

, where
`T` is the diagonal matrix constructed from `S`,the vector of singular values.

计算一个 3-3 矩阵的辛格值分解。

The second form of this function simply returns the vector of singular values.

3Ã3 矩阵。更确切地说，计算 U、S、V，使 M=U*T*transpose(V)，其中 T 是由 S 构建的对角线矩阵。
