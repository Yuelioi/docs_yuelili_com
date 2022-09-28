---
title: agentlayershapes
order: 27
category:
  - houdini
---
    
## 描述

Returns the names of the shapes referenced by an agent primitive‘slayer.

`string [] agentlayershapes(<geometry>geometry, int prim, string layername, string shapetype)`

`string [] agentlayershapes(<geometry>geometry, int prim, int layerindex, string shapetype)`

Returns the names of all shapes that are referenced by the layer and satisfy
the `shapetype` filter.

返回所有被该图层引用并满足 shapetypefilter 的形状的名称。

`string [] agentlayershapes(<geometry>geometry, int prim, string layername, int transform)`

`string [] agentlayershapes(<geometry>geometry, int prim, int layerindex, int transform)`

Returns the names of all shapes that are referenced by the layer and are bound
to the specified transform.

返回所有被图层引用并被绑定到指定变换的形状的名称。

Returns an empty array if `layername` is not one of the agent‘s
[layers](agentlayers.html "Returns all of the layers that have been loaded for
an agent primitive."), `shapetype` is invalid, `transform` is out of range,
`prim` is out of range, or `prim` is not an agent primitive.

如果 layername 不是代理基元之一，shapetype 无效，transform 超出范围，prim 超出范围，或者 prim 不是代理基元，则返回一个空数组。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

`prim`

The primitive number.

原始编号。

`layername`

The name of one of the agent‘slayers.

代理商的一个图层的名称。

`layerindex`

Index of a layer in the agent‘sdefinition.A layer‘sindex can be obtained
via [agentfindlayer](agentfindlayer.html "Finds the index of a layer in an
agent‘sdefinition.").

Agentâs 定义中的一个层的索引。

`shapetype`

Whether to inspect `"static"`, `"deforming"`, or `"all"` shapes from the
specified layer.

一个层的索引可以通过 agentfindlayer 获得。

`transform`

Index of a transform in the agent‘srig.

是否检查指定层的 "静态"、"变形 "或 "所有 "形状。
