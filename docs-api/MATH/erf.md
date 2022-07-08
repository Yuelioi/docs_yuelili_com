## 描述

Gauss error function.


```c
float  erf(float v)
```



```c
vector2  erf(vector2 v)
```


The [Gauss error function __](http://en.wikipedia.org/wiki/Error_function).
Houdini uses the Boostlibrary‘simplementation internally.

高斯误差函数。Houdini在内部使用Boost

The erf(vector2) version computes the complex error function and returnsthe
complex result. This function is much slower than the erf(float)function for
real values.

库的内部实现。

