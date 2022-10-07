---
title: quaterniontoeuler
order: 9
category:
  - vex
---



Since 17.0

`vector quaterniontoeuler(vector4 orient, int order)`

Creates a vector representing euler angles from a vector4 representing a quaternion.

The angles are in radians. Use the `degrees()` function to convert radians into degrees.

Specify the rotation order with the order integer. Use the constants defined in `$HH/vex/include/math.h` (for example, `XFORM_XYZ`).

For more information, see [Data types](../lang.html#data-types) and [Dot operator](../lang.html#dot-operator).



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
