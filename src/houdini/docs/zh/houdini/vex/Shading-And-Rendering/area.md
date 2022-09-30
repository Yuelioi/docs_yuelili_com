---
title: area
order: 1
category:
  - houdini
---
    
## 描述

Returns the area of the micropolygon containing a variable such as P.

On this page |

- Derivatives options

衍生品选项

- Examples

---|---

```c
float  area(vector p, ...)
```

This is a more accurate and convenient method to get the micropolygon areathan
multiplying the length of `Du(P)` by the length of `Dv(P)`.This function is
typically used to get the shading area in pixels.

这是一种更准确、更方便的方法来获得微多边形的面积

Note

This function works because VEX “knows” that the variable `P`has derivatives
(`dPdu` and `dPdv`). Passing a literal vectorinstead of a special variables
such as `P` will return `0` sinceVEX will not be able to access the
derivatives.

比用 Du(P)的长度乘以 Dv(P)的长度更准确。

## Derivatives options

Functions which compute derivatives take additional arguments toallow tuning
of the derivative computation.

这个函数通常用于获得以像素为单位的阴影面积。

"`extrapolate`",` int``=0 `

Whether derivatives are“smooth” across patch boundaries. In most cases this is
true and ifextrapolation is turned on, derivative computation should be
exactfor C2 surfaces. However, when the VEX variables are changing with ahigh
frequency (for example, a high frequency displacement mapcausing high
frequency changes to the P variable), extrapolation ofderivative computation
may cause exaggeration of discontinuitiesbetween patch boundaries.

这个函数起作用是因为 VEX "知道 "变量 Ph 有导数（dPduanddPdv）。传递一个字面的向量

"`smooth`",` int``=1 `

Adjust the magnitude of thedifferentials non-uniformly over patches. This will
usually reducepatch discontinuities in displacement/textured shaders. However,
insome odd cases you may want to turn this feature off.

而不是像 P 这样的特殊变量将返回 0s，因为

    N = computenormal(P, "extrapolate", 1, "smooth", 0);

## Examples

Return the area of the current micro-polygon in camera space:

VEX 将无法访问导数。

    area(P)

Return the area of the current micro-polygon in NDC space:

计算导数的函数需要额外的参数来

    area(transform("ndc", P))

Returns `0`, since the argument is not a variable VEX knows the derivatives
for:

允许对导数计算进行调整。

    area({0.1, 2.3, 4.5})
