## 描述

Generates a uniform vector4 with length < 1, given a vector4 of uniform
numbers between 0 and 1.


```c
vector4  sample_hypersphere_uniform(vector4 u)
```


`u`

Four numbers between 0 and 1.

四个0到1之间的数字。

Returns a vector4 of length < 1, based on `u`.Given uniform random `u` vectors
of four values in [0,1), the returned vectors will beuniform random and
continuous with respect to `u` inside the unit hypersphere.

返回一个长度<1的向量4，以u为基础。

