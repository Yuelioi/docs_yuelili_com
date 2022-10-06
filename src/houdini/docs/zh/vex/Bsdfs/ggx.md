---
title: ggx
order: 10
category:
  - houdini
---
    
## 描述

Returns a ggx BSDF.

| Since | 18.0 |
| ----- | ---- |

`bsdf ggx(vector ng, vector nn, vector xg, vector yg, vector F0, vector F90, float alphax, float alphay, int masking, int fresblend, float eta, float reflect, float refract, int reflectmask, int refractmask, float dispersion, ...)`

Creates a BSDF for computation of the GGX microfacet model, used for rough
specular reflection and refraction.

创建一个 BSDF，用于计算 GGX microfacet 模型。

See [writing a PBR shader](../pbr.html) for information on BSDFs.

用于粗糙的镜面反射和折射。

`ng`

Normalized geometry normal

有关 BSDF 的信息，请参见编写 PBR 着色器。

`nn`

Normalized bumped/shading normal

正常化的几何法线

`xg`

Normalized x tangent vector

归一化的凹凸/阴影法线

`yg`

Normalized y tangent vector

归一化的 X 切线矢量

`F0`

Color tint at oblique angles

归一化的 y 切向量

`F90`

Color tint at grazing angles

斜角上的色调

`alphax`

Roughness along the x tangent vector

掠过角度的颜色色调

`alphay`

Roughness along the y tangent vector (use the same value as alphax for
isotropic)

沿着 x 切向量的粗糙度

`masking`

Enable/Disable microfacet masking

沿着 y 切向量的粗糙度（对于各向同性，使用与 alphax 相同的值）。

`fresblend`

Enable/Disable fresnel

启用/禁用 microfacet masking

`eta`

Index of refraction

启用/禁用菲涅尔

`reflect`

Explicit scalar on reflection (0->1).Or -1 to let the function decide itself
on the appriate value based on geometric information.

折射率

`refract`

Explicit scalar on refraction (0->1).Or -1 to let the function decide itself
on the appriate value based on geometric information.

反射时明确的标量（0->1）。 或-1，让函数根据几何信息自行决定合适的值。

`reflectmask`

Bitmask representing the desired reflection behaviour.Simply passing in

```c
bouncemask(reflectlabel)
```

will suffice

折射时明确的标量（0->1）。 或-1，让函数根据几何信息自行决定合适的值。

`refractmask`

Bitmask representing the desired refraction behaviour.Simply passing in

```c
bouncemask(refractlabel)
```

will suffice

代表所需反射行为的比特掩码。 只需传入 bouncemask(reflectlabel)就足够了。

`dispersion`

Amount of dispersion

代表期望的折射行为的位掩码。 只要通过 bouncemask(refractlabel)就够了。

## Light inclusion/exclusion options

Show/hide arguments

"`categories`",` string``="*" `

Specifies lights to include/exclude by their “category” tags.This is the
preferred include/exclude lights rather than pattern matchinglight names with
the `"lightmask"` keyword argument.

分散的数量

For example:

通过 "类别 "标签指定要包括/排除的灯光。

    diff = diffuse(nml, "lightmask", "hero | fill");

See [light categories](../../render/lights.html#categories) for more
information.

更多信息，请参见 Seelight 类别。

"`lightmask`",` string``="*" `

When evaluating light and shadow shaders, objects have pre-defined lightmasks.
This mask is usually specified in the geometry object andspecifies a list of
lights which are used to illuminate a surface or fogshader. It is possible to
override the default light mask by specifyinga “lightmask” argument.

在评估光影着色器时，对象有预定义的光影遮罩。

For example:

遮罩。这个遮罩通常是在几何对象中指定的。

    diff = diffuse(nml, "lightmask", "light*,^light2");

â¦will cause all lights whose names begin with “light” except for alight
named “light2” to be considered for diffuse illumination.

指定一个用于照亮表面或雾化的灯光列表。

All Houdini scoping patterns, excepting group expansion, are supported:

着色器。我们可以通过指定 "lightmask "参数来覆盖默认的光罩。

- `*` \- wild-card match

一个 "lightmask "参数来覆盖默认的光罩。

- `?` \- single character match

比如说。

- `^` \- exclusion operator

将导致所有名称以 "light "开头的灯光，除了一个名为 "light2 "的灯光之外，其余的灯光都将被忽略。

- ` ` \- character list match

名为 "light2 "的灯光被考虑为漫反射照明。
