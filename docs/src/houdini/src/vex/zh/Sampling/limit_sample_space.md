---
title: limit_sample_space
order: 4
category:
  - vex
---

`float limit_sample_space(float minu, float maxu, float u)`

`float limit_sample_space(float maxu, float u)`

## Arguments

`minu`

`u'的最小期望值。`minu'将被钳制在 0 和 1 之间。如果没有指定，`minu'是 0。

`maxu`

`u'的最大期望值。`maxu'将被钳制在 0 和 1 之间。

`u`

0 和 1 之间的数字。

如果`u`在`[minu,maxu]`之外，`u`被包裹在空间中，在`[0,1]`中的均匀随机`u`将产生`[minu,maxu]`中的均匀随机样本并返回。这就避免了在范围边界的额外样本，因为夹紧范围会引入额外的样本。它也避免了拟合范围会带来的范围内样本的变化，也就是说，如果`u`已经在范围内，返回值正是`u`。

然而，这比拟合或钳制要慢得多，所以只有在同时需要统一性和一致性的时候才会使用它。例如，它在避免概率分布中的离群值方面很有用，而不影响非离群值的样本。它还引入了一个问题，即结果将不再是相对于`u'的单调增加。拟合通常也足以避免离群值，但代价是对非离群值的样本有轻微影响。

为了找到给定的某个概率分布的`minu'和`maxu'，`minu = CDF(minvalue)`和`maxu = CDF(maxvalue)`，其中`CDF'是概率分布的累积分布函数（不是反函数）。[sample_exponential](sample_exponential.html) () （"对指数分布进行采样。"）、[sample_cauchy](sample_cauchy.html) （"对Cauchy（Lorentz）分布进行采样。"）、[sample_normal](sample_normal.html) (）（"对正态（高斯）分布进行采样。"），[sample_lognormal](sample_lognormal.html) （"根据基础正态分布的参数对对数正态分布进行采样。"），以及[sample_lognormal_by_median](sample_lognormal_by_median.html)（"根据中位数和标准差对对数正态分布进行采样。"），这些函数取一个`minvalue`或`maxvalue`，使用拟合而不是这个限制，因为它保持单调性，但这个函数可以在采样前应用于`u`，以便对范围内样本有更好的一致性。

## See also

- [sample_exponential](sample_exponential.html)
- [sample_cauchy](sample_cauchy.html)
- [sample_normal](sample_normal.html)
- [sample_lognormal](sample_lognormal.html)
- [sample_lognormal_by_median](sample_lognormal_by_median.html)
