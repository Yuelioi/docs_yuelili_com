---
title: ninput
order: 31
category:
  - vex
---

[cop](../contexts/cop.html)

`matrix3 ninput(int opinput, int plane, int component, int array\_index, int u, int v, int frame, ...)`

`matrix3 ninput(int opinput, int plane, int component, int array\_index, float u, float v, int frame, ...)`

::: info Note that this function only reads one component (for example, red, green, or blue) at a time.
Context(s) 读取目标像素及其八个邻居的给定分量，并以 3×3 矩阵的形式返回。为了对全色进行采样，你需要在`component`设置为 0、1、2 的情况下调用该函数三次。

## Arguments

`opinput`

要读取的输入号码，从 0 开始。例如，第一个输入是 0，第二个输入是 1，以此类推。

`plane`

要读取的飞机的索引。

`component`

要读取的组件的索引。例如，在 RGB 平面中，0 是红色，1 是绿色，2 是蓝色。

`array_index`

当飞机有数组值时使用。一般来说，在这里传递`0'即可。

`u`, `v`

如果你给了浮点 UV，数值会被解释为单位（0-1）值。例如，`0.5, 0.5`就是图像的中心。如果你给的是整数 UV，值是像素，范围是`0,0`到`XRES-1, YRES-1`。

## See also

- [binput](binput.html)
- [cinput](cinput.html)
- [finput](finput.html)

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
