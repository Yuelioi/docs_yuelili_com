---
title: instance
order: 6
category:
  - vex
---

`matrix instance(vector P, vector N)`

`matrix instance(vector P, vector N, vector scale)`

`matrix instance(vector P, vector N, vector scale, vector pivot)`

`matrix instance(vector P, vector N, vector scale, vector4 rotate, vector up)`

`matrix instance(vector P, vector N, vector scale, vector4 rotate, vector up, vector pivot)`

`matrix instance(vector P, vector N, vector scale, vector4 rotate, vector4 orient)`

`matrix instance(vector P, vector N, vector scale, vector4 rotate, vector4 orient, vector pivot)`

从给定的参数创建一个变换矩阵，使用与[Copy SOP](../../nodes/sop/copy.html)相同的方法来变换其输出实例。实例被放置在点`P`上，沿着法线方向`N`定向，并且可以选择按`scale`缩放。可以提供一个可选的`pivot`参数作为实例的局部转换点。

该函数支持两种方法来设置旋转。第一种方法需要一个明确的`up`矢量，它应该与`N`相切。这个 "向上 "矢量和 "N "一起，被用来构建一个正交框架，在这个框架中发生旋转。第二种方法使用相对于 XYZ 轴的明确方向来构建框架。

## See also

- [scale](scale.html)
- [rotate](rotate.html)
- [translate](translate.html)

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
