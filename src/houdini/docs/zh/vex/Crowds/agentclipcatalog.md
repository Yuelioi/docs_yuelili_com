---
title: agentclipcatalog
order: 6
category:
  - houdini
---
    
## 描述

Returns all of the animation clips that have been loaded for an agent
primitive.

```c
string [] agentclipcatalog(<geometry>geometry, int prim)
```

Returns an empty array if `prim` is out of range or is not an agent primitive.

如果 prim 超出范围或不是一个代理基元，则返回一个空数组。

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
