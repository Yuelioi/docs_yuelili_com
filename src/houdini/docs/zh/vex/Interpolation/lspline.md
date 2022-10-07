---
title: lspline
order: 13
category:
  - vex
---

`float lspline(float sample\_pos, float value1, ...)`

对由一系列（线性间隔的）数值定义的多段线进行采样。这对于指定一个一维数据斜面很有用。

`vector lspline(float sample\_pos, vector value1, ...)`

`vector4 lspline(float sample\_pos, vector4 value1, ...)`

对由一系列（线性间隔）矢量值定义的折线进行采样。这对指定一个颜色斜率很有用。

如果你需要不同间隔的键，请使用[lkspline](lkspline.html)（"在键点之间采样一条折线。"）代替。

## Arguments

`sample_pos`

沿着曲线的位置，在这个位置上进行采样。

`valuen`

为了定义曲线的形状，你要传递一些数值，指定曲线经过的关键点。该函数会自动将这些关键点均匀地放在一起。

:::tip

[spline](spline.html) () ("沿折线或花键曲线采样一个值。")函数是这个函数的一个更灵活的超集。

## See also

- [spline](spline.html)

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
