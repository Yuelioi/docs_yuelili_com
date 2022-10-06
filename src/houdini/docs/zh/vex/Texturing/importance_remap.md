---
title: importance_remap
order: 6
category:
  - houdini
---
    
## 描述

Remaps a texture coordinate to another coordinate in the map to optimize
sampling of brighter areas.

| Since | 18.5 |
| ----- | ---- |

```c
vector2  importance_remap(string map, vector2 uv, ...)
```

This function remaps texture coordinates to new texture coordinates based on
importance sampling of the texture.

此函数根据纹理的重要性取样，将纹理坐标重新映射为新的纹理坐标。

`map`

The filename of the texture map to use to guide resampling.

用来指导重采样的纹理贴图的文件名。

`uv`

Components should be in the range `0` to `1`. The function remaps these
coordinates so more “important” areas of the input text (that is, brighter
areas) get more samples.

组件应该在 0 到 1 的范围内。该函数重新映射这些坐标，使输入文本中更 "重要 "的区域（也就是更亮的区域）得到更多的样本。

"`maxres`",` int``=0 `

While building lookup tables for importance sampling, the function resamples
the texture for faster evaluation. This argument clamps the resolution of the
resampled map. Depending on the use, importance sample tables can often be
significantly smaller resolution than the source image with no perceptible
loss.

在为重要性取样建立查找表时，该函数对纹理进行重新取样以加快评估。这个参数限制了重新采样的地图的分辨率。根据不同的用途，重要性采样表通常可以比源图像的分辨率小得多，而且没有可察觉的损失。

A value of `0` (the default) just uses the original texture size.

默认值为 0，则使用原始纹理尺寸。

Note

It‘sa good idea to limit the lookup table size, since you typically don‘t
need much resolution for importance sampling, and a large texture can generate
a huge LUT.

限制查找表的大小是个好主意，因为你通常不需要重要性采样的分辨率，而一个大的纹理可以产生一个巨大的 LUT。

Returns

The remapped texture coordinates.

重置的纹理坐标。
