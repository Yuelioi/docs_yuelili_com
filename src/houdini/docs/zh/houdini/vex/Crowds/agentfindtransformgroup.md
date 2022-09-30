---
title: agentfindtransformgroup
order: 24
category:
  - houdini
---
    
## 描述

Finds the index of a transform group in an agent‘sdefinition.

`int agentfindtransformgroup(<geometry>geometry, int prim, string transformgroup)`

Returns the index of a transform group in the agent‘sdefinition.Returns -1
if `prim` is out of range, `prim` is not an agent primitive, or the transform
group does not exist.

返回代理定义中的转换组的索引。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

如果 prim 超出范围，prim 不是一个代理基元，或者变换组不存在，则返回 1。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

当在一个节点的上下文中运行时（如 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

`prim`

The primitive number.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

```c
transformgroup
```

Name of a transform group in the agent‘sdefinition.

基元编号。
