---
title: random_poisson
order: 34
category:
  - vex
---

自 17.0 以来

`int random_poisson(int seed, float mean)`

`int random_poisson(int seed, float mean, int minvalue, int maxvalue)`

给出泊松分布的平均值，创建一个随机数。给出种子是为了允许生成具有相同平均值的不同数字。

当 "minvalue "和 "maxvalue "被指定时，生成的数字将被限制在指定的范围内。

警告

指定的范围与平均值的距离不应超过 3 个标准差，在泊松分布的情况下，这等于`sqrt(mean)`。

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
