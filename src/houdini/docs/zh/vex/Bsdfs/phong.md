---
title: phong
order: 16
category:
  - houdini
---
    
## 描述

Returns a Phong BSDF or computes Phong shading.

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

![](../../images/rendering/phong.png)

```c
bsdf  phong(float exponent, ...)
```

```c
bsdf  phong(vector nml, float exponent, ...)
```

See [writing a PBR shader](../pbr.html) for information on BSDFs.

关于 BSDF 的信息，请参见编写 PBR 着色器。

```c
vector  phong(vector nml, vector V, float shinyness, ...)
```

V represents the normalized vector from the surface to the eye(-normalize(I)).
shinyness is the Phong exponent (typically around20 or higher). roughness
represents the surface roughness (typically0 to 1).

Vre 代表从表面到眼睛的归一化矢量。

## Light inclusion/exclusion options

"`categories`",` string``="*" `

Specifies lights to include/exclude by their “category” tags.This is the
preferred include/exclude lights rather than pattern matchinglight names with
the `"lightmask"` keyword argument.

(-normalize(I)).shinyness 是 Phong 指数（通常在 20 左右或更高）。

For example:

20 或更高）。粗糙度代表表面粗糙度（通常为

    diff = diffuse(nml, "lightmask", "hero | fill");

See [light categories](../../render/lights.html#categories) for more
information.

0 到 1）。

"`lightmask`",` string``="*" `

When evaluating light and shadow shaders, objects have pre-defined lightmasks.
This mask is usually specified in the geometry object andspecifies a list of
lights which are used to illuminate a surface or fogshader. It is possible to
override the default light mask by specifyinga “lightmask” argument.

通过 "类别 "标签指定要包括/排除的灯光。

For example:

这是首选的包含/排除灯光的方法，而不是模式匹配。

    diff = diffuse(nml, "lightmask", "light*,^light2");

â¦will cause all lights whose names begin with “light” except for alight
named “light2” to be considered for diffuse illumination.

而不是用 "lightmask "关键字参数来匹配灯光名称。

All Houdini scoping patterns, excepting group expansion, are supported:

比如说。

- `*` \- wild-card match

更多的信息请参见 "Seelight categories"。

- `?` \- single character match

当评估光影着色器时，对象有预先定义的光罩。

- `^` \- exclusion operator

遮罩。这个遮罩通常是在几何对象中指定的。

- ` ` \- character list match

指定一个用于照亮表面或雾化的灯光列表。
