---
title: neighbours
order: 17
category:
  - houdini
---
    
## 描述

Returns an array of the point numbers of the neighbours of a point.

```c
int [] neighbours(<geometry>geometry, int ptnum)
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

This is a simpler, array-based replacement for the combination
of[neighbourcount](neighbourcount.html "Returns the number of points that are
connected to the specified point.") and [neighbour](neighbour.html "Returns
the point number of the next point connected to a given point.").The array
contains the numbersof all points that share an edge with `ptnum`.The point
numbers are in no particular order.

这是一个更简单的、基于数组的方法来替代 neighbourcount 和 neighbour 的组合。 这个数组包含了

## Examples

This is roughly equivalent to the following code:

与 ptnum 共享一条边的所有点的数字。 这些点的编号没有特定的顺序。

    int []neighbours(int opinput, int ptnum){  int   i, n;  int   result[];  n = neighbourcount(input, ptnum);  resize(result, n);  for (i = 0; i < n; i++)    result[i] = neighbour(input, ptnum, i);}
