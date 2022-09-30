---
title: lkspline
order: 8
category:
  - houdini
---
    
## 描述

Samples a polyline between the key points.

```c
float  lkspline(float sample_pos, float value1, float key_pos1, ...)
```

Samples a polyline defined by a series of value/position pairs.This is useful
for specifying a 1D data ramp.

对由一系列值/位置对定义的折线进行采样。

```c
vector  lkspline(float sample_pos, vector value1, float key_pos1, ...)
```

```c
vector4  lkspline(float sample_pos, vector4 value1, float key_pos1, ...)
```

Samples a polyline defined by a series of vector value/position pairs.This is
useful for specifying a color ramp.

这对于指定一个一维数据斜面很有用。

If you just want linearly spaced keys, use [lspline](lspline.html "Samples a
polyline defined by linearly spaced values.") instead.

对由一系列矢量值/位置对定义的折线进行采样。

`sample_pos`

The position along the curve at which to sample.

这对指定一个颜色斜率很有用。

`valuen`, `key_posn`

To define the shape of the curve, you pass a number of value/position pairs
specifying the key points through which the curve passes.

如果你只想要线性间隔的键，可以用 elsplineinstead。

You must specify key positions in ascending order or the results will be
unpredictable.

沿着曲线取样的位置。

Returns

The value of the curve at the sampled position.

为了定义曲线的形状，你要传递一些值/位置对，指定曲线经过的关键点。

Tip

The [spline](spline.html "Samples a value along a polyline or spline curve.")
function is a more flexible superset of this function.

你必须以升序的方式指定关键位置，否则结果将无法预料。
