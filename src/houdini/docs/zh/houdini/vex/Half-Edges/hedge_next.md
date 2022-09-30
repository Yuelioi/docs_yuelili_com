---
title: hedge_next
order: 7
category:
  - houdini
---
    
## 描述

Returns the half-edge that follows a given half-edge in its polygon.

```c
int  hedge_next(<geometry>geometry, int hedge)
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

The number of the half-edges that follow (its source is the destination of)
`hedge` in the polygon that contains it. Returns `-1` if the half-edge is not
valid.

在包含它的多边形中跟随（其源头是目的地）对冲的半边的数量。如果半边形无效，返回-1。

## Examples

    int nexthedge;// Get the next half-edge of half-edge number 3.nexthedge = hedge_next("defgeo.bgeo", 3);
