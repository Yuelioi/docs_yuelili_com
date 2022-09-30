---
title: noised
order: 16
category:
  - houdini
---
    
## 描述

Derivatives of Perlin Noise.

```c
void  noised(float x, float &v, float &dvdx)
```

```c
void  noised(float x, vector &v, vector &dvdx)
```

```c
void  noised(float x, float y, float &v, float &dvdx, float &dvdy)
```

```c
void  noised(float x, float y, vector &v, vector &dvdx, vector &dvdy)
```

```c
void  noised(vector xyz, float &v, float &dvdx, float &dvdy, float &dvdz)
```

`void noised(vector xyz, vector &v, vector &dvdx, vector &dvdy, vector &dvdz)`

`void noised(vector4 xyzw, float &v, float &dvdx, float &dvdy, float &dvdz, float &dvdw)`

`void noised(vector4 xyzw, vector &v, vector &dvdx, vector &dvdy, vector &dvdz, vector &dvdw)`

This computes both the perlin noise value, and the derivatives of thenoise
along each axis.This can be performed quite efficiently asthere are analytic
derivatives available.

这将计算 perlin 噪声值，以及沿每个轴的噪声导数。

See [noise and randomness](../random.html)in the VEX languageguide for more
information.

沿着每个轴的噪声的导数。 这可以相当有效地进行，因为
