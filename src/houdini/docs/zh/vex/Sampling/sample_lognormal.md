---
title: sample_lognormal
order: 23
category:
  - vex
---

`float sample\_lognormal(float mu, float sigma, float u)`

`float sample\_lognormal(float mu, float sigma, float minvalue, float maxvalue, float u)`

## Arguments

`mu`

The mean of the underlying normal distribution.

`sigma`

The standard deviation of the underlying normal distribution.

`u`

A number in the range `[0,1)`.

`minvalue`,`maxvalue`

When given, instead of sampling the full log-normal distribution,
the distribution with its range limited to `[minvalue,maxvalue]` will be
sampled.

Samples the log-normal distribution with the specified `mu` and `sigma`, optionally
with a `minvalue` and `maxvalue`. To use parameters that are more understandable,
`median` and `stddev`, please use `sample_lognormal_by_median`.
Given uniform random `u` values in `[0,1)`, this will return log-normally
distributed random numbers. The return value will be monotone increasing
with respect to `u`.

The log-normal distribution is sampled by sampling a normal distribution
and exponentiating the result, giving a value that is always positive, so
this distribution is often used for generating random point scales.



## See also

- [sample_lognormal_by_median](sample_lognormal_by_median.html)
- [sample_normal](sample_normal.html)
- [rand](rand.html)
- [sample_exponential](sample_exponential.html)
- [sample_cauchy](sample_cauchy.html)
- [sample_discrete](sample_discrete.html)
- [sample_direction_uniform](sample_direction_uniform.html)
- [log](log.html)
- [exp](exp.html)
