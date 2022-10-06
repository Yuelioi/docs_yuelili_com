---
title: illuminance
order: 37
category:
  - houdini
---
    
    # illuminance

Loops through all light sources in the scene, calling the light shader for
each light source to set the `Cl` and `L` global variables.

On this page |

- Overview

- Light inclusion/exclusion options

光的包含/排除选项

- Sending information to the light‘sshader

发送信息给灯光的着色器

- Message passing

信息传递

- lightexport keyword argument

lightexport 关键字参数

---|---

## Overview

// Need to indent this so the include below doesn‘t go under this heading

// 需要缩进这个，这样下面的包含就不会在这个标题下了。

    illuminance(position, [axis], [angle], [light_typemask], [lightmask]){// Here, Cl and L will be set to the value/direction for the// current light source.// To force the shadow shader to be called, use:// shadow(Cl);}

The shadow shader is not called unless you explicitly call it. However, once
the shadow shader has been called, the value of `Cl` will be changed for the
duration of the surface shader. The shadow shader is automatically called when
using any of the built-in lighting calls (e.g. [diffuse](diffuse.html) "Returns
a diffuse BSDF or computes diffuse shading."), [specular](specular.html) "Returns a specular BSDF or computes specular shading."),
[ambient](ambient.html) "Returns the color of ambient light in the scene.")).

阴影着色器不会被调用，除非你明确地调用它。然而，一旦阴影着色器被调用，Cl 的值就会在表面着色器的期间内被改变。当使用任何内置的光照调用（比如漫反射、镜面反射、环境反射）时，阴影着色器会被自动调用。

The default value for the axis is the surface normal. The default value for
the angle is PI/2. The default value for the light mask is
LIGHT_DIFFUSE|LIGHT_SPECULAR (please see shading.h for the light definitions).

轴的默认值是表面法线。角度的默认值是 PI/2。光照遮罩的默认值是 LIGHT_DIFFUSE|LIGHT_SPECULAR（关于光照的定义，请看 shading.h）。

The `illuminance` statement loops through all light sources for which `dot(L, axis) > cos(angle)`.

光照语句在所有光源中循环，其中 dot(L, axis) > cos(angle)。

## Light inclusion/exclusion options

"`categories`",` string``="*" `

Specifies lights to include/exclude by their “category” tags.This is the
preferred include/exclude lights rather than pattern matchinglight names with
the `"lightmask"` keyword argument.

通过 "类别 "标签指定要包括/排除的灯光。

For example:

这是首选的包含/排除灯光的方法，而不是模式匹配

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

## Sending information to the light‘sshader

You can give additional pairs of string/value arguments to `illuminance` to
pass named values to each light‘sshader. For example, to pass the value of
the `N` variable as `orgN`:

将导致所有名称以 "light "开头的灯光，除了一个名为 "light2 "的灯光之外，其余的灯光都将被忽略。

    illuminance (P, nf, M_PI/2, "orgN", N) {...}

In the light‘sshader, you can receive the value from the illuminance loop
with the [simport](simport.html "Imports a variable sent by a surface shader
in an illuminance loop.") function.

在 lightâs shader 中，你可以用 simport 函数接收来自 illuminance 循环的值。

    vector orgN;simport("orgN", orgN);

The `simport` function returns 1 if the import succeeds and 0 otherwise, so
you can use it as the condition in an `if` statement.

如果导入成功，simport 函数返回 1，否则返回 0，所以你可以用它作为 ifstatement 的条件。

Here‘sa full example:

下面是一个完整的例子。

    surfaceexporter(){vector nf = frontface(normalize(N), I);Cf = 0;illuminance(P, nf, M_PI/2, "orgN", N){Cf += Cl;}lightimporter(){vector orgN;if (!simport("orgN", orgN))orgN = N;// Use original NCl = orgN;}

## Message passing

Within the illuminance loop, you can retrieve values from the light shaderwith
the [limport](limport.html "Imports a variable from the light shader for the
surface.") function.

在照度循环中，你可以用 limport 函数从光照器中获取数值。

The light shader can retrieve any “keyword” arguments passed to the
illuminancestatement with the [simport](simport.html "Imports a variable sent
by a surface shader in an illuminance loop.") function.

用 limport 函数获取数值。

For example, to send down the vector variable `uv` to the light shaderâ¦

光照器可以用 limport 函数检索任何传递给 illuminance 的 "关键字 "参数。

    vector uv = set(s, t, 0);illuminance(P, dir, "uv", uv) { ... }

The light shader would be able to read this usingâ¦

语句的任何 "关键字 "参数。

    vector   uv;if (simport("uv", uv))printf("Imported: %g from surface\n", uv);

## lightexport keyword argument

You can supply the extra string argument `"lightexport"` followed bya string
argument containing the name(s) of the exported variables toassign within the
loop.

例如，将矢量变量 uv 下发到 light shader 上。

In some shaders, multiple illuminance loops are used to define differentlight
contributions. The `lightexport` argument is useful in these casesto specify
which variables should be exported from the differentloops.

光照器就可以用""来读取这个参数。

The `lightexport` value can be a space-separated list of wildcardpatterns. For
example,

```c
illuminance(pos, dir, "lightexport", "Front*")
```

exports variables
whose names start with `Front`.

你可以提供额外的字符串参数 "lightexport"，后面是

    surfacelight_export_test(export vector diff=0;export vector spec=0){vector   nn = normalize(frontface(N, I));vector   vv = -normalize(I);vector   clr;Cf = 0;// This illuminance loop only exports to the "diff" variableilluminance(P, nn, "lightexport", "diff"){clr = Cl * diffuseBRDF(normalize(L), nn);Cf += clr;diff = clr;}// This illuminance loop only exports to the "spec" variableilluminance(P, nn, "lightexport", "spec"){clr = Cl * specularBRDF(normalize(L), nn, vv, 0.1);Cf += clr;spec = clr;}
