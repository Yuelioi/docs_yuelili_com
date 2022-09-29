---
title: neighbour
order: 15
category:
  - houdini
---
    
## 描述

Returns the point number of the next point connected to a given point.

This function lets you walk the points connected to a point (separated by a
single edge). To get a list of all connected points at once, use
[neighbours](neighbours.html) "Returns an array of the point numbers of the
neighbours of a point.").

这个函数可以让你行走与一个点相连的点（由一条边分开）。要想一次获得所有连接点的列表，请使用 eneighbours。

```c
int  neighbour(<geometry>geometry, int point_num, int neighbour_num)
```

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如一个 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这个参数可以是 anop:/path/to/sopreference。

`point_num`

The number of the point whose neighbours you want to find.

你想找的那个点的邻居的编号。

`neighbour_num`

Which neighbour to find. The neighbours are in no particular order. Use
[neighbourcount](neighbourcount.html) "Returns the number of points that are
connected to the specified point.") to get the total number of connected
points.

要查找的邻居。邻居没有特定的顺序。使用邻接点的数量来获取连接点的总数。

Returns

The point index of the neighbour of the point. The order is undefined, but
will be consistent for consistent geometry. Returns `-1` if the `neighbournum`
is out of range for that point, or the point is out of range for that input,
or the input doesn‘t exist.

该点的邻居的点索引。顺序是未定义的，但对于一致的几何图形来说，顺序是一致的。如果邻接点超出了该点的范围，或者该点超出了该输入的范围，或者该输入不存在，则返回 1。
