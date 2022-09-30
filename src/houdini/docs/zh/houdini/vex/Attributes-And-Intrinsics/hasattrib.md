---
title: hasattrib
order: 24
category:
  - houdini
---
    
## 描述

Checks whether a geometry attribute exists.

If you know the attribute class ahead of time, using
[hasdetailattrib](hasdetailattrib.html) "Returns if a geometry detail attribute
exists."), [hasprimattrib](hasprimattrib.html) "Returns if a geometry prim
attribute exists."), [haspointattrib](haspointattrib.html) "Returns if a
geometry point attribute exists."), or [hasvertexattrib](hasvertexattrib.html) "Returns if a geometry vertex attribute exists.") may be faster.

如果你提前知道属性类别，使用 hasdetailattrib、hasprimattrib、haspointattrib 或 hasvertexattrib 可能会更快。

`int hasattrib(<geometry>geometry, string attribclass, string attribute_name)`

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

Returns `1` if the attribute exists, or `0` otherwise.

如果属性存在，则返回 1，否则返回 0。

## Examples

    // Check whether the point group "pointstouse" exists.if (hasattrib("defgeo.bgeo", "pointgroup", "pointstouse")) {  // Do something with the point group}
