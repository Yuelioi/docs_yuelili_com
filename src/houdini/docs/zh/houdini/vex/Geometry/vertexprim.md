---
title: vertexprim
order: 43
category:
  - houdini
---
    
## 描述

Returns the number of the primitive containing a given vertex.

```c
int  vertexprim(<geometry>geometry, int linearvertex)
```

Note

To convert the linear index into a primitive number and primitive vertex
number,use [vertexprim](vertexprim.html) "Returns the number of the primitive
containing a given vertex.") and [vertexprimindex](vertexprimindex.html "Converts a linear vertex index into a primitive vertex number.").

将线性索引转换为原始数和原始顶点数。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

使用 evertexprimandvertexprimindex。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

`linearvertex`

The linear index of a vertex.If you have a point number and point vertex
number, you can use [vertexindex](vertexindex.html "Converts a
primitive/vertex pair into a linear vertex.") to convert them to a linear
index.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

Returns

The primitive number of the primitive containing the vertex,or `-1` if the
vertex has no primitive.

一个顶点的线性索引。

## Examples

    int    pt;// Get the primitive of vertex 3pt = vertexprim("defgeo.bgeo", 3);
