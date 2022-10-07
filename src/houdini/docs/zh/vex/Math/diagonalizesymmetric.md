---
title: diagonalizesymmetric
order: 15
category:
  - vex
---



Since 17.0

`matrix3 diagonalizesymmetric(matrix3 symmat, vector &diag)`

[Diagonalize](http://en.wikipedia.org/wiki/Diagonalizable_matrix) a [symmetric matrix](http://en.wikipedia.org/wiki/Symmetric_matrix).

Returns the orthogonal matrix which, combined with the diagonal matrix
implicit in the second argument, will form the original symmetric matrix.

This can be useful for analyzing the result of summing a series of
outerproduct updates.

## Arguments

`symmat`

The symmetric matrix to diagonalize.

`diag`

The diagonal elements of the diagonal matrix.


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
