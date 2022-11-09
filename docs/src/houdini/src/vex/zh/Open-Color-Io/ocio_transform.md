---
title: ocio_transform
order: 8
category:
  - vex
---

`vector ocio_transform(string dest, vector clr)`

`vector ocio_transform(string src, string dest, vector clr)`

`vector ocio_transform(string src, string dest, string looks, vector clr)`

将一个三成分的颜色转化为一个新的颜色空间。

`vector4 ocio_transform(string dest, vector4 clr)`

`vector4 ocio_transform(string src, string dest, vector4 clr)`

`vector4 ocio_transform(string src, string dest, string looks, vector4 clr)`

将一个四成分的颜色转化为一个新的颜色空间。

## Arguments

`src`

要转换的颜色空间的名称。如果没有给出，该函数将假定分配给 "data "的空间。

`dest`

要转换的颜色空间的名称。

`looks`

一个以逗号分隔的颜色等级列表（也称为 "外观"）。

`clr`

要改造的颜色。

## See also

- [ocio_spaces](ocio_spaces.html)

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
ocio

[ocio_activedisplays](ocio_activedisplays.html)

[ocio_activeviews](ocio_activeviews.html)

[ocio_import](ocio_import.html)

[ocio_transform](ocio_parsecolorspace.html)

[ocio_roles](ocio_roles.html)

[ocio_spaces](ocio_spaces.html)

[ocio_transform](ocio_transform.html)
