---
title: sample_cauchy
order: 7
category:
  - vex
---

`float sample\_cauchy(float u)`

`float sample\_cauchy(float scale, float u)`

`vector2 sample\_cauchy(float scale, vector2 u)`

`float sample\_cauchy(float origscale, float minvalue, float maxvalue, float u)`

`<vector> sample\_cauchy(<vector>u)`

采样多变量 Cauchy 分布，中位数为 0，尺度为 1。这些向量的分布被强制为各向同性，也就是说，旋转分布不会改变它，这在模拟中是有用的。如果把向量的组成部分作为单变量 Cauchy 分布的独立样本生成，就不会出现这种情况。

## Arguments

`u`

一个数字，或多个数字，范围为`[0,1)`。

`scale`

分布的规模，如果没有指定，则为 1。这是第 50 个百分点和第 75 个百分点之间的区别。

`origscale`

如果没有 "minvalue "和 "maxvalue "的限制，分布会有什么样的规模。

`minvalue`,`maxvalue`

当给定时，不是对完整的 Cauchy 分布进行采样，而是对其范围限定为`[minvalue,maxvalue]`的分布进行采样。

## Returns

相对于`u`的单调增加值。

对 Cauchy 分布进行采样，中位数为 0，并指定`scale`，可选择`minvalue`和`maxvalue`。给定在"[0,1]"中的均匀随机`u'值，这将返回考奇分布的随机数。

::: info Note that without limits, the Cauchy distribution has
没有确定的平均数或方差，如果不仔细处理，会造成统计问题。

为了增加与原点的最大距离，同时保持分布的各向同性，使用。

```c
!vex
sample_cauchy(1,0,maxdist,u.x) * sample_direction_uniform(set(u.y,u.z))
```

The 2D Cauchy distribution is the distribution of photons hitting a plane,
coming from a point light that is distance `scale` from the plane.

## See also

- [rand](rand.html)
- [sample_exponential](sample_exponential.html)
- [sample_normal](sample_normal.html)
- [sample_lognormal](sample_lognormal.html)
- [sample_lognormal_by_median](sample_lognormal_by_median.html)
- [sample_discrete](sample_discrete.html)
- [sample_direction_uniform](sample_direction_uniform.html)
