---
title: setpointattrib
order: 59
category:
  - houdini
---
    
## 描述

Sets a point attribute in a geometry.

If you don‘t know the attribute class ahead of time, use
[setattrib](setattrib.html "Writes an attribute value to geometry.").

如果你没有提前知道属性类，请使用 etattrib。

`int setpointattrib(int geohandle, string name, int point_num, <type>value, string mode="set")`

`int setpointattrib(int geohandle, string name, int point_num, <type>value[], string mode="set")`

Returns the value of `geohandle` on success or `-1` on failure.

成功时返回 geohandle 的值，失败时返回 1。

Note

If the attribute does not exist, this function **creates the attribute** with
a default value of zero, empty string, or an empty array.If you want to
control the default value of a numeric attribute, use
[addattrib](addattrib.html "Adds an attribute to a geometry.") before setting
the attribute.

如果属性不存在，这个函数将创建一个默认值为零、空字符串或空数组的属性。

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
[geoself](geoself.html) "Returns a handle to the current geometry."), which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

如果你想控制一个数字属性的默认值，请在设置该属性之前使用 addattribb。

`name`

The attribute to set on the given point.

要写入的几何体的句柄。目前唯一有效的值是 0orgeoself，也就是一个节点中的当前几何体。(这个参数将来可能会被用来允许写到其他几何体上)。

`point_num`

The number of the point to set the attribute on.

要在给定的点上设置的属性。

`value`

The value to set the attribute to.

要设置属性的点的编号。

Note that within a VEX program only one type may be written to a single
attribute.Ie, you cannot mix writes of float an integer.This can be surprising
as a literal like `1` will be an integer write so be ignored if floats were
previously written.

要设置属性的值。

`mode`

(Optional) if given, this controls how the function modifies any existing
value in the attribute.

请注意，在一个 VEX 程序中，只有一种类型可以被写入到一个属性。 也就是说，你不能混合写入 float 和 integer。
这可能会让人感到惊讶，因为像 1 这样的文字将是一个整数的写法，所以如果之前写了浮点数，就会被忽略。

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

将属性设置为自身和值的最大值。

`"toggle"`

|

Toggles the attribute, independent of the source value.Useful for toggling
group membership.

用属性乘以值。 对于矩阵，这将做矩阵乘法。 对于向量来说，是分量式的。

`"append"`

|

Valid for string and array attributes.Appends the source value to the end of
the original value.

切换属性，与源值无关。 对于切换组的成员资格很有用。
