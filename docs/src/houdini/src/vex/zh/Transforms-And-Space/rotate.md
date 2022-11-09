---
title: rotate
order: 22
category:
  - vex
---

`void rotate(matrix2 &m, float amount)`

`void rotate(matrix3 &m, float amount, vector axis)`

`void rotate(matrix &m, float amount, vector axis)`

`void rotate(matrix3 &m, vector angles, int xyz)`

`void rotate(matrix &m, vector angles, int xyz)`

`void rotate(matrix3 &m, float angle, int axis)`

`void rotate(matrix &m, float angle, int axis)`

Applies a rotation to the given matrix. The angles must be given in
radians and the axis must be normalized. The xyz argument is the rotate order.
The axis can also be given as an integer where XAXIS=1, YAXIS=2 and ZAXIS=4.

## See also

- [pretranslate](pretranslate.html)
- [prerotate](prerotate.html)
- [prescale](prescale.html)
- [translate](translate.html)
- [scale](scale.html)

|
matrix

[__uniform_mul](### uniform_mul.html)

[__uniform_premul](### uniform_premul.html)

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
