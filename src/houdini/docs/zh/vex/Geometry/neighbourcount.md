---
title: neighbourcount
order: 16
category:
  - houdini
---
    
## 描述

Returns the number of points that are connected to the specified point.

```c
int  neighbourcount(<geometry>geometry, int point_num)
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

`point_num`

The number of the point whose neighbours you want to count.

你想计算其邻居的点的编号。

Returns

The number of points that are connected to the specified point.A point is
connected if it is adjacent in some polygon, is one of thefour surrounding
points in a grid or NURBs surface, or in some othermanner directly shares an
edge with `point_num`. Returns 0 if thereis no input, or if the point number
is out of range.

与指定点相连的点的数量。
