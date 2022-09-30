---
title: attribtype
order: 11
category:
  - houdini
---
    
## 描述

Returns the type of a geometry attribute.

If you know the attribute class ahead of time, using
[detailattribtype](detailattribtype.html) "Returns the type of a geometry
detail attribute."), [primattribtype](primattribtype.html) "Returns the type of
a geometry prim attribute."), [pointattribtype](pointattribtype.html) "Returns
the type of a geometry point attribute."), or
[vertexattribtype](vertexattribtype.html) "Returns the type of a geometry
vertex attribute.") may be faster.

如果你提前知道属性类别，使用 etailattribtype、primattribtype、pointattribtype 或 vertexattribtyp 可能更快。

`int attribtype(<geometry>geometry, string attribclass, string attribute_name)`

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

A numeric code indicating the attribute type:

表示属性类型的数字代码。

`-1`

|

Attribute not found, or unknown type.

未找到属性，或未知类型。

---|---

`0`

|

Integer

`1`

|

Float or vector

浮点数或矢量

`2`

|

String

`3`

|

Array of integers (or integer tuples)

整数数组（或整数图元）的数组

`4`

|

Array of floats (or float tuples)

浮点数数组（或浮点数图元）。

`5`

|

Array of strings.

字符串的数组。

`6`

|

Dictionary

`7`

|

Array of Dictionaries

字典的数组

## Examples

    // Get the type of the position attribute of "defgeo.bgeo"int type = attribtype("defgeo.bgeo", "point", "P");
