---
title: anoise
order: 1
category:
  - houdini
---
    
## 描述

Generates “alligator” noise.

```c
float  anoise(vector pos)
```

```c
vector  anoise(vector pos)
```

```c
float  anoise(vector pos, int turbulence, float rough, float atten)
```

```c
vector  anoise(vector pos, int turbulence, float rough, float atten)
```

```c
float  anoise(vector pos, int periodX, int periodY, int periodZ)
```

```c
vector  anoise(vector pos, int periodX, int periodY, int periodZ)
```

`float anoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

`vector anoise(vector pos, int periodX, int periodY, int periodZ, int turbulence, float rough, float atten)`

These functions generate “alligator” noise, a type of cellular noise similar
toWorley noise ([wnoise](wnoise.html "Generates Worley (cellular) noise.")).
It is currently not possible to simulate alligator noiseusing the Worley
functions, but it‘spossible to get a very similar “look”.

这些函数产生 "鳄鱼 "噪声，这是一种类似于

The bounds on the noise are roughly (0, 1). This function only supports 3D
noise.

沃利噪声（wnoise）。目前还不可能用 Worley 函数模拟鳄鱼噪声
