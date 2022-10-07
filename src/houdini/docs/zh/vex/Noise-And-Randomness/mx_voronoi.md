---
title: mx_voronoi
order: 21
category:
  - vex
---

`void mx\_voronoi(vector2 position, float jitter, int metric, float &d1, float &d2, float &d3, vector2 &p1, vector2 &p2, vector2 &p3)`

`void mx\_voronoi(vector2 position, float jitter, int metric, float &d1, float &d2, vector2 &p1, vector2 &p2)`

`void mx\_voronoi(vector2 position, float jitter, int metric, float &d1, vector2 &p1)`

产生 3D 噪音。

`void mx\_voronoi(vector position, float jitter, int metric, float &d1, float &d2, float &d3, vector &p1, vector &p2, vector &p3)`

`void mx\_voronoi(vector position, float jitter, int metric, float &d1, float &d2, vector &p1, vector &p2)`

`void mx\_voronoi(vector position, float jitter, int metric, float &d1, vector &p1)`

返回 Voronoi 噪声的距离值，它类似于 Worley 噪声，但有额外的单元格位置输出。在标准 MaterialX 库中还没有这种噪声的类似物。

## Arguments

`position`

对噪声进行采样的位置。

`jitter`

抖动通常应被钳制在 0 和 1 之间。

`metric`

该指标是一个整数，代表 Worley 噪声的距离是如何测量的

- 0 - 欧几里得距离
- 1 - 距离的平方
- 2 - 曼哈顿的距离
- 3 - Chebyshev 距离

`d1`, `d2`, `d3`

这些变量被覆盖为与最近的单元格点的距离，按接近程度排序。

`p1`, `p2`, `p3`

这些变量被覆盖在单元格的位置上，按照与输入位置接近的顺序。

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
