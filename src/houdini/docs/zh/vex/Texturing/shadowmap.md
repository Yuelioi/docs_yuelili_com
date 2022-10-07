---
title: shadowmap
order: 11
category:
  - vex
---

`float|vector shadowmap(string filename, vector Pndc, float spread, float bias, float quality, ...)`

`float|vector shadowmap(string filename, vector Pndc, float spread, float bias, float quality, ...)`

`vector shadowmap(string filename, vector Pndc1, vector Pndc2, vector Pndc3, vector Pndc4, float spread, float bias, float quality, ...)`

Allows you to specify your own sampling rectangle. If you don’t want any filtering of the shadow map or you are unable to compute your own derivatives, you can just pass in the same vector repeated 4 times to perform no filtering.

The `shadowmap` function will treat the shadow map as if the image were
rendered from a light source. You use this to access both depth maps and
deep shadow maps. In both cases it returns a vector where each color
component has the visibility of the light source to the point for that
color.

## Arguments

`filename`

A path to the shadow or depth map.

`Pndc`

The position of the point being shaded in the NDC space of the light’s projection.

`spread`

A softness control on the shadow.

`bias`

Controls how accurate the depth samples need to be.

`quality`

A general control to increase/decrease sampling, where `1` is default quality.

## Returns

The fractional amount of illumination which
reaches the sample point. For example, if the point is fully in
shadow, the return value will be 0, if it is fully illuminated, the
return value will be 1.

The shadowmap() VEX function takes the same variadic arguments as texture(). For additional information, see [texture](texture.html "Computes a filtered sample of the texture map specified.").

##

Deep camera map channels

[¶](#deep-camera-map-channels)

If the shadow map is a [Deep camera map](../../render/dcm.html),
`shadowmap` takes an optional extra argument `"channel"`, followed by the
string name of the channel in the map evaluate.

```c
shadowmap(mapname, pz, spread, bias, quality, "channel", channel);

```

This uses the same opacity semantics, so the function will return the
complement of the actual color. So, to get accurate results, you will
usually want to evaluate:

```c
{1,1,1} - shadowmap(...);

```



## See also

- [depthmap](depthmap.html)

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
shadow

[dsmpixel](dsmpixel.html)

[fastshadow](fastshadow.html)

[filtershadow](filtershadow.html)

[islpeactive](islpeactive.html)

[isshadowray](isshadowray.html)

[limport](limport.html)

[shadowmap](shadowmap.html)
