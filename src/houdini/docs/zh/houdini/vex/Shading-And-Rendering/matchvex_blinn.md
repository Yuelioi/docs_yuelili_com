---
title: matchvex_blinn
order: 51
category:
  - houdini
---
    
## 描述

Returns a BSDF that matches the output of the traditional VEX blinn function.

```c
bsdf  matchvex_blinn(float exponent, ...)
```

```c
bsdf  matchvex_blinn(vector nml, float exponent, ...)
```

![](../../images/rendering/matchvex_blinn.png)

The BSDF produced by [blinn](blinn.html) "Returns a Blinn BSDF or computes
Blinn shading.") is not the same as the traditional VEX `blinn()` output. Use
this function to produce a closer approximate match to the traditional VEX
`blinn()`.

由 blinn 产生的 BSDF 与传统的 VEXblinn()输出并不相同。使用这个函数可以产生一个更接近于
