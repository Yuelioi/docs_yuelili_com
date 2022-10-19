---
title: eulertoquaternion
order: 6
category:
  - vex
---

`vector4 eulertoquaternion(vector rotations, int order)`

从代表欧拉旋转的 X、Y 和 Z 方向的矢量创建一个代表四元数的矢量 4。

角度的单位是弧度。使用`radians()`函数，将度数转换成弧度。

用阶数整数指定旋转顺序。使用`$HH/vex/include/math.h`中定义的常数（例如，`XFORM_XYZ`将做旋转顺序 x、y、z）。

## See also

- [dihedral](dihedral.html)
- [qconvert](qconvert.html)
- [quaternion](quaternion.html)

|
quaternion

[dihedral](dihedral.html)

[eulertoquaternion](eulertoquaternion.html)

[qconvert](qconvert.html)

[qdistance](qdistance.html)

[qinvert](qinvert.html)

[qmultiply](qmultiply.html)

[qrotate](qrotate.html)

[quaternion](quaternion.html)

[quaterniontoeuler](quaterniontoeuler.html)

[slerp](slerp.html)
