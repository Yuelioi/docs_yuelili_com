---
title: agentrigparent
order: 36
category:
  - houdini
---
    
## 描述

Returns the parent transform of a transform in an agent primitive‘srig.

```c
int  agentrigparent(<geometry>geometry, int prim, int transform)
```

Returns `-1` if `transform` is a root of the transform hierarchy, `transform`
is [out of range](agenttransformcount.html "Returns the number of transforms
in an agent primitive‘srig."), `prim` is out of range, or `prim` is not an
agent primitive.

如果 transform 是变换层次结构的根，transform 超出范围，prim 超出范围，或者 prim 不是代理基元，则返回 1。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

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

Find the world transform of the rig‘sroot, beginning from a given bone.

从一个给定的骨骼开始，找到装备根部的世界变换。

    int root;while (true) {int parent = agentrigparent(0, @primnum, transform);if (parent < 0){root = transform;break;}elsetransform = parent;}matrix root_xform = agentworldtransform(0, @primnum, root);
