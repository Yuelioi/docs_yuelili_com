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

Returns a random number between 0 and 1, or a random unit vector.

`void nrandom(float &x, float &y, ...)`

Overwrites the given variables with random numbers between 0 and 1.

These random generators will generate the same sequence of random numbers if called in precisely the same order. However, there is no seed involved so it is not possible to reproduce the same random number or sequence multiple times.

## Arguments

`…`

You can optionally specify a string argument to choose the random number
generation method. The string may be one of:

- `default`: Efficient random number generation. This method is backward
  compatible with previous releases of Houdini.
- `mersenne` or `twister`: Uses the Mersenne Twister which has some very
  nice properties. This code is based of the work of: Copyright (C) 1997
- 2002, Makoto Matsumoto and Takuji Nishimura, All rights reserved.
- `qstrat`: Uses a quasi-stratified random number generator. This tends
  to distribute the random numbers evenly, reducing clumping and
  spacing.

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
