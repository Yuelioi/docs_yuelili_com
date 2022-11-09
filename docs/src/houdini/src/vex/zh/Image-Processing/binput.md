---
title: binput
order: 4
category:
  - vex
---

[cop](../contexts/cop.html)

`vector binput(int u, int v, ...)`

`vector4 binput(int u, int v, ...)`

`vector binput(float u, float v, ...)`

`vector4 binput(float u, float v, ...)`

背景(s) 在当前帧的输入 0 上从当前烹饪平面取样。

`float binput(int comp, int u, int v, ...)`

`float binput(int comp, float u, float v, ...)`

在当前帧的输入 0 上从当前烹饪平面的给定分量索引中抽取一个分量。

`vector binput(int opinput, int plane, int u, int v, ...)`

`vector4 binput(int opinput, int plane, int u, int v, ...)`

`vector binput(int opinput, int plane, float u, float v, ...)`

`vector4 binput(int opinput, int plane, float u, float v, ...)`

在当前帧从给定的输入/平面取样。

`float binput(int opinput, int plane, int comp, int u, int v, ...)`

`float binput(int opinput, int plane, int comp, float u, float v, ...)`

在当前帧从给定的输入/平面/组件中抽取一个组件。

`float binput(int opinput, int plane, int array_index, int comp, int u, int v, int frame, ...)`

`float binput(int opinput, int plane, int array_index, int comp, float u, float v, int frame, ...)`

在给定的帧上从给定的输入/平面/组件中抽取一个组件。

`vector binput(int opinput, int plane, int array_index, int u, int v, int frame, ...)`

`vector4 binput(int opinput, int plane, int array_index, int u, int v, int frame, ...)`

`vector binput(int opinput, int plane, int array_index, float u, float v, int frame, ...)`

`vector4 binput(int opinput, int plane, int array_index, float u, float v, int frame, ...)`

在给定的帧上从给定的输入/平面/组件中取样。

## Arguments

`opinput`

读取像素的输入号码。不指定这个的版本总是使用第一个输入（0）。

`plane`

输入中的平面的索引。不指定这个的版本总是使用当前烹饪的平面。

`array_index`

当飞机有数组值时使用。一般来说，在这里传递`0'即可。

`comp`

平面内一个分量的索引。例如，在 RGB 平面中，0 代表红色，1 代表绿色，2 代表蓝色。返回向量的版本不接受这个参数，而是一次性返回所有分量。

`u`, `v`

如果你给了浮点 UV，数值会被解释为单位（0-1）值。例如，`0.5, 0.5`就是图像的中心。如果你给的是整数 UV，值是像素，范围是`0,0`到`XRES-1, YRES-1`。

`frame`

采样的帧号。不指定这个的版本总是使用当前的帧。

## Returns

一个浮点数、向量或向量 4 的值。如果通道不存在，则返回 0。只要有可能，就使用矢量版本，而不是单独读取单个组件。

更多信息请参见[COP 像素采样函数](.../cop_sample_suite.html)。

## See also

- [COP pixel sampling functions](../cop_sample_suite.html)
- [cinput](cinput.html)
- [finput](finput.html)
- [ninput](ninput.html)

|
cop

[binput](binput.html)

[cinput](cinput.html)

[finput](finput.html)

[hasmetadata](hasmetadata.html)

[metadata](metadata.html)

[ninput](ninput.html)

|
pixel

[binput](binput.html)

[cinput](cinput.html)

[finput](finput.html)

[ninput](ninput.html)

|
sample

[binput](binput.html)

[cinput](cinput.html)

[finput](finput.html)

[ninput](ninput.html)
