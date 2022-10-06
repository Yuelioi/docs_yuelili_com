---
title: hedge_isvalid
order: 6
category:
  - houdini
---
    
## 描述

Determines whether a half-edge number corresponds to a valid half-edge.

```c
int  hedge_isvalid(<geometry>geometry, int hedge)
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

The integer representing a half-edge.

代表一个半边的整数。

Returns

`1` if `hedge` represents a valid half-edge in the referenced geometry, or `0`
otherwise.

如果整数代表被引用的几何体中的一个有效的半边，则为 1，否则为 0。

## Examples

    int srcpt;// find the source point of a half-edge number 3 if it is validif (hedge_isvalid("defgeo.bgeo", 3))srcpt = hedge_srcpoint("defgeo.bgeo", 3);
