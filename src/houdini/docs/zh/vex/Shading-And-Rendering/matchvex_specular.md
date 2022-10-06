---
title: matchvex_specular
order: 52
category:
  - houdini
---
    
## 描述

Returns a BSDF that matches the output of the traditional VEX specular
function.

```c
bsdf  matchvex_specular(float exponent, ...)
```

```c
bsdf  matchvex_specular(vector nml, float exponent, ...)
```

![](../../images/rendering/matchvex_specular.png)

The BSDF produced by [specular](specular.html) "Returns a specular BSDF or
computes specular shading.") is not the same as the traditional VEX
`specular()` output. Use this function to produce a closer approximate match
to the traditional VEX `specular()`.

由 specular 产生的 BSDF 与传统的 VEXspecular()输出不一样。使用这个函数可以产生一个与传统的 VEXspecular()更接近的近似匹配。
