## 描述

Computes the singular value decomposition of a 3Ã3 matrix.

Since | 18.0  
---|---  
  
`void  svddecomp(matrix3 input_M, matrix3 &output_U, vector &output_S, matrix3
&output_V)`


```c
vector  svddecomp(matrix3 input_M)
```


Computes the [singular value decomposition
__](http://en.wikipedia.org/wiki/Singular_value_decomposition)of a3Ã3 matrix.
More precisely, computes`U`, `S`, `V` such that
```c
M = U*T*transpose(V)
```
, where
`T` is the diagonal matrix constructed from `S`,the vector of singular values.

计算一个3-3矩阵的辛格值分解。

The second form of this function simply returns the vector of singular values.

3Ã3矩阵。更确切地说，计算U、S、V，使M=U*T*transpose(V)，其中T是由S构建的对角线矩阵。

