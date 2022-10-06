---
title: curvearclen
order: 13
category:
  - houdini
---
    
## 描述

Evaluates the length of an arc on a primitive defined by an array of points
using parametric uv coordinates.

| Since | 18.5 |
| ----- | ---- |

`float curvearclen(vector positions[], float uv1, float uv2, int closedflag, int fmt, int order)`

`float curvearclen(vector positions[], float uv1, float uv2, int closedflag, int fmt, int order, int divs)`

`float curvearclen(vector positions[], float uv1, float uv2, int closedflag, int fmt, int order, int divs, int primuvmode)`

`float curvearclen(vector positions[], float uv1, float uv2, int closedflag, int fmt, int order, int divs, int primuvmode, float primuvtol)`

Returns the arc length between two parametric UV coordinates on a given
primitive. This lets you measure the distance across a polygon face or along a
curve.

返回给定基元上两个参数化 UV 坐标之间的弧长。这可以让您测量跨越多边形面或沿曲线的距离。

`geometry`

A string specifying a geometry file (for example, a `.bgeo`) to read from.
When running inside Houdini, this can be an

```c
op:/path/to/sop
```

reference.

一个字符串，指定要读取的几何文件（例如，a.bgeo）。在胡迪尼内部运行时，这可以是 anop:/path/to/sopreference。

`points`

The array of control points to define the curve.

用于定义曲线的控制点阵列。

`uv1`

The start coordinate in the primitive‘sparametric space to measure between.

基元的参数空间中的起始坐标，以便在两者之间进行测量。

`uv2`

The end coordinate in the primitive‘sparametric space to measure between.

基元的参数空间中的终点坐标，以在两者之间进行测量。

`closedflag`

The curve can be closed or open. In a closed curve, the last control point
will be connected to the first one.

曲线可以是封闭的或开放的。在一条封闭的曲线中，最后一个控制点将与第一个控制点相连。

`fmt`

The curve type to create. You can used constants defined in math.h, or 0 to
create a polygon curve, 1 to create a bezier curve or 2 to create a NURBS
curve.

要创建的曲线类型。你可以使用 math.h 中定义的常数，或者用 0 来创建多边形曲线，用 1 来创建贝塞尔曲线，用 2 来创建 NURBS 曲线。

`order`

The curve order for NURBS or Bezier curves. This is ignored for polygon
curves.

NURBS 或 Bezier 曲线的曲线顺序。如果是多边形曲线，这个选项会被忽略。

`divs`

The number of divisions per segment to use or 10 if not supplied.

每段要使用的分割数，如果没有提供，则为 10。

`primuvmode`

Define the uv1 and uv2 coordinates units. See
[primuvconvert](primuvconvert.html "Convert parametric UV locations on curve
primitives between different spaces.") for the list of modes.

定义 uv1 和 uv2 座标单位。请参阅 primuvconvert 的模式列表。

`primuvtol`

A tolerance used when computing the curve length to do uv coordinates
conversions.

计算曲线长度时用来做 uv 坐标转换的公差。
