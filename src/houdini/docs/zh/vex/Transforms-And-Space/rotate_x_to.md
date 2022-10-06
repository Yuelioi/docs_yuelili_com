---
title: rotate_x_to
order: 22
category:
  - houdini
---
    
## 描述

Rotates a vector by a rotation that would bring the x-axis to a given
direction.

```c
vector2  rotate_x_to(vector2 direction, vector2 v)
```

```c
vector  rotate_x_to(vector direction, vector v)
```

```c
vector4  rotate_x_to(vector4 direction, vector4 v)
```

`direction`

Direction to which a vector along the positive x-axis, e.g. (1,0,0),would be
rotated.This does not need to be normalized.

沿着正 X 轴的矢量的方向，例如（1,0,0）。

`v`

Vector to which to apply the rotation.

将被旋转。 这不需要被归一化。

Applies to `v`, the rotation that would move (1,0), (1,0,0), or (1,0,0,0)
to`direction` most directly.

适用于旋转的矢量。

In the case of `direction` being (-1,0,0), there are multiple
distinctrotations that would move (1,0,0) to (-1,0,0) with ahalf turn
rotation, so one is chosen arbitrarily, negating `v.x` and `v.z`.In 2D, there
is only one distinct rotation that moves (1,0) to (-1,0),equivalent to
negating `v`.In 4D, the rotation where `v` is negatedis also chosen.

适用于(1,0)、(1,0,0)或(1,0,0,0)的旋转将直接向最方向移动。

This is used by functions like

```c
sample_direction_cone
```

and

```c
sample_sphere_cone
```

to rotate the cone centre from (1,0,0) to a given
direction vector.

在方向为（-1,0,0）的情况下，有多个不同的
