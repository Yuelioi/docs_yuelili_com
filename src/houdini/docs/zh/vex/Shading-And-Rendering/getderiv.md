---
title: getderiv
order: 12
category:
  - houdini
---
    
## 描述

Evaluates surface derivatives of an attribute.

On this page |

- Derivatives options

衍生品选项

- Examples

---|---  
Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)

`void getderiv(float attr, string attrName, int isVertexAttr, float s, float t, float &du, float &dv, ...)`

`void getderiv(<vector>attr, string attrName, int isVertexAttr, float s, float t, <vector>&du, <vector>&dv, ...)`

Note

If derivatives are queried for a polygonal mesh it is interally sampled as a
Subdivision Surface.

如果对一个多边形网格进行导数查询，会以细分曲面的方式进行相互采样。

`attr`

Attribute value.

Attribute value（属性值）。

`attrName`

Name of attribute to evaluate.

要评估的属性名称。

`isVertexAttr`

Set to `1` to indicate the attribute is a vertex type.

设置为 1 表示该属性是一个顶点类型。

`s`

Parametric S shading value. This should be passed from the `s` global
variable.

Parametric S 阴影值。这应该是由全局变量传递的。

`t`

Parametric <type> shading value. This should be passed from the `t` global
variable.

参数<类型>阴影值。这应该从全局变量中传递。

`du`

Derivative of attribute in U direction.

U 方向属性的衍生物。

`dv`

Derivative of attribute in V direction.

V 方向属性的衍生物。

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

## Examples

    // Get derivatives of point attribute 'N'vector dNdu, dNdv;getderiv(N, "N", 0, s, t, dNdu, dNdv);
