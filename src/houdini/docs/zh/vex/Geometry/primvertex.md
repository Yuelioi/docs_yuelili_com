---
title: primvertex
order: 29
category:
  - houdini
---
    
## 描述

Converts a primitive/vertex pair into a linear vertex.

```c
int  primvertex(<geometry>geometry, int primnum, int vertex)
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

`primnum`

The primitive number to get a vertex from.

要从中获取顶点的基元编号。

`vertex`

The vertex number inside the primitive.0 is the first vertex.

基元内的顶点编号。 0 是第一个顶点。

Returns

The linear vertex index corresponding to the given primitive vertex.Returns
`-1` if the function cannot find the linear vertex index.

与给定的基元顶点对应的线性顶点索引。

## Examples

    int linearvtx;// Get the linear vertex value of vertex 2 of primitive 3.linearvtx = primvertex("defgeo.bgeo", 3, 2);
