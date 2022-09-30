---
title: sample_circle_edge_uniform
order: 10
category:
  - houdini
---
    
## 描述

Generates a uniform unit vector2, given a uniform number between 0 and 1.

```c
vector2  sample_circle_edge_uniform(float u)
```

`u`

Number between 0 and 1.

0 到 1 之间的数字。

Returns a unit vector2, i.e. a vector2 of length 1, based on `u`.Given uniform
random `u` values in [0,1), the returned unit vectors will beuniform random
and continuous with respect to `u` on the edge of the unit
circle.Specifically, it returns

```c
(cos(angle),sin(angle))
```

, where `angle` is
`2*pi*u`.

返回一个单位向量 2，即一个基于 u 的长度为 1 的向量 2。
