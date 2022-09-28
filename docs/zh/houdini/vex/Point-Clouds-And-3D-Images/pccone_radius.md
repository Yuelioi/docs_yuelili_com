---
title: pccone_radius
order: 6
category:
  - houdini
---
    
## 描述

Returns a list of closest points from a file in a cone, taking into account
their radii

| Since | 18.0 |
| ----- | ---- |

`int [] pccone_radius(<geometry>geometry, string PChannel, string RadChannel, float radscale, vector P, vector dir, float angle, float max_distance, int maxpoints)`

`int [] pccone_radius(<geometry>geometry, string ptgroup, string PChannel, string RadChannel, float radscale, vector P, vector dir, float angle, float max_distance, int maxpoints)`

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

These functions open a geometry file and return a list of points within the
cone whose apex is P, opens in the vector direction dir, and with angle angle
to dir. Additionally, it only returns the closest maxpoints points within
distance max_distance of P. Each of the points will be expanded by their
RadChannel attribute, which will be dilated by radscale.

这些函数打开一个几何文件，并返回一个圆锥体内的点的列表，这个圆锥体的顶点是 P，在矢量方向 dir 打开，角度为 odir。此外，它只返回距离 P 的 max_distance 内最近的 maxpointspoints。每一个点都将被它们的 RadChannel 属性所扩展，它将被扩张为 yradscale。

Using a radius channel allows intersection detection between spheres of
varying radii. In this case you cannot use only your own sphere radius, as the
intersecting sphere may have a much larger radius so not be in your search
window.Because of this, it is also sensible to use a 0.0 radius with this
function just to find all the source spheres that your query position is
inside of.

使用半径通道可以检测不同半径的球体之间的交集。在这种情况下，你不能只使用自己的球体半径，因为相交的球体可能有更大的半径，所以不在你的搜索窗口中。
正因为如此，在这个函数中使用 0.0radius 也是明智的，只是为了找到你的查询位置在其中的所有源球体。

The `ptgroup` is a point group that limits the points to search.This is a SOP-
style group pattern, so can be something like `0-10` or `@Cd.x>0.5`.A blank
string is treated as matching all points.

Theptgroup 是一个点组，用来限制搜索的点。 这是一个 SOP 风格的组模式，所以可以是like0-10or@Cd.x>0.5。
空白字符串会被视为匹配所有的点。
