---
title: occlusion
order: 55
category:
  - houdini
---
    
## 描述

Computes ambient occlusion.

On this page |

- Sample adaptation options

适应性选项样本

- Ray options

光线选项

---|---  
Context(s) | [shading](../contexts/shading.html)

```c
vector  occlusion(vector P, vector N, ...)
```

Computes ambient occlusion at the point P with the normal N. Just asin the
[irradiance](irradiance.html "Computes irradiance (global illumination) at
the point P with the normal N.") function, the hemisphere issampled. However,
unlike irradiance, surfaces intersected during thehemisphere sampling are not
shaded. For this function to workproperly, either a constant background color
or an environment mapmust be specified in the[optional scope
parameters](../contexts/shading_contexts.html#scope).

计算法线为 N 的点 P 的环境遮挡。

`void occlusion(float &coverage, vector &missed_direction, vector P, vector N, ...)`

Instead of computing color information from ambient occlusion, thisform
computes the coverage (the percentage of occlusion) and theaverage direction
of empty space. The average direction can be used tolook up the color in a
pre-blurred environment map.

在其辐射函数中，半球被

## Sample adaptation options

"`adaptive`",

`1` or `0`. Turns on an automatic optimization that will reduce thenumber of
samples when there is little variation in occlusionabove the sample point.
This can improve performance at theexpense of some possible flickering or
additional noise.

采样。然而，与辐照度不同的是，在半球取样过程中相交的表面不会有阴影。

Show/hide arguments

"`bias`",` float``=0.001 `

Ray-tracing bias. Gives control over self-intersection.

半球采样过程中相交的表面不会被遮蔽。为了使这个函数正常工作

## Ray options

Tip

When you specify a texture, such as with the `"environment"` keyword,you can
also use the image filtering keyword arguments. See
[environment](environment.html) "Returns the color of the environment
texture.")for a listing of the image filter keyword arguments.

为了使这个函数正常工作，必须在可选的选项中指定一个恒定的背景颜色或环境地图

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

必须在 optional scope 参数中指定一个恒定的背景颜色或环境图。

Allows an override of the [scope](../contexts/shading_contexts.html#scope) for
ray-intersections.A special scope argument, `scope:self`, will match the
currently shading object.

这个函数不是从环境遮挡中计算颜色信息，而是

"`currentobject`",`material`

Used to specify what the current shading object is. For example, when used
with the scope argument, `scope:self` will match the object passed in by this
argument.

形式计算覆盖率（闭塞的百分比）和

"`maxdist`",` float``=-1 `

The maximum distance to search for objects. This can be used to limit the
search of objects to nearby objects only. If the `maxdist` given is negative,
then it will act as if there is no maximum distance.

空的平均方向。平均方向可以用来

Allows an override of the maximum distance the ray cantravel when testing for
intersections. Some functions (such as[fastshadow](fastshadow.html "Sends a
ray from the position P along the direction specified by thedirection D."))
have the maximum distance implicitly defined (bythe length of the ray) and
should probably avoid using thisoption. However, this option can be used
effectively whencomputing reflections, global illumination, refraction etc.

在一个预先模糊的环境地图中查找颜色。

"`variancevar`",`string`

The name of a VEX export variable to use for variance anti-aliasing. The
renderer compares the value with adjacent micropolygons in micropolygon
rendering to decide what shading points need additional samples (using
`vm_variance` [property](../../props/index.html "Properties let you set up
flexible and powerful hierarchies of rendering, shading, lighting, and camera
parameters.") as a threshold). If more samples are required, the algorithm
takes samples up to the specified maximum ray samples.

1 或 0。打开一个自动优化功能，在变化不大的情况下，会减少

This variable must be imported from the hit surface, so it must be in the list
of imported names (see “importing information back from the ray” below). If
the named variable is not imported, this option will be ignored.

开启自动优化功能，当采样点上方的闭塞情况变化不大时，将减少采样的数量。

Variance antialiasing puts more samples in areas of the image with high
variance, for example a sharp shadow edge. It is only used when

```c
vm_dorayvariance
```

is enabled. Otherwise, only the min ray samples (or an
explicitly supplied `"samples"` value) are used for antialiasing of the gather
loop.

采样点上方的闭塞程度变化不大时，开启自动优化功能，减少采样次数。这可以提高性能，但

Overrides the global variance control (mantra‘s-v option)which is used to
determine anti-aliasing quality of ray tracing.For more information please
refer to the documentation onmantra.

牺牲一些可能的闪烁或额外的噪声。

"`angle`",` float``=0 `

The distribution angle (specified in radians). For gather(), rays will be
distributed over this angle. For trace(), the angle is used to indicate the
rate at which the filter width should increase with increasing intersection
distance. Larger angles will cause farther hit surfaces to use larger
derivatives, leading to improved texturing and displacement performance.

光线追踪偏置。提供对自相交的控制。

To be effective, the samples parameter should also be specified.

当你指定一个纹理，比如用 "环境 "关键字。

"`samples`",` int|float``=1 `

How many samples should be sent out to filter rays. For theirradiance and
occlusion functions, specifying a samplesparameter will override the default
irradiance sampling.

你也可以使用图像过滤关键字的参数。参见 environment 获取图像过滤关键字参数的列表。

"`environment`",`string`

If the ray sent out to the scene misses everything, thenit‘spossible to
specify an environment map to evaluate.

一个可以被射线击中的对象的列表。 当指定时，scope 会取代为给定射线样式选择的默认范围。 scope:default
"值将导致 scopear 参数使用当前环境的默认范围--就像没有指定该参数一样。

Using the ray‘sdirection, the environment map specifiedwill be evaluated
and the resulting color will be returned.Most likely, it will be necessary to
specify a transformspace for the environment map evaluations.

使用射线的方向，指定的环境地图

In the case of refractlight and trace the Of and Afvariables will be set to 0
regardless of the backgroundcolor specified. the resulting color.

将被评估并返回所得到的颜色。

When an environment map is specified, the filtering optionsfrom texture() are
also supported.

最有可能的是，有必要为环境贴图的评估指定一个变换空间。

See [how to create an environment/reflection map](../../render/envmaps.html).

空间来进行环境贴图评估。

"`envobject`",`string`

If an environment map is used, the orientation of theenvironment map can be
specified by transforming the rayinto the space of another object, light or
fog object in thescene. In Houdini, null objects can be used to specify
theorientation. For example:

在 refractlight 和 trace 的情况下，Of 和 Af

    Cf = R*reflectlight(bias, max(R), "environment", "map.rat", "envobject", "null_object_name");

"`envlight`",`string`

If an environment map is used, the orientation of theenvironment map can be
specified by transforming the rayinto the space of a light in the scene.

变量将被设置为 0，而不管指定的背景

"`envtint`",`vector`

If an environment map is used, tint it with this color.

的颜色。

"`background`",`vector`

If a ray misses all objects, use this as thebackground color of the scene. In
the case of refractlight andtrace the Of and Af variables will be set to 0
regardless of thebackground color specified.

当环境贴图被指定时，来自 texture()的过滤选项也被支持。

"`distribution`",`string`

**Functions** : [irradiance](irradiance.html "Computes irradiance (global
illumination) at the point P with the normal N."), [occlusion](occlusion.html "Computes ambient occlusion.")

Distribution for computing irradiance. The default is to usea cosine
distribution (diffuse illumination). The possiblevalues for the style are
`"nonweighted"` for uniform samplingor `"cosine"` for cosine weighted
sampling.

纹理()的过滤选项也被支持。
