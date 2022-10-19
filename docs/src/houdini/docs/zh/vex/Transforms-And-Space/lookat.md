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

计算一个旋转矩阵或角度，使负的 Z 轴沿着变换下的向量（从）定向。如果指定了一个向上的矢量，这将决定滚动的方向。

`xyz`是在`$HFS/houdini/support/vex/include/math.h`中定义的一个旋转顺序。

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
