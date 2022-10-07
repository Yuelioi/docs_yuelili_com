---
title: quaternion
order: 55
category:
  - vex
---

`vector4 quaternion(matrix3 rotations)`

从一个 3×3 的旋转矩阵中创建一个代表四元数的向量 4。

`vector4 quaternion(float angle, vector axis)`

从一个角度和轴创建一个代表四元数的向量 4。角度的单位是弧度。

`vector4 quaternion(vector angleaxis)`

从一个组合的角度/轴创建一个代表四元数的向量 4。这是标准化的旋转轴乘以旋转角度（弧度）。

以前有一个第四种形式，采取旋转矢量。它已被重新命名为 "欧拉转四元数"，现在需要弧度。

更多信息，请参阅[数据类型](.../lang.html) () (#data-types)和[点运算器](.../lang.html) () (#dot-operator)。

## See also

- [dihedral](dihedral.html)
- [qconvert](qconvert.html)
- [eulertoquaternion](eulertoquaternion.html)

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
