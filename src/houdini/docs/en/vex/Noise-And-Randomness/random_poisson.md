---
title: random_poisson
order: 34
category:
  - houdini
---

## Description

Since 17.0

`int random_poisson(int seed, float mean)`

`int random_poisson(int seed, float mean, int minvalue, int maxvalue)`

Creates a random number given the mean of the Poisson distribution. The seed
is given to allow for the generation of different numbers with the same mean.

When `minvalue` and `maxvalue` are specified the numbers generated will be
limited to the specified range.

Warning

The specified range should not be farther apart from the mean than 3 standard
deviations, which in the case of Poisson distribution is equal to
`sqrt(mean)`.

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
