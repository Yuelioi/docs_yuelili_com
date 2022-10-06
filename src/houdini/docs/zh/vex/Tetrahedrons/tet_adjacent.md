---
title: tet_adjacent
order: 1
category:
  - houdini
---
    
## 描述

Returns primitive number of an adjacent tetrahedron.

```c
int  tet_adjacent(<geometry>geometry, int primindex, int faceno)
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

`primindex`

The primitive number.

原始编号。

`faceno`

The face on the tetrahedron.Face 0 is the triangle that doesn‘thave vertex 0.

四面体上的面。 面 0 是指没有顶点 0 的三角形。

Returns

The primitive number of the tetrahedron opposite the given vertex.Returns `-1`
f the primitive is not a tet or doesn‘t have an adjacent tetrahedron.

有顶点 0 的三角形。

Use [tet_faceindex](tet_faceindex.html) "Returns vertex indices of each face of
a tetrahedron.") to get the vertex indices of each face of a tetrahedron.

与给定顶点相对的四面体的基元编号。
