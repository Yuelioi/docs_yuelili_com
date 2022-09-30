---
title: pgfind
order: 32
category:
  - houdini
---
    
## 描述

Returns a list of closest points from a file.

`int [] pgfind(<geometry>geometry, vector P, float radius, int maxpoints, float divsize)`

`int [] pgfind(<geometry>geometry, string ptgroup, vector P, float radius, int maxpoints, float divsize)`

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

或者，该参数可以是一个字符串，指定要读取的几何体文件（例如，a.bgeo）。当在 Houdini 内部运行时，这可以是一个 op:/path/to/sopreference。

These functions are very similar to the `pcfind` functions.The difference is
that they use a grid-based acceleration structure.This can provide faster
initialization and lookups, provided the right grid size tuning parameter is
used.

这些函数与 pcfindfunctions 非常相似。 不同的是，它们使用一个基于网格的加速结构。
这可以提供更快的初始化和查询，只要使用正确的网格大小调整参数。

If you are searching a point cloud using an near-constant search radius, that
radius can be used as the division size.

如果你使用一个近乎恒定的搜索半径来搜索点云，该半径可以作为划分大小。

Note

The division size must be not vary per point.

每个点的划分大小必须是不一样的。

Note

The division size is clamped above 3.0Ã105.

分区大小被限制在 3.0Ã105 以上。

The `ptgroup` is a point group that limits the points to search.This is a SOP-
style group pattern, so can be something like `0-10` or `@Cd.x>0.5`.A blank
string is treated as matching all points.

Theptgroup 是一个限制搜索点的点组。 这是一个 SOP 风格的分组模式，所以可以是like0-10or@Cd.x>0.5。
一个空白的字符串被视为匹配所有的点。
