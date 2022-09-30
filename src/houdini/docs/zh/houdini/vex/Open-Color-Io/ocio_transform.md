---
title: ocio_transform
order: 6
category:
  - houdini
---
    
## 描述

Transform colors using Open Color IO

```c
vector  ocio_transform(string dest, vector clr)
```

```c
vector  ocio_transform(string src, string dest, vector clr)
```

```c
vector  ocio_transform(string src, string dest, string looks, vector clr)
```

Transform a three-component color into a new color space.

将一个三成分的颜色转换到一个新的颜色空间。

```c
vector4  ocio_transform(string dest, vector4 clr)
```

```c
vector4  ocio_transform(string src, string dest, vector4 clr)
```

```c
vector4  ocio_transform(string src, string dest, string looks, vector4 clr)
```

Transform a four-component color into a new color space.

将四成分的颜色转换到一个新的颜色空间中。

`src`

The name of the color space to transform from. If this is not given, the
function assumes the space assigned to `"data"`.

要转换的颜色空间的名称。如果没有给出，函数将假定分配给 "data "的空间。

`dest`

The name of the color space to transform to.

要转换的颜色空间的名称。

`looks`

A comma separated list of color gradings (also known as “looks”).

以逗号分隔的颜色等级列表（也称为 "外观"）。

`clr`

The color to transform.

要转换的颜色。
