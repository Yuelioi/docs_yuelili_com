---
title: filterstep
order: 6
category:
  - houdini
---
    
## 描述

Returns the anti-aliased weight of the step function.

On this page |

- Image filtering options

图像过滤选项

- Examples

---|---

```c
float  filterstep(float edge, float x, ...)
```

```c
float  filterstep(float edge, float x0, float x1, ...)
```

Returns the anti-aliased weight of the step function. Thestep function returns
0 if x is less than edge and 1 if x is greaterthan edge. `filterstep` returns
a fraction representing thefiltered area under the step function.Filtering is
computed usingderivatives `Du()` and `Dv()` which are only non-zero in shading
and COPcontexts, so `filterstep` will not perform filtering in other contexts.

返回阶梯函数的抗混叠权重。该

## Image filtering options

Examples of specifying filter parameters:

如果 x 小于边缘则返回 0，如果 x 大于边缘则返回 1。

    colormap(map, u, v, "smode", "decal", "tmode", "repeat", "border", {.1,1,1});colormap(map, u, v, "mode", "clamp", "width", 1.3);colormap(map, u, v, "filter", "gauss", "width", 1.3, "mode", "repeat");

If the texture is a deep `.rat` file, you can use the `"channel"` keyword
argumentto specify a channel in the file:

filterstep 返回一个分数，代表阶梯函数下的

    string channelname = "N";cf = colormap(map, u, v, "channel", channelname);

- When you read a texture in a format other than Houdini‘snative `.pic` or `.rat`, Houdini uses [OpenImageIO \_\_](http://en.wikipedia.org/wiki/OpenImageIO)to read the image data from the file. In that case, some of the variadic arguments below may not have any effect.

阶梯函数下的过滤面积。 滤波的计算是使用

- When the texture function evaluates non-houdini format textures, Houdini switches to use OpenImageIO for texture evaluation.While there are corresponding values to many of the variadic keywords, some keywords don‘t have an equivalent function in OpenImageIO.

导数 Du()和 Dv()来计算的，这两个导数在阴影和 COP 中只是非零的。

    * OIIO will _not_ create MIP maps for images that don‘t have multi-resolution images by default. You can turn this on by adding `automip=1` to the content of the the

```c
OPENIMAGEIO_IMAGECACHE_OPTIONS
```

environment variable.

的情况下才非零，所以 filterstep 不会在其他情况下进行过滤。

Without MIP maps, blurring and filtering may not work as expected.

指定过滤参数的例子。

    * You can also use

```c
OPENIMAGEIO_IMAGECACHE_OPTIONS
```

to override the amount of memory OIIO uses for caching.

如果纹理是一个 deep.ratfile，你可以使用 "channel "关键字参数

By default, Houdini will set the cache memory to 1/8th of the physical
computer memory.If you set the

```c
OPENIMAGEIO_IMAGECACHE_OPTIONS
```

variable it
overrides that computed cache size.

来指定该文件中的一个通道。

"`wrap`",` string``="repeat" `

`repeat` or `periodic`

The image map will repeat outside the range 0 to 1.Basically, the integer
component of the texturecoordinate is ignored. This is the default.

当您读取的纹理格式不是 Houdini 的本地.picor.rat 时，Houdini 会使用 OpenImageIO 从文件中读取图像数据。在这种情况下，下面的一些变量参数可能不会产生任何影响。

`clamp` or `edge` or `streak`

The texture coordinates will be clamped to the range 0to 1. This causes
evaluations outside the range toevaluate to the color at the closest edge of
the image(the border pixels are streaked outside the range).

当纹理函数评估非胡迪尼格式的纹理时，胡迪尼会切换到使用 OpenImageIO 来评估纹理。
虽然许多变量参数都有相应的值，但有些关键词在 OpenImageIO 中并没有相应的功能。

`black` or `decal` or `color`

Coordinates outside the range 0 to 1 will evaluate tothe border color (rather
than a color in the image). Theborder color is black (i.e. 0) by default.

OIIO 默认不会为没有多分辨率图像的图像创建 MIP 图。你可以通过在 OPENIMAGEIO_IMAGECACHE_OPTIONS 环境变量的内容中添加 utomip=1 来打开这个选项。

"`uwrap`",`string`

(AKA `swrap`)Specifies the behavior when the u coordinate is outsidethe range
0 to 1. The values are the same as with `wrap`.

如果没有 MIP 地图，模糊和过滤可能不会像预期那样工作。

"`vwrap`",`string`

(AKA `twrap`)Specifies the behavior when the v coordinate is outsidethe range
0 to 1. The values are the same as with `wrap`.

你也可以使用 OPENIMAGEIO_IMAGECACHE_OPTIONS 来覆盖 OIIO 用于缓存的内存量。

"`border`",

```c
float|vector|vector4
```

`=0`

Specifies the border color when Black/Decal/Color wrapping is used. **Has no
effect for OpenImageIO formats**.

默认情况下，Houdini 会将缓存内存设置为物理计算机内存的 1/8。
如果你设置了 OPENIMAGEIO_IMAGECACHE_OPTIONS 变量，它就会覆盖该计算的缓存大小。

"`channel`",

Specifies the color channel for textures that have multiple colorplanes (for
example,

```c
diffuse_indirect
```

or `N`).For ptex images, this specifies the index
of the first channel(for example, `0` or `4`).

图像贴图将在 0 到 1 的范围外重复。

"`blur`",`float`

Blurs in x and y directions. Blur is measured as a percentageof the image size

- so a blur of 0.1 will blur 10% of the imagewidth.Use `xblur` and `yblur` if
  you need different bluramounts in either dimension.

基本上，纹理的整数分量

"`xblur`",

(AKA `ublur`, `sblur`)Blur amount in the x image direction.

坐标的整数部分被忽略了。这是默认的。

"`yblur`",

(AKA `vblur`, `tblur`)Blur amount in the y image direction.

纹理坐标将被钳制在 0 到 1 的范围内。

"`pixelblur`",`float`

Blurs the texture by a floating point number of pixels. **Has no effect for
OpenImageIO formats**.

以一个浮点数的像素来模糊纹理。对 OpenImageIO 格式没有影响。

    Cf = texture("map.rat", ss, tt, "pixelblur", 2.0);

"`xpixelblur`",`float`

Blurs the texture by a floating point number of pixels in the X direction.

Blurs the texture by a floating point number of pixels in the X direction.

"`ypixelblur`",`float`

Blurs the texture by a floating point number of pixels in the Y direction.

Blurs the texture by a floating point number of pixels in the Y
direction（在 Y 方向上模糊纹理）。

"`filter`",` string``="box" `

Specifies the type of anti-aliasing filter to be used forevaluation.

指定用于评估的抗锯齿滤波器的类型。

**For Houdini native formats** , the following value should be a string
specifying one of:

评估。

`"point"`

Point sampling (i.e. no filtering)

对于 Houdini 的本地格式，下面的值应该是一个字符串，指定其中之一。

`"box"`

Box filter (default)

点取样（即没有过滤）。

`"gauss"`

Gaussian filter

箱形滤波器（默认）

`"bartlett"`

Bartlett/Triangular filter

高斯滤波器

`"sinc"`

Sinc sharpening filter

Bartlett/Triangular 滤波器

`"hanning"`

Hanning filter

Sinc 锐化滤波器

`"blackman"`

Blackman filter

汉宁滤波

`"catrom"`

Catmull-Rom filter

布莱克曼滤波器

**For all other formats (loaded by OpenImageIO)** , specifying the `"point"`
filter sets the OIIO interpolation mode to `"closest"` and disables MIP
mapping. Any other value uses OIIO smart-bicubic interpolation. You can get
finer control using the `"filtermode"` variadic argument (see below).

Catmull-Rom 滤波器

"`xfilter`",`string`

(AKA `ufilter`, `sfilter`)Specifies the filter for the X direction. The
filters arethe same as with `filter`.

对于所有其他格式（由 OpenImageIO 加载），指定 "点 "过滤器将 OIIO 插值模式设置为 "最接近
"并禁用 MIP 映射。任何其他的值都使用 OIIO 智能立方体插值。你可以使用 "filtermode "变量获得更精细的控制（见下文）。

"`yfilter`",`string`

(AKA `vfilter`, `tfilter`)Specifies the filter for the Y direction. The
filters arethe same as with `filter`.

(AKAufilter,sfilter)

"`filtermode`",`string`

**For Houdini native formats** , VEX also supports simpler
filtering.The`filtermode` can be set to one of:

指定 X 方向的滤波器。滤波器是

`filter`

Use the filter specified by the `filter` keyword argument.

与 filter 相同。

`bilinear`

Use simple bilinear filtering.This is the fastest specialized filtering mode,
but provides the lowest quality filtering.

(AKAvfilter,tfilter)

`biquadratic`

Use simple quadratic filtering (order 3 filtering).

指定 Y 方向的过滤器。滤波器是

`bicubic`

Use simple bicubic filtering.

使用简单的双三次元过滤。

When the `filtermode` is set to `bilinear`, `biquadratic` or `bicubic`,several
arguments (like `filter` and `width`) are ignored and a fixedinterpolation
filter is used instead.Other arguments (notably the `lerp`and `blur` keywords)
are still valid.

当 filtermode 被设置为固定线性、双二次方或立方时。

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

对于 Houdini 本地格式，这指定了 RAT 文件是否应该在不同的 MIP 级别之间进行插值。默认情况下，这是关闭的。打开插值将有助于在不同的

`linear`

Linearly interpolate the opacities of the z-recordsbefore and after the sample
point.

ratfile 的不同 MIP 级别被访问时的不连续性。但是，纹理评估的结果会略微柔和一些（即模糊一些），并且会花费更多的时间。

See [deep shadow maps](../../render/lights.html) for more onthe difference
between the two modes.

这个参数有三个可能的值。

"`beerlambert`",`int`

When evaluating volumetric deep shadow maps, this will enable Beer-
Lambertinterpolation of opacity.Beer-Lambert is more a accurate but
moreexpensive form of interpolation.

在评估体积深层阴影图时，这将使比尔-朗贝尔

The argument should be either 0 or 1.

插值不透明度。 Beer-Lambert 是一种更准确但更昂贵的插值方式。

"`srccolorspace`",`string`

Specifies the color space in which the texture is stored.When texture values
are accessed, they will be translated fromthis space into linear space for
rendering if needed.

昂贵的插值形式。

`auto`

(default) Determine the source color space based on thefile.Currently, this
will assume sRGB color space for8-bit textures and linear for all other
textures.

该参数应该是 0 或 1。

`linear`

Transform to linear space.This currently only affects8-bit textures, since all
others are assumed to be alreadyin linear space.Use this option to force
linearinterpretation of textures used for bump or displacementmaps.

指定存储纹理的颜色空间。

"`face`",

When using a Ptex texture map, the `face` argument is used to specify the face
for ptexture lookup. **Has no effect for OpenImageIO formats**.

当纹理值被访问时，它们将从这个空间被翻译成线性空间以进行渲染。

"`ptexorient`",`int`

When using Ptex textures, the implicit texture coordinates onpolygons are used
as the interpolants for texture lookup (combinedwith the `face`).However,
different software may have differentbeliefs about winding and
orientation.This keyword argumentallows you to control the interpretation of
orientation for Houdinipolygons.The `ptexorient` expects an integer argument
which iscomposed of a bit-field

这个空间转化为线性空间，以便在需要时进行渲染。

- bit 0Ã01: Complement the `s` coordinate

(默认情况下）根据文件确定源颜色空间。

- bit 0Ã02: Complement the `t` coordinate

文件确定源色彩空间。 目前，这将假设 8 位纹理为 sRGB 色彩空间，而所有纹理为线性空间。

- bit 0Ã04: Swap the `s` and `t` coordinates

8 位纹理的 sRGB 色彩空间，以及所有其他纹理的线性空间。

For example, a value of 6 (0Ã4|0Ã2) is equivalent to calling`texture(map, 1-t, s)` instead of `texture(map, s, t)`.

转换到线性空间。 目前这只影响到

The default `ptexorient` is 0, which works correctly with theexamples found at
<http://ptex.us>.

8 位纹理，因为所有其他纹理都被假定为已经是

**Has no effect for OpenImageIO formats**.

在线性空间中。 使用这个选项可以强制对用于凹凸或位移的纹理进行线性

"

```c
iesnormalization
```

",` string``="maxvalue" `

Select different methods of normalizing IES map‘soutput values whenquerying
via `environment()` function.

解释用于凹凸或位移贴图的纹理。

`none`

Use raw values scaled by the candela multiplier in the header.

贴图。

`maxvalue`

(default) Normalized by the maximum value. This is legacy behavior usedby
mantra‘sdefault light shader.

当使用 Ptex 纹理贴图时，faceargument 用于指定 ptexture 查找的面。对 OpenImageIO 格式没有影响。

```c
preserveenergy
```

Normalized by values integrated over coverage angles, so that IESprofile
affects shaping of the light while preserving its overallenergy output.

当使用 Ptex 纹理时，多边形上的隐含纹理坐标被用来作为多边形上的纹理坐标。

## Examples

    f = filterstep(0.5, s+t, "filter", "gauss", "width", 2);

The

```c
filterstep(float edge, x, ...)
```

form is roughly equivalent to:

当使用 Ptex 纹理时，多边形上的隐含纹理坐标被用作纹理查找的插值（结合 face

    f = filterstep(edge, x, x + abs(Du(x) + Dv(x)));
