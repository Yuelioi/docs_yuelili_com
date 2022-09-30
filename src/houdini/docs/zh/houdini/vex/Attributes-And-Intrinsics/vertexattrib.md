---
title: vertexattrib
order: 70
category:
  - houdini
---
    
## 描述

Reads a vertex attribute value from a geometry.

`<type> vertexattrib(<geometry>geometry, string attribute_name, int linear_vertex_index, int &success)`

`<type>[] vertexattrib(<geometry>geometry, string attribute_name, int linear_vertex_index, int &success)`

Unlike [vertex](vertex.html "Reads a vertex attribute value from a
geometry."), this function does not have a version that takes a primitive
number and primitive vertex number. If you have a primitive number and
primitive vertex number, you can convert them into a linear index using
[vertexindex](vertexindex.html "Converts a primitive/vertex pair into a linear
vertex.").

与 vertex 不同的是，这个函数没有一个接受原始数和原始顶点数的版本。如果你有一个原始数和原始顶点数，你可以用 vertexindex 将它们转换成线性索引。

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

```c
`attribute_name
```

`

The name of the attribute (or intrinsic) to read.

要读取的属性（或内在属性）的名称。

```c
linear_vertex_index
```

A linear index into the list of all vertices. If you have a primitive number
and primitive vertex number, you can convert them into a linear index using
[vertexindex](vertexindex.html "Converts a primitive/vertex pair into a linear
vertex.").

一个进入所有顶点列表的线性索引。如果你有一个基元数和基元顶点数，你可以用 vertexindex 将它们转换成线性索引。

`success`

The function overwrites this variable with `1` if the attribute exists and was
read successfully, or `0` otherwise.

如果属性存在并且被成功读取，函数会用 1 覆盖这个变量，否则就用 0 覆盖。

Returns

The value of the given attribute on the given point number.

给定点号上的给定属性的值。
