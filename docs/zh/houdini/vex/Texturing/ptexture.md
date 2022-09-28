---
title: ptexture
order: 8
category:
  - houdini
---
    
## 描述

Computes a filtered sample from a ptex texture map. Use texture instead.

```c
<type> ptexture(string map, int face_id, ...)
```

```c
<type> ptexture(string map, int face_id, float s, float t, ...)
```

This function is deprecated since ptex support has been integrated into the
`texture()` function.

由于 ptex 支持已经被整合到 texture()函数中，这个函数已经被废弃。

## Optional arguments

| Keyword | Values |
| ------- | ------ |

`channel`td>>An integer value indicating which channel of the ptex image to
use.

channeltd>>

`filter`td>>

`filtersharp`

|

A floating point value indicating the filter sharpness.This is only valid for
the bicubic filter.The range is 0-1 (the default is 1.0).

一个整数值，表示要使用 ptex 图像的哪个通道。

`lerp`

|

An boolean value indicating whether to interpolate between Mip maps.The
default is true.

一个浮点值，表示过滤器的清晰度。 这只对双三次元滤波器有效。 范围是 0-1（默认是 1.0）。

`blur`

|

The texture blur value used for evaluation (default 0).

一个布尔值，表示是否在 Mip 地图之间进行插值。 默认为 true。

`width`

|

The texture width value used for evaluation (default 1).

用于评估的纹理模糊值（默认为 0）。
