---
title: removevertex
order: 34
category:
  - houdini
---
    
## 描述

Removes a vertex from the geometry.

| Since | 18.0 |
| ----- | ---- |

```c
int  removevertex(int geohandle, int linear_vertex_index)
```

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
[geoself](geoself.html) "Returns a handle to the current geometry."), which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

要写入的几何体的句柄。目前唯一有效的值是 0orgeoself，也就是一个节点中的当前几何体。(这个参数将来可能会被用来允许写到其他的几何体)。

```c
linear_vertex_index
```

If this is `-1`, the function has no effect.This is a linearvertex index, so
`vertexindex` may be needed to convert froma primitive and vertex number.

如果这个参数是-1，该函数就没有作用。 这是一个线性的

This removes the given vertex from the geometry.Note: This is done asa post
process, not immediately when invoked.

顶点索引，可能需要用 overtexindex 来转换从

Only polygons currently support the removal of vertices.

基元和顶点编号进行转换。

This can result in degenerate (0 vertex) polygons, as the primitiveis not
deleted.

这将从几何体中移除给定的顶点。 注意：这是作为一个后置处理完成的

Removing many vertices from polygons with high vertex counts can be slow.

后期处理，而不是在调用时立即执行。
