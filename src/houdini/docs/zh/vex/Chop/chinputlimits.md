---
title: chinputlimits
order: 9
category:
  - houdini
---
    
## 描述

Computes the minimum and maximum value of samples in an input channel.

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

`int chinputlimits(int opinput, int channel, float &channel_min, float &channel_max)`

`opinput`

CHOP Input index or -1 if omitted.

CHOP 输入索引，如果省略则为-1。

`channel`

When reading a `channel` or `channelsample` attribute, this is the index of
the channel.If you are reading a `clip` or `sample` attribute, use `-1` here.

当读取 achannelorchannelsampleattribute 时，这里是通道的索引。

`channel_min`

Computed minimum channel value;

如果你正在读取 acliporsampleattribute，这里使用-1。

`channel_max`

Computed maximum channel value;

计算出的最小通道值。

Returns

Returns 1 on success or 0 on failure.

计算出的最大通道值。
