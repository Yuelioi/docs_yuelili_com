---
title: pointvertex
order: 23
category:
  - houdini
---
    
## 描述

Returns a linear vertex number of a point in a geometry.

```c
int  pointvertex(<geometry>geometry, int point_num)
```

Use this to find linear vertex number of the first vertex to share this
point.Then you can use [vertexnext](vertexnext.html) "Returns the linear vertex
number of the next vertex sharing a point with a given vertex.") to iterate
over the other vertices in the point.

用它来找到共享这个点的第一个顶点的线性顶点编号。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

然后你可以用 evertexnext 来迭代该点的其他顶点。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入号码（从 0 开始）。

Returns

Returns the linear vertex number of the first vertex to share this
point.Returns `-1`if no vertices share this point.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这个参数可以是 anop:/path/to/sopreference。

## Examples

    int    vtx;// Get the linear vertex of point 3vtx = pointvertex("defgeo.bgeo", 3);
