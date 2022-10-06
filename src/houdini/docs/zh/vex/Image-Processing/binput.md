---
title: binput
order: 3
category:
  - houdini
---
    
## 描述

Samples a 2Ã2 pixel block around the given UV position, and bilinearly
interpolates these pixels.

| Context(s) | [cop](../contexts/cop.html) |
| ---------- | --------------------------- |

```c
vector  binput(int u, int v, ...)
```

```c
vector4  binput(int u, int v, ...)
```

```c
vector  binput(float u, float v, ...)
```

```c
vector4  binput(float u, float v, ...)
```

Sample from the currently cooking plane on input 0 at the current frame.

在当前帧的输入 0 上对当前烹饪平面进行采样。

```c
float  binput(int comp, int u, int v, ...)
```

```c
float  binput(int comp, float u, float v, ...)
```

Sample one component from the given component index of the currently cooking
plane on input 0 at the current frame.

在当前帧的输入 0 上，从当前烹饪平面的给定分量索引中抽取一个分量。

```c
vector  binput(int opinput, int plane, int u, int v, ...)
```

```c
vector4  binput(int opinput, int plane, int u, int v, ...)
```

```c
vector  binput(int opinput, int plane, float u, float v, ...)
```

```c
vector4  binput(int opinput, int plane, float u, float v, ...)
```

Sample from the given input/plane at the current frame.

从当前帧的给定输入/平面中取样。

```c
float  binput(int opinput, int plane, int comp, int u, int v, ...)
```

```c
float  binput(int opinput, int plane, int comp, float u, float v, ...)
```

Sample one component from the given input/plane/component at the current
frame.

在当前帧从给定的输入/平面/分量中取样一个分量。

`float binput(int opinput, int plane, int array_index, int comp, int u, int v, int frame, ...)`

`float binput(int opinput, int plane, int array_index, int comp, float u, float v, int frame, ...)`

Sample one component from the given input/plane/component at the given frame.

在给定的帧中从给定的输入/平面/分量中取样一个分量。

`vector binput(int opinput, int plane, int array_index, int u, int v, int frame, ...)`

`vector4 binput(int opinput, int plane, int array_index, int u, int v, int frame, ...)`

`vector binput(int opinput, int plane, int array_index, float u, float v, int frame, ...)`

`vector4 binput(int opinput, int plane, int array_index, float u, float v, int frame, ...)`

Sample from the given input/plane/component at the given frame.

从给定帧的输入/平面/分量中取样。

`opinput`

The input number to read the pixels from. Versions that don‘t specify this
always use the first input (0).

读取像素的输入号码。不指定这个的版本总是使用第一个输入（0）。

`plane`

The index of a plane in the input.Versions that don‘t specify this always
use the currently cooking plane.

输入平面的索引。

`array_index`

For use if the plane has array values. Generally, just pass `0` here.

不指定这个的版本总是使用当前烹饪的平面。

`comp`

The index of a component within the plane. For example, 0 for red, 1 for
green, 2 for blue in an RGB plane.The versions that return vectors do not take
this argument and return all components at once.

当平面有数组值时使用。一般情况下，只需传递 0here。

`u`, `v`

If you give floating point UVs, the values are interpreted as unit (0-1)
values. For example, `0.5, 0.5` would be the center of the image.If you give
integer UVs, the values are in pixels, ranging from `0,0` to

```c
XRES-1, YRES-1
```

.

平面中的一个组件的索引。例如，在 RGB 平面中，0 代表红色，1 代表绿色，2 代表蓝色。

`frame`

Frame number to sample at.Versions that don‘t specify this always use the
current frame.

返回向量的版本不接受这个参数，而是一次性返回所有分量。

Returns

A float, vector or vector4 value. If the channel does not exist, returns
0.Whenever possible, use the vector versions rather than reading individual
components separately.

如果你给了浮点 UV，这些值会被解释为单位（0-1）值。例如，0.5，0.5 将是图像的中心。

See [COP pixel sampling functions](../cop_sample_suite.html) for more
information.

如果你给出的是整数的 UV，那么数值就是像素，范围从 0,0 到 XRES-1, YRES-1。
