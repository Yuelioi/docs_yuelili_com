---
title: sample_orientation_uniform
order: 27
category:
  - houdini
---
    
## 描述

Generates a uniform unit vector4, given a vector of uniform numbers between 0
and 1.

```c
vector4  sample_orientation_uniform(vector u)
```

`u`

Three numbers between 0 and 1.

三个介于 0 和 1 之间的数字。

Returns a unit vector4, i.e. a vector4 of length 1, based on `u`.Given uniform
random `u` vectors of three values in [0,1), the returned unit vectors will
beuniform random and continuous with respect to `u` on the surface of the unit
hypersphere.In other words, they will be uniform random orientation
quaternions.

返回一个单位向量 4，即一个基于 u 的长度为 1 的向量 4。
