---
title: chiang
order: 4
category:
  - houdini
---
    
## 描述

Returns a chiang BSDF.

| Since | 19.0 |
| ----- | ---- |

`bsdf chiang(vector nn, vector tanV, float R_v, float R_s, float TT_v, float TT_s, float TRT_v, float TRT_s, float shift, vector absorption_coeff, float ior, ...)`

Creates a BSDF for computation of the physically based hair model described in
paper “A Practical and Controllable Hair and Fur Model for Production Path
Tracing” by Chiang et al.

创建一个 BSDF，用于计算基于物理的头发。

Suitable only for curve geometry.

论文 "A Practical and Controllable Hair and Fur Model for Production Path
Tracing "中描述的 BSDF。

See [writing a PBR shader](../pbr.html) for information on BSDFs.

中描述的基于物理的毛发模型的计算，该模型由 Chiang 等人撰写。

`nn`

bumped/shading normal

仅适用于曲线几何。

`tanV`

tangent vector along V

关于 BSDF 的信息，请参见编写 PBR 着色器。

`R_v`

Longitudinal roughness value “v” for lobe R (section 4.1 of the paper)

凸起/阴影法线

`R_s`

Azimuthal roughness value “s” for lobe R (section 4.1 of the paper)

沿着 V 的切线矢量

`TT_v`

Longitudinal roughness value “v” for lobe TT (section 4.1 of the paper)

裂片 R 的纵向粗糙度值 "v"（论文的 4.1 节）。

`TT_s`

Azimuthal roughness value “s” for lobe TT (section 4.1 of the paper)

裂片 R 的方位粗糙度值 "s"（本文第 4.1 节）。

`TRT_v`

Longitudinal roughness value “v” for lobe TRT (section 4.1 of the paper)

TT 叶的纵向粗糙度值 "v"（本文第 4.1 节）。

`TRT_s`

Azimuthal roughness value “s” for lobe TRT (section 4.1 of the paper)

TT 叶的方位粗糙度值 "s"（本文第 4.1 节）。

`shift`

Represents the cuticle angle, which affects the position of the specular
highlight.Input range of -1 to 1 is internally mapped to -90 to 90 (eg meaning
3-degrees would be 3/90 = 0.03333)

叶片 TRT 的纵向粗糙度值 "v"（本文第 4.1 节）。

```c
absorption_coeff
```

The absorption coefficient (section 4.2 of the paper)

裂片 TRT 的方位粗糙度值 "s"（本文第 4.1 节）。

`ior`

Index of refraction (eg 1.55)

代表角质层角度，它影响镜面高光的位置。 输入范围为-1 至 1，内部映射为-90 至 90（例如意味着 3 度将是 3/90=0.03333）。
