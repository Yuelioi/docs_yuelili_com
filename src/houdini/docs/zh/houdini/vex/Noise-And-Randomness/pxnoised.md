---
title: pxnoised
order: 20
category:
  - houdini
---
    
## 描述

Periodic derivatives of Simplex Noise.

| Since | 17.0 |
| ----- | ---- |

```c
void  pxnoised(float x, int px, float &v, float &dvdx)
```

```c
void  pxnoised(float x, int px, vector &v, vector &dvdx)
```

`void pxnoised(float x, float y, int px, int py, float &v, float &dvdx, float &dvdy)`

`void pxnoised(float x, float y, int px, int py, vector &v, vector &dvdx, vector &dvdy)`

`void pxnoised(vector xyz, int px, int py, int pz, float &v, float &dvdx, float &dvdy, float &dvdz)`

`void pxnoised(vector xyz, int px, int py, int pz, vector &v, vector &dvdx, vector &dvdy, vector &dvdz)`

`void pxnoised(vector4 xyzw, int px, int py, int pz, int pw, float &v, float &dvdx, float &dvdy, float &dvdz, float &dvdw)`

`void pxnoised(vector4 xyzw, int px, int py, int pz, int pw, vector &v, vector &dvdx, vector &dvdy, vector &dvdz, vector &dvdw)`

This computes both the simplex noise value, and the derivatives of thenoise
along each axis. This can be performed quite efficiently asthere are analytic
derivatives available.

这将计算单线噪声值，以及沿每个轴的噪声导数。

See [xnoise](xnoise.html "Simplex noise is very close to Perlin noise, except
with the samples on a simplex mesh rather than a grid.This results in less
grid artifacts.It also uses a higher order bspline to provide better
derivatives.") and [pxnoise](pxnoise.html "Simplex noise is very close to
Perlin noise, except with the samples on a simplex mesh rather than a
grid.This results in less grid artifacts.It also uses a higher order bspline
to provide better derivatives. This is the periodic simplex noise") for other
versions of xnoise.

沿着每个轴的噪声的导数。这可以相当有效地进行，因为

See [noise and randomness](../random.html)in the VEX languageguide for more
information.

有分析性导数可用。
