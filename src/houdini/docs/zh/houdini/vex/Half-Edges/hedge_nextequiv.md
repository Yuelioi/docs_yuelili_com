---
title: hedge_nextequiv
order: 8
category:
  - houdini
---
    
## 描述

Returns the next half-edges equivalent to a given half-edge.

```c
int  hedge_nextequiv(<geometry>geometry, int hedge)
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

The next half-edge equivalent to `hedge`, or `hedge` if there are no other
half-edges equivalent to it.Successive calls to

```c
hedge_nextequiv()
```

cycle
through all the equivalent half-edges.Returns `-1` if the half-edge is not
valid.

相当于 hedge 的下一个半边，如果没有其他半边与之对应，则为 hedge。

## Examples

    // Determine the number of half-edges equivalent to half-edge number 3 (including itself)int num_equiv = 0;int h = 3;do{h = hedge_nextequiv("defgeo.bgeo", h);num_equiv++;} while (h != 3);
