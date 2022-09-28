---
title: surfacedist
order: 16
category:
  - houdini
---
    
## 描述

Finds the distance of a point to a group of points along the surface of a
geometry.

| Since | 17.0 |
| ----- | ---- |

`float surfacedist(<geometry>geometry, string ptgroup, string P_attribute, int search_pt, int &closest_pt, string distance_metric)`

`float surfacedist(<geometry>geometry, string ptgroup, string P_attribute, int search_pt, float max_radius, int &closest_pt, string distance_metric)`

Returns the distance from the search point to the closest point in the
pointgroup.

返回从搜索点到该点组中最近的点的距离。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

组。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

`ptgroup`

The name of a point group or a pattern to generate a pointgroup.Uses the same
semantics as a SOP group, so empty stringswill match all points.Attribute
groups like `@Cd.x>0` canalso be used, but note that the `@` may need to be
escaped witha backslash in a [![](../../icons/COMMON/wrangle.svg)Snippet
VOP](../../nodes/vop/snippet.html "Runs a VEX snippet to modify the incoming
values.").

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

`P_attribrute`

The name of the vector attribute to use to measure distance betweenconnected
points. Using “P” will give the world distance along the surface,but a custom
attribute can be used to measure along a different metric.

一个点组的名称或生成一个点组的模式。

`search_pt`

The point to measure the distance for.

组。 使用与 SOP 组相同的语义，所以空字符串

`max_radius`

The maximum distance to measure the surface distance.This can speed thingsup
by allowing the search to quit early if the point is not within theradius.
Points outside the radius will return a value of `-1` for both thedistance and
the lead point.

将匹配所有的点。 属性组like@Cd.x>0 可以

`&closest_pt`

Index of the closest point in the source group.

也可以使用，但是请注意@可能需要用

`-1` if no closest point was found.

在 Snippet VOP 中使用反斜杠。

```c
distance_metric
```

The method to use to measure distance. Accepted values are `edge`
and`surface`. Edge distance is measured along the edges of the model,
whilesurface distance is measured along edges and across single polygons.
Surfacedistance is a better approximation of the true geodesic distance, but
isalso more expensive to compute.

用来测量连接点之间距离的矢量属性的名称。

Returns

The distance from the search point to the closest point in the point group.

连接点之间的距离。使用 "P "会给出沿表面的世界距离。

Returns `-1` if no closest point was found.

但也可以使用一个自定义的属性来测量不同的尺度。
