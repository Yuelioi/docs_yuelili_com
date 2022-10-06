---
title: hedge_isequiv
order: 4
category:
  - houdini
---
    
## 描述

Determines whether a two half-edges are equivalent (represent the same edge).

```c
int  hedge_isequiv(<geometry>geometry, int hedge1, int hedge2)
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

`hedge1`

The integer representing the first half-edge.

代表第一个半边的整数。

`hedge2`

The integer representing the second half-edge.

代表第二个半边的整数。

Returns

`1` if `hedge1` and `hedge2` are equivalent, i.e. represent the sameedge in
the geometry. This is the case when either source and destination pointsof
`hedge1` and `hedge2` are respectively the same, or source of each of
`hedge1`and `hedge2` is the same as the destination of the other.

如果 hedge1 和 hedge2 是相等的，即代表几何体中的同一

## Examples

    int opposite = 0;// test if hedges 2 and 3 are oppositely oriented equivalent half-edgesif (hedge_isequiv("defgeo.bgeo", 2, 3)){if (hedge_srcpoint("defgeo.bgeo", 2) == hedge_dstpoint("defgeo.bgeo", 3))opposite = 1;}
