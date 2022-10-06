---
title: eigenvalues
order: 18
category:
  - houdini
---
    
## 描述

Computes the eigenvalues of a 3Ã3 matrix.

```c
void  eigenvalues(int &nroot, matrix3 mat, vector &real, vector &imaginary)
```

Computes the [eigenvalues
\_\_](http://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors)of a 3Ã3
matrix.

计算一个 3-3 矩阵的特征值。

`nroot`

The function overwrites this variable with the number of real roots.

该函数用实根数覆盖该变量。

`mat`

The matrix to compute the eigenvalues for.

要计算特征值的矩阵。

`real`, `imaginary`

The components of these two vectors are overwritten with corresponding pairs
of real and imaginary parts of each eigenvalue.For example, `real[0]` and
`imaginary[0]` contain the real and imaginary parts of the first eigenvalue.

这两个向量的组成部分被覆盖为每个特征值的相应的实部和虚部。
