---
title: maketransform
order: 8
category:
  - vex
---

`matrix3 maketransform(vector zaxis, vector yaxis)`

`matrix3 maketransform(int xyz, vector angles)`

`matrix maketransform(vector zaxis, vector yaxis, vector translate)`

`matrix maketransform(int trs, int xyz, vector t, vector r)`

`matrix maketransform(int trs, int xyz, vector t, vector r, vector s)`

`matrix maketransform(int trs, int xyz, vector t, vector r, vector s, vector p)`

`matrix maketransform(int trs, int xyz, vector t, vector r, vector s, vector p, vector pr)`

`matrix maketransform(int trs, int xyz, vector t, vector r, vector s, vector p, vector pr, vector shears)`

构建一个 3×3 或 4×4 的变换矩阵。

`maketransform(int trs, ...)`建立一个一般的 4×4 变换矩阵，给定一个变换顺序(trs)，一个旋转顺序(xyz)，一个代表平移(t)、旋转(r)、比例(s)的向量(可以选择支点(p)、支点旋转(pr)和剪切力(shears))。trs 和 xyz 参数的规格可以在`$HFS/houdini/vex/include/math.h`中找到。例如，XFORM_SRT 将进行 trs 顺序的缩放、旋转、平移；而 XFORM_XYZ 将进行 xyz 顺序的 X、Y、Z 旋转。

`maketransform(int xyz, vector angles)`使用与`maketransform(int trs, ...)`相同的规则建立一个 3×3 旋转矩阵，但只使用旋转参数。

`maketransform(vector zaxis, yaxis, ...)`建立一个 3×3 变换矩阵或 4×4 变换矩阵。矩阵将被构建，从而使 Z 轴被转换为与给定的向上矢量（Y 轴）指定的 Z 轴。因此，maketransform({0,0,1}, {0,1,0})将产生一个相同的矩阵。返回 4×4 变换的版本将把平移应用到 4×4 矩阵上。这个函数与[lookat](lookat.html) () ("计算一个旋转矩阵或角度，使负 Z 轴沿着变换下的矢量(to-from)定向。")函数非常相似。传入的向量不是归一化的，这意味着在构建变换时应该保留比例。

::: info Note

与大多数 VEX 函数不同，这个函数希望旋转的单位是度，而不是弧度。

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
