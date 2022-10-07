---
title: spline
order: 69
category:
  - vex
---

`float spline(string basis, float sample\_pos, float value1, ...)`

`vector spline(string basis, float sample\_pos, vector value1, ...)`

`vector4 spline(string basis, float sample\_pos, vector4 value1, ...)`

这个版本需要一个单一的基础用于所有的键，并将（线性间隔的）键值作为变量参数。

`float spline(string basis, float sample\_pos, float values[], ...)`

`vector spline(string basis, float sample\_pos, vector values[], ...)`

`vector4 spline(string basis, float sample\_pos, vector4 values[], ...)`

这个版本需要一个用于所有键的单一基础，并将（线性间隔的）键值作为一个数组。

`float spline(string bases[], float sample\_pos, float values[], ...)`

`vector spline(string bases[], float sample\_pos, vector values[], ...)`

`vector4 spline(string bases[], float sample\_pos, vector4 values[], ...)`

这个版本接受一个数组，指定每对键之间使用的基数，以及作为数组的（线性间隔的）键值。

`float spline(string bases[], float sample\_pos, float values[], float positions[], ...)`

`vector spline(string bases[], float sample\_pos, vector values[], float positions[], ...)`

`vector4 spline(string bases[], float sample\_pos, vector4 values[], float positions[], ...)`

这个版本需要一个数组，指定每对键之间使用的基数，一个键值数组，以及一个键位数组。

这些形式接受一个字符串数组，指定键之间的插值基数，一个键值数组和一个键位置数组。它们确保插值曲线在控制点（键）上是平滑的（切线连续的），如果相邻的段有相同的基数，即使键的位置不均匀（即不均匀且它们之间的距离不相等）。

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

## Returns

The value at sample_pos along a polyline or cubic spline.

::: info Note

For b-spline basis, this function implicitly assumes the multiplicity of 3
for b-spline curve end point, even though the given control points and
knots are not explicitly repeated. This ensures the curve passes through the
end control points, making it easier to create continuous ramp curves with
mixed interpolation bases (e.g., b-spline basis segments surrounded by
linear interpolation segments).

## See also

- [cspline](cspline.html)
- [kspline](kspline.html)
- [ckspline](ckspline.html)
- [lspline](lspline.html)
- [lkspline](lkspline.html)

|
spline

[ckspline](ckspline.html)

[cspline](cspline.html)

[kspline](kspline.html)

[lkspline](lkspline.html)

[lspline](lspline.html)

[spline](spline.html)

[spline_cdf](spline_cdf.html)
