---
title: cracktransform
order: 4
category:
  - vex
---

`vector cracktransform(int trs, int xyz, int c, vector pivot, vector pivot\_rotate, matrix xform)`

`vector cracktransform(int trs, int xyz, int c, vector pivot, matrix xform)`

根据 c 的值，返回变换（xform）的平移（`c=0`）、旋转（`c=1`或`c=4`）、缩放（`c=2`）或剪切（`c=3`）部分。该函数使用给定的变换和旋转命令（trs 和 xyz），给定的支点（pivot）和可选的支点旋转（pr）来计算返回值。trs 和 xyz 参数的规格可以在`$HFS/houdini/vex/include/math.h`中找到。

::: info Note

旋转角度（当`c=1`时）以度数返回，而许多其他 VEX 函数使用弧度。你可以使用[radians](radians.html) () ("将参数从度数转换为弧度。") VEX 函数将度数的角度向量转换为弧度的角度向量。例如：`vector angles = radians(cracktransform(XFORM_TRS, XFORM_XYZ, 1, {0,0,0}, M));`。

::: info Note

旋转角度（当`c=4`时）以弧度返回。

`void cracktransform(int trs, int xyz, vector pivot, vector pivot\_rotate, matrix xform, vector &t, vector &r, vector &s, vector &shears)`

返回 xform 的平移、旋转、缩放和剪切分量，分别为 t、r、s 和剪切。如果需要一个以上的分量，使用这个重载比多次调用其他函数签名更有效。

`void cracktransform(int trs, int xyz, vector pivot, matrix xform, vector &t, vector &r, vector &s)`

分别返回 xform 在 t、r、s 中的平移、旋转和比例。这个重载不支持 pivot_rotate 或 shears。如果需要一个以上的组件，使用这个重载比多次调用其他函数签名更有效。

## See also

- [quaternion](quaternion.html)
- [polardecomp](polardecomp.html)
- [eulertoquaternion](eulertoquaternion.html)
- [qconvert](qconvert.html)

|
math

[Du](Du.html)

[Dv](Dv.html)

[Dw](Dw.html)

[abs](abs.html)

[acos](acos.html)

[asin](asin.html)

[atan](atan.html)

[atten](atten.html)

[avg](avg.html)

[cbrt](cbrt.html)

[ceil](ceil.html)

[cos](cos.html)

[cosh](cosh.html)

[cracktransform](cracktransform.html)

[cross](cross.html)

[degrees](degrees.html)

[dot](dot.html)

[erf](erf.html)

[erf_inv](erf_inv.html)

[erfc](erfc.html)

[exp](exp.html)

[floor](floor.html)

[frac](frac.html)

[fuzzify](fuzzify.html)

[getderiv](getderiv.html)

[isfinite](isfinite.html)

[isnan](isnan.html)

[log](log.html)

[log10](log10.html)

[max](max.html)

[min](min.html)

[pow](pow.html)

[product](product.html)

[radians](radians.html)

[resample_linear](resample_linear.html)

[rint](rint.html)

[shl](shl.html)

[shr](shr.html)

[shrz](shrz.html)

[sign](sign.html)

[sin](sin.html)

[sinh](sinh.html)

[solvecubic](solvecubic.html)

[solvepoly](solvepoly.html)

[solvequadratic](solvequadratic.html)

[solvetriangleSSS](solvetriangleSSS.html)

[sqrt](sqrt.html)

[sum](sum.html)

[tan](tan.html)

[tanh](tanh.html)

[trunc](trunc.html)

[variance](variance.html)

|
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
