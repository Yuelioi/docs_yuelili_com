## 描述

Inverse Gauss error function.


```c
float  erf_inv(float v)
```


The inverse of the [Gauss error function
__](http://en.wikipedia.org/wiki/Error_function).

高斯误差函数的倒数。


```c
erf_inv(erf(v)) = v = erf(erf_inv(v))
```


erf_inv(erf(v)) = v = erf(erf_inv(v))

To generate a normally-distributed random number, `n`, with mean `mu` and
standard deviation `sigma`,from a uniformly-distributed random number, `u`,
between 0 and 1,

产生一个正态分布的随机数n，其平均值为mu，标准差为igma。


```c
n = mu + sqrt(2)*sigma*erf_inv(2*u - 1)
```


从一个均匀分布的随机数u中生成一个正态分布的随机数n，其平均值为mu，标准差为igma，介于0和1之间。

