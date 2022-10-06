---
title: sample_circle_uniform
order: 13
category:
  - houdini
---
    
## 描述

Generates a uniform vector2 with length < 1, given a vector2 of uniform
numbers between 0 and 1.

```c
vector2  sample_circle_uniform(vector2 u)
```

`u`

Pair of numbers between 0 and 1.

0 和 1 之间的一对数字。

Returns a vector2 of length < 1, based on `u`.Given uniform random `u` pairs
of values in [0,1), the returned vectors will beuniform random and continuous
with respect to `u` inside the unit circle.Specifically, it returns

```c
scale*(cos(angle),sin(angle))
```

, where `angle` is `2*pi*u.x`and `scale` is
`sqrt(u.y)`.

返回一个长度<1 的向量 2，以 u 为基础。
