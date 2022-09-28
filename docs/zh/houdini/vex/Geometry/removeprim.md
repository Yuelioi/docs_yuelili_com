---
title: removeprim
order: 33
category:
  - houdini
---
    
## 描述

Removes a primitive from the geometry.

```c
int  removeprim(int geohandle, int prim_number, int andpoints)
```

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
[geoself](geoself.html "Returns a handle to the current geometry."), which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

要写入的几何体的句柄。目前唯一有效的值是 0orgeoself，也就是一个节点中的当前几何体。(将来可能会使用此参数，以允许向其它几何体写入。)

`prim_number`

The index of the primitive to remove. If this is `-1`, the function does
nothing.

要删除的基元的索引。如果是 1，函数不做任何事情。

`andpoints`

If this is `1`, the function will also delete any points associated with the
primitive that are not associated with any other primitives.

如果此值是 1，函数还会删除与该基元关联的、未与任何其它基元关联的任何点。

Note

If some primitives are being removed with `andpoints` set to `0` and some are
being removed with `andpoints` set to `1`, all of the primitives with
`andpoints` set to `0` will be deleted before all of the primitives with
`andpoints` set to `1`.

如果有些基元被移除，而有些基元被移除，而点被设为 1，那么点被设为 0 的所有基元将在点被设为 1 的所有基元之前被删除。
