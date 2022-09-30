---
title: sample_normal
order: 25
category:
  - houdini
---
    
## 描述

Samples the normal (Gaussian) distribution.

```c
float  sample_normal(float u)
```

```c
float  sample_normal(float mean, float stddev, float u)
```

`float sample_normal(float origmean, float origstddev, float minvalue, float maxvalue, float u)`

```c
vector2  sample_normal(vector2 u)
```

```c
vector  sample_normal(vector u)
```

```c
vector4  sample_normal(vector4 u)
```

`u`

A number, or multiple numbers, in the range [0,1).

一个数字，或多个数字，在[0,1]范围内。

`mean`

The mean of the distribution, or 0 if not specified.

分布的平均值，如果没有指定，则为 0。

`origmean`

The mean the distribution would have, were it not for `minvalue`and
`maxvalue`, limiting the range.

分布的平均值，如果它没有形成 invalue 和 maxvalue，限制了范围的话。

`stddev`

The standard deviation (scale) of the distribution, or 1 if not specified.

分布的标准差（规模），如果没有指定则为 1。

`origstddev`

The standard deviation (scale) the distribution would have, were itnot for
`minvalue` and `maxvalue`, limiting the range.

分布的标准差（规模），如果它没有形成 invalue 和 maxvalue，那么它就会有

`minvalue`,`maxvalue`

When given, instead of sampling the full normal distribution,the distribution
with its range limited to
[/vex/functions/`minvalue`,`maxvalue`](`minvalue`,`maxvalue`.html) will
besampled.

的标准差，如果没有形成 invalue 和 maxvalue，限制了范围。

Samples the normal distribution with the specified `mean` and `stddev`,
optionallywith a `minvalue` and `maxvalue`.Given uniform random `u` values in
[0,1), this will return normallydistributed random numbers.The return value
will be monotone increasingwith respect to `u`.

当给定时，而不是对完整的正态分布进行采样。

The `vector2`, `vector`, and `vector4` versionsreturn multiple samples with
mean 0 and standard deviation 1.Thedistribution of these vectors is naturally
isotropic, i.e. rotatingthe distribution won‘t change it, which can be
useful in simulations.To add a maximum distance from the origin, while keeping
the distributionisotropic, use:

分布的范围被限制在/vex/functions/`minvalue`,`maxvalue`，将会被

```c
sample_normal(0,1,0,maxdist,u.x) * sample_direction_uniform(set(u.y,u.z))
```

采样。
