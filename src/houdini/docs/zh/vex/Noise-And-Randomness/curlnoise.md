---
title: curlnoise
order: 2
category:
  - houdini
---
    
## 描述

Computes divergence free noise based on Perlin noise.

```c
vector  curlnoise(vector xyz)
```

```c
vector  curlnoise(vector4 xyzt)
```

Computes a divergence free vector field based on the cross product of the
derivatives of two Perlin noise functions.

根据两个佩林噪声函数的导数的交叉积，计算一个无发散矢量场。
