---
title: uvsample
order: 68
category:
  - houdini
---
    
## 描述

Interpolates the value of an attribute at certain UV coordinates using a UV
attribute.

This function specifies the position using UVs from a UV attribute. To use
_intrinsic primitive UVs_ , use [primuv](primuv.html "Interpolates the value
of an attribute at a certain parametric (uvw) position.") instead.

这个函数使用 UV 属性的 UV 来指定位置。要使用内在的原始 UV，请使用 eprimuvin 代替。

`<type> uvsample(<geometry>geometry, string attr_name, string uv_attr_name, vector uvw)`

`<type>[] uvsample(<geometry>geometry, string attr_name, string uv_attr_name, vector uvw)`

`<type> uvsample(<geometry>geometry, string primgroup, string attr_name, string uv_attr_name, vector uvw)`

`<type>[] uvsample(<geometry>geometry, string primgroup, string attr_name, string uv_attr_name, vector uvw)`

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

`primgroup`

The name of a primitive group or a pattern to generate a primitivegroup.Uses
the same semantics as a SOP group, so empty stringswill match all
primitives.Attribute groups like `@Cd.x>0` canalso be used, but note that the
`@` may need to be escaped witha backslash in a
[![](../../icons/COMMON/wrangle.svg)Snippet VOP](../../nodes/vop/snippet.html "Runs a VEX snippet to modify the incoming values.").

基元组的名称或用于生成基元组的模式。

`attr_name`

The name of a point or vertex attribute to sample. For primitive attributes,
the value is taken from the primitive under the given UVs. **For point and
vertex attributes, the value at the given UV coordinates will be interpolated
from the surrounding points/vertices**. The values are taken from the “lowest”
level at which an attribute with this name exists.

组。 使用与 SOP 组相同的语义，因此空字符串

This must be a 3-float attribute.

将匹配所有基元。 属性组 like@Cd.x>0 也可

`uv_attr_name`

The name of a point or vertex attribute containing UVs. The default UVs
created by Houdini are in an attribute named `uv`. The named attribute can be
2D (UV) or 3D (UVW) in any vector type.

也可使用，但请注意@可能需要用

`uvw`

The position in UV(W) space at which to sample the attribute.

一个反斜杠来转义。
