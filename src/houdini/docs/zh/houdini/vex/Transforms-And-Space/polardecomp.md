---
title: polardecomp
order: 16
category:
  - houdini
---
    
## 描述

Computes the polar decomposition of a matrix.

```c
matrix3  polardecomp(matrix3 transform)
```

Computes the stretch matrix (S) and the orthogonal matrix (Q) such that `M = S*Q`.This is very useful for shape matching or blending of transforms.

计算拉伸矩阵（S）和正交矩阵（Q），使 M=S\*Q。

` transform`

The matrix (M) to undergo polar decomposition.

这对于形状匹配或混合变换非常有用。

Returns

'Q', the orthogonal matrix that best matches the given transform.

矩阵(M)要进行极坐标分解。

`void polardecomp(matrix3 transform, matrix3 &rot, matrix3 &stretch, int check_determinant=1)`

Show/hide arguments

` &rot`

Returns the orthogonal matrix of the polar decomposition.

Q'，与给定变换最匹配的正交矩阵。

` &stretch`

Returns the stretch matrix of the polar decomposition.

返回极地分解的正交矩阵。

```c
 check_determinant
```

Whether or not to check if there is a negative determinant (scale). If there
is and this is not set to 0, the orthogonal and scale matrices will be
negated.

返回极地分解的拉伸矩阵。
