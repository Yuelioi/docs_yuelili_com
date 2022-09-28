---
title: attribtypeinfo
order: 12
category:
  - houdini
---
    
## 描述

Returns the transformation metadata of a geometry attribute.

`string attribtypeinfo(<geometry>geometry, string attribclass, string attribute_name)`

This general form lets you specify the attribute “class” at run-time. This can
be useful for writing general code that can work on different classes.If you
know the attribute class ahead of time, using
[detailattribtypeinfo](detailattribtypeinfo.html "Returns the type info of a
geometry attribute."), [primattribtypeinfo](primattribtypeinfo.html "Returns
the type info of a geometry attribute."),
[pointattribtypeinfo](pointattribtypeinfo.html "Returns the type info of a
geometry attribute."), or [vertexattribtypeinfo](vertexattribtypeinfo.html "Returns the type info of a geometry attribute.") may be faster.

这种一般的形式让你在运行时指定 "类 "的属性。这对于编写可以在不同类上工作的一般代码是很有用的。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

如果你提前知道了属性类，那么使用 etailattribtypeinfo、primattribtypeinfo、pointattribtypeinfo 或 vertexattribtypeinfom 可能会更快。

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

Returns

A string indicating the metadata for a given geometry attribute, or the empty
string (`""`) if the attribute does not exist.

要读取的属性（或内在属性）的名称。

`"none"`

|

Don‘t transform.

表示给定几何属性的元数据的字符串，如果该属性不存在，则为空字符串（""）。

---|---

`"point"`

|

Apply scales, rotations, and transformations.

不要变换。

`"hpoint"`

|

Apply scales, rotations, and transformations to this vector4.

应用缩放、旋转和变换。

`"vector"`

|

Apply scales and rotations, but not transformations.

对这个向量 4 应用缩放、旋转和变换。

`"normal"`

|

Apply rotations, apply scales with inverse-transpose.

应用缩放和旋转，但不应用变换。

`"color"`

|

Don‘t transform.

应用旋转，用反变换应用缩放。

`"matrix"`

|

Apply scales, rotations, and transformations to this matrix.

不要变换。

`"quaternion"`

|

Apply rotations.

对这个矩阵应用缩放、旋转和变换。

`"indexpair"`

|

Don‘t transform.

应用旋转。

`"integer"`

|

Do not blend this value when points are averaged.

不要变换。

```c
"integer-blend"
```

|

Integer values that blend when points are averaged.

当点的平均值时，不要混合这个值。

```c
"texturecoord"
```

|

Don‘t transform, and try to preserve seams when interpolating.Attributes
with this type will show up in the UV viewport menu.

当点被平均时，混合的整数值。
