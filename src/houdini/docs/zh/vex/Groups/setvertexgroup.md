---
title: setvertexgroup
order: 11
category:
  - houdini
---
    
## 描述

Adds or removes a vertex to/from a group in a geometry.

`int setvertexgroup(int geohandle, string name, int prim_num, int vertex_num, int value, string mode="set")`

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
[geoself](geoself.html) "Returns a handle to the current geometry."), which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

要写入的几何体的句柄。目前唯一有效的值是 0orgeoself，也就是一个节点中的当前几何体。(这个参数将来可能会被用于允许写入其他几何体)。

**To use a linear vertex index** , set the `prim_num` to the **linear vertex
number** and set `vertex_num` to `-1`. Note that **this is different** from
how most other vertex functions work.

要使用线性顶点索引，将 prim_num 设置为线性顶点编号，将 vertex_num 设置为 1。注意，这与其他大多数顶点函数的工作方式不同。

Show/hide arguments

`name`

The name of the group to modify.

要修改的组的名称。

`prim_num`

The number of the primitive containing the vertex you want to add/remove.

包含希望添加/删除的顶点的基元的编号。

`vertex_num`

The vertex offset on the primitive of the vertex you want to add/remove.

希望添加/删除的顶点在基元上的顶点偏移。

`value`

`1` to put the vertex in the group, `0` to remove the vertex from the
group.This is ignored if `mode` is `"toggle"`.

1 表示将顶点放入组内，0 表示将顶点从组内移除。

`mode`

Use `"set"` to set the vertex‘smembership according to the `value`.Use
`"toggle"` to toggle the vertex‘smembership, regardless of the `value`.

如果模式是 "切换"，这将被忽略。
