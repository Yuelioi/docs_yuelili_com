---
title: mx_worley
order: 22
category:
  - vex
---

`float|vector|vector2 mx\_worley(vector2 pos, float jitter, int metric)`

`float|vector|vector2 mx\_worley(vector pos, float jitter, int metric)`

Returns a Worley Noise value that matches the values as in the standard MaterialX library.

Jitter should normally be clamped between 0 and 1.

The metric is an integer representing how the distance is measured for Worley noise

- 0 - Euclidean Distance
- 1 - Distance Squared
- 2 - Manhattan Distance
- 3 - Chebyshev Distance


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
