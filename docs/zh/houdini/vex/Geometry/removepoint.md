---
title: removepoint
order: 32
category:
  - houdini
---
    
## 描述

Removes a point from the geometry.

从几何体移除 1 个点

```c
int  removepoint(int geohandle, int point_number)
```

```c
int  removepoint(int geohandle, int point_number, int and_prims)
```

## 参数

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
geoself, which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

要生效的几何体句柄。目前只能是 0 或者几何体自身的路径。(将来可能用作其他几何体)。

`point_number`

If this is `-1`, the function has no effect.

点号。如果为 -1，函数不起作用。

`and_prims`

If this is `1`, the function deletes any _degenerate_ primitives that referred
to the removed point (for example, closed polygons with fewer than 3 vertices
or open polygons with fewer than 2 vertices).

如果为 1，函数会删除指向被删除点的任何 degenerate primitives（例如，少于 3 个顶点的封闭多边形或少于 2 个顶点的开放多边形）。

If this is `0`, the function only deletes primitives that become invalid
because of the removed point (for example, tetrahedra with fewer than 4
vertices, or volumes with zero vertices).

如果为 0，该函数只删除因为被删除的点而变得无效的基元（例如，顶点少于 4 个的四面体，或顶点为零的 volume）。

## 示例

```c
removepoint(0,3);  // 删除3号点
```

## 疑惑

第二参数不会
