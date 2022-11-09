---
title: sensor_panorama_create
order: 2
category:
  - vex
---

`int sensor_panorama_create(float time, vector pos, int size, float near, float far, string candidateobj, string includeobj, string excludeobj, int uselit)`

这个函数将使用 GL 渲染器渲染周围的环境，并提供一个用于查询结果的句柄。

::: info Note

因为这需要渲染场景，所以它只能在胡迪尼的交互式会话中工作。

## Arguments

`time`

应该进行渲染的时间段。

`pos`

在世界空间坐标中应该进行渲染的位置。

`size`

所执行的渲染的分辨率。

`near`

近平面的限制。

`far`

远平面的限制。

`candidateobj`

一个包、组或表达式，表示如果其显示设置被启用，哪些对象将被显示。

`includeobj`

一个包、组或表达式，代表哪些对象将永远被显示。

`excludeobj`

一个包、组或表达式，表示哪些对象将永远不会被显示。

`uselit`

通常情况下，出于人工智能的目的，你希望不要有任何照明，因为你是用颜色作为区分演员的关键。然而，如果你想显示一个生物看到的东西，照明会使事情在视觉上更加准确。

文件

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

| 地图

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

| 光子

[photonmap](photonmap.html)

[sensor_panorama_create](sensor_panorama_create.html)
