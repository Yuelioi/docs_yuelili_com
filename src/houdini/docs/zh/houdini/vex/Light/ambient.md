---
title: ambient
order: 1
category:
  - houdini
---
    
## 描述

Returns the color of ambient light in the scene.

Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ surface](../contexts/surface.html)  
---|---

```c
vector  ambient(...)
```

Returns the color of ambient light in the scene.

返回场景中环境光的颜色。

## Light inclusion/exclusion options

"`categories`",` string``="*" `

Specifies lights to include/exclude by their “category” tags.This is the
preferred include/exclude lights rather than pattern matchinglight names with
the `"lightmask"` keyword argument.

通过他们的 "类别 "标签指定要包括/排除的灯光。

For example:

这是首选的包含/排除灯光的方法，而不是用 "lightmask "关键字来匹配灯光名称的模式。

    diff = diffuse(nml, "lightmask", "hero | fill");

See [light categories](../../render/lights.html#categories) for more
information.

而不是用 "lightmask "关键字参数来匹配灯光名称。

"`lightmask`",` string``="*" `

When evaluating light and shadow shaders, objects have pre-defined lightmasks.
This mask is usually specified in the geometry object andspecifies a list of
lights which are used to illuminate a surface or fogshader. It is possible to
override the default light mask by specifyinga “lightmask” argument.

比如说。

For example:

更多的信息请参见 "Seelight categories"。

    diff = diffuse(nml, "lightmask", "light*,^light2");

â¦will cause all lights whose names begin with “light” except for alight
named “light2” to be considered for diffuse illumination.

当评估光影着色器时，对象有预先定义的光罩。

All Houdini scoping patterns, excepting group expansion, are supported:

遮罩。这个遮罩通常是在几何对象中指定的。

- `*` \- wild-card match

指定一个用于照亮表面或雾化的灯光列表。

- `?` \- single character match

着色器。我们可以通过指定 "lightmask "参数来覆盖默认的光罩。

- `^` \- exclusion operator

一个 "lightmask "参数来覆盖默认的光罩。

- ` ` \- character list match

比如说。
