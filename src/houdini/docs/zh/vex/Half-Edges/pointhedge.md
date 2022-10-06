---
title: pointhedge
order: 19
category:
  - houdini
---
    
## 描述

Finds and returns a half-edge with a given source point or with given source
and destination points.

```c
int  pointhedge(<geometry>geometry, int point)
```

```c
int  pointhedge(<geometry>geometry, int srcpoint, int dstpoint)
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

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这个参数可以是 anop:/path/to/sopreference。

`point`

The point number in the geometry for the source point of the returned half-
edge.`0` is the first point.

返回的半边的源点在几何体中的点号，0 是第一个点。

`srcpoint`, `dstpoint`

The point numbers in the geometry for source and destination of returned half-
edge.`0` is the first point.

返回的半边的源点和目的地的几何体中的点的编号。

Returns

The number of a half-edge that has `point` as source or has `srcpoint` as
source and `dstpoint` as destination. In the former case, using

```c
op:pointhedgenext
```

one can enumerate over all the half-edges that have
`point` as source. Returns `-1` if the half-edge is not valid.

以 point 为源点或以 srcpoint 为源点和 dstpoint 为目的地的半边的编号。

## Examples

    int edge_count = 0;// Count number of *edges* (not half-edges) incident to point number 23.int hout = pointhedge("defgeo.bgeo", 23);while ( hout != -1 ){  if (hedge_isprimary("defgeo.bgeo", hout))    edge_count++;  int hin = hedge_prev("defgeo.bgeo", hout);  if (hedge_isprimary("defgeo.bgeo", hin))    edge_count++;  hout = pointhedgenext("defgeo", hout);};
