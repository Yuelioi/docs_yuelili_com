---
title: hedge_prev
order: 13
category:
  - houdini
---
    
## 描述

Returns the half-edge that precedes a given half-edge in its polygon.

```c
int  hedge_prev(<geometry>geometry, int hedge)
```

Returns `-1` if `hedge` is invalid. Otherwise, returns the number of the half-
edgethat precedes (its destination is the source of) `hedge` in the polygon
that contains it.

如果 hedge 无效，则返回 1。否则，返回半边的编号

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

之前的半边（其目的地是）包含它的多边形中的对冲的编号。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入号码（从 0 开始）。

`hedge`

Input half-edge.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

Returns

The number of the half-edge that precedes (its destination is the source of)
`hedge` in the polygon that contains it.Returns `-1` if the half-edge is not
valid.

输入半边。

## Examples

    int prev;// Get the previous half-edge of half-edge number 3.prevhedge = hedge_prev("defgeo.bgeo", 3);
