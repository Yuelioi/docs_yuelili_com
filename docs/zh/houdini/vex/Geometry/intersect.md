---
title: intersect
order: 9
category:
  - houdini
---
    
## 描述

This function computes the first intersection of a ray with geometry.

To get a list of _all_ intersections along a ray, use
[intersect_all](intersect_all.html "Computes all intersections of the
specified ray with geometry.").

要获得沿射线的所有交点的列表，请使用 intersect_all。

`int intersect(<geometry>geometry, vector orig, vector dir, vector &p, float &u, float &v)`

`int intersect(<geometry>geometry, vector orig, vector dir, vector &p, float &u, float &v, ...)`

Computes the first intersection of the specified ray with the geometry.To get
_all_ intersections along a vector, use [intersect_all](intersect_all.html "Computes all intersections of the specified ray with geometry.") instead.The
variadic argument `"farthest"` can be used to indicate whether to return the
last intersection instead of the first.

计算指定射线与几何体的第一个交点。

`int intersect(<geometry>geometry, vector orig, vector dir, vector &p, vector &uvw)`

Computes the first intersection of the specified ray with the geometry.To get
_all_ intersections along a vector, use [intersect_all](intersect_all.html "Computes all intersections of the specified ray with geometry.") instead.

要获得沿矢量的所有交叉点，请使用 intersect_allinstead。

`int intersect(<geometry>geometry, string group, vector orig, vector dir, vector &p, vector &uvw)`

Computes the intersection of the specified ray with primitives in the given
group.

变量参数 "farthest "可以用来指示是否返回最后一个交点而不是第一个交点。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

计算指定射线与几何体的第一个交点。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

要获得沿矢量的所有交点，请使用 intersect_allinstead。

`group`

If given, only intersect primitives in this group.

计算指定射线与给定组中的基元的交点。

`orig`

The ray origin point.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

`dir`

The ray direction _and maximum distance_.This function does not expect a
normalized direction vector.Instead, it uses the length of the vector as the
maximum distance to search.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

`&p`

If the ray intersects a primitive, this variable is overwritten with the
intersection position in world space.

如果给定，则只与该组中的基元相交。

`&u`, `&v`, `&uvw`

If the ray intersects a primitive, this/these variable(s) is/are overwritten
with the parametric intersection position on the primitive.

射线原点。

Returns

The intersected primitive number, or `-1` if there was an error or the ray
didn‘t intersect anything.

射线方向和最大距离。

Note

When intersections are performed against metaball geometry, it isimpossible to
determine the primitive number of the metaball whichwas hit. In this case, the
function returns the number of primitivesin the intersection geometry.

这个函数并不期望有一个归一化的方向向量。
