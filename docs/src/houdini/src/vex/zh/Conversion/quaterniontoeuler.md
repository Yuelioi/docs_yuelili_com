---
title: quaterniontoeuler
order: 9
category:
  - vex
---

自 17.0 以来

`vector quaterniontoeuler(vector4 orient, int order)`

从一个代表四元数的向量 4 创建一个代表欧拉角的向量。

角度的单位是弧度。使用`degrees()`函数将弧度转换为度。

用顺序整数指定旋转顺序。使用`$HH/vex/include/math.h`中定义的常数（例如，`XFORM_XYZ`）。

更多信息，请参阅[数据类型](.../lang.html) () (#data-types)和[点运算器](.../lang.html) () (#dot-operator)。

## See also

- [dihedral](dihedral.html)
- [qconvert](qconvert.html)
- [quaternion](quaternion.html)
- [quaternion](eulertoquaternion.html)

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
