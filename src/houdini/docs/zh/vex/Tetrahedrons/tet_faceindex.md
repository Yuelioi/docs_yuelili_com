---
title: tet_faceindex
order: 2
category:
  - houdini
---
    
## 描述

Returns vertex indices of each face of a tetrahedron.

```c
int  tet_faceindex(int faceno, int vtxno)
```

Returns `-1` if an invalid number is specified.

如果指定了一个无效的数字，返回 1。

Returns `0` to `3` to refer to the four vertices of a generic tetrahedron.

返回 0 到 3，指的是一个通用四面体的四个顶点。

`faceno`

The face on the tetrahedron.Face 0 is the triangle that doesn‘thave vertex 0.

四面体上的面。 面 0 是指没有顶点 0 的三角形。

`vtxno`

Which vertex on the triangle to return, `0` to `2`.Starts withthe lowest
number and follows Houdini‘swinding convention, ie,face 0 is vertices 1, 2,
and 3.

有顶点 0 的三角形。
