---
title: snoise
order: 29
category:
  - houdini
---
    
## 描述

These functions are similar to wnoise.

```c
float  snoise(vector pos)
```

```c
vector  snoise(vector pos)
```

```c
float  snoise(vector pos, int turbulence, float rough, float atten)
```

```c
vector  snoise(vector pos, int turbulence, float rough, float atten)
```

```c
float  snoise(vector pos, int periodX, int periodY, int periodZ)
```

```c
vector  snoise(vector pos, int periodX, int periodY, int periodZ)
```

`float snoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

`vector snoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

These functions are similar to [wnoise](wnoise.html "Generates Worley
(cellular) noise."). The noise returnedis based on the weights of all of the
closest points, with each point‘scontribution based on a meta-ball like
rolloff curve. That is, if thesample point is close to the sphere, its
contribution will be greater.

这些功能类似于噪音。返回的噪声

The bounds on the noise are roughly (-1.7, 1.7). Only 3D noise issupported.
However, this noise has the ability to compute turbulencewith roughness and
attenuation on the noise.

是基于所有最接近的点的权重，与每个点的
