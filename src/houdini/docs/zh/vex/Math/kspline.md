---
title: kspline
order: 32
category:
  - vex
---

`float kspline(string basis, float sample\_pos, float value1, float key\_pos1, ...)`

对由一系列数值/位置对定义的曲线进行采样。这对于指定一个一维数据斜面很有用。

`vector kspline(string basis, float sample\_pos, vector value1, float key\_pos1, ...)`

`vector4 kspline(string basis, float sample\_pos, vector4 value1, float key\_pos1, ...)`

对由一系列矢量值/位置对定义的曲线进行采样。这对指定一个颜色斜率很有用。

如果你只是想要线性间隔的键，或者你需要改变基础，请使用[spline](spline.html) ()("沿着多线或 spline 曲线采样一个值。")来代替。

## Arguments

`basis`, `bases`

这些都是斜率参数所支持的插值。

`"constant"`

保持每个键值直到下一个键，形成一个 "阶梯式 "曲线。

`"linear"`

用折线连接关键点。

例如，如果你指定了四个值。

```c
spline("linear", t, v0, v1, v2, v3)

```

![]

…the function returns the height of the orange dot at position sample_pos.

`"cubic"` (or `"catmullrom"`, `"cspline"`)

Connect the point values with a Catmull-Rom spline.

::: info Note that the first and last values are outside the sample area to
provide the slope of the curve at the second point (at the start of the
sample range) and the second-to-last point (at the end of the sample
range).

For example, if you specified six values:

```c
spline("catrom", t, v0, v1, v2, v3, v4, v5)

```

![]

…the function returns the height of the orange dot at position t.

(This image is for illustration only, it does not show the correct
curve for the shown points.)

`"linearsolve"` (or `"solvelinear"`)

Maps between a set of non-uniform positions and a set of values.
The [kspline](kspline.html) () ("Returns an interpolated value along a curve defined by a basis and key/position pairs.") function does this mapping implicitly.

```c
tk = spline("linearsolve", t, k0, k1, k2, k3, ...);
v = spline(basis, tk, v1, v2, v3, ...);

```

(Technically, `linearsolve` interprets the values as key values, solves the
intersection of the spline, and returns the intercept point.)

`"monotonecubic"`

“bezier”

“bspline”

“hermite”

`sample_pos`

The position along the curve at which to sample the value.

`valuen`, `key_posn`

To define the shape of the curve, you pass a number of value/position pairs specifying the key points through which the curve passes.

You must specify key positions in ascending order or the results will be unpredictable.

:::tip

The [spline](spline.html) () ("Samples a value along a polyline or spline curve.") function is a more flexible superset of this function.

This function is the equivalent of:

```c
type kspline(basis, t, v0, k0, v1, k1, v2, k2...)
{
 float tk = spline("linearsolve", t, k0, k1, k2, ...);
 return spline(basis, tk, v0, v1, v2, ...);
}

```

## See also

- [spline](spline.html)

|
spline

[ckspline](ckspline.html)

[cspline](cspline.html)

[kspline](kspline.html)

[lkspline](lkspline.html)

[lspline](lspline.html)

[spline](spline.html)

[spline_cdf](spline_cdf.html)
