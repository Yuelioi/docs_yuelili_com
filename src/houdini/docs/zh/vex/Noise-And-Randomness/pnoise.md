---
title: pnoise
order: 19
category:
  - houdini
---
    
## 描述

There are two forms of Perlin-style noise: a non-periodic noise which  
changes randomly throughout N-dimensional space, and a periodic form  
which repeats over a given range of space.

```c
float|vector pnoise(float x, int px)
```

```c
float|vector pnoise(vector x, vector p)
```

```c
float|vector pnoise(vector4 xyzt, vector4 p)
```

```c
float|vector pnoise(float x, float y, int px, int py)
```

```c
float|vector pnoise(vector xyz, int px, int py, int pz)
```

```c
float|vector pnoise(vector4 xyzt, int px, int py, int pz, int pt)
```

There are two forms of Perlin-style noise: a non-periodic noise whichchanges
randomly throughout N-dimensional space, and a periodic formwhich repeats over
a given range of space.

有两种形式的佩林式噪声：一种是非周期性的噪声，在整个 N 维空间内随机变化。

This function generates periodic noise. Use the [noise](noise.html "There are
two forms of Perlin-style noise: a non-periodic noise whichchanges randomly
throughout N-dimensional space, and a periodic formwhich repeats over a given
range of space.")function to generate non-periodic Perlin noise.

在整个 N 维空间内随机变化的非周期性噪声，以及在特定空间范围内重复的周期性形式

The various functions return the noise value at a 4D (vector4 argument),3D
(vector argument), 2D (two float arguments) or 1D (float argument)position.
You can get a random float value or a vector of three randomvalues.

在一定的空间范围内重复出现。

The “p” int or vector arguments specify the range of periodicity. Forexample,
if you're making a 2D image and you want it to tile:

这个函数生成周期性噪声。使用 thenoisefunction 来生成非周期性的佩林噪声。

    clr = pnoise(X * 4, Y * 5, _4, 5_)

In this example, X is in the range 0-4, Y is in the range 0-5, and thenoise is
periodic within that segment.

各种函数返回 4D（向量 4 参数）处的噪声值。

If a period argument is 0, VEX treats that as _no_ periodicity. Usethis to
make the noise periodic in one dimension but not another.

三维（矢量参数）、二维（两个浮点参数）或一维（浮点参数）的噪声值。

The distribution of the noise depends on the dimension, with higherdimensions
approaching a Gaussian distribution of noise values.

位置。你可以得到一个随机的浮动值或三个随机值的向量。
