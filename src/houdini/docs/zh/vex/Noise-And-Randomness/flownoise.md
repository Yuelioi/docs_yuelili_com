---
title: flownoise
order: 5
category:
  - houdini
---
    
## 描述

Generates 1D and 3D Perlin Flow Noise from 3D and 4D data.

```c
float  flownoise(vector xyz, float flow)
```

```c
vector  flownoise(vector xyz, float flow)
```

```c
float  flownoise(vector4 xyzt, float flow)
```

```c
vector  flownoise(vector4 xyzt, float flow)
```

```c
float  flownoise(float x, float y, float flow)
```

```c
vector  flownoise(float x, float y, float flow)
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
