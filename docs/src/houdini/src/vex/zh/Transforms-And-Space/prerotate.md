---
title: prerotate
order: 18
category:
  - vex
---

自 17.5 以来

`void prerotate(matrix3 &m, float amount, vector axis)`

`void prerotate(matrix &m, float amount, vector axis)`

`void prerotate(matrix3 &m, vector angles, int xyz)`

`void prerotate(matrix &m, vector angles, int xyz)`

`void prerotate(matrix3 &m, float angle, int axis)`

`void prerotate(matrix &m, float angle, int axis)`

对给定的矩阵应用一个预旋转。角度必须以弧度为单位，轴必须被规范化。xyz 参数是旋转的顺序。轴也可以用整数给出，其中 XAXIS=1，YAXIS=2，ZAXIS=4。

## See also

- [pretranslate](pretranslate.html)
- [prescale](prescale.html)
- [translate](translate.html)
- [rotate](rotate.html)
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
