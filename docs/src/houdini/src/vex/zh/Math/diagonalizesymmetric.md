---
title: diagonalizesymmetric
order: 15
category:
  - vex
---

自 17.0 以来

`matrix3 diagonalizesymmetric(matrix3 symmat, vector &diag)`

[对角线化](http://en.wikipedia.org/wiki/Diagonalizable_matrix)改为[对称矩阵](http://en.wikipedia.org/wiki/Symmetric_matrix)。

返回正交矩阵，该矩阵与第二个参数中隐含的对角线矩阵相结合，将形成原始对称矩阵。

这对分析一系列外积更新的总和结果很有用。

## Arguments

`symmat`

要对角化的对称矩阵。

`diag`

对角线矩阵的对角线元素。

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
