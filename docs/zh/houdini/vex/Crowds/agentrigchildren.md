---
title: agentrigchildren
order: 33
category:
  - houdini
---
    
## 描述

Returns the child transforms of a transform in an agent primitive‘srig.

```c
int [] agentrigchildren(<geometry>geometry, int prim, int transform)
```

Returns a list of the direct children of the given transform.

返回给定变换的直接子节点的列表。

Returns an empty array if `transform` is [out of
range](agenttransformcount.html) "Returns the number of transforms in an agent
primitive‘srig."), `prim` is out of range, or `prim` is not an agent
primitive.

如果 transform 超出了范围，prim 超出了范围，或者 prim 不是代理基元，则返回一个空数组。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要从中读取几何图形的输入数字（从 0 开始）。

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

`transform`

Index of a transform in the agent‘srig.

Agentâs rig 中的一个变换的索引。

## Examples

Visit all of the children of a given transform.

访问一个给定变换的所有子节点。

    int[] queue = { transform };while (len(queue) > 0) {int i = removeindex(queue, 0);printf("%d\n", i);foreach (int child; agentrigchildren(0, @primnum, i))push(queue, child);}
