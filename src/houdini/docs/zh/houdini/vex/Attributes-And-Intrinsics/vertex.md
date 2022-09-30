---
title: vertex
order: 69
category:
  - houdini
---
    
## 描述

Reads a vertex attribute value from a geometry.

`<type> vertex(<geometry>geometry, string attribute_name, int linear_vertex_index)`

`<type>[] vertex(<geometry>geometry, string attribute_name, int linear_vertex_index)`

Specifies the vertex using the linear index into the list of all vertices.

使用所有顶点列表的线性索引来指定顶点。

`<type> vertex(<geometry>geometry, string attribute_name, int prim_num, int vertex_num)`

`<type>[] vertex(<geometry>geometry, string attribute_name, int prim_num, int vertex_num)`

Specifies the vertex as a primitive number and then an offset into the list of
vertices on that primitive.

将顶点指定为一个基元编号，然后指定进入该基元上的顶点列表的偏移。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在节点的上下文中运行时（如 wrangle SOP），这个参数可以是一个整数，代表要从中读取几何图形的输入数字（从 0 开始）。

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

Returns

The value of the given attribute on the given vertex, or `0` if the attribute
or vertex do not exist.

在给定顶点上的给定属性的值，如果该属性或顶点不存在，则为 0。
