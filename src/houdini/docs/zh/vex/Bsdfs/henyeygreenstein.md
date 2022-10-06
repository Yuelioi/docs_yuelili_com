---
title: henyeygreenstein
order: 12
category:
  - houdini
---
    
## 描述

Returns an anisotropic volumetric BSDF, which can scatter light forward or
backward.

```c
bsdf  henyeygreenstein(float anisotropic_bias, ...)
```

The Henyey-Greenstein function scatters light either forward or in reverse
depending on the

```c
anisotropic_bias
```

provided to the function which must be a
floating point value between -1 and 1. A value of 0 will cause isotropic
scattering (identical to the `isotropic()` bsdf) while positive values produce
forward scattering and negative values produce reverse scattering. The extrema
of -1 and 1 cause all light to be scattered in a single direction, back toward
the light for -1 and without any directional change for 1.

Henyey-
Greenstein 函数根据提供给该函数的 anisotropic_bias（必须是一个介于-1 和 1 之间的浮点值），对光进行正向或反向散射，值为 0 将导致各向同性的散射（与 isotropic()bsdf 相同），而正值产生正向散射，负值产生反向散射。-1 和 1 的极值会导致所有的光向一个方向散射，对于-1 来说是向后散射，对于 1 来说没有任何方向性的变化。

Note

No normal vector is required to construct a Henyey-Greenstein BSDF since it
has no directionality. The default albedo for the BSDF is 1, which means it
scatters 100% of the incoming light.

构建 Henyey-Greenstein BSDF 不需要法线矢量，因为它不具有方向性。BSDF 的默认反照率是 1，这意味着它对进入的光线进行 100%的散射。
