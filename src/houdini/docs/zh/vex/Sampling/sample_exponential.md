---
title: sample_exponential
order: 17
category:
  - vex
---

`float sample\_exponential(float u)`

`float sample\_exponential(float mean, float u)`

`float sample\_exponential(float origmean, float maxvalue, float u)`

## Arguments

`u`

A number in the range `[0,1)`.

`mean`

The mean of the distribution, or 1 if not specified.

`origmean`

The mean the distribution would have, were it not for `maxvalue`,
limiting the range.

`maxvalue`

When given, instead of sampling the full exponential distribution,
the distribution with its range limited to `[0,maxvalue]` will be
sampled.

Samples the exponential distribution with the specified `mean`, optionally
with a `maxvalue`.
Given uniform random `u` values in `[0,1)`, this will return exponentially
distributed random numbers. The return value will be monotone increasing
with respect to `u`.



## See also

- [rand](rand.html)
- [sample_normal](sample_normal.html)
- [sample_cauchy](sample_cauchy.html)
- [sample_lognormal](sample_lognormal.html)
- [sample_lognormal_by_median](sample_lognormal_by_median.html)
- [sample_discrete](sample_discrete.html)
