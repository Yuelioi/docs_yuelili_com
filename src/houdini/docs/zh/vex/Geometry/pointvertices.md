---
title: pointvertices
order: 24
category:
  - houdini
---
    
## 描述

Returns the list of vertices connected to a point.

```c
int [] pointvertices(<geometry>geometry, int ptnum)
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

`ptnum`

The point number to get a vertex from.

要获取顶点的点号。

Returns

An array of vertices that are wired to the given point. You should not rely on
the numbers being in a particular order.

一个与给定点相连的顶点数组。你不应该依赖这些数字的特定顺序。

If the given point contains no vertices, the array will be empty.

如果给定的点不包含顶点，该数组将是空的。
