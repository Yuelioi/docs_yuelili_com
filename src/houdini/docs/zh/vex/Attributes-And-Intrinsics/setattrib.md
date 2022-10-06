---
title: setattrib
order: 55
category:
  - houdini
---
    
## 描述

Writes an attribute value to geometry.

If you know the attribute class ahead of time, using
[setdetailattrib](setdetailattrib.html "Sets a detail attribute in a
geometry."), [setprimattrib](setprimattrib.html "Sets a primitive attribute in
a geometry."), [setpointattrib](setpointattrib.html "Sets a point attribute in
a geometry."), or [setvertexattrib](setvertexattrib.html "Sets a vertex
attribute in a geometry.") may be faster.

如果你提前知道属性类别，使用 setdetailattrib、setprimattrib、setpointattrib 或 setvertexattrib 可能会更快。

`int setattrib(int geohandle, string attribclass, string attribute_name, int element_num, int vertex_num, <type>value, string mode="set")`

`int setattrib(int geohandle, string attribclass, string attribute_name, int element_num, int vertex_num, <type>value[], string mode="set")`

Returns the value of `geohandle` on success or `-1` on failure.

成功时返回 geohandle 的值，失败时返回 1。

Note

If the attribute does not exist, this function **creates the attribute** with
a default value of zero, empty string, or an empty array.If you want to
control the default value of a numeric attribute, use
[addattrib](addattrib.html "Adds an attribute to a geometry.") before setting
the attribute.

如果该属性不存在，该函数将以默认值 0、空字符串或空数组创建该属性。

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
[geoself](geoself.html) "Returns a handle to the current geometry."), which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

如果你想控制一个数字属性的默认值，请在设置该属性之前使用 addattribb。

`attribclass`

One of `"detail"` (or `"global"`), `"point"`, `"prim"`, or `"vertex"`.

要写入的几何体的句柄。目前唯一有效的值是 0orgeoself，也就是一个节点中的当前几何体。(这个参数将来可能会被用于允许写入其他几何体)。

You can also use `"primgroup"`, `"pointgroup"` or `"vertexgroup"` to [read
from groups](../groups.html "You can read the contents of
primitive/point/vertex groups in VEX as if they were attributes.").

详细"（或 "全局"）、"点"、"底层 "或 "顶点 "中的一个。

```c
attribute_name
```

The name of the attribute to change.

你也可以使用 "primgroup"、"pointgroup "或 "vertexgroup "来读取组。

`element_num`

The point or primitive number on which to change the attribute.

要改变的属性的名称。

For detail attributes, set this to `0` (the argument is ignored for detail
attributes).

要更改属性的点或基元编号。

For vertex attributes, set this to the primitive number of the primitive
containing the vertex.

对于细节属性，将此设置为 0（对于细节属性，该参数被忽略）。

`vertex_num`

For vertex attributes, this is the number of the vertex on the primitive
specified in `element_num`.

对于顶点属性，将此设置为包含顶点的基元编号。

To use a linear vertex index, set `element_num` to `-1` and use the linear
vertex index here.

对于顶点属性，这是在指定为 inlement_num 的基元上的顶点的编号。

For other detail, primitive, or point attributes, set this to `0` (the
argument is ignored in these cases).

要使用线性顶点索引，请将 element_num 设为 1，并在此使用线性顶点索引。

`value`

The value to set. If the type of this argument is not compatible with the
attribute type, the set will fail and the function will return `-1`.

对于其它细节、基元或点属性，请将此设置为 0（在这些情况下参数被忽略）。

Note that within a VEX program only one type may be written to a single
attribute.Ie, you cannot mix writes of float an integer.This can be surprising
as a literal like `1` will be an integer write so be ignored if floats were
previously written.

要设置的值。如果这个参数的类型与属性类型不兼容，设置将失败，函数将返回 1。

`mode`

(Optional) if given, this controls how the function modifies any existing
value in the attribute.

注意，在一个 VEX 程序中，只有一种类型可以被写入一个属性。 也就是说，你不能混合写入 float 和 integer。
这可能会让人感到惊讶，因为像 1 这样的文字将是一个整数的写法，所以如果之前写的是浮点数，就会被忽略。

`"set"`

|

Overwrite the attribute with the given value.

(可选）如果给定，这控制了函数如何修改属性中的任何现有值。

---|---

`"add"`

|

Add to the attribute the value.

用给定的值覆盖该属性。

`"min"`, `"minimum"`

|

Set the attribute to the minimum of itself and the value.

在属性中加入该值。

`"max"`, `"maximum"`

|

Set the attribute to the maximum of itself and the value.

将属性设置为自身和值的最小值。

`"mult"`, `"multiply"`

|

Multiply the attribute by the value.For matrices, this will do matrix
multiplication.For vectors, component-wise.

将属性乘以值。 对于矩阵，这将做矩阵乘法。 对于向量来说，是分量式的。

`"toggle"`

|

Toggles the attribute, independent of the source value.Useful for toggling
group membership.

切换属性，与源值无关。 对于切换组的成员资格很有用。

`"append"`

|

Valid for string and array attributes.Appends the source value to the end of
the original value.

对字符串和数组属性有效。 将源值附加到原始值的末尾。
