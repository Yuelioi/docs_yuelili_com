---
title: slerp
order: 14
category:
  - houdini
---

## Description

`vector4 slerp(vector4 q1, vector4 q2, float bias)`

Blends between quaternions q1 and q2 based on the bias.

`vector4 slerp(vector4 qs[], float weights[])`

Blends between any number of quaternions with the specified corresponding
weights. The weights are **not** normalized before blending.
`slerp(q1,q2,bias)` should be approximately equivalent to `slerp(array(q1,q2), array(1.0-bias,bias))`.

`matrix3 slerp(matrix3 m1, matrix3 m2, float bias)`

`matrix slerp(matrix m1, matrix m2, float bias)`

Blends between matrix m1 and m2 based on the bias.

`matrix3 slerp(matrix3 ms[], float weights[])`

`matrix slerp(matrix ms[], float weights[])`

Blends between any number of matrices with the specified corresponding weights
via blending of their components via polar decomposition. The weights are
normalized before blending.

### interp

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

### quaternion

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
