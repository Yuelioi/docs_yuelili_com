---
title: gradient
order: 35
category:
  - houdini
---
    
## 描述

Returns the gradient of a field.

On this page |

- Derivatives options

衍生品选项

- Examples

---|---

```c
vector  gradient(float val, ...)
```

```c
vector  gradient(vector P, float val, ...)
```

This method computes the derivative of a volume field using the
partialderivatives with respect to a given position (`Du`, `Dv`, and `Dw`).If
noposition is provided, `P` is assumed in shading contexts.If only `Du`
and`Dv` are defined, the derivative will be tangent to the surface
beingrendered.

这个方法是用一个体积场的部分导数来计算的。

## Derivatives options

Functions which compute derivatives take additional arguments toallow tuning
of the derivative computation.

衍生物（Du,Dv,和 Dw）。 如果没有提供

"`extrapolate`",` int``=0 `

Whether derivatives are“smooth” across patch boundaries. In most cases this is
true and ifextrapolation is turned on, derivative computation should be
exactfor C2 surfaces. However, when the VEX variables are changing with ahigh
frequency (for example, a high frequency displacement mapcausing high
frequency changes to the P variable), extrapolation ofderivative computation
may cause exaggeration of discontinuitiesbetween patch boundaries.

位置，则在阴影背景下假设 Pis。 如果只定义了 Du 和 Dva，导数将是与被渲染的表面相切的。

"`smooth`",` int``=1 `

Adjust the magnitude of thedifferentials non-uniformly over patches. This will
usually reducepatch discontinuities in displacement/textured shaders. However,
insome odd cases you may want to turn this feature off.

渲染的表面。

    N = computenormal(P, "extrapolate", 1, "smooth", 0);

## Examples

Return the gradient of the density field:

计算导数的函数需要额外的参数来

    surface test_grad(float density = 0){Cf = gradient(density);}
