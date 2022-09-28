---
title: prim_attribute
order: 54
category:
  - houdini
---
    
## 描述

Interpolates the value of an attribute at a certain parametric (u, v) position
and copies it into a variable.

This function specifies the position using _intrinsic primitive UVs_. To use
UVs stored in UV attribute, use [uvsample](uvsample.html "Interpolates the
value of an attribute at certain UV coordinates using a UV attribute.")
instead.

这个函数使用内在的原始 UV 来指定位置。要使用存储在 UV 属性中的 UV，请使用 uvsample 代替。

`int prim_attribute(<geometry>geometry, <type>&value, string attribute_name, int prim_number, float u, float v)`

`int prim_attribute(<geometry>geometry, <type>&value[], string attribute_name, int prim_number, float u, float v)`

Samples the attribute value at the given UV coordinates on the primitive.

在基元上的给定 UV 坐标处对属性值进行采样。

`int prim_attribute(<geometry>geometry, <type>&value, string attribute_name, int prim_number, vector uvw)`

`int prim_attribute(<geometry>geometry, <type>&value[], string attribute_name, int prim_number, vector uvw)`

Specify the UVW coordinates using a vector instead of two floats.

使用一个矢量而不是两个浮点来指定 UVW 坐标。

If you don‘t need to test for errors, you can use [primuv](primuv.html "Interpolates the value of an attribute at a certain parametric (uvw)
position.") instead.This function does not work with certain primitive types
such as tetrahedra and polysoups.

如果您不需要测试错误，您可以使用 eprimuvininstead。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

此函数对某些基元类型（如四面体和多面体）不起作用。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

`value`

The function overwrites this variable with the interpolated value from the
primitive.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

```c
attribute_name
```

The name of the attribute to read. **For point and vertex attributes, the
value will at the given UV coordinates will be interpolated** from the
surrounding points/vertices.

该函数会用来自基元的内插值覆盖此变量。

`prim_number`

The primitive number to read the attribute from.

要读取的属性的名称。对于点和顶点属性，在给定的 UV 坐标处的值将从周围的点/顶点中插值出来。

`u`, `v`

The primitive UV coordinates at which to read the attribute.

要从中读取属性的基元编号。

Returns

Returns `1` on success or `0` on an error (for example, the attribute
doesn‘t exist).

读取该属性的原始 UV 坐标。

Returns `0` if the type of `value` is larger than the primitive type. For
example, you can‘t read a vector attribute into a matrix variable.

成功时返回 1，错误时返回 0（例如，该属性不存在）。
