---
title: ckspline
order: 2
category:
  - vex
---

要使用均匀间隔的值键来指定曲线，请使用 [cspline](cspline.html) () ("Samples a Catmull-Rom (Cardinal) spline defined by uniformly spaced keys.") 。

`float ckspline(float t, float value, float pos, ...)`

`vector ckspline(float t, vector value, float pos, ...)`

`vector4 ckspline(float t, vector4 value, float pos, ...)`

## Arguments

`t`

沿着花键的位置进行采样。

`value`, `pos`, `...`

一系列的键值和位置对，定义了要采样的曲线。

## Returns

沿着曲线`t`位置的内插值。

在指定的关键点之间计算 Catmull-Rom（Cardinal）花键。这些值是根据给定的键值间隔的。插值（t）的域应该在指定的第二个和倒数第二个键值之间。键值应按升序指定，否则结果将是不可预知的。

由于卡迪纳尔花键的性质，与第一个和最后一个键相关的值将永远不会被返回。然而，这些键是用来确定进入和退出时曲线的形状。比如说。

## Examples



找出沿曲线的位置`t`的值

```c
Cf = ckspline(t,
 {1,1,1}, -0.25, // First key
 {.5,.5,.5}, 0.0, // Second key
 {.5, 0,.5}, 0.25, // Third key
 {0,0,.8}, 1.0, // Fourth key
 {0,0,0}, 1.25 // Fifth key
);

```

The Catmull-Rom spline defined by the above keys would be valid for
interpolants in the range 0 to 1. The first and last keys are used
solely to determine the slope of the curve at the second and second last
keys.

## See also

- [cspline](cspline.html)

|
interp

[ckspline](ckspline.html)

[clamp](clamp.html)

[cspline](cspline.html)

[efit](efit.html)

[fit](fit.html)

[fit01](fit01.html)

[fit10](fit10.html)

[fit11](fit11.html)

[invlerp](invlerp.html)

[lerp](lerp.html)

[lkspline](lkspline.html)

[lspline](lspline.html)

[slerp](slerp.html)

[smooth](smooth.html)

|
spline

[ckspline](ckspline.html)

[cspline](cspline.html)

[kspline](kspline.html)

[lkspline](lkspline.html)

[lspline](lspline.html)

[spline](spline.html)

[spline_cdf](spline_cdf.html)
