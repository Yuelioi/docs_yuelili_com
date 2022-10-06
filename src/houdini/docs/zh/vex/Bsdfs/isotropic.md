---
title: isotropic
order: 13
category:
  - houdini
---
    
## 描述

Returns an isotropic BSDF, which scatters light equally in all directions.

```c
bsdf  isotropic(...)
```

The isotropic function scatters light equally in all directions and is
suitable for use in rendering dense volumetric materials such as smoke. Note
that no normal vector is required to construct an isotropic bsdf since it has
no directionality. The default albedo for an isotropic `bsdf` is 1, which
means the isotropic() function scatters 100% of the incoming light.

各向同性函数在所有方向上都能平等地散射光线，适合用于渲染密集的体积材料，如烟雾。注意，构造一个各向同性的 bsdf 不需要法线矢量，因为它没有方向性。各向异性 bsdf 的默认反照率是 1，这意味着 isotropic()函数会散射 100%的入射光。
