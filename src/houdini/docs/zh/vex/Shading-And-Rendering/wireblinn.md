---
title: wireblinn
order: 79
category:
  - houdini
---
    
    [  
Houdini 19.0  
](../../index.html)  
**  
[  
VEX  
](../index.html)  
**  
[  
VEX Functions  
](index.html)  
\_\_

# wireblinn

VEX function

#

```c
bsdf  wireblinn(vector tangent, float exponent, ...)
```

![](../../images/rendering/wireblinn.png)

Blinn function defined around a tangent vector. You can use this to produce
the average specular illumination for thin wire-like primitives such as hair.

围绕切线矢量定义的 Blinn 函数。你可以用它来为头发等细线状基元产生平均镜面照明。

- `tangent` â tangent vector along the hair.

tangentâ 沿头发的切线矢量。

- `exponent` â blinn exponent.

exponentâ blinn exponent.
