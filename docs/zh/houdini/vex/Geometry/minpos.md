---
title: minpos
order: 11
category:
  - houdini
---
    
## 描述

Finds the closest position on the surface of a geometry.

```c
vector  minpos(<geometry>geometry, vector point)
```

Returns the position of the closest point in the given geometry to the point.

返回给定几何体中离该点最近的点的位置。

```c
vector  minpos(<geometry>geometry, vector point, float maxdist)
```

Returns the position of the closest point in the given geometry to the
point,within the maxdist radius.

返回给定几何体中离该点最近的点的位置。

```c
vector  minpos(<geometry>geometry, string primgroup, vector point)
```

Returns the position of the closest point in the given geometry to the
point,limiting the search to primitives in the named group.

在 maxdistradius 之内。

`vector minpos(<geometry>geometry, string primgroup, vector point, float maxdist)`

Returns the position of the closest point in the given geometry to the
point,limiting the search to primitives in the named group and to the maxdist
radius.

返回给定几何体中离点最近的点的位置。

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

将搜索范围限制在指定组中的基元。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

返回给定几何体中离点最近的点的位置。

`primgroup`

If specified, only report points on You can also use group specification
syntax like `@Cd.x>0`,but note that the `@` may need to be escaped with a
backslash in a Wrangle snippet.An empty string matches all primitives.

将搜索范围限制在指定组内的基元和最大直径上。

`point`

The point in world space to start looking for the closest point on the
geometry.

当在节点的上下文中运行时（如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

`maxdist`

The maximum distance to search. Specifying this can speed up the function
since it may allow quitting the search early.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

Returns

The position of the nearest point on the geometry, or point if no nearest
point was found.

如果指定了，只报告在
