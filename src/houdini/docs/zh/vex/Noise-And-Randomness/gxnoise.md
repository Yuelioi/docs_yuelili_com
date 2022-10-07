---
title: gxnoise
order: 12
category:
  - vex
---

`float|vector|vector2 gxnoise(vector2 xy)`

`float|vector|vector2 gxnoise(float x, float y)`

`float|vector|vector2 gxnoise(vector xyz)`

`float|vector|vector2 gxnoise(vector4 xyzt)`

单纯噪声与佩林噪声相似，只是样本在单纯网格上而不是网格上。与[xnoise](xnoise.html)("Simplex 噪声与 Perlin 噪声非常接近，只是样本在一个单纯的网格而不是网格上。这导致了较少的网格伪影。它还使用高阶 bspline 来提供更好的导数。"）。

各种函数返回 4D（`vector4`参数）、3D（`vector`参数）或 2D（单个`vector2`参数或两个`float`输入）位置的噪声值。你也可以得到一个随机的浮点值或两个或三个条目的向量。

噪声值将在 0-1 范围内。噪声场的性质取决于输入维度的数量。更高维度的噪声使用更紧密的噪声元素，由此产生的噪声场显得更有结构性，不那么平滑。考虑使用较慢的[xnoise](xnoise.html)("Simplex 噪声与 Perlin 噪声非常接近，只是样本在 Simplex 网格上而不是网格上。这导致较少的网格伪影。它还使用更高阶的 bspline 来提供更好的导数。"）函数在更高的维度上，如果这个函数给你带来不理想的结果。

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
