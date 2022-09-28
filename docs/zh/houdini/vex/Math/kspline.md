---
title: kspline
order: 30
category:
  - houdini
---
    
## 描述

Returns an interpolated value along a curve defined by a basis and
key/position pairs.

`float kspline(string basis, float sample_pos, float value1, float key_pos1, ...)`

Samples a curve defined by a series of value/position pairs.This is useful for
specifying a 1D data ramp.

对由一系列数值/位置对定义的曲线进行采样。

`vector kspline(string basis, float sample_pos, vector value1, float key_pos1, ...)`

`vector4 kspline(string basis, float sample_pos, vector4 value1, float key_pos1, ...)`

Samples a curve defined by a series of vector value/position pairs.This is
useful for specifying a color ramp.

这对于指定一个一维数据斜面很有用。

If you just want linearly spaced keys, or if you need to vary the basis, use
[spline](spline.html "Samples a value along a polyline or spline curve.")
instead.

对由一系列矢量值/位置对定义的曲线进行采样。

`basis`, `bases`

These are the same interpolations supported by ramp parameters.

这对指定一个颜色斜率很有用。

`"constant"`

Maintains each key value until the next key, creating a “stair step” curve.

如果你只是想要线性间隔的键，或者你需要改变基础，可以使用 plineinstead。

`"linear"`

Connects the key points with a polyline.

这些都是斜率参数支持的插值。

For example, if you specified four values:

保持每个键值直到下一个键，形成一个 "阶梯式 "曲线。

    spline("linear", t, v0, v1, v2, v3)

![](../../images/vex/spline_linear.svg)

â¦the function returns the height of the orange dot at position sample_pos.

用一条折线连接关键点。

`"cubic"` (or `"catmullrom"`, `"cspline"`)

Connect the point values with a Catmull-Rom spline.

例如，如果你指定了四个值。

Note that the first and last values are outside the sample area toprovide the
slope of the curve at the second point (at the start of thesample range) and
the second-to-last point (at the end of the samplerange).

该函数返回在位置 ample_pos 的橙色点的高度。

For example, if you specified six values:

用 Catmull-Rom 花键连接点值。

    spline("catrom", t, v0, v1, v2, v3, v4, v5)

![](../../images/vex/spline_catrom.svg)

â¦the function returns the height of the orange dot at position t.

请注意，第一个和最后一个值是在样本区之外的，以提供曲线的斜率。

(This image is for illustration only, it does not show the correctcurve for
the shown points.)

提供第二点（样本范围的起点）的曲线斜率。

`"linearsolve"` (or `"solvelinear"`)

Maps between a set of non-uniform positions and a set of values.The
[kspline](kspline.html "Returns an interpolated value along a curve defined by
a basis and key/position pairs.") function does this mapping implicitly.

采样范围的起点）和第二至最后一个点（采样范围的终点）的曲线斜率。

    tk = spline("linearsolve", t, k0, k1, k2, k3, ...);v = spline(basis, tk, v1, v2, v3, ...);

(Technically, `linearsolve` interprets the values as key values, solves
theintersection of the spline, and returns the intercept point.)

范围的终点）。

```c
"monotonecubic"
```

“bezier”

“bspline”

“hermite”

`sample_pos`

The position along the curve at which to sample the value.

例如，如果你指定了六个值。

`valuen`, `key_posn`

To define the shape of the curve, you pass a number of value/position pairs
specifying the key points through which the curve passes.

该函数返回位置 t 的橙色点的高度。

You must specify key positions in ascending order or the results will be
unpredictable.

(此图仅用于说明，并不显示所显示的点的正确曲线)。

Tip

The [spline](spline.html "Samples a value along a polyline or spline curve.")
function is a more flexible superset of this function.

的曲线）。

This function is the equivalent of:

一组非统一位置和一组数值之间的映射。

    type kspline(basis, t, v0, k0, v1, k1, v2, k2...){  float tk = spline("linearsolve", t, k0, k1, k2, ...);  return spline(basis, tk, v0, v1, v2, ...);}
