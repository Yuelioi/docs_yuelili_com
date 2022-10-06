---
title: ckspline
order: 1
category:
  - houdini
---
    
## 描述

Samples a Catmull-Rom (Cardinal) spline defined by position/value keys.

To specify the curve using uniformly spaced value keys, use
[cspline](cspline.html "Samples a Catmull-Rom (Cardinal) spline defined by
uniformly spaced keys.").

要使用均匀间隔的值键指定曲线，请使用 ecspline。

```c
float  ckspline(float t, float value, float pos, ...)
```

```c
vector  ckspline(float t, vector value, float pos, ...)
```

```c
vector4  ckspline(float t, vector4 value, float pos, ...)
```

`t`

The position along the spline to sample.

沿着花键要取样的位置。

`value`, `pos`, `...`

A series of pairs of key values and positions that defines the curve to
sample.

一系列的键值和位置对，定义了要采样的曲线。

Returns

The interpolated value at position `t` along the curve.

沿着曲线的位置的内插值。

Computes a Catmull-Rom (Cardinal) spline between the key pointsspecified. The
values are spaced according to the keys given. The domainof the interpolant
(t) should be between the second and second last keyvalue specified. The keys
should be specified in ascending order orresults will be unpredictable.

在指定的关键点之间计算 Catmull-Rom（Cardinal）花键。

Because of the nature of the Cardinal spline, the value associated withthe
first and last keys will never be returned. However, these keys areused to
determine the shape of the curve on entry and exit. Forexample:

指定。这些值是根据给定的键值间隔的。插值的域

## Examples

Find the value at position `t` along a curve

插值（t）的域应该在指定的第二个和倒数第二个键值之间。

    Cf = ckspline(t,{1,1,1},-0.25,// First key{.5,.5,.5}, 0.0,// Second key{.5, 0,.5}, 0.25,// Third key{0,0,.8},1.0,// Fourth key{0,0,0}, 1.25// Fifth key);

The Catmull-Rom spline defined by the above keys would be valid
forinterpolants in the range 0 to 1. The first and last keys are usedsolely to
determine the slope of the curve at the second and second lastkeys.

值之间。键值应按升序指定，否则
