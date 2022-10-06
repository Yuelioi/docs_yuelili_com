---
title: primuv
order: 52
category:
  - houdini
---
    
## 描述

Interpolates the value of an attribute at a certain parametric (uvw) position.

This function specifies the position using _intrinsic primitive UVs_. To use
UVs stored in UV attribute, use [uvsample](uvsample.html "Interpolates the
value of an attribute at certain UV coordinates using a UV attribute.")
instead.

这个函数使用内在的原始 UV 来指定位置。要使用存储在 UV 属性中的 UV，请使用 uvsampleinstead。

`<type> primuv(<geometry>geometry, string attribute_name, int prim_num, vector uvw)`

`<type>[] primuv(<geometry>geometry, string attribute_name, int prim_num, vector uvw)`

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

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

```c
attribute_name
```

The name of the attribute to read. **For point and vertex attributes, the
value will at the given UV coordinates will be interpolated** from the
surrounding points/vertices.

要读取的属性名称。对于点和顶点属性，在给定的 UV 坐标上的值将从周围的点/顶点插值而来。

`prim_num`

The primitive number to read the attribute from.

要读取属性的原始编号。

`uvw`

The primitive UVW coordinates at which to read the attribute.

读取该属性的原始 UVW 坐标。

- Returns the (possibly interpolated) value of the attribute at the given coordinates. If the attribute or primitive number don‘t exist, returns `0`.

返回属性在给定坐标处的（可能是内插的）值。如果属性或原始编号不存在，则返回 0。

- If you need to test for errors, you can use [prim_attribute](prim_attribute.html "Interpolates the value of an attribute at a certain parametric (u, v) position and copies it into a variable.") instead.

如果你需要测试错误，你可以使用 eprim_attributeinstead。
