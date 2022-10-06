---
title: diffuse
order: 7
category:
  - houdini
---
    
## 描述

Returns a diffuse BSDF or computes diffuse shading.

![](../../images/rendering/diffuse.png)

```c
bsdf  diffuse(...)
```

```c
bsdf  diffuse(float roughness, ...)
```

```c
bsdf  diffuse(vector nml, ...)
```

```c
bsdf  diffuse(vector nml, float roughness, ...)
```

```c
bsdf  diffuse(vector nml, vector geo_normal, ...)
```

```c
bsdf  diffuse(vector nml, vector geo_normal, float roughness, ...)
```

Diffuse reflections. This BSDF has an albedo of 0.5. If your shader orgeometry
has smooth normals (N and Ng differ) you should avoid thesignature

```c
diffuse(vector nml)
```

since it assumes that theshading normal matches the
geometric normal.

漫反射。该 BSDF 的反照率为 0.5。如果你的着色器或

See [writing a PBR shader](../pbr.html) for information on BSDFs.

几何体有平滑的法线（N 和 Ng 不同），你应该避免使用

```c
vector  diffuse(vector nml, ...)
```

```c
vector  diffuse(vector nml, vector V, float roughness, ...)
```

This form uses theOren-Nayar lighting model to compute the diffuse
illumination for thesurface. The Oren-Nayar lighting model is a more
sophisticated lightingmodel than Lambertian lighting. The V vector represents
a vector fromthe surface to the eye (i.e. -normalize(I)). With a roughness of
0, theOren-Nayar lighting model is equivalent to the Lambertian model.
Asroughness increases toward 1, the illumination changes to mimic
roughermaterials (like clay). The Oren-Nayar form of diffuse() is
moreexpensive than Lambertian diffuse lighting.

签名 diffuse(vector nml)，因为它假定着色法线与几何法线一致。

## Light inclusion/exclusion options

"`categories`",` string``="*" `

Specifies lights to include/exclude by their “category” tags.This is the
preferred include/exclude lights rather than pattern matchinglight names with
the `"lightmask"` keyword argument.

着色法线与几何法线一致。

For example:

关于 BSDF 的信息，请参见编写一个 PBR 着色器。

    diff = diffuse(nml, "lightmask", "hero | fill");

See [light categories](../../render/lights.html#categories) for more
information.

这种形式使用

"`lightmask`",` string``="*" `

When evaluating light and shadow shaders, objects have pre-defined lightmasks.
This mask is usually specified in the geometry object andspecifies a list of
lights which are used to illuminate a surface or fogshader. It is possible to
override the default light mask by specifyinga “lightmask” argument.

Oren-Nayar 照明模型来计算表面的漫反射光照。

For example:

表面的漫反射照明。Oren-Nayar 照明模型是一个比 Lambertian 照明更复杂的照明模型。

    diff = diffuse(nml, "lightmask", "light*,^light2");

â¦will cause all lights whose names begin with “light” except for alight
named “light2” to be considered for diffuse illumination.

模型，比 Lambertian 照明更复杂。V 向量表示从表面到眼睛的一个向量（即

All Houdini scoping patterns, excepting group expansion, are supported:

表面到眼睛的矢量（即-normalize(I)）。粗糙度为 0 时，

- `*` \- wild-card match

Oren-Nayar 照明模型等同于 Lambertian 模型。随着

- `?` \- single character match

粗糙度增加到 1，照明就会改变，以模仿更粗糙的材料（如粘土）。

- `^` \- exclusion operator

材料（如粘土）。Oren-Nayar 形式的漫反射()比 Lambertian 漫反射照明更昂贵。

- ` ` \- character list match

比 Lambertian 漫反射照明更昂贵。
