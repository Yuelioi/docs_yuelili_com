---
title: ocio_import
order: 3
category:
  - houdini
---
    
## 描述

Imports attributes from OpenColorIO spaces.

On this page |

- Queryable attributes

可查询的属性

- Examples

---|---

```c
int  ocio_import(string space, string property, int &value)
```

```c
int  ocio_import(string space, string property, vector &value)
```

```c
int  ocio_import(string space, string property, string &value)
```

This function queries data associated with a color space.

这个函数查询与颜色空间相关的数据。

If the function fails, the value variable will not be modified,and may be left
uninitialized.

如果该函数失败，valuevariable 将不会被修改。

## Queryable attributes

There list of properties includes most of the properties defined in the OCIO
configuration file:

并且可能被留作未初始化。

`string name`

这里的属性列表包括 OCIO 配置文件中定义的大部分属性。

The name of the color space.

字符串 name

`string family`

颜色空间的名称。

The color space family.

字符串 family

```c
string equalitygroup
```

色彩空间家族。

The equality group for the color space.

字符串 equalitygroup

```c
string description
```

色彩空间的平等组。

A description of the color space.

字符串 description

`int isdata`

颜色空间的描述。

True if the color space is suitable for non-color pixel data (such as normals,
point positions, etc.)

int isdata

```c
string bitdepth
```

如果颜色空间适用于非颜色像素数据（如法线、点位置等），则为真。

A string representing the color space bit depth.

字符串 bitdepth

```c
string allocation
```

代表颜色空间位深度的字符串。

Either `uniform` or `lg2` (log2).

```c
vector allocationvars
```

字符串 allocation

The allocation variables (min, max, offset).

向量 allocationvars

## Examples

    cvex test(){  string    token;  string    sval;  int        ival;  vector    vval;  // Color spaces may be specified by name or by role  foreach(space; { "sRGB", "color_picker" })  {    foreach(token; { "name",      "description",      "isdata",      "allocation",      "allocationvars",      "description",    } )    {      printf("----------------- %s ---------------------\n", token);      if (teximport(map, token, sval))        fprintf(stderr, "'%s' = %s\n", token, sval);      if (teximport(map, token, ival))        fprintf(stderr, "'%s' = %d\n", token, ival);      else if (teximport(map, token, vval))        fprintf(stderr, "'%s' = %g\n", token, vval);    }  }
