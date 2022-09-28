---
title: getattribute
order: 23
category:
  - houdini
---
    
## 描述

Copies the value of a geometry attribute into a variable and returns a success
flag.

`int getattribute(string geometry, <type>&value, string attribclass, string attribute_name, int element_number, int vertex_number)`

`int getattribute(string geometry, <type>&value[], string attribclass, string attribute_name, int element_number, int vertex_number)`

Warning

This function does not allow reading from inputs in a node context, and is
harder to use than the other attribute functions. You probably want to use one
of the other attribute functions instead, such as [getattrib](getattrib.html "Reads an attribute value from geometry, with validity check.").

这个函数不允许从节点上下文的输入中读取，而且比其他属性函数更难使用。你可能想用其他的属性函数来代替，比如 getattrib。

Returns `0` if the attribute does not exist or cannot be read, `1` on success.
If the function returns `0` (failed), the given variable may remain
uninitialized.

如果属性不存在或不能被读取，返回 0，成功时返回 1。如果函数返回 0（失败），给定的变量可能保持未初始化状态。

`value`

The variable to overwrite with the attribute value.

要用属性值覆盖的变量。

`attribclass`

One of `"detail"` (or `"global"`), `"point"`, `"prim"`, or `"vertex"`.

是 "detail"（或 "global"）、"point"、"prim "或 "vertex "之一。

You can also use `"primgroup"`, `"pointgroup"` or `"vertexgroup"` to [read
from groups](../groups.html "You can read the contents of
primitive/point/vertex groups in VEX as if they were attributes.").

你也可以使用 "primgroup"、"pointgroup "或 "vertexgroup "来读取组。

```c
`attribute_name
```

`

The name of the attribute (or intrinsic) to read.

要读取的属性（或内在属性）的名称。

```c
element_number
```

The point or primitive number. If you are reading a detail attribute, use `0`
here.

点或基元编号。如果你正在读取一个细节属性，在这里使用 0。

`vertex_number`

- When reading a vertex attribute, you can specify the primitive number in the

```c
element_number
```

argument and the primitive‘svertex number here.

读取顶点属性时，可以在 element_number 参数中指定基元编号，在这里指定基元的顶点编号。

- To use a linear vertex index, use `-1` as the

```c
element_number
```

and the vertex index here.

要使用线性顶点索引，请在这里使用 1 作为元素\_编号和顶点索引。

- If you are not reading a vertex attribute, this argument is ignored.

如果您不是在读取一个顶点属性，此参数会被忽略。

## Examples

    vector pos, uv, clr;// Get the position of point 3 in "defgeo.bgeo"getattribute("defgeo.bgeo", pos, "point", "P", 3, 0);// Get the value of the "uv" attribute for vertex 2 of primitive// number 3 in the file defgeo.bgeogetattribute("defgeo.bgeo", uv, "vertex", "uv", 3, 2);// Get the value of the "Cd" attribute for primitive 7// in the SOP specified by the path "/obj/geo1/color1" (Houdini// only)getattribute("op:/obj/geo1/color1", clr, "primitive", "Cd", 7);
