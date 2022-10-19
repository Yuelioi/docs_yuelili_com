---
title: sample_lognormal
order: 23
category:
  - vex
---

`float sample\_lognormal(float mu, float sigma, float u)`

`float sample\_lognormal(float mu, float sigma, float minvalue, float maxvalue, float u)`

## Arguments

`mu`

基础正态分布的平均值。

`sigma`

基础正态分布的标准差。

`u`

一个范围为`[0,1)`的数字。

`minvalue`,`maxvalue`

当给定时，将不对完整的对数正态分布进行采样，而是对其范围限定为`[minvalue,maxvalue]`的分布进行采样。

用指定的`mu'和`sigma'对对数正态分布进行采样，可以选择`minvalue'和`maxvalue'。要使用更容易理解的参数，`median`和`stddev`，请使用`sample_lognormal_by_median`。给定在`[0,1]中的均匀随机`u`值，这将返回对数正态分布的随机数。返回值将是相对于`u`的单调增长。

对数正态分布是通过对正态分布进行采样，并对结果进行指数化处理，得到的数值总是正的，所以这种分布经常被用来生成随机点标。

## See also

- [sample_lognormal_by_median](sample_lognormal_by_median.html)
- [sample_normal](sample_normal.html)
- [rand](rand.html)
- [sample_exponential](sample_exponential.html)
- [sample_cauchy](sample_cauchy.html)
- [sample_discrete](sample_discrete.html)
- [sample_direction_uniform](sample_direction_uniform.html)
- [log](log.html)
- [exp](exp.html)
