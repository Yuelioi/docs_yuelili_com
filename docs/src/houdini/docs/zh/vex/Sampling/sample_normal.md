---
title: sample_normal
order: 25
category:
  - vex
---

`float sample\_normal(float u)`

`float sample\_normal(float mean, float stddev, float u)`

`float sample\_normal(float origmean, float origstddev, float minvalue, float maxvalue, float u)`

`vector2 sample\_normal(vector2 u)`

`vector sample\_normal(vector u)`

`vector4 sample\_normal(vector4 u)`

## Arguments

`u`

一个数字，或多个数字，范围为`[0,1)`。

`mean`

分布的平均值，如果没有指定，则为 0。

`origmean`

如果没有 "minvalue "和 "maxvalue "的限制，分布的平均数会是什么？

`stddev`

分布的标准偏差（规模），如果没有指定，则为 1。

`origstddev`

如果没有 "minvalue "和 "maxvalue "的限制，分布的标准偏差（规模）。

`minvalue`,`maxvalue`

当给定时，不是对完整的正态分布进行采样，而是对其范围限定为`[minvalue,maxvalue]`的分布进行采样。

用指定的 "平均值 "和 "stddev "对正态分布进行采样，可以选择 "最小值 "和 "最大值"。给定在`[0,1]中的均匀随机`u'值，这将返回正态分布的随机数。返回值将是相对于`u'的单调增长。

矢量 2"、"矢量 "和 "矢量 4 "版本返回多个平均数为 0、标准差为 1 的样本。这些向量的分布自然是各向同性的，也就是说，旋转分布不会改变它，这在模拟中很有用。要增加一个离原点的最大距离，同时保持分布的各向同性，可以使用。

`sample_normal(0,1,0,maxdist,u.x) * sample_direction_uniform(set(u.y,u.z))`

## See also

- [rand](rand.html)
- [sample_exponential](sample_exponential.html)
- [sample_cauchy](sample_cauchy.html)
- [sample_lognormal](sample_lognormal.html)
- [sample_lognormal_by_median](sample_lognormal_by_median.html)
- [sample_discrete](sample_discrete.html)
- [sample_direction_uniform](sample_direction_uniform.html)
