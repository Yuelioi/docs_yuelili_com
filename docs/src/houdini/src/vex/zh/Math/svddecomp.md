---
title: svddecomp
order: 73
category:
  - vex
---

自 18.0 以来

`void svddecomp(matrix3 input_M, matrix3 &output_U, vector &output_S, matrix3 &output_V)`

`vector svddecomp(matrix3 input_M)`

计算一个 3×3 矩阵的[奇异值分解](http://en.wikipedia.org/wiki/Singular_value_decomposition)。更确切地说，计算`U`，`S`，`V`，使`M = U*T*transpose(V)`，其中`T`是由`S`构建的对角线矩阵，即奇异值矢量。

这个函数的第二种形式只是返回奇异值的向量。

基体

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
