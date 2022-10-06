---
title: sample_lognormal_by_median
order: 24
category:
  - houdini
---

## Description

`float sample_lognormal_by_median(float median, float stddev, float u)`

`float sample_lognormal_by_median(float origmedian, float origstddev, float minvalue, float maxvalue, float u)`

## Arguments

`median`

The median of the distribution.

`origmedian`

The median the distribution would have, were it not for `minvalue` and
`maxvalue`, limiting the range.

`stddev`

The standard deviation of the distribution.

`origstddev`

The standard deviation (scale) the distribution would have, were it not for
`minvalue` and `maxvalue`, limiting the range.

`u`

A number in the range `[0,1)`.

`minvalue`,`maxvalue`

When given, instead of sampling the full log-normal distribution, the
distribution with its range limited to `[minvalue,maxvalue]` will be sampled.

Samples the log-normal distribution with the specified `median` and `stddev`,
optionally with a `minvalue` and `maxvalue`. To use parameters `mu` and
`sigma` of the underlying normal distribution instead of `median` and
`stddev`, use `sample_lognormal`. Given uniform random `u` values in `[0,1)`,
this will return log-normally distributed random numbers. The return value
will be monotone increasing with respect to `u`.

The log-normal distribution is sampled by sampling a normal distribution and
exponentiating the result, giving a value that is always positive, so this
distribution is often used for generating random point scales.

## See also

- [sample_lognormal](sample_lognormal.html)
- [sample_normal](sample_normal.html)
- [rand](rand.html)
- [sample_exponential](sample_exponential.html)
- [sample_cauchy](sample_cauchy.html)
- [sample_discrete](sample_discrete.html)
- [sample_direction_uniform](sample_direction_uniform.html)
- [log](log.html)
- [exp](exp.html)
