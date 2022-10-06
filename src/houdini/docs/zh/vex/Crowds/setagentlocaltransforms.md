---
title: setagentlocaltransforms
order: 59
category:
  - houdini
---
    
## 描述

Overrides the local space transforms of an agent primitive.

```c
void  setagentlocaltransforms(int geohandle, int prim, matrix transforms[])
```

When modifying a single transform, using
[setagentlocaltransform](setagentlocaltransform.html "Overrides the local
space transform of an agent primitive‘sbone.") instead can be significantly
faster.

当修改一个单一的变换时，使用 setagentlocaltransforminstead 可以显著提高速度。

`geohandle`

Handle to the geometry to write to. `geoself()` can be used to get a handle to
the current geometry.

要写入的几何体的句柄。geoself()可以用来获取当前几何体的句柄。

`prim`

The primitive number.

基元编号。

`transforms`

The new transform (in local space) of each bone in the agent‘srig.

Agentâs rig 中每个骨骼的新变换（在本地空间）。
