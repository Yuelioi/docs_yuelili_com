---
title: setagentchannelvalues
order: 49
category:
  - houdini
---
    
## 描述

Overrides the values of an agent primitive‘schannels.

| Since | 18.0 |
| ----- | ---- |

```c
void  setagentchannelvalues(int geohandle, int prim, float values[])
```

When modifying a single channel, using
[setagentchannelvalue](setagentchannelvalue.html "Overrides the value of an
agent primitive‘schannel.") instead can be significantly faster.

当修改单个通道时，使用 setagentchannelvalue 代替可以大大加快速度。

`geohandle`

Handle to the geometry to write to. `geoself()` can be used to get a handle to
the current geometry.

写入几何体的句柄。geoself()可以用来获取当前几何体的句柄。

`prim`

The primitive number.

原始的数字。

`values`

The new value of each channel in the agent‘srig.

Agentâs rig 中每个通道的新值。
