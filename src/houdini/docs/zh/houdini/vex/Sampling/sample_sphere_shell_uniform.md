---
title: sample_sphere_shell_uniform
order: 30
category:
  - houdini
---
    
## 描述

Generates a uniform vector with alpha < length < 1, where 0 < alpha < 1, given
a vector of uniform numbers between 0 and 1.

| Since | 17.0 |
| ----- | ---- |

```c
vector  sample_sphere_shell_uniform(vector u, float alpha)
```

`u`

Three numbers between 0 and 1.

0 和 1 之间的三个数字。

`alpha`

The inner radius to be bounded by. A number between 0 and 1.

所要限定的内半径。一个介于 0 和 1 之间的数字。

Returns a vector of length < 1, based on `u`.Given uniform random `u` vectors
of three values in [/vex/functions/0,1), and a number in [0,1](0,1\), and a
number in \[0,1.html), the returned vectors will beuniform random and
continuous with respect to `u` inside the unit sphere shell with the inner
raidus alpha.

返回一个长度<1 的向量，基于 u。
