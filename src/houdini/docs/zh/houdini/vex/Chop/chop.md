---
title: chop
order: 12
category:
  - houdini
---
    
## 描述

Returns the value of a CHOP channel at the specified sample.

| Since | 17.0 |
| ----- | ---- |

```c
float  chop(string filename, int|stringchannel, float|intsample)
```

```c
vector2  chop(string filename, int|stringchannel, float|intsample)
```

```c
vector  chop(string filename, int|stringchannel, float|intsample)
```

```c
vector4  chop(string filename, int|stringchannel, float|intsample)
```

```c
matrix  chop(string filename, int|stringchannel, float|intsample)
```

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

Returns

The value of a channel at the specified sample in a CHOP node.

如果是小数，值是由两个最近的点线性插值而成的。