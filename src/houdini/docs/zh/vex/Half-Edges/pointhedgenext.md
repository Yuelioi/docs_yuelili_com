---
title: pointhedgenext
order: 20
category:
  - houdini
---
    
## 描述

Returns the **next** half-edge with the same source as a given half-edge.

```c
int  pointhedgenext(<geometry>geometry, int hedge)
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

`point`

The point number in the geometry.`0` is the first point.

geometry.0 中的点编号是第一个点。

Returns

The next half-edge that has the same source as `hedge`.

下一个与 hedge 有相同来源的半边形。

Successive calls to this function iterate over all outgoing half-edges out of
the same point.The iteration order does not necessarily agree with the order
of the edges around a point in a manifold setting.

对这个函数的连续调用会遍历所有从同一点出来的半边。

Returns `-1` if `hedge` is not valid, or the there are no more shared vertices
with the source vertex of this hedge (same as `op:vertexnext`).

迭代顺序不一定与流形设置中点周围的边的顺序一致。

## Examples

    int edge_count = 0;// Count number of *edges* (not half-edges) incident to point number 23.int hout = pointhedge("defgeo.bgeo", 23);while ( hout != -1 ){  if (hedge_isprimary("defgeo.bgeo", hout))    edge_count++;  int hin = hedge_prev("defgeo.bgeo", hout);  if (hedge_isprimary("defgeo.bgeo", hin))    edge_count++;  hout = pointhedgenext("defgeo", hout);}
