---
title: mx_worley
order: 22
category:
  - vex
---

`float|vector|vector2 mx_worley(vector2 pos, float jitter, int metric)`

`float|vector|vector2 mx_worley(vector pos, float jitter, int metric)`

返回一个与标准 MaterialX 库中的值相匹配的 Worley 噪声值。

抖动通常应被钳制在 0 和 1 之间。

该指标是一个整数，代表 Worley 噪声的距离是如何测量的

- 0 - 欧几里得距离
- 1 - 距离的平方
- 2 - 曼哈顿的距离
- 3 - Chebyshev 距离

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
