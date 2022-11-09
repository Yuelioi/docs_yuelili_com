---
title: svddecomp
order: 73
category:
  - vex
---

Since

18.0

`void svddecomp(matrix3 input_M, matrix3 &output_U, vector &output_S, matrix3 &output_V)`

`vector svddecomp(matrix3 input_M)`

Computes the [singular value decomposition](http://en.wikipedia.org/wiki/Singular_value_decomposition) of a
3×3 matrix. More precisely, computes `U`, `S`, `V` such that
`M = U*T*transpose(V)`, where `T` is the diagonal matrix constructed from `S`,
the vector of singular values.

The second form of this function simply returns the vector of singular values.

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
