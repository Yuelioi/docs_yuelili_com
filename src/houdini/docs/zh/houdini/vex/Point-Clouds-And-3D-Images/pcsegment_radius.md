---
title: pcsegment_radius
order: 28
category:
  - houdini
---
    
## 描述

Returns a list of closest points to a line segment from a specified file

| Since | 18.0 |
| ----- | ---- |

`int [] pcsegment_radius(<geometry>geometry, string PChannel, string RadChannel, float radscale, vector P0, vector P1, float max_distance, int maxpoints)`

`int [] pcsegment_radius(<geometry>geometry, string ptgroup, string PChannel, string RadChannel, float radscale, vector P0, vector P1, float max_distance, int maxpoints)`

`int [] pcsegment_radius(<geometry>geometry, string PChannel, string RadChannel, float radscale, vector P0, vector P1, float max_distance, int maxpoints, float &distances[])`

`int [] pcsegment_radius(<geometry>geometry, string ptgroup, string PChannel, string RadChannel, float radscale, vector P0, vector P1, float max_distance, int maxpoints, float &distances[])`

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

These functions open a geometry file and return a list of points (treated as
spheres) within max_distance of the line segment passing from P0 to P1. Each
point is treated as a sphere with radius equal to its RadChannel attribute,

这些函数打开一个几何文件，并返回一个在从 P0 到 P1 的线段的 max_distance 内的点（被视为球体）列表。每个点都被当作半径等于其 RadChannel 属性的球体。

The `ptgroup` is a point group that limits the points to search.This is a SOP-
style group pattern, so can be something like `0-10` or `@Cd.x>0.5`.A blank
string is treated as matching all points.

ptgroup 是一个点组，它限制了搜索的点。 这是一个 SOP 风格的组模式，所以可以是like0-10or@Cd.x>0.5。
一个空白的字符串会被视为匹配所有的点。

The function also optionally takes a float array `distances`, which it
modifies with the distances to each point.

这个函数也可以选择接受一个浮点数组 distances，它用每个点的距离来修改这个数组。
