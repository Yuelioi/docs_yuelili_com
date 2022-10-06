---
title: mx_voronoi
order: 21
category:
  - houdini
---

## Description

`void mx_voronoi(vector2 position, float jitter, int metric, float &d1, float &d2, float &d3, vector2 &p1, vector2 &p2, vector2 &p3)`

`void mx_voronoi(vector2 position, float jitter, int metric, float &d1, float &d2, vector2 &p1, vector2 &p2)`

`void mx_voronoi(vector2 position, float jitter, int metric, float &d1, vector2 &p1)`

Generates 3D noise.

`void mx_voronoi(vector position, float jitter, int metric, float &d1, float &d2, float &d3, vector &p1, vector &p2, vector &p3)`

`void mx_voronoi(vector position, float jitter, int metric, float &d1, float &d2, vector &p1, vector &p2)`

`void mx_voronoi(vector position, float jitter, int metric, float &d1, vector &p1)`

Returns a Voronoi Noise values of distances which are similar to Worley noise,
but has additional outputs of cells positions. There is no analogue of this
noise in the standard MaterialX library yet.

## Arguments

`position`

The position at which to sample the noise.

`jitter`

The jitter should normally be clamped between 0 and 1.

`metric`

The metric is an integer representing how the distance is measured for Worley
noise

- 0 - Euclidean Distance

- 1 - Distance Squared

- 2 - Manhattan Distance

- 3 - Chebyshev Distance

`d1`, `d2`, `d3`

These variables are overwritten with the distances to the nearest cell points,
in order of closeness.

`p1`, `p2`, `p3`

These variables are overwritten with the cell positions, in order of closeness
to the input position.

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
