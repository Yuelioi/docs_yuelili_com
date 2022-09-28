---
title: computenormal
order: 1
category:
  - houdini
---
    
## 描述

In shading contexts, computes a normal. In the SOP contexts, sets how/whether
to recompute normals.

```c
vector  computenormal(vector P, ...)
```

In shading contexts, computes the normal for position P using the cross
product of the derivatives of P.

在着色的情况下，使用 P 的导数的交叉乘积来计算位置 P 的法线。

```c
vector  computenormal(vector P, vector N, vector Ng, ...)
```

In shading contexts, computes the normal for position P using the cross
product of the derivatives of P.N is the original surface normal and Ng is the
geometric normal.This version “adjusts” the computed normal so interpolated
normals will be relatively correct.

在着色情况下，使用 P 的导数的交叉乘积来计算 P 位置的法线。N 是原始表面法线，Ng 是几何法线。

```c
void  computenormal(int i)
```

(Obsolete) In SOP context, sets the hint for whether normals should be
recomputed when `P` or `N` change (0=never, 1=automatic, 2=always).

这个版本会 "调整 "计算出来的法线，所以插值的法线会相对正确。

## Derivatives options

Functions which compute derivatives take additional arguments toallow tuning
of the derivative computation.

(Obsolete) 在 SOP 上下文中，设置当 PorN 改变时是否要重新计算法线的提示（0=从不，1=自动，2=总是）。

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
