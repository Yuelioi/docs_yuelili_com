---
title: slerp
order: 14
category:
  - vex
---

`vector4 slerp(vector4 q1, vector4 q2, float bias)`

根据偏差在四元数 q1 和 q2 之间进行混合。

`vector4 slerp(vector4 qs[], float weights[])`

在任意数量的四元数之间进行混合，并指定相应的权重。权重在混合前没有\*\*\*归一化。`slerp(q1,q2,bias)`应该近似于`slerp(array(q1,q2), array(1.0-bias,bias))`。

`matrix3 slerp(matrix3 m1, matrix3 m2, float bias)`

`matrix slerp(matrix m1, matrix m2, float bias)`

根据偏差在矩阵 m1 和 m2 之间进行混合。

`matrix3 slerp(matrix3 ms[], float weights[])`

`matrix slerp(matrix ms[], float weights[])`

通过极地分解混合它们的组件，在任意数量的矩阵之间进行混合，并指定相应的权重。在混合之前，权重被归一化。

插页

[ckspline](ckspline.html)

[clamp](clamp.html)

[cspline](cspline.html)

[efit](efit.html)

[fit](fit.html)

[fit01](fit01.html)

[fit10](fit10.html)

[fit11](fit11.html)

[invlerp](invlerp.html)

[lerp](lerp.html)

[lkspline](lkspline.html)

[lspline](lspline.html)

[slerp](slerp.html)

[smooth](smooth.html)

| 四元数

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
