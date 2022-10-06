---
title: environment
order: 3
category:
  - houdini
---
    
## 描述

Returns the color of the environment texture.

On this page |

- Image filtering options

图像过滤选项

- Examples

---|---

```c
vector  environment(string texture_filename, vector reflect_dir, ...)
```

```c
vector4  environment(string texture_filename, vector reflect_dir, ...)
```

`vector environment(string texture_filename, vector reflect_dir0, vector reflect_dir1, vector reflect_dir2, vector reflect_dir3, ...)`

`vector4 environment(string texture_filename, vector reflect_dir0, vector reflect_dir1, vector reflect_dir2, vector reflect_dir3, ...)`

`vector environment(string texture_filename, vector reflect_dir, float filter_angle, ...)`

`vector4 environment(string texture_filename, vector reflect_dir, float filter_angle, ...)`

Returns the color of the environment texture in the direction given by the
`reflect_dir` argument. The signatures that specify four vectors filter the
map pixels found within the cone defined by the vectors.Rather than specifying
a filtering cone by providing four vectors, it is also possible to indicate an
angle to filter over using the filter_angle argument with a single reflection
direction.

返回环境纹理在 thereflect_dirargument 给定方向上的颜色。指定四个向量的签名会过滤在向量定义的锥体内发现的地图像素。
与其通过提供四个向量来指定一个过滤锥体，还可以使用 filter_angle 参数用一个反射方向来表示过滤的角度。

The environment function can also be used to look up intensity values in an
IES photometric light map, with the correct angular mapping applied.

环境函数也可以用来查询 IES 光度图中的强度值，并应用正确的角度映射。

Note

To perform environment map lookups in object space, you‘ll need to first
transform the direction vector using the vtransform() function.

要在物体空间执行环境图查询，你需要首先使用 vtransform()函数转换方向矢量。

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

当您读取的纹理格式不是 Houdini 的本地.picor.rat 时，Houdini 会使用 OpenImageIO 从文件中读取图像数据。在这种情况下，下面的一些变量参数可能不会产生任何影响。

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

(边界像素在该范围之外的条纹）。

"`xblur`",

(AKA `ublur`, `sblur`)Blur amount in the x image direction.

(AKAublur,sblur)

"`yblur`",

(AKA `vblur`, `tblur`)Blur amount in the y image direction.

在 X 图像方向的模糊量。

"`pixelblur`",`float`

Blurs the texture by a floating point number of pixels. **Has no effect for
OpenImageIO formats**.

(AKAvblur,tblur)

    Cf = texture("map.rat", ss, tt, "pixelblur", 2.0);

"`xpixelblur`",`float`

Blurs the texture by a floating point number of pixels in the X direction.

Y 方向的模糊量。

"`ypixelblur`",`float`

Blurs the texture by a floating point number of pixels in the Y direction.

对纹理进行浮点数的模糊处理，对 OpenImageIO 格式没有影响。

"`filter`",` string``="box" `

Specifies the type of anti-aliasing filter to be used forevaluation.

在 X 方向上模糊纹理的浮点像素数。

**For Houdini native formats** , the following value should be a string
specifying one of:

Blurs the texture by a floating point number of pixels in the Y
direction（在 Y 方向上模糊纹理）。

`"point"`

Point sampling (i.e. no filtering)

指定用于评估的抗锯齿滤波器的类型。

`"box"`

Box filter (default)

评估。

`"gauss"`

Gaussian filter

对于 Houdini 的本地格式，下面的值应该是一个字符串，指定其中之一。

`"bartlett"`

Bartlett/Triangular filter

点取样（即没有过滤）。

`"sinc"`

Sinc sharpening filter

箱形滤波器（默认）

`"hanning"`

Hanning filter

高斯滤波器

`"blackman"`

Blackman filter

Bartlett/Triangular 滤波器

`"catrom"`

Catmull-Rom filter

Sinc 锐化滤波器

**For all other formats (loaded by OpenImageIO)** , specifying the `"point"`
filter sets the OIIO interpolation mode to `"closest"` and disables MIP
mapping. Any other value uses OIIO smart-bicubic interpolation. You can get
finer control using the `"filtermode"` variadic argument (see below).

汉宁滤波

"`xfilter`",`string`

(AKA `ufilter`, `sfilter`)Specifies the filter for the X direction. The
filters arethe same as with `filter`.

布莱克曼滤波器

"`yfilter`",`string`

(AKA `vfilter`, `tfilter`)Specifies the filter for the Y direction. The
filters arethe same as with `filter`.

Catmull-Rom 滤波器

"`filtermode`",`string`

**For Houdini native formats** , VEX also supports simpler
filtering.The`filtermode` can be set to one of:

对于所有其他格式（由 OpenImageIO 加载），指定 "点 "过滤器将 OIIO 插值模式设置为 "最接近
"并禁用 MIP 映射。任何其他的值都使用 OIIO 智能立方体插值。你可以使用 "filtermode "变量获得更精细的控制（见下文）。

`filter`

Use the filter specified by the `filter` keyword argument.

(AKAufilter,sfilter)

`bilinear`

Use simple bilinear filtering.This is the fastest specialized filtering mode,
but provides the lowest quality filtering.

使用简单的双线性滤波。 这是最快的专门滤波模式，但提供最低质量的滤波。

`biquadratic`

Use simple quadratic filtering (order 3 filtering).

使用简单的二次过滤（3 阶过滤）。

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

对于 Houdini 本地格式，这指定了 RAT 文件是否应该在不同的 MIP 级别之间进行插值。默认情况下，这是关闭的。打开插值将有助于消除不同的 MIP 级别之间的不连续性。

`linear`

Linearly interpolate the opacities of the z-recordsbefore and after the sample
point.

线性插值 Z 记录的不透明度

See [deep shadow maps](../../render/lights.html) for more onthe difference
between the two modes.

采样点之前和之后的不透明度。

"`beerlambert`",`int`

When evaluating volumetric deep shadow maps, this will enable Beer-
Lambertinterpolation of opacity.Beer-Lambert is more a accurate but
moreexpensive form of interpolation.

更多关于这两种模式的区别，请参见 eep shadow map。

The argument should be either 0 or 1.

这两种模式之间的区别。

"`srccolorspace`",`string`

Specifies the color space in which the texture is stored.When texture values
are accessed, they will be translated fromthis space into linear space for
rendering if needed.

在评估体积深部阴影图时，这将使比尔-朗贝尔

`auto`

(default) Determine the source color space based on thefile.Currently, this
will assume sRGB color space for8-bit textures and linear for all other
textures.

内插法的不透明度。 Beer-Lambert 是一种更准确但更昂贵的插值方式。

`linear`

Transform to linear space.This currently only affects8-bit textures, since all
others are assumed to be alreadyin linear space.Use this option to force
linearinterpretation of textures used for bump or displacementmaps.

昂贵的插值形式。

"`face`",

When using a Ptex texture map, the `face` argument is used to specify the face
for ptexture lookup. **Has no effect for OpenImageIO formats**.

该参数应该是 0 或 1。

"`ptexorient`",`int`

When using Ptex textures, the implicit texture coordinates onpolygons are used
as the interpolants for texture lookup (combinedwith the `face`).However,
different software may have differentbeliefs about winding and
orientation.This keyword argumentallows you to control the interpretation of
orientation for Houdinipolygons.The `ptexorient` expects an integer argument
which iscomposed of a bit-field

指定存储纹理的颜色空间。

- bit 0Ã01: Complement the `s` coordinate

当纹理值被访问时，它们将从这个空间被翻译成线性空间以进行渲染。

- bit 0Ã02: Complement the `t` coordinate

这个空间转化为线性空间，以便在需要时进行渲染。

- bit 0Ã04: Swap the `s` and `t` coordinates

(默认情况下）根据文件确定源颜色空间。

For example, a value of 6 (0Ã4|0Ã2) is equivalent to calling`texture(map, 1-t, s)` instead of `texture(map, s, t)`.

文件确定源色彩空间。 目前，这将假设 8 位纹理为 sRGB 色彩空间，而所有纹理为线性空间。

The default `ptexorient` is 0, which works correctly with theexamples found at
<http://ptex.us>.

8 位纹理的 sRGB 色彩空间，以及所有其他纹理的线性空间。

**Has no effect for OpenImageIO formats**.

转换到线性空间。 目前这只影响到

"

```c
iesnormalization
```

",` string``="maxvalue" `

Select different methods of normalizing IES map‘soutput values whenquerying
via `environment()` function.

8 位纹理，因为所有其他纹理都被假定为已经是

`none`

Use raw values scaled by the candela multiplier in the header.

在线性空间中。 使用这个选项可以强制对用于凹凸或位移的纹理进行线性

`maxvalue`

(default) Normalized by the maximum value. This is legacy behavior usedby
mantra‘sdefault light shader.

解释用于凹凸或位移贴图的纹理。

```c
preserveenergy
```

Normalized by values integrated over coverage angles, so that IESprofile
affects shaping of the light while preserving its overallenergy output.

贴图。

## Examples

    vector dir = vtransform("space:current", "space:object", {0, 1, 0});vector clr = environment("sky.rat", dir);
