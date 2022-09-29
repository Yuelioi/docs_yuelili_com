---
title: quaternion
order: 55
category:
  - houdini
---

## Description

`vector4 quaternion(matrix3 rotations)`

Creates a vector4 representing a quaternion from a 3×3 rotational matrix.

`vector4 quaternion(float angle, vector axis)`

Creates a vector4 representing a quaternion from an angle and axis. The angle
is specified in radians.

`vector4 quaternion(vector angleaxis)`

Creates a vector4 representing a quaternion from a combined angle/axis. This
is the normalized rotation axis multiplied by the rotation angle in radians.

There used to be a fourth form that took a rotation vector. It has been
renamed to `eulertoquaternion` and now takes radians.

For more information, see [Data types](../lang.html#data-types) and [Dot
operator](../lang.html#dot-operator).

## See also

- [dihedral](dihedral.html)
- [qconvert](qconvert.html)
- [eulertoquaternion](eulertoquaternion.html)

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
