---
title: vertexprev
order: 42
category:
  - houdini
---
    
## 描述

Returns the linear vertex number of the previous vertex sharing a point with a
given vertex.

```c
int  vertexprev(<geometry>geometry, int linearvertex)
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

`linearvertex`

The linear index of a vertex.If you have a point number and point vertex
number, you can use [vertexindex](vertexindex.html "Converts a
primitive/vertex pair into a linear vertex.") to convert them to a linear
index.

一个顶点的线性索引。

Returns

The linear index of the previous vertex sharing the same point with the given
vertex,or `-1` if the vertex has no earlier shared vertices.(To go in the
other direction, use [vertexnext](vertexnext.html "Returns the linear vertex
number of the next vertex sharing a point with a given vertex.").)

如果你有一个点的编号和点的顶点编号，你可以使用 evertexindex 将它们转换为一个线性索引。

## Examples

    int    vtx;// Get the previous vertex of vertex 3vtx = vertexprev("defgeo.bgeo", 3);
