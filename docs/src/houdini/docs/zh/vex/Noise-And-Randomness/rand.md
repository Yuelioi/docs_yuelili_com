---
title: rand
order: 29
category:
  - vex
---

`float rand(float seed)`

`vector2 rand(float seed)`

`vector rand(float seed)`

`vector4 rand(float seed)`

`float rand(float seed, float seed2)`

`vector2 rand(float seed, float seed2)`

`vector rand(float seed, float seed2)`

`vector4 rand(float seed, float seed2)`

`float rand(vector2 seed)`

`vector2 rand(vector2 seed)`

`vector rand(vector2 seed)`

`vector4 rand(vector2 seed)`

`float rand(vector seed)`

`vector2 rand(vector seed)`

`vector rand(vector seed)`

`vector4 rand(vector seed)`

`float rand(vector4 seed)`

`vector2 rand(vector4 seed)`

`vector rand(vector4 seed)`

`vector4 rand(vector4 seed)`

根据提供的种子创建一个随机数。这个数字将在 0 到 1 的范围内，特别是，它将在半开区间`[0, 1)`。相同的种子会产生相同的数字，所以要改变随机数，应该改变种子。

::: info Note that even the smallest changes in the seed value will produce
完全不同的数字，所以它在不同的操作系统或编译器上可能产生不同的结果。

如果结果是一个 vector2、vector 或 vector4，每个分量将是一个不同的随机数。因此，如果你有这样的代码。

```c
vector pos = 1;
float seed = 0;

pos \*= rand(seed);

```

`pos` will get different values in its `.x`, `.y`, and `.z` components. If you wish a uniform scale, use the `float()` cast:

```c
vector pos = 1;
float seed = 0;

pos \*= float(rand(seed));

```

## See also

- [random_fhash](random_fhash.html)
- [random_ihash](random_ihash.html)
- [random_shash](random_shash.html)

|
random

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
