---
title: eigenvalues
order: 20
category:
  - vex
---

`void eigenvalues(int &nroot, matrix3 mat, vector &real, vector &imaginary)`

Computes the [eigenvalues](http://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors) of a 3×3 matrix.

## Arguments

`nroot`

The function overwrites this variable with the number of real roots.

`mat`

The matrix to compute the eigenvalues for.

`real`, `imaginary`

The components of these two vectors are overwritten with corresponding pairs of real and imaginary parts of each eigenvalue.
For example, `real[0]` and `imaginary[0]` contain the real and imaginary parts of the first eigenvalue.

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
