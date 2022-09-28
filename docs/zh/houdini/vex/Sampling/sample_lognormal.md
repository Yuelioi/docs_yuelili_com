---
title: sample_lognormal
order: 23
category:
  - houdini
---
    
## 描述

Samples the log-normal distribution based on parameters of the underlying
normal distribution.

```c
float  sample_lognormal(float mu, float sigma, float u)
```

`float sample_lognormal(float mu, float sigma, float minvalue, float maxvalue, float u)`

`mu`

The mean of the underlying normal distribution.

基础正态分布的平均值。

`sigma`

The standard deviation of the underlying normal distribution.

基础正态分布的标准差。

`u`

A number in the range [0,1).

一个范围为[0,1]的数字。

`minvalue`,`maxvalue`

When given, instead of sampling the full log-normal distribution,the
distribution with its range limited to
[/vex/functions/`minvalue`,`maxvalue`](`minvalue`,`maxvalue`.html) will
besampled.

当给定时，而不是对数正态分布的完整采样。

Samples the log-normal distribution with the specified `mu` and `sigma`,
optionallywith a `minvalue` and `maxvalue`.To use parameters that are more
understandable,`median` and `stddev`, please use

```c
sample_lognormal_by_median
```

.Given uniform random `u` values in [0,1), this
will return log-normallydistributed random numbers.The return value will be
monotone increasingwith respect to `u`.

分布，其范围限定为/vex/functions/`minvalue`,`maxvalue`，将被采样。

The log-normal distribution is sampled by sampling a normal distributionand
exponentiating the result, giving a value that is always positive, sothis
distribution is often used for generating random point scales.

采样。
