---
title: pointedge
order: 18
category:
  - houdini
---
    
## 描述

Finds and returns a half-edge with the given endpoints.

```c
int  pointedge(<geometry>geometry, int point1, int point2)
```

Returns `-1` if no such half-edge exists. Otherwise returns the number of a
half-edge that either has `point1` as source or has `point2` as desination, or
the other way around.

如果不存在这样的半边形，则返回-1。否则返回以 point1 为源点或以 point2 为终点的半边的编号，或者反过来。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这个参数可以是 anop:/path/to/sopreference。

`point1`, `point2`

The point numbers in the geometry for the two endpoints of the returned half-
edge.`0` is the first point.

返回的半边的两个端点在几何体中的点号，0 是第一个点。

## Examples

    int edge_count = 0;// Determine if there is an edge between points 23 and 25:int h0 = pointedge("defgeo.bgeo", 23, 25);if (h0 != -1){// Edge exists!}
