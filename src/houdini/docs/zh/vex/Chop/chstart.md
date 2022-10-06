---
title: chstart
order: 26
category:
  - houdini
---
    
## 描述

Returns the start sample of the input specified.

| Context(s) | [chop](../contexts/chop.html) |
| ---------- | ----------------------------- |

```c
int  chstart()
```

Uses `-1` as the `opinput`.

使用-1 作为输入。

```c
int  chstart(int opinput)
```

Returns the index of the first sample in the channel data in the given CHOP
input.

返回给定 CHOP 输入中通道数据的第一个样本的索引。

`opinput`

The input number to read from, starting from 0. For example, the first input
is 0, the second input is 1, and so on.

从 0 开始读取的输入编号。例如，第一个输入是 0，第二个输入是 1，以此类推。

If you specify `-1`, the function uses the current CHOP node or input `0` if
it is connected.

如果你指定-1，该函数使用当前的 CHOP 节点或输入 0（如果它被连接）。

To get the start frame, use [chstartf](chstartf.html) "Returns the frame
corresponding to the first sample of the inputspecified."). To get the start
time in seconds, use [chstartt](chstartt.html) "Returns the time corresponding
to the first sample of the inputspecified.").

要获得起始帧，使用 echstartf。要获得以秒为单位的开始时间，使用 echstartt。
