---
title: prerotate
order: 18
category:
  - houdini
---

## Description

Since 17.5

`void prerotate(matrix3 &m, float amount, vector axis)`

`void prerotate(matrix &m, float amount, vector axis)`

`void prerotate(matrix3 &m, vector angles, int xyz)`

`void prerotate(matrix &m, vector angles, int xyz)`

`void prerotate(matrix3 &m, float angle, int axis)`

`void prerotate(matrix &m, float angle, int axis)`

Applies a prerotation to the given matrix. The angles must be given in radians
and the axis must be normalized. The xyz argument is the rotate order. The
axis can also be given as an integer where XAXIS=1, YAXIS=2 and ZAXIS=4.

## See also

- [pretranslate](pretranslate.html)
- [prescale](prescale.html)
- [translate](translate.html)
- [rotate](rotate.html)
- [scale](scale.html)

### matrix

[### uniform_mul](### uniform_mul.html)

[### uniform_premul](### uniform_premul.html)

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
