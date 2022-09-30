---
title: sample_direction_uniform
order: 15
category:
  - houdini
---
    
## 描述

Generates a uniform unit vector, given a vector2 of uniform numbers between 0
and 1.

```c
vector  sample_direction_uniform(vector2 u)
```

`u`

Pair of numbers between 0 and 1.

0 和 1 之间的一对数字。

Returns a unit vector, i.e. a vector of length 1, based on `u`.Given uniform
random `u` pairs of values in [0,1), the returned unit vectors will beuniform
random and continuous with respect to `u` on the surface of the unit sphere.

返回一个单位向量，即一个基于 u 的长度为 1 的向量。
