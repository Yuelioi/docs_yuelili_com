---
title: cspline
order: 3
category:
  - houdini
---
    
## 描述

Samples a Catmull-Rom (Cardinal) spline defined by uniformly spaced keys.

To specify the curve using unevenly spaced keys, use [ckspline](ckspline.html "Samples a Catmull-Rom (Cardinal) spline defined by position/value keys.").

要指定使用不均匀键的曲线，请使用 eckspline。

```c
float  cspline(float t, float val1, ...)
```

```c
vector  cspline(float t, vector val1, ...)
```

```c
vector4  cspline(float t, vector4 val1, ...)
```

`t`

The position along the spline to sample.

沿着花键要取样的位置。

`val1`, `val2`, `...`

A series of of key values. The keys are assumed to be uniformly spaced along a
range from 0 to 1.

一系列的键值。假设键值在 0 到 1 的范围内均匀分布。

Returns

The interpolated value at position `t` along the curve.

沿着曲线的位置的内插值。

Computes a Catmull-Rom (Cardinal) spline between the key pointsspecified.

在指定的关键点之间计算 Catmull-Rom (Cardinal) 花键。

Because of the nature of the Cardinal spline, the value associated withthe
first and last keys will never be returned. However, these keys areused to
determine the shape of the curve on entry and exit.

指定。
