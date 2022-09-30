---
title: chopt
order: 15
category:
  - houdini
---
    
## 描述

Returns the value of a CHOP channel at the specified sample and evaluation
time.

| Since | 17.0 |
| ----- | ---- |

`float chopt(string filename, int|stringchannel, float|intsample, float time)`

`vector2 chopt(string filename, int|stringchannel, float|intsample, float time)`

`vector chopt(string filename, int|stringchannel, float|intsample, float time)`

`vector4 chopt(string filename, int|stringchannel, float|intsample, float time)`

`matrix chopt(string filename, int|stringchannel, float|intsample, float time)`

Read a sample from the channel at the given index.

从给定索引的通道上读取一个样本。

`filename`

The CHOP node path to query using the op: syntax.Doesn‘t support reading
directly from CHOP files yet.

使用 op: 语法查询的 CHOP 节点路径。

`channel`

The channel index or channel name to query.

还不支持直接从 CHOP 文件中读取。

`sample`

If this is fractional, the value is linearly interpolated from thetwo nearest
points.

要查询的通道索引或通道名称。

`time`

Time in seconds when the CHOP node needs to be evaluated.

如果是小数，值是由两个最近的点线性插值而成的。

Returns

The value of a channel at the specified sample in a CHOP node.

两个最近的点。
