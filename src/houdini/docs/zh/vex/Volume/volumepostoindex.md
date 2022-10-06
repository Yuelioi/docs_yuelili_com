---
title: volumepostoindex
order: 10
category:
  - houdini
---
    
## 描述

Converts a position into a volume voxel index.

```c
vector  volumepostoindex(<geometry>geometry, int primnum, vector position)
```

`vector volumepostoindex(<geometry>geometry, string volumename, vector position)`

Returns

The index of a voxel at the given position.

给定位置上的体素的索引。

Returns 0 if `primnum` or `inputnum` is out of range, the geometry is invalid,
or the given primitive is not a vector volume primitive.

如果 primnum 或 inputnum 超出范围，几何图形无效，或者给定的基元不是矢量体积基元，则返回 0。
