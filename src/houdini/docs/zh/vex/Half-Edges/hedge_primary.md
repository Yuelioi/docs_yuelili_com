---
title: hedge_primary
order: 15
category:
  - houdini
---
    
## 描述

Returns the primary half-edge equivalent to a given half-edge.

```c
int  hedge_primary(<geometry>geometry, int hedge)
```

Each class of equivalent half-edges has precisely one primary half-edge. In
particular, a half-edge which is equivalent to no other half-edges is always
primary. Primary half-edges are useful for accounting for each edge exactly
once as each edge may be realized by any number of equivalent half-edges.

每一类等价半边都恰好有一条主半边。特别是，一个不与其他半边等价的半边总是主要的。主半边对每条边的核算是非常有用的，因为每条边可以由任何数量的等价半边实现。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何的输入数字（从 0 开始）。

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

The primary half-edge `hedge` that shares the source and destination of
`hedge` (possibly in reverse order).Returns `-1` if the half-edge is not
valid.

共享半边的源头和目的地的主要半边 hedgeth（可能以相反的顺序）。

## Examples

    int primhedge;// Get the primary half-edge equivalent to half-edge number 3.primhedge = hedge_primary("defgeo.bgeo", 3);
