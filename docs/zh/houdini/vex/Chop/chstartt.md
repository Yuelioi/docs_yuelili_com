---
title: chstartt
order: 28
category:
  - houdini
---
    
## 描述

Returns the time corresponding to the first sample of the input  
specified.

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

```c
float  chstartt()
```

Uses `-1` as the `opinput`.

使用-1 作为输入。

```c
float  chstartt(int opinput)
```

Returns the time (in seconds) corresponding to the first sample of the given
CHOP input.

返回与给定的 CHOP 输入的第一个样本对应的时间（以秒为单位）。

To get the start sample number, use [chstart](chstart.html) "Returns the start
sample of the input specified."). To get the start sample frame number, use
[chstartf](chstartf.html) "Returns the frame corresponding to the first sample
of the inputspecified.").

要获得起始样本数，使用 echstart。要获得起始样本帧的编号，使用 echstartf。
