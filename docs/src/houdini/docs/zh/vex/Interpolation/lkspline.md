---
title: lkspline
order: 12
category:
  - vex
---

`float lkspline(float sample\_pos, float value1, float key\_pos1, ...)`

对由一系列值/位置对定义的折线进行采样。这对于指定一个一维数据斜面很有用。

`vector lkspline(float sample\_pos, vector value1, float key\_pos1, ...)`

`vector4 lkspline(float sample\_pos, vector4 value1, float key\_pos1, ...)`

对由一系列矢量值/位置对定义的折线进行采样。这对于指定一个颜色斜面很有用。

如果你只想要线性间隔的键，可以用[lspline](lspline.html) ()("Samples a polyline defined by linearly spaced values.")代替。

## Arguments

`sample_pos`

沿着曲线取样的位置。

`valuen`, `key_posn`

为了定义曲线的形状，你要传递一些值/位置对，指定曲线经过的关键点。

你必须按升序指定键位，否则结果将无法预料。

## Returns

曲线在采样位置的数值。

::: tip

[spline](spline.html) () ("沿折线或花键曲线采样一个值。")函数是这个函数的一个更灵活的超集。

## See also

- [spline](spline.html)
- [kspline](kspline.html)

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
