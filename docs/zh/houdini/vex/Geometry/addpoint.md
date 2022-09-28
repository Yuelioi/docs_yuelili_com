---
title: addpoint
order: 1
category:
  - houdini
---
    
## 描述

Adds a point to the geometry.

```c
int  addpoint(int geohandle, int point_number)
```

Creates a new point with all the attributes and group memberships of the point
with the given point number.

创建一个新的点，具有给定点号的点的所有属性和组成员资格。

```c
int  addpoint(int geohandle, vector pos)
```

Creates a new point with the given position.

以给定的位置创建一个新的点。

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
[geoself](geoself.html "Returns a handle to the current geometry."), which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

要写入的几何体的句柄。目前唯一有效的值是 0orgeoself，也就是一个节点中的当前几何体。(这个参数将来可能会被用来允许写到其他的几何体上)。

Returns

A point number for the created point, or `-1` if the point could not be
created.

创建的点的编号，如果不能创建该点，则为 1。

You can use the return value with [setpointattrib](setpointattrib.html "Sets a
point attribute in a geometry.") to set attributes on the new point, however
it may not be the final number of the point.

你可以使用 setpointattrib 的返回值来设置新点的属性，但是它可能不是该点的最终编号。
