---
title: reflectlight
order: 61
category:
  - houdini
---
    
## 描述

Computes the amount of reflected light which hits the surface.

On this page |

- Area sampling options

区域采样选项

- Ray options

光线选项

- Image filtering options

图像过滤选项

- Examples

---|---  
Context(s) | [shading](../contexts/shading.html)

```c
vector  reflectlight(float bias, float max_contrib, ...)
```

bias is typically a small number (for example 0.005) used to helpeliminate
self-reflection.If bias is less than 0, the defaultray tracing bias specified
with the `vm_raybias` setting will be usedinstead.

biasis 通常是一个小数字（例如 0.005），用于帮助消除自反射。

max_contrib tells the renderer how much the reflected light willcontribute to
the final color of the pixel. This is typically themaximum of the reflection
component of a lighting model. This has noeffect on the resultant color. This
value should typically be less than1.

消除自反射。 如果 biasis 小于 0，默认的

```c
vector  reflectlight(vector P, vector D, float bias, float max_contrib, ...)
```

A general form which takes a position P and a direction D.

用 vm_raybiassetting 指定的光线追踪偏差将被使用。

`vector reflectlight(vector P, vector N, vector I, float bias, float max_contrib, ...)`

A general form which takes a position P, direction D, andincident angle I and
returns the reflection vector.

来代替。

## Area sampling options

For area sampling, you must specify both the angle and sample variadic
parameters. For example:

max_contribt 告诉渲染器，反射光对像素的最终颜色有多大贡献。

    surfaceblurry_mirror(float angle = 3; int samples = 16; float bias=0.05){  Cf = reflectlight(bias, 1, "angle", angle, "samples", samples);}

## Ray options

Tip

When you specify a texture, such as with the `"environment"` keyword,you can
also use the image filtering keyword arguments. See
[environment](environment.html "Returns the color of the environment
texture.")for a listing of the image filter keyword arguments.

对像素的最终颜色的贡献。这通常是指

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

通常是灯光模型的反射分量的最大值。这对最终的颜色没有

Allows an override of the [scope](../contexts/shading_contexts.html#scope) for
ray-intersections.A special scope argument, `scope:self`, will match the
currently shading object.

对最终的颜色没有影响。这个值通常应该小于

"`currentobject`",`material`

Used to specify what the current shading object is. For example, when used
with the scope argument, `scope:self` will match the object passed in by this
argument.

1.

"`maxdist`",` float``=-1 `

The maximum distance to search for objects. This can be used to limit the
search of objects to nearby objects only. If the `maxdist` given is negative,
then it will act as if there is no maximum distance.

一个需要位置 P 和方向 D 的一般形式。

Allows an override of the maximum distance the ray cantravel when testing for
intersections. Some functions (such as[fastshadow](fastshadow.html "Sends a
ray from the position P along the direction specified by thedirection D."))
have the maximum distance implicitly defined (bythe length of the ray) and
should probably avoid using thisoption. However, this option can be used
effectively whencomputing reflections, global illumination, refraction etc.

一个一般的形式，它需要一个位置 P、方向 D 和

"`variancevar`",`string`

The name of a VEX export variable to use for variance anti-aliasing. The
renderer compares the value with adjacent micropolygons in micropolygon
rendering to decide what shading points need additional samples (using
`vm_variance` [property](../../props/index.html "Properties let you set up
flexible and powerful hierarchies of rendering, shading, lighting, and camera
parameters.") as a threshold). If more samples are required, the algorithm
takes samples up to the specified maximum ray samples.

入射角 I 并返回反射矢量。

This variable must be imported from the hit surface, so it must be in the list
of imported names (see “importing information back from the ray” below). If
the named variable is not imported, this option will be ignored.

对于区域采样，你必须同时指定角度和采样变量参数。比如说。

Variance antialiasing puts more samples in areas of the image with high
variance, for example a sharp shadow edge. It is only used when

```c
vm_dorayvariance
```

is enabled. Otherwise, only the min ray samples (or an
explicitly supplied `"samples"` value) are used for antialiasing of the gather
loop.

当你指定一个纹理时，比如用 "环境 "关键字。

Overrides the global variance control (mantra‘s-v option)which is used to
determine anti-aliasing quality of ray tracing.For more information please
refer to the documentation onmantra.

你也可以使用图像过滤关键字的参数。请参阅 environment 以了解图像过滤关键字参数的清单。

"`angle`",` float``=0 `

The distribution angle (specified in radians). For gather(), rays will be
distributed over this angle. For trace(), the angle is used to indicate the
rate at which the filter width should increase with increasing intersection
distance. Larger angles will cause farther hit surfaces to use larger
derivatives, leading to improved texturing and displacement performance.

一个可以被射线击中的物体的列表。 当指定时，scope 会取代为给定射线样式选择的默认范围。 scope:default
"值将导致 scopear 参数使用当前环境的默认范围--就像没有指定该参数一样。

To be effective, the samples parameter should also be specified.

允许覆盖射线断面的 scope。

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

## Image filtering options

Examples of specifying filter parameters:

的颜色。

    colormap(map, u, v, "smode", "decal", "tmode", "repeat", "border", {.1,1,1});colormap(map, u, v, "mode", "clamp", "width", 1.3);colormap(map, u, v, "filter", "gauss", "width", 1.3, "mode", "repeat");

If the texture is a deep `.rat` file, you can use the `"channel"` keyword
argumentto specify a channel in the file:

当环境贴图被指定时，来自 texture()的过滤选项也被支持。

    string channelname = "N";cf = colormap(map, u, v, "channel", channelname);

- When you read a texture in a format other than Houdini‘snative `.pic` or `.rat`, Houdini uses [OpenImageIO \_\_](http://en.wikipedia.org/wiki/OpenImageIO)to read the image data from the file. In that case, some of the variadic arguments below may not have any effect.

纹理()的过滤选项也被支持。

- When the texture function evaluates non-houdini format textures, Houdini switches to use OpenImageIO for texture evaluation.While there are corresponding values to many of the variadic keywords, some keywords don‘t have an equivalent function in OpenImageIO.

参见如何创建环境/反射贴图。

    * OIIO will _not_ create MIP maps for images that don‘t have multi-resolution images by default. You can turn this on by adding `automip=1` to the content of the the

```c
OPENIMAGEIO_IMAGECACHE_OPTIONS
```

environment variable.

如果使用了环境贴图，环境贴图的方向可以通过变换来指定。

Without MIP maps, blurring and filtering may not work as expected.

环境贴图的方向可以通过将射线转换为另一个物体的空间来指定。

    * You can also use

```c
OPENIMAGEIO_IMAGECACHE_OPTIONS
```

to override the amount of memory OIIO uses for caching.

到场景中的另一个物体、光线或雾气物体的空间中去。

By default, Houdini will set the cache memory to 1/8th of the physical
computer memory.If you set the

```c
OPENIMAGEIO_IMAGECACHE_OPTIONS
```

variable it
overrides that computed cache size.

场景中的另一个物体、光或雾物体的空间来指定环境贴图的方向。在 Houdini 中，空对象可以用来指定

Show/hide arguments

"`wrap`",` string``="repeat" `

`repeat` or `periodic`

The image map will repeat outside the range 0 to 1.Basically, the integer
component of the texturecoordinate is ignored. This is the default.

方向。比如说。

`clamp` or `edge` or `streak`

The texture coordinates will be clamped to the range 0to 1. This causes
evaluations outside the range toevaluate to the color at the closest edge of
the image(the border pixels are streaked outside the range).

纹理坐标将被限制在 0 到 1 的范围内。

`black` or `decal` or `color`

Coordinates outside the range 0 to 1 will evaluate tothe border color (rather
than a color in the image). Theborder color is black (i.e. 0) by default.

到 1 的范围内。这使得在该范围外的评估会被评估为最接近图像边缘的颜色。

"`uwrap`",`string`

(AKA `swrap`)Specifies the behavior when the u coordinate is outsidethe range
0 to 1. The values are the same as with `wrap`.

评估为图像最接近边缘的颜色

"`vwrap`",`string`

(AKA `twrap`)Specifies the behavior when the v coordinate is outsidethe range
0 to 1. The values are the same as with `wrap`.

(边界像素在该范围之外的条纹）。

"`border`",

```c
float|vector|vector4
```

`=0`

Specifies the border color when Black/Decal/Color wrapping is used. **Has no
effect for OpenImageIO formats**.

在 0 到 1 范围外的坐标将被评估为

"`channel`",

Specifies the color channel for textures that have multiple colorplanes (for
example,

```c
diffuse_indirect
```

or `N`).For ptex images, this specifies the index
of the first channel(for example, `0` or `4`).

边界颜色（而不是图像中的一个颜色）。边界的颜色是黑色的

"`blur`",`float`

Blurs in x and y directions. Blur is measured as a percentageof the image size

- so a blur of 0.1 will blur 10% of the imagewidth.Use `xblur` and `yblur` if
  you need different bluramounts in either dimension.

默认情况下，边界颜色是黑色（即 0）。

"`xblur`",

(AKA `ublur`, `sblur`)Blur amount in the x image direction.

(AKAwrap)

"`yblur`",

(AKA `vblur`, `tblur`)Blur amount in the y image direction.

指定 u 坐标在 0 到 1 范围之外时的行为。

"`pixelblur`",`float`

Blurs the texture by a floating point number of pixels. **Has no effect for
OpenImageIO formats**.

数值与 withwrap 相同。

    Cf = texture("map.rat", ss, tt, "pixelblur", 2.0);

"`xpixelblur`",`float`

Blurs the texture by a floating point number of pixels in the X direction.

(AKAtwrap)

"`ypixelblur`",`float`

Blurs the texture by a floating point number of pixels in the Y direction.

指定当 v 坐标超出 0 到 1 范围时的行为。

"`filter`",` string``="box" `

Specifies the type of anti-aliasing filter to be used forevaluation.

这些值与 withwrap 相同。

**For Houdini native formats** , the following value should be a string
specifying one of:

指定使用 Black/Decal/Color 包装时的边界颜色。

`"point"`

Point sampling (i.e. no filtering)

为有多个颜色平面的纹理指定颜色通道（例如，扩散面）。

`"box"`

Box filter (default)

纹理的颜色通道（例如，diffuse_indirectorN）。

`"gauss"`

Gaussian filter

对于 ptex 图像，这指定了第一个通道的索引

`"bartlett"`

Bartlett/Triangular filter

(例如，0 或 4)。

`"sinc"`

Sinc sharpening filter

X 和 Y 方向的模糊。模糊是以图像大小的百分比来衡量的

`"hanning"`

Hanning filter

的百分比来衡量 - 所以 0.1 的模糊将模糊 10%的图像宽度。

`"blackman"`

Blackman filter

布莱克曼过滤器

`"catrom"`

Catmull-Rom filter

Catmull-Rom 过滤器

**For all other formats (loaded by OpenImageIO)** , specifying the `"point"`
filter sets the OIIO interpolation mode to `"closest"` and disables MIP
mapping. Any other value uses OIIO smart-bicubic interpolation. You can get
finer control using the `"filtermode"` variadic argument (see below).

对于所有其他格式（由 OpenImageIO 加载），指定 "点 "过滤器将 OIIO 插值模式设置为 "最接近
"并禁用 MIP 映射。任何其他的值都使用 OIIO 智能立方体插值。你可以使用 "filtermode "变量获得更精细的控制（见下文）。

"`xfilter`",`string`

(AKA `ufilter`, `sfilter`)Specifies the filter for the X direction. The
filters arethe same as with `filter`.

(AKAufilter,sfilter)

"`yfilter`",`string`

(AKA `vfilter`, `tfilter`)Specifies the filter for the Y direction. The
filters arethe same as with `filter`.

指定 X 方向的滤波器。滤波器是

"`filtermode`",`string`

**For Houdini native formats** , VEX also supports simpler
filtering.The`filtermode` can be set to one of:

与 filter 相同。

`filter`

Use the filter specified by the `filter` keyword argument.

(AKAvfilter,tfilter)

`bilinear`

Use simple bilinear filtering.This is the fastest specialized filtering mode,
but provides the lowest quality filtering.

指定 Y 方向的过滤器。滤波器是

`biquadratic`

Use simple quadratic filtering (order 3 filtering).

与 withfilter 相同。

`bicubic`

Use simple bicubic filtering.

对于 Houdini 本地格式，VEX 也支持更简单的过滤。 filtermodec 可以被设置为以下之一。

When the `filtermode` is set to `bilinear`, `biquadratic` or `bicubic`,several
arguments (like `filter` and `width`) are ignored and a fixedinterpolation
filter is used instead.Other arguments (notably the `lerp`and `blur` keywords)
are still valid.

使用由 filterkeyword 参数指定的过滤器。

**For all other formats (loaded by OpenImageIO)** you can set the `filtermode`
to `"filter"` (see `"filter"` above), `"bilinear"`, `"biquadratic"`, or
`"bicubic"`.

使用简单的双线性过滤。 这是最快的专门过滤模式，但提供最低质量的过滤。

"`width`",` float``=1.0 `

**For Houdini native formats** , this sets the filter width in both X and Y
directions.

使用简单的二次过滤（3 阶过滤）。

**For all other formats (loaded by OpenImageIO)** , this sets the OIIO
`swidth` and `twidth` options.

使用简单的二次方滤波。

"`xwidth`",`float`

(AKA `uwidth`, `swidth`)Filter width in the X direction.

当 filtermode 被设置为固定线性、二次方或立方时。

"`ywidth`",`float`

(AKA `vwidth`, `twidth`)Filter width in the Y direction.

几个参数（如滤波器和带宽）被忽略，而使用一个固定的

"`zwidth`",`float`

Filter width in the Z direction (for shadow maps).This is measured in world
space units, unlike the other width arguments.

滤波器，而使用固定的插值滤波器。 其他参数（特别是 lerp 和 blurkey 词）仍然有效。

"`extrapolate`",`int`

whether to use derivative extrapolationwhen computing anti-aliasing
information. Extrapolation ofderivatives is on by default. The argument should
be either 0 or1.

对于所有其他格式（由 OpenImageIO 加载），你可以将 filtermod 设置为 "filter"（见上面的
"filter"）、"bilinear"、"biquadratic"、或 "bicubic"。

"`lerp`",`int`

**For Houdini native formats** , this specifies whether RAT files should
interpolate between different MIP levels. By default, this is turned off.
Turning interpolation on will help remove discontinuities when differentMIP
levels of a `.rat` file are accessed. However, the results of texture
evaluation will be slightly softer (i.e. blurrier) and will take more time.

对于 Houdini 本地格式，这设置了 X 和 Y 方向的滤波宽度。

There are three possible values for this argument.

对于所有其他格式（由 OpenImageIO 加载），这设置了 OIIOswidth 和 twidth 选项。

`0`

Disable MIP map interpolation (fastest).

禁用 MIP 地图插值（最快）。

`1`

Approximate MIP map interpolation (fast).

近似的 MIP 地图插值（快速）。

`2`

High Quality MIP map interpolation (slower but highest quality).

高质量 MIP 地图插值（较慢但质量最高）。

**For all other formats (loaded by OpenImageIO)** , a value of 0 specifies a
single MIP level, any other value specifies trilinear interpolation.

对于所有其他格式（由 OpenImageIO 加载），0 的值指定一个单一的 MIP 级别，任何其他值指定三线插值。

"`depthinterp`",`string`

Specifies the depth interpolation mode for deep shadow maps,to control the
opacity value that will be returned when themap is sampled between two
z-records.

指定深度阴影贴图的深度插值模式。

The argument must be a string.

来控制当地图在两个 z-re-re 之间采样时将返回的不透明度值。

`discrete`

(default) Return the first z-record before the samplepoint.

地图在两个 Z 记录之间进行采样时，控制返回的不透明度值。

`linear`

Linearly interpolate the opacities of the z-recordsbefore and after the sample
point.

该参数必须是一个字符串。

See [deep shadow maps](../../render/lights.html) for more onthe difference
between the two modes.

(默认情况下）返回采样点之前的第一条 Z-记录。

"`beerlambert`",`int`

When evaluating volumetric deep shadow maps, this will enable Beer-
Lambertinterpolation of opacity.Beer-Lambert is more a accurate but
moreexpensive form of interpolation.

点。

The argument should be either 0 or 1.

线性插值取样点前后的 Z-记录的不透明度

"`srccolorspace`",`string`

Specifies the color space in which the texture is stored.When texture values
are accessed, they will be translated fromthis space into linear space for
rendering if needed.

之前和之后的 Z-记录的不透明度。

`auto`

(default) Determine the source color space based on thefile.Currently, this
will assume sRGB color space for8-bit textures and linear for all other
textures.

更多关于这两种模式的区别，请参见 eep shadow mapsf

`linear`

Transform to linear space.This currently only affects8-bit textures, since all
others are assumed to be alreadyin linear space.Use this option to force
linearinterpretation of textures used for bump or displacementmaps.

这两种模式之间的区别。

"`face`",

When using a Ptex texture map, the `face` argument is used to specify the face
for ptexture lookup. **Has no effect for OpenImageIO formats**.

当评估体积深部阴影图时，这将使比尔-朗贝尔

"`ptexorient`",`int`

When using Ptex textures, the implicit texture coordinates onpolygons are used
as the interpolants for texture lookup (combinedwith the `face`).However,
different software may have differentbeliefs about winding and
orientation.This keyword argumentallows you to control the interpretation of
orientation for Houdinipolygons.The `ptexorient` expects an integer argument
which iscomposed of a bit-field

内插法的不透明度。 Beer-Lambert 是一种更准确但更昂贵的插值方式。

- bit 0Ã01: Complement the `s` coordinate

昂贵的插值形式。

- bit 0Ã02: Complement the `t` coordinate

该参数应该是 0 或 1。

- bit 0Ã04: Swap the `s` and `t` coordinates

指定存储纹理的颜色空间。

For example, a value of 6 (0Ã4|0Ã2) is equivalent to calling`texture(map, 1-t, s)` instead of `texture(map, s, t)`.

当纹理值被访问时，它们将从这个空间被翻译成线性空间以进行渲染。

The default `ptexorient` is 0, which works correctly with theexamples found at
<http://ptex.us>.

The defaultptexorientis 0, which works correctly with the

**Has no effect for OpenImageIO formats**.

examples found athttp://ptex.us.

"

```c
iesnormalization
```

",` string``="maxvalue" `

Select different methods of normalizing IES map‘soutput values whenquerying
via `environment()` function.

Has no effect for OpenImageIO formats.

`none`

Use raw values scaled by the candela multiplier in the header.

Select different methods of normalizing IES map‘soutput values when

`maxvalue`

(default) Normalized by the maximum value. This is legacy behavior usedby
mantra‘sdefault light shader.

querying viaenvironment()function.

```c
preserveenergy
```

Normalized by values integrated over coverage angles, so that IESprofile
affects shaping of the light while preserving its overallenergy output.

Use raw values scaled by the candela multiplier in the header.

## Examples

    surface mirror(vector refl_color=1; float bias=.005){  Cf = refl_color * reflectlight(bias, max(refl_color));}
