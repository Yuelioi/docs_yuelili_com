---
title: shadowmap
order: 11
category:
  - vex
---

`float|vector shadowmap(string filename, vector Pndc, float spread, float bias, float quality, ...)`

`float|vector shadowmap(string filename, vector Pndc, float spread, float bias, float quality, ...)`

`vector shadowmap(string filename, vector Pndc1, vector Pndc2, vector Pndc3, vector Pndc4, float spread, float bias, float quality, ...)`

允许你指定你自己的采样矩形。如果你不希望对阴影贴图进行任何过滤，或者你无法计算自己的导数，你可以直接传入相同的矢量，重复 4 次，不进行过滤。

阴影贴图 "函数将处理阴影贴图，就像图像从光源渲染一样。你可以用它来访问深度图和深度阴影图。在这两种情况下，它都会返回一个向量，其中每个颜色分量都有光源对该颜色点的可见度。

## Arguments

`filename`

通往阴影或深度图的路径。

`Pndc`

被遮挡的点在光线投影的 NDC 空间中的位置。

`spread`

对阴影的软度控制。

`bias`

控制深度样本需要多精确。

`quality`

增加/减少采样的一般控制，其中`1`是默认质量。

## Returns

到达取样点的光照量的分数。例如，如果该点完全处于阴影中，返回值将是 0，如果它完全被照亮，返回值将是 1。

shadowmap()VEX 函数接受与 texture()相同的变量参数。有关其他信息，请参见 [texture](texture.html) （"计算指定的纹理贴图的过滤样本。"）。

## 深度摄像地图通道

[¶](#deep-camera-map-channels)

如果阴影贴图是一个[Deep camera map](.../.../render/dcm.html)，`shadowmap`需要一个可选的额外参数`"channel"`，后面是地图评估中的通道的字符串名称。

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
