---
title: sample_lognormal_by_median
order: 24
category:
  - vex
---

`float sample_lognormal_by_median(float median, float stddev, float u)`

`float sample_lognormal_by_median(float origmedian, float origstddev, float minvalue, float maxvalue, float u)`

## Arguments

`median`

分布的中位数。

`origmedian`

如果没有 "minvalue "和 "maxvalue "的限制，分布的中位数会有。

`stddev`

分布的标准偏差。

`origstddev`

如果没有 "minvalue "和 "maxvalue "的限制，分布的标准偏差（规模）。

`u`

一个范围为`[0,1)`的数字。

`minvalue`,`maxvalue`

当给定时，将不对完整的对数正态分布进行采样，而是对其范围限定为`[minvalue,maxvalue]`的分布进行采样。

用指定的`中间值'和`stddev'对对数正态分布进行采样，可以选择`最小值'和`最大值'。要使用基础正态分布的参数`mu'和`sigma'而不是`median'和`stddev'，请使用`sample_lognormal'。给定在`[0,1]中的均匀随机`u`值，这将返回对数正态分布的随机数。返回值将是关于`u'的单调增长。

对数正态分布是通过对正态分布进行采样，并对结果进行指数化处理，得到的数值总是正的，所以这种分布经常被用来生成随机点标。

## See also

- [sample_lognormal](sample_lognormal.html)
- [sample_normal](sample_normal.html)
- [rand](rand.html)
- [sample_exponential](sample_exponential.html)
- [sample_cauchy](sample_cauchy.html)
- [sample_discrete](sample_discrete.html)
- [sample_direction_uniform](sample_direction_uniform.html)
- [log](log.html)
- [exp](exp.html)
