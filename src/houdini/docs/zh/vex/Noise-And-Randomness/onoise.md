---
title: onoise
order: 18
category:
  - houdini
---
    
## 描述

These functions are similar to wnoise and vnoise.

```c
float  onoise(vector pos)
```

```c
vector  onoise(vector pos)
```

```c
float  onoise(vector pos, int turbulence, float rough, float atten)
```

```c
vector  onoise(vector pos, int turbulence, float rough, float atten)
```

```c
float  onoise(vector pos, int periodX, int periodY, int periodZ)
```

```c
vector  onoise(vector pos, int periodX, int periodY, int periodZ)
```

`float onoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

`vector onoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

These functions are similar to [wnoise](wnoise.html "Generates Worley
(cellular) noise.") and[vnoise](vnoise.html "Generates Voronoi (cellular)
noise."). However, they are marginally less efficient incomputation and
don‘t have the same characteristics. The bounds on thenoise are roughly (-1,
1). Only 3D noise is supported. However, thisnoise has the ability to compute
turbulence with roughness andattenuation on the noise.

这些函数类似于 oise 和 dvnoise。但是，它们的计算效率略低，而且没有相同的特性。
