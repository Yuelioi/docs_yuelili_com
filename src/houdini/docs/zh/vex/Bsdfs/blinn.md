---
title: blinn
order: 3
category:
  - houdini
---
    
## 描述

Returns a Blinn BSDF or computes Blinn shading.

```c
bsdf  blinn(float exponent, ...)
```

```c
bsdf  blinn(vector nml, float exponent, ...)
```

Returns a Blinn BSDF.

返回一个 Blinn BSDF。

See [writing a PBR shader](../pbr.html) for information on BSDFs.

关于 BSDF 的信息，请参见编写 PBR 着色器。

```c
vector  blinn(vector nml, vector V, float roughness, ...)
```

Computes Blinn shading.

计算 Blinn 的阴影。

`nml`

The normal of the surface to use for evaluate.

用于评估表面的法线。

`V`

The incidence vector.

入射矢量。

`exponent`

The exponent value. The higher the value, the tighter the specular lobe.

指数值。指数越大，镜面层就越紧密。

Each of the functions can also take an optional light mask.

每个函数都可以接受一个可选的光罩。

![](../../images/rendering/blinn.png)
