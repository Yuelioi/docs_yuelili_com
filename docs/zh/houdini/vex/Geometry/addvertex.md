---
title: addvertex
order: 3
category:
  - houdini
---
    
## 描述

Adds a vertex to a primitive in a geometry.

```c
int  addvertex(int geohandle, int prim_num, int point_num)
```

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
[geoself](geoself.html "Returns a handle to the current geometry."), which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

要写入的几何体的句柄。目前唯一有效的值是 0orgeoself，也就是一个节点中的当前几何体。(这个参数将来可能会被使用，以允许写入其他几何体。)

`prim_num`

The primitive number to add the vertex to.

要添加顶点的基元编号。

`point_num`

The point number to wire the new vertex to.

将新顶点连接到的点的编号。

Returns

Returns a _linear_ vertex index, or `-1` if the vertex could not be added. You
can use this number with [setvertexattrib](setvertexattrib.html "Sets a vertex
attribute in a geometry.") to set attributes on the new vertex, however this
number may not be the final vertex index.

返回平行顶点索引，如果顶点不能被添加，则返回 1。您可以使用此数字和 setvertexattrib 来设置新顶点的属性，但是此数字可能不是最终的顶点索引。
