---
title: primhedge
order: 21
category:
  - houdini
---
    
## 描述

Returns **one** of the half-edges contained in a primitive.

```c
int  primhedge(<geometry>geometry, int prim)
```

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

The primitive number in the geometry.`0` is the first primitive.

geometry.0 中的基元编号是第一个基元。

Returns

The number of an arbitrary half-edge contained in `prim`.Returns `-1` if the
primitive number is not valid.

包含在 prim 中的一个任意半边的编号。
