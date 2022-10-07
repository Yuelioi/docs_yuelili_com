---
title: blackbody
order: 2
category:
  - vex
---

`vector blackbody(float temperature, float luminance)`

给出一个温度（开尔文）和一个亮度值，计算白炽灯黑体的颜色，作为 CIE XYZ 的三模值。

该计算使用快速近似，对 1666K 和 25000K 之间的温度值有效。在这个范围之外的数值会被钳制到最近的有效范围内的数值。

使用[xyztorgb](xyztorgb.html)（"将 CIE XYZ 三基色值转换为线性 sRGB 三基色"）函数，可以将返回的值转换为线性 sRGB 值。

## See also

- [xyztorgb](xyztorgb.html)
- [blackbody](blackbody.html)

|
color

[blackbody](blackbody.html)

[colormap](colormap.html)

[ctransform](ctransform.html)

[environment](environment.html)

[hsvtorgb](hsvtorgb.html)

[luminance](luminance.html)

[ocio_activedisplays](ocio_activedisplays.html)

[ocio_activeviews](ocio_activeviews.html)

[ocio_import](ocio_import.html)

[ocio_transform](ocio_parsecolorspace.html)

[ocio_roles](ocio_roles.html)

[ocio_spaces](ocio_spaces.html)

[ocio_transform](ocio_transform.html)

[rawcolormap](rawcolormap.html)

[rgbtohsv](rgbtohsv.html)

[rgbtoxyz](rgbtoxyz.html)

[xyztorgb](xyztorgb.html)

|
create

[addpoint](addpoint.html)

[addpointattrib](addpointattrib.html)

[addprim](addprim.html)

[addprimattrib](addprimattrib.html)

[addvertex](addvertex.html)

[addvertexattrib](addvertexattrib.html)

[blackbody](blackbody.html)

[pcgenerate](pcgenerate.html)

[removedetailattrib](removedetailattrib.html)

[removepointattrib](removepointattrib.html)

[removepointgroup](removepointgroup.html)

[removeprimattrib](removeprimattrib.html)

[removeprimgroup](removeprimgroup.html)

[removevertexattrib](removevertexattrib.html)

[removevertexgroup](removevertexgroup.html)
