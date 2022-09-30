---
title: chinput
order: 8
category:
  - houdini
---
    
## 描述

Returns the value of a channel at the specified sample.

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

```c
<type> chinput(int channel_index, float|intsample)
```

```c
<type> chinput(int opinput, int channel_index, float|intsample)
```

Read a sample from the channel at the given index.The version without
`opinput` assumes the first input (0).

从给定索引的通道上读取一个样本。

```c
<type> chinput(string channel_name, float|intsample)
```

```c
<type> chinput(int opinput, string channel_name, float|intsample)
```

Read a sample from the channel with the given name.The version without
`opinput` assumes the first input (0).

没有 opinput 的版本假定是第一个输入（0）。

`int chinput(int channel_index, float|intsample, vector &t, vector &r, vector &s)`

`int chinput(int opinput, int channel_index, float|intsample, vector &t, vector &r, vector &s)`

Read samples from the 9 channels starting at the given index.The samples are
returned in the 3 vector output arguments.Returns 1 on success or 0 on
failure.The version without `opinput` assumes the first input (0).

从给定名称的通道上读取一个样本。

`int chinput(string channel_name, float|intsample, vector &t, vector &r, vector &s)`

`int chinput(int opinput, string channel_name, float|intsample, vector &t, vector &r, vector &s)`

Read samples from the 9 channels starting at the given channel name.The
samples are returned in the 3 vector output arguments.Returns 1 on success or
0 on failure.The version without `opinput` assumes the first input (0).

没有 opinput 的版本假定是第一个输入(0)。

`opinput`

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

从给定索引开始的 9 个通道中读取样本。

`sample`

If this is fractional, the value is linearly interpolated from thetwo nearest
points.

这些样本将在 3 个矢量输出参数中返回。

Returns

The value of a channel at the specified sample in an input.

成功时返回 1，失败时返回 0。
