---
title: nuniqueval
order: 33
category:
  - houdini
---
    
## 描述

Returns the number of unique values from an integer or string attribute.

`int nuniqueval(<geometry>geometry, string attribclass, string attribute_name)`

Returns the number of _unique_ values across all values of an attribute.You
can use [uniqueval](uniqueval.html) "Returns one of the set of unique values
across all values for an int or string attribute.") to iterate though the set
of unique values.

返回一个属性的所有值中 uniquevalues 的数量。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

你可以使用 uniqueval 来迭代唯一值的集合。

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

## Examples

Test if all values of the point attribute `foo` are unique

你也可以使用 "primgroup"、"pointgroup "或 "vertexgroup "来从组中读取。

    int test = nuniqueval(0, "point", "foo") == npoints(0)
