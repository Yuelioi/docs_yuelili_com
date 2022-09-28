---
title: extractlocaltransform
order: 23
category:
  - houdini
---
    
## 描述

Extracts Local Transform from a World Transform with Scale Inheritance.

| Since | 18.0 |
| ----- | ---- |

`matrix extractlocaltransform(matrix world, matrix parent_world, matrix parent_local, int scale_inherit_mode)`

Returns a new local transform given its world and new parent transforms.

返回一个新的本地变换，给定其世界变换和新的父变换。

`matrix extractlocaltransform(matrix world, matrix parent_world, matrix parent_local, int mode, matrix &effective_local_transform)`

Returns a new world transform given its local and parent world transforms. The
local transform including any inherited scales is stored in the
effective_local_transform matrix;

返回一个新的世界变换，给定其本地和父世界变换。包括任何继承的尺度在内的本地变换被存储在 effective_local_transform 矩阵中。

```c
`scale_inherit_mode
```

`

Specifies how scale inheritance from the parent transform is applied to the
result. It is one of the following defines from `math.h`:

指定如何将来自父变换的比例继承应用于结果。它是以下来自 mmath.h 的定义之一。

-

```c
SCALE_INHERIT_DEFAULT
```

(0) - simple inheritance:

SCALE_INHERIT_DEFAULT(0) - 简单继承。

        world = local * parent_world

-

```c
SCALE_INHERIT_OFFSET_ONLY
```

(1) - child doesn‘t scale with the parent local scales, but local translation is scaled:

SCALE_INHERIT_OFFSET_ONLY(1) - 子代不使用父代的局部比例，但局部翻译是有比例的。

        world = local_scale_rotates * invert(parent_local_scales) * local_translates * parent_world

-

```c
SCALE_INHERIT_OFFSET_AND_SCALE
```

(2) - local translation is scaled as before but parent local scaling is also reapplied by the child in local space:

SCALE_INHERIT_OFFSET_AND_SCALE(2) - 本地翻译的比例和以前一样，但父本的本地比例也由子本空间重新应用。

        world = parent_local_scales * local_scale_rotates * invert(parent_local_scales) * T * parent_world

-

```c
SCALE_INHERIT_SCALE_ONLY
```

(3) - local translation is not scaled, but parent local scaling is reapplied by the child in local space:

SCALE_INHERIT_SCALE_ONLY(3) - 本地平移不被缩放，但是子代在本地空间重新应用父代的本地缩放。

        world = parent_local_scales * local * invert(parent_local_scales) * parent_world

-

```c
SCALE_INHERIT_IGNORE
```

(4) - child completely ignores any parent local scaling:

SCALE_INHERIT_IGNORE(4) - 子代完全忽略任何父代的本地缩放。

        world = local * invert(parent_local_scales) * parent_world
