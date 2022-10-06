---
title: fresnel
order: 7
category:
  - houdini
---
    
## 描述

Computes the fresnel reflection/refraction contributions given an  
incoming vector, surface normal (both normalized), and an index of  
refraction (eta).

```c
void  fresnel(vector i, vector n, float eta, float &kr, float &kt)
```

`void fresnel(vector i, vector n, float eta, float &kr, float &kt, vector &R, vector &T)`

Computes the fresnel reflection/refraction contributions given anincoming
vector, surface normal (both normalized), and an index ofrefraction (eta). The
amount of reflected light will be returned inkr, and the amount of transmitted
light will be returned in kt.Optionally, the reflection and transmission
vectors can be returned inthe R and T variables. The R and <type> variables
will be normalizedvectors on exit.

计算菲涅尔反射/折射贡献，给定一个

eta is a relative index of refraction, the ratio betweenthe interior and
exterior index of refraction, where the exterioris defined by the direction of
the normals (normals point away fromthe interior).

入射矢量、表面法线（都是归一化的）和折射率（ETA）。
