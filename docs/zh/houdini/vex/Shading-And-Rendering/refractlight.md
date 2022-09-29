---
title: refractlight
order: 63
category:
  - houdini
---
    
## 描述

Computes the illumination of surfaces refracted by the current  
surface.

On this page |

- Light inclusion/exclusion options

光线纳入/排除选项

- Area sampling options

区域采样选项

- Ray options

光线选项

- Examples

---|---  
Context(s) | [shading](../contexts/shading.html)

`void refractlight(vector &cf, vector &of, float &af, vector P, vector D, float bias, float max_contrib, ...)`

`void refractlight(vector &cf, vector &of, float &af, vector P, vector N, vector I, float eta, float bias, float max_contrib, ...)`

Computes the illumination of surfaces refracted by the current
surface.Computes and outputs the output color (cf), opacity (of) andalpha
(af). See [opacity vs. alpha](../contexts/shading_contexts.html#opacity) .

计算被当前表面折射的表面的照度。

bias is typically a small number (for example 0.005) used to helpeliminate
self-reflection.

计算并输出输出的颜色（cf）、不透明度（of）和

max_contrib tells the renderer how much the reflected light willcontribute to
the final color of the pixel. This has no effect on theresultant color.

alpha (af)。参见 opacity 与 alpha。

The first form of the refractlight() function takes a position anddirection,
typically computed by the [refract](refract.html) "Returns the refraction ray
given an incoming direction, thenormalized normal and an index of
refraction.") or[fresnel](fresnel.html "Computes the fresnel
reflection/refraction contributions given anincoming vector, surface normal
(both normalized), and an index ofrefraction (eta).") functions.

biasis 通常是一个小数字（例如 0.005），用来帮助

To prevent the renderer from computing standard transparency (i.e.non-
refracted transparency), the Of variable must be set to {1,1,1} tomake the
surface “opaque”. The Af variable can be set to any arbitraryvalue.

消除自反射。

## Light inclusion/exclusion options

"`categories`",` string``="*" `

Specifies lights to include/exclude by their “category” tags.This is the
preferred include/exclude lights rather than pattern matchinglight names with
the `"lightmask"` keyword argument.

max_contribtells the renderer how much the reflect light will

For example:

对像素的最终颜色的贡献。这不会影响到

    diff = diffuse(nml, "lightmask", "hero | fill");

See [light categories](../../render/lights.html#categories) for more
information.

结果的颜色没有影响。

"`lightmask`",` string``="*" `

When evaluating light and shadow shaders, objects have pre-defined lightmasks.
This mask is usually specified in the geometry object andspecifies a list of
lights which are used to illuminate a surface or fogshader. It is possible to
override the default light mask by specifyinga “lightmask” argument.

refractlight()函数的第一种形式需要一个位置和方向。

For example:

方向，通常是由 Refractorfresnelfunctions 计算出来的。

    diff = diffuse(nml, "lightmask", "light*,^light2");

â¦will cause all lights whose names begin with “light” except for alight
named “light2” to be considered for diffuse illumination.

为了防止渲染器计算标准的透明度（也就是

All Houdini scoping patterns, excepting group expansion, are supported:

为了防止渲染器计算出标准的透明度（即非折射的透明度），Of 变量必须被设置为{1,1,1}，以使表面 "不透明"。

- `*` \- wild-card match

使得表面 "不透明"。Af 变量可以被设置为任何任意的

- `?` \- single character match

值。

- `^` \- exclusion operator

通过 "类别 "标签指定要包括/排除的灯光。

- ` ` \- character list match

这是首选的包含/排除灯光的方法，而不是模式匹配的方法。

## Area sampling options

For area sampling, you must specify both the angle and sample variadic
parameters. For example:

而不是用 "lightmask "关键字参数来匹配灯光名称。

    surfaceblurry_mirror(float angle = 3; int samples = 16; float bias=0.05){  Cf = reflectlight(bias, 1, "angle", angle, "samples", samples);}

## Ray options

Tip

When you specify a texture, such as with the `"environment"` keyword,you can
also use the image filtering keyword arguments. See
[environment](environment.html) "Returns the color of the environment
texture.")for a listing of the image filter keyword arguments.

当你指定一个纹理时，比如用 "环境 "关键字。

Show/hide arguments

"`scope`",`string`

A list of objects which can be hit by the rays.When specified, `scope`
overrides the default scope that would have been selected for the given
`raystyle`.The

```c
"scope:default"
```

value will cause the `scope` argument to use
the default scope for the current context - as if the argument were not
specified.

你也可以使用图像过滤关键字参数。请参阅 "环境"，了解图像过滤关键字参数的清单。

Allows an override of the [scope](../contexts/shading_contexts.html#scope) for
ray-intersections.A special scope argument, `scope:self`, will match the
currently shading object.

一个可以被射线击中的对象的列表。 当指定时，scope 会取代为给定射线样式选择的默认范围。 scope:default
"值将导致 scopear 参数使用当前环境的默认范围--就像没有指定该参数一样。

"`currentobject`",`material`

Used to specify what the current shading object is. For example, when used
with the scope argument, `scope:self` will match the object passed in by this
argument.

允许覆盖射线断面的 scope。

"`maxdist`",` float``=-1 `

The maximum distance to search for objects. This can be used to limit the
search of objects to nearby objects only. If the `maxdist` given is negative,
then it will act as if there is no maximum distance.

一个特殊的作用域参数，即 scope:self，将匹配当前的

Allows an override of the maximum distance the ray cantravel when testing for
intersections. Some functions (such as[fastshadow](fastshadow.html "Sends a
ray from the position P along the direction specified by thedirection D."))
have the maximum distance implicitly defined (bythe length of the ray) and
should probably avoid using thisoption. However, this option can be used
effectively whencomputing reflections, global illumination, refraction etc.

着色对象。

"`variancevar`",`string`

The name of a VEX export variable to use for variance anti-aliasing. The
renderer compares the value with adjacent micropolygons in micropolygon
rendering to decide what shading points need additional samples (using
`vm_variance` [property](../../props/index.html "Properties let you set up
flexible and powerful hierarchies of rendering, shading, lighting, and camera
parameters.") as a threshold). If more samples are required, the algorithm
takes samples up to the specified maximum ray samples.

用于指定当前的着色对象是什么。例如，当与 scope 参数一起使用时，scope:self 将与该参数所传递的对象相匹配。

This variable must be imported from the hit surface, so it must be in the list
of imported names (see “importing information back from the ray” below). If
the named variable is not imported, this option will be ignored.

搜索对象的最大距离。这可以用来限制搜索对象，只搜索附近的对象。如果 maxdistgiven 是负数，那么它将像没有最大距离一样行动。

Variance antialiasing puts more samples in areas of the image with high
variance, for example a sharp shadow edge. It is only used when

```c
vm_dorayvariance
```

is enabled. Otherwise, only the min ray samples (or an
explicitly supplied `"samples"` value) are used for antialiasing of the gather
loop.

允许重写射线在测试交叉点时的最大距离。

Overrides the global variance control (mantra‘s-v option)which is used to
determine anti-aliasing quality of ray tracing.For more information please
refer to the documentation onmantra.

允许覆盖射线在测试交叉点时的最大行程。一些函数（如 sfasthadow）隐含地定义了最大距离（由

"`angle`",` float``=0 `

The distribution angle (specified in radians). For gather(), rays will be
distributed over this angle. For trace(), the angle is used to indicate the
rate at which the filter width should increase with increasing intersection
distance. Larger angles will cause farther hit surfaces to use larger
derivatives, leading to improved texturing and displacement performance.

射线的长度），可能应该避免使用这个

To be effective, the samples parameter should also be specified.

选项。然而，这个选项可以有效地用于

"`samples`",` int|float``=1 `

How many samples should be sent out to filter rays. For theirradiance and
occlusion functions, specifying a samplesparameter will override the default
irradiance sampling.

计算反射、全局光照、折射等时，可以有效地使用这个选项。

"`environment`",`string`

If the ray sent out to the scene misses everything, thenit‘spossible to
specify an environment map to evaluate.

用于差异抗锯齿的 VEX 导出变量的名称。渲染器会在微多边形渲染中与相邻的微多边形进行比较，以决定哪些阴影点需要额外的样本（使用 vm_varianceproperty 作为阈值）。如果需要更多的样本，算法会在指定的最大射线样本范围内取样。

Using the ray‘sdirection, the environment map specifiedwill be evaluated
and the resulting color will be returned.Most likely, it will be necessary to
specify a transformspace for the environment map evaluations.

这个变量必须从击中的表面导入，所以它必须在导入的名称列表中（见下文 "从射线导入信息"）。如果命名的变量没有被导入，这个选项将被忽略。

In the case of refractlight and trace the Of and Afvariables will be set to 0
regardless of the backgroundcolor specified. the resulting color.

方差抗锯齿在图像的高方差区域放置更多样本，例如尖锐的阴影边缘。它只在 nvm_dorayvariance 被启用时使用。否则，只有最小射线样本（或明确提供的
"样本 "值）被用于采集循环的抗混叠。

When an environment map is specified, the filtering optionsfrom texture() are
also supported.

覆盖全局方差控制（mantraâs -v 选项）。

See [how to create an environment/reflection map](../../render/envmaps.html).

它用于确定光线追踪的抗锯齿质量。

"`envobject`",`string`

If an environment map is used, the orientation of theenvironment map can be
specified by transforming the rayinto the space of another object, light or
fog object in thescene. In Houdini, null objects can be used to specify
theorientation. For example:

欲了解更多信息，请参考关于

    Cf = R*reflectlight(bias, max(R), "environment", "map.rat", "envobject", "null_object_name");

"`envlight`",`string`

If an environment map is used, the orientation of theenvironment map can be
specified by transforming the rayinto the space of a light in the scene.

mantra 的文档。

"`envtint`",`vector`

If an environment map is used, tint it with this color.

如果使用了环境贴图，就用这个颜色进行着色。

"`background`",`vector`

If a ray misses all objects, use this as thebackground color of the scene. In
the case of refractlight andtrace the Of and Af variables will be set to 0
regardless of thebackground color specified.

如果光线错过了所有的物体，就用这个颜色作为

"`distribution`",`string`

**Functions** : [irradiance](irradiance.html "Computes irradiance (global
illumination) at the point P with the normal N."), [occlusion](occlusion.html "Computes ambient occlusion.")

Distribution for computing irradiance. The default is to usea cosine
distribution (diffuse illumination). The possiblevalues for the style are
`"nonweighted"` for uniform samplingor `"cosine"` for cosine weighted
sampling.

场景的背景颜色。在 refractlight 和 trace 的情况下

## Examples

    surfaceglass(float eta=1.3, bias = 0.005){  float  Kr, Kt;  vector  R, T;  vector  cf, of;  float  af;  frensel(normalize(I), normalize(N), eta, Kr, Kt, R, T);  Cf = Kr * reflectlight(P, R, bias, Kr);  refractlight(cf, of, af, P, T, bias, Kt);  Cf += Kt * cf;  Af = clamp(Kr + af*Kt, 0, 1);  Of = 1;}
