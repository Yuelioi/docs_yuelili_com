---
title: chendt
order: 6
category:
  - houdini
---
    
## 描述

Returns the time corresponding to the last sample of the input  
specified.

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

```c
float  chendt(int opinput=0)
```

Returns the time (in seconds) corresponding to the last sample in the given
CHOP input.

返回与给定的 CHOP 输入中最后一个样本对应的时间（以秒为单位）。

To get the end sample number, use [chend](chend.html "Returns the sample
number of the last sample in a given CHOP input."). To get the end frame, use
[chendf](chendf.html "Returns the frame corresponding to the last sample of
the input specified.").

要获得最后的样本数，使用 echend。要获得结束帧，使用 echendf。
