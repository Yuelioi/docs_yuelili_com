---
title: flowpnoise
order: 6
category:
  - houdini
---
    
## 描述

There are two forms of Perlin-style noise: a non-periodic noise which  
changes randomly throughout N-dimensional space, and a periodic form  
which repeats over a given range of space.

```c
float  flowpnoise(vector xyz, vector p, float flow)
```

```c
vector  flowpnoise(vector xyz, vector p, float flow)
```

```c
float  flowpnoise(vector4 xyzt, vector4 p, float flow)
```

```c
vector  flowpnoise(vector4 xyzt, vector4 p, float flow)
```

```c
float  flowpnoise(float x, float y, int px, int py, float flow)
```

```c
vector  flowpnoise(float x, float y, int px, int py, float flow)
```

```c
float  flowpnoise(vector xyz, int px, int py, int pz, float flow)
```

```c
vector  flowpnoise(vector xyz, int px, int py, int pz, float flow)
```

```c
float  flowpnoise(vector4 xyzt, int px, int py, int pz, int pt, float flow)
```

```c
vector  flowpnoise(vector4 xyzt, int px, int py, int pz, int pt, float flow)
```

This operator generates 1D and 3D Perlin Flow noise from 3D and 4D data.There
are two forms of Perlin flow noise: a non-periodic noise which changesrandomly
throughout the N-dimensional space, and a periodic form whichrepeats itself
over a given range of the space. The periodic form can beused to generate
patterns which tile over N-dimensional space, such as anoise-based texture map
which repeats seamlessly.

该运算器从三维和四维数据中生成一维和三维佩林流噪声。

The noise has a range of (0, 1) with a median value of 0.5. Thedistribution of
the noise depends on the dimension, with higherdimensions approaching a
Gaussian distribution of noise values.

有两种形式的佩林流噪声：一种是非周期性的噪声，在整个 N 维空间内随机变化。

Flow noise is very similar to Perlin noise, as
in[![](../../icons/VOP/periodicnoise.svg)Periodic
Noise](../../nodes/vop/periodicnoise.html "Generates 1D and 3D Perlin noise
from 1D, 3D and 4D data."), but with an extra flow parameter.The flowparameter
can be thought of as an extra dimension, but a dimensionwhose period is always
1.Moving through the flow dimension rotatesthe noise vectors rather than
adjusting slices through a noise space, which generates a more flowing
appearance to the animation.

在整个 N 维空间内随机变化的非周期性噪声，以及在空间的特定范围内重复的周期性形式。

See [noise and randomness](../random.html)in the VEX languageguide for more
information.

在空间的一个给定范围内重复自己。周期性形式可以
