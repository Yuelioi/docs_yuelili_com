---
title: setagentworldtransform
order: 60
category:
  - houdini
---
    
## 描述

Overrides the world space transform of an agent primitive‘sbone.

`int setagentworldtransform(int geohandle, int prim, matrix transform, int index)`

`geohandle`

Handle to the geometry to write to. `geoself()` can be used to get a handle to
the current geometry.

要写入的几何体的句柄。geoself()可用于获取当前几何体的句柄。

`prim`

The primitive number.

基元编号。

`transform`

The new transform (in world space) of the bone.

骨骼的新变换（在世界空间）。

`index`

Index of a transform in the agent‘srig.

Agentâs rig 中的一个变换的索引。
