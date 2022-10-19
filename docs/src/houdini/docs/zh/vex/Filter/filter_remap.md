---
title: filter_remap
order: 2
category:
  - vex
---

自 18.5 以来

`vector filter\_remap(vector2 uv, string filter, float width, ...)`

这个函数根据滤波器的重要性采样，将一个 uv 坐标映射到一个像素偏移。

## Arguments

`uv`

组件应该在`0`到`1`的范围内。该函数将这些坐标重新映射为滤波器内核中的一个点，将更多的点映射为具有更高权重的区域。返回的点将在一个以`0`为中心的给定宽度的盒子里。

`filter`

要使用的过滤器的类型。

`"gauss"`

高斯滤波器

`"box"`

箱式过滤器

`"sinc"`

Sinc 过滤器

`"mitchell"`

米切尔过滤器

`"bartlett"`

巴特利特过滤器（锥形过滤器）

`"blackman"`

布莱克曼过滤器

`"catrom"`

Catmull-Rom 过滤器

`"hanning"`

汉宁滤波器

`"point"`

点式过滤器

`width`

滤波器的宽度。

一个单位盒子过滤器将把输入值映射到`-0.5`到`0.5`的范围。将 "宽度 "改为 "2.0 "会导致返回的值在 "1.0 到 1.0 "的范围内。例如，对于高斯滤波器来说，"宽度 "为`2.0'是比较合适的。

`int`
`=32`

"`res'", 当建立重要性采样的查找表时，过滤器是以这个分辨率进行径向采样的。

## Returns

返回的向量的`x'和`y'分量是给定的 uv 坐标重新转换为像素坐标（以 0 为中心）。`z`分量是返回样本的内核的近似权重。

::: info Note that some filters (`"sinc"`, `"mitchell"`, `"catrom"`), have negative weights in some areas. When importance sampling, you cannot use negative values, so you should use the absolute value of the weight (using [abs](abs.html) () ("Returns the absolute value of the argument.")). However, some applications need to know whether the returned sample had a negative weight.

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
