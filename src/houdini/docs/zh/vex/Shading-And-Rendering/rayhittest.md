---
title: rayhittest
order: 58
category:
  - houdini
---
    
## 描述

Sends a ray from the position P along the direction D.

On this page |

- Area sampling options

区域采样选项

- Ray options

射线选项

---|---  
Context(s) | [displace](../contexts/displace.html)[
fog](../contexts/fog.html)[ light](../contexts/light.html)[
shadow](../contexts/shadow.html)[ surface](../contexts/surface.html)

```c
float  rayhittest(vector P, vector D, float bias, ...)
```

`float rayhittest(vector P, vector D, vector &pHit, vector &nHit, float bias, ...)`

Sends a ray from the position P along the direction D. Thelength of the D
vector represents the farthest distance consideredwhen check for occlusion.

从位置 Palong 向 D 方向发送一条射线。该方向的

Returns the distance to the object intersected. If no object is hit,returns
less than 0.

D 向量的长度代表检查闭塞时考虑的最远距离

If you specify pHit and nHit, they get the position and normalof the hit
surface.

检查是否有遮挡。

In many cases, the area sampling features will not produce usableresults with
the `rayhittest()` function.

返回与物体相交的距离。如果没有物体被击中。

Tip

When hit testing polygons you can get lots of rays missing.In these cases
triangulating the geometry can improves hits.

返回小于 0 的值。

## Area sampling options

For area sampling, you must specify both the angle and sample variadic
parameters. For example:

如果你指定 pHitandnHit，他们会得到被击中的表面的位置和法线。

    surfaceblurry_mirror(float angle = 3; int samples = 16; float bias=0.05){  Cf = reflectlight(bias, 1, "angle", angle, "samples", samples);}

## Ray options

Tip

When you specify a texture, such as with the `"environment"` keyword,you can
also use the image filtering keyword arguments. See
[environment](environment.html) "Returns the color of the environment
texture.")for a listing of the image filter keyword arguments.

的位置和法线。

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

在许多情况下，区域取样特征不会产生可用的

Allows an override of the [scope](../contexts/shading_contexts.html#scope) for
ray-intersections.A special scope argument, `scope:self`, will match the
currently shading object.

的结果。

"`currentobject`",`material`

Used to specify what the current shading object is. For example, when used
with the scope argument, `scope:self` will match the object passed in by this
argument.

在测试多边形的时候，你可以得到很多射线的缺失。

"`maxdist`",` float``=-1 `

The maximum distance to search for objects. This can be used to limit the
search of objects to nearby objects only. If the `maxdist` given is negative,
then it will act as if there is no maximum distance.

在这些情况下，对几何体进行三角测量可以提高命中率。

Allows an override of the maximum distance the ray cantravel when testing for
intersections. Some functions (such as[fastshadow](fastshadow.html "Sends a
ray from the position P along the direction specified by thedirection D."))
have the maximum distance implicitly defined (bythe length of the ray) and
should probably avoid using thisoption. However, this option can be used
effectively whencomputing reflections, global illumination, refraction etc.

对于区域采样，你必须同时指定角度和采样变量参数。比如说。

"`variancevar`",`string`

The name of a VEX export variable to use for variance anti-aliasing. The
renderer compares the value with adjacent micropolygons in micropolygon
rendering to decide what shading points need additional samples (using
`vm_variance` [property](../../props/index.html "Properties let you set up
flexible and powerful hierarchies of rendering, shading, lighting, and camera
parameters.") as a threshold). If more samples are required, the algorithm
takes samples up to the specified maximum ray samples.

当你指定一个纹理时，比如用 "环境 "关键字。

This variable must be imported from the hit surface, so it must be in the list
of imported names (see “importing information back from the ray” below). If
the named variable is not imported, this option will be ignored.

你也可以使用图像过滤关键字的参数。请参阅 environment 以了解图像过滤关键字参数的清单。

Variance antialiasing puts more samples in areas of the image with high
variance, for example a sharp shadow edge. It is only used when

```c
vm_dorayvariance
```

is enabled. Otherwise, only the min ray samples (or an
explicitly supplied `"samples"` value) are used for antialiasing of the gather
loop.

一个可以被射线击中的物体的列表。 当指定时，scope 会取代为给定射线样式选择的默认范围。 scope:default
"值将导致 scopear 参数使用当前环境的默认范围--就像没有指定该参数一样。

Overrides the global variance control (mantra‘s-v option)which is used to
determine anti-aliasing quality of ray tracing.For more information please
refer to the documentation onmantra.

允许覆盖射线断面的 scope。

"`angle`",` float``=0 `

The distribution angle (specified in radians). For gather(), rays will be
distributed over this angle. For trace(), the angle is used to indicate the
rate at which the filter width should increase with increasing intersection
distance. Larger angles will cause farther hit surfaces to use larger
derivatives, leading to improved texturing and displacement performance.

一个特殊的作用域参数，即 scope:self，将匹配当前的

To be effective, the samples parameter should also be specified.

着色对象。

"`samples`",` int|float``=1 `

How many samples should be sent out to filter rays. For theirradiance and
occlusion functions, specifying a samplesparameter will override the default
irradiance sampling.

应该送出多少个样本来过滤射线。对于

"`environment`",`string`

If the ray sent out to the scene misses everything, thenit‘spossible to
specify an environment map to evaluate.

辐照度和闭塞函数，指定一个样本

Using the ray‘sdirection, the environment map specifiedwill be evaluated
and the resulting color will be returned.Most likely, it will be necessary to
specify a transformspace for the environment map evaluations.

参数将覆盖默认的辐照度采样。

In the case of refractlight and trace the Of and Afvariables will be set to 0
regardless of the backgroundcolor specified. the resulting color.

如果发送到场景的光线错过了所有的东西，那么

When an environment map is specified, the filtering optionsfrom texture() are
also supported.

可以指定一个环境图来评估。

See [how to create an environment/reflection map](../../render/envmaps.html).

使用射线的方向，指定的环境贴图将被评估。

"`envobject`",`string`

If an environment map is used, the orientation of theenvironment map can be
specified by transforming the rayinto the space of another object, light or
fog object in thescene. In Houdini, null objects can be used to specify
theorientation. For example:

将被评估并返回结果的颜色。

    Cf = R*reflectlight(bias, max(R), "environment", "map.rat", "envobject", "null_object_name");

"`envlight`",`string`

If an environment map is used, the orientation of theenvironment map can be
specified by transforming the rayinto the space of a light in the scene.

最有可能的是，有必要为环境贴图的评估指定一个变换空间。

"`envtint`",`vector`

If an environment map is used, tint it with this color.

空间来进行环境贴图的评估。

"`background`",`vector`

If a ray misses all objects, use this as thebackground color of the scene. In
the case of refractlight andtrace the Of and Af variables will be set to 0
regardless of thebackground color specified.

在 refractlight 和 trace 的情况下，Of 和 Af

"`distribution`",`string`

**Functions** : [irradiance](irradiance.html "Computes irradiance (global
illumination) at the point P with the normal N."), [occlusion](occlusion.html "Computes ambient occlusion.")

Distribution for computing irradiance. The default is to usea cosine
distribution (diffuse illumination). The possiblevalues for the style are
`"nonweighted"` for uniform samplingor `"cosine"` for cosine weighted
sampling.

变量将被设置为 0，而不管指定的背景
