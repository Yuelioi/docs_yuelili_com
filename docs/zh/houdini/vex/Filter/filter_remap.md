---
title: filter_remap
order: 1
category:
  - houdini
---
    
## 描述

Computes an importance sample based on the given filter type and input uv.

| Since | 18.5 |
| ----- | ---- |

```c
vector  filter_remap(vector2 uv, string filter, float width, ...)
```

This function maps a uv coordinate to a pixel offset based on the
importancesampling of the filter.

这个函数将一个 uv 坐标映射到一个像素偏移，基于滤波器的重要性

`uv`

Components should be in the range `0` to `1`. The function remaps these
coordinates into a point in the filter‘skernel, mapping more points to
areas with higher weights. The returned points will be in a box of given width
centered around `0`.

滤波器的取样。

`filter`

The type of filter to use.

组件应该在 0 到 1 的范围内。该函数将这些坐标重新映射为滤波器内核中的一个点，将更多的点映射为具有更高权重的区域。返回的点将在一个以 0 为中心的给定宽度的盒子里。

`"gauss"`

Gaussian filter

要使用的滤波器类型。

`"box"`

Box filter

高斯滤波器

`"sinc"`

Sinc filter

箱形滤波器

`"mitchell"`

Mitchell filter

Sinc 滤波器

`"bartlett"`

Bartlett filter (Cone filter)

米切尔滤波器

`"blackman"`

Blackman filter

巴特利特过滤器（圆锥过滤器）

`"catrom"`

Catmull-Rom filter

布莱克曼过滤器

`"hanning"`

Hanning filter

卡特穆尔-罗姆过滤器

`"point"`

Point filter

汉宁过滤器

`width`

The filter width.

点式过滤器

A unit box filter will map the input values to the range `-0.5` to
`0.5`.Changing the `width` to `2.0` will result in returned values in the
range `-1.0 to 1.0`.For a Gaussian filter, for example, a `width` of `2.0` is
more appropriate.

滤波器的宽度。

"`res`",` int``=32 `

When building lookup tables for importance sampling, the filter is sampled
radially at this resolution.

一个单位盒式滤波器会将输入值映射到 0.5 到 0.5 的范围内。 将 width 改为 2.0 会导致返回的值在 1.0 到 1.0 之间。

Returns

The returned vector‘s`x` and `y` components are the given uv coordinate
remapped to pixel coordinates (centered around zero). The `z` component is the
approximate weight of the kernel at the returned sample.

例如，对于高斯滤波器来说，2.0 的宽度是比较合适的。

Note that some filters (`"sinc"`, `"mitchell"`, `"catrom"`), have negative
weights in some areas. When importance sampling, you cannot use negative
values, so you should use the absolute value of the weight (using
[abs](abs.html) "Returns the absolute value of the argument.")). However, some
applications need to know whether the returned sample had a negative weight.

当建立重要性采样的查找表时，滤波器是以这个分辨率进行径向采样的。
