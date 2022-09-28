---
title: sample_cauchy
order: 7
category:
  - houdini
---
    
## 描述

Samples the Cauchy (Lorentz) distribution.

```c
float  sample_cauchy(float u)
```

```c
float  sample_cauchy(float scale, float u)
```

```c
vector2  sample_cauchy(float scale, vector2 u)
```

`float sample_cauchy(float origscale, float minvalue, float maxvalue, float u)`

```c
<vector> sample_cauchy(<vector>u)
```

Sample multivariate Cauchy distributions with median 0 and scale
1.Thedistribution of these vectors is forced to be isotropic, i.e. rotatingthe
distribution won‘t change it, which can be useful in simulations.This
wouldn‘t be the case if one generated components of the vectors
asindependent samples of the univariate Cauchy distribution.

采样多变量考奇分布，中位数为 0，尺度为 1。 这些矢量的

`u`

A number, or multiple numbers, in the range [0,1).

这些向量的分布被强制为各向同性，也就是说，旋转

`scale`

The scale of the distribution, or 1 if not specified.This is the difference
between the 50th percentile and the 75th percentile.

分布不会改变它，这在模拟中很有用。

`origscale`

The scale the distribution would have, were it not for `minvalue`and
`maxvalue`, limiting the range.

如果我们把向量的组成部分作为单变量的独立样本生成，就不会出现这种情况了。

`minvalue`,`maxvalue`

When given, instead of sampling the full Cauchy distribution,the distribution
with its range limited to
[/vex/functions/`minvalue`,`maxvalue`](`minvalue`,`maxvalue`.html) will
besampled.

单变量 Cauchy 分布的独立样本。

Returns

Monotonically increasing value with respect to `u`.

一个数字，或多个数字，在[0,1]范围内。

Samples the Cauchy distribution with median zero and the specified
`scale`,optionally with a `minvalue` and `maxvalue`.Given uniform random `u`
values in [0,1), this will return Cauchydistributed random numbers.

分布的比例，如果没有指定，则为 1。

Note that without limits, the Cauchy distribution hasno defined mean or
variance, which can cause statistical problems if notdealt with carefully.

这是第 50 个百分位数和第 75 个百分位数之间的差。

To add a maximum distance from the origin, while keeping the
distributionisotropic, use:

分布的规模，如果没有形成 invalue 和 maxvalue，限制了范围的话。

    !vexsample_cauchy(1,0,maxdist,u.x) * sample_direction_uniform(set(u.y,u.z))

The 2D Cauchy distribution is the distribution of photons hitting a
plane,coming from a point light that is distance `scale` from the plane.

当给出时，而不是对完整的 Cauchy 分布进行采样。
