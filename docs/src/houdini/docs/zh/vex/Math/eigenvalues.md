---
title: eigenvalues
order: 20
category:
  - vex
---

`void eigenvalues(int &nroot, matrix3 mat, vector &real, vector &imaginary)`

计算一个 3×3 矩阵的[特征值](http://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors)。

## Arguments

`nroot`

该函数用实数根的数量覆盖了这个变量。

`mat`

要计算特征值的矩阵。

`real`, `imaginary`

这两个向量的分量被覆盖为每个特征值的相应的实部和虚部对。例如，`real[0]`和`imaginary[0]`包含第一个特征值的实部和虚部。

基体

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
