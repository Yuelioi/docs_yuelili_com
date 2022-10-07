---
title: nrandom
order: 25
category:
  - vex
---

`float nrandom(...)`

`vector2 nrandom(...)`

`vector nrandom(...)`

`vector4 nrandom(...)`

返回一个介于 0 和 1 之间的随机数，或者一个随机单位向量。

`void nrandom(float &x, float &y, ...)`

用 0 到 1 之间的随机数覆盖给定的变量。

这些随机生成器如果以精确的相同顺序调用，将生成相同的随机数序列。然而，没有涉及到种子，所以不可能多次复制同一个随机数或序列。

## Arguments

`…`

你可以选择指定一个字符串参数来选择随机数生成方法。该字符串可以是以下之一。

- 默认"。高效的随机数生成。这种方法是向后的
- 梅森 "或 "twister"。使用 Mersenne Twister，它有一些非常重要的功能。
- 2002 年，Makoto Matsumoto 和 Takuji Nishimura，保留所有权利。
- `qstrat`:使用一个准分层的随机数发生器。这倾向于
  与以前的胡迪尼版本兼容。漂亮的属性。这段代码是基于以下的工作。Copyright (C) 1997 以均匀地分配随机数，减少结块和间隔。

随机

[curlgxnoise](curlgxnoise.html)

[curlgxnoise2d](curlgxnoise2d.html)

[gxnoise](gxnoise.html)

[mx_cellnoise](mx_cellnoise.html)

[mx_perlin](mx_perlin.html)

[mx_voronoi](mx_voronoi.html)

[mx_worley](mx_worley.html)

[nrandom](nrandom.html)

[rand](rand.html)

[random](random.html)

[random_fhash](random_fhash.html)

[random_ihash](random_ihash.html)

[random_poisson](random_poisson.html)

[random_shash](random_shash.html)
