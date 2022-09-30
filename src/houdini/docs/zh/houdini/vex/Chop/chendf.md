---
title: chendf
order: 5
category:
  - houdini
---
    
## 描述

Returns the frame corresponding to the last sample of the input specified.

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

```c
float  chendf(int opinput=0)
```

Returns the frame number corresponding to the last sample of the given CHOP
input.

返回对应于给定 CHOP 输入的最后一个样本的帧号。

To get the end sample number, use [chend](chend.html) "Returns the sample
number of the last sample in a given CHOP input."). To get the end time in
seconds, use [chendt](chendt.html) "Returns the time corresponding to the last
sample of the inputspecified.").

要获得最后的样本数，使用 echend。要获得结束时间（秒），使用 echendt。
