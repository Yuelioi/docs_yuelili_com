---
title: texture
order: 13
category:
  - houdini
---
    
## 描述

Computes a filtered sample of the texture map specified.

```c
vector|vector4 texture(string map, ...)
```

Samples the texture at the global S and T coordinates from the shading
context. These signatures are only available in [shading
contexts](../contexts/shading_contexts.html).

在着色上下文的全局 S 和 T 坐标上对纹理进行采样。这些特征只在着色背景下可用。

```c
vector|vector4 texture(string map, float ss, float tt, ...)
```

Samples the texture at the given S and T coordinates, using a filter width
based on the derivatives of S and T at that point. If you use this function
outside a [shading context](../contexts/shading_contexts.html), the filter
width will be 0.

在给定的 S 和 T 坐标处对纹理进行采样，使用基于该点的 S 和 T 的导数的过滤宽度。如果你在着色背景之外使用这个函数，滤波宽度将为 0。

`vector|vector4 texture(string map, float s0, float t0, float s1, float t1, float s2, float t2, float s3, float t3, ...)`

Takes an explicit sampling quadrilateral with corners (s0, t0), (s1, t1), (s2,
t2), and (s3, t3).

取一个明确的采样四边形，角为（s0，t0）、（s1，t1）、（s2，t2）和（s3，t3）。

Returns

A sampled color value from the texture.

一个来自纹理的取样颜色值。

If you call the function with a `vector4` return type, the function includes
the texture alpha in the fourth component.

如果你用 avector4return 类型调用该函数，该函数在第四个分量中包括纹理的 alpha。

## Image filtering options

Examples of specifying filter parameters:

指定过滤器参数的例子。

    colormap(map, u, v, "smode", "decal", "tmode", "repeat", "border", {.1,1,1});colormap(map, u, v, "mode", "clamp", "width", 1.3);colormap(map, u, v, "filter", "gauss", "width", 1.3, "mode", "repeat");

If the texture is a deep `.rat` file, you can use the `"channel"` keyword
argumentto specify a channel in the file:

如果纹理是一个 deep.ratfile，你可以使用 "channel "关键字参数

    string channelname = "N";cf = colormap(map, u, v, "channel", channelname);

- When you read a texture in a format other than Houdini‘snative `.pic` or `.rat`, Houdini uses [OpenImageIO \_\_](http://en.wikipedia.org/wiki/OpenImageIO)to read the image data from the file. In that case, some of the variadic arguments below may not have any effect.

来指定该文件中的一个通道。

- When the texture function evaluates non-houdini format textures, Houdini switches to use OpenImageIO for texture evaluation.While there are corresponding values to many of the variadic keywords, some keywords don‘t have an equivalent function in OpenImageIO.

当您读取的纹理格式不是 Houdini 本地的.picor.rat 时，Houdini 使用 OpenImageIO 从文件中读取图像数据。在这种情况下，下面的一些变量参数可能不会产生任何影响。

    * OIIO will _not_ create MIP maps for images that don‘t have multi-resolution images by default. You can turn this on by adding `automip=1` to the content of the the

```c
OPENIMAGEIO_IMAGECACHE_OPTIONS
```

environment variable.

当纹理函数评估非胡迪尼格式的纹理时，胡迪尼会切换到使用 OpenImageIO 来评估纹理。
虽然许多变量参数都有相应的值，但有些关键词在 OpenImageIO 中并没有相应的功能。

Without MIP maps, blurring and filtering may not work as expected.

OIIO 默认不会为没有多分辨率图像的图像创建 MIP 图。你可以通过在 OPENIMAGEIO_IMAGECACHE_OPTIONS 环境变量的内容中添加 utomip=1 来打开这个选项。

    * You can also use

```c
OPENIMAGEIO_IMAGECACHE_OPTIONS
```

to override the amount of memory OIIO uses for caching.

如果没有 MIP 地图，模糊和过滤可能不会像预期那样工作。

By default, Houdini will set the cache memory to 1/8th of the physical
computer memory.If you set the

```c
OPENIMAGEIO_IMAGECACHE_OPTIONS
```

variable it
overrides that computed cache size.

你也可以使用 OPENIMAGEIO_IMAGECACHE_OPTIONS 来覆盖 OIIO 用于缓存的内存量。

Show/hide arguments

"`wrap`",` string``="repeat" `

`repeat` or `periodic`

The image map will repeat outside the range 0 to 1.Basically, the integer
component of the texturecoordinate is ignored. This is the default.

默认情况下，Houdini 会将缓存内存设置为物理计算机内存的 1/8。
如果你设置了 OPENIMAGEIO_IMAGECACHE_OPTIONS 变量，它就会覆盖该计算的缓存大小。

`clamp` or `edge` or `streak`

The texture coordinates will be clamped to the range 0to 1. This causes
evaluations outside the range toevaluate to the color at the closest edge of
the image(the border pixels are streaked outside the range).

图像贴图将在 0 到 1 的范围外重复。

`black` or `decal` or `color`

Coordinates outside the range 0 to 1 will evaluate tothe border color (rather
than a color in the image). Theborder color is black (i.e. 0) by default.

基本上，纹理的整数分量

"`uwrap`",`string`

(AKA `swrap`)Specifies the behavior when the u coordinate is outsidethe range
0 to 1. The values are the same as with `wrap`.

坐标的整数部分被忽略了。这是默认的。

"`vwrap`",`string`

(AKA `twrap`)Specifies the behavior when the v coordinate is outsidethe range
0 to 1. The values are the same as with `wrap`.

纹理坐标将被钳制在 0 到 1 的范围内。

"`border`",

```c
float|vector|vector4
```

`=0`

Specifies the border color when Black/Decal/Color wrapping is used. **Has no
effect for OpenImageIO formats**.

这使得在这个范围之外的评估会被评估为最接近的颜色。

"`channel`",

Specifies the color channel for textures that have multiple colorplanes (for
example,

```c
diffuse_indirect
```

or `N`).For ptex images, this specifies the index
of the first channel(for example, `0` or `4`).

评估为图像最接近边缘的颜色

"`blur`",`float`

Blurs in x and y directions. Blur is measured as a percentageof the image size

- so a blur of 0.1 will blur 10% of the imagewidth.Use `xblur` and `yblur` if
  you need different bluramounts in either dimension.

在 X 和 Y 方向的模糊。模糊度是以图像大小的百分比来衡量的

"`xblur`",

(AKA `ublur`, `sblur`)Blur amount in the x image direction.

的百分比来衡量--因此 0.1 的模糊将模糊 10%的图像宽度。

"`yblur`",

(AKA `vblur`, `tblur`)Blur amount in the y image direction.

宽度。 如果你需要在这两个维度上有不同的模糊，可以使用 xblurandyblur

"`pixelblur`",`float`

Blurs the texture by a floating point number of pixels. **Has no effect for
OpenImageIO formats**.

如果你需要在任何一个维度上有不同的模糊量。

    Cf = texture("map.rat", ss, tt, "pixelblur", 2.0);

"`xpixelblur`",`float`

Blurs the texture by a floating point number of pixels in the X direction.

(AKAublur,sblur)

"`ypixelblur`",`float`

Blurs the texture by a floating point number of pixels in the Y direction.

在 X 图像方向的模糊量。

"`filter`",` string``="box" `

Specifies the type of anti-aliasing filter to be used forevaluation.

(AKAvblur,tblur)

**For Houdini native formats** , the following value should be a string
specifying one of:

在 Y 方向上的模糊量。

`"point"`

Point sampling (i.e. no filtering)

以一个浮点数的像素来模糊纹理。对 OpenImageIO 格式没有影响。

`"box"`

Box filter (default)

在 X 方向上模糊纹理的浮点像素数。

`"gauss"`

Gaussian filter

Blurs the texture by a floating point number of pixels in the Y
direction（在 Y 方向上模糊纹理）。

`"bartlett"`

Bartlett/Triangular filter

指定用于评估的抗锯齿滤波器的类型。

`"sinc"`

Sinc sharpening filter

评估。

`"hanning"`

Hanning filter

对于 Houdini 的本地格式，下面的值应该是一个字符串，指定其中之一。

`"blackman"`

Blackman filter

点取样（即没有过滤）。

`"catrom"`

Catmull-Rom filter

箱形滤波器（默认）

**For all other formats (loaded by OpenImageIO)** , specifying the `"point"`
filter sets the OIIO interpolation mode to `"closest"` and disables MIP
mapping. Any other value uses OIIO smart-bicubic interpolation. You can get
finer control using the `"filtermode"` variadic argument (see below).

高斯滤波器

"`xfilter`",`string`

(AKA `ufilter`, `sfilter`)Specifies the filter for the X direction. The
filters arethe same as with `filter`.

Bartlett/Triangular 滤波器

"`yfilter`",`string`

(AKA `vfilter`, `tfilter`)Specifies the filter for the Y direction. The
filters arethe same as with `filter`.

Sinc 锐化滤波器

"`filtermode`",`string`

**For Houdini native formats** , VEX also supports simpler
filtering.The`filtermode` can be set to one of:

汉宁滤波

`filter`

Use the filter specified by the `filter` keyword argument.

使用由 filterkeyword 参数指定的过滤器。

`bilinear`

Use simple bilinear filtering.This is the fastest specialized filtering mode,
but provides the lowest quality filtering.

使用简单的双线性过滤。 这是最快的专门滤波模式，但提供最低质量的滤波。

`biquadratic`

Use simple quadratic filtering (order 3 filtering).

使用简单二次过滤（3 阶过滤）。

`bicubic`

Use simple bicubic filtering.

使用简单的二次方滤波。

When the `filtermode` is set to `bilinear`, `biquadratic` or `bicubic`,several
arguments (like `filter` and `width`) are ignored and a fixedinterpolation
filter is used instead.Other arguments (notably the `lerp`and `blur` keywords)
are still valid.

当 filtermode 被设置为固定线性、二次方或立方时。

**For all other formats (loaded by OpenImageIO)** you can set the `filtermode`
to `"filter"` (see `"filter"` above), `"bilinear"`, `"biquadratic"`, or
`"bicubic"`.

几个参数（如滤波器和带宽）被忽略，而使用一个固定的

"`width`",` float``=1.0 `

**For Houdini native formats** , this sets the filter width in both X and Y
directions.

滤波器，而使用固定的插值滤波器。 其他参数（特别是 lerp 和 blurkey 词）仍然有效。

**For all other formats (loaded by OpenImageIO)** , this sets the OIIO
`swidth` and `twidth` options.

对于所有其他格式（由 OpenImageIO 加载），你可以将 filtermod 设置为 "filter"（见上面的
"filter"）、"bilinear"、"biquadratic"、或 "bicubic"。

"`xwidth`",`float`

(AKA `uwidth`, `swidth`)Filter width in the X direction.

对于 Houdini 本地格式，这设置了 X 和 Y 方向的滤波宽度。

"`ywidth`",`float`

(AKA `vwidth`, `twidth`)Filter width in the Y direction.

对于所有其他格式（由 OpenImageIO 加载），这设置了 OIIOswidth 和 twidth 选项。

"`zwidth`",`float`

Filter width in the Z direction (for shadow maps).This is measured in world
space units, unlike the other width arguments.

(AKAuwidth,swidth)

"`extrapolate`",`int`

whether to use derivative extrapolationwhen computing anti-aliasing
information. Extrapolation ofderivatives is on by default. The argument should
be either 0 or1.

X 方向的过滤宽度。

"`lerp`",`int`

**For Houdini native formats** , this specifies whether RAT files should
interpolate between different MIP levels. By default, this is turned off.
Turning interpolation on will help remove discontinuities when differentMIP
levels of a `.rat` file are accessed. However, the results of texture
evaluation will be slightly softer (i.e. blurrier) and will take more time.

(AKAvwidth,twidth)

There are three possible values for this argument.

Y 方向的滤波宽度。

`0`

Disable MIP map interpolation (fastest).

Z 方向的滤镜宽度（用于阴影地图）。

`1`

Approximate MIP map interpolation (fast).

这是以世界空间单位测量的，与其他宽度参数不同。

`2`

High Quality MIP map interpolation (slower but highest quality).

在计算抗锯齿信息时，是否使用导数外推法

**For all other formats (loaded by OpenImageIO)** , a value of 0 specifies a
single MIP level, any other value specifies trilinear interpolation.

计算抗锯齿信息。外推

"`depthinterp`",`string`

Specifies the depth interpolation mode for deep shadow maps,to control the
opacity value that will be returned when themap is sampled between two
z-records.

默认情况下，导数外推是打开的。该参数应该是 0 或者

The argument must be a string.

1.

`discrete`

(default) Return the first z-record before the samplepoint.

(默认)返回采样点之前的第一条 Z 记录。

`linear`

Linearly interpolate the opacities of the z-recordsbefore and after the sample
point.

点。

See [deep shadow maps](../../render/lights.html) for more onthe difference
between the two modes.

线性插值取样点前后的 Z-记录的不透明度。

"`beerlambert`",`int`

When evaluating volumetric deep shadow maps, this will enable Beer-
Lambertinterpolation of opacity.Beer-Lambert is more a accurate but
moreexpensive form of interpolation.

前后的不透明度。

The argument should be either 0 or 1.

更多关于这两种模式的区别，请参见 eep shadow map。

"`srccolorspace`",`string`

Specifies the color space in which the texture is stored.When texture values
are accessed, they will be translated fromthis space into linear space for
rendering if needed.

这两种模式之间的区别。

`auto`

(default) Determine the source color space based on thefile.Currently, this
will assume sRGB color space for8-bit textures and linear for all other
textures.

当评估体积深部阴影图时，这将使比尔-朗贝尔

`linear`

Transform to linear space.This currently only affects8-bit textures, since all
others are assumed to be alreadyin linear space.Use this option to force
linearinterpretation of textures used for bump or displacementmaps.

内插法的不透明度。 Beer-Lambert 是一种更准确但更昂贵的插值方式。

"`face`",

When using a Ptex texture map, the `face` argument is used to specify the face
for ptexture lookup. **Has no effect for OpenImageIO formats**.

昂贵的插值形式。

"`ptexorient`",`int`

When using Ptex textures, the implicit texture coordinates onpolygons are used
as the interpolants for texture lookup (combinedwith the `face`).However,
different software may have differentbeliefs about winding and
orientation.This keyword argumentallows you to control the interpretation of
orientation for Houdinipolygons.The `ptexorient` expects an integer argument
which iscomposed of a bit-field

该参数应该是 0 或 1。

- bit 0Ã01: Complement the `s` coordinate

指定存储纹理的颜色空间。

- bit 0Ã02: Complement the `t` coordinate

当纹理值被访问时，它们将从这个空间被翻译成线性空间以进行渲染。

- bit 0Ã04: Swap the `s` and `t` coordinates

这个空间转化为线性空间，以便在需要时进行渲染。

For example, a value of 6 (0Ã4|0Ã2) is equivalent to calling`texture(map, 1-t, s)` instead of `texture(map, s, t)`.

(默认情况下）根据文件确定源颜色空间。

The default `ptexorient` is 0, which works correctly with theexamples found at
<http://ptex.us>.

文件确定源色彩空间。 目前，这将假设 8 位纹理为 sRGB 色彩空间，而所有纹理为线性空间。

**Has no effect for OpenImageIO formats**.

8 位纹理的 sRGB 色彩空间，以及所有其他纹理的线性空间。

"

```c
iesnormalization
```

",` string``="maxvalue" `

Select different methods of normalizing IES map‘soutput values whenquerying
via `environment()` function.

转换到线性空间。 目前这只影响到

`none`

Use raw values scaled by the candela multiplier in the header.

8 位纹理，因为所有其他纹理都被假定为已经是

`maxvalue`

(default) Normalized by the maximum value. This is legacy behavior usedby
mantra‘sdefault light shader.

在线性空间中。 使用这个选项可以强制对用于凹凸或位移的纹理进行线性

```c
preserveenergy
```

Normalized by values integrated over coverage angles, so that IESprofile
affects shaping of the light while preserving its overallenergy output.

解释用于凹凸或位移贴图的纹理。
