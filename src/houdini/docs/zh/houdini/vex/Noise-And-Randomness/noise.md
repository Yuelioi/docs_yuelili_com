---
title: noise
order: 15
category:
  - houdini
---
    
## 描述

There are two forms of Perlin-style noise: a non-periodic noise which  
changes randomly throughout N-dimensional space, and a periodic form  
which repeats over a given range of space.

```c
float  noise(float pos)
```

```c
vector  noise(float pos)
```

Sample one or three numbers at the given position from 1D noise.

从一维噪声中对给定位置的一个或三个数字进行采样。

```c
float  noise(float posx, float posy)
```

```c
vector  noise(float posx, float posy)
```

Sample one or three numbers at the given position from 2D noise.

从二维噪声中对给定位置的一个或三个数字进行采样。

```c
float  noise(vector pos)
```

```c
vector  noise(vector pos)
```

Sample one or three numbers at the given position from 3D noise.

从三维噪声中对指定位置的一个或三个数字进行采样。

```c
float  noise(vector4 pos)
```

```c
vector  noise(vector4 pos)
```

Sample one or three numbers at the given position from 4D noise.

从 4D 噪声中对给定位置的一个或三个数字进行采样。

There are two forms of Perlin-style noise: a non-periodic noise whichchanges
randomly throughout N-dimensional space, and a periodic formwhich repeats over
a given range of space.

有两种形式的佩林式噪声：一种非周期性的噪声，它在整个 N 维空间内随机变化。

Note

This function generates non-periodic noise. Use the[pnoise](pnoise.html "There
are two forms of Perlin-style noise: a non-periodic noise whichchanges
randomly throughout N-dimensional space, and a periodic formwhich repeats over
a given range of space.") function to generate periodic Perlin noise.

在整个 N 维空间内随机变化的非周期性噪声，以及一个周期性的形式

The various functions return the noise value at a 4D (vector4 argument),3D
(vector argument), 2D (two float arguments) or 1D (float argument)position.
You can get a random float value or a vector of three randomvalues.

在一个给定的空间范围内重复出现。

The noise is in the range 0-1 with a median of 0.5. The distribution ofthe
noise depends on the dimension, with higher dimensions approaching aGaussian
distribution of noise values.

这个函数可以生成非周期性噪声。使用 pnoisefunction 来生成周期性的佩林噪声。
