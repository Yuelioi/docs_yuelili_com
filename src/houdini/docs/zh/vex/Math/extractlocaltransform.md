---
title: extractlocaltransform
order: 25
category:
  - vex
---



Since 18.0

`matrix extractlocaltransform(matrix world, matrix parent\_world, matrix parent\_local, int scale\_inherit\_mode)`

Returns a new local transform given its world and new parent transforms.

`matrix extractlocaltransform(matrix world, matrix parent\_world, matrix parent\_local, int mode, matrix &effective\_local\_transform)`

Returns a new world transform given its local and parent world transforms. The local transform including any inherited scales is stored in the effective_local_transform matrix;

## Arguments

`scale_inherit_mode`

Specifies how scale inheritance from the parent transform is applied to the result. It is one of the following defines from `math.h`:

- `SCALE_INHERIT_DEFAULT` (0) - simple inheritance:

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
