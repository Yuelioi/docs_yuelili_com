## 描述

Generates a uniform vector with length < 1, given a vector of uniform numbers
between 0 and 1.


```c
vector  sample_sphere_uniform(vector u)
```


`u`

Three numbers between 0 and 1.

在0和1之间的三个数字。

Returns a vector of length < 1, based on `u`.Given uniform random `u` vectors
of three values in [0,1), the returned vectors will beuniform random and
continuous with respect to `u` inside the unit sphere.

返回一个长度<1的向量，基于u。

