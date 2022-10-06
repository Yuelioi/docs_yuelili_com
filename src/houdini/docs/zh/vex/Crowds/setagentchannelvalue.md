---
title: setagentchannelvalue
order: 48
category:
  - houdini
---
    
## 描述

Overrides the value of an agent primitive‘schannel.

| Since | 18.0 |
| ----- | ---- |

```c
int  setagentchannelvalue(int geohandle, int prim, float value, int channel)
```

`geohandle`

Handle to the geometry to write to. `geoself()` can be used to get a handle to
the current geometry.

要写入的几何体的句柄。geoself()可用于获取当前几何体的句柄。

`prim`

The primitive number.

原始编号。

`value`

The new value for the channel.

通道的新值。

`index`

Index of a channel in the agent‘srig.

Agentâs rig 中的一个通道的索引。
