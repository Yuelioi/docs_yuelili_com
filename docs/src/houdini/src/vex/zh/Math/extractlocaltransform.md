---
title: extractlocaltransform
order: 25
category:
  - vex
---

自 18.0 以来

`matrix extractlocaltransform(matrix world, matrix parent_world, matrix parent_local, int scale_inherit_mode)`

返回一个新的局部变换，给定其世界和新的父变换。

`matrix extractlocaltransform(matrix world, matrix parent_world, matrix parent_local, int mode, matrix &effective_local_transform)`

返回一个新的世界变换，给定其本地和父世界变换。包括任何继承的尺度在内的本地变换被存储在 effective_local_transform 矩阵中。

## Arguments

`scale_inherit_mode`

指定如何将来自父变换的比例继承应用于结果。它是以下来自`math.h`的定义之一。

- `SCALE_INHERIT_DEFAULT` (0) - 简单继承。

```c
world = local * parent_world

```

- `SCALE_INHERIT_OFFSET_ONLY` (1) - child doesn’t scale with the parent local scales, but local translation is scaled:

```c
world = local_scale_rotates * invert(parent_local_scales) * local_translates * parent_world

```

- `SCALE_INHERIT_OFFSET_AND_SCALE` (2) - local translation is scaled as before but parent local scaling is also reapplied by the child in local space:

```c
world = parent_local_scales * local_scale_rotates * invert(parent_local_scales) * T * parent_world

```

- `SCALE_INHERIT_SCALE_ONLY` (3) - local translation is not scaled, but parent local scaling is reapplied by the child in local space:

```c
world = parent_local_scales * local * invert(parent_local_scales) * parent_world

```

- `SCALE_INHERIT_IGNORE` (4) - child completely ignores any parent local scaling:

```c
world = local * invert(parent_local_scales) * parent_world

```

## See also

- [combinelocaltransform](combinelocaltransform.html)

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
