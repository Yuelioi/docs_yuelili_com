## 描述

Returns a chiang BSDF.

Since | 19.0  
---|---  
  
`bsdf  chiang(vector nn, vector tanV, float R_v, float R_s, float TT_v, float
TT_s, float TRT_v, float TRT_s, float shift, vector absorption_coeff, float
ior, ...)`

Creates a BSDF for computation of the physically based hair model described in
paper “A Practical and Controllable Hair and Fur Model for Production Path
Tracing” by Chiang et al.

创建一个BSDF，用于计算基于物理的头发。

Suitable only for curve geometry.

论文 "A Practical and Controllable Hair and Fur Model for Production Path
Tracing "中描述的BSDF。

See [writing a PBR shader](../pbr.html) for information on BSDFs.

中描述的基于物理的毛发模型的计算，该模型由Chiang等人撰写。

`nn`

bumped/shading normal

仅适用于曲线几何。

`tanV`

tangent vector along V

关于BSDF的信息，请参见编写PBR着色器。

`R_v`

Longitudinal roughness value “v” for lobe R (section 4.1 of the paper)

凸起/阴影法线

`R_s`

Azimuthal roughness value “s” for lobe R (section 4.1 of the paper)

沿着V的切线矢量

`TT_v`

Longitudinal roughness value “v” for lobe TT (section 4.1 of the paper)

裂片R的纵向粗糙度值 "v"（论文的4.1节）。

`TT_s`

Azimuthal roughness value “s” for lobe TT (section 4.1 of the paper)

裂片R的方位粗糙度值 "s"（本文第4.1节）。

`TRT_v`

Longitudinal roughness value “v” for lobe TRT (section 4.1 of the paper)

TT叶的纵向粗糙度值 "v"（本文第4.1节）。

`TRT_s`

Azimuthal roughness value “s” for lobe TRT (section 4.1 of the paper)

TT叶的方位粗糙度值 "s"（本文第4.1节）。

`shift`

Represents the cuticle angle, which affects the position of the specular
highlight.Input range of -1 to 1 is internally mapped to -90 to 90 (eg meaning
3-degrees would be 3/90 = 0.03333)

叶片TRT的纵向粗糙度值 "v"（本文第4.1节）。


```c
absorption_coeff
```


The absorption coefficient (section 4.2 of the paper)

裂片TRT的方位粗糙度值 "s"（本文第4.1节）。

`ior`

Index of refraction (eg 1.55)

代表角质层角度，它影响镜面高光的位置。 输入范围为-1至1，内部映射为-90至90（例如意味着3度将是3/90=0.03333）。

