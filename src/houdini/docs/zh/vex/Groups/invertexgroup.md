---
title: invertexgroup
order: 6
category:
  - houdini
---
    
## 描述

Returns 1 if the vertex specified by the vertex number is in the group
specified by the string.

```c
int  invertexgroup(string filename, string groupname, int vertexnum)
```

```c
int  invertexgroup(int opinput, string groupname, int vertexnum)
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

`vertexnum`

The linear vertex number of the vertex to test.

要测试的顶点的线性顶点编号。

To convert a primitive number and vertex number within that primitive to a
linear vertex number for the `vertexnum` parameter, use the
[vertexindex](vertexindex.html "Converts a primitive/vertex pair into a linear
vertex.") function.

要将基元编号和该基元中的顶点编号转换为 vertexnumparameter 的线性顶点编号，请使用 vertexindex 函数。

Returns

`1` if the group exists and the vertex is in the group, or `0` otherwise.

如果组存在且顶点在组内，则为 1，否则为 0。

This can use ad-hoc groups, like `42p0-2`.It matches the SOP group
namingconvention, in particular that an empty string means all vertices.

这可以使用特设组，如 42p0-2。 它符合 SOP 组的命名惯例，特别是空字符串。
