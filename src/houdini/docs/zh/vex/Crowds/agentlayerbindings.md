---
title: agentlayerbindings
order: 25
category:
  - houdini
---
    
## 描述

Returns the transform that each shape in an agent‘slayer is bound to.

`int [] agentlayerbindings(<geometry>geometry, int prim, string layername, string shapetype)`

`int [] agentlayerbindings(<geometry>geometry, int prim, int layerindex, string shapetype)`

Returns an empty array if `layername` is not one of the agent‘s
[layers](agentlayers.html) "Returns all of the layers that have been loaded for
an agent primitive."), `shapetype` is invalid, `prim` is out of range, or
`prim` is not an agent primitive.

如果 layername 不是代理者之一，shapetype 无效，prim 超出范围，或者 prim 不是代理者的 prim，返回一个空数组。

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

## Examples

Find the current world transform of each static shape in the collision layer.

是否要检查指定层的 "静态"、"变形 "或 "所有 "形状。

    string layer = agentcollisionlayer(0, @primnum);int[] bindings = agentlayerbindings(0, @primnum, layer, "static");matrix xforms[] = agentworldtransforms(0, @primnum);foreach (int idx; bindings) {matrix xform = xforms[idx];}
