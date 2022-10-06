---
title: rand
order: 29
category:
  - houdini
---

## Description

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

Creates a random number based on the provided seed. The number will be in the
range of 0 to 1. In particular, it will be in the half-open interval `[0, 1)`.
The same number is produced for the same seed, so to vary the random number
the seed should be varied.

::: info Note
that even the smallest changes in the seed value will produce completely
different numbers, so it may produce different results on different operating
systems or compilers.

If the result is a vector2, vector, or vector4, each component will be a
different random number. Thus, if you have the code:
:::

```c
vector pos = 1; float seed = 0;  pos *= rand(seed);
```

`pos` will get different values in its `.x`, `.y`, and `.z` components. If you
wish a uniform scale, use the `float()` cast:

```c
vector pos = 1; float seed = 0;  pos *= float(rand(seed));
```

## See also

- [random_fhash](random_fhash.html)
- [random_ihash](random_ihash.html)
- [random_shash](random_shash.html)

### random

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
