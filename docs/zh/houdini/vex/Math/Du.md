---
title: Du
order: 15
category:
  - houdini
---
    
## 描述

Returns the derivative of the given value with respect to U.

```c
float  Du(float n, ...)
```

```c
vector  Du(vector n, ...)
```

```c
vector4  Du(vector4 n, ...)
```

Returns

The derivative of `n` with respect to U.

n 相对于 U 的导数。

In shading contexts, this is the change in the variable over the areabeing
shaded.

在阴影背景下，这是变量在阴影区域内的变化

## Derivatives options

Functions which compute derivatives take additional arguments toallow tuning
of the derivative computation.

被遮蔽的面积上的变化。

Show/hide arguments

"`extrapolate`",` int``=0 `

Whether derivatives are“smooth” across patch boundaries. In most cases this is
true and ifextrapolation is turned on, derivative computation should be
exactfor C2 surfaces. However, when the VEX variables are changing with ahigh
frequency (for example, a high frequency displacement mapcausing high
frequency changes to the P variable), extrapolation ofderivative computation
may cause exaggeration of discontinuitiesbetween patch boundaries.

计算导数的函数需要额外的参数来

"`smooth`",` int``=1 `

Adjust the magnitude of thedifferentials non-uniformly over patches. This will
usually reducepatch discontinuities in displacement/textured shaders. However,
insome odd cases you may want to turn this feature off.

允许对导数计算进行调整。

    N = computenormal(P, "extrapolate", 1, "smooth", 0);
