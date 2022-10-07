---
title: qconvert
order: 8
category:
  - vex
---

`matrix3 qconvert(vector4 quaternion)`

Converts a quaternion represented by a vector4 to a matrix3 representation.

`matrix qconvert(vector4 quaternion, vector offset)`

Converts a quaternion represented by a vector4 to a matrix representation.
Applies the offset as a post-translation, so the resulting matrix will
first rotate a point by the quaternion and then add the offset.

`vector qconvert(vector4 quaternion)`

Converts a quaternion represented by a vector4 into a angle/axis vector.

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
