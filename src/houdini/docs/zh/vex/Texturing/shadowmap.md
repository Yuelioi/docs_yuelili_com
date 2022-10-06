---
title: shadowmap
order: 10
category:
  - houdini
---
    
## 描述

The shadowmap function will treat the shadow map as if the image were  
rendered from a light source.

`float|vector shadowmap(string filename, vector Pndc, float spread, float bias, float quality, ...)`

`float|vector shadowmap(string filename, vector Pndc, float spread, float bias, float quality, ...)`

`vector shadowmap(string filename, vector Pndc1, vector Pndc2, vector Pndc3, vector Pndc4, float spread, float bias, float quality, ...)`

Allows you to specify your own sampling rectangle. If you don‘t want any
filtering of the shadow map or you are unable to compute your own derivatives,
you can just pass in the same vector repeated 4 times to perform no filtering.

允许你指定你自己的采样矩形。如果你不希望对阴影图进行任何过滤，或者你无法计算你自己的导数，你可以直接传入相同的矢量，重复 4 次，不进行过滤。

The `shadowmap` function will treat the shadow map as if the image
wererendered from a light source. You use this to access both depth maps
anddeep shadow maps. In both cases it returns a vector where each
colorcomponent has the visibility of the light source to the point for
thatcolor.

阴影贴图函数将把阴影贴图当作图像是由光源渲染的。

`filename`

A path to the shadow or depth map.

渲染的图像。你可以用它来访问深度图和

`Pndc`

The position of the point being shaded in the NDC space of the light‘s
projection.

深度阴影贴图。在这两种情况下，它都会返回一个向量，其中每个颜色

`spread`

A softness control on the shadow.

分量都有光源对该点的可见度。

`bias`

Controls how accurate the depth samples need to be.

颜色。

`quality`

A general control to increase/decrease sampling, where `1` is default quality.

通往阴影或深度图的路径。

Returns

The fractional amount of illumination whichreaches the sample point. For
example, if the point is fully inshadow, the return value will be 0, if it is
fully illuminated, thereturn value will be 1.

被阴影的点在光线投影的 NDC 空间中的位置。

## 描述

For additional information, see [texture](texture.html "Computes a filtered
sample of the texture map specified.").

阴影的柔和度控制。

## Deep camera map channels

If the shadow map is a [Deep camera map](../../render/dcm.html),`shadowmap`
takes an optional extra argument `"channel"`, followed by thestring name of
the channel in the map evaluate.

控制深度样本的精确程度。

    shadowmap(mapname, pz, spread, bias, quality, "channel", channel);

This uses the same opacity semantics, so the function will return
thecomplement of the actual color. So, to get accurate results, you
willusually want to evaluate:

增加/减少采样的一般控制，其中 1 是默认质量。

    {1,1,1} - shadowmap(...);
