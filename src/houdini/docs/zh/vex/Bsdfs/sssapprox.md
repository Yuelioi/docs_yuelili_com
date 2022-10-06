---
title: sssapprox
order: 21
category:
  - houdini
---
    
## 描述

Creates an approximate SSS BSDF.

`bsdf sssapprox(vector albedo, float meanFreePath, float roughness, float scale, ...)`

`albedo`

Average surface reflectance.

平均表面反射率。

`meanFreePath`

Average distance between scattering events.

散射事件之间的平均距离。

`roughness`

A value from '0.0' to '1.0' blending to an ideal diffuse transmission
reflectance profile.

一个从'0.0'到'1.0'的数值，混合到一个理想的漫射反射率曲线。

`scale`

Physical scale of the material. Smaller scale values will make the material
more transmissive.

材料的物理尺度。较小的比例值会使材料的透射性更强。

See [writing a PBR shader](../pbr.html) for information on BSDFs.

关于 BSDF 的信息，请参见编写 PBR 着色器。

Models SSS illumination based on an approximate reflectance profile.

基于近似的反射曲线建立 SSS 光照模型。
