## 描述

Creates a vector4 representing a quaternion from euler angles.


```c
vector4  eulertoquaternion(vector rotations, int order)
```


Creates a vector4 representing a quaternion from a vector representing Euler
rotations in X, Y, and Z.

从代表欧拉旋转的X、Y和Z方向的矢量创建一个代表四元数的矢量4。

The angles are in radians.Use the `radians()` function to convert degrees into
radians.

角度的单位是弧度。 使用theradians()函数将度数转换成弧度。

Specify the rotation order with the order integer. Use the constants defined
in 
```c
$HH/vex/include/math.h
```
 (for example, `XFORM_XYZ` will do the rotation
order x, y, z).

用orderinteger指定旋转顺序。使用$HH/vex/include/math.h中定义的常数（例如，XFORM_XYZ将做旋转顺序x，y，z）。

