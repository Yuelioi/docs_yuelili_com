---
title: refractlight
order: 64
category:
  - vex
---

在这一页

- [灯光包含/排除选项](#灯光包含-排除-选项)
- [区域采样选项](#area-sampling-options)
- [Ray options](#ray-options)
- [例子](#例子)

|

[shading](../contexts/shading.html)

`void refractlight(vector &cf, vector &of, float &af, vector P, vector D, float bias, float max\_contrib, ...)`

`void refractlight(vector &cf, vector &of, float &af, vector P, vector N, vector I, float eta, float bias, float max\_contrib, ...)`

内涵(s) 计算被当前表面折射的表面的照度。计算并输出输出颜色（cf）、不透明度（of）和 alpha（af）。参见[不透明度与阿尔法](../contexts/shading_contexts.html) () (#opacity) 。

偏差通常是一个小数字（例如 0.005），用来帮助消除自我反省。

max_contrib 告诉渲染器，反射光对像素的最终颜色有多大贡献。这对最终的颜色没有影响。

refractlight()函数的第一种形式需要一个位置和方向，通常由[refract](refract.html) ("返回给定入射方向、归一化法线和折射率的折射光线。")或[fresnel](fresnel.html) ("计算给定入射矢量、表面法线（均归一化）和折射率（eta）的fresnel反射/折射贡献。")函数计算出来。

为了防止渲染器计算出标准的透明度（即非折射的透明度），Of 变量必须设置为{1,1,1}，以使表面 "不透明"。Af 变量可以被设置为任意值。

## 灯光包含/排除选项

[¶](#light-inclusion-exclusion-options)

## Arguments

`string`
`="*"`

"`categories'", 指定通过其 "类别 "标签包含/排除的灯光。这是首选的包括/排除灯光，而不是用`"lightmask"`关键字参数的模式匹配灯光名称。

比如说。

```c
diff = diffuse(nml, "lightmask", "hero fill");

```

See [light categories](../../render/lights.html) () (#categories) for more information.

"`lightmask`",
`string`
`="*"`

When evaluating light and shadow shaders, objects have pre-defined light
masks. This mask is usually specified in the geometry object and
specifies a list of lights which are used to illuminate a surface or fog
shader. It is possible to override the default light mask by specifying
a “lightmask” argument.

For example:

```c
diff = diffuse(nml, "lightmask", "light\*,^light2");

```

…will cause all lights whose names begin with “light” except for a
light named “light2” to be considered for diffuse illumination.

All Houdini scoping patterns, excepting group expansion, are supported:

- `*` - wild-card match
- `?` - single character match
- `^` - exclusion operator
- `[list]` - character list match

## Area sampling options

[¶](#area-sampling-options)

For area sampling, you must specify both the angle and sample variadic parameters. For example:

```c
surface
blurry\_mirror(float angle = 3; int samples = 16; float bias=0.05)
{
 Cf = reflectlight(bias, 1, "angle", angle, "samples", samples);
}

```

## Ray options

[¶](#ray-options)

::: tip

When you specify a texture, such as with the `"environment"` keyword,
you can also use the image filtering keyword arguments. See [environment](environment.html) () ("Returns the color of the environment texture.")
for a listing of the image filter keyword arguments.

## Arguments

"`scope`",
`string`

A list of objects which can be hit by the rays. When specified, `scope` overrides the default scope that would have been selected for the given `raystyle`. The `"scope:default"` value will cause the `scope` argument to use the default scope for the current context - as if the argument were not specified.

Allows an override of the [scope](../contexts/shading_contexts.html) () (#scope) for ray-intersections.
A special scope argument, `scope:self`, will match the currently
shading object.

"`currentobject`",
`material`

Used to specify what the current shading object is. For example, when used with the scope argument, `scope:self` will match the object passed in by this argument.

"`maxdist`",
`float`
`=-1`

The maximum distance to search for objects. This can be used to limit the search of objects to nearby objects only. If the `maxdist` given is negative, then it will act as if there is no maximum distance.

Allows an override of the maximum distance the ray can
travel when testing for intersections. Some functions (such as
[fastshadow](fastshadow.html "Sends a ray from the position P along the direction specified by the
direction D.")) have the maximum distance implicitly defined (by
the length of the ray) and should probably avoid using this
option. However, this option can be used effectively when
computing reflections, global illumination, refraction etc.

"`variancevar`",
`string`

The name of a VEX export variable to use for variance anti-aliasing. The renderer compares the value with adjacent micropolygons in micropolygon rendering to decide what shading points need additional samples (using `vm_variance` [property](../../props/index.html) () ("Properties let you set up flexible and powerful hierarchies of rendering, shading, lighting, and camera parameters.") as a threshold). If more samples are required, the algorithm takes samples up to the specified maximum ray samples.

This variable must be imported from the hit surface, so it must be in the list of imported names (see “importing information back from the ray” below). If the named variable is not imported, this option will be ignored.

Variance antialiasing puts more samples in areas of the image with high variance, for example a sharp shadow edge. It is only used when `vm_dorayvariance` is enabled. Otherwise, only the min ray samples (or an explicitly supplied `"samples"` value) are used for antialiasing of the gather loop.

Overrides the global variance control (mantra’s -v option)
which is used to determine anti-aliasing quality of ray tracing.
For more information please refer to the documentation on
mantra.

"`angle`",
`float`
`=0`

The distribution angle (specified in radians). For gather(), rays will be distributed over this angle. For trace(), the angle is used to indicate the rate at which the filter width should increase with increasing intersection distance. Larger angles will cause farther hit surfaces to use larger derivatives, leading to improved texturing and displacement performance.

To be effective, the samples parameter should also be specified.

"`samples`",
`int|float`
`=1`

How many samples should be sent out to filter rays. For the
irradiance and occlusion functions, specifying a samples
parameter will override the default irradiance sampling.

"`environment`",
`string`

If the ray sent out to the scene misses everything, then
it’s possible to specify an environment map to evaluate.

Using the ray’s direction, the environment map specified
will be evaluated and the resulting color will be returned.
Most likely, it will be necessary to specify a transform
space for the environment map evaluations.

In the case of refractlight and trace the Of and Af
variables will be set to 0 regardless of the background
color specified. the resulting color.

When an environment map is specified, the filtering options
from texture() are also supported.

See [how to create an environment/reflection map](../../render/envmaps.html).

"`envobject`",
`string`

If an environment map is used, the orientation of the
environment map can be specified by transforming the ray
into the space of another object, light or fog object in the
scene. In Houdini, null objects can be used to specify the
orientation. For example:

```c
Cf = R\*reflectlight(bias, max(R), "environment", "map.rat", "envobject", "null\_object\_name");

```

"`envlight`",
`string`

If an environment map is used, the orientation of the
environment map can be specified by transforming the ray
into the space of a light in the scene.

"`envtint`",
`vector`

If an environment map is used, tint it with this color.

"`background`",
`vector`

If a ray misses all objects, use this as the
background color of the scene. In the case of refractlight and
trace the Of and Af variables will be set to 0 regardless of the
background color specified.

"`distribution`",
`string`

**Functions**: [irradiance](irradiance.html) () ("Computes irradiance (global illumination) at the point P with the normal N."), [occlusion](occlusion.html) () ("Computes ambient occlusion.")

Distribution for computing irradiance. The default is to use
a cosine distribution (diffuse illumination). The possible
values for the style are `"nonweighted"` for uniform sampling
or `"cosine"` for cosine weighted sampling.

## Examples



```c
surface
glass(float eta=1.3, bias = 0.005)
{
 float Kr, Kt;
 vector R, T;
 vector cf, of;
 float af;
 frensel(normalize(I), normalize(N), eta, Kr, Kt, R, T);
 Cf = Kr \* reflectlight(P, R, bias, Kr);
 refractlight(cf, of, af, P, T, bias, Kt);
 Cf += Kt \* cf;
 Af = clamp(Kr + af\*Kt, 0, 1);
 Of = 1;
}

```

## See also

- [reflectlight](reflectlight.html)
- [gather](gather.html)
- [trace](trace.html)
- [irradiance](irradiance.html)

|
surface

[ambient](ambient.html)

[irradiance](irradiance.html)

[isfogray](isfogray.html)

[islpeactive](islpeactive.html)

[isshadowray](isshadowray.html)

[isuvrendering](isuvrendering.html)

[limport](limport.html)

[occlusion](occlusion.html)

[reflectlight](reflectlight.html)

[refractlight](refractlight.html)

[shadow](shadow.html)

[shimport](shimport.html)
