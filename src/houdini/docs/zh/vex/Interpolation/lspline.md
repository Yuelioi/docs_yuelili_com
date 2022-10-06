---
title: lspline
order: 9
category:
  - houdini
---
    
## 描述

Samples a polyline defined by linearly spaced values.

```c
float  lspline(float sample_pos, float value1, ...)
```

Samples a polyline defined by a series of (linearly spaced) values.This is
useful for specifying a 1D data ramp.

对由一系列（线性间隔的）数值定义的多线进行采样。

```c
vector  lspline(float sample_pos, vector value1, ...)
```

```c
vector4  lspline(float sample_pos, vector4 value1, ...)
```

Samples a polyline defined by a series of (linearly spaced) vector values.This
is useful for specifying a color ramp.

这对指定一个一维数据斜面很有用。

If you need variably-spaced keys, use [lkspline](lkspline.html "Samples a
polyline between the key points.") instead.

对由一系列（线性间隔的）矢量值定义的多线进行采样。

`sample_pos`

The position along the curve at which to sample the value.

这对指定一个颜色斜率很有用。

`valuen`

To define the shape of the curve, you pass a number of values specifying the
key points through which the curve passes. The function automatically spaces
the keys evenly.

如果你需要不同间隔的键，可以用 elksplineinstead 来代替。

Tip

The [spline](spline.html "Samples a value along a polyline or spline curve.")
function is a more flexible superset of this function.

沿着曲线的位置，在这个位置上采样。
