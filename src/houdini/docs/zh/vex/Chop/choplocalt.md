---
title: choplocalt
order: 14
category:
  - houdini
---
    
## 描述

Returns the value of a CHOP local transform channel at the specified sample
and evaluation time.

| Since | 17.5 |
| ----- | ---- |

`matrix choplocalt(string filename, int|stringchannel, float|intsample, float time)`

Read a sample from the local transform channel at the given index.

在给定的索引处从本地转换通道中读取一个样本。

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

如果是小数，值是由最近的两个点线性插值而成的。

Returns

The value of a channel at the specified sample in a CHOP node.

两个最近的点。
