---
title: hedge_srcpoint
order: 16
category:
  - houdini
---
    
## 描述

Returns the source point of a half-edge.

```c
int  hedge_srcpoint(<geometry>geometry, int hedge)
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

The point number of the source point of the `hedge`.Returns `-1` if the half-
edge is not valid.

半边的源点的点号。

## Examples

    int srcpt;// Get the source point of half-edge number 3.srcpt = hedge_srcpoint("defgeo.bgeo", 3);
