---
title: hedge_srcvertex
order: 17
category:
  - houdini
---
    
## 描述

Returns the source vertex of a half-edge.

```c
int  hedge_srcvertex(<geometry>geometry, int hedge)
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

`hedge`

Input half-edge.

输入半边。

Returns

The vertex number of the source vertex of the `hedge`.Returns `-1` if the
half-edge is not valid.

半边形的源顶点的顶点编号。

## Examples

    int srcvtx;// Get the source vertex of half-edge number 3.srcvtx = hedge_srcvertex("defgeo.bgeo", 3);
