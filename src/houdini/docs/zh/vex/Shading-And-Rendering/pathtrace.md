---
title: pathtrace
order: 56
category:
  - houdini
---
    
## 描述

Computes global illumination using PBR for secondary bounces.

| Context(s) | [shading](../contexts/shading.html) |
| ---------- | ----------------------------------- |

```c
vector  pathtrace(vector P, vector N, ...)
```

`pathtrace` works like [irradiance](irradiance.html "Computes irradiance
(global illumination) at the point P with the normal N."), but uses the
physically basedrendering (PBR) engine to do secondary bounces.

pathtraceworks 和 irradiance 一样，但使用基于物理的

`pathtrace` provides a simple (and not very flexible) method of invoking
thePBR rendering engine from micro-polygon rendering. It uses path tracing
andthe `F` (BSDF) output, not `Cf`/`Of` on the hit shaders. Maximum path
depthis controlled by the “diffuse bounces” parameter on the PBR tab of
the[![](../../icons/ROP/mantra.svg)mantra output
driver](../../nodes/out/ifd.html "Renders the scene using Houdini‘sstandard
mantra renderer and generates IFD files.").

渲染（PBR）引擎来进行二次弹跳。

Irradiance caching works the same way it works with [occlusion](occlusion.html "Computes ambient occlusion.").

pathtrace 提供了一种简单（但不是很灵活）的方法，从微观多边形渲染中调用

## Ray options

Tip

When you specify a texture, such as with the `"environment"` keyword,you can
also use the image filtering keyword arguments. See
[environment](environment.html) "Returns the color of the environment
texture.")for a listing of the image filter keyword arguments.

PBR 渲染引擎。它使用路径追踪和

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

F(BSDF)的输出，而不是 Cf/Ofon 的打击着色器。最大的路径深度

Allows an override of the [scope](../contexts/shading_contexts.html#scope) for
ray-intersections.A special scope argument, `scope:self`, will match the
currently shading object.

是由 themantra 输出驱动的 PBR 标签上的 "diffuse bounces "参数控制的。

"`currentobject`",`material`

Used to specify what the current shading object is. For example, when used
with the scope argument, `scope:self` will match the object passed in by this
argument.

辐照度缓存的工作方式与 occlusion 的工作方式相同。

"`maxdist`",` float``=-1 `

The maximum distance to search for objects. This can be used to limit the
search of objects to nearby objects only. If the `maxdist` given is negative,
then it will act as if there is no maximum distance.

当你指定一个纹理时，比如用 "环境 "关键字。

Allows an override of the maximum distance the ray cantravel when testing for
intersections. Some functions (such as[fastshadow](fastshadow.html "Sends a
ray from the position P along the direction specified by thedirection D."))
have the maximum distance implicitly defined (bythe length of the ray) and
should probably avoid using thisoption. However, this option can be used
effectively whencomputing reflections, global illumination, refraction etc.

你也可以使用图像过滤关键字的参数。请参阅 environment 以了解图像过滤关键字参数的清单。

"`variancevar`",`string`

The name of a VEX export variable to use for variance anti-aliasing. The
renderer compares the value with adjacent micropolygons in micropolygon
rendering to decide what shading points need additional samples (using
`vm_variance` [property](../../props/index.html "Properties let you set up
flexible and powerful hierarchies of rendering, shading, lighting, and camera
parameters.") as a threshold). If more samples are required, the algorithm
takes samples up to the specified maximum ray samples.

一个可以被射线击中的对象的列表。 当指定时，scope 会取代为给定射线样式选择的默认范围。 scope:default
"值将导致 scopear 参数使用当前环境的默认范围--就像没有指定该参数一样。

This variable must be imported from the hit surface, so it must be in the list
of imported names (see “importing information back from the ray” below). If
the named variable is not imported, this option will be ignored.

允许覆盖射线断面的 scope。

Variance antialiasing puts more samples in areas of the image with high
variance, for example a sharp shadow edge. It is only used when

```c
vm_dorayvariance
```

is enabled. Otherwise, only the min ray samples (or an
explicitly supplied `"samples"` value) are used for antialiasing of the gather
loop.

一个特殊的作用域参数，即 scope:self，将匹配当前的

Overrides the global variance control (mantra‘s-v option)which is used to
determine anti-aliasing quality of ray tracing.For more information please
refer to the documentation onmantra.

着色对象。

"`angle`",` float``=0 `

The distribution angle (specified in radians). For gather(), rays will be
distributed over this angle. For trace(), the angle is used to indicate the
rate at which the filter width should increase with increasing intersection
distance. Larger angles will cause farther hit surfaces to use larger
derivatives, leading to improved texturing and displacement performance.

用于指定当前的着色对象是什么。例如，当与 scope 参数一起使用时，scope:self 将与该参数所传递的对象相匹配。

To be effective, the samples parameter should also be specified.

搜索对象的最大距离。这可以用来限制搜索对象，只搜索附近的对象。如果 maxdistgiven 是负数，那么它将像没有最大距离一样行动。

"`samples`",` int|float``=1 `

How many samples should be sent out to filter rays. For theirradiance and
occlusion functions, specifying a samplesparameter will override the default
irradiance sampling.

允许重写射线在测试交叉点时的最大距离。

"`environment`",`string`

If the ray sent out to the scene misses everything, thenit‘spossible to
specify an environment map to evaluate.

允许覆盖射线在测试交叉点时的最大行程。一些函数（如 sfasthadow）隐含地定义了最大距离（由

Using the ray‘sdirection, the environment map specifiedwill be evaluated
and the resulting color will be returned.Most likely, it will be necessary to
specify a transformspace for the environment map evaluations.

射线的长度），可能应该避免使用这个

In the case of refractlight and trace the Of and Afvariables will be set to 0
regardless of the backgroundcolor specified. the resulting color.

选项。然而，这个选项可以有效地用于

When an environment map is specified, the filtering optionsfrom texture() are
also supported.

计算反射、全局光照、折射等时，可以有效地使用这个选项。

See [how to create an environment/reflection map](../../render/envmaps.html).

请看如何创建一个环境/反射图。

"`envobject`",`string`

If an environment map is used, the orientation of theenvironment map can be
specified by transforming the rayinto the space of another object, light or
fog object in thescene. In Houdini, null objects can be used to specify
theorientation. For example:

如果使用了环境贴图，环境贴图的方向可以通过转换射线来指定。

    Cf = R*reflectlight(bias, max(R), "environment", "map.rat", "envobject", "null_object_name");

"`envlight`",`string`

If an environment map is used, the orientation of theenvironment map can be
specified by transforming the rayinto the space of a light in the scene.

环境贴图的方向可以通过将射线转换到

"`envtint`",`vector`

If an environment map is used, tint it with this color.

到场景中的另一个物体、光线或雾气物体的空间中去。

"`background`",`vector`

If a ray misses all objects, use this as thebackground color of the scene. In
the case of refractlight andtrace the Of and Af variables will be set to 0
regardless of thebackground color specified.

场景中的另一个物体、光或雾物体的空间来指定环境贴图的方向。在 Houdini 中，空对象可以用来指定

"`distribution`",`string`

**Functions** : [irradiance](irradiance.html "Computes irradiance (global
illumination) at the point P with the normal N."), [occlusion](occlusion.html "Computes ambient occlusion.")

Distribution for computing irradiance. The default is to usea cosine
distribution (diffuse illumination). The possiblevalues for the style are
`"nonweighted"` for uniform samplingor `"cosine"` for cosine weighted
sampling.

方向。比如说。
