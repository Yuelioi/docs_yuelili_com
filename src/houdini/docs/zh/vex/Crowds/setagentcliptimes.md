---
title: setagentcliptimes
order: 52
category:
  - houdini
---
    
## 描述

Sets the current times for an agent primitive‘sanimation clips.

```c
void  setagentcliptimes(int geohandle, int prim, float cliptimes[])
```

`geohandle`

Handle to the geometry to write to. `geoself()` can be used to get a handle to
the current geometry.

要写入的几何体的句柄。geoself()可用于获取当前几何体的句柄。

`prim`

The primitive number.

原始的数字。

`cliptimes`

A list of clip times (in seconds).

一个剪辑时间的列表（单位：秒）。
