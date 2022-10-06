---
title: setagentlocaltransform
order: 58
category:
  - houdini
---
    
## 描述

Overrides the local space transform of an agent primitive‘sbone.

`int setagentlocaltransform(int geohandle, int prim, matrix transform, int index)`

`geohandle`

Handle to the geometry to write to. `geoself()` can be used to get a handle to
the current geometry.

要写入的几何体的句柄。geoself()可用于获取当前几何体的句柄。

`prim`

The primitive number.

基元编号。

`transform`

The new transform (in local space) of the bone.

骨骼的新变换（在本地空间）。

`index`

Index of a transform in the agent‘srig.

Agentâs rig 中的一个变换的索引。
