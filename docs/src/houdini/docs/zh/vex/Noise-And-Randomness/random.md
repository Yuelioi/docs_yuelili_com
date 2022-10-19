---
title: random
order: 30
category:
  - vex
---

`float random(float|intposition)`

`vector random(float|intposition)`

`vector2 random(int position)`

`vector4 random(float|intposition)`

根据一维位置生成一维、二维、三维或四维噪音。

`float random(float|intxpos, float|intypos)`

`vector random(float|intxpos, float|intypos)`

`vector4 random(float|intxpos, float|intypos)`

用两个数字指定噪声场中的一个 2D 位置。

`float random(vector position)`

`vector random(vector position)`

`vector4 random(vector position)`

用一个矢量指定噪声场中的三维位置。

`float random(vector4 position)`

`vector random(vector4 position)`

`vector4 random(vector4 position)`

用一个矢量 4 指定噪声场中的 4D 位置。

根据`N`维空间中的整数位置（其中 N 为 1 到 4 维）生成一个随机数。与噪声函数不同，随机函数不会在整数格点之间平滑地插值随机值。`random()`函数是做类似`noise(floor(position))`的非常有效的方法。

虽然`random()`接受浮点数，但它只对整数变化的随机效果进行改变。要想有一个随机的结果，甚至随着最小的浮点数变化而变化，请使用`rand()`。

这样做的结果是在半开区间`[0, 1]`。

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
