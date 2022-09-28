---
title: shadow_light
order: 70
category:
  - houdini
---
    
## 描述

Executes the shadow shader for a given light and returns the amount of
shadowing as a multiplier of the shaded color.

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ surface](../contexts/surface.html)  
---|---

```c
vector  shadow_light(int lightid, vector pos, vector dir, float time, ...)
```

This operation is similar to the shadow() function but it allows executionof
the shadow shader outside an illuminance loop.The position anddirection toward
the light source are provided directly, and the shadowshader is executed -
returning the shadow multiplier.To produce the finalshadowed color, multiply
the shaded color by the value returned byshadow_light.

这个操作类似于 shadow()函数，但它允许在照度循环之外执行阴影着色器。

Keyword variadic arguments can be passed to the shadow shader, for importin
the shadow shader with with simport().

阴影着色器在照度循环之外执行。 阴影的位置和

`lightid`

A light identifier, as returned by [getlights](getlights.html "Returns an
array of light identifiers for the currently shaded surface.").

直接提供朝向光源的位置和方向，并执行影子

`pos`

The origin of the ray (such as the global variable `P`).

着色器被执行--返回阴影乘数。 为了产生最终的

`dir`

Direction vector from the origin. The length of this vector should bethe
distance from _pos_ to the light source.

为了产生最终的阴影颜色，将阴影颜色乘以由

`time`

Time to send the ray at.

返回的值。
