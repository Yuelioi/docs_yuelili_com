---
title: colormap
order: 1
category:
  - houdini
---
    
## 描述

Looks up a (filtered) color from a texture file.

This function does bilinear interpolation of the pixel values. To get
unfiltered pixel values, use [rawcolormap](rawcolormap.html "Looks up an
unfiltered color from a texture file.").

这个函数对像素值进行双线性插值。要获得未经过滤的像素值，请使用 awcolormap。

```c
vector|vector4 colormap(string filename, vector uvw, ...)
```

Uses the first two components of uvw as unit (0-1) coordinates to point sample
the texture file.

使用 uvwas 单位（0-1）坐标的前两个分量来对纹理文件进行点取样。

```c
vector|vector4 colormap(string filename, float u, float v, ...)
```

Uses u and v as unit (0-1) coordinates to point sample the texture file.

使用 uandvas 单位（0-1）坐标来对纹理文件进行取样。

`vector|vector4 colormap(string filename, vector uv, vector du, vector dv, int samples, ...)`

Uses the quadrilateral formed by

```c
(uv)-(uv+du)-(uv+du+dv)-(uv+dv)
```

to area
sample the texture file.Takes samples number of stochastic samples (unless the
image is a .rat file).

使用(uv)-(uv+du)-(uv+du+dv)-(uv+dv)形成的四边形来对纹理文件进行区域取样。

`vector|vector4 colormap(string filename, vector uv0, vector uv1, vector uv2, vector uv3, ...)`

Uses the quadrilateral formed by

```c
(uv0)-(uv1)-(uv2)-(uv3)
```

to area sample the
texture file.

Takessamplesnumber of stochastic samples（除非图像是.rat 文件）。

`vector|vector4 colormap(string filename, vector uv0, vector uv1, vector uv2, vector uv3, int samples, ...)`

Uses the quadrilateral formed by

```c
(uv0)-(uv1)-(uv2)-(uv3)
```

to area sample the
texture file.Takes samples number of stochastic samples (unless the image is a
.rat file).

使用(uv0)-(uv1)-(uv2)-(uv3)组成的四边形对纹理文件进行区域采样。

`vector|vector4 colormap(string filename, float u0, float v0, float u1, float v1, float u2, float v2, float u3, float v3, int samples, ...)`

Uses the quadrilateral formed by

```c
(uv0)-(uv1)-(uv2)-(uv3)
```

to area sample the
texture file.Takes samples number of stochastic samples (unless the image is a
.rat file).

使用(uv0)-(uv1)-(uv2)-(uv3)形成的四边形对纹理文件进行区域采样。

Returns

If you call the function with a `vector4` return type, the fourth component is
the alpha channel of the texture. If the image does not have alpha, the fourth
component is always `1`.

Takessamples 随机采样的数量（除非图像是.rat 文件）。

## Image filtering options

Examples of specifying filter parameters:

使用(uv0)-(uv1)-(uv2)-(uv3)形成的四边形对纹理文件进行区域采样。

    colormap(map, u, v, "smode", "decal", "tmode", "repeat", "border", {.1,1,1});colormap(map, u, v, "mode", "clamp", "width", 1.3);colormap(map, u, v, "filter", "gauss", "width", 1.3, "mode", "repeat");

If the texture is a deep `.rat` file, you can use the `"channel"` keyword
argumentto specify a channel in the file:

获取随机样本的数量（除非图像是.rat 文件）。

    string channelname = "N";cf = colormap(map, u, v, "channel", channelname);

- When you read a texture in a format other than Houdini‘snative `.pic` or `.rat`, Houdini uses [OpenImageIO \_\_](http://en.wikipedia.org/wiki/OpenImageIO)to read the image data from the file. In that case, some of the variadic arguments below may not have any effect.

如果你用 avector4 返回类型调用该函数，第四个分量就是纹理的 alpha 通道。如果图像没有 alpha，第四分量总是 1。

- When the texture function evaluates non-houdini format textures, Houdini switches to use OpenImageIO for texture evaluation.While there are corresponding values to many of the variadic keywords, some keywords don‘t have an equivalent function in OpenImageIO.

指定过滤器参数的例子。

    * OIIO will _not_ create MIP maps for images that don‘t have multi-resolution images by default. You can turn this on by adding `automip=1` to the content of the the

```c
OPENIMAGEIO_IMAGECACHE_OPTIONS
```

environment variable.

如果纹理是一个 deep.ratfile，你可以使用 "channel "关键字参数

Without MIP maps, blurring and filtering may not work as expected.

来指定该文件中的一个通道。

    * You can also use

```c
OPENIMAGEIO_IMAGECACHE_OPTIONS
```

to override the amount of memory OIIO uses for caching.

当你读取一个非 Houdini 本地.picor.rat 格式的纹理时，Houdini 使用 OpenImageIO 从文件中读取图像数据。在这种情况下，下面的一些变量参数可能不会产生任何影响。

By default, Houdini will set the cache memory to 1/8th of the physical
computer memory.If you set the

```c
OPENIMAGEIO_IMAGECACHE_OPTIONS
```

variable it
overrides that computed cache size.

当纹理函数评估非胡迪尼格式的纹理时，胡迪尼会切换到使用 OpenImageIO 来评估纹理。
虽然许多变量参数都有相应的值，但有些关键词在 OpenImageIO 中并没有相应的功能。

Show/hide arguments

"`wrap`",` string``="repeat" `

`repeat` or `periodic`

The image map will repeat outside the range 0 to 1.Basically, the integer
component of the texturecoordinate is ignored. This is the default.

OIIO 默认不会为没有多分辨率图像的图像创建 MIP 图。你可以通过在 OPENIMAGEIO_IMAGECACHE_OPTIONS 环境变量的内容中添加 utomip=1 来打开这个选项。

`clamp` or `edge` or `streak`

The texture coordinates will be clamped to the range 0to 1. This causes
evaluations outside the range toevaluate to the color at the closest edge of
the image(the border pixels are streaked outside the range).

如果没有 MIP 地图，模糊和过滤可能不会像预期那样工作。

`black` or `decal` or `color`

Coordinates outside the range 0 to 1 will evaluate tothe border color (rather
than a color in the image). Theborder color is black (i.e. 0) by default.

你也可以使用 OPENIMAGEIO_IMAGECACHE_OPTIONS 来覆盖 OIIO 用于缓存的内存量。

"`uwrap`",`string`

(AKA `swrap`)Specifies the behavior when the u coordinate is outsidethe range
0 to 1. The values are the same as with `wrap`.

默认情况下，Houdini 会将缓存内存设置为物理计算机内存的 1/8。
如果你设置了 OPENIMAGEIO_IMAGECACHE_OPTIONS 变量，它就会覆盖该计算的缓存大小。

"`vwrap`",`string`

(AKA `twrap`)Specifies the behavior when the v coordinate is outsidethe range
0 to 1. The values are the same as with `wrap`.

(AKAtwrap)

"`border`",

```c
float|vector|vector4
```

`=0`

Specifies the border color when Black/Decal/Color wrapping is used. **Has no
effect for OpenImageIO formats**.

指定当 v 坐标在 0 到 1 范围之外时的行为。

"`channel`",

Specifies the color channel for textures that have multiple colorplanes (for
example,

```c
diffuse_indirect
```

or `N`).For ptex images, this specifies the index
of the first channel(for example, `0` or `4`).

其值与 wrap 相同。

"`blur`",`float`

Blurs in x and y directions. Blur is measured as a percentageof the image size

- so a blur of 0.1 will blur 10% of the imagewidth.Use `xblur` and `yblur` if
  you need different bluramounts in either dimension.

指定使用黑/白/彩色包装时的边框颜色，对 OpenImageIO 格式没有影响。

"`xblur`",

(AKA `ublur`, `sblur`)Blur amount in the x image direction.

为有多个颜色平面的纹理指定颜色通道（例如，扩散面）。

"`yblur`",

(AKA `vblur`, `tblur`)Blur amount in the y image direction.

纹理的颜色通道（例如，diffuse_indirectorN）。

"`pixelblur`",`float`

Blurs the texture by a floating point number of pixels. **Has no effect for
OpenImageIO formats**.

对于 ptex 图像，这指定了第一个通道的索引

    Cf = texture("map.rat", ss, tt, "pixelblur", 2.0);

"`xpixelblur`",`float`

Blurs the texture by a floating point number of pixels in the X direction.

(例如，0 或 4)。

"`ypixelblur`",`float`

Blurs the texture by a floating point number of pixels in the Y direction.

X 和 Y 方向的模糊。模糊是以图像大小的百分比来衡量的

"`filter`",` string``="box" `

Specifies the type of anti-aliasing filter to be used forevaluation.

的百分比来衡量 - 所以 0.1 的模糊将模糊 10%的图像宽度。

**For Houdini native formats** , the following value should be a string
specifying one of:

宽度。 如果你需要在这两个维度上有不同的模糊，请使用 xblurandyblur。

`"point"`

Point sampling (i.e. no filtering)

如果你需要在任何一个维度上有不同的模糊量。

`"box"`

Box filter (default)

(AKAublur,sblur)

`"gauss"`

Gaussian filter

在 X 图像方向的模糊量。

`"bartlett"`

Bartlett/Triangular filter

(AKAvblur,tblur)

`"sinc"`

Sinc sharpening filter

在 Y 方向上的模糊量。

`"hanning"`

Hanning filter

以一个浮点数的像素来模糊纹理。对 OpenImageIO 格式没有影响。

`"blackman"`

Blackman filter

在 X 方向上模糊纹理的浮点像素数。

`"catrom"`

Catmull-Rom filter

Blurs the texture by a floating point number of pixels in the Y
direction（在 Y 方向上模糊纹理）。

**For all other formats (loaded by OpenImageIO)** , specifying the `"point"`
filter sets the OIIO interpolation mode to `"closest"` and disables MIP
mapping. Any other value uses OIIO smart-bicubic interpolation. You can get
finer control using the `"filtermode"` variadic argument (see below).

指定用于评估的抗锯齿滤波器的类型。

"`xfilter`",`string`

(AKA `ufilter`, `sfilter`)Specifies the filter for the X direction. The
filters arethe same as with `filter`.

(AKAufilter,sfilter)

"`yfilter`",`string`

(AKA `vfilter`, `tfilter`)Specifies the filter for the Y direction. The
filters arethe same as with `filter`.

指定 X 方向的过滤器。滤波器是

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

(AKAuwidth,swidth)

`1`

Approximate MIP map interpolation (fast).

X 方向的过滤宽度。

`2`

High Quality MIP map interpolation (slower but highest quality).

(AKAvwidth,twidth)

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

这个空间转化为线性空间，以便在需要时进行渲染。

**Has no effect for OpenImageIO formats**.

(默认情况下）根据文件确定源颜色空间。

"

```c
iesnormalization
```

",` string``="maxvalue" `

Select different methods of normalizing IES map‘soutput values whenquerying
via `environment()` function.

文件确定源色彩空间。 目前，这将假设 8 位纹理为 sRGB 色彩空间，而所有纹理为线性空间。

`none`

Use raw values scaled by the candela multiplier in the header.

使用由标题中的坎德拉乘法器缩放的原始值。

`maxvalue`

(default) Normalized by the maximum value. This is legacy behavior usedby
mantra‘sdefault light shader.

(默认情况下)以最大值为标准。这是 mantra 的默认光照器使用的传统行为。

```c
preserveenergy
```

Normalized by values integrated over coverage angles, so that IESprofile
affects shaping of the light while preserving its overallenergy output.

mantra's default light shader。
