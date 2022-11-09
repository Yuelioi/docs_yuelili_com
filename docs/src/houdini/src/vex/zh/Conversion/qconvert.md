---
title: qconvert
order: 8
category:
  - vex
---

`matrix3 qconvert(vector4 quaternion)`

将一个由矢量 4 表示的四元数转换为矩阵 3 表示。

`matrix qconvert(vector4 quaternion, vector offset)`

将一个由矢量 4 表示的四元数转换为一个矩阵表示。将偏移量作为一个后置的翻译，因此产生的矩阵将首先通过四元数旋转一个点，然后再加上偏移量。

`vector qconvert(vector4 quaternion)`

将一个由矢量 4 表示的四元数转换成一个角度/轴矢量。

四元数

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
