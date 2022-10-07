---
title: cspline
order: 4
category:
  - vex
---

要使用不均匀的键指定曲线，请使用 [ckspline](ckspline.html) () ("采样一个由位置/值键定义的 Catmull-Rom (Cardinal) 花键。")。

`float cspline(float t, float val1, ...)`

`vector cspline(float t, vector val1, ...)`

`vector4 cspline(float t, vector4 val1, ...)`

## Arguments

`t`

沿着花键的位置进行采样。

`val1`, `val2`, `...`

一系列的键值。假设键值是沿着 0 到 1 的范围均匀间隔的。

## Returns

沿着曲线`t`位置的内插值。

在指定的关键点之间计算一个 Catmull-Rom（Cardinal）花键。

由于 Cardinal spline 的性质，与第一个和最后一个键相关的值将永远不会被返回。然而，这些键被用来确定进入和退出时的曲线形状。

## See also

- [ckspline](ckspline.html)

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
