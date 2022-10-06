---
title: smoothrotation
order: 25
category:
  - houdini
---
    
## 描述

Returns the closest equivalent Euler rotations to a reference rotation.

```c
vector  smoothrotation(int order, vector r, vector r_reference)
```

Returns the Euler rotations that have the closest values to r_reference while
still describing the same orientation as r.Typically, r_reference will be the
rotations from the previous sample or frame.

返回与参考值最接近的欧拉旋转，同时描述的方向与 r 相同。

The angles are in radians.Use the `radians()` function to convert degrees into
radians.

通常情况下，r_reference 将是前一个样本或框架的旋转。

The rotation order is specified by the order parameter. Use the constants
defined in

```c
$HH/vex/include/math.h
```

(for example, `XFORM_XYZ`).

角度的单位是弧度。 使用 theradians()函数将度数转换成弧度。
