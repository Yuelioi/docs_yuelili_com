---
title: setagentclipweights
order: 53
category:
  - houdini
---
    
## 描述

Sets the blend weights for an agent primitive‘sanimation clips.

```c
void  setagentclipweights(int geohandle, int prim, float clipweights[])
```

`geohandle`

Handle to the geometry to write to. `geoself()` can be used to get a handle to
the current geometry.

要写入的几何体的句柄。geoself()可用于获取当前几何体的句柄。

`prim`

The primitive number.

原始的数字。

`clipweights`

A list of weights.

一个权重的列表。
