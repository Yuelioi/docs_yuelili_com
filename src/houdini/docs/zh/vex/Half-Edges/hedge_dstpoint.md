---
title: hedge_dstpoint
order: 1
category:
  - houdini
---
    
## 描述

Returns the destination point of a half-edge.

```c
int  hedge_dstpoint(<geometry>geometry, int hedge)
```

Returns `-1` if the half-edge hedge is invalid. Otherwise, returns the point
number of the destination point of the half-edge `hedge`.

如果半边形对冲无效，返回-1。否则，返回半边形对冲的目标点的点号。

`geometry`

The name of the geometry file to reference.Inside Houdini, this may be

```c
op:full_path_to_sop
```

to reference a SOP.

要参考的几何文件的名称。 在 Houdini 中，这可能是 op:full_path_to_sop 来引用一个 SOP。

`hedge`

Input half-edge.

输入半边形。

## Examples

    int dstpt;// Get vertex number of half-edge number 3.dstpt = hedge_dstpoint("defgeo.bgeo", 3);
