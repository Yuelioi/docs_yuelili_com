---
title: chend
order: 4
category:
  - houdini
---
    
## 描述

Returns the sample number of the last sample in a given CHOP input.

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

```c
int  chend(int opinput=0)
```

Returns the index of the last sample in the channel data in the given CHOP
input.

返回给定 CHOP 输入中通道数据的最后一个样本的索引。

To get the end frame, use [chendf](chendf.html "Returns the frame
corresponding to the last sample of the input specified."). To get the end
time in seconds, use [chendt](chendt.html "Returns the time corresponding to
the last sample of the inputspecified.").

要获得结束帧，使用 echendf。要获得以秒为单位的结束时间，使用 echendt。
