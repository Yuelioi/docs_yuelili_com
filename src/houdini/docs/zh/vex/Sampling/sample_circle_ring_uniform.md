---
title: sample_circle_ring_uniform
order: 11
category:
  - houdini
---
    
## 描述

Generates a uniform vector2 with alpha < length < 1, where 0 < alpha < 1,
given a vector2 of uniform numbers between 0 and 1.

| Since | 17.0 |
| ----- | ---- |

```c
vector2  sample_circle_ring_uniform(vector2 u, float alpha)
```

`u`

Pair of numbers between 0 and 1.

0 和 1 之间的一对数字。

`alpha`

The inner radius to be bounded by. A number between 0 and 1.

所要限定的内半径。一个介于 0 和 1 之间的数字。

Returns a vector2 of length < 1, based on `u`.Given uniform random `u` pairs
of values in [/vex/functions/0,1), and value `alpha` in [0,1](0,1\), and value
`alpha` in \[0,1.html), the returned vectors will beuniform random and
continuous with respect to `u` inside the unit circle ring with inner radius
of `alpha`.Specifically, it returns

```c
scale*(cos(angle),sin(angle))
```

, where
`angle` is `2*pi*u.x`and `scale` is

```c
sqrt((1-alpha^2)*u.y+alpha^2)
```

.

返回一个长度<1 的向量 2，基于 u。
