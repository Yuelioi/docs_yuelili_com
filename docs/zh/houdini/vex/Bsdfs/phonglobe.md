---
title: phonglobe
order: 17
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

# phonglobe

VEX function

#

```c
bsdf  phonglobe(vector dir, float exponent, ...)
```

```c
bsdf  phonglobe(vector nml, vector dir, float exponent, ...)
```

`bsdf phonglobe(vector dir, float exponentx, float exponenty, vector framex, vector framey, ...)`

`bsdf phonglobe(vector nml, vector dir, float exponentx, float exponenty, vector framex, vector framey, ...)`

![](../../images/rendering/phonglobe.png)

A phong (blurred) reflection along a given direction vector. This will produce
the same result as `phong()` when the direction vector is the reflection
vector, but with this function you can also gather illumination from other
directions (such as transmission).

沿着一个给定的方向向量进行 Phong（模糊）反射。当方向向量是反射向量时，这将产生与 asphong()相同的结果，但用这个函数你也可以从其他方向收集照明（比如透射）。

It is possible to create anisotropic phong lobes by providing x and y
exponents and tangent vectors.

通过提供 x 和 y 指数和切线向量，可以创建各向异性的 phong 裂片。

`dir`

the direction of specularity.

镜面的方向。

`nml`

optional normal to specify the hemisphere for reflection directions.

可选的法线，用于指定反射方向的半球。

`exponent`

phong exponent.

phong 指数。

`exponentx`

phong exponent along the `framex` vector.

沿着 framexvector 的 phong 指数。

`exponenty`

phong exponent along the `framey` vector.

沿着 frameyvector 的 phong 指数。

`framex`

highlight X direction

突出 X 方向

`framey`

highlight Y direction

突出 Y 方向
