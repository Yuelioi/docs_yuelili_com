---
title: attrib
order: 7
category:
  - houdini
---
    
## 描述

Reads the value of an attribute from geometry.

`<type> attrib(<geometry>geometry, string attribclass, string name, int elemnum)`

`<type>[] attrib(<geometry>geometry, string attribclass, string name, int elemnum)`

This general form lets you specify the attribute “class” at run-time. This can
be useful for writing general code that can work on different classes.If you
know the class of attribute you want to read ahead of time, using
[detail](detail.html "Reads the value of a detail attribute value from a
geometry."), [prim](prim.html "Reads a primitive attribute value from a
geometry."), [point](point.html "Reads a point attribute value from a
geometry."), or [vertex](vertex.html "Reads a vertex attribute value from a
geometry.") may be faster.

这种一般的形式让你在运行时指定 "类 "的属性。这对于编写可以在不同类上工作的一般代码是很有用的。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

如果你提前知道你要读取的属性的类别，使用细节、底层、点或顶点可能会更快。

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

`name`

The name of the attribute, group, or intrinsic to read from.

你也可以使用 "primgroup"、"pointgroup "或 "vertexgroup "来从组中读取。

`elemnum`

Which element (e.g. point number, primitive number, vertex number) to read
from. Ignored for detail attributes.You can use [vertexindex](vertexindex.html "Converts a primitive/vertex pair into a linear vertex.") to convert a
primitive/point pair into a vertex number.

要读取的属性、组或内在属性的名称。

Returns

Zero/empty value if the attribute does not exist. Use
[getattrib](getattrib.html "Reads an attribute value from geometry, with
validity check.") if you want to check whether the attribute existed.

要从哪个元素（如点编号、基元编号、顶点编号）读取。忽略细节属性。 你可以使用 evertexindex 将基元/点对转换成顶点编号。
