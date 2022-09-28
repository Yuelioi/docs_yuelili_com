---
title: uvintersect
order: 38
category:
  - houdini
---
    
## 描述

This function computes the intersection of the specified ray with the geometry
in uv space.

`int uvintersect(<geometry>geometry, string uvname, vector orig, vector dir, vector &pos, vector &primuv)`

`int uvintersect(<geometry>geometry, string primgroup, string uvname, vector orig, vector dir, vector &pos, vector &primuv)`

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

This function computes the intersection of the specified ray with the geometry
in uv space. The primitive number is returned, or -1 if there is an error or
no intersection found.

组。 使用与 SOP 组相同的语义，因此空字符串

The position in uvspace of the intersection location is stored in p. The
corresponding parametric location of the intersection is stored in primuv. In
the case of multiple intersections, the intersection closest to the ray origin
is used.

将匹配所有基元。 属性组 like@Cd.x>0 也可

This function does not expect a normalized direction vector. Instead, it uses
the length of the vector as the maximum distance. The integer result is the
primitive hit.

也可使用，但请注意@可能需要用

Note

It can be hard to visualize a 3D intersection of a ray in a 3D UV space. One
trick that can be used is to unwrap the geometry in SOP to get better
visualization of the space. This can be done by using a [Split Vertex
SOP](../../nodes/sop/splitvertex.html) followed by a
[![](../../icons/SOP/attribcopy.svg)Attribute Copy
SOP](../../nodes/sop/attribcopy.html "Copies attributes between groups of
vertices,points, or primitives."). This will disconnect the faces at uv
boundaries and stamp the uvw values on top of the `P` attribute.

的反斜线。

Note

When intersections are performed against metaball geometry, it is impossible
to determine the primitive number of the metaball which was hit. In this case,
the function returns the number of primitives in the intersection geometry.

此函数计算指定射线与 uv 空间中的几何体的交点。返回原始数字，如果有错误或没有找到交集，则返回-1。
