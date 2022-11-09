---
title: filter_remap
order: 2
category:
  - vex
---

Since

18.5

`vector filter_remap(vector2 uv, string filter, float width, ...)`

This function maps a uv coordinate to a pixel offset based on the importance
sampling of the filter.

## Arguments

`uv`

Components should be in the range `0` to `1`. The function remaps these coordinates into a point in the filter’s kernel, mapping more points to areas with higher weights. The returned points will be in a box of given width centered around `0`.

`filter`

The type of filter to use.

`"gauss"`

Gaussian filter

`"box"`

Box filter

`"sinc"`

Sinc filter

`"mitchell"`

Mitchell filter

`"bartlett"`

Bartlett filter (Cone filter)

`"blackman"`

Blackman filter

`"catrom"`

Catmull-Rom filter

`"hanning"`

Hanning filter

`"point"`

Point filter

`width`

The filter width.

A unit box filter will map the input values to the range `-0.5` to `0.5`. Changing the `width` to `2.0` will result in returned values in the range `-1.0 to 1.0`.
For a Gaussian filter, for example, a `width` of `2.0` is more appropriate.

"`res`",
`int`
`=32`

When building lookup tables for importance sampling, the filter is sampled radially at this resolution.

## Returns

The returned vector’s `x` and `y` components are the given uv coordinate remapped to pixel coordinates (centered around zero). The `z` component is the approximate weight of the kernel at the returned sample.

::: info Note that some filters (`"sinc"`, `"mitchell"`, `"catrom"`), have negative weights in some areas. When importance sampling, you cannot use negative values, so you should use the absolute value of the weight (using [abs](abs.html) ("Returns the absolute value of the argument.")). However, some applications need to know whether the returned sample had a negative weight.

## See also

- [importance_remap](importance_remap.html)

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
