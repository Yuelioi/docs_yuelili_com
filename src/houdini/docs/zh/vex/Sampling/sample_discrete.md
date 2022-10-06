---
title: sample_discrete
order: 16
category:
  - houdini
---
    
## 描述

Returns an integer, either uniform or weighted, given a uniform number between
0 and 1.

```c
int  sample_discrete(int nvalues, float u)
```

```c
int  sample_discrete(float weights[], float u)
```

`nvalues`

The returned integer will be uniform in the range `[0,nvalues-1]`,returning 0
if `u==0`, and returning `nvalues-1` if `u==1`.Theoutput will be clamped to
that range in case `u` is out of the range[0,1), to reduce the risk of
roundoff on `u` causing problems.

返回的整数将在[0,nvalues-1]范围内统一。

`weights`

Relative weights, (the sum does not need to be 1), of each integervalue in the
range

```c
[0,len(weights)-1]
```

.

如果 u==0 则返回 0，如果 u==1 则返回 nvalues-1。 如果 u==0，则返回 0；如果 u==1，则返回 nvues-1。

`u`

A number between 0 and 1.

的情况下，输出将被钳制在这个范围内。

Returns an integer, based on `u`, either uniformly weighted from 0
to`nvalues-1`, or weighted based on the `weights` array from 0
to

```c
len(weights)-1
```

.Given uniform random `u` values in [0,1), the version
taking `nvalues`will return uniform random integers in `[0,nvalues-1]`, and
the versiontaking `weights` will return random integers in

```c
[0,len(weights)-1]
```

, wherethe probability of `i` is

```c
weights[i]/sum_of_weights
```

.

[0,1]，以减少四舍五入带来的风险。
