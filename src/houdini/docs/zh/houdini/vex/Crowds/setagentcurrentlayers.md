---
title: setagentcurrentlayers
order: 57
category:
  - houdini
---
    
## 描述

Sets the current display layers of an agent primitive.

| Since | 19.0 |
| ----- | ---- |

```c
void  setagentcurrentlayers(int geohandle, int prim, string layernames[])
```

`geohandle`

Handle to the geometry to write to. `geoself()` can be used to get a handle to
the current geometry.

要写入的几何体的句柄。geoself()可用于获取当前几何体的句柄。

`prim`

The primitive number.

基层编号。

`layernames`

A list of agent layer names.

代理层名称的列表。
