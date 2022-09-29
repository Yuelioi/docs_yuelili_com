---
title: addvisualizer
order: 6
category:
  - houdini
---
    
## 描述

Appends to a geometry‘svisualizer detail attribute.

This function creates the `visualizer` detail string array attribute if it
doesn‘t exist, then appends the given visualizer string to it. If the
visualizer string already exists in the array, the function does not add it
again.

这个函数创建 visualizerdetail 字符串数组属性（如果它不存在），然后将给定的 visualizer 字符串附加到它。如果 visualizer 字符串已经存在于数组中，该函数不会再添加它。

```c
int  addvisualizer(int geohandle, string op_url)
```

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
[geoself](geoself.html) "Returns a handle to the current geometry."), which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

一个写到几何体的句柄。目前唯一有效的值是 0orgeoself，也就是一个节点中的当前几何体。(这个参数将来可能会被用来允许写到其他的几何体。)

`op_url`

A string in the form

```c
"op:/path/to/node"
```

. The geometry will use that node‘s
visualizers.

一个字符串，格式为 "op:/path/to/node"。该几何体将使用该节点的可视化器。

- Houdini looks up the visualizers by the `op:` reference, so changes to the visualizers on the referenced nodes will be reflected in the visualization of the geometry.

Houdini 通过 op:reference 来查找可视化器，所以被引用的节点上的可视化器的变化将反映在几何体的可视化上。
