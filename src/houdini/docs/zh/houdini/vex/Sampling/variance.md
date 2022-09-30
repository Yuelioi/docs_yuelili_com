---
title: variance
order: 32
category:
  - houdini
---
    
## 描述

Computes the mean value and variance for a value.

```c
float  variance(float variable, float &mean, int &sample_size)
```

This function will compute the mean and variance from nearby samples.Similar
to the way that VEX is able to compute derivatives, this function is able to
inspect the `variable` for a nearby area and compute the mean and variance of
the `variable`.

这个函数将从附近的样本中计算出平均值和方差。 与 VEX 能够计算导数的方式类似，这个函数能够检查附近区域的变量并计算变量的平均数和方差。

The function returns the `variance` (Ï2).The `mean` value will also be
returned along with the `sample_size` indicating how many nearby samples were
considered.

该函数返回方差(Ï2)。 主题值也将与样本大小一起返回，表明考虑了多少个附近的样本。
