---
title: sample_lognormal_by_median
order: 24
category:
  - houdini
---
    
## 描述

Samples the log-normal distribution based on median and standard deviation.

```c
float  sample_lognormal_by_median(float median, float stddev, float u)
```

`float sample_lognormal_by_median(float origmedian, float origstddev, float minvalue, float maxvalue, float u)`

`median`

The median of the distribution.

分布的中位数。

`origmedian`

The median the distribution would have, were it not for `minvalue`and
`maxvalue`, limiting the range.

分布的中位数，如果它没有形成 invalue 和 maxvalue，限制了范围。

`stddev`

The standard deviation of the distribution.

分布的标准差。

`origstddev`

The standard deviation (scale) the distribution would have, were itnot for
`minvalue` and `maxvalue`, limiting the range.

分布的标准差（规模），如果它没有形成价值和最大价值，限制了范围的话，它就会有

`u`

A number in the range [0,1).

的标准差（规模），如果它没有形成价值和最大价值，限制了范围。

`minvalue`,`maxvalue`

When given, instead of sampling the full log-normal distribution,the
distribution with its range limited to
[/vex/functions/`minvalue`,`maxvalue`](`minvalue`,`maxvalue`.html) will
besampled.

一个范围为[0,1]的数字。

Samples the log-normal distribution with the specified `median` and
`stddev`,optionally with a `minvalue` and `maxvalue`.To use parameters `mu`
and `sigma`of the underlying normal distribution instead of `median` and
`stddev`,use

```c
sample_lognormal
```

.Given uniform random `u` values in [0,1), this
will return log-normallydistributed random numbers.The return value will be
monotone increasingwith respect to `u`.

当给出时，而不是对完整的对数正态分布进行采样。

The log-normal distribution is sampled by sampling a normal distributionand
exponentiating the result, giving a value that is always positive, sothis
distribution is often used for generating random point scales.

分布，其范围被限制在/vex/functions/`minvalue`,`maxvalue`，将被
