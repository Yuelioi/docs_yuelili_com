---
title: setprimintrinsic
order: 64
category:
  - houdini
---
    
## 描述

Sets the value of a writeable primitive intrinsic attribute.

`int setprimintrinsic(int geohandle, string name, int prim_num, <type>value, string mode="set")`

`int setprimintrinsic(int geohandle, string name, int prim_num, <type>value[], string mode="set")`

Despite the name, some “intrinsic” attributes on primitives are writeable.

尽管有这个名字，但基元上的一些 "内在 "属性是可写的。

`geohandle`

A handle to the geometry to write to. Currently the only valid value is `0` or
[geoself](geoself.html "Returns a handle to the current geometry."), which
means the current geometry in a node. (This argument may be used in the future
to allow writing to other geometries.)

一个指向要写入的几何体的句柄。目前唯一有效的值是 0orgeoself，这意味着节点中的当前几何体。(这个参数将来可能会被用来允许写到其它几何体。)

`name`

The name of the intrinsic to set.

要设置的本体的名称。

`prim_num`

The number of the primitive to change the value on.

要改变值的基元的编号。

`mode`

(Optional) if given, this controls how the function modifies any existing
value in the attribute.

(可选）如果给定，这将控制函数如何修改属性中的任何现有值。

`"set"`

|

Overwrite the attribute with the given value.

用给定的值覆写属性。

---|---

`"add"`

|

Add to the attribute the value.

向属性添加值。

`"min"`, `"minimum"`

|

Set the attribute to the minimum of itself and the value.

将属性设置为其本身和该值的最小值。

`"max"`, `"maximum"`

|

Set the attribute to the maximum of itself and the value.

将属性设置为自身和值的最大值。

`"mult"`, `"multiply"`

|

Multiply the attribute by the value.For matrices, this will do matrix
multiplication.For vectors, component-wise.

用属性乘以值。 对于矩阵，这将做矩阵乘法。 对于向量来说，是分量式的。

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
