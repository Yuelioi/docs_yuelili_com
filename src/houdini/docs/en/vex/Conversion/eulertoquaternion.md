---
title: eulertoquaternion
order: 6
category:
  - houdini
---

## Description

`vector4 eulertoquaternion(vector rotations, int order)`

Creates a vector4 representing a quaternion from a vector representing Euler
rotations in X, Y, and Z.

The angles are in radians. Use the `radians()` function to convert degrees
into radians.

Specify the rotation order with the order integer. Use the constants defined
in `$HH/vex/include/math.h` (for example, `XFORM_XYZ` will do the rotation
order x, y, z).

## See also

- [dihedral](dihedral.html)
- [qconvert](qconvert.html)
- [quaternion](quaternion.html)

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
