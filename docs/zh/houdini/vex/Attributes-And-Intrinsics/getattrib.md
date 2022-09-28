---
title: getattrib
order: 22
category:
  - houdini
---
    
## 描述

Reads an attribute value from geometry, with validity check.

`<type> getattrib(<geometry>geometry, string attribclass, string attribute_name, int elemnum, int &success)`

`<type>[] getattrib(<geometry>geometry, string attribclass, string attribute_name, int elemnum, int &success)`

This general form lets you specify the attribute “class” at run-time. This can
be useful for writing general code that can work on different classes.If you
know the class of attribute you want to read ahead of time, using
[detailattrib](detailattrib.html "Reads a detail attribute value from a
geometry."), [primattrib](primattrib.html "Reads a primitive attribute value
from a geometry, outputting a success flag."), [pointattrib](pointattrib.html "Reads a point attribute value from a geometry and outputs a success/fail
flag."), or [vertexattrib](vertexattrib.html "Reads a vertex attribute value
from a geometry.") may be faster.

这种一般的形式让你在运行时指定 "类 "的属性。这对于编写可以在不同类上工作的一般代码是很有用的。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

如果你提前知道你想读取的属性类别，使用 etailattrib、primattrib、pointattrib 或 vertexattrib 可能会更快。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

`attribclass`

One of `"detail"` (or `"global"`), `"point"`, `"prim"`, or `"vertex"`.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这个参数可以是 op:/path/to/sopreference。

You can also use `"primgroup"`, `"pointgroup"` or `"vertexgroup"` to [read
from groups](../groups.html "You can read the contents of
primitive/point/vertex groups in VEX as if they were attributes.").

详细"（或 "全局"）、"点"、"底层 "或 "顶点 "中的一个。

```c
`attribute_name
```

`

The name of the attribute (or intrinsic) to read.

你也可以使用 "primgroup"、"pointgroup "或 "vertexgroup "来从组中读取。

`elemnum`

The point/primitive/vertex number to read the attribute value from. For detail
attributes, use `0` here (the argument is ignored for detail attributes).

要读取的属性（或内在属性）的名称。

To get the linear vertex number given a primitive number and the vertex number
on the primitive, use the [primvertex](primvertex.html "Converts a
primitive/vertex pair into a linear vertex.") function.

要读取属性值的点/原点/顶点编号。对于细节属性，在这里使用 0（参数对于细节属性是被忽略的）。

`success`

If the given attribute exists and can be read, the function sets this variable
to `1`. Otherwise, it sets this variable to `0`.

要获取给定的基元编号和基元上的顶点编号的线性顶点编号，请使用 primvertex 函数。

Returns

The value of the attribute.

如果给定的属性存在并可被读取，函数会将此变量设为 1。否则，它将此变量设为 0。
