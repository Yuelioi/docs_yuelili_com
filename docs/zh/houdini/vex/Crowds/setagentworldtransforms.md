---
title: setagentworldtransforms
order: 61
category:
  - houdini
---
    
## 描述

Overrides the world space transforms of an agent primitive.

```c
void  setagentworldtransforms(int geohandle, int prim, matrix transforms[])
```

When modifying a single transform, using
[setagentworldtransform](setagentworldtransform.html "Overrides the world
space transform of an agent primitive‘sbone.") instead can be significantly
faster.

当修改一个单一的变换时，使用 setagentworldtransforminstead 可以显著提高速度。

`geohandle`

Handle to the geometry to write to. `geoself()` can be used to get a handle to
the current geometry.

要写入的几何体的句柄。geoself()可以用来获取对当前几何体的句柄。

`prim`

The primitive number.

基元编号。

`transforms`

The new transform (in world space) of each bone in the agent‘srig.

Agentâs rig 中每个骨骼的新变换（在世界空间）。
