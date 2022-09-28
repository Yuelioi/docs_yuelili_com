---
title: volume
order: 1
category:
  - houdini
---
    
## 描述

Returns the volume of the microvoxel containing a variable such as P.

On this page |

- Derivatives options

衍生品选项

- Examples

---|---

```c
float  volume(vector pos, ...)
```

Note

This function relies on the fact that VEX “knows” that `pos` hasderivatives
(`dPdu`, `dPdv`, and `dPdz`).Passing a literal vector instead of a special
variables such as `P`will return `0` since VEX will not be able to access the
derivatives.

这个函数依赖于 VEX "知道 "pos 有

## Derivatives options

Functions which compute derivatives take additional arguments toallow tuning
of the derivative computation.

衍生物（dPdu、dPdv 和 dPdz）。

"`extrapolate`",` int``=0 `

Whether derivatives are“smooth” across patch boundaries. In most cases this is
true and ifextrapolation is turned on, derivative computation should be
exactfor C2 surfaces. However, when the VEX variables are changing with ahigh
frequency (for example, a high frequency displacement mapcausing high
frequency changes to the P variable), extrapolation ofderivative computation
may cause exaggeration of discontinuitiesbetween patch boundaries.

传递一个字面的向量而不是一个特殊的变量如 P，将返回 0，因为 VEX 将无法访问导数。

"`smooth`",` int``=1 `

Adjust the magnitude of thedifferentials non-uniformly over patches. This will
usually reducepatch discontinuities in displacement/textured shaders. However,
insome odd cases you may want to turn this feature off.

计算导数的函数需要额外的参数来

    N = computenormal(P, "extrapolate", 1, "smooth", 0);

## Examples

Return the volume of the current micro-voxel in camera space:

允许对导数计算进行调整。

    volume(P)

Returns `0`, since the argument is not a variable VEX knows the derivatives
for:

导数是否是

    volume({0.1, 2.3, 4.5})
