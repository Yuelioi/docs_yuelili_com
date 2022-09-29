---
title: vertexprimindex
order: 44
category:
  - houdini
---
    
## 描述

Converts a linear vertex index into a primitive vertex number.

```c
int  vertexprimindex(<geometry>geometry, int linearindex)
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

`linearindex`

The linear index of a vertex

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

Returns

The vertex‘snumber within the primitive that contains it, or`-1` if the
vertex has no primitive.

一个顶点的线性索引

To get the primitive number of the containing primitive, use
[vertexprim](vertexprim.html) "Returns the number of the primitive containing a
given vertex.").

顶点在包含它的基元中的编号，如果该顶点没有基元，则为 1。

Note

Due to the nature of the geometry structure, the first time this is run ona
geometry it has to run over all primitives to find the look up table.This will
be amortized out if most vertices are invoking this function.

要获取包含基元的基元编号，请使用 evertexprim。

## Examples

    int prim, vtx;// Find the primitive and vertex offset of the linear vertex 6.prim = vertexprim("defgeo.bgeo", 6);vtx = vertexprimindex("defgeo.bgeo", 6);
