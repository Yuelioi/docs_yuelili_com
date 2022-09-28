---
title: attribsize
order: 10
category:
  - houdini
---
    
## 描述

Returns the size of a geometry attribute.

If you know the attribute class ahead of time, using
[detailattribsize](detailattribsize.html "Returns the size of a geometry
detail attribute."), [primattribsize](primattribsize.html "Returns the size of
a geometry prim attribute."), [pointattribsize](pointattribsize.html "Returns
the size of a geometry point attribute."), or
[vertexattribsize](vertexattribsize.html "Returns the size of a geometry
vertex attribute.") may be faster.

如果你提前知道属性类别，使用 etailattribsize、primattribsize、pointattribsize 或 vertexattribsiz 可能会更快。

`int attribsize(<geometry>geometry, string attribclass, string attribute_name)`

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

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这个参数可以是 op:/path/to/sopreference。

`attribclass`

One of `"detail"` (or `"global"`), `"point"`, `"prim"`, or `"vertex"`.

详细"（或 "全局"）、"点"、"底层 "或 "顶点 "中的一个。

You can also use `"primgroup"`, `"pointgroup"` or `"vertexgroup"` to [read
from groups](../groups.html "You can read the contents of
primitive/point/vertex groups in VEX as if they were attributes.").

你也可以使用 "primgroup"、"pointgroup "或 "vertexgroup "来从组中读取。

Returns

The size of an attribute‘s*type*.

一个属性类型的大小。

- For a vector type, this is the number of components.

对于一个矢量类型，这是组件的数量。

- For an integer, float, or string, this returns `1`.

对于一个整数、浮点数或字符串，它返回 1。

- For an array attribute, this returns the size of the tuples in the array. The tuple size is controlled by the **Size** parameter on the [![](../../icons/SOP/attribcreate.svg)Attribute Create node](../../nodes/sop/attribcreate.html "Adds or edits user defined attributes.").

对于一个数组属性，它返回数组中元组的大小。元组的大小由 Attribute Create 节点的 Sizeparameter 控制。

If the attribute does not exist, returns `0`.

如果该属性不存在，返回 0。

- This function works with the attribute‘s*type*. It does not return the size of an attribute _value_. You can‘t use this function to get the length of a string or array value.

这个函数与属性类型一起工作。它不返回一个属性值的大小。你不能用这个函数来获得一个字符串或数组值的长度。

## Examples

    // Get the size of the position attribute of "defgeo.bgeo"int size = attribsize("defgeo.bgeo", "point", "P");
