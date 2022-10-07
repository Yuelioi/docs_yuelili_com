---
title: importance_remap
order: 7
category:
  - vex
---



Since 18.5

`vector2 importance\_remap(string map, vector2 uv, ...)`

This function remaps texture coordinates to new texture coordinates based on importance sampling of the texture.

## Arguments

`map`

The filename of the texture map to use to guide resampling.

`uv`

Components should be in the range `0` to `1`. The function remaps these coordinates so more “important” areas of the input text (that is, brighter areas) get more samples.

"`maxres`",
`int`
`=0`

While building lookup tables for importance sampling, the function resamples the texture for faster evaluation. This argument clamps the resolution of the resampled map. Depending on the use, importance sample tables can often be significantly smaller resolution than the source image with no perceptible loss.

A value of `0` (the default) just uses the original texture size.

::: info Note

It’s a good idea to limit the lookup table size, since you typically don’t need much resolution for importance sampling, and a large texture can generate a huge LUT.

## Returns

The remapped texture coordinates.



## See also

- [texture](texture.html)
- [filter_remap](filter_remap.html)

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
