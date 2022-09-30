---
title: cracktransform
order: 3
category:
  - houdini
---
    
## 描述

Depending on the value of c, returns the translate (c=0), rotate  
(c=1), scale (c=2), or shears (c=3) component of the transform (xform).

`vector cracktransform(int trs, int xyz, int c, vector pivot, vector pivot_rotate, matrix xform)`

```c
vector  cracktransform(int trs, int xyz, int c, vector pivot, matrix xform)
```

Depending on the value of c, returns the translate (`c=0`), rotate(`c=1` or
`c=4`), scale (`c=2`) or shears (`c=3`) component of the transform (xform).
Thefunction uses the given transform and rotation orders (trs andxyz) , the
given pivot point (pivot) and optional pivot rotation (pr) to calculate the
returnvalue. The specifications for the trs and xyz parameters can befound in

```c
$HFS/houdini/vex/include/math.h
```

.

根据 c 的值，返回平移（c=0）、旋转

Note

Rotation angles (when `c=1`) are returned in degrees, whereas many other VEX
functions use radians.You can use the [radians](radians.html "Converts the

## 描述

angles in degrees to a vector of angles in radians.For example: `vector angles = radians(cracktransform(XFORM_TRS, XFORM_XYZ, 1, {0,0,0}, M));`

(c=1 或 c=4)、缩放(c=2)或剪切(c=3)的变换分量（xform）。该

Note

Rotation angles (when `c=4`) are returned in radians.

函数使用给定的变换和旋转命令（trs 和 xyz），给定的支点（pivot）和可选的支点旋转（pr）来计算返回值。

`void cracktransform(int trs, int xyz, vector pivot, vector pivot_rotate, matrix xform, vector &t, vector &r, vector &s, vector &shears)`

Returns the translate, rotate, scale, and shear components of xform in t, r,
s, and shears, respectively.If more than one component is needed, using this
overload is more efficient than making multiple calls to the other function
signature.

值。关于 trs 和 xyz 参数的规格可以在

`void cracktransform(int trs, int xyz, vector pivot, matrix xform, vector &t, vector &r, vector &s)`

Returns the translate, rotate, and scale of xform in t, r, s respectively.This
overload doesn‘t support pivot_rotate or shears.If more than one component
is needed, using this overload is more efficient than making multiple calls to
the other function signature.

在$HFS/houdini/vex/include/math.h 中找到。
