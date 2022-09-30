---
title: Dw
order: 17
category:
  - houdini
---
    
## 描述

Returns the derivative of the given value with respect to the 3rd axis (for
volume rendering).

```c
float  Dw(float p, ...)
```

```c
vector  Dw(vector p, ...)
```

```c
vector4  Dw(vector4 p, ...)
```

Returns

Returns the derivative of `p` with respect to W.

返回 p 相对于 W 的导数。

When rendering surfaces, this function returns 0.

当渲染曲面时，这个函数返回 0。

In shading contexts, this is the change in the variable over the volume being
shaded.

在着色的情况下，这是变量在被着色的体积上的变化。

## Derivatives options

Functions which compute derivatives take additional arguments toallow tuning
of the derivative computation.

计算导数的函数需要额外的参数来

Show/hide arguments

"`extrapolate`",` int``=0 `

Whether derivatives are“smooth” across patch boundaries. In most cases this is
true and ifextrapolation is turned on, derivative computation should be
exactfor C2 surfaces. However, when the VEX variables are changing with ahigh
frequency (for example, a high frequency displacement mapcausing high
frequency changes to the P variable), extrapolation ofderivative computation
may cause exaggeration of discontinuitiesbetween patch boundaries.

允许对导数计算进行调整。

"`smooth`",` int``=1 `

Adjust the magnitude of thedifferentials non-uniformly over patches. This will
usually reducepatch discontinuities in displacement/textured shaders. However,
insome odd cases you may want to turn this feature off.

导数是否是

    N = computenormal(P, "extrapolate", 1, "smooth", 0);
