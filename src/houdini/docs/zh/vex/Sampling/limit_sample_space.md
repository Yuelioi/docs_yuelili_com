---
title: limit_sample_space
order: 3
category:
  - houdini
---
    
## 描述

Limits a unit value in a way that maintains uniformity and in-range
consistency.

```c
float  limit_sample_space(float minu, float maxu, float u)
```

```c
float  limit_sample_space(float maxu, float u)
```

`minu`

Minimum desired value of `u`.`minu` will be clamped to between 0 and 1.If not
specified, `minu` is 0.

u.minu 的最小期望值将被限制在 0 和 1 之间。

`maxu`

Maximum desired value of `u`.`maxu` will be clamped to between 0 and 1.

如果没有指定，min 是 0。

`u`

Number between 0 and 1.

最大期望值 u.maxu 将被限制在 0 到 1 之间。

If `u` is outside of `[minu,maxu]`, `u` is wrapped in the space in such away
that uniform random `u` in [0,1) will yield uniform random samples
in`[minu,maxu]` and returned.This avoids the extra samples at the boundsof the
range that clamping to the range would introduce.It also avoids thechanging of
samples inside the range that fitting to the range wouldintroduce, i.e. if `u`
is already in the range, the return value is exactly `u`.

数值在 0 和 1 之间。

However, this is much slower than fitting or clamping, so only useit when both
uniformity and consistency are needed.For example, it can beuseful in avoiding
outliers in probability distributions without affectingsamples that are not
outliers.It also introduces the issue that resultswill no longer be monotone
increasing with respect to `u`.Fitting will often suffice for avoiding
outliers too, at the expenseof slightly affecting samples that are not
outliers.

如果在[minu,maxu]之外，u 被包裹在空间中，这样

To find `minu` and `maxu` given a `minvalue` and `maxvalue` of some
probabilitydistribution,

```c
minu = CDF(minvalue)
```

and

```c
maxu = CDF(maxvalue)
```

,
where `CDF`is the cumulative distribution function (not inverse) of the
probabilitydistribution.The versions of
[sample_exponential](sample_exponential.html "Samples the exponential
distribution."),[sample_cauchy](sample_cauchy.html "Samples the Cauchy
(Lorentz) distribution."), [sample_normal](sample_normal.html "Samples the
normal (Gaussian) distribution."), [sample_lognormal](sample_lognormal.html "Samples the log-normal distribution based on parameters of the underlying
normal distribution."),
and[sample_lognormal_by_median](sample_lognormal_by_median.html "Samples the
log-normal distribution based on median and standard deviation.") that take a
`minvalue` or `maxvalue` use fittinginstead of this limiting, because it
maintains monotonicity, but thisfunction can be applied to `u` before
sampling, in order to have betterconsistency for samples in the range.

的方式，在[0,1]中的均匀随机 u 将产生[minu,maxu]的均匀随机样本并返回。 这就避免了在范围边缘的额外样本
