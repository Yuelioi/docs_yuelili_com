---
title: sample_discrete
order: 16
category:
  - vex
---

`int sample\_discrete(int nvalues, float u)`

`int sample\_discrete(float weights[], float u)`

## Arguments

`nvalues`

返回的整数将在`[0,nvalues-1]`范围内统一，如果`u==0`则返回 0，如果`u==1`则返回`nvalues-1`。如果`u'超出了`[0,1)'的范围，输出将被钳制在这个范围内，以减少`u'的四舍五入导致问题的风险。

`weights`

在`[0,len(weights)-1]`范围内的每个整数值的相对权重，（和不需要是 1）。

`u`

一个介于 0 和 1 之间的数字。

返回一个整数，基于`u`，从 0 到`nvalues-1`均匀加权，或者基于`weights`阵列从 0 到`len(weights)-1`加权。给定在`[0,1]中的均匀随机的`u'值，取`nvalues'的版本将返回在`[0,nvalues-1]中的均匀随机整数，取`weights'的版本将返回在`[0,len(weights)-1]中的随机整数，其中`i'的概率为`weights[i]/sum_of_weights`。

## See also

- [rand](rand.html)
- [sample_normal](sample_normal.html)
- [sample_exponential](sample_exponential.html)
- [sample_cauchy](sample_cauchy.html)
- [sample_lognormal](sample_lognormal.html)
- [sample_lognormal_by_median](sample_lognormal_by_median.html)
