---
title: ocio_import
order: 4
category:
  - vex
---

在这一页

- [可查询属性](#queryable-attributes)
- [例子](#例子)

`int ocio\_import(string space, string property, int &value)`

`int ocio\_import(string space, string property, vector &value)`

`int ocio\_import(string space, string property, string &value)`

该函数查询与一个颜色空间相关的数据。

如果函数失败，值变量将不会被修改，可能会被留作未初始化。

## 可查询的属性

[¶](#queryable-attributes)

这里的属性列表包括 OCIO 配置文件中定义的大部分属性。

`string name`

色彩空间的名称。

`string family`

色彩空间系列。

`string equalitygroup`

色彩空间的平等组。

`string description`

对色彩空间的描述。

`int isdata`

如果颜色空间适用于非颜色像素数据（如法线、点位置等），则为真。

`string bitdepth`

代表色彩空间比特深度的字符串。

`string allocation`

要么是`uniform`，要么是`lg2`（log2）。

`vector allocationvars`

分配变量（最小、最大、偏移）。

## Examples



```c
cvex test()
{
 string token;
 string sval;
 int ival;
 vector vval;

 // Color spaces may be specified by name or by role
 foreach(space; { "sRGB", "color\_picker" })
 {
 foreach(token; { "name",
 "description",
 "isdata",
 "allocation",
 "allocationvars",
 "description",
 } )
 {
 printf("----------------- %s ---------------------\n", token);
 if (teximport(map, token, sval))
 fprintf(stderr, "'%s' = %s\n", token, sval);
 if (teximport(map, token, ival))
 fprintf(stderr, "'%s' = %d\n", token, ival);
 else if (teximport(map, token, vval))
 fprintf(stderr, "'%s' = %g\n", token, vval);
 }
 }

```

## See also

- [dsmpixel](dsmpixel.html)

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
