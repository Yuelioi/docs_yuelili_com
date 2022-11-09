---
title: importance_remap
order: 7
category:
  - vex
---

自 18.5 以来

`vector2 importance_remap(string map, vector2 uv, ...)`

这个函数根据纹理的重要性取样，将纹理坐标重新映射为新的纹理坐标。

## Arguments

`map`

用来指导重采样的纹理贴图的文件名。

`uv`

组件应该在`0`到`1`的范围内。该函数重新映射这些坐标，使输入文本中更 "重要 "的区域（即更亮的区域）得到更多的样本。

`int`
`=0`

"`maxres'", 在为重要性采样建立查找表时，该函数对纹理进行重新采样以加快评估。这个参数限制了重新采样的地图的分辨率。根据用途的不同，重要性采样表的分辨率通常可以比源图像小得多，而且没有可察觉的损失。

0 "的值（默认值）只是使用原始纹理尺寸。

::: info Note

限制查找表的大小是个好主意，因为你通常不需要太多的分辨率来进行重要性采样，而一个大的纹理会产生一个巨大的 LUT。

## Returns

重置的纹理坐标。

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
