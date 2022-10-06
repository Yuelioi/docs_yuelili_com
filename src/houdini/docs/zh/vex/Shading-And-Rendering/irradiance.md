---
title: irradiance
order: 40
category:
  - houdini
---
    
## 描述

Computes irradiance (global illumination) at the point P with the normal N.

On this page |

- Sample adaptation options

Sample adaptation options

- Ray options

Ray options

---|---  
Context(s) | [shading](../contexts/shading.html)

```c
vector  irradiance(vector P, vector N, ...)
```

Computes irradiance (global illumination) at the point P with the normalN.

Computes irradiance (global illumination) at the point P with the normal

## Sample adaptation options

"`adaptive`",

`1` or `0`. Turns on an automatic optimization that will reduce thenumber of
samples when there is little variation in occlusionabove the sample point.
This can improve performance at theexpense of some possible flickering or
additional noise.

N.

Show/hide arguments

"`bias`",` float``=0.001 `

Ray-tracing bias. Gives control over self-intersection.

1or0. Turns on an automatic optimization that will reduce the

## Ray options

Tip

When you specify a texture, such as with the `"environment"` keyword,you can
also use the image filtering keyword arguments. See
[environment](environment.html) "Returns the color of the environment
texture.")for a listing of the image filter keyword arguments.

number of samples when there is little variation in occlusion

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

above the sample point. This can improve performance at the

Allows an override of the [scope](../contexts/shading_contexts.html#scope) for
ray-intersections.A special scope argument, `scope:self`, will match the
currently shading object.

expense of some possible flickering or additional noise.

"`currentobject`",`material`

Used to specify what the current shading object is. For example, when used
with the scope argument, `scope:self` will match the object passed in by this
argument.

Ray-tracing bias. Gives control over self-intersection.

"`maxdist`",` float``=-1 `

The maximum distance to search for objects. This can be used to limit the
search of objects to nearby objects only. If the `maxdist` given is negative,
then it will act as if there is no maximum distance.

When you specify a texture, such as with the"environment"keyword,

Allows an override of the maximum distance the ray cantravel when testing for
intersections. Some functions (such as[fastshadow](fastshadow.html "Sends a
ray from the position P along the direction specified by thedirection D."))
have the maximum distance implicitly defined (bythe length of the ray) and
should probably avoid using thisoption. However, this option can be used
effectively whencomputing reflections, global illumination, refraction etc.

you can also use the image filtering keyword arguments. Seeenvironmentfor a
listing of the image filter keyword arguments.

"`variancevar`",`string`

The name of a VEX export variable to use for variance anti-aliasing. The
renderer compares the value with adjacent micropolygons in micropolygon
rendering to decide what shading points need additional samples (using
`vm_variance` [property](../../props/index.html "Properties let you set up
flexible and powerful hierarchies of rendering, shading, lighting, and camera
parameters.") as a threshold). If more samples are required, the algorithm
takes samples up to the specified maximum ray samples.

A list of objects which can be hit by the rays.When specified,scopeoverrides
the default scope that would have been selected for the
givenraystyle.The"scope:default"value will cause thescopeargument to use the
default scope for the current context - as if the argument were not specified.

This variable must be imported from the hit surface, so it must be in the list
of imported names (see “importing information back from the ray” below). If
the named variable is not imported, this option will be ignored.

Allows an override of thescopefor ray-intersections.

Variance antialiasing puts more samples in areas of the image with high
variance, for example a sharp shadow edge. It is only used when

```c
vm_dorayvariance
```

is enabled. Otherwise, only the min ray samples (or an
explicitly supplied `"samples"` value) are used for antialiasing of the gather
loop.

A special scope argument,scope:self, will match the currently

Overrides the global variance control (mantra‘s-v option)which is used to
determine anti-aliasing quality of ray tracing.For more information please
refer to the documentation onmantra.

shading object.

"`angle`",` float``=0 `

The distribution angle (specified in radians). For gather(), rays will be
distributed over this angle. For trace(), the angle is used to indicate the
rate at which the filter width should increase with increasing intersection
distance. Larger angles will cause farther hit surfaces to use larger
derivatives, leading to improved texturing and displacement performance.

Used to specify what the current shading object is. For example, when used
with the scope argument,scope:selfwill match the object passed in by this
argument.

To be effective, the samples parameter should also be specified.

The maximum distance to search for objects. This can be used to limit the
search of objects to nearby objects only. If themaxdistgiven is negative, then
it will act as if there is no maximum distance.

"`samples`",` int|float``=1 `

How many samples should be sent out to filter rays. For theirradiance and
occlusion functions, specifying a samplesparameter will override the default
irradiance sampling.

Allows an override of the maximum distance the ray can

"`environment`",`string`

If the ray sent out to the scene misses everything, thenit‘spossible to
specify an environment map to evaluate.

travel when testing for intersections. Some functions (such asfastshadow) have
the maximum distance implicitly defined (by

Using the ray‘sdirection, the environment map specifiedwill be evaluated
and the resulting color will be returned.Most likely, it will be necessary to
specify a transformspace for the environment map evaluations.

the length of the ray) and should probably avoid using this

In the case of refractlight and trace the Of and Afvariables will be set to 0
regardless of the backgroundcolor specified. the resulting color.

在折射光和跟踪的情况下，Of 和 Af

When an environment map is specified, the filtering optionsfrom texture() are
also supported.

变量将被设置为 0，而不考虑指定的背景

See [how to create an environment/reflection map](../../render/envmaps.html).

的颜色。

"`envobject`",`string`

If an environment map is used, the orientation of theenvironment map can be
specified by transforming the rayinto the space of another object, light or
fog object in thescene. In Houdini, null objects can be used to specify
theorientation. For example:

当指定了环境贴图时，也支持来自 texture()的过滤选项。

    Cf = R*reflectlight(bias, max(R), "environment", "map.rat", "envobject", "null_object_name");

"`envlight`",`string`

If an environment map is used, the orientation of theenvironment map can be
specified by transforming the rayinto the space of a light in the scene.

纹理()的过滤选项也被支持。

"`envtint`",`vector`

If an environment map is used, tint it with this color.

参见如何创建环境/反射贴图。

"`background`",`vector`

If a ray misses all objects, use this as thebackground color of the scene. In
the case of refractlight andtrace the Of and Af variables will be set to 0
regardless of thebackground color specified.

如果使用了环境贴图，环境贴图的方向可以通过变换来指定。

"`distribution`",`string`

**Functions** : [irradiance](irradiance.html "Computes irradiance (global
illumination) at the point P with the normal N."), [occlusion](occlusion.html "Computes ambient occlusion.")

Distribution for computing irradiance. The default is to usea cosine
distribution (diffuse illumination). The possiblevalues for the style are
`"nonweighted"` for uniform samplingor `"cosine"` for cosine weighted
sampling.

环境贴图的方向可以通过将射线转换为另一个物体的空间来指定。
