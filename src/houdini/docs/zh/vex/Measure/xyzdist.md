---
title: xyzdist
order: 18
category:
  - houdini
---
    
## 描述

Finds the distance from a point to the closest location on surface geometry.

```c
float  xyzdist(<geometry>geometry, vector origin)
```

Finds the distance from origin to the closest location on the given geometry.

计算从原点到给定几何体上最近位置的距离。

```c
float  xyzdist(<geometry>geometry, vector origin, int &prim, vector &uv)
```

`float xyzdist(<geometry>geometry, vector origin, int &prim, vector &uv, float maxdist)`

Finds the distance from origin to the closest location on the geometry,
andwrites the primitive number and UV coordinates of the closest location into
the output arguments.

计算从原点到几何体上最近的位置的距离，并将最近的位置的基元数和 UV 坐标写入输出参数。

```c
float  xyzdist(<geometry>geometry, string primgroup, vector origin)
```

`float xyzdist(<geometry>geometry, string primgroup, vector origin, int &prim, vector &uv)`

`float xyzdist(<geometry>geometry, string primgroup, vector origin, int &prim, vector &uv, float maxdist)`

Finds the distance from origin to the closest location in the given primitive
group on the given geometry,and writes the primitive number and UV coordinates
of the closest location into the output arguments.

将最接近的位置的基元编号和 UV 坐标写进输出参数。

Note: Distances to packed primitives and sphere/tube/circle primitives
withnon-uniform scales may not represent the actual closest point as the
closestpoint is found in the untransformed space.

计算从原点到给定几何体上给定的基元组中最近的位置的距离。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

并将最接近的位置的基元编号和 UV 坐标写进输出参数。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

注意：到包装好的基元和具有非统一比例的球体/管状/圆状基元的距离可能不代表

`primgroup`

The name of a primitive group or a pattern to generate a primitivegroup.Uses
the same semantics as a SOP group, so empty stringswill match all
primitives.Attribute groups like `@Cd.x>0` canalso be used, but note that the
`@` may need to be escaped witha backslash in a
[![](../../icons/COMMON/wrangle.svg)Snippet VOP](../../nodes/vop/snippet.html "Runs a VEX snippet to modify the incoming values.").

的距离可能不代表实际最近的点，因为最近的

`origin`

The position in space to find the closest position on the geometry to.

点是在未转换的空间中找到的。

`&prim`

The function overwrites this variable with the number of the closest
primitive, or `-1` if no primitive was found.

在节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要从中读取几何图形的输入数字（从 0 开始）。

`&uv`

The function overwrites this variable with the UV coordinates of the closest
point on the closest primitive.You can use [primuv](primuv.html "Interpolates
the value of an attribute at a certain parametric (uvw) position.") to
sample an attribute value at this location.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

`maxdist`

The maximum distance to search. Specifying this can speed up the function by
allowing it to quit early.

基元组的名称或用于生成基元组的模式。

Returns

The distance from the origin point to the closest location on the geometry.

组。 使用与 SOP 组相同的语义，因此空字符串
