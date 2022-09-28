---
title: xnoise
order: 32
category:
  - houdini
---
    
## 描述

Simplex noise is very close to Perlin noise, except with the samples on a
simplex mesh rather than a grid. This results in less grid artifacts. It also
uses a higher order bspline to provide better derivatives.

```c
float  xnoise(float x)
```

```c
vector  xnoise(float x)
```

```c
float  xnoise(float x, float y)
```

```c
vector  xnoise(float x, float y)
```

```c
float  xnoise(vector xyz)
```

```c
vector  xnoise(vector xyz)
```

```c
float  xnoise(vector4 xyzt)
```

```c
vector  xnoise(vector4 xyzt)
```

Simplex noise is very close to Perlin noise, except with the samples on
asimplex mesh rather than a grid.This results in less grid artifacts.It
alsouses a higher order `bspline` to provide better derivatives.

单元噪声与佩林噪声非常接近，只是样本在一个

The various functions return the noise value at a 4D (vector4 argument),3D
(vector argument), 2D (two float arguments) or 1D (float argument)position.
You can get a random float value or a vector of three randomvalues.

单线网而不是网格。 这导致了较少的网格伪影。 它还

The noise is in the range 0-1 with a median of 0.5. The distribution ofthe
noise depends on the dimension, with higher dimensions approaching aGaussian
distribution of noise values.

它还使用了更高的阶数 bsplin 来提供更好的导数。
