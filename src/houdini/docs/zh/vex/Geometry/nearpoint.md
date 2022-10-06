---
title: nearpoint
order: 12
category:
  - houdini
---
    
## 描述

Finds the closest point in a geometry.

```c
int  nearpoint(<geometry>geometry, vector pt)
```

```c
int  nearpoint(<geometry>geometry, vector pt, float maxdist)
```

```c
int  nearpoint(<geometry>geometry, string ptgroup, vector pt)
```

```c
int  nearpoint(<geometry>geometry, string ptgroup, vector pt, float maxdist)
```

Returns the number of the closest point on the geometry.This will only search
against points, not the surface locationsof the geometry.Use
[xyzdist](xyzdist.html "Finds the distance from a point to the closest
location on surface geometry.") to find the closest point on surfaces or
curves.

返回几何体上最近的一个点的编号。

-1 is returned if no point is found in the search distance.

这将只搜索点，而不是几何体的表面位置

`<geometry>`

When running in the context of a node (such as a wrangle SOP), this argument
can be an integer representing the input number (starting at 0) to read the
geometry from.

而不是几何体的表面位置。 使用 xyzdist 来寻找曲面或曲线上最近的点。

Alternatively, the argument can be a string specifying a geometry file (for
example, a `.bgeo`) to read from. When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

如果在搜索距离内没有找到点，则返回-1。

`ptgroup`

A point group pattern to limit the search to.Can be a SOP-style grouppattern
such as `0-10` or `@Cd.x>0.5`.An empty string will match all points.

当在一个节点的上下文中运行时（比如 wrangle SOP），这个参数可以是一个整数，代表要读取几何体的输入数字（从 0 开始）。

`pt`

The position in space to find the closest point on the geometry to.

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是 anop:/path/to/sopreference。

`maxdist`

The maximum distance to search.The operation can be sped up if itis allowed to
quit early.

一个限制搜索的点组模式。 可以是一个 SOP 风格的组
