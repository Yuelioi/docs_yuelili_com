---
title: sample_hemisphere
order: 19
category:
  - houdini
---
    
## 描述

Generates a unit vector, optionally biased, within a hemisphere, given a
vector2 of uniform numbers between 0 and 1.

```c
vector  sample_hemisphere(vector2 u)
```

```c
vector  sample_hemisphere(vector center, vector2 u)
```

```c
vector  sample_hemisphere(float bias, vector2 u)
```

```c
vector  sample_hemisphere(vector center, float bias, vector2 u)
```

`center`

Direction in the center of the hemisphere.This does not need to be
normalized.If not specified, the center direction is (1,0,0), along the
x-axis.

半球中心的方向。 这不需要被归一化。

`bias`

Bias toward the center direction, between -1 and infinity, with 0 being
unbiased,-1 forcing all points to the horizon, and infinity forcing all points
to center.When supplied, `u.y` is simply replaced with `1-pow(1-u.y, 1.0/(bias+1.0))`.Toget a bias similar to this when using the more general

```c
sample_direction_cone
```

,

```c
sample_sphere_cone
```

, and related functions, apply the
same change to `u.x`before calling those functions.

如果不指定，中心方向是（1,0,0），沿 X 轴。

`u`

Pair of numbers between 0 and 1.

对中心方向的偏置，在-1 和无穷大之间，0 是无偏置的。

Returns a unit vector, i.e. a vector of length 1, based on `u`.Given uniform
random `u` pairs of values in [0,1), if `bias` is 0, thereturned unit vectors
will be uniform random and continuous with respect to`u` on the surface of the
unit hemisphere centered at `center`.If bias isgreater than zero, the unit
vectors will be smoothly biased toward `center`.If bias is between -1 and 0,
the unit vectors will be biased away from`center`, toward the horizon.

0 是无偏向的，-1 强迫所有的点向地平线移动，而无穷大则强迫所有的点向中心移动。
