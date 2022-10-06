---
title: cone
order: 5
category:
  - houdini
---
    
## 描述

Returns a cone reflection BSDF.

```c
bsdf  cone(vector normal, vector dir, float angle, ...)
```

Returns a `bsdf` representing a cone reflection along a given direction
vector. This BSDF is constant within the given angle, producing a similar
result to the [gather](gather.html "Sends rays into the scene and returns
information from the shaders ofsurfaces hit by the rays.") or
[irradiance](irradiance.html "Computes irradiance (global illumination) at
the point P with the normal N.") loops.

返回代表沿给定方向矢量的锥体反射的 absdf。这个 BSDF 在给定的角度内是恒定的，产生一个类似于 gatherorirradianceloops 的结果。

```c
bsdf  cone(vector dir, float angle, ...)
```

In shading contexts, fills in the current surface normal automatically.

在着色的情况下，自动填入当前的表面法线。

![](../../images/rendering/cone.png)

`normal`

The surface normal direction.

表面法线方向。

`dir`

The direction of specularity.

镜面的方向。

`angle`

Cone angle **in radians**.

圆锥角，弧度。
