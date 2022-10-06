---
title: hedge_equivcount
order: 3
category:
  - houdini
---
    
## 描述

Returns the number of half-edges equivalent to a given half-edge.

```c
int  hedge_equivcount(<geometry>geometry, int hedge)
```

Note

Equivalent half-edges may be oppositely oriented, i.e. the source of one can
be the destination of the other and vice versa.

相等的半边可以是相反的方向，也就是说，一个的源头可以是另一个的终点，反之亦然。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入号码（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这个参数可以是 anop:/path/to/sopreference。

`hedge`

Input half-edge.

输入半边。

Returns

The number of half-edges that have the same endpoint as `hedge` (including
`hedge`), or `-1` if the half-edge is not valid.

与 hedge（包括 hedge）具有相同端点的半边的数量，如果半边无效，则为 1。

## Examples

    int is_boundary = 0;int is_interior = 0;int is_nonmanifold = 0;// Determine the type of edge represented by half-edge number 3:int numeq;numeq = hedge_equivcount("defgeo.bgeo", 3);if (numeq == 1)is_boundary = 1;else if (numeq >= 3)is_nonmanifold = 1;elseis_interior = 1;
