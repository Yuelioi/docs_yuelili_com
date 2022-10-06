---
title: uniqueval
order: 66
category:
  - houdini
---
    
## 描述

Returns one of the set of unique values across all values for an int or string
attribute.

`int|string uniqueval(<geometry>geometry, string attribclass, string attribute_name, int which)`

If any points/primitives/vertices in the geometry have the same value for the
given attribute, the set of _unique_ values will be smaller than the total
number of points/primitives/vertices. This function lets you iterate through
the set of unique values.

如果几何体中的任何点/基元/顶点都有相同的给定属性值，那么 uniquevalues 的集合将小于点/基元/顶点的总数。这个函数可以让你遍历唯一值的集合。

This function only works with string and integer attributes.

这个函数只对字符串和整数属性起作用。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何图形的输入数字（从 0 开始）。

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

```c
`attribute_name
```

`

The name of the attribute (or intrinsic) to read.

要读取的属性（或内在属性）的名称。

`which`

Which one of the unique values to return.Use [nuniqueval](nuniqueval.html) "Returns the number of unique values from an integer or string attribute.") to
get how many unique values the attribute has.

要返回哪一个唯一值。

## Examples

Iterate through the unique values of the `@foo` point string attribute

使用 uniqueval 来获取该属性有多少个唯一值。

    int count = nuniqueval(0, "point", "foo");for (int i = 0; i < count; i++) {  string val = uniqueval(0, "point", "foo", i);  // ...do something with the value...}
