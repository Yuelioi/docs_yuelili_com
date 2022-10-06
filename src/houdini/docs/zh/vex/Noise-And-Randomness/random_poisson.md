---
title: random_poisson
order: 26
category:
  - houdini
---
    
## 描述

Generates a random Poisson variable given the mean to the distribution and a
seed.

| Since | 17.0 |
| ----- | ---- |

```c
int  random_poisson(int seed, float mean)
```

```c
int  random_poisson(int seed, float mean, int minvalue, int maxvalue)
```

Creates a random number given the mean of the Poisson distribution. The seed
is given to allow for the generation of different numbers with the same mean.

给出泊松分布的平均值，创建一个随机数。给出种子是为了允许生成具有相同平均值的不同数字。

When `minvalue` and `maxvalue` are specified the numbers generated will be
limited to the specified range.

当指定了 nminvalue 和 maxvalue 时，生成的数字将被限制在指定的范围内。

Warning

The specified range should not be farther apart from the mean than 3 standard
deviations, which in the case of Poisson distribution is equal to
`sqrt(mean)`.

指定的范围与平均值的距离不应超过 3 个标准差，在泊松分布的情况下，标准差等于 osqrt（平均值）。
