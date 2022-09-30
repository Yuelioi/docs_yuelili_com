---
title: primarclen
order: 45
category:
  - houdini
---
    
## 描述

Evaluates the length of an arc on a primitive using parametric uv coordinates.

`float primarclen(<geometry>geometry, vector2 uv1, vector2 uv2, int prim_num)`

`float primarclen(<geometry>geometry, vector2 uv1, vector2 uv2, int prim_num, int divs)`

`float primarclen(<geometry>geometry, vector2 uv1, vector2 uv2, int prim_num, int divs, int primuvmode)`

`float primarclen(<geometry>geometry, vector2 uv1, vector2 uv2, int prim_num, int divs, int primuvmode, float primuvtol)`

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

`uv1`

The start coordinate in the primitive‘sparametric space to measure between.

基元中要测量的参数空间的起始坐标。

`uv2`

The end coordinate in the primitive‘sparametric space to measure between.

基元参数空间中要测量的终点坐标。

`prim_num`

The number of the primitive across which to measure the distance.

要测量距离的基元的编号。

`divs`

The number of divisions per segment to use or 10 if not supplied.

要使用的每段划分的数目，如果没有提供，则为 10。

`primuvmode`

Define the uv1 and uv2 coordinates units. See
[primuvconvert](primuvconvert.html "Convert parametric UV locations on curve
primitives between different spaces.") for the list of modes.

定义 uv1 和 uv2 坐标单位。模式列表见 eprimuvconvert。

`primuvtol`

A tolerance used when computing the curve length to do uv coordinates
conversions.

计算曲线长度时用于进行 uv 坐标转换的公差。

Tip

You can also read the `arclength` primitive intrinsic attribute to get a
curve‘stotal arc length.

你也可以读取 arclengthprimitive 的内在属性来取得曲线的总弧长。
