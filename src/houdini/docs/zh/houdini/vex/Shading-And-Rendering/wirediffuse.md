---
title: wirediffuse
order: 80
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

# wirediffuse

VEX function

#

```c
bsdf  wirediffuse(vector tangent, ...)
```

![](../../images/rendering/wirediffuse.png)

Diffuse function defined around a tangent vector. This can be used to produce
the average diffuse illumination for thin wire-like primitives such as hair.

围绕切线矢量定义的漫反射函数。这可以用来为头发等细线状基元产生平均漫射光照。

`tangent`

tangent vector along the hair.

沿着头发的切线向量。
