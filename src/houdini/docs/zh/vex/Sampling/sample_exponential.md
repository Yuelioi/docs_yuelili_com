---
title: sample_exponential
order: 17
category:
  - houdini
---
    
## 描述

Samples the exponential distribution.

```c
float  sample_exponential(float u)
```

```c
float  sample_exponential(float mean, float u)
```

```c
float  sample_exponential(float origmean, float maxvalue, float u)
```

`u`

A number in the range [0,1).

一个范围在[0,1]的数字。

`mean`

The mean of the distribution, or 1 if not specified.

分布的平均数，如果没有指定，则为 1。

`origmean`

The mean the distribution would have, were it not for `maxvalue`,limiting the
range.

如果没有 maxvalue，分布的平均数。

`maxvalue`

When given, instead of sampling the full exponential distribution,the
distribution with its range limited to `[0,maxvalue]` will besampled.

限制了范围。

Samples the exponential distribution with the specified `mean`, optionallywith
a `maxvalue`.Given uniform random `u` values in [0,1), this will return
exponentiallydistributed random numbers.The return value will be monotone
increasingwith respect to `u`.

当给定时，而不是对完整的指数分布进行采样。
