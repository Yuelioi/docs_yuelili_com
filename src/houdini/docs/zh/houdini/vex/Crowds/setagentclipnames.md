---
title: setagentclipnames
order: 50
category:
  - houdini
---
    
## 描述

Sets the current animation clips for an agent primitive.

```c
void  setagentclipnames(int geohandle, int prim, string clipnames[])
```

`geohandle`

Handle to the geometry to write to. `geoself()` can be used to get a handle to
the current geometry.

要写入的几何体的句柄。geoself()可用于获取当前几何体的句柄。

`prim`

The primitive number.

基元编号。

`clipnames`

A list of animation clip names.

动画片段名称的列表。
