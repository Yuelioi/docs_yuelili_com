---
title: erf_inv
order: 21
category:
  - houdini
---
    
## 描述

Inverse Gauss error function.

```c
float  erf_inv(float v)
```

The inverse of the [Gauss error function
\_\_](http://en.wikipedia.org/wiki/Error_function).

高斯误差函数的倒数。

```c
erf_inv(erf(v)) = v = erf(erf_inv(v))
```

erf_inv(erf(v)) = v = erf(erf_inv(v))

To generate a normally-distributed random number, `n`, with mean `mu` and
standard deviation `sigma`,from a uniformly-distributed random number, `u`,
between 0 and 1,

产生一个正态分布的随机数 n，其平均值为 mu，标准差为 igma。

```c
n = mu + sqrt(2)*sigma*erf_inv(2*u - 1)
```

从一个均匀分布的随机数 u 中生成一个正态分布的随机数 n，其平均值为 mu，标准差为 igma，介于 0 和 1 之间。
