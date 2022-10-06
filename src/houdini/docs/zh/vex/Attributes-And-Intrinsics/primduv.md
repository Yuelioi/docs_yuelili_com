---
title: primduv
order: 50
category:
  - houdini
---
    
## 描述

Returns position derivative on a primitive at a certain parametric (u, v)
position.

`vector primduv(string geometry, int prim_number, vector2 uv, int du, int dv)`

`geometry`

A string specifying a geometry file (for example, a `.bgeo`) to read from.
When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

一个字符串，指定要读取的几何文件（例如，a.bgeo）。在胡迪尼内部运行时，这可以是 anop:/path/to/sopreference。

`prim_number`

The number of the primitive on which to measure the derivative.

用于测量导数的基元的编号。

`uv`

The parametric coordinates on the primitive at which to measure the
derivative.

基元上用于测量导数的参数坐标。

`du`, `dv`

Represent the derivative order to query.

表示要查询的导数顺序。

On a curve, the curve direction is given by `du==1` and the curvature is given
by `du==2`.

在一条曲线上，曲线方向由 du==1 给出，曲率由 du==2 给出。

This only works on NURBS and Bezier curve primitives.

这只适用于 NURBS 和 Bezier 曲线基元。

du is currently ignored as it is meant to work with parametric surfaces.
