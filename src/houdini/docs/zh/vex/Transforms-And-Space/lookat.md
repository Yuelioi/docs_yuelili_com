---
title: lookat
order: 7
category:
  - vex
---

`matrix3 lookat(vector from, vector to)`

`matrix3 lookat(vector from, vector to, float roll)`

`matrix3 lookat(vector from, vector to, vector up)`

`vector lookat(vector from, vector to, float roll, int xyz)`

`vector lookat(vector from, vector to, vector up, int xyz)`

Computes a rotation matrix or angles to orient the negative z-axis along the
vector (to-from) under the transformation. If an up vector is specified, this
will determine the roll.

`xyz` is a rotation order defined in `$HFS/houdini/support/vex/include/math.h`.


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
