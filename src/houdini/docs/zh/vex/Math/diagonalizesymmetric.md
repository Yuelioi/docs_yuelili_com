---
title: diagonalizesymmetric
order: 13
category:
  - houdini
---
    
## 描述

Diagonalizes Symmetric Matrices.

| Since | 17.0 |
| ----- | ---- |

```c
matrix3  diagonalizesymmetric(matrix3 symmat, vector &diag)
```

[Diagonalize
\_\_](http://en.wikipedia.org/wiki/Diagonalizable_matrix)a[symmetric matrix
\_\_](http://en.wikipedia.org/wiki/Symmetric_matrix).

对角线化不对称矩阵。

Returns the orthogonal matrix which, combined with the diagonal matriximplicit
in the second argument, will form the original symmetric matrix.

返回正交矩阵，该矩阵与第二个参数中隐含的对角线矩阵

This can be useful for analyzing the result of summing a series ofouterproduct
updates.

构成原始的对称矩阵。

`symmat`

The symmetric matrix to diagonalize.

这对于分析一系列外积更新的结果很有用。

`diag`

The diagonal elements of the diagonal matrix.

外积更新的结果。
