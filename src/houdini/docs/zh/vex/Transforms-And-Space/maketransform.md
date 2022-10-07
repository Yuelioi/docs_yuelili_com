---
title: maketransform
order: 8
category:
  - vex
---

`matrix3 maketransform(vector zaxis, vector yaxis)`

`matrix3 maketransform(int xyz, vector angles)`

`matrix maketransform(vector zaxis, vector yaxis, vector translate)`

`matrix maketransform(int trs, int xyz, vector t, vector r)`

`matrix maketransform(int trs, int xyz, vector t, vector r, vector s)`

`matrix maketransform(int trs, int xyz, vector t, vector r, vector s, vector p)`

`matrix maketransform(int trs, int xyz, vector t, vector r, vector s, vector p, vector pr)`

`matrix maketransform(int trs, int xyz, vector t, vector r, vector s, vector p, vector pr, vector shears)`

Builds a 3×3 or 4×4 transform matrix.

`maketransform(int trs, ...)` builds a general 4×4 transform matrix
given an order of transformations (trs), an order for rotations
(xyz), a vector representing the translation (t), rotation
(r), scale (s) (and optionally a pivot (p), pivot rotation
(pr), and shears (shears)). The specifications for the trs and
xyz parameters can be found in `$HFS/houdini/vex/include/math.h`. For example, XFORM_SRT will do the trs order Scale, Rotate, Translate; and XFORM_XYZ will do the xyz rotation order X, Y, Z.

`maketransform(int xyz, vector angles)` builds a 3×3 rotation matrix
using the same rules as `maketransform(int trs, ...)` but only using
the rotation parameters.

`maketransform(vector zaxis, yaxis, ...)` builds either a 3×3 transform
matrix or a 4×4 transform matrix. The matrix will be constructed so that the
z-axis will be transformed to the z-axis specified with the given up vector
(yaxis). Thus, maketransform({0,0,1}, {0,1,0}) will result in an identity
matrix. The version which returns a 4×4 transform will apply the translation
to the 4×4 matrix. This function is very similar to the [lookat](lookat.html "Computes a rotation matrix or angles to orient the negative z-axis along the vector (to-from) under the transformation.")
function. The vectors passed in are _not_ normalized meaning that scales
should be preserved in construction of the transform.

::: info Note

Unlike most VEX functions, this function expects rotations
in _degrees_, not radians.


matrix

[\_\_uniform\_mul](### uniform_mul.html)

[\_\_uniform\_premul](### uniform_premul.html)

[combinelocaltransform](combinelocaltransform.html)

[cracktransform](cracktransform.html)

[determinant](determinant.html)

[diagonalizesymmetric](diagonalizesymmetric.html)

[dihedral](dihedral.html)

[eigenvalues](eigenvalues.html)

[extractlocaltransform](extractlocaltransform.html)

[ident](ident.html)

[instance](instance.html)

[invert](invert.html)

[lookat](lookat.html)

[maketransform](maketransform.html)

[outerproduct](outerproduct.html)

[premul](premul.html)

[prerotate](prerotate.html)

[prescale](prescale.html)

[pretranslate](pretranslate.html)

[rotate](rotate.html)

[scale](scale.html)

[smoothrotation](smoothrotation.html)

[svddecomp](svddecomp.html)

[translate](translate.html)

[transpose](transpose.html)
