---
title: maketransform
order: 7
category:
  - houdini
---
    
## 描述

Builds a 3Ã3 or 4Ã4 transform matrix.

```c
matrix3  maketransform(vector zaxis, vector yaxis)
```

```c
matrix3  maketransform(int xyz, vector angles)
```

```c
matrix  maketransform(vector zaxis, vector yaxis, vector translate)
```

```c
matrix  maketransform(int trs, int xyz, vector t, vector r)
```

```c
matrix  maketransform(int trs, int xyz, vector t, vector r, vector s)
```

`matrix maketransform(int trs, int xyz, vector t, vector r, vector s, vector p)`

`matrix maketransform(int trs, int xyz, vector t, vector r, vector s, vector p, vector pr)`

`matrix maketransform(int trs, int xyz, vector t, vector r, vector s, vector p, vector pr, vector shears)`

Builds a 3Ã3 or 4Ã4 transform matrix.

构建一个 3Ã3 或 4Ã4 的变换矩阵。

```c
maketransform(int trs, ...)
```

builds a general 4Ã4 transform matrixgiven an
order of transformations (trs), an order for rotations(xyz), a vector
representing the translation (t), rotation(r), scale (s) (and optionally a
pivot (p), pivot rotation(pr), and shears (shears)). The specifications for
the trs andxyz parameters can be found in

```c
$HFS/houdini/vex/include/math.h
```

.For example, XFORM_SRT will do the trs order
Scale, Rotate, Translate; and XFORM_XYZ will do the xyz rotation order X, Y,
Z.

maketransform(int trs, ...)建立一个普通的 4Ã4 变换矩阵

```c
maketransform(int xyz, vector angles)
```

builds a 3Ã3 rotation matrixusing the
same rules as

```c
maketransform(int trs, ...)
```

but only usingthe rotation
parameters.

给出一个变换的顺序(trs)，一个旋转的顺序

```c
maketransform(vector zaxis, yaxis, ...)
```

builds either a 3Ã3 transformmatrix
or a 4Ã4 transform matrix. The matrix will be constructed so that the z-axis
will be transformed to the z-axis specified with the given up vector (yaxis).
Thus, maketransform({0,0,1}, {0,1,0}) will result in an identity matrix. The
version which returns a 4Ã4 transform will apply the translation to the 4Ã4
matrix. This function is very similar to the [lookat](lookat.html "Computes a
rotation matrix or angles to orient the negative z-axis along the vector (to-
from) under the transformation.") function. The vectors passed in are _not_
normalized meaning that scales should be preserved in construction of the
transform.

(xyz)，一个代表平移(t)、旋转

Note

## 描述

radians.

(r)、比例(s)（以及可选择的支点(p)、支点旋转
