---
title: curlnoise2d
order: 34
category:
  - houdini
---
    
## 描述

Computes 2d divergence free noise based on Perlin noise.

```c
vector  curlnoise2d(float x, float y)
```

```c
vector  curlnoise2d(vector xyt)
```

Computes a divergence free vector field based on the cross product of the
derivatives of two Perlin noise functions.

根据两个佩林噪声函数的导数的交叉积，计算一个无发散矢量场。

The resulting vectors all lie along the X-Y plane.

得到的矢量都位于 X-Y 平面。

Note

This is not the same as projecting a `curlnoise` to a plane.

这与将噪声投射到一个平面上是不一样的。

See [noise and randomness](../random.html)in the VEX languageguide for more
information.

请参阅 VEX 语言中的噪声和随机性。
