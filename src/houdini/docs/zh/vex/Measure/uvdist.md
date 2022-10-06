---
title: uvdist
order: 17
category:
  - houdini
---
    
## 描述

Finds the distance of a uv coordinate to a geometry in uv space.

`float uvdist(<geometry>geometry, string uvname, vector uv, int &prim, vector &primuv)`

`float uvdist(<geometry>geometry, string uvname, vector uv, int &prim, vector &primuv, float maxdist)`

`float uvdist(<geometry>geometry, string primgroup, string uvname, vector uv, int &prim, vector &primuv)`

`float uvdist(<geometry>geometry, string primgroup, string uvname, vector uv, int &prim, vector &primuv, float maxdist)`

Returns the distance to the closest uv coordinate on the geometry in uv
space.This will findpositions on the surfaces of the geometry, not just point
positions.

返回几何体上最近的 uv 坐标在 uv 空间的距离。 这将找到

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

几何体表面上的位置，而不仅仅是点的位置。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

`primgroup`

The name of a primitive group or a pattern to generate a primitivegroup.Uses
the same semantics as a SOP group, so empty stringswill match all
primitives.Attribute groups like `@Cd.x>0` canalso be used, but note that the
`@` may need to be escaped witha backslash in a
[![](../../icons/COMMON/wrangle.svg)Snippet VOP](../../nodes/vop/snippet.html "Runs a VEX snippet to modify the incoming values.").

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

`uvname`

The name of a point or vertex attribute on the geometry touse as the uv space.
The geometry will be unwrapped inplace basedon this attribute.The attribute
can be a 2D UV, 3D UVW, but also any vector attribute.

基元组的名称或用于生成基元组的模式。

`uv`

The position in uv space to find the closest position on the geometry to.

组。 使用与 SOP 组相同的语义，因此空字符串

`prim`

The number of the closest primitive.-1 if no primitive found.

将匹配所有基元。 属性组 like@Cd.x>0 也可

`primuv`

The primitive uv coordinates the closest primitive.The `primuv` functioncan be
used to evaluate attributes at that location.

也可使用，但请注意@可能需要用

`maxdist`

The maximum distance to search in uv space. The operation can be sped up if
itis allowed to quit early.

一个反斜杠来转义。
