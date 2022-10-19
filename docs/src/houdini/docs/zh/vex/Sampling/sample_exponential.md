---
title: sample_exponential
order: 17
category:
  - vex
---

`float sample\_exponential(float u)`

`float sample\_exponential(float mean, float u)`

`float sample\_exponential(float origmean, float maxvalue, float u)`

## Arguments

`u`

一个范围为`[0,1)`的数字。

`mean`

分布的平均值，如果没有指定，则为 1。

`origmean`

如果没有 "maxvalue"，分布的平均值会限制范围。

`maxvalue`

当给定时，不是对完整的指数分布进行采样，而是对其范围限定为`[0,maxvalue]`的分布进行采样。

用指定的 "平均值 "对指数分布进行采样，可选择 "最大值"。给予`[0,1)`中的均匀随机`u`值，这将返回指数分布的随机数。返回值将是关于`u'的单调增长。

## See also

- [rand](rand.html)
- [sample_normal](sample_normal.html)
- [sample_cauchy](sample_cauchy.html)
- [sample_lognormal](sample_lognormal.html)
- [sample_lognormal_by_median](sample_lognormal_by_median.html)
- [sample_discrete](sample_discrete.html)
