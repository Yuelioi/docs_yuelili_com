---
title: chstartf
order: 27
category:
  - houdini
---
    
## 描述

Returns the frame corresponding to the first sample of the input  
specified.

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

```c
float  chstartf()
```

Uses `-1` as the `opinput`.

使用-1 作为输入。

```c
float  chstartf(int opinput)
```

Returns the frame corresponding to the first sample of the given CHOP input.

返回对应于给定 CHOP 输入的第一个样本的帧。

To get the first sample number, use [chstart](chstart.html) "Returns the start
sample of the input specified."). To get the start time in seconds, use
[chstartt](chstartt.html) "Returns the time corresponding to the first sample
of the inputspecified.").

要获得第一个样本的编号，使用 echstart。要获得以秒为单位的开始时间，使用 echstartt。
