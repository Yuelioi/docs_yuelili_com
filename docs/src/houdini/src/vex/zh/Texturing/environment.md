---
title: environment
order: 4
category:
  - vex
---

在这一页

- [图片过滤选项](#image-filtering-options)
- [例子](#例子)

`vector environment(string texture_filename, vector reflect_dir, ...)`

`vector4 environment(string texture_filename, vector reflect_dir, ...)`

`vector environment(string texture_filename, vector reflect_dir0, vector reflect_dir1, vector reflect_dir2, vector reflect_dir3, ...)`

`vector4 environment(string texture_filename, vector reflect_dir0, vector reflect_dir1, vector reflect_dir2, vector reflect_dir3, ...)`

`vector environment(string texture_filename, vector reflect_dir, float filter_angle, ...)`

`vector4 environment(string texture_filename, vector reflect_dir, float filter_angle, ...)`

返回环境纹理在`reflect_dir`参数所给方向上的颜色。指定四个向量的签名可以过滤在向量定义的锥体中发现的地图像素。与其通过提供四个向量来指定一个过滤锥体，还可以使用 filter_angle 参数和一个反射方向来表示过滤的角度。

环境功能也可用于查询 IES 光度图中的强度值，并应用正确的角度映射。

::: info Note

为了在物体空间中进行环境图查询，你需要首先使用 vtransform()函数对方向向量进行转换。

## 图像过滤选项

[¶](#image-filtering-options)

指定过滤器参数的例子。

```c
colormap(map, u, v, "smode", "decal", "tmode", "repeat", "border", {.1,1,1});
colormap(map, u, v, "mode", "clamp", "width", 1.3);
colormap(map, u, v, "filter", "gauss", "width", 1.3, "mode", "repeat");

```

If the texture is a deep `.rat` file, you can use the `"channel"` keyword argument
to specify a channel in the file:

```c
string channelname = "N";
cf = colormap(map, u, v, "channel", channelname);
```

- When you read a texture in a format other than Houdini’s native `.pic` or `.rat`, Houdini uses [OpenImageIO](http://en.wikipedia.org/wiki/OpenImageIO) to read the image data from the file. In that case, some of the variadic arguments below may not have any effect.
- When the texture function evaluates non-houdini format textures, Houdini switches to use OpenImageIO for texture evaluation. While there are corresponding values to many of the variadic keywords, some keywords don’t have an equivalent function in OpenImageIO.

  - OIIO will _not_ create MIP maps for images that don’t have multi-resolution images by default. You can turn this on by adding `automip=1` to the content of the the `OPENIMAGEIO_IMAGECACHE_OPTIONS` environment variable.

  Without MIP maps, blurring and filtering may not work as expected.

  - You can also use `OPENIMAGEIO_IMAGECACHE_OPTIONS` to override the amount of memory OIIO uses for caching.

  By default, Houdini will set the cache memory to 1/8th of the physical computer memory. If you set the `OPENIMAGEIO_IMAGECACHE_OPTIONS` variable it overrides that computed cache size.

## Arguments

"`wrap`",
`string`
`="repeat"`

`repeat` or `periodic`

The image map will repeat outside the range 0 to 1.
Basically, the integer component of the texture
coordinate is ignored. This is the default.

`clamp` or `edge` or `streak`

The texture coordinates will be clamped to the range 0
to 1. This causes evaluations outside the range to
evaluate to the color at the closest edge of the image
(the border pixels are streaked outside the range).

`black` or `decal` or `color`

Coordinates outside the range 0 to 1 will evaluate to
the border color (rather than a color in the image). The
border color is black (i.e. 0) by default.

"`uwrap`",
`string`

(AKA `swrap`)
Specifies the behavior when the u coordinate is outside
the range 0 to 1. The values are the same as with `wrap`.

"`vwrap`",
`string`

(AKA `twrap`)
Specifies the behavior when the v coordinate is outside
the range 0 to 1. The values are the same as with `wrap`.

"`border`",
`float|vector|vector4`
`=0`

Specifies the border color when Black/Decal/Color wrapping is used.
**Has no effect for OpenImageIO formats**.

"`channel`",

Specifies the color channel for textures that have multiple color
planes (for example, `diffuse_indirect` or `N`).
For ptex images, this specifies the index of the first channel
(for example, `0` or `4`).

"`blur`",
`float`

Blurs in x and y directions. Blur is measured as a percentage
of the image size - so a blur of 0.1 will blur 10% of the image
width. Use `xblur` and `yblur` if you need different blur
amounts in either dimension.

"`xblur`",

(AKA `ublur`, `sblur`)
Blur amount in the x image direction.

"`yblur`",

(AKA `vblur`, `tblur`)
Blur amount in the y image direction.

"`pixelblur`",
`float`

Blurs the texture by a floating point number of pixels.
**Has no effect for OpenImageIO formats**.

```c
Cf = texture("map.rat", ss, tt, "pixelblur", 2.0);

```

"`xpixelblur`",
`float`

Blurs the texture by a floating point number of pixels in the X direction.

"`ypixelblur`",
`float`

Blurs the texture by a floating point number of pixels in the Y direction.

"`filter`",
`string`
`="box"`

Specifies the type of anti-aliasing filter to be used for
evaluation.

**For Houdini native formats**, the following value should be a string specifying one of:

`"point"`

Point sampling (i.e. no filtering)

`"box"`

Box filter (default)

`"gauss"`

Gaussian filter

`"bartlett"`

Bartlett/Triangular filter

`"sinc"`

Sinc sharpening filter

`"hanning"`

Hanning filter

`"blackman"`

Blackman filter

`"catrom"`

Catmull-Rom filter

**For all other formats (loaded by OpenImageIO)**, specifying the `"point"` filter sets the OIIO interpolation mode to `"closest"` and disables MIP mapping. Any other value uses OIIO smart-bicubic interpolation. You can get finer control using the `"filtermode"` variadic argument (see below).

"`xfilter`",
`string`

(AKA `ufilter`, `sfilter`)
Specifies the filter for the X direction. The filters are
the same as with `filter`.

"`yfilter`",
`string`

(AKA `vfilter`, `tfilter`)
Specifies the filter for the Y direction. The filters are
the same as with `filter`.

"`filtermode`",
`string`

**For Houdini native formats**, VEX also supports simpler filtering. The
`filtermode` can be set to one of:

`filter`

Use the filter specified by the `filter` keyword argument.

`bilinear`

Use simple bilinear filtering. This is the fastest specialized filtering mode, but provides the lowest quality filtering.

`biquadratic`

Use simple quadratic filtering (order 3 filtering).

`bicubic`

Use simple bicubic filtering.

When the `filtermode` is set to `bilinear`, `biquadratic` or `bicubic`,
several arguments (like `filter` and `width`) are ignored and a fixed
interpolation filter is used instead. Other arguments (notably the `lerp`
and `blur` keywords) are still valid.

**For all other formats (loaded by OpenImageIO)** you can set the `filtermode` to `"filter"` (see `"filter"` above), `"bilinear"`, `"biquadratic"`, or `"bicubic"`.

"`width`",
`float`
`=1.0`

**For Houdini native formats**, this sets the filter width in both X and Y directions.

**For all other formats (loaded by OpenImageIO)**, this sets the OIIO `swidth` and `twidth` options.

"`xwidth`",
`float`

(AKA `uwidth`, `swidth`)
Filter width in the X direction.

"`ywidth`",
`float`

(AKA `vwidth`, `twidth`)
Filter width in the Y direction.

"`zwidth`",
`float`

Filter width in the Z direction (for shadow maps).
This is measured in world space units, unlike the other width arguments.

"`extrapolate`",
`int`

whether to use derivative extrapolation
when computing anti-aliasing information. Extrapolation of
derivatives is on by default. The argument should be either 0 or

1.

"`lerp`",
`int`

**For Houdini native formats**, this specifies whether RAT files should interpolate between different MIP levels. By default, this is turned off. Turning interpolation on will help remove discontinuities when different
MIP levels of a `.rat` file are accessed. However, the results of texture evaluation will be slightly softer (i.e. blurrier) and will take more time.

There are three possible values for this argument.

`0`

Disable MIP map interpolation (fastest).

`1`

Approximate MIP map interpolation (fast).

`2`

High Quality MIP map interpolation (slower but highest quality).

**For all other formats (loaded by OpenImageIO)**, a value of 0 specifies a single MIP level, any other value specifies trilinear interpolation.

"`depthinterp`",
`string`

Specifies the depth interpolation mode for deep shadow maps,
to control the opacity value that will be returned when the
map is sampled between two z-records.

The argument must be a string.

`discrete`

(default) Return the first z-record before the sample
point.

`linear`

Linearly interpolate the opacities of the z-records
before and after the sample point.

See [deep shadow maps](../../render/lights.html) for more on
the difference between the two modes.

"`beerlambert`",
`int`

When evaluating volumetric deep shadow maps, this will enable Beer-Lambert
interpolation of opacity. Beer-Lambert is more a accurate but more
expensive form of interpolation.

The argument should be either 0 or 1.

"`srccolorspace`",
`string`

Specifies the color space in which the texture is stored.
When texture values are accessed, they will be translated from
this space into linear space for rendering if needed.

`auto`

(default) Determine the source color space based on the
file. Currently, this will assume sRGB color space for
8-bit textures and linear for all other textures.

`linear`

Transform to linear space. This currently only affects
8-bit textures, since all others are assumed to be already
in linear space. Use this option to force linear
interpretation of textures used for bump or displacement
maps.

`sRGB`

Forcibly translate from sRGB color space to linear space regardless of
the bit-depth or number of channels in the the texture.

`rec709`

Convert from Rec709 color space to linear space.

`gamma22`

Convert from Gamma 2.2 color space to linear space.

"`face`",

When using a Ptex texture map, the `face` argument is used to specify the face for ptexture lookup.
**Has no effect for OpenImageIO formats**.

"`ptexorient`",
`int`

When using Ptex textures, the implicit texture coordinates on
polygons are used as the interpolants for texture lookup (combined
with the `face`). However, different software may have different
beliefs about winding and orientation. This keyword argument
allows you to control the interpretation of orientation for Houdini
polygons. The `ptexorient` expects an integer argument which is
composed of a bit-field

- bit 0×01: Complement the `s` coordinate
- bit 0×02: Complement the `t` coordinate
- bit 0×04: Swap the `s` and `t` coordinates

For example, a value of 6 (0×4|0×2) is equivalent to calling
`texture(map, 1-t, s)` instead of `texture(map, s, t)`.

The default `ptexorient` is 0, which works correctly with the
examples found at <http://ptex.us>.

**Has no effect for OpenImageIO formats**.

"`iesnormalization`",
`string`
`="maxvalue"`

Select different methods of normalizing IES map’s output values when
querying via `environment()` function.

`none`

Use raw values scaled by the candela multiplier in the header.

`maxvalue`

(default) Normalized by the maximum value. This is legacy behavior used
by mantra’s default light shader.

`preserveenergy`

Normalized by values integrated over coverage angles, so that IES
profile affects shaping of the light while preserving its overall
energy output.

## Examples



```c
vector dir = vtransform("space:current", "space:object", {0, 1, 0});
vector clr = environment("sky.rat", dir);
```

## See also

- [isixpack](../../ref/utils/isixpack.html)

|
color

[blackbody](blackbody.html)

[colormap](colormap.html)

[ctransform](ctransform.html)

[environment](environment.html)

[hsvtorgb](hsvtorgb.html)

[luminance](luminance.html)

[ocio_activedisplays](ocio_activedisplays.html)

[ocio_activeviews](ocio_activeviews.html)

[ocio_import](ocio_import.html)

[ocio_transform](ocio_parsecolorspace.html)

[ocio_roles](ocio_roles.html)

[ocio_spaces](ocio_spaces.html)

[ocio_transform](ocio_transform.html)

[rawcolormap](rawcolormap.html)

[rgbtohsv](rgbtohsv.html)

[rgbtoxyz](rgbtoxyz.html)

[xyztorgb](xyztorgb.html)

|
file

[colormap](colormap.html)

[depthmap](depthmap.html)

[dsmpixel](dsmpixel.html)

[environment](environment.html)

[filter_remap](filter_remap.html)

[importance_remap](importance_remap.html)

[pcclose](pcclose.html)

[pcexport](pcexport.html)

[pcopen](pcopen.html)

[pcopenlod](pcopenlod.html)

[pcsampleleaf](pcsampleleaf.html)

[pcwrite](pcwrite.html)

[ptexture](ptexture.html)

[rawcolormap](rawcolormap.html)

[sensor_panorama_create](sensor_panorama_create.html)

[shadowmap](shadowmap.html)

[teximport](teximport.html)

[texture](texture.html)

[texture3d](texture3d.html)

[writepixel](writepixel.html)

|
map

[colormap](colormap.html)

[depthmap](depthmap.html)

[dsmpixel](dsmpixel.html)

[environment](environment.html)

[filter_remap](filter_remap.html)

[importance_remap](importance_remap.html)

[ptexture](ptexture.html)

[rawcolormap](rawcolormap.html)

[sensor_panorama_create](sensor_panorama_create.html)

[shadowmap](shadowmap.html)

[teximport](teximport.html)

[texture](texture.html)

[tw_nspace](tw_nspace.html)

[tw_space](tw_space.html)

[tw_vspace](tw_vspace.html)

[wt_nspace](wt_nspace.html)

[wt_space](wt_space.html)

[wt_vspace](wt_vspace.html)

|
shading

[Du](Du.html)

[Dv](Dv.html)

[Dw](Dw.html)

[area](area.html)

[ashikhmin](ashikhmin.html)

[atten](atten.html)

[blinn](blinn.html)

[blinnBRDF](blinnBRDF.html)

[chiang](chiang.html)

[computenormal](computenormal.html)

[cone](cone.html)

[cvex_bsdf](cvex_bsdf.html)

[diffuse](diffuse.html)

[diffuseBRDF](diffuseBRDF.html)

[dsmpixel](dsmpixel.html)

[environment](environment.html)

[fastshadow](fastshadow.html)

[filtershadow](filtershadow.html)

[filterstep](filterstep.html)

[fresnel](fresnel.html)

[frontface](frontface.html)

[getderiv](getderiv.html)

[getfogname](getfogname.html)

[getglobalraylevel](getglobalraylevel.html)

[getgroupid](getgroupid.html)

[getlocalcurvature](getlocalcurvature.html)

[getmaterialid](getmaterialid.html)

[getobjectid](getobjectid.html)

[getobjectname](getobjectname.html)

[getprimid](getprimid.html)

[getptextureid](getptextureid.html)

[getraylevel](getraylevel.html)

[getrayweight](getrayweight.html)

[getsamplestore](getsamplestore.html)

[getsmoothP](getsmoothP.html)

[getuvtangents](getuvtangents.html)

[ggx](ggx.html)

[gradient](gradient.html)

[hair](hair.html)

[henyeygreenstein](henyeygreenstein.html)

[isotropic](isotropic.html)

[israytracing](israytracing.html)

[isshadingRHS](isshadingRHS.html)

[lightstate](lightstate.html)

[matchvex_blinn](matchvex_blinn.html)

[matchvex_specular](matchvex_specular.html)

[objectstate](objectstate.html)

[phong](phong.html)

[phongBRDF](phongBRDF.html)

[phonglobe](phonglobe.html)

[ptexture](ptexture.html)

[rayhittest](rayhittest.html)

[rayimport](rayimport.html)

[reflect](reflect.html)

[refract](refract.html)

[renderstate](renderstate.html)

[resolvemissedray](resolvemissedray.html)

[sample_geometry](sample_geometry.html)

[scatter](scatter.html)

[setsamplestore](setsamplestore.html)

[specular](specular.html)

[specularBRDF](specularBRDF.html)

[sssapprox](sssapprox.html)

[teximport](teximport.html)

[texture](texture.html)

[trace](trace.html)

[translucent](translucent.html)

[uvunwrap](uvunwrap.html)

[volume](volume.html)

[wireblinn](wireblinn.html)

[wirediffuse](wirediffuse.html)

|
texture

[colormap](colormap.html)

[environment](environment.html)

[expand_udim](expand_udim.html)

[has_udim](has_udim.html)

[photonmap](photonmap.html)

[rawcolormap](rawcolormap.html)

[texprintf](texprintf.html)

[uvdist](uvdist.html)
