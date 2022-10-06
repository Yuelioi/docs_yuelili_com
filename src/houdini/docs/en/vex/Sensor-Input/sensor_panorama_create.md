---
title: sensor_panorama_create
order: 2
category:
  - houdini
---

## Description

`int sensor_panorama_create(float time, vector pos, int size, float near, float far, string candidateobj, string includeobj, string excludeobj, int uselit)`

This function will render the surrounding environment using the GL render and
provides a handle to use for querying the results.

::: info Note
Because this needs to render the scene, it only works in interactive sessions
of Houdini.
:::

## Arguments

`time`

The period in time when the render should be performed.

`pos`

The location in world space coordinates where the render should be performed.

`size`

The resolution of the performed render.

`near`

The near plane restriction.

`far`

The far plane restriction.

`candidateobj`

A bundle, group, or expression that represents what objects will be displayed
if their display setting is enabled.

`includeobj`

A bundle, group, or expression that represents what objects will always be
displayed.

`excludeobj`

A bundle, group, or expression that represents what objects will never be
displayed.

`uselit`

Usually for AI purposes you want to not have any lighting as you are using
color as a key to differentiate actors. However, if you want to display what a
creature sees, lighting makes things more visually accurate.

### file

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

### map

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

### photon

[photonmap](photonmap.html)

[sensor_panorama_create](sensor_panorama_create.html)
